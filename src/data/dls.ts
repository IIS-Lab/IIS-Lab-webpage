import dlsMarkdown from './dls.md?raw'
import { parseFrontmatter } from '../lib/parseFrontmatter'

const { meta, body } = parseFrontmatter(dlsMarkdown)

export const dlsIntro = {
  ja: meta.intro_ja ?? '',
  en: meta.intro_en ?? '',
}

export const dlsLectures = body
  .split('\n')
  .map((line) => line.replace(/^-\s+/, '').trim())
  .filter(Boolean)
