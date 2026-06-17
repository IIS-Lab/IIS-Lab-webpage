#!/usr/bin/env python3
"""Parse https://iis-lab.org/ news section into src/data/news.json"""
from __future__ import annotations

import html as h
import json
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_JSON = ROOT / 'src/data/news.json'
OLD_JSON = ROOT / 'src/data/oldNews.json'
PAGE_URL = 'https://iis-lab.org/'
OLD_PAGE_URL = 'https://iis-lab.org/news/old/'

HEADERS = {
    'User-Agent': (
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    ),
    'Referer': 'https://iis-lab.org/',
}


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode('utf-8', errors='replace')


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
        href = h.unescape(mo.group(1).strip())
        label = re.sub(r'<[^>]+>', '', mo.group(2))
        label = h.unescape(label.strip()) or href
        return f'[{label}]({href})'

    s = re.sub(
        r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
        link_repl,
        s,
        flags=re.S | re.I,
    )
    s = re.sub(r'<[^>]+>', '', s)
    s = h.unescape(s)
    s = re.sub(r' +', ' ', s)
    s = re.sub(r' *\n *', '\n', s)
    return s.strip()


def is_japanese(text: str) -> bool:
    return bool(re.search(r'[\u3040-\u30ff\u4e00-\u9fff]', text))


def is_paper_paragraph(text: str) -> bool:
    if not text:
        return False
    if text.startswith('**'):
        return True
    if re.match(r'^\[(Full paper|WiP poster|paper)\]', text, re.I):
        return True
    if re.match(r'^\[([^\]]+)\]\([^)]+\)$', text):
        return False
    lines = [ln.strip() for ln in text.split('\n') if ln.strip()]
    if len(lines) >= 2:
        first, second = lines[0], lines[1]
        # English announcement with Japanese translation
        if not is_japanese(first) and is_japanese(second) and len(first) > 30:
            return False
        if ',' in first and re.search(r'and Koji Yatani|Koji Yatani', first):
            return True
        if is_japanese(first) and re.search(r'，|．', second):
            return True
        if not is_japanese(first) and re.search(r'and Koji Yatani', first):
            return True
    if re.search(r'and Koji Yatani\.|and Koji Yatani,', text):
        return True
    if re.search(r'矢谷浩司|矢谷 浩司', text) and re.search(r'[，．]', text):
        return True
    if re.search(r'To appear in Proceedings|IEEE Sensors Letters', text):
        return True
    return False


def is_link_only(text: str) -> bool:
    if re.match(r'^\[([^\]]+)\]\(([^)]+)\)$', text.strip()):
        return True
    return bool(re.match(r'^https?://\S+$', text.strip()))


def parse_link(text: str) -> dict | None:
    m = re.match(r'^\[([^\]]+)\]\(([^)]+)\)$', text.strip())
    if m:
        return {'label': m.group(1).strip(), 'href': m.group(2).strip()}
    if re.match(r'^https?://', text.strip()):
        return {'label': text.strip(), 'href': text.strip()}
    return None


def split_bilingual(text: str) -> tuple[str, str]:
    lines = [ln.strip() for ln in text.split('\n') if ln.strip()]
    if not lines:
        return '', ''
    if len(lines) == 1:
        if is_japanese(lines[0]):
            return '', lines[0]
        return lines[0], ''
    ja_lines = [ln for ln in lines if is_japanese(ln)]
    en_lines = [ln for ln in lines if not is_japanese(ln)]
    en = '\n'.join(en_lines).strip()
    ja = '\n'.join(ja_lines).strip()
    return en, ja


def collect_paragraphs(html_chunk: str) -> list[str]:
    texts: list[str] = []
    for block in re.findall(
        r'<(?:p|blockquote)[^>]*>(.*?)</(?:p|blockquote)>',
        html_chunk,
        re.S | re.I,
    ):
        if 'wp-embedded-content' in block and '<iframe' in html_chunk:
            # keep blockquote links, skip iframe-only wrappers
            if '<a ' not in block:
                continue
        if '<iframe' in block:
            continue
        text = inline_to_md(block)
        if text and text != '\u00a0':
            texts.append(text)
    return texts


def parse_item(title: str, html_chunk: str) -> dict:
    item: dict = {
        'title': {'en': inline_to_md(title), 'ja': inline_to_md(title)},
    }
    papers: list[str] = []
    links: list[dict] = []
    body_en_parts: list[str] = []
    body_ja_parts: list[str] = []

    for text in collect_paragraphs(html_chunk):
        link = parse_link(text)
        if link:
            links.append(link)
            continue
        if is_paper_paragraph(text):
            papers.append(text.replace('\n', ' '))
            continue
        en, ja = split_bilingual(text)
        if en:
            body_en_parts.append(en)
        if ja:
            body_ja_parts.append(ja)

    if body_en_parts or body_ja_parts:
        item['body'] = {
            'en': '\n\n'.join(body_en_parts),
            'ja': '\n\n'.join(body_ja_parts) if body_ja_parts else '\n\n'.join(body_en_parts),
        }
    if papers:
        item['papers'] = papers
    if links:
        item['links'] = links
    return item


def parse_news_section(section: str) -> list:
    months: list[dict] = []
    month_splits = re.split(r'<h2>(\d{4}/\d{1,2})</h2>', section)
    for i in range(1, len(month_splits), 2):
        date = month_splits[i]
        chunk = month_splits[i + 1]
        items: list[dict] = []
        item_splits = re.split(r'<h3[^>]*>(.*?)</h3>', chunk, flags=re.S | re.I)
        for j in range(1, len(item_splits), 2):
            title = item_splits[j]
            body_html = item_splits[j + 1]
            items.append(parse_item(title, body_html))
        months.append({'date': date, 'items': items})
    return months


def parse_news(html: str) -> list:
    m = re.search(r'<h1>News</h1>(.*?)以前のニュース', html, re.S)
    if not m:
        raise SystemExit('News section not found')
    return parse_news_section(m.group(1))


def parse_old_news(html: str) -> dict:
    m = re.search(
        r'<div class="entry-content clearfix">(.*?)<!-- \.entry-content -->',
        html,
        re.S,
    )
    if not m:
        raise SystemExit('Old news content not found')
    content = m.group(1)
    intro_match = re.search(
        r'<p>(このページには過去のニュースを載せています．)</p>',
        content,
    )
    intro = intro_match.group(1) if intro_match else ''
    hr_pos = content.find('<hr')
    section = content[hr_pos:] if hr_pos >= 0 else content
    return {'intro': intro, 'months': parse_news_section(section)}


def main() -> None:
    import sys

    if len(sys.argv) > 1 and sys.argv[1] == '--old':
        text = fetch(OLD_PAGE_URL)
        data = parse_old_news(text)
        OLD_JSON.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
        total = sum(len(m['items']) for m in data['months'])
        print(f'Wrote {len(data["months"])} months, {total} items to {OLD_JSON}')
        return

    text = fetch(PAGE_URL)
    months = parse_news(text)
    OUT_JSON.write_text(json.dumps(months, ensure_ascii=False, indent=2) + '\n')
    total = sum(len(m['items']) for m in months)
    print(f'Wrote {len(months)} months, {total} items to {OUT_JSON}')


if __name__ == '__main__':
    main()
