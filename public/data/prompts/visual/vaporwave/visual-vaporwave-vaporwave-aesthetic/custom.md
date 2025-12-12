# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「蒸汽波美学」页面，延续 vaporwave 家族：霓虹紫粉、日落渐层、棋盘格、希腊雕像/CRT/棕榈树、网格地板、80s 字体。包含 Hero、专辑/产品卡片、播放/下载 CTA、情绪叙事区、海报格网与页脚。

---

## English Version (en-US)

Build a “Vaporwave Aesthetic” page in TailwindCSS. Embrace neon purple/pink gradients, horizon sunsets, chrome or wireframe grids, checkerboards, Greek busts, CRT scanlines, palm silhouettes, and retro synth vibes. The experience should feel nostalgic and surreal while remaining usable and accessible. Include a hero, album/product cards, mood storytelling, poster/grid gallery, and strong CTAs (play, download, buy).

Palette & atmosphere
- Core colors: neon magenta, electric purple, cyan glow, midnight navy/black. Use sunset gradients (pink → purple → blue) for large areas. Add chrome/silver accents sparingly.
- Backgrounds: horizon grid floor fading to a retro sun with stripes; optional CRT scanline overlay (`bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]`).
- Textures: grain/noise overlay for analog feel; subtle VHS chromatic aberration on hero art; checkerboard or glitch strips as separators.
- Lighting: soft glows around key text/buttons; minimal shadows otherwise.

Layout blueprint
- Navigation: wordmark in retro sans/serif, links with glow hover, and a compact CTA (“Listen now”). Consider neon underline on active link.
- Hero: full-width gradient or starfield backdrop, with large display text (upper/lower mixed), subhead about the album/experience, and dual CTAs (“Play set”, “Buy cassette”). Include a circular sun with stripes, wireframe landscape, or palm silhouettes, plus a floating bust/CRT/pixel art.
- Feature/album cards: 6–9 cards styled like cassette covers or vinyl sleeves. Each includes cover art, title, artist, length/price, and CTA chip (“Play”, “Add”). Use `border border-white/15`, `bg-white/5`, and glow on hover; optionally angle cards by 1–2 degrees.
- Mood/story section: two-column block explaining the vibe (late-night mallsoft, citypop). Add a quote in italic neon text with a vertical glow bar.
- Tracklist or product grid: list tracks with duration and icons; or grid of merch (posters, tapes, tees) using outlined buttons. Add neon divider lines and small “Sold out” tags.
- Poster gallery: masonry or 3xN grid of vaporwave posters; include hover zoom and label chips (Citypop, Mallsoft, Chill). Provide “View full poster” CTA.
- CTA/footer: closing section with gradient background, large neon button (“Enter the synthwave”), and social icons in outlined circles with glows. Add small retro ASCII footer text.

Typography
- Headings: retro display sans/serif with wide letterforms; weight 700–800. Use outlines or shadowed text to mimic neon signage. Allow uppercase with slight tracking.
- Body: modern sans at 15–17px, line height 1.6–1.7. Keep body text readable on dark backgrounds; avoid over-glow on long paragraphs.
- Accent text: monospace for timestamps/track numbers; cursive or italic for mood quotes.

Components & states
- Buttons: pill or rectangle with neon fill and glow `shadow-[0_0_20px_rgba(255,0,255,0.35)]`. Secondary is outline with inner glow. Hover brightens; active presses slightly; focus ring visible in cyan/pink.
- Chips: transparent pills with thin neon stroke; active fills with gradient. Use for genres and filters.
- Cards: `rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(111,66,193,0.35)]`. Add corner labels or sticker dots.
- Inputs: dark fields with neon caret and `border border-white/15`. Focus ring in cyan/pink; placeholder in muted lavender.
- Dividers: neon lines, gradient bars, or checkerboard strips. Use sunburst or grid overlays to break sections.

Motion
- Smooth fades/slides (160–240ms). Use gentle parallax on hero background; small float on key art. Respect `prefers-reduced-motion`.
- Hover effects: slight tilt/scale (≤1.03), glow intensification, grain shift. Avoid aggressive glitch if it harms readability; if used, keep subtle and togglable.

Accessibility
- Ensure contrast: text on gradients/dark backgrounds must meet 4.5:1 (add scrims behind text if needed). Limit glow blur on body text.
- Provide pause/stop controls for marquee or animated backgrounds. Keep focus outlines visible over neon backgrounds.
- All images need alt text; icon-only buttons require `aria-label`. States should not rely on color alone; include labels.

Responsive behavior
- Mobile: simplify background (no heavy grids), stack hero content, keep CTAs full-width. Cards become full-width with minimal tilt. Navigation collapses to drawer; keep glow minimal to reduce clutter.
- Tablet: 2-column grids for cards/posters; hero art slightly offset with parallax. Controls remain reachable with visible focus rings.
- Desktop: more layers and patterns; use `max-w-6xl/7xl` container with 24–32px gutters to maintain breathing room.

Content & microcopy
- Tone: dreamy, nostalgic, slightly ironic. Use references to VHS, cassette, late-night malls, and synths.
- CTA examples: “Play the set,” “Buy cassette,” “Download FLAC,” “Enter the arcade.”
- Provide metadata for tracks/products (BPM, runtime, edition) in monospace rows. Keep descriptions short and vibe-rich.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Hero: `relative overflow-hidden rounded-3xl bg-gradient-to-b from-fuchsia-600/60 via-purple-700/50 to-slate-950 p-10 lg:p-16`
- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Card: `rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,0,255,0.35)]`
- Button: `inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold uppercase tracking-[0.08em]`
- Divider: `h-px bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500`

Deliver a cohesive vaporwave page that glows with retro-futurist nostalgia while keeping text legible, navigation straightforward, and accessibility intact.
