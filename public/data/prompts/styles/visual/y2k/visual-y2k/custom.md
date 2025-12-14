# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「Y2K 复古未来感主页」，延续 y2k 家族风格，呈现金属质感、亮面塑料、渐变色谱与像素/CRT 元素的混搭。页面需包含：霓虹渐变 Hero、功能/产品卡组、信息区（列表/表格）、引语/口号区、收尾 CTA。强调大胆渐变、玻璃/塑料高光、粗犀利的 UI 元件、微弱噪点与扫描线，结合像素/几何图标。保留对比度与可读性，避免过度噪音。

Create a “Y2K Retro-Future” homepage in TailwindCSS. Blend metallic gloss, shiny plastic, bold gradients, and pixel/CRT cues. Include: neon-gradient hero, feature/product cards, info/list/table section, slogan/quote band, and a closing CTA. Keep legibility high while embracing maximalist chrome.

**Visual Language**
- Palette: electric cyan, magenta, acid green, and metallic silvers over deep navy/black. Use vibrant gradients (e.g., cyan→magenta→violet) with occasional chrome highlights. Add subtle noise or scanlines at low opacity.
- Surfaces: glossy cards with bevel or inner glow, thin strokes, and tight drop shadows. Mix circular pills with sharp-edged blocks. Use glass/plastic blur sparingly to retain contrast.
- Icons/details: pixel/bitmap flourishes or small CRT scanlines; geometric shapes; tiny animated sparkles at low opacity.

**Layout & Sections**
- Hero: loud gradient background, 2–3 line headline (38–56px), subhead 16–18px, primary CTA plus a smaller secondary. Add a chrome-style badge or pixel motif. Ensure text sits on a solid/blurred base for readability.
- Feature/Product grid: 3–6 cards. Each card: icon, title, 2–3 lines body, price/status/tag, and a small action. Card skins use gradients + stroke + subtle glow.
- Info/list/table: use zebra rows with neon accent lines; monospace or tech sans for data. Keep dividers thin and glowing lightly.
- Slogan/quote band: center-aligned bold statement with chrome/pixel accent; add a faint grid/scanline overlay.
- Closing CTA: wide bar, strong gradient, single primary action; optional badge for “Limited / Beta / Drop”.

**Typography**
- Tech/rounded sans for headings (weight 700–900); body 15–16px, line-height 1.6. Consider monospace accents for data/prices. Track headlines slightly tight.
- Ensure high contrast on text over gradients—use solid underlays or shadows.

**Motion**
- Quick, energetic: 120–180ms ease-out. Hover lifts 3–6px, slight glow/pulse. Respect `prefers-reduced-motion`; tone down glows and disable float on touch.
- Optional micro-animations: gradient sheens across buttons/cards; pixel twinkles at low opacity.

**Accessibility**
- Keep contrast ≥ 4.5:1 for text. Provide focus-visible outlines (2–3px) in neon accent. Avoid color-only signaling; pair with icons/labels.
- Maintain comfortable spacing despite maximalism; avoid blinding full-white text on pure neon—use off-white.

**Tailwind Tips (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Gradients: `bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-900` with `backdrop-blur` as needed.
- Cards: `rounded-2xl border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]` plus inner glow via pseudo/utility.
- Buttons: `rounded-full px-5 py-3 font-semibold text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-lg active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Tables: `divide-y divide-white/10 text-sm font-mono text-white/90` with row hover tints and neon headers.

---

## English Version (en-US)

Create a “Y2K Retro-Future” homepage in TailwindCSS. Blend metallic gloss, shiny plastic, bold gradients, and pixel/CRT cues. Include: neon-gradient hero, feature/product cards, info/list/table section, slogan/quote band, and a closing CTA. Keep legibility high while embracing maximalist chrome.

**Visual Language**
- Palette: electric cyan, magenta, acid green, and metallic silvers over deep navy/black. Use vibrant gradients (e.g., cyan→magenta→violet) with occasional chrome highlights. Add subtle noise or scanlines at low opacity.
- Surfaces: glossy cards with bevel or inner glow, thin strokes, and tight drop shadows. Mix circular pills with sharp-edged blocks. Use glass/plastic blur sparingly to retain contrast.
- Icons/details: pixel/bitmap flourishes or small CRT scanlines; geometric shapes; tiny animated sparkles at low opacity.

**Layout & Sections**
- Hero: loud gradient background, 2–3 line headline (38–56px), subhead 16–18px, primary CTA plus a smaller secondary. Add a chrome-style badge or pixel motif. Ensure text sits on a solid/blurred base for readability.
- Feature/Product grid: 3–6 cards. Each card: icon, title, 2–3 lines body, price/status/tag, and a small action. Card skins use gradients + stroke + subtle glow.
- Info/list/table: use zebra rows with neon accent lines; monospace or tech sans for data. Keep dividers thin and glowing lightly.
- Slogan/quote band: center-aligned bold statement with chrome/pixel accent; add a faint grid/scanline overlay.
- Closing CTA: wide bar, strong gradient, single primary action; optional badge for “Limited / Beta / Drop”.

**Typography**
- Tech/rounded sans for headings (weight 700–900); body 15–16px, line-height 1.6. Consider monospace accents for data/prices. Track headlines slightly tight.
- Ensure high contrast on text over gradients—use solid underlays or shadows.

**Motion**
- Quick, energetic: 120–180ms ease-out. Hover lifts 3–6px, slight glow/pulse. Respect `prefers-reduced-motion`; tone down glows and disable float on touch.
- Optional micro-animations: gradient sheens across buttons/cards; pixel twinkles at low opacity.

**Accessibility**
- Keep contrast ≥ 4.5:1 for text. Provide focus-visible outlines (2–3px) in neon accent. Avoid color-only signaling; pair with icons/labels.
- Maintain comfortable spacing despite maximalism; avoid blinding full-white text on pure neon—use off-white.

**Tailwind Tips (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Gradients: `bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-900` with `backdrop-blur` as needed.
- Cards: `rounded-2xl border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]` plus inner glow via pseudo/utility.
- Buttons: `rounded-full px-5 py-3 font-semibold text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-lg active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Tables: `divide-y divide-white/10 text-sm font-mono text-white/90` with row hover tints and neon headers.
