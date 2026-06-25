import membersMarkdown from './markdown/Members.md?raw'
import { parseMembersMarkdown } from '../lib/parseMembersMarkdown'

export type { MemberRow, MemberSection } from './members.types'

const { intro, sections } = parseMembersMarkdown(membersMarkdown)

export const membersIntro = intro
export const memberSections = sections
