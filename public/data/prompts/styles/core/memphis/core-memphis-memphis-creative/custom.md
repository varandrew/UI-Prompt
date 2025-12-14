# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「孟菲斯创意页面」，延续 memphis 家族风格：高饱和撞色、几何图形、波点/格纹/折线纹理、随性错位、粗线条/色块叠加。包含：大胆 Hero、功能/作品卡、信息区、引语或品牌宣言、收尾 CTA。保持活泼但要可读，色彩有限但对比强烈，搭配重复纹理与几何装饰。

Create a Memphis Creative page in TailwindCSS with bold saturated colors, geometric shapes, playful misalignment, and punchy patterns (dots/stripes/checkers/zags). Include: a loud hero, feature/work cards, info section, brand quote/slogan band, and a closing CTA. Keep it fun yet readable—limit the palette but push contrast; layer shapes and strokes with confident spacing.

**Visual Language**
- Palette: 3–4 loud accents (cobalt, magenta, yellow, cyan) plus white/black for grounding. Use solid fills; allow small halftone/pattern overlays. Keep text on solid blocks for legibility.
- Shapes: circles, triangles, squiggles, grids; use overlapping blocks, thick strokes (2–4px), and occasional drop shadows for pop.
- Patterns: dotted, hatched, checkerboard; apply sparingly as backgrounds or corner fills; keep opacity moderate.

**Layout & Sections**
- Hero: big headline (40–64px) with contrasting subhead; primary CTA and a playful secondary link. Background can be split-color or layered shapes; ensure text sits on a solid patch.
- Cards (work/features): 3–6 items; each with icon/shape, title, short body, tag or price, and small action. Cards can tilt or offset slightly; add corner stickers or stripes.
- Info/feature band: two-column text + shape cluster; use a bold accent sidebar or oversized number.
- Quote/slogan strip: center-aligned statement with pattern frame or zigzag underline.
- Closing CTA: strong color block with single action; include a simple pattern in a corner.

**Typography**
- Headlines heavy (700–900), often uppercase; body 15–16px, line-height ~1.6. Consider geometric sans; keep tracking neutral to tight. Add monospace accents for fun labels if desired.
- Use short, punchy copy; mix case and occasional uppercase for emphasis.

**Interaction & Motion**
- Hover: quick lifts (2–4px), slight rotation (1–2deg), or tint shifts. Active: tiny press. Respect `prefers-reduced-motion`; disable rotation on touch.
- Pattern animations (if any) should be subtle and slow; avoid overwhelming flicker.

**Accessibility**
- Maintain text contrast ≥ 4.5:1; place text on solid color patches. Focus-visible outlines 2–3px in a high-contrast hue. Do not rely on color alone for status.
- Keep padding generous so busy patterns don’t crowd text.

**Tailwind Tips (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Shapes: use `before/after` or utility-based `bg-[radial-gradient(...)]` for dots; `bg-repeat` for patterns; `rotate-1`/`-rotate-1` for playful offsets.
- Cards: `rounded-xl border-[3px] border-black shadow-[8px_8px_0_rgba(0,0,0,0.2)] bg-white` with accent overlays.
- Buttons: `rounded-lg px-5 py-3 font-bold uppercase tracking-tight text-white bg-gradient-to-r from-yellow-400 to-pink-500 shadow-lg active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

---

## English Version (en-US)

Create a Memphis Creative page in TailwindCSS with bold saturated colors, geometric shapes, playful misalignment, and punchy patterns (dots/stripes/checkers/zags). Include: a loud hero, feature/work cards, info section, brand quote/slogan band, and a closing CTA. Keep it fun yet readable—limit the palette but push contrast; layer shapes and strokes with confident spacing.

**Visual Language**
- Palette: 3–4 loud accents (cobalt, magenta, yellow, cyan) plus white/black for grounding. Use solid fills; allow small halftone/pattern overlays. Keep text on solid blocks for legibility.
- Shapes: circles, triangles, squiggles, grids; use overlapping blocks, thick strokes (2–4px), and occasional drop shadows for pop.
- Patterns: dotted, hatched, checkerboard; apply sparingly as backgrounds or corner fills; keep opacity moderate.

**Layout & Sections**
- Hero: big headline (40–64px) with contrasting subhead; primary CTA and a playful secondary link. Background can be split-color or layered shapes; ensure text sits on a solid patch.
- Cards (work/features): 3–6 items; each with icon/shape, title, short body, tag or price, and small action. Cards can tilt or offset slightly; add corner stickers or stripes.
- Info/feature band: two-column text + shape cluster; use a bold accent sidebar or oversized number.
- Quote/slogan strip: center-aligned statement with pattern frame or zigzag underline.
- Closing CTA: strong color block with single action; include a simple pattern in a corner.

**Typography**
- Headlines heavy (700–900), often uppercase; body 15–16px, line-height ~1.6. Consider geometric sans; keep tracking neutral to tight. Add monospace accents for fun labels if desired.
- Use short, punchy copy; mix case and occasional uppercase for emphasis.

**Interaction & Motion**
- Hover: quick lifts (2–4px), slight rotation (1–2deg), or tint shifts. Active: tiny press. Respect `prefers-reduced-motion`; disable rotation on touch.
- Pattern animations (if any) should be subtle and slow; avoid overwhelming flicker.

**Accessibility**
- Maintain text contrast ≥ 4.5:1; place text on solid color patches. Focus-visible outlines 2–3px in a high-contrast hue. Do not rely on color alone for status.
- Keep padding generous so busy patterns don’t crowd text.

**Tailwind Tips (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Shapes: use `before/after` or utility-based `bg-[radial-gradient(...)]` for dots; `bg-repeat` for patterns; `rotate-1`/`-rotate-1` for playful offsets.
- Cards: `rounded-xl border-[3px] border-black shadow-[8px_8px_0_rgba(0,0,0,0.2)] bg-white` with accent overlays.
- Buttons: `rounded-lg px-5 py-3 font-bold uppercase tracking-tight text-white bg-gradient-to-r from-yellow-400 to-pink-500 shadow-lg active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
