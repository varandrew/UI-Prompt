// Single template module: Nature — Liquid Motion
// 液体流动 - Digital Ocean Dashboard Theme

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './LiquidFullPage';

export const liquid = {
  id: 'visual-nature-liquid',
  title: 'styles.visual.liquid.title',
  description: 'styles.visual.liquid.description',

  customPrompt: {
    'zh-CN': `
你现在是一名非常熟悉「Liquid Motion 深海科技仪表盘」风格的资深 UI 设计师兼前端工程师，需要为一个全新页面生成一套与当前预览 /styles/preview/visual-nature-liquid（LiquidFullPage）高度一致的 UI。

你的目标：在不复制现有文案和具体数据的前提下，编写一段可直接给 LLM 使用的完整指令，让它生成一个「一眼看上去就是同一套 Liquid Ocean Dashboard 系统」的全屏 HTML 页面。必须严格复刻当前模板的核心特征：多层背景液体动画（深层/中层/表层 blob）、上升气泡、发光浮游生物、玻璃态信息卡片、液体进度条与发光按钮交互，只替换品牌名称、模块文案和数据内容。

【使用场景设定】
- 页面类型：深海观测 / 海洋数据监控仪表盘（Ocean Observation / Ocean Analytics Dashboard）。
- 用户对象：海洋科学家、数据分析师、环境监测团队、科研单位或从事海洋业务的企业团队。
- 目标：在一个沉浸式深海场景中浏览关键指标（深度剖面、物种活动、流速、盐度等），同时保持极高的信息可读性与高科技感。

【整体布局结构（请生成完整 HTML 结构）】
1. 外层容器
  - 使用一个顶层容器（例如 class="liquid-page"）包裹整页内容：
    - 设置 min-height: 100vh；
    - 背景为垂直渐变（如 #020617 → #0a192f → #112240），模拟深海由表层到深层的光线变化；
    - position: relative；overflow-x: hidden，便于放置绝对定位的背景动画层。

2. 背景动画层（必须包含至少 5 个层级）
  - LAYER 1：深层洋流 blob（Deep Ocean Current）
    - 对应类：.ocean-blob-deep.ocean-blob-deep-1、.ocean-blob-deep.ocean-blob-deep-2
    - 它们是大尺寸、有机形态的线性渐变 blob，周期较长（~30s），缓慢漂移。
    - 关键动画示例：
      \`\`\`css
      @keyframes deepOceanCurrent {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg) scale(1);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
        20% {
          transform: translate(150px, -100px) rotate(72deg) scale(1.3);
          border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%;
        }
        40% {
          transform: translate(-80px, 120px) rotate(144deg) scale(0.8);
          border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%;
        }
        60% {
          transform: translate(200px, 80px) rotate(216deg) scale(1.2);
          border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%;
        }
        80% {
          transform: translate(-120px, -60px) rotate(288deg) scale(0.9);
          border-radius: 50% 50% 60% 40% / 55% 45% 55% 45%;
        }
      }

      .ocean-blob-deep {
        position: fixed;
        width: 520px;
        height: 520px;
        background: radial-gradient(circle, rgba(0, 229, 255, 0.45), transparent 70%);
        filter: blur(40px);
        opacity: 0.55;
        animation: deepOceanCurrent 30s ease-in-out infinite;
        will-change: transform, border-radius;
        pointer-events: none;
        z-index: 0;
      }
      \`\`\`
    - 通过不同的「top/left」和「animation-delay」创建两块缓慢漂移的深层光团。

  - LAYER 2：中层水体 blob（Mid-Layer Water Mass）
    - 至少 3 个中等尺寸 blob：.ocean-blob-mid-1/2/3，周期 ~20s；
    - 颜色偏青绿和蓝紫，滤镜模糊略小，位置覆盖中间区域；
    - 与深层动画类似，但位移与缩放幅度略小，使整体动感分层。

  - LAYER 3：表层浪涌 blob（Surface Surge）
    - 两个较小的 blob：.ocean-blob-surface-1/2，周期 ~12s；
    - 常见设置：靠近顶部或上半区，模拟表层水体的快速波动；
    - 可以在 keyframes 中增加更明显的 scale 与 translate，让表层动感更活跃。

  - LAYER 4：上升气泡（Rising Bubbles）
    - 使用多个带 CSS 变量的 .bubble 元素，从底部向上漂浮：
      \`\`\`html
      <div class="bubble"
           style="left: 5%; --bubble-size: 8px; --bubble-duration: 9s; --bubble-delay: 0s; --bubble-drift: 15px;"></div>
      \`\`\`
      \`\`\`css
      @keyframes bubbleRise {
        0%   { transform: translate3d(0, 0, 0); opacity: 0; }
        10%  { opacity: 0.9; }
        80%  { opacity: 0.9; }
        100% { transform: translate3d(var(--bubble-drift), -120vh, 0); opacity: 0; }
      }

      .bubble {
        position: fixed;
        bottom: -40px;
        width: var(--bubble-size);
        height: var(--bubble-size);
        border-radius: 999px;
        background: radial-gradient(circle, rgba(148, 163, 255, 0.9), rgba(59, 130, 246, 0.2));
        animation: bubbleRise var(--bubble-duration) linear infinite;
        animation-delay: var(--bubble-delay);
        opacity: 0;
        pointer-events: none;
        z-index: 1;
      }
      \`\`\`
    - 至少使用 20+ 个 .bubble，分布在不同的 left 位置和随机的 duration/delay/drift，避免同步上升。

  - LAYER 5：发光浮游生物（Bioluminescent Plankton）
    - 使用 .plankton 元素模拟漂浮的光点：
      \`\`\`css
      @keyframes planktonFlicker {
        0%, 100% { opacity: 0.2; transform: translate3d(0, 0, 0) scale(1); }
        40%      { opacity: 0.9; transform: translate3d(4px, -6px, 0) scale(1.2); }
        70%      { opacity: 0.5; transform: translate3d(-3px, 3px, 0) scale(0.9); }
      }

      .plankton {
        position: fixed;
        width: var(--plankton-size);
        height: var(--plankton-size);
        border-radius: 999px;
        background: radial-gradient(circle, rgba(125, 211, 252, 1), rgba(56, 189, 248, 0.1));
        animation: planktonFlicker var(--plankton-duration) ease-in-out infinite;
        animation-delay: var(--plankton-delay);
        pointer-events: none;
        z-index: 1;
      }
      \`\`\`
    - 通过 top/left 与 CSS 变量控制不同的光点位置、大小与节奏。

3. 内容层（Ocean Dashboard Content）
  - 内容容器（例如 .ocean-content）需设置较高 z-index（如 10），确保所有文本与卡片在 blob 层之上；
  - 布局结构建议如下：
    - 顶部：一组发光统计卡片（Stats Row），展示关键指标（深度、温度、流速、监测站数量）。
    - 中间：Hero 区域（.hero-section/.hero-card），包含大标题、副标题和两个主按钮。
    - 底部：两张或多张玻璃态信息卡（.info-cards-row），展示不同维度的详细数据（例如“Depth Profile”、“Species Activity”等）。

【玻璃态卡片与进度条】
1. 信息卡片（Glass Cards）
  - 使用 .glass-card 作为通用卡片样式：
    \`\`\`css
    .glass-card {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(16px);
      border-radius: 20px;
      border: 1px solid rgba(148, 163, 255, 0.3);
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.7);
      transition: all 0.35s ease;
    }

    .glass-card:hover {
      border-color: rgba(56, 189, 248, 0.7);
      box-shadow: 0 32px 90px rgba(15, 23, 42, 0.9);
      transform: translateY(-4px);
    }
    \`\`\`
  - 卡片内部包含：图标、标题、副标题、图表占位（渐变条状图）、发光标签（.glow-badge）等。

2. 液体进度条（Liquid Progress）
  - 使用线性渐变模拟“液体填充”的进度：
    \`\`\`css
    .liquid-progress {
      height: 8px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 4px;
      overflow: hidden;
    }

    .liquid-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #00e5ff, #64ffda);
      border-radius: 4px;
      animation: liquidFill 2s ease-out forwards;
    }

    @keyframes liquidFill {
      from { width: 0; }
    }
    \`\`\`

【按钮与交互效果】
- 主按钮使用渐变填充与波纹效果：
  \`\`\`css
  .liquid-button {
    position: relative;
    padding: 12px 32px;
    background: linear-gradient(135deg, #00e5ff, #64ffda);
    border-radius: 12px;
    border: none;
    color: #020617;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .liquid-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  .liquid-button:hover::before {
    width: 280px;
    height: 280px;
  }
  \`\`\`
- outline 版本（次级按钮）使用透明背景 + 青色描边，hover 时填充浅色并保留发光边缘。

【色彩体系（深海科技）】
- 背景主色：#020617, #0a192f, #112240；
- 高亮青绿：#00e5ff, #64ffda；
- 辅助紫色：#8b5cf6；
- 主文字：#e2e8f0 / #cbd5f5；
- 次要文字：rgba(226, 232, 240, 0.7) / #94a3b8。

【输出要求】
- 输出一个完整 HTML5 页面结构（至少包含 <header>、<main>、<section>、<footer>），布局与当前 LiquidFullPage 相同或高度相似：
  - 含多层背景动画节点（deep/mid/surface blobs、bubbles、plankton）；
  - 含顶部指标卡、居中 Hero 卡片、底部信息卡区域；
- 布局类名可采用 Tailwind 风格原子类（如 flex、grid、gap-8、max-w-5xl、mx-auto、px-6、py-10 等），但背景动画部分请保留明确的 class 名（如 .ocean-blob-deep、.bubble、.plankton、.glass-card、.liquid-button 等），以便复用 CSS。
- 不输出额外解释文字，只输出最终 HTML 结构代码。`,

    'en-US': `
You are a senior UI designer and front-end engineer who deeply understands the "Liquid Motion Deep Ocean Dashboard" style. Your job is to generate a brand new full-page HTML layout that looks like a sibling of the existing /styles/preview/visual-nature-liquid (LiquidFullPage) demo, without copying its text or exact data.

Your goal: provide a single, self-contained instruction that can be pasted into an LLM so it can generate a complete HTML page. The new page must preserve the same layered background animation system (deep/mid/surface blobs, rising bubbles, bioluminescent plankton), glassmorphism data cards, liquid progress bars, and glowing buttons, while changing scenario labels, metrics and copy.

[Scenario]
- Full-screen "Ocean Analytics Dashboard" for monitoring deep-ocean data:
  - Surface and deep-water temperatures, depth profiles, current dynamics, biodiversity activity;
  - Users are scientists, analysts, and technical teams who need both immersion and clarity;
  - The interface should feel like a live control center under the sea.

[Layout Structure]
1. Root container
  - A top-level wrapper (e.g. class="liquid-page") with:
    - min-height: 100vh;
    - background: vertical gradient from #020617 through #0a192f to #112240;
    - position: relative and overflow-x: hidden.

2. Background animation layers (at least 5 distinct layers)
  - LAYER 1 – Deep Ocean Current blobs:
    - Two large organic shapes: .ocean-blob-deep.ocean-blob-deep-1/2;
    - They slowly drift and morph over ~30s using complex border-radius + transform.
    - Example:
      \`\`\`css
      @keyframes deepOceanCurrent {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg) scale(1);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
        20% {
          transform: translate(150px, -100px) rotate(72deg) scale(1.3);
          border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%;
        }
        40% {
          transform: translate(-80px, 120px) rotate(144deg) scale(0.8);
          border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%;
        }
      }

      .ocean-blob-deep {
        position: fixed;
        width: 520px;
        height: 520px;
        background: radial-gradient(circle, rgba(0, 229, 255, 0.45), transparent 70%);
        filter: blur(40px);
        opacity: 0.55;
        animation: deepOceanCurrent 30s ease-in-out infinite;
        will-change: transform, border-radius;
        pointer-events: none;
        z-index: 0;
      }
      \`\`\`

  - LAYER 2 – Mid-layer water masses:
    - 3+ mid-sized blobs (.ocean-blob-mid-1/2/3) with ~20s cycles;
    - Colors lean toward teal and violet; blur radius smaller than deep layer;
    - Positions fill the central band of the viewport.

  - LAYER 3 – Surface surge:
    - 2 smaller blobs (.ocean-blob-surface-1/2) with ~12s cycles;
    - Placed nearer the top half, with slightly more energetic motion (translation + scale).

  - LAYER 4 – Rising bubbles:
    - Many .bubble elements anchored at the bottom, rising upward and drifting horizontally.
    - Each bubble uses CSS custom properties:
      \`\`\`html
      <div class="bubble"
           style="left: 25%; --bubble-size: 8px; --bubble-duration: 9s; --bubble-delay: 0.5s; --bubble-drift: 20px;"></div>
      \`\`\`
      \`\`\`css
      @keyframes bubbleRise {
        0%   { transform: translate3d(0, 0, 0); opacity: 0; }
        10%  { opacity: 0.9; }
        80%  { opacity: 0.9; }
        100% { transform: translate3d(var(--bubble-drift), -120vh, 0); opacity: 0; }
      }

      .bubble {
        position: fixed;
        bottom: -40px;
        width: var(--bubble-size);
        height: var(--bubble-size);
        border-radius: 999px;
        background: radial-gradient(circle, rgba(148, 163, 255, 0.9), rgba(59, 130, 246, 0.2));
        animation: bubbleRise var(--bubble-duration) linear infinite;
        animation-delay: var(--bubble-delay);
        pointer-events: none;
        z-index: 1;
      }
      \`\`\`
    - Use 20+ bubbles with varied positions and timing to avoid synchronization.

  - LAYER 5 – Bioluminescent plankton:
    - Use .plankton elements scattered across the screen as tiny glowing dots:
      \`\`\`css
      @keyframes planktonFlicker {
        0%, 100% { opacity: 0.2; transform: translate3d(0, 0, 0) scale(1); }
        40%      { opacity: 0.9; transform: translate3d(4px, -6px, 0) scale(1.2); }
        70%      { opacity: 0.5; transform: translate3d(-3px, 3px, 0) scale(0.9); }
      }

      .plankton {
        position: fixed;
        width: var(--plankton-size);
        height: var(--plankton-size);
        border-radius: 999px;
        background: radial-gradient(circle, rgba(125, 211, 252, 1), rgba(56, 189, 248, 0.1));
        animation: planktonFlicker var(--plankton-duration) ease-in-out infinite;
        animation-delay: var(--plankton-delay);
        pointer-events: none;
        z-index: 1;
      }
      \`\`\`

3. Foreground Content (Dashboard)
  - Place all content inside a high z-index wrapper (e.g. .ocean-content) so it sits above background layers.
  - Structure:
    - Top: a row of glowing stats (cards showing depth, temperature, current speed, etc.).
    - Middle: hero section with large title, descriptive subtitle and two primary buttons.
    - Bottom: a grid of glass cards with charts, progress bars and labels.

[Glass Cards & Liquid Progress]
- Use .glass-card as the shared container style:
  \`\`\`css
  .glass-card {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(16px);
    border-radius: 20px;
    border: 1px solid rgba(148, 163, 255, 0.3);
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.7);
    transition: all 0.35s ease;
  }

  .glass-card:hover {
    border-color: rgba(56, 189, 248, 0.7);
    box-shadow: 0 32px 90px rgba(15, 23, 42, 0.9);
    transform: translateY(-4px);
  }
  \`\`\`

- For liquid progress bars:
  \`\`\`css
  .liquid-progress {
    height: 8px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 4px;
    overflow: hidden;
  }

  .liquid-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #00e5ff, #64ffda);
    border-radius: 4px;
    animation: liquidFill 2s ease-out forwards;
  }

  @keyframes liquidFill {
    from { width: 0; }
  }
  \`\`\`

[Buttons & Interaction]
- Primary liquid button:
  \`\`\`css
  .liquid-button {
    position: relative;
    padding: 12px 32px;
    background: linear-gradient(135deg, #00e5ff, #64ffda);
    border-radius: 12px;
    border: none;
    color: #020617;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  \`\`\`
- Hover should add a subtle ripple via ::before and a soft shadow; outline variant uses a transparent background with cyan border that fills slightly on hover.

[Color System]
- Background: #020617, #0a192f, #112240;
- Highlights: #00e5ff, #64ffda;
- Accent: #8b5cf6;
- Primary text: #e2e8f0 / #cbd5f5;
- Secondary text: rgba(226, 232, 240, 0.7).

[Output Requirements]
- Output a complete HTML5 page structure using <header>, <main>, <section> and <footer>, with:
  - Multiple background animation elements for deep/mid/surface blobs, bubbles and plankton;
  - A stats row, hero section and one or more glass-card rows for detailed metrics.
- For layout, you may use Tailwind-like utilities (flex, grid, gap-8, max-w-5xl, mx-auto, px-6, py-10, etc.).
- For background animation and key visual components, keep explicit class names (.ocean-blob-deep, .ocean-blob-mid, .ocean-blob-surface, .bubble, .plankton, .glass-card, .liquid-button, .liquid-progress) so CSS can be attached.
- Do not output explanations—only the final HTML structure with class names that clearly support this liquid ocean animation style.`
  },

  stylePrompt: {
    'zh-CN': `角色：你是一位专精于「深海科技数据可视化」的 UI 设计师，擅长运用流体动态效果和有机形态创造沉浸式的数据仪表板体验。你的设计灵感来自深海生物的发光特性和水下光影的流动美学。

场景定位：
- 主要应用于数据分析平台、监控仪表板、SaaS 产品后台
- 适合展示实时数据流、业务指标、系统状态等信息
- 界面应传达「专业、可靠、前沿」的品牌形象
- 用户群体为数据分析师、产品经理、技术团队

视觉设计理念：
- 以深海蓝色系为基底，营造沉浸式的数据探索环境
- 液体 blob 作为背景装饰，象征数据的流动性和活力
- 所有 UI 组件应有统一的玻璃态质感，呈现层次分明的信息架构
- 高亮色（青绿 #64ffda）仅用于关键数据和交互元素，保持视觉焦点
- 大量留白和清晰的网格系统，确保数据的可读性

材质与质感：
- 背景层：多个半透明渐变 blob 叠加，通过大面积模糊（blur 30-60px）创造深海般的氛围
- 卡片层：使用 backdrop-filter blur 实现玻璃态效果，边框带有微弱的青绿发光
- 按钮：透明背景配合发光边框，hover 时产生光晕扩散效果
- 图标：线性描边风格，颜色与高亮色保持一致
- 文字：主要内容使用浅色（#ccd6f6），次要信息使用灰色调（#8892b0）

交互体验：
- 所有 blob 动画应缓慢且有呼吸感，单次变形周期 15-25 秒
- 卡片 hover 时轻微上浮（translateY -4px）并增强边框发光
- 按钮交互应有明确的状态反馈：默认 → hover（发光）→ active（按压）
- 数据更新时可以有微妙的脉动动画，但避免分散注意力
- 页面滚动时背景 blob 可以有轻微的视差效果

数据展示规范：
- 数值使用大字号（24-48px）和粗体，确保一眼可见
- 趋势指标（上升/下降）使用颜色编码：青绿色表示正向，红色表示负向
- 图表应与整体配色协调，避免使用过于鲜艳的颜色
- 标签和说明文字使用小号字体和次要颜色，不与数据争夺注意力

氛围营造：
- 用户进入界面时应感受到「专业的数据指挥中心」氛围
- 流动的液体背景暗示数据的实时性和动态性
- 深色背景配合发光元素，营造高科技感但不压抑
- 整体视觉应让用户感到「一切尽在掌控」，信息清晰且易于理解
- 动效应该是辅助性的，增强体验但不干扰工作效率

技术实现要点：
- 使用 CSS Grid 或 Flexbox 构建响应式布局
- blob 动画使用纯 CSS @keyframes，不依赖 JavaScript
- 玻璃态效果通过 backdrop-filter: blur() 实现
- 所有动画元素添加 will-change 优化性能
- 移动端应简化 blob 数量和模糊程度，优先保证性能`,

    'en-US': `Role: You are a UI designer specializing in "Deep Ocean Tech Data Visualization," skilled at creating immersive data dashboard experiences through fluid dynamics and organic forms. Your design inspiration comes from the bioluminescent properties of deep-sea creatures and the flowing aesthetics of underwater light.

Scene Positioning:
- Primarily for data analytics platforms, monitoring dashboards, and SaaS product backends
- Ideal for displaying real-time data streams, business metrics, and system status
- Interface should convey a "professional, reliable, cutting-edge" brand image
- Target users are data analysts, product managers, and technical teams

Visual Design Philosophy:
- Deep ocean blue palette as the foundation, creating an immersive data exploration environment
- Liquid blobs as background decoration, symbolizing data fluidity and vitality
- All UI components should have unified glassmorphism texture, presenting clear information hierarchy
- Highlight color (teal #64ffda) only for key data and interactive elements to maintain visual focus
- Generous whitespace and clear grid system to ensure data readability

Materials & Textures:
- Background layer: Multiple semi-transparent gradient blobs overlaid, with heavy blur (30-60px) creating deep-sea atmosphere
- Card layer: backdrop-filter blur for glass effect, borders with subtle teal glow
- Buttons: Transparent background with glowing border, halo expansion effect on hover
- Icons: Linear stroke style, color consistent with highlight
- Text: Primary content in light colors (#ccd6f6), secondary info in gray tones (#8892b0)

Interaction Experience:
- All blob animations should be slow and breathing, single morph cycle 15-25 seconds
- Cards lift slightly on hover (translateY -4px) with enhanced border glow
- Buttons should have clear state feedback: default → hover (glow) → active (pressed)
- Subtle pulse animation for data updates, but avoid distracting attention
- Background blobs can have slight parallax effect on page scroll

Data Display Standards:
- Numbers use large font (24-48px) and bold weight, ensuring visibility at a glance
- Trend indicators (up/down) use color coding: teal for positive, red for negative
- Charts should harmonize with overall color scheme, avoid overly bright colors
- Labels and descriptions use smaller font and secondary colors, not competing with data

Atmosphere Creation:
- Users should feel a "professional data command center" atmosphere upon entering
- Flowing liquid background suggests real-time and dynamic nature of data
- Dark background with glowing elements creates high-tech feel without being oppressive
- Overall visual should make users feel "everything is under control," information clear and easy to understand
- Motion effects should be supportive, enhancing experience without disrupting work efficiency

Technical Implementation:
- Use CSS Grid or Flexbox for responsive layouts
- Blob animations using pure CSS @keyframes, no JavaScript dependency
- Glass effect achieved through backdrop-filter: blur()
- Add will-change to all animated elements for performance
- Simplify blob count and blur intensity on mobile, prioritize performance`
  },

  demoHTML,
  customStyles,
  fullPageHTML,
  fullPageStyles,
  previews: [
    {
      id: 'visual-nature-liquid-flow-home-office',
      name: 'Liquid Flow Home Office',
      type: 'full',
      previewId: 'visual-nature-liquid-flow-home-office',
      customPrompt: {
        'zh-CN': `
你现在是一名非常熟悉「Liquid Motion 深海科技仪表盘」风格的资深 UI 设计师兼前端工程师，需要为一个全新页面生成一套与当前预览 /styles/preview/visual-nature-liquid（LiquidFullPage）在「背景动画结构」上高度一致的 UI。

你的重点任务：请完整复刻当前模板中所有背景动画层（至少 8 层），并在新页面的 HTML/CSS 中保留相同的 class 名称与动画逻辑，只替换文案、业务数据和部分布局结构。下面给出当前模板使用的完整背景动画代码，请严格按照这些层级来设计和生成新的页面。

【背景动画总览】
- LAYER 1：Deep Ocean Current（深海洋流 blob，30s 循环）
- LAYER 2：Mid-Layer Water Mass（中层水体 blob，20s 循环）
- LAYER 3：Surface Surge（表层浪涌 blob，12s 循环）
- LAYER 4：Rising Bubbles（上升气泡粒子）
- LAYER 5：Bioluminescent Plankton（发光浮游生物）
- LAYER 6：Light Refraction Beams（光线折射光束）
- LAYER 7：Auto Ripples（自动扩散水波纹）
- LAYER 8：Seaweed Sway（摇曳的海草 silohuette）

你生成的新页面必须至少保留这 8 层中的核心层级（1~5 必须保留，6~8 可在性能允许时保留），并使用与下方一致或等价的 CSS 动画结构。

【基础容器与页面背景】
请使用一个顶层容器 .liquid-page 包住所有背景层与内容层：

.liquid-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #020617 0%, #0a192f 50%, #112240 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #e2e8f0;
  position: relative;
  overflow-x: hidden;
}

【LAYER 1：Deep Ocean Current（深海洋流 blob，30s）】
@keyframes deepOceanCurrent {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  20% {
    transform: translate(150px, -100px) rotate(72deg) scale(1.3);
    border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%;
  }
  40% {
    transform: translate(-80px, 120px) rotate(144deg) scale(0.8);
    border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%;
  }
  60% {
    transform: translate(200px, 80px) rotate(216deg) scale(1.2);
    border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%;
  }
  80% {
    transform: translate(-120px, -60px) rotate(288deg) scale(0.9);
    border-radius: 50% 50% 60% 40% / 55% 45% 55% 45%;
  }
}

.ocean-blob-deep {
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, rgba(100, 255, 218, 0.08) 50%, transparent 70%);
  filter: blur(80px);
  animation: deepOceanCurrent 30s ease-in-out infinite;
  will-change: transform, border-radius;
  pointer-events: none;
  z-index: 0;
}

.ocean-blob-deep-1 {
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.ocean-blob-deep-2 {
  bottom: -30%;
  right: -15%;
  animation-delay: -15s;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.12) 0%, rgba(0, 229, 255, 0.06) 50%, transparent 70%);
}

【LAYER 2：Mid-Layer Water Mass（中层水体 blob，20s）】
@keyframes midLayerFlow {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;
  }
  25% {
    transform: translate(100px, -80px) rotate(90deg) scale(1.15);
    border-radius: 40% 60% 50% 50% / 50% 50% 50% 50%;
  }
  50% {
    transform: translate(-60px, 100px) rotate(180deg) scale(0.85);
    border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%;
  }
  75% {
    transform: translate(80px, 40px) rotate(270deg) scale(1.1);
    border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%;
  }
}

.ocean-blob-mid {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, rgba(100, 255, 218, 0.1) 60%, transparent 80%);
  filter: blur(60px);
  animation: midLayerFlow 20s ease-in-out infinite;
  will-change: transform, border-radius;
  pointer-events: none;
  z-index: 0;
}

.ocean-blob-mid-1 {
  top: 20%;
  left: 30%;
  animation-delay: -5s;
}

.ocean-blob-mid-2 {
  top: 50%;
  right: 20%;
  animation-delay: -10s;
}

.ocean-blob-mid-3 {
  bottom: 20%;
  left: 10%;
  animation-delay: -15s;
}

【LAYER 3：Surface Surge（表层浪涌 blob，12s）】
@keyframes surfaceSurge {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  33% {
    transform: translate(120px, -60px) rotate(120deg) scale(1.25);
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  66% {
    transform: translate(-80px, 80px) rotate(240deg) scale(0.75);
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
  }
}

.ocean-blob-surface {
  position: absolute;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.25) 0%, rgba(100, 255, 218, 0.15) 50%, transparent 70%);
  filter: blur(40px);
  animation: surfaceSurge 12s ease-in-out infinite;
  will-change: transform, border-radius;
  pointer-events: none;
  z-index: 0;
}

.ocean-blob-surface-1 {
  top: 10%;
  right: 30%;
  animation-delay: -3s;
}

.ocean-blob-surface-2 {
  bottom: 30%;
  left: 40%;
  animation-delay: -6s;
}

【LAYER 4：Rising Bubbles（上升气泡粒子）】
@keyframes bubbleRise {
  0% {
    transform: translateY(100vh) translateX(0) scale(0.3);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  50% {
    transform: translateY(50vh) translateX(var(--bubble-drift, 20px)) scale(0.6);
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-10vh) translateX(calc(var(--bubble-drift, 20px) * -1)) scale(1);
    opacity: 0;
  }
}

.bubble {
  position: absolute;
  width: var(--bubble-size, 10px);
  height: var(--bubble-size, 10px);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(0, 229, 255, 0.3));
  border-radius: 50%;
  animation: bubbleRise var(--bubble-duration, 8s) ease-in-out infinite;
  animation-delay: var(--bubble-delay, 0s);
  will-change: transform, opacity;
  pointer-events: none;
  z-index: 1;
}

【LAYER 5：Bioluminescent Plankton（发光浮游生物）】
@keyframes planktonGlow {
  0%, 100% {
    opacity: 0.2;
    transform: translate(0, 0) scale(0.8);
    filter: blur(1px);
  }
  25% {
    opacity: 0.5;
    transform: translate(30px, -20px) scale(1.1);
    filter: blur(0px);
    box-shadow: 0 0 20px #00e5ff, 0 0 40px #64ffda;
  }
  50% {
    opacity: 0.3;
    transform: translate(-25px, 35px) scale(0.9);
    filter: blur(2px);
  }
  75% {
    opacity: 0.95;
    transform: translate(40px, 15px) scale(1.2);
    filter: blur(0px);
    box-shadow: 0 0 25px #00e5ff, 0 0 50px #64ffda;
  }
}

.plankton {
  position: absolute;
  width: var(--plankton-size, 4px);
  height: var(--plankton-size, 4px);
  background: #00e5ff;
  border-radius: 50%;
  animation: planktonGlow var(--plankton-duration, 15s) ease-in-out infinite;
  animation-delay: var(--plankton-delay, 0s);
  will-change: transform, opacity, filter;
  pointer-events: none;
  z-index: 1;
}

【LAYER 6：Light Refraction Beams（光线折射光束）】
@keyframes lightBeam {
  0%, 100% {
    opacity: 0.2;
    transform: translateY(0) scaleY(1) skewX(0deg);
  }
  25% {
    opacity: 0.5;
    transform: translateY(30px) scaleY(1.1) skewX(2deg);
  }
  50% {
    opacity: 0.3;
    transform: translateY(10px) scaleY(0.95) skewX(-1deg);
  }
  75% {
    opacity: 0.6;
    transform: translateY(40px) scaleY(1.15) skewX(3deg);
  }
}

.light-beam {
  position: absolute;
  top: 0;
  width: var(--beam-width, 100px);
  height: 100%;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(0, 229, 255, 0.08) 30%,
    rgba(100, 255, 218, 0.03) 70%,
    transparent 100%
  );
  filter: blur(20px);
  animation: lightBeam var(--beam-duration, 25s) ease-in-out infinite;
  animation-delay: var(--beam-delay, 0s);
  will-change: transform, opacity;
  pointer-events: none;
  z-index: 0;
}

【LAYER 7：Auto Ripples（自动水波纹）】
@keyframes autoRipple {
  0%, 100% {
    transform: scale(0);
    opacity: 0.4;
  }
  50% {
    transform: scale(2);
    opacity: 0;
  }
}

.auto-ripple {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 50%;
  animation: autoRipple 10s ease-in-out infinite;
  will-change: transform, opacity;
  pointer-events: none;
  z-index: 0;
}

【LAYER 8：Seaweed Sway（海草摇曳）】
@keyframes seaweedSway {
  0%, 100% {
    transform: rotate(-5deg) scaleY(1);
  }
  25% {
    transform: rotate(3deg) scaleY(1.02);
  }
  50% {
    transform: rotate(-8deg) scaleY(0.98);
  }
  75% {
    transform: rotate(6deg) scaleY(1.01);
  }
}

.seaweed {
  position: absolute;
  bottom: 0;
  width: var(--seaweed-width, 20px);
  height: var(--seaweed-height, 150px);
  background: linear-gradient(180deg, rgba(100, 255, 218, 0.4) 0%, rgba(0, 229, 255, 0.2) 100%);
  border-radius: 50% 50% 0 0;
  transform-origin: bottom center;
  animation: seaweedSway var(--seaweed-duration, 18s) ease-in-out infinite;
  animation-delay: var(--seaweed-delay, 0s);
  will-change: transform;
  pointer-events: none;
  z-index: 1;
}

【输出与约束要求】
- 生成的新 HTML 页面必须：
  - 使用 .liquid-page 容器和上述所有背景层 class 名称（可以增减元素数量，但不要完全删除某一层的存在）；
  - 保留「多层液体 blob + 气泡 + 发光粒子 + 光束 + 水波纹 + 海草」的整体视觉结构；
  - 内容层（.ocean-content 及内部卡片/按钮）可以改成新的业务场景，但仍然使用玻璃态卡片、液体进度条和发光按钮等元素。
- 你输出的内容只需要给出完整的 HTML 结构（包括这些背景层节点与内容层），不需要再解释原理。CSS 可以通过上述代码片段推导或复用。`
      }
    }
  ],
};

export default liquid;
