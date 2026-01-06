// 分类系統工具函数
// Category System Helper Functions

import {
  getTagColor,
  getTagLabel,
  getCategoryConfig
} from '../data/metadata/categoryMetadata';
import { applyTranslations } from './i18n/translations';
import { DEFAULT_LANGUAGE } from './i18n/languageConstants';

// 分类 ID 映射（雙向），避免別名造成篩選失效
const CATEGORY_ALIAS = {
  visual: 'visualDesign',
  visualDesign: 'visual'
};

/**
 * 根据标籤篩選風格
 * Filter styles by tags
 *
 * @param {Array} styles - 風格数組
 * @param {Array} selectedTags - 選中的标籤ID数組
 * @param {String} matchMode - 匹配模式: 'any'(任一匹配) 或 'all'(全部匹配)
 * @returns {Array} 篩選後的風格数組
 */
export const filterStylesByTags = (styles, selectedTags = [], matchMode = 'any') => {
  if (!selectedTags || selectedTags.length === 0) {
    return styles;
  }

  return styles.filter(style => {
    const styleTags = style.tags || [];

    if (matchMode === 'all') {
      // 全部匹配模式：風格必須包含所有選中的标籤
      return selectedTags.every(tag => styleTags.includes(tag));
    } else {
      // 任一匹配模式：風格包含任一選中标籤即可
      return selectedTags.some(tag => styleTags.includes(tag));
    }
  });
};

/**
 * 根据分类篩選風格
 * Filter styles by categories
 *
 * @param {Array} styles - 風格数組
 * @param {Array} selectedCategories - 選中的分类ID数組
 * @returns {Array} 篩選後的風格数組
 */
export const filterStylesByCategories = (styles, selectedCategories = []) => {
  if (!selectedCategories || selectedCategories.length === 0) {
    return styles;
  }

  // 展開选中分类的別名（例：visualDesign ↔ visual）
  const expandedSelected = new Set();
  selectedCategories.forEach((cat) => {
    expandedSelected.add(cat);
    if (CATEGORY_ALIAS[cat]) expandedSelected.add(CATEGORY_ALIAS[cat]);
  });

  return styles.filter(style => {
    const styleCategories = style.categories || [style.primaryCategory];
    const expandedStyleCats = new Set(styleCategories);
    styleCategories.forEach((cat) => {
      if (CATEGORY_ALIAS[cat]) expandedStyleCats.add(CATEGORY_ALIAS[cat]);
    });
    return [...expandedSelected].some(cat => expandedStyleCats.has(cat));
  });
};

/**
 * 搜索風格
 * Search styles by keyword
 *
 * 🚀 性能優化：
 * - 支持預計算的 _searchIndex 字段，避免每次搜索時重複調用 toLowerCase()
 * - 當 style._searchIndex 存在時，直接使用預計算的小寫值
 * - 回退到原始邏輯以保持向後兼容
 *
 * @param {Array} styles - 風格数組
 * @param {String} keyword - 搜索关鍵詞
 * @returns {Array} 搜索結果数組
 */
export const searchStyles = (styles, keyword = '') => {
  if (!keyword || keyword.trim() === '') {
    return styles;
  }

  const lowerKeyword = keyword.toLowerCase().trim();

  return styles.filter(style => {
    // 🚀 優先使用預計算的搜索索引
    // Prefer pre-computed search index for performance
    if (style._searchIndex) {
      return style._searchIndex.title.includes(lowerKeyword) ||
             style._searchIndex.id.includes(lowerKeyword) ||
             style._searchIndex.desc.includes(lowerKeyword);
    }

    // 回退到原始邏輯（向後兼容）
    // Fallback to original logic (backward compatible)
    const titleMatch = (style.title || '').toLowerCase().includes(lowerKeyword);
    const idMatch = (style.id || '').toLowerCase().includes(lowerKeyword);
    const descMatch = (style.description || '').toLowerCase().includes(lowerKeyword);

    return titleMatch || idMatch || descMatch;
  });
};

/**
 * 組合篩選和搜索
 * Combined filter and search
 *
 * @param {Array} styles - 風格数組
 * @param {Object} filters - 篩選條件對象
 * @returns {Array} 結果数組
 */
export const applyFilters = (styles, filters = {}) => {
  let result = styles;

  // 應用搜索
  if (filters.keyword) {
    result = searchStyles(result, filters.keyword);
  }

  // 應用分类篩選
  if (filters.categories && filters.categories.length > 0) {
    result = filterStylesByCategories(result, filters.categories);
  }

  // 應用标籤篩選
  if (filters.tags && filters.tags.length > 0) {
    result = filterStylesByTags(result, filters.tags, filters.matchMode);
  }

  return result;
};

/**
 * 獲取風格的关联風格
 * Get related styles for a given style
 *
 * @param {Object} style - 目标風格對象
 * @param {Array} allStyles - 所有風格数組
 * @param {Number} limit - 返回数量限制
 * @returns {Array} 关联風格数組
 */
export const getRelatedStyles = (style, allStyles, limit = 3) => {
  if (!style) return [];

  // 如果有明確指定的关联風格
  if (style.relatedStyles && style.relatedStyles.length > 0) {
    return allStyles
      .filter(s => style.relatedStyles.includes(s.id))
      .slice(0, limit);
  }

  // 否則基於标籤和分类計算相关性
  const styleTags = style.tags || [];
  const styleCategories = style.categories || [style.primaryCategory];

  const scored = allStyles
    .filter(s => s.id !== style.id) // 排除自己
    .map(s => {
      let score = 0;
      const sTags = s.tags || [];
      const sCategories = s.categories || [s.primaryCategory];

      // 共享标籤加分
      sTags.forEach(tag => {
        if (styleTags.includes(tag)) score += 2;
      });

      // 共享分类加分
      sCategories.forEach(cat => {
        if (styleCategories.includes(cat)) score += 1;
      });

      return { style: s, score };
    })
    .filter(item => item.score > 0) // 至少有一些相关性
    .sort((a, b) => b.score - a.score); // 按分数降序

  return scored.slice(0, limit).map(item => item.style);
};

/**
 * 統計标籤使用頻率
 * Count tag usage frequency
 *
 * @param {Array} styles - 風格数組
 * @returns {Object} 标籤計数對象 { tagId: count }
 */
export const getTagStatistics = (styles) => {
  const tagCounts = {};

  styles.forEach(style => {
    const styleTags = style.tags || [];
    styleTags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return tagCounts;
};

/**
 * 獲取熱門标籤
 * Get popular tags
 *
 * @param {Array} styles - 風格数組
 * @param {Number} limit - 返回数量限制
 * @returns {Array} 熱門标籤数組 [{ tagId, count, label, color }]
 */
export const getPopularTags = (styles, limit = 10) => {
  const tagCounts = getTagStatistics(styles);

  return Object.entries(tagCounts)
    .map(([tagId, count]) => ({
      tagId,
      count,
      label: getTagLabel(tagId),
      color: getTagColor(tagId)
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
};

/**
 * 检查風格是否匹配篩選條件
 * Check if style matches filters
 *
 * 🚀 Task 7: 支持預計算的 _searchIndex 字段
 * - 當 style._searchIndex 存在時，直接使用預計算的小寫值
 * - 回退到原始邏輯以保持向後兼容
 *
 * @param {Object} style - 風格對象
 * @param {Object} filters - 篩選條件
 * @returns {Boolean} 是否匹配
 */
export const isStyleMatchingFilters = (style, filters = {}) => {
  // 检查关鍵詞
  if (filters.keyword) {
    const keyword = filters.keyword.toLowerCase();

    // 🚀 Task 7: 優先使用預計算的搜索索引
    if (style._searchIndex) {
      const { title, id, desc } = style._searchIndex;
      if (!title.includes(keyword) && !id.includes(keyword) && !desc.includes(keyword)) {
        return false;
      }
    } else {
      // 回退到原始邏輯（向後兼容）
      const title = (style.title || '').toLowerCase();
      const id = (style.id || '').toLowerCase();
      const desc = (style.description || '').toLowerCase();

      if (!title.includes(keyword) && !id.includes(keyword) && !desc.includes(keyword)) {
        return false;
      }
    }
  }

  // 检查分类
  if (filters.categories && filters.categories.length > 0) {
    const styleCategories = style.categories || [style.primaryCategory];
    if (!filters.categories.some(cat => styleCategories.includes(cat))) {
      return false;
    }
  }

  // 检查标籤
  if (filters.tags && filters.tags.length > 0) {
    const styleTags = style.tags || [];
    const matchMode = filters.matchMode || 'any';

    if (matchMode === 'all') {
      if (!filters.tags.every(tag => styleTags.includes(tag))) {
        return false;
      }
    } else {
      if (!filters.tags.some(tag => styleTags.includes(tag))) {
        return false;
      }
    }
  }

  return true;
};

/**
 * 獲取風格的完整分类信息
 * Get complete category information for a style
 *
 * @param {Object} style - 風格對象
 * @returns {Array} 分类配置数組
 */
export const getStyleCategories = (style) => {
  const categories = style.categories || [style.primaryCategory];
  return categories.map(catId => getCategoryConfig(catId)).filter(Boolean);
};

/**
* 为分类数据应用翻译
* @param {Array} categories - 分类数组
* @param {String} language - 语言
* @returns {Array} 翻译后的分类数组
*/
export function applyTranslationsToCategories(categories, language) {
  // NOTE: prefixMap is intentionally unused. It was part of an earlier i18n design
  // that used centralized translation keys. The current architecture uses metadata
  // i18n objects embedded in JSON files, which are resolved by createI18nResolver.
  // This map is kept for historical reference only.
  // eslint-disable-next-line no-unused-vars
  const prefixMap = {
    core: 'styles.core',
    modern: 'styles',
    visual: 'styles.visual',
    visualTech: 'styles.visual',
   typography: 'styles.typography',
   retro: 'styles.retro',
   additional: 'styles.additional',
   layout: 'styles',
   interaction: 'styles',
   newTrend: 'styles.newTrend',
   navigation: 'data.components.navigation',
   forms: 'categories',
   dataDisplay: 'data.components.dataDisplay',
   feedback: 'data.components.feedback',
   advanced: 'data.components.advanced',
   input: 'data.components.input',
   interactive: 'data.components.interactive',
   special: 'data.components.special',
 };

  return categories.map(category => {
    // 注意：applyTranslations 的簽名為 (obj, language)
    // 先前错把 keyPrefix 傳入第二參数，导致語言參数错位，默認回退到 'zh-ch'
    // 此處不使用 keyPrefix，因為 data 內部鍵值已採用完整命名空間（如 'styles.core.xxx'）
    return {
      ...category,
      data: applyTranslations(category.data, language),
    };
  });
}

export default {
  filterStylesByTags,
  filterStylesByCategories,
  searchStyles,
  applyFilters,
  getRelatedStyles,
  getTagStatistics,
  getPopularTags,
  isStyleMatchingFilters,
  getStyleCategories,
  applyTranslationsToCategories
};
