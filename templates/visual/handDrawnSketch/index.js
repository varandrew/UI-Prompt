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
    // 家族级 customPrompt 和 stylePrompt（从上面导出的）
    customPrompt: customPrompt,
    stylePrompt: stylePrompt,
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
        styles: handDrawnSketchFullPageStyles,
        // Landing Page 专属 customPrompt
        customPrompt: {
      'zh-CN': `你现在是一名非常熟悉「手绘涂鸦 / Hand-Drawn Sketch」风格的资深 UI 设计师兼前端工程师，需要为一个全新页面生成一套与当前样式 /styles/preview/visual-handDrawnSketch 高度一致的界面。

你的目标：在不复制现有页面内容的前提下，生成一个「一眼能看出是同一系列」的全新完整 HTML 页面。你需要严格延续当前 Hand-Drawn Sketch 风格的布局逻辑、字体系统、便签卡片质感和手绘滤镜效果，只替换场景、文案和信息内容。

【使用场景（新的设定）】
- 这是一个「创意团队协作白板工具」的落地页，面向设计师、产品经理、创意总监和初创团队。
- 用户会在这里了解产品功能、查看使用案例、浏览定价方案并注册试用。
- 整体氛围像是一张被精心整理的白板或笔记本页面，有便签、流程图、手绘箭头和注释，温暖而富有创意感。

【整体布局结构要求】

1. 顶部导航区域（Header）
   - 采用左右布局：左侧是手绘风格的品牌 Logo（可用 SVG 手绘圆圈 + 勾选标记），右侧是导航链接和主要 CTA 按钮。
   - Logo 文字使用 Caveat 字体，导航链接使用 Patrick Hand 字体。
   - 导航栏背景为白色，底部有 2px 的深蓝灰边框线，带轻微阴影。
   - 链接悬停时显示手绘下划线动画效果。

2. 主视觉区域（Hero Section）
   - 背景使用网格纸效果（20px 间距的浅灰线条）。
   - 主标题使用 Caveat 字体 (4.5rem)，带有手绘高亮效果（通过伪元素添加浅蓝色背景条）。
   - 副标题放在黄色便签卡片中，便签带有轻微旋转角度 (-1deg) 和软阴影。
   - 两个 CTA 按钮：主按钮（深色背景 + 白色文字）和次要按钮（透明背景 + 边框）。
   - 底部包含一个 SVG 手绘插图区域，展示灯泡想法 → 执行勾选的流程图，使用 SVG 滤镜创造手绘抖动效果。

3. 功能流程区域（Features Section）
   - 使用「流程图卡片」布局：3 个主要步骤卡片，用手绘虚线箭头连接。
   - 每个步骤卡片包含：数字标签（圆形 + Caveat 字体）、手绘图标（SVG）、标题（Caveat 字体）、描述文字（Patrick Hand 字体）。
   - 卡片背景为白色，有 2.5px 深蓝灰边框，带 4px 偏移硬阴影。
   - 下方添加 4 个功能亮点小卡片（emoji 图标 + 标题 + 简短描述），使用网格布局。

4. 数据统计区域（Stats Section）
   - 背景使用浅蓝色（#E8F4F8），顶部和底部有 3px 深色边框。
   - 使用手绘柱状图展示数据（4 个统计项），每个柱子有 data-value 属性显示数值。
   - 下方添加 3 张客户评价便签卡片（黄色、粉色、蓝色），带不同旋转角度，显示用户反馈。

5. 行动号召区域（CTA Section）
   - 中心放置一个大型 CTA 卡片，背景使用渐变（浅蓝到浅黄），有粗边框和大偏移阴影。
   - 卡片本身带轻微旋转 (-0.5deg)，标题使用 Caveat 字体 (3rem)。
   - 包含主要 CTA 按钮和无需信用卡的提示文字。

6. 页脚区域（Footer）
   - 深蓝灰背景 (#2C3E50)，白色文字。
   - 左右布局：版权信息和隐私/条款/联系链接。

【字体系统】

1. 主标题字体
   - 字体族：Caveat, cursive
   - 字重：700
   - 字号：标题 3.5-4.5rem，副标题 1.8-2.5rem
   - 颜色：#2C3E50

2. 正文字体
   - 字体族：Patrick Hand, cursive
   - 字重：400
   - 字号：1rem-1.3rem
   - 行高：1.6-1.8
   - 颜色：#2C3E50（主要）、#555555（次要）

3. Google Fonts 导入
   \`\`\`html
   <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Patrick+Hand&display=swap" rel="stylesheet">
   \`\`\`

【色彩与材质】

1. 背景用色
   - 主背景：#FFF8DC（浅奶油色纸张）
   - 导航背景：#FFFFFF
   - 统计区背景：#E8F4F8（浅蓝色）
   - 页脚背景：#2C3E50（深蓝灰）

2. 便签卡片颜色
   - 黄色便签：linear-gradient(135deg, #FFFACD 0%, #FFF8DC 100%)
   - 粉色便签：linear-gradient(135deg, #FFE4E1 0%, #FFD6D6 100%)
   - 蓝色便签：linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)
   - 绿色便签：linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)

3. 文字与线条
   - 主要文字：#2C3E50
   - 次要文字：#555555
   - 边框线条：#2C3E50
   - 装饰文字：#666666

4. 网格纸背景
   \`\`\`css
   background-image:
     linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
     linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
   background-size: 20px 20px;
   \`\`\`

【阴影与手绘效果】

1. SVG 手绘滤镜
   \`\`\`html
   <filter id="sketch-roughen">
     <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
   </filter>
   \`\`\`

2. 卡片阴影
   - 默认状态：box-shadow: 4px 4px 0 #2C3E50;
   - 悬停状态：box-shadow: 6px 6px 0 #2C3E50;
   - 便签阴影：box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1);

3. 按钮阴影
   - 默认：box-shadow: 3px 3px 0 #2C3E50;
   - 悬停：box-shadow: 1px 1px 0 #2C3E50; transform: translate(2px, 2px);

【交互状态与动效】

1. 悬停（hover）状态
   - 便签卡片：transform: rotate(0deg) scale(1.05); 阴影加深
   - 流程卡片：transform: translate(-2px, -2px); 阴影增大
   - 按钮：transform: translate(2px, 2px); 阴影减小
   - 导航链接：显示手绘下划线（width 从 0 到 100%）

2. 点击（active）状态
   - 按钮下沉效果，阴影进一步减小

3. 动画
   - SVG 路径绘制动画（stroke-dasharray + stroke-dashoffset）
   - 渐入动画：opacity 0→1, translateY 20px→0
   - 过渡时长：0.3s ease 或 0.5s ease-out
   - 弹性缓动（可选）：cubic-bezier(0.68, -0.55, 0.265, 1.55)

【输出技术要求】

- 使用语义化 HTML5 结构：<nav>、<header>、<main>、<section>、<footer>。
- 使用 CSS 类名（sketch-* 前缀）描述所有样式，避免内联样式。
- 包含 Google Fonts 导入链接。
- 包含 SVG 滤镜定义（放在 <defs> 中）。
- 所有 SVG 图标和插图应用 filter="url(#sketch-roughen)" 获得手绘效果。
- 响应式设计：在平板和移动端调整网格布局和字号。
- 输出完整页面的 HTML 结构 + CSS 样式，可直接在浏览器中渲染。
- 保持与现有 Hand-Drawn Sketch 示例在布局密度、字体选择、便签卡片、阴影风格上的整体一致性。

【关键 CSS 类参考】

\`\`\`css
/* 容器 */
.sketch-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 按钮 */
.sketch-btn {
  font-family: 'Patrick Hand', sans-serif;
  padding: 0.75rem 1.5rem;
  border: 2px solid #2C3E50;
  box-shadow: 3px 3px 0 #2C3E50;
  transition: all 0.3s ease;
}

.sketch-btn-primary {
  background-color: #2C3E50;
  color: #FFF;
}

/* 便签 */
.sketch-sticky-note {
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.sketch-sticky-yellow {
  background: linear-gradient(135deg, #FFFACD 0%, #FFF8DC 100%);
  transform: rotate(-1deg);
}

/* 流程卡片 */
.sketch-flowchart-card {
  background: #FFF;
  padding: 2rem 1.5rem;
  border: 2.5px solid #2C3E50;
  box-shadow: 4px 4px 0 #2C3E50;
}
\`\`\`
`,
      'en-US': `You are a senior UI designer and front-end engineer deeply familiar with the "Hand-Drawn Sketch" style. Your task is to generate a brand new HTML page that looks like a sibling of the existing /styles/preview/visual-handDrawnSketch layout, without copying its content verbatim.

Your goal: create a new full-page interface that clearly belongs to the same design family as the current Hand-Drawn Sketch demo. You must strictly follow the same layout logic, font system, sticky note card textures, and hand-drawn filter effects, while changing the scenario, copy, and information blocks.

[Scenario]
- The page is a landing page for a "Creative Team Collaboration Whiteboard Tool", targeting designers, product managers, creative directors, and startup teams.
- Users will learn about product features, view use cases, browse pricing plans, and sign up for trials here.
- The overall atmosphere should feel like a carefully organized whiteboard or notebook page, with sticky notes, flowcharts, hand-drawn arrows, and annotations—warm and creative.

[Overall Layout Structure]

1. Header (Navigation)
   - Use a left-right layout: hand-drawn style brand logo on the left (SVG hand-drawn circle + checkmark), navigation links and primary CTA button on the right.
   - Logo text uses Caveat font, navigation links use Patrick Hand font.
   - White background with 2px dark blue-gray bottom border and subtle shadow.
   - Links show hand-drawn underline animation on hover.

2. Hero Section
   - Background uses grid paper effect (20px spacing light gray lines).
   - Main title uses Caveat font (4.5rem), with hand-drawn highlight effect (light blue background bar via pseudo-element).
   - Subtitle placed in a yellow sticky note card with slight rotation (-1deg) and soft shadow.
   - Two CTA buttons: primary (dark background + white text) and secondary (transparent background + border).
   - Bottom includes an SVG hand-drawn illustration area showing lightbulb idea → execution checkmark flowchart, using SVG filters for hand-drawn wobble effect.

3. Features Section (Flowchart)
   - Use "flowchart card" layout: 3 main step cards connected by hand-drawn dashed arrows.
   - Each step card contains: number label (circle + Caveat font), hand-drawn icon (SVG), title (Caveat font), description (Patrick Hand font).
   - Card background is white with 2.5px dark blue-gray border and 4px offset hard shadow.
   - Below add 4 feature highlight mini-cards (emoji icon + title + short description) in grid layout.

4. Stats Section
   - Background uses light blue (#E8F4F8), with 3px dark borders on top and bottom.
   - Use hand-drawn bar charts to display data (4 stat items), each bar has data-value attribute showing the value.
   - Below add 3 customer testimonial sticky note cards (yellow, pink, blue) with different rotation angles, showing user feedback.

5. CTA Section
   - Center a large CTA card, background uses gradient (light blue to light yellow), with thick border and large offset shadow.
   - Card itself has slight rotation (-0.5deg), title uses Caveat font (3rem).
   - Includes primary CTA button and "no credit card required" hint text.

6. Footer
   - Dark blue-gray background (#2C3E50), white text.
   - Left-right layout: copyright info and privacy/terms/contact links.

[Font System]

1. Heading Font
   - Font family: Caveat, cursive
   - Weight: 700
   - Size: titles 3.5-4.5rem, subtitles 1.8-2.5rem
   - Color: #2C3E50

2. Body Font
   - Font family: Patrick Hand, cursive
   - Weight: 400
   - Size: 1rem-1.3rem
   - Line height: 1.6-1.8
   - Color: #2C3E50 (primary), #555555 (secondary)

3. Google Fonts Import
   \`\`\`html
   <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Patrick+Hand&display=swap" rel="stylesheet">
   \`\`\`

[Colors & Materials]

1. Background Colors
   - Main background: #FFF8DC (light cream paper)
   - Navigation background: #FFFFFF
   - Stats section background: #E8F4F8 (light blue)
   - Footer background: #2C3E50 (dark blue-gray)

2. Sticky Note Colors
   - Yellow note: linear-gradient(135deg, #FFFACD 0%, #FFF8DC 100%)
   - Pink note: linear-gradient(135deg, #FFE4E1 0%, #FFD6D6 100%)
   - Blue note: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)
   - Green note: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)

3. Text & Lines
   - Primary text: #2C3E50
   - Secondary text: #555555
   - Border lines: #2C3E50
   - Decorative text: #666666

4. Grid Paper Background
   \`\`\`css
   background-image:
     linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
     linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
   background-size: 20px 20px;
   \`\`\`

[Shadows & Hand-Drawn Effects]

1. SVG Hand-Drawn Filter
   \`\`\`html
   <filter id="sketch-roughen">
     <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
   </filter>
   \`\`\`

2. Card Shadows
   - Default: box-shadow: 4px 4px 0 #2C3E50;
   - Hover: box-shadow: 6px 6px 0 #2C3E50;
   - Sticky note: box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1);

3. Button Shadows
   - Default: box-shadow: 3px 3px 0 #2C3E50;
   - Hover: box-shadow: 1px 1px 0 #2C3E50; transform: translate(2px, 2px);

[Interaction & Animation]

1. Hover States
   - Sticky note cards: transform: rotate(0deg) scale(1.05); shadow deepens
   - Flowchart cards: transform: translate(-2px, -2px); shadow increases
   - Buttons: transform: translate(2px, 2px); shadow decreases
   - Navigation links: show hand-drawn underline (width from 0 to 100%)

2. Active States
   - Button sinks down, shadow further decreases

3. Animations
   - SVG path drawing animation (stroke-dasharray + stroke-dashoffset)
   - Fade-in animation: opacity 0→1, translateY 20px→0
   - Transition duration: 0.3s ease or 0.5s ease-out
   - Elastic easing (optional): cubic-bezier(0.68, -0.55, 0.265, 1.55)

[Output Requirements]

- Use semantic HTML5 structure: <nav>, <header>, <main>, <section>, <footer>.
- Use CSS class names (sketch-* prefix) for all styles, avoid inline styles.
- Include Google Fonts import link.
- Include SVG filter definitions (in <defs>).
- All SVG icons and illustrations should use filter="url(#sketch-roughen)" for hand-drawn effect.
- Responsive design: adjust grid layouts and font sizes for tablet and mobile.
- Output complete page HTML structure + CSS styles, directly renderable in browser.
- Maintain overall consistency with the existing Hand-Drawn Sketch demo in layout density, font choices, sticky note cards, and shadow style.

[Key CSS Classes Reference]

\`\`\`css
/* Container */
.sketch-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Buttons */
.sketch-btn {
  font-family: 'Patrick Hand', sans-serif;
  padding: 0.75rem 1.5rem;
  border: 2px solid #2C3E50;
  box-shadow: 3px 3px 0 #2C3E50;
  transition: all 0.3s ease;
}

.sketch-btn-primary {
  background-color: #2C3E50;
  color: #FFF;
}

/* Sticky Notes */
.sketch-sticky-note {
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.sketch-sticky-yellow {
  background: linear-gradient(135deg, #FFFACD 0%, #FFF8DC 100%);
  transform: rotate(-1deg);
}

/* Flowchart Cards */
.sketch-flowchart-card {
  background: #FFF;
  padding: 2rem 1.5rem;
  border: 2.5px solid #2C3E50;
  box-shadow: 4px 4px 0 #2C3E50;
}
\`\`\`
`
        },
        // Landing Page 专属 stylePrompt
        stylePrompt: {
          'zh-CN': `角色設定：
你是一位專精「手繪涂鴉 / Hand-Drawn Sketch」風格的 UI 設計師，正在設計創意工具產品的落地頁。

場景定位：
這是面向創意團隊的協作白板工具落地頁。目標用戶是設計師、產品經理、創意總監。他們習慣用便簽整理想法、用箭頭連接流程。

視覺理念：
「不完美的秩序」——元素遵循清晰網格，但視覺上有手繪感：標題用手寫字體，邊框不直，阴影硬邊，卡片輕微旋轉。

材質質感：
- 背景：網格紙（#FFF8DC），浅灰線條
- 便簽：粉彩色（黃粉藍綠），輕微旋轉，軟陰影
- 流程卡片：白色，深藍灰邊框，硬邊偏移陰影
- SVG 圖標：應用手繪濾鏡

交互體驗：
便簽在 hover 時抬起放大，流程卡片左上移動，按鈕點擊下沉。動畫快速彈性，強化俏皮感。

氛圍：
友好、開放、鼓勵創意，降低「必須完美」的心理壓力，鼓勵用戶「先試試看」。

目標：
讓訪客 5 秒內理解「這是幫我整理創意想法的工具，看起來有趣，我想試試」。`,
          'en-US': `Role:
You're a Hand-Drawn Sketch UI designer for creative tool landing pages.

Context:
Landing page for collaborative whiteboard tool. Users are designers, PMs, creative directors who use sticky notes and arrows.

Philosophy:
"Imperfect order" — clear grid but hand-drawn feel: handwritten fonts, uneven borders, hard shadows, slight card rotation.

Materials:
- Background: Grid paper (#FFF8DC), light gray lines
- Sticky notes: Pastels (yellow pink blue green), rotated, soft shadows
- Flow cards: White, dark blue-gray border, hard offset shadow
- SVG icons: Hand-drawn filter

Interaction:
Sticky notes lift on hover, flow cards shift up-left, buttons sink on click. Quick elastic animations reinforce playfulness.

Atmosphere:
Friendly, open, creativity-encouraging, reduces "must be perfect" pressure, encourages "just try it".

Goal:
Visitors understand in 5 seconds: "This helps organize creative ideas, looks fun, I want to try it".`
        }
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
        styles: handDrawnSketchComponentsFullPageStyles,
        // Components Showcase 专属 customPrompt
        customPrompt: {
          'zh-CN': `你现在是一名专精「手绘涂鸦 / Hand-Drawn Sketch」UI 组件库的资深设计师和开发者，需要创建一个与当前 /styles/preview/visual-handDrawnSketch (components) 风格高度一致的全新组件展示页面。

你的目标：生成一个完整的组件库展示页面，包含 15-20 个手绘风格的 UI 组件，每个组件都应用手绘字体、SVG 滤镜和便签卡片质感，展示不同的交互状态和使用场景。

【使用场景】
- 这是一个「手绘风格 UI 组件库」的完整展示页面，面向前端开发者、UI 设计师和产品团队。
- 页面需要系统性地展示所有可用组件的样式、状态和用法示例。
- 整体氛围应该像一本手绘组件手册或设计系统文档，充满创意但保持专业可用性。

【页面结构要求】

1. 顶部导航栏（Header）
   - Logo：手绘 SVG 图标 + "Sketch UI" 文字（Caveat 字体）
   - 导航链接：Components、Guidelines、Docs（Patrick Hand 字体）
   - 搜索框：手绘边框的 input（placeholder: "Search components..."）
   - 背景白色，底部 2px 深色边框

2. Hero 区域
   - 主标题："UI Components Showcase"（Caveat 字体，4rem）
   - 副标题："Hand-drawn interface kit with 18 components"（Patrick Hand，1.3rem）
   - 两个 CTA 按钮："Browse Library" 和 "Back to Top"
   - 装饰性手绘星号 ★ 在标题旁边

3. 组件网格区域（主要内容）
   每个组件卡片包含：
   - 卡片标题（Caveat 字体，2rem）
   - 组件展示区域（白色或淡色背景）
   - 组件变体展示
   - 可选的使用提示文字

   **必须包含的组件类别**：

   a) Buttons 按钮组（6-8 个变体）
      - Primary（主要按钮，深色背景）
      - Secondary（次要按钮，浅色背景）
      - Outline（轮廓按钮，透明背景 + 边框）
      - Ghost（幽灵按钮，无边框）
      - Doodle（涂鸦按钮，手绘装饰边框）
      - Danger（危险按钮，红色系）
      样式：2px 边框，硬边阴影（3px 3px 0），Patrick Hand 字体

   b) Cards 卡片组（4 种类型）
      - Post-it Note（便签卡片）：黄色渐变，轻微旋转 (-2deg)
      - Notebook（笔记本卡片）：带横线和打孔效果
      - Whiteboard（白板卡片）：网格背景或纯白
      - Doodle（涂鸦卡片）：随性的手绘边框

   c) Form Elements 表单元素（5-6 种）
      - Input（输入框）：虚线边框，手绘 focus 效果
      - Textarea（文本域）：多行输入，边框抖动效果
      - Checkbox（复选框）：手绘勾选标记
      - Radio（单选框）：手绘圆点标记
      - Slider（滑块）：手绘轨道和拖动手柄
      - Select（可选）：下拉菜单，手绘箭头

   d) Timeline 时间线（4 步流程）
      - 垂直或水平布局
      - 手绘圆点连接器
      - 每步包含标题和描述
      - 手绘箭头装饰

   e) List View 列表视图（可拖拽）
      - 4-5 个列表项
      - 每项带 checkbox
      - 拖拽提示："Drag items to reorder"
      - 便签纸质感背景

   f) Loading Animations 加载动画（3 种）
      - Pencil Draw（铅笔绘制动画）
      - Note Flip（便签翻转动画）
      - Scribble（涂鸦波动动画）

   g) 其他组件（至少选 8 种）
      - Badges（徽章）：圆角矩形，手绘边框
      - Alerts（警告框）：info, success, warning, error 四种状态
      - Tooltips（提示框）：悬停显示，手绘箭头指向
      - Progress Bars（进度条）：手绘填充效果
      - Accordion（手风琴）：可展开折叠卡片
      - Table（表格）：手绘表格线，奇偶行不同背景
      - Avatars（头像）：圆形或方形，手绘边框
      - Icons（图标集）：常用 SVG 图标应用手绘滤镜
      - Dividers（分隔线）：波浪线或虚线
      - Dropdowns（下拉菜单）：手绘边框菜单
      - Pagination（分页器）：手绘页码按钮
      - Tabs（标签页）：手绘标签切换

【字体系统】

1. 标题字体
   - Caveat, cursive（字重 700）
   - 卡片标题：2rem-2.5rem
   - 页面主标题：4rem

2. 正文字体
   - Patrick Hand, cursive（字重 400）
   - 组件标签：0.9rem-1rem
   - 描述文字：1rem-1.1rem
   - 行高：1.6

3. 装饰字体（可选）
   - Reenie Beanie, cursive
   - 用于特殊注释或标记

4. Google Fonts 导入
   \`\`\`html
   <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Patrick+Hand&family=Reenie+Beanie&display=swap" rel="stylesheet">
   \`\`\`

【色彩系统】

1. 背景色
   - 主背景：#FFF8DC（浅奶油色）
   - 卡片背景：#FFFFFF
   - Header 背景：#FFFFFF

2. 便签色系（用于卡片和装饰）
   - 黄色：#FFFACD, #FFF8DC
   - 粉色：#FFE4E1, #FFD6D6
   - 蓝色：#E3F2FD, #BBDEFB
   - 绿色：#E8F5E9, #C8E6C9

3. 文字与边框
   - 主要文字：#23303d（深蓝黑）
   - 次要文字：#4a5568（中灰）
   - 边框线条：#23303d
   - 装饰文字：#7f8c8d

4. 状态颜色
   - Success: #4CAF50（绿色）
   - Warning: #FF9800（橙色）
   - Error: #F44336（红色）
   - Info: #2196F3（蓝色）

【SVG 手绘滤镜配置】

\`\`\`html
<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="sketchc-rough">
      <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
      <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1.6" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
</svg>
\`\`\`

应用到：
- 所有 SVG 图标和插图
- 部分卡片边框（可选）
- 装饰性元素

【阴影系统】

1. 卡片阴影
   \`\`\`css
   box-shadow: 4px 4px 0 rgba(35, 48, 61, 0.15);
   \`\`\`

2. 按钮阴影
   \`\`\`css
   /* 默认 */
   box-shadow: 3px 3px 0 #23303d;

   /* 悬停 */
   box-shadow: 1px 1px 0 #23303d;
   transform: translate(2px, 2px);
   \`\`\`

3. 便签阴影
   \`\`\`css
   box-shadow:
     0 4px 6px rgba(0, 0, 0, 0.1),
     0 1px 3px rgba(0, 0, 0, 0.08);
   \`\`\`

【交互状态】

1. 按钮
   - hover: 下移 2px，阴影减小
   - active: 进一步下移，阴影最小

2. 卡片
   - hover: 轻微上移 2px，阴影增大

3. 表单元素
   - focus: 边框从虚线变实线，添加 4px 浅色外围阴影
   - disabled: 降低 opacity 到 0.5

4. 拖拽列表
   - dragging: 旋转 3deg，阴影增大，cursor: grabbing

【响应式设计】

\`\`\`css
/* 桌面端（默认）：3 列网格 */
.sketchc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* 平板端：2 列网格 */
@media (max-width: 1024px) {
  .sketchc-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端：1 列网格 */
@media (max-width: 768px) {
  .sketchc-grid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

【关键 CSS 类示例】

\`\`\`css
/* 组件卡片 */
.sketchc-card {
  background: #fff;
  border: 2px solid #23303d;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 4px 4px 0 rgba(35, 48, 61, 0.15);
  transition: all 0.3s ease;
}

.sketchc-card:hover {
  transform: translateY(-2px);
  box-shadow: 6px 6px 0 rgba(35, 48, 61, 0.2);
}

/* 按钮基础类 */
.sketchc-btn {
  font-family: 'Patrick Hand', cursive;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #23303d;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 3px 3px 0 #23303d;
}

.sketchc-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 #23303d;
}

/* 便签卡片 */
.sketchc-postit {
  background: linear-gradient(135deg, #FFFACD 0%, #FFF8DC 100%);
  padding: 1.5rem;
  border-radius: 2px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.sketchc-postit:hover {
  transform: rotate(0deg) scale(1.05);
  z-index: 10;
}

/* 输入框 */
.sketchc-input {
  font-family: 'Patrick Hand', cursive;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 2px dashed #4a5568;
  border-radius: 6px;
  background: #fff;
  transition: all 0.3s ease;
}

.sketchc-input:focus {
  outline: none;
  border-style: solid;
  border-color: #23303d;
  box-shadow: 0 0 0 4px rgba(35, 48, 61, 0.1);
}
\`\`\`

【动画效果】

1. SVG 路径绘制动画
   \`\`\`css
   @keyframes draw-path {
     from {
       stroke-dasharray: 1000;
       stroke-dashoffset: 1000;
     }
     to {
       stroke-dashoffset: 0;
     }
   }
   \`\`\`

2. 便签出现动画
   \`\`\`css
   @keyframes note-appear {
     from {
       opacity: 0;
       transform: rotate(-5deg) scale(0.8);
     }
     to {
       opacity: 1;
       transform: rotate(-2deg) scale(1);
     }
   }
   \`\`\`

3. 铅笔绘制动画（Loading）
   \`\`\`css
   @keyframes pencil-draw {
     0%, 100% { transform: translateX(0); }
     50% { transform: translateX(100px); }
   }
   \`\`\`

【输出要求】

- 使用语义化 HTML5 结构（header, main, article, section）
- 所有组件使用 CSS 类名（sketchc-* 前缀）
- 包含完整的 Google Fonts 导入链接
- 包含 SVG 滤镜定义（在 <defs> 中）
- 所有组件都应该是功能性可交互的（按钮可点击，输入框可输入，复选框可勾选）
- 响应式布局，适配桌面、平板、移动端
- 输出完整页面 HTML + CSS，可直接在浏览器中运行
- 保持与现有组件展示页面的风格一致性

【特别注意】
- 组件库展示页面需要更系统化和专业化，但仍然保持手绘的温暖感
- 每个组件应该展示多种状态（default, hover, active, disabled, focus）
- 使用网格布局让组件展示整齐有序
- 添加简短的使用提示或代码片段（可选）
- 确保所有交互都有视觉反馈
- 颜色对比度要足够，确保可访问性
`,
          'en-US': `You are a senior designer and developer specializing in "Hand-Drawn Sketch" UI component libraries. Your task is to create a brand new component showcase page that is highly consistent with the current /styles/preview/visual-handDrawnSketch (components) style.

Your goal: Generate a complete component library showcase page containing 15-20 hand-drawn style UI components, each applying handwritten fonts, SVG filters, and sticky note card textures, demonstrating different interaction states and use cases.

[Scenario]
- This is a complete showcase page for a "Hand-Drawn Style UI Component Library", targeting front-end developers, UI designers, and product teams.
- The page needs to systematically display all available component styles, states, and usage examples.
- The overall atmosphere should feel like a hand-drawn component manual or design system documentation, creative yet maintaining professional usability.

[Page Structure Requirements]

1. Top Navigation Bar (Header)
   - Logo: Hand-drawn SVG icon + "Sketch UI" text (Caveat font)
   - Navigation links: Components, Guidelines, Docs (Patrick Hand font)
   - Search box: Hand-drawn border input (placeholder: "Search components...")
   - White background with 2px dark bottom border

2. Hero Area
   - Main title: "UI Components Showcase" (Caveat font, 4rem)
   - Subtitle: "Hand-drawn interface kit with 18 components" (Patrick Hand, 1.3rem)
   - Two CTA buttons: "Browse Library" and "Back to Top"
   - Decorative hand-drawn star ★ next to title

3. Component Grid Area (Main Content)
   Each component card contains:
   - Card title (Caveat font, 2rem)
   - Component showcase area (white or light background)
   - Component variant display
   - Optional usage hint text

   **Required Component Categories**:

   a) Buttons Group (6-8 variants)
      - Primary (dark background)
      - Secondary (light background)
      - Outline (transparent + border)
      - Ghost (no border)
      - Doodle (hand-drawn decorative border)
      - Danger (red tone)
      Style: 2px border, hard-edge shadow (3px 3px 0), Patrick Hand font

   b) Cards Group (4 types)
      - Post-it Note: Yellow gradient, slight rotation (-2deg)
      - Notebook: Horizontal lines and hole punch effect
      - Whiteboard: Grid background or pure white
      - Doodle: Casual hand-drawn border

   c) Form Elements (5-6 types)
      - Input: Dashed border, hand-drawn focus effect
      - Textarea: Multi-line, border wobble effect
      - Checkbox: Hand-drawn checkmark
      - Radio: Hand-drawn dot mark
      - Slider: Hand-drawn track and handle
      - Select (optional): Dropdown with hand-drawn arrow

   d) Timeline (4-step process)
      - Vertical or horizontal layout
      - Hand-drawn dot connectors
      - Each step includes title and description
      - Hand-drawn arrow decoration

   e) List View (draggable)
      - 4-5 list items
      - Each with checkbox
      - Drag hint: "Drag items to reorder"
      - Sticky note paper texture background

   f) Loading Animations (3 types)
      - Pencil Draw animation
      - Note Flip animation
      - Scribble wave animation

   g) Other Components (at least 8)
      - Badges: Rounded rectangle, hand-drawn border
      - Alerts: info, success, warning, error states
      - Tooltips: Hover display, hand-drawn arrow pointer
      - Progress Bars: Hand-drawn fill effect
      - Accordion: Expandable/collapsible cards
      - Table: Hand-drawn grid lines, alternating row backgrounds
      - Avatars: Circle or square, hand-drawn border
      - Icons: Common SVG icons with hand-drawn filter
      - Dividers: Wavy or dashed lines
      - Dropdowns: Hand-drawn border menu
      - Pagination: Hand-drawn page number buttons
      - Tabs: Hand-drawn tab switcher

[Font System]

1. Title Font
   - Caveat, cursive (weight 700)
   - Card titles: 2rem-2.5rem
   - Page main title: 4rem

2. Body Font
   - Patrick Hand, cursive (weight 400)
   - Component labels: 0.9rem-1rem
   - Description text: 1rem-1.1rem
   - Line height: 1.6

3. Decorative Font (optional)
   - Reenie Beanie, cursive
   - For special annotations or marks

4. Google Fonts Import
   \`\`\`html
   <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Patrick+Hand&family=Reenie+Beanie&display=swap" rel="stylesheet">
   \`\`\`

[Color System]

1. Background Colors
   - Main background: #FFF8DC (light cream)
   - Card background: #FFFFFF
   - Header background: #FFFFFF

2. Sticky Note Colors (for cards and decorations)
   - Yellow: #FFFACD, #FFF8DC
   - Pink: #FFE4E1, #FFD6D6
   - Blue: #E3F2FD, #BBDEFB
   - Green: #E8F5E9, #C8E6C9

3. Text & Borders
   - Primary text: #23303d (dark blue-black)
   - Secondary text: #4a5568 (medium gray)
   - Border lines: #23303d
   - Decorative text: #7f8c8d

4. State Colors
   - Success: #4CAF50 (green)
   - Warning: #FF9800 (orange)
   - Error: #F44336 (red)
   - Info: #2196F3 (blue)

[SVG Hand-Drawn Filter Configuration]

\`\`\`html
<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="sketchc-rough">
      <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
      <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1.6" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
</svg>
\`\`\`

Apply to:
- All SVG icons and illustrations
- Some card borders (optional)
- Decorative elements

[Shadow System]

1. Card Shadow
   \`\`\`css
   box-shadow: 4px 4px 0 rgba(35, 48, 61, 0.15);
   \`\`\`

2. Button Shadow
   \`\`\`css
   /* Default */
   box-shadow: 3px 3px 0 #23303d;

   /* Hover */
   box-shadow: 1px 1px 0 #23303d;
   transform: translate(2px, 2px);
   \`\`\`

3. Sticky Note Shadow
   \`\`\`css
   box-shadow:
     0 4px 6px rgba(0, 0, 0, 0.1),
     0 1px 3px rgba(0, 0, 0, 0.08);
   \`\`\`

[Interaction States]

1. Buttons
   - hover: Move down 2px, shadow decreases
   - active: Move further down, shadow minimized

2. Cards
   - hover: Lift up 2px slightly, shadow increases

3. Form Elements
   - focus: Border changes from dashed to solid, add 4px light outer shadow
   - disabled: Reduce opacity to 0.5

4. Draggable List
   - dragging: Rotate 3deg, shadow increases, cursor: grabbing

[Responsive Design]

\`\`\`css
/* Desktop (default): 3-column grid */
.sketchc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Tablet: 2-column grid */
@media (max-width: 1024px) {
  .sketchc-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1-column grid */
@media (max-width: 768px) {
  .sketchc-grid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

[Key CSS Class Examples]

\`\`\`css
/* Component Card */
.sketchc-card {
  background: #fff;
  border: 2px solid #23303d;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 4px 4px 0 rgba(35, 48, 61, 0.15);
  transition: all 0.3s ease;
}

.sketchc-card:hover {
  transform: translateY(-2px);
  box-shadow: 6px 6px 0 rgba(35, 48, 61, 0.2);
}

/* Button Base Class */
.sketchc-btn {
  font-family: 'Patrick Hand', cursive;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #23303d;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 3px 3px 0 #23303d;
}

.sketchc-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 #23303d;
}

/* Sticky Note Card */
.sketchc-postit {
  background: linear-gradient(135deg, #FFFACD 0%, #FFF8DC 100%);
  padding: 1.5rem;
  border-radius: 2px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.sketchc-postit:hover {
  transform: rotate(0deg) scale(1.05);
  z-index: 10;
}

/* Input */
.sketchc-input {
  font-family: 'Patrick Hand', cursive;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 2px dashed #4a5568;
  border-radius: 6px;
  background: #fff;
  transition: all 0.3s ease;
}

.sketchc-input:focus {
  outline: none;
  border-style: solid;
  border-color: #23303d;
  box-shadow: 0 0 0 4px rgba(35, 48, 61, 0.1);
}
\`\`\`

[Animation Effects]

1. SVG Path Drawing Animation
   \`\`\`css
   @keyframes draw-path {
     from {
       stroke-dasharray: 1000;
       stroke-dashoffset: 1000;
     }
     to {
       stroke-dashoffset: 0;
     }
   }
   \`\`\`

2. Sticky Note Appear Animation
   \`\`\`css
   @keyframes note-appear {
     from {
       opacity: 0;
       transform: rotate(-5deg) scale(0.8);
     }
     to {
       opacity: 1;
       transform: rotate(-2deg) scale(1);
     }
   }
   \`\`\`

3. Pencil Drawing Animation (Loading)
   \`\`\`css
   @keyframes pencil-draw {
     0%, 100% { transform: translateX(0); }
     50% { transform: translateX(100px); }
   }
   \`\`\`

[Output Requirements]

- Use semantic HTML5 structure (header, main, article, section)
- All components use CSS class names (sketchc-* prefix)
- Include complete Google Fonts import link
- Include SVG filter definitions (in <defs>)
- All components should be functionally interactive (buttons clickable, inputs typeable, checkboxes checkable)
- Responsive layout, adapt to desktop, tablet, mobile
- Output complete page HTML + CSS, directly runnable in browser
- Maintain style consistency with existing component showcase page

[Special Notes]
- Component library showcase needs to be more systematic and professional while maintaining hand-drawn warmth
- Each component should display multiple states (default, hover, active, disabled, focus)
- Use grid layout for neat and orderly component display
- Add brief usage hints or code snippets (optional)
- Ensure all interactions have visual feedback
- Color contrast must be sufficient for accessibility
`
        },
        // Components Showcase 专属 stylePrompt
        stylePrompt: {
          'zh-CN': `角色設定：
你是專精「手繪涂鴉 / Hand-Drawn Sketch」UI 組件庫的設計師，正在設計組件展示頁面。

場景定位：
這是手繪風格 UI 組件庫的完整展示頁，面向前端開發者、UI 設計師。需要系統化展示所有組件的樣式、狀態和用法。

視覺理念：
組件庫需要更專業和系統化，但仍保持手繪溫暖感。每個組件展示多種狀態（default、hover、active、disabled、focus）。

材質質感：
- 主背景：浅奶油色（#FFF8DC）
- 組件卡片：白色，深邊框，硬邊陰影
- 便簽組件：粉彩色系，輕微旋轉
- 所有 SVG 圖標應用手繪濾鏡

組件系統：
18+ 組件，包括：Buttons（6 變體）、Cards（4 類型）、Forms、Timeline、List View（可拖拽）、Loading Animations、Badges、Alerts、Tooltips、Progress、Accordion、Table、Avatars、Icons、Dividers、Dropdowns、Pagination、Tabs。

交互體驗：
- 按鈕：hover 下移，active 更下移
- 卡片：hover 上移，陰影增大
- 表單：focus 邊框實線，外圍陰影
- 拖拽列表：旋轉 3deg，cursor: grabbing

佈局：
使用網格布局（3 列桌面、2 列平板、1 列移動端），組件展示整齊有序但保持手繪俏皮感。

氛圍：
專業可用，但不冷漠。像手繪組件手冊或設計系統文檔，充滿創意但保持可用性。`,
          'en-US': `Role:
You're a Hand-Drawn Sketch UI component library designer creating a showcase page.

Context:
Complete showcase for Hand-Drawn UI Component Library. Targets front-end developers, UI designers. Systematically displays all component styles, states, usage.

Philosophy:
Component library needs more professionalism but keeps hand-drawn warmth. Each component shows multiple states (default, hover, active, disabled, focus).

Materials:
- Main background: Light cream (#FFF8DC)
- Component cards: White, dark border, hard-edge shadow
- Sticky components: Pastel colors, slight rotation
- All SVG icons apply hand-drawn filter

Component System:
18+ components: Buttons (6 variants), Cards (4 types), Forms, Timeline, List View (draggable), Loading Animations, Badges, Alerts, Tooltips, Progress, Accordion, Table, Avatars, Icons, Dividers, Dropdowns, Pagination, Tabs.

Interaction:
- Buttons: hover moves down, active moves further
- Cards: hover lifts, shadow increases
- Forms: focus solid border, outer shadow
- Draggable list: rotate 3deg, cursor: grabbing

Layout:
Grid layout (3-col desktop, 2-col tablet, 1-col mobile). Components neat and orderly but playful.

Atmosphere:
Professional and usable, but not cold. Like hand-drawn component manual or design system docs, creative yet maintainable.`
        }
      }
    ]
  }
];
