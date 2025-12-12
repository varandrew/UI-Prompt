# Style Prompt

## 中文版本 (zh-CN)

这是 visual 家族的通用样式说明：选择明确的视觉方向（渐变、材质、插画、纸感、霓虹、极简几何等）并保持统一；控制色彩数量与对比；确保文字可读与可访问；避免无节制特效。需定义：色盘、背景处理、插画/纹理使用规则、阴影/光晕范围、排版层级、组件形态、动效基调以及可访问性要求。

---

## English Version (en-US)

General style guidance for the Visual family: pick a coherent visual direction (e.g., gradients, material textures, illustration, paper, neon, geometric minimal) and stick to it. Limit the palette, keep contrast readable, and avoid effect overload.

**Color & Background**
- Choose 1–2 accent hues plus neutrals; avoid rainbow. Backgrounds can be gradient, solid with texture, or clean neutral—ensure text maintains ≥4.5:1 contrast.
- If using gradients, keep them smooth and controlled; if using texture, keep opacity low to avoid noise.

**Typography**
- Headings 32–60px, weight 600–800; body 15–16px, line-height 1.6–1.75. Use `text-balance` for long headings where available.
- Pair a clean sans with monospace accents for data, or a display type only if it matches the chosen style. Maintain short, scannable copy.

**Surfaces & Components**
- Cards/tiles: consistent radius and border/shadow rules that fit the chosen visual theme (e.g., soft glass, crisp outline, paper depth). Keep padding 16–24px.
- Buttons: align with the theme—pill for soft/glow, squared for geometric; hover = mild tint/scale; active = slight press; focus-visible ring always present.
- Badges/chips: minimal, single-accent; avoid overly glossy or busy treatments.

**Imagery & Illustration**
- Keep illustration style consistent (flat vector, textured, 3D-lite, paper). Avoid mixing conflicting motifs. Provide overlays behind text on imagery.
- Reserve aspect ratios to prevent layout shift; lazy-load media; add soft overlays for readability.

**Motion**
- Define a motion tone: gentle for soft/organic, snappy for geometric. Use 120–200ms ease-out; avoid bounce unless the style calls for playful motion. Respect `prefers-reduced-motion`; disable heavy parallax on touch.

**Accessibility**
- Contrast meets AA for text. Focus states visible on all interactive elements. Do not rely on color alone for status; pair with icon/text. Touch targets ≥44px.

**Layout & Spacing**
- Container width ~1100–1280px with 20–32px gutters; section spacing 56–80px. Keep alignment consistent even if visuals are expressive.

**Copy Tone**
- Clear, evocative but concise. CTAs are action-first (“Explore,” “See demo,” “Try it”), not decorative.

**Tailwind Hints (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24`
- Surfaces: adjust `rounded-*`, `border`, `shadow-*`, `bg-gradient-*`, `backdrop-blur` based on chosen theme; keep focus styles via `focus-visible:outline`.
- Grids: `grid gap-6 md:grid-cols-2 lg:grid-cols-3` for galleries/tiles; `flex flex-col gap-4` for vertical stories.
