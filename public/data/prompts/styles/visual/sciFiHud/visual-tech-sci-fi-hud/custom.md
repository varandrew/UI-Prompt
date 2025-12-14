# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「科幻 HUD」页面，延续 sciFiHud 家族：全息网格、线框、光栅、霓虹细线、模组化面板与即时数据。包含 Hero、状态/遥测板、卡片/图文模组、任务时间线、CTA 与系统脚注。确保高对比、清晰的焦点样式与可访问性。

Build a “Sci-Fi HUD” experience with TailwindCSS. Use holographic grids, line-based panels, neon accents, vector wireframes, and modular data tiles. The interface should feel like a control surface: crisp strokes, translucent glass blocks, subtle glows, and animated telemetry, while preserving accessibility and readability. Include a hero, status panels, mission timeline, cards for modules/features, and strong CTAs.

Visual language
- Palette: charcoal/dark navy base with bright accents (cyan/teal, electric blue, magenta). Maintain high contrast for text; limit to 1–2 accent hues plus white.
- Surfaces: translucent panels (`bg-white/5` to `/10`) with 1–2px strokes and faint inner glows. Use gridlines or dotted backgrounds (`bg-[radial-gradient(circle,_#00e5ff_1px,_transparent_1px)]`) at low opacity.
- Graphics: wireframe spheres, target reticles, scanning arcs, and corner brackets. Keep lines thin and aligned; avoid messy overlays.
- Lighting: light outer glows on buttons and key accents; avoid heavy shadows.

Layout blueprint
- Navigation: slim bar with logo glyph, system status indicator (online/offline), and compact actions (Docs, Console, Login). Add a “Command” button that looks like a primary control.
- Hero: split layout with headline (all-caps or semi-condensed), mission statement subtext, and CTAs (“Initiate mission”, “Open console”). Right side: data visualization—radar ring, orbit paths, or 3D wireframe with overlay stats.
- Status/telemetry panels: grid of 4–6 tiles showing metrics (uptime, signal strength, latency, power). Each tile uses `border border-cyan-500/30 bg-white/5`, includes a label, numeric stat (monospace), trend sparkline, and small badge for state.
- Mission timeline: vertical or horizontal track with nodes and timestamps. Include tags (Deployed, Scanning, Analyzing, Complete) with colored strokes (no heavy fills). Hover or focus reveals details.
- Modules/features cards: 6–9 cards describing capabilities (Sensors, Mapping, Threat detection, Comms). Cards have corner brackets, small iconography, and `grid` layouts inside; contain title, 2–3 line copy, and CTA chip.
- Console/log strip: text-on-dark monospace area showing recent commands or logs with timecodes. Include “Copy log” action and a filter dropdown.
- CTA/footer: closing panel with bold “Engage system” CTA and secondary “View protocol”. Add system footer text with build number and link set.

Typography
- Use geometric sans with tight tracking; body at 15–16px, line height 1.5–1.6. Headlines 600–700 weight; allow uppercase labels with micro letter spacing.
- Numbers and telemetry must be monospace for alignment. Use bracketed labels `[ONLINE]`, `[ALERT]` to reinforce HUD feel.
- Keep text crisp; avoid overly decorative fonts.

Components & states
- Buttons: pill or squircle with glow. Primary fill uses accent with `shadow-[0_0_20px_rgba(0,229,255,0.4)]`; secondary outline with thin stroke and inner glow. Hover brightens; active lowers brightness; focus-visible ring 2–3px in accent.
- Chips: outline with neon stroke; active chips fill lightly (`bg-cyan-500/15`). Use for filters and timeline states.
- Cards: `rounded-xl border border-cyan-500/30 bg-white/5 backdrop-blur` with `p-5 md:p-6`. Add corner brackets using pseudo-elements or extra divs.
- Inputs: dark glass backgrounds with `border border-cyan-500/30`, glowing caret, and clear focus outline. Provide placeholder text in lighter gray/teal.
- Dividers: `border-b border-white/10` or dotted lines. Use grid overlays for sections (`bg-[linear-gradient(...)]`).

Motion
- Quick but smooth: 140–200ms ease-out. Use subtle scanning animations on radar rings and pulsing glows for “live” badges. Respect `prefers-reduced-motion`.
- Hover: slight translate/scale (≤1.02). Cards can light up corners; buttons brighten.
- On timeline or log updates, fade in entries with small upward translate to imply stream.

Accessibility
- Maintain contrast: light text on dark backgrounds with sufficient ratio. For neon on dark, increase stroke width or add outer glow to separate from background.
- Ensure focus styles are highly visible. All interactive elements must have keyboard access. Provide `aria-labels` for icon-only controls.
- Avoid color-only signaling: include labels (“ALERT”, “OK”) and icons.
- For animated elements (scanners, tickers), provide pause/stop and honor reduced-motion settings.

Responsive behavior
- Mobile: stack hero, reduce complexity of graphics, keep panels single-column. Collapse nav into drawer; keep key CTAs accessible.
- Tablet: 2-column grids for panels; timeline horizontal scroll if needed.
- Desktop: multi-column grids (3–4) for telemetry; allow larger hero visualization; keep container to `max-w-6xl/7xl` with `px-6 lg:px-10`.

Content & microcopy
- Tone: technical, mission-driven, concise. Examples: “Stabilize signal,” “Initialize scan,” “Deploy beacon.”
- Provide metadata rows (Uplink, Frequency, Encryption) with monospace values. Display statuses as bracketed tags `[SECURE] [LIVE]`.
- Keep CTA copy action-oriented: “Initiate mission,” “Open console,” “Sync data.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Grid: `grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6` for panels
- Card: `rounded-xl border border-cyan-500/30 bg-white/5 backdrop-blur p-6 shadow-[0_0_24px_rgba(0,229,255,0.12)] transition hover:-translate-y-1`
- Buttons: `inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold uppercase tracking-[0.08em]`
- Terminal: `font-mono text-sm bg-white/5 border border-white/10 rounded-xl p-4 space-y-1`

Deliver a cohesive sci-fi HUD page that feels operational and futuristic while keeping clarity, keyboard navigation, and contrast at the center.

---

## English Version (en-US)

Build a “Sci-Fi HUD” experience with TailwindCSS. Use holographic grids, line-based panels, neon accents, vector wireframes, and modular data tiles. The interface should feel like a control surface: crisp strokes, translucent glass blocks, subtle glows, and animated telemetry, while preserving accessibility and readability. Include a hero, status panels, mission timeline, cards for modules/features, and strong CTAs.

Visual language
- Palette: charcoal/dark navy base with bright accents (cyan/teal, electric blue, magenta). Maintain high contrast for text; limit to 1–2 accent hues plus white.
- Surfaces: translucent panels (`bg-white/5` to `/10`) with 1–2px strokes and faint inner glows. Use gridlines or dotted backgrounds (`bg-[radial-gradient(circle,_#00e5ff_1px,_transparent_1px)]`) at low opacity.
- Graphics: wireframe spheres, target reticles, scanning arcs, and corner brackets. Keep lines thin and aligned; avoid messy overlays.
- Lighting: light outer glows on buttons and key accents; avoid heavy shadows.

Layout blueprint
- Navigation: slim bar with logo glyph, system status indicator (online/offline), and compact actions (Docs, Console, Login). Add a “Command” button that looks like a primary control.
- Hero: split layout with headline (all-caps or semi-condensed), mission statement subtext, and CTAs (“Initiate mission”, “Open console”). Right side: data visualization—radar ring, orbit paths, or 3D wireframe with overlay stats.
- Status/telemetry panels: grid of 4–6 tiles showing metrics (uptime, signal strength, latency, power). Each tile uses `border border-cyan-500/30 bg-white/5`, includes a label, numeric stat (monospace), trend sparkline, and small badge for state.
- Mission timeline: vertical or horizontal track with nodes and timestamps. Include tags (Deployed, Scanning, Analyzing, Complete) with colored strokes (no heavy fills). Hover or focus reveals details.
- Modules/features cards: 6–9 cards describing capabilities (Sensors, Mapping, Threat detection, Comms). Cards have corner brackets, small iconography, and `grid` layouts inside; contain title, 2–3 line copy, and CTA chip.
- Console/log strip: text-on-dark monospace area showing recent commands or logs with timecodes. Include “Copy log” action and a filter dropdown.
- CTA/footer: closing panel with bold “Engage system” CTA and secondary “View protocol”. Add system footer text with build number and link set.

Typography
- Use geometric sans with tight tracking; body at 15–16px, line height 1.5–1.6. Headlines 600–700 weight; allow uppercase labels with micro letter spacing.
- Numbers and telemetry must be monospace for alignment. Use bracketed labels `[ONLINE]`, `[ALERT]` to reinforce HUD feel.
- Keep text crisp; avoid overly decorative fonts.

Components & states
- Buttons: pill or squircle with glow. Primary fill uses accent with `shadow-[0_0_20px_rgba(0,229,255,0.4)]`; secondary outline with thin stroke and inner glow. Hover brightens; active lowers brightness; focus-visible ring 2–3px in accent.
- Chips: outline with neon stroke; active chips fill lightly (`bg-cyan-500/15`). Use for filters and timeline states.
- Cards: `rounded-xl border border-cyan-500/30 bg-white/5 backdrop-blur` with `p-5 md:p-6`. Add corner brackets using pseudo-elements or extra divs.
- Inputs: dark glass backgrounds with `border border-cyan-500/30`, glowing caret, and clear focus outline. Provide placeholder text in lighter gray/teal.
- Dividers: `border-b border-white/10` or dotted lines. Use grid overlays for sections (`bg-[linear-gradient(...)]`).

Motion
- Quick but smooth: 140–200ms ease-out. Use subtle scanning animations on radar rings and pulsing glows for “live” badges. Respect `prefers-reduced-motion`.
- Hover: slight translate/scale (≤1.02). Cards can light up corners; buttons brighten.
- On timeline or log updates, fade in entries with small upward translate to imply stream.

Accessibility
- Maintain contrast: light text on dark backgrounds with sufficient ratio. For neon on dark, increase stroke width or add outer glow to separate from background.
- Ensure focus styles are highly visible. All interactive elements must have keyboard access. Provide `aria-labels` for icon-only controls.
- Avoid color-only signaling: include labels (“ALERT”, “OK”) and icons.
- For animated elements (scanners, tickers), provide pause/stop and honor reduced-motion settings.

Responsive behavior
- Mobile: stack hero, reduce complexity of graphics, keep panels single-column. Collapse nav into drawer; keep key CTAs accessible.
- Tablet: 2-column grids for panels; timeline horizontal scroll if needed.
- Desktop: multi-column grids (3–4) for telemetry; allow larger hero visualization; keep container to `max-w-6xl/7xl` with `px-6 lg:px-10`.

Content & microcopy
- Tone: technical, mission-driven, concise. Examples: “Stabilize signal,” “Initialize scan,” “Deploy beacon.”
- Provide metadata rows (Uplink, Frequency, Encryption) with monospace values. Display statuses as bracketed tags `[SECURE] [LIVE]`.
- Keep CTA copy action-oriented: “Initiate mission,” “Open console,” “Sync data.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Grid: `grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6` for panels
- Card: `rounded-xl border border-cyan-500/30 bg-white/5 backdrop-blur p-6 shadow-[0_0_24px_rgba(0,229,255,0.12)] transition hover:-translate-y-1`
- Buttons: `inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold uppercase tracking-[0.08em]`
- Terminal: `font-mono text-sm bg-white/5 border border-white/10 rounded-xl p-4 space-y-1`

Deliver a cohesive sci-fi HUD page that feels operational and futuristic while keeping clarity, keyboard navigation, and contrast at the center.
