# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「开发者工具暗色仪表板」，延续 darkMode 家族：深色背景、高对比文字、清晰分区、亮色点缀。包含 Hero、指标/图表、功能卡片、活动日志、CTA 与可访问的表单/控制。

Design a “Dark Mode Developer Dashboard” in TailwindCSS. Prioritize legibility, focus states, and clear hierarchy on dark surfaces. Use deep grays/charcoal with one accent color for highlights. Include a hero/overview, metric tiles, charts, activity/logs, feature cards, and actionable CTAs.

Visual language
- Palette: charcoal/near-black backgrounds (#0E1116 to #121820) with layered grays; accent color (blue/teal/amber) for highlights, links, and charts. Ensure sufficient contrast for text.
- Surfaces: subtle elevation with `bg-white/5`, `bg-slate-900`, `border border-white/10`, and restrained glows/shadows. Avoid pure black on large areas; use slight gradients for depth if desired.
- Typography: modern sans; headings 600–700, body 15–17px at 1.6 line height. Use monospace for code/logs/numbers. Keep line lengths moderate.

Layout blueprint
- Navigation: sticky top bar with logo, search, quick actions, and profile menu. Provide visible focus rings and keyboard shortcuts hints.
- Hero/overview: concise headline, short subhead about the tool, and primary CTA (“Open console”, “Start deploy”) plus secondary (“View docs”). Add a KPI row (uptime, deployments, errors) and a small status badge (Online/Degraded).
- Metric tiles: 4–8 cards with label, value (monospace), trend indicator, and sparkline/mini-bar. Cards use `rounded-xl border border-white/10 bg-white/5 p-5` with `divide-y` optional.
- Charts: line/area/bar with minimal gridlines. Provide legends and clear axis labels; use accent color for primary series and muted grays for baselines.
- Activity/logs: scrollable list or table with timestamps, events, severity. Include filters (All/Errors/Deploys) via chips. Ensure rows are keyboard focusable.
- Feature cards: modules for “Pipelines”, “Integrations”, “Access control”; include icon, title, short copy, and small action link. Use subtle hover lift.
- CTA/footer: closing action with primary button, secondary text link, and links to docs/support. Keep concise microcopy.

Components & states
- Buttons: filled accent for primary, outline/ghost for secondary. Hover brightens or raises; active nudges. Focus-visible outline 2–3px with clear offset. Provide icon-leading variants (play, download).
- Inputs: dark fields `bg-white/5 border border-white/10 rounded-lg px-4 py-3` with clear focus ring. Include inline validation states with text + icon (not color-only).
- Tabs/filters: pill or underline with accent; maintain visible focus. Chips use outline with accent text; active fills lightly.
- Tables/lists: `divide-y divide-white/5`; hover row highlight via `bg-white/5`. Ensure header contrast and sortable indicators.
- Badges: small pill badges for status (Online, Warning, Error) pairing color + text/icon; ensure contrast on dark background.

Motion
- Smooth, minimal transitions (140–200ms). Hover lifts and subtle glows. Respect `prefers-reduced-motion`; disable animated charts if user prefers.
- Stagger metric tile entrance lightly (60–100ms offsets) for calm pacing.

Accessibility
- Contrast: text and controls must meet 4.5:1. On accent backgrounds, invert text as needed. Add scrims on images/videos for overlays.
- Focus: clearly visible outlines on dark surfaces. Keyboard navigation must reach all cards, filters, and controls. Provide aria-labels for icon-only buttons.
- Avoid color-only states; pair with icons/labels. Ensure hit areas ≥ 44px.

Responsive behavior
- Mobile: stack hero and KPI tiles; use horizontal scroll for chips. Collapse nav into menu; keep CTAs full-width. Logs may become cards or single-column table.
- Tablet: 2–3 column metric grids; charts scale down with preserved padding; activity list stays readable.
- Desktop: 3–4 column metrics, side-by-side chart + activity. Use `max-w-6xl/7xl` with 24–32px gutters.

Content guidance
- Tone: direct, professional, calm. Lead with system health and next action. Keep copy short (“Deploy now”, “Roll back”, “View logs”).
- Provide labels, units, and descriptions for all metrics and charts. Include timestamps and durations in monospace for alignment.
- CTA microcopy: “Open console”, “Deploy service”, “Add integration”, “View documentation”.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10 py-12`
- Card base: `rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1`
- Buttons: `inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Chips: `rounded-full border border-white/20 px-3 py-1 text-sm font-medium`
- Table/log: `divide-y divide-white/5 text-sm font-mono`

Deliver a dark, focused dashboard that feels purposeful and modern—sharp contrast, clear data, confident CTAs—without sacrificing accessibility.

---

## English Version (en-US)

Design a “Dark Mode Developer Dashboard” in TailwindCSS. Prioritize legibility, focus states, and clear hierarchy on dark surfaces. Use deep grays/charcoal with one accent color for highlights. Include a hero/overview, metric tiles, charts, activity/logs, feature cards, and actionable CTAs.

Visual language
- Palette: charcoal/near-black backgrounds (#0E1116 to #121820) with layered grays; accent color (blue/teal/amber) for highlights, links, and charts. Ensure sufficient contrast for text.
- Surfaces: subtle elevation with `bg-white/5`, `bg-slate-900`, `border border-white/10`, and restrained glows/shadows. Avoid pure black on large areas; use slight gradients for depth if desired.
- Typography: modern sans; headings 600–700, body 15–17px at 1.6 line height. Use monospace for code/logs/numbers. Keep line lengths moderate.

Layout blueprint
- Navigation: sticky top bar with logo, search, quick actions, and profile menu. Provide visible focus rings and keyboard shortcuts hints.
- Hero/overview: concise headline, short subhead about the tool, and primary CTA (“Open console”, “Start deploy”) plus secondary (“View docs”). Add a KPI row (uptime, deployments, errors) and a small status badge (Online/Degraded).
- Metric tiles: 4–8 cards with label, value (monospace), trend indicator, and sparkline/mini-bar. Cards use `rounded-xl border border-white/10 bg-white/5 p-5` with `divide-y` optional.
- Charts: line/area/bar with minimal gridlines. Provide legends and clear axis labels; use accent color for primary series and muted grays for baselines.
- Activity/logs: scrollable list or table with timestamps, events, severity. Include filters (All/Errors/Deploys) via chips. Ensure rows are keyboard focusable.
- Feature cards: modules for “Pipelines”, “Integrations”, “Access control”; include icon, title, short copy, and small action link. Use subtle hover lift.
- CTA/footer: closing action with primary button, secondary text link, and links to docs/support. Keep concise microcopy.

Components & states
- Buttons: filled accent for primary, outline/ghost for secondary. Hover brightens or raises; active nudges. Focus-visible outline 2–3px with clear offset. Provide icon-leading variants (play, download).
- Inputs: dark fields `bg-white/5 border border-white/10 rounded-lg px-4 py-3` with clear focus ring. Include inline validation states with text + icon (not color-only).
- Tabs/filters: pill or underline with accent; maintain visible focus. Chips use outline with accent text; active fills lightly.
- Tables/lists: `divide-y divide-white/5`; hover row highlight via `bg-white/5`. Ensure header contrast and sortable indicators.
- Badges: small pill badges for status (Online, Warning, Error) pairing color + text/icon; ensure contrast on dark background.

Motion
- Smooth, minimal transitions (140–200ms). Hover lifts and subtle glows. Respect `prefers-reduced-motion`; disable animated charts if user prefers.
- Stagger metric tile entrance lightly (60–100ms offsets) for calm pacing.

Accessibility
- Contrast: text and controls must meet 4.5:1. On accent backgrounds, invert text as needed. Add scrims on images/videos for overlays.
- Focus: clearly visible outlines on dark surfaces. Keyboard navigation must reach all cards, filters, and controls. Provide aria-labels for icon-only buttons.
- Avoid color-only states; pair with icons/labels. Ensure hit areas ≥ 44px.

Responsive behavior
- Mobile: stack hero and KPI tiles; use horizontal scroll for chips. Collapse nav into menu; keep CTAs full-width. Logs may become cards or single-column table.
- Tablet: 2–3 column metric grids; charts scale down with preserved padding; activity list stays readable.
- Desktop: 3–4 column metrics, side-by-side chart + activity. Use `max-w-6xl/7xl` with 24–32px gutters.

Content guidance
- Tone: direct, professional, calm. Lead with system health and next action. Keep copy short (“Deploy now”, “Roll back”, “View logs”).
- Provide labels, units, and descriptions for all metrics and charts. Include timestamps and durations in monospace for alignment.
- CTA microcopy: “Open console”, “Deploy service”, “Add integration”, “View documentation”.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10 py-12`
- Card base: `rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1`
- Buttons: `inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Chips: `rounded-full border border-white/20 px-3 py-1 text-sm font-medium`
- Table/log: `divide-y divide-white/5 text-sm font-mono`

Deliver a dark, focused dashboard that feels purposeful and modern—sharp contrast, clear data, confident CTAs—without sacrificing accessibility.
