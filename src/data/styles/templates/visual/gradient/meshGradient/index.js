// Single template module: Gradient — Mesh Gradient
// 网格渐变 - 多点渐变创造的网格效果

import { demoHTML, customStyles } from './Demo';

export const meshGradient = {
  id: 'visual-gradient-mesh-gradient',
  title: 'styles.visual.meshGradient.title',
  description: 'styles.visual.meshGradient.description',

  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Mesh Gradient 网格渐变」示例风格高度接近的界面背景。
要求：保持多点径向渐变叠加、深色底色以及柔和色彩过渡，只允许替换色值和轻微布局，不改变整体「大面積网格漸变背景 + 前景卡片」的視覺語言。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 行銷落地页的 Hero 区背景
- 设計工具、靈感牆、作品集封面背景
- 需要強烈色彩氛圍但仍保留可讀內容区的介面

【整体布局结构】
1. 背景层
   - 使用整個視窗寬度的网格漸变背景，佔据画面大部分空間。
   - 上层疊加內容区（标題、文案、按鈕或卡片）。
2. 內容层
   - 將前景区域限制在較窄的寬度（如 max-w-xl / max-w-2xl），居中或略偏上。
   - 文字与按鈕使用純色或高對比度實色塊，避免被漸变干擾。

【色彩与材质】
1. 漸变點设計
   - 在画面四角与边緣放置 3–5 個主要漸变點，例如：左上、右上、右下、左下、中間。
   - 每個漸变點使用一組鮮明但互補的色彩（藍紫、粉紅、青綠等）。
2. 底色
   - 使用深色底色如 #0f0f23 作為背景色，让漸变更突出且不刺眼。
3. 過渡
   - 每個 radial-gradient 由實色中心過渡到透明，半徑約佔視窗寬度的 40–60%。

【网格漸变實作要點】
1. 使用多個 radial-gradient 疊加在同一 background 屬性上。
2. 為避免硬边界，透明過渡区要足夠广。
3. 可額外加一层微弱噪點或細顆粒紋理，減少色帶分段感。

【交互与动效】
1. 静態版
   - 只需固定漸变位置，保證颜色分佈与示例近似即可。
2. 動態版（可選）
   - 使用背景位置或 transform 緩慢改变部分漸变中心位置，週期 12–20 秒，營造緩慢流動感。

【输出要求】
- 使用语义化 HTML 將背景容器与內容容器分開（例如 wrapper + main）。
- 使用 TailwindCSS 风格原子类控制寬度、對齊与內外边距；漸变可在自定義类或 style 樣式中實作。
- 生成界面必須保留「深色底 + 多點彩色网格漸变 + 置於其上的清晰前景內容」這一关鍵特徵。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a Mesh Gradient style background that looks very close to the current “Mesh Gradient” demo.
Keep the multi-point radial gradients, dark base color and soft color blending. You may adjust color values and minor layout details, but you should not change the overall pattern of “large mesh gradient backdrop with clear foreground content”. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Hero background for marketing landing pages
- Background for design tools, inspiration walls or portfolio covers
- Interfaces that need strong color atmosphere while keeping content readable

[Layout structure]
1. Background layer
   - Use a full-width mesh-gradient background that occupies most of the viewport.
   - Place content (headline, copy, buttons or cards) in a foreground container on top.
2. Content layer
   - Constrain foreground width (for example max-w-xl / max-w-2xl) and center or slightly raise it.
   - Use solid, high-contrast colors for text and buttons so they stand out from the gradient.

[Color and materials]
1. Gradient points
   - Place 3–5 main radial gradient centers around corners and edges (top-left, top-right, bottom-right, bottom-left, center).
   - Use complementary but vivid hues (blue-purple, pink, teal, etc.).
2. Base color
   - Apply a dark base such as #0f0f23 so gradients pop without being harsh.
3. Transitions
   - Each radial gradient should fade from solid color at the center to transparent over roughly 40–60% of the viewport width.

[Mesh gradient implementation]
1. Stack multiple radial-gradients in a single background property.
2. Ensure broad transparent falloff zones to avoid hard edges.
3. Optionally add subtle noise or grain on top to reduce banding.

[Interaction and motion]
1. Static variant
   - Keep gradient centers fixed, matching the demo’s distribution as closely as possible.
2. Animated variant (optional)
   - Slowly shift some gradient centers using background-position or transforms over 12–20 second cycles to create a gentle flow.

[Output requirements]
- Use semantic HTML to separate the background wrapper from the content container.
- Use Tailwind-style utilities for width, alignment and spacing; implement gradient details in custom classes or inline styles.
- The generated UI must preserve the key feel of “dark base + multi-point colorful mesh gradient + clear foreground content on top”.`
  },

  demoHTML,
  customStyles,
};

export default meshGradient;
