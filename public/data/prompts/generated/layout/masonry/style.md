# Style Prompt

## 中文版本 (zh-CN)

这是 layout 家族的「瀑布流 Masonry」样式说明：强调响应式多列瀑布流、稳定的网格节奏、卡片视觉统一性，以及在内容不规则高度下仍保持可读的层次与间距。需要注明：分栏宽度、最小卡片宽度、列间/行间距、卡片皮肤、阴影/描边规则、图片占位与加载策略，以及移动端的单列/双列回退。

---

## English Version (en-US)

Style guidance for the Layout family’s Masonry variant. Focus on responsive multi-column masonry, stable rhythm despite uneven item heights, consistent card skin, and good readability.

**Grid & Columns**
- Use CSS masonry (`grid` with `grid-auto-rows` + row-span) or JS-free column approach; prefer `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` with 16–24px gutters.
- Column count adapts: 1 col ≤640px, 2 cols 641–960px, 3–4 cols ≥961px depending on viewport and min width.
- Vertical gap 16–24px; horizontal gap 16–24px. Maintain consistent outer padding (24–32px on desktop, 16–20px on mobile).

**Card Skin**
- Surfaces: light neutral background, 1px border at low opacity, soft shadow (`shadow-sm`) or none. Radius 10–14px, padding 16–20px.
- Typography: title 17–20px semi-bold, body 14–15px line-height ~1.65. Optional meta line in monospace for dates/tags.
- Media: reserved aspect ratio (e.g., `aspect-[4/3]`) with `object-cover`; add subtle overlay for text if over imagery. Provide skeletons.
- Badges/tags: compact, single accent color, square or slightly rounded edges.

**Rhythm & Hierarchy**
- Align titles to baseline; ensure consistent spacing between media, title, body, meta, and actions.
- Allow slight variance in card height, but keep internal spacing regular (8/12/16 multiples). Avoid cards with wildly different padding.
- Use section headers above the masonry with clear hierarchy; avoid mixing multiple heading sizes inside the grid.

**Interaction**
- Hover: gentle lift (≤3px) or tint shift; no large transforms. Active: slight press. Focus-visible: 2–3px outline in accent with offset.
- Do not animate masonry reflow heavily; avoid layout thrash. Respect `prefers-reduced-motion`.

**Color & Contrast**
- Neutral base (white/off-white); one accent for links/badges. Text contrast ≥ 4.5:1. Dividers optional; use spacing to separate.
- Avoid busy backgrounds behind cards; keep backdrop calm to highlight content blocks.

**Performance**
- Lazy-load images; reserve height to prevent CLS. Limit heavy shadows/filters. For large feeds, consider virtualized loading or pagination.

**Copy Tone**
- Clear, descriptive, concise. Card titles should communicate the content quickly; actions short (e.g., “Open”, “Save”, “Share”).

**Tailwind Hints (reference)**
- Grid: `grid auto-rows-[8px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 lg:gap-6`
- Card: `rounded-xl border border-slate-200/70 bg-white shadow-sm p-4 lg:p-5`
- Media: `aspect-[4/3] rounded-lg bg-slate-100 overflow-hidden`
- Focus: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500/60`
