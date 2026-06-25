import realityCheckMarkdown from './realitycheck.md?raw'
import { parseBlocks } from '../lib/parseBlocks'
import { parseFrontmatter } from '../lib/parseFrontmatter'
import type { JoinBlock } from './join.types'

export interface RealityCheckContent {
  title: string
  blocks: JoinBlock[]
}

const { meta, body } = parseFrontmatter(realityCheckMarkdown)

export const realityCheckContent: RealityCheckContent = {
  title: meta.title ?? '',
  blocks: parseBlocks(body) as JoinBlock[],
}
