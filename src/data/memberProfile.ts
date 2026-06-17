import data from './koji-yatani.json'
import type { ArticleBlock } from '../components/ArticleBlocks'

export interface MemberProfile {
  slug: string
  title: string
  blocks: ArticleBlock[]
}

const profiles: Record<string, MemberProfile> = {
  [data.slug]: data as MemberProfile,
}

export function getMemberProfile(slug: string): MemberProfile | undefined {
  return profiles[slug]
}
