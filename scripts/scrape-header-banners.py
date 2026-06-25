#!/usr/bin/env python3
"""Download IIS Lab header banner images from iis-lab.org into public/images/header/."""
from __future__ import annotations

import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / 'public/images/header'
OUT_TS = ROOT / 'src/data/headerBanners.ts'
HOME = 'https://iis-lab.org/'

KNOWN = [
    'https://iis-lab.org/wp-content/uploads/2015/08/cropped-20150820_050024541_iOS.jpg',
    'https://iis-lab.org/wp-content/uploads/2017/03/cropped-IMG_1411-e1608370296209.jpg',
    'https://iis-lab.org/wp-content/uploads/2018/07/cropped-IMG_0681.jpg',
    'https://iis-lab.org/wp-content/uploads/2019/04/cropped-IMG_3846.jpeg',
]

HEADERS = {'User-Agent': 'iis-lab-scraper/1.0'}


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode('utf-8', errors='replace')


def discover_urls(samples: int = 24) -> list[str]:
    found: set[str] = set(KNOWN)
    pattern = re.compile(r'class="header-image"[^>]+src="([^"]+)"')
    for i in range(samples):
        try:
            html = fetch(f'{HOME}?_={i}')
            match = pattern.search(html)
            if match:
                found.add(match.group(1))
        except urllib.error.URLError as exc:
            print(f'warn: fetch failed ({exc})', file=sys.stderr)
        time.sleep(0.15)
    return sorted(found)


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(
        url,
        headers={
            **HEADERS,
            'Referer': HOME,
            'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        dest.write_bytes(resp.read())


def write_ts(filenames: list[str]) -> None:
    lines = [
        "import { assetUrl } from '../lib/assets'",
        '',
        '/** Header banner images (rotates on navigation, like iis-lab.org). */',
        'export const headerBanners = [',
    ]
    for name in filenames:
        lines.append(f"  assetUrl('/images/header/{name}'),")
    lines.extend([']', ''])
    OUT_TS.write_text('\n'.join(lines))


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    urls = discover_urls()
    print(f'Found {len(urls)} unique banner URL(s)')

    filenames: list[str] = []
    for index, url in enumerate(urls, start=1):
        ext = Path(urllib.parse.urlparse(url).path).suffix or '.jpg'
        filename = f'banner-{index:02d}{ext}'
        dest = OUT_DIR / filename
        print(f'Downloading {url} -> {filename}')
        download(url, dest)
        filenames.append(filename)

    # Keep local teaser as fallback if scrape found nothing new
    local = ROOT / 'public/images/header-banner.png'
    if local.exists() and not any(f.endswith('.png') for f in filenames):
        dest = OUT_DIR / 'banner-local.png'
        dest.write_bytes(local.read_bytes())
        filenames.append('banner-local.png')

    write_ts(filenames)
    print(f'Wrote {OUT_TS} ({len(filenames)} banners)')


if __name__ == '__main__':
    import urllib.parse

    main()
