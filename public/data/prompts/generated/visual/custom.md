# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个 visual 风格页面，包含 Hero、卡片和 CTA。

---

## English Version (en-US)

Build a visual-forward page in TailwindCSS that showcases mood and aesthetics while staying practical. Balance expressive visuals with readable copy and clear calls-to-action.

**Structure**
- Hero: bold headline (44–60px), short subhead, primary CTA, optional secondary link. Include an eye-catching visual (gradient field, abstract shapes, or hero illustration). Keep text on a solid/blur-free base to preserve contrast.
- Gallery/feature grid: 3–6 visual tiles with captions; hover reveals details or actions. Support mixed tile sizes for rhythm.
- Narrative band: a two-column story (text + media) with supporting bullets and a micro-CTA.
- Credibility band: logos, quotes, or stats with minimal chrome.
- Closing CTA: wide bar with concise value statement and a single action.

**Visual Language**
- Choose one direction: neon gradients, soft glass, geometric minimal, or textured grain—but avoid mixing too many motifs. Define 1–2 accent hues and keep neutrals consistent.
- Use layered gradients, masks, or SVG noise for depth; limit blur on mobile for performance.
- Add subtle motion: parallax of background shapes or floaty dots at 10–20% opacity; respect `prefers-reduced-motion`.

**Typography**
- Headlines weight 600–800, body 15–16px line-height 1.6–1.7. Consider `text-balance` for long headings.
- Pair a clean sans with monospace accents for data/labels. Keep tracking neutral to slightly tight for modern feel.

**Components**
- Buttons: filled primary + ghost secondary, rounded 10–14px or fully pill depending on mood. Hover: lift and tint shift; focus-visible ring in accent.
- Cards/tiles: radius 14–18px, soft shadow or border. Use overlay gradient to ensure caption readability on imagery.
- Chips/tags: small, uppercase or mono labels to anchor visuals with structure.

**Grid & Spacing**
- Desktop container ~1100–1280px; gutters 20–32px. Section spacing 56–80px. Tiles use CSS grid with `auto-fit`/`minmax` to adapt.
- Keep consistent padding inside tiles (16–24px) and avoid edge-to-edge text over busy art.

**Accessibility**
- Maintain 4.5:1 contrast where text appears; place overlays behind text on images. Provide focus rings and keyboard order for tiles and CTAs. Provide alt text for hero/galleries.

**Copy Tone**
- Confident and concise. Emphasize sensory adjectives sparingly (“luminous”, “layered”, “tactile”). CTAs stay action-driven (“Explore visuals”, “See details”).

**Tailwind Hints**
- Use utilities like `bg-gradient-to-br`, `backdrop-blur`, `shadow-xl/2xl`, `rounded-2xl`, `grid auto-rows-[minmax(260px,auto)] gap-6`, `hover:translate-y-[-2px] transition`, and `focus-visible:outline focus-visible:outline-offset-2`.
