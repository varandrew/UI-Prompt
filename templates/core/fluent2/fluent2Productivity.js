// ✅ Simplified: fullPage content now loaded from public/data/content/

export const fluent2Productivity = {
  id: 'fluent2-productivity',
  title: 'styles.core.fluent2-productivity.title',
  description: 'styles.core.fluent2-productivity.description',

  // ✨ AI Prompt（用于生成与当前 Fluent 2 生产力界面高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Fluent 2 生产力看板页面」界面风格高度接近的 Fluent Design 2.0 风格项目协作界面。
要求：保持整体布局结构、色彩体系和光影 / 材质质感基本不变，只允许替换文案、品牌名称和少量模块内容。输出使用语义化 HTML 结构和 TailwindCSS 风格的原子类（或等价的工具类方案）。

【使用场景】
- 场景：团队项目协作 / 任务看板（Board），包含「To Do / In Progress / Done」等列。
- 用户：需要长时间工作的知识型工作者、产品 / 设计 / 开发团队。
- 目标：在单页中快速总览项目状态，并对任务进行创建、分配、拖拽和优先级管理。

【整体布局结构】
1. 页面背景
   - 使用浅色渐变背景：从浅灰到浅蓝 / 靛蓝的柔和渐变，类似 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50。
2. 顶部 Mica 顶栏（Header）
   - 顶栏固定在页面顶部，宽度居中，包含：
     - 左侧：产品 Logo（方形或圆角图标）+ 产品名称（如 FluentTask）+ 面包屑导航（Projects / 当前项目）。
     - 右侧：搜索框（放大镜图标 + 输入框）、通知图标（带数字徽标）、用户头像圆形徽章。
   - 顶栏背景可使用略带透明感的 Mica / Acrylic 效果，与主背景融合。
3. 左侧侧边栏（Sidebar）
   - 内容：工作区标题（Workspace）、主导航菜单（Board / Timeline / Files / Team / Settings）、团队成员列表。
   - 导航项为图标 + 文本的横向条目，当前选中项高亮（背景色略深、左侧有选中指示条）。
   - 团队成员区：头像圆形徽章、姓名、角色、在线状态点（green / amber 等）。
4. 主内容区（Main Board）
   - 顶部：项目标题（如 Website Redesign）+ 副标题（任务数、成员数、截止时间）+ 右侧动作按钮（View Options / Add Task）。
   - 中部：3–4 列看板列，每列包含：
     - 列标题（如 To Do / In Progress / Review / Done）+ 任务计数徽标。
     - 若干任务卡片（Task Card），每张卡片包含：
       - 顶部：优先级标签（High / Medium / Low）+ 卡片菜单按钮。
       - 中间：任务标题 + 简短描述。
       - 底部：标签（Design / UI / Research 等）、负责人头像缩略图、截止日期。
   - 列底部有「Add Task」按钮，用于添加新任务。

【色彩与材质】
1. 背景与基底
   - 页面主背景：柔和的浅灰 / 浅蓝渐变，营造轻盈生产力氛围。
   - 板块背景：使用浅色 Acrylic 面板（白色略透明 + blur），与背景略有对比但不过分抢眼。
2. 品牌与强调色
   - 主品牌色：接近微软 Fluent 2 蓝色系，如 #2563eb / #1d4ed8，用于主按钮、选中状态、链接和重点徽标。
   - 次级强调色：用柔和的绿色、黄色、红色分别标记状态 / 优先级（成功、提醒、警告）。
3. 文本与图标颜色
   - 标题文字：深灰 #0f172a / #111827，字号较大。
   - 正文：中灰 #334155 / #475569，行高充足。
   - 辅助信息（时间、角色）：更浅的灰色 #6b7280。

【光影、圆角与动效】
1. 圆角系统
   - 所有卡片和面板统一使用 8px 圆角，大型容器可以使用 12px 圆角，避免尖锐边角。
2. 阴影与层次
   - 任务卡片：柔和阴影，近似 shadow-md / shadow-lg，模拟卡片浮在面板之上。
   - 顶栏与侧边栏：阴影更轻，主要通过模糊与透明度营造层次感。
3. Fluent 2 动效特征
   - 所有过渡使用 cubic-bezier(0.25, 0.46, 0.45, 0.94)（或同级流畅曲线），时长 200–300ms。
   - 悬停（hover）：按钮和卡片出现轻微高亮或亮度提升，同时阴影略微加深（不建议大幅位移）。
   - Active 状态：可轻微缩放或降低亮度，模拟按压反馈，但不夸张。

【输出要求】
- 使用语义化 HTML：header / nav / aside / main / section / footer 等。
- 布局采用 CSS Grid 或 Flexbox，结合 TailwindCSS 类控制间距与对齐。
- 生成的 UI 需在结构（顶栏 + 侧边栏 + 看板列）、配色（浅色渐变 + Fluent 蓝）、光影和圆角风格上，与当前 Fluent 2 生产力看板页面保持高度接近。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a Fluent Design 2.0 productivity dashboard that looks very close to the current “Fluent 2 Productivity Board” demo.
Keep the overall layout (header, left navigation and multi-column board), color system and Fluent-style light acrylic surfaces essentially unchanged. You may change copy, project names and task content, but not the structure or motion language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: team project collaboration dashboard with columns such as To Do, In Progress, Review and Done.
- Users: knowledge workers and teams (product, design, engineering) who spend many hours per day in productivity tools.
- Goal: provide a clear overview of project status and allow easy manipulation of tasks in a calm, modern Fluent environment.

[Layout]
1. Use a soft light gradient full-page background similar to the demo (light grey through light blue/indigo).
2. Top header bar includes product logo and name, breadcrumb navigation, search input, notification icon with badge and user avatar.
3. Left sidebar lists workspace name, main navigation items (Board, Timeline, Files, Team, Settings) and a compact team member list with avatars and status dots.
4. Main board area contains:
   - Page title and metadata (project name, number of tasks, members, due date) plus primary actions such as View options and Add task.
   - Three to four vertical columns, each representing a status with header and task count badge.
   - Task cards in each column with priority label, title, short description, labels, assignee avatars and due date.

[Visual style]
1. Background and large surfaces use very light desaturated colors; the board and cards sit on slightly stronger acrylic surfaces with subtle blur and soft shadows.
2. Fluent blue tones are the primary accents for key buttons, selected navigation items and important badges; secondary colors (green, yellow, red) indicate state or priority.
3. Typography is clear and modern; headings for project and column titles stand out, while supporting text uses smaller sizes and softer greys.
4. Cards and panels use consistent rounded corners (around 8px) and generous internal spacing so the interface feels airy rather than dense.

[Interaction]
1. All transitions follow Fluent-style motion curves with durations around 200–300ms.
2. Hover states gently increase brightness and shadow depth for cards and buttons; avoid large translations or bouncy animations.
3. Active states may slightly reduce brightness or scale to simulate press feedback but must remain subtle and controlled.

[Output requirements]
- Use semantic HTML: header for the top bar, aside for the sidebar and main/section for the board and columns.
- Use Tailwind-style utility classes to implement layout, spacing, typography, color and elevation-like shadows.
- The generated dashboard must preserve the recognisable traits of the current Fluent 2 productivity UI: multi-column board, soft acrylic surfaces, Fluent blue accents and smooth, fluent motion.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于 Fluent Design System 的 UI 设计师，擅长为生产力工具打造高效、优雅的现代界面。

场景定位：
为办公和生产力场景打造符合 Fluent 2 设计规范的应用界面，通过亚克力材质、光影效果和流畅动画提升用户的工作效率和使用愉悦感。目标用户为需要长时间使用生产力工具的专业人士，界面需要在提供丰富功能的同时保持视觉清爽和操作流畅。这是一个强调现代美学与实用性平衡的设计系统，需要让用户在专注工作的同时享受优质的视觉体验。

视觉设计理念：
采用微软 Fluent Design 的设计语言，以半透明的亚克力材质作为核心视觉特征，创造出轻盈而富有层次的界面。设计强调光影的运用，通过细腻的光晕效果和材质变化让界面充满生命力。整体视觉追求现代、专业、高效的品质，如同高端办公软件般精致而克制。界面运用柔和的中性色系作为基础，搭配微软品牌色作为强调色，营造出专业、温和、富有科技感的视觉氛围。所有元素都采用柔和的圆角设计，避免尖锐感，传递出友好和现代的印象。

材质与质感：
核心材质是 Fluent 的标志性亚克力效果，呈现半透明的毛玻璃质感，背景模糊程度适中，既能透出底层内容又不影响当前层的可读性。卡片和面板使用浅色亚克力材质，在白色或浅灰背景上营造出漂浮感。侧边栏和导航区域可能使用稍深的亚克力，增强视觉层次。按钮和交互元素在静止时保持简洁，悬停时会出现细微的光晕效果，仿佛光线在表面流动。所有阴影都极其细腻，通常使用多层次的柔和阴影组合，避免生硬的边界。背景可能使用极浅的渐变或纯色，为亚克力材质提供良好的视觉基础。图标采用线条流畅的设计风格，与整体的现代感相呼应。

交互体验：
交互设计追求流畅和即时反馈，所有动画使用 Fluent 特有的缓动曲线，营造出丝滑的过渡效果。鼠标悬停在按钮或卡片上时，会出现跟随光标移动的光晕效果，让用户感受到界面在响应自己的操作。点击反馈通常包含轻微的缩放和亮度变化，时长控制在两百至三百毫秒，既明显又不拖沓。页面切换使用淡入淡出配合轻微的位移，创造流畅的空间转换感。滚动体验极其平滑，内容移动时保持稳定的帧率。输入框获得焦点时，下划线或边框会展现出流畅的颜色和宽度变化。所有过渡都遵循统一的时序和缓动函数，确保整体体验的一致性和专业性。

氛围营造：
界面营造出现代办公应用的专业氛围，轻盈而不失稳重。亚克力材质的半透明特性让界面充满层次感和空间感，不同层级的内容通过材质深浅和模糊程度区分。配色以柔和的中性色为主，白色或极浅灰作为主背景，深浅不同的灰色用于文字和次要元素。微软蓝色作为品牌色和强调色，通常用于重要按钮、链接和选中状态。功能性色彩使用克制，错误红、成功绿、警告黄只在必要时出现。圆角统一使用八像素，大型卡片或容器使用十二像素，创造柔和友好的视觉印象。间距宽松舒适，通常使用八像素或十六像素的倍数，确保内容呼吸感充足。文字层级清晰，标题使用较大字号和中等字重，正文保持良好的行距和字距。整体设计如同微软 Office 365 或 Windows 11 的应用，在专业高效中蕴含现代美学，让用户在长时间工作中保持良好的视觉舒适度和操作愉悦感。`,

    'en-US': `Role: You are a UI designer specializing in Fluent Design System, skilled at creating efficient and elegant modern interfaces for productivity tools.

Scenario Positioning:
Create Fluent 2 compliant application interfaces for office and productivity scenarios, enhancing user work efficiency and usage pleasure through acrylic materials, lighting effects, and fluid animations. Target users are professionals who need to use productivity tools for extended periods, requiring interfaces that maintain visual freshness and operational fluidity while providing rich functionality. This is a design system emphasizing balance between modern aesthetics and practicality, allowing users to enjoy high-quality visual experience while focusing on work.

Visual Design Philosophy:
Adopt Microsoft Fluent Design language, using semi-transparent acrylic material as core visual characteristic, creating light yet layered interfaces. Design emphasizes use of light and shadow, bringing interface to life through delicate halo effects and material changes. Overall visual pursuit of modern, professional, efficient quality, as refined yet restrained as premium office software. Interface employs soft neutral color systems as foundation, paired with Microsoft brand colors for emphasis, creating professional, gentle, technologically sophisticated visual atmosphere. All elements use soft rounded corner design, avoiding sharpness, conveying friendly and modern impression.

Materials & Textures:
Core material is Fluent's signature acrylic effect, presenting semi-transparent frosted glass texture with moderate background blur level, both revealing underlying content and not affecting current layer readability. Cards and panels use light acrylic material, creating floating sensation on white or light gray backgrounds. Sidebars and navigation areas may use slightly darker acrylic, enhancing visual hierarchy. Buttons and interactive elements maintain simplicity at rest, showing subtle halo effects on hover as if light flows across surface. All shadows extremely delicate, typically using multi-layered soft shadow combinations, avoiding harsh boundaries. Backgrounds may use extremely light gradients or solid colors, providing good visual foundation for acrylic materials. Icons adopt fluid line design style, echoing overall modern feel.

Interaction Experience:
Interaction design pursues fluidity and immediate feedback, all animations using Fluent's characteristic easing curves, creating silky smooth transitions. Mouse hover over buttons or cards reveals halos following cursor movement, letting users feel interface responding to their operations. Click feedback typically includes slight scaling and brightness changes, duration controlled at two hundred to three hundred milliseconds, both obvious and not sluggish. Page transitions use fade in/out paired with slight displacement, creating smooth spatial transformation feel. Scrolling experience extremely smooth, content movement maintaining stable frame rate. Input boxes gaining focus show fluid color and width changes in underlines or borders. All transitions follow unified timing and easing functions, ensuring overall experience consistency and professionalism.

Atmosphere Creation:
Interface creates professional atmosphere of modern office applications, light yet stable. Acrylic material's semi-transparent characteristic fills interface with depth and spatial sense, different hierarchy content distinguished through material depth and blur degree. Color scheme dominated by soft neutral colors, white or extremely light gray as main background, varying depths of gray for text and secondary elements. Microsoft blue as brand and emphasis color, typically used for important buttons, links, and selected states. Functional colors used restrainedly, error red, success green, warning yellow appearing only when necessary. Border radius uniformly uses eight pixels, large cards or containers use twelve pixels, creating soft friendly visual impression. Spacing loose and comfortable, typically using multiples of eight or sixteen pixels, ensuring content breathing room. Text hierarchy clear, titles using larger font sizes and medium weights, body text maintaining good line and letter spacing. Overall design like Microsoft Office 365 or Windows 11 applications, containing modern aesthetics within professional efficiency, maintaining good visual comfort and operational pleasure for users during extended work periods.`
  },

  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'productivity',
      name: 'styles.core.fluent2-productivity.preview',
      type: 'fullpage'
    }
  ]
}
