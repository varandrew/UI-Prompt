# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建模板「Fluent 2 生产力应用」，延续 fluent2 家族风格，包含 Hero、卡片/图文区与 CTA。

---

## English Version (en-US)

Design a “Fluent 2 Productivity” page in TailwindCSS. Apply Fluent 2’s soft geometry, light depth, calm gradients, and clear strokes. The experience should feel efficient, reassuring, and easy to parse for task management, calendars, notes, or dashboards.

**Layout & Flow**
- Hero: 38–52px headline, concise subhead, primary CTA (“Start organizing”) + secondary (“See demo”). Optional illustration or abstract shapes on a light neutral/soft gradient background.
- Feature grid: 3–6 cards highlighting tasks, calendar, collaboration, focus mode, notifications. Each card includes icon, title, 2–3 lines body, and a small action.
- Productivity strip: side-by-side modules (e.g., “Today view” + “My priorities”), or tabs for Tasks/Calendar/Notes. Include a mini-stats row (completed tasks, focus minutes).
- Collaboration section: avatars/initials chips, sharing states, permission badges; show a small timeline or comments card.
- Closing CTA: reinforce control/privacy and invite onboarding.

**Visual Language (Fluent 2)**
- Surfaces: light backgrounds, 1px strokes at low opacity, soft elevation (`shadow-sm/md`), 8–12px radii. Avoid harsh shadows and glass.
- Color: one primary accent (blue/teal) with subtle secondary tones; status colors aligned to Fluent palette (success/info/warn/critical). Gradients are mild and contrast-safe.
- Iconography: simple, duotone or line; always pair icons with text.

**Typography**
- Headings weight 600–700; body 15–16px, line-height 1.6–1.7. Labels small uppercase or semi-bold. Numbers/stats can be monospace for alignment.
- Use `text-balance` where available for long headings; keep line lengths moderate.

**Components & States**
- Buttons: pill/squircle radius; primary filled, secondary ghost. Hover = tint shift; active = slight press; focus-visible outline 2–3px in accent. Allow icon-leading buttons for “Add task” or “New event.”
- Cards: `rounded-xl border border-slate-200/70 bg-white shadow-sm` with 16–24px padding. Optionally add subtle top accent bar or dot.
- Chips/badges: soft corners; use for status (Due today / In progress / Completed). Keep text, not color-only.
- Tabs/segmented controls: clear focus ring; hover tone shift; active underline or pill highlight.
- Lists/tables: `divide-y` rows, zebra optional. For tasks, include checkbox, title, tags, due date. Respect keyboard focus and `prefers-reduced-motion`.

**Motion**
- Calm and utilitarian: fade/translate 120–180ms ease-out; no bounce. Hover lift ≤4px. Toggle/checkbox motions smooth but subtle. Respect `prefers-reduced-motion`.

**Accessibility**
- Contrast ≥ 4.5:1 on text. Focus styles visible on all inputs, tabs, buttons. Larger hit targets. Do not rely on color-only status; pair with text/icon.
- Provide aria-labels for controls; alt text for illustrations. Ensure keyboard navigation order is logical.

**Copy Tone**
- Clear, supportive, action-oriented: “Plan the day,” “Stay aligned,” “Focus without friction.” Avoid hype; emphasize control and calm productivity.
- CTA examples: “Start organizing”, “Open focus mode”, “Invite teammates”.

**Tailwind Tips (reference)**
- Container: `max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Surfaces: `rounded-xl border border-slate-200/70 bg-white shadow-sm`
- Buttons: `rounded-full px-5 py-3 font-semibold transition hover:shadow-md active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Tabs/segmented: `inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5`
- Lists: `divide-y divide-slate-200 text-sm leading-6`; checkboxes with `focus-visible:ring` utilities.
