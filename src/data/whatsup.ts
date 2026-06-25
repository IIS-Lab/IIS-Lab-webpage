import whatsupMarkdown from './whatsup.md?raw'
import { parseWhatsUpMarkdown } from '../lib/parseWhatsUpMarkdown'

export type { WhatsUpItem, WhatsUpSeason } from '../lib/parseWhatsUpMarkdown'

const { intro, seasons } = parseWhatsUpMarkdown(whatsupMarkdown)

export const whatsUpIntro = intro
export const whatsUpSeasons = seasons
