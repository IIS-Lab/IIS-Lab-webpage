#!/usr/bin/env python3
"""Parse https://iis-lab.org/misc/realitycheck/ into src/data/realitycheck.md"""
from __future__ import annotations

import html as h
import json
import re
import sys
import urllib.request
from pathlib import Path

import sys
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))
from md_writer import blocks_to_md

ROOT = Path(__file__).resolve().parents[1]
OUT_MD = ROOT / 'src/data/realitycheck.md'
PAGE_URL = 'https://iis-lab.org/misc/realitycheck/'

HEADERS = {
    'User-Agent': (
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    ),
    'Referer': 'https://iis-lab.org/',
}

INTERNAL = {
    'https://iis-lab.org/': '/',
    'https://iis-lab.org': '/',
    'https://iis-lab.org/misc/realitycheck/': '/misc/realitycheck',
}


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode('utf-8', errors='replace')


def normalize_href(url: str) -> str:
    url = h.unescape(url.strip())
    return INTERNAL.get(url, url)


def inline_to_md(s: str) -> str:
    s = re.sub(r'&nbsp;', ' ', s)
    s = re.sub(r'&#8211;|&#8212;', '–', s)
    s = re.sub(r'&#8220;|&#8221;', '"', s)
    s = re.sub(r'&#8217;|&#039;', "'", s)
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
    s = re.sub(r'\n{2,}', '\n', s)
    return s


def normalize_content(content: str) -> str:
    content = re.sub(r'<div class="secedit[^"]*">.*?</form>\s*</div>', '', content, flags=re.S)

    def level2_repl(match: re.Match) -> str:
        inner = match.group(1)
        if re.search(r'<ul\b', inner, re.I):
            return inner
        return f'<p>{inner}</p>'

    content = re.sub(
        r'<div class="level2"[^>]*>(.*?)</div>',
        level2_repl,
        content,
        flags=re.S | re.I,
    )
    content = re.sub(r'<div class="li">(.*?)</div>', r'\1', content, flags=re.S | re.I)
    content = re.sub(r'<p[^>]*>\s*&nbsp;\s*</p>', '', content, flags=re.I)
    content = re.sub(r'<div>\s*</div>', '', content)
    return content


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


def parse_heading(tag: re.Match) -> dict:
    attrs = tag.group(2)
    title = inline_to_md(tag.group(3))
    block: dict = {'type': 'heading', 'text': title}
    id_m = re.search(r'id=["\']([^"\']+)["\']', attrs)
    if id_m:
        block['id'] = id_m.group(1)
    if tag.group(1) == '2':
        block['level'] = 2
    return block


def parse_content(content: str) -> list:
    blocks: list = []
    parts = re.split(r'<hr\s*/?>', content)
    for pi, part in enumerate(parts):
        if pi > 0:
            blocks.append({'type': 'hr'})
        chunks = re.split(r'(<h[23][^>]*>.*?</h[23]>)', part, flags=re.S | re.I)
        for chunk in chunks:
            chunk = chunk.strip()
            if not chunk:
                continue
            hm = re.match(r'<h([23])([^>]*)>(.*?)</h\1>', chunk, re.S | re.I)
            if hm:
                blocks.append(parse_heading(hm))
                rest = chunk[hm.end() :].strip()
                if rest:
                    process_fragment(rest, blocks)
            else:
                process_fragment(chunk, blocks)
    return blocks


def main() -> None:
    html_path = Path(sys.argv[1]) if len(sys.argv) > 1 else None
    text = html_path.read_text() if html_path else fetch(PAGE_URL)
    m = re.search(
        r'entry-content clearfix">(.*?)</div>\s*<!-- \.entry-content -->',
        text,
        re.S,
    )
    if not m:
        m = re.search(r'entry-content clearfix">(.*?)</div>\s*<!-- entry-content', text, re.S)
    if not m:
        raise SystemExit('entry-content not found')
    content = re.sub(r'<script[^>]*>.*?</script>', '', m.group(1), flags=re.S)
    content = normalize_content(content)
    blocks = parse_content(content)
    data = {
        'title': '矢谷流研究アイデアチェックリスト / Research Reality Check',
        'blocks': blocks,
    }
    OUT_MD.write_text(blocks_to_md(data['blocks'], {'title': data['title']}))
    print(f'Wrote {len(blocks)} blocks to {OUT_MD}')


if __name__ == '__main__':
    main()
