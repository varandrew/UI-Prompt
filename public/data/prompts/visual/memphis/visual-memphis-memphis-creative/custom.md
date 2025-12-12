# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「孟菲斯创意」页面，延续 memphis 家族：几何图形、强烈配色、涂鸦线条与点阵纹理。包含 Hero、案例/服务卡片、作品展示、标语带、CTA 与资讯脚注。保持高对比与趣味节奏，同时维持可读性与可访问性。

---

## English Version (en-US)

Design a “Memphis Creative” page in TailwindCSS. Embrace bold geometry, playful color blocking, asymmetric layouts, hand-drawn squiggles, and halftone or dotted textures. The experience should feel energetic and inventive yet remain readable, navigable, and accessible. Include a hero, services/work cards, a gallery or case highlight grid, statement strips, and strong CTAs.

Visual language
- Palette: bright primaries and neons paired with crisp black/white. Suggested: electric blue, sunshine yellow, coral/red, mint/teal, black outlines. Limit to 3–4 dominant hues plus neutral white for balance.
- Shapes: circles, triangles, squiggles, zigzags, checkerboards, and dotted fills. Layer shapes behind cards and headings to create depth without heavy shadows.
- Lines & patterns: hand-drawn strokes, dashed borders, polka dots, wavy dividers. Use `mix-blend` sparingly; keep text contrast intact.
- Surfaces: flat color blocks; minimal shadows. Use thick strokes (2–3px) around key elements.

Layout blueprint
- Navigation: lively logo/wordmark with uppercase links. Include a pill CTA (“Start a project”). Add small squiggle/shape near the active link.
- Hero: split layout with oversized headline (42–60px), a concise subhead, and dual CTAs (primary filled, secondary outline). Pair with an illustration collage of Memphis shapes or a grayscale product mock over colorful shapes.
- Services/capabilities grid: 4–6 cards, each with icon/shape combo, title, 2–3 lines of description, and a small action. Cards use bold backgrounds and thick outlines; alternate colors for rhythm.
- Work/case gallery: a grid of posters or mockups inside frames with patterned mats. Include tags (Branding, Web, Motion) and “View project” CTA. Allow hover to reveal color inversions or shape overlays.
- Statement bands: horizontal strips with big slogans, rotated or offset text, and background patterns (dots/stripes). Use marquee for a playful ticker but keep speed gentle; provide pause for accessibility.
- Process timeline: 4-step row (Discover, Ideate, Design, Launch) each inside a geometric block with a unique pattern. Add arrows or zigzags to connect steps.
- Testimonials or client logos: place logos inside sticker-like badges; quotes in comic pull-quote blocks with thick stroke and background dots.
- CTA/footer: bold closing section with high-contrast button set. Include social icons as outlined circles with fill on hover.

Typography
- Pair a chunky grotesk for headings (700–800 weight) with a clean geometric sans for body. Allow playful letter spacing on headings; keep body 16–17px, line height 1.6–1.7.
- Use uppercase labels for sections with micro letter-spacing. Experiment with text rotation or staggered baselines for emphasis, but keep reading order straightforward.
- Add monospace or outlined text for metadata chips (Year, Role).

Components & states
- Buttons: pill or rectangle with thick stroke. Primary uses bright fill (yellow/coral) with black text; secondary outline swaps on hover. Focus-visible outline 3px in contrasting color.
- Cards: `rounded-2xl border-2 border-black` or colored borders; `shadow-none` with `p-5 md:p-6`. Backgrounds alternate between bright hues and white with patterns. Include corner stickers or dotted bands.
- Chips: `rounded-full border-2 border-black bg-white px-3 py-1 text-xs uppercase tracking-[0.12em]`; active chip filled with bright color.
- Inputs: high-contrast forms with `border-2`, chunky labels, and clear focus rings.
- Dividers: wavy lines or dotted rules; use them to separate sections playfully.

Motion
- Snappy, bouncy micro-interactions (140–200ms). Hover lifts and slight rotations (±2°). Use staggered reveal for cards (60–90ms offsets). Respect `prefers-reduced-motion` and allow pausing of marquee/tickers.

Accessibility
- Maintain contrast (text vs background ≥ 4.5:1). If using bright backgrounds, add black/white scrims for text. All shape overlays must not obscure readability.
- Provide focus styles on every interactive element. Ensure motion can be reduced and marquee has pause/stop.
- Alt text for illustrations; aria-labels for icon-only buttons; hit areas ≥ 44px.

Responsive behavior
- Mobile: simplify overlapping shapes; stack hero and cards; keep gutters generous. Use horizontal scroll for chip filters with clear scroll hints.
- Tablet: 2–3 column grids; keep statement strips readable; moderate shape density.
- Desktop: more layering and patterns allowed; maintain `max-w-6xl/7xl` container with 24–32px gutters for breathing room.

Content & microcopy
- Tone: playful, confident, inventive. Favor verbs (“Experiment boldly”, “Launch with flair”).
- CTA examples: “Start a project,” “View case study,” “Open deck,” “See the poster set.”
- Use short labels on cards and chips; pair with icons/shape marks to reinforce meaning.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Patterns: apply `bg-[radial-gradient(circle,_#000_1px,_transparent_1px)]` with `bg-[length:10px_10px]` on selected blocks
- Cards: `rounded-2xl border-2 border-black p-6 transition hover:-translate-y-1 hover:-rotate-1`
- Buttons: `inline-flex items-center gap-2 rounded-full border-2 border-black px-5 py-3 font-semibold uppercase tracking-[0.08em] transition`
- Chips: `rounded-full border-2 border-black px-3 py-1 text-xs font-semibold`

Deliver a Memphis-inspired creative page that feels like a vibrant poster collection—bold, geometric, and joyous—while keeping navigation, readability, and accessibility solid.
