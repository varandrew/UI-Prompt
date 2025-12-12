# Custom Prompt

## 中文版本 (zh-CN)

使用纯黑白灰打造个人作品集，包含 Hero、案例格网、详细案例页、关于/履历、服务说明与行动呼吁，强调留白、对比、细线、可访问性。



---

## English Version (en-US)

Design a fully monochrome portfolio showcase that relies only on black, white, and neutral grays (no color accents). The page should feel editorial, precise, and confident, with strong contrast, abundant negative space, and disciplined alignment. Target a designer/developer portfolio that highlights selected projects, case studies, and a concise résumé.

Overall ethos
- Limit the palette to grayscale: pure white backgrounds, layered cool/warm grays for panels, and deep black for typography. Use opacity and line weight instead of color to create hierarchy.
- Combine Swiss-style structure with modern minimal motion. Surfaces stay flat; focus on typography and grid.
- Keep copy succinct: strong headlines, terse body text, crisp labels. Tone is confident and direct.
- Enforce consistent padding rhythm (e.g., 16/24/32px steps) and generous line lengths (60–72ch max for body).

Layout structure
- Hero: bold headline (40–56px) with tight leading, single-line subhead (max 140 characters), primary CTA (“View work”) and secondary (“Download résumé”). Optionally pair with a monochrome portrait or abstract geometric collage.
- Project highlights grid: 6–9 items in a responsive masonry-like grid; each card shows title, role, year, and 1–2 tags. Hover reveals a short one-line outcome. Maintain consistent aspect ratios using `aspect-[4/3]` or `aspect-[3/2]`.
- Featured case study band: full-width panel with a large image mock (converted to grayscale) plus right/left-aligned text stack: problem statement, approach bullets, measurable outcome. Include a “Read case study” CTA.
- Services + capabilities: concise list of 4–6 capabilities (Brand systems, UI/UX, Design systems, Frontend build). Use thin dividers and column layout. Support badges like “Available for freelance Q3”.
- About/resumé snapshot: two-column layout with bio on the left and key facts on the right (location, availability, tools, awards). Include a downloadable CV link styled as an outlined pill.
- Testimonials: 2–3 quotes in pull-quote style, italic or lighter weight, with name/role and minimal avatar ring (monotone).
- Process strip: 4 steps (Discover → Define → Design → Deliver) with small icons (line icons only) and 1–2 sentences each.
- Contact / CTA footer: clear invitation, email link, social icons as outlined circles; maintain high contrast and visible focus rings.

Typography & hierarchy
- Use a modern sans family with high contrast weights (e.g., 700 headlines, 500 body). Set body at 16–18px with 1.6–1.7 line height.
- Headlines: uppercase or Title Case, tight tracking; allow accent rules with thin top borders to frame section titles.
- Employ text balancing for multi-line headings; keep subheads narrower than body columns for visual tension.
- Introduce monospace for metadata (year, role) to add rhythm and align numerals.

Grid & spacing
- Base grid: 12-column layout with 24–32px gutters on desktop, collapsing to 6/4/2 columns on tablet/mobile. Use max-width containers (`max-w-6xl` to `max-w-7xl`) with `px-6 lg:px-10`.
- Vertical rhythm: section padding 72–120px on desktop, 48–72px on mobile. Use consistent 12–16px gaps within cards and 24–40px between card clusters.
- Dividers: 1px lines at 10–18% opacity; optional dashed dividers for secondary separations.

Imagery handling
- Convert all imagery to grayscale; avoid soft gradients or blurs. Use high-contrast masks or frames.
- Hover/interaction: scale 1.01–1.02 with subtle translateY; avoid shadows. Optional outline grow from 1px to 2px on hover for cards.
- Do not apply color overlays; use black or white overlays at controlled opacity for legibility when text is over imagery.

Components
- Navigation: sticky top bar with logo wordmark, anchor links (Work, Services, About, Contact). Include a compact theme toggle placeholder even if only monochrome is present (keeps symmetry).
- Buttons: filled (black on white) and ghost (outline black 1px). Hover darkens fill or increases stroke weight. Focus-visible rings 2–3px in mid-gray.
- Tags/chips: thin rounded pills, uppercase labels, light stroke; use `tracking-[0.08em]` for precision.
- Cards: `border border-black/10 rounded-xl bg-white` or `bg-neutral-50`, with `p-5` to `p-7`. On dark variants, invert to `bg-neutral-900 text-white border-white/15`.
- Timeline/list: use `divide-y divide-neutral-200/80` and monospace timestamps.

Motion & interactions
- Motion is understated: fades and 4–8px translates over 160–220ms ease-out. No bounce or overshoot. Respect `prefers-reduced-motion`.
- Hover hints rely on stroke/scale; focus states are visible outlines. Provide keyboard access to all cards/links.

Accessibility & contrast
- Maintain contrast ratios ≥ 4.5:1. Ensure link and button focus outlines are visible on both light and dark blocks.
- Provide alt text for all images. Avoid text over busy imagery; if necessary, apply 70–80% black/white scrim.
- Ensure target sizes ≥ 44px. Maintain logical tab order and aria-labels for social icons and download links.

Content guidance
- Copy tone: concise, confident, quietly authoritative. Replace hype with evidence: shipped features, metrics, awards.
- Provide small metadata rows: Role, Year, Platform, Stack for each project. Include “View live” and “Read case study” actions where relevant.
- Encourage case study depth: problem, constraints, approach, prototypes, outcomes, lessons learned.

Responsive behavior
- Mobile: stack sections with generous spacing, use horizontal scroll for project chips if needed. Collapse grids to 2-column or single-column masonry.
- Tablet: maintain 2–3 columns, keep nav sticky, ensure CTA buttons remain side by side with wrap.
- Desktop: emphasize alignment and asymmetry; allow occasional full-bleed imagery to break the grid while keeping margins intact.

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Hero stack: `grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`
- Cards: `rounded-xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-none`
- Buttons: `inline-flex items-center gap-2 rounded-full border border-black px-5 py-2.5 font-semibold transition`
- Section header: `flex items-center gap-3 uppercase tracking-[0.12em] text-xs font-semibold`
- Divider: `h-px bg-neutral-900/10`

Deliver a cohesive monochrome portfolio that feels timeless, structured, and portfolio-first, with no reliance on color to communicate hierarchy or interaction.

