# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「侘寂禅意·网站版」，延续 wabiSabi 家族风格，面向完整官网/长页。核心体验是：慢、静、留白、手作痕迹、低饱和自然色，拒绝霓虹与浮夸。页面需包含：简洁导航、留白 Hero、品牌/理念叙事、产品/空间/器物卡片、体验流程、引语/见证、FAQ、收尾 CTA 与脚注。互动与动效克制，文本短句，保留时间与不完美的气息。

**场景与目标**
- 适用于茶室、香薰、冥想、手工器物、文化空间的官网或着陆页。访客应感到可停留、可呼吸，而非被推动销售。
- 文案语气：平静、简短、陈述；允许小印章/汉字点缀，但保持可读和可访问。

**信息架构**
- 导航：透明或浅色背景，滚动后加极细底线；链接精简（故事/空间/体验/预约），仅一枚 CTA。
- Hero：1–2 行标题 + 一句副文案 + 单一 CTA；背景米白或灰褐，角落轻微墨迹/水彩晕染；可放一张小器物/空间静态照，附纸纤维遮罩。
- 品牌故事：左右双栏，文字讲述理念，图像加低透明度纸/麻纹理；字距略大，行距充足。
- 产品/空间卡片：2–3 列响应式，卡片 1px 半透明描边、2–4px 圆角或轻微不规则边；背景米白渐层，附淡噪点。信息包含名称、极短描述、材质/香型/容量等要点，可附微型链接。
- 体验流程：3–5 步，使用小圆点/印章编号；垂直节奏宽松，辅以淡虚线或网格。
- 引语/见证：单/双列，引语 18–20px，行高 1.7；署名用印章或签名感小字；不必头像。
- FAQ：手风琴，描边极轻、圆角微小；展开/收起以淡入淡出 180–240ms，尊重 `prefers-reduced-motion`。
- 收尾 CTA：一句行动号召 + 按钮；背景加极低透明纸纹，可附信任说明（隐私、手工、可持续）。
- Footer：文本分栏，社交/联系、版权、条款；细线分隔，留白充足。

**色彩与材质**
- 主色：米白/灰褐/麻布（#F5F3EF, #E8E5DF）；文本：炭灰/深褐 #3A3731；次文本：中灰褐 #7A7772。
- 强调：苔绿色、黏土褐、靛青墨，饱和度 < 30%，仅用于印章、小标签、按钮描边。
- 纹理：纸纤维、亚麻、刷痕、石纹裂纹，透明度 3–8%；避免重复平铺，可多层低透明渐变叠加。
- 阴影：几乎无，或极轻柔光；禁用霓虹、玻璃态、高亮镜面。

**排版**
- 标题：衬线或优雅无衬线，字重 500–700，字距微增，控制行长/行数。
- 正文：15–16px，行高 1.65–1.8，段落短；避免密集列表。
- 标签/徽章：等宽或手写风小字，保持对比；印章/水印可作为分区标记。

**组件与交互**
- 按钮：低饱和填充 + 细描边；Hover 亮度微调，Active 轻微下沉 1–2px；Focus 2–3px 清晰描边（炭灰/自然色）。
- 卡片：1px 描边、12–20px 内距，背景米白渐层附纸纹；Hover 微升 2px 或轻微色温变化；移动端保持静态。
- 手风琴：平滑但克制的展开；在触控和低运动模式下降级为静态列表。
- 图像：加轻噪/纸纹遮罩，必要时叠实色提高文字可读性；提供 alt 文本。
- 动效：淡入/亮度/不透明度过渡 200–320ms；无弹跳、无旋转；尊重 `prefers-reduced-motion`。

**可访问性与性能**
- 对比度 AA；焦点样式可见；不要仅靠颜色传达状态。触控目标足够大。移动端减少纹理层数和重媒体。
- 关闭大面积滤镜/视频；保持布局稳定（预留媒体比例）。为装饰性图像加 `aria-hidden`。

**文案示例**
- 标题：安静的器物，缓慢的时间；副文：让呼吸落定，让心绪归位。
- 卡片：一器一茶；一室一念；一香一息。
- CTA：预约静心 / 预定席位 / 进入空间。

**Tailwind 提示（参考）**
- 容器：`max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24`；导航 `backdrop-blur-[2px] border-b border-black/5`
- 卡片：`rounded-[10px] border border-black/6 bg-white/80 backdrop-blur-[1px] shadow-none transition hover:-translate-y-[2px]`
- 按钮：`inline-flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300/60 bg-white/70 text-neutral-800 hover:bg-white/90 active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500/60`
- 文字：标题 `tracking-[0.08em]`，正文 `text-[15px] leading-relaxed text-neutral-700`

---

## English Version (en-US)

Create the “Wabi-Sabi Zen — Website” template in TailwindCSS for a full landing/home page. Emphasize slowness, quiet, whitespace, handmade traces, and low-saturation naturals; avoid neon, glass, and flashy effects. Include: simple nav, quiet hero, brand/story, product/space/object cards, calm process, quotes/testimonials, FAQ, final CTA, and footer. Interactions stay restrained; copy is short and contemplative.

**Experience Goals**
- For tea/incense/meditation spaces, craft brands, or calm services. Visitors should feel invited to linger, not pushed.
- Tone: brief, declarative; small seal/kanji accents allowed if text remains readable and accessible.

**Information Architecture**
- Nav: light/transparent, thin bottom rule on scroll; one primary CTA. Links minimal (Story/Space/Experience/Book).
- Hero: 1–2-line headline, one-line subhead, single CTA; off-white/taupe background with faint ink/bleed; optional small still-life photo with paper texture mask.
- Story: two-column text + image; apply subtle paper/linen overlay on imagery.
- Product/space cards: 2–3 cols responsive; 1px translucent stroke, 2–4px radius or slight irregular edge, off-white gradient with paper noise. Include name, tiny description, key specs (material/scent/size), optional tiny link.
- Process: 3–5 steps with dots or stamped numbers; roomy spacing; faint grid/dashed lines for alignment.
- Quotes: single/double column, 18–20px line-height ~1.7; seal/signature attribution; no heavy avatars.
- FAQ: accordion with very light strokes and small radius; 180–240ms fade/height transitions; honor `prefers-reduced-motion`.
- Final CTA: one line + one button; faint paper texture; add trust note (privacy, handcrafted, sustainable).
- Footer: text columns, contact/social, copyright/terms; thin dividers and generous padding.

**Color & Material**
- Base: off-white/taupe/linen (#F5F3EF, #E8E5DF). Text: charcoal/brown #3A3731; secondary #7A7772.
- Accent: mossy gray-green, clay brown, or indigo ink under ~30% saturation; use for stamps, tiny labels, strokes.
- Texture: paper fibers, linen, soft brush marks, stone hairlines at 3–8% opacity; avoid tiling by layering low-alpha gradients.
- Shadows: almost none; broad faint glow only when needed. No glossy/neon/glass.

**Typography**
- Headings serif or graceful sans, weight 500–700, slightly expanded tracking; short lines.
- Body 15–16px, line-height 1.65–1.8; short paragraphs; avoid dense bullet stacks.
- Labels/badges: monospace or small handwritten flavor; maintain contrast and readability.

**Components & Interaction**
- Buttons: low-sat fill + fine stroke; hover slight brightness change; active gentle 1–2px press; focus-visible outline 2–3px in charcoal or natural hue.
- Cards: 1px stroke, 12–20px padding, off-white gradient with paper noise; hover lift 2px or subtle warm/cool shift; static on mobile.
- Accordions: smooth but restrained transitions; disable flourish on touch/low-motion.
- Images: mild noise/paper overlay; add solid underlay for text; always provide alt text.
- Motion: fades/opacity shifts 200–320ms; no bounce/spin; respect `prefers-reduced-motion`.

**Accessibility & Performance**
- AA contrast; clear focus states; avoid color-only signals. Touch targets generous. Reduce texture layers and heavy media on mobile.
- Keep layout stable with reserved aspect ratios; mark decorative art as presentational.

**Copy Tone Examples**
- Headline: Quiet objects, slower time. Subhead: Let breath settle; let thoughts rest.
- Cards: One vessel, one tea. One room, one thought. One ember, one scent.
- CTA: Book a quiet moment / Reserve a seat / Enter the space.

**Tailwind Tips (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24`; nav with `backdrop-blur-[2px] border-b border-black/5`.
- Cards: `rounded-[10px] border border-black/6 bg-white/80 backdrop-blur-[1px] shadow-none transition hover:-translate-y-[2px]`.
- Buttons: `inline-flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300/60 bg-white/70 text-neutral-800 hover:bg-white/90 active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500/60`.
- Type: headings use `tracking-[0.08em]`; body `text-[15px] leading-relaxed text-neutral-700`.

