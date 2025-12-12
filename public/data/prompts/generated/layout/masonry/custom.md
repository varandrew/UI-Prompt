# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「瀑布流 (masonry)」布局页面，延续 layout 家族风格，包含 Hero、弹性卡片格网、分组筛选、细节视图、行动呼吁，重点是响应式高度自适应的瀑布流排列与可访问性。

---

## English Version (en-US)

Build a responsive masonry layout experience in TailwindCSS. Focus on staggered, column-based cards of varying heights that reflow fluidly across breakpoints. Include a hero, filters/tabs, masonry grid, spotlight detail modules, and clear CTAs. Emphasize performance, accessibility, and graceful fallback when masonry is not available.

Concept & goals
- Present mixed-height content (articles, images, products, case studies) in a visually balanced waterfall layout. Avoid visual jank; ensure items snap to columns without overlapping.
- Provide filtering and sorting to reorganize the grid without full reload. Motion should be subtle, keeping readability first.
- Keep gutters consistent; avoid edge collisions. Support lazy loading or “Load more” for long feeds.

Layout structure
- Hero: concise headline (32–44px) about curated collections, single-line subhead, primary CTA (“Explore collection”) and secondary (“Submit your work”). Optionally showcase a highlighted card with metadata beside the text.
- Controls bar: filters (chips or tabs) and sort selector (dropdown). Include a search field with visible focus ring. Provide “All / Featured / New / Trending” filters as default.
- Masonry grid: 2 columns on small screens, 3–4 on medium, 4–5 on large (`md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5`), with consistent `gap-6` gutters. Cards should have internal padding and rounded corners; avoid overlapping; ensure `break-inside-avoid`.
- Card content patterns:
  - Image-first: full-width image (with `aspect-[4/3]` or `3/4]`), followed by title, 1–2 line description, and meta row (category, time, likes).
  - Text-heavy: headline, excerpt, tag list, and “Read more”.
  - Product: image, price, tag chips, action buttons (“Save”, “View”).
- Load strategy: initial 12–20 items, then “Load more” button or intersection observer sentinel for infinite scroll. Maintain layout stability (reserve space).
- Spotlight/detail slices: a band that highlights one featured item with expanded description, plus adjacent mini-grid of 3 related items to keep rhythm.
- CTA/footer: encourage contributions or newsletter signup. Keep input and button accessible.

Visual language
- Neutral base with optional soft accent (single primary color) to indicate selection states. Cards remain minimal (`border border-neutral-200/70 bg-white shadow-sm`), with `rounded-xl` and `p-4 md:p-5`.
- Use light dividers inside cards for metadata rows. Preserve generous whitespace to avoid clutter.
- Provide optional subtle grain background on the page to differentiate from cards.

Typography & spacing
- Body text 15–17px with 1.6–1.7 line height. Headings 600–700 weight; keep titles within 2 lines. Use uppercase micro-labels for tags.
- Spacing system: 16px base; gutters 24–32px; vertical section padding 56–96px depending on viewport.
- Keep line lengths moderate; constrain grid container to `max-w-6xl/7xl` with `px-6 lg:px-10`.

Motion & interactions
- On filter change, animate opacity/translate of cards while respecting `prefers-reduced-motion`. Avoid large reflows; allow content to settle before interactions.
- Hover: slight lift (2–4px) and shadow accent; show quick actions (save, share) with outline buttons. Focus: 2–3px outline and skip-links for keyboard users.
- When loading more, fade in new cards staggered (60–100ms offsets) to maintain calm pacing.

Accessibility
- All cards must be keyboard focusable; ensure `break-inside-avoid` elements remain in tab order.
- Provide alt text for images; ensure filter chips and sort controls have aria-labels and clear focus styles.
- Maintain color contrast ≥ 4.5:1 for text and controls. Offer “compact view” toggle if density is high.
- Infinite scroll must include a “Load more” button fallback. Announce loading status to assistive tech.

Responsive behavior
- Small: 2-column masonry via `columns-2` with `gap-4`; cards full width within columns. Controls stack vertically; CTAs full width.
- Medium: 3–4 columns; filters inline; hero text and highlighted card side by side if space allows.
- Large: 4–5 columns; maintain consistent gutter; consider sticky filters on the left to aid browsing.

Performance considerations
- Lazy-load imagery with width/height attributes to reduce CLS. Provide low-res placeholders or blurred backgrounds.
- Use CSS columns for simplicity or a flex/grid + JS fallback when true masonry is unsupported. Ensure reflow on resize.
- Limit shadow layers and gradient overlays to keep paint cost low.

Content guidance
- Encourage concise titles, 1–2 sentence summaries, and small metadata rows (category, read time, date). Favor clarity over decoration.
- Provide tags for filtering; keep tag labels short (1–2 words). Use a single accent color for selected state; inactive tags in neutral outlines.
- CTA microcopy examples: “View details”, “Load more inspirations”, “Filter by style”, “Save to board”.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-7xl px-6 lg:px-10`
- Controls: `flex flex-wrap items-center gap-3` with chips `rounded-full border px-3 py-1.5`
- Masonry: `columns-2 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5 gap-6 [column-fill:_balance]`
- Card: `break-inside-avoid rounded-xl border border-neutral-200/70 bg-white shadow-sm p-5 space-y-3 transition hover:-translate-y-1 focus-within:-translate-y-1`
- Buttons: `inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition focus-visible:outline focus-visible:outline-2`
- Loader: skeleton bars `animate-pulse bg-neutral-200/70 h-3 rounded-full`

Deliver a masonry layout that feels balanced, performant, and accessible, making staggered content effortless to browse across all screen sizes.
