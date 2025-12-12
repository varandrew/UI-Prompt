// Visual — Soft UI (Neumorphism) (uses full page via preview loader)

export const visualSoftUI = {
  id: 'visual-soft-ui',
  title: 'styles.visual.softUI.title',
  description: 'styles.visual.softUI.description',

  // CustomPrompt：給 LLM 的完整生成指令（Soft UI / Neumorphism 儀表盤）
  customPrompt: {
    'zh-CN': `
你现在是一名擅长 Soft UI / Neumorphism 风格的资深 UI 设计师兼前端工程师，需要为一个新的「Soft UI 控制台」编写一段可以直接复制给 LLM 使用的完整 Prompt。

目标：在不复制现有 Demo 文案和业务内容的前提下，让 LLM 生成一个与当前 Soft UI 全页预览（light/dark）在风格上高度一致的仪表盘界面。这个界面必须让人一眼看出是同一体系的 Soft UI：柔和圆角、外凸与内凹阴影、略带磨砂的背景、克制的色彩和舒适的层次。

【整体风格约束】
- 全局采用 Soft UI / Neumorphism 语言：卡片和按钮看起来像从背景表面「压出」或「浮起」，而不是传统的纯扁平或高对比玻璃态。
- 使用圆角较大的组件（如 rounded-2xl / rounded-3xl），阴影柔和、模糊半径大、透明度低，不允许出现生硬和锐利的阴影。
- 颜色体系以低饱和的浅色背景 + 深浅灰度文本为主，可以搭配少量主色（例如柔和的蓝色或紫色），但主色也必须偏柔和，不要霓虹。
- 所有边角和分割线尽量避免纯黑边框，改用「亮边 + 暗边」的光影组合表达层次。

【页面场景设定】
- 新页面的名字可以是 “Soft Studio Dashboard” 或类似的创意工作台，面向设计师、产品人或创作者。
- 用户在这里浏览今日任务、正在进行的项目、简单的统计数据、快速操作区和一个轻量消息/活动流。
- 界面必须支持长时间使用，视觉氛围偏「安静、温和、细腻」，而不是强烈刺激或高对比。

【布局结构要求】
1. 顶部导航栏（Top Bar）
   - 使用浅色背景（例如 #e5ecf5 / #e2e8f0 / #1f2937 的极浅版本）并应用轻微内凹或外凸效果。
   - 左侧放置品牌标识（圆角矩形 + 内阴影 + 简洁图形），右侧放导航链接和用户区（头像 + 名称 + 状态）。
   - 导航项之间用适度间距和浅色分隔符区分，不使用粗边框或强烈下划线。

2. 主内容区域（Main Content）
   - 页面主体使用 max-w-6xl 或 max-w-7xl 水平居中，保持左右留白。
   - 上方区域：一块主控卡片，显示欢迎文案、当前日期/时间、一个主要 CTA 按钮和少量统计信息。
   - 中部区域：2～3 列卡片网格，包含：
     - 项目概览卡片（项目数量、完成率、小型进度条）。
     - 模块化统计卡片（如「本周完成」「待处理请求」等）。
     - 快速操作卡片（创建新项目、打开模板库等）。
   - 下方区域：左右两列布局，左列为任务列表或时间线，右列为活动流或提醒列表，卡片之间使用 consistent gap-6 / gap-8。

3. 侧边/辅助区域（可选）
   - 可以在右侧或底部增加一个窄区域，用 Soft UI 卡片呈现简化日历、番茄钟、状态指示器或主题切换组件。

【色彩与背景】
1. Light 模式建议
   - 背景颜色使用接近 iOS 风格的淡灰或淡蓝灰，如 #e5ecf5、#e2e8f0、#edf2f7 等，配合渐变（from-slate-50 via-slate-100 to-slate-200）。
   - 卡片底色略浅于背景或稍微更亮，例如 #f5f7fb、#f9fafb，通过阴影凸显层次而非靠深色块。
   - 主色可以选用柔和蓝（#4f46e5、#6366f1 的低透明版本）或淡紫（#a855f7 的淡色），用在按钮填充或图标背景。

2. Dark 模式延伸（可选说明）
   - 使用偏蓝灰的深色背景，如 #0f172a、#111827、#1f2933，卡片则使用略浅的板岩灰。
   - 阴影需重新调整：外凸效果通过浅色高光边 + 深色内阴影表达，而不是纯黑阴影。

【Soft UI 阴影与边框设计】
- 对于「外凸」卡片：
  - 使用双向阴影：一侧为深色阴影（如 rgba(15,23,42,0.35)），另一侧为浅色高光（如 rgba(255,255,255,0.9)）。
  - Tailwind 示例可组合：shadow-[8px_8px_24px_rgba(15,23,42,0.25)] 与伪元素/边框模拟高光。
- 对于「内凹」元素（如开关、输入框、数值槽）：
  - 内部使用 inset 阴影：inset 3px 3px 6px rgba(15,23,42,0.25), inset -3px -3px 6px rgba(255,255,255,0.8)。
  - 圆角较大（rounded-full 或 rounded-2xl），让内凹效果更柔软。
- 任何阴影变化都要细腻：避免过于浓重的黑色阴影（如 rgba(0,0,0,0.7)），而应使用偏蓝灰或偏暖灰。

【交互与动效】
- Hover 状态：
  - 卡片在 hover 时可以稍微抬高（translate-y-[-2px] / scale-105），阴影变得稍强，但不要出现生硬的跳动。
  - 按钮 hover 时使用亮度提升和轻微阴影变化，而不是改变色相。
- Active 状态：
  - 按钮按下时可模拟内凹：shadow 减弱并加入少量 inset 阴影，整体略微下沉 1～2px。
- Transition 设计：
  - 统一使用 200～250ms 的过渡时间，easing 使用 ease-out 或 ease-in-out。
  - 禁止使用巨大旋转、弹簧动画等破坏 Soft UI 气质的動效。

【排版与圖标】
- 字体選擇：
  - 使用現代無襯线字体作為基礎，例如系統預设或 Tailwind 默認（Inter 类），透過不同字重營造层次。
  - 标題（如 h1/h2）字重可用 700–800，文字颜色用深灰（#111827 / #0f172a），正文用中灰（#4b5563 / #6b7280）。
- 圖标風格：
  - 圖标本身保持线性或半填充樣式，配合柔和漸变或 Soft UI icon 容器（圓形/圓角矩形背景 + 双向阴影）。

【輸出技術要求】
- 使用完整 HTML 結構（<header>、<nav>、<main>、<section>、<aside>、<footer>），並用 TailwindCSS 風格原子类控制佈局和間距（如 flex、grid、gap-6、px-6、py-4、rounded-3xl、shadow-*、bg-slate-*、text-slate-*）。
- 不輸出解說文字或註釋，只輸出最終 HTML。
- 結構上必須包含：頂部导航、Hero 区、統計卡片网格、主內容 + 側欄、（可選）底部区域。
- 視覺上必須清晰傳達 Soft UI / Neumorphism 特色：柔和圓角、內外阴影、低飽和度背景、細膩光影，而不是單純平面扁平化卡片。
`,
    'en-US': `
You are a senior UI designer and front-end engineer specializing in Soft UI / Neumorphism. Your task is to write a complete, copy-paste-ready instruction for an LLM to generate a full-page Soft UI dashboard.

Goal: Produce a new dashboard page that clearly looks like a sibling of the existing Soft UI previews (light and dark variants). The layout, colors, shadows, and overall atmosphere should all communicate Soft UI: soft rounded corners, subtle extruded surfaces, gentle gradients, and calm, low-saturation tones.

[Global Style Constraints]
- The entire interface uses Neumorphic surfaces: cards and controls appear to be molded from the same base material as the background, either pressed in or raised out.
- Corners are generous (rounded-2xl / rounded-3xl), and shadows are soft with large blur radii and low opacity.
- The color palette is built from light grays and tinted neutrals for backgrounds, with deep gray text and a single soft accent color (blue or purple) for emphasis.
- Edges and separations rely more on paired light/dark shadows than on hard black borders.

[Scenario]
- The page is a “Soft Studio Dashboard” for a creative or product team.
- Users arrive here to monitor key metrics, review current projects, see a list of tasks, and access quick shortcuts.
- The mood is calm, polished, and slightly tactile—more like a modern mobile OS home screen than a dense admin panel.

[Layout]
1. Top Navigation
   - A sticky bar with a light, slightly textured background and minimal elevation.
   - Left: compact logo inside a Soft UI icon container (rounded shape with inner or outer shadow) plus product name.
   - Center: navigation links spaced evenly, using medium-weight typography.
   - Right: notification icon and user profile summary in a small Soft UI pill or rounded container.

2. Hero
   - A prominent Soft UI card near the top acting as a welcome and primary call-to-action area.
   - Contains a strong headline, a short description, and two buttons:
     - Primary: filled pill with accent color and Soft UI shadow.
     - Secondary: outlined or ghost-style Soft UI button.

3. Statistics Grid
   - 3–4 cards in a responsive grid, each a Soft UI tile with icon, metric, and label.
   - Icons sit inside circular or rounded rectangles with inner shadows, suggesting pressed-in controls.

4. Main Content & Sidebar
   - Two-column layout on larger screens, collapsing to a single column on mobile.
   - Main column: project list, kanban-style overview, or timeline.
   - Sidebar: small Soft UI widgets such as a mini calendar, quick actions, or a simple focus timer.

5. Footer (optional)
   - A simple, low-contrast footer with a very light top border shadow and small, muted text.

[Color & Shadows]
- Suggest a grayscale and accent palette (light slates and neutrals, plus one accent) and clearly state that saturation should remain moderate.
- Describe typical outer shadow combinations (e.g., dark shadow bottom-right, light highlight top-left) and typical inner shadow combinations for pressed controls.
- Stress that shadows should feel soft and pillow-like, not harsh or photographic.

[Typography]
- Use a modern sans-serif type system with clear hierarchy: bold, large headings; regular-weight body text; smaller, muted labels.
- Align text left in most content areas to keep the design feeling grounded and functional.

[Interaction & Motion]
- Hover: slight scale-up, position shift, or shadow strengthening—no large rotations or color flashes.
- Active: slight inset motion and reduced outer shadow to simulate pressing into a soft surface.
- Motion timing: 180–240ms with ease-out or ease-in-out curves; no bouncy elastic effects.

[Output Requirements]
- Output only HTML with TailwindCSS-style utility classes for layout and Soft UI styling (e.g., flex, grid, gap-6, rounded-3xl, shadow-*, bg-slate-*, text-slate-*).
- Do not output commentary or explanations.
- The final result must be a complete, self-contained page with navigation, hero, metrics, main content, and secondary panels, and it must immediately read as a Soft UI / Neumorphism interface.
`,
  },

  // StylePrompt：Soft UI 设計理念 & 氛圍說明
  stylePrompt: {
    'zh-CN': `
角色设定：
你是一位专注 Soft UI / Neumorphism 的界面设计师。你的任务是用光影和圆角，让界面看起来像由一整块柔软材质雕刻出来，而不是由一堆平面矩形拼接而成。

场景定位：
Soft UI 适合用在需要「高级但不咄咄逼人」的产品中：现代 SaaS 控制台、个人效率工具、创意工作台、设置中心、音乐或健康类应用等。用户希望界面具有现代感与品质感，但又不想被尖锐的对比和强烈的视觉噪音打扰。

视觉设计理念：
Soft UI 的核心在于「统一材质上的浮雕」。我们假设整个界面是一块柔软的、略带磨砂的表面：背景、卡片、按钮和输入框实际上是一体的，只是通过内凹、外凸、光影变化来暗示不同层级和可交互性。颜色不需要复杂——一个基础底色加上几层明暗变化即可；真正重要的是阴影的方向、强度和半径，以及圆角的大小和连续性。

材质与质感：
背景通常是非常浅的灰蓝、灰白或暖灰，带有很轻的渐变或颗粒，营造「细腻的塑料/橡膠」质感。卡片不應該看起來像貼在背景上，而是像从背景表面「鼓起」來；開关、按鈕或輸入框則像被「壓」進去。外阴影与內阴影同時存在：一側是柔和的深色阴影，另一側是細膩的高光，让元素既有厚度又不显沉重。

排版与佈局：
在 Soft UI 中，排版依然要遵守現代介面的通用原則：清晰的标題层級、舒適的行距、充足的留白。不同的是，边界感更多來自光影而不是銳利的线條。你會減少使用實线分隔，改用区塊之間的間距、阴影差異、背景明暗变化來分組。例如，一組相关卡片可以共用一塊略深的背景区域，再在其上做淺浮雕式的卡片，製造次級层次。

交互体驗：
Soft UI 的交互應該像在觸摸柔软材质：懸停時元素輕微抬起或变亮，按下時則微微內凹、阴影縮小。這些变化幅度要小而精準，让使用者感受到回饋，但不會被誇張動画打斷思路。焦點狀態可以透過內阴影和高光边框來表現，而不是把边框变成鮮豔的實线。整体節奏是順滑的、漸進的，而不是硬切和閃動。

氛圍營造：
好的 Soft UI 让人联想到現代作業系統的设定面板或高級家電的觸控介面：柔和、安静、具备高质感。界面看起來「有溫度」但不幼稚，「有科技感」但不冷酷。長時間停留在這樣的界面里，不會因為高對比色彩或尖銳边緣而感到疲勞。所有设計決策——色彩、阴影、圓角、字体——都應圍繞這種舒適、稳定的氛圍展開。
`,
    'en-US': `
Role:
You are a UI designer focused on Soft UI / Neumorphism. Your goal is to make interfaces feel like they are sculpted from a single soft material rather than assembled from flat rectangles.

Context:
Soft UI works well for products that want to feel premium and modern without being aggressive: SaaS dashboards, settings centers, personal productivity tools, creative workspaces, and lifestyle apps. Users should sense quality and care, but never feel visually overwhelmed.

Visual Concept:
The core idea is “relief on a single surface”. The background, cards, buttons, and inputs all share the same base material; only light and shadow distinguish their height and affordance. Colors stay simple and subdued so that depth and shape do most of the work. Well-tuned highlights and shadows around rounded edges create the impression of soft plastic, rubber, or frosted glass.

Material & Texture:
Backgrounds are light, slightly tinted neutrals, sometimes with a gentle gradient. Raised elements have paired shadows—darker on one side, lighter on the opposite—while pressed elements invert this relationship. Everything feels cushioned rather than metallic. Noise and texture, if present, are minimal and never distract from the core content.

Typography & Layout:
Typography follows modern UI best practices: clear hierarchy, comfortable line heights, and generous spacing. However, strict dividing lines and boxes are replaced by grouping through spacing and elevation. Sections may be indicated by lightly recessed containers or softly raised tiles, creating a sense of order without hard borders. The layout should feel balanced and breathable, as if each block of content has room to float.

Interaction:
Interactions should respect the material metaphor. Hover states gently lift or brighten elements; active states subtly press them inward. Focus rings can be expressed as glowing highlights or inner shadows rather than bright, hard outlines. Animations are smooth and understated, supporting the illusion of a responsive, soft surface.

Mood:
Overall, a Soft UI interface should convey quiet confidence and comfort. It should feel like something you can touch—inviting but controlled, friendly but professional. When extending this style to new screens, always ask whether the result still feels like part of the same soft, cohesive environment rather than a patchwork of different visual languages.
`,
  },

  demoHTML: `
    <div class="soft-card">
      <div class="soft-circle"></div>
      <div class="soft-label">Soft UI</div>
    </div>
  `,

  customStyles: `
    .soft-card { background:#e0e0e0; border:2px solid #d0d0d0; padding:16px; border-radius:12px; text-align:center; }
    .soft-circle { width:54px; height:54px; margin:0 auto 8px; border-radius:50%; background:#e0e0e0; border:1px solid #c0c0c0; box-shadow: 8px 8px 16px rgba(163,177,198,.6), -8px -8px 16px rgba(255,255,255,.8); }
    .soft-label { font-size:12px; color:#374151; }
  `,

  // Prefer light soft-ui variant as default
  fullPagePreviewId: 'soft-ui-light',
}
