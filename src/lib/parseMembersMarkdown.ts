import type { MemberRow, MemberSection } from '../data/members.types'
import { parseFrontmatter } from './parseFrontmatter'

function parseTableRow(line: string): MemberRow | null {
  if (!line.startsWith('|') || line.includes('---')) return null
  const cells = line
    .split('|')
    .slice(1, -1)
    .map((cell) => cell.trim())

  if (cells.length < 4) return null
  const [nameEn, nameJa, url, affiliation] = cells
  if (!nameEn || nameEn === 'nameEn') return null

  const row: MemberRow = { nameEn }
  if (nameJa) row.nameJa = nameJa
  if (url) row.url = url
  if (affiliation) row.affiliation = affiliation
  return row
}

export function parseMembersMarkdown(markdown: string): {
  intro: { ja: string; en: string }
  sections: MemberSection[]
} {
  const { meta, body } = parseFrontmatter(markdown)

  const sections: MemberSection[] = []
  const parts = body.split(/\n(?=## )/)

  for (const part of parts) {
    const trimmed = part.trim()
    if (!trimmed) continue
    const match = trimmed.match(/^## (.+?)\n([\s\S]*)$/)
    if (!match) continue

    const rows: MemberRow[] = []
    for (const line of match[2].split('\n')) {
      const row = parseTableRow(line.trim())
      if (row) rows.push(row)
    }
    if (rows.length) {
      sections.push({ title: match[1].trim(), rows })
    }
  }

  return {
    intro: {
      ja: meta.intro_ja ?? '',
      en: meta.intro_en ?? '',
    },
    sections,
  }
}
