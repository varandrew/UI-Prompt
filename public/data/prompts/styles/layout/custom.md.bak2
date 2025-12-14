# Custom Prompt

## 中文版本 (zh-CN)

你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Masonry（瀑布流）」示例界面布局风格高度接近的 Masonry 网格区块。
要求：保留三列不等高度彩色卡片的瀑布流效果，每列自上而下自然堆叠卡片，整体铺满可视宽度，只允许替换卡片文案、图像内容、色板和外围模块，不允许改变「固定列宽 + 不等高度卡片」这一核心布局模式。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 作品集 Gallery：展示摄影、插画、UI 作品等高度视觉化内容；
- 灵感墙 / Moodboard：汇总各类灵感卡片、配色、构图和参考；
- 内容集合：博客卡片、商品卡片、案例卡片等大数量内容列表。

【整体布局结构】
1. 外层容器
   - 使用 \`display: flex\` 或 CSS Grid 包裹 3 列；在 Tailwind 中可使用 \`flex\` + 自定义列容器。
   - Masonry 区应占据一个完整区块宽度，四周留有适度内外边距（例如 \`p-4\`）。
2. 列级结构
   - 每列使用 \`flex\` + \`flex-col\` 垂直堆叠卡片，列之间使用统一水平间距（例如 \`gap-2\`、\`mx-2\`）。
   - 列数默认为 3 列，桌面端宽度接近等分；移动端可降为 1–2 列。
3. 卡片
   - 每张卡片有统一的内边距与圆角（如 \`rounded-xl\`、\`py-6 px-4\`），高度由内容或预设值决定，形成不等高效果；
   - 卡片内可放置标签文字、标题、图标或图片缩略图。

【布局与响应式】
1. 桌面端
   - 三列并排，卡片高度差异营造错落节奏，整体高度由内容决定；
   - Masonry 区块可以作为页面主视觉下方的大型内容集合。
2. 平板与手机
   - 可使用媒体查询或 Tailwind 的响应式类将列数缩减为 2 或 1 列；
   - 保持卡片间距一致，避免在小屏幕上出现过密排布。

【色彩与视觉语言】
1. 卡片配色
   - 使用高饱和度渐变或图片作为卡片背景（类似当前示例中的多彩渐变）；
   - 卡片内文字保持高对比度（白字或深色字），确保可读性。
2. 标签与排版
   - 标签可使用大写字母和较大的字间距（\`tracking-widest\`）强化「标签墙」感；
   - 内容较多时可在卡片中加入标题 + 简短描述，但要控制行数，避免破坏瀑布流节奏。

【交互与动效】
1. 悬停反馈
   - Hover 时卡片轻微上浮（如 \`-translate-y-1\` 或 \`-translate-y-2\`）并增强阴影，表达「可点击」；
   - 动画时长控制在 150–250ms，使用柔和缓动曲线。
2. 点击反馈
   - 可在 active 状态稍微降低高度或减弱阴影，模拟按压效果。

【输出要求】
- 使用语义化 HTML 将 Masonry 作为一个独立内容区块（如 \`<section aria-label='Masonry gallery'>\`）；
- 使用 Tailwind 原子类搭建列容器和卡片（\`flex\`、\`flex-col\`、\`gap-x\`、\`gap-y\`、\`rounded-xl\` 等）；
- 生成结果必须保留「固定列宽 + 不等高度卡片 + 垂直堆叠」的瀑布流核心特征，让人一眼看出这是 Pinterest 式 Masonry 布局变体，而不是普通整齐网格。

---

## English Version (en-US)

You are a senior UI designer and front-end engineer. Generate a Masonry-style grid section that looks very close to the current “Masonry” demo.
Preserve the three-column, staggered-height card behaviour: each column stacks cards vertically with different heights, and the layout fills the available width. You may change card labels, imagery, color palette and surrounding sections, but you must not alter the core “fixed columns + variable-height cards” pattern. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Portfolio galleries for photography, illustration or UI work.
- Inspiration walls / moodboards with many small visual tiles.
- Content collections such as blog cards, product tiles or case studies.

[Layout structure]
1. Outer container
   - Wrap 3 columns in a flex container or CSS Grid; in Tailwind, use \`flex\` plus custom column wrappers.
   - The Masonry section should span the full content width, with comfortable padding/margins (e.g. \`p-4\`).
2. Columns
   - Each column is a vertical stack (\`flex flex-col\`) of cards with a consistent vertical gap (\`gap-2\` or similar).
   - At desktop sizes, use three roughly equal-width columns; on smaller viewports you may reduce to two or one.
3. Cards
   - Cards share consistent padding and radius (\`rounded-xl\`, \`py-6 px-4\`), but heights differ per card to create the waterfall effect.
   - Inside each card, place a label, title, icon or thumbnail; keep copy tight so the overall rhythm stays light.

[Responsive behaviour]
1. Desktop
   - Three columns side by side, with staggered card heights producing a brick-wall rhythm;
   - The Masonry section can sit under a hero area as the primary content gallery.
2. Tablet and mobile
   - Use responsive classes/media queries to reduce column count to 2 or 1;
   - Maintain consistent gaps so the layout does not feel cramped on small screens.

[Color and visual language]
1. Card backgrounds
   - Use bold gradients or imagery for card backgrounds (similar to the multi-color gradients in the current demo).
   - Ensure high contrast between background and text (white on dark, or dark on light).
2. Labels and typography
   - Consider uppercase labels with increased letter-spacing (\`tracking-widest\`) to emphasise the “tag wall” feeling.
   - When including longer text, limit the number of lines to avoid breaking the visual rhythm.

[Interaction and motion]
1. Hover
   - On hover, cards should gently lift (e.g. \`-translate-y-1\`/\`-translate-y-2\`) and/or deepen their shadows to signal clickability.
   - Keep animations short (150–250ms) with smooth easing.
2. Active
   - Optionally reduce the lift and shadow slightly on active press to mimic a physical press.

[Output requirements]
- Use semantic HTML to wrap the Masonry section (e.g. \`<section aria-label='Masonry gallery'>\`).
- Use Tailwind-style utilities for columns and cards (\`flex\`, \`flex-col\`, \`gap-x\`, \`gap-y\`, \`rounded-xl\`, etc.).
- The generated UI must preserve “fixed columns + variable-height stacked cards” as key cues so it is clearly read as a Masonry layout, not a regular uniform grid.
