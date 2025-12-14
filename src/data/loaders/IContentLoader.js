/**
 * IContentLoader - Unified Interface Definition for Content Loaders
 *
 * This interface defines a common contract for both style and component loaders,
 * enabling code reuse while allowing specialized implementations.
 *
 * Design Principles:
 * - Composition over Inheritance: Share interface, not implementation
 * - Progressive Enhancement: Add capabilities without breaking existing code
 * - Type Safety: JSDoc types for IDE support and documentation
 *
 * @module data/loaders/IContentLoader
 */

/**
 * @typedef {Object} I18nText
 * @property {string} ['zh-CN'] - Chinese translation
 * @property {string} ['en-US'] - English translation
 */

/**
 * @typedef {Object} LoaderPreview
 * @property {string} id - Preview ID
 * @property {string} [name] - Display name
 * @property {string} [html] - HTML content
 * @property {string} [styles] - CSS styles
 * @property {string} [demoJSX] - JSX content (for JSX mode)
 * @property {'jsx' | 'react-jsx' | undefined} [renderMode] - Rendering mode
 * @property {string} [previewId] - Preview identifier for loading
 */

/**
 * @typedef {Object} LoaderPrompts
 * @property {I18nText | null} customPrompt - Custom prompt content
 * @property {I18nText | null} stylePrompt - Style prompt content
 */

/**
 * @typedef {Object} ContentItem
 * @property {string} id - Unique identifier
 * @property {string} category - Category this item belongs to
 * @property {I18nText | string} title - Display title
 * @property {I18nText | string} [description] - Description
 * @property {string} [demoHTML] - Demo HTML content
 * @property {string} [customStyles] - Custom CSS styles
 * @property {LoaderPreview[]} [previews] - Available previews
 * @property {LoaderPrompts} [prompts] - Associated prompts
 */

/**
 * @typedef {Object} LoaderRegistry
 * @property {string} [version] - Registry version
 * @property {Object.<string, {name: string | I18nText, families?: string[], components?: string[]}>} categories
 */

/**
 * @typedef {Object} LoaderStats
 * @property {number} total - Total count of items
 * @property {Array<{id: string, name: string | I18nText, count: number}>} categories - Per-category stats
 */

// ============================================================
// Interface Validator (Runtime Type Checking)
// ============================================================

/**
 * Validate that an object implements IContentLoader interface
 * @param {Object} loader - Loader instance to validate
 * @returns {{valid: boolean, errors: string[]}} Validation result
 */
export function validateLoaderInterface(loader) {
  const requiredMethods = [
    'loadRegistry',
    'loadItem',
    'loadCategoryItems',
    'getAvailableCategories',
    'clearCache'
  ];

  const errors = [];

  for (const method of requiredMethods) {
    if (typeof loader[method] !== 'function') {
      errors.push(`Missing required method: ${method}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

// ============================================================
// Interface Wrapper Factory
// ============================================================

/**
 * Create a standardized loader wrapper that implements IContentLoader
 *
 * This factory wraps existing loaders (jsonStyleLoader, jsonComponentLoader)
 * to provide a unified interface without modifying original implementations.
 *
 * @param {Object} options - Configuration options
 * @param {string} options.type - Loader type ('style' | 'component')
 * @param {Function} options.loadRegistry - Registry loading function
 * @param {Function} options.loadItem - Single item loading function
 * @param {Function} options.loadCategoryItems - Category items loading function
 * @param {Function} options.getCategories - Get available categories function
 * @param {Function} options.clearCache - Cache clearing function
 * @param {Function} [options.parseId] - ID parsing function (optional)
 * @returns {Object} Standardized loader implementing IContentLoader
 *
 * @example
 * // Wrap jsonStyleLoader
 * const styleLoader = createLoaderWrapper({
 *   type: 'style',
 *   loadRegistry: () => import('../styles/_registry.json'),
 *   loadItem: loadFullFamily,
 *   loadCategoryItems: loadCategory,
 *   getCategories: getAvailableCategories,
 *   clearCache: () => { ... },
 *   parseId: parseStyleId
 * });
 */
export function createLoaderWrapper({
  type,
  loadRegistry,
  loadItem,
  loadCategoryItems,
  getCategories,
  clearCache,
  parseId = null
}) {
  // Validate required options
  if (!type || !loadRegistry || !loadItem || !loadCategoryItems || !getCategories || !clearCache) {
    throw new Error('createLoaderWrapper: Missing required options');
  }

  return {
    /**
     * Loader type identifier
     * @type {string}
     */
    type,

    /**
     * Load the registry for this loader type
     * @returns {Promise<LoaderRegistry>}
     */
    async loadRegistry() {
      return loadRegistry();
    },

    /**
     * Load a single item by ID
     * @param {string} itemId - Item ID (may include category prefix)
     * @returns {Promise<ContentItem | null>}
     */
    async loadItem(itemId) {
      // Parse ID if parser is provided
      if (parseId) {
        const { category, familyId } = parseId(itemId);
        if (category && familyId) {
          return loadItem(category, familyId);
        }
      }

      // Fallback: try to extract category from ID
      const parts = itemId.split('-');
      if (parts.length >= 2) {
        const [category, ...rest] = parts;
        return loadItem(category, rest.join('-'));
      }

      console.warn(`[IContentLoader] Cannot parse item ID: ${itemId}`);
      return null;
    },

    /**
     * Load a single item by category and ID (explicit parameters)
     * @param {string} category - Category ID
     * @param {string} itemId - Item ID within category
     * @returns {Promise<ContentItem | null>}
     */
    async loadItemByCategory(category, itemId) {
      return loadItem(category, itemId);
    },

    /**
     * Load all items in a category
     * @param {string} category - Category ID
     * @returns {Promise<ContentItem[]>}
     */
    async loadCategoryItems(category) {
      return loadCategoryItems(category);
    },

    /**
     * Get list of available categories
     * @returns {Promise<string[]>}
     */
    async getAvailableCategories() {
      return getCategories();
    },

    /**
     * Clear all caches
     */
    clearCache() {
      clearCache();
    },

    /**
     * Parse an item ID into components
     * @param {string} id - Item ID
     * @returns {Object} Parsed components
     */
    parseId(id) {
      if (parseId) {
        return parseId(id);
      }
      // Default implementation
      const parts = id.split('-');
      return {
        category: parts[0] || '',
        itemId: parts.slice(1).join('-') || ''
      };
    },

    /**
     * Check if this loader supports JSX rendering
     * @returns {boolean}
     */
    supportsJSX() {
      return type === 'style';
    },

    /**
     * Get loader statistics
     * @returns {Promise<LoaderStats>}
     */
    async getStats() {
      const registry = await this.loadRegistry();
      const categories = registry.categories || {};
      let total = 0;
      const categoryStats = [];

      for (const [id, config] of Object.entries(categories)) {
        const items = config.families || config.components || [];
        const count = items.length;
        total += count;
        categoryStats.push({
          id,
          name: config.name || id,
          count
        });
      }

      return { total, categories: categoryStats };
    }
  };
}

// ============================================================
// Pre-built Loader Adapters
// ============================================================

/**
 * Create a Style Loader adapter implementing IContentLoader
 * @returns {Object} Style loader with IContentLoader interface
 */
export async function createStyleLoaderAdapter() {
  const {
    loadFullFamily,
    loadCategory,
    getAvailableCategories,
    parseStyleId
  } = await import('./jsonStyleLoader.js');

  const registry = await import('../styles/_registry.json');

  // Cache management
  let styleCache = new Map();

  return createLoaderWrapper({
    type: 'style',
    loadRegistry: () => Promise.resolve(registry.default || registry),
    loadItem: async (category, familyId) => {
      const cacheKey = `${category}/${familyId}`;
      if (styleCache.has(cacheKey)) {
        return styleCache.get(cacheKey);
      }
      const result = await loadFullFamily(category, familyId);
      if (result) {
        styleCache.set(cacheKey, result);
      }
      return result;
    },
    loadCategoryItems: loadCategory,
    getCategories: getAvailableCategories,
    clearCache: () => { styleCache.clear(); },
    parseId: parseStyleId
  });
}

/**
 * Create a Component Loader adapter implementing IContentLoader
 * @returns {Object} Component loader with IContentLoader interface
 */
export async function createComponentLoaderAdapter() {
  const {
    loadComponentRegistry,
    loadFullComponent,
    loadCategoryComponents,
    getAvailableComponentCategories,
    clearComponentCache
  } = await import('./jsonComponentLoader.js');

  return createLoaderWrapper({
    type: 'component',
    loadRegistry: loadComponentRegistry,
    loadItem: loadFullComponent,
    loadCategoryItems: loadCategoryComponents,
    getCategories: getAvailableComponentCategories,
    clearCache: clearComponentCache,
    parseId: (id) => {
      // Component IDs: 'category/componentId'
      const parts = id.split('/');
      return {
        category: parts[0] || '',
        itemId: parts[1] || '',
        variantId: parts[2] || ''
      };
    }
  });
}

// ============================================================
// Unified Loader Factory
// ============================================================

/**
 * Get a unified content loader for the specified type
 *
 * @param {'style' | 'component'} type - Loader type
 * @returns {Promise<Object>} Loader implementing IContentLoader interface
 *
 * @example
 * const styleLoader = await getContentLoader('style');
 * const family = await styleLoader.loadItem('core-glassmorphism');
 *
 * const componentLoader = await getContentLoader('component');
 * const button = await componentLoader.loadItemByCategory('navigation', 'button');
 */
export async function getContentLoader(type) {
  switch (type) {
    case 'style':
      return createStyleLoaderAdapter();
    case 'component':
      return createComponentLoaderAdapter();
    default:
      throw new Error(`Unknown loader type: ${type}`);
  }
}

// ============================================================
// Type Exports (for documentation)
// ============================================================

/**
 * @typedef {Object} IContentLoader
 * @property {string} type - Loader type identifier
 * @property {() => Promise<LoaderRegistry>} loadRegistry - Load registry
 * @property {(itemId: string) => Promise<ContentItem | null>} loadItem - Load single item
 * @property {(category: string, itemId: string) => Promise<ContentItem | null>} loadItemByCategory - Load by category
 * @property {(category: string) => Promise<ContentItem[]>} loadCategoryItems - Load category items
 * @property {() => Promise<string[]>} getAvailableCategories - Get categories
 * @property {() => void} clearCache - Clear cache
 * @property {(id: string) => Object} parseId - Parse item ID
 * @property {() => boolean} supportsJSX - Check JSX support
 * @property {() => Promise<LoaderStats>} getStats - Get statistics
 */

export default {
  validateLoaderInterface,
  createLoaderWrapper,
  createStyleLoaderAdapter,
  createComponentLoaderAdapter,
  getContentLoader
};
