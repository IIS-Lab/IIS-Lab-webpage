import { Link } from 'react-router-dom'
import { Fragment, useMemo } from 'react'
import type { MemberRow, MemberSection } from '../data/members'
import styles from './MembersTable.module.css'

function isInternalUrl(url: string) {
  return url.startsWith('/') && !url.startsWith('//')
}

function NameCell({ row }: { row: MemberRow }) {
  if (row.url) {
    if (isInternalUrl(row.url)) {
      return <Link to={row.url}>{row.nameEn}</Link>
    }
    return (
      <a href={row.url} target="_blank" rel="noopener noreferrer">
        {row.nameEn}
      </a>
    )
  }
  return <>{row.nameEn}</>
}

function JaNameCell({ row }: { row: MemberRow }) {
  if (!row.nameJa) return null
  if (row.url) {
    if (isInternalUrl(row.url)) {
      return <Link to={row.url}>{row.nameJa}</Link>
    }
    return (
      <a href={row.url} target="_blank" rel="noopener noreferrer">
        {row.nameJa}
      </a>
    )
  }
  return <>{row.nameJa}</>
}

interface MembersTableProps {
  sections: MemberSection[]
}

export function MembersTable({ sections }: MembersTableProps) {
  const rowOffsets = useMemo(() => {
    let index = 0
    return sections.map((section) => {
      const start = index
      index += section.rows.length
      return start
    })
  }, [sections])

  return (
    <div className={styles.wrapper}>
      <table className={`${styles.table} tablepress`}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>名前</th>
            <th>所属 / AFFILIATION</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, sectionIndex) => (
            <Fragment key={section.title}>
              <tr className={styles.sectionRow}>
                <td colSpan={3}>
                  <strong>{section.title}</strong>
                </td>
              </tr>
              {section.rows.map((row, rowIndex) => {
                const globalIndex = rowOffsets[sectionIndex] + rowIndex
                const rowClass = globalIndex % 2 === 1 ? styles.rowEven : styles.rowOdd
                return (
                  <tr key={`${section.title}-${row.nameEn}`} className={rowClass}>
                    <td className={styles.nameCell} data-label="NAME">
                      <NameCell row={row} />
                    </td>
                    <td className={styles.nameCell} data-label="名前">
                      <JaNameCell row={row} />
                    </td>
                    <td className={styles.affiliationCell} data-label="所属 / AFFILIATION">
                      {row.affiliation}
                    </td>
                  </tr>
                )
              })}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
