export type PublicationBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'year-list'; year: string; items: string[] }
  | { type: 'thesis-year'; year: string; lines: string[] }

export interface PublicationSection {
  title: string
  blocks: PublicationBlock[]
}

const SKIP_SECTIONS = new Set(['Recent Posts', 'Categories'])

export function parsePublications(markdown: string): PublicationSection[] {
  const sections: PublicationSection[] = []
  const parts = markdown.split(/\n(?=## )/)

  for (const part of parts) {
    const trimmed = part.trim()
    if (!trimmed || trimmed === '##') continue

    const lines = trimmed.split('\n')
    const titleLine = lines[0].replace(/^##\s*/, '').trim()
    if (!titleLine || SKIP_SECTIONS.has(titleLine)) continue

    const section: PublicationSection = { title: titleLine, blocks: [] }
    let currentYearList: { year: string; items: string[] } | null = null
    let currentThesisYear: { year: string; lines: string[] } | null = null

    const flushYearList = () => {
      if (currentYearList && currentYearList.items.length > 0) {
        section.blocks.push({ type: 'year-list', ...currentYearList })
      }
      currentYearList = null
    }

    const flushThesisYear = () => {
      if (currentThesisYear && currentThesisYear.lines.length > 0) {
        section.blocks.push({ type: 'thesis-year', ...currentThesisYear })
      }
      currentThesisYear = null
    }

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]
      const yearMatch = line.match(/^#####\s+(.+)$/)
      const thesisYearMatch = line.match(/^####\s+(.+)$/)

      if (yearMatch) {
        flushThesisYear()
        flushYearList()
        currentYearList = { year: yearMatch[1].trim(), items: [] }
        continue
      }

      if (thesisYearMatch) {
        flushYearList()
        flushThesisYear()
        currentThesisYear = { year: thesisYearMatch[1].trim(), lines: [] }
        continue
      }

      if (line.match(/^---\s*$/) || line.match(/^##\s*$/)) continue

      const bulletMatch = line.match(/^\*\s+(.+)$/)
      if (bulletMatch) {
        flushThesisYear()
        if (!currentYearList) {
          currentYearList = { year: '', items: [] }
        }
        currentYearList.items.push(bulletMatch[1].trim())
        continue
      }

      const trimmedLine = line.trim()
      if (!trimmedLine) continue

      const urlLine = trimmedLine.replace(/^<(.+)>$/, '$1').trim()
      if (/^https?:\/\//.test(urlLine)) {
        flushThesisYear()
        if (currentYearList && currentYearList.items.length > 0) {
          const last = currentYearList.items.length - 1
          currentYearList.items[last] += ` [${urlLine}](${urlLine})`
          continue
        }
      }

      if (currentThesisYear) {
        currentThesisYear.lines.push(trimmedLine)
        continue
      }

      if (currentYearList) {
        flushYearList()
      }

      section.blocks.push({ type: 'paragraph', text: trimmedLine })
    }

    flushYearList()
    flushThesisYear()
    sections.push(section)
  }

  return sections.filter((s) => s.title && s.blocks.length > 0)
}
