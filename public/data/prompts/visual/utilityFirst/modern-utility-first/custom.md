# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「实用优先」页面，延续 utilityFirst 家族：结构清晰、原子化样式痕迹可见、直观的间距与网格，重视可读性、快速浏览与开发者友好。包含 Hero、功能/优势卡片、代码或数据段、定价/方案或流程、CTA 与页脚。

---

## English Version (en-US)

Design a “Utility-First” page in TailwindCSS that proudly shows its utility DNA: clear structure, visible spacing rhythm, simple borders, and straightforward components. Favor neutral colors with a single accent, readable typography, and practical content (features, code/data snippets, pricing or process, and actionable CTAs). Keep the layout developer-friendly, fast to parse, and accessible.

Visual language
- Palette: neutral grays (white/off-white backgrounds, slate/stone text), one accent (blue/teal/amber) for CTAs and highlights. Avoid heavy gradients or ornamental textures.
- Surfaces: flat or lightly elevated (`shadow-sm`); use `border border-neutral-200` and `divide-y` for structure. Rounded corners 8–12px.
- Layout: grid- and flex-based; ensure consistent spacing scale (4/8/12/16/24/32). Keep containers constrained (`max-w-6xl/7xl`) with generous padding.

Layout blueprint
- Navigation: simple bar with logo, links (Features, Pricing, Docs, Support), and a primary button. Include search or command-palette shortcut hint.
- Hero: headline (concise value prop), 1–2 line subhead, primary CTA (“Start free”), secondary text link (“View docs”). Include a supporting visual: code snippet, metrics, or simple dashboard preview with border and subtle shadow.
- Feature grid: 6–9 cards in 2–3 columns. Each card includes icon, title, short description, and link. Cards use outline/border with hover translate and subtle accent bar.
- Code or data block: stylized code block (`font-mono text-sm`, `bg-slate-900 text-slate-100 rounded-xl p-4`) with clear copy button. Provide syntax highlights using accent color.
- Metrics/benefits: stat row with label, value, delta badge; use monospace for values.
- Pricing or plans (optional): 3-up pricing table with clear features list and CTA buttons. Provide monthly/annual toggle with accessible switch.
- Process strip: 3–4 steps (Plan → Build → Ship → Monitor) with icons and 1–2 sentence descriptions.
- CTA/footer: concise closing CTA, links to docs/support, and social icons. Keep footer slim with legal text and newsletter input if desired.

Typography
- Use a modern sans; headings 600–700; body 15–17px at 1.6 line height. Use monospace for code, IDs, and metrics. Keep text left-aligned.
- Labels for sections in uppercase microcopy with slight letter spacing. Keep line lengths comfortable and avoid long centered blocks.

Components & states
- Buttons: solid accent primary, outline/ghost secondary. Hover: tint shift and slight lift; active: small press. Focus-visible outline 2–3px.
- Cards: `rounded-xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm transition hover:-translate-y-1`. Optional top accent bar using `before:` utilities.
- Chips: small rounded pills for tags/filters; active chip uses accent fill with readable text.
- Inputs: `border border-neutral-300 rounded-lg bg-white px-4 py-3` with clear focus ring; labels always visible. Toggle/switch accessible and labeled.
- Tables/lists: `divide-y divide-neutral-200` with `text-sm` rows; include hover background for readability.

Motion
- Minimal, practical transitions (140–200ms). Hover lifts; fade/slide in content on load. Respect `prefers-reduced-motion`.

Accessibility
- Maintain 4.5:1 contrast on all text and controls. Focus rings visible on every interactive element. Provide aria-labels for icon-only buttons and copy buttons on code.
- Do not rely on color alone for state; pair with text/icons. Ensure keyboard navigation order is logical; hit targets ≥ 44px.

Responsive behavior
- Mobile: stack hero and grids; keep CTAs full-width. Code blocks scroll horizontally with clear scroll cue and `aria-label`. Filters/tabs become horizontal scroll chips.
- Tablet: 2-column grids; maintain ample spacing; keep nav readable.
- Desktop: 3-column feature grids, `max-w-6xl/7xl` container, consistent gutters (24–32px).

Content guidance
- Tone: direct, practical, developer-friendly. Lead with outcomes (shipping faster, fewer bugs, better visibility).
- CTA microcopy: “Start free,” “View docs,” “Clone template,” “See changelog.”
- Include specifics in features: frameworks supported, integration points, metrics improved.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10 py-12`
- Hero layout: `grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`
- Feature cards: `rounded-xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow`
- Code block: `bg-slate-900 text-slate-100 font-mono text-sm rounded-xl p-4`
- Buttons: `inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

Deliver a utility-first page that is honest, fast to scan, and easy to build upon—clear grids, readable type, and accessible controls.
