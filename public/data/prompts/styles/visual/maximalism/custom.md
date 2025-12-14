# Custom Prompt

## 中文版本 (zh-CN)

你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Maximalism 极繁主义」核心样式卡展示界面风格高度接近的页面。
要求：保持高饱和、多元素、舞台式视觉的整体气质，只允许替换文案、插图及具体配色组合，不允许将版面简化为极简或低密度布局。输出语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 艺术博物馆或当代艺术展览 Landing Page
- 音乐 / 文化节宣传页、创意品牌活动页
- 需要传达「More is more」「信息很满但很有趣」的体验型页面

【整体布局结构】
1. 顶部区域
   - 使用带有渐变或半透明背景的导航栏，Logo 与主导航项可以使用彩色标签或徽章形式呈现。
   - 导航文字可以略大且粗体，配合小图标或 Emoji 强化「节日感」。
2. Hero 标题区
   - 使用超大字号、粗体标题（例如 MORE IS MORE!），置于画面中心或稍偏上位置。
   - 标题周围用若干彩色徽章、标签、Icon 或 Emoji 环绕，营造视觉爆炸感。
3. 内容区块
   - 可以采用多列卡片或模块化区域，每块内容卡片都有自己的高饱和渐变背景、边框和装饰图形。
   - 允许信息密度较高，但必须通过标题、分组和合理的留白将信息组织成可识别的块。

【色彩与材质】
1. 配色策略
   - 同屏中可同时出现多种高饱和颜色（粉、紫、橙、蓝、翠绿等），但需要通过大小和位置控制，避免所有元素同时抢眼。
   - 背景可以是强烈渐变或图案纹理，前景卡片再叠加自己的渐变或纯色，形成层层叠加。
2. 材质质感
   - 使用粗边框、强阴影和发光外框，让卡片像一张张海报或贴纸被贴在舞台上。
   - 可以在背景中加入光斑、颗粒噪点或光束线条，增加炫目、庆典氛围。

【图形元素与排版】
1. 图形
   - 使用几何形状（圆、三角形、矩形）、Emoji、图标和小插画自由散布，但要注意围绕某个主视觉中心。
2. 文本排版
   - 标题字重极粗（black / extrabold），字距可略扩展，强化视觉存在感。
   - 分组标题和标签也可以使用全部大写或带背景块的形式，强化「海报」感。

【交互与动效】
1. 悬停
   - 卡片和按钮在 hover 时可以轻微放大、旋转或加强阴影，并让边框或渐变变更亮。
2. 动画
   - 可以给背景元素或小徽章添加缓慢浮动或闪烁高光，但避免高频闪烁，以免视觉疲劳。
   - 动效节奏可稍快于常规企业页面，但不要超过 300ms 的快速抖动。

【输出要求】
- 使用语义化 HTML：header、nav、main、section 组织导航、Hero 和内容区域。
- 使用 TailwindCSS 原子类控制多彩背景（如 bg-gradient-to-br）、阴影（shadow-2xl）、圆角和布局。
- 生成的 UI 必须让人一眼感到「视觉极度丰富，同时仍看得见层级与结构」，明确属于 Maximalism 极繁主义风格变体。


---

## English Version (en-US)

You are a senior UI designer and front-end engineer. Generate a Maximalism style page that looks very close to the current “Maximalism” core style card demo.
Keep the high-saturation, element-dense, stage-like aesthetic; you may change copy, illustrations and specific color combinations, but you must not simplify the layout into a minimal or low-density design. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Landing pages for museums, contemporary art exhibitions and cultural festivals.
- Bold creative brand or campaign homepages where “more is more” is part of the identity.
- Experiences that should feel visually packed, loud and entertaining, yet still navigable.

[Layout structure]
1. Header
   - Use a gradient or semi-transparent header bar with a strong logo and navigation links styled as colorful pills or badges.
   - Navigation text can be bold and slightly oversized, optionally with emojis or icons to express festivity.
2. Hero section
   - Place an oversized, heavy headline (e.g. “MORE IS MORE!”) at or near the center of the viewport.
   - Surround the headline with badges, tags and decorative icons or emojis to create a visual explosion focal point.
3. Content blocks
   - Use multi-column cards or modules where each card has its own saturated gradient or bold solid color, plus strong borders and shadows.
   - Allow rich content but group it clearly: strong titles, subheadings and consistent spacing maintain readability.

[Color and material]
1. Palette
   - Combine multiple saturated hues (pinks, purples, oranges, blues, emeralds) in a single view; control dominance via size and placement.
   - Backgrounds may be strong gradients or patterns, with foreground cards stacking additional gradients or solids.
2. Rendering
   - Cards, chips and buttons carry thick borders, pronounced shadows and glow-like outlines so they feel like poster fragments pasted together.
   - Background layers can include light flares, noise or streaks to simulate stage lighting or neon festival signage.

[Interaction and motion]
1. Hover
   - On hover, cards and buttons can scale up slightly, strengthen shadows and bright borders, and feel theatrically responsive.
2. Motion
   - Use gentle floating, pulsing or shimmering for decorative elements; avoid fast flicker that would cause eye strain.
   - Keep motion timings lively but controlled (roughly 180–300ms for typical UI transitions).

[Output requirements]
- Use semantic HTML (header/nav/main/section) to structure the page.
- Use Tailwind-style utilities for gradients, layout, spacing, shadows and typography.
- The resulting UI must clearly embody Maximalism: visually dense, multi-colored and celebratory, while preserving enough hierarchy and grouping to remain usable.
