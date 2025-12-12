// Retro Futurism Family Aggregator
// 复古未来主义家族聚合器

import { retroFuture } from './retroFuture'
import { demoHTML, customStyles as demoCustomStyles } from './Demo'

export const name = 'styles.retro.retroFuturism.title'
export const demoUI = demoHTML
export const customStyles = demoCustomStyles
export const description = 'styles.retro.retroFuturism.description'

export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Retro Futurism」核心样式卡展示界面风格高度接近的复古未来主义 UI。
要求：结合 1980 年代对未来的想象（霓虹网格、太空城市、粗像素界面）与现代 Web 布局，只允许替换文案和具体模块内容，不改变核心构图与配色气质。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 科幻主题活动页、游戏登陆页、音乐专辑或 DJ 演出宣传页
- 复古科幻品牌或数位艺术展览的展示页面
- 需要呈现「老科幻电影 / 合成波封面」氛围的界面

【整体布局结构】
1. 远景背景
   - 使用星空、行星或未来城市天际线作为全屏背景，可带轻微模糊与颗粒。
   - 底部可绘制网格地平线（类似 80 年代科幻片片头），延伸至地平线消失点。
2. 主内容区域
   - 中央设置标题区（巨大霓虹文字），下方为副标题和主行动按钮。
   - 左右可放置信息卡片、功能模块或时间轴，布局可以略微非对称但保持整体平衡。
3. 辅助元素
   - 使用霓虹边框的卡片、激光线条、几何形状作为视觉锚点。

【色彩与材质】
1. 主色系统
   - 深色背景：近黑蓝 (#020617, #020617) 或深紫。
   - 霓虹渐变：洋红 (#FF00FF)、青色 (#00FFFF)、电蓝 (#3B82F6)、亮紫 (#A855F7)。
   - 强调色：亮橙、亮黄用于按钮或警告状态。
2. 材质表现
   - 线框网格、发光描边、半透明霓虹框架。
   - 文本和图标常带外发光或多层 text-shadow，营造电子光晕。

【空间与构图】
1. 使用透视网格将视线引向远处消失点，让画面具有纵深感。
2. 将标题和主要按钮放在视觉中心或略偏下方，使其与地平线 / 行星对齐。
3. 其他模块沿网格节奏排布，避免完全随机位置导致杂乱。

【交互与动效】
1. Hover
   - 按钮在悬停时提高亮度并加重光晕，背景颜色略微偏移（例如从紫向蓝过渡）。
   - 卡片边框在 hover 时可以出现流动的霓虹边缘动画。
2. 动效
   - 背景星空可缓慢移动或闪烁，频率较低以免干扰阅读。
   - 网格地平线可轻微上下浮动或带有扫描线效果。

【输出要求】
- 使用语义化 HTML 表达背景层、主内容层和装饰层的层级关系。
- 使用 TailwindCSS 风格原子类实现布局（flex / grid）、对齐和间距，必要时配合自定义类实现霓虹发光效果。
- 生成结果必须保留「星空 / 行星背景 + 透视网格地平线 + 霓虹文字与边框」这些关键特征，让人一眼联想到 80 年代复古未来主义。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a Retro Futurism style interface that looks very close to the current “Retro Futurism” core style card demo.
Blend 1980s visions of the future (neon grids, space cities, chunky computer interfaces) with modern web layout. You may change copy and module content, but you should not alter the core composition or color mood. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Sci-fi themed event pages, game landing pages, music album or DJ flyer sites
- Showcase pages for retro-futuristic brands or digital art exhibitions
- Interfaces meant to feel like old sci-fi movie intros or synthwave album covers

[Layout structure]
1. Distant background
   - Use a full-screen starfield, planet or futuristic skyline, optionally with slight blur and grain.
   - Draw a grid horizon at the bottom that recedes toward a vanishing point on the horizon line.
2. Main content area
   - Place a large neon title in the visual center, with subtitle and primary call-to-action button beneath.
   - Additional info cards, feature blocks or timelines can flank the main stack on left and right, slightly asymmetric but visually balanced.
3. Supporting elements
   - Use neon-bordered cards, laser-like lines and simple geometric shapes as visual anchors.

[Color and materials]
1. Palette
   - Dark base: near-black blues (#020617) or deep purples.
   - Neon gradients: magenta (#FF00FF), cyan (#00FFFF), electric blue (#3B82F6), vivid purple (#A855F7).
   - Accent colors: bright orange or yellow for buttons and warning states.
2. Rendering
   - Wireframe grids, glowing outlines and semi-transparent neon frames.
   - Text and icons often carry outer glow via layered text-shadows to create electronic halos.

[Space and composition]
1. Use perspective grids to draw the eye toward a distant vanishing point and create depth.
2. Align title and primary actions with the horizon or key background elements (planet, skyline).
3. Arrange secondary modules along the grid rhythm to avoid visual chaos.

[Interaction and motion]
1. Hover
   - On hover, buttons increase brightness and glow, with subtle hue shifts (for example from purple toward blue).
   - Card borders can show moving neon edge animations when hovered.
2. Motion
   - Background stars may drift slowly or twinkle at a low frequency.
   - The grid horizon can gently pulse or carry a scanline sweep.

[Output requirements]
- Use semantic HTML to represent background, main content and decorative layers.
- Use Tailwind-style utilities for flex/grid layout, alignment and spacing, adding custom classes for neon glow effects where needed.
- The generated UI must clearly preserve “star/planet backdrop + perspective neon grid + glowing neon typography and frames” so it reads as retro-futuristic at first glance.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名负责科幻活动视觉与游戏登陆页的设计师，需要用一句「世界观介绍」的方式讲清楚 Retro Futurism 复古未来主义家族的调性。

场景定位：这种风格适合科幻主题游戏 / 音乐专辑 / 演出活动的宣传页，也适合作为复古科幻品牌或数位艺术展的封面 UI，让人联想到老科幻电影片头和合成波专辑封面。

视觉设计理念：画面核心是「远景星空 + 透视网格地平线 + 霓虹城市 / 行星轮廓」。标题多为巨大霓虹字，位于视觉中心或略偏下方，两侧分布信息卡片与功能模块。构图通常采用中心透视或对角线透视，通过网格线将视线引向远处消失点，形成时间和空间向前延伸的感觉。

材质与质感：背景采用深蓝或深紫的星空，点缀粒子状星点、雾气和光晕；前景线条与边框使用洋红、青色、电蓝等高亮霓虹色，加入外发光和模糊，形成立体的光轨与线框城市。整体更像夜间发光的场景，而不是白天的平面图形。

交互体验：按钮与卡片在悬停时会明显增加亮度与光晕，有轻微的颜色偏移或线条流动，像被霓虹灯点亮；背景元素可有缓慢星空闪烁或网格律动，但频率应保持低节奏，避免压过主要信息。

整体氛围：Retro Futurism 家族强调「过去对未来的想象」——既怀旧又前卫，既浪漫又略带孤独感。用户看到时会觉得自己站在虚拟宇宙的边缘，面前是通往未来城市的发光地平线。`,
  'en-US': `Role: You are a designer for sci-fi events and game landings, and you need to describe the Retro Futurism family as if you were explaining its world-building.

Scene: This style fits sci-fi game or music landing pages, flyers for synthwave events and exhibition covers for retro-futuristic brands or digital art. It should instantly recall old movie intros and synthwave album covers.

Visual philosophy: The core composition is “distant stars + perspective neon grid + silhouetted city or planet”. A large glowing title sits near the visual center, with supporting cards and modules arranged to the sides. Perspective lines from the grid pull the eye toward a vanishing point, creating the sense of time and space stretching forward.

Material and texture: Backgrounds are deep blues or purples with starfields, fog and halos. Foreground lines and frames use bright magenta, cyan and electric blue with outer glows and blur, forming luminous tracks and wireframe skylines. The world feels like a night scene lit entirely by neon.

Interaction experience: Buttons and cards respond with stronger glow, brightness and subtle hue shifts, as if neon tubes were powering up. Background elements such as stars or grids may drift or pulse slowly, but at low frequency so they do not overpower the content.

Overall mood: The Retro Futurism family expresses “how the past imagined the future”—nostalgic yet forward-looking, romantic but slightly lonely. Users should feel as if they are standing on the edge of a virtual universe, facing a glowing horizon that leads into a futuristic city.`}

export const retroFuturismTemplates = [
  retroFuture
]

export default retroFuturismTemplates
