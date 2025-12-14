# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「产品发布时间轴」滚动叙事页，将里程碑、数据与行动 CTA 串成一条可视化故事线。

**核心设计要求**

1. **星轨 Hero**
   - 标题 44-60px，子标 18-22px，主 CTA；背景带星轨/行星轨迹视差。
   - CSS：
     ```css
     .plt-hero { @apply relative min-h-[78vh] flex flex-col justify-center gap-6; }
     .plt-hero::before { content:""; @apply absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(94,234,212,0.25),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(99,102,241,0.28),transparent_40%)]; filter: blur(38px); transform: translateY(-5vh); }
     .plt-cta { @apply inline-flex items-center gap-2 rounded-full bg-indigo-500 text-white px-6 py-3 shadow-[0_16px_60px_rgba(79,70,229,0.35)]; }
     ```

2. **垂直时间轴 (Sticky)**
   - 左侧轨道 + 节点；右侧为段落卡。sticky top 88-104px。
   - 节点含「版本/日期 + 状态徽章」，活动节点放大并加外晕。
   - CSS：
     ```css
     .plt-rail { @apply relative w-[3px] bg-white/12 rounded-full; }
     .plt-node { @apply relative flex items-center gap-3; }
     .plt-dot { @apply w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(125,211,252,0.18)] transition; }
     .plt-dot[data-active="true"] { @apply scale-125 bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.22)]; }
     ```

3. **里程碑段落（4-6 组）**
   - 结构：章节徽章 + 标题 28-34px + 日期/版本号 + 2-3 行描述 + 次 CTA。
   - 右侧附缩略图/迷你图表；卡片半透明 + 16-20px 内距。
   - 进场动效：`opacity 0→1`、`translate-y-10→0`、stagger 120ms。

4. **反馈 / 成功指标插段**
   - 插入一段「Beta 反馈」或「KPI」：3-4 个数字卡或引用。
   - 卡片：雾面玻璃 + 14px 内距，边框 1px 白色/14。

5. **收尾 CTA**
   - 文字聚焦「预约 Demo / 加入候补」；背景使用柔和渐层 + 玻璃卡。
   - CTA hover：亮度 +3%，阴影加深。

6. **响应式与可及性**
   - 手机端：关闭重度视差，左侧轨道改为顶部水平小进度。
   - 行高 1.6-1.8，字距 0.01-0.04em；对比度 ≥ 4.5:1。

**配色方案（星轨蓝紫）**

主色调：
- 靛蓝：#6366f1, #4f46e5
- 青蓝：#0ea5e9, #22d3ee
- 星轨点缀：#a855f7, #f472b6

中性色：
- 背景：#0c1224, #0f172a, #111827
- 文本：#e5e7eb, #cbd5e1
- 轨道/描边：rgba(255,255,255,0.08-0.16)

**关键 CSS 类示例**

```css
.plt-shell { @apply min-h-screen bg-[#0c1224] text-slate-100 overflow-hidden; }
.plt-grid { @apply max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24; }
.plt-timeline { @apply grid grid-cols-[auto_1fr] gap-10 lg:gap-14; }
.plt-card { @apply rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl shadow-[0_22px_80px_rgba(0,0,0,0.42)] p-6 lg:p-8 transition; }
.plt-card:hover { @apply translate-y-[-2px] shadow-[0_28px_90px_rgba(0,0,0,0.5)]; }
.plt-badge { @apply inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-sky-100 bg-white/8 border border-white/14 rounded-full px-3 py-1; }
```

**版式与节奏**
- 8px 基线；里程碑间距 48-68px；卡片内距 16-20px。
- 标题层级：H1 48-60px / H2 32-38px / H3 22-26px。
- sticky 偏移：header 高度 + 20-24px。

**重要提示**
- 里程碑数量控制在 4-6，避免滚动疲劳。
- 行动 CTA 始终可见（Hero 与结尾各一组）。
- 视差位移 -8vh~-3vh；尊重 prefers-reduced-motion。
- Mobile 改用简化进度指示，保持 60fps。

---

## English Version (en-US)

Create a “Product Launch Timeline” scrollytelling page in TailwindCSS with star-trail parallax and sticky milestones.

**Core Design**
- Hero with launch theme, parallax star trails, headline 44–60px, primary CTA.
- Sticky vertical rail + nodes on the left; milestone cards on the right; active node glows.
- 4–6 milestones: title, date/version, 2–3-line body, secondary CTA, small visual/chart.
- Insert a “Feedback/Metrics” block with KPI mini-cards.
- Closing CTA on gradient + glass card.
- Mobile: disable heavy parallax; convert rail to top mini-progress; stack content.

**Colors (Star Trail Indigo)**
- Primary: #6366f1, #4f46e5, #0ea5e9, #22d3ee, #a855f7, #f472b6
- Base: #0c1224, #0f172a, #111827; Text: #e5e7eb, #cbd5e1; Border: rgba(255,255,255,0.08-0.16)

**Key Classes**
```css
.plt-shell { @apply min-h-screen bg-[#0c1224] text-slate-100 overflow-hidden; }
.plt-grid { @apply max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24; }
.plt-timeline { @apply grid grid-cols-[auto_1fr] gap-10 lg:gap-14; }
.plt-card { @apply rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl shadow-[0_22px_80px_rgba(0,0,0,0.42)] p-6 lg:p-8 transition; }
.plt-badge { @apply inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-sky-100 bg-white/8 border border-white/14 rounded-full px-3 py-1; }
```

**Notes**
- 8px grid; 48–68px between milestones; H2 32–38px.
- Keep CTA hierarchy clear; ensure focus-visible outlines and 4.5:1 contrast.
- Respect prefers-reduced-motion; reduce blur/shadow on mobile.

---

**Implementation Deep Dive**

**Scroll-Triggered Animation Techniques**:
- Use Intersection Observer API to detect when elements enter viewport and trigger animations
- Implement scroll position tracking to calculate progress and update animations accordingly
- Apply CSS custom properties updated via JavaScript for smooth interpolation
- Use requestAnimationFrame for smooth scroll-linked animations at 60fps
- Consider using CSS Scroll-Driven Animations (animation-timeline: scroll()) for native performance

**Timeline Visualization Strategies**:
- Create vertical timeline with absolute positioned markers and connecting lines
- Implement progress indicators showing user's position in the timeline
- Use sticky positioning for timeline navigation to maintain context during scroll
- Add milestone markers with icons, dates, and brief descriptions
- Highlight current section in timeline as user scrolls through content

**Content Pacing & Rhythm**:
- Space timeline sections with consistent vertical rhythm (100vh or 80vh sections)
- Use viewport-based units to ensure content fits on screen appropriately
- Implement gradual reveal of information to maintain engagement
- Balance text-heavy sections with visual breaks (images, illustrations, quotes)
- Consider reading speed when timing animations (average 250 words per minute)

**Visual Hierarchy in Motion**:
- Establish clear entry/exit patterns: elements fade in from bottom, exit to top
- Use Z-axis layering (translateZ) to create depth as user scrolls
- Implement parallax at different speeds for background, midground, foreground
- Scale elements gradually as they approach center of viewport
- Apply blur or opacity changes to de-emphasize exiting content

**Performance Optimization**:
- Debounce or throttle scroll event handlers to reduce CPU usage (100-200ms intervals)
- Use passive event listeners for touch events to improve scrolling performance
- Implement content lazy loading: load images and heavy content just before they enter viewport
- Minimize DOM manipulation during scroll: pre-calculate positions when possible
- Use CSS transforms and opacity for animations (GPU accelerated) instead of layout properties
- Consider virtual scrolling for very long timelines with hundreds of items

**Mobile & Touch Considerations**:
- Simplify or disable complex scroll animations on mobile for better performance
- Ensure touch scrolling remains smooth with minimal JavaScript interference
- Use smaller viewport sections (70-80vh) on mobile for better content visibility
- Provide swipe gestures for timeline navigation as alternative to scrolling
- Test on actual mobile devices with various screen sizes and performance levels
- Reduce parallax intensity on mobile to avoid motion sickness

**Accessibility & UX**:
- Provide keyboard shortcuts to jump between timeline sections
- Ensure timeline is navigable without scrolling (add previous/next buttons)
- Respect prefers-reduced-motion by providing static timeline alternative
- Add ARIA labels to timeline markers and progress indicators
- Ensure focus management works correctly as user navigates timeline
- Provide skip links to allow users to bypass timeline if desired

