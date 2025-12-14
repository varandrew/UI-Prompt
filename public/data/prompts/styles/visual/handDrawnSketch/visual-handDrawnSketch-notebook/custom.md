# Custom Prompt - Hand-Drawn Notebook Style

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个手绘笔记本风格的界面，通过手写字体、不规则边框、纸质纹理和涂鸦元素创造温暖亲切的视觉体验。

**核心设计要求**

1. **手写字体系统**
   - 使用 Google Fonts 手写字体家族
   - 标题字体：Permanent Marker（粗体手写）
   - 正文字体：Patrick Hand（自然手写）
   - 装饰字体：Caveat（流畅草书）
   - 字体引用：
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Permanent+Marker&display=swap" rel="stylesheet">
     ```
   - CSS 应用：
     ```css
     body {
       font-family: 'Patrick Hand', cursive;
       color: #2c2c2c;
     }
     h1, h2, h3, h4 {
       font-family: 'Permanent Marker', cursive;
     }
     ```

2. **不规则边框（Wobbly Borders）**
   - 使用极端 border-radius 值模拟手绘矩形
   - 避免完美几何形状，创造有机感
   - 示例：
     ```css
     .sketch-box {
       background: white;
       border: 2px solid #2c2c2c;
       border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
       box-shadow: 4px 4px 0 #2c2c2c;
       transition: all 0.2s ease-in-out;
     }

     .sketch-box:hover {
       transform: translate(-2px, -2px) rotate(-0.5deg);
       box-shadow: 6px 6px 0 #2c2c2c;
     }

     .sketch-box:active {
       transform: translate(2px, 2px);
       box-shadow: 1px 1px 0 #2c2c2c;
     }
     ```

3. **纸质纹理背景**
   - 网格纸背景：使用 repeating-linear-gradient 创建
   - 背景色：米黄色纸质感（#fdfbf7）
   - 网格线：低透明度灰色（rgba(0, 0, 0, 0.15)）
   - 示例：
     ```css
     body {
       background-color: #fdfbf7;
       background-image:
         linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
         linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px);
       background-size: 24px 24px;
     }
     ```

4. **便签纸效果（Sticky Notes）**
   - 颜色：柔和的粉彩色（黄色、粉色、蓝色、绿色）
   - 随机旋转：-3deg 到 3deg
   - 胶带效果和阴影
   - 示例：
     ```css
     .sticky-note {
       position: relative;
       padding: 1.5rem;
       color: #2c2c2c;
       box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
       transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
       background-color: #fff740; /* 黄色便签 */
       clip-path: polygon(0% 0%, 100% 0%, 100% 98%, 98% 100%, 0% 100%);
       transform: rotate(-2deg);
     }

     .sticky-note:hover {
       z-index: 10;
       transform: scale(1.05) rotate(0deg) !important;
       box-shadow: 5px 8px 12px rgba(0,0,0,0.15);
     }

     /* 胶带效果 */
     .tape {
       position: absolute;
       top: -10px;
       left: 50%;
       transform: translateX(-50%) rotate(-2deg);
       width: 80px;
       height: 25px;
       background-color: rgba(255, 255, 255, 0.5);
       border: 1px solid rgba(0,0,0,0.05);
       box-shadow: 0 1px 2px rgba(0,0,0,0.1);
       opacity: 0.7;
     }
     ```

5. **涂鸦装饰元素**
   - 手绘圆圈、箭头、下划线
   - 使用 SVG 或伪元素创建
   - 波浪线下划线：
     ```css
     .doodle-underline {
       position: relative;
       display: inline-block;
     }
     .doodle-underline::after {
       content: '';
       position: absolute;
       left: 0;
       bottom: -5px;
       width: 100%;
       height: 6px;
       background: url("data:image/svg+xml,%3Csvg width='100' height='10' viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 10 10 20 5 T 40 5 T 60 5 T 80 5 T 100 5' stroke='%232c2c2c' fill='none' stroke-width='2'/%3E%3C/svg%3E");
       background-size: cover;
     }
     ```

6. **手绘复选框和表单元素**
   - 去除默认样式，使用自定义设计
   - 不规则形状和手绘感
   - 示例：
     ```css
     .sketch-checkbox {
       appearance: none;
       width: 24px;
       height: 24px;
       border: 2px solid #2c2c2c;
       border-radius: 4px;
       display: grid;
       place-content: center;
       cursor: pointer;
       margin-right: 10px;
     }

     .sketch-checkbox::before {
       content: "";
       width: 14px;
       height: 14px;
       background-color: #2c2c2c;
       transform: scale(0);
       transition: 0.1s transform ease-in-out;
       clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
     }

     .sketch-checkbox:checked::before {
       transform: scale(1);
     }
     ```

7. **手绘按钮样式**
   - 不规则边框和阴影
   - 鼠标悬停时的跳动效果
   - 示例：
     ```css
     .sketch-btn {
       background: #2c2c2c;
       color: white;
       border: 2px solid #2c2c2c;
       padding: 0.5rem 1.5rem;
       font-size: 1.2rem;
       border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
       cursor: pointer;
       transition: transform 0.1s;
       font-family: 'Patrick Hand', cursive;
     }

     .sketch-btn:hover {
       transform: scale(1.05) rotate(1deg);
     }

     .sketch-btn:active {
       transform: scale(0.95);
     }
     ```

**配色方案（温暖纸质风格）**

主色调：
- 墨水黑色：#2c2c2c（文字和边框）
- 铅笔灰色：#555555（次要文字）
- 纸张米黄：#fdfbf7（背景）

便签色彩：
- 柔和黄色：#fff740（经典便签）
- 淡粉色：#ff99cc（温柔提示）
- 浅蓝色：#aaddff（冷静笔记）
- 薄荷绿色：#ccff90（清新想法）

装饰色：
- 红色标记：#ff6b6b（重要标注）
- 青色高亮：#4ecdc4（强调元素）
- 金色星标：#ffb703（特殊标记）

阴影色：
- 柔和阴影：rgba(0, 0, 0, 0.15-0.2)

**关键 CSS 类示例**

```css
/* 手绘卡片容器 */
.sketch-card {
  background: white;
  border: 2px solid #2c2c2c;
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  box-shadow: 4px 4px 0 #2c2c2c;
  padding: 2rem;
  transition: all 0.2s ease-in-out;
}

.sketch-card:hover {
  transform: translate(-2px, -2px) rotate(-0.5deg);
  box-shadow: 6px 6px 0 #2c2c2c;
}

/* 便签纸 */
.sticky-yellow {
  background-color: #fff740;
  transform: rotate(-2deg);
}

.sticky-pink {
  background-color: #ff99cc;
  transform: rotate(1.5deg);
}

.sticky-blue {
  background-color: #aaddff;
  transform: rotate(-1deg);
}

/* 手绘输入框 */
.sketch-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #2c2c2c;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.25rem;
  padding: 0.5rem;
  outline: none;
  background-image: repeating-linear-gradient(
    transparent,
    transparent 31px,
    rgba(0,0,0,0.05) 32px
  );
  line-height: 32px;
}

.sketch-input:focus {
  border-bottom: 3px solid #2c2c2c;
}

/* 拍立得照片框 */
.polaroid {
  background: white;
  padding: 1rem 1rem 3rem 1rem;
  box-shadow: 3px 4px 8px rgba(0,0,0,0.2);
  transform: rotate(3deg);
  transition: transform 0.3s;
}

.polaroid:hover {
  transform: rotate(0deg) scale(1.02);
  z-index: 20;
}

/* 回形针装饰 */
.paper-clip {
  position: absolute;
  top: -15px;
  right: 20px;
  width: 20px;
  height: 45px;
  border: 3px solid #888;
  border-radius: 20px;
  transform: rotate(15deg);
  box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.paper-clip::before {
  content: '';
  position: absolute;
  top: 5px;
  left: -3px;
  width: 20px;
  height: 30px;
  border: 3px solid #888;
  border-radius: 20px;
  border-top: none;
  clip-path: inset(10px 0 0 0);
}

/* 手绘柱状图 */
.sketch-bar {
  width: 100%;
  background-color: #aaddff;
  border: 2px solid #2c2c2c;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  position: relative;
}

.sketch-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5px,
    rgba(0,0,0,0.1) 5px,
    rgba(0,0,0,0.1) 7px
  );
  border-radius: 6px 6px 0 0;
}
```

**Tailwind CSS 配置**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'hand': ['"Patrick Hand"', 'cursive'],
        'marker': ['"Permanent Marker"', 'cursive'],
        'caveat': ['"Caveat"', 'cursive'],
      },
      colors: {
        'paper': '#fdfbf7',
        'ink': '#2c2c2c',
        'pencil': '#555555',
        'sticky-yellow': '#fff740',
        'sticky-pink': '#ff99cc',
        'sticky-blue': '#aaddff',
        'sticky-green': '#ccff90',
      },
    },
  },
}
```

**Tailwind CSS 类示例**

```html
<!-- 手绘卡片 -->
<div class="bg-white border-2 border-ink rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[4px_4px_0_#2c2c2c] p-8 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#2c2c2c] transition-all">
  <!-- 卡片内容 -->
</div>

<!-- 便签纸 -->
<div class="relative bg-sticky-yellow p-6 shadow-md clip-path-[polygon(0%_0%,100%_0%,100%_98%,98%_100%,0%_100%)] rotate-[-2deg] hover:scale-105 hover:rotate-0 transition-transform">
  <!-- 便签内容 -->
</div>

<!-- 手写标题 -->
<h1 class="font-marker text-5xl transform -rotate-1">
  手绘笔记本
</h1>

<!-- 正文段落 -->
<p class="font-hand text-lg leading-relaxed text-ink">
  温暖亲切的手绘风格界面设计
</p>
```

**间距系统（基于 8px）**

- xs: 8px（0.5rem）
- sm: 16px（1rem）
- md: 24px（1.5rem）
- lg: 32px（2rem）
- xl: 48px（3rem）
- 2xl: 64px（4rem）

**字体大小系统**

标题：
- h1: 48px-72px（3rem-4.5rem），font-weight: 700-800
- h2: 36px-48px（2.25rem-3rem），font-weight: 700
- h3: 24px-32px（1.5rem-2rem），font-weight: 700
- h4: 20px-24px（1.25rem-1.5rem），font-weight: 600

正文：
- 大号：18px-20px（1.125rem-1.25rem）
- 标准：16px-18px（1rem-1.125rem）
- 小号：14px-16px（0.875rem-1rem）
- 行高：1.6-1.8

**旋转角度系统**

- 轻微倾斜：-1deg 到 1deg
- 便签倾斜：-3deg 到 3deg
- 装饰倾斜：-5deg 到 5deg

**重要提示**

- 必须使用手写字体（Patrick Hand, Permanent Marker, Caveat）
- 边框必须使用不规则 border-radius 创造手绘感
- 避免完美对齐，使用轻微旋转和位移
- 背景必须是纸质纹理（网格纸或线条纸）
- 所有元素应该有轻微的不规则感，避免机械完美
- 阴影使用硬边阴影（box-shadow 无 blur）模拟手绘效果
- 颜色使用柔和的粉彩色系，避免高饱和度纯色
- 互动元素（按钮、复选框）应该有手绘风格
- 使用涂鸦元素（圆圈、箭头、星星）作为装饰
- 便签纸必须有随机旋转角度（每个不同）
- Hover 状态应该有弹性感（scale + rotate）
- 避免使用渐变，保持平面色彩
- 线条粗细：2px（标准边框）到 3px（强调）

**避免事项**

- ❌ 不要使用完美的几何形状（正方形、正圆）
- ❌ 不要使用统一的旋转角度
- ❌ 不要使用模糊阴影（blur shadow）
- ❌ 不要使用高科技感字体
- ❌ 不要使用高饱和度霓虹色
- ❌ 不要完美对齐元素
- ❌ 不要使用光滑的动画曲线（使用 ease-in-out）
- ❌ 不要过度使用装饰元素


---

## English Version (en-US)

Please create a Hand-Drawn Notebook style interface using TailwindCSS, creating warm and approachable visual experiences through handwritten fonts, irregular borders, paper textures, and doodle elements.

**Core Design Requirements**

1. **Handwritten Font System**
   - Use Google Fonts handwritten font family
   - Title font: Permanent Marker (bold handwriting)
   - Body font: Patrick Hand (natural handwriting)
   - Decorative font: Caveat (flowing cursive)
   - Font reference:
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Permanent+Marker&display=swap" rel="stylesheet">
     ```
   - CSS application:
     ```css
     body {
       font-family: 'Patrick Hand', cursive;
       color: #2c2c2c;
     }
     h1, h2, h3, h4 {
       font-family: 'Permanent Marker', cursive;
     }
     ```

2. **Irregular Borders (Wobbly Borders)**
   - Use extreme border-radius values to simulate hand-drawn rectangles
   - Avoid perfect geometric shapes, create organic feel
   - Example:
     ```css
     .sketch-box {
       background: white;
       border: 2px solid #2c2c2c;
       border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
       box-shadow: 4px 4px 0 #2c2c2c;
       transition: all 0.2s ease-in-out;
     }

     .sketch-box:hover {
       transform: translate(-2px, -2px) rotate(-0.5deg);
       box-shadow: 6px 6px 0 #2c2c2c;
     }

     .sketch-box:active {
       transform: translate(2px, 2px);
       box-shadow: 1px 1px 0 #2c2c2c;
     }
     ```

3. **Paper Texture Background**
   - Grid paper background: created using repeating-linear-gradient
   - Background color: cream paper feel (#fdfbf7)
   - Grid lines: low-opacity gray (rgba(0, 0, 0, 0.15))
   - Example:
     ```css
     body {
       background-color: #fdfbf7;
       background-image:
         linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
         linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px);
       background-size: 24px 24px;
     }
     ```

4. **Sticky Note Effect**
   - Colors: soft pastel colors (yellow, pink, blue, green)
   - Random rotation: -3deg to 3deg
   - Tape effect and shadows
   - Example:
     ```css
     .sticky-note {
       position: relative;
       padding: 1.5rem;
       color: #2c2c2c;
       box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
       transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
       background-color: #fff740; /* Yellow sticky note */
       clip-path: polygon(0% 0%, 100% 0%, 100% 98%, 98% 100%, 0% 100%);
       transform: rotate(-2deg);
     }

     .sticky-note:hover {
       z-index: 10;
       transform: scale(1.05) rotate(0deg) !important;
       box-shadow: 5px 8px 12px rgba(0,0,0,0.15);
     }

     /* Tape effect */
     .tape {
       position: absolute;
       top: -10px;
       left: 50%;
       transform: translateX(-50%) rotate(-2deg);
       width: 80px;
       height: 25px;
       background-color: rgba(255, 255, 255, 0.5);
       border: 1px solid rgba(0,0,0,0.05);
       box-shadow: 0 1px 2px rgba(0,0,0,0.1);
       opacity: 0.7;
     }
     ```

5. **Doodle Decoration Elements**
   - Hand-drawn circles, arrows, underlines
   - Created using SVG or pseudo-elements
   - Wavy underline:
     ```css
     .doodle-underline {
       position: relative;
       display: inline-block;
     }
     .doodle-underline::after {
       content: '';
       position: absolute;
       left: 0;
       bottom: -5px;
       width: 100%;
       height: 6px;
       background: url("data:image/svg+xml,%3Csvg width='100' height='10' viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 10 10 20 5 T 40 5 T 60 5 T 80 5 T 100 5' stroke='%232c2c2c' fill='none' stroke-width='2'/%3E%3C/svg%3E");
       background-size: cover;
     }
     ```

6. **Hand-Drawn Checkboxes and Form Elements**
   - Remove default styles, use custom design
   - Irregular shapes and hand-drawn feel
   - Example:
     ```css
     .sketch-checkbox {
       appearance: none;
       width: 24px;
       height: 24px;
       border: 2px solid #2c2c2c;
       border-radius: 4px;
       display: grid;
       place-content: center;
       cursor: pointer;
       margin-right: 10px;
     }

     .sketch-checkbox::before {
       content: "";
       width: 14px;
       height: 14px;
       background-color: #2c2c2c;
       transform: scale(0);
       transition: 0.1s transform ease-in-out;
       clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
     }

     .sketch-checkbox:checked::before {
       transform: scale(1);
     }
     ```

7. **Hand-Drawn Button Styles**
   - Irregular borders and shadows
   - Bouncing effect on hover
   - Example:
     ```css
     .sketch-btn {
       background: #2c2c2c;
       color: white;
       border: 2px solid #2c2c2c;
       padding: 0.5rem 1.5rem;
       font-size: 1.2rem;
       border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
       cursor: pointer;
       transition: transform 0.1s;
       font-family: 'Patrick Hand', cursive;
     }

     .sketch-btn:hover {
       transform: scale(1.05) rotate(1deg);
     }

     .sketch-btn:active {
       transform: scale(0.95);
     }
     ```

**Color Scheme (Warm Paper Style)**

Primary Colors:
- Ink Black: #2c2c2c (text and borders)
- Pencil Gray: #555555 (secondary text)
- Paper Cream: #fdfbf7 (background)

Sticky Note Colors:
- Soft Yellow: #fff740 (classic sticky note)
- Light Pink: #ff99cc (gentle reminder)
- Light Blue: #aaddff (calm notes)
- Mint Green: #ccff90 (fresh ideas)

Accent Colors:
- Red Marker: #ff6b6b (important highlights)
- Cyan Highlight: #4ecdc4 (emphasis elements)
- Gold Star: #ffb703 (special marks)

Shadow Colors:
- Soft Shadow: rgba(0, 0, 0, 0.15-0.2)

**Key CSS Class Examples**

```css
/* Hand-drawn card container */
.sketch-card {
  background: white;
  border: 2px solid #2c2c2c;
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  box-shadow: 4px 4px 0 #2c2c2c;
  padding: 2rem;
  transition: all 0.2s ease-in-out;
}

.sketch-card:hover {
  transform: translate(-2px, -2px) rotate(-0.5deg);
  box-shadow: 6px 6px 0 #2c2c2c;
}

/* Sticky notes */
.sticky-yellow {
  background-color: #fff740;
  transform: rotate(-2deg);
}

.sticky-pink {
  background-color: #ff99cc;
  transform: rotate(1.5deg);
}

.sticky-blue {
  background-color: #aaddff;
  transform: rotate(-1deg);
}

/* Hand-drawn input */
.sketch-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #2c2c2c;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.25rem;
  padding: 0.5rem;
  outline: none;
  background-image: repeating-linear-gradient(
    transparent,
    transparent 31px,
    rgba(0,0,0,0.05) 32px
  );
  line-height: 32px;
}

.sketch-input:focus {
  border-bottom: 3px solid #2c2c2c;
}

/* Polaroid photo frame */
.polaroid {
  background: white;
  padding: 1rem 1rem 3rem 1rem;
  box-shadow: 3px 4px 8px rgba(0,0,0,0.2);
  transform: rotate(3deg);
  transition: transform 0.3s;
}

.polaroid:hover {
  transform: rotate(0deg) scale(1.02);
  z-index: 20;
}

/* Paper clip decoration */
.paper-clip {
  position: absolute;
  top: -15px;
  right: 20px;
  width: 20px;
  height: 45px;
  border: 3px solid #888;
  border-radius: 20px;
  transform: rotate(15deg);
  box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.paper-clip::before {
  content: '';
  position: absolute;
  top: 5px;
  left: -3px;
  width: 20px;
  height: 30px;
  border: 3px solid #888;
  border-radius: 20px;
  border-top: none;
  clip-path: inset(10px 0 0 0);
}

/* Hand-drawn bar chart */
.sketch-bar {
  width: 100%;
  background-color: #aaddff;
  border: 2px solid #2c2c2c;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  position: relative;
}

.sketch-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5px,
    rgba(0,0,0,0.1) 5px,
    rgba(0,0,0,0.1) 7px
  );
  border-radius: 6px 6px 0 0;
}
```

**Spacing System (Based on 8px)**

- xs: 8px (0.5rem)
- sm: 16px (1rem)
- md: 24px (1.5rem)
- lg: 32px (2rem)
- xl: 48px (3rem)
- 2xl: 64px (4rem)

**Font Size System**

Headings:
- h1: 48px-72px (3rem-4.5rem), font-weight: 700-800
- h2: 36px-48px (2.25rem-3rem), font-weight: 700
- h3: 24px-32px (1.5rem-2rem), font-weight: 700
- h4: 20px-24px (1.25rem-1.5rem), font-weight: 600

Body:
- Large: 18px-20px (1.125rem-1.25rem)
- Standard: 16px-18px (1rem-1.125rem)
- Small: 14px-16px (0.875rem-1rem)
- Line height: 1.6-1.8

**Rotation Angle System**

- Slight tilt: -1deg to 1deg
- Sticky note tilt: -3deg to 3deg
- Decoration tilt: -5deg to 5deg

**Important Notes**

- Must use handwritten fonts (Patrick Hand, Permanent Marker, Caveat)
- Borders must use irregular border-radius to create hand-drawn feel
- Avoid perfect alignment, use slight rotation and displacement
- Background must be paper texture (grid paper or lined paper)
- All elements should have slight irregularity, avoid mechanical perfection
- Shadows use hard-edge shadows (box-shadow without blur) to simulate hand-drawn effect
- Colors use soft pastel palette, avoid high-saturation pure colors
- Interactive elements (buttons, checkboxes) should have hand-drawn style
- Use doodle elements (circles, arrows, stars) as decorations
- Sticky notes must have random rotation angles (each different)
- Hover states should have elastic feel (scale + rotate)
- Avoid using gradients, maintain flat colors
- Line thickness: 2px (standard border) to 3px (emphasis)

**Things to Avoid**

- ❌ Don't use perfect geometric shapes (squares, perfect circles)
- ❌ Don't use uniform rotation angles
- ❌ Don't use blurred shadows (blur shadow)
- ❌ Don't use high-tech fonts
- ❌ Don't use high-saturation neon colors
- ❌ Don't perfectly align elements
- ❌ Don't use smooth animation curves (use ease-in-out)
- ❌ Don't overuse decorative elements
