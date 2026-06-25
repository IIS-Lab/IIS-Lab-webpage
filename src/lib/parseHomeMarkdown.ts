import {
  parseCommentBlock,
  parseCommentList,
  parseFrontmatter,
} from './parseFrontmatter'

export interface HomeContent {
  welcome: { en: string; ja: string }
  mission: { en: string; ja: string }
  researchIntro: { en: string; ja: string }
  researchTopics: { en: string[]; ja: string[] }
  philosophy: {
    quote: { en: string; ja: string }
    en: string
    ja: string
  }
}

export function parseHomeMarkdown(markdown: string): HomeContent {
  const { meta, body } = parseFrontmatter(markdown)

  return {
    welcome: {
      en: meta.welcome_en ?? parseCommentBlock(body, 'welcome-en'),
      ja: meta.welcome_ja ?? parseCommentBlock(body, 'welcome-ja'),
    },
    mission: {
      en: meta.mission_en ?? parseCommentBlock(body, 'mission-en'),
      ja: meta.mission_ja ?? parseCommentBlock(body, 'mission-ja'),
    },
    researchIntro: {
      en: meta.research_intro_en ?? parseCommentBlock(body, 'research-intro-en'),
      ja: meta.research_intro_ja ?? parseCommentBlock(body, 'research-intro-ja'),
    },
    researchTopics: {
      en: parseCommentList(body, 'research-topics-en'),
      ja: parseCommentList(body, 'research-topics-ja'),
    },
    philosophy: {
      quote: {
        en: meta.philosophy_quote_en ?? parseCommentBlock(body, 'philosophy-quote-en'),
        ja: meta.philosophy_quote_ja ?? parseCommentBlock(body, 'philosophy-quote-ja'),
      },
      en: meta.philosophy_en ?? parseCommentBlock(body, 'philosophy-en'),
      ja: meta.philosophy_ja ?? parseCommentBlock(body, 'philosophy-ja'),
    },
  }
}
