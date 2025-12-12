/**
 * Gradients - FullPage Custom Prompt
 * 漸变風格完整页面的 AI 指令（針對 Gradients 全屏控制面板）
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Gradients 全屏工作台页面」界面风格高度接近的 UI。
要求：保持整体布局结构、渐变用色思路和层次感基本不变，只允许替换文案、品牌名称和具体数据内容。输出必须使用语义化 HTML 结构（header、main、section、aside、footer 等），并使用类似 TailwindCSS 的原子类（例如 flex、grid、gap-6、bg-gradient-to-br、from-purple-600、to-orange-400 等）来控制布局与样式。

【使用场景与整体氛围】
- 目标场景：面向创作者和产品团队的个人工作台、任务总览页或日常仪表盘，既能展示今日概览，也能提供项目、任务与进度的快速入口；
- 用户角色：产品设计师、创意总监、市场运营、项目经理、创意团队成员等，需要一个“充满能量但不压迫”的控制中心；
- 整体气质：现代、友好、富有活力，界面像是一块被渐变色浸染的画布，但核心信息区域仍然简洁、清晰、易读；
- 视觉印象：顶部是带有柔和霓虹渐变的导航条与品牌区，主体是多块卡片组成的仪表盘，背景中隐约可见模糊光斑和大面积渐变色彩云层。

【整体布局结构】
请以一个最大宽度约为 1120–1280 像素的中央布局为基础，外层使用深浅渐变背景包裹整个视图，内部内容区域保持白色或浅色卡片，以增强可读性。

1. 顶部导航栏（Top Navigation Bar）
- 使用 header 元素作为页面顶部区域，宽度占满内容区；
- 左侧：包含一个渐变色块 Logo（例如一个圆角方块内有字母 G），以及品牌名称（如 GradientHub），品牌文字可使用渐变填充文字效果；
- 中部：放置若干导航链接（Dashboard、Projects、Team、Analytics 等），在桌面设备上以水平排列展示，在移动设备上可隐藏或折叠；
- 右侧：需要有通知按钮和用户头像，通知图标可带有小型渐变圆点表示有新提醒，头像可以使用渐变边框；
- 背景：整体为浅色背景配合轻微阴影，底部有柔和的分隔线，保持导航与下方内容的清晰分割。

2. Hero 区域（Hero Section）
- 使用 section 元素，整块区域以大面积渐变背景呈现，例如从紫色过渡到粉色再到橙色；
- 在渐变层之下叠加多个模糊圆形光斑，让背景显得柔和且富有层次，光斑位置可以分布在左上与右下；
- 内容居中对齐：
  - 主标题：欢迎语或工作台标题，例如 “Welcome back” 或 “Today’s Gradient Workspace”，字体较大且粗体；
  - 副标题：简短说明当日目标或系统定位，使用稍低对比度的白色或白色带透明度；
  - 行动按钮组：两个按钮，一主一副，主按钮为白底彩色文字，副按钮为透明背景白色边框；
- 在桌面端保持文本居中布局，在移动端可以适度缩小文字和间距。

3. 今日概览区（Today Overview Section）
- 位于 Hero 下方，由几张信息卡片组成，用于展示关键指标（例如今日任务完成数、活跃项目数、即将到期事项等）；
- 使用 grid 布局，例如在桌面端为三列，在移动端为一列或两列；
- 每张卡片：
  - 背景为白色或非常浅的中性色，四角圆润（例如 border-radius 16px），带轻微阴影；
  - 卡片顶部可有一条细窄的渐变色条，用来区分不同类型的指标；
  - 主数字使用稍大的字体与半粗体，颜色可以沿用渐变色中的某一端色；
  - 下方附上简短说明和趋势文字（例如 Compared to last week），可加上简单的小图标表示趋势方向。

4. 主内容区域（Main Content Grid）
该区域可以划分为左右两列：左侧偏重项目与任务，右侧偏重时间线和提醒。

4.1 左侧：项目与任务（Projects and Tasks）
- 上部为“近期项目”卡片：
  - 标题和简短描述放在卡片顶部；
  - 下方以列表或小卡片形式展示最近几个项目，每个项目条目可包含项目名称、标签（用渐变小胶囊标记项目类型或状态）、进度条以及最后更新时间；
- 下部为“任务看板简版”：
  - 使用三栏或四栏简化列表示例：To Do、In Progress、Review、Done；
  - 每列包含若干任务卡片，卡片采用浅色背景，顶部可有小色块或标签，任务标题和负责人人名需清晰可读；
  - 列标题可以使用弱渐变下划线强调，如在列标题下方添加细而柔和的渐变线条。

4.2 右侧：时间线与提醒（Timeline and Highlights）
- 上部为“今日日程”或“时间线”卡片：
  - 以纵向时间线形式展示预定会议、里程碑和提醒，每个时间节点带有小圆点与时间戳；
  - 节点左侧为时间，右侧为事件标题与简短描述；
  - 活跃或“正在进行”的事件可以使用渐变色高亮圆点，其余使用较淡的中性颜色；
- 下部为“重点信息 / 快速提示”：
  - 可以是一个有渐变背景的提示卡片，用于强调某个功能或推广信息；
  - 卡片内文字宜简短，按钮与链接采用高对比度样式，以便引导点击。

5. 底部区域（Footer / Secondary CTA）
- 使用 footer 元素，背景可以是深一点的中性色或渐变的最暗部分；
- 左侧放置版权信息或简短品牌标语；
- 右侧可放置一个次级行动按钮或链接组，如“View all projects”、“Open settings”等；
- 整体保持轻量，不与顶部导航争夺注意力。

【渐变与色彩规范】
请在 Prompt 中明确指导 LLM 使用具体的渐变和色彩方案，例如：
- 典型 Hero 渐变：从紫色到粉色再到橙色，对应大致色值范围如紫色 600、粉色 500、橙色 400；
- 用于按钮和标签的渐变建议在同一色谱内进行微调，避免在同一界面中出现过多相互冲突的渐变组合；
- 数据卡片和任务卡片的背景尽量保持白色或接近白色，只在顶部或边框使用渐变；
- 若存在暗色模式，可以在深色背景上使用亮色渐变描边和文字渐变效果，而不是大面积覆盖。

【交互与动效】
- 悬停效果：卡片和按钮在 hover 时可以通过稍微提高阴影、拉高渐变亮度或改变渐变起止位置来体现状态变化，同时保持动效节奏柔和（例如 150–250 毫秒过渡）；
- 点击效果：按压时短暂减弱渐变的亮度并略微缩小元素，产生“按下去”的感觉，松开时恢复；
- 常驻动画：仅在 Hero 背景或少数重点区域使用缓慢的渐变流动或模糊光斑移动动画，避免过度动效分散注意力；
- 图表区域可以使用轻微的加载动画或数值变化动画，但不宜与背景渐变的动画节奏产生冲突。

【输出格式要求】
1. 必须输出一个完整的 HTML 文档结构，包含 html、head 和 body 标签。head 中可以简单描述页面标题和使用的字体（例如现代无衬线字体）。
2. 在 body 内，按照上述结构使用 header、main、section、aside、footer 等语义化标签构建页面。导航列表可以使用 nav、ul、li 等标签。
3. 所有布局与样式均通过类名表达，类名风格应与 TailwindCSS 兼容，例如使用 flex、grid、gap、px、py、rounded、shadow、bg-gradient-to-r、from-...、to-...、text-... 等类组合；无需编写真实的 Tailwind 配置文件。
4. 可以在页面中内联一个 style 标签，用于定义少量自定义动画或特殊效果（如背景模糊光斑），但请保持代码简洁清晰。
5. 文案部分可以自由发挥，但整体语气应保持专业、现代且略带轻松感，避免过于俏皮或完全偏向营销文案。

【额外提示与限制】
- 确保文本与背景的对比度足以保证可读性，避免让文案直接覆盖在过亮或对比强烈的渐变带上；
- 渐变数量要适可而止，让每一条色带都有明确用途（导航、Hero、CTA、重点模块），而不是在所有元素上同时使用；
- 优先考虑响应式布局，在窄屏设备上合理堆叠各个模块，保持信息优先级不变；
- 不要引入与渐变风格无关的大面积插画或照片，除非你明确将它们作为次要装饰；
- 若需要占位内容（如项目名称、任务描述），可使用中性英文或简短标签，避免过度偏向某一特定行业。

请根据上述说明，生成一个完整的渐变风格工作台 HTML 页面，使其在布局结构和用色氛围上与参考 Gradients 页面高度相似。`,

  'en-US': `You are a senior UI designer and front-end engineer. Please generate a full-page Gradient workspace interface whose visual style is highly similar to the existing "Gradients" dashboard page.
Requirements: Keep the overall layout, gradient usage, and layering logic very close to the described design. You may freely change copy, brand name and data values, but the structure and visual language should remain consistent. Output must use semantic HTML elements (header, main, section, aside, footer) and Tailwind-like utility classes (such as flex, grid, gap-6, bg-gradient-to-br, from-purple-600, to-orange-400).

[Use Case and Atmosphere]
- Use cases: personal workspace or dashboard for creators and product teams, combining today-overview metrics with quick entry points for projects and tasks;
- User roles: product designers, creative directors, marketers, project managers, and creative team members who need a workspace that feels energetic but not overwhelming;
- Overall tone: modern, friendly and vibrant. The page should feel like a canvas painted with gradients, while core content areas stay clean and highly readable;
- Visual impression: a soft neon gradient navigation bar and brand area at the top, a bold gradient hero, and a card-based dashboard on a neutral surface, with blurred light spots floating subtly in the background.

[Overall Layout]
Use a centered content column with a max-width around 1120–1280px. Wrap the whole viewport in a deep, subtle gradient background, while keeping the inner content cards light or white for contrast.

1. Top Navigation Bar
- Implement as a header across the top of the page.
- Left: a gradient logo block (for example, a rounded square with a letter), and the brand name (such as GradientHub) rendered with gradient text.
- Middle: navigation links like Dashboard, Projects, Team, Analytics laid out horizontally on desktop, hidden or collapsed on small screens.
- Right: a notification button and a user avatar; the notification icon may have a small gradient dot to indicate unread alerts, and the avatar can have a gradient border.
- Background: a light surface with subtle shadow and a soft bottom divider to clearly separate navigation from the content below.

2. Hero Section
- Use a section with a strong gradient background, for example transitioning from purple through pink to orange.
- Add blurred circular light shapes behind the content to create depth and softness.
- Center the content:
  - Main heading: a welcoming title or workspace name in a large, bold font.
  - Subheading: one or two lines explaining the purpose of the workspace in a slightly lower-contrast white.
  - Button group: a primary button (white background, colored text) and a secondary button (transparent with white border).
- On smaller screens, scale down the typography and spacing appropriately.

3. Today Overview Section
- Located just below the hero, composed of several small cards showing key metrics such as completed tasks, active projects, or upcoming deadlines.
- Use a grid layout: three columns on desktop, one or two columns on mobile.
- Each card:
  - White or very light neutral background with rounded corners and soft shadow.
  - A slim gradient strip at the top to indicate category or status.
  - A large numeric value in a color picked from the gradient palette.
  - A short description and trend text below (for example "Compared to last week").

4. Main Content Grid
Divide the main content into two columns: projects and tasks on the left, timeline and highlights on the right.

4.1 Left: Projects and Tasks
- Upper block: "Recent Projects" card.
  - Title and description at the top.
  - Below, a list or small cards for individual projects, each showing name, gradient pill tags (status or type), a progress bar and a last-updated timestamp.
- Lower block: a compact task board.
  - Use three or four simplified columns, such as To Do, In Progress, Review, Done.
  - Each column contains several task cards with a light background and clear titles, optionally with small colored markers or tags.
  - Column headings can have a subtle gradient underline.

4.2 Right: Timeline and Highlights
- Upper block: a schedule or timeline card.
  - Vertical timeline with time labels and events, each node having a dot, a time and a short description.
  - The current or active event can use a gradient-highlighted dot and stronger text color.
- Lower block: a highlight or announcement card.
  - A card with a gradient background used for promoting a key feature or showing a motivational message.
  - Text should be short; CTA buttons or links should be high-contrast and easy to spot.

5. Footer / Secondary CTA
- Implement as a footer with a slightly darker neutral background or the darkest part of the gradient.
- Left: copyright or a short brand statement.
- Right: secondary CTAs or link group, such as "View all projects" or "Open settings".

[Gradient and Color Guidelines]
Explicitly guide the model to use concrete gradient ideas:
- Hero gradients that flow from cool purples into warm pinks and oranges;
- Consistent gradient families across navigation, hero, CTAs and key highlights, instead of unrelated gradients everywhere;
- Cards and tables stay light and readable, with gradients mainly applied to borders, top strips, text, buttons and chart fills;
- For a dark variant, place strong gradients on top of a deep background and avoid placing long paragraphs directly on top of noisy gradients.

[Interaction and Motion]
- Hover: cards and buttons may get slightly stronger shadow, brighter gradients, or small changes in gradient direction or position, with smooth transitions around 150–250ms.
- Active: on press, elements can briefly dim and scale down a bit to simulate being pressed.
- Ambient motion: only hero background or a few key areas should have slow gradient motion or drifting blurred shapes; keep the rest static to maintain focus.
- Charts may use simple load or value change animations but should not conflict with background gradient motion.

[Output Requirements]
1. Produce a complete HTML document with html, head and body elements. The head can include a simple title and a modern sans-serif font.
2. Within the body, use header, main, section, aside and footer to structure the page. Use nav, ul and li for navigation lists where appropriate.
3. Express all layout and styling through class names in a Tailwind-compatible utility style, using combinations of flex, grid, gap, padding, rounded corners, shadows, gradient backgrounds and text colors.
4. You may inline a style block to define a small number of custom animations or special visual effects, but keep CSS readable and focused.
5. Copywriting should be professional, modern and slightly relaxed, not overly playful or purely marketing-driven.

[Additional Notes]
- Ensure sufficient contrast between text and background; avoid placing long text directly on intense gradients.
- Use gradients intentionally: each band (navigation, hero, CTA, key modules) should have a clear role.
- Make the layout responsive and preserve information hierarchy on smaller screens.
- Do not rely on large illustrations or photos unrelated to gradients; gradients themselves should be the main visual character.
- Placeholder content for project names and task descriptions can be neutral English labels and short phrases.

Based on all of the above, output a complete HTML page that feels like a gradient-powered workspace closely related to the existing Gradients dashboard, both in structure and color atmosphere.`
};
