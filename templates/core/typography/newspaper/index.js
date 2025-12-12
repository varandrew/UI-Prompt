// Newspaper Typography Family - Aggregator
// 报纸排版家族 - 聚合器

import { modernEditorialTemplates } from './modernEditorial';
import { vintageRetroTemplates } from './vintageRetro';
import { newspaperDemoHTML, newspaperDemoStyles } from './Demo';

// 家族名称
export const name = 'styles.core.typography.newspaper.title';

// Demo UI for style card display
export const demoUI = newspaperDemoHTML;

// Custom styles for demo UI
export const customStyles = newspaperDemoStyles;

// Description for style card
export const description = 'styles.core.typography.newspaper.description';

// 🔑 家族级 CustomPrompt（長版，符合 CUSTOM_PROMPT_TEMPLATE，用於「Get Prompt」按鈕）
export const customPrompt = {
  'zh-CN': `你现在是一名擅长排版系統与版面結構的資深 UI 设计师兼前端工程师，请生成一个与当前「报纸排版（Newspaper Typography）」家族展示界面风格高度接近的报纸风格 UI。
请使用 TailwindCSS 创建一个 Newspaper Typography 风格的界面，通过报头（Masthead）、首字下沉、多栏排版和细致的规则线来重现传统印刷媒体在网页中的阅读体验。

**核心设计要求**

1. **报纸标题栏（Masthead 系统）**
   - 使用大字号全大写衬线字体、极宽字距，强调品牌名称：
     \`\`\`css
     .newspaper-masthead {
       font-size: clamp(2.5rem, 6vw, 4.5rem);
       font-weight: 900;
       letter-spacing: 0.2em;
       text-transform: uppercase;
       text-align: center;
       border-top: 4px solid #000000;
       border-bottom: 4px solid #000000;
       padding: 1.25rem 0;
       font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
     }
     \`\`\`
   - 可在报头上方增加版次与價格信息條（vol / price bar），字重較輕：
     \`\`\`css
     .newspaper-topbar {
       display: flex;
       justify-content: space-between;
       font-size: 0.875rem;
       color: #6B7280;
       margin-bottom: 0.5rem;
     }
     \`\`\`

2. **首字下沉（Drop Cap 系统）**
   - 首字母放大 3–5 倍，与正文共享同一行，製造傳統印刷開頭效果：
     \`\`\`css
     .drop-cap-paragraph {
       font-size: 0.9375rem;  /* 15px */
       line-height: 1.6;
       text-align: justify;
     }

     .drop-cap-paragraph::first-letter {
       float: left;
       font-size: 4.5rem;
       line-height: 0.85;
       font-weight: 900;
       margin-right: 0.2rem;
       margin-top: 0.1rem;
       color: #1E3A8A;
     }
     \`\`\`
   - 亦可使用帶边框的強調版本：
     \`\`\`css
     .drop-cap-framed::first-letter {
       float: left;
       font-size: 3.5rem;
       line-height: 1;
       font-weight: 900;
       padding: 0.35rem 0.5rem;
       margin-right: 0.5rem;
       background: #1E3A8A;
       color: #FFFFFF;
       border: 3px solid #000000;
     }
     \`\`\`

3. **多栏布局（Multi-column Layout）**
   - 使用 CSS columns 或 grid 模擬 2–3 欄报纸內文：
     \`\`\`css
     .newspaper-columns {
       column-count: 3;
       column-gap: 2rem;                 /* 32px */
       column-rule: 1px solid #E5E7EB;   /* 欄間分隔线 */
       font-size: 0.9375rem;
       line-height: 1.6;
       text-align: justify;
     }

     .newspaper-columns p {
       margin-bottom: 1rem;
       break-inside: avoid;              /* 避免段落斷裂 */
     }

     @media (max-width: 1024px) {
       .newspaper-columns { column-count: 2; }
     }

     @media (max-width: 768px) {
       .newspaper-columns { column-count: 1; }
     }
     \`\`\`

4. **标題层級与副标（Typographic Hierarchy）**
   - 為不同层級的标題定義清晰規則：
     \`\`\`css
     .headline-main {
       font-size: clamp(1.75rem, 3vw, 2.5rem);
       font-weight: 900;
       line-height: 1.2;
       color: #1E3A8A;
       border-bottom: 3px solid #1E3A8A;
       padding-bottom: 0.5rem;
       margin-bottom: 0.75rem;
     }

     .headline-section {
       font-size: 1.125rem;
       font-weight: 700;
       margin-bottom: 0.5rem;
       color: #111827;
     }

     .byline {
       font-size: 0.875rem;
       font-style: italic;
       color: #6B7280;
       margin-bottom: 0.75rem;
     }
     \`\`\`

5. **經典規則线与欄目盒（Rules & Boxes）**
   - 利用双线、點线強化分区与层次：
     \`\`\`css
     .section-divider {
       border-top: 3px double #000000;
       margin: 2rem 0;
     }

     .dotted-divider {
       border-bottom: 1px dotted #D1D5DB;
       margin: 1rem 0;
     }
     \`\`\`
   - 側欄資訊盒（如「Inside Today」）：
     \`\`\`css
     .sidebar-box {
       border: 2px solid #1E3A8A;
       padding: 1rem;
       background: #F9FAFB;
     }

     .sidebar-title {
       font-size: 1.125rem;
       font-weight: 700;
       color: #1E3A8A;
       border-bottom: 2px solid #1E3A8A;
       padding-bottom: 0.5rem;
       margin-bottom: 0.75rem;
     }

     .sidebar-item {
       display: flex;
       justify-content: space-between;
       font-size: 0.875rem;
       padding: 0.4rem 0;
       border-bottom: 1px dotted #D1D5DB;
     }

     .sidebar-item:last-child {
       border-bottom: none;
     }
     \`\`\`

6. **页面佈局与版心（Page Layout & Grid）**
   - 整体页面應有「紙張边距 + 版心」的結構，而不是滿版卡片：
     \`\`\`css
     .newspaper-shell {
       min-height: 100vh;
       background: #E5E7EB;
       display: flex;
       align-items: flex-start;
       justify-content: center;
       padding: 2rem 1rem;
     }

     .newspaper-page {
       max-width: 1200px;
       width: 100%;
       margin: 0 auto;
       padding: 2rem;
       background: #FFFFFF;
       box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
       font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
     }

     .newspaper-layout {
       display: grid;
       grid-template-columns: minmax(0, 2.5fr) minmax(0, 1fr);
       gap: 2rem;
       margin-top: 2rem;
     }

     @media (max-width: 1024px) {
       .newspaper-layout {
         grid-template-columns: 1fr;
       }
     }
     \`\`\`

7. **尾欄、次要文章与腳註区（Secondary Stories & Footer）**
   - 在页面底部使用 2–3 欄次要文章，配合双线或細线区隔：
     \`\`\`css
     .newspaper-secondary {
       display: grid;
       grid-template-columns: repeat(3, minmax(0, 1fr));
       gap: 2rem;
       padding-top: 2rem;
       border-top: 3px double #1E3A8A;
       margin-top: 2rem;
     }

     .secondary-article {
       font-size: 0.875rem;
       line-height: 1.6;
       text-align: justify;
     }

     .secondary-headline {
       font-size: 1.125rem;
       font-weight: 700;
       margin-bottom: 0.75rem;
       color: #1E3A8A;
       border-bottom: 2px solid #1E3A8A;
       padding-bottom: 0.25rem;
     }
     \`\`\`

**配色方案（經典报纸色系）**

主色调：
- 深蓝强调色：#1E3A8A, #2563EB
- 标题黑：#1F2937, #111827
- 正文灰：#374151, #4B5563

中性色与辅助色：
- 日期/說明灰：#6B7280, #9CA3AF
- 分隔线灰：#D1D5DB, #E5E7EB

背景色：
- 紙張米白：#FAF8F5, #F9FAFB
- 版心白：#FFFFFF
- 外圍灰背景（页面襯底）：#E5E7EB

**关键 CSS 类示例**

\`\`\`css
/* 页面外殼（灰背景 + 居中紙張） */
.newspaper-shell {
  min-height: 100vh;
  background: #E5E7EB;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
}

.newspaper-page {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: #FFFFFF;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
}

/* 報頭区 */
.newspaper-header {
  border-top: 4px solid #000000;
  border-bottom: 4px solid #000000;
  padding: 1.25rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.newspaper-title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #1E3A8A;
}

.newspaper-subtitle {
  font-size: 0.875rem;
  font-style: italic;
  color: #6B7280;
  margin-top: 0.5rem;
}

/* 主故事区 + 側欄 */
.newspaper-layout {
  display: grid;
  grid-template-columns: minmax(0, 2.5fr) minmax(0, 1fr);
  gap: 2rem;
}

.newspaper-main-story {
  border-right: 2px solid #1E3A8A;
  padding-right: 2rem;
}

.newspaper-main-headline {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 900;
  line-height: 1.2;
  color: #1E3A8A;
  border-bottom: 3px solid #1E3A8A;
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
}

.newspaper-lead {
  font-size: 1.0625rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.newspaper-columns-3 {
  column-count: 3;
  column-gap: 1.5rem;
  column-rule: 1px solid #E5E7EB;
  font-size: 0.9375rem;
  text-align: justify;
}
\`\`\`

**间距与字体系统（建议）**

- 基础间距单位：4px 或 8px，正文段落間距 16px。
- 報頭与版心四周外边距：24–32px。
- 标題层級：
  - 報頭：40–56px，字重 900，全大写。
  - 主标题：24–32px，字重 800–900。
  - 小标题：18–20px，字重 600–700。
- 正文字號：14–16px，行高 1.6–1.8。
- 裝飾文字（Caption / Footer）：12–13px，行高 1.4–1.6。

**重要提示**
- 必須使用语义化 HTML 結構（header / main / article / aside / footer），避免仅用 <div> 堆疊。
- 正文對比度需達到 WCAG AA（正文灰 vs 米白背景 > 7:1），確保長文閱讀舒適。
- 勿使用高飽和亮色区塊或霓虹色，將主視覺重點放在排版与文字层次。
- 多欄布局下要避免圖片或段落在欄內被任意分割，可使用 \`break-inside: avoid\`。
- Hover 動效需克制，主要用於連結下劃线、颜色細微变化，不要让整個版面大幅位移或放大。
- 在 TailwindCSS 中，將重複的報頭、欄寬、分隔线樣式封裝為自定義 utilities 或組件，方便跨页重用。`,

  'en-US': `You are now a senior UI designer and front-end engineer specialising in editorial layout systems. Please generate a UI in the Newspaper Typography family that closely matches the current core “Newspaper Typography” style card.
Create a newspaper-style interface using TailwindCSS, combining masthead, drop caps, multi-column body text and classic rules to recreate a print-like reading experience on the web.

**Core Design Requirements**

1. **Masthead System**
   - Use uppercase serif type, very wide tracking and heavy weight for the newspaper name:
     \`\`\`css
     .newspaper-masthead {
       font-size: clamp(2.5rem, 6vw, 4.5rem);
       font-weight: 900;
       letter-spacing: 0.2em;
       text-transform: uppercase;
       text-align: center;
       border-top: 4px solid #000000;
       border-bottom: 4px solid #000000;
       padding: 1.25rem 0;
       font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
     }
     \`\`\`
   - Add a compact top bar for volume/issue and price:
     \`\`\`css
     .newspaper-topbar {
       display: flex;
       justify-content: space-between;
       font-size: 0.875rem;
       color: #6B7280;
       margin-bottom: 0.5rem;
     }
     \`\`\`

2. **Drop Cap System**
   - The first letter of the leading paragraph should span 3–5 lines and share the same baseline as the body:
     \`\`\`css
     .drop-cap-paragraph {
       font-size: 0.9375rem;  /* 15px */
       line-height: 1.6;
       text-align: justify;
     }

     .drop-cap-paragraph::first-letter {
       float: left;
       font-size: 4.5rem;
       line-height: 0.85;
       font-weight: 900;
       margin-right: 0.2rem;
       margin-top: 0.1rem;
       color: #1E3A8A;
     }
     \`\`\`
   - Optionally, provide a framed drop cap variant for feature stories:
     \`\`\`css
     .drop-cap-framed::first-letter {
       float: left;
       font-size: 3.5rem;
       line-height: 1;
       font-weight: 900;
       padding: 0.35rem 0.5rem;
       margin-right: 0.5rem;
       background: #1E3A8A;
       color: #FFFFFF;
       border: 3px solid #000000;
     }
     \`\`\`

3. **Multi-column Layout**
   - Implement 2–3 column layouts for dense editorial content:
     \`\`\`css
     .newspaper-columns {
       column-count: 3;
       column-gap: 2rem;                 /* 32px */
       column-rule: 1px solid #E5E7EB;
       font-size: 0.9375rem;
       line-height: 1.6;
       text-align: justify;
     }

     .newspaper-columns p {
       margin-bottom: 1rem;
       break-inside: avoid;              /* Avoid awkward breaks */
     }

     @media (max-width: 1024px) {
       .newspaper-columns { column-count: 2; }
     }

     @media (max-width: 768px) {
       .newspaper-columns { column-count: 1; }
     }
     \`\`\`

4. **Typographic Hierarchy**
   - Define clear headline, subheadline and byline styles:
     \`\`\`css
     .headline-main {
       font-size: clamp(1.75rem, 3vw, 2.5rem);
       font-weight: 900;
       line-height: 1.2;
       color: #1E3A8A;
       border-bottom: 3px solid #1E3A8A;
       padding-bottom: 0.5rem;
       margin-bottom: 0.75rem;
     }

     .headline-section {
       font-size: 1.125rem;
       font-weight: 700;
       margin-bottom: 0.5rem;
       color: #111827;
     }

     .byline {
       font-size: 0.875rem;
       font-style: italic;
       color: #6B7280;
       margin-bottom: 0.75rem;
     }
     \`\`\`

5. **Rules and Sidebar Boxes**
   - Use classic rules to separate sections:
     \`\`\`css
     .section-divider {
       border-top: 3px double #000000;
       margin: 2rem 0;
     }

     .dotted-divider {
       border-bottom: 1px dotted #D1D5DB;
       margin: 1rem 0;
     }
     \`\`\`
   - Sidebar information such as “Inside Today” or “Market Watch”:
     \`\`\`css
     .sidebar-box {
       border: 2px solid #1E3A8A;
       padding: 1rem;
       background: #F9FAFB;
     }

     .sidebar-title {
       font-size: 1.125rem;
       font-weight: 700;
       color: #1E3A8A;
       border-bottom: 2px solid #1E3A8A;
       padding-bottom: 0.5rem;
       margin-bottom: 0.75rem;
     }

     .sidebar-item {
       display: flex;
       justify-content: space-between;
       font-size: 0.875rem;
       padding: 0.4rem 0;
       border-bottom: 1px dotted #D1D5DB;
     }

     .sidebar-item:last-child {
       border-bottom: none;
     }
     \`\`\`

6. **Page Layout and Grid**
   - The page should feel like a physical sheet with margins and a clear “body” area:
     \`\`\`css
     .newspaper-shell {
       min-height: 100vh;
       background: #E5E7EB;
       display: flex;
       align-items: flex-start;
       justify-content: center;
       padding: 2rem 1rem;
     }

     .newspaper-page {
       max-width: 1200px;
       width: 100%;
       margin: 0 auto;
       padding: 2rem;
       background: #FFFFFF;
       box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
       font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
     }

     .newspaper-layout {
       display: grid;
       grid-template-columns: minmax(0, 2.5fr) minmax(0, 1fr);
       gap: 2rem;
       margin-top: 2rem;
     }

     @media (max-width: 1024px) {
       .newspaper-layout {
         grid-template-columns: 1fr;
       }
     }
     \`\`\`

7. **Secondary Stories and Footer**
   - Use a 2–3 column secondary section for shorter articles at the bottom:
     \`\`\`css
     .newspaper-secondary {
       display: grid;
       grid-template-columns: repeat(3, minmax(0, 1fr));
       gap: 2rem;
       padding-top: 2rem;
       border-top: 3px double #1E3A8A;
       margin-top: 2rem;
     }

     .secondary-article {
       font-size: 0.875rem;
       line-height: 1.6;
       text-align: justify;
     }

     .secondary-headline {
       font-size: 1.125rem;
       font-weight: 700;
       margin-bottom: 0.75rem;
       color: #1E3A8A;
       border-bottom: 2px solid #1E3A8A;
       padding-bottom: 0.25rem;
     }
     \`\`\`

**Color Scheme (Classic Newspaper)**

Primary colors:
- Deep blue accent: #1E3A8A, #2563EB
- Heading black: #1F2937, #111827
- Body gray: #374151, #4B5563

Neutrals and supporting tones:
- Caption gray: #6B7280, #9CA3AF
- Rule gray: #D1D5DB, #E5E7EB

Backgrounds:
- Paper cream: #FAF8F5, #F9FAFB
- Page white: #FFFFFF
- Outer shell gray: #E5E7EB

**Key CSS Class Examples**

\`\`\`css
/* Outer shell and page container */
.newspaper-shell {
  min-height: 100vh;
  background: #E5E7EB;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
}

.newspaper-page {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: #FFFFFF;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
}

/* Header / Masthead */
.newspaper-header {
  border-top: 4px solid #000000;
  border-bottom: 4px solid #000000;
  padding: 1.25rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.newspaper-title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #1E3A8A;
}

.newspaper-subtitle {
  font-size: 0.875rem;
  font-style: italic;
  color: #6B7280;
  margin-top: 0.5rem;
}

/* Layout grid */
.newspaper-layout {
  display: grid;
  grid-template-columns: minmax(0, 2.5fr) minmax(0, 1fr);
  gap: 2rem;
}

.newspaper-main-story {
  border-right: 2px solid #1E3A8A;
  padding-right: 2rem;
}

.newspaper-main-headline {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 900;
  line-height: 1.2;
  color: #1E3A8A;
  border-bottom: 3px solid #1E3A8A;
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
}

.newspaper-lead {
  font-size: 1.0625rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.newspaper-columns-3 {
  column-count: 3;
  column-gap: 1.5rem;
  column-rule: 1px solid #E5E7EB;
  font-size: 0.9375rem;
  text-align: justify;
}
\`\`\`

**Spacing and Typography System (Recommended)**

- Base spacing unit: 4–8px; paragraphs typically use 16px bottom margin.
- Outer margins and page padding: 24–32px around the page content.
- Hierarchy:
  - Masthead: 40–56px, weight 900, uppercase serif.
  - Main headlines: 24–32px, weight 800–900.
  - Section headlines: 18–20px, weight 600–700.
  - Body: 14–16px, line-height 1.6–1.8.
  - Captions and footer: 12–13px, line-height 1.4–1.6.

**Important Notes**
- Always use semantic HTML (header / main / article / aside / footer); avoid flat <div> only layouts.
- Ensure body text contrast against the cream background meets WCAG AA (ratio > 7:1).
- Avoid bright, saturated brand colors; the focus should stay on typography and structure, not on flashy UI chrome.
- When using multi-column layouts, prevent headings or images from being split with \`break-inside: avoid\`.
- Hover effects should be subtle and text-focused (underlines, small color shifts), not heavy motion or scaling.
- In TailwindCSS, encapsulate repeated masthead, column and rule patterns into reusable utilities or components so entire sections can be regenerated consistently by the LLM.`
};

// 🔑 家族级 StylePrompt (详细风格说明书)
export const stylePrompt = {
  'zh-CN': `角色设定：你是专精于报纸排版（Newspaper Typography）风格的 UI 设计师，专注于传统印刷媒体排版技术在网页设计中的应用。

场景定位：为新闻网站、编辑内容平台、长文阅读应用打造具有传统报纸质感的界面，通过经典排版技术传达权威、专业、严肃的阅读体验。

核心设计语言：

1. **报纸标题栏（Masthead）**：
   - 大字间距、全大写、粗体衬线字体
   - 上下双线分隔（3-4px solid 黑色）
   - 居中对齐，字号 48-72px
   - 示例：
   \`\`\`css
   .masthead {
     font-size: 48px;
     font-weight: 900;
     letter-spacing: 0.2em;
     border-top: 3px solid #000;
     border-bottom: 3px solid #000;
     padding: 1rem 0;
     text-align: center;
   }
   \`\`\`

2. **首字下沉（Drop Cap）**：
   - 首字母放大 3-5 倍（4.5rem）
   - float: left + margin-right
   - 颜色可用深蓝 (#1E3A8A) 强调
   - 示例：
   \`\`\`css
   .drop-cap {
     float: left;
     font-size: 4.5rem;
     line-height: 0.85;
     font-weight: 900;
     color: #1E3A8A;
     margin-right: 0.15rem;
     margin-top: 0.1rem;
   }
   \`\`\`

3. **多栏布局（Multi-column Layout）**：
   - column-count: 2-3
   - column-gap: 2rem (32px)
   - column-rule: 1px solid #e5e7eb
   - text-align: justify (两端对齐)
   - 示例：
   \`\`\`css
   .newspaper-columns {
     column-count: 2;
     column-gap: 2rem;
     column-rule: 1px solid #e5e7eb;
     text-align: justify;
   }
   \`\`\`

4. **经典分隔线**：
   - 双线分隔：border-top: 3px double #000
   - 点线分隔：border-bottom: 1px dotted #d1d5db
   - 示例：
   \`\`\`css
   .section-divider {
     border-top: 3px double #1E3A8A;
     margin: 2rem 0;
   }
   \`\`\`

配色方案：

经典报纸色系：
- 主强调色：#1E3A8A (深蓝) - 标题、首字下沉
- 标题黑：#1F2937, #111827
- 正文灰：#374151, #4B5563
- 辅助灰：#6B7280, #9CA3AF

背景色：
- 米白背景：#FAF8F5, #F9FAFB (模拟报纸纸张)
- 纯白背景：#FFFFFF (现代数字报纸)

字体选择：

核心原则：使用衬线字体（Serif）营造传统权威感

推荐字体堆叠：
\`\`\`css
font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
\`\`\`

TailwindCSS：
\`\`\`html
<div class="font-serif">...</div>
\`\`\`

排版层级系统：

\`\`\`css
/* 报纸标题栏（Masthead） */
.masthead {
  font-size: 3-5rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

/* 主标题（Headline） */
.main-headline {
  font-size: 2-3rem;
  font-weight: 900;
  line-height: 1.2;
}

/* 副标题（Subheadline） */
.subheadline {
  font-size: 1.125-1.5rem;
  font-weight: 600;
}

/* 正文（Body） */
.body-text {
  font-size: 0.9375rem;  /* 15px */
  line-height: 1.6;
  text-align: justify;
}
\`\`\`

间距系统：

使用严格的垂直韵律（Vertical Rhythm）：

\`\`\`css
/* 段落间距 */
p { margin-bottom: 1rem; }  /* 16px */

/* 标题上下间距 */
h2 {
  margin-top: 2rem;    /* 32px */
  margin-bottom: 1rem; /* 16px */
}

/* 栏位间距（Column Gap） */
.columns {
  column-gap: 2rem;  /* 32px */
}
\`\`\`

无障碍性建议：

1. 语义化 HTML：使用 <article>, <section>, <aside> 结构化内容
2. 对比度检查：正文 vs 背景对比度 > 7:1
3. 阅读宽度限制：最大行长度 600-800px

使用场景：
- 新闻网站主页
- 在线杂志编辑内容
- 长文阅读页面
- 学术文章发布
- 专业博客内容`,

  'en-US': `Role: You are a UI designer specializing in Newspaper Typography, focusing on traditional print layout techniques applied to web design.

Scene Positioning: Create newspaper-textured interfaces for news websites, editorial platforms and long-form reading applications, conveying authority, professionalism and serious reading experience through classic typography.

Core Design Language:

1. **Newspaper Masthead**:
   - Wide letter-spacing, uppercase, bold serif fonts
   - Double-line separator (3-4px solid black)
   - Center-aligned, font-size 48-72px
   - Example:
   \`\`\`css
   .masthead {
     font-size: 48px;
     font-weight: 900;
     letter-spacing: 0.2em;
     border-top: 3px solid #000;
     border-bottom: 3px solid #000;
     padding: 1rem 0;
     text-align: center;
   }
   \`\`\`

2. **Drop Cap**:
   - First letter 3-5x larger (4.5rem)
   - float: left + margin-right
   - Color can use deep blue (#1E3A8A) for emphasis
   - Example:
   \`\`\`css
   .drop-cap {
     float: left;
     font-size: 4.5rem;
     line-height: 0.85;
     font-weight: 900;
     color: #1E3A8A;
     margin-right: 0.15rem;
   }
   \`\`\`

3. **Multi-column Layout**:
   - column-count: 2-3
   - column-gap: 2rem (32px)
   - column-rule: 1px solid #e5e7eb
   - text-align: justify
   - Example:
   \`\`\`css
   .newspaper-columns {
     column-count: 2;
     column-gap: 2rem;
     column-rule: 1px solid #e5e7eb;
     text-align: justify;
   }
   \`\`\`

4. **Classic Dividers**:
   - Double-line: border-top: 3px double #000
   - Dotted line: border-bottom: 1px dotted #d1d5db
   - Example:
   \`\`\`css
   .section-divider {
     border-top: 3px double #1E3A8A;
     margin: 2rem 0;
   }
   \`\`\`

Color Scheme:

Classic newspaper colors:
- Primary accent: #1E3A8A (deep blue) - headlines, drop caps
- Heading black: #1F2937, #111827
- Body gray: #374151, #4B5563
- Caption gray: #6B7280, #9CA3AF

Backgrounds:
- Cream: #FAF8F5, #F9FAFB (newspaper texture)
- Pure white: #FFFFFF (modern digital newspaper)

Font Selection:

Core principle: Use Serif fonts for traditional authority

Recommended stack:
\`\`\`css
font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
\`\`\`

TailwindCSS:
\`\`\`html
<div class="font-serif">...</div>
\`\`\`

Typography Hierarchy:

\`\`\`css
/* Masthead */
.masthead {
  font-size: 3-5rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

/* Main headline */
.main-headline {
  font-size: 2-3rem;
  font-weight: 900;
  line-height: 1.2;
}

/* Body text */
.body-text {
  font-size: 0.9375rem;  /* 15px */
  line-height: 1.6;
  text-align: justify;
}
\`\`\`

Spacing System:

Use strict vertical rhythm:

\`\`\`css
/* Paragraph spacing */
p { margin-bottom: 1rem; }

/* Heading spacing */
h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* Column gap */
.columns {
  column-gap: 2rem;
}
\`\`\`

Accessibility:

1. Semantic HTML: Use <article>, <section>, <aside>
2. Contrast: Body vs background > 7:1
3. Reading width: Max line length 600-800px

Use Cases:
- News website homepages
- Online magazine content
- Long-form reading pages
- Academic articles
- Professional blogs`
};

// Template list
export const newspaperTemplates = [
  ...modernEditorialTemplates,
  ...vintageRetroTemplates
];

export default newspaperTemplates;
