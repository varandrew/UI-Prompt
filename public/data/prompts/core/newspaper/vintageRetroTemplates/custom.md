# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「复古怀旧报刊」页面，延续 newspaper 家族，强调泛黄纸张、墨色字体、粗体标题、栏位分割线、边框与小装饰。包含 Hero/头版、分栏文章、旧报纸广告/小启事、引言、目录索引与 CTA，保持可读性与可访问性。

---

## English Version (en-US)

Design a “Vintage Retro Newspaper” layout in TailwindCSS. Evoke mid-century print: slightly yellowed paper, inky blacks, classic serifs, rules and borders, numbered columns, and playful classified-style blocks. Keep text legible, structure clear, and accessibility intact. Include a hero/cover story, multi-column articles, classifieds/ads, pull quotes, table of contents, and CTA/subscription blocks.

Look & feel
- Palette: warm parchment (#F2E6CF), faded gray (#D8D0C5), ink black (#151515). Optional accent red/teal for section labels or stamps.
- Texture: light paper grain or noise; subtle rough edges on containers. Avoid heavy shadows; depth comes from borders and slight inset effects.
- Lines: thin to medium rules, dotted or dashed separators, corner ornaments. Use boxes to frame classifieds or ad blocks.
- Typography: vintage serif headlines, tall condensed for subheads, and readable serif or slab for body. Occasional script/italic for embellishment.

Layout blueprint
- Masthead/nav: newspaper title, edition date, city, and weather or price badge. Include a compact nav (News, Arts, Science, Opinion, Archives) and a “Subscribe” button styled like a stamped coupon.
- Hero/cover story: large headline across columns, dek (2–3 lines), byline, and feature image (4:3 or 16:9) with a thin border and caption. Add a small “Continued on page…” note to mimic print.
- Multi-column articles: 2–3 columns on desktop, 1 on mobile. Use drop caps on lead paragraphs; include subheads and inline pull quotes framed with rules.
- Secondary stories sidebar: narrow column with briefs (headline + 1–2 sentences) and small icons. Keep consistent dividers between briefs.
- Classifieds/ads strip: grid of small boxes (tickets, coupons, job posts) with bold headers, dotted borders, and prices. Include at least one illustrated vintage ad with halftone effect.
- Table of contents / index: compact list of sections with page/anchor numbers, separated by dot leaders. Add a “Jump to section” CTA.
- Opinion or letters: boxed area with author name, small portrait/initial, and italic intro line.
- CTA/footer: subscription box styled like a tear-off coupon (perforated border, dotted lines). Include newsletter signup input and clear focus states; add contact/social in small caps.

Typography details
- Headlines: serif 700–800, all-caps or Title Case, with tight tracking. Body 16–18px, line height 1.7–1.8. Use small caps for bylines and labels.
- Drop caps: 3–4 lines height, aligned baseline; avoid overwhelming the column.
- Pull quotes: larger size with decorative quotes, thin border or accent bar, attribution in small caps.

Components & states
- Buttons: outlined coupons or filled ink blocks; hover darkens slightly; focus-visible ring in accent red/teal. Rounded corners minimal; prefer squared edges or tiny radius.
- Cards/boxes: `border border-neutral-900/40 bg-amber-50/70 rounded-md shadow-none p-4 md:p-5`; dotted borders for classifieds (`border-dashed`).
- Tags/labels: uppercase microcopy with thin borders; use small ornaments or bullets.
- Inputs: `border border-neutral-900/40 rounded-sm bg-amber-50 px-4 py-2.5` with focus ring visible; placeholder in muted gray.
- Dividers: `border-b border-neutral-900/20` or dashed; consider double rules for section tops.

Imagery
- Use desaturated or sepia-toned images; apply thin strokes and simple captions with source. Avoid full-bleed color. Halftone or grain overlays welcome.
- If overlaying text, add parchment-tinted scrim; maintain contrast for readability.

Motion
- Keep motion minimal and old-world: simple fades/slide 140–200ms. No parallax or neon glows. Respect `prefers-reduced-motion`.

Accessibility
- Contrast: dark ink on light parchment must meet 4.5:1. If using accent color on text, ensure sufficient contrast.
- Keyboard: all interactive elements focusable with visible ring. Provide skip-to-content link. Icon-only items need aria-label.
- Maintain logical reading order even if visually arranged into columns.

Responsive behavior
- Mobile: single column with clear dividers; stack classifieds into cards; compress masthead into a simple bar. Keep font sizes comfortable.
- Tablet: 2-column layouts; hero image centered; classifieds in 2 columns.
- Desktop: 2–3 columns, consistent gutters (24–32px), `max-w-6xl/7xl` container.

Content guidance
- Copy tone: factual, slightly nostalgic, concise. Use short headlines; keep summaries to 20–40 words.
- Classifieds: include price, contact/action, and playful microcopy (“Now boarding…”, “Inquire within”).
- CTA microcopy: “Subscribe to the edition,” “Read the full story,” “Jump to section,” “Save this article.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Columns: `columns-1 md:columns-2 lg:columns-3 gap-8` for long-form text
- Cards: `border border-neutral-900/40 bg-amber-50/70 p-5 rounded-md`
- Headline: `font-serif text-4xl md:text-5xl font-semibold tracking-tight`
- Buttons: `inline-flex items-center gap-2 border border-neutral-900 px-4 py-2 font-semibold uppercase tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Coupon style: `border-dashed border-2 rounded-sm`

Deliver a vintage newspaper page that feels tactile and nostalgic—structured columns, framed ads, and confident headlines—while preserving modern accessibility and clarity.
