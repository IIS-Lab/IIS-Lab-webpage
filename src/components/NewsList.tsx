import type { NewsMonth } from '../data/types'
import { InlineText } from './InlineText'
import styles from './News.module.css'

interface NewsListProps {
  items: NewsMonth[]
}

export function NewsList({ items }: NewsListProps) {
  return (
    <>
      {items.map((month) => (
        <div key={month.date} className={styles.monthGroup}>
          <h2 className={styles.monthLabel}>{month.date}</h2>
          {month.items.map((item, index) => (
            <article key={`${month.date}-${index}`} className={styles.newsItem}>
              <h3>{item.title.en}</h3>
              {item.body?.en && <p>{item.body.en}</p>}
              {!item.body?.en && item.body?.ja && <p>{item.body.ja}</p>}
              {item.body?.en && item.body?.ja && item.body.ja !== item.body.en && (
                <p>{item.body.ja}</p>
              )}
              {item.papers?.map((paper) => (
                <p key={paper} className={styles.paperLine}>
                  <InlineText text={paper} />
                </p>
              ))}
              {item.links?.map((link) => (
                <p key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </p>
              ))}
            </article>
          ))}
        </div>
      ))}
    </>
  )
}
