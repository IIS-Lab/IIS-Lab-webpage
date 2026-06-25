#!/usr/bin/env python3
"""Fetch and parse https://iis-lab.org/member/koji-yatani/ into src/data/koji-yatani.md"""
from __future__ import annotations

import html as h
import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

import sys
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))
from md_writer import blocks_to_md

ROOT = Path(__file__).resolve().parents[1]
OUT_MD = ROOT / 'src/data/koji-yatani.md'
PHOTO_DIR = ROOT / 'public/images/members'
PAGE_URL = 'https://iis-lab.org/member/koji-yatani/'

HEADERS = {
    'User-Agent': (
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    ),
    'Referer': 'https://iis-lab.org/',
}

INTERNAL = {
    'https://iis-lab.org/': '/',
    'https://iis-lab.org/prospective/': '/join',
    'https://iis-lab.org/prospective': '/join',
    'https://iis-lab.org/member/koji-yatani/': '/member/koji-yatani',
}


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode('utf-8', errors='replace')


def download(url: str, dest: Path) -> bool:
    if dest.exists() and dest.stat().st_size > 100:
        return True
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=60) as resp:
            dest.write_bytes(resp.read())
        return dest.stat().st_size > 100
    except (urllib.error.URLError, OSError) as exc:
        print(f'  ! photo download failed: {exc}')
        return False


def normalize_href(url: str) -> str:
    url = h.unescape(url.strip())
    return INTERNAL.get(url, url)


def inline_to_md(s: str) -> str:
    s = re.sub(r'&nbsp;', ' ', s)
    s = re.sub(r'&#8211;|&#8212;', '–', s)
    s = re.sub(r'&#8220;|&#8221;', '"', s)
    s = re.sub(r'&#8217;|&#039;', "'", s)
    s = re.sub(r'<br\s*/?>', '\n', s, flags=re.I)
    s = re.sub(r'\n{2,}', '\n', s)
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
        if href.startswith('http') and 'iis-lab.org' in href:
            pass
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


def parse_ul(ul_html: str) -> list:
    items = []
    pos = 0
    while True:
        li_m = re.search(r'<li[^>]*>(.*?)</li>', ul_html[pos:], re.S | re.I)
        if not li_m:
            break
        li_inner = li_m.group(1)
        pos += li_m.end()
        nested = re.search(r'(<ul[^>]*>.*</ul>)', li_inner, re.S | re.I)
        if nested:
            main = li_inner[: nested.start()]
            sub = nested.group(1)
            text = inline_to_md(main)
            children = parse_ul(sub)
            item: dict = {'text': text}
            if children:
                item['children'] = children
            items.append(item)
        else:
            items.append({'text': inline_to_md(li_inner)})
    return items


def parse_nav_ul(ul_html: str) -> list:
    items = []
    for a in re.finditer(
        r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
        ul_html,
        re.S,
    ):
        items.append(
            {
                'href': normalize_href(a.group(1)),
                'label': inline_to_md(a.group(2)),
            }
        )
    return items


def parse_content(content: str) -> list:
    blocks: list = []
    parts = re.split(r'<hr\s*/?>', content)
    for pi, part in enumerate(parts):
        if pi > 0:
            blocks.append({'type': 'hr'})
        # Only the link list between the two horizontal rules is site navigation.
        nav_only = pi == 1
        process_fragment(part, blocks, nav_only=nav_only)
    return blocks


def process_fragment(frag: str, blocks: list, *, nav_only: bool = False) -> None:
    while frag.strip():
        ul_m = re.match(r'\s*<ul[^>]*>', frag, re.I)
        if ul_m:
            end = find_ul_end(frag, ul_m.start())
            ul_html = frag[ul_m.start() : end]
            if nav_only and 'my-itemize' in ul_html:
                blocks.append({'type': 'nav', 'items': parse_nav_ul(ul_html)})
            else:
                blocks.append({'type': 'list', 'items': parse_ul(ul_html)})
            frag = frag[end:]
            continue
        img_m = re.match(
            r'\s*<p[^>]*>\s*<img[^>]+src=["\']([^"\']+)["\'][^>]*(?:width=["\'](\d+)["\'])?[^>]*(?:height=["\'](\d+)["\'])?[^>]*/?\s*>\s*</p>',
            frag,
            re.S | re.I,
        )
        if img_m:
            src = img_m.group(1)
            block: dict = {'type': 'img', 'src': src}
            if img_m.group(2):
                block['width'] = int(img_m.group(2))
            if img_m.group(3):
                block['height'] = int(img_m.group(3))
            blocks.append(block)
            frag = frag[img_m.end() :]
            continue
        h2_m = re.match(r'\s*<h2[^>]*>(.*?)</h2>', frag, re.S | re.I)
        if h2_m:
            title = inline_to_md(h2_m.group(1))
            blocks.append({'type': 'heading', 'text': title})
            frag = frag[h2_m.end() :]
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


def main() -> None:
    text = fetch(PAGE_URL)
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
    blocks = parse_content(content)

    photo_src = ''
    for block in blocks:
        if block.get('type') == 'img':
            photo_src = block['src']
            break

    local_photo = ''
    if photo_src:
        base = Path(urllib.parse.urlparse(photo_src).path).name
        dest = PHOTO_DIR / base
        if download(photo_src, dest):
            local_photo = f'/images/members/{base}'
            for block in blocks:
                if block.get('type') == 'img':
                    block['src'] = local_photo

    OUT_MD.write_text(
        blocks_to_md(
            blocks,
            {'slug': 'koji-yatani', 'title': 'Koji Yatani / 矢谷浩司'},
        )
    )
    print(f'Wrote {len(blocks)} blocks to {OUT_MD}')
    if local_photo:
        print(f'Photo: {local_photo}')


if __name__ == '__main__':
    main()
