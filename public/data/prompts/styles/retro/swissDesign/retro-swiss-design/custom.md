# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「瑞士设计」页面，延续 swissDesign 家族：严格网格、无衬线字体、黑白主色搭配瑞士红，强调非对称与留白，重点在清晰层次与资讯秩序。包含 Hero、版面导览、重点卡片/案例、讯息栏、CTA 与简洁页脚。

Build a “Swiss Design” layout in TailwindCSS rooted in International Typographic Style: strict grid, sans-serif type, black/white primary palette with sparing Swiss-red accents, asymmetric balance, and generous white space. Focus on clarity, hierarchy, and rational organization. Include a hero, key message panels, feature/portfolio grid, info strips, and crisp CTAs while keeping everything accessible.

Visual language
- Palette: black/white foundation with a single accent—Swiss red (#E0292A) or a muted alternative. Use gray (neutral-800/500/200) for hierarchy. Avoid gradients and shadows.
- Type: clean sans-serif (Grotesk/Neo-Grotesk). Use consistent scale (e.g., 12/14/16/20/28/40). Tight tracking for headings; comfortable line height for body (1.6–1.7).
- Grid: 12-column base, strong gutters (24–32px). Align all blocks to the grid; use clear margins and vertical rhythm (64–96px section spacing).
- Asymmetry: offset blocks across the grid to create tension while keeping alignment crisp. Use left-edge or right-edge anchoring for titles.
- Dividers: 1px hairlines; occasional dotted rules. No heavy shadows; depth is from structure and negative space.

Layout blueprint
- Header/nav: understated bar with logotype, section links (About, Work, Services, Journal, Contact), and a minimal CTA (“Start a project”) as outline text. Include a slim progress indicator or page number motif.
- Hero: large typographic statement (38–54px), concise subhead, and two CTAs (primary text/button, secondary text link). Optional supporting image set in grayscale, aligned to grid edges. Use red accent sparingly for underline or highlight bar.
- Feature/portfolio grid: 6–9 items arranged in a strict grid; each card has title, category, year, and a short line of copy. On hover, apply subtle underline or red accent bar. Imagery should be monochrome or muted.
- Info strips: horizontal bands with label chips (uppercase, letter-spaced) and bullet summaries. Use dotted dividers or baseline grids to echo editorial rhythm.
- Case study highlight: split layout with image on one side, outline box of facts on the other (Client, Role, Timeline, Impact). Add “Read case study” CTA.
- Services/offerings: 3–4 columns with short descriptors; use numbered headings (01/02/03) in red. Include small print for scope/tools.
- Testimonials or quotes: pull-quote style with hairline border and citation. Keep italics minimal; align to grid.
- CTA/footer: simple closing block with primary action, email link, and social icons in outline circles. Include microcopy for availability.

Components & states
- Buttons: text or outline buttons with 1–2px stroke. Primary may fill red; secondary stays outline/black text. Hover: slight tint or underline. Focus-visible outline 2–3px in red/black.
- Cards: `border border-neutral-200 bg-white` or borderless with tight padding; no shadow. Hover underline, small shift (`-translate-y-0.5`), or thin left bar in red.
- Labels/chips: uppercase microcopy with letter spacing; use red for emphasis. Avoid bulky pills—keep them flat.
- Inputs: `border border-neutral-300 rounded-sm bg-white px-4 py-3` with clear focus ring; labels always visible. Keep forms minimal and aligned.

Imagery
- Prefer grayscale or muted images; maintain consistent aspect ratios. Use thin strokes around images and concise captions with source.
- Avoid overlaying heavy text on photos; if needed, add a light scrim and keep copy short.

Motion
- Minimal transitions: 120–180ms ease-out on hover/focus; subtle translate or underline reveal. No parallax or bounce. Respect `prefers-reduced-motion`.

Accessibility
- Ensure contrast ≥ 4.5:1 for body text and CTAs. Provide visible focus states on all interactive elements.
- Maintain semantic order matching visual reading; support keyboard navigation. Alt text required for imagery; aria-labels for icon-only buttons.
- Do not rely on color alone for states—include text or icons.

Responsive behavior
- Mobile: stack sections, keep gutters 16–20px, maintain typographic scale; nav collapses to simple menu. Preserve clear separation between sections with spacing and dividers.
- Tablet: 2-column grids, maintain red accents sparingly. Keep hero text readable and aligned to grid.
- Desktop: `max-w-6xl/7xl` container, 3–4 column grids; leverage asymmetry thoughtfully while preserving alignment.

Content guidance
- Copy tone: factual, concise, objective. Lead with value and outcomes; keep sentences short.
- Use numbered or labeled sections (e.g., “01 Work”, “02 Services”). Provide metadata for projects (Client, Role, Year).
- CTA microcopy: “View work,” “Read case study,” “Start a project,” “Download portfolio.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Grid: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8`
- Buttons: `inline-flex items-center gap-2 rounded-sm border border-neutral-900 px-5 py-3 font-semibold uppercase tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Dividers: `h-px bg-neutral-900/15`
- Labels: `uppercase tracking-[0.14em] text-xs font-semibold text-red-600`

Deliver a Swiss Design page that feels precise, uncluttered, and disciplined—grid-led hierarchy, minimal color, and impeccable typography—while keeping accessibility and responsiveness first-class.

---

## English Version (en-US)

Build a “Swiss Design” layout in TailwindCSS rooted in International Typographic Style: strict grid, sans-serif type, black/white primary palette with sparing Swiss-red accents, asymmetric balance, and generous white space. Focus on clarity, hierarchy, and rational organization. Include a hero, key message panels, feature/portfolio grid, info strips, and crisp CTAs while keeping everything accessible.

Visual language
- Palette: black/white foundation with a single accent—Swiss red (#E0292A) or a muted alternative. Use gray (neutral-800/500/200) for hierarchy. Avoid gradients and shadows.
- Type: clean sans-serif (Grotesk/Neo-Grotesk). Use consistent scale (e.g., 12/14/16/20/28/40). Tight tracking for headings; comfortable line height for body (1.6–1.7).
- Grid: 12-column base, strong gutters (24–32px). Align all blocks to the grid; use clear margins and vertical rhythm (64–96px section spacing).
- Asymmetry: offset blocks across the grid to create tension while keeping alignment crisp. Use left-edge or right-edge anchoring for titles.
- Dividers: 1px hairlines; occasional dotted rules. No heavy shadows; depth is from structure and negative space.

Layout blueprint
- Header/nav: understated bar with logotype, section links (About, Work, Services, Journal, Contact), and a minimal CTA (“Start a project”) as outline text. Include a slim progress indicator or page number motif.
- Hero: large typographic statement (38–54px), concise subhead, and two CTAs (primary text/button, secondary text link). Optional supporting image set in grayscale, aligned to grid edges. Use red accent sparingly for underline or highlight bar.
- Feature/portfolio grid: 6–9 items arranged in a strict grid; each card has title, category, year, and a short line of copy. On hover, apply subtle underline or red accent bar. Imagery should be monochrome or muted.
- Info strips: horizontal bands with label chips (uppercase, letter-spaced) and bullet summaries. Use dotted dividers or baseline grids to echo editorial rhythm.
- Case study highlight: split layout with image on one side, outline box of facts on the other (Client, Role, Timeline, Impact). Add “Read case study” CTA.
- Services/offerings: 3–4 columns with short descriptors; use numbered headings (01/02/03) in red. Include small print for scope/tools.
- Testimonials or quotes: pull-quote style with hairline border and citation. Keep italics minimal; align to grid.
- CTA/footer: simple closing block with primary action, email link, and social icons in outline circles. Include microcopy for availability.

Components & states
- Buttons: text or outline buttons with 1–2px stroke. Primary may fill red; secondary stays outline/black text. Hover: slight tint or underline. Focus-visible outline 2–3px in red/black.
- Cards: `border border-neutral-200 bg-white` or borderless with tight padding; no shadow. Hover underline, small shift (`-translate-y-0.5`), or thin left bar in red.
- Labels/chips: uppercase microcopy with letter spacing; use red for emphasis. Avoid bulky pills—keep them flat.
- Inputs: `border border-neutral-300 rounded-sm bg-white px-4 py-3` with clear focus ring; labels always visible. Keep forms minimal and aligned.

Imagery
- Prefer grayscale or muted images; maintain consistent aspect ratios. Use thin strokes around images and concise captions with source.
- Avoid overlaying heavy text on photos; if needed, add a light scrim and keep copy short.

Motion
- Minimal transitions: 120–180ms ease-out on hover/focus; subtle translate or underline reveal. No parallax or bounce. Respect `prefers-reduced-motion`.

Accessibility
- Ensure contrast ≥ 4.5:1 for body text and CTAs. Provide visible focus states on all interactive elements.
- Maintain semantic order matching visual reading; support keyboard navigation. Alt text required for imagery; aria-labels for icon-only buttons.
- Do not rely on color alone for states—include text or icons.

Responsive behavior
- Mobile: stack sections, keep gutters 16–20px, maintain typographic scale; nav collapses to simple menu. Preserve clear separation between sections with spacing and dividers.
- Tablet: 2-column grids, maintain red accents sparingly. Keep hero text readable and aligned to grid.
- Desktop: `max-w-6xl/7xl` container, 3–4 column grids; leverage asymmetry thoughtfully while preserving alignment.

Content guidance
- Copy tone: factual, concise, objective. Lead with value and outcomes; keep sentences short.
- Use numbered or labeled sections (e.g., “01 Work”, “02 Services”). Provide metadata for projects (Client, Role, Year).
- CTA microcopy: “View work,” “Read case study,” “Start a project,” “Download portfolio.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Grid: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8`
- Buttons: `inline-flex items-center gap-2 rounded-sm border border-neutral-900 px-5 py-3 font-semibold uppercase tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Dividers: `h-px bg-neutral-900/15`
- Labels: `uppercase tracking-[0.14em] text-xs font-semibold text-red-600`

Deliver a Swiss Design page that feels precise, uncluttered, and disciplined—grid-led hierarchy, minimal color, and impeccable typography—while keeping accessibility and responsiveness first-class.
