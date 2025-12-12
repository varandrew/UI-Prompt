// Retro OS Family Aggregator
// 复古操作系统家族聚合器

import { retroOS95 } from './retroOS95'
import { demoHTML, customStyles as demoCustomStyles } from './Demo'

// Demo UI for style card display
export const name = 'styles.retro.retroOS.title'
export const demoUI = demoHTML
export const customStyles = demoCustomStyles
export const description = 'styles.retro.retroOS.description'

// Family-level customPrompt (简短 Prompt，100-300字)
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Retro OS」核心样式卡展示界面风格高度接近的 1990 年代桌面操作系统风格 UI。
要求：保持 Windows 95/98 风格窗口、任务栏、开始菜单和 CRT 显示器质感，只允许替换窗口标题、图标与具体内容，不改变整体窗口布局与配色体系。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 怀旧主题网站、复古游戏平台、技术博客的「虚拟桌面」式首页
- 模拟器、系统工具、个人作品集的操作系统主题界面
- 需要传达 90 年代个人电脑审美与趣味感的交互场景

【整体布局结构】
1. 桌面背景
   - 使用经典青绿色 (#008080) 或纯色渐变作为全屏背景，可加入少量像素化图标。
   - 保持背景简洁，突出前景窗口。
2. 主窗口
   - 居中或略偏上的主应用窗口，包含标题栏、菜单区和内容区。
   - 标题栏使用深蓝色 (#000080) 背景 + 白色文字，左侧带应用图标，右侧为最小化 / 最大化 / 关闭按钮。
3. 任务栏与开始菜单
   - 底部使用灰色任务栏 (#C0C0C0)，左侧放置「Start」按钮，右侧可包含时间或系统托盘区域。
   - 可设计多个小窗口 / 对话框叠加在桌面上，但层级关系要清晰。

【色彩与材质】
1. 经典配色
   - 桌面背景：Teal 青色 #008080 或类似。
   - 窗口背景：浅灰色 #C0C0C0。
   - 标题栏：深蓝 #000080（活动窗口）、深灰蓝用于非活动窗口。
   - 边框与线条：使用深浅不同的灰色组合，模拟 3D 边框。
2. 材质与像素感
   - 保持纯平色块与清晰像素边缘，不使用现代渐变或柔光阴影。
   - 图标与按钮使用低分辨率像素图或像素风矢量图。

【3D 边框与交互细节】
1. 窗口与按钮边框采用「上亮下暗」和「上暗下亮」组合，模拟凸起 / 凹陷效果。
2. 按钮默认为凸起状态，按下时边框反转为凹陷（例如 border-style 从 outset 换成 inset）。
3. 输入框、列表与滚动条同样使用 2px 边框和内凹效果，统一视觉语言。

【交互与动效】
1. Hover
   - 鼠标悬停在按钮上时仅改变背景色或边框色，尽量模仿原生 OS 交互。
2. Active
   - 点击时按钮应立即呈现凹陷态，释放后恢复凸起。
3. 动画
   - 基本不使用复杂动画，只在必要时使用极短的淡入淡出或位移（100–150ms），保持操作系统原始感觉。

【输出要求】
- 使用语义化 HTML 构建桌面、任务栏、窗口等层级结构。
- 使用 TailwindCSS 风格原子类描述布局（绝对定位 / flex）、层级（z-index）和颜色。
- 生成结果必须保留「Teal 桌面背景 + 灰色 3D 窗口 + 蓝色标题栏 + 底部任务栏」这些关键特征，让人一眼看出是 90 年代 Retro OS 风格。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a 1990s desktop operating-system style interface that looks very close to the current “Retro OS” core style card demo.
Keep Windows 95/98-style windows, taskbar, Start button and CRT-like visual feel as the main traits. You may change window titles, icons and content, but you should not change the overall window layout or color system. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Virtual desktop style homepages for nostalgic websites, retro game portals or tech blogs
- OS-themed UIs for emulators, tools or personal portfolios
- Interfaces that need to express 1990s personal computer aesthetics and playful nostalgia

[Layout structure]
1. Desktop background
   - Use a full-screen teal (#008080) or similar solid / simple gradient background with a few desktop icons.
   - Keep the background simple so foreground windows stand out.
2. Main window
   - A central or slightly elevated primary application window with title bar, menu area and content pane.
   - Title bar uses deep blue (#000080) with white text; left side shows an app icon, right side has minimize / maximize / close buttons.
3. Taskbar and Start menu
   - A gray taskbar (#C0C0C0) at the bottom, with a “Start” button on the left and optional clock / tray area on the right.
   - Optionally include additional small windows or dialogs stacked on the desktop, but maintain clear visual hierarchy.

[Color and materials]
1. Classic palette
   - Desktop: teal #008080 or related hues.
   - Window backgrounds: light grey #C0C0C0.
   - Active title bar: navy #000080; inactive bars can use darker greys.
   - Borders and separators: combinations of light and dark greys to form 3D edges.
2. Pixel feel
   - Use sharp solid color blocks and crisp pixel edges; avoid modern gradients and soft glows.
   - Icons and buttons should look pixelated or low-resolution, matching the period.

[3D borders and micro-interactions]
1. Use “light top / dark bottom” and the reverse combinations for raised vs sunken surfaces.
2. Buttons are raised by default; when pressed, their border inverts to look inset (similar to switching from outset to inset style).
3. Inputs, lists and scrollbars use 2px borders and inset effects to maintain a unified visual language.

[Interaction and motion]
1. Hover
   - On hover, change button background or border color only, mimicking native OS hover if present.
2. Active
   - On click, buttons should immediately appear sunken, then return to raised state when released.
3. Animation
   - Avoid complex animations; limit transitions to very short fades or position changes (around 100–150ms) so the UI feels like a real 90s OS.

[Output requirements]
- Use semantic HTML to represent desktop, taskbar and window hierarchy.
- Use Tailwind-style utilities for layout (absolute positioning / flex), z-index layering and colors.
- The generated UI must preserve “teal desktop + grey 3D windows + blue title bar + bottom taskbar” as key cues so it is instantly recognizable as a 90s Retro OS variant.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名对 90 年代个人电脑审美非常熟悉的界面设计师，需要向团队说明 Retro OS 家族应该呈现怎样的视觉与情绪。

场景定位：这种风格适合作为怀旧主题网站首页、复古游戏平台、技术博客「虚拟桌面」式入口，或模拟器 / 工具类产品的操作系统皮肤界面，让用户有「正在使用老电脑」的代入感。

视觉设计理念：画面以经典桌面操作系统为原型：青绿色桌面背景、底部灰色任务栏、左侧 Start 按钮、窗口拥有深蓝标题栏和明显的 3D 边框。布局强调层级关系与窗口叠放次序，而非现代卡片式网格，整体更像一个可操作的桌面空间。

材质与质感：窗口和按钮的 3D 效果通过浅灰与深灰的对比边框实现，利用「上亮下暗 / 上暗下亮」模拟凸起和凹陷；图标呈现像素化或低分辨率风格。桌面背景保持纯色或简洁图案，强化操作系统原生感，而非华丽插画。

交互体验：按钮和控件在悬停与按下时主要通过边框与背景色微调来反馈，点击时会明显变成「按下」状态，像真按钮被压下。整体几乎不使用复杂动画，过渡短促而直接，强调功能性和即时反馈。

整体氛围：Retro OS 家族带来的是「开机即进入 90 年代」的怀旧体验——界面略显笨拙但可靠、充满像素图标和系统提示，让用户产生与旧操作系统对话的亲切感。`,
  'en-US': `Role: You are a designer who grew up with 90s desktop operating systems and you need to articulate what the Retro OS family should feel like.

Scene: This style is ideal for nostalgic homepage experiences, retro game portals, virtual-desktop themed tech blogs and OS-skin UIs for emulators or utilities. Users should feel as if they have just booted up an old PC.

Visual philosophy: The layout mimics classic desktop environments: teal wallpaper, a grey taskbar with a Start button on the left, windows with navy title bars and chunky 3D borders. Hierarchy is defined by overlapping windows and z-order rather than modern card grids, so the whole screen feels like a workspace instead of a single-page layout.

Material and texture: 3D effects rely on light and dark grey borders that create raised and sunken surfaces. Icons and buttons are intentionally pixelated or low-res. The desktop background is mostly flat color or simple patterns, reinforcing an “OS-native” feel instead of an illustrated landing page.

Interaction experience: Hover and active states are expressed via small shifts in border and fill color; pressed buttons look clearly inset, like real plastic keys. Animations are minimal and snappy—quick state changes rather than smooth, cinematic transitions—emphasizing utility and immediacy.

Overall mood: The Retro OS family is about switching on a 90s PC: slightly clunky but charming, full of pixel icons, status bars and dialog boxes. At a glance, users should feel they are manipulating a familiar old desktop rather than browsing a modern website.`}

// Template list (templates that users can browse)
export const retroOSTemplates = [
  retroOS95
]

export default retroOSTemplates
