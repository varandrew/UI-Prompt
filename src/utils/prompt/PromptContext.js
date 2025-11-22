/**
 * PromptContext - Prompt 上下文對象
 * 提供類型安全和運行時驗證
 * 
 * @typedef {Object} PromptContextOptions
 * @property {Object} [variant] - 變體對象
 * @property {Object} [component] - 組件對象
 * @property {string} [componentId] - 組件 ID
 * @property {string} [categoryId] - 分類 ID
 * @property {'customPrompt'|'stylePrompt'} [promptType] - Prompt 類型
 * @property {'zh-CN'|'en-US'} [language] - 語言
 * @property {'card'|'preview'|'fullPage'} [mode] - 顯示模式
 */

/**
 * Prompt 上下文類
 * 封裝所有 Prompt 查找所需的上下文信息
 */
export class PromptContext {
  /**
   * @param {PromptContextOptions} options - 上下文選項
   */
  constructor(options = {}) {
    // 核心對象
    this.variant = options.variant || null;
    this.component = options.component || null;
    
    // 標識符
    this.componentId = options.componentId || this.component?.id || null;
    this.categoryId = options.categoryId || null;
    this.variantId = this.variant?.id || null;
    
    // 配置
    this.promptType = options.promptType || 'customPrompt';
    this.language = options.language || 'zh-CN';
    this.mode = options.mode || 'preview';

    // 運行時驗證
    this.validate();
  }

  /**
   * 驗證上下文配置
   * @throws {Error} 如果配置無效
   */
  validate() {
    // 驗證 promptType
    const validPromptTypes = ['customPrompt', 'stylePrompt'];
    if (!validPromptTypes.includes(this.promptType)) {
      throw new Error(`[PromptContext] Invalid promptType: ${this.promptType}. Must be one of: ${validPromptTypes.join(', ')}`);
    }

    // 驗證 language
    const validLanguages = ['zh-CN', 'en-US'];
    if (!validLanguages.includes(this.language)) {
      throw new Error(`[PromptContext] Invalid language: ${this.language}. Must be one of: ${validLanguages.join(', ')}`);
    }

    // 驗證 mode
    const validModes = ['card', 'preview', 'fullPage'];
    if (!validModes.includes(this.mode)) {
      throw new Error(`[PromptContext] Invalid mode: ${this.mode}. Must be one of: ${validModes.join(', ')}`);
    }

    // 至少需要一個標識符
    if (!this.variant && !this.componentId && !this.categoryId) {
      console.warn('[PromptContext] ⚠️ No identifiers provided (variant, componentId, categoryId). May not find any Prompt.');
    }
  }

  /**
   * 獲取所有標識符（用於調試和日誌）
   * @returns {Object}
   */
  getIdentifiers() {
    return {
      variantId: this.variantId,
      componentId: this.componentId,
      categoryId: this.categoryId,
      promptType: this.promptType,
      language: this.language,
      mode: this.mode
    };
  }

  /**
   * 生成緩存鍵（用於緩存系統）
   * @returns {string}
   */
  getCacheKey() {
    const parts = [
      this.componentId || 'null',
      this.variantId || 'null',
      this.promptType,
      this.language,
      this.mode
    ];
    return parts.join(':');
  }

  /**
   * 檢查是否為組件上下文
   * @returns {boolean}
   */
  isComponentContext() {
    return !!this.componentId;
  }

  /**
   * 檢查是否為變體上下文
   * @returns {boolean}
   */
  isVariantContext() {
    return !!this.variant;
  }

  /**
   * 檢查是否為分類上下文
   * @returns {boolean}
   */
  isCategoryContext() {
    return !!this.categoryId;
  }

  /**
   * 轉換為字符串（用於日誌）
   * @returns {string}
   */
  toString() {
    const ids = this.getIdentifiers();
    return `PromptContext(component=${ids.componentId}, variant=${ids.variantId}, type=${ids.promptType}, lang=${ids.language})`;
  }
}

/**
 * 工廠方法：為組件變體創建上下文
 * @param {Object} variant - 變體對象
 * @param {string} componentId - 組件 ID
 * @param {string} categoryId - 分類 ID
 * @param {string} [language='zh-CN'] - 語言
 * @returns {PromptContext}
 */
export function createVariantContext(variant, componentId, categoryId, language = 'zh-CN') {
  return new PromptContext({
    variant,
    componentId,
    categoryId,
    promptType: 'customPrompt',
    language,
    mode: 'preview'
  });
}

/**
 * 工廠方法：為風格卡片創建上下文
 * @param {Object} style - 風格對象
 * @param {string} [language='zh-CN'] - 語言
 * @returns {PromptContext}
 */
export function createStyleContext(style, language = 'zh-CN') {
  return new PromptContext({
    component: style,
    promptType: style.stylePrompt ? 'stylePrompt' : 'customPrompt',
    language,
    mode: 'card'
  });
}
