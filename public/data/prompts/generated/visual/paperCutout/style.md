# Style Prompt

## 中文版本 (zh-CN)

这是 visual 家族的「纸艺剪影 Paper Cutout」样式说明：强调分层纸张、柔和阴影、手工剪裁边缘、粗细不同的描边和自然错位。需定义色彩、层级间距、阴影强度、边缘处理、插画/人物/场景的纸感表现，以及动效（轻微视差、浮动、压印）。

---

## English Version (en-US)

Style guide for the “Paper Cutout” visual family: layered paper slabs, soft shadows, organic edges, and slight misalignments that feel handmade.

**Visual Language**
- Layers: 3–6 visible layers with varied thickness; slight offsets to suggest manual placement. Use subtle parallax or z-index to separate foreground/mid/background.
- Edges: organic cuts—irregular curves, torn/ripped hints. Avoid perfect rectangles. Corners can be rounded unevenly (8–18px equivalent).
- Shadows: soft, broad drop shadows (e.g., 10–24px blur at low opacity) and gentle inner shadows for indentations. Keep shadows consistent in direction.
- Strokes: mixed widths (1–3px) in complementary hues; avoid heavy outlines that break the paper illusion.

**Color & Texture**
- Palette: warm off-whites, creams, pastel blues/greens/pinks, and a few richer accents for depth. Limit to 4–6 core colors to avoid clutter.
- Texture: light paper grain/noise on larger shapes at 4–8% opacity; optional fiber specks. Apply sparingly so text stays legible.
- Gradients: subtle radial/linear gradients to simulate light falloff on paper; avoid glass/neon looks.

**Layout & Spacing**
- Use generous padding and gutters (16–28px). Stack sections with 56–80px separation. Keep text on flatter layers for contrast; place illustrations on layered stacks.
- Allow intentional overlaps between shapes/cards; keep reading order clear with z-index and spacing.
- Container width ~1100–1280px; responsive adjustments collapse overlaps on mobile to avoid crowding.

**Typography**
- Friendly rounded sans or humanist sans for headings; weight 600–800. Body 15–16px, line-height 1.6–1.8. Headlines may use slightly increased tracking to match playful mood.
- Keep text on solid paper layers; add subtle shadow/overlay if placed on busy art. Maintain 4.5:1 contrast.

**Components**
- Buttons: pill or softly rounded rectangles with slight emboss/deboss; hover = lift 2–3px or brighten; active = gentle press. Focus-visible ring 2–3px in accent color.
- Cards: layered panels with irregular edges; 1–2px strokes; soft shadows; optional sticker/label elements. Keep content spacing consistent.
- Chips/badges: sticker-like pills with torn-edge suggestion or offset shadow.
- Icons/illustrations: flat or light-shaded vector shapes with layered paper style; avoid glossy gradients.

**Motion**
- Gentle parallax on hero/illustration layers; hover lifts and small rotations (1–2deg) only if `prefers-reduced-motion` allows. Otherwise, keep static.
- Fades/translate 150–220ms ease-out; no bounce/elastic.

**Accessibility**
- Ensure text contrast ≥ 4.5:1; place text on the flattest, lightest layers. Provide focus states on all interactive elements. Avoid using color alone to convey meaning.

**Tailwind Hints (reference)**
- Layers: `relative` containers with `shadow-[0_18px_40px_rgba(0,0,0,0.12)]` and `rounded-[18px]` mixed with custom clip-path if needed.
- Cards: `bg-white/95 border border-amber-50/60 shadow-lg p-5 lg:p-6` with slight rotation on selected items.
- Buttons: `rounded-full px-5 py-3 font-semibold shadow-md active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Text: `text-balance` for headings; `leading-relaxed text-slate-800` for body; add `backdrop-blur-[1px]` only if contrast is preserved.
