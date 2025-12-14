# Custom Prompt

## 中文版本 (zh-CN)

使用 TailwindCSS 创建「Fluent 2 设定页面」。应用 Fluent 2 的柔和几何、温和深度、精确描边和沉静调色板。该页面应该让偏好设置易于扫描且安全修改，具有清晰的交互提示和强大的无障碍支持。

**布局与流程**
- Hero/介绍：简短标题（32-46px）、副标题 15-17px、指向「隐私中心」或「账户概览」的链接。背景保持浅色或柔和着色。
- 设定布局：两面板布局——左侧导航用于分类（账户、安全、通知、账单），右侧内容用于控制。移动设备上导航折叠为顶部下拉菜单或堆叠列表。
- 控制块：用于凭证、MFA、通知切换、语言/主题、数据/导出的分组面板。每个块包含清晰的标题、简短的帮助文本和主要操作。
- 活动/安全日志：可选部分，显示最近事件（登录、修改）在浅色表格中，使用等宽字体显示时间戳。
- 最终保证：数据控制、导出/删除选项和「需要帮助？」CTA。

**视觉语言（Fluent 2）**
- 表面：`bg-white`/非常浅色中性色，1px 描边（低透明度）、柔和阴影（`shadow-sm/md`）、8-12px 圆角。使用微妙的分区分隔线。
- 色彩：主强调色（蓝色/青色）、柔和次要中性色。状态色符合 Fluent（成功/信息/警告/关键）。渐变最少化且对比度安全。
- 图标：清晰、线条/双色；始终配对文本。

**控制与状态**
- 按钮：药丸/方圆角、填充主按钮 + 透明次按钮。悬停色调偏移；按下略微下压；焦点可见轮廓 2-3px 强调色。
- 切换/复选框/单选按钮：平滑 140-200ms 过渡；清晰开/关对比；标签始终可见；焦点环清晰。
- 输入/选择：1px 描边、10-12px 圆角、聚焦时柔和阴影；内联提示在下方。显示验证为文本+图标，不仅颜色。
- 高级设置的折叠菜单：浅色边框、小圆角、克制的动效；尊重 `prefers-reduced-motion`。
- 表格/列表：`divide-y` 行，斑马纹可选。必要时粘性标题；包含清晰交互提示的批量操作。

**排版**
- 标题字重 600-700；正文 15-16px，行高 1.6-1.7。标签小型大写或半粗体。时间戳/ID 使用等宽字体。保持适中的行长。

**动效**
- 沉静：淡入/位移 120-180ms ease-out；无弹跳。悬停上浮 ≤4px。在粗指针上禁用行悬停；尊重 `prefers-reduced-motion`。

**无障碍**
- 对比度 ≥ 4.5:1。所有控制上的焦点样式。确保点击目标 ≥44px。提供 aria-labels、可见帮助文本和描述性验证。不依赖仅颜色状态；配对图标/文本。
- 尊重减少运动；按照从左到右、从上到下的键盘顺序。

**文案语气**
- 清晰、保证、控制优先：「安全修改」、「你的数据，你做主」、「随时导出或删除」。
- CTA 示例：「保存修改」、「审查安全」、「管理通知」。

**Tailwind 技巧（参考）**
- 外壳：`max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[260px_1fr] gap-6`
- 导航：`rounded-xl border border-slate-200/70 bg-white shadow-sm divide-y divide-slate-200`
- 面板：`rounded-xl border border-slate-200/70 bg-white shadow-sm p-5 lg:p-6`
- 按钮：`rounded-full px-5 py-3 font-semibold transition hover:shadow-md active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- 输入：`rounded-lg border border-slate-200/80 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/60`

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
