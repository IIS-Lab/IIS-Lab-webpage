import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/assets'
import styles from './InlineText.module.css'

function isStaticAssetLink(href: string): boolean {
  return (
    href.endsWith('.pdf') ||
    href.startsWith('/wp-content/') ||
    href.startsWith('/paper/')
  )
}

function isResourceLabel(label: string): boolean {
  const core = label.replace(/^\(|\)$/g, '').toLowerCase()
  return core === 'paper' || core === 'video' || core === 'poster'
}

function formatResourceLabel(label: string): string {
  const core = label.replace(/^\(|\)$/g, '').toLowerCase()
  if (core === 'paper' || core === 'video' || core === 'poster') {
    return `(${core === 'poster' ? 'paper' : core})`
  }
  return label
}

function TextLink({ href, children }: { href: string; children: string }) {
  const label = formatResourceLabel(children)
  const resource = isStaticAssetLink(href) || isResourceLabel(children)

  if (resource) {
    return (
      <a
        href={isStaticAssetLink(href) ? assetUrl(href) : href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resourceLink}
      >
        {label}
      </a>
    )
  }
  if (label !== children && (href.startsWith('http://') || href.startsWith('https://'))) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resourceLink}
      >
        {label}
      </a>
    )
  }
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
