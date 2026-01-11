/**
 * JSON-LD Schema Generators
 * Creates structured data for rich snippets in search results
 *
 * 2025/2026 Best Practices Applied:
 * - Uses @graph to consolidate all schemas into a single script tag
 * - Avoids duplication by referencing entities via @id
 * - Includes HowTo schema for style usage guidance
 * - Properly typed with schema.org vocabulary
 */

import { BASE_URL, LANG_TO_URL } from './seoConfig';
import { LANGUAGES } from '../../utils/i18n/languageConstants';
import { getFormattedStyleCount } from '../../utils/styleStats.js';
import { getFormattedComponentCount } from '../../utils/componentStats.js';

// Dynamic counts (e.g., "70+", "20+")
const STYLE_COUNT = getFormattedStyleCount();
const COMPONENT_COUNT = getFormattedComponentCount();

// Organization ID for referencing across schemas
const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

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
    '@id': WEBSITE_ID,
    name: 'UI Style Prompt',
    alternateName: 'UIP',
    url: BASE_URL,
    description:
      language === LANGUAGES.ZH_CN
        ? 'AI 驱动的 UI 设计风格提示词库，帮助生成独特的用户界面设计'
        : 'AI-powered UI design style prompt library for generating unique user interface designs',
    inLanguage: [LANGUAGES.ZH_CN, LANGUAGES.EN_US],
    publisher: { '@id': ORGANIZATION_ID },
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
    '@id': ORGANIZATION_ID,
    name: 'UI Style Prompt',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${BASE_URL}/#logo`,
      url: `${BASE_URL}/icon.png`,
      contentUrl: `${BASE_URL}/icon.png`,
      caption: 'UI Style Prompt Logo',
    },
    image: { '@id': `${BASE_URL}/#logo` },
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
  const styleUrl = `${BASE_URL}/${langPrefix}/styles/preview/${styleId}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${styleUrl}#style`,
    name: style.name || style.title,
    description: style.description,
    creator: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: language,
    keywords: style.tags?.join(', ') || '',
    genre: 'UI Design Style',
    learningResourceType: 'Design Template',
    datePublished: style.createdAt || new Date().toISOString().split('T')[0],
    dateModified: style.updatedAt || new Date().toISOString().split('T')[0],
    url: styleUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': styleUrl,
    },
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
 * Generate SoftwareSourceCode schema for individual component pages
 * @param {Object} component - Component object with name, description, category, etc.
 * @param {string} language - Current language
 * @returns {Object} JSON-LD schema
 */
export function generateComponentDetailSchema(component, language) {
  const langPrefix = LANG_TO_URL[language] || 'zh';
  const componentUrl = `${BASE_URL}/${langPrefix}/components/${component.categoryId || component.category}/${component.id}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': `${componentUrl}#component`,
    name: component.title || component.name,
    description: component.description,
    programmingLanguage: ['JavaScript', 'JSX', 'CSS', 'HTML'],
    runtimePlatform: 'Web Browser',
    creator: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: language,
    keywords: component.tags?.join(', ') || 'UI component, React, frontend',
    datePublished: component.createdAt || new Date().toISOString().split('T')[0],
    dateModified: component.updatedAt || new Date().toISOString().split('T')[0],
    url: componentUrl,
    codeRepository: BASE_URL,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': componentUrl,
    },
    // Include variant count if available
    ...(component.variants?.length && {
      hasPart: component.variants.slice(0, 5).map((variant) => ({
        '@type': 'SoftwareSourceCode',
        name: variant.name,
        description: variant.description,
      })),
    }),
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

// ============================================================================
// 2025/2026 Best Practices: @graph Unified Schema Generator
// ============================================================================

/**
 * Generate HowTo schema for style usage guidance
 * Helps users understand how to use a particular UI style with AI tools
 * @param {Object} style - Style object with name, description, etc.
 * @param {string} language - Current language
 * @returns {Object} JSON-LD HowTo schema
 */
export function generateHowToSchema(style, language) {
  const isZh = language === LANGUAGES.ZH_CN;
  const langPrefix = LANG_TO_URL[language] || 'zh';
  const styleId = style.familyId || style.id;
  const styleUrl = `${BASE_URL}/${langPrefix}/styles/preview/${styleId}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${styleUrl}#howto`,
    name: isZh
      ? `如何使用 ${style.name || style.title} 风格生成 AI UI`
      : `How to use ${style.name || style.title} style for AI UI generation`,
    description: isZh
      ? `学习如何使用 ${style.name || style.title} 设计风格的提示词来生成独特的 UI 界面`
      : `Learn how to use ${style.name || style.title} design style prompts to generate unique UI interfaces`,
    totalTime: 'PT2M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    tool: [
      {
        '@type': 'HowToTool',
        name: isZh ? 'AI 聊天工具 (如 ChatGPT、Claude)' : 'AI Chat Tool (e.g., ChatGPT, Claude)',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: isZh ? '浏览风格预览' : 'Browse style preview',
        text: isZh
          ? `访问 ${style.name || style.title} 风格页面，查看实时预览效果`
          : `Visit the ${style.name || style.title} style page to see the live preview`,
        url: styleUrl,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: isZh ? '复制提示词' : 'Copy the prompt',
        text: isZh
          ? '点击"复制提示词"按钮，获取该风格的完整 AI 提示词'
          : 'Click the "Copy Prompt" button to get the complete AI prompt for this style',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: isZh ? '粘贴到 AI 工具' : 'Paste into AI tool',
        text: isZh
          ? '将提示词粘贴到 ChatGPT、Claude 或其他 AI 工具中'
          : 'Paste the prompt into ChatGPT, Claude, or other AI tools',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: isZh ? '描述您的需求' : 'Describe your requirements',
        text: isZh
          ? '在提示词后添加您的具体 UI 需求，如"创建一个登录页面"'
          : 'Add your specific UI requirements after the prompt, such as "create a login page"',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: isZh ? '获取生成的代码' : 'Get generated code',
        text: isZh
          ? 'AI 将生成符合该风格的 HTML/CSS/React 代码，您可以直接使用或进一步修改'
          : 'AI will generate HTML/CSS/React code matching this style, which you can use directly or modify further',
      },
    ],
    isPartOf: { '@id': WEBSITE_ID },
  };
}

/**
 * Strip @context from a schema object for use within @graph
 * @param {Object} schema - Schema object with @context
 * @returns {Object} Schema object without @context
 */
function stripContext(schema) {
  if (!schema) return null;
  const { '@context': _, ...rest } = schema;
  return rest;
}

/**
 * Page types for generatePageSchema
 * @typedef {'home' | 'styleList' | 'styleDetail' | 'componentList' | 'componentDetail' | 'about'} PageType
 */

/**
 * Generate unified page schema using @graph (2025/2026 Best Practice)
 *
 * This function consolidates all structured data into a single <script type="application/ld+json">
 * tag using the @graph property, which:
 * - Reduces DOM clutter (single script tag instead of multiple)
 * - Enables entity referencing via @id (avoids duplication)
 * - Improves validation and maintainability
 * - Is Google's recommended approach for complex pages
 *
 * @param {PageType} pageType - Type of page being rendered
 * @param {Object} data - Page-specific data
 * @param {string} language - Current language (zh-CN or en-US)
 * @returns {Object} Unified JSON-LD schema with @graph
 *
 * @example
 * // For a style detail page:
 * const schema = generatePageSchema('styleDetail', {
 *   style: { id: 'glassmorphism', name: '玻璃态', ... },
 *   breadcrumbs: [{ name: '首页', url: '...' }, ...]
 * }, 'zh-CN');
 */
export function generatePageSchema(pageType, data = {}, language = LANGUAGES.ZH_CN) {
  const graphItems = [];

  // Always include base schemas (Organization and WebSite)
  // These are referenced by other schemas via @id
  graphItems.push(stripContext(generateOrganizationSchema()));
  graphItems.push(stripContext(generateWebsiteSchema(language)));

  // Add page-specific schemas based on page type
  switch (pageType) {
    case 'home':
      // Home page: just base schemas (already added)
      // Could add SiteNavigationElement in the future
      break;

    case 'styleList':
      // Style gallery page
      if (data.styles?.length) {
        graphItems.push(stripContext(generateStyleListSchema(data.styles, language)));
      }
      if (data.breadcrumbs?.length) {
        graphItems.push(stripContext(generateBreadcrumbSchema(data.breadcrumbs)));
      }
      break;

    case 'styleDetail':
      // Individual style page
      if (data.style) {
        graphItems.push(stripContext(generateStyleDetailSchema(data.style, language)));
        // Add HowTo schema for style usage guidance
        graphItems.push(stripContext(generateHowToSchema(data.style, language)));
      }
      if (data.breadcrumbs?.length) {
        graphItems.push(stripContext(generateBreadcrumbSchema(data.breadcrumbs)));
      }
      break;

    case 'componentList':
      // Component gallery page
      if (data.components?.length) {
        graphItems.push(stripContext(generateComponentListSchema(data.components, language)));
      }
      if (data.breadcrumbs?.length) {
        graphItems.push(stripContext(generateBreadcrumbSchema(data.breadcrumbs)));
      }
      break;

    case 'componentDetail':
      // Individual component page
      if (data.component) {
        graphItems.push(stripContext(generateComponentDetailSchema(data.component, language)));
      }
      if (data.breadcrumbs?.length) {
        graphItems.push(stripContext(generateBreadcrumbSchema(data.breadcrumbs)));
      }
      break;

    case 'about':
      // About page with FAQs
      if (data.faqs?.length) {
        graphItems.push(stripContext(generateFAQSchema(data.faqs)));
      }
      if (data.breadcrumbs?.length) {
        graphItems.push(stripContext(generateBreadcrumbSchema(data.breadcrumbs)));
      }
      break;

    default:
      // Unknown page type: just use base schemas
      break;
  }

  // Return unified @graph schema
  return {
    '@context': 'https://schema.org',
    '@graph': graphItems.filter(Boolean),
  };
}
