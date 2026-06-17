import type { NewsMonth } from './types'
import data from './oldNews.json'

export const oldNewsIntro = data.intro as string
export const oldNewsItems = data.months as NewsMonth[]
