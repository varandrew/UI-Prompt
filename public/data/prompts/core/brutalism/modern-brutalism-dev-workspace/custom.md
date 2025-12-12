# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「开发者工作区」，延续 brutalism 家族风格：黑白/单色或极少数高对比强调色、粗描边、硬阴影、刻意错位的排版、高密度信息区。页面应包含：海报式 Hero、功能/指标卡、代码/日志/表格区、快捷操作区、收尾 CTA。突出“实用、直接、反叛且可读”，避免圆滑玻璃态或温柔渐变。

---

## English Version (en-US)

Build a “Developer Workspace” page in brutalism style using TailwindCSS: stark contrast (black/white + one accent), thick strokes, hard shadows, deliberate misalignment, dense info blocks. Include: poster-like hero, feature/metric cards, code/log/table area, quick actions, and a closing CTA. Emphasize utility and rebellious clarity—no soft glass, no gradients.

**Layout & Sections**
- Hero: bold headline (44–64px), subhead 16–18px, primary CTA. Use split background blocks, chunky borders (2–4px), and a loud accent stripe or badge.
- Feature/metric cards: 3–6 cards with icon/label, title, metric (monospace), and action. Allow slight offsets/overlaps; keep padding consistent.
- Code/log panel: monospace blocks with 1–2px strokes, tight line-height; add zebra/tint rows. Include copy/run buttons; highlight errors/warnings with solid fills, not gradients.
- Table/list: thick dividers, uppercase headers, zebra optional. Keep alignment crisp; allow oversize labels and condensed body.
- Quick actions bar: blocky buttons with strong outlines and shadow jumps on hover.
- Closing CTA: full-width bar, high-contrast, single action; may include a small reassurance line (“No lock-in / CLI first”).

**Visual System**
- Palette: black/white plus one accent (yellow, red, or cyan). Use solid fills; avoid soft glows. Shadows are short and hard (e.g., `shadow-[8px_8px_0_#000]`).
- Typography: heavy sans/mono, uppercase allowed; track tightly. Body 14–16px line-height 1.45–1.6. Keep headlines chunky; numbers monospace.
- Strokes: 2–4px outlines; dashed/hatched dividers acceptable. Boxes can overlap or tilt slightly (1–2deg) for tension.

**Interaction & Motion**
- Hover: invert colors or jump shadow; lift 2–4px. Active: press 1–2px. Animations short (100–160ms) with linear/ease-out; no bounce.
- Respect `prefers-reduced-motion`; disable tilt on touch/coarse pointers.

**Accessibility**
- Maintain text contrast ≥ 4.5:1. Focus-visible outlines 2–3px in accent/black. Do not rely on color-only status—pair with icons/text. Keep tap targets ≥44px.

**Copy Tone**
- Direct, terse, tool-first: “Ship or skip.” “Logs in plain sight.” “Run, watch, repeat.”
- CTA examples: “Open workspace”, “Run build”, “View logs”.

**Tailwind Tips (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Blocks: `border-4 border-black bg-white text-black shadow-[8px_8px_0_#000]` (invert for dark sections)
- Buttons: `rounded-none px-5 py-3 font-black uppercase tracking-tight border-2 border-black shadow-[6px_6px_0_#000] hover:-translate-y-1 active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Code/log: `font-mono text-sm leading-tight bg-black text-white border-2 border-white/20`
