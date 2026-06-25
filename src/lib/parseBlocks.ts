import type { ArticleBlock } from '../components/ArticleBlocks'
import type { JoinBlock, JoinListItem, JoinNavItem } from '../data/join'

type Block = JoinBlock | ArticleBlock

function parseHeading(line: string): Block | null {
  const h3 = line.match(/^###\s+(.+?)(?:\s+\{#([^}]+)\})?$/)
  if (h3) {
    return {
      type: 'heading',
      text: h3[1].trim(),
      id: h3[2],
      level: 3,
    }
  }
  const h2 = line.match(/^##\s+(.+)$/)
  if (h2) {
    return { type: 'heading', text: h2[1].trim(), level: 2 }
  }
  return null
}

function parseImage(line: string): { src: string; alt: string } | null {
  const match = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
  if (!match) return null
  return { alt: match[1], src: match[2] }
}

function parseImageMeta(line: string): { width?: number; height?: number; alt?: string } {
  const match = line.match(/^<!--\s*width:\s*(\d+)(?:\s+height:\s*(\d+))?(?:\s+alt:\s*(.*?))?\s*-->$/)
  if (!match) return {}
  const meta: { width?: number; height?: number; alt?: string } = {}
  if (match[1]) meta.width = Number(match[1])
  if (match[2]) meta.height = Number(match[2])
  if (match[3]) meta.alt = match[3]
  return meta
}

function parseListItem(line: string): { depth: number; text: string } | null {
  const match = line.match(/^(\s*)-\s+(.+)$/)
  if (!match) return null
  const depth = Math.floor(match[1].length / 2)
  return { depth, text: match[2].trim() }
}

function parseNavItem(line: string): JoinNavItem | null {
  const match = line.match(/^-\s+\[([^\]]+)\]\(([^)]+)\)$/)
  if (!match) return null
  return { label: match[1], href: match[2] }
}

function appendListItem(items: JoinListItem[], depth: number, text: string) {
  const item: JoinListItem = { text }
  if (depth === 0) {
    items.push(item)
    return
  }
  let cursor = items[items.length - 1]
  for (let level = 1; level < depth; level += 1) {
    cursor.children ??= []
    if (!cursor.children.length) {
      cursor.children.push({ text: '' })
    }
    cursor = cursor.children[cursor.children.length - 1]
  }
  cursor.children ??= []
  cursor.children.push(item)
}

export function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const blocks: Block[] = []
  let paragraph: string[] = []
  let listItems: JoinListItem[] | null = null
  let navItems: JoinNavItem[] | null = null
  let pendingImage: { src: string; alt?: string; width?: number; height?: number } | null = null

  const flushParagraph = () => {
    if (!paragraph.length) return
    blocks.push({ type: 'p', text: paragraph.join('\n') })
    paragraph = []
  }

  const flushList = () => {
    if (!listItems?.length) {
      listItems = null
      return
    }
    blocks.push({ type: 'list', items: listItems })
    listItems = null
  }

  const flushNav = () => {
    if (!navItems?.length) {
      navItems = null
      return
    }
    blocks.push({ type: 'nav', items: navItems })
    navItems = null
  }

  const flushImage = () => {
    if (!pendingImage?.src) return
    blocks.push({
      type: 'img',
      src: pendingImage.src,
      alt: pendingImage.alt ?? '',
      width: pendingImage.width,
      height: pendingImage.height,
    })
    pendingImage = null
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const trimmed = line.trim()

    if (navItems) {
      if (trimmed === '<!-- /nav -->') {
        flushNav()
        continue
      }
      const navItem = parseNavItem(trimmed)
      if (navItem) {
        navItems.push(navItem)
        continue
      }
    }

    if (trimmed === '<!-- nav -->') {
      flushParagraph()
      flushList()
      flushImage()
      navItems = []
      continue
    }

    if (pendingImage && pendingImage.src) {
      const meta = parseImageMeta(trimmed)
      if (Object.keys(meta).length > 0) {
        pendingImage = { src: pendingImage.src, alt: pendingImage.alt, ...meta }
        flushImage()
        continue
      }
      flushImage()
    }

    if (trimmed === '***') {
      flushParagraph()
      flushList()
      flushImage()
      blocks.push({ type: 'hr' })
      continue
    }

    const heading = parseHeading(trimmed)
    if (heading) {
      flushParagraph()
      flushList()
      flushImage()
      blocks.push(heading)
      continue
    }

    const image = parseImage(trimmed)
    if (image) {
      flushParagraph()
      flushList()
      pendingImage = { src: image.src, alt: image.alt }
      continue
    }

    const listItem = parseListItem(line)
    if (listItem) {
      flushParagraph()
      flushImage()
      listItems ??= []
      appendListItem(listItems, listItem.depth, listItem.text)
      continue
    }

    if (!trimmed) {
      flushParagraph()
      flushList()
      continue
    }

    flushList()
    paragraph.push(trimmed)
  }

  flushParagraph()
  flushList()
  flushNav()
  flushImage()
  return blocks
}
