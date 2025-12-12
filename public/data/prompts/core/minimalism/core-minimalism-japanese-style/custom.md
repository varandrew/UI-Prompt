# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「日式极简」页面，延续 minimalism 家族但带有和风质感：留白、榻榻米/木质色、和纸质感、细线与清晰网格。包含 Hero、产品/案例卡片、故事/理念区、服务或功能列表、CTA 与简洁页脚，保持静谧、克制与可访问性。

---

## English Version (en-US)

Design a “Japanese Minimalism” page in TailwindCSS—calm, restrained, and balanced. Emphasize white space, pale wood tones, soft neutrals, and precise grids. Avoid loud gradients or heavy shadows; rely on line weight, spacing, and subtle texture (paper/linen) to establish hierarchy. Include a hero, product/portfolio highlights, philosophy/story section, services/features list, testimonials or quotes (optional), and clear CTAs.

Visual language
- Palette: white/off-white (#F7F4EE), warm light wood (#D9C8A0), soft gray (#D7D5D1), charcoal text (#252525), and a restrained accent like muted indigo or moss. Keep accent usage minimal (links, small dividers).
- Surfaces: matte; add faint paper or linen noise. Use thin strokes (1px) and light borders for separation. Shadows should be nearly imperceptible (`shadow-sm`).
- Shapes: gentle radii (8–12px) or squared edges; avoid sharp angles. Keep compositions aligned and unintrusive.
- Imagery: neutral or desaturated photos of interiors, craft, or product stills; ensure consistent aspect ratios.

Layout blueprint
- Navigation: understated bar with wordmark, simple links (Story, Collection, Services, Contact), and a small ghost button. Focus ring must be visible.
- Hero: generous white space, headline 36–48px with soft subhead (max 2 lines), and dual CTAs (primary filled accent or charcoal; secondary outline). Include a restrained image (desk vignette, ceramic piece) aligned to the grid.
- Highlights grid: 6–9 cards showing products/cases with title, short description, tags, and muted imagery. Keep card padding consistent; hover adds a fine outline or slight lift.
- Philosophy/values: two-column text describing “Less but better,” material choices, or craft process. Add a small pull quote or vertical rule for emphasis.
- Services/features list: 3–4 concise points (Design, Curation, Delivery, Maintenance). Use thin dividers and micro-labels.
- Process strip (optional): 4-step row (Consult → Plan → Craft → Deliver) with tiny line icons and 1–2 sentence descriptions.
- Testimonials or quotes: single-line quotes with name/role; keep italics minimal. Place within a bordered box or over a light paper texture.
- CTA/footer: quiet closing with primary action (“Book a consult,” “View collection”) and secondary (“Download brochure”). Include contact info and social links as simple text or thin-line icons.

Typography
- Type: elegant humanist sans or clean serif. Headings 600–700; body 16–17px at 1.6–1.7 line height. Use small caps/letter-spaced labels sparingly.
- Line lengths 60–72ch. Use `text-balance` for long headings. Keep uppercase to a minimum; prefer sentence case.
- Numbers or metadata can use tabular lining for alignment (pricing, sizes).

Components & states
- Buttons: rounded or softly squared; primary filled accent or charcoal; secondary outline. Hover: slight tint and minimal lift. Focus-visible outline 2–3px in accent/charcoal.
- Cards: `rounded-xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm` with muted images. Hover `-translate-y-1` and border darkening. Keep text compact.
- Chips/tags: small outline pills for materials or categories; use muted accent text.
- Inputs/forms: `border border-neutral-300 rounded-lg bg-white px-4 py-3 shadow-inner/none` with clear focus ring; labels above inputs.
- Dividers: thin lines in low-opacity charcoal; optional vertical rules to structure sections.

Motion
- Calm transitions (140–200ms ease-out) with small translate/opacity. No bounce or overshoot. Respect `prefers-reduced-motion`.

Accessibility
- Contrast: ensure body text and buttons meet 4.5:1. If using light backgrounds, darken text appropriately. Provide alt text, aria-labels for icon-only buttons, logical tab order, and visible focus rings.
- Avoid color-only signaling; use text/icons for states.
- Hit targets ≥ 44px.

Responsive behavior
- Mobile: stack hero and grid; keep gutters 16–20px. Use full-width CTAs. Allow horizontal scroll for tags if needed with clear scroll hints.
- Tablet: 2-column grids; maintain generous spacing; hero image may sit above or beside text depending on space.
- Desktop: `max-w-6xl/7xl` container with 24–32px gutters; lean into asymmetric but balanced compositions anchored to the grid.

Content guidance
- Voice: calm, considerate, sincere. Emphasize material honesty, craftsmanship, and longevity.
- Microcopy for CTAs: “Book a consult,” “View collection,” “Download brochure,” “See process.”
- For products/cases, include concise metadata (Material, Finish, Lead time, Price) and short outcome statements.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Hero: `grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`
- Cards: `rounded-xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1`
- Buttons: `inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Labels: `text-xs uppercase tracking-[0.16em] text-neutral-500`

Deliver a Japanese-inspired minimalist page that feels serene and intentional—letting spacing, material cues, and typography carry the experience.
