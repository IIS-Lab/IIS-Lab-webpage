import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { headerBanners } from '../data/headerBanners'
import { mainNav } from '../data/navigation'
import styles from './Header.module.css'

function pickBanner(current: string): string {
  if (headerBanners.length === 0) return ''
  if (headerBanners.length === 1) return headerBanners[0]

  const choices = headerBanners.filter((banner) => banner !== current)
  return choices[Math.floor(Math.random() * choices.length)]
}

function randomBanner(): string {
  if (headerBanners.length === 0) return ''
  return headerBanners[Math.floor(Math.random() * headerBanners.length)]
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bannerSrc, setBannerSrc] = useState(randomBanner)
  const location = useLocation()
  const previousPath = useRef(location.pathname)

  useEffect(() => {
    if (previousPath.current === location.pathname) return
    previousPath.current = location.pathname
    setBannerSrc((current) => pickBanner(current))
  }, [location.pathname])

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header className={styles.header} role="banner">
      {bannerSrc ? (
        <img
          key={bannerSrc}
          src={bannerSrc}
          alt="Interactive Intelligent Systems Laboratory"
          className={styles.banner}
        />
      ) : null}

      <div className={styles.topHeader}>
        <Link to="/" className={styles.siteTitle} onClick={() => setMenuOpen(false)}>
          <h1>
            Interactive Intelligent Systems
            <br />
            Laboratory
          </h1>
        </Link>
        <p className={styles.siteDescription}>The University of Tokyo</p>
      </div>

      <div className={styles.stickyBar}>
        <div className={styles.stickyInner}>
          <Link to="/" className={styles.navSiteTitle} onClick={() => setMenuOpen(false)}>
            IIS Lab
          </Link>

          <button
            type="button"
            className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label="Main navigation"
          >
            <ul className={styles.menu}>
              {mainNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={isActive(item.path) ? styles.navActive : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
