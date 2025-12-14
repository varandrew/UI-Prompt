# Style Prompt

## 中文版本 (zh-CN)

### 排版优先（Typography First）设计系统指南

**设计哲学**
排版优先意味着文字本身成为设计的视觉主角，而非配角。通过对字重、字号、色彩和互动的精心设计，文字能传达产品的气质、层级和故事。

**核心实现技术**

1. **文字描边效果（Text Stroke）**
   ```css
   .text-outline {
     -webkit-text-stroke: 2px #f4f4f0;
     color: transparent;
     transition: all 0.4s ease-out;
   }

   .text-outline:hover {
     color: #f4f4f0;
     -webkit-text-stroke: 0px transparent;
   }
   ```

2. **渐变文字填充**
   ```css
   .text-gradient {
     background: linear-gradient(to right, #ffffff, #666666);
     -webkit-background-clip: text;
     background-clip: text;
     -webkit-text-fill-color: transparent;
   }
   ```

3. **响应式字号（Fluid Typography）**
   ```css
   h1 {
     font-size: clamp(3rem, 15vw, 18rem);
     font-weight: 900;
     line-height: 0.85;
   }
   ```

4. **Scroll 动画揭示**
   ```css
   .reveal-type {
     opacity: 0;
     transform: translateY(50px) scale(0.98);
     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
   }

   .reveal-type.visible {
     opacity: 1;
     transform: translateY(0) scale(1);
   }
   ```

**色彩配置**

深色方案（优先推荐）：
- 背景：#080808（深黑）或 #1a1a1a（深灰）
- 文字：#f4f4f0（淡白）
- 边框：rgba(255, 255, 255, 0.1)（低透明白色）
- 渐变：#ffffff → #666666（白到中灰）

浅色方案（可选）：
- 背景：#faf8f5（米白）或 #ffffff（纯白）
- 文字：#1f2937（深灰黑）
- 边框：rgba(0, 0, 0, 0.1)（低透明黑色）
- 渐变：#000000 → #999999（黑到中灰）

**字体配置**

推荐组合：
- **Sans-serif**：Inter, Poppins, -apple-system（清晰、现代）
- **Serif**：Playfair Display, Georgia（优雅、编辑）
- **Monospace**：Space Mono, IBM Plex Mono（技术感）

每个页面应该选择一个主字体家族，最多两个（主副搭配）。

**排版层级系统**

| 层级 | 用途 | 字号 | 字重 | 行高 |
|------|------|------|------|------|
| H1 | 主标题 | clamp(3rem, 15vw, 18rem) | 900 | 0.85 |
| H2 | 副标题 | clamp(2rem, 8vw, 5rem) | 700 | 0.9 |
| H3 | 小标题 | clamp(1.5rem, 4vw, 2.5rem) | 600 | 1.1 |
| Body | 正文 | 16px–18px | 400 | 1.6+ |
| Caption | 说明文字 | 12px–14px | 500 | 1.5 |

**互动效果**

1. **Hover 字重变化**
   ```css
   .interactive-text:hover {
     font-weight: 900;
     letter-spacing: 0.05em;
     transition: all 0.3s ease;
   }
   ```

2. **Hover 斜体变化**
   ```css
   .interactive-text:hover {
     font-style: italic;
     transform: scale(1.02);
   }
   ```

3. **Kinetic 下划线**
   ```css
   .kinetic-link::after {
     content: '';
     position: absolute;
     width: 100%;
     height: 4px;
     bottom: 0;
     transform: scaleX(0);
     transform-origin: right;
     background: currentColor;
     transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
   }

   .kinetic-link:hover::after {
     transform: scaleX(1);
     transform-origin: left;
   }
   ```

**响应式设计**

```css
/* Mobile: 单栏，较小字号 */
h1 { font-size: clamp(2rem, 8vw, 3rem); }
body { font-size: 14px; line-height: 1.7; }

/* Tablet: 两栏 */
@media (min-width: 768px) {
  h1 { font-size: clamp(3rem, 12vw, 5rem); }
  body { font-size: 16px; }
}

/* Desktop: 三栏+ */
@media (min-width: 1024px) {
  h1 { font-size: clamp(4rem, 15vw, 8rem); }
  body { font-size: 18px; }
}
```

**无障碍性（Accessibility）**

1. **色彩对比检查**
   - 正文：最小 4.5:1（WCAG AA）
   - 大标题：最小 3:1（WCAG AA）
   - 使用 https://webaim.org/resources/contrastchecker/

2. **渐变文字 Fallback**
   ```css
   .gradient-text {
     color: #ffffff; /* Fallback */
     background: linear-gradient(...);
     background-clip: text;
     -webkit-text-fill-color: transparent;
   }
   ```

3. **减少动画偏好**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

**性能优化**

1. 使用 `will-change: transform;` 提示动画元素
2. 避免 `text-shadow` 过度使用（选择性应用）
3. 优先使用 `transform` 和 `opacity` 做动画
4. 预加载自定义字体：
   ```html
   <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
   ```

**使用场景示例**

- **品牌宣言页**：多行超大标题 + 渐变效果
- **编辑内容**：Serif 字体 + 首字下沉 + 多栏布局
- **动态着陆页**：Kinetic 动画 + 互动下划线
- **设计作品集**：粗体层级对比 + Scroll 揭示

---

## English Version (en-US)

### Typography First Design System Guide

**Design Philosophy**
Typography First means text itself becomes the visual protagonist of the design, not a supporting actor. Through careful design of font weights, sizes, colors, and interactions, text can convey the product's temperament, hierarchy, and story.

**Core Implementation Techniques**

1. **Text Stroke Effect**
   ```css
   .text-outline {
     -webkit-text-stroke: 2px #f4f4f0;
     color: transparent;
     transition: all 0.4s ease-out;
   }

   .text-outline:hover {
     color: #f4f4f0;
     -webkit-text-stroke: 0px transparent;
   }
   ```

2. **Gradient Text Fill**
   ```css
   .text-gradient {
     background: linear-gradient(to right, #ffffff, #666666);
     -webkit-background-clip: text;
     background-clip: text;
     -webkit-text-fill-color: transparent;
   }
   ```

3. **Fluid Typography (Responsive Font Sizes)**
   ```css
   h1 {
     font-size: clamp(3rem, 15vw, 18rem);
     font-weight: 900;
     line-height: 0.85;
   }
   ```

4. **Scroll Reveal Animation**
   ```css
   .reveal-type {
     opacity: 0;
     transform: translateY(50px) scale(0.98);
     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
   }

   .reveal-type.visible {
     opacity: 1;
     transform: translateY(0) scale(1);
   }
   ```

**Color Configuration**

Dark Scheme (Recommended Priority):
- Background: #080808 (deep black) or #1a1a1a (deep gray)
- Text: #f4f4f0 (off-white)
- Borders: rgba(255, 255, 255, 0.1) (low-opacity white)
- Gradient: #ffffff → #666666 (white to mid-gray)

Light Scheme (Optional):
- Background: #faf8f5 (warm white) or #ffffff (pure white)
- Text: #1f2937 (deep gray-black)
- Borders: rgba(0, 0, 0, 0.1) (low-opacity black)
- Gradient: #000000 → #999999 (black to mid-gray)

**Font Configuration**

Recommended Combinations:
- **Sans-serif**: Inter, Poppins, -apple-system (clean, modern)
- **Serif**: Playfair Display, Georgia (elegant, editorial)
- **Monospace**: Space Mono, IBM Plex Mono (technical feel)

Each page should select one primary font family, maximum two (primary-secondary pairing).

**Typography Hierarchy System**

| Level | Purpose | Size | Weight | Line Height |
|-------|---------|------|--------|-------------|
| H1 | Main headline | clamp(3rem, 15vw, 18rem) | 900 | 0.85 |
| H2 | Subheadline | clamp(2rem, 8vw, 5rem) | 700 | 0.9 |
| H3 | Section title | clamp(1.5rem, 4vw, 2.5rem) | 600 | 1.1 |
| Body | Body text | 16px–18px | 400 | 1.6+ |
| Caption | Caption text | 12px–14px | 500 | 1.5 |

**Interactive Effects**

1. **Hover Font Weight Change**
   ```css
   .interactive-text:hover {
     font-weight: 900;
     letter-spacing: 0.05em;
     transition: all 0.3s ease;
   }
   ```

2. **Hover Italic Change**
   ```css
   .interactive-text:hover {
     font-style: italic;
     transform: scale(1.02);
   }
   ```

3. **Kinetic Underline**
   ```css
   .kinetic-link::after {
     content: '';
     position: absolute;
     width: 100%;
     height: 4px;
     bottom: 0;
     transform: scaleX(0);
     transform-origin: right;
     background: currentColor;
     transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
   }

   .kinetic-link:hover::after {
     transform: scaleX(1);
     transform-origin: left;
   }
   ```

**Responsive Design**

```css
/* Mobile: Single column, smaller fonts */
h1 { font-size: clamp(2rem, 8vw, 3rem); }
body { font-size: 14px; line-height: 1.7; }

/* Tablet: Two columns */
@media (min-width: 768px) {
  h1 { font-size: clamp(3rem, 12vw, 5rem); }
  body { font-size: 16px; }
}

/* Desktop: Three columns+ */
@media (min-width: 1024px) {
  h1 { font-size: clamp(4rem, 15vw, 8rem); }
  body { font-size: 18px; }
}
```

**Accessibility**

1. **Color Contrast Check**
   - Body text: Minimum 4.5:1 (WCAG AA)
   - Large headings: Minimum 3:1 (WCAG AA)
   - Use https://webaim.org/resources/contrastchecker/

2. **Gradient Text Fallback**
   ```css
   .gradient-text {
     color: #ffffff; /* Fallback */
     background: linear-gradient(...);
     background-clip: text;
     -webkit-text-fill-color: transparent;
   }
   ```

3. **Reduced Motion Preference**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

**Performance Optimization**

1. Use `will-change: transform;` to hint animated elements
2. Avoid excessive `text-shadow` usage (apply selectively)
3. Prioritize `transform` and `opacity` for animations
4. Preload custom fonts:
   ```html
   <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
   ```

**Use Case Examples**

- **Brand Manifesto Page**: Multi-line massive headlines + gradient effects
- **Editorial Content**: Serif fonts + drop caps + multi-column layout
- **Dynamic Landing Page**: Kinetic animations + interactive underlines
- **Design Portfolio**: Bold hierarchy contrast + scroll reveals
