# Style Prompt

## 中文版本 (zh-CN)

这是 layout 家族的通用样式说明：强调栅格、留白、层级清晰、对齐统一、组件皮肤一致。需定义容器宽度、断点、列/间距、标题与正文字体层级、按钮与卡片形态、阴影/描边规则、图像占位与加载策略，以及动效/可访问性要求。

---

## English Version (en-US)

General style guide for the Layout family: grid discipline, whitespace, hierarchy, consistent surfaces, and accessible interactions.

**Grid & Spacing**
- Container widths: ~1100–1280px on desktop; padding 24–32px. Mobile padding 16–20px.
- Columns: 12-col desktop; 6–8 on tablet; 1 on mobile. Gutters 20–32px desktop, 16–20px mobile. Section spacing 56–80px.
- Keep consistent vertical rhythm (8/12/16 multiples). Align edges across sections.

**Surfaces**
- Neutral base (white/off-white/light gray). 1px strokes at low opacity; shadows minimal (`shadow-sm/md`) or none for flatter looks.
- Radius 10–14px for cards/buttons; consistent across components. Ample padding (16–24px) inside cards.

**Typography**
- Headings: 32–56px, weight 600–700. Body: 15–16px, line-height 1.6–1.7. Labels: uppercase/semi-bold or small-caps. Monospace for numbers where alignment matters.
- Limit heading sizes to a clear scale (e.g., H1/H2/H3) and keep line lengths ~60–75 characters.

**Components**
- Buttons: primary filled, secondary ghost/outline; radius 8–12px; hover tint shift; active slight press; focus-visible outline 2–3px in accent.
- Cards: `rounded-xl border border-slate-200/70 bg-white shadow-sm` (or no shadow). Optional badge/eyebrow; consistent spacing between media/title/body/actions.
- Lists/tables: `divide-y` rows, clear headers, monospace numbers for alignment; row height 44–56px.
- Chips/badges: compact, single accent; avoid heavy glow.

**Color & Accent**
- Use 1–2 accent hues with a neutral foundation. Keep gradients subtle and contrast-safe. Status colors follow standard success/info/warn/error.
- Ensure text contrast ≥ 4.5:1; use overlays behind text on images.

**Motion**
- Utility-focused: fade/translate 120–200ms ease-out; no bounce. Hover lifts ≤4px. Respect `prefers-reduced-motion`; disable heavy transforms on touch.

**Imagery**
- Reserve aspect ratios to prevent layout shift. Use `object-cover`, lazy-load images, and provide skeletons. Add soft overlays for text readability.

**Accessibility**
- Visible focus states on all interactive elements; do not rely on color alone. Tap targets ≥44px. Provide alt text, aria labels for icons, and keyboard-friendly ordering.

**Copy Tone**
- Clear and concise; lead with value. CTAs action-first (“Get started”, “See pricing”, “View demo”).

**Tailwind Hints (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24`
- Grids: `grid gap-6 lg:grid-cols-3` or 12-col with `col-span` utilities.
- Surfaces: `rounded-xl border bg-white shadow-sm`, `divide-y divide-slate-200` for lists.
- Buttons: `rounded-lg px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
