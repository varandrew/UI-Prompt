/**
 * JSON-LD Schema Generators
 * Creates structured data for rich snippets in search results
 */

import { BASE_URL, LANG_TO_URL } from './seoConfig';
import { LANGUAGES } from '../../utils/i18n/languageConstants';
import { getFormattedStyleCount } from '../../utils/styleStats.js';
import { getFormattedComponentCount } from '../../utils/componentStats.js';

// Dynamic counts (e.g., "70+", "20+")
const STYLE_COUNT = getFormattedStyleCount();
const COMPONENT_COUNT = getFormattedComponentCount();

/**
 * Generate WebSite schema for the main site
 * @param {string} language - Current language
 * @returns {Object} JSON-LD schema
 */
export function generateWebsiteSchema(language) {
  const langPrefix = LANG_TO_URL[language] || 'zh';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UI Style Prompt',
    alternateName: 'UIP',
    url: BASE_URL,
    description:
      language === LANGUAGES.ZH_CN
        ? 'AI 驱动的 UI 设计风格提示词库，帮助生成独特的用户界面设计'
        : 'AI-powered UI design style prompt library for generating unique user interface designs',
    inLanguage: [LANGUAGES.ZH_CN, LANGUAGES.EN_US],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/${langPrefix}/styles?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Organization schema
 * @returns {Object} JSON-LD schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UI Style Prompt',
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    sameAs: [],
  };
}

/**
 * Generate ItemList schema for style gallery pages
 * @param {Array} styles - Array of style objects
 * @param {string} language - Current language
 * @returns {Object} JSON-LD schema
 */
export function generateStyleListSchema(styles, language) {
  const langPrefix = LANG_TO_URL[language] || 'zh';

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name:
      language === LANGUAGES.ZH_CN ? 'UI 设计风格库' : 'UI Design Style Library',
    description:
      language === LANGUAGES.ZH_CN
        ? `探索 ${STYLE_COUNT} 种现代 UI 设计风格`
        : `Explore ${STYLE_COUNT} modern UI design styles`,
    numberOfItems: styles.length,
    itemListElement: styles.slice(0, 10).map((style, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: style.name || style.title,
        description: style.description,
        url: `${BASE_URL}/${langPrefix}/styles/preview/${style.familyId || style.id}`,
      },
    })),
  };
}

/**
 * Generate CreativeWork schema for individual style pages
 * @param {Object} style - Style object with name, description, etc.
 * @param {string} language - Current language
 * @returns {Object} JSON-LD schema
 */
export function generateStyleDetailSchema(style, language) {
  const langPrefix = LANG_TO_URL[language] || 'zh';
  const styleId = style.familyId || style.id;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${BASE_URL}/${langPrefix}/styles/preview/${styleId}`,
    name: style.name || style.title,
    description: style.description,
    creator: {
      '@type': 'Organization',
      name: 'UI Style Prompt',
    },
    inLanguage: language,
    keywords: style.tags?.join(', ') || '',
    genre: 'UI Design Style',
    datePublished: style.createdAt || new Date().toISOString().split('T')[0],
    dateModified: style.updatedAt || new Date().toISOString().split('T')[0],
    url: `${BASE_URL}/${langPrefix}/styles/preview/${styleId}`,
  };
}

/**
 * Generate ItemList schema for component gallery pages
 * @param {Array} components - Array of component objects
 * @param {string} language - Current language
 * @returns {Object} JSON-LD schema
 */
export function generateComponentListSchema(components, language) {
  const langPrefix = LANG_TO_URL[language] || 'zh';

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: language === LANGUAGES.ZH_CN ? 'UI 组件库' : 'UI Component Library',
    description:
      language === LANGUAGES.ZH_CN
        ? `浏览 ${COMPONENT_COUNT} 种可复用 UI 组件`
        : `Browse ${COMPONENT_COUNT} reusable UI components`,
    numberOfItems: components.length,
    itemListElement: components.slice(0, 10).map((component, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: component.name || component.title,
        description: component.description,
        programmingLanguage: 'JavaScript',
        url: `${BASE_URL}/${langPrefix}/components/${component.category}/${component.id}`,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema
 * @param {Array} breadcrumbs - Array of {name, url} objects
 * @returns {Object} JSON-LD schema
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate FAQ schema for about page
 * @param {Array} faqs - Array of {question, answer} objects
 * @returns {Object} JSON-LD schema
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
