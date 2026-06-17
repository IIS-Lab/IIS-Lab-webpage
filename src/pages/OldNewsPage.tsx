import { Link } from 'react-router-dom'
import { NewsList } from '../components/NewsList'
import { oldNewsIntro, oldNewsItems } from '../data/oldNews'
import styles from './ContactPage.module.css'
import newsStyles from '../components/News.module.css'

export function OldNewsPage() {
  return (
    <article className="entry-content">
      <p className={newsStyles.backLink}>
        <Link to="/#news">← IIS Lab</Link>
      </p>
      <h1 className={styles.pageTitle}>Old News</h1>
      {oldNewsIntro && <p>{oldNewsIntro}</p>}
      <hr className={newsStyles.divider} />
      <NewsList items={oldNewsItems} />
    </article>
  )
}
