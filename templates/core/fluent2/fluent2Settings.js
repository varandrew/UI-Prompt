// ✅ Simplified: fullPage content now loaded from public/data/content/

export const fluent2Settings = {
  id: 'fluent2-settings',
  title: 'styles.core.fluent2-settings.title',
  description: 'styles.core.fluent2-settings.description',

  // ✨ AI Prompt（用于生成与当前 Fluent 2 设置界面高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Fluent 2 系统设置页面」界面风格高度接近的 Fluent Design 2.0 风格设置界面。
要求：保持整体布局结构（左侧类目 + 右侧设置内容）、色彩和光影 / 材质质感基本不变，只允许替换文案、图标和具体设置项。输出使用语义化 HTML 结构和 TailwindCSS 风格的原子类（或等价的工具类方案）。

【使用场景】
- 场景：应用 / 系统设置页面，用户需要浏览和更改多组配置项。
- 用户：普通终端用户和进阶用户，频繁进入设置管理偏好、权限、通知等。
- 目标：让用户在不被干扰的前提下，快速找到并理解每一项设置含义，安全地完成修改。

【整体布局结构】
1. 页面结构
   - 左侧为设置分类导航（如 General / Account / Notifications / Appearance），右侧为当前类目的具体设置内容。
   - 顶部可有简洁标题栏（页面标题 + 搜索设置框），或保持轻量顶部工具区域。
2. 左侧导航（Category Sidebar）
   - 采用垂直列表，每项包含图标 + 文本，当前选中项高亮（背景色加深、左侧强调条或圆点）。
   - 导航区域背景略深或略带亚克力模糊，与主背景有轻微区分。
3. 右侧内容区（Settings Content）
   - 按逻辑分组显示设置区块，每个分组包含：
     - 分组标题（例如「通知」「隐私」「显示」）。
     - 设置项列表，每一行展示：标签文本 + 控件（开关 / 下拉框 / 滑块 / 文本输入）。
   - 设置项之间使用统一的垂直间距和细分隔线或背景分段。

【色彩与材质】
1. 背景与基底
   - 页面主背景：非常浅的中性灰 / 白色，适合长时间阅读（如 #f9fafb / #f3f4f6）。
   - 导航 / 侧边栏：浅色亚克力或比主背景略深的灰度，保持 Fluent 2 质感。
2. 品牌色与状态色
   - 主品牌色：接近微软蓝（如 #2563eb）用于开关开启状态、主按钮、链接文字。
   - 辅助色：绿色用于成功提示、红色用于危险操作、黄色 / 橙色用于警告或注意项。
3. 文本颜色
   - 主文字：深灰 #111827 / #0f172a。
   - 次级说明：中灰 #4b5563 / #6b7280。
   - 危险提示：红色或红棕色，使用谨慎。

【光影、圆角与控件形态】
1. 圆角与卡片
   - 所有卡片和控件统一采用 8px 圆角，大型容器可使用 12px。
   - 设置分组容器可带轻微阴影或边框，以增强区域感但保持克制。
2. 阴影与深度
   - 适度使用细腻阴影区分浮层（如弹出面板、对话框），普通设置行建议仅用背景 / 边框。
3. 控件样式
   - 开关：圆角滑块，开启时填充品牌色，关闭时为浅灰；滑块圆点居中平滑滑动。
   - 滑块 / 进度条：圆角轨道 + 突出填充色段。
   - 下拉选择 / 输入框：边框细致（1px 中性灰），获得焦点时边框改为品牌色。

【动效与交互反馈】
1. 动效节奏
   - 所有过渡采用 Fluent 曲线（如 cubic-bezier(0.25, 0.46, 0.45, 0.94)），时长 200–300ms。
2. 悬停反馈
   - 鼠标悬停在可点击的设置行时，整行背景轻微提升亮度或增加一层淡淡的高光，提示可交互区域。
   - 按钮 hover 改变背景亮度和阴影深度，不建议大幅缩放。
3. 状态变化
   - 切换开关、滑动滑块、选择下拉项时，有平滑过渡动画，不要瞬间跳变。

【输出要求】
- 使用语义化 HTML：aside 用于左侧导航，main/section 用于右侧内容区。
- 使用 TailwindCSS 类或类似原子类控制布局（flex/grid）、间距和对齐。
- 生成的设置页面应在「左侧类目导航 + 右侧分组设置」「柔和圆角 + 中性背景 + Fluent 品牌蓝」以及「轻量亚克力 + 细腻动效」上，与当前 Fluent 2 设置 UI 高度一致。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a Fluent Design 2.0 settings interface that looks very close to the current “Fluent 2 Settings” demo.
Keep the overall layout (left category sidebar plus right settings content), color system and Fluent-style acrylic surfaces essentially unchanged. You may replace text, iconography and specific setting items, but not the structure or motion language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: application or system settings page where users browse and modify multiple groups of options.
- Users: everyday and power users who frequently adjust preferences, permissions, notifications and appearance settings.
- Goal: let users quickly find and understand each setting while maintaining a calm, professional Fluent 2 look.

[Layout]
1. Use a top area with page title and optional search field for quickly finding settings.
2. Left sidebar displays setting categories in a vertical list (for example General, Account, Notifications, Appearance); each item combines icon and label, with the active category highlighted by background and a colored indicator.
3. Right content area displays grouped settings for the current category; each group has a group heading and a list of individual rows.
4. Each setting row includes label text on the left and a control on the right (toggle, dropdown, slider, text input or navigation chevron); rows use consistent spacing and subtle dividers or background sections.

[Visual style]
1. Page background is a very light neutral color; sidebar and content panels sit on slightly stronger acrylic surfaces with soft blur.
2. Primary Fluent blue is used for active category indicators, primary buttons and “on” states of switches; supporting colors (green, red, yellow) are used sparingly for success, danger and warning.
3. Text colors follow a clear hierarchy: dark grey for main labels, mid-grey for descriptions and lighter grey for hints or meta information.
4. All cards, panels and controls share consistent corner radii (around 8px for panels, pill shapes for toggles and buttons).

[Interaction]
1. Hovering over navigable rows lightly raises background brightness or adds a thin highlight, indicating clickability without heavy shadows.
2. Buttons react by adjusting background and shadow slightly on hover; switches animate their thumb position and track color smoothly.
3. All transitions use Fluent-style curves with durations around 200–300ms; avoid abrupt jumps or exaggerated motion.

[Output requirements]
- Use semantic HTML, with aside for the left navigation and main/section elements for the right settings content.
- Use Tailwind-style utility classes to control layout (flex or grid), spacing, typography and color states.
- The generated settings screen must preserve the recognisable traits of the current Fluent 2 settings UI: left category navigation, softly rounded cards, Fluent blue accents and subtle, consistent animations.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于 Fluent Design System 的 UI 设计师，擅长为系统设置界面打造清晰、易用的现代布局。

场景定位：
为系统设置和配置场景打造符合 Fluent 2 设计规范的界面，通过清晰的分组、直观的控件和流畅的交互帮助用户快速找到和调整所需设置。目标用户为需要配置系统参数的各类用户，界面需要在呈现复杂设置选项的同时保持简洁明了。这是一个强调信息架构和可用性的设计系统，需要让用户能够轻松理解每个设置项的作用并进行精确调整。

视觉设计理念：
采用微软 Fluent Design 的设计语言，以清晰的信息层级和直观的视觉引导为核心。设计强调内容的组织性，通过分组、间距和视觉层次让复杂的设置项井然有序。整体视觉追求简洁、专业、易读的品质，如同 Windows 设置应用般清晰直观。界面运用柔和的中性色系作为基础，通过亚克力材质的细微运用增添现代感而不喧宾夺主。所有交互控件都设计得清晰易懂，开关、滑块、下拉框等元素状态明确，操作反馈及时。

材质与质感：
主体使用纯净的白色或极浅灰色背景，确保设置项文字清晰可读。侧边导航或顶部导航条可能使用浅色亚克力材质，既保持一致的设计语言又不影响主要内容的阅读性。设置项分组使用细微的背景色差异或细线分隔，创造清晰的视觉分组。开关控件使用 Fluent 特有的滑动设计，开启时展现品牌色，关闭时保持灰色。滑块和进度条使用圆润的形态和平滑的过渡动画。输入框和下拉框采用简洁的边框设计，获得焦点时展现品牌色的强调。按钮使用柔和的圆角和细腻的悬停效果，主要操作按钮使用品牌色填充，次要按钮使用线框或文字样式。所有元素的圆角统一使用八像素，保持视觉一致性。

交互体验：
交互设计强调清晰的反馈和流畅的操作体验。开关切换时有明确的滑动动画，时长约两百毫秒，让用户清楚看到状态变化。滑块拖动时展现流畅的跟手感，释放后可能有轻微的回弹效果。下拉框展开时使用淡入动画配合轻微的位移，收起时快速淡出。鼠标悬停在设置项上时，整行可能展现细微的背景色变化，暗示可点击区域。点击反馈使用微妙的视觉变化，避免干扰用户的操作流程。所有动画都使用 Fluent 的标准缓动曲线，确保动作自然流畅。页面滚动平滑稳定，长列表的设置项保持良好的性能表现。

氛围营造：
界面营造出专业系统设置的清晰氛围，井然有序而不失现代感。设置项按照逻辑分组，每个分组有清晰的标题和可选的描述文字。主要设置项使用较大的文字和充足的行高，确保易读性。次要说明文字使用较小字号和较浅颜色，提供额外信息而不干扰主要内容。微软蓝色作为品牌色用于开关的开启状态、链接文字和主要操作按钮。危险操作（如删除、重置）使用红色强调，警告性设置使用黄色或橙色图标。间距规整统一，通常使用十六像素或二十四像素作为基础单位，确保视觉节奏稳定。图标设计简洁清晰，使用线性风格，与文字保持良好的视觉平衡。整体设计如同 Windows 11 设置应用，在功能丰富的同时保持界面清爽，让用户能够快速定位和调整所需设置，提供高效而愉悦的配置体验。`,

    'en-US': `Role: You are a UI designer specializing in Fluent Design System, skilled at creating clear and user-friendly modern layouts for system settings interfaces.

Scenario Positioning:
Create Fluent 2 compliant interfaces for system settings and configuration scenarios, helping users quickly find and adjust needed settings through clear grouping, intuitive controls, and fluid interactions. Target users are various types of users who need to configure system parameters, requiring interfaces that remain simple and clear while presenting complex setting options. This is a design system emphasizing information architecture and usability, needing to help users easily understand each setting's function and make precise adjustments.

Visual Design Philosophy:
Adopt Microsoft Fluent Design language, with clear information hierarchy and intuitive visual guidance as core. Design emphasizes content organization, making complex setting items orderly through grouping, spacing, and visual hierarchy. Overall visual pursuit of simple, professional, readable quality, as clear and intuitive as Windows Settings app. Interface employs soft neutral color systems as foundation, adding modernity through subtle use of acrylic materials without overshadowing. All interactive controls designed clearly and understandably, elements like switches, sliders, dropdowns having clear states with timely operation feedback.

Materials & Textures:
Main body uses clean white or extremely light gray backgrounds, ensuring setting item text clearly readable. Side navigation or top navigation bars may use light acrylic materials, maintaining consistent design language without affecting main content readability. Setting item grouping uses subtle background color differences or thin line separators, creating clear visual grouping. Switch controls use Fluent's characteristic sliding design, showing brand color when on, remaining gray when off. Sliders and progress bars use rounded forms and smooth transition animations. Input boxes and dropdowns adopt simple border design, showing brand color emphasis when focused. Buttons use soft rounded corners and delicate hover effects, primary action buttons using brand color fill, secondary buttons using outline or text styles. All elements' border radius uniformly uses eight pixels, maintaining visual consistency.

Interaction Experience:
Interaction design emphasizes clear feedback and fluid operation experience. Switch toggles have clear sliding animations, about two hundred milliseconds duration, letting users clearly see state changes. Slider dragging shows fluid following feel, possibly having slight bounce effect after release. Dropdown expansion uses fade in animation paired with slight displacement, collapsing with quick fade out. Mouse hover over setting items may show subtle background color changes, hinting at clickable areas. Click feedback uses subtle visual changes, avoiding disruption to user operation flow. All animations use Fluent's standard easing curves, ensuring natural fluid motions. Page scrolling smooth and stable, long list setting items maintaining good performance.

Atmosphere Creation:
Interface creates clear atmosphere of professional system settings, orderly yet modern. Setting items grouped logically, each group having clear titles and optional description text. Primary setting items use larger text and ample line height, ensuring readability. Secondary explanatory text uses smaller font sizes and lighter colors, providing additional information without interfering with main content. Microsoft blue as brand color used for switch on state, link text, and primary action buttons. Dangerous operations (like delete, reset) emphasized with red, warning settings using yellow or orange icons. Spacing regular and uniform, typically using sixteen or twenty-four pixels as base units, ensuring stable visual rhythm. Icon design simple and clear, using linear style, maintaining good visual balance with text. Overall design like Windows 11 Settings app, maintaining fresh interface while feature-rich, allowing users to quickly locate and adjust needed settings, providing efficient and pleasant configuration experience.`
  },

  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'settings',
      name: 'styles.core.fluent2-settings.preview',
      type: 'fullpage'
    }
  ]
}
