// Aggregator for Flat Design templates
import { flatDesignCreativePortfolio } from './creativePortfolio'
import { flatDesignEcommerceLanding } from './ecommerceLanding'
import { flatDesignDemo } from './Demo'

export const name = 'styles.core.flat-design.title'

// Demo UI for style card display (from flatDesignDemo)
export const demoUI = flatDesignDemo.demoHTML

// Custom styles for demo UI
export const customStyles = flatDesignDemo.customStyles

// Description for style card
export const description = 'styles.core.flat-design.description'

// Custom Prompt for style card "Get Prompt" button
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「扁平化（Flat Design）」核心样式卡展示界面风格高度接近的 Flat Design 风格 UI。
请使用 TailwindCSS 创建一个扁平化（Flat Design）风格的界面，使用纯色和简洁几何形状，完全去除阴影、渐变和纹理等装饰效果。

**核心设计要求**

1. **零装饰原则**
   - 完全移除阴影: box-shadow: none;
   - 禁用渐变: 仅使用纯色背景（background: #3498db;）
   - 无纹理效果: 保持纯色平面，不使用 background-image
   - 无边框或极简边框: border: none; 或 border: 1px solid #ecf0f1;

2. **纯色配色系统**
   - 主色使用纯色: background: #3498db;（不使用 rgba 或 gradient）
   - 高对比度配色: 白底黑字 (#ffffff + #2c3e50) 或深底白字 (#2c3e50 + #ffffff)
   - 色彩分块明确: 每个区域使用单一纯色，边界清晰
   - 颜色即层级: 通过颜色深浅区分重要性，而非阴影深度

3. **简洁几何形状**
   - 统一圆角: border-radius: 4px;（小圆角）或 8px（中圆角）
   - 矩形为主: 使用 <div> 矩形容器承载内容
   - 圆形图标: border-radius: 50%;（头像、按钮）
   - 直线分隔: border-bottom: 1px solid #ecf0f1;（替代阴影）

4. **视觉层次建立**
   - 颜色对比: 使用不同亮度的颜色区分层级（#3498db 主按钮 vs #95a5a6 次要按钮）
   - 尺寸对比: font-size: 24px（标题）vs 16px（正文）vs 14px（辅助文字）
   - 留白分隔: padding: 24px; margin: 16px;（用留白代替边框）
   - 排版层次: font-weight: 700（重要）vs 400（常规）vs 300（轻量）

5. **大胆色彩应用**
   - 鲜明主色: #3498db（蓝）, #e74c3c（红）, #2ecc71（绿）, #f39c12（黄）
   - 冷暖对比: 蓝色系（#3498db, #2980b9）vs 橙色系（#e67e22, #d35400）
   - 有限色板: 每个界面使用 2-4 种主要颜色
   - 中性色辅助: #ecf0f1（浅灰背景）, #2c3e50（深灰文字）

**配色方案（鲜明纯色）**

主色调：
- 蓝色: #3498db, #2980b9
- 红色: #e74c3c, #c0392b
- 绿色: #2ecc71, #27ae60
- 黄色: #f39c12, #f1c40f

中性色：
- 深灰: #2c3e50, #34495e
- 浅灰: #ecf0f1, #bdc3c7
- 纯白: #ffffff
- 纯黑: #000000

强调色：
- 紫色: #9b59b6, #8e44ad
- 橙色: #e67e22, #d35400
- 青色: #1abc9c, #16a085

**关键 CSS 类示例**

\`\`\`css
/* 扁平化按钮 */
.flat-button {
  background: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  box-shadow: none; /* 关键：无阴影 */
}

.flat-button:hover {
  background: #2980b9; /* 仅改变颜色 */
}

.flat-button:active {
  background: #21618c; /* 按下时更深 */
}

/* 扁平化卡片 */
.flat-card {
  background: #ffffff;
  border: 1px solid #ecf0f1;
  border-radius: 8px;
  padding: 24px;
  box-shadow: none; /* 关键：无阴影 */
}

/* 扁平化导航栏 */
.flat-navbar {
  background: #2c3e50;
  color: #ffffff;
  padding: 16px 24px;
  border-bottom: 3px solid #3498db; /* 使用彩色边框代替阴影 */
}

/* 扁平化输入框 */
.flat-input {
  background: #ecf0f1;
  border: 2px solid #bdc3c7;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  box-shadow: none;
}

.flat-input:focus {
  border-color: #3498db;
  outline: none;
}
\`\`\`

**图标系统**
- 使用线性图标（Feather Icons、Heroicons）
- 统一线宽: stroke-width: 2px;
- 单色填充: color: #3498db; 或 fill: #3498db;
- 尺寸统一: width: 24px; height: 24px;

**重要提示**
- 绝对不使用 box-shadow（扁平化的核心特征）
- 所有背景必须是纯色，不使用渐变
- 通过颜色对比和留白建立层次，而非视觉深度
- 保持高对比度，确保文字可读性（WCAG AA 标准）
- 交互反馈仅通过颜色变化，不使用阴影或位移`,
  'en-US': `Please create a Flat Design style interface using TailwindCSS, with solid colors and simple geometric shapes, completely removing shadows, gradients, and textures.

**Core Design Requirements**

1. **Zero Decoration Principle**
   - Completely remove shadows: box-shadow: none;
   - No gradients: Use only solid colors (background: #3498db;)
   - No textures: Keep solid color planes, no background-image
   - No borders or minimal borders: border: none; or border: 1px solid #ecf0f1;

2. **Solid Color System**
   - Primary colors as solid: background: #3498db; (no rgba or gradient)
   - High contrast pairing: White bg + dark text (#ffffff + #2c3e50) or dark bg + white text
   - Clear color blocks: Each area uses single solid color with clear boundaries
   - Color as hierarchy: Use color depth for importance, not shadow depth

3. **Simple Geometric Shapes**
   - Unified border radius: border-radius: 4px; (small) or 8px (medium)
   - Rectangle dominant: Use <div> rectangular containers
   - Circular icons: border-radius: 50%; (avatars, buttons)
   - Straight dividers: border-bottom: 1px solid #ecf0f1; (replace shadows)

4. **Visual Hierarchy Establishment**
   - Color contrast: Different brightness for hierarchy (#3498db primary vs #95a5a6 secondary)
   - Size contrast: font-size: 24px (heading) vs 16px (body) vs 14px (auxiliary)
   - Whitespace separation: padding: 24px; margin: 16px; (replace borders)
   - Typography hierarchy: font-weight: 700 (important) vs 400 (regular) vs 300 (light)

5. **Bold Color Application**
   - Vivid primary colors: #3498db (blue), #e74c3c (red), #2ecc71 (green), #f39c12 (yellow)
   - Warm/cool contrast: Blue (#3498db, #2980b9) vs Orange (#e67e22, #d35400)
   - Limited palette: Use 2-4 main colors per interface
   - Neutral support: #ecf0f1 (light gray bg), #2c3e50 (dark gray text)

**Color Scheme (Vivid Solid Colors)**

Primary colors:
- Blue: #3498db, #2980b9
- Red: #e74c3c, #c0392b
- Green: #2ecc71, #27ae60
- Yellow: #f39c12, #f1c40f

Neutral colors:
- Dark gray: #2c3e50, #34495e
- Light gray: #ecf0f1, #bdc3c7
- Pure white: #ffffff
- Pure black: #000000

Accent colors:
- Purple: #9b59b6, #8e44ad
- Orange: #e67e22, #d35400
- Teal: #1abc9c, #16a085

**Key CSS Class Examples**

\`\`\`css
/* Flat Button */
.flat-button {
  background: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  box-shadow: none; /* Key: no shadow */
}

.flat-button:hover {
  background: #2980b9; /* Only change color */
}

.flat-button:active {
  background: #21618c; /* Darker when pressed */
}

/* Flat Card */
.flat-card {
  background: #ffffff;
  border: 1px solid #ecf0f1;
  border-radius: 8px;
  padding: 24px;
  box-shadow: none; /* Key: no shadow */
}

/* Flat Navbar */
.flat-navbar {
  background: #2c3e50;
  color: #ffffff;
  padding: 16px 24px;
  border-bottom: 3px solid #3498db; /* Use colored border instead of shadow */
}

/* Flat Input */
.flat-input {
  background: #ecf0f1;
  border: 2px solid #bdc3c7;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  box-shadow: none;
}

.flat-input:focus {
  border-color: #3498db;
  outline: none;
}
\`\`\`

**Icon System**
- Use linear icons (Feather Icons, Heroicons)
- Uniform stroke width: stroke-width: 2px;
- Single color fill: color: #3498db; or fill: #3498db;
- Uniform size: width: 24px; height: 24px;

**Important Notes**
- Absolutely no box-shadow (core characteristic of flat design)
- All backgrounds must be solid colors, no gradients
- Establish hierarchy through color contrast and whitespace, not visual depth
- Maintain high contrast for text readability (WCAG AA standard)
- Interaction feedback only through color changes, no shadows or translations`
}

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名追求信息清晰与界面效率的产品设计师，负责为 B 端后台、营销落地页和工具型产品设计扁平化（Flat Design）风格界面。你需要用通俗但专业的语言，向团队说明 Flat Design 家族的视觉原则和使用边界。

场景定位：扁平化家族适合希望界面「直接、干净、易读」的产品场景，例如企业控制台、数据看板、SaaS 营销页和教育平台等。它强调内容本身，而不是界面装饰；目标是让用户迅速理解信息结构和操作路径，而不会被复杂质感或动画分散注意力。

视觉设计理念：Flat Design 的核心是「用色块和排版替代阴影和质感」。界面抛弃了体积感和真实材质，只保留简单几何、纯色背景和清晰的对比关系。层级不再依赖投影和立体结构，而是通过字号、粗细、颜色深浅和留白来表达；按钮只是颜色不同的矩形，而不是有厚度的实体按键。整体画面更接近信息设计海报，而不是实物场景。

材质与质感：在扁平化家族中，材质几乎被压缩到「一层纯色平面」，阴影、渐变、纹理大幅减少甚至完全禁用。大色块之间用清晰的边界和对比形成节奏：主色块承载关键信息，浅色背景为内容留出呼吸空间，深色文字确保可读性。少量线性图标取代复杂插画，轮廓干净，线宽统一，使整个界面看起来轻盈、现代且易扩展。

交互体验：交互反馈以颜色变化为主，而不是位置或形状的大幅改变。按钮在悬停时稍微变深或变亮，文字可微调色值或出现下划线，但不会突然产生阴影或立体效果。状态变化通过色块的切换、标签高亮和简单的过渡来表达，动效时间通常较短，曲线简单，目的是让用户迅速感知状态变化而不产生额外认知负担。

整体氛围：Flat Design 家族呈现的是一种轻量而理性的现代感——界面像一张排版工整的信息海报，干净、有秩序、无多余装饰。用户进入页面时，不会被复杂装饰或「质感秀」分心，而是能快速扫读标题、分区和按钮，感受到产品的效率与专业。`,
  'en-US': `Role: You are a product designer who values clarity and efficiency, responsible for creating flat-design interfaces for dashboards, marketing pages and utility products. You need to explain to the team how the Flat Design family should look and where it is most appropriate.

Scene: The flat family is ideal for products that need to feel direct, clean and easy to read: admin consoles, analytics dashboards, SaaS marketing sites, learning platforms and simple productivity tools. It focuses attention on content and structure rather than decoration, helping users understand layout and actions at a glance.

Visual philosophy: Flat design replaces depth and texture with color blocks and typography. The interface discards volume and material realism, relying instead on simple geometry, solid backgrounds and strong contrast. Hierarchy is expressed through font size, weight, color value and whitespace rather than shadows or bevels. Buttons are simply colored rectangles, not sculpted objects. The whole UI behaves more like a well-composed information poster than a representation of physical objects.

Material and texture: In the flat family, “material” is reduced to a single layer of solid color. Shadows, gradients and textures are minimized or removed entirely. Large areas of flat color divide the page into zones: primary hues carry key actions and highlights, light neutrals preserve breathing room and dark text maintains legibility. Linear icons with consistent stroke width replace detailed illustrations, keeping the visual language light, modern and easy to scale.

Interaction experience: Interaction feedback is communicated mainly through color shifts, not dramatic movement or dimensional changes. On hover, buttons may darken or lighten slightly; text links may change tone or gain an underline, but they do not suddenly acquire glow or heavy shadows. State changes are shown through toggled fills, highlighted tabs and simple transitions, with short timings and straightforward easing so users notice what changed without being distracted.

Overall mood: The Flat Design family conveys a calm, contemporary and rational mood. Interfaces feel sharp and tidy, with clear sections and minimal ornamentation. When users land on a flat-style page, they should immediately see headlines, groups and actions without visual noise, perceiving the product as efficient, focused and professional.`}

// Template list (flatDesignDemo is only used for demo UI, not a template)
export const flatDesignTemplates = [
  flatDesignCreativePortfolio,
  flatDesignEcommerceLanding,

]

export default flatDesignTemplates
