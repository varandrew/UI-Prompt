# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「Fluent 2 设定页面」，延续 fluent2 家族风格，包含 Hero、卡片/图文区与 CTA。

---

## English Version (en-US)

Create a “Fluent 2 Settings” page in TailwindCSS. Apply Fluent 2’s soft geometry, gentle depth, precise strokes, and calm palette. The page should make preferences easy to scan and safe to change, with clear affordances and robust accessibility.

**Layout & Flow**
- Hero/intro: short headline (32–46px), subhead 15–17px, link to “Privacy center” or “Account overview.” Keep background light or softly tinted.
- Settings layout: two-panel layout—left nav for categories (Account, Security, Notifications, Billing), right content for controls. On mobile, nav collapses into a top dropdown or stacked list.
- Control blocks: grouped panels for credentials, MFA, notification toggles, language/theme, data/export. Each block uses a clear title, short helper text, and primary actions.
- Activity/security log: optional section with recent events (sign-ins, changes) in a light table with monospace timestamps.
- Final reassurance: data control, export/delete options, and a “Need help?” CTA.

**Visual Language (Fluent 2)**
- Surfaces: `bg-white`/very light neutrals, 1px strokes at low opacity, soft shadow (`shadow-sm/md`), radius 8–12px. Use subtle section dividers.
- Color: primary accent (blue/teal), muted secondary neutrals. Status colors aligned to Fluent (success/info/warn/critical). Gradients minimal and contrast-safe.
- Icons: clean, line/duotone; always paired with text.

**Controls & States**
- Buttons: pill/squircle, filled primary + ghost secondary. Hover tint shift; active slight press; focus-visible outline 2–3px accent.
- Toggles/checkboxes/radios: smooth 140–200ms transitions; clear on/off contrast; labels always visible; focus ring explicit.
- Inputs/selects: 1px stroke, 10–12px radius, soft shadow on focus; inline hints beneath. Show validation with text+icon, not color alone.
- Accordions for advanced settings: light borders, small radius, restrained motion; respect `prefers-reduced-motion`.
- Tables/lists: `divide-y` rows, zebra optional. Sticky header if needed; include bulk actions with clear affordances.

**Typography**
- Headings weight 600–700; body 15–16px, line-height 1.6–1.7. Labels small uppercase or semi-bold. Use monospace for timestamps/IDs. Keep line lengths modest.

**Motion**
- Calm: fade/translate 120–180ms ease-out; no bounce. Hover lift ≤4px. Disable row hover on coarse pointers; honor `prefers-reduced-motion`.

**Accessibility**
- Contrast ≥ 4.5:1. Focus styles on all controls. Ensure touch targets ≥44px. Provide aria-labels, visible helper text, and descriptive validation. Do not rely on color-only states; pair with icons/text.
- Respect reduced motion; provide keyboard ordering left-to-right, top-to-bottom.

**Copy Tone**
- Clear, reassuring, control-first: “Change it safely,” “Your data, your call,” “Export or delete anytime.”
- CTA examples: “Save changes”, “Review security”, “Manage notifications”.

**Tailwind Tips (reference)**
- Shell: `max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[260px_1fr] gap-6`
- Nav: `rounded-xl border border-slate-200/70 bg-white shadow-sm divide-y divide-slate-200`
- Panels: `rounded-xl border border-slate-200/70 bg-white shadow-sm p-5 lg:p-6`
- Buttons: `rounded-full px-5 py-3 font-semibold transition hover:shadow-md active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Inputs: `rounded-lg border border-slate-200/80 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/60`
