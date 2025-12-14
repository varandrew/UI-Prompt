# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「玻璃拟态着陆页」，延续 glassmorphism 家族：半透明玻璃面板、景深模糊、柔和渐层背景、细边框与高对比文字。包含 Hero、功能卡片、统计/数据带、案例或产品展示、CTA 与页脚，确保可访问性。

Design a “Glassmorphism Landing” page in TailwindCSS. Use translucent panels, blurred backgrounds, soft gradients, and hairline strokes. Keep text contrast high and focus states obvious. Include a hero, feature cards, stats/info strip, product or case showcases, and a closing CTA/footer.

Visual language
- Backgrounds: smooth gradients (teal/purple/blue) or subtle noise; optional floating shapes with blur. Keep opacity moderate to preserve contrast.
- Panels: `bg-white/10` to `bg-white/20` with `backdrop-blur-md/lg`, thin borders (`border-white/20`), and soft inner/outer glow. Rounded corners 14–20px.
- Accent colors: 1–2 bright accents (cyan, magenta, lime) for buttons and highlights. Use neutrals (white/gray) for text.
- Shadows: diffuse glows instead of heavy drop shadows. Avoid harsh outlines.

Layout blueprint
- Navigation: translucent bar with logo, links, and primary CTA. Add a subtle border-bottom. Keep focus rings bright.
- Hero: large headline (38–52px), concise subhead, primary CTA (filled accent) and secondary (outline/glass). Include hero visual: 3D-ish glass card stack, device mock, or gradient blob with sparkles. Add a mini stats row (uptime, users, NPS).
- Feature cards: 6–9 glass cards in 2–3 columns. Each with icon, title, 2–3 lines body, and small action. Hover lifts and intensifies blur/glow.
- Stats/strip: horizontal band with metrics or badges; use pill chips and thin dividers. Keep numbers in monospace.
- Product/case showcase: a larger glass panel with imagery and bullet points; or a carousel with arrows/dots that remain accessible.
- CTA/footer: final gradient or darkened section with strong contrast. Provide primary CTA, secondary link, contact, and social icons.

Typography
- Modern sans; headings 600–700; body 15–17px with 1.6 line height. Use slight letter spacing on labels. Keep text color nearly white; ensure readable contrast over gradients.
- Use monospace for stats/IDs. Apply `text-balance` for long headings to prevent widows.

Components & states
- Buttons: pill or rounded rect. Primary: accent fill with glow `shadow-[0_0_24px_rgba(0,200,255,0.35)]`. Secondary: outline/glass with border and subtle glow. Hover brightens; active presses lightly; focus-visible outline 2–3px.
- Cards: `rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]`.
- Inputs: glass fields with clear focus ring; `bg-white/10 border border-white/20 rounded-xl px-4 py-3`. Labels always present; placeholders muted.
- Chips: translucent pills with stroke; active chip gains accent fill and stronger blur.
- Dividers: thin gradient lines or `border-white/10`. Use `backdrop-blur` for sticky nav if needed.

Motion
- Smooth transitions (160–220ms). Hover lifts and glow increases; entry animations are gentle fades/upward moves. Respect `prefers-reduced-motion`; allow pausing of any particle background.

Accessibility
- Ensure contrast: add dark scrim behind text over bright gradients. Avoid pure white text on light glass without scrim. Provide clear focus outlines.
- Do not rely on color-only states; include text/icons for statuses. Hit areas ≥ 44px.
- Aria labels for icon buttons and carousel controls. Keyboard navigation must reach all cards and controls.

Responsive behavior
- Mobile: simplify background; reduce blur to save performance; stack hero and cards. Use full-width CTAs. Keep nav minimal with a menu button.
- Tablet: 2-column features; maintain readable padding; ensure shadows/glows not overwhelming.
- Desktop: 3-column features, `max-w-6xl/7xl` container with 24–32px gutters; allow layered hero visuals without blocking copy.

Content guidance
- Tone: polished, modern, optimistic. Emphasize clarity and premium feel.
- CTA microcopy: “Get started”, “See live demo”, “Book a call”, “Download app”.
- Provide concise proof points (uptime, response time, ratings) and short feature summaries.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10 py-12`
- Hero shell: `relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950`
- Button primary: `inline-flex items-center gap-2 rounded-full bg-cyan-400/90 px-5 py-3 font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.45)] transition`
- Card base: `rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1`
- Input: `rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60`

Deliver a glassmorphic landing page that feels light, premium, and performant—translucent layers, controlled glows, and crystal-clear accessibility.

---

## English Version (en-US)

Design a “Glassmorphism Landing” page in TailwindCSS. Use translucent panels, blurred backgrounds, soft gradients, and hairline strokes. Keep text contrast high and focus states obvious. Include a hero, feature cards, stats/info strip, product or case showcases, and a closing CTA/footer.

Visual language
- Backgrounds: smooth gradients (teal/purple/blue) or subtle noise; optional floating shapes with blur. Keep opacity moderate to preserve contrast.
- Panels: `bg-white/10` to `bg-white/20` with `backdrop-blur-md/lg`, thin borders (`border-white/20`), and soft inner/outer glow. Rounded corners 14–20px.
- Accent colors: 1–2 bright accents (cyan, magenta, lime) for buttons and highlights. Use neutrals (white/gray) for text.
- Shadows: diffuse glows instead of heavy drop shadows. Avoid harsh outlines.

Layout blueprint
- Navigation: translucent bar with logo, links, and primary CTA. Add a subtle border-bottom. Keep focus rings bright.
- Hero: large headline (38–52px), concise subhead, primary CTA (filled accent) and secondary (outline/glass). Include hero visual: 3D-ish glass card stack, device mock, or gradient blob with sparkles. Add a mini stats row (uptime, users, NPS).
- Feature cards: 6–9 glass cards in 2–3 columns. Each with icon, title, 2–3 lines body, and small action. Hover lifts and intensifies blur/glow.
- Stats/strip: horizontal band with metrics or badges; use pill chips and thin dividers. Keep numbers in monospace.
- Product/case showcase: a larger glass panel with imagery and bullet points; or a carousel with arrows/dots that remain accessible.
- CTA/footer: final gradient or darkened section with strong contrast. Provide primary CTA, secondary link, contact, and social icons.

Typography
- Modern sans; headings 600–700; body 15–17px with 1.6 line height. Use slight letter spacing on labels. Keep text color nearly white; ensure readable contrast over gradients.
- Use monospace for stats/IDs. Apply `text-balance` for long headings to prevent widows.

Components & states
- Buttons: pill or rounded rect. Primary: accent fill with glow `shadow-[0_0_24px_rgba(0,200,255,0.35)]`. Secondary: outline/glass with border and subtle glow. Hover brightens; active presses lightly; focus-visible outline 2–3px.
- Cards: `rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]`.
- Inputs: glass fields with clear focus ring; `bg-white/10 border border-white/20 rounded-xl px-4 py-3`. Labels always present; placeholders muted.
- Chips: translucent pills with stroke; active chip gains accent fill and stronger blur.
- Dividers: thin gradient lines or `border-white/10`. Use `backdrop-blur` for sticky nav if needed.

Motion
- Smooth transitions (160–220ms). Hover lifts and glow increases; entry animations are gentle fades/upward moves. Respect `prefers-reduced-motion`; allow pausing of any particle background.

Accessibility
- Ensure contrast: add dark scrim behind text over bright gradients. Avoid pure white text on light glass without scrim. Provide clear focus outlines.
- Do not rely on color-only states; include text/icons for statuses. Hit areas ≥ 44px.
- Aria labels for icon buttons and carousel controls. Keyboard navigation must reach all cards and controls.

Responsive behavior
- Mobile: simplify background; reduce blur to save performance; stack hero and cards. Use full-width CTAs. Keep nav minimal with a menu button.
- Tablet: 2-column features; maintain readable padding; ensure shadows/glows not overwhelming.
- Desktop: 3-column features, `max-w-6xl/7xl` container with 24–32px gutters; allow layered hero visuals without blocking copy.

Content guidance
- Tone: polished, modern, optimistic. Emphasize clarity and premium feel.
- CTA microcopy: “Get started”, “See live demo”, “Book a call”, “Download app”.
- Provide concise proof points (uptime, response time, ratings) and short feature summaries.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10 py-12`
- Hero shell: `relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950`
- Button primary: `inline-flex items-center gap-2 rounded-full bg-cyan-400/90 px-5 py-3 font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.45)] transition`
- Card base: `rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1`
- Input: `rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60`

Deliver a glassmorphic landing page that feels light, premium, and performant—translucent layers, controlled glows, and crystal-clear accessibility.
