import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/assets'
import { InlineText } from './InlineText'
import styles from './ArticleBlocks.module.css'

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'heading'; text: string; id?: string; level?: 2 | 3 }
  | { type: 'hr' }
  | { type: 'list'; items: Array<string | { text: string; children?: Array<{ text: string }> }> }
  | { type: 'nav'; items: Array<{ href: string; label: string }> }
  | { type: 'img'; src: string; alt?: string; width?: number; height?: number }

interface ArticleBlocksProps {
  blocks: ArticleBlock[]
  variant?: 'default' | 'compact'
}

function BlockLink({ href, children }: { href: string; children: string }) {
  if (href.startsWith('/') && !href.startsWith('//')) {
    return <Link to={href}>{children}</Link>
  }
  if (href.startsWith('#')) {
    return <a href={href}>{children}</a>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

function ListItem({
  item,
}: {
  item: { text: string; children?: Array<{ text: string }> }
}) {
  return (
    <li>
      <InlineText text={item.text} />
      {item.children && item.children.length > 0 && (
        <ul>
          {item.children.map((child, index) => (
            <ListItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

function RichParagraph({ text }: { text: string }) {
  const lines = text
    .replace(/\n{2,}/g, '\n')
    .split('\n')
    .filter((line) => line.length > 0)

  if (lines.length <= 1) {
    return <InlineText text={lines[0] ?? text} />
  }

  const parts: ReactNode[] = []
  lines.forEach((line, index) => {
    if (index > 0) parts.push(<br key={`br-${index}`} />)
    parts.push(<InlineText key={index} text={line} />)
  })
  return <>{parts}</>
}

export function ArticleBlocks({ blocks, variant = 'default' }: ArticleBlocksProps) {
  return (
    <div
      className={
        variant === 'compact' ? `${styles.content} ${styles.contentCompact}` : styles.content
      }
    >
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={index}>
                <RichParagraph text={block.text} />
              </p>
            )
          case 'heading': {
            const Tag = block.level === 3 ? 'h3' : 'h2'
            return (
              <Tag
                key={index}
                id={block.id}
                className={block.id ? styles.anchorHeading : undefined}
              >
                {block.text}
              </Tag>
            )
          }
          case 'hr':
            return <hr key={index} className={styles.divider} />
          case 'list':
            return (
              <ul key={index} className={styles.list}>
                {block.items.map((item, i) => (
                  <ListItem
                    key={i}
                    item={typeof item === 'string' ? { text: item } : item}
                  />
                ))}
              </ul>
            )
          case 'nav':
            return (
              <ul key={index} className={styles.nav}>
                {block.items.map((item) => (
                  <li key={item.href}>
                    <BlockLink href={item.href}>{item.label}</BlockLink>
                  </li>
                ))}
              </ul>
            )
          case 'img':
            return (
              <figure key={index} className={styles.figure}>
                <img
                  src={assetUrl(block.src)}
                  alt={block.alt ?? ''}
                  className={styles.image}
                  width={block.width}
                  height={block.height}
                  loading="lazy"
                />
              </figure>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
