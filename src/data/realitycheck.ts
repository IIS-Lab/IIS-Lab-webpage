import data from './realitycheck.json'
import type { JoinBlock } from './join'

export interface RealityCheckContent {
  title: string
  blocks: JoinBlock[]
}

export const realityCheckContent = data as RealityCheckContent
