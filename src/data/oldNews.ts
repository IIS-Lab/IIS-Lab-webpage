import oldNewsMarkdown from './markdown/oldNews.md?raw'
import { parseOldNewsMarkdown } from '../lib/parseNewsMarkdown'

const { intro, months } = parseOldNewsMarkdown(oldNewsMarkdown)

export const oldNewsIntro = intro
export { months as oldNewsItems }
