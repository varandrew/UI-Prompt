# Custom Prompt

## 中文版本 (zh-CN)

你现在是一名资深 UI 设计师兼前端工程师，请生成一个展示「排版优先」设计哲学的现代排版页面。

要求：突出文字本身的视觉表现力，使用超大字重、渐变填充、文字描边和互动效果作为视觉重点，而非依赖图像。背景保持深色（深灰/黑色），让排版成为绝对主角。

【使用场景】
- 设计作品集首页
- 创意机构品牌页
- 现代科技公司的排版展示
- 设计哲学或创意宣言页面

【核心元素】
1. **超大英雄标题**：多行排版，结合不同字重和字体风格
   - 第一行：Ultra-bold sans-serif（如 text-6xl-8xl）
   - 第二行：Serif italic 斜体（带文字描边效果）
   - 第三行：渐变填充文字

2. **排版层级系统**
   - 主标题（H1）：font-black，clamp 响应式字号
   - 副标题（H2）：font-bold 或 font-semibold
   - 正文：leading-relaxed，行高至少 1.6

3. **视觉效果**
   - 文字描边（Text Stroke）：-webkit-text-stroke 效果
   - 渐变填充：linear-gradient + background-clip
   - 互动效果：hover 时改变字重、斜体或颜色
   - Scroll 动画：scroll-reveal 淡入效果

4. **色彩配置**
   - 背景：深黑（#080808）或深灰（#1a1a1a）
   - 文字：高对比白色（#f4f4f0）
   - 渐变：白色 → 灰色（#ffffff → #666666）
   - 边框：低透明度白色（border-white/10）

5. **排版间距**
   - 使用 leading-tight（标题）和 leading-relaxed（正文）
   - 段落间距：space-y-12 或 space-y-16
   - 字距：tracking-tightest 或 tracking-widest

【输出要求】
- 使用语义化 HTML（<h1>, <h2>, <section>, <article>）
- 结合 Tailwind CSS 原子类（font-black, text-gradient, etc）
- 实现响应式设计（mobile-first，使用 md: 断点）
- 添加滚动动画和微互动（hover、scroll-reveal）
- 确保可读性和无障碍性（WCAG AA 对比度）

---

## English Version (en-US)

You are a senior UI designer and frontend engineer. Create a modern typography-focused page that showcases the "Typography First" design philosophy.

**Requirements**: Emphasize the visual expressiveness of text itself, using ultra-bold weights, gradient fills, text strokes, and interactive effects as visual focal points, rather than relying on imagery. Keep backgrounds dark (deep gray/black) to make typography the absolute protagonist.

### Use Cases
- Design portfolio homepage
- Creative agency brand pages
- Modern tech company typography showcase
- Design philosophy or creative manifesto pages

### Core Elements

#### 1. Massive Hero Headlines
Multi-line typography combining different font weights and styles:
- **First line**: Ultra-bold sans-serif (e.g., `text-6xl` to `text-8xl` in Tailwind)
- **Second line**: Serif italic with text stroke effect (`-webkit-text-stroke`)
- **Third line**: Gradient-filled text using `background-clip: text`

Implementation example:
```css
.hero-line-1 {
  font-family: system-ui, sans-serif;
  font-weight: 900; /* or font-black in Tailwind */
  font-size: clamp(3rem, 8vw, 8rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
}

.hero-line-2 {
  font-family: Georgia, serif;
  font-style: italic;
  font-weight: 700;
  font-size: clamp(2.5rem, 7vw, 7rem);
  -webkit-text-stroke: 2px #f4f4f0;
  -webkit-text-fill-color: transparent;
}

.hero-line-3 {
  background: linear-gradient(90deg, #ffffff 0%, #666666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(2rem, 6vw, 6rem);
}
```

#### 2. Typography Hierarchy System
Establish a clear typographic scale:
- **H1 (Main Headline)**: `font-black` (900 weight), use `clamp()` for responsive sizing
  - Example: `font-size: clamp(2.5rem, 5vw + 1rem, 5rem)`
- **H2 (Subheadline)**: `font-bold` (700) or `font-semibold` (600)
  - Size range: `clamp(1.5rem, 3vw + 0.5rem, 3rem)`
- **Body Text**: `leading-relaxed` (line-height 1.625), minimum `line-height: 1.6`
  - Font size: 16px-18px base, `leading-7` or `leading-8` in Tailwind

#### 3. Visual Effects

**Text Stroke** (Outlined text):
```css
.text-outline {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f4f4f0;
  -webkit-text-fill-color: transparent;
  paint-order: stroke fill;
}
```

**Gradient Fill**:
```css
.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #666666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Interactive Effects**:
- **Hover**: Change font-weight from 400 to 700, or toggle italic
- **Focus**: Add subtle glow or underline
```css
.interactive-text {
  transition: font-weight 0.3s ease, font-style 0.3s ease;
}
.interactive-text:hover {
  font-weight: 700;
  font-style: italic;
}
```

**Scroll Animations**:
Implement reveal-on-scroll using Intersection Observer or CSS `animation-timeline: scroll()`:
```css
@keyframes scroll-reveal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-reveal {
  animation: scroll-reveal linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```

#### 4. Color Configuration

**Background Colors**:
- Deep black: `#080808` or `bg-[#080808]`
- Deep gray: `#1a1a1a` or `bg-neutral-950`
- Alternative: Use gradient backgrounds like `bg-gradient-to-br from-black to-neutral-900`

**Text Colors**:
- High contrast white: `#f4f4f0` or `text-neutral-50`
- Ensure WCAG AA contrast ratio (≥4.5:1 for body text, ≥3:1 for large text)

**Gradient Ranges**:
- White to gray: `linear-gradient(90deg, #ffffff 0%, #666666 100%)`
- Metallic effect: `linear-gradient(135deg, #e5e5e5 0%, #8c8c8c 50%, #e5e5e5 100%)`

**Borders**:
- Low-opacity white: `border-white/10` (10% opacity)
- Use `border-white/20` for stronger emphasis

#### 5. Typography Spacing

**Line Height** (leading):
- Headlines: `leading-tight` (1.25) or `leading-none` (1.0) for dramatic effect
- Body text: `leading-relaxed` (1.625) or `leading-loose` (2.0)

**Paragraph Spacing**:
- Between sections: `space-y-12` (3rem) or `space-y-16` (4rem)
- Between paragraphs: `space-y-4` (1rem) or `space-y-6` (1.5rem)

**Letter Spacing** (tracking):
- Tight headlines: `tracking-tighter` (-0.05em) or `tracking-tightest` (-0.075em)
- Wide subheads: `tracking-wide` (0.025em) or `tracking-widest` (0.1em)
- Body: `tracking-normal` (0em)

### Output Requirements

#### Semantic HTML Structure
Use proper HTML5 semantic elements:
```html
<main>
  <section class="hero">
    <h1>Main Headline</h1>
    <h2>Subheadline</h2>
  </section>

  <article class="content">
    <section>
      <h2>Section Title</h2>
      <p>Body paragraph with proper line height and spacing</p>
    </section>
  </article>
</main>
```

#### Tailwind CSS Atomic Classes
Combine utility classes for rapid prototyping:
- `font-black text-8xl tracking-tighter leading-none`
- `bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent`
- `hover:font-bold hover:italic transition-all duration-300`

#### Responsive Design (Mobile-First)
Use Tailwind breakpoints for progressive enhancement:
```html
<h1 class="text-4xl md:text-6xl lg:text-8xl font-black">
  Responsive Headline
</h1>
```

Breakpoints:
- Base (mobile): Default styles
- `md:` (≥768px): Tablet
- `lg:` (≥1024px): Desktop
- `xl:` (≥1280px): Large desktop

#### Scroll Animations & Micro-interactions
- **On Hover**: Weight change, italic toggle, color shift
- **On Scroll**: Fade-in with `translateY`, parallax effects
- **On Focus**: Outline with `ring-2 ring-white/50 ring-offset-2 ring-offset-black`

#### Readability & Accessibility
- **Contrast Ratio**: Maintain WCAG AA (4.5:1 for normal text, 3:1 for large text ≥24px)
- **Focus States**: Visible focus indicators for keyboard navigation
- **Font Size**: Minimum 16px for body text, scalable with user preferences
- **Line Length**: Optimal 60-75 characters per line (`max-w-prose`)

### Technical Implementation Notes

**Font Loading**:
Use `font-display: swap` to prevent invisible text during font loading:
```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
}
```

**Performance Optimization**:
- Subset fonts to include only necessary glyphs
- Use variable fonts for multiple weights in one file
- Lazy-load animations below the fold

**Browser Compatibility**:
- Provide fallbacks for `-webkit-background-clip: text`
- Use `@supports` for gradient text:
```css
@supports (background-clip: text) {
  .gradient-text {
    background: linear-gradient(...);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
```

This typography-first approach creates impactful, modern interfaces where text becomes the hero element through bold sizing, creative effects, and thoughtful spacing.
