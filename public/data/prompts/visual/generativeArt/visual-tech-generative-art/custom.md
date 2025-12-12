# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「生成式艺术」页面，延续 generativeArt 家族：演算法图形、渐层、噪声、粒子、线条场、突变形状，并提供互动或状态展示。包含 Hero、作品/案例格网、技术说明、控制/参数、CTA 与页脚。

---

## English Version (en-US)

Design a “Generative Art” page in TailwindCSS. Showcase algorithmic visuals: gradient fields, flowing lines, particles, Voronoi/Delaunay cells, noise-driven blobs, and evolving patterns. The layout should feel computational yet artistic—clean scaffolding around bold canvases. Include a hero, gallery/grid of generative pieces, technique breakdown, parameter controls, and CTAs.

Visual language
- Palette: deep backgrounds (charcoal or midnight) with vivid accents (magenta, cyan, amber, lime). Allow multi-color gradients; keep text high-contrast (off-white).
- Surfaces: minimal chrome; emphasize the canvas. Use `bg-black` or `bg-slate-900` with `border border-white/10` for framing. Optional glass cards for metadata.
- Shapes: organic noise blobs, line fields, particle swarms, geometric tessellations. Consider layering opacity and blend modes (multiply/screen) carefully to preserve readability.

Layout blueprint
- Hero: large canvas preview (video/GIF/static) with overlay headline (38–52px) and concise subhead about generative systems. CTAs: “View gallery”, “Open controls”. Add small chips for tools/tech (p5.js, shaders, WebGL, SVG).
- Gallery grid: 6–12 tiles of generative pieces; each tile includes title, technique (noise flow, L-systems, cellular automata), and a one-line note. Hover reveals subtle motion or parallax; provide “View detail” CTA.
- Detail/spotlight band: a wide canvas or loop with caption, parameters summary (Seed, Iterations, Palette), and download/share buttons. Include FPS/state badge if animated.
- Techniques section: cards for algorithms (Perlin/Simplex noise, Voronoi, flocking/boids, reaction-diffusion). Each card lists concept, typical use, and controls. Add a tiny schematic icon (grid, nodes).
- Controls/parameters: slider/toggle inputs for speed, density, randomness, color palette. Show live tokens/seed values. Provide “Randomize” and “Reset” buttons.
- CTA/footer: invite users to explore, fork, or download packs. Include credits/licensing and social links. Offer “Open source code” link.

Typography
- Use a modern sans or techno grotesk. Headings 600–700; body 15–17px at 1.6 line height. Monospace for code snippets, seeds, and stats.
- Use uppercase micro-labels for algorithm tags with slight letter spacing. Keep copy concise.

Components & states
- Buttons: pill or rounded rectangles; primary filled with gradient or bright accent; secondary outline/glass. Hover brightens; active presses. Focus-visible outline 2–3px.
- Cards: `rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 transition hover:-translate-y-1`. Inside, use `font-mono` for parameters and small chips for tags.
- Canvas frames: `aspect-[4/3]` or `16/9` containers with overflow hidden and soft shadow/glow. Add `rounded-2xl` and thin stroke.
- Inputs: dark UI controls with clear focus rings; sliders styled with accent track/thumb; toggles labeled.
- Chips: `rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.12em]` for algorithm labels or palettes.

Motion
- Use animated previews responsibly; respect `prefers-reduced-motion` by pausing loops or offering static frames. Hover may trigger mild displacement or noise distortion.
- Keep transitions smooth (140–220ms). Avoid excessive flashing or strobing.

Accessibility
- Ensure text contrast on dark backgrounds; add scrims behind overlay text. Provide captions/alt text describing the visuals (pattern, motion, dominant colors).
- Controls must be keyboard-accessible with visible focus. Provide aria-labels for icon-only buttons and descriptive labels for sliders.
- Avoid color-only state; pair with icons/text. Maintain hit area ≥ 44px.

Responsive behavior
- Mobile: stack hero and controls; gallery becomes single-column with horizontal scroll for tags. Keep canvas heights modest to avoid heavy payload; offer play/pause.
- Tablet: 2–3 column grids; controls wrap neatly; maintain clear spacing.
- Desktop: 3–4 columns, `max-w-6xl/7xl` container with 24–32px gutters; allow larger spotlight canvas.

Content guidance
- Tone: curious, experimental, clear. Highlight technique, inputs, and outcomes (“Seeded noise → flowing ribbons,” “Boids → flocking trails”).
- CTA microcopy: “View gallery,” “Randomize seed,” “Download PNG/MP4,” “Open source.”
- Include metadata (Seed, Frames, Runtime, Toolchain). Keep explanations short and informative.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Gallery: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Canvas frame: `relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg`
- Buttons: `inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Chips: `rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.12em]`

Deliver a generative art showcase that balances bold algorithmic visuals with clear structure, controllable parameters, and strong accessibility.
