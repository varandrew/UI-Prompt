# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「扁平化电商落地页」，延续 flatDesign 家族风格，强调清晰商品呈现、分段叙事、快速下单。保持纯色块、细描边、极简阴影或无阴影，避免玻璃态/霓虹/重滤镜。包含：留白 Hero（核心卖点+主 CTA）、精选商品网格、优势/保障条目、评价/社交证明、FAQ、收尾 CTA。

---

## English Version (en-US)

Design a Flat Design Ecommerce Landing in TailwindCSS: solid color blocks, crisp grid, minimal or no shadow, no skeuomorphism or glass. Goal: instant clarity, frictionless scanning, and fast action. Include: quiet hero with primary CTA, featured products grid, benefits/assurances, social proof, FAQ, and a closing CTA.

**Layout & Flow**
- Hero: headline 40–56px with a concise value statement, subhead 16–18px, primary CTA (“Buy now”/“View collection”) plus a subtle secondary link. Add a single product hero image or abstract shape on solid/tinted background; ensure text contrast.
- Featured products: grid of 4–8 items. Each card: image with reserved aspect ratio, name, price (monospace), 1–2 line descriptor, primary action (Add/Buy) and optional secondary (Details). Keep consistent padding/gutters.
- Benefits/assurances: 3–4 inline points (shipping, warranty, returns, support). Use icons only with text; 1px dividers or soft color blocks to group.
- Social proof/reviews: short quotes or rating summary; muted avatar or initials; avoid heavy decoration.
- FAQ: 4–6 entries in accordion; light borders, gentle motion (fade/height 160–200ms), respect `prefers-reduced-motion`.
- Closing CTA: reiterate offer; single button; modest height.

**Color & Surface**
- Base: white/off-white or very light neutral. Accents: 1–2 hues only (e.g., blue/teal/amber). Use solid fills; gradients only for small emphasis.
- Borders: 1px at 8–14% opacity. Shadows: `shadow-sm` or none. Rely on spacing and contrast instead of depth.
- State colors: hover tone shift 6–10%; active press 1–2px; focus-visible outline 2–3px in accent.

**Typography & Content**
- Headings weight 600–800; body 15–16px, line-height 1.6–1.7. Product prices in monospace with aligned decimals. Labels/badges in small uppercase or semi-bold.
- Copy tone: clear, benefit-first, no fluff. CTA text: “Add to bag”, “Checkout”, “See details”.
- Keep line lengths short; use bullets for benefits and shipping info.

**Components**
- Buttons: flat/outline variants; radius 6–10px. Hover tint shift; active slight press; focus ring visible.
- Product cards: `rounded-xl border bg-white shadow-sm` (or shadow-none). Maintain image ratio (e.g., `aspect-[4/5]`). Include a subtle “tag” for new/bestseller in a single accent color.
- Badges: square or gently rounded; avoid pill + glass; minimal use.
- Tables/lists: for shipping/returns; use 1px dividers, clear labels, monospace for metrics if needed.

**Motion & Performance**
- Keep motion minimal; fade/translate 120–180ms ease-out. Disable heavy transforms on coarse pointers; honor `prefers-reduced-motion`.
- Lazy-load images; reserve aspect ratios to prevent layout shift.

**Accessibility**
- Contrast ≥ 4.5:1 for all text. Provide focus-visible styles on CTAs, cards, accordion toggles. Do not rely solely on color for status; pair with text/icon.
- Buttons and toggles sized ≥44px for touch. Alt text on product images; aria labels for icons.

**Tailwind Tips (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Grids: `grid gap-6 md:grid-cols-2 lg:grid-cols-4` for products; `grid gap-4 md:grid-cols-2` for benefits.
- Cards: `rounded-xl border border-slate-200/70 bg-white shadow-sm p-4 lg:p-5`
- Buttons: `rounded-lg px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Accordion: `border border-slate-200 rounded-lg divide-y divide-slate-200`
