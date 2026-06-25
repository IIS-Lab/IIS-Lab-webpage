#!/usr/bin/env python3
"""Download What's up gallery images from src/data/markdown/whatsup.md into public/images/whatsup/"""
from __future__ import annotations

import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MD_PATH = ROOT / 'src/data/markdown/whatsup.md'
OUT_DIR = ROOT / 'public/images/whatsup'

HEADERS = {
    'User-Agent': (
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    ),
    'Referer': 'https://iis-lab.org/',
}


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
        print(f'  ! failed {url}: {exc}')
        return False


def local_name(season_idx: int, item_idx: int, url: str, used: set[str]) -> str:
    path = urllib.parse.urlparse(url).path
    base = Path(path).name or 'image.jpg'
    stem = Path(base).stem
    ext = Path(base).suffix or '.jpg'
    name = f's{season_idx:02d}-{item_idx:03d}-{stem}{ext}'
    if name in used:
        name = f's{season_idx:02d}-{item_idx:03d}-{stem}-2{ext}'
    used.add(name)
    return name


def parse_whatsup_md(text: str) -> dict:
    intro = {'en': '', 'ja': ''}
    seasons = []
    if text.startswith('---\n'):
        end = text.index('\n---\n', 4)
        fm = text[4:end]
        body = text[end + 5:]
        for line in fm.split('\n'):
            if line.startswith('intro_en:'):
                intro['en'] = line.split(':', 1)[1].strip().strip('"')
            elif line.startswith('intro_ja:'):
                intro['ja'] = line.split(':', 1)[1].strip().strip('"')
    else:
        body = text

    for part in re.split(r'\n(?=## )', body):
        part = part.strip()
        if not part:
            continue
        match = re.match(r'^## (.+?)\n([\s\S]*)$', part)
        if not match:
            continue
        items = []
        for line in match.group(2).split('\n'):
            item_match = re.match(r'^!\[([^\]]*)\]\(([^)]+)\)$', line.strip())
            if item_match:
                items.append({'caption': item_match.group(1), 'image': item_match.group(2)})
        if items:
            seasons.append({'title': match.group(1), 'items': items})
    return {'intro': intro, 'seasons': seasons}


def main() -> None:
    data = parse_whatsup_md(MD_PATH.read_text())
    used: set[str] = set()
    total = 0
    ok = 0

    for season_idx, season in enumerate(data['seasons'], start=1):
        for item_idx, item in enumerate(season['items'], start=1):
            total += 1
            url = item.get('image', '')
            if not url or url.startswith('data:') or url.startswith('/images/whatsup/'):
                continue
            filename = local_name(season_idx, item_idx, url, used)
            dest = OUT_DIR / filename
            if download(url, dest):
                item['image'] = f'/images/whatsup/{filename}'
                ok += 1
            time.sleep(0.05)

    sys.path.insert(0, str(Path(__file__).resolve().parent))
    from md_writer import whatsup_to_md

    MD_PATH.write_text(whatsup_to_md(data))
    print(f'Downloaded {ok}/{total} images to {OUT_DIR}')


if __name__ == '__main__':
    main()
