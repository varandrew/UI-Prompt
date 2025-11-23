// Single template: Skeuomorphism — Home Office Dashboard (compact)
// Attach full-page preview by importing the existing fullpage module.
// Note: Full page exports are used in preview system but not directly imported
// They are loaded dynamically by the preview loader system

export const homeOfficeDashboard = {
  id: 'core-skeuomorphism-home-office-dashboard',
  title: 'styles.core.skeuomorphism.homeOfficeDashboard.title',
  description: 'styles.core.skeuomorphism.homeOfficeDashboard.description',

  customPrompt: {
    'zh-CN': `你现在是一名擅长「居家办公拟物化界面」的 UI 设计师兼前端工程师，请生成一个与当前「居家办公仪表板」风格高度接近的页面。
目标是让别的 LLM 根据此 Prompt 生成出的 UI，在布局、配色和材质氛围上几乎与现有界面一致，只替换文案和细节，不改变整体风格。

【整体氛围】
- 关键词：温暖、放松、专注、家庭工作区。
- 质感：浅色木纹桌面 + 纸质便签 + 软木公告板 + 温和光照。
- 适用场景：远程办公、自由职业者日常工作仪表板。

【布局结构建议】
1. 顶部导航 / 工具栏
   - 放在浅木纹背景之上，结构简洁，可包含 Logo、日期、简单快捷操作按钮。
2. Hero / 主工作区
   - 中心区域模拟「皮革笔记本放在木桌上的场景」，笔记本内部区域用于展示标题、副标题和主操作按钮。
   - 标题表达为「数字工作室 / Home Office Dashboard」等，与生产力相关。
3. 统计便签区
   - 使用 3–4 张彩色便签卡片（黄、粉、绿、蓝等），摆放在桌面上。
   - 每张便签显示一个关键指标：例如项目数、完成任务数、本周工时、团队成员数量等。
4. 看板 / 列表区域
   - 使用卡片或分栏布局模拟任务看板：待办、进行中、已完成。
   - 每张卡片像纸质备忘录，有轻微卷边和投影。
5. 侧边或底部信息区
   - 可以有软木公告板、文件柜、翻页日历等拟物组件，用于展示通知与文件状态。

【色彩与材质细节】
1. 背景与基底
   - 桌面底色：浅色橡木木纹，接近 #f7f9fc ~ #e9edf6，带柔和纹理。
   - 整体背景应偏暖偏亮，避免纯黑或大面积深色。
2. 卡片与便签
   - 纸质便签底色示例：
     - 黄色便签：柔和奶油黄，而非高饱和纯黄。
     - 粉色便签：偏暖粉色，适度饱和。
     - 绿色/蓝色便签：偏浅、偏灰的绿色 / 蓝色，避免过度刺眼。
   - 所有便签卡片都应带有轻微阴影和边缘柔化，模拟纸张厚度。
3. 文本与强调色
   - 主文字颜色：深蓝黑色 #0b1220 或近似色，用于标题和正文。
   - 次要说明文字：较浅的灰蓝色，确保长时间阅读不疲劳。
   - 强调元素（按钮、标签）：可以使用蓝色 (#3b82f6) 或绿色 (#22c55e) 作为点缀。

【阴影与拟物效果】
1. 木桌与组件
   - 所有组件（笔记本、便签、卡片）都在「木桌」上投射柔和阴影，阴影半径较大、透明度较低。
2. 纸质便签
   - 轻微旋转和不完全对齐的布局，让界面更自然。
   - 阴影方向统一但略有随机感，营造真实摆放效果。
3. 皮革笔记本 / 小部件
   - 使用深一点的暖棕或深灰棕作皮革封面，带内外阴影与微妙高光。

【交互与动效】
1. Hover 效果
   - 便签和卡片在 hover 时稍微抬起（translateY(-2–4px)）、阴影加深，模拟被轻轻提起。
2. Active 效果
   - 按钮在点击时轻微下压（translateY(1–2px)）并阴影收缩。
3. 过渡曲线
   - 使用柔和的缓动曲线（如 ease-out），避免夸张快速动效，保持舒适节奏。

【输出要求】
- 使用语义化 HTML 和类 TailwindCSS 原子类描述布局与间距。
- 尽量保持上述布局结构和配色比例，让生成结果一眼看起来就是「温暖木纹桌面上的家庭办公仪表板」。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a skeuomorphic home office dashboard that looks very close to the current “Home Office Dashboard” demo.
Keep the warm wooden desk atmosphere, sticky-note cards, notebook panel and relaxed productivity layout essentially unchanged. You may replace copy, metrics and icons, but not the spatial arrangement or material language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: remote work or freelance home office dashboard summarising tasks, time and key indicators.
- Mood: warm, relaxed and focused, like a tidy home work desk with analogue objects.

[Layout]
1. Use a light wood-grain desktop as the global background; all elements sit “on the desk”.
2. Top area can show a simple toolbar or header with logo, date and a few quick actions.
3. Center hero panel resembles an open leather notebook on the desk, containing main title, subtitle and primary action buttons.
4. Below or around the notebook, place 3–4 coloured sticky-note style cards showing key metrics such as projects, completed tasks and weekly hours.
5. A board or list area shows to-do items grouped into simple columns or lists; cards feel like paper notes pinned or laid on the surface.
6. Side or bottom areas can include corkboard-like panels, small calendars or file drawers to host reminders or document states.

[Materials and colors]
1. Background mimics light oak or beech wood in soft, warm tones; avoid very dark or cold palettes.
2. Sticky notes use soft yellows, pinks, greens and blues with low to medium saturation and subtle shadows to suggest thickness.
3. Leather notebook uses deeper warm browns or greyish browns with inner highlights and outer shadows.
4. Text uses dark blue-black or charcoal for good contrast on light notes and panels; accent colors (blue or green) highlight interactive elements.

[Interaction]
1. Hovering over notes and cards raises them slightly (a few pixels) and deepens shadows to simulate being gently lifted.
2. Active states on buttons press them down very slightly with reduced shadow, as if pushing a physical control.
3. Transitions use soft ease-out curves and short durations so the dashboard feels calm rather than flashy.

[Output requirements]
- Use semantic HTML to separate toolbar, notebook hero, metric notes, task board and auxiliary panels.
- Use Tailwind-style utility classes to define layout, spacing, colors and shadow levels.
- The generated dashboard must preserve the recognisable traits of this skeuomorphic home office UI: warm wooden desk background, paper notes, leather notebook and subtle physical interaction feedback.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览，包含具体色码和技术实现）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于拟物化设计的 UI 设计师，专注于居家办公仪表板的温馨自然材质设计。

场景定位：
为远程工作者和自由职业者打造舒适、温暖的办公仪表板界面，通过木纹、纸张等自然材质营造居家办公的舒适感和专注力。目标用户需要在长时间使用中感到放松且高效，界面应传达温馨、有序、可靠的视觉印象。这是一个日常办公的核心工具，需要在视觉上营造出家的温度，同时保持工作的专注感和效率感。

视觉设计理念：
采用自然材质的设计语言，通过木纹、纸张等温润的材质营造居家办公的亲和力。设计强调舒适感与功能性的平衡，让数字界面如同真实的办公桌面般熟悉和可靠。整体风格追求温馨而不失专业，通过自然材质的细腻质感而非冰冷的科技感来体现品质。界面运用暖色调或中性色调的配色系统，营造出放松、专注、有序的视觉氛围，适合长时间工作而不产生视觉疲劳。

材质与质感：
主视觉采用木纹桌面背景，呈现出浅色橡木的温润质感，表面平滑且带有极其细微的方向性纹理和哑光质感，如同真实办公桌面般自然亲切。整体背景为米白带淡蓝调的柔和色彩，给人以舒适宜人的视觉印象。卡片元素使用纸质便签效果，模拟高质量书写纸张，表面光滑带有细微的纸张纹理，边缘有轻微的卷曲感和阴影投射，营造真实便签纸的视觉效果。状态指示徽章采用塑料或陶瓷材质的圆润质感，表面光滑且带有轻微光泽，数字清晰可读。进度条设计模拟真实的进度轨道，外轨道呈现凹陷的凹槽感，内进度条则使用明亮的色彩填充并带有顶部高光。所有元素都运用温暖的多层阴影系统，阴影透明度较低，避免过于沉重，营造自然光照下的柔和深度感。

交互体验：
所有交互都强调自然舒适的视觉反馈，元素的悬停和点击效果极其柔和，避免突兀的视觉变化。卡片在鼠标悬停时会展现出细微的浮起效果，如同便签纸被轻轻提起。按钮和徽章的交互保持简洁，点击时有轻微的下压感但不会产生强烈的动态效果，保持办公环境的平静感。动画节奏舒缓自然，所有过渡都使用柔和的缓动曲线，避免快速或突兀的动作。页面滚动流畅温和，卡片元素在进入视口时展现出细腻的淡入效果，营造出舒适的阅读体验。整体交互设计避免过度刺激，为长时间工作提供视觉上的放松感。

氛围营造：
整体界面营造出温馨居家办公空间的舒适氛围，如同在家中精心布置的工作区域。暖色调或中性色调的配色系统包含米白蓝背景、柔和黑色文字和适度的蓝色、绿色强调元素，传递出放松、专注、有序的工作印象。木纹和纸张材质的运用让界面充满自然质感，避免冷硬的科技感，营造出亲和友好的视觉基调。圆角处理较大，增强亲和力和温馨感，所有边缘都经过圆润处理，避免尖锐的视觉刺激。状态指示徽章和进度条遵循通用语义，蓝色代表任务信息、绿色代表完成进度，色彩饱和度适中避免过于鲜艳。整体设计保持明亮通透，界面明度偏高，避免深色带来的压抑感，适合长时间专注工作。木纹纹理极其微妙，不干扰内容阅读，所有视觉元素都服务于提升工作效率和舒适感。`,

    'en-US': `Role: You are a UI designer specializing in Skeuomorphism, focused on warm natural material design for home office dashboards.

Scenario Positioning:
Create a comfortable and warm office dashboard interface for remote workers and freelancers, using natural materials like wood and paper to create a sense of home office comfort and focus. Target users need to feel relaxed and efficient during long-term use, and the interface should convey a warm, organized, and reliable visual impression. This is a core daily work tool that needs to visually create the warmth of home while maintaining work focus and efficiency.

Visual Design Philosophy:
Adopt the design language of natural materials, creating home office affinity through warm textures like wood grain and paper. The design emphasizes the balance between comfort and functionality, making digital interfaces as familiar and reliable as real office desks. The overall style pursues warmth without losing professionalism, reflecting quality through delicate natural material textures rather than cold tech feel. The interface employs a warm or neutral-toned color system, creating a relaxed, focused, and organized visual atmosphere suitable for long work hours without visual fatigue.

Materials & Textures:
The main visual uses wood desktop background, presenting the warm texture of light oak, with a smooth surface and extremely subtle directional grain and matte finish, as naturally intimate as a real office desk. The overall background features off-white with light blue tones, giving a comfortable and pleasant visual impression. Card elements use paper sticky note effects, simulating high-quality writing paper with smooth surfaces and subtle paper textures, edges with slight curl and shadow projection creating realistic sticky note visual effects. Status indicator badges adopt the rounded texture of plastic or ceramic materials, with smooth surfaces and slight gloss, clearly readable numbers. Progress bar designs simulate real progress tracks, with outer tracks showing indented groove feel and inner progress bars using bright color fills with top highlights. All elements employ warm multi-layer shadow systems with low shadow opacity to avoid excessive heaviness, creating soft depth under natural lighting.

Interaction Experience:
All interactions emphasize natural comfortable visual feedback, with extremely soft hover and click effects avoiding abrupt visual changes. Cards show subtle floating effects on mouse hover, like sticky notes being gently lifted. Button and badge interactions remain simple, with slight press-down feel on click but no strong dynamic effects, maintaining office environment tranquility. Animation rhythm is slow and natural, all transitions use soft easing curves avoiding fast or abrupt motions. Page scrolling is smooth and gentle, card elements show delicate fade-in effects when entering viewport, creating comfortable reading experience. Overall interaction design avoids excessive stimulation, providing visual relaxation for long work hours.

Atmosphere Creation:
The overall interface creates the comfortable atmosphere of a warm home office space, like a meticulously arranged work area at home. Warm or neutral-toned color systems include off-white blue backgrounds, soft black text, and moderate blue and green accent elements, conveying relaxed, focused, and organized work impressions. The use of wood grain and paper materials fills the interface with natural texture, avoiding cold tech feel, creating an affable and friendly visual foundation. Larger border radius enhances affinity and warmth, all edges are rounded avoiding sharp visual stimulation. Status indicator badges and progress bars follow universal semantics, blue represents task information, green represents completion progress, with moderate color saturation avoiding excessive brightness. The overall design maintains bright transparency with high interface brightness, avoiding dark oppressive feel, suitable for long focused work. Wood grain texture is extremely subtle not interfering with content reading, all visual elements serve to improve work efficiency and comfort.`
  },
}
