import homeMarkdown from './markdown/IIS_Lab.md?raw'
import { parseHomeMarkdown } from '../lib/parseHomeMarkdown'

const home = parseHomeMarkdown(homeMarkdown)

export const welcome = home.welcome
export const mission = home.mission
export const researchIntro = home.researchIntro
export const researchTopics = home.researchTopics
export const philosophy = home.philosophy
