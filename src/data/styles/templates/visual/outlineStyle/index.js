// index.js - Outline Style 主風格和子模板
// 包含主風格對象和兩個完整的子模板变体

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML as businessFullPageHTML, fullPageStyles as businessFullPageStyles } from './BusinessDemo';
import { outlineStyleElearningHTML, outlineStyleElearningStyles } from './ElearningDemo';

// ⭐ 主要的 Outline Style 風格對象（使用原始 demo UI）
export const outlineStyle = {
  id: 'visual-outlineStyle',
  title: 'styles.outlineStyle.title',
  description: 'styles.outlineStyle.description',

  // 使用原始的 Demo UI（用於 StyleCard 預覽）
  demoHTML,
  customStyles,

  // 使用 Business Demo 作為默認的完整页面預覽
  fullPageHTML: businessFullPageHTML,
  fullPageStyles: businessFullPageStyles,

  // 配色方案
  colorScheme: {
    'zh-CN': '主色黑色线條 (#000000)、白色背景 (#ffffff)、次色淺灰 (#f5f5f5)、边框黑 (#000000 / stroke-width: 1-2px)、文本深灰 (#333333)',
    'en-US': 'Primary black outlines (#000000), white background (#ffffff), secondary light gray (#f5f5f5), border black (#000000 / stroke-width: 1-2px), text dark gray (#333333)'
  },

  // 敘事型 stylePrompt：說明 Outline Style 的设計理念
  stylePrompt: {
    'zh-CN': `角色：你是一名擅长 Outline Style（线条风格）的 UI 设计师，需要用黑白线条勾勒出清晰的结构和专业感，而不是依赖大面积填色。

场景定位：
- 适合企业官网、专业服务网站、设计系统文档或需要呈现“结构清晰 / 理性 / 高对比”的界面。
- 特别适合需要大量信息但又不想显得沉重、花哨的场景。

视觉设计理念：
- 以轮廓线而非色块作为主要视觉元素：每个模块更像线框草图的精致版本。
- 大量使用黑色 1-3px 的描边与网格，让版面结构一目了然；填充色保持极简。

材质与质感：
- 整体感觉接近「铅笔线框 + 白纸」或「产品原型图」，刻意保留设计过程感。
- 通过不同粗细的边框、虚线、下划线和底部线条来表达层级，而不是用深色背景和厚阴影。

交互体验：
- 悬停时，轮廓可以加粗、出现第二层外框或下划线动画，强调“线条在动”，而不是整块背景突然变色。
- 按钮默认是空心（outline），hover 时可以用线条滑入填充的方式形成“描边变实体”的效果。

氛围营造：
- 整体氛围理性、专业、带一点手稿感，非常适合设计师、顾问、B2B 产品对外展示。
- 用户应感觉自己看到的是「结构已经想清楚」的界面，而不是还在重装装饰的营销页。`,
    'en-US': `Role: You are a UI designer specializing in Outline Style, using black-and-white strokes to communicate structure and hierarchy instead of relying on heavy fills.

Scene:
- Well-suited for company sites, professional service pages, design system docs, and any interface that needs to feel “structured, rational, and high-contrast”.
- Especially useful where information density is high but the brand wants to avoid visual heaviness or ornamentation.

Visual philosophy:
- Treat outlines as the main graphic element: each block looks like a refined wireframe rather than a painted card.
- Use 1–3px black borders, grid-like layouts and separators to make hierarchy obvious, while keeping fills minimal.

Material & texture:
- Overall feel is close to “pencil wireframes on white paper” or polished product mockups that still show their construction lines.
- Hierarchy is expressed via border weight, dashed lines, underlines and bottom-only borders, not via deep backgrounds and heavy shadows.

Interaction:
- Hover states may strengthen outlines, reveal a second frame or animate underlines, giving the sense that “lines are moving” instead of large color blocks flashing.
- Buttons start as hollow outlines and can transition into filled states via sliding strokes, reinforcing the outline-first identity.

Mood:
- The mood is rational, professional and slightly sketch-like, ideal for designers, consultants and B2B products facing external audiences.
- Users should feel they are looking at an interface whose structure has been carefully thought through, not a purely decorative marketing page.`
  },

  // 預覽变体（Business 和 E-learning）
  previews: [
    // Preview 1: Business Website
    {
      id: 'outline-business',
      name: 'styles.outlineStyle.businessDemo.title',
      type: 'fullpage',
      html: businessFullPageHTML,
      styles: businessFullPageStyles
    },
    // Preview 2: E-learning Platform
    {
      id: 'outline-elearning',
      name: 'styles.outlineStyle.elearningDemo.title',
      type: 'fullpage',
      html: outlineStyleElearningHTML,
      styles: outlineStyleElearningStyles
    }
  ],

  // ⭐ customPrompt（用於 "Get Prompt" 按鈕）
  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个 Outline Style（线条风格）的界面，通过线条勾勒形状，简洁专业，强调极简主义和清晰的视觉层次。

**核心设计要求**

1. **线条优先设计**
   - 所有元素使用 border 边框而非 background 填充
   - 线条粗细规范: 1-3px (border-width: 1px/2px/3px)
   - 主要元素边框: \`border: 2px solid #000000;\`
   - 次要元素边框: \`border: 1px solid #e5e5e5;\`
   - SVG 图标: \`fill="none" stroke="#000" stroke-width="2"\`

2. **极简配色方案**
   - 主色: 黑色线条 (#000000)
   - 背景: 纯白 (#ffffff)
   - 功能灰色: #333333 (深灰文本), #666666 (次要文本), #e5e5e5 (边框/分隔线)
   - 强调色: 蓝色 (#3b82f6) 仅用于 hover 和交互反馈
   - 配色原则: 以黑白为主，极少使用彩色

3. **SVG 线条图标系统**
   - 所有图标使用 SVG outline 线条风格
   - stroke-width: 2px (统一线宽)
   - fill: none (不填充内部)
   - stroke: currentColor 或 #000000
   - 示例:
     \`\`\`html
     <svg width="60" height="60" viewBox="0 0 60 60">
       <rect x="10" y="10" width="40" height="40"
             fill="none" stroke="#000" stroke-width="2" rx="4"/>
       <path d="M 20 30 L 28 38 L 40 22"
             fill="none" stroke="#000" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
     \`\`\`

4. **双层边框交互效果**
   - 使用 ::after 伪元素创建悬停时的外层边框
   - 默认状态: 内层 2px 边框
   - 悬停状态: 外层边框显现，从 inset: -2px 扩展到 inset: -6px
   - 示例:
     \`\`\`css
     .outline-card {
       position: relative;
       padding: 2.5rem;
       border: 2px solid #000000;
       background: #ffffff;
       transition: all 0.3s ease;
     }

     .outline-card::after {
       content: '';
       position: absolute;
       inset: -2px;
       border: 2px solid #000000;
       opacity: 0;
       transition: all 0.3s ease;
       pointer-events: none;
     }

     .outline-card:hover::after {
       opacity: 1;
       inset: -6px; /* 外扩形成双层效果 */
     }
     \`\`\`

5. **按钮滑动填充效果**
   - 使用 ::before 伪元素从左侧滑入填充
   - 默认: 透明背景 + 黑色边框
   - 悬停: 黑色填充 + 白色文字（或反转）
   - 示例:
     \`\`\`css
     .outline-btn {
       padding: 0.75rem 1.5rem;
       border: 2px solid #000000;
       background: transparent;
       color: #000000;
       font-weight: 600;
       position: relative;
       overflow: hidden;
       cursor: pointer;
       transition: color 0.3s ease;
     }

     .outline-btn::before {
       content: '';
       position: absolute;
       top: 0;
       left: -100%;
       width: 100%;
       height: 100%;
       background: #000000;
       transition: left 0.3s ease;
       z-index: -1;
     }

     .outline-btn:hover::before {
       left: 0; /* 从左滑入 */
     }

     .outline-btn:hover {
       color: #ffffff;
     }
     \`\`\`

6. **底部线条输入框**
   - 输入框无边框，仅底部有线条
   - 默认: 2px 浅灰线条 (#e5e5e5)
   - 聚焦: 黑色线条 (#000000)
   - 示例:
     \`\`\`css
     .outline-input {
       width: 100%;
       padding: 1rem;
       border: none;
       border-bottom: 2px solid #e5e5e5;
       background: transparent;
       font-size: 1rem;
       transition: border-color 0.3s ease;
       outline: none;
     }

     .outline-input:focus {
       border-bottom-color: #000000;
     }
     \`\`\`

7. **几何图形动画**
   - SVG 几何图形使用透明度脉冲动画
   - 多个图形错开动画延迟 (0.5s, 1s, 1.5s)
   - 示例:
     \`\`\`css
     @keyframes outlinePulse {
       0%, 100% { opacity: 1; }
       50% { opacity: 0.3; }
     }

     .outline-anim-1 { animation: outlinePulse 4s ease-in-out infinite; }
     .outline-anim-2 { animation: outlinePulse 4s ease-in-out 0.5s infinite; }
     .outline-anim-3 { animation: outlinePulse 4s ease-in-out 1s infinite; }
     \`\`\`

**配色方案（黑白极简）**

主色调：
- 黑色线条: #000000 (所有边框和线条)
- 纯白背景: #ffffff

中性色/功能色：
- 深灰文本: #333333
- 次要文本: #666666 (描述性文字)
- 浅灰文本: #555555 (副标题)
- 边框灰: #e5e5e5 (分隔线和默认输入框)
- 背景灰: #fafafa (次要区块背景)

强调色（极少使用）：
- 蓝色: #3b82f6 (hover 状态、链接)

**关键 CSS 类示例**

\`\`\`css
/* 线条容器 */
.outline-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 导航栏 */
.outline-nav {
  position: sticky;
  top: 0;
  background: #ffffff;
  border-bottom: 2px solid #000000;
  z-index: 100;
  padding: 1.5rem 0;
}

.outline-nav-link {
  position: relative;
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.outline-nav-link::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 0;
  height: 2px;
  background: #000000;
  transition: width 0.3s ease;
}

.outline-nav-link:hover::after {
  width: 100%;
}

/* 服务卡片（双层边框效果） */
.outline-service-card {
  padding: 2.5rem;
  border: 2px solid #000000;
  background: #ffffff;
  transition: all 0.3s ease;
  position: relative;
}

.outline-service-card::after {
  content: '';
  position: absolute;
  inset: -2px;
  border: 2px solid #000000;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.outline-service-card:hover::after {
  opacity: 1;
  inset: -6px;
}

/* 特性网格（缩放 + 旋转动画） */
.outline-feature {
  padding: 3rem;
  border: 1px solid #e5e5e5;
  text-align: center;
  transition: all 0.3s ease;
}

.outline-feature:hover {
  background: #ffffff;
  border-color: #000000;
  transform: scale(1.05);
  z-index: 10;
}

.outline-feature:hover .outline-feature-icon svg {
  transform: rotate(360deg);
}

/* 表单系统 */
.outline-form {
  border: 2px solid #000000;
  padding: 3rem;
  background: #ffffff;
}

.outline-form-input,
.outline-form-textarea {
  width: 100%;
  padding: 1rem;
  border: none;
  border-bottom: 2px solid #e5e5e5;
  background: transparent;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  outline: none;
}

.outline-form-input:focus,
.outline-form-textarea:focus {
  border-bottom-color: #000000;
}

/* 社交图标按钮（旋转填充） */
.outline-social-link {
  width: 48px;
  height: 48px;
  border: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  transition: all 0.3s ease;
}

.outline-social-link:hover {
  background: #000000;
  color: #ffffff;
  transform: rotate(360deg);
}
\`\`\`

**重要提示**

1. **绝对禁止**:
   - ❌ 使用 box-shadow（线条风格不使用阴影）
   - ❌ 使用 background 填充（除白色/浅灰背景）
   - ❌ 使用 gradient 渐变
   - ❌ SVG 图标使用 fill 填充

2. **强制要求**:
   - ✅ 所有元素必须有清晰的 border 定义
   - ✅ SVG 图标使用 stroke 而非 fill
   - ✅ 交互仅通过 border 颜色/位置变化
   - ✅ 保持极简黑白配色

3. **交互原则**:
   - 所有交互通过线条变化实现（颜色、位置、透明度）
   - 按钮: 滑动填充效果
   - 卡片: 双层边框外扩效果
   - 输入框: 底部线条颜色变化
   - 导航: 下划线生长动画
`,

    'en-US': `Please create an Outline Style interface using TailwindCSS, defining shapes through lines, clean and professional, emphasizing minimalism and clear visual hierarchy.

**Core Design Requirements**

1. **Line-First Design**
   - All elements use border outlines instead of background fill
   - Line thickness specification: 1-3px (border-width: 1px/2px/3px)
   - Primary element borders: \`border: 2px solid #000000;\`
   - Secondary element borders: \`border: 1px solid #e5e5e5;\`
   - SVG icons: \`fill="none" stroke="#000" stroke-width="2"\`

2. **Minimalist Color Scheme**
   - Primary: Black outlines (#000000)
   - Background: Pure white (#ffffff)
   - Functional grays: #333333 (dark text), #666666 (secondary text), #e5e5e5 (borders/dividers)
   - Accent color: Blue (#3b82f6) for hover and interaction feedback only
   - Color principle: Black and white dominant, minimal use of colors

3. **SVG Line Icon System**
   - All icons use SVG outline stroke style
   - stroke-width: 2px (uniform line width)
   - fill: none (no interior fill)
   - stroke: currentColor or #000000

4. **Double Border Hover Effect**
   - Use ::after pseudo-element to create outer border on hover
   - Default state: Inner 2px border
   - Hover state: Outer border appears, expanding from inset: -2px to inset: -6px

5. **Button Sliding Fill Effect**
   - Use ::before pseudo-element to slide in fill from left
   - Default: Transparent background + black border
   - Hover: Black fill + white text (or inverted)

6. **Bottom Line Input Fields**
   - Input fields with no border, only bottom line
   - Default: 2px light gray line (#e5e5e5)
   - Focus: Black line (#000000)

7. **Geometric Shape Animations**
   - SVG geometric shapes use opacity pulse animations
   - Multiple shapes with staggered animation delays (0.5s, 1s, 1.5s)

**Important Notes**

1. **Absolutely Prohibited**:
   - ❌ Using box-shadow
   - ❌ Using background fills (except white/light gray)
   - ❌ Using gradients
   - ❌ SVG icons using fill

2. **Mandatory Requirements**:
   - ✅ All elements must have clear border definitions
   - ✅ SVG icons use stroke not fill
   - ✅ Interactions only through border changes
   - ✅ Maintain minimalist black & white color scheme
`
  }
};

// 仅导出主風格對象（Business 和 E-learning 作為 previews 变体，不需要獨立卡片）
export const outlineStyleTemplates = [
  outlineStyle    // 仅主風格對象
];

export default outlineStyleTemplates;
