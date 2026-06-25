import type { ArticleBlock } from '../components/ArticleBlocks'
import { parseBlocks } from '../lib/parseBlocks'
import { parseFrontmatter } from '../lib/parseFrontmatter'
import slugOrder from './markdown/research/order.txt?raw'

const modules = import.meta.glob('./markdown/research/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export interface ResearchProject {
  slug: string
  titleEn: string
  titleJa: string
  thumb: string
  blocks: ArticleBlock[]
}

const bySlug = new Map<string, ResearchProject>()

for (const [path, markdown] of Object.entries(modules)) {
  if (path.endsWith('/order.txt')) continue
  const { meta, body } = parseFrontmatter(markdown)
  const slug = meta.slug ?? ''
  if (!slug) continue
  bySlug.set(slug, {
    slug,
    titleEn: meta.titleEn ?? '',
    titleJa: meta.titleJa ?? '',
    thumb: meta.thumb ?? '',
    blocks: parseBlocks(body) as ArticleBlock[],
  })
}

export const researchProjects = slugOrder
  .trim()
  .split('\n')
  .map((slug) => bySlug.get(slug))
  .filter((project): project is ResearchProject => project !== undefined)

export function getResearchProject(slug: string): ResearchProject | undefined {
  return bySlug.get(slug)
}

function normalizeTitle(value: string): string {
  return value.trim()
}

export function displayTitles(project: Pick<ResearchProject, 'titleEn' | 'titleJa'>) {
  const titleEn = normalizeTitle(project.titleEn)
  const titleJa = normalizeTitle(project.titleJa)
  const primary = titleEn || titleJa
  const secondary =
    titleJa && titleEn && titleJa !== titleEn ? titleJa : ''

  return { primary, secondary }
}
