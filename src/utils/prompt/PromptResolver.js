/**
 * PromptResolver - Prompt 解析器（責任鏈模式）
 * 按優先級嘗試多個解析器，直到找到可用的 Prompt
 */

import { 
  componentPromptMapping, 
  variantPromptOverrides, 
  categoryPromptMapping 
} from '../../data/metadata/componentPromptMapping';

/**
 * Prompt 解析器抽象基類
 */
export class PromptResolver {
  constructor() {
    this.next = null;
  }

  /**
   * 設置下一個解析器（責任鏈模式）
   * @param {PromptResolver} resolver - 下一個解析器
   * @returns {PromptResolver} - 返回下一個解析器（支持鏈式調用）
   */
  setNext(resolver) {
    this.next = resolver;
    return resolver;
  }

  /**
   * 嘗試解析 Prompt（主入口）
   * @param {PromptContext} context - Prompt 上下文
   * @returns {string|null} - 找到的 Prompt 或 null
   */
  resolve(context) {
    const result = this.tryResolve(context);
    
    if (result) {
      console.log(`[${this.constructor.name}] ✅ Found prompt for ${context.toString()}`);
      return result;
    }
    
    // 沒找到，嘗試下一個解析器
    if (this.next) {
      return this.next.resolve(context);
    }
    
    // 責任鏈結束，沒有找到
    return null;
  }

  /**
   * 子類實現的查找邏輯
   * @abstract
   * @param {PromptContext} context - Prompt 上下文
   * @returns {string|null} - 找到的 Prompt 或 null
   */
  tryResolve(context) {
    throw new Error(`${this.constructor.name} must implement tryResolve()`);
  }
}

/**
 * 變體級 Prompt 解析器（優先級最高）
 * 從變體對象自身獲取 Prompt
 */
export class VariantPromptResolver extends PromptResolver {
  tryResolve(context) {
    const { variant, promptType, language } = context;
    
    if (!variant) return null;

    // 嘗試從變體自身獲取 Prompt
    const prompt = variant[promptType]?.[language];
    if (prompt) {
      return prompt;
    }

    return null;
  }
}

/**
 * 變體覆蓋 Prompt 解析器
 * 從 variantPromptOverrides 映射表獲取特定變體的 Prompt
 */
export class VariantOverrideResolver extends PromptResolver {
  tryResolve(context) {
    const { componentId, variantId, promptType, language } = context;
    
    if (!componentId || !variantId) return null;

    // 生成覆蓋鍵：componentId-variantId
    const overrideKey = `${componentId}-${variantId}`;
    const override = variantPromptOverrides[overrideKey];
    
    if (!override) return null;

    // 嘗試獲取 Prompt
    const prompt = override[promptType]?.[language];
    if (prompt) {
      return prompt;
    }

    return null;
  }
}

/**
 * 組件級 Prompt 解析器
 * 從 componentPromptMapping 獲取組件通用 Prompt
 */
export class ComponentPromptResolver extends PromptResolver {
  tryResolve(context) {
    const { componentId, promptType, language } = context;
    
    if (!componentId) return null;

    const mapping = componentPromptMapping[componentId];
    if (!mapping) return null;

    // 嘗試獲取 Prompt
    const prompt = mapping[promptType]?.[language];
    if (prompt) {
      return prompt;
    }

    return null;
  }
}

/**
 * 分類級 Prompt 解析器
 * 從 categoryPromptMapping 獲取分類通用 Prompt
 */
export class CategoryPromptResolver extends PromptResolver {
  tryResolve(context) {
    const { categoryId, promptType, language } = context;
    
    if (!categoryId) return null;

    const mapping = categoryPromptMapping[categoryId];
    if (!mapping) return null;

    // 嘗試獲取 Prompt
    const prompt = mapping[promptType]?.[language];
    if (prompt) {
      return prompt;
    }

    return null;
  }
}

/**
 * 降級模板解析器（最後的保底）
 * 動態生成通用 Prompt 模板
 */
export class FallbackTemplateResolver extends PromptResolver {
  tryResolve(context) {
    const { variant, component, language } = context;
    
    // 獲取名稱和描述
    const name = variant?.name || component?.title || 'Component';
    const description = variant?.description || component?.description || '';

    // 生成通用模板
    if (language === 'zh-CN') {
      return `请使用 TailwindCSS 创建一个「${name}」组件。

**设计要求**：
${description}

**技术要求**：
- 使用 TailwindCSS 实用类
- 响应式设计（支持移动端）
- 遵循无障碍标准（ARIA）
- 优雅的过渡动画

请提供完整的 HTML 和 TailwindCSS 类名。`;
    } else {
      return `Please create a "${name}" component using TailwindCSS.

**Design Requirements**:
${description}

**Technical Requirements**:
- Use TailwindCSS utility classes
- Responsive design (mobile-friendly)
- Follow accessibility standards (ARIA)
- Smooth transitions and animations

Please provide complete HTML with TailwindCSS classes.`;
    }
  }
}

/**
 * 工廠方法：構建完整的解析鏈
 * @returns {PromptResolver} - 責任鏈的頭部解析器
 */
export function buildResolverChain() {
  const variantResolver = new VariantPromptResolver();
  const overrideResolver = new VariantOverrideResolver();
  const componentResolver = new ComponentPromptResolver();
  const categoryResolver = new CategoryPromptResolver();
  const fallbackResolver = new FallbackTemplateResolver();

  // 構建責任鏈（按優先級）
  variantResolver
    .setNext(overrideResolver)
    .setNext(componentResolver)
    .setNext(categoryResolver)
    .setNext(fallbackResolver);

  return variantResolver;
}
