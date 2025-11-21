import { mapStyleObject } from './tailwindMapper';

/**
 * 序列化引擎 - 将数据模型转换为 AI Prompt
 *
 * 核心算法:
 * - DFS 先序遍历 (Pre-order Traversal)
 * - Diff 式响应覆盖描述
 * - 内容优先策略
 *
 * 输出: 结构化中文提示词
 */

/**
 * 主序列化函数
 */
export const serializeToPrompt = (canvasState, globalSettings, options = {}) => {
  // 1. 校验
  const errors = validateComponentTree(canvasState);
  if (errors.length > 0) {
    console.error('序列化验证失败:', errors);
    throw new Error(`序列化验证失败: ${errors.map(e => e.message).join('; ')}`);
  }

  // 2. DFS 遍历
  const structureDescription = traverseTree(
    canvasState.componentTree,
    canvasState.componentProps
  );

  // 3. 生成 Meta Prompt
  return generateMetaPrompt(structureDescription, globalSettings, options);
};

/**
 * DFS 先序遍历
 */
function traverseTree(node, propsMap, depth = 0) {
  const props = propsMap[node.id];
  const indent = '  '.repeat(depth);

  let lines = [];

  // 跳過根節點描述
  if (node.componentType !== 'Page') {
    lines.push(`${indent}- **组件: "${node.componentType}" (ID: ${node.id.slice(0, 6)})**`);

    // 描述内容
    if (props?.baseProps?.content) {
      lines.push(...describeContent(props.baseProps.content, depth + 1));
    }

    // 描述基础样式
    if (props?.baseProps?.style) {
      lines.push(...describeStyle(props.baseProps.style, depth + 1));
    }

    // 描述布局 (容器组件)
    if (props?.layoutProps) {
      lines.push(...describeLayout(props.layoutProps, depth + 1));
    }

    // 描述響應式覆蓋 (仅差異)
    if (props?.responsiveOverrides || props?.responsiveLayoutOverrides) {
      lines.push(...describeResponsiveOverrides(props, depth + 1));
    }
  }

  // 递归子组件
  if (node.children && node.children.length > 0) {
    if (node.componentType !== 'Page') {
      lines.push(`${indent}  - **其子组件包括:**`);
    }

    node.children.forEach(child => {
      const childLines = traverseTree(child, propsMap, depth + 1);
      lines.push(...childLines);
    });
  }

  return lines;
}

/**
 * 描述内容
 */
function describeContent(content, depth) {
  const indent = '  '.repeat(depth);
  const lines = [];

  if (content.text !== undefined) {
    lines.push(`${indent}- **文本内容**: "${content.text}"`);
  }

  if (content.src) {
    lines.push(`${indent}- **图片来源**: ${content.src}`);
  }

  if (content.alt) {
    lines.push(`${indent}- **替代文本**: "${content.alt}"`);
  }

  if (content.placeholder && !content.src) {
    lines.push(`${indent}- **占位符**: ${content.placeholder}`);
  }

  return lines;
}

/**
 * 描述基础样式
 */
function describeStyle(style, depth) {
  const indent = '  '.repeat(depth);
  const lines = [];

  lines.push(`${indent}- **基础样式**:`);

  // 使用 Tailwind Mapper
  const { classes, customCss } = mapStyleObject(style);

  if (classes) {
    lines.push(`${indent}  - Tailwind 类建议: \`${classes}\``);
  }

  if (customCss.length > 0) {
    lines.push(`${indent}  - 自定义 CSS:`);
    customCss.forEach(css => {
      lines.push(`${indent}    - \`${css}\``);
    });
  }

  return lines;
}

/**
 * 描述布局属性
 */
function describeLayout(layoutProps, depth) {
  const indent = '  '.repeat(depth);
  const lines = [];

  lines.push(`${indent}- **布局**:`);

  if (layoutProps.display === 'flex') {
    lines.push(`${indent}  - 这是一个 **Flexbox** 容器`);
    if (layoutProps.flexDirection) {
      lines.push(`${indent}    - 方向: ${layoutProps.flexDirection === 'row' ? '水平' : '垂直'} (\`flex-${layoutProps.flexDirection === 'row' ? 'row' : 'col'}\`)`);
    }
    if (layoutProps.alignItems) {
      lines.push(`${indent}    - 交叉轴对齐: ${layoutProps.alignItems} (\`items-${layoutProps.alignItems.replace('flex-', '')}\`)`);
    }
    if (layoutProps.justifyContent) {
      lines.push(`${indent}    - 主轴对齐: ${layoutProps.justifyContent} (\`justify-${layoutProps.justifyContent.replace('flex-', '')}\`)`);
    }
    if (layoutProps.gap) {
      lines.push(`${indent}    - 间距: ${layoutProps.gap}px (例如 \`gap-${Math.round(layoutProps.gap / 4)}\`)`);
    }
  } else if (layoutProps.display === 'grid') {
    lines.push(`${indent}  - 这是一个 **CSS Grid** 容器`);
    if (layoutProps.gridTemplateColumns) {
      const match = layoutProps.gridTemplateColumns.match(/repeat\((\d+)/);
      if (match) {
        lines.push(`${indent}    - 网格列数: ${match[1]} (例如 \`grid-cols-${match[1]}\`)`);
      } else {
        lines.push(`${indent}    - 网格模板: ${layoutProps.gridTemplateColumns}`);
      }
    }
    if (layoutProps.gap) {
      lines.push(`${indent}    - 间距: ${layoutProps.gap}px (例如 \`gap-${Math.round(layoutProps.gap / 4)}\`)`);
    }
  }

  return lines;
}

/**
 * 描述響應式覆蓋 (仅差異)
 */
function describeResponsiveOverrides(props, depth) {
  const indent = '  '.repeat(depth);
  const lines = [];

  const hasStyleOverrides = props.responsiveOverrides && Object.keys(props.responsiveOverrides).length > 0;
  const hasLayoutOverrides = props.responsiveLayoutOverrides && Object.keys(props.responsiveLayoutOverrides).length > 0;

  if (!hasStyleOverrides && !hasLayoutOverrides) return lines;

  lines.push(`${indent}- **响应式规则**:`);

  // 视口映射
  const viewportNames = {
    desktop: '桌面',
    tablet: '平板 (md:)',
    mobile: '移动 (sm:)'
  };

  // 样式覆盖
  if (hasStyleOverrides) {
    Object.entries(props.responsiveOverrides).forEach(([breakpoint, override]) => {
      if (override.style) {
        lines.push(`${indent}  - **在 "${viewportNames[breakpoint] || breakpoint}" 视口**:`);

        Object.entries(override.style).forEach(([prop, value]) => {
          const baseValue = props.baseProps.style[prop];
          lines.push(`${indent}    - ${prop} *覆蓋* 為 ${typeof value === 'object' ? JSON.stringify(value) : value} (基础值: ${baseValue})`);
        });
      }
    });
  }

  // 布局覆蓋
  if (hasLayoutOverrides) {
    Object.entries(props.responsiveLayoutOverrides).forEach(([breakpoint, override]) => {
      lines.push(`${indent}  - **在 "${viewportNames[breakpoint] || breakpoint}" 视口 (布局)**:`);

      Object.entries(override).forEach(([prop, value]) => {
        const baseValue = props.layoutProps[prop];
        lines.push(`${indent}    - ${prop} *覆蓋* 為 ${value} (基础值: ${baseValue})`);
      });
    });
  }

  return lines;
}

/**
 * 生成 Meta Prompt 模板
 */
function generateMetaPrompt(structureLines, globalSettings, options = {}) {
  const viewportInfo = `当前视口: ${globalSettings.activeViewport} (${getViewportDimensions(globalSettings)})`;
  // React + Tailwind 版本
  if (options.output === 'react') {
    return `
# Meta Prompt（React + Tailwind）

## 角色与目标
你是资深前端工程师（React + Hooks + Tailwind）。
目标：依据下方「布局描述」，输出单一完整的 React 组件文件（如 App.jsx），仅使用 Tailwind 样式，符合极简主义与可达性最佳实践。

## 约束
- 样式：仅 Tailwind 类；使用响应前缀 sm:/md:/lg:
- 结构：语义清晰（header/main/section/button 等），组件内无注释
- 可达性：aria/label/alt，焦点可见，键盘可操作
- 自适应：Desktop-first，必要时添加 sm/md 覆盖
- 交互：可包含轻量占位（如 onClick={() => {}}），但不实现业务逻辑

## 布局描述
### 总体信息
${viewportInfo}

### 组件层级与详细
${structureLines.join('\n')}

## 交付格式
请直接输出单一 React 组件文件内容：
\`\`\`jsx
// App.jsx
// 仅导出默认组件，内部使用 Tailwind 类
\`\`\`

（严格使用提供的文本与样式，不要添加虚构内容）
`.trim();
  }

  // HTML + Tailwind 版本（默认）
  return `
# AI 提示词 - UI 布局描述

## 角色与目标
你是资深 UI/UX 设計師与前端樣式专家 (TailwindCSS)。
目标: 根据下方布局描述,用「极简主义」风格生成可复用的 HTML + Tailwind UI 组件。

## 风格说明
- **极简主义**: 「少即是多」,減少不必要元素,大量留白,注重功能性与排版。
- **配色**: 低對比度,以灰阶為主 (gray-50 ~ gray-900),点缀藍色 (blue-500/600)。
- **层次**: 通過间距 (gap/padding) 而非阴影建立层次。

## 技术要求
1. **结构**: 语义化 HTML (header/main/section/button/label 等)。
2. **呈现**: 使用 Tailwind 体现配色、层次、间距与狀態 (hover/focus/disabled)。
3. **可达性**: 足夠對比度、可見焦點、ARIA/label、可鍵盤操作。
4. **自适应**: Mobile-first,至少覆蓋 md/lg 斷點。
5. **交互**: 描述微交互 (过渡/动画) 与觸發時機。
6. **性能**: 避免過度阴影/滤镜;可复用樣式;禁止 SVG 与 Mermaid。

---

## 布局描述

### 总体信息
${viewportInfo}

### 组件层级与详细

${structureLines.join('\n')}

---

## 交付格式
请立即提供可直接粘贴的 HTML 片段 (无需框架代码):

\`\`\`html
<!-- 完整可运行的 HTML + Tailwind -->
\`\`\`

**注意**: 严格使用上述提供的文本内容与样式，不要添加 Lorem Ipsum 或虚构内容。
`.trim();
}

/**
 * 获取视口尺寸描述
 */
function getViewportDimensions(settings) {
  const presets = {
    desktop: '1440 × 900px',
    tablet: '768 × 1024px',
    mobile: '375 × 667px'
  };

  if (settings.activeViewport === 'custom') {
    return `${settings.customWidth || 1440} × ${settings.customHeight || 900}px`;
  }

  return presets[settings.activeViewport] || presets.desktop;
}

/**
 * 校验组件樹
 */
function validateComponentTree(canvasState) {
  const errors = [];
  const { componentTree, componentProps } = canvasState;

  // 递归校验
  const validateNode = (node) => {
    // 检查 Props 存在性
    if (!componentProps[node.id]) {
      errors.push({
        type: 'MISSING_PROPS',
        componentId: node.id,
        message: `组件 ${node.id} 缺少 props 定義`
      });
    }

    // 检查内容完整性
    const props = componentProps[node.id];
    if (props?.baseProps?.content) {
      const content = props.baseProps.content;

      if (content.text === '' || content.text === undefined && content.src === undefined) {
        errors.push({
          type: 'EMPTY_CONTENT',
          componentId: node.id,
          message: `组件 ${node.id} 内容為空 (可能导致 LLM 幻覺)`
        });
      }
    }

    // 递归子節點
    if (node.children) {
      node.children.forEach(validateNode);
    }
  };

  validateNode(componentTree);
  return errors;
}
