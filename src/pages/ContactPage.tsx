import { contactContent } from '../data/contact'
import { assetUrl } from '../lib/assets'
import { InlineText } from '../components/InlineText'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const {
    en,
    jaBeforeMapLink,
    jaMapLinkLabel,
    jaAfterMapLink,
    mapImage,
    mapFull,
    hongoCampusMapEn,
    hongoCampusMapJa,
    jaDetailedMap,
  } = contactContent

  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>Contact Us</h1>

      <div className={styles.body}>
        <p>
          <InlineText text={en} />
        </p>

        <p>
          <InlineText text={jaBeforeMapLink} />
          <a
            href={jaDetailedMap.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {jaMapLinkLabel}
          </a>
          {jaAfterMapLink}
        </p>

        <figure className={styles.map}>
          <a
            href={assetUrl(mapFull)}
            className={styles.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assetUrl(mapImage)}
              alt="map"
              className={styles.mapImage}
              width={900}
              height={470}
            />
          </a>
        </figure>

        <p>
          For Hongo Campus, please use the following link:{' '}
          <a
            href={hongoCampusMapEn.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hongoCampusMapEn.label}
          </a>
          .
        </p>

        <p>
          本郷キャンパス全体の地図はこちらにあります:{' '}
          <a
            href={hongoCampusMapJa.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hongoCampusMapJa.label}
          </a>
          .
        </p>
      </div>
    </article>
  )
}
