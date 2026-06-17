import { ResearchGrid } from '../components/ResearchGrid'
import styles from './MembersPage.module.css'

export function ResearchPage() {
  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>Research</h1>
      <ResearchGrid />
    </article>
  )
}
