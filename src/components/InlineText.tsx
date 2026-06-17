import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

function TextLink({ href, children }: { href: string; children: string }) {
  if (href.startsWith('/') && !href.startsWith('//')) {
    return <Link to={href}>{children}</Link>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

/** Inline **bold** and [label](url) — internal paths use React Router. */
export function InlineText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const token = match[0]
    if (token.startsWith('**')) {
      parts.push(
        <strong key={key++}>
          <InlineText text={token.slice(2, -2)} />
        </strong>,
      )
    } else {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/)
      if (linkMatch) {
        parts.push(
          <TextLink key={key++} href={linkMatch[2]}>
            {linkMatch[1]}
          </TextLink>,
        )
      }
    }
    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}
