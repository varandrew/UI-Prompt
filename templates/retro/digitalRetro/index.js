// Digital Retro Family Aggregator
// 数位复古家族聚合器

import { vaporwaveSocial } from './vaporwaveSocial'
import { pixelArtGame } from './pixelArtGame'
import { terminalCLI } from './terminalCLI'
import { demoHTML, customStyles as demoCustomStyles } from './Demo'

// Demo UI for style card display
export const name = 'styles.retro.digitalRetro.title'
export const demoUI = demoHTML
export const customStyles = demoCustomStyles
export const description = 'styles.retro.digitalRetro.description'

// Family-level customPrompt (简短 Prompt，100-300字)
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Digital Retro」核心样式卡展示界面风格高度接近的数位复古风 UI。
要求：在同一界面中统一使用数字怀旧、像素美学和赛博复古的视觉语言，可偏向终端 CLI、像素游戏或蒸汽波社交风格中的一种，但整体色彩与质感应与当前样式卡保持高度一致。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 复古游戏主页、像素风作品集、互动 Demo 页面
- 黑客 / 终端主题内容页、命令行工具展示页面
- 蒸汽波 / Y2K 审美相关的实验性视觉页面

【整体布局结构】
1. 背景层
   - 可使用纯黑或深紫 / 深蓝渐变背景，叠加轻微噪点和扫描线纹理，营造 CRT 屏幕感。
   - 如偏向蒸汽波风格，可使用网格地平线与远处落日轮廓作为远景装饰。
2. 主内容区域
   - 根据子风格调整：
     - 终端 CLI：以多行等宽字体文本区域为核心，上方显示标题，下方为命令输出。
     - 像素游戏：中央为像素化画面或游戏截图，下方为说明和按钮。
     - 社交 / 看板：多块像素卡片或窗口界面组成主内容区域。
3. 辅助信息
   - 可加入顶部状态栏、底部说明条或侧边导航，但视觉上应让主内容成为焦点。

【色彩与材质】
1. 典型配色
   - 终端系：荧光绿 (#00FF41)、琥珀黄 (#FFA500)、亮青色 (#00FFFF) 搭配黑色背景。
   - 像素游戏系：高饱和色块（洋红、青、黄、蓝）配合低分辨率图形。
   - 蒸汽波系：粉紫渐变、青蓝、霓虹网格与日落橙色。
2. 质感表现
   - 综合使用像素锯齿边缘、点阵字体、8-bit 图标和 limited palette（有限色板）。
   - 可以在整体叠加轻微的色差（RGB 分离）或 scanline 效果，增强旧显示器感觉。

【像素与终端细节】
1. 文本使用等宽字体（如 Courier New / Fira Code），字号较小，增强「终端感」。
2. 按钮与卡片边缘保持硬朗直角或极小圆角，边框粗 2–4px，呈现像素块感。
3. 图标与插图尽量使用像素风或低分辨率矢量图，避免过度平滑。

【交互与动效】
1. Hover
   - 按钮在悬停时改变边框颜色或背景色，但保持像素感边缘。
   - 链接可使用闪烁下划线或颜色切换模拟终端高亮。
2. 动效
   - 可为背景 scanline 或噪点添加缓慢滚动或轻微闪烁，对比度控制在舒适范围。
   - 终端风格可在载入时显示打字动画或逐行输出动画。

【输出要求】
- 使用语义化 HTML（main / section / header / footer）组织结构。
- 使用 TailwindCSS 风格原子类控制布局、间距和颜色，必要时通过自定义类实现像素边框和 scanline 效果。
- 生成结果必须清晰体现「像素 + CRT + 赛博复古」的统一视觉语言，让人联想到早期游戏机和终端界面。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a Digital Retro style interface that looks very close to the current “Digital Retro” core style card demo.
Use a unified visual language of digital nostalgia, pixel aesthetics and cyber retro. You may lean toward one subtype (terminal CLI, pixel game, or vaporwave social layout), but the overall color, texture and mood should stay close to the existing demo. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Homepages for retro games, pixel art portfolios or interactive demos
- Hacker / terminal themed content pages or command-line tool showcases
- Experimental visual pages built around vaporwave or Y2K aesthetics

[Layout structure]
1. Background layer
   - Use pure black or deep purple / deep blue gradients with subtle noise and scanline textures to evoke CRT displays.
   - For vaporwave-inspired variants, you may add a grid horizon and distant sunset disc in the background.
2. Main content area
   - Adjust according to subtype:
     - Terminal CLI: a large monospace text area with title above and command output below.
     - Pixel game: a central pixelated scene or screenshot with description and buttons beneath.
     - Social / board: multiple pixelated cards or window-like panels forming the primary layout.
3. Supporting information
   - Optional top status bar, bottom info strip or side navigation, but the main content should visually dominate.

[Color and materials]
1. Typical palettes
   - Terminal: phosphor green (#00FF41), amber (#FFA500), bright cyan (#00FFFF) on black.
   - Pixel game: high-saturation magenta / cyan / yellow / blue blocks with limited color palettes.
   - Vaporwave: pink-purple gradients, cyber blue, grid lines and sunset oranges.
2. Texture and rendering
   - Combine pixelated edges, bitmap fonts, 8-bit icons and limited palettes to achieve a retro digital look.
   - Optionally overlay slight RGB shift or scanline patterns to reinforce old display vibes.

[Pixel and terminal details]
1. Use monospace fonts (such as Courier New or Fira Code) at relatively small sizes to emphasize the terminal feeling.
2. Buttons and cards should have hard square corners or very small radii, with 2–4px borders that read as pixel blocks.
3. Icons and illustrations should be pixel art or low-resolution vectors rather than smooth modern graphics.

[Interaction and motion]
1. Hover
   - Buttons change border or background color on hover but retain crisp pixel edges.
   - Links may use blinking or color-shifting underlines to mimic terminal highlighting.
2. Motion
   - Background scanlines or noise can scroll slowly or flicker slightly, with controlled contrast so it remains comfortable.
   - Terminal-style views may show typewriter effects or line-by-line output on load.

[Output requirements]
- Use semantic HTML (main / section / header / footer) for structure.
- Use Tailwind-style utilities for layout, spacing and color; use custom classes where needed for pixel borders and scanlines.
- The generated UI must clearly express a unified language of “pixels + CRT + cyber retro”, reminiscent of early consoles and terminals at first glance.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名对像素游戏、终端黑客文化和蒸汽波美学都非常熟悉的 UI 设计师，需要从整体上描述 Digital Retro 数位复古家族的界面气质。

场景定位：这种风格适合复古游戏合集首页、像素艺术作品集、黑客 / CLI 工具展示页，以及围绕 Vaporwave / Y2K 审美的实验性页面，用来唤起「旧主机 + CRT 屏幕」的数字怀旧感。

视觉设计理念：画面以「像素 + CRT + 赛博」的统一语言为基础，可以偏向终端视图、街机像素游戏或蒸汽波社交看板，但整体结构应像一块信息控制面板：清晰的主视区、状态栏和若干子模块。图形边缘偏硬朗，字体多用等宽或像素感强的字形。

材质与质感：背景通常是深黑、深蓝或深紫，叠加噪点与扫描线纹理，营造旧显示器的颗粒感。前景元素使用高饱和的荧光绿、青、洋红和电蓝等配色，搭配粗边框、有限色板和小分辨率图标，让界面有「8-bit / 16-bit」的颗粒味道。

交互体验：交互反馈偏向「终端式」而非拟物按钮，悬停时多以文本高亮、边框变色、光标闪烁等方式反馈；动效则包括打字机动画、逐行输出、轻微抖动或扫描线滚动，节奏控制在中低速，避免干扰阅读。

整体氛围：Digital Retro 家族强调技术宅、游戏厅与赛博城市记忆的混合情绪，让用户感觉像在一台老式游戏机或工作站前操作——既有黑客浪漫，也有像素游戏的童年回忆。`,
  'en-US': `Role: You are a UI designer who deeply understands pixel art, hacker terminals and vaporwave culture, and you need to describe the overall mood of the Digital Retro family.

Scene: This style fits retro game hubs, pixel art portfolios, hacker/CLI tool showcases and vaporwave or Y2K-inspired experimental pages. It should evoke the feeling of “old console + CRT display” rather than a clean modern SaaS UI.

Visual philosophy: The language is a fusion of pixels, CRT displays and cyber motifs. The layout can lean toward terminal views, arcade-like game menus or vaporwave social boards, but should read as a coherent control panel with a clear main viewport, status zones and modules. Edges are crisp, and type often uses monospace or pixel-flavored fonts.

Material and texture: Backgrounds are typically deep black, blue or purple with noise and scanline overlays to suggest aging screens. Foreground elements rely on saturated neon greens, cyans, magentas and electric blues, combined with chunky borders, limited color palettes and low-res icons so the UI feels 8-bit/16-bit.

Interaction experience: Feedback feels “terminal-like” rather than skeuomorphic. Hover states emphasize text highlighting, border color shifts or blinking cursors; animations include typewriter effects, line-by-line reveals and slow scanline sweeps. Motion stays moderate so the interface remains legible for content.

Overall mood: The Digital Retro family mixes hacker romanticism with arcade nostalgia. At a glance it should feel like operating an old console or workstation—slightly noisy, glowing in the dark, and full of playful retro digital energy.`}

// Template list (templates that users can browse)
export const digitalRetroTemplates = [
  vaporwaveSocial,
  pixelArtGame,
  terminalCLI,
]

export default digitalRetroTemplates
