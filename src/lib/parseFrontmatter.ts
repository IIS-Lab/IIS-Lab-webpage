export function parseFrontmatter(markdown: string): {
  meta: Record<string, string>
  body: string
} {
  if (!markdown.startsWith('---\n')) {
    return { meta: {}, body: markdown }
  }
  const end = markdown.indexOf('\n---\n', 4)
  if (end < 0) {
    return { meta: {}, body: markdown }
  }

  const raw = markdown.slice(4, end)
  const meta: Record<string, string> = {}
  const lines = raw.split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const blockMatch = line.match(/^([\w-]+):\s*\|\s*$/)
    const inlineMatch = line.match(/^([\w-]+):\s*(.*)$/)

    if (blockMatch) {
      const key = blockMatch[1]
      const blockLines: string[] = []
      i += 1
      while (i < lines.length) {
        const next = lines[i]
        if (/^[\w-]+:\s/.test(next)) break
        blockLines.push(next)
        i += 1
      }
      meta[key] = blockLines.join('\n').replace(/\n$/, '')
      continue
    }

    if (inlineMatch) {
      meta[inlineMatch[1]] = inlineMatch[2].trim()
    }
    i += 1
  }

  return { meta, body: markdown.slice(end + 5).replace(/^\n/, '') }
}

export function parseCommentBlock(body: string, label: string): string {
  const match = body.match(new RegExp(`<!-- ${label} -->\\n([\\s\\S]*?)(?=\\n<!-- |$)`))
  return match?.[1]?.trim() ?? ''
}

export function parseCommentList(body: string, label: string): string[] {
  const block = parseCommentBlock(body, label)
  if (!block) return []
  return block
    .split('\n')
    .map((line) => line.replace(/^-\s+/, '').trim())
    .filter(Boolean)
}
