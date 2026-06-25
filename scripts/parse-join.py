#!/usr/bin/env python3
"""Parse iis-lab.org/prospective/ HTML into src/data/join.md"""
import re
import sys
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))
from md_writer import blocks_to_md

INTERNAL = {
    'https://iis-lab.org/': '/',
    'https://iis-lab.org': '/',
    'https://iis-lab.org/publications/': '/publications',
    'https://iis-lab.org/publications': '/publications',
    'https://iis-lab.org/member/koji-yatani/': '/member/koji-yatani',
    'https://iis-lab.org/misc/realitycheck/': '/misc/realitycheck',
}


def normalize_href(url: str) -> str:
    url = h.unescape(url.strip())
    return INTERNAL.get(url, url)


def inline_to_md(s: str) -> str:
    s = re.sub(r'&nbsp;', ' ', s)
    s = re.sub(r'&#8211;', '–', s)
    s = re.sub(r'&#8220;|&#8221;', '"', s)
    s = re.sub(r'&#8217;', "'", s)
    s = re.sub(r'<br\s*/?>', '\n', s, flags=re.I)
    s = re.sub(
        r'<(?:strong|b)>(.*?)</(?:strong|b)>',
        r'**\1**',
        s,
        flags=re.S | re.I,
    )

    def link_repl(mo: re.Match) -> str:
        href = normalize_href(mo.group(1))
        label = re.sub(r'<[^>]+>', '', mo.group(2))
        label = h.unescape(label.strip()) or href
        return f'[{label}]({href})'

    s = re.sub(
        r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
        link_repl,
        s,
        flags=re.S | re.I,
    )
    s = re.sub(r'<span[^>]*>(.*?)</span>', r'\1', s, flags=re.S | re.I)
    s = re.sub(r'<[^>]+>', '', s)
    s = h.unescape(s)
    s = re.sub(r' +', ' ', s).strip()
    return s


def find_ul_end(s: str, start: int) -> int:
    depth = 0
    i = start
    while i < len(s):
        if re.match(r'<ul\b', s[i:], re.I):
            depth += 1
            i += 3
            continue
        if re.match(r'</ul\b', s[i:], re.I):
            depth -= 1
            i += 5
            if depth == 0:
                return i
            continue
        i += 1
    return len(s)


def flatten_children(children: list) -> list:
    flat: list = []
    for child in children:
        text = child.get('text', '').strip()
        nested = child.get('children')
        if not text and nested:
            flat.extend(flatten_children(nested))
            continue
        if nested:
            child = {**child, 'children': flatten_children(nested)}
        flat.append(child)
    return flat


def append_li_item(items: list, text: str, children=None) -> None:
    if children:
        children = flatten_children(children)
    if text.strip():
        item: dict = {'text': text}
        if children:
            item['children'] = children
        items.append(item)
    elif children:
        items.extend(children)


def parse_li_items(ul_html: str) -> list:
    items = []
    pos = 0
    while True:
        li_open = re.search(r'<li\b', ul_html[pos:], re.I)
        if not li_open:
            break
        start = pos + li_open.start()
        content_start = ul_html.find('>', start) + 1
        depth = 1
        i = content_start
        while i < len(ul_html) and depth > 0:
            if re.match(r'<li\b', ul_html[i:], re.I):
                depth += 1
                i += 3
                continue
            if ul_html[i : i + 5].lower() == '</li>':
                depth -= 1
                if depth == 0:
                    li_inner = ul_html[content_start:i]
                    nested_open = re.search(r'<ul\b', li_inner, re.I)
                    if nested_open:
                        ul_pos = nested_open.start()
                        ul_end = find_ul_end(li_inner, ul_pos)
                        main = li_inner[:ul_pos]
                        sub = li_inner[ul_pos:ul_end]
                        text = inline_to_md(main)
                        children = parse_ul(sub)
                        append_li_item(items, text, children)
                    else:
                        items.append({'text': inline_to_md(li_inner)})
                    pos = i + 5
                    break
                i += 5
                continue
            i += 1
        else:
            break
    return items


def parse_ul(ul_html: str) -> list:
    return parse_li_items(ul_html)


def process_fragment(frag: str, blocks: list) -> None:
    while frag.strip():
        ul_m = re.match(r'\s*<ul[^>]*>', frag, re.I)
        if ul_m:
            end = find_ul_end(frag, ul_m.start())
            ul_html = frag[ul_m.start() : end]
            blocks.append({'type': 'list', 'items': parse_ul(ul_html)})
            frag = frag[end:]
            continue
        p_m = re.match(r'\s*<p[^>]*>(.*?)</p>', frag, re.S | re.I)
        if p_m:
            t = inline_to_md(p_m.group(1))
            if t:
                blocks.append({'type': 'p', 'text': t})
            frag = frag[p_m.end() :]
            continue
        frag = re.sub(r'^\s*', '', frag, count=1)
        if frag.startswith('<'):
            next_tag = re.search(r'^<[^>]+>', frag)
            if next_tag:
                frag = frag[next_tag.end() :]
            else:
                break
        else:
            break


def parse_content(content: str) -> list:
    blocks: list = []
    parts = re.split(r'<hr\s*/?>', content)
    for pi, part in enumerate(parts):
        if pi > 0:
            blocks.append({'type': 'hr'})
        if pi == 2 and '<a href="#phd">' in part:
            ul = re.search(r'<ul[^>]*>(.*)</ul>', part, re.S)
            if ul:
                nav_items = []
                for a in re.finditer(
                    r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
                    ul.group(1),
                    re.S,
                ):
                    nav_items.append(
                        {
                            'href': a.group(1),
                            'label': inline_to_md(a.group(2)),
                        }
                    )
                blocks.append({'type': 'nav', 'items': nav_items})
            continue
        chunks = re.split(r'(<h3[^>]*>.*?</h3>)', part, flags=re.S | re.I)
        for chunk in chunks:
            chunk = chunk.strip()
            if not chunk:
                continue
            hm = re.match(r'<h3[^>]*>(.*?)</h3>', chunk, re.S | re.I)
            if hm:
                h3_inner = hm.group(1)
                id_m = re.search(r'id=["\']([^"\']+)["\']', h3_inner)
                title = inline_to_md(re.sub(r'<a[^>]*>|</a>', '', h3_inner))
                block = {'type': 'heading', 'text': title}
                if id_m:
                    block['id'] = id_m.group(1)
                blocks.append(block)
                rest = chunk[hm.end() :].strip()
                if rest:
                    process_fragment(rest, blocks)
            else:
                process_fragment(chunk, blocks)
    return blocks


def main() -> None:
    html_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('/tmp/prospective.html')
    out_path = Path(__file__).resolve().parents[1] / 'src/data/join.md'
    text = html_path.read_text()
    m = re.search(
        r'entry-content clearfix">(.*?)</div>\s*<!-- entry-content',
        text,
        re.S,
    )
    if not m:
        raise SystemExit('entry-content not found')
    content = re.sub(r'<script[^>]*>.*?</script>', '', m.group(1), flags=re.S)
    blocks = parse_content(content)
    out_path.write_text(blocks_to_md(blocks))
    print(f'Wrote {len(blocks)} blocks to {out_path}')


if __name__ == '__main__':
    main()
