#!/usr/bin/env python3
"""Scrape https://iis-lab.org/publications/ into src/data/publications.md
and download iis-lab.org PDFs to public/."""
from __future__ import annotations

import html as h
import json
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_MD = ROOT / 'src/data/publications.md'
PUBLIC_DIR = ROOT / 'public'
PAGE_URL = 'https://iis-lab.org/publications/'

HEADERS = {
    'User-Agent': (
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    ),
    'Referer': 'https://iis-lab.org/',
}


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=120) as resp:
        return resp.read()


def inline_to_md(fragment: str) -> str:
    fragment = re.sub(r'&nbsp;', ' ', fragment)
    fragment = re.sub(r'&#8211;', '–', fragment)
    fragment = re.sub(r'&#8217;', "'", fragment)
    fragment = re.sub(r'&#8216;', "'", fragment)
    fragment = re.sub(r'&#8220;|&#8221;', '"', fragment)
    fragment = re.sub(r'&#8217;', "'", fragment)
    fragment = re.sub(r'<br\s*/?>', '\n', fragment, flags=re.I)
    fragment = re.sub(
        r'<(?:strong|b)>(.*?)</(?:strong|b)>',
        r'**\1**',
        fragment,
        flags=re.S | re.I,
    )
    fragment = re.sub(
        r'<(?:em|i)>(.*?)</(?:em|i)>',
        r'_\1_',
        fragment,
        flags=re.S | re.I,
    )

    def link_repl(match: re.Match) -> str:
        href = h.unescape(match.group(1).strip())
        label = re.sub(r'<[^>]+>', '', match.group(2))
        label = h.unescape(label.strip())
        if not label:
            label = href
        return f'[{label}]({href})'

    fragment = re.sub(
        r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
        link_repl,
        fragment,
        flags=re.S | re.I,
    )
    fragment = re.sub(r'<span[^>]*>(.*?)</span>', r'\1', fragment, flags=re.S | re.I)
    fragment = re.sub(r'<[^>]+>', '', fragment)
    fragment = h.unescape(fragment)
    fragment = re.sub(r'[ \t]+', ' ', fragment)
    fragment = re.sub(r' *\n *', '\n', fragment)
    return fragment.strip()


def local_pdf_path(url: str) -> str | None:
    parsed = urllib.parse.urlparse(h.unescape(url.strip()))
    if parsed.netloc not in ('iis-lab.org', 'www.iis-lab.org'):
        return None
    if not parsed.path.lower().endswith('.pdf'):
        return None
    return parsed.path


def download_pdf(url: str, dest: Path, skip_download: bool) -> bool:
    if dest.exists() and dest.stat().st_size > 500:
        return True
    if skip_download:
        return False
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        data = fetch(url)
        if len(data) < 500:
            return False
        dest.write_bytes(data)
        return True
    except (urllib.error.URLError, OSError) as exc:
        print(f'  ! failed {url}: {exc}')
        return False


def normalize_links(text: str, pdf_map: dict[str, str], skip_download: bool) -> str:
    def repl(match: re.Match) -> str:
        label = match.group(1)
        url = h.unescape(match.group(2))
        local = local_pdf_path(url)
        if local:
            dest = PUBLIC_DIR / local.lstrip('/')
            if download_pdf(url, dest, skip_download):
                url = local
                pdf_map[url] = match.group(0)
        return f'[{label}]({url})'

    return re.sub(r'\[([^\]]+)\]\(([^)]+)\)', repl, text)


def find_ul_end(source: str, start: int) -> int:
    depth = 0
    i = start
    while i < len(source):
        if re.match(r'<ul\b', source[i:], re.I):
            depth += 1
        elif re.match(r'</ul\b', source[i:], re.I):
            depth -= 1
            if depth == 0:
                return source.find('>', i) + 1
        i += 1
    return len(source)


def parse_li_items(ul_html: str) -> list[str]:
    items: list[str] = []
    for match in re.finditer(r'<li[^>]*>(.*?)</li>', ul_html, re.S | re.I):
        text = inline_to_md(match.group(1))
        if text:
            text = re.sub(r'\)\[', ') [', text)
            items.append(text)
    return items


def is_thesis_section(title: str) -> bool:
    return any(
        key in title
        for key in ('Thesis', 'Dissertation', '修士論文', '卒業論文', '博士論文')
    )


def flatten_wrappers(content: str) -> str:
    content = re.sub(r'<div[^>]*>', '', content, flags=re.I)
    content = re.sub(r'</div>', '', content, flags=re.I)
    return content


def parse_entry_content(html_text: str, skip_download: bool) -> tuple[list[str], dict[str, str]]:
    start_marker = '<div class="entry-content clearfix">'
    start = html_text.find(start_marker)
    if start < 0:
        raise SystemExit('entry-content not found')
    content_start = start + len(start_marker)
    end = html_text.find('</div> <!-- .entry-content -->', content_start)
    if end < 0:
        end = html_text.find('<!-- .entry-content -->', content_start)
    content = flatten_wrappers(html_text[content_start:end])
    content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.S)

    lines: list[str] = []
    pdf_map: dict[str, str] = {}
    fragment = content
    in_thesis = False

    while fragment.strip():
        hr_match = re.match(r'\s*<hr\s*/?>', fragment, re.I)
        if hr_match:
            lines.append('---')
            fragment = fragment[hr_match.end() :]
            continue

        h2_match = re.match(r'\s*<h2[^>]*>(.*?)</h2>', fragment, re.S | re.I)
        if h2_match:
            title = inline_to_md(h2_match.group(1))
            in_thesis = is_thesis_section(title)
            lines.append(f'## {title}')
            lines.append('')
            fragment = fragment[h2_match.end() :]
            continue

        h5_match = re.match(r'\s*<h5[^>]*>(.*?)</h5>', fragment, re.S | re.I)
        if h5_match:
            year = inline_to_md(h5_match.group(1))
            lines.append(f'##### {year}')
            lines.append('')
            fragment = fragment[h5_match.end() :]
            continue

        h4_match = re.match(r'\s*<h4[^>]*>(.*?)</h4>', fragment, re.S | re.I)
        if h4_match:
            year = inline_to_md(h4_match.group(1))
            lines.append(f'#### {year}')
            lines.append('')
            fragment = fragment[h4_match.end() :]
            continue

        ul_match = re.match(r'\s*<ul[^>]*>', fragment, re.I)
        if ul_match:
            end_pos = find_ul_end(fragment, ul_match.start())
            items = parse_li_items(fragment[ul_match.start() : end_pos])
            for item in items:
                item = normalize_links(item, pdf_map, skip_download)
                lines.append(f'* {item}')
            lines.append('')
            fragment = fragment[end_pos:]
            continue

        p_match = re.match(r'\s*<p[^>]*>(.*?)</p>', fragment, re.S | re.I)
        if p_match:
            inner = p_match.group(1).strip()
            if inner in ('&nbsp;', ''):
                fragment = fragment[p_match.end() :]
                continue
            text = inline_to_md(inner)
            if text:
                text = normalize_links(text, pdf_map, skip_download)
                text = re.sub(r'\)\[', ') [', text)
                if in_thesis and '\n' in text:
                    for part in text.split('\n'):
                        part = part.strip()
                        if part:
                            lines.append(part)
                else:
                    lines.append(text)
                lines.append('')
            fragment = fragment[p_match.end() :]
            continue

        fragment = re.sub(r'^\s*', '', fragment, count=1)
        if fragment.startswith('<'):
            next_tag = re.search(r'^<[^>]+>', fragment)
            if next_tag:
                fragment = fragment[next_tag.end() :]
            else:
                break
        else:
            break

    while lines and lines[-1] == '':
        lines.pop()
    return lines, pdf_map


def main() -> None:
    skip_download = '--no-download' in sys.argv
    html_bytes = fetch(PAGE_URL)
    html_text = html_bytes.decode('utf-8', errors='replace')
    md_lines, pdf_map = parse_entry_content(html_text, skip_download)
    OUT_MD.write_text('\n'.join(md_lines) + '\n')
    print(f'Wrote {OUT_MD} ({len(md_lines)} lines)')
    print(f'Local PDFs: {len(pdf_map)}')
    if skip_download:
        print('(skipped PDF downloads)')


if __name__ == '__main__':
    main()
