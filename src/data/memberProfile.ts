import profileMarkdown from './markdown/koji-yatani.md?raw'
import type { ArticleBlock } from '../components/ArticleBlocks'
import { parseBlocks } from '../lib/parseBlocks'
import { parseFrontmatter } from '../lib/parseFrontmatter'

export interface MemberProfile {
  slug: string
  title: string
  blocks: ArticleBlock[]
}

const { meta, body } = parseFrontmatter(profileMarkdown)
const profile: MemberProfile = {
  slug: meta.slug ?? '',
  title: meta.title ?? '',
  blocks: parseBlocks(body) as ArticleBlock[],
}

const profiles: Record<string, MemberProfile> = {
  [profile.slug]: profile,
}

export function getMemberProfile(slug: string): MemberProfile | undefined {
  return profiles[slug]
}
