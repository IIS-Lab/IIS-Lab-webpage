import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import type { JoinBlock, JoinListItem } from '../data/join'
import { InlineText } from './InlineText'
import styles from './JoinContent.module.css'

interface JoinContentProps {
  blocks: JoinBlock[]
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

function RichText({ text }: { text: string }) {
  const lines = text
    .replace(/\n{2,}/g, '\n')
    .split('\n')
    .filter((line) => line.length > 0)

  if (lines.length <= 1) {
    return <InlineText text={lines[0] ?? text} />
  }

  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          <InlineText text={line} />
        </Fragment>
      ))}
    </>
  )
}

function ListItem({ item }: { item: JoinListItem }) {
  return (
    <li>
      <InlineText text={item.text} />
      {item.children && item.children.length > 0 && (
        <ul className={styles.itemize}>
          {item.children.map((child, index) => (
            <ListItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function JoinContent({ blocks }: JoinContentProps) {
  return (
    <div className={styles.content}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={index}>
                <RichText text={block.text} />
              </p>
            )
          case 'heading': {
            const Tag = block.level === 2 ? 'h2' : 'h3'
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
              <ul key={index} className={`${styles.list} ${styles.itemize}`}>
                {block.items.map((item, i) => (
                  <ListItem key={i} item={item} />
                ))}
              </ul>
            )
          case 'nav':
            return (
              <ul key={index} className={`${styles.nav} ${styles.itemize}`}>
                {block.items.map((item) => (
                  <li key={item.href}>
                    <BlockLink href={item.href}>{item.label}</BlockLink>
                  </li>
                ))}
              </ul>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
