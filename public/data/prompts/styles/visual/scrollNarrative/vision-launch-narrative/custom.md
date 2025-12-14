# Custom Prompt - Vision Launch Narrative

## 中文版本 (zh-CN)

请用 TailwindCSS 创建「Vision Launch Narrative」滚动叙事页面，目标是以沉浸式长卷展示公司/产品的愿景、路线图与关键成果。视觉走向为高对比的深色底 + 霓虹感光带 + 柔和玻璃质感，强调时间线的起伏、里程碑的故事性，以及收尾的行动号召。

**核心设计要求**

1. **开场 Hero（愿景陈述 + CTA）**  
   - 标题 48–64px，子标题 18–22px，置中或左对齐；背景使用径向光晕、光斑或光带，传达“点亮未来”的语义。  
   - 在首屏预留“立即行动”CTA 以及“了解愿景”次要入口。  
   - 在移动端降低模糊和大面积光效，保证 60fps。

2. **滚动叙事段落（3–5 章）**  
   - 每章包含：章节徽章、章节标题、1–2 句愿景阐述、关键指标或成果点。  
   - 右侧或下方可以嵌入小型视觉（迷你线框、示意插画或轻量数据卡），避免喧宾夺主。  
   - 段落进场动效：opacity 0→1 + translate-y 12→0，stagger 120ms；尊重 `prefers-reduced-motion`。

3. **时间线与关键里程碑**  
   - 使用垂直或水平时间线，节点包含时间、状态徽章、关键一句话收益。  
   - 当前激活节点放大并增加外圈光晕；非激活节点保持低饱和描边。  
   - Sticky 方式：桌面端时间线轨道可 sticky 到视口顶部 96–112px，移动端切换为顶部进度条。

4. **证据 / 成果插段**  
   - 插入 1 组“证据卡”：客户语录、KPI、奖项/媒体 logo。  
   - 卡片样式：半透明玻璃、1px 细描边、14–18px 内边距；数字用等宽字体，保持对齐。

5. **愿景路线图（短期/中期/长期）**  
   - 三栏或三行对齐，每栏写明阶段目标、关键交付、风险/依赖。  
   - 用状态色标记完成/进行中/计划中；限制色彩数量，优先霓虹蓝/青为强调，少量紫/粉作点缀。

6. **收尾 CTA（行动与信任）**  
   - 强调“预约演示 / 加入测试 / 安排会议”中的 1–2 个行动。  
   - 在 CTA 区补充信任要素：合作伙伴、隐私合规、SLA 说明或数据安全徽章。

7. **可访问性与阅读节奏**  
   - 行高 1.6–1.8，字距轻微正值；文本对比度 ≥ 4.5:1。  
   - 键盘可聚焦的里程碑节点和 CTA，需要可见的描边和状态文本；不要只用颜色区分。  
   - 视差与光效在 `prefers-reduced-motion` 时禁用或大幅减弱。

**配色方向（霓虹愿景深色系）**  
- 背景：#0b1021, #0f172a, #0a0f1c  
- 主强调：霓虹蓝/青 (#38bdf8, #22d3ee)，次强调：紫/粉 (#a855f7, #f472b6)  
- 边框/描边：rgba(255,255,255,0.08–0.16)  
- 文本：#e5e7eb, #cbd5e1；数据/数字可用等宽字体 #d1d5db  
- 阴影/光晕：rgba(56,189,248,0.25) 用于节点或徽章的外圈

**布局节奏与栅格**  
- 8px 基线；章节间距 56–72px，里程碑间距 40–56px。  
- 宽度：内容区 960–1200px；时间线+内容采用 3:7 或 4:6 比例。  
- Sticky 偏移 = 顶部导航高度 + 16–24px。  
- 移动端：改用单列，进度条置顶，卡片与里程碑垂直堆叠。

**文案与语气**  
- 语气积极但务实，避免营销空话；每章都包含“价值/证据/下一步”三要素。  
- 标题偏动词短语：Illuminate, Build, Accelerate, Safeguard, Deliver。  
- 在 CTA 或重点句添加短码/标识（如 V1.2, Alpha, Beta, GA）提升专业感。

**实现建议（无需包含代码，但要可操作）**  
- 使用 Tailwind 的自定义类封装光带、玻璃卡、轨道节点，减少重复。  
- 优先用渐变和半透明描边代替重度模糊；避免大面积玻璃态导致对比不足。  
- 图片/插画可留占位 div，并附上加载 skeleton；保证布局稳定。  
- 交互优先键盘与可达性：Tab 顺序 = Hero CTA → 章节 → 里程碑 → 插段 → 收尾 CTA。


---

## English Version (en-US)

Build a “Vision Launch Narrative” scrollytelling page in TailwindCSS. The goal is to immerse readers in your vision, roadmap, and proof points with a dark, high-contrast canvas, neon light trails, and restrained glass surfaces. Emphasize story flow, milestone clarity, and decisive CTAs at the end.

**Core Design Requirements**

1) Hero (Vision Statement + CTA)  
- Headline 48–64px, subhead 18–22px; use radial glows and light ribbons to convey “igniting the future.”  
- Primary CTA plus a secondary “Learn the vision” link visible above the fold.  
- On mobile, tame blur and large glows to keep 60fps and clear text contrast.

2) Narrative Chapters (3–5 sections)  
- Each section: badge, title, 1–2 lines of vision framing, key proof or outcome.  
- Pair with a small visual (mini wireframe, micro chart, abstract illustration) that does not overpower the copy.  
- Entrance motion: opacity 0→1 and translate-y 12→0 with 120ms stagger; honor `prefers-reduced-motion`.

3) Timeline & Milestones  
- Vertical or horizontal rail with time, status badge, and a one-line value statement.  
- Active node enlarges and gains an outer glow; inactive nodes stay low-saturation outlined.  
- Sticky rail on desktop (offset 96–112px); on mobile, replace with a top progress bar.

4) Evidence / Proof Block  
- Insert a cluster of evidence cards: customer quote, KPI, award/logo.  
- Glass cards with 1px strokes, 14–18px padding; numbers use monospace to align decimals and units.  
- Keep contrasts high; avoid heavy blur that lowers legibility.

5) Vision Roadmap (Near / Mid / Long term)  
- Three aligned columns or rows listing stage goal, key deliveries, risks/dependencies.  
- Use a single accent family (neon blue/cyan) and minimal secondary colors (purple/pink) for highlights.  
- Tag statuses (Done / In Progress / Planned) with concise badges and short tooltips for context.

6) Closing CTA (Action + Trust)  
- Focus on 1–2 actions: “Book Demo”, “Join Beta”, “Schedule a Call.”  
- Reinforce trust with partner logos, compliance/SLA callouts, or data-security badges.  
- Provide a fallback link for reduced-motion users that skips decorative effects.

7) Accessibility & Readability  
- Line-height 1.6–1.8; slight positive letter-spacing; text contrast ≥ 4.5:1.  
- Milestone nodes and CTAs must have visible focus outlines and textual state labels (not color-only).  
- Disable or soften parallax/glow when `prefers-reduced-motion` is set; keep layout stable.  
- Ensure keyboard order: hero CTAs → chapters → timeline → evidence → roadmap → closing CTAs.

**Color Direction (Neon Vision, Dark Canvas)**  
- Background: #0b1021, #0f172a, #0a0f1c.  
- Primary accents: neon blue/cyan (#38bdf8, #22d3ee); secondary highlights: purple/pink (#a855f7, #f472b6).  
- Borders: rgba(255,255,255,0.08–0.16); Text: #e5e7eb, #cbd5e1; Monospace numbers: #d1d5db.  
- Glows: rgba(56,189,248,0.25) for nodes/badges; keep glow radius tight to avoid softness.

**Layout Rhythm & Grid**  
- 8px baseline; section spacing 56–72px; milestone spacing 40–56px.  
- Content width 960–1200px; rail-to-content ratio 3:7 or 4:6.  
- Sticky offset = nav height + 16–24px.  
- Mobile: single column, top progress bar, stacked cards/milestones with generous padding.

**Content & Voice**  
- Keep the tone energetic but grounded. Each section should include “value / proof / next step.”  
- Titles favor verb-led phrases: Illuminate, Build, Accelerate, Safeguard, Deliver.  
- Add short codes or labels on CTAs or milestones (V1.2, Alpha, Beta, GA) to signal rigor.

**Implementation Tips (actionable, code-light)**  
- Encapsulate glow bands, glass cards, and rail nodes as Tailwind component utilities for reuse.  
- Prefer gradients and semi-transparent strokes over heavy blur; avoid glassmorphic slabs that lower contrast.  
- Provide skeleton placeholders for visuals; prevent layout shift by reserving height/width.  
- Validate focus order and ARIA: timeline nodes announce value, state, and time; CTAs include destination hints.

**Do / Don’t**  
- ✅ Keep hierarchy clear: Hero → Chapters → Timeline → Evidence → Roadmap → CTA.  
- ✅ Limit accent palette; rely on light, motion, and structure—not on rainbow colors.  
- ✅ Respect reduced-motion and maintain frame pacing.  
- ❌ No excessive glass blur; ❌ no low-contrast text on glow backgrounds; ❌ no bouncy/elastic easing.  
- ❌ Avoid long, fluffy copy; every block should state “what/why/next.”
