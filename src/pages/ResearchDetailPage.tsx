import { Link, Navigate, useParams } from 'react-router-dom'
import { ArticleBlocks } from '../components/ArticleBlocks'
import { displayTitles, getResearchProject } from '../data/research'
import styles from './ResearchDetailPage.module.css'

export function ResearchDetailPage() {
  const { slug } = useParams()
  const project = slug ? getResearchProject(slug) : undefined

  if (!project) {
    return <Navigate to="/research" replace />
  }

  const { primary, secondary } = displayTitles(project)

  return (
    <>
      <header className={styles.pageHeader}>
        <p className={styles.back}>
          <Link to="/research">← Research</Link>
        </p>
        <h2 className={styles.pageTitle}>{primary}</h2>
        {secondary && <p className={styles.subtitle}>{secondary}</p>}
      </header>

      <article className="entry-content">
        <ArticleBlocks blocks={project.blocks} />
      </article>
    </>
  )
}
