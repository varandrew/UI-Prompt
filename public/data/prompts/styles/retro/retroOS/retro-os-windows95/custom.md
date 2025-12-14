# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「Windows 95」主题页，延续 retroOS 家族：灰阶介面、粗边框视窗、蓝标题列、像素图示、阴影内凹按钮。包含 Hero、视窗式卡片、功能/案例区、资料列表、CTA 与页脚，强调怀旧 UI 又保持可访问性。

Design a “Windows 95” themed page in TailwindCSS. Emulate classic retro OS chrome: gray panels, 3D inset/outset borders, blue title bars, pixel icons, and clean bitmapped typography. Include a hero, window-like cards, feature panes, data lists/tables, and CTAs while keeping modern accessibility.

Visual language
- Palette: warm gray panels (#C0C0C0), light gray backgrounds (#E5E5E5), title bars in classic blue (#0A64B3) with white text, and accent green/red for status. Borders use darker grays (#6E6E6E) for shadows and lighter grays (#FFFFFF) for highlights.
- Surfaces: beveled edges; inset and outset borders to simulate 3D. Use `shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#6e6e6e]` for panels and `shadow-[1px_1px_0_#fff,-1px_-1px_0_#6e6e6e]` for raised buttons.
- Typography: system-style sans (e.g., Tahoma/Arial) at 14–16px. Keep headings simple; no modern display fonts. Use monospace for file paths or console text.
- Icons: pixel-style or flat with small sizes (16–24px). Use folder, floppy, monitor, alert triangle, and checkmark motifs.

Layout blueprint
- Navigation/toolbar: a top taskbar-inspired strip with Start-like pill CTA and menu items (File, Edit, View, Help). Include a right-aligned status area (time, online/offline).
- Hero “window”: panel with title bar and control buttons (minimize/maximize/close). Inside, place headline, subhead, primary/secondary buttons, and a small status row. Background can be a tiled pattern or gradient reminiscent of classic desktops.
- Feature windows: 3–6 cards styled as windows. Each window has title bar, content area, and footer/status line. Use split panes to show lists on the left and details on the right.
- List/table: retro table with row highlight on focus/hover. Include checkboxes, file icons, name/size/date columns. Keep borders and alternating row shading minimal.
- Dialog/alert: small inset card with icon, message, and OK/Cancel buttons using bevels.
- CTA/footer: final bar with primary action (“Launch app”, “Download”), and quick links styled as flat text buttons. Add a small “About” dialog link.

Components & states
- Buttons: raised 3D buttons with light top/left and dark bottom/right strokes. Hover: lighten background slightly; Active: inset shadow for pressed state. Focus: dotted outline to mimic keyboard focus.
- Inputs: square/rectangular text fields with inset shadow; focus adds dotted outline. Checkboxes/radio use pixel-styled outlines and fills.
- Tabs: simple outlines with active tab raised; separators dotted or single-line.
- Scroll areas: visible scrollbars (gray track, darker thumb) styled simply. Avoid hidden scrollbars; ensure keyboard scroll works.
- Cards/windows: `rounded-none border border-[#6e6e6e] bg-[#c0c0c0] shadow-[1px_1px_0_#fff,-1px_-1px_0_#6e6e6e]` with title bars using `bg-[#0a64b3] text-white flex items-center gap-2 px-3 py-2`.

Motion
- Minimal: quick fades or slides (100–160ms). Button press uses inset shadow change, not transforms. Respect `prefers-reduced-motion`.

Accessibility
- Contrast: ensure text on blue title bars and gray panels meets 4.5:1. Provide focus indicators on all controls (dotted outline or glow). Keep hit targets ≥ 44px even if visuals are small.
- Keyboard: full navigation support; titlebar buttons and window controls must be reachable. Provide aria-labels for icon-only buttons.
- Avoid color-only indicators; pair status with icons/text.

Responsive behavior
- Mobile: stack windows as cards; simplify taskbar to a single bar with menu + main CTA. Keep borders/shadows subtle to avoid clutter. Tables may convert to stacked cards with labels.
- Tablet: two-column layout for windows; maintain readable text and controls.
- Desktop: multi-column windows; keep container centered with `max-w-6xl/7xl` and 24–32px gutters.

Content guidance
- Tone: friendly, nostalgic, straightforward. Use short labels (“File”, “Edit”, “Settings”) and simple microcopy (“Open”, “Browse”, “Apply”).
- Provide metadata: version numbers, last updated, status. Use monospace for paths/logs.
- CTA microcopy: “Launch app,” “Download,” “Open settings,” “Run diagnostic.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Window: `border border-[#6e6e6e] bg-[#c0c0c0] shadow-[1px_1px_0_#fff,-1px_-1px_0_#6e6e6e]`
- Title bar: `flex items-center gap-2 bg-[#0a64b3] text-white px-3 py-2 font-semibold`
- Button: `inline-flex items-center gap-2 border border-[#6e6e6e] bg-[#e5e5e5] shadow-[1px_1px_0_#fff,-1px_-1px_0_#6e6e6e] px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Input: `border border-[#6e6e6e] bg-white px-3 py-2 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#6e6e6e]`

Deliver a Windows 95-inspired page that feels like classic desktop UI—beveled panels, pixel icons, and tidy lists—while staying responsive and accessible today.

---

## English Version (en-US)

Design a “Windows 95” themed page in TailwindCSS. Emulate classic retro OS chrome: gray panels, 3D inset/outset borders, blue title bars, pixel icons, and clean bitmapped typography. Include a hero, window-like cards, feature panes, data lists/tables, and CTAs while keeping modern accessibility.

Visual language
- Palette: warm gray panels (#C0C0C0), light gray backgrounds (#E5E5E5), title bars in classic blue (#0A64B3) with white text, and accent green/red for status. Borders use darker grays (#6E6E6E) for shadows and lighter grays (#FFFFFF) for highlights.
- Surfaces: beveled edges; inset and outset borders to simulate 3D. Use `shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#6e6e6e]` for panels and `shadow-[1px_1px_0_#fff,-1px_-1px_0_#6e6e6e]` for raised buttons.
- Typography: system-style sans (e.g., Tahoma/Arial) at 14–16px. Keep headings simple; no modern display fonts. Use monospace for file paths or console text.
- Icons: pixel-style or flat with small sizes (16–24px). Use folder, floppy, monitor, alert triangle, and checkmark motifs.

Layout blueprint
- Navigation/toolbar: a top taskbar-inspired strip with Start-like pill CTA and menu items (File, Edit, View, Help). Include a right-aligned status area (time, online/offline).
- Hero “window”: panel with title bar and control buttons (minimize/maximize/close). Inside, place headline, subhead, primary/secondary buttons, and a small status row. Background can be a tiled pattern or gradient reminiscent of classic desktops.
- Feature windows: 3–6 cards styled as windows. Each window has title bar, content area, and footer/status line. Use split panes to show lists on the left and details on the right.
- List/table: retro table with row highlight on focus/hover. Include checkboxes, file icons, name/size/date columns. Keep borders and alternating row shading minimal.
- Dialog/alert: small inset card with icon, message, and OK/Cancel buttons using bevels.
- CTA/footer: final bar with primary action (“Launch app”, “Download”), and quick links styled as flat text buttons. Add a small “About” dialog link.

Components & states
- Buttons: raised 3D buttons with light top/left and dark bottom/right strokes. Hover: lighten background slightly; Active: inset shadow for pressed state. Focus: dotted outline to mimic keyboard focus.
- Inputs: square/rectangular text fields with inset shadow; focus adds dotted outline. Checkboxes/radio use pixel-styled outlines and fills.
- Tabs: simple outlines with active tab raised; separators dotted or single-line.
- Scroll areas: visible scrollbars (gray track, darker thumb) styled simply. Avoid hidden scrollbars; ensure keyboard scroll works.
- Cards/windows: `rounded-none border border-[#6e6e6e] bg-[#c0c0c0] shadow-[1px_1px_0_#fff,-1px_-1px_0_#6e6e6e]` with title bars using `bg-[#0a64b3] text-white flex items-center gap-2 px-3 py-2`.

Motion
- Minimal: quick fades or slides (100–160ms). Button press uses inset shadow change, not transforms. Respect `prefers-reduced-motion`.

Accessibility
- Contrast: ensure text on blue title bars and gray panels meets 4.5:1. Provide focus indicators on all controls (dotted outline or glow). Keep hit targets ≥ 44px even if visuals are small.
- Keyboard: full navigation support; titlebar buttons and window controls must be reachable. Provide aria-labels for icon-only buttons.
- Avoid color-only indicators; pair status with icons/text.

Responsive behavior
- Mobile: stack windows as cards; simplify taskbar to a single bar with menu + main CTA. Keep borders/shadows subtle to avoid clutter. Tables may convert to stacked cards with labels.
- Tablet: two-column layout for windows; maintain readable text and controls.
- Desktop: multi-column windows; keep container centered with `max-w-6xl/7xl` and 24–32px gutters.

Content guidance
- Tone: friendly, nostalgic, straightforward. Use short labels (“File”, “Edit”, “Settings”) and simple microcopy (“Open”, “Browse”, “Apply”).
- Provide metadata: version numbers, last updated, status. Use monospace for paths/logs.
- CTA microcopy: “Launch app,” “Download,” “Open settings,” “Run diagnostic.”

Tailwind helper suggestions (non-binding)
- Container: `mx-auto max-w-6xl px-6 lg:px-10`
- Window: `border border-[#6e6e6e] bg-[#c0c0c0] shadow-[1px_1px_0_#fff,-1px_-1px_0_#6e6e6e]`
- Title bar: `flex items-center gap-2 bg-[#0a64b3] text-white px-3 py-2 font-semibold`
- Button: `inline-flex items-center gap-2 border border-[#6e6e6e] bg-[#e5e5e5] shadow-[1px_1px_0_#fff,-1px_-1px_0_#6e6e6e] px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Input: `border border-[#6e6e6e] bg-white px-3 py-2 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#6e6e6e]`

Deliver a Windows 95-inspired page that feels like classic desktop UI—beveled panels, pixel icons, and tidy lists—while staying responsive and accessible today.
