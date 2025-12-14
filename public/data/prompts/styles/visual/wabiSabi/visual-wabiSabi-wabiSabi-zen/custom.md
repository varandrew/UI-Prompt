# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「侘寂禅意」，延续 wabiSabi 家族风格，打造安静、克制、带有时间痕迹的沉浸式单页。整体强调留白、不完美之美、自然材质与慢节奏互动，避免任何高饱和、强对比、炫技动效。内容涵盖：禅意 Hero、愿景/故事段落、手作感卡片或图文区、体验流程、静态见证/引语，以及收尾 CTA。

**场景设定与体验目标**
- 面向冥想应用、茶室/香薰品牌、文化工艺课程、静心写作或疗愈类服务。
- 让用户感到“时间放慢、呼吸顺畅、可以停留”，避免促销感与硬性驱动。
- 文案语气：短句、陈述、留白。允许简短日语或汉字印章点缀，但保持可访问性。

**信息架构与版式**
- Hero：大幅留白，顶部或左侧放置 1–2 行标题（字距略大），副标题 1 行，单一 CTA（如“预约体验”），可附一句极短的品牌箴言。背景为柔和米白或浅灰褐，角落可有极淡墨迹/水彩晕染。
- 故事段落：两栏布局，左侧文字讲述理念（无序列表或短段落），右侧为质感图片或手绘插图。图像需加纸纤维或亚麻纹理遮罩，透明度极低。
- 卡片/图文区：2–3 列自适应卡片，内容为课程/空间/器物介绍；卡片边缘轻微不规则或 2–4px 圆角，描边 1px 半透明，内阴影极弱，背景使用米白/灰褐渐层。
- 体验流程：以 3–5 步静态流程呈现，每步使用小圆点或印章式编号；文本保持简短；可用竖向分隔线或淡色网格对齐。
- 引语/见证：单列或双列引语，字号 18–20px，行高 1.7；配小印章或签名式落款；不使用头像框。
- 收尾 CTA：简洁区块，仅一句行动号召和一枚按钮；背景可加轻微纸纹或淡色渐变。

**色彩与材质**
- 主背景：米白/灰褐/浅麻布色（如 #F5F3EF, #E8E5DF）；深色文本用炭灰/深褐（#3A3731）；辅助文本用中灰褐（#7A7772）。
- 强调色仅限一到两种自然色：苔绿（低饱和灰绿）、泥土褐、靛青墨；饱和度低于 30%。强调色用于小印章、分隔线或按钮描边，不大面积铺色。
- 纹理：纸纤维、亚麻编织、轻微刷痕、石纹裂纹，透明度 3–8%；避免重复平铺，可用多层低透明线性/径向渐变混合。
- 阴影与高光：几乎无阴影，或使用极轻的大面积柔光；不使用强烈光斑、玻璃态或霓虹。

**排版与文字**
- 标题：衬线或优雅无衬线（Crimson Text、Noto Serif、Inter），字重 500–700，字距略增，允许小写与大写混排；尽量不超过两行。
- 正文：15–16px，行高 1.65–1.8；段落短、留白多；避免长列表堆叠。
- 标签/徽章：可使用等宽或手写风格小字，配印章/水印效果；保持高对比度以可读。
- 避免全屏大段文字；每个区块保持 3–6 行即可，配足够内边距。

**组件与交互**
- 按钮：扁平或极浅浮起，半透明描边 + 内填充低饱和色；Hover 仅亮度/描边轻微变化，Active 向下 1–2px 或阴影减弱；Focus 提供 2–3px 清晰描边（自然色或炭灰）。
- 卡片：1px 描边 + 12–20px 内距，背景米白渐层，附轻微纸纹；Hover 可微升 2px 或轻微色温变化；移动端保持静态。
- 分隔：使用极细线、虚线、或淡淡网格；可在区块间用不规则撕边/手绘线条，但必须保留可访问的布局。
- 图像：加轻微噪点/纸纹遮罩；控制对比度；必要时用实色覆层提高文字可读性。
- 动效：淡入/渐变 200–320ms；不要弹跳/旋转；尊重 `prefers-reduced-motion`，在低运动模式下关闭抖动/浮动。

**可访问性与性能**
- 文本对比度保持 AA 以上；按钮和链接提供可见的 Focus 状态，切勿仅靠颜色区分。
- 图像应提供 alt 文本；装饰性图像标记为呈现用。避免大体积视频/重滤镜，移动端减少背景纹理层数。
- 布局在移动端改为单列，留白不压缩过度；分段清晰，CTA 保持触控安全区。

**文案语气示例**
- 主标语：静、慢、留白；副标语：让时间落下尘埃。
- 卡片：一器·一茶；一室·一念；一火·一香；短句对仗即可。
- CTA：预约安静时刻 / 进入冥想 / 预定体验。

**Tailwind 实现提示（仅供参考，不必全部使用）**
- 容器：`max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- 背景与纹理可通过 `bg-[radial-gradient(...)]` 叠加；卡片 `rounded-[12px] border border-black/5 shadow-none bg-white/80 backdrop-blur-[1px]`
- 按钮：`inline-flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300/60 bg-white/70 text-neutral-800 hover:bg-white/90 active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500/60`
- 文本：`tracking-[0.08em]` 用于标题，正文 `leading-relaxed text-[15px] text-neutral-700`


---

## English Version (en-US)

Create the “Wabi-Sabi Zen” template in TailwindCSS, conveying slowness, imperfection, and quiet balance. The page should feel hand-touched and timeworn, with generous whitespace, low-saturation earth tones, and restrained motion. Include: a meditative hero, a values/story block, hand-crafted cards or text+image pairs, a gentle process strip, testimonial/quote, and a minimal closing CTA.

**Experience & Intent**
- Suitable for meditation/tea/incense spaces, craft workshops, contemplative writing apps, or calm brand storytelling. Aim for “linger and breathe,” never aggressive sales.
- Voice: short, declarative lines. Small Japanese/Chinese seals are acceptable but keep accessibility and readable Latin text.

**Layout**
- Hero: large whitespace, 1–2-line headline (slightly spaced), one-line subhead, single CTA (“Book a quiet session”), plus a tiny brand aphorism. Background is off-white or warm gray with faint ink/bleed in a corner.
- Story block: two-column—left text explaining the ethos, right image/illustration with paper/linen texture mask at very low opacity.
- Cards/text-image: 2–3 columns responsive. Cards have soft 2–4px radius or subtly irregular edges, 1px translucent stroke, very light inner shadow, background in off-white/taupe gradient. Each card: eyebrow/label, short title, 2–3 lines body, optional micro-action.
- Process: 3–5 calm steps with small dots or stamp numbers; short labels; vertical divider or faint grid for alignment.
- Quote/evidence: single or double column, 18–20px text, line-height ~1.7; include a small seal/signature; no heavy avatars.
- Closing CTA: one line + one button; background with faint paper fiber or gentle gradient.

**Color & Material**
- Base: off-white / taupe / linen (#F5F3EF, #E8E5DF). Text in charcoal/brown (#3A3731) and secondary text in muted gray-brown (#7A7772).
- Accents: one or two natural hues only—mossy gray-green, clay brown, or indigo ink—saturation below ~30%. Use accents sparingly on stamps, dividers, or button strokes.
- Textures: paper fiber, linen weave, soft brush marks, stone hairlines at 3–8% opacity. Avoid tiled patterns; layer multiple low-opacity gradients instead.
- Shadows/highlights: almost none; if used, broad and faint. No glassmorphism, neon, or glossy highlights.

**Typography**
- Headlines: serif or graceful sans (Crimson Text, Noto Serif, Inter), weight 500–700, slightly expanded tracking; keep to 1–2 lines.
- Body: 15–16px, line-height 1.65–1.8; short paragraphs with plenty of breathing room; avoid dense bullets.
- Labels/badges: monospace or handwritten-style small caps; ensure contrast. Use stamp-like marks for section tags if desired.

**Components & Interaction**
- Buttons: flat or barely raised; translucent stroke with low-sat fill. Hover is tiny brightness/stroke change; active nudges 1–2px down or reduces shadow. Focus-visible outline 2–3px in charcoal or natural accent.
- Cards: 1px stroke, 12–20px padding, off-white gradient, subtle paper noise. Hover: micro lift (2px) or temperature shift; keep static on mobile.
- Dividers: hairlines, dashed lines, or faint grids. Hand-drawn lines/ripped edges are OK if layout remains accessible.
- Images: add gentle noise/paper overlay; tune contrast; add solid underlay behind text to ensure readability.
- Motion: fades/opacity shifts 200–320ms; no bounces or spins. Honor `prefers-reduced-motion`; disable float/parallax on touch devices.

**Accessibility & Performance**
- Contrast meets AA; buttons/links have visible focus rings, not color-only states. Provide alt text for imagery; mark decorative art as presentational.
- Mobile: single column with ample padding; do not overcompress whitespace. CTA sized for touch comfort.
- Keep assets light: avoid heavy video/filters; reduce texture layers on mobile.

**Copy Tone Examples**
- Headline: Quiet, Slow, Spacious. Subhead: Let time settle.
- Cards: One vessel, one tea. One room, one thought. One ember, one scent. Keep couplet-like rhythm.
- CTA: Book a quiet moment / Enter meditation / Reserve a session.

**Tailwind Hints (reference only)**
- Container: `max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Background/texture via layered `bg-[radial-gradient(...)]` at low alpha. Cards: `rounded-[12px] border border-black/5 bg-white/80 backdrop-blur-[1px] shadow-none`
- Buttons: `inline-flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300/60 bg-white/70 text-neutral-800 hover:bg-white/90 active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500/60`
- Typography: `tracking-[0.08em]` for headings; body `leading-relaxed text-[15px] text-neutral-700`
