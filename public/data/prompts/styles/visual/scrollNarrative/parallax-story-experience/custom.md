# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 制作「视差故事体验」页，突出多层视差、电影分镜节奏与沉浸感。

**核心设计要求**

1. **全幅视差 Hero**
   - 背景：全宽图/渐层，3 层 decor（云雾、光斑、线条）分别 0.3x/0.6x/1x 速度。
   - 前景：标题 46-64px、子标 18-22px、主 CTA。
   - CSS：
     ```css
     .pse-hero { @apply relative min-h-[86vh] flex items-center; }
     .pse-hero::before { content:""; @apply absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(94,234,212,0.18),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(244,114,182,0.18),transparent_50%)]; filter: blur(42px); transform: translateY(-6vh); }
     .pse-title { @apply text-5xl lg:text-6xl font-semibold leading-tight text-white; }
     ```

2. **故事节拍 (3-5 段)**
   - 章节徽章 + 标题 30-36px + 2-3 行叙述 + 行动提示/连结。
   - 每段配全幅插画/截图，使用视差差速与淡入。
   - 交错布局：奇数左图右文，偶数反转。

3. **沉浸媒体插段**
   - 插入全幅影片或静态图，加渐变遮罩（下深上浅），并使用慢速滚动率。
   - 加入「播放/静音」或「查看详情」控件。
   - CSS：
     ```css
     .pse-media { @apply relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70; }
     .pse-media::after { content:""; @apply absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/30 to-transparent; }
     ```

4. **黏附式章节导览**
   - 右侧/左侧浮动章节目录，点状导航 + 章节标签。
   - Active 状态：亮度提升、描边加粗、外光晕。

5. **动态分隔与节奏**
   - 章节间加入「淡线 + 小徽章」分隔，保持 64-88px 节奏。
   - 放置 scroll cue（chevron + dot）引导。

6. **响应式降级**
   - Mobile：视差缩减为轻量 translate；图文改上下排；阴影/模糊减半。
   - 图片/影片强制 object-cover，避免裁切失衡。

**配色方案（雾光极光）**
- 主色：#6366f1, #22d3ee, #5eead4, #f472b6
- 背景：#0a0f1f, #0f172a, #111827
- 文本：#e5e7eb, #cbd5e1
- 遮罩/描边：rgba(255,255,255,0.08-0.16)

**关键 CSS 类示例**
```css
.pse-shell { @apply min-h-screen bg-[#0a0f1f] text-slate-100 overflow-hidden; }
.pse-grid { @apply max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 space-y-24; }
.pse-beat { @apply grid grid-cols-1 lg:grid-cols-2 gap-10 items-center; }
.pse-beat[data-side="right"] { @apply lg:[&>*:first-child]:order-2; }
.pse-card { @apply rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl shadow-[0_26px_90px_rgba(0,0,0,0.48)] p-8; }
.pse-dotnav { @apply flex lg:flex-col gap-3; }
.pse-dot { @apply w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(125,211,252,0.18)] transition; }
.pse-dot[data-active="true"] { @apply scale-115 bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.2)]; }
```

**版式与系统**
- 8px 基线；节拍间距 64-88px；段内间距 20-28px。
- H1 46-64px / H2 32-38px / H3 22-26px；字距 0.01-0.04em。
- 视差 offset -8vh~-3vh；动画 0.6-0.9s，stagger 120ms。

**重要提示**
- 章节数控制 3-5，避免疲劳；保持 CTA 清晰。
- 图片加渐变遮罩，确保文字可读；对比度 ≥ 4.5:1。
- 尊重 prefers-reduced-motion，移动端关闭重度视差。
- sticky 导览预留 header 高度 + 24px。
- 影片区提供静音/重播控制，避免自动播放干扰。


---

## English Version (en-US)

Build a “Parallax Story Experience” page in TailwindCSS with layered depth and cinematic beats.

**Core Design**
- Full-bleed parallax hero (3 depth layers), headline 46–64px, primary CTA.
- 3–5 story beats with alternating layouts, full-width visuals, fade/translate/parallax reveals.
- Immersive media block (video/image) with gradient scrim and slower scroll rate; media controls.
- Sticky chapter nav (dot + label) with active glow.
- Scroll cue + light dividers to pace beats; 64–88px spacing.
- Mobile: reduce parallax, stack content, halve blur/shadow, keep object-cover media.

**Colors (Aurora Mist)**
- Primary: #6366f1, #22d3ee, #5eead4, #f472b6
- Base: #0a0f1f, #0f172a, #111827; Text: #e5e7eb, #cbd5e1; Border: rgba(255,255,255,0.08-0.16)

**Key Classes**
```css
.pse-shell { @apply min-h-screen bg-[#0a0f1f] text-slate-100 overflow-hidden; }
.pse-grid { @apply max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 space-y-24; }
.pse-beat { @apply grid grid-cols-1 lg:grid-cols-2 gap-10 items-center; }
.pse-card { @apply rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl shadow-[0_26px_90px_rgba(0,0,0,0.48)] p-8; }
.pse-dot { @apply w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(125,211,252,0.18)] transition; }
```

**Notes**
- 8px grid; beat spacing 64–88px; headings H1 46–64px / H2 32–38px.
- Respect prefers-reduced-motion; keep 4.5:1 contrast; mask media for legibility.

**Parallax Implementation Guide**

**Multi-Layer Parallax System**:
- Divide content into foreground (100% scroll speed), midground (60-80%), background (30-50%) layers
- Use CSS transforms (translateY, translateZ) for smooth parallax motion
- Implement depth-based scaling: distant layers scale slower than close layers
- Apply blur filters to distant layers for realistic depth of field effect
- Maintain minimum 3 distinct layers to create convincing 3D space

**Scroll Position Calculation**:
- Track scroll position using window.scrollY or IntersectionObserver
- Calculate element offset from viewport center for dynamic positioning
- Implement easing functions for smooth interpolation between scroll positions
- Use requestAnimationFrame to sync parallax updates with browser refresh rate
- Cache DOM queries and calculations to minimize performance impact

**Story Pacing Techniques**:
- Structure narrative in distinct chapters or acts with clear visual transitions
- Use viewport-height sections (80-120vh) to control pacing and reveal
- Implement dramatic pauses between story beats using full-viewport imagery
- Apply fade transitions between narrative sections for smooth flow
- Time text reveals to match average reading speed (200-250 words/minute)

**Visual Storytelling Elements**:
- Combine text, imagery, and motion to create cohesive narrative experience
- Use typography changes (size, weight, style) to emphasize emotional beats
- Implement imagery that supports and enhances written narrative
- Add subtle environmental effects (particles, light rays) for atmosphere
- Create visual metaphors through parallax layering and motion

**Performance Optimization**:
- Use CSS Scroll Snap for smooth section transitions without heavy JavaScript
- Implement content virtualization for very long stories (lazy load sections)
- Optimize images: use WebP/AVIF formats, appropriate sizing, lazy loading
- Reduce parallax complexity on mobile: fewer layers, simpler calculations
- Use passive scroll listeners and debouncing to minimize CPU usage
- Pre-calculate parallax values when possible to avoid real-time computation

**Responsive Storytelling**:
- Mobile: Reduce or disable parallax, focus on vertical narrative flow
- Tablet: Moderate parallax effect, maintain core storytelling elements
- Desktop: Full parallax experience with maximum visual impact
- Adjust story pacing based on screen size: faster on mobile, more leisurely on desktop
- Ensure narrative remains coherent across all device sizes

**Accessibility Considerations**:
- Provide linear narrative alternative for users who prefer no parallax
- Respect prefers-reduced-motion: disable parallax, show static story
- Ensure all story content is accessible via keyboard navigation
- Add descriptive alt text for all narrative imagery
- Implement ARIA live regions for dynamically revealed story content
- Provide clear navigation to jump between story chapters
- Ensure text contrast meets WCAG AA standards throughout story

**Browser Compatibility**:
- Test parallax effects across browsers: Chrome, Firefox, Safari, Edge
- Provide fallback for older browsers: show static story without parallax
- Use feature detection for advanced scroll features
- Ensure touch devices handle parallax smoothly
- Test on various frame rates and refresh rates (60Hz, 90Hz, 120Hz displays)
