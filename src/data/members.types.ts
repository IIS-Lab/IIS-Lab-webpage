export interface MemberRow {
  nameEn: string
  nameJa?: string
  url?: string
  affiliation?: string
}

export interface MemberSection {
  title: string
  rows: MemberRow[]
}
