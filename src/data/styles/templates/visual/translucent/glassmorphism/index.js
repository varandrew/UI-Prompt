// Single template module: Translucent — Glassmorphism
// 玻璃态设计 - 半透明玻璃质感的现代设计风格

import { demoHTML, customStyles } from './Demo';
import { glassmorphismFullPageHTML } from './GlassmorphismFullPage';
import { glassmorphismFullPageStyles } from './GlassmorphismFullPage';

export const glassmorphism = {
   id: 'visual-translucent-glassmorphism',
   title: 'styles.visual.glassmorphism.title',
   description: 'styles.visual.glassmorphism.description',
   demoHTML: demoHTML,
   customStyles: customStyles,
   fullPagePreviewId: 'glassmorphism',
  // ✨ 模板級 customPrompt（長版 Prompt，可直接給 LLM 高精度復刻 UI）
  customPrompt: {
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
  },

  // ✨ 风格 Prompt（用于 PreviewModal 详细场景描述：敘事長版）
  stylePrompt: {
    'zh-CN': `角色：你是一名擅长玻璃态（Glassmorphism）与半透明界面的 UI 设计师，需要为系统控制面板、云服务仪表盘或文件管理工具设计一套「漂浮在模糊背景之上」的现代界面。

场景定位：
这种风格适合需要在保留科技感的前提下保持轻盈、通透的产品：例如云桌面、设置面板、音乐播放器、个人空间主页或多服务总览仪表盘。目标用户往往对视觉敏感、熟悉现代操作系统（如 Windows / macOS / 移动端玻璃态组件），希望界面既有层次感又不压迫。

视觉设计理念：
Glassmorphism 的核心是「前景半透明卡片 + 背景高斯模糊 + 柔和高光描边」。界面被划分为两层世界：背景层提供丰富但柔和的色彩与渐变，前景层是略带磨砂感的玻璃卡片，悬浮在背景之上；卡片内承载标题、状态和操作按钮。与传统扁平或纯拟物不同，这种风格刻意让背景隐约透出，但不会影响前景文本可读性——内容永远优先，视觉效果为其服务。

材质与质感：
材质上，卡片被视为一块半透明玻璃：内部颜色偏向白色 / 浅色，透明度在 0.05–0.2 之间，通过 backdrop-filter: blur(10-24px) 模糊背景细节；边缘使用略亮的白色边框或渐变描边，模拟光线在玻璃边缘折射的感觉。阴影柔和而扩散，用来营造悬浮感而不是厚重的体积感。背景则以暗色或高饱和渐变为主（蓝紫、靛青、深蓝等），让玻璃卡片的轮廓和高光更明显，同时可叠加若干圆形光斑或模糊色块，制造「远处光源」的空间感。

交互体验：
交互反馈应该是轻盈而有质感的。卡片在 hover 时可以略微提亮背景色、增强边缘高光、增加阴影深度并微微上移 2–4px，好像玻璃被轻轻抬起；按钮在悬停时透明度略微提升、边框更亮，按下时轻微缩放（例如 scale 0.98）并收紧阴影，像手指压在玻璃表面。输入框聚焦时可加强边框亮度和外圈光晕，但要避免强烈色块对比，整体仍以透明感为主。动画节奏建议在 150–300ms 之间，使用平滑的 ease-out 曲线，让每一次状态变化显得柔和而自然。

整体氛围：
Glassmorphism 家族营造的是一种「现代、干净、略带未来感」的数位面板气质，让人联想到操作系统的小组件、云平台控制台或高端车载系统：界面元素像玻璃牌悬浮在彩色雾气与灯光之上。用户进入页面时不会被复杂纹理压迫，而是感到视觉轻盈、层次清楚；在长时间使用下，半透明卡片与柔和背景可以提供足够变化，又不会像纯白界面那样单调。最终目标是让这套玻璃态界面成为产品的「高级皮肤」——既富有质感，又不过度抢戏，让功能与内容在光影之中被温柔承托。`,
    'en-US': `Role: You are a UI designer who specialises in glassmorphism and translucent interfaces, designing a modern dashboard that feels like floating glass panels above a blurred, colorful backdrop.

Scene Positioning:
This style fits products that want to feel modern, airy and slightly futuristic: cloud consoles, settings panels, media players, profile hubs or multi-service overview dashboards. Typical users are visually sensitive and familiar with contemporary OS UIs (Windows/macOS/iOS/Android glass surfaces); they expect clear structure and a sense of depth without visual heaviness.

Visual Design Philosophy:
Glassmorphism revolves around “semi-transparent foreground cards + background blur + soft edge highlights.” The interface is split into two worlds: a rich, softly blurred background that provides color and atmosphere, and a foreground layer of frosted glass cards carrying titles, metrics and actions. Unlike flat or heavy skeuomorphic styles, glassmorphism intentionally lets background colors and shapes shine through—but always in a way that preserves text legibility. Content clarity comes first; the glass effect is there to support it, not to compete with it.

Materials & Textures:
Cards are treated as translucent glass surfaces. Their fills are light (often white or very pale hues) with opacity around 0.05–0.2, combined with backdrop-filter: blur(10–24px) to soften everything beneath. Edges use slightly brighter strokes or gradient borders to mimic light refracting along glass edges. Shadows are soft and wide, giving a sense of elevation rather than weight. Backgrounds tend to be dark or high‑saturation gradients in blue, purple, indigo or deep navy, occasionally layered with blurred circular blobs or light spots to suggest distant light sources and depth.

Interaction Experience:
Interactions should feel light yet tactile. On hover, cards can brighten a bit, strengthen their edge highlights, deepen shadows and lift slightly (2–4px), as if glass panels are being raised toward the user. Buttons respond with subtle opacity shifts, crisper borders and a small press‑down scale (e.g. 0.98) on active state, like a fingertip pushing on glass. Focused inputs may gain a brighter border and soft glow while still respecting the transparent visual language—avoid heavy solid fills that break the glass illusion. Animation timings around 150–300ms with smooth ease‑out curves keep motion gentle and calm.

Overall Mood:
The glassmorphism family should feel like a refined, system-level skin: clean, contemporary and slightly futuristic, reminiscent of OS widgets, cloud control panels or premium in‑car interfaces. Elements appear to float in a mist of color and light, creating depth without chaos. Users should sense that the UI is sophisticated yet non‑intrusive: they can focus on their tasks while enjoying a quiet sense of polish and atmosphere. In the best case, this glass surface becomes the product’s “luxury finish”—visually rich, but always in service of clarity and usability.`}
  }

export default glassmorphism;
