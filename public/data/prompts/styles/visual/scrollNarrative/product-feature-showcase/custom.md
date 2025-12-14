# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「产品功能长卷轴展示」页，强调「每一段一个价值点」的垂直叙事，并保持 scrollNarrative 的视差与节奏。

**核心设计要求**

1. **双栏 Hero（产品模型 + 叙事）**
   - 左：标题 44-60px、子标 18-22px、主/次 CTA；右：产品模型或 UI 截图。
   - 背景视差层：两层网格/渐变，速度 0.4x / 0.8x。
   - CSS 范例：
     ```css
     .pf-hero { @apply relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[78vh]; }
     .pf-hero::before { content:""; @apply absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-sky-900/40 to-slate-950; filter: blur(24px); transform: translateY(-4vh); }
     .pf-hero .cta-primary { @apply px-6 py-3 rounded-full bg-indigo-500 text-white shadow-[0_16px_60px_rgba(79,70,229,0.4)]; }
     .pf-hero .cta-secondary { @apply px-5 py-2 rounded-full border border-white/30 text-white/90 hover:bg-white/10; }
     ```

2. **功能段落节奏（3-4 组）**
   - 每组：序号徽章 + 标题 30-36px + 2-3 行收益叙述 + 深链。
   - 右侧配对截图/插画，使用玻璃卡 + 10-16px 内距。
   - 滚动淡入：`translate-y-8 → 0`、`opacity 0 → 1`，duration 600ms。
   - CSS：
     ```css
     .pf-step { @apply grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-center; }
     .pf-badge { @apply inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-white/8 border border-white/15 text-sky-100; }
     .pf-shot { @apply relative rounded-2xl overflow-hidden border border-white/8 bg-slate-900/60 shadow-[0_24px_90px_rgba(0,0,0,0.45)]; }
     ```

3. **黏附式进度导览**
   - 放置于右上/左侧：垂直进度条 + 圆点；当前段高亮。
   - 滚动更新 `data-active="true"`，增加 1.1x 缩放与外光晕。
   - CSS：
     ```css
     .pf-sticky { position: sticky; top: 96px; }
     .pf-rail { @apply relative w-[3px] h-full bg-white/10 rounded-full; }
     .pf-dot { @apply w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(125,211,252,0.18)] transition; }
     .pf-dot[data-active="true"] { @apply scale-110 bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.18)]; }
     ```

4. **社会证明与数据**
   - 一行 Logo 列或客户语录；保持 24-32px 行高，边界留白 24px。
   - 可插入「3-4 组 KPI」迷你卡片，使用霓虹描边。

5. **结尾 CTA 区**
   - 加强邀约（试用 / 联系销售），背景柔和渐层 + 玻璃卡。
   - CTA 提升：`translateY(-2px) + shadow` on hover。

6. **响应式降级**
   - 手机端：视差减弱，图文上下排；阴影与模糊减半。
   - CTA 改为全宽按钮，保留可点击区域 44px 高。

**配色方案（科技霓虹）**

主色调：
- 靛蓝/电光：#6366f1, #4f46e5, #1d4ed8
- 青蓝发光：#0ea5e9, #22d3ee
- 品牌点缀：#f472b6, #f59e0b

中性色/描边：
- 背景：#0b1224, #0f172a, #111827
- 文本：#e5e7eb, #cbd5e1
- 分隔：rgba(255,255,255,0.08-0.16)

**关键 CSS 类示例**

```css
.pf-shell { @apply min-h-screen bg-[#0b1224] text-slate-100 overflow-hidden; }
.pf-grid { @apply max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 space-y-20; }
.pf-card { @apply rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.45)] p-8; }
.pf-cta-ghost { @apply inline-flex items-center gap-2 text-sky-100 border border-sky-200/40 rounded-full px-4 py-2 hover:border-sky-200/70 hover:bg-sky-200/10 transition; }
.pf-divider { @apply h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-10; }
```

**版式与系统**
- 基线 8px；段落间距 56-80px；内文 16-18px 行高 1.6-1.75。
- 标题：H1 48-60px / H2 32-38px / H3 22-26px；字距 0.01-0.04em。
- 视差 offset：-6vh ~ -3vh；动画时长 0.6-0.8s。

**重要提示**
- 控制最多 4 段功能，避免信息疲劳。
- CTA 颜色对比 >= 4.5:1，并有 focus-visible 外框。
- sticky 区块需考虑 header 高度，预留 top 间距。
- 移动端关闭重度阴影与过度模糊，保留 60fps 滚动。
- 图片加上渐变遮罩以确保文字可读。


---

## English Version (en-US)

Build a “Product Feature Showcase” scroll page in TailwindCSS with storytelling beats and light parallax.

**Core Design Requirements**
1. **Two-Column Hero** with copy + CTA on the left, product mockup on the right; layered parallax background (0.4x/0.8x).
2. **Feature Beats (3–4)** each with badge, 30–36px title, 2–3-line benefit, deep link, and paired mockup card; fade/translate in 600ms.
3. **Sticky Progress** rail with dots, active highlight, and hover/focus states.
4. **Social Proof & Metrics** row of logos or quotes; optional KPI mini-cards with neon edge.
5. **Closing CTA** with gradient + glass card; hover lift.
6. **Responsive**: stack on mobile, reduce blur/shadow, full-width CTAs, disable heavy parallax.

**Color System (Tech Neon)**
- Primary: #6366f1, #4f46e5, #1d4ed8, #0ea5e9, #22d3ee, #f472b6
- Base: #0b1224, #0f172a, #111827; Text: #e5e7eb, #cbd5e1; Border: rgba(255,255,255,0.08-0.16)

**Key CSS Classes**
```css
.pf-shell { @apply min-h-screen bg-[#0b1224] text-slate-100 overflow-hidden; }
.pf-grid { @apply max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 space-y-20; }
.pf-card { @apply rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.45)] p-8; }
.pf-cta-ghost { @apply inline-flex items-center gap-2 text-sky-100 border border-sky-200/40 rounded-full px-4 py-2 hover:border-sky-200/70 hover:bg-sky-200/10 transition; }
.pf-divider { @apply h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-10; }
```

**Layout & Notes**
- 8px grid; 56–80px beat spacing; body 16–18px, line-height 1.6–1.75.
- Titles: H1 48–60px / H2 32–38px / H3 22–26px; letter-spacing 0.01–0.04em.
- Keep CTA hierarchy clear; respect prefers-reduced-motion; mask images for readability.

**Advanced Implementation Details**

**Performance Optimization Strategies**:
- Use CSS containment (`contain: layout style paint`) on independent sections to improve rendering performance
- Implement lazy loading for images and heavy content below the fold using Intersection Observer API
- Utilize `will-change` property judiciously on elements that will animate (remove after animation completes)
- Minimize layout thrashing by batching DOM reads and writes
- Use requestAnimationFrame for smooth JavaScript animations at 60fps
- Consider using CSS custom properties for dynamic values instead of inline styles

**Responsive Design Patterns**:
- Mobile (< 640px): Stack all elements vertically, simplify animations, reduce visual effects by 40-50%
- Tablet (640-1024px): Use 2-column layouts where appropriate, maintain moderate visual effects
- Desktop (≥ 1024px): Full visual experience with all effects, animations, and interactive elements
- Implement fluid typography using clamp() for seamless scaling across breakpoints
- Test on actual devices, not just browser resize, to catch touch and performance issues

**Accessibility Standards**:
- Ensure WCAG 2.1 Level AA compliance minimum (4.5:1 contrast for text, 3:1 for UI components)
- Implement keyboard navigation for all interactive elements with visible focus indicators (3px+ outline)
- Provide skip links to main content for screen reader users
- Add appropriate ARIA labels, roles, and states for complex interactive components
- Respect user preferences: prefers-reduced-motion, prefers-color-scheme, prefers-contrast
- Test with actual assistive technologies (NVDA, JAWS, VoiceOver) not just automated tools
- Ensure all images have descriptive alt text and decorative images use alt=""

**Browser Compatibility & Fallbacks**:
- Test across Chrome, Firefox, Safari, and Edge for visual consistency
- Provide fallback styles for CSS features with limited support (backdrop-filter, scroll-timeline)
- Use feature detection (@supports) to progressively enhance
- Implement polyfills for critical features in older browsers if necessary
- Test on both desktop and mobile browsers as rendering may differ
- Ensure graceful degradation: site remains functional even without advanced CSS features

**Code Quality & Maintainability**:
- Use CSS custom properties (variables) for consistent theming and easy maintenance
- Organize styles with clear naming conventions (BEM, utility-first, or custom methodology)
- Comment complex CSS techniques for future maintainability
- Extract repeated patterns into reusable utility classes
- Keep specificity low to avoid cascading issues
- Validate HTML and CSS to catch errors early
