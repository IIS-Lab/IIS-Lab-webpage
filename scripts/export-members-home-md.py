#!/usr/bin/env python3
"""Export members and home content to markdown (migration helper)."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'src/data'


def yaml_block(key: str, value: str) -> list[str]:
    return [f'{key}: |', *value.split('\n')]


def unescape(s: str) -> str:
    return s.replace("\\'", "'")


def export_members(source: Path) -> None:
    ts = source.read_text()
    intro_match = re.search(
        r"export const membersIntro = \{\s*ja: '((?:\\'|[^'])*)',\s*en: '((?:\\'|[^'])*)',",
        ts,
        re.S,
    )
    if not intro_match:
        raise SystemExit('membersIntro not found')

    intro_ja = unescape(intro_match.group(1))
    intro_en = unescape(intro_match.group(2))

    sections: list[dict] = []
    for section in re.finditer(
        r"\{\s*title: '((?:\\'|[^'])*)',\s*rows: \[(.*?)\]\s*,?\s*\}",
        ts,
        re.S,
    ):
        title = unescape(section.group(1))
        rows_blob = section.group(2)
        rows: list[dict] = []
        for row in re.finditer(
            r"\{\s*nameEn: '((?:\\'|[^'])*)'"
            r"(?:,\s*nameJa: '((?:\\'|[^'])*)')?"
            r"(?:,\s*url: '((?:\\'|[^'])*)')?"
            r"(?:,\s*affiliation:\s*\n?\s*'((?:\\'|[^'])*)')?",
            rows_blob,
            re.S,
        ):
            item: dict[str, str] = {'nameEn': unescape(row.group(1))}
            if row.group(2):
                item['nameJa'] = unescape(row.group(2))
            if row.group(3):
                item['url'] = unescape(row.group(3))
            if row.group(4):
                item['affiliation'] = unescape(row.group(4))
            rows.append(item)
        sections.append({'title': title, 'rows': rows})

    lines = ['---', *yaml_block('intro_ja', intro_ja), *yaml_block('intro_en', intro_en), '---', '']

    for section in sections:
        lines.append(f'## {section["title"]}')
        lines.append('')
        lines.append('| nameEn | nameJa | url | affiliation |')
        lines.append('| --- | --- | --- | --- |')
        for row in section['rows']:
            cells = [
                row.get('nameEn', ''),
                row.get('nameJa', ''),
                row.get('url', ''),
                row.get('affiliation', ''),
            ]
            lines.append('| ' + ' | '.join(c.replace('|', '\\|') for c in cells) + ' |')
        lines.append('')

    (DATA / 'Members.md').write_text('\n'.join(lines).rstrip() + '\n')
    print(f'Wrote Members.md ({len(sections)} sections, {sum(len(s["rows"]) for s in sections)} rows)')


def parse_js_string_array(blob: str) -> list[str]:
    items: list[str] = []
    i = 0
    while i < len(blob):
        while i < len(blob) and blob[i] in ' \n\t,':
            i += 1
        if i >= len(blob):
            break
        quote = blob[i]
        if quote not in ("'", '"', '`'):
            break
        i += 1
        chars: list[str] = []
        while i < len(blob):
            if blob[i] == '\\':
                if i + 1 < len(blob):
                    chars.append(blob[i + 1])
                    i += 2
                else:
                    i += 1
            elif blob[i] == quote:
                i += 1
                break
            else:
                chars.append(blob[i])
                i += 1
        items.append(''.join(chars))
    return items


def export_home(source: Path) -> None:
    ts = source.read_text()

    def extract_const(name: str) -> tuple[str, str]:
        match = re.search(
            rf"export const {name} = \{{\s*en: `([\s\S]*?)`,\s*ja: `([\s\S]*?)`,\s*\}}",
            ts,
        )
        if not match:
            raise SystemExit(f'{name} not found')
        return match.group(1), match.group(2)

    def extract_topics() -> tuple[list[str], list[str]]:
        match = re.search(
            r"export const researchTopics = \{\s*en: \[(.*?)\],\s*ja: \[(.*?)\],\s*\}",
            ts,
            re.S,
        )
        if not match:
            raise SystemExit('researchTopics not found')

        def parse_list(blob: str) -> list[str]:
            return parse_js_string_array(blob)

        return parse_list(match.group(1)), parse_list(match.group(2))

    def extract_philosophy() -> dict:
        match = re.search(
            r"export const philosophy = \{\s*quote: \{\s*en: '((?:\\'|[^'])*)',\s*ja: '((?:\\'|[^'])*)',\s*\},\s*en: `([\s\S]*?)`,\s*ja: `([\s\S]*?)`,\s*\}",
            ts,
            re.S,
        )
        if not match:
            raise SystemExit('philosophy not found')
        return {
            'quote_en': unescape(match.group(1)),
            'quote_ja': unescape(match.group(2)),
            'en': match.group(3),
            'ja': match.group(4),
        }

    welcome_en, welcome_ja = extract_const('welcome')
    mission_en, mission_ja = extract_const('mission')
    research_intro_en, research_intro_ja = extract_const('researchIntro')
    topics_en, topics_ja = extract_topics()
    philosophy = extract_philosophy()

    lines = [
        '---',
        *yaml_block('welcome_en', welcome_en),
        *yaml_block('welcome_ja', welcome_ja),
        *yaml_block('mission_en', mission_en),
        *yaml_block('mission_ja', mission_ja),
        *yaml_block('research_intro_en', research_intro_en),
        *yaml_block('research_intro_ja', research_intro_ja),
        *yaml_block('philosophy_quote_en', philosophy['quote_en']),
        *yaml_block('philosophy_quote_ja', philosophy['quote_ja']),
        *yaml_block('philosophy_en', philosophy['en']),
        *yaml_block('philosophy_ja', philosophy['ja']),
        '---',
        '',
        '<!-- research-topics-en -->',
        *[f'- {item}' for item in topics_en],
        '',
        '<!-- research-topics-ja -->',
        *[f'- {item}' for item in topics_ja],
        '',
    ]

    (DATA / 'IIS_Lab.md').write_text('\n'.join(lines))
    print('Wrote IIS_Lab.md')


if __name__ == '__main__':
    members_src = Path(sys.argv[1]) if len(sys.argv) > 1 else DATA / 'members.ts'
    home_src = Path(sys.argv[2]) if len(sys.argv) > 2 else DATA / 'homeContent.ts'
    export_members(members_src)
    export_home(home_src)
