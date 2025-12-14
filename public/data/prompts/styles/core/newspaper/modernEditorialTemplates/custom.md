# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「现代编辑风格」页面，延续 newspaper 家族：严谨网格、醒目标题、分栏排版、细线分隔、清晰层次。包含 Hero、头版故事、分栏文章、重点摘录/引言、目录、作者/来源标注与 CTA。

Design a “Modern Editorial” layout in TailwindCSS inspired by newspapers and magazines. Use strict grids, clear hierarchy, generous white space, and refined typography. Pair bold headlines with readable body columns, pull quotes, metadata, and structured navigation. Include a hero/cover story, multi-column article layouts, highlight reels, newsletter CTA, and footer info (issue date, authorship).

Visual language
- Palette: mostly black/white with subtle gray dividers; a single accent (deep navy, burgundy, or muted gold) for section labels and links.
- Grid: 12-column base with consistent gutters (24–32px). Support multi-column text blocks (2–3 columns) on desktop; collapse to single column on mobile.
- Dividers: thin 1px lines; occasional dotted rules; avoid heavy shadows or gradients.
- Surfaces: flat white or off-white; optional light gray paneling for sidebars.

Layout blueprint
- Masthead/nav: top bar with publication name/date, sections (News, Features, Opinion, Culture, Tech), search, and subscribe CTA. Add a small “Issue” badge.
- Hero/cover story: large headline (serif or display sans), dek/subhead (2–3 lines), byline with date, and feature image (16:9). Include jump link to full article.
- Highlights row: 3–4 secondary stories with thumbnail, kicker, headline, 1–2 line summary, and “Read more”. Align to grid; use consistent thumbnail ratio.
- Section blocks: each section (e.g., Features/Opinion) gets a header label, an anchor link, and a columnar layout:\n  - Feature block: 2-column grid with leading story and supporting story.\n  - Opinion block: list of op-eds with author avatars, tag (“Opinion”), and read time.\n  - Culture/Tech block: cards with image, headline, excerpt, and tags.\n- Pull quotes: inset quotes with larger type, hairline border or accent bar, attribution, and optional drop cap at paragraph start.\n- Data/infographic callout (optional): a chart or figure with caption and source, styled in minimal lines and accent color.\n- Newsletter / CTA band: concise headline, input field with clear focus ring, and primary subscribe button.\n- Footer: include section links, masthead, contact, privacy, and issue/date metadata. Add small “Back to top” link.

Typography
- Headings: strong serif or modern display sans; weight 600–700. Body: clean serif or humanist sans at 16–18px, line height 1.7–1.8 for long-form readability.
- Kicker/labels: uppercase with letter spacing; bylines in small caps optional. Use `text-balance` on headlines to avoid widows.
- Drop caps are optional for lead paragraphs; keep subtle and aligned.

Components & states
- Buttons: understated; primary filled accent or text link with underline; secondary as outline. Focus-visible outlines 2–3px; hover adds slight shade or underline.
- Cards: `rounded-lg border border-neutral-200 bg-white p-5 md:p-6` or borderless with strong text hierarchy. Avoid heavy shadow.
- Tags/labels: small uppercase chips with accent color and thin border.
- Inputs: `border border-neutral-300 rounded-md px-4 py-3` with clear focus ring in accent.
- Lists/tables: use `divide-y divide-neutral-200`; keep numbers aligned.

Imagery
- Favor editorial photography with consistent color grading; allow black-and-white for cohesion. Maintain aspect ratios (16:9, 4:3). Captions below images with source credit.
- Do not place text directly over busy photos; if overlay is necessary, apply subtle scrim and keep text minimal.

Motion
- Minimal motion: fades/slide 140–200ms; no parallax. Respect `prefers-reduced-motion`.
- Hover: underline or small translation on cards; no bounce.

Accessibility
- Contrast: ensure all text meets 4.5:1. Headlines on images must include scrim if needed.
- Keyboard: nav, cards, and CTAs all focusable with visible ring. Provide skip-to-content link. Icon-only buttons need aria-labels.
- Reading order must follow DOM order; avoid reordering purely for layout.

Responsive behavior
- Mobile: single-column flow; stack hero, highlights, and sections. Collapse nav into menu; maintain readable font sizes.
- Tablet: 2-column article grids; keep pull quotes full-width for breathing room.
- Desktop: multi-column sections, generous gutters, `max-w-6xl/7xl` container.

Content guidance
- Lead with the cover story, then organized sections. Each card has headline, kicker/tag, byline, read time, and link.
- Keep excerpts concise (20–40 words). Use pull quotes to break long text and highlight key statements.
- CTA microcopy: “Subscribe to the briefing,” “Read the full story,” “View all opinions.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Grid: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8`
- Multi-column text: `columns-2 md:columns-3 gap-8` with `prose`-style typography
- Buttons: `inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold transition focus-visible:outline focus-visible:outline-2`
- Cards: `rounded-lg border border-neutral-200 bg-white p-6 transition hover:-translate-y-1`

Deliver a crisp editorial layout that reads like a modern magazine front page—structured, trustworthy, and easy to scan.

---

## English Version (en-US)

Design a “Modern Editorial” layout in TailwindCSS inspired by newspapers and magazines. Use strict grids, clear hierarchy, generous white space, and refined typography. Pair bold headlines with readable body columns, pull quotes, metadata, and structured navigation. Include a hero/cover story, multi-column article layouts, highlight reels, newsletter CTA, and footer info (issue date, authorship).

Visual language
- Palette: mostly black/white with subtle gray dividers; a single accent (deep navy, burgundy, or muted gold) for section labels and links.
- Grid: 12-column base with consistent gutters (24–32px). Support multi-column text blocks (2–3 columns) on desktop; collapse to single column on mobile.
- Dividers: thin 1px lines; occasional dotted rules; avoid heavy shadows or gradients.
- Surfaces: flat white or off-white; optional light gray paneling for sidebars.

Layout blueprint
- Masthead/nav: top bar with publication name/date, sections (News, Features, Opinion, Culture, Tech), search, and subscribe CTA. Add a small “Issue” badge.
- Hero/cover story: large headline (serif or display sans), dek/subhead (2–3 lines), byline with date, and feature image (16:9). Include jump link to full article.
- Highlights row: 3–4 secondary stories with thumbnail, kicker, headline, 1–2 line summary, and “Read more”. Align to grid; use consistent thumbnail ratio.
- Section blocks: each section (e.g., Features/Opinion) gets a header label, an anchor link, and a columnar layout:\n  - Feature block: 2-column grid with leading story and supporting story.\n  - Opinion block: list of op-eds with author avatars, tag (“Opinion”), and read time.\n  - Culture/Tech block: cards with image, headline, excerpt, and tags.\n- Pull quotes: inset quotes with larger type, hairline border or accent bar, attribution, and optional drop cap at paragraph start.\n- Data/infographic callout (optional): a chart or figure with caption and source, styled in minimal lines and accent color.\n- Newsletter / CTA band: concise headline, input field with clear focus ring, and primary subscribe button.\n- Footer: include section links, masthead, contact, privacy, and issue/date metadata. Add small “Back to top” link.

Typography
- Headings: strong serif or modern display sans; weight 600–700. Body: clean serif or humanist sans at 16–18px, line height 1.7–1.8 for long-form readability.
- Kicker/labels: uppercase with letter spacing; bylines in small caps optional. Use `text-balance` on headlines to avoid widows.
- Drop caps are optional for lead paragraphs; keep subtle and aligned.

Components & states
- Buttons: understated; primary filled accent or text link with underline; secondary as outline. Focus-visible outlines 2–3px; hover adds slight shade or underline.
- Cards: `rounded-lg border border-neutral-200 bg-white p-5 md:p-6` or borderless with strong text hierarchy. Avoid heavy shadow.
- Tags/labels: small uppercase chips with accent color and thin border.
- Inputs: `border border-neutral-300 rounded-md px-4 py-3` with clear focus ring in accent.
- Lists/tables: use `divide-y divide-neutral-200`; keep numbers aligned.

Imagery
- Favor editorial photography with consistent color grading; allow black-and-white for cohesion. Maintain aspect ratios (16:9, 4:3). Captions below images with source credit.
- Do not place text directly over busy photos; if overlay is necessary, apply subtle scrim and keep text minimal.

Motion
- Minimal motion: fades/slide 140–200ms; no parallax. Respect `prefers-reduced-motion`.
- Hover: underline or small translation on cards; no bounce.

Accessibility
- Contrast: ensure all text meets 4.5:1. Headlines on images must include scrim if needed.
- Keyboard: nav, cards, and CTAs all focusable with visible ring. Provide skip-to-content link. Icon-only buttons need aria-labels.
- Reading order must follow DOM order; avoid reordering purely for layout.

Responsive behavior
- Mobile: single-column flow; stack hero, highlights, and sections. Collapse nav into menu; maintain readable font sizes.
- Tablet: 2-column article grids; keep pull quotes full-width for breathing room.
- Desktop: multi-column sections, generous gutters, `max-w-6xl/7xl` container.

Content guidance
- Lead with the cover story, then organized sections. Each card has headline, kicker/tag, byline, read time, and link.
- Keep excerpts concise (20–40 words). Use pull quotes to break long text and highlight key statements.
- CTA microcopy: “Subscribe to the briefing,” “Read the full story,” “View all opinions.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Grid: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8`
- Multi-column text: `columns-2 md:columns-3 gap-8` with `prose`-style typography
- Buttons: `inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold transition focus-visible:outline focus-visible:outline-2`
- Cards: `rounded-lg border border-neutral-200 bg-white p-6 transition hover:-translate-y-1`

Deliver a crisp editorial layout that reads like a modern magazine front page—structured, trustworthy, and easy to scan.
