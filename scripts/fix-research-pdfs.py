#!/usr/bin/env python3
"""Fix broken [(paper)](/) links in research markdown and download PDFs."""
from __future__ import annotations

import html as h
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RESEARCH_DIR = ROOT / 'src/data/markdown/research'
PUBLIC_DIR = ROOT / 'public'
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
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = resp.read()
        if len(data) < 500:
            return False
        dest.write_bytes(data)
        return True
    except (urllib.error.URLError, OSError) as exc:
        print(f'  ! failed {url}: {exc}')
        return False


def resolve_pdf_url(url: str, skip_download: bool) -> str:
    local = local_pdf_path(url)
    if not local:
        return url
    dest = PUBLIC_DIR / local.lstrip('/')
    if download_pdf(url, dest, skip_download):
        return local
    return url


def extract_entry_links(page_html: str) -> list[tuple[str, str]]:
    start_marker = '<div class="entry-content clearfix">'
    start = page_html.find(start_marker)
    if start < 0:
        return []
    content_start = start + len(start_marker)
    end = page_html.find('</div> <!-- .entry-content -->', content_start)
    if end < 0:
        end = page_html.find('<!-- entry-content clearfix-->', content_start)
    content = page_html[content_start:end] if end > 0 else page_html[content_start:]

    links: list[tuple[str, str]] = []
    for match in re.finditer(
        r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
        content,
        re.S | re.I,
    ):
        url = h.unescape(match.group(1))
        if not local_pdf_path(url):
            continue
        label_raw = h.unescape(re.sub(r'<[^>]+>', '', match.group(2)).strip())
        if not label_raw:
            label_raw = 'paper'
        links.append((label_raw, url))
    return links


def to_md_link(label_raw: str, url: str) -> str:
    label = label_raw.strip()
    core = label.strip('[]()').lower()
    if core in ('paper', 'poster'):
        return f'[(paper)]({url})'
    if core == 'video':
        return f'[(video)]({url})'
    if label.startswith('[') and label.endswith(']'):
        return f'[{label}]({url})'
    if label.startswith('(') and label.endswith(')'):
        return f'[{label}]({url})'
    return f'[{label}]({url})'


BROKEN_LINK = re.compile(
    r'\[\[Paper\]\]\(/\)|'
    r'\[\[Video\]\]\([^)]*\)|'
    r'\[\(\*\*\(paper\)\*\*\)\]\(/\)|'
    r'\[\*\*\(paper\)\*\*\]\(/\)|'
    r'\[\*\*\(poster\)\*\*\]\(/\)|'
    r'\[\(paper\]\(/\)\)|'
    r'\[\(\*\*\(poster\)\*\*\)\]\(/\)|'
    r'\[\(paper\)\]\(/\)|'
    r'\[\(poster\)\]\(/\)|'
    r'\[paper\]\(/\)|'
    r'\[poster\]\(/\)|'
    r'\(\[paper\]\(/\)\)|'
    r'\(\[poster\]\(/\)\)|'
    r'\[\[/\]\(/\)',
    re.I,
)


def fix_markdown(content: str, links: list[tuple[str, str]], skip_download: bool) -> tuple[str, int]:
    fixed = 0
    for label_raw, url in links:
        resolved = resolve_pdf_url(url, skip_download)
        match = BROKEN_LINK.search(content)
        if not match:
            break
        replacement = to_md_link(label_raw, resolved)
        content = content[: match.start()] + replacement + content[match.end() :]
        fixed += 1
    return content, fixed


def main() -> None:
    skip_download = '--no-download' in sys.argv
    only_slug = next((arg for arg in sys.argv[1:] if not arg.startswith('--')), None)

    slugs: list[str]
    if only_slug:
        slugs = [only_slug]
    else:
        order_path = RESEARCH_DIR / 'order.txt'
        slugs = order_path.read_text().strip().split('\n') if order_path.exists() else []

    total_fixed = 0
    for index, slug in enumerate(slugs, start=1):
        md_path = RESEARCH_DIR / f'{slug}.md'
        if not md_path.exists():
            continue
        content = md_path.read_text()
        if '](/)' not in content:
            continue

        print(f'[{index}/{len(slugs)}] {slug}')
        try:
            page_html = fetch(f'https://iis-lab.org/research/{slug}/')
        except urllib.error.URLError as exc:
            print(f'  ! fetch failed: {exc}')
            continue

        links = extract_entry_links(page_html)
        if not links:
            print('  no paper/video links found')
            continue

        updated, count = fix_markdown(content, links, skip_download)
        if count:
            md_path.write_text(updated)
            total_fixed += count
            print(f'  fixed {count} link(s)')
        time.sleep(0.12)

    print(f'Done. Fixed {total_fixed} link(s).')


if __name__ == '__main__':
    main()
