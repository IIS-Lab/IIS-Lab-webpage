#!/usr/bin/env python3
"""Legacy helper: convert src/data/*.json files to markdown if they still exist."""
from __future__ import annotations

import json
import sys
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))
from md_writer import (
    blocks_to_md,
    news_to_md,
    old_news_to_md,
    research_project_to_md,
    whatsup_to_md,
)

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'src/data'


def convert_all() -> None:
    mapping = {
        'join.json': lambda data: (DATA / 'join.md', blocks_to_md(data)),
        'realitycheck.json': lambda data: (
            DATA / 'realitycheck.md',
            blocks_to_md(data['blocks'], {'title': data['title']}),
        ),
        'koji-yatani.json': lambda data: (
            DATA / 'koji-yatani.md',
            blocks_to_md(data['blocks'], {'slug': data['slug'], 'title': data['title']}),
        ),
        'news.json': lambda data: (DATA / 'news.md', news_to_md(data)),
        'oldNews.json': lambda data: (DATA / 'oldNews.md', old_news_to_md(data)),
        'whatsup.json': lambda data: (DATA / 'whatsup.md', whatsup_to_md(data)),
    }

    for filename, writer in mapping.items():
        path = DATA / filename
        if not path.exists():
            continue
        out_path, content = writer(json.loads(path.read_text()))
        out_path.write_text(content)
        print(f'Converted {filename} -> {out_path.name}')

    research_json = DATA / 'researchProjects.json'
    if research_json.exists():
        research_dir = DATA / 'research'
        research_dir.mkdir(exist_ok=True)
        projects = json.loads(research_json.read_text())
        for project in projects:
            slug = project['slug']
            (research_dir / f'{slug}.md').write_text(research_project_to_md(project))
        (research_dir / 'order.txt').write_text('\n'.join(p['slug'] for p in projects) + '\n')
        print(f'Converted {len(projects)} research projects')


if __name__ == '__main__':
    convert_all()
