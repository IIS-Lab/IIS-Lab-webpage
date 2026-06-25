import type { NewsItem, NewsMonth } from '../data/types'

function isJapanese(text: string): boolean {
  return /[\u3040-\u30ff\u4e00-\u9fff]/.test(text)
}

function parseLink(text: string): { label: string; href: string } | null {
  const match = text.trim().match(/^\[([^\]]+)\]\(([^)]+)\)$/)
  if (!match) return null
  return { label: match[1], href: match[2] }
}

function isPaperLine(text: string): boolean {
  if (text.startsWith('> ')) return true
  if (text.startsWith('**')) return true
  if (/^\[(Full paper|WiP poster|paper)\]/i.test(text)) return true
  if (/and Koji Yatani|矢谷浩司|矢谷 浩司/.test(text) && /，|．|,/.test(text)) return true
  if (/To appear in Proceedings|IEEE Sensors Letters/.test(text)) return true
  return false
}

function parseItem(title: string, chunk: string): NewsItem {
  const item: NewsItem = {
    title: { en: title, ja: title },
  }
  const papers: string[] = []
  const links: Array<{ label: string; href: string }> = []
  const bodyEn: string[] = []
  const bodyJa: string[] = []

  for (const rawLine of chunk.split('\n')) {
    const line = rawLine.trim()
    if (!line) continue

    const link = parseLink(line)
    if (link) {
      links.push(link)
      continue
    }

    const paperText = line.startsWith('> ') ? line.slice(2).trim() : line
    if (isPaperLine(line)) {
      papers.push(paperText)
      continue
    }

    if (isJapanese(line)) {
      bodyJa.push(line)
    } else {
      bodyEn.push(line)
    }
  }

  if (bodyEn.length || bodyJa.length) {
    item.body = {
      en: bodyEn.join('\n\n'),
      ja: bodyJa.join('\n\n') || bodyEn.join('\n\n'),
    }
  }
  if (papers.length) item.papers = papers
  if (links.length) item.links = links
  return item
}

export function parseNewsMarkdown(markdown: string): NewsMonth[] {
  const months: NewsMonth[] = []
  const parts = markdown.replace(/\r\n/g, '\n').split(/\n(?=## \d{4}\/\d{1,2}\n)/)

  for (const part of parts) {
    const monthMatch = part.match(/^## (\d{4}\/\d{1,2})\n([\s\S]*)$/)
    if (!monthMatch) continue

    const date = monthMatch[1]
    const chunk = monthMatch[2]
    const items: NewsItem[] = []
    const itemParts = chunk.split(/\n(?=### )/)

    for (const itemPart of itemParts) {
      const titleMatch = itemPart.match(/^### (.+?)(?:\n([\s\S]*))?$/)
      if (!titleMatch) continue
      const title = titleMatch[1].trim()
      const body = titleMatch[2]?.trim() ?? ''
      if (title) items.push(parseItem(title, body))
    }

    if (items.length) months.push({ date, items })
  }

  return months
}

export function parseOldNewsMarkdown(markdown: string): {
  intro: string
  months: NewsMonth[]
} {
  const { meta, body } = (() => {
    if (!markdown.startsWith('---\n')) {
      return { meta: {} as Record<string, string>, body: markdown }
    }
    const end = markdown.indexOf('\n---\n', 4)
    if (end < 0) return { meta: {} as Record<string, string>, body: markdown }
    const raw = markdown.slice(4, end)
    const parsed: Record<string, string> = {}
    for (const line of raw.split('\n')) {
      const match = line.match(/^([\w-]+):\s*(.*)$/)
      if (match) parsed[match[1]] = match[2].trim()
    }
    return { meta: parsed, body: markdown.slice(end + 5).replace(/^\n/, '') }
  })()

  return {
    intro: meta.intro ?? '',
    months: parseNewsMarkdown(body),
  }
}
