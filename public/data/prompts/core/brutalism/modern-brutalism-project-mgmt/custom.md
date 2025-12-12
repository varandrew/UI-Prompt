# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「项目管理界面」，延续 brutalism 家族风格，包含 Hero、卡片/图文区与 CTA。

---

## English Version (en-US)

Create a “Project Management” interface in brutalism style with TailwindCSS. Lean on stark contrast (black/white + one accent), thick outlines, hard shadows, and purposeful misalignment. Avoid soft gradients/glass; keep the layout dense but legible.

**Layout & Sections**
- Hero: poster-like header with bold headline (44–60px), subhead, primary CTA (“Create board”) and secondary link. Use split color blocks, chunky borders, and an accent badge.
- Boards/columns preview: 2–3 sample columns or a grid of project cards; each card shows title, status badge, owner initials, and task counts. Allow slight offsets/overlaps for tension.
- Metrics strip: 3–4 metric tiles (monospace numbers) with thick dividers; status dots/badges for “On track / At risk”.
- Task list/table: 1–2px strokes, zebra optional, uppercase headers, monospace IDs. Include bulk actions and filters with outlined buttons.
- Activity/log: compact feed with timestamps and labels; hard separators between items.
- Closing CTA: full-width bar with a single action; strong contrast.

**Visual System**
- Palette: black/white plus one accent (yellow/red/cyan). Shadows short and hard (`shadow-[8px_8px_0_#000]`). Strokes 2–4px; dashed/hatched lines acceptable.
- Typography: heavy sans/mono; uppercase for labels; tight tracking. Body 14–16px, line-height ~1.5. Monospace for IDs/counts.
- Allow 1–2deg rotations or 4–8px offsets on cards to keep the brutal feel.

**Interaction & Motion**
- Hover: invert colors, jump shadow, or lift 2–4px. Active: press 1–2px. Durations 100–160ms, linear/ease-out; no bounce.
- Respect `prefers-reduced-motion`; disable tilt/offset on touch/coarse pointers.

**Accessibility**
- Contrast ≥ 4.5:1. Focus-visible outlines 2–3px in accent/black. Pair color with text/icon for statuses; tap targets ≥44px.

**Copy Tone**
- Direct, action-led: “Ship or slip.” “Own the board.” “Clear blockers.”
- CTA examples: “Create board”, “View backlog”, “Track risks”.

**Tailwind Tips (reference)**
- Container: `max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Cards: `border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] p-4 lg:p-5` (invert for dark sections)
- Buttons: `rounded-none px-5 py-3 font-black uppercase tracking-tight border-2 border-black shadow-[6px_6px_0_#000] hover:-translate-y-1 active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Tables: `divide-y divide-black/20 text-sm font-mono uppercase` with sticky headers if needed.

---

**Comprehensive Brutalism Implementation Guide**

**Brutalist Design Philosophy**: Brutalism celebrates raw, unpolished aesthetics with bold typography, stark contrasts, and unapologetic use of space. Embrace asymmetry, expose structure, and reject unnecessary decoration.

**Visual Hierarchy Through Size & Weight**: Use dramatic scale differences between elements. Headlines should dominate (48px-96px+), body text remains readable (16-18px). Apply font weights strategically: 700-900 for impact, 400-500 for readability.

**Color Strategy**: Limit palette to 2-3 bold colors plus black/white. Use high saturation for accents (primary brand color). Maintain stark contrast (black text on white, white text on black). Apply color blocks boldly, not timidly.

**Grid & Layout**: Break traditional grid constraints deliberately. Create tension through asymmetric layouts. Overlap elements intentionally. Use whitespace as active design element, not just absence of content.

**Typography Treatment**: Use sans-serif exclusively (Helvetica, Arial, Inter, Roboto). Apply uppercase sparingly for maximum impact. Increase letter-spacing on uppercase text (0.05-0.1em). Maintain tight line-height on headlines (1.0-1.2).

**Component Styling**: Design buttons as bold rectangles with minimal rounding (0-4px). Use thick borders (2-4px) to define spaces. Avoid shadows and gradients - prefer flat, solid colors. Create cards with strong borders and clear content separation.

**Interactive Elements**: Implement instant state changes (no transitions or minimal <100ms). Make hover states obvious: color inversions, border changes. Use active states with clear visual feedback (darker shades, inverted colors).

**Spacing System**: Apply generous spacing (32px-64px+) to create breathing room. Use consistent rhythm but don't be afraid to break it for emphasis. Let elements command their space without crowding.

**Responsive Brutalism**: On mobile: maintain bold aesthetic but scale appropriately. Stack elements clearly, maintain generous spacing. Preserve stark contrasts and bold typography even on smaller screens.

**Performance**: Brutalism is inherently performant - minimal animations, no complex effects, flat colors. Optimize images, minimize JavaScript, keep bundle size small.

**Accessibility**: High contrast is built-in advantage. Ensure proper heading hierarchy, keyboard navigation, focus indicators. Maintain 4.5:1 contrast ratio minimum. Provide clear, direct labels and instructions.

**Avoiding Pitfalls**: Don't confuse brutalism with ugliness - be intentional. Maintain usability while being bold. Ensure readability isn't sacrificed for aesthetics. Keep functional elements obvious and accessible.

**Testing Approach**: Test on various devices to ensure bold designs remain effective. Verify typography scales appropriately. Confirm interactions are clear and responsive. Validate accessibility with screen readers and keyboard-only navigation.

