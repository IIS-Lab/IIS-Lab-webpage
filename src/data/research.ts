import data from './researchProjects.json'
import type { ArticleBlock } from '../components/ArticleBlocks'

export interface ResearchProject {
  slug: string
  titleEn: string
  titleJa: string
  thumb: string
  blocks: ArticleBlock[]
}

export const researchProjects = data as ResearchProject[]

export function getResearchProject(slug: string): ResearchProject | undefined {
  return researchProjects.find((project) => project.slug === slug)
}

export function displayTitles(project: Pick<ResearchProject, 'titleEn' | 'titleJa'>) {
  const primary = project.titleEn || project.titleJa
  const secondary =
    project.titleJa && project.titleEn && project.titleJa !== project.titleEn
      ? project.titleJa
      : ''

  return { primary, secondary }
}
