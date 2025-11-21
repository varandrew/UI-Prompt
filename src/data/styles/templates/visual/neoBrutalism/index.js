// Neo-Brutalism - Visual 子風格

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './FullPageDemo';
import { brutalismFullPageHTML, brutalismFullPageStyles } from './BrutalismFullPage';

export const neoBrutalism = {
  id: 'visual-neo-brutalism',
  title: 'styles.visual.neoBrutalism.title',
  description: 'styles.visual.neoBrutalism.description',

  // ⭐ Demo HTML and Styles (for StyleCard preview)
  demoHTML,
  customStyles,

  // ⭐ Full Page Preview (default - Neo-Brutalism)
  fullPageHTML,
  fullPageStyles,

  // ⭐ 提供兩個完整页面預覽模板：Neo-Brutalism 与 Brutalism
  previews: [
    {
      id: 'neo-brutalism',
      name: 'Neo-Brutalism',
      type: 'full',
      previewId: 'neo-brutalism'
    },
    {
      id: 'brutalism',
      name: 'Brutalism',
      type: 'full',
      previewId: 'brutalism'
    }
  ],

  // ⭐ customPrompt（双語 AI 指令）
  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个新粗野主义（Neo-Brutalism）风格的界面，通过粗黑边框、强烈阴影偏移、大胆色彩对比和不对称布局创造视觉冲击力。

**核心设计要求**

1. **粗黑边框系统**
   - 所有元素使用粗黑边框：\`border: 4px-6px solid #000\`
   - 边框必须明显，成为视觉主体的一部分
   - 示例：
     \`\`\`css
     .neo-brutal-card {
       border: 5px solid #000;
       background: white;
     }

     .neo-brutal-button {
       border: 6px solid #000;
       background: linear-gradient(135deg, #ef4444, #ec4899);
     }

     .neo-brutal-input {
       border: 4px solid #000;
       background: white;
     }
     \`\`\`

2. **强烈阴影偏移效果**
   - 使用实色阴影（solid shadow），而非模糊阴影
   - 水平偏移 6px-12px，垂直偏移 6px-12px
   - 阴影颜色固定为纯黑 #000
   - 示例：
     \`\`\`css
     .neo-brutal-element {
       box-shadow: 8px 8px 0 #000;
     }

     .neo-brutal-hover:hover {
       box-shadow: 12px 12px 0 #000;
       transform: translate(-2px, -2px);
     }

     /* 多层阴影（可选） */
     .neo-brutal-layered {
       box-shadow: 6px 6px 0 #fff,
                   12px 12px 0 #000;
     }
     \`\`\`

3. **大胆色彩对比**
   - 使用高饱和度鲜艳色彩
   - 色彩对比强烈（黑白 + 鲜艳强调色）
   - 渐变色使用线性渐变（linear-gradient）
   - 示例：
     \`\`\`css
     /* 红粉渐变 */
     .gradient-pink {
       background: linear-gradient(135deg, #ef4444, #ec4899, #dc2626);
     }

     /* 蓝紫渐变 */
     .gradient-purple {
       background: linear-gradient(135deg, #6366f1, #8b5cf6);
     }

     /* 绿色渐变 */
     .gradient-green {
       background: linear-gradient(135deg, #34d399, #059669);
     }

     /* 琥珀-橙色渐变 */
     .gradient-amber {
       background: linear-gradient(135deg, #fbbf24, #f97316, #ef4444);
     }
     \`\`\`

4. **傾斜旋轉变換**
   - 元素輕微傾斜（rotate -5deg ~ 5deg）
   - 創造不對稱、動態視覺感
   - 懸停時反向旋轉或放大
   - 示例：
     \`\`\`css
     .neo-brutal-tilted-left {
       transform: rotate(-2deg);
     }

     .neo-brutal-tilted-right {
       transform: rotate(3deg);
     }

     .neo-brutal-tilted:hover {
       transform: rotate(0deg) scale(1.05);
       transition: all 0.3s ease;
     }

     /* 导航欄元素 */
     .neo-brutal-logo {
       transform: rotate(-3deg);
     }

     /* 卡片輪流傾斜 */
     .neo-brutal-card:nth-child(odd) {
       transform: rotate(-1deg);
     }

     .neo-brutal-card:nth-child(even) {
       transform: rotate(1.5deg);
     }
     \`\`\`

5. **扁平化幾何形狀**
   - 使用简單幾何形狀（矩形、圓形、正方形）
   - 圓角較小或無圓角：\`border-radius: 0-4px\`
   - 避免複雜曲线和裝飾
   - 示例：
     \`\`\`css
     /* 矩形卡片 */
     .neo-brutal-rect {
       border-radius: 0;
       width: 100%;
       aspect-ratio: 16/9;
     }

     /* 正方形圖标容器 */
     .neo-brutal-square {
       width: 60px;
       height: 60px;
       border-radius: 0;
     }

     /* 圓形頭像 */
     .neo-brutal-circle {
       width: 50px;
       height: 50px;
       border-radius: 50%;
       border: 4px solid #000;
     }

     /* 稍有圓角的按鈕 */
     .neo-brutal-btn {
       border-radius: 4px;
     }
     \`\`\`

6. **不對稱佈局与层疊**
   - 元素不完全對齊，創造動態感
   - 使用 z-index 和 transform 製造层次
   - 边框和阴影错位排列
   - 示例：
     \`\`\`css
     .neo-brutal-stack > div:nth-child(1) {
       position: relative;
       z-index: 10;
       transform: rotate(-1deg);
     }

     .neo-brutal-stack > div:nth-child(2) {
       position: relative;
       z-index: 20;
       transform: rotate(1deg) translateY(-16px);
     }

     .neo-brutal-stack > div:nth-child(3) {
       position: relative;
       z-index: 30;
       transform: rotate(-1.5deg) translateY(-32px);
     }
     \`\`\`

7. **強烈視覺反饋**
   - 懸停/按下時明显的視覺变化
   - 阴影偏移量增大或減小
   - 颜色反轉或高飽和度变化
   - 示例：
     \`\`\`css
     .neo-brutal-interactive {
       background: white;
       border: 5px solid #000;
       box-shadow: 6px 6px 0 #000;
       transition: all 0.2s ease;
     }

     .neo-brutal-interactive:hover {
       background: #fbbf24;
       box-shadow: 10px 10px 0 #000;
       transform: translate(-2px, -2px);
     }

     .neo-brutal-interactive:active {
       background: #ef4444;
       box-shadow: 2px 2px 0 #000;
       transform: translate(2px, 2px);
     }
     \`\`\`

**配色方案（大膽撞色）**

主色調：
- 背景淺灰：#f5f5f5, #e5e7eb
- 純黑边框：#000000
- 純白背景：#ffffff

強調色（鮮艷高飽和度）：
- 紅色系：#ef4444, #dc2626
- 粉紅系：#ec4899, #d946ef
- 琥珀系：#fbbf24, #f97316
- 藍紫系：#6366f1, #8b5cf6
- 綠色系：#34d399, #059669, #10b981, #14b8a6

功能色：
- 成功：#22c55e（鮮綠）
- 警告：#f59e0b（橙黃）
- 错誤：#ef4444（紅）
- 資訊：#3b82f6（藍）

**关键 CSS 类示例**

\`\`\`css
/* Neo-Brutal 卡片組件 */
.neo-brutal-card {
  background: white;
  border: 5px solid #000;
  padding: 2rem;
  box-shadow: 8px 8px 0 #000;
  transform: rotate(-1deg);
  transition: all 0.3s ease;
}

.neo-brutal-card:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: 12px 12px 0 #000;
}

/* Neo-Brutal 按鈕組件 */
.neo-brutal-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ef4444, #ec4899);
  color: #000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 6px solid #000;
  border-radius: 0;
  box-shadow: 6px 6px 0 #000;
  transform: rotate(-2deg);
  transition: all 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.neo-brutal-button:hover {
  background: linear-gradient(135deg, #dc2626, #d946ef);
  box-shadow: 10px 10px 0 #000;
  transform: rotate(-2deg) scale(1.05);
}

.neo-brutal-button:active {
  box-shadow: 3px 3px 0 #000;
  transform: rotate(0deg) translate(3px, 3px);
}

/* Neo-Brutal 次要按鈕 */
.neo-brutal-button-secondary {
  padding: 1rem 2rem;
  background: white;
  color: #000;
  font-weight: 900;
  border: 5px solid #000;
  box-shadow: 6px 6px 0 #000;
  transform: rotate(2deg);
  transition: all 0.2s ease;
}

.neo-brutal-button-secondary:hover {
  background: #fbbf24;
  box-shadow: 10px 10px 0 #000;
}

/* Neo-Brutal 輸入框 */
.neo-brutal-input {
  width: 100%;
  padding: 1rem;
  background: white;
  border: 4px solid #000;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 4px 4px 0 #000;
  transition: all 0.2s ease;
}

.neo-brutal-input:focus {
  outline: none;
  box-shadow: 6px 6px 0 #fbbf24;
  transform: translateY(-2px);
  background: #fffbeb;
}

.neo-brutal-input::placeholder {
  color: #9ca3af;
  font-weight: 600;
}

/* Neo-Brutal 导航欄 */
.neo-brutal-nav {
  background: white;
  border-bottom: 6px solid #000;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 8px 0 #000;
}

.neo-brutal-nav a {
  font-weight: 700;
  color: #000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 3px solid transparent;
  transition: all 0.2s ease;
}

.neo-brutal-nav a:hover {
  border: 3px solid #000;
  background: #fbbf24;
  transform: rotate(-2deg);
}

.neo-brutal-nav a.active {
  border: 3px solid #000;
  background: #ef4444;
  color: white;
}

/* Neo-Brutal 資料表格 */
.neo-brutal-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 5px solid #000;
}

.neo-brutal-table thead {
  background: #000;
  color: white;
}

.neo-brutal-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 900;
  border: 3px solid #000;
}

.neo-brutal-table td {
  padding: 1rem;
  border: 3px solid #000;
  background: white;
  font-weight: 600;
}

.neo-brutal-table tr:nth-child(odd) td {
  background: #fef3c7;
}

.neo-brutal-table tr:nth-child(even) td {
  background: #dbeafe;
}

.neo-brutal-table tr:hover td {
  background: #fbbf24;
  transform: scale(1.01);
}

/* Neo-Brutal 标籤 */
.neo-brutal-badge {
  padding: 0.5rem 1rem;
  background: #10b981;
  color: white;
  border: 3px solid #000;
  font-weight: 900;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  box-shadow: 3px 3px 0 #000;
  transform: rotate(-2deg);
}

.neo-brutal-badge.warning {
  background: #f59e0b;
  color: #000;
}

.neo-brutal-badge.error {
  background: #ef4444;
}

.neo-brutal-badge.info {
  background: #3b82f6;
}

/* Neo-Brutal 容器背景 */
.neo-brutal-container {
  background: linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%);
  min-height: 100vh;
  padding: 3rem 2rem;
  border-bottom: 6px solid #000;
}

.neo-brutal-section {
  max-width: 1400px;
  margin: 0 auto;
  background: #f5f5f5;
  border: 6px solid #000;
  padding: 3rem;
  box-shadow: 12px 12px 0 #000;
}
\`\`\`

**間距系統（基於 8px）**

- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

**字体系統**

标題：
- 巨大标題：48px-72px, font-weight: 900
- 大标題：36px-48px, font-weight: 900
- 中标題：24px-32px, font-weight: 900
- 小标題：18px-24px, font-weight: 700

正文：
- 大正文：18px, font-weight: 600
- 正文：16px, font-weight: 600
- 小正文：14px, font-weight: 600

特殊：
- 所有文字預设使用粗体（font-weight: 600 以上）
- 标題使用超粗体（font-weight: 900）
- 字母間距略寬：letter-spacing: 0.02em - 0.05em
- 可使用全大写（text-transform: uppercase）增強衝擊力

**重要提示**

- ✅ 必須使用粗黑边框（4px-6px solid #000）
- ✅ 必須使用實色阴影偏移（6px-12px，無模糊）
- ✅ 使用高飽和度鮮艷色彩
- ✅ 元素輕微傾斜創造動態感
- ✅ 交互必須有明显視覺反饋
- ❌ 避免圓角過大（最多 4px）
- ❌ 避免使用模糊阴影（blur shadow）
- ❌ 避免低飽和度柔和色彩
- ❌ 避免過於對稱和工整的佈局
- ❌ 避免細线边框（必須 4px 以上）
- ❌ 避免過度裝飾和複雜圖案
- 保持視覺張力和衝擊感
- 黑白對比是基礎，鮮艷色彩是點綴
- 所有元素必須"大膽且粗魯"
`,
    'en-US': `Please create a Neo-Brutalism style interface using TailwindCSS, creating visual impact through bold black borders, strong shadow offsets, vibrant color contrasts, and asymmetric layouts.

**Core Design Requirements**

1. **Bold Black Border System**
   - Use thick black borders for all elements: \`border: 4px-6px solid #000\`
   - Borders must be prominent, part of the visual identity
   - Examples:
     \`\`\`css
     .neo-brutal-card {
       border: 5px solid #000;
       background: white;
     }

     .neo-brutal-button {
       border: 6px solid #000;
       background: linear-gradient(135deg, #ef4444, #ec4899);
     }

     .neo-brutal-input {
       border: 4px solid #000;
       background: white;
     }
     \`\`\`

2. **Strong Shadow Offset Effect**
   - Use solid shadows (no blur)
   - Horizontal offset 6px-12px, vertical offset 6px-12px
   - Shadow color fixed to pure black #000
   - Examples:
     \`\`\`css
     .neo-brutal-element {
       box-shadow: 8px 8px 0 #000;
     }

     .neo-brutal-hover:hover {
       box-shadow: 12px 12px 0 #000;
       transform: translate(-2px, -2px);
     }

     /* Multi-layer shadow (optional) */
     .neo-brutal-layered {
       box-shadow: 6px 6px 0 #fff,
                   12px 12px 0 #000;
     }
     \`\`\`

3. **Bold Color Contrast**
   - Use high-saturation vibrant colors
   - Strong color contrast (black/white + vivid accents)
   - Gradients use linear-gradient
   - Examples:
     \`\`\`css
     /* Red-pink gradient */
     .gradient-pink {
       background: linear-gradient(135deg, #ef4444, #ec4899, #dc2626);
     }

     /* Blue-purple gradient */
     .gradient-purple {
       background: linear-gradient(135deg, #6366f1, #8b5cf6);
     }

     /* Green gradient */
     .gradient-green {
       background: linear-gradient(135deg, #34d399, #059669);
     }

     /* Amber-orange gradient */
     .gradient-amber {
       background: linear-gradient(135deg, #fbbf24, #f97316, #ef4444);
     }
     \`\`\`

4. **Tilted Rotation Transform**
   - Elements slightly tilted (rotate -5deg ~ 5deg)
   - Creates asymmetric, dynamic visual feel
   - Reverse rotation or scale on hover
   - Examples:
     \`\`\`css
     .neo-brutal-tilted-left {
       transform: rotate(-2deg);
     }

     .neo-brutal-tilted-right {
       transform: rotate(3deg);
     }

     .neo-brutal-tilted:hover {
       transform: rotate(0deg) scale(1.05);
       transition: all 0.3s ease;
     }

     /* Navigation elements */
     .neo-brutal-logo {
       transform: rotate(-3deg);
     }

     /* Alternating card tilt */
     .neo-brutal-card:nth-child(odd) {
       transform: rotate(-1deg);
     }

     .neo-brutal-card:nth-child(even) {
       transform: rotate(1.5deg);
     }
     \`\`\`

5. **Flat Geometric Shapes**
   - Use simple geometric shapes (rectangles, circles, squares)
   - Small or no border-radius: \`border-radius: 0-4px\`
   - Avoid complex curves and decorations
   - Examples:
     \`\`\`css
     /* Rectangle card */
     .neo-brutal-rect {
       border-radius: 0;
       width: 100%;
       aspect-ratio: 16/9;
     }

     /* Square icon container */
     .neo-brutal-square {
       width: 60px;
       height: 60px;
       border-radius: 0;
     }

     /* Circular avatar */
     .neo-brutal-circle {
       width: 50px;
       height: 50px;
       border-radius: 50%;
       border: 4px solid #000;
     }

     /* Slightly rounded button */
     .neo-brutal-btn {
       border-radius: 4px;
     }
     \`\`\`

6. **Asymmetric Layout & Layering**
   - Elements not perfectly aligned, creating dynamism
   - Use z-index and transform to create depth
   - Offset borders and shadows
   - Examples:
     \`\`\`css
     .neo-brutal-stack > div:nth-child(1) {
       position: relative;
       z-index: 10;
       transform: rotate(-1deg);
     }

     .neo-brutal-stack > div:nth-child(2) {
       position: relative;
       z-index: 20;
       transform: rotate(1deg) translateY(-16px);
     }

     .neo-brutal-stack > div:nth-child(3) {
       position: relative;
       z-index: 30;
       transform: rotate(-1.5deg) translateY(-32px);
     }
     \`\`\`

7. **Strong Visual Feedback**
   - Obvious visual changes on hover/press
   - Shadow offset increases or decreases
   - Color inversion or high saturation changes
   - Examples:
     \`\`\`css
     .neo-brutal-interactive {
       background: white;
       border: 5px solid #000;
       box-shadow: 6px 6px 0 #000;
       transition: all 0.2s ease;
     }

     .neo-brutal-interactive:hover {
       background: #fbbf24;
       box-shadow: 10px 10px 0 #000;
       transform: translate(-2px, -2px);
     }

     .neo-brutal-interactive:active {
       background: #ef4444;
       box-shadow: 2px 2px 0 #000;
       transform: translate(2px, 2px);
     }
     \`\`\`

**Color Scheme (Bold Clash Colors)**

Primary Colors:
- Background Light Gray: #f5f5f5, #e5e7eb
- Pure Black Borders: #000000
- Pure White Background: #ffffff

Accent Colors (Vibrant High Saturation):
- Red Series: #ef4444, #dc2626
- Pink Series: #ec4899, #d946ef
- Amber Series: #fbbf24, #f97316
- Blue-Purple Series: #6366f1, #8b5cf6
- Green Series: #34d399, #059669, #10b981, #14b8a6

Functional Colors:
- Success: #22c55e (bright green)
- Warning: #f59e0b (orange-yellow)
- Error: #ef4444 (red)
- Info: #3b82f6 (blue)

**Key CSS Class Examples**

\`\`\`css
/* Neo-Brutal Card Component */
.neo-brutal-card {
  background: white;
  border: 5px solid #000;
  padding: 2rem;
  box-shadow: 8px 8px 0 #000;
  transform: rotate(-1deg);
  transition: all 0.3s ease;
}

.neo-brutal-card:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: 12px 12px 0 #000;
}

/* Neo-Brutal Button Component */
.neo-brutal-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ef4444, #ec4899);
  color: #000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 6px solid #000;
  border-radius: 0;
  box-shadow: 6px 6px 0 #000;
  transform: rotate(-2deg);
  transition: all 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.neo-brutal-button:hover {
  background: linear-gradient(135deg, #dc2626, #d946ef);
  box-shadow: 10px 10px 0 #000;
  transform: rotate(-2deg) scale(1.05);
}

.neo-brutal-button:active {
  box-shadow: 3px 3px 0 #000;
  transform: rotate(0deg) translate(3px, 3px);
}

/* Neo-Brutal Secondary Button */
.neo-brutal-button-secondary {
  padding: 1rem 2rem;
  background: white;
  color: #000;
  font-weight: 900;
  border: 5px solid #000;
  box-shadow: 6px 6px 0 #000;
  transform: rotate(2deg);
  transition: all 0.2s ease;
}

.neo-brutal-button-secondary:hover {
  background: #fbbf24;
  box-shadow: 10px 10px 0 #000;
}

/* Neo-Brutal Input */
.neo-brutal-input {
  width: 100%;
  padding: 1rem;
  background: white;
  border: 4px solid #000;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 4px 4px 0 #000;
  transition: all 0.2s ease;
}

.neo-brutal-input:focus {
  outline: none;
  box-shadow: 6px 6px 0 #fbbf24;
  transform: translateY(-2px);
  background: #fffbeb;
}

.neo-brutal-input::placeholder {
  color: #9ca3af;
  font-weight: 600;
}

/* Neo-Brutal Navigation */
.neo-brutal-nav {
  background: white;
  border-bottom: 6px solid #000;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 8px 0 #000;
}

.neo-brutal-nav a {
  font-weight: 700;
  color: #000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 3px solid transparent;
  transition: all 0.2s ease;
}

.neo-brutal-nav a:hover {
  border: 3px solid #000;
  background: #fbbf24;
  transform: rotate(-2deg);
}

.neo-brutal-nav a.active {
  border: 3px solid #000;
  background: #ef4444;
  color: white;
}

/* Neo-Brutal Table */
.neo-brutal-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 5px solid #000;
}

.neo-brutal-table thead {
  background: #000;
  color: white;
}

.neo-brutal-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 900;
  border: 3px solid #000;
}

.neo-brutal-table td {
  padding: 1rem;
  border: 3px solid #000;
  background: white;
  font-weight: 600;
}

.neo-brutal-table tr:nth-child(odd) td {
  background: #fef3c7;
}

.neo-brutal-table tr:nth-child(even) td {
  background: #dbeafe;
}

.neo-brutal-table tr:hover td {
  background: #fbbf24;
  transform: scale(1.01);
}

/* Neo-Brutal Badge */
.neo-brutal-badge {
  padding: 0.5rem 1rem;
  background: #10b981;
  color: white;
  border: 3px solid #000;
  font-weight: 900;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  box-shadow: 3px 3px 0 #000;
  transform: rotate(-2deg);
}

.neo-brutal-badge.warning {
  background: #f59e0b;
  color: #000;
}

.neo-brutal-badge.error {
  background: #ef4444;
}

.neo-brutal-badge.info {
  background: #3b82f6;
}

/* Neo-Brutal Container Background */
.neo-brutal-container {
  background: linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%);
  min-height: 100vh;
  padding: 3rem 2rem;
  border-bottom: 6px solid #000;
}

.neo-brutal-section {
  max-width: 1400px;
  margin: 0 auto;
  background: #f5f5f5;
  border: 6px solid #000;
  padding: 3rem;
  box-shadow: 12px 12px 0 #000;
}
\`\`\`

**Spacing System (8px-based)**

- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

**Typography System**

Headings:
- Massive Title: 48px-72px, font-weight: 900
- Large Title: 36px-48px, font-weight: 900
- Medium Title: 24px-32px, font-weight: 900
- Small Title: 18px-24px, font-weight: 700

Body:
- Large Body: 18px, font-weight: 600
- Body: 16px, font-weight: 600
- Small Body: 14px, font-weight: 600

Special:
- All text defaults to bold (font-weight: 600+)
- Headings use extra bold (font-weight: 900)
- Slightly wider letter spacing: letter-spacing: 0.02em - 0.05em
- Use ALL CAPS (text-transform: uppercase) for enhanced impact

**Important Notes**

- ✅ MUST use thick black borders (4px-6px solid #000)
- ✅ MUST use solid shadow offset (6px-12px, no blur)
- ✅ Use high-saturation vibrant colors
- ✅ Tilt elements slightly to create dynamism
- ✅ Interactions MUST have obvious visual feedback
- ❌ Avoid excessive border-radius (max 4px)
- ❌ Avoid blurred shadows (blur shadow)
- ❌ Avoid low-saturation soft colors
- ❌ Avoid overly symmetric and neat layouts
- ❌ Avoid thin borders (MUST be 4px+)
- ❌ Avoid excessive decoration and complex patterns
- Maintain visual tension and impact
- Black-white contrast is the foundation, vivid colors are accents
- All elements MUST be "bold and brutal"
`
  },
  stylePrompt: {
    'zh-CN': `角色：你是一名擅长新粗野主义（Neo-Brutalism）风格的 UI 设计师，需要用夸张的边框、偏移阴影和大胆撞色，打造一眼就记得住的界面。

场景定位：
- 适合创意工作室网站、设计作品集、个人主页、登陆页或需要表达「强个性 / 反精致」态度的产品。
- 用户在进入页面时，应立即感到：这是一个敢于“粗糙”“直给”的视觉场域，而不是中性企业后台。

视觉设计理念：
- 以极粗黑边框和硬边阴影作为主要视觉语言：界面像一张手绘漫画或海报，被黑笔用力勾勒轮廓。
- 色彩选择偏向高饱和度，并故意制造强对比（黑白 + 鲜艳强调色），让每个模块像独立贴纸或卡片。
- 布局允许刻意的不对齐、错位与旋转，让版面看起来「还在移动」而不是完全静止。

材质与质感：
- 表面大多是平涂色块和线性渐变，不追求细腻的光影，而是强调形状和块面本身。
- 阴影是实心方块（无模糊）、明显偏移，像纸片下方垫了一块砖，带有张力而不是柔和光晕。

交互体验：
- 悬停与点击的反馈可以明显甚至有一点“粗暴”：阴影偏移距离变化、元素轻微跳动、背景色突变为高饱和色。
- 交互应该让人感到“被推了一下”——但仍需注意节奏，避免高频闪烁或晃动造成不适。

氛围营造：
- 整体氛围是叛逆、直接、带一点 punk 感的设计态度，适合强调观点与个性的内容。
- 用户在使用时会感觉自己正在浏览一组被撕下来的海报墙，而不是规规矩矩的企业模板。`,
    'en-US': `Role: You are a UI designer specializing in Neo-Brutalism, using exaggerated borders, offset shadows and bold color clashes to create instantly memorable interfaces.

Scene:
- Ideal for creative studios, portfolios, personal sites, landing pages and any product that wants to broadcast a strong, opinionated visual voice.
- When users arrive, they should immediately feel this is a space that embraces “roughness” and directness, not a neutral corporate dashboard.

Visual philosophy:
- Heavy black outlines and hard-edged shadows are the primary vocabulary, making the UI resemble hand-drawn posters or comics.
- Colors are saturated and aggressively contrasted (black and white plus vivid accents), so each module reads like its own sticker or card.
- Layout tolerates intentional misalignment, offset and rotation so the page feels kinetic instead of perfectly static.

Material & texture:
- Surfaces favor flat fills and linear gradients; the focus is on shape and block composition rather than subtle light modelling.
- Shadows are solid rectangles with clear offsets, as if pieces of paper are stacked in a rough collage rather than floating softly.

Interaction:
- Hover and active states can be quite strong: shadows jump, elements nudge or background fills snap to high-saturation colors.
- Interactions should feel like a deliberate jolt while still avoiding excessive flicker or motion that could strain the eyes.

Mood:
- The overall mood is rebellious, loud and slightly “punk”, perfect for content that celebrates individuality and strong viewpoints.
- Users should feel like they are walking past a wall of layered posters, not paging through a polite enterprise theme.`
  }
};
export default neoBrutalism;
