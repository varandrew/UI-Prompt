// Arcade CRT Family Aggregator
// 街機 CRT 家族聚合器

import { demoHTML, customStyles as demoCustomStyles } from './Demo.js';
import { arcadeHall } from './arcadeHall.js';
import { cyberpunkControl } from './cyberpunkControl.js';

// Demo UI for style card display
export const name = 'styles.retro.arcadeCRT.title';
export const demoUI = demoHTML;
export const customStyles = demoCustomStyles;
export const description = 'styles.retro.arcadeCRT.description';

// Family-level customPrompt (核心理念和设計原則)
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Arcade CRT 街机显示器」核心样式卡展示界面风格高度接近的 UI。
要求：保持黑暗街机厅氛围、CRT 扫描线、霓虹发光色和像素化按键这些核心特征，只允许替换文案与模块内容，不改变整体构图与配色气质。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 复古街机主题首页、游戏合集入口页
- 赛博朋克 / 合成波风格活动页或作品展示页
- 需要呈现「暗室 + 霓虹 + CRT 屏幕」感觉的实验性界面

【整体布局结构】
1. 背景层
   - 使用接近纯黑 (#0A0A0A) 的背景色，模拟关灯状态的游戏厅环境。
   - 可在背景中加入微弱的模糊光带或渐变，暗示其他机器的光源。
2. 主屏幕区域
   - 中央布局一个「CRT 屏幕」容器，内部展示标题、分数板或菜单选项。
   - 屏幕区域上下左右留有足够内边距，外框为带发光描边的矩形。
3. 控制区域
   - 屏幕下方或一侧放置「INSERT COIN」按钮、摇杆指示、功能按钮等像素化控件。

【色彩与材质】
1. 霓虹配色
   - 主色：霓虹粉 (#FF00FF)、霓虹蓝 (#00FFFF)、霓虹黄 (#FFFF00)、霓虹绿 (#00FF41)、霓虹橙 (#FF6600)。
   - 背景始终保持较暗，前景的文字和边框通过高亮霓虹色与外发光突出。
2. CRT 质感
   - 通过细密水平线条（扫描线）和轻微亮度变化模拟老式显示器。
   - 可以在屏幕区域叠加非常浅的噪点或轻微弧度效果，暗示玻璃曲面。

【视觉细节与像素风】
1. 文本使用接近等宽或像素感强的字体，字号偏小，有「状态行 / 计分板」感觉。
2. 按钮和标签使用厚边框（例如 3–4px），保持硬朗直角或非常小的圆角，营造像素块感。
3. 标题可以采用多层发光文字：主色字形 + 外层偏移的色彩影子，形成 RGB 分离效果。

【交互与动效】
1. CRT 扫描线
   - 在屏幕区域上叠加细密横线，缓慢上下移动或轻微闪烁，模拟扫描线动画。
2. Hover
   - 按钮在悬停时增加光晕强度，边框颜色加亮或略微改变色相。
   - 「INSERT COIN」类按钮可在 hover 时触发轻微放大和闪烁边框效果。
3. 文本动画
   - 可为部分标题或数字加入闪烁效果（间隔 0.5–1 秒），但需控制频率防止眩目。

【输出要求】
- 使用语义化 HTML 将整体划分为背景容器、屏幕容器和控制区域。
- 使用 TailwindCSS 风格原子类实现布局（flex / grid）、对齐、间距；通过额外类名实现发光和扫描线效果。
- 生成结果必须保留「深色背景 + CRT 屏幕 + 霓虹发光色 + 像素按钮」这些关键特征，让人一眼联想到复古街机机台。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate an Arcade CRT style interface that looks very close to the current “Arcade CRT” core style card demo.
Keep the dark arcade-hall mood, CRT scanlines, neon glow colors and pixelated controls as the core traits. You may change copy and module content, but you should not alter the main composition or color mood. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Retro arcade themed homepages or game collections
- Cyberpunk / synthwave event pages or project showcases
- Experimental UIs that should feel like “dark room + neon + CRT screens”

[Layout structure]
1. Background layer
   - Use near-pure black (#0A0A0A) as the base color to mimic a dark arcade.
   - Optionally include very soft blurred light streaks or gradients to suggest other machines in the distance.
2. Main screen area
   - Place a central “CRT screen” container that holds the title, scoreboard or menu options.
   - Provide generous padding inside the screen, with a glowing rectangular frame around it.
3. Control area
   - Below or beside the screen, lay out “INSERT COIN” buttons, joystick hints and function buttons styled as pixel blocks.

[Color and materials]
1. Neon palette
   - Primary colors: neon magenta (#FF00FF), neon cyan (#00FFFF), neon yellow (#FFFF00), neon green (#00FF41), neon orange (#FF6600).
   - Background remains dark; foreground text and borders stand out through bright neon colors and outer glows.
2. CRT rendering
   - Simulate old displays with fine horizontal scanlines and subtle brightness variation.
   - You may hint at curved glass by adding slight inner gradients or vignettes inside the screen.

[Visual details and pixel style]
1. Prefer monospace or pixel-feeling fonts at small sizes to evoke status lines and scoreboards.
2. Buttons and labels should have thick borders (around 3–4px) with hard corners or tiny radii, so they read as pixel blocks.
3. Titles can use layered glowing text: a main colored glyph plus offset colored shadows to create RGB separation.

[Interaction and motion]
1. Scanline animation
   - Overlay horizontal lines on the screen area that move slowly or flicker slightly to simulate CRT scanlines.
2. Hover
   - On hover, increase the intensity of glows, brighten borders or slightly shift hue for buttons.
   - An “INSERT COIN” control can pulse in size and border brightness to attract attention.
3. Text animation
   - Selected headings or numbers may blink at low frequency (0.5–1 second cycles), keeping eye strain in mind.

[Output requirements]
- Use semantic HTML to separate background container, screen container and control section.
- Use Tailwind-style utilities for layout (flex/grid), alignment and spacing, and additional classes for glow and scanline effects.
- The generated UI must preserve “dark background + CRT screen + neon glow colors + pixel buttons” so it is instantly recognizable as a retro arcade cabinet.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名沉迷街机游戏厅与赛博朋克文化的设计师，需要用一句话描述 Arcade CRT 家族的整体世界观。

场景定位：这种风格适合街机主题游戏入口页、复古游戏合集、合成波 / 赛博朋克活动页以及任何需要「暗室 + 霓虹 + CRT 屏幕」氛围的实验性界面。

视觉设计理念：画面被想象成一台或多台街机机台的正面：中央是发光的 CRT 屏幕，周围是厚实的机台外壳和按钮区域。背景维持近乎全黑，只有来自屏幕与霓虹标识的光线照亮局部，界面更像一张场景照片，而不是通用的白底网页。

材质与质感：CRT 屏幕通过扫描线、色偏和轻微弧度暗示老式显示器，文字和 UI 元素采用高亮霓虹色并带有外发光；下方按键、投币口与提示文字则以粗边框和像素感字体出现。整体细节偏「电子设备」，而非柔和扁平化。

交互体验：按钮与链接在悬停时会像霓虹牌刚被点亮一样变得更亮、更饱和，边框和外发光加强，偶尔伴随轻微的抖动或大小变化。「INSERT COIN」类元素可以周期性闪烁或呼吸，以吸引注意，但节奏需控制在舒适范围。

整体氛围：Arcade CRT 家族强调的是深夜游戏厅的封闭感与兴奋感——黑暗空间中只有屏幕在闪、电子噪声与像素图像不停滚动。用户看到这类界面时，应立刻联想到街机、硬件与赛博城市的霓虹街景。`,
  'en-US': `Role: You are a designer obsessed with arcade halls and cyberpunk worlds, and you need to summarize the Arcade CRT family as a coherent universe.

Scene: This style fits arcade-themed game hubs, retro game collections, synthwave/cyberpunk events and any experimental UI that wants a “dark room + neon + CRT screen” atmosphere.

Visual philosophy: The composition treats the UI as the front of one or more arcade cabinets: a glowing CRT screen in the center, framed by heavy cabinet edges and a control area of buttons. The environment is almost entirely dark, with light coming mainly from screens and neon signage, so the page feels more like a photographed scene than a white-background web template.

Material and texture: CRT screens are rendered with scanlines, slight color separation and curved-glass hints. Text and interface elements use bright neon colors with strong outer glows; buttons, coin slots and labels are chunky, with pixel-like borders and monospace or bitmap type. Details feel like electronic hardware rather than soft flat graphics.

Interaction experience: On hover, buttons and links behave like neon tubes being powered up: brighter, more saturated, with stronger glow and occasional tiny jiggles or scale changes. “INSERT COIN” elements can pulse or blink at a controlled pace to draw attention without overwhelming the eyes.

Overall mood: The Arcade CRT family captures the enclosed, electric excitement of a late-night arcade—dark surroundings, glowing screens and constant pixel motion. At a glance, users should think of cabinets, hardware and neon-soaked cyber city streets.`}

// Template list (users can browse these templates)
export const arcadeCRTTemplates = [
  arcadeHall,
  cyberpunkControl,
];

export default arcadeCRTTemplates;
