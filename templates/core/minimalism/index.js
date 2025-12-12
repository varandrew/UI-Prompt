// Aggregator for Minimalism templates
import { saasLanding } from './saasLanding'
import { japaneseStyle } from './japaneseStyle'
import { portfolio } from './portfolio'
import { demo } from './demo'

export const name = 'styles.core.minimalism.title'

// Demo UI for style card display (from demo)
export const demoUI = demo.demoHTML

// Custom styles for demo UI
export const customStyles = demo.customStyles

// Description for style card
export const description = 'styles.core.minimalism.description'

// Custom Prompt for style card "Get Prompt" button
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「极简主义（Minimalism）」核心样式卡展示界面风格高度接近的极简风格 UI。
请使用 TailwindCSS 创建一个极简主义（Minimalism）风格的界面，通过大量留白、精确网格和中性色彩创造优雅、纯粹的视觉体验。

**核心设计要求**

1. **大量留白（Whitespace）**
   - 主要内容区留白: padding: 48px 或 64px;
   - 段落间距: margin-bottom: 32px 或 48px;
   - 行高: line-height: 1.8（阅读舒适性）
   - 字母间距: letter-spacing: 0.02em 或 0.03em;
   - 负空间比例: 内容区域占页面 40-50%，留白占 50-60%

2. **精确网格系统**
   - 12 列网格: grid-template-columns: repeat(12, 1fr);
   - 栏间距: gap: 24px 或 32px;
   - 模块化间距: 使用 8px 基础单位（8, 16, 24, 32, 48, 64, 96px）
   - 对齐精确: 所有元素遵循网格对齐，避免像素偏移
   - 垂直韵律: 使用 baseline grid 创造垂直节奏感

3. **中性色彩为主**
   - 纯黑: #000000（标题）
   - 纯白: #ffffff（背景）
   - 深灰: #1a1a1a, #2d2d2d, #404040（文字层级）
   - 中灰: #666666, #808080, #999999（次要信息）
   - 浅灰: #cccccc, #e5e5e5, #f5f5f5（边框、分隔线）
   - 点缀色（极少使用）: #0066ff（链接）, #ff0000（强调）

4. **排版即视觉**
   - 标题: font-size: 48px - 72px; font-weight: 300 或 700; letter-spacing: -0.02em;
   - 副标题: font-size: 24px - 36px; font-weight: 400; letter-spacing: 0.01em;
   - 正文: font-size: 16px - 18px; font-weight: 400; line-height: 1.8;
   - 辅助文字: font-size: 12px - 14px; font-weight: 300; color: #999999;
   - 字体选择: Helvetica Neue, Inter, SF Pro Display（无衬线，干净）

5. **减法设计哲学**
   - 移除所有装饰: box-shadow: none; border: none;
   - 仅保留必要元素: 只显示核心内容和功能
   - 简化交互: 悬停仅改变透明度（opacity: 0.7）或颜色
   - 隐藏复杂性: 使用渐进式披露，避免一次性展示过多信息
   - 极简图标: 使用简单线性图标，stroke-width: 1px 或 1.5px;

**配色方案（中性色为主）**

主要中性色:
- 纯黑: #000000
- 纯白: #ffffff
- 深灰: #1a1a1a, #2d2d2d, #404040
- 中灰: #666666, #808080, #999999
- 浅灰: #cccccc, #e5e5e5, #f5f5f5

点缀色（极少使用）:
- 蓝色: #0066ff（链接、主要操作）
- 黑色: #000000（强调）
- 红色: #ff0000（警告、删除）

**关键 CSS 类示例**

\`\`\`css
/* 极简主义容器 */
.minimal-container {
  max-width: 800px; /* 限制阅读宽度 */
  margin: 0 auto;
  padding: 64px 32px;
  background: #ffffff;
}

/* 极简主义标题 */
.minimal-heading {
  font-size: 48px;
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 48px;
}

/* 极简主义正文 */
.minimal-text {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.02em;
  color: #404040;
  margin-bottom: 32px;
}

/* 极简主义按钮 */
.minimal-button {
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: #000000;
  background: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.minimal-button:hover {
  background: #000000;
  color: #ffffff;
}

/* 极简主义分隔线 */
.minimal-divider {
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin: 64px 0;
  border: none;
}

/* 极简主义网格 */
.minimal-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  margin-bottom: 64px;
}

/* 极简主义卡片 */
.minimal-card {
  background: #ffffff;
  padding: 32px;
  border: 1px solid #e5e5e5;
  transition: border-color 0.3s ease;
}

.minimal-card:hover {
  border-color: #000000;
}
\`\`\`

**间距系统（8px 基础单位）**
- xs: 8px（紧密元素）
- sm: 16px（相关元素）
- md: 24px（组件间距）
- lg: 32px（节间距）
- xl: 48px（区块间距）
- 2xl: 64px（主要区域）
- 3xl: 96px（页面级间距）

**微型交互细节**
- 悬停过渡: transition: all 0.3s ease;
- 透明度变化: opacity: 1 → opacity: 0.7;
- 颜色渐变: color: #000000 → color: #666666;
- 边框变化: border-color: #e5e5e5 → border-color: #000000;
- 避免复杂动画: 不使用 transform: scale() 或 translateY()

**重要提示**
- 留白是设计的一部分，不是浪费空间
- 每个元素必须有存在的理由，否则移除
- 使用网格对齐所有元素，保持精确的视觉秩序
- 色彩极度克制，黑白灰为主，点缀色仅用于强调
- 排版是极简主义的灵魂，通过字体大小、粗细、间距创造层次
- 交互细腻但不夸张，保持优雅和克制`,
  'en-US': `Please create a Minimalism style interface using TailwindCSS, with abundant whitespace, precise grid, and neutral colors to create elegant, pure visual experience.

**Core Design Requirements**

1. **Abundant Whitespace**
   - Main content padding: padding: 48px or 64px;
   - Paragraph spacing: margin-bottom: 32px or 48px;
   - Line height: line-height: 1.8 (reading comfort)
   - Letter spacing: letter-spacing: 0.02em or 0.03em;
   - Negative space ratio: Content 40-50%, whitespace 50-60%

2. **Precise Grid System**
   - 12-column grid: grid-template-columns: repeat(12, 1fr);
   - Gap: gap: 24px or 32px;
   - Modular spacing: Use 8px base unit (8, 16, 24, 32, 48, 64, 96px)
   - Precise alignment: All elements follow grid, avoid pixel drift
   - Vertical rhythm: Use baseline grid for vertical rhythm

3. **Neutral Color Dominance**
   - Pure black: #000000 (headings)
   - Pure white: #ffffff (background)
   - Dark gray: #1a1a1a, #2d2d2d, #404040 (text hierarchy)
   - Mid gray: #666666, #808080, #999999 (secondary info)
   - Light gray: #cccccc, #e5e5e5, #f5f5f5 (borders, dividers)
   - Accent color (minimal use): #0066ff (links), #ff0000 (emphasis)

4. **Typography as Visual**
   - Headings: font-size: 48px - 72px; font-weight: 300 or 700; letter-spacing: -0.02em;
   - Subheadings: font-size: 24px - 36px; font-weight: 400; letter-spacing: 0.01em;
   - Body: font-size: 16px - 18px; font-weight: 400; line-height: 1.8;
   - Auxiliary: font-size: 12px - 14px; font-weight: 300; color: #999999;
   - Font choice: Helvetica Neue, Inter, SF Pro Display (sans-serif, clean)

5. **Subtractive Design Philosophy**
   - Remove all decoration: box-shadow: none; border: none;
   - Keep only essentials: Show only core content and functions
   - Simplify interactions: Hover only changes opacity (opacity: 0.7) or color
   - Hide complexity: Use progressive disclosure, avoid showing too much at once
   - Minimal icons: Simple linear icons, stroke-width: 1px or 1.5px;

**Color Scheme (Neutral Dominance)**

Primary neutral colors:
- Pure black: #000000
- Pure white: #ffffff
- Dark gray: #1a1a1a, #2d2d2d, #404040
- Mid gray: #666666, #808080, #999999
- Light gray: #cccccc, #e5e5e5, #f5f5f5

Accent colors (minimal use):
- Blue: #0066ff (links, primary actions)
- Black: #000000 (emphasis)
- Red: #ff0000 (warnings, delete)

**Key CSS Class Examples**

\`\`\`css
/* Minimalist Container */
.minimal-container {
  max-width: 800px; /* Limit reading width */
  margin: 0 auto;
  padding: 64px 32px;
  background: #ffffff;
}

/* Minimalist Heading */
.minimal-heading {
  font-size: 48px;
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 48px;
}

/* Minimalist Text */
.minimal-text {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.02em;
  color: #404040;
  margin-bottom: 32px;
}

/* Minimalist Button */
.minimal-button {
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: #000000;
  background: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.minimal-button:hover {
  background: #000000;
  color: #ffffff;
}

/* Minimalist Divider */
.minimal-divider {
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin: 64px 0;
  border: none;
}

/* Minimalist Grid */
.minimal-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  margin-bottom: 64px;
}

/* Minimalist Card */
.minimal-card {
  background: #ffffff;
  padding: 32px;
  border: 1px solid #e5e5e5;
  transition: border-color 0.3s ease;
}

.minimal-card:hover {
  border-color: #000000;
}
\`\`\`

**Spacing System (8px base unit)**
- xs: 8px (tight elements)
- sm: 16px (related elements)
- md: 24px (component spacing)
- lg: 32px (section spacing)
- xl: 48px (block spacing)
- 2xl: 64px (main areas)
- 3xl: 96px (page-level spacing)

**Micro-interaction Details**
- Hover transition: transition: all 0.3s ease;
- Opacity change: opacity: 1 → opacity: 0.7;
- Color fade: color: #000000 → color: #666666;
- Border change: border-color: #e5e5e5 → border-color: #000000;
- Avoid complex animations: No transform: scale() or translateY()

**Important Notes**
- Whitespace is part of the design, not wasted space
- Every element must have a reason to exist, otherwise remove it
- Use grid to align all elements, maintain precise visual order
- Extremely restrained colors, black/white/gray primary, accents only for emphasis
- Typography is the soul of minimalism, create hierarchy through font size, weight, spacing
- Interactions are subtle but not exaggerated, maintain elegance and restraint`
}

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名偏爱「少即是多」的极简主义 UI 设计师，需要为产品团队说明 Minimalism 家族的视觉原则和适用场景，避免大家误把「简单」理解成「随便」或「什么都删掉」。

场景定位：极简家族适合信息结构清晰、内容质量高、品牌气质偏理性或高端的产品，例如文档工具、写作平台、作品集网站、高端品牌落地页和数据故事页面。它特别适合需要长时间阅读或思考的场景，让用户在没有视觉噪音干扰的情况下专注于内容本身。

视觉设计理念：极简主义不是「空白越多越好」，而是通过有意识地删减装饰，把视觉注意力集中在核心元素上。界面以黑白灰为主，辅以极少数强调色；结构上依靠网格、基线和明确的层级关系组织信息，而不是靠边框、阴影和复杂背景。标题、正文和辅助信息在排版上有清晰的节奏，让用户能一眼看出「哪里最重要」「哪里是说明」「哪里是补充」。

材质与质感：在 Minimalism 家族中，材质被压缩到几乎看不见——没有明显的纹理和渐变，阴影如果存在也非常轻微。页面主要由干净的白色背景、细线分隔和少量浅灰区块构成，辅以清晰的黑色文字。所有元素的边框、线条和图标都保持细而稳定的线宽，避免粗重轮廓打破整体的轻盈感。页面的「质感」来自版面秩序和留白，而不是来自表面的华丽效果。

交互体验：交互反馈在极简风格中是克制而明确的。按钮悬停后可能只改变边框颜色、文字颜色或透明度，而不会出现大幅缩放、阴影爆发或炫目渐变。链接在 hover 时出现简单下划线即可；卡片在交互时可以轻微调整背景色或边框颜色，但仍然保持「安静」。动画节奏通常偏慢且流畅，避免频繁闪烁，让长时间阅读不被打扰。

整体氛围：Minimalism 家族营造的是一种安静、清晰、带有思考空间的界面气质。用户进入页面时不会被视觉效果轰炸，而是感受到宽阔的留白、整齐的文字和少量有力的视觉焦点。它非常适合作为内容或品牌的「画廊空间」，让真正重要的文字、图像和数据成为舞台主角。`,
  'en-US': `Role: You are a minimalist UI designer who believes in “less but better”, and you need to explain the Minimalism family to your team so they don’t confuse “simple” with “careless” or “empty.”

Scene: The minimalist family is ideal for products with clear structure, strong content and brands that lean toward rational, refined or premium positioning: document tools, writing platforms, portfolios, high-end marketing pages and narrative data experiences. It is especially suitable for long-form reading and focused work, where visual noise must be kept to a minimum.

Visual philosophy: Minimalism is not about removing everything; it is about removing everything that does not support the message. Interfaces are built on a foundation of black, white and greys, with extremely limited accent colors. Information hierarchy is created through typography, spacing and alignment, not borders and heavy decoration. Headings, body text and auxiliary details form a deliberate rhythm so users can instantly tell what is primary, what is explanatory and what is secondary.

Material and texture: In the Minimalism family, material almost disappears. There are no obvious textures or gradients; shadows, if present, are very subtle. The page is composed of clean white backgrounds, fine dividers and a few light-grey panels, with crisp black text on top. Borders, lines and icons share a consistent, slender stroke width so the layout feels light rather than heavy. The “texture” comes from structure and whitespace instead of graphic embellishment.

Interaction experience: Interaction feedback is restrained yet precise. Buttons on hover may only adjust border or text color, or slightly reduce opacity, rather than jumping, glowing or casting heavy shadows. Links gain a simple underline or tone change; cards might shift to a slightly different background or border color. Animations, when used, are smooth and modest—short fades or small movements—so they support focus instead of competing with it.

Overall mood: The Minimalism family creates a quiet, clear atmosphere with plenty of room for thought. Users are not bombarded with effects; they see generous whitespace, carefully set type and a small number of strong visual anchors. It feels like a gallery or reading room for content and ideas where the interface steps back, allowing text, imagery and data to take centre stage.`}

// Template list (demo is only used for demo UI, not a template)
export const minimalismTemplates = [
  saasLanding,
  japaneseStyle,
  portfolio,
]

export default minimalismTemplates
