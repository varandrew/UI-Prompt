// Single template module: Light — Glow Effect
// 发光效果 - 外发光边框和阴影

import { demoHTML, customStyles } from './Demo';

export const glow = {
  id: 'visual-light-glow',
  title: 'styles.visual.glow.title',
  description: 'styles.visual.glow.description',

  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Glow 发光按钮 / 卡片」示例风格高度接近的界面元素。
要求：保持深色背景上的多层外發光阴影、輕微脈動動画和懸停時發光增強，只允许替换文案与颜色，不改变整体按鈕大小、形狀与光暈层級。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 登陆页主行動按鈕（CTA）
- 特別提示卡片、強調模組（如「升級方案」、「立即試用」）
- 科幻或遊戲風格介面中的重要交互點

【整体布局结构】
1. 背景层
   - 使用深色純色或深色漸变背景，以凸显光暈效果。
2. 內容元素
   - 發光元素本身可以是按鈕、标籤或卡片，位於視覺焦點位置（例如 Hero 区中央）。
   - 元素內部包含简潔文字（1–2 行）与可選圖标。

【色彩与光影】
1. 颜色選擇
   - 使用高飽和色作為主色（如藍、紫、橙），並以不同透明度建立多层發光。
2. 阴影层級
   - 使用 3–4 层 box-shadow，由內到外逐漸擴散、透明度遞減，營造柔和發光圈。

【交互与动效】
1. 静態狀態
   - 按鈕有明显但不刺眼的外光暈，文字清晰可讀。
2. 脈動動画
   - 透過調整阴影半徑与透明度，让光暈在 2–3 秒週期內輕微呼吸。
3. 懸停狀態
   - Hover 時增加阴影半徑与不透明度，並可略微上移按鈕（translateY）。

【输出要求】
- 使用语义化 HTML 表示按鈕或卡片元素（例如 <button> 或 <a>）。
- 使用 TailwindCSS 原子类设定颜色、內边距、圓角与字体，外發光效果由自定義类中的 box-shadow 實現。
- 生成元素必須保留「深色背景 + 多层外發光阴影 + 輕微脈動 + 懸停增亮」這些关鍵特徵。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a glow effect button or card that looks very close to the current “Glow” demo.
Keep the multi-layer outer glow shadows on a dark background, subtle pulsing animation and stronger glow on hover. You may change copy and colors, but you should not change the basic size, shape or glow layering of the element. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Primary call-to-action buttons on landing pages
- Highlight cards or special modules (e.g., “Upgrade plan”, “Start trial”)
- Key interaction points in sci-fi or game-inspired interfaces

[Layout structure]
1. Background layer
   - Use a dark solid or gradient background so the glow stands out clearly.
2. Foreground element
   - The glowing element is a button, tag or card placed near the visual focus (for example, center of the hero section).
   - It contains short text (1–2 lines) and optionally an icon.

[Color and glow]
1. Color choice
   - Choose a saturated base color (blue, purple, orange, etc.) and build multiple glow layers with decreasing opacity.
2. Shadow layers
   - Use 3–4 box-shadow layers, expanding in radius and fading in opacity from inner to outer rings.

[Interaction and motion]
1. Idle state
   - Button has a noticeable but not blinding glow, with clear readable text.
2. Pulse animation
   - Animate glow radius and opacity over a 2–3 second cycle to create a gentle breathing effect.
3. Hover state
   - On hover, increase shadow radius and opacity and optionally lift the element slightly with translateY.

[Output requirements]
- Use semantic HTML for the interactive element (<button> or <a>).
- Use Tailwind-style utilities for color, padding, radius and typography; implement glow via custom classes with multi-layer box-shadow.
- The generated element must keep the key traits: “dark background + multi-layer outer glow + soft pulse + stronger hover glow”.`
  },

  demoHTML,
  customStyles,
};

export default glow;
