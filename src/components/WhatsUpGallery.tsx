import type { WhatsUpSeason } from '../data/whatsup'
import { assetUrl } from '../lib/assets'
import styles from './WhatsUpGallery.module.css'

interface WhatsUpGalleryProps {
  seasons: WhatsUpSeason[]
}

export function WhatsUpGallery({ seasons }: WhatsUpGalleryProps) {
  return (
    <>
      {seasons.map((season) => (
        <section key={season.title} className={styles.season}>
          <h2 className={styles.seasonTitle}>{season.title}</h2>
          <ul className={styles.gallery}>
            {season.items.map((item, index) => (
              <li key={`${season.title}-${index}`} className={styles.item}>
                <figure className={styles.figure}>
                  <div className={styles.imageWrap}>
                    <img
                      src={assetUrl(item.image)}
                      alt={item.caption}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className={styles.caption}>{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
