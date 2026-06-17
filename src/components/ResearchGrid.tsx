import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/assets'
import { displayTitles, researchProjects } from '../data/research'
import styles from './ResearchGrid.module.css'

export function ResearchGrid() {
  return (
    <ul className={styles.grid}>
      {researchProjects.map((project) => {
        const { primary, secondary } = displayTitles(project)
        return (
          <li key={project.slug} className={styles.item}>
            <Link to={`/research/${project.slug}`} className={styles.link}>
              <div className={styles.imageWrap}>
                <img
                  src={assetUrl(project.thumb)}
                  alt={primary}
                  className={styles.image}
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <hr className={styles.divider} />
              <div className={styles.text}>
                <h2 className={styles.title}>{primary}</h2>
                {secondary && <p className={styles.subtitle}>{secondary}</p>}
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
