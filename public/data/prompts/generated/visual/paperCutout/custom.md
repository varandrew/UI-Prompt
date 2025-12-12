# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「纸艺剪影」页面，延续 visual 家族：层叠纸张、明显分层阴影、圆角或不规则边缘、撕纸/撕口效果、温暖柔和配色。包含 Hero、卡片/图文模组、步骤或故事区、CTA 与页脚，保持可读性与可访问性。

---

## English Version (en-US)

Design a “Paper Cutout” experience in TailwindCSS. Mimic layered paper: stacked sheets, soft drop shadows, torn or rounded edges, die-cut shapes, and cutout masks. Use warm, tactile colors (creams, corals, muted blues/greens) with subtle grain. Include a hero, card/content modules, a story/process section, and clear CTAs. Keep text crisp and accessible.

Visual language
- Palette: parchment/cream bases (#F8F3E9), warm gray (#E1D8CF), blush/coral (#F2A8A0), muted teal/blue (#8BB9C7), olive/moss accents. Use charcoal (#2F2A25) for text.
- Layers: stacked panels with `shadow-[0_12px_24px_rgba(0,0,0,0.12)]`, varied z-index, and offset positions. Mix rectangular and organic blob shapes.
- Edges: rounded corners (14–20px) plus occasional torn edges or wavy borders. Use `mask-image`/`clip-path` if supported; otherwise simulate with layered shapes.
- Textures: subtle noise or paper grain; dotted lines as “stitch” dividers. Avoid glassy effects.

Layout blueprint
- Navigation: soft bar with simple wordmark, lightweight links, and a gentle pill CTA. Keep border-bottom as a faint paper line.
- Hero: layered paper stack behind the headline; a cutout illustration or photo peeks through. Headline 36–50px, subhead 2–3 lines, primary and secondary CTAs. Add a small sticker/badge (“New collection”) pinned with a dot/fastener motif.
- Feature/benefit cards: 6–9 cards with layered headers (smaller paper strip overlapping main card). Include icon, title, 2–3 line body, and action chip. Cards have soft drop shadows and color-blocked corners.
- Story/process: 3–4 step timeline using overlapping shapes; each step has a numbered sticker circle and short copy. Connect steps with dashed or stitched lines.
- Gallery/works: collage of images inside paper frames with slight rotations; captions on small paper tabs. Maintain consistent aspect ratios for stability.
- CTA/footer: final call on a colored sheet with cutout hole showing background; buttons in pill/rounded rectangles. Include contact/social as small stamps or stickers.

Typography
- Pair a friendly sans with a supporting handwritten or rounded display (sparingly). Headings 600–700 weight; body 16–17px at 1.6–1.7 line height. Keep text left-aligned.
- Use small caps/letter-spaced labels on stickers or tabs. Avoid overly condensed fonts; maintain readability over decoration.

Components & states
- Buttons: rounded/pill with slight shadow; primary filled accent, secondary outline with dashed or dotted border. Hover lifts and brightens; focus-visible outline 2–3px.
- Cards: `rounded-2xl border border-amber-900/10 bg-amber-50 shadow-lg p-6 transition hover:-translate-y-1`. Add `before` strip for layered header or `after` corner notch.
- Chips: small rounded tags; some can be “washi tape” style with dashed edges. Active chip darkens or gains shadow.
- Inputs/forms: paper-like fields `bg-amber-50 border border-amber-900/15 rounded-xl px-4 py-3 shadow-inner` with clear focus ring.
- Dividers: dotted/dashed lines; sticker dots for section separators.

Motion
- Soft easing (160–220ms). Hover/press lifts and drops gently; staggered reveals for layers. Respect `prefers-reduced-motion`; disable large parallax.

Accessibility
- Maintain contrast ≥ 4.5:1 for text. Ensure focus states visible even on textured backgrounds (add solid outline). Provide alt text for illustrations and aria-labels for icon-only buttons.
- Avoid relying on color alone for states; pair with icons/text. Keep hit areas ≥ 44px.

Responsive behavior
- Mobile: stack layers with fewer offsets; keep gutters 16–20px. Use horizontal scroll for sticker chips if necessary.
- Tablet: 2-column grids for cards; layered effects remain but simplified. Maintain consistent shadows and spacing.
- Desktop: more overlap allowed; `max-w-6xl/7xl` container with 24–32px gutters. Keep DOM order logical despite layering.

Content guidance
- Tone: playful, crafted, warm. Use concise copy: “Cut, layer, share,” “Made by hand,” “Layered for clarity.”
- CTA examples: “Start layering,” “See the collection,” “Download pack,” “View tutorial.”
- Include metadata on cards (Category, Date, Tools) in micro labels or sticker chips.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Stack: `relative space-y-6` with `absolute` cutout shapes
- Card base: `rounded-2xl border border-amber-900/10 bg-amber-50 shadow-lg p-6 transition hover:-translate-y-1`
- Sticker: `inline-flex items-center gap-2 rounded-full bg-amber-200/80 px-3 py-1 text-xs font-semibold`
- Button: `inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

Deliver a tactile paper-cut page that feels layered and handcrafted while staying structured, readable, and accessible.
