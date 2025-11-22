/**
 * PromptGeneratorFacade - Prompt 生成器外觀類
 * 提供簡化的 API，隱藏內部複雜性
 */

import { PromptContext, createVariantContext, createStyleContext } from './PromptContext';
import { buildResolverChain } from './PromptResolver';

/**
 * Prompt 生成器外觀類
 * 統一的 Prompt 生成入口
 */
export class PromptGeneratorFacade {
  constructor() {
    // 構建解析器鏈（責任鏈模式）
    this.resolverChain = buildResolverChain();
  }

  /**
   * 生成 Prompt（通用方法）
   * @param {Object} options - 上下文選項
   * @returns {string} - Prompt 內容
   */
  generate(options) {
    try {
      // 創建上下文對象（類型安全）
      const context = new PromptContext(options);

      // 使用解析器鏈查找 Prompt
      const prompt = this.resolverChain.resolve(context);

      if (!prompt) {
        console.warn('[PromptGeneratorFacade] ⚠️ No prompt found, this should not happen (fallback should always return)');
        return this.getEmergencyFallback(context);
      }

      return prompt;
    } catch (error) {
      console.error('[PromptGeneratorFacade] Error generating prompt:', error);
      return this.getEmergencyFallback(options);
    }
  }

  /**
   * 為組件變體生成 Prompt（便捷方法）
   * @param {Object} variant - 變體對象
   * @param {string} componentId - 組件 ID
   * @param {string} categoryId - 分類 ID
   * @param {string} [language='zh-CN'] - 語言
   * @returns {string} - Prompt 內容
   */
  generateForVariant(variant, componentId, categoryId, language = 'zh-CN') {
    return this.generate({
      variant,
      componentId,
      categoryId,
      promptType: 'customPrompt',
      language,
      mode: 'preview'
    });
  }

  /**
   * 為風格卡片生成 Prompt（便捷方法）
   * @param {Object} style - 風格對象
   * @param {string} [language='zh-CN'] - 語言
   * @returns {string} - Prompt 內容
   */
  generateForStyle(style, language = 'zh-CN') {
    return this.generate({
      component: style,
      promptType: style.stylePrompt ? 'stylePrompt' : 'customPrompt',
      language,
      mode: 'card'
    });
  }

  /**
   * 緊急降級方法（當所有解析器都失敗時）
   * @param {Object} options - 上下文選項
   * @returns {string} - 緊急降級 Prompt
   */
  getEmergencyFallback(options) {
    const language = options.language || 'zh-CN';
    
    if (language === 'zh-CN') {
      return `抱歉，Prompt 生成失敗。請手動描述您的需求。

**建議**：
- 描述您想要創建的組件類型
- 說明設計風格（極簡、擬物化、Material Design 等）
- 列出具體要求（顏色、尺寸、交互效果等）`;
    } else {
      return `Sorry, Prompt generation failed. Please describe your requirements manually.

**Suggestions**:
- Describe the type of component you want to create
- Specify the design style (Minimalism, Skeuomorphism, Material Design, etc.)
- List specific requirements (colors, sizes, interactions, etc.)`;
    }
  }
}

/**
 * 全局單例實例
 * 可以直接導入使用
 */
export const promptGenerator = new PromptGeneratorFacade();

/**
 * 默認導出（支持兩種導入方式）
 */
export default promptGenerator;
