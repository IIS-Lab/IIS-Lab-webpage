import { InlineText } from '../components/InlineText'
import { NewsSection } from '../components/NewsSection'
import * as home from '../data/homeContent'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>IIS Lab</h2>
      </header>

      <article className="entry-content">
        <p>
          <InlineText text={home.welcome.en} />
        </p>
        <p>
          <InlineText text={home.welcome.ja} />
        </p>

        <h2 className={styles.sectionTitle}>Mission Statement / IIS Labのミッション</h2>
        <p>{home.mission.en}</p>
        <p>{home.mission.ja}</p>

        <h2 className={styles.sectionTitle}>Research domains / 研究領域</h2>
        <p>
          <InlineText text={home.researchIntro.en} />
        </p>
        <ul className={styles.topicList}>
          {home.researchTopics.en.map((topic) => (
            <li key={topic}>
              <InlineText text={topic} />
            </li>
          ))}
        </ul>
        <p>
          <InlineText text={home.researchIntro.ja} />
        </p>
        <ul className={styles.topicList}>
          {home.researchTopics.ja.map((topic) => (
            <li key={topic}>
              <InlineText text={topic} />
            </li>
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>IIS Lab Philosophy</h2>
        <blockquote>
          <p>
            <em>{home.philosophy.quote.en}</em>
          </p>
        </blockquote>
        <p>{home.philosophy.en}</p>
        <blockquote>
          <p>{home.philosophy.quote.ja}</p>
        </blockquote>
        <p>{home.philosophy.ja}</p>

        <hr className={styles.divider} />

        <NewsSection />
      </article>
    </>
  )
}
