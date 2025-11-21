/**
 * 数据轉換工具函数
 *
 * 提供組件数据的轉換和處理功能
 */

/**
 * 展平組件数据中的變体
 *
 * 將包含 variants 的組件数据展平為單层變体数組,便於統一渲染
 *
 * @param {Array} components - 組件数据数組
 * @returns {Array} 展平後的變体数組
 *
 * @example
 * const components = [
 *   {
 *     id: 'breadcrumbs',
 *     title: '麵包屑',
 *     variants: [{ name: '基礎', ... }, { name: '帶圖标', ... }]
 *   },
 *   {
 *     id: 'tabs',
 *     title: 'Tabs',
 *     demoHTML: '...'
 *   }
 * ];
 *
 * const flattened = flattenVariants(components);
 * // 結果: [
 * //   { name: '基礎', _componentTitle: '麵包屑', _variantIndex: 0, ... },
 * //   { name: '帶圖标', _componentTitle: '麵包屑', _variantIndex: 1, ... },
 * //   { id: 'tabs', name: 'Tabs', _componentTitle: 'Tabs', _variantIndex: 0, ... }
 * // ]
 */
export function flattenVariants(components) {
  if (!Array.isArray(components)) {
    console.warn('flattenVariants: Expected array, got', typeof components);
    return [];
  }

  return components.flatMap((component) => {
    if (component.variants && Array.isArray(component.variants) && component.variants.length > 0) {
      // 有變体: 返回所有變体,並附加組件信息
      return component.variants.map((variant, idx) => ({
        ...variant,
        _componentTitle: component.title,
        _componentId: component.id,
        _variantIndex: idx
      }));
    } else {
      // 無變体: 將主体数据作為單一變体
      return [{
        id: component.id,
        name: component.title,
        description: component.description,
        demoHTML: component.demoHTML,
        customStyles: component.customStyles,
        demoBoxClass: component.demoBoxClass,
        demoBoxStyle: component.demoBoxStyle,
        colorScheme: component.colorScheme,
        previews: component.previews,
        _componentTitle: component.title,
        _componentId: component.id,
        _variantIndex: 0
      }];
    }
  });
}

/**
 * 生成變体的唯一鍵
 *
 * @param {Object} variant - 變体對象
 * @param {number} fallbackIndex - 备用索引
 * @returns {string} 唯一鍵
 */
export function getVariantKey(variant, fallbackIndex = 0) {
  if (variant._componentId && variant._variantIndex !== undefined) {
    return `${variant._componentId}-${variant._variantIndex}`;
  }
  if (variant._componentTitle && variant._variantIndex !== undefined) {
    return `${variant._componentTitle}-${variant._variantIndex}`;
  }
  return `variant-${fallbackIndex}`;
}
