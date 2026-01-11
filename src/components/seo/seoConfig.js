/**
 * SEO Configuration for all pages
 * Contains bilingual meta tags for Google and Baidu optimization
 */

import { LANGUAGES } from '../../utils/i18n/languageConstants';
import { getFormattedStyleCount } from '../../utils/styleStats.js';

// Dynamic style count (e.g., "70+")
const STYLE_COUNT = getFormattedStyleCount();

// Base URL for canonical and absolute URLs
export const BASE_URL = 'https://www.uiprompt.site';

// Site name for meta tags
export const SITE_NAME = {
  [LANGUAGES.ZH_CN]: 'UI Style Prompt - AI UI 设计风格提示词库',
  [LANGUAGES.EN_US]: 'UI Style Prompt - AI UI Design Style Library',
};

// Default OG image (optimized JPEG for better performance)
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

// Static page SEO configurations
export const PAGE_SEO = {
  home: {
    [LANGUAGES.ZH_CN]: {
      title: 'UI 设计风格提示词库',
      description:
        `探索 ${STYLE_COUNT} 种现代 UI 设计风格，获取专业 AI 生成提示词。包含玻璃态、新拟物、扁平化、赛博朋克等流行设计系统，帮助您的 AI 生成独特 UI。`,
      keywords:
        'UI设计,AI提示词,设计风格,玻璃态,新拟物,扁平化,CSS,前端设计,UI模板',
    },
    [LANGUAGES.EN_US]: {
      title: 'UI Design Style Prompts',
      description:
        `Explore ${STYLE_COUNT} modern UI design styles with professional AI prompts. Includes Glassmorphism, Neumorphism, Flat Design, Cyberpunk and more design systems for unique AI-generated UIs.`,
      keywords:
        'UI design,AI prompts,design styles,glassmorphism,neumorphism,flat design,CSS,frontend design,UI templates',
    },
  },
  styles: {
    [LANGUAGES.ZH_CN]: {
      title: '设计风格库',
      description:
        '浏览 78 种 UI 设计风格家族，每个风格都有完整的提示词模板、CSS 规范和实时预览。从极简主义到复古赛博朋克，找到您的设计灵感。',
      keywords: 'UI风格库,设计模板,CSS风格,AI提示词,设计系统,前端样式',
    },
    [LANGUAGES.EN_US]: {
      title: 'Style Library',
      description:
        'Browse 78 UI design style families, each with complete prompt templates, CSS specifications and live previews. From minimalism to retro cyberpunk, find your design inspiration.',
      keywords:
        'UI style library,design templates,CSS styles,AI prompts,design systems,frontend styles',
    },
  },
  components: {
    [LANGUAGES.ZH_CN]: {
      title: 'UI 组件库',
      description:
        `浏览 ${STYLE_COUNT} 种可复用 UI 组件，包含按钮、表单、卡片、导航等。每个组件都有多种风格变体和即用代码。`,
      keywords: 'UI组件,React组件,按钮,表单,卡片,导航,组件库,前端组件',
    },
    [LANGUAGES.EN_US]: {
      title: 'UI Components',
      description:
        `Browse ${STYLE_COUNT} reusable UI components including buttons, forms, cards, navigation and more. Each component has multiple style variants with ready-to-use code.`,
      keywords:
        'UI components,React components,buttons,forms,cards,navigation,component library,frontend components',
    },
  },
  layouts: {
    [LANGUAGES.ZH_CN]: {
      title: '布局系统',
      description:
        '探索现代 UI 布局模式和网格系统。包含响应式布局、杂志排版、仪表盘等专业布局方案。',
      keywords: 'UI布局,网格系统,响应式设计,页面布局,CSS Grid,Flexbox',
    },
    [LANGUAGES.EN_US]: {
      title: 'Layout Systems',
      description:
        'Explore modern UI layout patterns and grid systems. Includes responsive layouts, magazine typography, dashboards and professional layout solutions.',
      keywords:
        'UI layouts,grid systems,responsive design,page layouts,CSS Grid,Flexbox',
    },
  },
  about: {
    [LANGUAGES.ZH_CN]: {
      title: '关于我们',
      description:
        '了解 UI Style Prompt 项目的愿景和使命。我们致力于帮助开发者和设计师用 AI 生成独特、高质量的 UI 设计。',
      keywords: 'UI设计,AI生成,设计工具,开源项目',
    },
    [LANGUAGES.EN_US]: {
      title: 'About Us',
      description:
        'Learn about the vision and mission of UI Style Prompt. We help developers and designers generate unique, high-quality UI designs with AI.',
      keywords: 'UI design,AI generation,design tools,open source project',
    },
  },
};

// URL language code mapping (for shorter URLs)
export const URL_LANG_MAP = {
  zh: LANGUAGES.ZH_CN,
  en: LANGUAGES.EN_US,
};

// Reverse mapping
export const LANG_TO_URL = {
  [LANGUAGES.ZH_CN]: 'zh',
  [LANGUAGES.EN_US]: 'en',
};

/**
 * Get page SEO config by page name and language
 * @param {string} pageName - Page identifier (home, styles, components, etc.)
 * @param {string} language - Language code (zh-CN or en-US)
 * @returns {Object} SEO configuration
 */
export function getPageSEO(pageName, language) {
  const config = PAGE_SEO[pageName];
  if (!config) {
    return PAGE_SEO.home[language] || PAGE_SEO.home[LANGUAGES.ZH_CN];
  }
  return config[language] || config[LANGUAGES.ZH_CN];
}

/**
 * Generate canonical URL for a page
 * @param {string} path - Page path (e.g., '/styles', '/styles/preview/glassmorphism')
 * @param {string} language - Language code
 * @returns {string} Full canonical URL
 */
export function getCanonicalUrl(path, language) {
  const langPrefix = LANG_TO_URL[language] || 'zh';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}/${langPrefix}${cleanPath}`;
}

/**
 * Generate alternate language URLs for hreflang tags
 * @param {string} path - Page path without language prefix
 * @returns {Array} Array of {lang, href} objects
 */
export function getAlternateUrls(path) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return [
    { lang: 'zh-CN', href: `${BASE_URL}/zh${cleanPath}` },
    { lang: 'en-US', href: `${BASE_URL}/en${cleanPath}` },
    { lang: 'x-default', href: `${BASE_URL}/zh${cleanPath}` }, // Default to Chinese
  ];
}

/**
 * Get OG locale from language code
 * @param {string} language - Language code
 * @returns {string} OG locale
 */
export function getOGLocale(language) {
  const localeMap = {
    [LANGUAGES.ZH_CN]: 'zh_CN',
    [LANGUAGES.EN_US]: 'en_US',
  };
  return localeMap[language] || 'zh_CN';
}
