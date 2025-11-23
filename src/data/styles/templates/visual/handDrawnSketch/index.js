// Hand-Drawn Sketch 手绘涂鸦家族
// 通过手写字体、SVG 滤镜和随性线条创造温暖亲切的视觉体验

// 导入家族 Demo
import { demoHTML, customStyles } from './Demo';

// 导入所有模板
import {
  handDrawnSketchFullPageHTML,
  handDrawnSketchFullPageStyles
} from './handDrawnSketchFullPage';
import {
  handDrawnSketchComponentsFullPageHTML,
  handDrawnSketchComponentsFullPageStyles
} from './handDrawnSketchComponentsFullPage';

// 导出家族元数据
export const name = 'styles.visual.handDrawnSketch.title';
export const demoUI = demoHTML;
export { customStyles };
export const description = 'styles.visual.handDrawnSketch.description';

// 导出双语 customPrompt（300-500 行）
export const customPrompt = {
  'zh-CN': `请使用 TailwindCSS 创建一个手绘涂鸦风格的界面，通过手写字体、SVG 滤镜和随性线条创造温暖亲切的视觉体验。

**核心设计要求**

1. **手写字体系统**
   - 主标题字体：Caveat（支持粗细 400-700）
     \`\`\`css
     @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

     .hand-title {
       font-family: 'Caveat', cursive;
       font-size: 48px;
       font-weight: 700;
       letter-spacing: 0.02em;
     }
     \`\`\`

   - 正文字体：Patrick Hand（更易读）
     \`\`\`css
     @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

     .hand-text {
       font-family: 'Patrick Hand', cursive;
       font-size: 16px;
       line-height: 1.6;
     }
     \`\`\`

   - 装饰字体：Reenie Beanie（更随性）
     \`\`\`css
     @import url('https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap');

     .hand-casual {
       font-family: 'Reenie Beanie', cursive;
       font-size: 20px;
     }
     \`\`\`

2. **SVG 手绘滤镜效果**
   - 使用 feTurbulence + feDisplacementMap 创造手绘抖动感
   - 滤镜强度：scale 1.0-2.0（数值越大越明显）
   - 基础频率：baseFrequency 0.03-0.08
   - 示例：
     \`\`\`html
     <svg style="position: absolute; width: 0; height: 0;">
       <defs>
         <filter id="sketch-roughen">
           <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
           <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
         </filter>
       </defs>
     </svg>

     <div style="filter: url(#sketch-roughen);">
       <!-- 应用手绘滤镜的内容 -->
     </div>
     \`\`\`

   - 性能提示：仅对关键元素应用滤镜，避免全局使用

3. **粘贴便签设计**
   - 经典便签颜色：
     \`\`\`css
     .sticky-note-yellow {
       background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
     }

     .sticky-note-pink {
       background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
     }

     .sticky-note-blue {
       background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%);
     }

     .sticky-note-green {
       background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
     }
     \`\`\`

   - 便签立体效果：
     \`\`\`css
     .sticky-note {
       box-shadow:
         0 4px 6px rgba(0, 0, 0, 0.1),
         0 1px 3px rgba(0, 0, 0, 0.08);
       transform: rotate(-2deg);  /* 随机旋转角度 -3deg ~ 3deg */
       transition: all 0.3s ease;
     }

     .sticky-note:hover {
       transform: rotate(0deg) scale(1.05);
       box-shadow:
         0 10px 20px rgba(0, 0, 0, 0.15),
         0 3px 6px rgba(0, 0, 0, 0.1);
       z-index: 10;
     }
     \`\`\`

4. **Grid 纸背景效果**
   - 使用 repeating-linear-gradient 创造网格纸
   - 网格间距：20px（推荐）
   - 示例：
     \`\`\`css
     .grid-paper-bg {
       background:
         repeating-linear-gradient(
           0deg,
           #f8f9fa 0px,
           #f8f9fa 1px,
           transparent 1px,
           transparent 20px
         ),
         repeating-linear-gradient(
           90deg,
           #f8f9fa 0px,
           #f8f9fa 1px,
           transparent 1px,
           transparent 20px
         ),
         #ffffff;
     }
     \`\`\`

   - 点阵纸背景：
     \`\`\`css
     .dot-paper-bg {
       background-image: radial-gradient(circle, #d0d0d0 1px, transparent 1px);
       background-size: 20px 20px;
       background-color: #ffffff;
     }
     \`\`\`

5. **手绘边框和线条**
   - 使用 border-image 或 SVG path 创造不规则边框
   - 虚线手绘效果：
     \`\`\`css
     .sketch-border {
       border: 2px dashed #2c3e50;
       border-radius: 4px;
       filter: url(#sketch-roughen);
     }
     \`\`\`

   - 波浪线分隔：
     \`\`\`html
     <svg width="100%" height="20">
       <path d="M 0 10 Q 10 5, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
             stroke="#2c3e50" stroke-width="2" fill="none"
             filter="url(#sketch-roughen)"/>
     </svg>
     \`\`\`

6. **手绘图标和箭头**
   - 使用 SVG path 绘制不规则形状
   - 示例（手绘勾选框）：
     \`\`\`html
     <svg width="24" height="24" viewBox="0 0 24 24">
       <defs>
         <filter id="icon-sketch">
           <feTurbulence baseFrequency="0.08" numOctaves="1"/>
           <feDisplacementMap in="SourceGraphic" scale="1.2"/>
         </filter>
       </defs>
       <path d="M 4 12 L 9 17 L 20 6"
             stroke="#2c3e50" stroke-width="2.5"
             fill="none" stroke-linecap="round"
             filter="url(#icon-sketch)"/>
     </svg>
     \`\`\`

7. **柔和动画效果**
   - 避免生硬的过渡，使用弹性缓动
   - 推荐 easing：cubic-bezier(0.68, -0.55, 0.265, 1.55)
   - 示例：
     \`\`\`css
     .sketch-animate {
       transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
     }

     .sketch-animate:hover {
       transform: scale(1.05) rotate(2deg);
     }
     \`\`\`

**配色方案（温暖友好）**

主色调（粘贴便签色系）：
- 黄色便签：#fff9c4, #fff59d, #fff176
- 粉色便签：#fce4ec, #f8bbd0, #f48fb1
- 蓝色便签：#e1f5fe, #b3e5fc, #81d4fa
- 绿色便签：#e8f5e9, #c8e6c9, #a5d6a7

文字色彩：
- 主要文字：#2c3e50（深蓝灰）
- 次要文字：#34495e（中蓝灰）
- 装饰文字：#7f8c8d（浅灰）

手绘线条：
- 黑色线条：#23303d
- 深灰线条：#4a5568
- 装饰线条：#a0aec0

背景色：
- 纸质背景：#ffffff, #fefefe, #fcfcfc
- 网格线条：#f8f9fa, #e9ecef

**关键 CSS 类示例**

\`\`\`css
/* 手绘卡片 */
.sketch-card {
  background: #ffffff;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  filter: url(#sketch-roughen);
  font-family: 'Patrick Hand', cursive;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.sketch-card:hover {
  transform: translateY(-4px) rotate(1deg);
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.15);
}

/* 手绘按钮 */
.sketch-button {
  background: #fff176;
  border: 2px solid #2c3e50;
  border-radius: 12px;
  padding: 12px 24px;
  font-family: 'Caveat', cursive;
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  cursor: pointer;
  filter: url(#sketch-roughen);
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
}

.sketch-button:hover {
  background: #fff59d;
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
}

.sketch-button:active {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
}

/* 手绘输入框 */
.sketch-input {
  background: #ffffff;
  border: 2px dashed #4a5568;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Patrick Hand', cursive;
  font-size: 16px;
  color: #2c3e50;
  filter: url(#sketch-roughen);
  transition: all 0.3s ease;
}

.sketch-input:focus {
  outline: none;
  border-color: #2c3e50;
  border-style: solid;
  box-shadow: 0 0 0 4px rgba(44, 62, 80, 0.1);
}

.sketch-input::placeholder {
  color: #7f8c8d;
  font-style: italic;
}

/* 便签容器 */
.sticky-notes-container {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  perspective: 1000px;
}

.sticky-note {
  width: 200px;
  min-height: 200px;
  padding: 20px;
  border-radius: 2px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  font-family: 'Patrick Hand', cursive;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  cursor: pointer;
  position: relative;
}

/* 添加随机旋转 */
.sticky-note:nth-child(3n+1) {
  transform: rotate(-2deg);
}

.sticky-note:nth-child(3n+2) {
  transform: rotate(1deg);
}

.sticky-note:nth-child(3n) {
  transform: rotate(-1deg);
}

.sticky-note:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.15),
    0 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

/* 网格纸容器 */
.grid-paper-container {
  background:
    repeating-linear-gradient(
      0deg,
      #f8f9fa 0px,
      #f8f9fa 1px,
      transparent 1px,
      transparent 20px
    ),
    repeating-linear-gradient(
      90deg,
      #f8f9fa 0px,
      #f8f9fa 1px,
      transparent 1px,
      transparent 20px
    ),
    #ffffff;
  padding: 48px;
  min-height: 100vh;
}
\`\`\`

**Tailwind CSS 配置**

如使用 Tailwind CSS，添加以下配置：

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        patrick: ['Patrick Hand', 'cursive'],
        reenie: ['Reenie Beanie', 'cursive'],
      },
      colors: {
        'sticky-yellow': {
          light: '#fff9c4',
          DEFAULT: '#fff59d',
          dark: '#fff176',
        },
        'sticky-pink': {
          light: '#fce4ec',
          DEFAULT: '#f8bbd0',
          dark: '#f48fb1',
        },
        'sticky-blue': {
          light: '#e1f5fe',
          DEFAULT: '#b3e5fc',
          dark: '#81d4fa',
        },
        'sticky-green': {
          light: '#e8f5e9',
          DEFAULT: '#c8e6c9',
          dark: '#a5d6a7',
        },
        'sketch-text': {
          primary: '#2c3e50',
          secondary: '#34495e',
          muted: '#7f8c8d',
        },
      },
      boxShadow: {
        'sketch': '4px 4px 0 rgba(0, 0, 0, 0.1)',
        'sketch-lg': '6px 6px 0 rgba(0, 0, 0, 0.15)',
        'sticky': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'sticky-hover': '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}
\`\`\`

Tailwind 类示例：
\`\`\`html
<div class="font-patrick text-sketch-text-primary bg-white border-2 border-sketch-text-primary rounded-lg p-6 shadow-sketch hover:shadow-sketch-lg transition-all duration-300">
  <!-- 手绘卡片内容 -->
</div>

<button class="font-caveat text-xl font-bold bg-sticky-yellow border-2 border-sketch-text-primary rounded-xl px-6 py-3 shadow-sketch hover:shadow-sketch-lg active:shadow-none transition-all">
  Get Started
</button>
\`\`\`

**重要提示**
- 手写字体适合标题和短文本，长文本可读性较差
- SVG 滤镜会影响性能，避免在大量元素上同时使用
- 粘贴便签效果适合卡片式布局，不适合密集信息展示
- 旋转角度建议 -3deg ~ 3deg 之间，避免过于夸张
- Grid 纸背景适合浅色内容，深色内容需调整网格颜色
- 手绘风格适合创意、友好、非正式的项目
- 配色以柔和的粉彩色为主，避免高饱和度色彩
- 使用弹性缓动函数增强手绘的俏皮感
- 边框粗细建议 2px-3px，避免过细或过粗
- 阴影使用硬边阴影（offset shadow）而非模糊阴影
`,
  'en-US': `Please create a Hand-Drawn Sketch style interface using TailwindCSS, creating a warm and approachable visual experience through handwritten fonts, SVG filters, and casual lines.

**Core Design Requirements**

1. **Handwritten Font System**
   - Title font: Caveat (supports weights 400-700)
     \`\`\`css
     @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

     .hand-title {
       font-family: 'Caveat', cursive;
       font-size: 48px;
       font-weight: 700;
       letter-spacing: 0.02em;
     }
     \`\`\`

   - Body font: Patrick Hand (more readable)
     \`\`\`css
     @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

     .hand-text {
       font-family: 'Patrick Hand', cursive;
       font-size: 16px;
       line-height: 1.6;
     }
     \`\`\`

   - Decorative font: Reenie Beanie (more casual)
     \`\`\`css
     @import url('https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap');

     .hand-casual {
       font-family: 'Reenie Beanie', cursive;
       font-size: 20px;
     }
     \`\`\`

2. **SVG Hand-Drawn Filter Effects**
   - Use feTurbulence + feDisplacementMap to create hand-drawn wobble effect
   - Filter strength: scale 1.0-2.0 (higher values = more pronounced)
   - Base frequency: baseFrequency 0.03-0.08
   - Example:
     \`\`\`html
     <svg style="position: absolute; width: 0; height: 0;">
       <defs>
         <filter id="sketch-roughen">
           <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
           <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
         </filter>
       </defs>
     </svg>

     <div style="filter: url(#sketch-roughen);">
       <!-- Content with hand-drawn filter applied -->
     </div>
     \`\`\`

   - Performance tip: Apply filters only to key elements, avoid global usage

3. **Sticky Note Design**
   - Classic sticky note colors:
     \`\`\`css
     .sticky-note-yellow {
       background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
     }

     .sticky-note-pink {
       background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
     }

     .sticky-note-blue {
       background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%);
     }

     .sticky-note-green {
       background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
     }
     \`\`\`

   - Sticky note 3D effect:
     \`\`\`css
     .sticky-note {
       box-shadow:
         0 4px 6px rgba(0, 0, 0, 0.1),
         0 1px 3px rgba(0, 0, 0, 0.08);
       transform: rotate(-2deg);  /* Random rotation -3deg ~ 3deg */
       transition: all 0.3s ease;
     }

     .sticky-note:hover {
       transform: rotate(0deg) scale(1.05);
       box-shadow:
         0 10px 20px rgba(0, 0, 0, 0.15),
         0 3px 6px rgba(0, 0, 0, 0.1);
       z-index: 10;
     }
     \`\`\`

4. **Grid Paper Background Effect**
   - Use repeating-linear-gradient to create grid paper
   - Grid spacing: 20px (recommended)
   - Example:
     \`\`\`css
     .grid-paper-bg {
       background:
         repeating-linear-gradient(
           0deg,
           #f8f9fa 0px,
           #f8f9fa 1px,
           transparent 1px,
           transparent 20px
         ),
         repeating-linear-gradient(
           90deg,
           #f8f9fa 0px,
           #f8f9fa 1px,
           transparent 1px,
           transparent 20px
         ),
         #ffffff;
     }
     \`\`\`

   - Dot grid background:
     \`\`\`css
     .dot-paper-bg {
       background-image: radial-gradient(circle, #d0d0d0 1px, transparent 1px);
       background-size: 20px 20px;
       background-color: #ffffff;
     }
     \`\`\`

5. **Hand-Drawn Borders and Lines**
   - Use border-image or SVG path to create irregular borders
   - Dashed hand-drawn effect:
     \`\`\`css
     .sketch-border {
       border: 2px dashed #2c3e50;
       border-radius: 4px;
       filter: url(#sketch-roughen);
     }
     \`\`\`

   - Wavy line divider:
     \`\`\`html
     <svg width="100%" height="20">
       <path d="M 0 10 Q 10 5, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
             stroke="#2c3e50" stroke-width="2" fill="none"
             filter="url(#sketch-roughen)"/>
     </svg>
     \`\`\`

6. **Hand-Drawn Icons and Arrows**
   - Use SVG path to draw irregular shapes
   - Example (hand-drawn checkbox):
     \`\`\`html
     <svg width="24" height="24" viewBox="0 0 24 24">
       <defs>
         <filter id="icon-sketch">
           <feTurbulence baseFrequency="0.08" numOctaves="1"/>
           <feDisplacementMap in="SourceGraphic" scale="1.2"/>
         </filter>
       </defs>
       <path d="M 4 12 L 9 17 L 20 6"
             stroke="#2c3e50" stroke-width="2.5"
             fill="none" stroke-linecap="round"
             filter="url(#icon-sketch)"/>
     </svg>
     \`\`\`

7. **Smooth Animation Effects**
   - Avoid rigid transitions, use elastic easing
   - Recommended easing: cubic-bezier(0.68, -0.55, 0.265, 1.55)
   - Example:
     \`\`\`css
     .sketch-animate {
       transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
     }

     .sketch-animate:hover {
       transform: scale(1.05) rotate(2deg);
     }
     \`\`\`

**Color Scheme (Warm and Friendly)**

Primary colors (sticky note colors):
- Yellow notes: #fff9c4, #fff59d, #fff176
- Pink notes: #fce4ec, #f8bbd0, #f48fb1
- Blue notes: #e1f5fe, #b3e5fc, #81d4fa
- Green notes: #e8f5e9, #c8e6c9, #a5d6a7

Text colors:
- Primary text: #2c3e50 (dark blue-gray)
- Secondary text: #34495e (medium blue-gray)
- Decorative text: #7f8c8d (light gray)

Hand-drawn lines:
- Black lines: #23303d
- Dark gray lines: #4a5568
- Decorative lines: #a0aec0

Background colors:
- Paper background: #ffffff, #fefefe, #fcfcfc
- Grid lines: #f8f9fa, #e9ecef

**Key CSS Class Examples**

\`\`\`css
/* Sketch Card */
.sketch-card {
  background: #ffffff;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  filter: url(#sketch-roughen);
  font-family: 'Patrick Hand', cursive;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.sketch-card:hover {
  transform: translateY(-4px) rotate(1deg);
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.15);
}

/* Sketch Button */
.sketch-button {
  background: #fff176;
  border: 2px solid #2c3e50;
  border-radius: 12px;
  padding: 12px 24px;
  font-family: 'Caveat', cursive;
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  cursor: pointer;
  filter: url(#sketch-roughen);
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
}

.sketch-button:hover {
  background: #fff59d;
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
}

.sketch-button:active {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
}

/* Sketch Input */
.sketch-input {
  background: #ffffff;
  border: 2px dashed #4a5568;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Patrick Hand', cursive;
  font-size: 16px;
  color: #2c3e50;
  filter: url(#sketch-roughen);
  transition: all 0.3s ease;
}

.sketch-input:focus {
  outline: none;
  border-color: #2c3e50;
  border-style: solid;
  box-shadow: 0 0 0 4px rgba(44, 62, 80, 0.1);
}

.sketch-input::placeholder {
  color: #7f8c8d;
  font-style: italic;
}

/* Sticky Notes Container */
.sticky-notes-container {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  perspective: 1000px;
}

.sticky-note {
  width: 200px;
  min-height: 200px;
  padding: 20px;
  border-radius: 2px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  font-family: 'Patrick Hand', cursive;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  cursor: pointer;
  position: relative;
}

/* Add random rotation */
.sticky-note:nth-child(3n+1) {
  transform: rotate(-2deg);
}

.sticky-note:nth-child(3n+2) {
  transform: rotate(1deg);
}

.sticky-note:nth-child(3n) {
  transform: rotate(-1deg);
}

.sticky-note:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.15),
    0 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

/* Grid Paper Container */
.grid-paper-container {
  background:
    repeating-linear-gradient(
      0deg,
      #f8f9fa 0px,
      #f8f9fa 1px,
      transparent 1px,
      transparent 20px
    ),
    repeating-linear-gradient(
      90deg,
      #f8f9fa 0px,
      #f8f9fa 1px,
      transparent 1px,
      transparent 20px
    ),
    #ffffff;
  padding: 48px;
  min-height: 100vh;
}
\`\`\`

**Tailwind CSS Configuration**

If using Tailwind CSS, add the following configuration:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        patrick: ['Patrick Hand', 'cursive'],
        reenie: ['Reenie Beanie', 'cursive'],
      },
      colors: {
        'sticky-yellow': {
          light: '#fff9c4',
          DEFAULT: '#fff59d',
          dark: '#fff176',
        },
        'sticky-pink': {
          light: '#fce4ec',
          DEFAULT: '#f8bbd0',
          dark: '#f48fb1',
        },
        'sticky-blue': {
          light: '#e1f5fe',
          DEFAULT: '#b3e5fc',
          dark: '#81d4fa',
        },
        'sticky-green': {
          light: '#e8f5e9',
          DEFAULT: '#c8e6c9',
          dark: '#a5d6a7',
        },
        'sketch-text': {
          primary: '#2c3e50',
          secondary: '#34495e',
          muted: '#7f8c8d',
        },
      },
      boxShadow: {
        'sketch': '4px 4px 0 rgba(0, 0, 0, 0.1)',
        'sketch-lg': '6px 6px 0 rgba(0, 0, 0, 0.15)',
        'sticky': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'sticky-hover': '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}
\`\`\`

Tailwind class example:
\`\`\`html
<div class="font-patrick text-sketch-text-primary bg-white border-2 border-sketch-text-primary rounded-lg p-6 shadow-sketch hover:shadow-sketch-lg transition-all duration-300">
  <!-- Sketch card content -->
</div>

<button class="font-caveat text-xl font-bold bg-sticky-yellow border-2 border-sketch-text-primary rounded-xl px-6 py-3 shadow-sketch hover:shadow-sketch-lg active:shadow-none transition-all">
  Get Started
</button>
\`\`\`

**Important Notes**
- Handwritten fonts are best for titles and short text, less readable for long content
- SVG filters impact performance, avoid using on many elements simultaneously
- Sticky note effects work best for card layouts, not suitable for dense information
- Rotation angles recommended between -3deg ~ 3deg, avoid exaggeration
- Grid paper backgrounds work best with light content, adjust grid color for dark content
- Hand-drawn style suits creative, friendly, informal projects
- Use soft pastel colors, avoid high saturation
- Use elastic easing functions to enhance playful feeling
-- Border thickness recommended 2px-3px, avoid too thin or thick
-- Use hard-edge shadows (offset shadows) rather than blurred shadows
`
};

// StylePrompt：描述手绘涂鸦风格理念与氛圍（說明書風格）
export const stylePrompt = {
  'zh-CN': `
角色设定：
你是一位擅长「手绘涂鸦 / Hand‑Drawn Sketch」视觉语言的 UI 设计师。你的工作不是把界面做得完美对齐、像工业面板一样冷静，而是要让每一个元素都带着一点「手感」：略微歪斜的边框、不完全规则的线条、看起来像真实笔记本上写下来的标题和注释。

场景定位：
这种手绘涂鸦风格适合用在创意类产品、教育工具、知识整理与头脑风暴界面，例如：灵感白板、课程大纲、会议记录板、个人知识库、轻量级任务看板等。典型用户是设计师、产品经理、教师、学生或内容创作者，他们习惯在纸上画箭头、画方框、贴便签，再把想法搬到数位界面中。你的目标是让这个界面看起来就像一张被认真整理过的手帐或课堂笔记。

视觉设计理念：
与严肃的企业界面不同，Hand‑Drawn Sketch 强调「不完美的秩序」。所有组件依然遵守清晰的布局网格和信息层级，但在视觉上刻意加入手绘感：标题用手写字体呈现，边框稍微不直、阴影有硬边、卡片有轻微旋转，像是贴在墙上的便签。你可以把这个风格理解为「把真实世界中的笔记本和白板搬进浏览器」，只是用 CSS 与 SVG 模拟纸张、墨水和铅笔线条。

材质与质感：
背景通常是网格纸、点阵纸或略有纹理的白纸色块：淡淡的灰线或圆点构成的规则图案，让画面有「纸张」的基础感。上层元素是各种便签卡片、手绘边框的内容区、粗线条连接的箭头与图标。便签采用柔和粉彩色系（淡黄、淡粉、浅蓝、浅绿），搭配类似手写笔迹的深蓝灰文本颜色。阴影多为偏硬的投影而非模糊光晕，看起来像纸张在桌面上投下的形状，而不是浮在空中的玻璃卡片。

线条与图形：
手绘风格的灵魂在于线条。直线可以稍微抖动，不必完全笔直；矩形可以有轻微不规则的边角；箭头可以像记事本上随手画出的那样，带一点趣味。你可以用 SVG path 和轻量滤镜模拟这种「人手画的」效果，但要保持克制：抖动强度太高会显得杂乱，适度的随机性才会让界面看起来轻松而又可用。图标同样如此：勾选框、星号、对话气泡都可以是手绘轮廓，而不是完美几何图形。

排版与信息层级：
虽然视觉风格是「随性」，信息结构必须仍然严谨。标题和关键动作按钮可以用更大的手写字体，制造视觉焦点；说明文字和长段落则使用较为平衡、易读的手写体或友好的无衬线字体。通过字号、字重和间距来区分主标题、副标题、正文与注释，让用户即使在充满 doodle 的界面中也能快速锁定重点。适度留白非常重要：在卡片之间、段落之间留出空间，好让纸张、网格背景和小插画共同呼吸。

交互体验：
交互反馈应当像翻动纸张或移动便签那样「轻盈」。当鼠标悬停在按钮或便签卡片上时，可以让元素稍微放大、旋转一点点或抬起 2–4 像素，阴影随之加重，仿佛用手指轻轻撩起纸片。按下时则反向收回，模拟按压的感觉。动画节奏可以略带弹性缓动，强化「手绘涂鸦」的俏皮感，但时长不宜过长，以 300–500 毫秒区间为宜。表单控件（输入框、复选框、单选框）在 focus 时的状态也尽量用线条变化、边框粗细变化来表达，而不是依赖强烈颜色。

整体氛围：
Hand‑Drawn Sketch 的整体氛围应该是友好、开放和鼓励试错的。用户进入这种风格的界面时，不会觉得自己正在填写严肃的企业报表，而更像在个人笔记本或工作坊白板上组织想法。这种氛围特别有助于早期探索阶段：想法还不成熟、信息在变化、用户需要快速画图、写字、删除再重画。界面如果显得过于正式反而会阻碍这种流动感；手绘涂鸦风格则鼓励「先写下来再说」。

适用与边界：
手绘涂鸦非常适合用作：头脑风暴板、课程讲义、轻量看板、个人目标规划、儿童与教育产品的仪表盘。但对于需要高度可信度与权威感的场景（例如金融交易后台、医疗记录系统），则应谨慎使用或仅在次要区域引入少量 doodle 元素。设计时可以思考：如果把这个界面印在 A4 纸上放进笔记本里，它会看起来像一页被认真记录的草稿吗？如果答案是肯定的，就说明你的 Hand‑Drawn Sketch 风格抓住了重点。
`,
  'en-US': `
Role:
You are a UI designer who specializes in the Hand-Drawn Sketch aesthetic. Your job is not to make the interface perfectly aligned and machine-precise, but to inject just enough irregularity and personality so that every element feels like it was drawn by hand on paper.

Context:
This style is ideal for creative tools, learning environments, note-taking apps, brainstorm boards, and lightweight planning dashboards. Typical users are designers, product managers, teachers, students, and creators who think with pens and sticky notes. The interface should feel like an organized spread in a notebook or a whiteboard from a workshop, translated into a digital environment without losing its warmth.

Visual Philosophy:
Hand-Drawn Sketch embraces “imperfect order”. Layouts still follow a clear grid and information hierarchy, but lines are a little wobbly, cards tilt slightly, and labels look handwritten. Instead of polished chrome and glass, you use paper, tape, doodles, and marker strokes as your visual vocabulary. It should be obvious that a human hand is implied in the design, even though everything is rendered by the browser.

Material & Texture:
Backgrounds often resemble grid paper, dot paper, or subtle notebook pages: light gray lines or dots over a soft white background. On top of this, sticky note cards in pastel yellows, pinks, blues, and greens provide structure for content. Shadows are offset and relatively hard-edged, like pieces of paper casting shadows on a desk, rather than blurred glow effects. Borders and dividers tend to be dashed, double-drawn, or slightly irregular to mimic pen strokes.

Linework & Icons:
Lines are intentionally imperfect. Straight lines can bend a little; rectangles may have corners that do not form exact right angles; arrows can look like quick sketches from a meeting. SVG paths and light filters help approximate this wobbly quality, but should be used with restraint so the interface does not become visually noisy. Icons—checkmarks, stars, speech bubbles, file symbols—are drawn as outlines that feel hand-made rather than geometric system icons.

Typography & Hierarchy:
Even with playful visuals, information must remain easy to scan. Headings can use expressive handwritten fonts to capture attention, while longer paragraphs should use more balanced, readable handwritten faces or friendly sans-serif fonts. Size, weight, and spacing separate titles, subtitles, body copy, and annotations. Generous spacing between cards and paragraphs prevents the doodles from overwhelming the content. The result should feel like a carefully organized page of notes, not a random collage.

Interaction:
Interaction should feel light and tactile, as though cards and notes could be picked up and moved. Hovering over a card or button might gently scale it up and rotate it by a degree or two, with the shadow becoming stronger. Pressing a button can make it sink slightly and reduce its shadow, like pressing on a real piece of cardstock. Elastic easing curves are welcome here—they reinforce the sketchy, playful energy—as long as transitions remain quick and do not slow the user down.

Atmosphere:
Overall, the Hand-Drawn Sketch style should feel friendly, informal, and slightly whimsical. It lowers the perceived stakes: users feel safe to jot down rough ideas, rearrange them, and discard what does not work. This makes it particularly powerful for early-stage exploration and educational contexts, where curiosity and experimentation are more important than polished final output. When done well, the interface looks like a living notebook that invites participation rather than a rigid system that demands correctness.

Fit & Boundaries:
This style shines when the product wants to encourage brainstorming, learning, collaboration, or personal planning. It is less appropriate for domains that demand strict seriousness and trust signals, such as financial trading terminals or clinical medical records. As you design new screens in this style, ask yourself: if this layout were printed and pasted into a physical sketchbook, would it feel at home there? If yes, your Hand-Drawn Sketch implementation is likely on the right track.
`,
};

// 导出模板数组
export const handDrawnSketchTemplates = [
  {
    id: 'visual-handDrawnSketch',
    title: 'styles.visual.handDrawnSketch.title',
    description: 'styles.visual.handDrawnSketch.description',
    demoHTML: demoHTML,
    customStyles: customStyles,
    tags: ['handwritten', 'playful', 'creative', 'friendly', 'organic', 'informal'],
    layoutMode: 'fullPage',
    previews: [
      {
        id: 'landing-page',
        name: 'styles.visual.handDrawnSketch.previews.landingPage',
        type: 'full',
        previewId: 'hand-drawn-landing',
        description: 'styles.visual.handDrawnSketch.previews.landingPageDesc',
        features: [
          'Handwritten fonts (Caveat, Patrick Hand)',
          'SVG hand-drawn filters (feTurbulence)',
          'Sticky note cards (yellow, pink, blue, green)',
          'Grid paper background effect',
          'Hand-drawn borders and icons',
          'Playful rotation animations',
          'Elastic easing transitions',
          'Whimsical flow chart cards'
        ],
        html: handDrawnSketchFullPageHTML,
        styles: handDrawnSketchFullPageStyles
      },
      {
        id: 'components',
        name: 'styles.visual.handDrawnSketch.previews.components',
        type: 'full',
        previewId: 'hand-drawn-components',
        description: 'styles.visual.handDrawnSketch.previews.componentsDesc',
        features: [
          '18+ hand-drawn UI components',
          'Buttons (primary, secondary, outline, ghost)',
          'Cards (sticky notes, notebook, whiteboard, doodle)',
          'Form elements (input, checkbox, radio, slider)',
          'Timeline with handwritten entries',
          'Drag-and-drop todo list',
          'Loading animations (spinner, dots, progress)',
          'Badges, alerts, tooltips, accordion, table'
        ],
        html: handDrawnSketchComponentsFullPageHTML,
        styles: handDrawnSketchComponentsFullPageStyles
      }
    ]
  }
];
