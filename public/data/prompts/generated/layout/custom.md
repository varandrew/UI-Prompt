# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个 layout 风格页面，包含 Hero、卡片和 CTA。

---

## English Version (en-US)

Create a reusable layout-style page in TailwindCSS that can be repurposed for SaaS, marketing, or docs. Focus on clean grid discipline, strong hierarchy, and balanced whitespace.

**Overall Flow**
- Hero: headline 42–56px, supporting copy 16–18px, primary + secondary CTA. Keep a visual hook (subtle gradient blob or geometric shapes) but ensure text stays legible.
- Feature row: 3–4 cards in a responsive grid; each card needs icon/eyebrow, title, 2–3 lines of body, and a small action (link or button).
- Proof/social row: logo wall or stat blocks (3–6 items) with concise labels and monospace numbers.
- Deeper section: two-column split (text + media). Media can be image/video; reserve aspect-ratio and provide skeleton while loading.
- Final CTA: wide bar with headline + CTA and a short reassurance line (security/trial/guarantee).

**Grid & Spacing**
- Use 12-col on desktop, 6–8 on tablet, single column on mobile. Gutters 20–32px desktop, 16–20px mobile.
- Constrain width to 1100–1280px with generous padding (24–32px). Vertical rhythm: 56–80px between sections, 20–28px inside cards.

**Color & Typography**
- Neutral base (white/near-white) plus one accent hue; keep backgrounds mostly solid. Support a dark variant by inverting neutrals and softening shadows.
- Headings: 32–56px, weight 600–700. Body: 15–16px, line-height 1.6–1.7. CTA buttons 14–16px uppercase or semi-bold.

**Components**
- Buttons: primary filled + secondary ghost. States: hover lighten/darken 6–10%, active with subtle inset. Focus ring 2–3px in accent.
- Cards: radius 12–16px, 1px border with subtle shadow; hover lift 2–4px and shade change. Optional top badge for status.
- Stats: monospace numbers, small label, optional mini sparkline/indicator dot with status color.
- Tabs/filters: pill or segmented control; keep hit area 40–44px height.

**Accessibility & Performance**
- Maintain contrast ≥ 4.5:1. Provide focus styles on CTAs, links, and cards. Respect `prefers-reduced-motion`—reduce lifts/shadows.
- Reserve aspect ratios for media (`aspect-[16/9]`), lazy-load images, and avoid heavy blur/backdrop filters on mobile.

**Copy Tone**
- Clear and confident. Headlines should state value (“Ship layouts faster”), subheads give proof or scope, CTAs are action-first (“Start free trial”, “View docs”).

**Tailwind Tips (reference)**
- Use utility stacks like `max-w-6xl mx-auto px-6 lg:px-12`, `grid gap-6 lg:grid-cols-3`, `rounded-xl border shadow-sm`, `text-balance` for long headings, and `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`.
