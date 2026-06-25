import { parseFrontmatter } from './parseFrontmatter'

export interface WhatsUpItem {
  image: string
  caption: string
}

export interface WhatsUpSeason {
  title: string
  items: WhatsUpItem[]
}

export function parseWhatsUpMarkdown(markdown: string): {
  intro: { en: string; ja: string }
  seasons: WhatsUpSeason[]
} {
  const { meta, body } = parseFrontmatter(markdown)
  const seasons: WhatsUpSeason[] = []
  const parts = body.replace(/\r\n/g, '\n').split(/\n(?=## )/)

  for (const part of parts) {
    const trimmed = part.trim()
    if (!trimmed) continue
    const match = trimmed.match(/^## (.+?)\n([\s\S]*)$/)
    if (!match) continue

    const title = match[1].trim()
    const items: WhatsUpItem[] = []
    for (const line of match[2].split('\n')) {
      const itemMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
      if (itemMatch) {
        items.push({ caption: itemMatch[1], image: itemMatch[2] })
      }
    }
    if (items.length) seasons.push({ title, items })
  }

  return {
    intro: {
      en: meta.intro_en ?? '',
      ja: meta.intro_ja ?? '',
    },
    seasons,
  }
}
