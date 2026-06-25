import { useMemo } from 'react'
import { PublicationsList } from '../components/PublicationsList'
import publicationsMarkdown from '../data/markdown/publications.md?raw'
import { parsePublications } from '../lib/parsePublications'
import styles from './MembersPage.module.css'

export function PublicationsPage() {
  const sections = useMemo(() => parsePublications(publicationsMarkdown), [])

  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>Publications</h1>
      <PublicationsList sections={sections} />
    </article>
  )
}
