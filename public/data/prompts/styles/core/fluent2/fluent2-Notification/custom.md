# Custom Prompt

## 中文版本 (zh-CN)

使用 TailwindCSS 构建「Fluent 2 通知中心」页面。拥抱 Fluent 2 特性：柔和圆角、微妙深度、清晰描边、谨慎使用分层半透明、沉静渐变和无障碍对比度。专注于信息清晰度和通知/偏好的可操作控制。

**布局与流程**
- Hero：标题 38-52px、副标题 16-18px、主要 CTA（如「启用提醒」）和次要（「管理规则」）。使用浅色中性或柔和渐变背景配单个插图/点缀；保持文本对比度高。
- 通知摘要：卡片网格或列表（4-8 张）。每张卡片显示来源、标题、简短正文、时间戳、严重程度徽章和快速操作（禁音/固定/标记为已读）。在列表上方提供筛选/排序控制。
- 偏好矩阵：两列分区，每个通道（电子邮件/推送/短信/应用内）和分类（安全、账单、产品）有切换或复选框。包含「禁音日程/勿扰」块。
- 活动日志：带 1px 分隔线、粘性标题、等宽字体时间戳和状态图标的表格列表。提供批量操作（全部标记为已读、清除）。
- 结尾 CTA：保证隐私和控制；链接到「隐私设置」或「导出数据」。

**视觉语言（Fluent 2）**
- 表面：浅色中性色，具有柔和高度。使用 `shadow-sm`/`shadow-md` 等效物；避免生硬阴影。卡片/面板的描边在 8-12% 透明度。
- 圆角：8-12px 半径；按钮、卡片、输入框之间一致。使用内部填充 16-24px。
- 色彩：主强调色（蓝色/青色）配以去饱和的辅助色调；状态色与 Fluent 指南对齐（成功/信息/警告/关键）。渐变温和（两停顿、低对比度）。
- 图标：简单、线条或双色；配对文本。避免仅图标密集行。

**排版**
- 标题 600-700 字重；正文 15-16px，行高 1.6-1.7。标签小型大写或半粗体。数字/时间戳使用等宽字体对齐。
- 保持适中的行长；如果可用，对长标题使用 `text-balance`。

**组件与状态**
- 按钮：药丸/方圆角半径、填充主按钮 + 透明次按钮。悬停 = 色调偏移；按下 = 轻微下压；焦点可见轮廓 2-3px 强调色。允许「禁音」或「筛选」的图标前置变体。
- 切换/复选框：平滑过渡（140-200ms）、清晰开/关对比、焦点环。在右侧提供标签；避免仅图标切换。
- 芯片/徽章：柔和圆角、温和填充以表示状态（信息/成功/警告/关键）。包含文本标签，不仅颜色。
- 卡片：`border border-slate-200/70 bg-white shadow-sm rounded-xl`，间距充足；可选类别的顶部强调条。
- 表格/列表：`divide-y` 线、微妙的悬停行着色；选择状态具有清晰焦点环和复选框对齐。

**动效**
- 沉静、有目的：淡入/位移 120-180ms ease-out。无弹跳。尊重 `prefers-reduced-motion`；在触摸/粗指针上禁用行悬停提升。
- 微交互：切换/复选框动画填充/把手；按钮按下 1-2px。

**无障碍**
- 文本对比度 ≥ 4.5:1；状态色配对图标/文本。焦点样式始终可见。点击目标 ≥44px。为控制提供 aria-labels 和插图的 alt 文本。
- 不依赖仅颜色严重程度；包含标签（信息/警告/错误）和图标。

**文案语气**
- 保证、清晰、控制优先。示例：「保持知情，不被淹没」。「选择我们何时以及如何通知你」。「按日程禁音」。
- CTA 示例：「启用提醒」、「审查通道」、「打开隐私中心」。

**Tailwind 提示（参考）**
- 容器：`max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- 表面：`rounded-xl border border-slate-200/70 bg-white shadow-sm`，仅在需要且对比度安全时使用 `backdrop-blur-[2px]`。
- 按钮：`rounded-full px-5 py-3 font-semibold transition hover:shadow-md active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- 切换：`peer` + `peer-checked:` 模式；对焦点使用 `ring` 工具类。
- 列表/表格：日志使用 `divide-y divide-slate-200 text-sm leading-6 font-mono`；通知卡片使用 `grid gap-4 md:grid-cols-2`。

Build a “Fluent 2 Notification Center” page in TailwindCSS. Embrace Fluent 2 traits: soft corners, subtle depth, clear strokes, layered translucency used sparingly, calm gradients, and accessible contrast. Focus on information clarity and actionable controls for notifications/preferences.

**Layout & Flow**
- Hero: headline 38–52px, subhead 16–18px, primary CTA (e.g., “Enable alerts”) and secondary (“Manage rules”). Use a light neutral or soft gradient background with a single illustration/spot; keep text contrast high.
- Notification digest: grid or list of cards (4–8). Each card shows source, title, short body, timestamp, severity badge, and quick actions (mute/pin/mark read). Provide filter/sort controls above the list.
- Preference matrix: two-column section with toggles or checkboxes per channel (Email/Push/SMS/In-app) and category (Security, Billing, Product). Include a “Mute schedule / Do Not Disturb” block.
- Activity log: tabular list with 1px dividers, sticky header, monospace timestamps, and status icons. Provide bulk actions (Mark all read, Clear).
- Closing CTA: reassure privacy and control; link to “Privacy settings” or “Export data.”

**Visual Language (Fluent 2)**
- Surfaces: light neutrals with soft elevation. Use `shadow-sm`/`shadow-md` equivalents; avoid harsh shadows. Strokes at 8–12% opacity for cards/panels.
- Corners: 8–12px radius; consistent across buttons, cards, inputs. Use inner padding 16–24px.
- Color: primary accent (blue/teal) with desaturated supporting tones; status colors for success/info/warn/critical aligned with Fluent guidance. Gradients are gentle (two-stop, low contrast).
- Icons: simple, line or duotone; pair with text. Avoid dense icon-only rows.

**Typography**
- Headings 600–700 weight; body 15–16px, line-height 1.6–1.7. Labels in small caps or semi-bold. Numbers/timestamps in monospace for alignment.
- Keep line lengths reasonable; use `text-balance` for long headings if available.

**Components & States**
- Buttons: pill/squircle radius, filled primary + ghost secondary. Hover = tint shift; active = slight press; focus-visible outline 2–3px in accent. Allow icon-leading variants for “Mute” or “Filter.”
- Toggles/checkboxes: smooth transitions (140–200ms), clear on/off contrast, focus ring. Provide labels on the right; avoid icon-only toggles.
- Chips/badges: soft corners, gentle fills for status (info/success/warn/critical). Include text labels, not color-only.
- Cards: `border border-slate-200/70 bg-white shadow-sm rounded-xl` with ample spacing; optional top accent bar for category.
- Tables/lists: `divide-y` lines, hover row tint subtle; selection states with clear focus ring and checkbox alignment.

**Motion**
- Calm, purposeful: fade/translate 120–180ms ease-out. No bounce. Respect `prefers-reduced-motion`; disable row hover lift on touch/coarse pointers.
- Micro-interactions: toggles/checkboxes animate fill/knob; buttons press 1–2px.

**Accessibility**
- Contrast ≥ 4.5:1 on text; status colors paired with icons/text. Focus styles always visible. Hit targets ≥44px. Provide aria-labels for controls and alt text for illustrations.
- Do not rely on color alone for severity; include labels (Info/Warning/Error) and icons.

**Copy Tone**
- Reassuring, clear, control-focused. Examples: “Stay informed, not overwhelmed.” “Choose when and how we notify you.” “Silence on schedule.”
- CTA examples: “Enable alerts”, “Review channels”, “Open privacy center.”

**Tailwind Hints (reference)**
- Container: `max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Surfaces: `rounded-xl border border-slate-200/70 bg-white shadow-sm` with `backdrop-blur-[2px]` only if needed and contrast-safe.
- Buttons: `rounded-full px-5 py-3 font-semibold transition hover:shadow-md active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Toggles: `peer` + `peer-checked:` patterns; use `ring` utilities for focus.
- Lists/Tables: `divide-y divide-slate-200 text-sm leading-6 font-mono` for logs; `grid gap-4 md:grid-cols-2` for notification cards.


---

## English Version (en-US)

Build a “Fluent 2 Notification Center” page in TailwindCSS. Embrace Fluent 2 traits: soft corners, subtle depth, clear strokes, layered translucency used sparingly, calm gradients, and accessible contrast. Focus on information clarity and actionable controls for notifications/preferences.

**Layout & Flow**
- Hero: headline 38–52px, subhead 16–18px, primary CTA (e.g., “Enable alerts”) and secondary (“Manage rules”). Use a light neutral or soft gradient background with a single illustration/spot; keep text contrast high.
- Notification digest: grid or list of cards (4–8). Each card shows source, title, short body, timestamp, severity badge, and quick actions (mute/pin/mark read). Provide filter/sort controls above the list.
- Preference matrix: two-column section with toggles or checkboxes per channel (Email/Push/SMS/In-app) and category (Security, Billing, Product). Include a “Mute schedule / Do Not Disturb” block.
- Activity log: tabular list with 1px dividers, sticky header, monospace timestamps, and status icons. Provide bulk actions (Mark all read, Clear).
- Closing CTA: reassure privacy and control; link to “Privacy settings” or “Export data.”

**Visual Language (Fluent 2)**
- Surfaces: light neutrals with soft elevation. Use `shadow-sm`/`shadow-md` equivalents; avoid harsh shadows. Strokes at 8–12% opacity for cards/panels.
- Corners: 8–12px radius; consistent across buttons, cards, inputs. Use inner padding 16–24px.
- Color: primary accent (blue/teal) with desaturated supporting tones; status colors for success/info/warn/critical aligned with Fluent guidance. Gradients are gentle (two-stop, low contrast).
- Icons: simple, line or duotone; pair with text. Avoid dense icon-only rows.

**Typography**
- Headings 600–700 weight; body 15–16px, line-height 1.6–1.7. Labels in small caps or semi-bold. Numbers/timestamps in monospace for alignment.
- Keep line lengths reasonable; use `text-balance` for long headings if available.

**Components & States**
- Buttons: pill/squircle radius, filled primary + ghost secondary. Hover = tint shift; active = slight press; focus-visible outline 2–3px in accent. Allow icon-leading variants for “Mute” or “Filter.”
- Toggles/checkboxes: smooth transitions (140–200ms), clear on/off contrast, focus ring. Provide labels on the right; avoid icon-only toggles.
- Chips/badges: soft corners, gentle fills for status (info/success/warn/critical). Include text labels, not color-only.
- Cards: `border border-slate-200/70 bg-white shadow-sm rounded-xl` with ample spacing; optional top accent bar for category.
- Tables/lists: `divide-y` lines, hover row tint subtle; selection states with clear focus ring and checkbox alignment.

**Motion**
- Calm, purposeful: fade/translate 120–180ms ease-out. No bounce. Respect `prefers-reduced-motion`; disable row hover lift on touch/coarse pointers.
- Micro-interactions: toggles/checkboxes animate fill/knob; buttons press 1–2px.

**Accessibility**
- Contrast ≥ 4.5:1 on text; status colors paired with icons/text. Focus styles always visible. Hit targets ≥44px. Provide aria-labels for controls and alt text for illustrations.
- Do not rely on color alone for severity; include labels (Info/Warning/Error) and icons.

**Copy Tone**
- Reassuring, clear, control-focused. Examples: “Stay informed, not overwhelmed.” “Choose when and how we notify you.” “Silence on schedule.”
- CTA examples: “Enable alerts”, “Review channels”, “Open privacy center.”

**Tailwind Hints (reference)**
- Container: `max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24`
- Surfaces: `rounded-xl border border-slate-200/70 bg-white shadow-sm` with `backdrop-blur-[2px]` only if needed and contrast-safe.
- Buttons: `rounded-full px-5 py-3 font-semibold transition hover:shadow-md active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
- Toggles: `peer` + `peer-checked:` patterns; use `ring` utilities for focus.
- Lists/Tables: `divide-y divide-slate-200 text-sm leading-6 font-mono` for logs; `grid gap-4 md:grid-cols-2` for notification cards.
