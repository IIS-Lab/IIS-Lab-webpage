import joinMarkdown from './join.md?raw'
import { parseBlocks } from '../lib/parseBlocks'
import type { JoinBlock } from './join.types'

export type { JoinBlock, JoinListItem, JoinNavItem } from './join.types'

export const joinBlocks = parseBlocks(joinMarkdown) as JoinBlock[]
