#!/usr/bin/env python3
"""Scrape https://iis-lab.org/research/ list + subpages into src/data/research/
and download images to public/images/research/"""
from __future__ import annotations

import html as h
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))
from md_writer import research_project_to_md

ROOT = Path(__file__).resolve().parents[1]
RESEARCH_DIR = ROOT / 'src/data/research'
THUMB_DIR = ROOT / 'public/images/research/thumbs'
CONTENT_IMG_DIR = ROOT / 'public/images/research/content'

INTERNAL_PREFIXES = (
    ('https://iis-lab.org/research/', '/research/'),
    ('https://iis-lab.org/publications/', '/publications'),
    ('https://iis-lab.org/members/', '/members'),
    ('https://iis-lab.org/', '/'),
    ('https://iis-lab.org', '/'),
)


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
        print(f'  ! download failed {url}: {exc}')
        return False


def normalize_href(url: str) -> str:
    url = h.unescape(url.strip())
    for prefix, local in INTERNAL_PREFIXES:
        if url.startswith(prefix):
            slug = url[len(prefix) :].rstrip('/')
            if local == '/research/':
                return '/research/' + slug
            return local
    return url


def inline_to_md(fragment: str) -> str:
    fragment = re.sub(r'&nbsp;', ' ', fragment)
    fragment = re.sub(r'&#8211;', '–', fragment)
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
        href = normalize_href(match.group(1))
        label = re.sub(r'<[^>]+>', '', match.group(2))
        label = h.unescape(label.strip()) or href
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
    fragment = re.sub(r'[ \t]+', ' ', fragment).strip()
    return fragment


def parse_ul(ul_html: str) -> list[str]:
    items: list[str] = []
    for match in re.finditer(r'<li[^>]*>(.*?)</li>', ul_html, re.S | re.I):
        text = inline_to_md(match.group(1))
        if text:
            items.append(text)
    return items


def flatten_wrappers(content: str) -> str:
    """Remove div/section wrappers so nested paragraphs and headings are parsed."""
    content = re.sub(r'<div[^>]*>', '', content, flags=re.I)
    content = re.sub(r'</div>', '', content, flags=re.I)
    content = re.sub(r'<section[^>]*>', '', content, flags=re.I)
    content = re.sub(r'</section>', '', content, flags=re.I)
    return content


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


def local_image(url: str, slug: str, used_names: dict[str, int]) -> str:
    path = urllib.parse.urlparse(url).path
    name = Path(path).name or 'image.png'
    stem = Path(name).stem
    ext = Path(name).suffix or '.png'
    key = slug + '/' + stem
    count = used_names.get(key, 0)
    used_names[key] = count + 1
    if count == 0:
        filename = stem + ext
    else:
        filename = f'{stem}-{count}{ext}'
    dest = CONTENT_IMG_DIR / slug / filename
    if download(url, dest):
        return f'/images/research/content/{slug}/{filename}'
    return url


def process_fragment(
    fragment: str,
    slug: str,
    blocks: list,
    used_names: dict[str, int],
) -> None:
    while fragment.strip():
        ul_match = re.match(r'\s*<ul[^>]*>', fragment, re.I)
        if ul_match:
            end = find_ul_end(fragment, ul_match.start())
            items = parse_ul(fragment[ul_match.start() : end])
            if items:
                blocks.append({'type': 'list', 'items': items})
            fragment = fragment[end:]
            continue

        img_match = re.match(
            r'\s*<p[^>]*>\s*(<img[^>]+>)\s*</p>',
            fragment,
            re.S | re.I,
        )
        if not img_match:
            img_match = re.match(r'\s*(<img[^>]+>)', fragment, re.I)

        if img_match:
            img_tag = img_match.group(1)
            src_match = re.search(r'src="([^"]+)"', img_tag)
            if src_match and not src_match.group(1).startswith('data:'):
                src = src_match.group(1)
                alt_match = re.search(r'alt="([^"]*)"', img_tag)
                width_match = re.search(r'width="(\d+)"', img_tag)
                height_match = re.search(r'height="(\d+)"', img_tag)
                block = {
                    'type': 'img',
                    'src': local_image(src, slug, used_names),
                    'alt': h.unescape(alt_match.group(1)) if alt_match else '',
                }
                if width_match:
                    block['width'] = int(width_match.group(1))
                if height_match:
                    block['height'] = int(height_match.group(1))
                blocks.append(block)
            fragment = fragment[img_match.end() :]
            continue

        h3_match = re.match(r'\s*<h3[^>]*>(.*?)</h3>', fragment, re.S | re.I)
        if h3_match:
            text = inline_to_md(h3_match.group(1))
            if text:
                blocks.append({'type': 'heading', 'text': text, 'level': 3})
            fragment = fragment[h3_match.end() :]
            continue

        h2_match = re.match(r'\s*<h2[^>]*>(.*?)</h2>', fragment, re.S | re.I)
        if h2_match:
            text = inline_to_md(h2_match.group(1))
            if text:
                blocks.append({'type': 'heading', 'text': text})
            fragment = fragment[h2_match.end() :]
            continue

        p_match = re.match(r'\s*<p[^>]*>(.*?)</p>', fragment, re.S | re.I)
        if p_match:
            inner = p_match.group(1).strip()
            if inner in ('&nbsp;', ''):
                fragment = fragment[p_match.end() :]
                continue
            if re.match(r'\s*<img', inner, re.I):
                fragment = fragment[p_match.end() :]
                continue
            text = inline_to_md(inner)
            if text:
                blocks.append({'type': 'p', 'text': text})
            fragment = fragment[p_match.end() :]
            continue

        hr_match = re.match(r'\s*<hr\s*/?>', fragment, re.I)
        if hr_match:
            blocks.append({'type': 'hr'})
            fragment = fragment[hr_match.end() :]
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


def parse_entry_content(html_text: str, slug: str) -> list:
    start_marker = '<div class="entry-content clearfix">'
    start = html_text.find(start_marker)
    if start < 0:
        return []
    content_start = start + len(start_marker)
    end = html_text.find('</div> <!-- .entry-content -->', content_start)
    if end < 0:
        end = html_text.find('<!-- entry-content clearfix-->', content_start)
        if end < 0:
            return []
    content = html_text[content_start:end]
    content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.S)
    content = flatten_wrappers(content)
    blocks: list = []
    used_names: dict[str, int] = {}
    process_fragment(content, slug, blocks, used_names)
    return blocks


def parse_list_page(html_text: str) -> list[dict]:
    items: list[dict] = []
    for chunk in html_text.split('class="fg-item ')[1:]:
        end = chunk.find('</figure>')
        block = chunk[:end] if end > 0 else chunk[:3000]
        href_match = re.search(r'href="(https://iis-lab.org/research/[^"]+)"', block)
        img_match = re.search(r'data-src-fg="([^"]+)"', block)
        title_match = re.search(r'data-caption-title="([^"]+)"', block)
        if not href_match or not img_match:
            continue
        href = href_match.group(1)
        slug = href.rstrip('/').split('/')[-1]
        title = h.unescape(title_match.group(1) if title_match else '')
        parts = re.split(r'\s*/\s*', title, 1)
        en = parts[0].strip()
        ja = parts[1].strip() if len(parts) > 1 else ''
        items.append(
            {
                'slug': slug,
                'titleEn': en,
                'titleJa': ja,
                'sourceUrl': href,
                'sourceThumb': img_match.group(1),
            }
        )
    return items


def write_project(project: dict) -> None:
    RESEARCH_DIR.mkdir(parents=True, exist_ok=True)
    slug = project['slug']
    (RESEARCH_DIR / f'{slug}.md').write_text(research_project_to_md(project))


def main() -> None:
    only_slug = sys.argv[1] if len(sys.argv) > 1 else None

    if only_slug:
        url = f'https://iis-lab.org/research/{only_slug}/'
        print(f'Re-scraping {only_slug}')
        CONTENT_IMG_DIR.mkdir(parents=True, exist_ok=True)
        page_html = fetch(url)
        blocks = parse_entry_content(page_html, only_slug)
        md_path = RESEARCH_DIR / f'{only_slug}.md'
        title_en = only_slug
        title_ja = ''
        thumb = f'/images/research/thumbs/{only_slug}.png'
        if md_path.exists():
            for line in md_path.read_text().splitlines():
                if line.startswith('titleEn:'):
                    title_en = line.split(':', 1)[1].strip().strip('"')
                elif line.startswith('titleJa:'):
                    title_ja = line.split(':', 1)[1].strip().strip('"')
                elif line.startswith('thumb:'):
                    thumb = line.split(':', 1)[1].strip().strip('"')
        write_project(
            {
                'slug': only_slug,
                'titleEn': title_en,
                'titleJa': title_ja,
                'thumb': thumb,
                'blocks': blocks,
            }
        )
        print(f'Updated {only_slug}: {len(blocks)} blocks')
        return

    list_html = fetch('https://iis-lab.org/research/')
    items = parse_list_page(list_html)
    print(f'Found {len(items)} research projects')

    THUMB_DIR.mkdir(parents=True, exist_ok=True)
    CONTENT_IMG_DIR.mkdir(parents=True, exist_ok=True)

    projects: list[dict] = []
    for index, item in enumerate(items, start=1):
        slug = item['slug']
        print(f'[{index}/{len(items)}] {slug}')
        ext = Path(urllib.parse.urlparse(item['sourceThumb']).path).suffix or '.png'
        thumb_file = THUMB_DIR / f'{slug}{ext}'
        if download(item['sourceThumb'], thumb_file):
            thumb = f'/images/research/thumbs/{slug}{ext}'
        else:
            thumb = item['sourceThumb']

        time.sleep(0.15)
        try:
            page_html = fetch(item['sourceUrl'])
        except urllib.error.URLError as exc:
            print(f'  ! page fetch failed: {exc}')
            blocks = []
        else:
            blocks = parse_entry_content(page_html, slug)

        project = {
            'slug': slug,
            'titleEn': item['titleEn'],
            'titleJa': item['titleJa'],
            'thumb': thumb,
            'blocks': blocks,
        }
        projects.append(project)
        write_project(project)

    (RESEARCH_DIR / 'order.txt').write_text('\n'.join(p['slug'] for p in projects) + '\n')
    print(f'Wrote {len(projects)} projects to {RESEARCH_DIR}/')


if __name__ == '__main__':
    main()
