import { Link, Navigate, useParams } from 'react-router-dom'
import { ArticleBlocks } from '../components/ArticleBlocks'
import { getMemberProfile } from '../data/memberProfile'
import styles from './MemberProfilePage.module.css'

export function MemberProfilePage() {
  const { slug } = useParams()
  const profile = slug ? getMemberProfile(slug) : undefined

  if (!profile) {
    return <Navigate to="/members" replace />
  }

  return (
    <article className="entry-content">
      <header className={styles.header}>
        <p className={styles.back}>
          <Link to="/members">← Members</Link>
        </p>
        <h1 className={styles.pageTitle}>{profile.title}</h1>
      </header>
      <ArticleBlocks blocks={profile.blocks} variant="compact" />
    </article>
  )
}
