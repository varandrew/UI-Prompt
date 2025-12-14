# Custom Prompt

## 中文版本 (zh-CN)

请用 TailwindCSS 创建「科技反设计」页面，延续 antiDesign 家族的挑衅、打破网格、叠加排版与故意粗糙感，同时确保可访问性。包含 Hero、分割栏位、混乱但有序的卡片/图文区、语录/公告墙、CTA 与底部资讯。

Craft a “Tech Anti-Design” page in TailwindCSS that deliberately breaks conventions while remaining legible and accessible. Think bold, raw, and slightly anarchic: overlapping layers, unexpected spacing, mixed typography scales, visible construction lines, ASCII-like widgets, and clashing geometry. Keep color blocking high-contrast (acid yellow, electric cyan, magenta, jet black, off-white) but constrain to 2–3 bold hues plus neutrals to avoid visual fatigue. Despite the chaos, maintain navigability, focus states, and readable content.

Tone & philosophy
- Challenge the grid: allow offset blocks, rotated labels, oversized margins, and misaligned cards while preserving text legibility and logical reading order.
- Showcase tech attitude: terminal hints, debug overlays, inspection marks, “work-in-progress” stickers, and tape/arrow graphics.
- Embrace utility UI tropes (checkboxes, sliders, toggles) but exaggerate sizing, stroke weight, and copy. Use obvious outlines and dotted guides.
- Maintain accessibility: keyboard focus, contrasts, and aria labels must be intact even if visuals appear noisy.

Layout blueprint
- Navigation: sticky bar with oversized logo on the left and compressed links on the right. Include a toggled “console” chip and a loud CTA (“Deploy chaos”). Add an optional top ticker/marquee for alerts.
- Hero: asymmetric split—giant headline (all-caps, 48–64px) with hand-drawn underline or bracket, paired with a glitchy illustration or monochrome 3D wireframe. Overlay rotated badges (“Beta”, “Unstable”, “v0.9”) pinned with tape/clip visuals. Dual CTAs: primary loud fill, secondary stroke with dashed border.
- Info strips: alternating background blocks (black/white/acid) with short statements, stats, or feature claims. Add thin gridlines (`bg-[linear-gradient(...)]`) at low opacity to hint blueprint vibes.
- Feature chaos grid: 6–9 cards, each intentionally offset and overlapping via `translate` and `rotate` utilities. Cards may include: title, 2–3 line body, ASCII divider, micro-tag list, and a tiny “open” button. Use `mix-blend` subtly for images; keep text high contrast.
- Console/demo band: faux terminal with monospace, blinking caret, and command/result pairs. Adjacent column shows “system status” boxes with checkboxes and toggles.
- Quotes/announcement wall: stacked “posters” at different rotations with bold typography; include one sharply minimal quote for contrast. Use paper-like shadows and rough edges (`shadow-[0_10px_0_#000]`).
- Roadmap or changelog timeline: vertical line with chunky nodes and hoverable detail cards. Include strikethrough items to show discarded ideas.
- CTA/footer: rebellious phrasing (“Join the anomaly”), social icons inside circles/squares with thick strokes, and a tiny footer nav that looks like a DOS directory listing.

Typography & hierarchy
- Mix type scales intentionally: pair a brutalist grotesk with monospace. Allow condensed headings and wide body; vary letter spacing per label.
- Headings heavy (700–900 weight). Body 15–17px with 1.6 line height; keep paragraphs short. Microcopy can be uppercase with spaced tracking.
- Use text treatments: outlines, shadows, slashes `//`, bracketed tags `[ALPHA]`, ASCII arrows `-->`.

Color & surfaces
- Palette suggestion: black/white base plus one neon (acid yellow `#F5E400` or cyan `#00E5FF`) and an accent magenta `#FF3EA5`. Avoid gradients except noise overlays; flat colors preferred.
- Borders: 2–3px strokes, dashed/dotted mixes. Use high-contrast blocks to break sections; allow inverted text on neon backgrounds but ensure contrast.
- Shadows: hard drop shadows or offset ink-trap shadows for posters; avoid soft, dreamy blur.

Components & states
- Buttons: rectangle or pill with thick stroke. Hover swaps fill/stroke; active nudges down 2px. Focus-visible outline 3px in contrasting neon/black.
- Chips: boxy with uppercase text; some rotated at -4° or +5°. Use strikethrough variants for “Deprecated.”
- Cards: `rounded-lg` optional; stroke `border-2 border-black` or `border-white` depending on background. Add “handle” dots or corner brackets for visual noise.
- Inputs: oversized text fields with monospace placeholders; `outline-none border-2`. Focus ring stays thick and offset.
- Toggles: chunky with exaggerated thumb; label includes state text to avoid color-only signaling.

Motion
- Use abrupt, snappy transitions (120–180ms) with steps or linear easing. Hover jitter or micro-glitch on key visuals is acceptable but must respect `prefers-reduced-motion`.
- Stagger card entrances with small rotations; keep text stable to avoid headaches.

Accessibility & structure
- Semantic order matters: even if visuals overlap, DOM order must follow reading flow (hero → features → console → wall → CTA).
- Contrast: ensure all text meets 4.5:1 against backgrounds; add scrims on neon blocks if necessary.
- Provide aria labels for icon-only buttons and marquee/ticker. Allow pausing of animated elements and avoid infinite flashing.
- Keyboard: every card/link is focusable; focus outlines always visible even on loud backgrounds.

Responsive behavior
- Mobile: reduce rotation angles, simplify overlaps, and stack sections. Keep nav to a single row with menu drawer. Ensure cards remain tappable with 44px targets.
- Tablet: 2–3 column chaos grid; controlled offsets to avoid clipping. Console band can stack into two rows.
- Desktop: unleash asymmetry with larger negative spaces; allow more rotation and overlapping layers but preserve readability and hit targets.

Content & microcopy
- Voice: rebellious, technical, slightly sarcastic. Replace filler with specific provocations (“Break the pattern,” “Ship the anomaly”).
- CTA examples: “Deploy chaos,” “Open console,” “View unstable build,” “Send error report.”
- Support metadata rows: build version, uptime, commits, error count, all in monospace.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Grid: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6` with per-card transforms (`-rotate-2 translate-y-2`)
- Card: `border-2 border-black bg-white p-5 shadow-[6px_6px_0_#000] break-inside-avoid`
- Button: `inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-semibold uppercase tracking-[0.08em] transition hover:-translate-y-0.5 active:translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2`
- Marquee: `overflow-hidden whitespace-nowrap border-y border-black py-2 text-sm font-mono`

Deliver an anti-design tech page that feels intentionally unruly yet navigable, with strong contrast, unapologetic typography, and fully preserved accessibility.

---

## English Version (en-US)

Craft a “Tech Anti-Design” page in TailwindCSS that deliberately breaks conventions while remaining legible and accessible. Think bold, raw, and slightly anarchic: overlapping layers, unexpected spacing, mixed typography scales, visible construction lines, ASCII-like widgets, and clashing geometry. Keep color blocking high-contrast (acid yellow, electric cyan, magenta, jet black, off-white) but constrain to 2–3 bold hues plus neutrals to avoid visual fatigue. Despite the chaos, maintain navigability, focus states, and readable content.

Tone & philosophy
- Challenge the grid: allow offset blocks, rotated labels, oversized margins, and misaligned cards while preserving text legibility and logical reading order.
- Showcase tech attitude: terminal hints, debug overlays, inspection marks, “work-in-progress” stickers, and tape/arrow graphics.
- Embrace utility UI tropes (checkboxes, sliders, toggles) but exaggerate sizing, stroke weight, and copy. Use obvious outlines and dotted guides.
- Maintain accessibility: keyboard focus, contrasts, and aria labels must be intact even if visuals appear noisy.

Layout blueprint
- Navigation: sticky bar with oversized logo on the left and compressed links on the right. Include a toggled “console” chip and a loud CTA (“Deploy chaos”). Add an optional top ticker/marquee for alerts.
- Hero: asymmetric split—giant headline (all-caps, 48–64px) with hand-drawn underline or bracket, paired with a glitchy illustration or monochrome 3D wireframe. Overlay rotated badges (“Beta”, “Unstable”, “v0.9”) pinned with tape/clip visuals. Dual CTAs: primary loud fill, secondary stroke with dashed border.
- Info strips: alternating background blocks (black/white/acid) with short statements, stats, or feature claims. Add thin gridlines (`bg-[linear-gradient(...)]`) at low opacity to hint blueprint vibes.
- Feature chaos grid: 6–9 cards, each intentionally offset and overlapping via `translate` and `rotate` utilities. Cards may include: title, 2–3 line body, ASCII divider, micro-tag list, and a tiny “open” button. Use `mix-blend` subtly for images; keep text high contrast.
- Console/demo band: faux terminal with monospace, blinking caret, and command/result pairs. Adjacent column shows “system status” boxes with checkboxes and toggles.
- Quotes/announcement wall: stacked “posters” at different rotations with bold typography; include one sharply minimal quote for contrast. Use paper-like shadows and rough edges (`shadow-[0_10px_0_#000]`).
- Roadmap or changelog timeline: vertical line with chunky nodes and hoverable detail cards. Include strikethrough items to show discarded ideas.
- CTA/footer: rebellious phrasing (“Join the anomaly”), social icons inside circles/squares with thick strokes, and a tiny footer nav that looks like a DOS directory listing.

Typography & hierarchy
- Mix type scales intentionally: pair a brutalist grotesk with monospace. Allow condensed headings and wide body; vary letter spacing per label.
- Headings heavy (700–900 weight). Body 15–17px with 1.6 line height; keep paragraphs short. Microcopy can be uppercase with spaced tracking.
- Use text treatments: outlines, shadows, slashes `//`, bracketed tags `[ALPHA]`, ASCII arrows `-->`.

Color & surfaces
- Palette suggestion: black/white base plus one neon (acid yellow `#F5E400` or cyan `#00E5FF`) and an accent magenta `#FF3EA5`. Avoid gradients except noise overlays; flat colors preferred.
- Borders: 2–3px strokes, dashed/dotted mixes. Use high-contrast blocks to break sections; allow inverted text on neon backgrounds but ensure contrast.
- Shadows: hard drop shadows or offset ink-trap shadows for posters; avoid soft, dreamy blur.

Components & states
- Buttons: rectangle or pill with thick stroke. Hover swaps fill/stroke; active nudges down 2px. Focus-visible outline 3px in contrasting neon/black.
- Chips: boxy with uppercase text; some rotated at -4° or +5°. Use strikethrough variants for “Deprecated.”
- Cards: `rounded-lg` optional; stroke `border-2 border-black` or `border-white` depending on background. Add “handle” dots or corner brackets for visual noise.
- Inputs: oversized text fields with monospace placeholders; `outline-none border-2`. Focus ring stays thick and offset.
- Toggles: chunky with exaggerated thumb; label includes state text to avoid color-only signaling.

Motion
- Use abrupt, snappy transitions (120–180ms) with steps or linear easing. Hover jitter or micro-glitch on key visuals is acceptable but must respect `prefers-reduced-motion`.
- Stagger card entrances with small rotations; keep text stable to avoid headaches.

Accessibility & structure
- Semantic order matters: even if visuals overlap, DOM order must follow reading flow (hero → features → console → wall → CTA).
- Contrast: ensure all text meets 4.5:1 against backgrounds; add scrims on neon blocks if necessary.
- Provide aria labels for icon-only buttons and marquee/ticker. Allow pausing of animated elements and avoid infinite flashing.
- Keyboard: every card/link is focusable; focus outlines always visible even on loud backgrounds.

Responsive behavior
- Mobile: reduce rotation angles, simplify overlaps, and stack sections. Keep nav to a single row with menu drawer. Ensure cards remain tappable with 44px targets.
- Tablet: 2–3 column chaos grid; controlled offsets to avoid clipping. Console band can stack into two rows.
- Desktop: unleash asymmetry with larger negative spaces; allow more rotation and overlapping layers but preserve readability and hit targets.

Content & microcopy
- Voice: rebellious, technical, slightly sarcastic. Replace filler with specific provocations (“Break the pattern,” “Ship the anomaly”).
- CTA examples: “Deploy chaos,” “Open console,” “View unstable build,” “Send error report.”
- Support metadata rows: build version, uptime, commits, error count, all in monospace.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Grid: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6` with per-card transforms (`-rotate-2 translate-y-2`)
- Card: `border-2 border-black bg-white p-5 shadow-[6px_6px_0_#000] break-inside-avoid`
- Button: `inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-semibold uppercase tracking-[0.08em] transition hover:-translate-y-0.5 active:translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2`
- Marquee: `overflow-hidden whitespace-nowrap border-y border-black py-2 text-sm font-mono`

Deliver an anti-design tech page that feels intentionally unruly yet navigable, with strong contrast, unapologetic typography, and fully preserved accessibility.
