"""Shared helpers for writing markdown data files."""
from __future__ import annotations

import json


def yaml_value(value: str) -> str:
    if not value:
        return '""'
    if any(ch in value for ch in ':"\'\n#'):
        return json.dumps(value, ensure_ascii=False)
    return value


def blocks_to_md(blocks: list, frontmatter: dict | None = None) -> str:
    lines: list[str] = []
    if frontmatter:
        lines.append('---')
        for key, value in frontmatter.items():
            lines.append(f'{key}: {yaml_value(str(value))}')
        lines.append('---')
        lines.append('')

    for block in blocks:
        kind = block.get('type')
        if kind == 'p':
            lines.append(block['text'])
            lines.append('')
        elif kind == 'hr':
            lines.append('***')
            lines.append('')
        elif kind == 'heading':
            level = block.get('level', 2)
            prefix = '###' if level == 3 else '##'
            text = block['text']
            block_id = block.get('id')
            if block_id:
                text = f'{text} {{#{block_id}}}'
            lines.append(f'{prefix} {text}')
            lines.append('')
        elif kind == 'list':
            lines.extend(list_items_to_md(block.get('items', []), 0))
            lines.append('')
        elif kind == 'nav':
            lines.append('<!-- nav -->')
            for item in block.get('items', []):
                lines.append(f"- [{item['label']}]({item['href']})")
            lines.append('<!-- /nav -->')
            lines.append('')
        elif kind == 'img':
            alt = block.get('alt', '')
            lines.append(f'![{alt}]({block["src"]})')
            meta_parts = []
            if block.get('width'):
                meta_parts.append(f'width: {block["width"]}')
            if block.get('height'):
                meta_parts.append(f'height: {block["height"]}')
            if block.get('alt'):
                meta_parts.append(f'alt: {block["alt"]}')
            if meta_parts:
                lines.append(f'<!-- {" ".join(meta_parts)} -->')
            lines.append('')

    while lines and lines[-1] == '':
        lines.pop()
    return '\n'.join(lines) + '\n'


def list_items_to_md(items: list, depth: int) -> list[str]:
    lines: list[str] = []
    indent = '  ' * depth
    for item in items:
        if isinstance(item, str):
            lines.append(f'{indent}- {item}')
            continue
        lines.append(f'{indent}- {item["text"]}')
        children = item.get('children') or []
        if children:
            lines.extend(list_items_to_md(children, depth + 1))
    return lines


def news_item_to_md(item: dict) -> list[str]:
    lines = [f'### {item["title"]["en"]}', '']
    body = item.get('body') or {}
    en = (body.get('en') or '').strip()
    ja = (body.get('ja') or '').strip()
    if en:
        lines.append(en)
        lines.append('')
    if ja and ja != en:
        lines.append(ja)
        lines.append('')
    for paper in item.get('papers', []):
        lines.append(f'> {paper}')
        lines.append('')
    for link in item.get('links', []):
        lines.append(f'[{link["label"]}]({link["href"]})')
        lines.append('')
    return lines


def news_to_md(months: list) -> str:
    lines: list[str] = []
    for month in months:
        lines.append(f'## {month["date"]}')
        lines.append('')
        for item in month.get('items', []):
            lines.extend(news_item_to_md(item))
    return '\n'.join(lines).rstrip() + '\n'


def old_news_to_md(data: dict) -> str:
    lines = [
        '---',
        f'intro: {yaml_value(data.get("intro", ""))}',
        '---',
        '',
    ]
    lines.append(news_to_md(data.get('months', [])).rstrip())
    return '\n'.join(lines) + '\n'


def whatsup_to_md(data: dict) -> str:
    intro = data.get('intro', {})
    lines = [
        '---',
        f'intro_en: {yaml_value(intro.get("en", ""))}',
        f'intro_ja: {yaml_value(intro.get("ja", ""))}',
        '---',
        '',
    ]
    for season in data.get('seasons', []):
        lines.append(f'## {season["title"]}')
        lines.append('')
        for item in season.get('items', []):
            lines.append(f'![{item["caption"]}]({item["image"]})')
        lines.append('')
    return '\n'.join(lines).rstrip() + '\n'


def research_project_to_md(project: dict) -> str:
    frontmatter = {
        'slug': project['slug'],
        'titleEn': project.get('titleEn', ''),
        'titleJa': project.get('titleJa', ''),
        'thumb': project.get('thumb', ''),
    }
    return blocks_to_md(project.get('blocks', []), frontmatter)
