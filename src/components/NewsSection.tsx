import { Link } from 'react-router-dom'
import { newsItems } from '../data/news'
import { NewsList } from './NewsList'
import styles from './News.module.css'

export function NewsSection() {
  return (
    <section className={styles.newsSection} id="news">
      <h1>News</h1>
      <NewsList items={newsItems} />
      <p className={styles.olderNews}>
        以前のニュースはこちらにあります． Older news is available{' '}
        <Link to="/news/old">here</Link>.
      </p>
    </section>
  )
}
