// Single template module: Translucent — Glassmorphism
// 玻璃态设计 - 半透明玻璃质感的现代设计风格

import { demoHTML, customStyles } from './Demo';
import { glassmorphismFullPageHTML , glassmorphismFullPageStyles } from './GlassmorphismFullPage';
import { landingFullPage } from './LandingFullPage';
import { glassmorphismStylePrompt } from './stylePrompt';
import { glassmorphismCustomPrompt } from './customPrompt';
import { landingPageCustomPrompt } from './LandingPagePrompt';
import { musicPlayerCustomPrompt } from './MusicPlayerPrompt';

export const glassmorphism = {
   id: 'visual-glassmorphism',
   title: 'styles.visual.glassmorphism.title',
   description: 'styles.visual.glassmorphism.description',
   demoHTML: demoHTML,
   customStyles: customStyles,

   // ✨ 两个预览变体：Landing Page (企业网站) + Music Player (音乐播放器)
   // 每个预览都有各自独特的 customPrompt（符合文档规范）
   previews: [
     {
       id: 'glassmorphism-landing',
       name: { 'zh-CN': '企业网站', 'en-US': 'Landing Page' },
       description: { 'zh-CN': '玻璃态企业着陆页，展示专业商业场景应用', 'en-US': 'Glassmorphism corporate landing page showcasing professional business scenarios' },
       type: 'full',
       html: landingFullPage.fullPageHTML,
       styles: landingFullPage.fullPageStyles,
       customPrompt: landingPageCustomPrompt  // 企业网站专属 Prompt
     },
     {
       id: 'glassmorphism-music',
       name: { 'zh-CN': '音乐播放器', 'en-US': 'Music Player' },
       description: { 'zh-CN': '玻璃态音乐播放器，展示丰富交互组件和动画效果', 'en-US': 'Glassmorphism music player showcasing rich interactive components and animations' },
       type: 'full',
       html: glassmorphismFullPageHTML,
       styles: glassmorphismFullPageStyles,
       customPrompt: musicPlayerCustomPrompt  // 音乐播放器专属 Prompt
     }
   ],

  // ✨ 模板級 customPrompt（增強版 4000+ 字詳細指南）
  customPrompt: glassmorphismCustomPrompt,

  // ✨ 風格 Prompt（場景描述敘事版）
  stylePrompt: glassmorphismStylePrompt,

  // ⚠️ DEPRECATED: 以下為舊版 customPrompt，已由 customPrompt.js 取代
  _deprecated_customPrompt_old: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Glassmorphism 玻璃态卡片」示例风格高度接近的界面。
要求：保持半透明玻璃卡片、背景模糊、柔和圓角与淡阴影，只允许替换文案、圖标与卡片內容，不改变整体「深色/漸变背景 + 浮起玻璃卡片」布局。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- SaaS 儀表板卡片、设定面板、狀態概覽卡
- Landing Page Hero 区中的資訊卡片
- 需要同時表現現代感与輕盈质感的 UI 区塊

【整体布局结构】
1. 背景层
   - 使用深色或彩色漸变背景（例如藍紫漸变），佔据整個視窗或主要区塊。
2. 卡片层
   - 在中間或略偏上的位置放置 1–3 張玻璃卡片，彼此間保持足夠間距。
   - 每張卡片內部包含标題、副标題、1–2 行描述文字，以及可選按鈕或狀態标籤。

【色彩与材质】
1. 卡片本体
   - 背景使用白色帶透明度的颜色（例如 rgba(255,255,255,0.08–0.15)）。
   - 可以略帶輕微的线性漸变，增加厚度感，但整体仍以半透明為主。
2. 背景
   - 建議使用偏深的漸变（藍紫、靛青、深藍），以提高玻璃边界的可見度。
3. 文字与圖标
   - 使用純白或非常淺的灰色文字，以確保在玻璃上仍有足夠對比度。

【光影与结构細節】
1. 模糊
   - 使用背景模糊（backdrop-filter: blur(10–24px)）让底层颜色在卡片內柔和混合。
2. 边框
   - 使用一條非常淡的白色半透明边框（如 rgba(255,255,255,0.2)）強化玻璃边界感。
3. 阴影
   - 採用低透明度的柔和阴影（例如 0 8px 32px rgba(0,0,0,0.25)）拉開卡片与背景距離。
4. 圓角
   - 建議 12–24px 的圓角，保持柔和感而不過於像膠囊按鈕。

【交互与动效】
1. Hover
   - 在 hover 時略微提高卡片背景透明度（更亮）並加強阴影，配合 150–250ms 過渡。
2. Active / Focus
   - 按鈕在按下或聚焦時可略微縮小（scale 0.97–0.98）並提高边框亮度。
3. 動画
   - 可以為整組卡片加入輕微的浮動或淡入效果，但節奏需柔和，避免破壞安静感。

【输出要求】
- 使用语义化 HTML 將背景容器与玻璃卡片容器分開（例如背景 div + main/section）。
- 使用 TailwindCSS 原子类控制 layout（flex/grid）、間距、圓角与阴影；玻璃效果可用自定義类加上 backdrop-filter 与透明背景。
- 生成的 UI 必須保留「深色/漸变背景 + 半透明模糊玻璃卡片 + 白色文字」這一关鍵結構与质感。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a glassmorphism card interface that looks very close to the current “Glassmorphism” demo.
Keep the semi-transparent glass cards, background blur, soft rounded corners and gentle shadows. You may change copy, icons and card content, but you should not change the overall pattern of “dark/gradient background with floating glass cards”. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Dashboard cards, settings panels, status overview tiles
- Hero section info cards on marketing landing pages
- UI blocks that need a modern, lightweight glass look

[Layout structure]
1. Background layer
   - Use a dark or colorful gradient background (for example blue-purple) across the viewport or main section.
2. Card layer
   - Place 1–3 glass cards in the center or slightly above center with comfortable spacing.
   - Each card contains a title, subtitle, one or two lines of description and optional buttons or status chips.

[Color and materials]
1. Card body
   - Use white with alpha for card backgrounds (e.g. rgba(255,255,255,0.08–0.15)).
   - Optional subtle linear gradient can add thickness but transparency should remain dominant.
2. Background
   - Prefer darker gradients (blue-purple, indigo, deep blue) to highlight card edges.
3. Text and icons
   - Use pure white or very light greys to ensure good contrast on glass.

[Light and structure details]
1. Blur
   - Apply background blur (backdrop-filter: blur(10–24px)) so underlying colors softly blend through the card.
2. Border
   - Add a very light white translucent border (e.g. rgba(255,255,255,0.2)) for edge definition.
3. Shadow
   - Use soft, low-opacity shadows (for example 0 8px 32px rgba(0,0,0,0.25)) to lift cards from the background.
4. Corners
   - Use 12–24px radius for a soft but not pill-like shape.

[Interaction and motion]
1. Hover
   - On hover, slightly increase background brightness and shadow strength with 150–250ms transitions.
2. Active / focus
   - Buttons may scale down slightly (0.97–0.98) and strengthen their border when pressed or focused.
3. Motion
   - Optional gentle float or fade-in for the card group; keep timing soft to preserve a calm feel.

[Output requirements]
- Use semantic HTML to separate background wrapper and the glass card container (e.g. background div + main/section).
- Use Tailwind-style utilities for layout (flex/grid), spacing, radii and shadows; implement glass effects with custom classes using backdrop-filter and translucent backgrounds.
- The generated UI must preserve the key structure and feel: “dark/gradient backdrop + semi-transparent blurred glass cards + white text”.`
  }
}

export default glassmorphism;
