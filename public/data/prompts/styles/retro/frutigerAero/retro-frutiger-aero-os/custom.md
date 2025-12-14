# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「水晶气泡 / Frutiger Aero OS」页面，延续 frutigerAero 家族：高饱和蓝绿渐层、玻璃气泡、高光、微光泽按钮、圆角模块与 XP 时代 UI 气息。包含 Hero、功能或产品卡片、特色亮点、截图展示、CTA 与页脚，注意可访问性。

Design a “Frutiger Aero OS” page in TailwindCSS—glossy 2000s optimism with saturated aqua/blue gradients, glassy bubbles, soft highlights, and rounded modules. Blend XP-era friendliness with modern accessibility. Include a hero, feature/utility cards, highlight strips, screenshot or app preview, and clear CTAs.

Visual language
- Palette: bright aqua/teal (#00B5D9), sky blue (#3EB5FF), soft lime (#B5FF71) accents, and white. Use darker navy for text on bright backgrounds. Introduce subtle chrome/silver for frames.
- Surfaces: glossy gradients (top-left light to bottom-right darker), glass panels with `bg-white/40` + blur, faint refraction highlights, and bubble overlays. Add gentle drop shadows with colored tint.
- Shapes: rounded corners (12–18px), pill buttons, circular bubbles, soft tabs. Avoid sharp edges or brutalism.
- Textures: optional clouds, sparkles, or sunburst rays behind hero; subtle noise to prevent banding.

Layout blueprint
- Navigation: bright translucent bar with wordmark, links, and a primary pill CTA (“Download,” “Try beta”). Add a tiny status light for online/offline.
- Hero: large, friendly headline (36–52px), supportive subhead, and dual CTAs (primary glassy pill, secondary outline). Right side: floating device mock or layered bubbles/wave forms. Add a small “System status” chip with icon.
- Feature cards: 6–9 rounded cards with gradient backgrounds or glass panels. Each includes icon, title, 2–3 line body, and small action. Hover lifts with brighter highlight. Include one “mini widget” card (music, weather, or task list) for OS vibes.
- Screenshot/app preview: framed window with title bar, subtle drop shadow, and reflection line. Add tabs or toolbar icons to hint “app chrome.”
- Highlights strip: horizontal band with 3–4 stats or value props; use pill badges and a soft glow dividing line.
- Steps/onboarding: 3–4 steps in rounded tiles with numbered bubbles and concise copy. Optionally add an “auto setup” progress bar with gradient fill.
- CTA/footer: final glow-backed section with primary button and secondary text link; include social/icons styled as glossy dots and small legal links.

Typography
- Use a humanist sans (Frutiger-ish) with friendly curves. Headings 600–700 weight; body 15–17px with 1.5–1.6 line height. Slightly larger letter spacing on uppercase labels.
- Keep text dark on bright gradients; when text sits on glass panels, ensure contrast with overlays.
- Use monospace sparingly for status indicators or code-like labels.

Components & states
- Buttons: pill with glass or gradient fill; `shadow-[0_12px_30px_rgba(0,181,217,0.35)]`; hover brightens; active presses down slightly. Focus-visible outline 2–3px in high-contrast color.
- Cards: `rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md shadow-lg` or solid gradient fills. Hover `-translate-y-1` and saturate slightly.
- Chips: glossy pills with gradient or soft outline; icons inside circles. Active chip gets brighter fill and inner glow.
- Inputs: rounded fields with `bg-white/60 border border-white/50` and strong focus ring. Add a faint inner shadow for depth.
- Tabs: soft pill segmented control with gradient active state; icons optional.

Motion
- Playful but smooth: 160–240ms ease-out. Hover pop/lift, bubble float animations, gentle parallax on hero waves. Respect `prefers-reduced-motion` and provide pause for ambient effects.

Accessibility
- Contrast: ensure text on bright gradients meets 4.5:1; add dark overlay/scrim on backgrounds when needed. Avoid relying on color alone for status—pair with labels/icons.
- Keyboard: all cards and buttons focusable; visible focus ring. Provide aria-labels for icon buttons and status indicators.
- Avoid excessive motion for users with reduced-motion; disable parallax and animations accordingly.

Responsive behavior
- Mobile: stack hero; simplify bubbles and gradients; keep CTAs full-width. Feature cards become single-column; screenshot shrinks with maintained aspect.
- Tablet: 2–3 column grids; keep nav readable; ensure shadows don’t overwhelm text.
- Desktop: 3–4 column grids; `max-w-6xl/7xl` container; allow layered hero art without obscuring copy.

Content guidance
- Tone: upbeat, friendly, lightly futuristic. Focus on ease, speed, clarity.
- CTA microcopy: “Download,” “Try beta,” “Launch dashboard,” “See what’s new.”
- Highlight outcomes and safety: “Secured,” “Optimized,” “Ready out of the box.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Hero shell: `relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-300 via-cyan-300 to-blue-500 text-slate-900`
- Card: `rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md p-6 shadow-lg transition hover:-translate-y-1`
- Button: `inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Chip: `rounded-full bg-white/40 px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm`

Deliver a glossy, optimistic Frutiger Aero OS-inspired page that feels like a friendly 2000s desktop reimagined for today—bright, soft, and accessible.

---

## English Version (en-US)

Design a “Frutiger Aero OS” page in TailwindCSS—glossy 2000s optimism with saturated aqua/blue gradients, glassy bubbles, soft highlights, and rounded modules. Blend XP-era friendliness with modern accessibility. Include a hero, feature/utility cards, highlight strips, screenshot or app preview, and clear CTAs.

Visual language
- Palette: bright aqua/teal (#00B5D9), sky blue (#3EB5FF), soft lime (#B5FF71) accents, and white. Use darker navy for text on bright backgrounds. Introduce subtle chrome/silver for frames.
- Surfaces: glossy gradients (top-left light to bottom-right darker), glass panels with `bg-white/40` + blur, faint refraction highlights, and bubble overlays. Add gentle drop shadows with colored tint.
- Shapes: rounded corners (12–18px), pill buttons, circular bubbles, soft tabs. Avoid sharp edges or brutalism.
- Textures: optional clouds, sparkles, or sunburst rays behind hero; subtle noise to prevent banding.

Layout blueprint
- Navigation: bright translucent bar with wordmark, links, and a primary pill CTA (“Download,” “Try beta”). Add a tiny status light for online/offline.
- Hero: large, friendly headline (36–52px), supportive subhead, and dual CTAs (primary glassy pill, secondary outline). Right side: floating device mock or layered bubbles/wave forms. Add a small “System status” chip with icon.
- Feature cards: 6–9 rounded cards with gradient backgrounds or glass panels. Each includes icon, title, 2–3 line body, and small action. Hover lifts with brighter highlight. Include one “mini widget” card (music, weather, or task list) for OS vibes.
- Screenshot/app preview: framed window with title bar, subtle drop shadow, and reflection line. Add tabs or toolbar icons to hint “app chrome.”
- Highlights strip: horizontal band with 3–4 stats or value props; use pill badges and a soft glow dividing line.
- Steps/onboarding: 3–4 steps in rounded tiles with numbered bubbles and concise copy. Optionally add an “auto setup” progress bar with gradient fill.
- CTA/footer: final glow-backed section with primary button and secondary text link; include social/icons styled as glossy dots and small legal links.

Typography
- Use a humanist sans (Frutiger-ish) with friendly curves. Headings 600–700 weight; body 15–17px with 1.5–1.6 line height. Slightly larger letter spacing on uppercase labels.
- Keep text dark on bright gradients; when text sits on glass panels, ensure contrast with overlays.
- Use monospace sparingly for status indicators or code-like labels.

Components & states
- Buttons: pill with glass or gradient fill; `shadow-[0_12px_30px_rgba(0,181,217,0.35)]`; hover brightens; active presses down slightly. Focus-visible outline 2–3px in high-contrast color.
- Cards: `rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md shadow-lg` or solid gradient fills. Hover `-translate-y-1` and saturate slightly.
- Chips: glossy pills with gradient or soft outline; icons inside circles. Active chip gets brighter fill and inner glow.
- Inputs: rounded fields with `bg-white/60 border border-white/50` and strong focus ring. Add a faint inner shadow for depth.
- Tabs: soft pill segmented control with gradient active state; icons optional.

Motion
- Playful but smooth: 160–240ms ease-out. Hover pop/lift, bubble float animations, gentle parallax on hero waves. Respect `prefers-reduced-motion` and provide pause for ambient effects.

Accessibility
- Contrast: ensure text on bright gradients meets 4.5:1; add dark overlay/scrim on backgrounds when needed. Avoid relying on color alone for status—pair with labels/icons.
- Keyboard: all cards and buttons focusable; visible focus ring. Provide aria-labels for icon buttons and status indicators.
- Avoid excessive motion for users with reduced-motion; disable parallax and animations accordingly.

Responsive behavior
- Mobile: stack hero; simplify bubbles and gradients; keep CTAs full-width. Feature cards become single-column; screenshot shrinks with maintained aspect.
- Tablet: 2–3 column grids; keep nav readable; ensure shadows don’t overwhelm text.
- Desktop: 3–4 column grids; `max-w-6xl/7xl` container; allow layered hero art without obscuring copy.

Content guidance
- Tone: upbeat, friendly, lightly futuristic. Focus on ease, speed, clarity.
- CTA microcopy: “Download,” “Try beta,” “Launch dashboard,” “See what’s new.”
- Highlight outcomes and safety: “Secured,” “Optimized,” “Ready out of the box.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Hero shell: `relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-300 via-cyan-300 to-blue-500 text-slate-900`
- Card: `rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md p-6 shadow-lg transition hover:-translate-y-1`
- Button: `inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Chip: `rounded-full bg-white/40 px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm`

Deliver a glossy, optimistic Frutiger Aero OS-inspired page that feels like a friendly 2000s desktop reimagined for today—bright, soft, and accessible.
