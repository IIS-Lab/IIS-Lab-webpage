import { JoinContent } from '../components/JoinContent'
import { realityCheckContent } from '../data/realitycheck'
import styles from './ContactPage.module.css'

export function RealityCheckPage() {
  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>{realityCheckContent.title}</h1>
      <JoinContent blocks={realityCheckContent.blocks} />
    </article>
  )
}
