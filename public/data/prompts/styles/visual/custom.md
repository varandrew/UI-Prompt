# Custom Prompt

## 中文版本 (zh-CN)

你现在是一名非常熟悉「纸张剪裁 / paper cutout」风格的资深 UI 设计师兼前端工程师，需要为一个全新页面生成一套与当前样式 /styles/preview/paperCutout 高度一致的界面。

你的任务是：编写一段可以直接复制给 LLM 使用的完整指令，让它生成一个新的 HTML 全页面界面。这个界面在布局逻辑、配色方向、纸张层次、阴影风格上，要与当前 paperCutout 示例高度相似，但承载的业务内容和文案可以完全不同。

请严格遵守以下约束：
- 不要照抄现有示例的具体文字内容、标题或图标文案。
- 必须延续纸张剪裁的视觉语言：多层纸片、便利贴、拼贴标签、柔和阴影。
- 生成结果应当在第一眼就能被识别为 paperCutout 家族的同系列页面。
- 输出格式固定为语义化 HTML + 近似 TailwindCSS 的原子化类名，不要输出伪代码。

【使用场景设定】
- 新页面的主题是「创意项目与灵感整理工作台」。
- 用户是自由职业设计师、插画师、写作者、内容创作者，他们习惯把想法写在纸上、贴在墙上或桌面上。
- 这个页面主要用来浏览每日任务、正在推进的创意项目、临时灵感便签、收藏素材以及简易日程。
- 整体氛围要像一个被认真整理过的纸质灵感板：色彩丰富但不过度喧闹，结构有条理但保留一点随性。

【整体布局结构要求】
1. 顶部区域（Header）
   - 顶部采用左右布局：左侧是品牌标识或页面标题区域，右侧放置用户头像、简单设置入口或模式切换按钮。
   - 标题使用带纸质标签感的矩形条，带轻微圆角和柔和投影，就像一条贴在页面顶部的纸带。
   - 顶部区块的背景颜色与主背景略有差异，可以是稍微更浅或略偏暖/偏冷的纸张色块，用以分层。

2. 主体区域（Main）
   - 主体采用二到三列的栅格布局，每个功能模块都包装成一张独立的纸片或卡片。
   - 左侧可以以「今日任务」「待办优先级」为主体，中间放置「创意项目看板」，右侧用于「灵感便签墙」「收藏灵感列表」。
   - 每张纸片之间要留出明确间距，使用户能感受到各模块之间的分隔，同时保留被刻意排布在桌面上的错落感。
   - 可以适度使用轻微旋转、错位与叠加，让某些小标签压在大卡片的角落上，增强纸张叠放的真实感。

3. 辅助区域（Sidebar / Footer）
   - 可以设计一个窄侧边栏，用纸条或竖向卡片展示「今日心情」「番茄钟」「专注模式入口」等信息。
   - 底部可以加入一条细长纸带作为 footer，用于显示版权、快捷键提示或一句激励文案。
   - 所有这些辅助区域仍然使用纸片造型，与主卡片保持统一的材质与光影语言。

【布局结构细化说明】
为了帮助 LLM 更好地生成结构，请在页面中至少包含以下几个模块（名称可调整，但功能要类似）：
- 「Today overview」：位于上方或左上，是一个稍大的纸片，汇总日期、今日任务数量、当前专注项目。
- 「Projects board」：使用两到三列纸卡表示不同项目，每张卡片上有项目名、进度标签以及一到两行说明。
- 「Inspiration notes」：一组颜色各异的小便利贴卡片，每张包含简短手写风格标题和两三行描述。
- 「Pinned references」：表现为水平排列的细长纸条或标签，展示用户固定置顶的资源链接或关键词。
- 「Schedule strip」：可以是一条细长的时间条或列表样式纸片，用于记录当日重要时段的安排。

【色彩体系与纸张质感】
1. 背景与基底
   - 整体背景应使用非常浅、接近真实纸张的中性色，例如略带暖调的浅米色或略带冷调的浅灰蓝。
   - 可以在说明中点出 2～3 个推荐色值，用于帮助 LLM 理解色彩明度和氛围（例如一组用于背景、一组用于卡片、一组用于标签）。
   - 背景可以加入极轻微的噪点或纹理效果描述，让界面避免过于光滑、塑料感太重。

2. 卡片与便利贴配色
   - 主卡片使用比背景略深一点的柔和色块，例如浅米黄、浅奶茶棕、柔和的灰蓝等，保持低饱和。
   - 便利贴可以更活泼一些，例如淡黄、淡粉、淡绿、淡蓝，但仍然避免刺眼的霓虹色。
   - 为标签型元素（例如状态标签、类别标签）预留一组饱和度略高的纸色，用于强调但不抢占主视觉。

3. 描边与阴影
   - 卡片可以有极细的边框线，以浅灰或接近背景的颜色绘制，营造纸张边缘。
   - 阴影应该柔和且略大，方向一致（例如向右下），模糊半径较大、不透明度较低，让纸片像浮在背景上。
   - 在说明中强调上下层关系：上层纸片的阴影会落在下层卡片的一角，以此表达明确层次。

【交互与动效设计】
1. 悬停（hover）
   - 当鼠标悬停在卡片或便利贴上时，纸片轻微向上移动 2～4 像素，阴影略微变深、变窄，营造被手指轻轻撩起的感觉。
   - 对于主要操作按钮（例如「新增灵感」「新增任务」），悬停时可以增加亮度或加入一圈柔和描边，提示可点击性。

2. 按下（active）
   - 在按下状态下，纸片或按钮可以轻微下沉 1～2 像素，阴影变小或稍稍移动，模拟纸质按键被压下的触感。
   - 避免使用强烈缩放或弹跳动画，以免破坏纸张风格的柔和氛围。

3. 动画节奏
   - 所有过渡时间控制在约 150～220 毫秒之间，使用 ease-out 或 ease-in-out 曲线。
   - 动画类型以透明度变化、位置小幅移动和阴影强度调整为主，不使用大幅度旋转或弹性动画。

【文字与图标风格】
1. 字体与层级
   - 标题建议使用带一点手写感的字体（或在说明中描述其风格），搭配清晰的无衬线正文字体。
   - 标题、子标题、正文、辅助说明需要有明确层级差异，透过字重、字号和颜色实现。
   - 在 CustomPrompt 中提示 LLM 避免使用过于正式的企业风字体，而是偏向个人笔记本的气质。

2. 图标与装饰
   - 图标可以简洁扁平，线条略圆润，颜色与纸张保持协调。
   - 可加入像胶带、纸夹、图钉等装饰元素，这些元素也应该遵从纸张色系与柔和阴影。

【输出技术要求】
- 使用语义化 HTML5 结构，应包含 header、main、section、aside 和 footer 等标签，并正确嵌套。
- 使用近似 TailwindCSS 的原子类名描述布局与间距，例如 flex、grid、gap-6、px-6、py-4、rounded-xl、shadow-lg、bg-amber-50、text-slate-800 等。
- 不需要引入真实的 Tailwind 配置，只需在 class 属性中使用这类语义清晰的工具类名称。
- 生成结果必须是一个完整、可独立渲染的 HTML 页面，而不是片段或伪代码。

【质量校验要求】
当 LLM 生成完成页面后，你应当能在以下几个方面明显感受到 paperCutout 风格：
1. 布局：整体使用纸片模组堆叠，而不是纯色分区或玻璃卡片。
2. 色彩：主色温和、低饱和，以纸张和文具颜色为主，避免高对比科技蓝或霓虹色。
3. 材质：透过阴影、描边和细节，让人联想到真实纸张、便利贴与手帐。
4. 交互：悬停与按下的反馈像在触碰实体纸张，而不是按机械按钮。

请将以上说明完整内嵌到最终 CustomPrompt 中，确保 LLM 仅凭这段文字就能重建与 paperCutout 示例高度一致的风格与结构，同时生成一个全新的、内容不同的创意工作台界面。


---

## English Version (en-US)

You are a senior UI designer and front-end engineer who deeply understands the "paper cutout" visual style. Your task is to generate a brand new HTML page that looks like a sibling of the existing /styles/preview/paperCutout layout, without copying its content verbatim.

Your goal is to write a single, self-contained instruction that can be pasted into an LLM so that it can produce a full-page HTML interface. The new page must follow the same layout logic, color palette direction, paper layering, and shadow language as the current paperCutout demo, while using a different scenario, copy, and data.

[Scenario]
- The page is a "creative projects and inspiration workspace" for freelancers: designers, illustrators, writers, and content creators.
- Users come here to scan their tasks for the day, track progress on active projects, review inspiration notes, and keep a small schedule overview.
- The atmosphere should resemble a carefully arranged desk or wall covered with paper cards, sticky notes, and tags: visually rich yet controlled, playful yet structured.

[Overall Layout]
1. Header
   - Use a left-right split: brand or page title on the left, lightweight user controls on the right (avatar, settings icon, theme toggle, etc.).
   - The title sits on a paper-tag-like strip with rounded corners and a soft drop shadow, as if taped to the top edge.
   - The header background uses a light paper tone slightly different from the main background to carve out a clear layer.

2. Main Content
   - Use a 2–3 column grid to place paper cards. Each functional block is represented as an individual sheet of paper.
   - Place a "Today overview" card in a prominent position, then boards for "Active Projects", an "Inspiration Notes" wall, and a "Pinned References" area.
   - Reserve comfortable gaps between cards so that each sheet feels separate but still part of the same arrangement.
   - Allow mild offset and overlapping, such as small labels pinned over the corners of larger cards, to reinforce the collage feeling.

3. Secondary Areas
   - Add a narrow sidebar or a bottom strip for lightweight elements like "Today's mood", a simple Pomodoro indicator, or quick shortcuts.
   - These secondary elements are also paper pieces: narrow strips, mini cards, or folded tabs that visually belong to the same paper system.

[Color & Paper Texture]
1. Background & Canvas
   - The main background should be a very light, paper-like tone instead of flat pure white, for example a warm cream or a cool chalky blue-gray.
   - Mention a small set of example colors that communicate the intended brightness and warmth, and explain that saturation should remain low to keep the interface gentle on the eyes.
   - Describe any subtle grain, noise, or paper texture that should be implied in the design.

2. Cards & Sticky Notes
   - Main cards use slightly darker or warmer tones than the background, like soft beige, tea brown, or muted blue.
   - Sticky notes are more playful: pale yellow, pink, green, or blue, but still far from neon. They should read as stationery rather than UI chrome.
   - Accent tags (for status or categories) use somewhat higher saturation within the same palette family but remain small in area so they do not dominate the page.

3. Borders & Shadows
   - Light, subtle borders may be used to define paper edges. In many cases, the shadow alone is enough to separate layers.
   - Shadows are soft and slightly oversized with low opacity and a consistent direction, suggesting sheets of paper hovering just above the desk.
   - The stacking order is clear: shadows from higher cards fall onto lower ones, reinforcing the sense of depth.

[Interaction & Motion]
1. Hover
   - On hover, cards and notes gently move up by a few pixels, while their shadows become a bit darker and crisper, as if you are about to pick them up.
   - Primary call-to-action buttons like "Add Inspiration" or "New Task" brighten slightly and may gain a subtle outline.

2. Active
   - On press, interactive elements sink down slightly and their shadows shrink or shift, imitating the feel of pressing a piece of cardstock.
   - Avoid exaggerated scale or bounce effects that would break the calm paper metaphor.

3. Timing
   - Transitions should be short and smooth, typically between 150 and 220 milliseconds, with ease-out or ease-in-out timing.
   - Favor opacity changes, position shifts, and shadow adjustments over complex transforms.

[Typography & Icons]
1. Typography
   - Use a friendly, slightly rounded sans-serif for both body text and headings, and optionally hint at a hand-written accent for titles or note headings.
   - Maintain a clear hierarchy with noticeable differences between headings, subheadings, body, and meta text.
   - The voice of the copy can be casual and personal, but the information structure must remain clear and scannable.

2. Icons & Decorations
   - Icons should be simple and approachable, sometimes placed on small rounded rectangles that echo paper tags.
   - Decorative elements like tape strips, clips, or pins should follow the same color and shadow language as the rest of the paper pieces.

[Output Requirements]
- Output a complete HTML5 page using header, main, section, aside, and footer tags.
- Use TailwindCSS-like utility classes (flex, grid, gap-6, px-6, py-4, rounded-xl, shadow-lg, bg-..., text-...) to describe layout and spacing.
- Do not output pseudocode or explanations; only output the final HTML structure with class names that clearly express the paper cutout aesthetic.
- The final layout must clearly read as a sibling of the existing paperCutout demo in terms of density, card size, depth, and overall brightness, even though the textual content and labels are different.
