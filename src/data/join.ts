import data from './join.json'

export interface JoinListItem {
  text: string
  children?: JoinListItem[]
}

export interface JoinNavItem {
  href: string
  label: string
}

export type JoinBlock =
  | { type: 'p'; text: string }
  | { type: 'heading'; text: string; id?: string; level?: 2 | 3 }
  | { type: 'hr' }
  | { type: 'list'; items: JoinListItem[] }
  | { type: 'nav'; items: JoinNavItem[] }

export const joinBlocks = data as JoinBlock[]
