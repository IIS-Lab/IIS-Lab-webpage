import type { NewsMonth } from './types'
import data from './news.json'

export const newsItems: NewsMonth[] = data as NewsMonth[]

export const recentPosts = [
  { title: 'アルゴリズム（2026年度）', href: '#' },
  {
    title: 'LLM-based In-situ Thought Exchanges for Critical Paper Reading',
    href: '#',
  },
  { title: '刺繍の縫い方の違いによる触覚特性の変化', href: '#' },
  {
    title: 'Understanding Reader Perception Shifts upon Disclosure of AI Authorship',
    href: '#',
  },
  { title: 'AIセルフクローンを用いた面接時の回答改善支援手法の検討', href: '#' },
]
