/**
 * BaseLoader - Abstract Base Class for Data Loaders
 *
 * Provides common functionality for both style and component loaders:
 * - Memory caching with Map-based storage
 * - Promise deduplication to prevent duplicate requests
 * - Safe fetch helpers for text and JSON
 * - Prompt/markdown parsing utilities
 *
 * @module data/loaders/BaseLoader
 */

/**
 * Get BASE_URL for deployment compatibility
 * Supports subdirectory deployments (e.g., /app/)
 */
export const BASE_URL = (typeof import !== 'undefined' && import.meta?.env?.BASE_URL)
  ? import.meta.env.BASE_URL.replace(/\/$/, '')
  : '';

/**
 * Abstract base class for catalog data loaders
 *
 * Subclasses should implement:
 * - loadRegistry()
 * - loadItem(category, itemId)
 * - loadCategoryItems(category)
 *
 * @example
 * class StyleLoader extends BaseLoader {
 *   constructor() {
 *     super('/data/content/styles', '/data/prompts/styles');
 *   }
 *   // ... implement abstract methods
 * }
 */
export class BaseLoader {
  /**
   * Create a BaseLoader instance
   * @param {string} contentBasePath - Base path for content files (HTML/CSS/JSX)
   * @param {string} promptBasePath - Base path for prompt files (custom.md, style.md)
   */
  constructor(contentBasePath = '', promptBasePath = '') {
    this.contentBasePath = contentBasePath;
    this.promptBasePath = promptBasePath;

    // Cache storage
    this._cache = new Map();
    this._manifestCache = new Map();
    this._pendingPromises = new Map();

    // Registry cache (singleton per loader instance)
    this._registryCache = null;
    this._registryPromise = null;
  }

  // ============================================================
  // Cache Management
  // ============================================================

  /**
   * Clear all caches
   */
  clearCache() {
    this._cache.clear();
    this._manifestCache.clear();
    this._pendingPromises.clear();
    this._registryCache = null;
    this._registryPromise = null;
  }

  /**
   * Get cached value
   * @param {string} key - Cache key
   * @returns {*} Cached value or undefined
   */
  getCached(key) {
    return this._cache.get(key);
  }

  /**
   * Set cached value
   * @param {string} key - Cache key
   * @param {*} value - Value to cache
   */
  setCached(key, value) {
    this._cache.set(key, value);
  }

  /**
   * Check if key exists in cache
   * @param {string} key - Cache key
   * @returns {boolean}
   */
  hasCached(key) {
    return this._cache.has(key);
  }

  /**
   * Execute a function with promise deduplication
   * Prevents multiple identical requests from running simultaneously
   *
   * @param {string} key - Unique key for this operation
   * @param {Function} fn - Async function to execute
   * @returns {Promise<*>} Result of the function
   */
  async withDeduplication(key, fn) {
    // Return existing promise if one is in flight
    if (this._pendingPromises.has(key)) {
      return this._pendingPromises.get(key);
    }

    // Create new promise and store it
    const promise = (async () => {
      try {
        return await fn();
      } finally {
        // Clean up after completion
        this._pendingPromises.delete(key);
      }
    })();

    this._pendingPromises.set(key, promise);
    return promise;
  }

  // ============================================================
  // Fetch Helpers
  // ============================================================

  /**
   * Safely fetch text content
   * Returns empty string on failure
   *
   * @param {string} url - URL to fetch
   * @returns {Promise<string>} Text content or empty string
   */
  async fetchText(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.text();
      }
      return '';
    } catch {
      return '';
    }
  }

  /**
   * Safely fetch JSON content
   * Returns null on failure
   *
   * @param {string} url - URL to fetch
   * @returns {Promise<Object|null>} JSON object or null
   */
  async fetchJSON(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Fetch multiple resources in parallel
   * @param {string[]} urls - Array of URLs
   * @returns {Promise<string[]>} Array of text contents
   */
  async fetchTextBatch(urls) {
    return Promise.all(urls.map(url => this.fetchText(url)));
  }

  // ============================================================
  // Content Loading Helpers
  // ============================================================

  /**
   * Build full URL for content file
   * @param {string} relativePath - Relative path from content base
   * @returns {string} Full URL
   */
  buildContentUrl(relativePath) {
    return `${BASE_URL}${this.contentBasePath}/${relativePath}`;
  }

  /**
   * Build full URL for prompt file
   * @param {string} relativePath - Relative path from prompt base
   * @returns {string} Full URL
   */
  buildPromptUrl(relativePath) {
    return `${BASE_URL}${this.promptBasePath}/${relativePath}`;
  }

  /**
   * Load HTML and CSS content from a directory
   * @param {string} basePath - Base path (relative to content base)
   * @param {Object} options - Options
   * @param {string} options.htmlFile - HTML filename (default: 'demo.html')
   * @param {string} options.cssFile - CSS filename (default: 'demo.css')
   * @returns {Promise<{html: string, css: string}>}
   */
  async loadContent(basePath, options = {}) {
    const {
      htmlFile = 'demo.html',
      cssFile = 'demo.css'
    } = options;

    const [html, css] = await Promise.all([
      this.fetchText(this.buildContentUrl(`${basePath}/${htmlFile}`)),
      this.fetchText(this.buildContentUrl(`${basePath}/${cssFile}`))
    ]);

    return { html, css };
  }

  /**
   * Load fullpage content (HTML, CSS, JS, JSX)
   * @param {string} basePath - Base path (relative to content base)
   * @returns {Promise<Object>}
   */
  async loadFullpageContent(basePath) {
    const [html, css, js, jsx, demoJsx] = await Promise.all([
      this.fetchText(this.buildContentUrl(`${basePath}/fullpage.html`)),
      this.fetchText(this.buildContentUrl(`${basePath}/fullpage.css`)),
      this.fetchText(this.buildContentUrl(`${basePath}/fullpage.js`)),
      this.fetchText(this.buildContentUrl(`${basePath}/fullpage.jsx`)),
      this.fetchText(this.buildContentUrl(`${basePath}/demo.jsx`))
    ]);

    return {
      fullPageHTML: html,
      fullPageStyles: css,
      fullPageScript: js,
      fullPageJSX: jsx,
      demoJSX: demoJsx
    };
  }

  // ============================================================
  // Prompt Loading
  // ============================================================

  /**
   * Load prompt files from a directory
   * @param {string} basePath - Base path (relative to prompt base)
   * @returns {Promise<{customPrompt: Object, stylePrompt: Object}>}
   */
  async loadPrompts(basePath) {
    const [customMd, styleMd] = await Promise.all([
      this.fetchText(this.buildPromptUrl(`${basePath}/custom.md`)),
      this.fetchText(this.buildPromptUrl(`${basePath}/style.md`))
    ]);

    return {
      customPrompt: this.parsePromptMd(customMd),
      stylePrompt: this.parsePromptMd(styleMd)
    };
  }

  /**
   * Parse prompt markdown content
   * Extracts i18n sections (zh-CN, en-US) from markdown
   *
   * @param {string} md - Markdown content
   * @returns {Object} i18n object { 'zh-CN': string, 'en-US': string }
   */
  parsePromptMd(md) {
    if (!md || typeof md !== 'string') {
      return { 'zh-CN': '', 'en-US': '' };
    }

    const result = {
      'zh-CN': '',
      'en-US': ''
    };

    // Pattern: ## zh-CN or ## en-US followed by content
    const zhMatch = md.match(/##\s*zh-CN\s*\n([\s\S]*?)(?=##\s*en-US|$)/i);
    const enMatch = md.match(/##\s*en-US\s*\n([\s\S]*?)(?=##\s*zh-CN|$)/i);

    if (zhMatch && zhMatch[1]) {
      result['zh-CN'] = zhMatch[1].trim();
    }

    if (enMatch && enMatch[1]) {
      result['en-US'] = enMatch[1].trim();
    }

    // If no sections found, treat entire content as both languages
    if (!result['zh-CN'] && !result['en-US'] && md.trim()) {
      result['zh-CN'] = md.trim();
      result['en-US'] = md.trim();
    }

    return result;
  }

  // ============================================================
  // Abstract Methods (to be implemented by subclasses)
  // ============================================================

  /**
   * Load the registry for this loader type
   * @abstract
   * @returns {Promise<Object>} Registry object
   */
  async loadRegistry() {
    throw new Error('loadRegistry() must be implemented by subclass');
  }

  /**
   * Load a single item by ID
   * @abstract
   * @param {string} category - Category ID
   * @param {string} itemId - Item ID
   * @returns {Promise<Object|null>} Item object or null
   */
  async loadItem(category, itemId) {
    throw new Error('loadItem() must be implemented by subclass');
  }

  /**
   * Load all items in a category
   * @abstract
   * @param {string} category - Category ID
   * @returns {Promise<Array>} Array of items
   */
  async loadCategoryItems(category) {
    throw new Error('loadCategoryItems() must be implemented by subclass');
  }

  /**
   * Get list of available categories
   * @returns {Promise<string[]>} Category IDs
   */
  async getAvailableCategories() {
    const registry = await this.loadRegistry();
    return Object.keys(registry.categories || {});
  }

  /**
   * Parse an item ID into components
   * @param {string} id - Item ID
   * @returns {Object} Parsed components { category, familyId, itemId }
   */
  parseItemId(id) {
    // Default implementation - subclasses may override
    const parts = id.split('-');
    if (parts.length >= 2) {
      return {
        category: parts[0],
        familyId: parts.slice(1).join('-'),
        itemId: id
      };
    }
    return { category: '', familyId: '', itemId: id };
  }
}

export default BaseLoader;
