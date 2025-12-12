// Phase 3 Batch 2 - Anti-Design Template
// 視覺元素：反设計風格
// 从 visualTechStyles.js 遷移

import {
  visualTechAntiDesignFullPageHTML,
  visualTechAntiDesignFullPageStyles
} from './antiDesignFullPage';

export const visualTechAntiDesign = {
  id: 'visual-tech-anti-design',
  title: 'styles.visual.anti-design.title',
  description: 'styles.visual.anti-design.description',
  
  demoHTML: `
      <div class="anti-card">
        <h4 class="text-3xl font-bold font-mono">RULES?</h4>
        <p class="text-sm absolute bottom-2 right-2 rotate-6">what rules</p>
      </div>
    `,
  
  customStyles: `
      .anti-card {
        width: 80%;
        height: 80%;
        padding: 1.5rem;
        background: linear-gradient(45deg, #ffeb3b, #ff9800, #e91e63);
        border: 6px solid #000;
        position: relative;
        transform: rotate(-3deg);
        box-shadow: 8px 8px 0 #000, 16px 16px 0 rgba(0,0,0,0.2);
        transition: all 0.2s ease;
      }
      .anti-card::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          #ff0000 10px,
          #ff0000 20px
        );
        z-index: -1;
        animation: anti-move 3s linear infinite;
      }
      @keyframes anti-move {
        0% { transform: translateX(0) rotate(-3deg); }
        50% { transform: translateX(10px) rotate(-1deg); }
        100% { transform: translateX(0) rotate(-3deg); }
      }
    `,
  
  demoBoxClass: 'bg-white',

  colorScheme: {
    'zh-cn': '混乱排版、冲突色彩（鲜红 #FF0000、电绿 #00FF00）、Comic Sans 字体、破坏网格、故意粗糙',
    'en-US': 'Chaotic typography, clashing colors (bright red #FF0000, electric green #00FF00), Comic Sans font, broken grids, intentionally raw'
  },

  // 風格說明 Prompt（StylePrompt）：用於解釋 Anti-Design 的设計理念
  stylePrompt: {
    'zh-CN': `角色设定：
你是一位专精于「反设计（Anti-Design）」风格的 UI 设计师，擅长通过打破网格、冲突配色和不对齐排版，制造「不舒服但记得住」的视觉体验。你的任务不是让界面看起来乖巧、理性，而是帮助那些想要表达态度、反叛和个性的品牌，用界面本身讲一句：我们不按常理出牌。

场景定位：
反设计风格适用于前卫创意工作室、独立音乐厂牌、青年文化活动、实验艺术展览、另类潮流品牌、设计杂志专题页等，需要强调「态度」「反叛」「不被主流审美驯化」的场景。它可以出现在 Landing Page、作品展示页、活动专题页或互动实验页面中。核心不是信息效率，而是记忆点与情绪强度——用户可能会觉得有点乱、有点吵，但会清楚地记住这个品牌的个性。

视觉设计理念：
反设计不是「随便乱做」，而是有意识地对抗常规 UI 准则。在这里，黄金栅格、8pt 网格、完美对齐和舒适留白都被当成可以反向利用的素材——你可以刻意错位、压缩或过度放大，让元素看起来「故意摆错地方」。标题可以倾斜 5–15 度，按钮可以旋转、重叠甚至压在别的模块上，导航可以不在标准位置，但整体仍需维持基本的信息层级：重要信息永远有最大的对比、最大字号或最强烈的边框。

排版与字体：
字体使用倾向极端：粗黑、压缩、全大写、字距过紧或过宽，常见组合是 Impact / Arial Black 一类极粗无衬线，搭配等宽字体或看起来「有点土」的字体（如 Comic Sans 风格），通过这种故意不精致的组合创造反差感。标题可以随意倾斜或附带手写风、涂鸦风装饰；正文仍需可读，字号不宜过小。行距可以略紧，甚至在部分区域故意挤压，让人感觉视觉上有压力，但要避免让用户完全无法阅读。

配色与材质：
色彩以高饱和对撞为主：纯红 (#FF0000)、柠檬黄 (#FFEB3B)、电光绿 (#00FF00)、饱和蓝 (#0000FF) 搭配纯黑和纯白，几乎不给中间灰阶缓冲。大量使用粗黑描边（6–8px 实线）、硬朗阴影（8–16px 的平移阴影）和重复条纹背景，营造强烈的「海报」「拼贴」「街头招贴」气质。可以使用重复线条、斜线条纹、炸裂星形、大号渐变块来打破整洁；材质感上倾向二维平面、印刷感，而非拟物或玻璃质感。

布局与结构：
虽然看起来「乱」，但整体仍可拆成几个清晰块：
- 顶部是被压扁、倾斜的导航区域，Logo 可能是旋转的黑色方块内嵌大写字母，导航项大小不一、角度不同；
- 中间 Hero 版面是一块被旋转的巨大标题区，文案短而极端，例如「NO RULES, JUST CHAOS」；
- 下方可以是错位网格，用不等高、不等宽的卡片呈现项目或作品，每张卡片都带有异形背景、粗边框和贴纸式标签；
- 侧栏或底部可以放「CHAOS LEVEL」「破坏规则清单」「品牌宣言」等内容块，用列表、勾选框、滑杆等原本很理性的控件，包裹在不理性的外观里。

交互体验：
交互是「略微失控」的——Hover 时按钮不仅变色，还会轻微抖动、旋转或放大；卡片在悬停时可以向某个奇怪方向位移，甚至略微扭曲。过渡时间通常较短（0.12–0.25s），营造利落但不平滑的感觉。可以使用 keyframes 做周期性的晃动、上下跳动、随机偏移，让背景元素看起来永远在躁动。但必须控制节奏，避免让用户因为晃动过多产生眩晕：核心交互（导航、按钮）应该仍然可预测、可点击，动画不要妨碍点击区域。

信息层级与可用性：
在反设计中，可用性不是被完全放弃，而是通过「强烈对比」来维持：最重要的信息用最大字号、最粗描边、最强烈色块来占据视线中心；次要信息可以被刻意挤压、倾斜或压在色块之下。按钮可以长得很不「系统」，但需要通过大号文字、明显边框和光标形态提示其可点击性。对于可访问性，仍建议保证文字与背景之间有足够对比度，尽量避免长段正文使用彩色背景。

整体氛围：
置身这种界面，就像走进一张朋克乐队海报、独立杂志封面或 90 年代粗糙网页的重制版：一切都在喊「我不管设计规范」。反设计风格适合那些愿意承担个性风险、希望在第一眼就区分于大量「看起来都差不多」的现代极简网站的品牌。正确的反设计不是纯粹难看，而是通过「刻意的坏品味」和「可控的混乱」让品牌态度变得鲜明、不可忽视。`,
    'en-US': `Role:
You are a UI designer specialising in Anti-Design. You intentionally break grids, clash colors and misalign typography to create interfaces that feel uncomfortable in a memorable way. Your job is not to make a polite, rational layout, but to help bold brands say “we refuse to look like everyone else” through the UI itself.

Scene Positioning:
Anti-Design is suitable for cutting-edge creative studios, independent music labels, youth culture events, experimental art exhibitions, underground fashion brands and editorial-style landing pages that want to project attitude rather than neutrality. It works well for landing pages, portfolio showcases, campaign microsites and interactive experiments. The goal is not pure efficiency; it is about strong emotional impact and recall—users may feel the layout is noisy or chaotic, but they will remember the brand.

Visual Philosophy:
Anti-Design is not random ugliness; it is a deliberate opposition to conventional UI rules. The point is to weaponise misalignment, overlapping layers and broken hierarchy. Classic 8pt grids, perfect alignment and comfortable whitespace are things you can violate on purpose. Headings can be tilted by 5–15 degrees, buttons can overlap cards, labels can be rotated or half-hidden behind shapes. However, the core information hierarchy must still be readable: the most important messages always get the highest contrast, largest type or boldest framing.

Typography:
Type combinations lean towards extremes: ultra-bold, condensed, all caps grotesks (Impact / Arial Black style) paired with monospaced or deliberately “unrefined” fonts. Letter-spacing may be too tight or too wide on purpose. Headlines can tilt, stretch or stack in awkward ways; annotations can look like handwritten stickers or zine captions. Body text must remain legible—keep a reasonable size and contrast even if line height is slightly cramped in places.

Color and Surface:
Colors are loud and clashing: pure red (#FF0000), neon yellow (#FFEB3B), electric green (#00FF00), saturated blue (#0000FF) and stark black/white with almost no neutral greys. Thick black borders (6–8px) and heavy offset shadows (8–16px) create a poster-like, print-inspired flatness. Use repeating stripes, diagonal patterns, starbursts and oversized gradient blobs to break up the page. The overall feel is 2D and graphic, more like risograph prints and DIY flyers than soft glass or skeuomorphic surfaces.

Layout and Structure:
Although it looks chaotic, you still design in recognisable chunks:
- A compressed, slightly rotated navigation strip with a blocky logo that might sit inside a rotated square;
- A huge, tilted hero headline like “NO RULES, JUST CHAOS” with overlapping stickers and arrows;
- A misaligned card grid where every card has a different angle, border color or background pattern;
- Side sections or footers that list “chaos rules”, brand manifesto or a slider to pick the “CHAOS LEVEL”.

Interaction:
Interactions feel slightly out of control: hover states can shake, rotate or overshoot; cards may jump a few pixels in odd directions; buttons can wiggle instead of gently fading. Animation timings are short (around 120–250ms) to create a snappy, abrasive rhythm rather than smooth ease-out motion. You may use keyframed jitter, bounce or irregular transforms on decorative elements, but keep core controls predictable and reliably clickable. Avoid continuous large-scale motion that causes motion sickness.

Information Hierarchy and Usability:
Despite the chaos, important content must be obvious. Primary messages use the largest type, biggest color blocks or strongest outlines. Secondary details can be squeezed, tilted or partially overlapped, but never so much that they become unreadable. Buttons may look unconventional, but they still need clear labels, hit areas and pointer feedback. High-contrast combinations are still preferred for text on solid backgrounds, especially for longer descriptions or critical actions.

Overall Mood:
Being inside an Anti-Design interface should feel like standing in front of a punk gig poster wall or flipping through an underground zine. It is loud, opinionated and unapologetic. Done well, it does not simply look “ugly”; it feels like controlled chaos with a point, giving brands a visual voice that refuses to blend into the endless sea of clean, minimal SaaS dashboards.`
  },

  // 自定義生成 Prompt（CustomPrompt）：用於让 LLM 生成 Anti-Design 風格全页面 HTML
  customPrompt: {
    'zh-CN': `你现在是一名偏爱「反设计（Anti-Design）」美学的资深 UI 设计师兼前端工程师，请为一个 Anti-Design 主题的单页官网生成完整 HTML 结构（可配合 TailwindCSS 风格的原子类）。目标是让这个页面在布局、配色和动线上都明显违背传统「整齐、克制、对齐」的规范，但仍然保持基本可读性和可操作性。

【使用场景】
- 品牌：一个以「破坏传统美学」为核心卖点的创意工作室 / 独立品牌；
- 页面目标：展示品牌宣言、项目列表与联络方式，让访问者第一眼就感受到「这里不讲究乖巧，而是讲究态度」；
- 受众：青年文化爱好者、设计从业者、音乐与艺术圈用户。

【整体布局结构】
1. 顶部导航（Chaotic Nav）
   - 高度约 72–96px，占满宽度；
   - 整个导航条略微倾斜（可通过容器 transform 实现），背景使用高饱和渐变：如 #FFEB3B → #FF9800 → #E91E63；
   - 左侧是旋转 45° 的黑色方块 Logo，内部放大号字母或简短品牌名；
   - 右侧导航链接大小不一、角度不同，每个链接都有粗黑边框（至少 4–6px）和块状背景色（纯红、纯黄、电光绿等）。

2. Hero 区（Anti Hero）
   - 一个巨大且略微倾斜的主标题区，使用极粗黑体、全大写，如「NO GRIDS, NO MERCY」；
   - 标题需要叠加多层文字阴影（黑 / 白 / 高饱和色）形成粗暴的层次；
   - 副标题是短句宣言（最多 2–3 行），可以略微旋转、靠近标题边缘，看起来像贴上去的纸条；
   - 至少两个主要按钮：主按钮为黑底黄字，粗黑边框 + 偏移阴影，略带旋转；次按钮用纯蓝或纯红块状背景；
   - Hero 背景中可放置 2–3 个漂浮形状（方块、圆形、三角形），以 keyframe 动画做轻微晃动或跳动。

3. 项目 / 作品区（Broken Grid Projects）
   - 使用看似错乱的网格：例如 2 列布局，但每张卡片通过 transform 旋转 ±3–10 度；
   - 每个卡片都有粗黑边框（6–8px）和大号阴影（偏移 8–16px），阴影颜色可用纯黑或强烈对比色；
   - 卡片背景可用纯色块或极简图案（斜线条纹、点阵），标题可使用全大写 + 贴纸式小标签；
   - 卡片内部信息结构建议：项目标题、极短描述、一两个简短标签（如「POSTER」「WEB」「CHAOS」）。

4. 规则清单 / 品牌宣言（Chaos Manifesto）
   - 设计一个看起来像「撕下来的便签板」区域，整体略微倾斜；
   - 使用编号或复选框列出 4–6 条「反设计规则」，例如「破坏对齐」「拥抱纯色」「故意过度填充」等；
   - 每一条可以有不同颜色的底色或贴纸，边框不必对齐，用视觉噪声（小噪点、撕裂边缘感）强调随意性。

5. 联系与 CTA 区（Loud CTA）
   - 底部做一块大号 CTA 区域，背景可以是大面积纯黄或纯红，叠加粗黑边框；
   - 文案简短直接，如「READY TO BREAK THE RULES?」；
   - 一个主要按钮和一行联系方式（邮件 / 社交链接），按钮可附带「抖动」「wiggle」动画。

【配色与视觉语言】
1. 主色：纯红 (#FF0000)、柠檬黄 (#FFEB3B)、电光绿 (#00FF00)、纯蓝 (#0000FF)、纯黑 (#000000)、纯白 (#FFFFFF)；
2. 大量使用粗边框：按钮、卡片、导航条等边框宽度至少 4–8px，颜色通常为纯黑；
3. 阴影风格：不追求真实柔和，而是「平面感」的硬阴影，例如 box-shadow: 8px 8px 0 #000；
4. 背景可以是纯白加上局部条纹 / 噪点 / 斜线图案，避免太多柔和渐变。

【交互与动效】
1. Hover 效果：
   - 按钮在悬停时可以轻微旋转、放大 3–5%，阴影加深或变色；
   - 卡片在悬停时向某个方向平移几像素，同时旋转角度略有变化；
2. Active 效果：
   - 按下时按钮阴影减少，位置略微下移，产生「被砸进页面」的感觉；
3. 装饰动画：
   - 某些背景元素可持续做上下浮动或晃动动画，但应避免大面积、高频晃动影响阅读。

【输出要求】
- 使用语义化 HTML 标签（<header>、<nav>、<main>、<section>、<footer>），结构上仍要清晰划分模块；
- 使用类似 TailwindCSS 的原子类描述布局、间距、排版与颜色（可自定义类名，但请保持 utility-first 风格）；
- 保证在桌面端浏览器中为单页纵向滚动布局，移动端可简化为单列但仍保留反设计的「夸张感」；
- 禁止引入外部脚本和 UI 库，只通过 HTML + CSS（含自定义动画）实现；
- 生成的页面在整体观感上应一眼让人联想到 Anti-Design：粗暴、吵闹、打破常规，但核心信息仍可读、可点击。`,
    'en-US': `You are a senior UI designer and front-end engineer who loves Anti-Design aesthetics. Generate a full-page Anti-Design themed landing page in semantic HTML (you may use Tailwind-style utility classes). The goal is to clearly break conventional ideas of “clean, aligned, minimal” while keeping the page basically readable and usable.

[Use Case]
- Brand: A creative studio or independent label whose core message is “we break traditional aesthetics”.
- Page goal: Present the brand manifesto, a list of projects and a way to contact the team, making visitors instantly feel that this place values attitude over politeness.
- Audience: Designers, youth-culture fans, music/art communities.

[Layout Structure]
1. Chaotic Navigation Bar
   - Full-width bar, 72–96px height.
   - Slightly rotated container with a high-saturation gradient background (e.g. #FFEB3B → #FF9800 → #E91E63).
   - Left: a rotated black square logo with a bold letter or short word inside.
   - Right: 4–5 navigation links, each with its own background color, 4–6px solid black border and a small rotation angle.

2. Hero Section
   - Huge, slightly tilted hero headline such as “NO GRIDS, NO MERCY” using ultra-bold all-caps type.
   - Multiple layered text shadows (black, white and bright accent colors) to create a loud, poster-like appearance.
   - Short manifesto subtitle (1–3 lines), also slightly rotated and positioned near the edges of the hero block, like a taped note.
   - At least two primary actions: a black background / yellow text button with heavy offset shadow, and a secondary button in solid blue or red.
   - 2–3 decorative shapes (squares, circles, triangles) floating in the background using keyframe animations.

3. Broken Grid Project Section
   - A 2-column layout that looks like it ignores alignment: each card is rotated ±3–10 degrees.
   - Every card has a thick black border (6–8px) and a big flat shadow (8–16px offset).
   - Card content: project title, a very short description and a few tags such as “POSTER”, “WEB”, “CHAOS”.
   - Backgrounds can use solid colors, stripes or simple patterns.

4. Chaos Manifesto Section
   - A “ripped sticky note” style panel containing 4–6 Anti-Design rules (e.g. “Break alignment”, “Love pure colors”, “Overfill the canvas”).
   - Each rule can have its own colored label or sticker-style badge.
   - The whole block may be slightly skewed or rotated to look pasted on top of the page.

5. Loud CTA / Contact Section
   - A large CTA area at the bottom with pure yellow or red background and thick black border.
   - Direct headline such as “READY TO BREAK THE RULES?”.
   - One main button plus simple contact info (email or social links). The button may have a wiggle animation on hover.

[Color and Visual Language]
1. Use pure, clashing colors: #FF0000, #FFEB3B, #00FF00, #0000FF, #000000, #FFFFFF.
2. Apply thick black borders (4–8px) to major elements like buttons, cards and navigation.
3. Prefer flat, offset shadows (e.g. box-shadow: 8px 8px 0 #000) over soft, realistic shadows.
4. Background can stay mostly white with local stripes, noise or diagonal patterns.

[Interaction & Motion]
1. Hover:
   - Buttons may rotate slightly, scale up by 3–5% and deepen their shadow or change border color.
   - Cards may shift a few pixels and adjust their rotation.
2. Active:
   - Button shadows shrink and the element moves down a few pixels to feel “hammered into” the page.
3. Decorative animation:
   - Background shapes can gently bounce or float using keyframes, but avoid large, high-frequency motion that hurts readability.

[Output Requirements]
- Use semantic HTML (<header>, <nav>, <main>, <section>, <footer>) with clear, logical sections.
- Express layout, spacing and color mainly with utility-style classes (Tailwind-like), not deeply nested custom selectors.
- Design for a vertical, scrollable single-page layout on desktop; mobile can collapse to a single column but should still feel exaggerated and Anti-Design.
- Do not import external scripts or UI libraries; everything must be achievable via HTML + CSS (with custom animations).
- The generated page should immediately read as Anti-Design: loud, rule-breaking and visually chaotic, yet the core information remains understandable and clickable.`
  },

  fullPageHTML: visualTechAntiDesignFullPageHTML,
  fullPageStyles: visualTechAntiDesignFullPageStyles,
  
  previews: [
      // Preview 1: Control Panel (保留現有的 demoHTML)
      {
        id: 'control-panel',
        name: 'styles.visual.anti-design.previews.controlPanel',
        type: 'inline',
        html: `
          <div class="anti-card">
            <h4 class="text-3xl font-bold font-mono">RULES?</h4>
            <p class="text-sm absolute bottom-2 right-2 rotate-6">what rules</p>
          </div>
        `,
        styles: `
          .anti-card {
            width: 80%;
            height: 80%;
            padding: 1.5rem;
            background: linear-gradient(45deg, #ffeb3b, #ff9800, #e91e63);
            border: 6px solid #000;
            position: relative;
            transform: rotate(-3deg);
            box-shadow: 8px 8px 0 #000, 16px 16px 0 rgba(0,0,0,0.2);
            transition: all 0.2s ease;
          }
          .anti-card::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            background: repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              #ff0000 10px,
              #ff0000 20px
            );
            z-index: -1;
            animation: anti-move 3s linear infinite;
          }
          @keyframes anti-move {
            0% { transform: translateX(0) rotate(-3deg); }
            50% { transform: translateX(10px) rotate(-1deg); }
            100% { transform: translateX(0) rotate(-3deg); }
          }
        `,
        description: 'styles.visual.anti-design.previews.controlPanelDesc',
        features: [
          'Tilted card with brutal shadows',
          'Animated striped background',
          'Bold color gradients',
          'Rotating animation effect'
        ],
        colorScheme: {
          'zh-cn': '純紅色 + 純黃色 + 黑白對比',
          'en-US': 'Pure red + pure yellow + black/white contrast'
        }
      },

      // Preview 2: Blog Home - Article List Page
      {
        id: 'blog-home',
        name: 'styles.visual.anti-design.previews.articleList',
        type: 'full',
        html: `
          <div class="chaos-blog-page" style="background: #fff; min-height: 100vh; font-family: 'Arial Black', 'Impact', sans-serif;">

            <!-- Chaotic Navigation -->
            <nav class="chaos-nav">
              <div class="chaos-nav-container">
                <div class="chaos-logo-wrapper">
                  <div class="chaos-logo-box">
                    <span class="chaos-logo-text">C</span>
                  </div>
                  <span class="chaos-brand">CHAOS<span style="color: #FF0000;">BLOG</span></span>
                </div>
                <div class="chaos-nav-links">
                  <a href="javascript:void(0)" class="chaos-nav-link chaos-link-1">HOME</a>
                  <a href="javascript:void(0)" class="chaos-nav-link chaos-link-2">ARTICLES</a>
                  <a href="javascript:void(0)" class="chaos-nav-link chaos-link-3">ABOUT</a>
                  <a href="javascript:void(0)" class="chaos-nav-link chaos-link-4">CONTACT</a>
                </div>
              </div>
            </nav>

            <!-- Hero Section -->
            <section class="chaos-hero">
              <div class="chaos-hero-container">
                <div class="chaos-float-el chaos-float-square"></div>
                <div class="chaos-float-el chaos-float-circle"></div>
                <h1 class="chaos-hero-title">BREAK THE RULES!</h1>
                <p class="chaos-hero-subtitle">Welcome to the chaotic world of anti-design blogging 🔥</p>
                <div class="chaos-hero-buttons">
                  <button class="chaos-btn chaos-btn-primary">READ CHAOS →</button>
                  <button class="chaos-btn chaos-btn-secondary">JOIN REBELLION</button>
                </div>
              </div>
            </section>

            <!-- Main Content -->
            <div class="chaos-main-wrapper">
              <!-- Article Grid -->
              <section class="chaos-articles-section">
                <h2 class="chaos-section-title">LATEST CHAOS</h2>

                <div class="chaos-articles-grid">
                  <!-- Article Card 1 -->
                  <article class="chaos-article-card chaos-card-1">
                    <div class="chaos-card-header">
                      <span class="chaos-category chaos-cat-red">DESIGN</span>
                      <span class="chaos-read-time">5 MIN READ</span>
                    </div>
                    <h3 class="chaos-article-title">Why Grids Are Overrated</h3>
                    <p class="chaos-article-excerpt">Breaking free from the tyranny of perfect alignment and embracing pure creative chaos...</p>
                    <div class="chaos-card-footer">
                      <div class="chaos-author">
                        <div class="chaos-avatar">AM</div>
                        <span class="chaos-author-name">Alex Martinez</span>
                      </div>
                      <span class="chaos-date">2 DAYS AGO</span>
                    </div>
                    <button class="chaos-read-btn">READ MORE →</button>
                  </article>

                  <!-- Article Card 2 -->
                  <article class="chaos-article-card chaos-card-2">
                    <div class="chaos-card-header">
                      <span class="chaos-category chaos-cat-blue">CREATIVITY</span>
                      <span class="chaos-read-time">8 MIN READ</span>
                    </div>
                    <h3 class="chaos-article-title">Colors That Clash On Purpose</h3>
                    <p class="chaos-article-excerpt">Forget color theory - learn how to make your designs scream with intentional color conflicts...</p>
                    <div class="chaos-card-footer">
                      <div class="chaos-author">
                        <div class="chaos-avatar">BC</div>
                        <span class="chaos-author-name">Blake Chen</span>
                      </div>
                      <span class="chaos-date">5 DAYS AGO</span>
                    </div>
                    <button class="chaos-read-btn">READ MORE →</button>
                  </article>

                  <!-- Article Card 3 -->
                  <article class="chaos-article-card chaos-card-3">
                    <div class="chaos-card-header">
                      <span class="chaos-category chaos-cat-yellow">TYPOGRAPHY</span>
                      <span class="chaos-read-time">6 MIN READ</span>
                    </div>
                    <h3 class="chaos-article-title">47 Fonts In One Paragraph</h3>
                    <p class="chaos-article-excerpt">Typography rules are meant to be broken. Here's how to mix fonts like a true rebel...</p>
                    <div class="chaos-card-footer">
                      <div class="chaos-author">
                        <div class="chaos-avatar">CS</div>
                        <span class="chaos-author-name">Casey Smith</span>
                      </div>
                      <span class="chaos-date">1 WEEK AGO</span>
                    </div>
                    <button class="chaos-read-btn">READ MORE →</button>
                  </article>

                  <!-- Article Card 4 -->
                  <article class="chaos-article-card chaos-card-4">
                    <div class="chaos-card-header">
                      <span class="chaos-category chaos-cat-red">ANARCHY</span>
                      <span class="chaos-read-time">10 MIN READ</span>
                    </div>
                    <h3 class="chaos-article-title">Whitespace Is A Myth</h3>
                    <p class="chaos-article-excerpt">Who needs breathing room? Pack every pixel with pure creative energy...</p>
                    <div class="chaos-card-footer">
                      <div class="chaos-author">
                        <div class="chaos-avatar">DW</div>
                        <span class="chaos-author-name">Dana White</span>
                      </div>
                      <span class="chaos-date">2 WEEKS AGO</span>
                    </div>
                    <button class="chaos-read-btn">READ MORE →</button>
                  </article>

                  <!-- Article Card 5 -->
                  <article class="chaos-article-card chaos-card-5">
                    <div class="chaos-card-header">
                      <span class="chaos-category chaos-cat-blue">REBELS</span>
                      <span class="chaos-read-time">7 MIN READ</span>
                    </div>
                    <h3 class="chaos-article-title">Rotating Everything At Random</h3>
                    <p class="chaos-article-excerpt">Perfectly horizontal elements are boring. Tilt them all at different angles...</p>
                    <div class="chaos-card-footer">
                      <div class="chaos-author">
                        <div class="chaos-avatar">EM</div>
                        <span class="chaos-author-name">Emma Moore</span>
                      </div>
                      <span class="chaos-date">3 WEEKS AGO</span>
                    </div>
                    <button class="chaos-read-btn">READ MORE →</button>
                  </article>

                  <!-- Article Card 6 -->
                  <article class="chaos-article-card chaos-card-6">
                    <div class="chaos-card-header">
                      <span class="chaos-category chaos-cat-yellow">CHAOS</span>
                      <span class="chaos-read-time">12 MIN READ</span>
                    </div>
                    <h3 class="chaos-article-title">Shadows That Go Wild</h3>
                    <p class="chaos-article-excerpt">Subtle shadows are overrated. Learn to create brutal, offsetting drop shadows...</p>
                    <div class="chaos-card-footer">
                      <div class="chaos-author">
                        <div class="chaos-avatar">FJ</div>
                        <span class="chaos-author-name">Frank Jones</span>
                      </div>
                      <span class="chaos-date">1 MONTH AGO</span>
                    </div>
                    <button class="chaos-read-btn">READ MORE →</button>
                  </article>
                </div>

                <!-- Loading Animation -->
                <div class="chaos-loading-section">
                  <div class="chaos-loading-dots">
                    <div class="chaos-dot chaos-dot-1"></div>
                    <div class="chaos-dot chaos-dot-2"></div>
                    <div class="chaos-dot chaos-dot-3"></div>
                  </div>
                  <p class="chaos-loading-text">LOADING MORE CHAOS...</p>
                </div>

                <!-- Pagination -->
                <div class="chaos-pagination">
                  <button class="chaos-page-btn chaos-page-prev">← PREV</button>
                  <button class="chaos-page-btn chaos-page-num chaos-page-active">1</button>
                  <button class="chaos-page-btn chaos-page-num">2</button>
                  <button class="chaos-page-btn chaos-page-num">3</button>
                  <button class="chaos-page-btn chaos-page-next">NEXT →</button>
                </div>
              </section>

              <!-- Sidebar Timeline -->
              <aside class="chaos-sidebar">
                <h3 class="chaos-sidebar-title">CHAOS TIMELINE</h3>
                <div class="chaos-timeline">
                  <!-- Timeline Item 1 -->
                  <div class="chaos-timeline-item chaos-timeline-1">
                    <div class="chaos-timeline-marker">1</div>
                    <div class="chaos-timeline-content">
                      <h4 class="chaos-timeline-title">GRID DESTRUCTION</h4>
                      <p class="chaos-timeline-text">Alex destroyed 247 grids</p>
                      <span class="chaos-timeline-date">2H AGO</span>
                    </div>
                  </div>

                  <!-- Timeline Item 2 -->
                  <div class="chaos-timeline-item chaos-timeline-2">
                    <div class="chaos-timeline-marker">2</div>
                    <div class="chaos-timeline-content">
                      <h4 class="chaos-timeline-title">COLOR CLASH</h4>
                      <p class="chaos-timeline-text">Blake mixed 89 colors</p>
                      <span class="chaos-timeline-date">5H AGO</span>
                    </div>
                  </div>

                  <!-- Timeline Item 3 -->
                  <div class="chaos-timeline-item chaos-timeline-3">
                    <div class="chaos-timeline-marker">3</div>
                    <div class="chaos-timeline-content">
                      <h4 class="chaos-timeline-title">FONT ANARCHY</h4>
                      <p class="chaos-timeline-text">Casey used 47 fonts</p>
                      <span class="chaos-timeline-date">1D AGO</span>
                    </div>
                  </div>

                  <!-- Timeline Item 4 -->
                  <div class="chaos-timeline-item chaos-timeline-4">
                    <div class="chaos-timeline-marker">4</div>
                    <div class="chaos-timeline-content">
                      <h4 class="chaos-timeline-title">PURE CHAOS</h4>
                      <p class="chaos-timeline-text">Dana removed whitespace</p>
                      <span class="chaos-timeline-date">2D AGO</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <!-- Footer -->
            <footer class="chaos-footer">
              <div class="chaos-footer-container">
                <div class="chaos-footer-content">
                  <h3 class="chaos-footer-title">CHAOS BLOG</h3>
                  <p class="chaos-footer-text">Breaking design rules since 2025 🔥💥</p>
                </div>
                <div class="chaos-social">
                  <a href="javascript:void(0)" class="chaos-social-link chaos-social-1">X</a>
                  <a href="javascript:void(0)" class="chaos-social-link chaos-social-2">IG</a>
                  <a href="javascript:void(0)" class="chaos-social-link chaos-social-3">GH</a>
                </div>
                <p class="chaos-copyright">© 2025 CHAOS BLOG. All wrongs reserved.</p>
              </div>
            </footer>
          </div>
        `,
        styles: `
          /* Reset & Base */
          * { margin: 0; padding: 0; box-sizing: border-box; }

          .chaos-blog-page {
            font-family: 'Arial Black', 'Impact', sans-serif;
            overflow-x: hidden;
          }

          /* Navigation */
          .chaos-nav {
            background: linear-gradient(135deg, #FFFF00, #FF0000);
            border-bottom: 8px solid #000;
            padding: 1.5rem 2rem;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 12px 0 #000;
            transform: rotate(-0.5deg);
          }

          .chaos-nav-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .chaos-logo-wrapper {
            display: flex;
            align-items: center;
            gap: 1rem;
            transform: rotate(-8deg);
          }

          .chaos-logo-box {
            width: 60px;
            height: 60px;
            background: #000;
            border: 6px solid #0000FF;
            transform: rotate(45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 6px 6px 0 #fff;
          }

          .chaos-logo-text {
            font-size: 28px;
            font-weight: 900;
            color: #FFFF00;
            transform: rotate(-45deg);
          }

          .chaos-brand {
            font-size: 28px;
            font-weight: 900;
            color: #000;
            text-shadow: 3px 3px 0 #fff;
          }

          .chaos-nav-links {
            display: flex;
            gap: 1.5rem;
            align-items: center;
            flex-wrap: wrap;
          }

          .chaos-nav-link {
            font-weight: 900;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border: 5px solid #000;
            box-shadow: 4px 4px 0 #000;
            transition: all 0.2s;
          }

          .chaos-link-1 {
            background: #FFFF00;
            color: #000;
            transform: rotate(-8deg);
          }

          .chaos-link-2 {
            background: #FF0000;
            color: #fff;
            transform: rotate(5deg);
          }

          .chaos-link-3 {
            background: #0000FF;
            color: #fff;
            transform: rotate(-3deg);
          }

          .chaos-link-4 {
            background: #000;
            color: #FFFF00;
            transform: rotate(12deg);
            box-shadow: 4px 4px 0 #FF0000;
          }

          .chaos-nav-link:hover {
            transform: rotate(0deg) scale(1.1);
          }

          /* Hero */
          .chaos-hero {
            background: linear-gradient(45deg, #FF0000 0%, #0000FF 50%, #FFFF00 100%);
            padding: 5rem 2rem;
            border-bottom: 8px solid #000;
            position: relative;
            overflow: hidden;
          }

          .chaos-hero-container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .chaos-float-el {
            position: absolute;
            border: 8px solid #000;
          }

          .chaos-float-square {
            top: -30px;
            right: 10%;
            width: 120px;
            height: 120px;
            background: #FFFF00;
            transform: rotate(45deg);
            animation: chaos-float 4s ease-in-out infinite;
          }

          .chaos-float-circle {
            bottom: -20px;
            left: 5%;
            width: 100px;
            height: 100px;
            background: #fff;
            border-radius: 50%;
            animation: chaos-bounce-alt 3s ease-in-out infinite;
          }

          .chaos-hero-title {
            font-size: 72px;
            font-weight: 900;
            color: #000;
            text-shadow: 8px 8px 0 #fff, 16px 16px 0 #FFFF00, 24px 24px 0 #000;
            transform: rotate(-5deg);
            display: inline-block;
            margin-bottom: 2rem;
            animation: chaos-shake-hero 0.5s ease-in-out infinite;
          }

          .chaos-hero-subtitle {
            font-size: 24px;
            font-weight: 900;
            color: #fff;
            margin-top: 2rem;
            max-width: 700px;
            transform: rotate(2deg);
            text-shadow: 3px 3px 0 #000;
          }

          .chaos-hero-buttons {
            margin-top: 3rem;
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .chaos-btn {
            padding: 1.5rem 3rem;
            border: 8px solid #000;
            font-weight: 900;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s;
          }

          .chaos-btn-primary {
            background: #000;
            color: #FFFF00;
            box-shadow: 8px 8px 0 #FF0000, 16px 16px 0 #000;
            transform: rotate(-8deg);
          }

          .chaos-btn-primary:hover {
            transform: rotate(0deg) scale(1.05);
          }

          .chaos-btn-secondary {
            background: #0000FF;
            color: #fff;
            box-shadow: 8px 8px 0 #FFFF00, 16px 16px 0 #000;
            transform: rotate(5deg);
          }

          .chaos-btn-secondary:hover {
            transform: rotate(0deg) scale(1.05);
          }

          /* Main Layout */
          .chaos-main-wrapper {
            max-width: 1400px;
            margin: 0 auto;
            padding: 4rem 2rem;
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 4rem;
          }

          /* Articles Section */
          .chaos-articles-section {
            min-width: 0;
          }

          .chaos-section-title {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 3rem;
            color: #000;
            transform: rotate(-3deg);
            text-shadow: 4px 4px 0 #FFFF00, 8px 8px 0 #000;
            display: inline-block;
          }

          .chaos-articles-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
            margin-bottom: 4rem;
          }

          /* Article Cards */
          .chaos-article-card {
            background: #fff;
            border: 8px solid #000;
            padding: 2rem;
            box-shadow: 12px 12px 0 #000;
            position: relative;
            transition: all 0.3s;
          }

          .chaos-card-1 {
            transform: rotate(-3deg);
            width: 95%;
          }

          .chaos-card-2 {
            transform: rotate(2deg);
            width: 90%;
            margin-left: auto;
          }

          .chaos-card-3 {
            transform: rotate(4deg);
            width: 85%;
          }

          .chaos-card-4 {
            transform: rotate(-5deg);
            width: 92%;
            margin-left: auto;
          }

          .chaos-card-5 {
            transform: rotate(3deg);
            width: 88%;
          }

          .chaos-card-6 {
            transform: rotate(-2deg);
            width: 93%;
            margin-left: auto;
          }

          .chaos-article-card:hover {
            transform: rotate(0deg) scale(1.02);
          }

          .chaos-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .chaos-category {
            font-weight: 900;
            font-size: 12px;
            padding: 0.5rem 1rem;
            border: 4px solid #000;
            letter-spacing: 2px;
          }

          .chaos-cat-red {
            background: #FF0000;
            color: #fff;
            transform: rotate(-5deg);
          }

          .chaos-cat-blue {
            background: #0000FF;
            color: #fff;
            transform: rotate(8deg);
          }

          .chaos-cat-yellow {
            background: #FFFF00;
            color: #000;
            transform: rotate(-3deg);
          }

          .chaos-read-time {
            font-weight: 900;
            font-size: 12px;
            color: #666;
          }

          .chaos-article-title {
            font-size: 28px;
            font-weight: 900;
            color: #000;
            margin-bottom: 1rem;
            line-height: 1.2;
            text-shadow: 2px 2px 0 #f0f0f0;
            transform: rotate(-1deg);
            display: inline-block;
          }

          .chaos-article-excerpt {
            font-family: Arial, sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #333;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .chaos-card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            border-top: 4px solid #000;
            margin-bottom: 1rem;
          }

          .chaos-author {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .chaos-avatar {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #FF0000, #FFFF00);
            border: 4px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 14px;
            color: #000;
            transform: rotate(15deg);
          }

          .chaos-author-name {
            font-weight: 700;
            font-size: 14px;
            color: #000;
          }

          .chaos-date {
            font-weight: 900;
            font-size: 12px;
            color: #666;
            letter-spacing: 1px;
          }

          .chaos-read-btn {
            width: 100%;
            padding: 1rem;
            background: #000;
            color: #FFFF00;
            border: 4px solid #000;
            font-weight: 900;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 4px 4px 0 #FF0000;
            transition: all 0.3s;
          }

          .chaos-read-btn:hover {
            background: #FF0000;
            color: #fff;
            box-shadow: 6px 6px 0 #000;
          }

          /* Loading Animation */
          .chaos-loading-section {
            text-align: center;
            padding: 3rem 0;
          }

          .chaos-loading-dots {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }

          .chaos-dot {
            width: 20px;
            height: 20px;
            border: 4px solid #000;
            animation: chaos-bounce-dots 1.5s ease-in-out infinite;
          }

          .chaos-dot-1 {
            background: #FF0000;
            animation-delay: 0s;
          }

          .chaos-dot-2 {
            background: #0000FF;
            animation-delay: 0.2s;
          }

          .chaos-dot-3 {
            background: #FFFF00;
            animation-delay: 0.4s;
          }

          .chaos-loading-text {
            font-weight: 900;
            font-size: 14px;
            color: #000;
            letter-spacing: 2px;
          }

          /* Pagination */
          .chaos-pagination {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .chaos-page-btn {
            padding: 1rem 1.5rem;
            background: #fff;
            border: 6px solid #000;
            font-weight: 900;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 4px 4px 0 #000;
            transition: all 0.3s;
          }

          .chaos-page-prev {
            transform: rotate(-5deg);
          }

          .chaos-page-next {
            transform: rotate(5deg);
          }

          .chaos-page-num {
            transform: rotate(2deg);
            min-width: 60px;
          }

          .chaos-page-active {
            background: #FF0000;
            color: #fff;
            transform: rotate(0deg) scale(1.1);
          }

          .chaos-page-btn:hover {
            transform: rotate(0deg) scale(1.05);
          }

          /* Sidebar */
          .chaos-sidebar {
            min-width: 0;
          }

          .chaos-sidebar-title {
            font-size: 32px;
            font-weight: 900;
            color: #000;
            margin-bottom: 2rem;
            transform: rotate(2deg);
            text-shadow: 3px 3px 0 #FFFF00;
            display: inline-block;
          }

          .chaos-timeline {
            position: relative;
          }

          .chaos-timeline-item {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }

          .chaos-timeline-1 {
            transform: rotate(-3deg);
          }

          .chaos-timeline-2 {
            transform: rotate(5deg);
            margin-left: 15%;
          }

          .chaos-timeline-3 {
            transform: rotate(-5deg);
            margin-right: 10%;
          }

          .chaos-timeline-4 {
            transform: rotate(3deg);
            margin-left: 10%;
          }

          .chaos-timeline-marker {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #FF0000, #0000FF);
            border: 6px solid #000;
            border-radius: 50%;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            color: #fff;
            font-size: 18px;
            box-shadow: 4px 4px 0 #000;
            transform: rotate(15deg);
          }

          .chaos-timeline-content {
            flex: 1;
            background: linear-gradient(135deg, #FFFF00, #FF0000);
            border: 6px solid #000;
            padding: 1rem;
            box-shadow: 6px 6px 0 #000;
          }

          .chaos-timeline-title {
            font-weight: 900;
            font-size: 16px;
            color: #000;
            margin-bottom: 0.5rem;
          }

          .chaos-timeline-text {
            font-weight: 700;
            font-size: 14px;
            color: #000;
            margin-bottom: 0.5rem;
          }

          .chaos-timeline-date {
            font-weight: 900;
            font-size: 12px;
            color: #000;
            opacity: 0.7;
          }

          /* Footer */
          .chaos-footer {
            background: linear-gradient(135deg, #000, #333);
            border-top: 8px solid #FF0000;
            padding: 3rem 2rem;
            margin-top: 4rem;
          }

          .chaos-footer-container {
            max-width: 1400px;
            margin: 0 auto;
            text-align: center;
          }

          .chaos-footer-content {
            margin-bottom: 2rem;
          }

          .chaos-footer-title {
            font-size: 36px;
            font-weight: 900;
            color: #FFFF00;
            margin-bottom: 1rem;
            text-shadow: 4px 4px 0 #FF0000;
            transform: rotate(-2deg);
            display: inline-block;
          }

          .chaos-footer-text {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
          }

          .chaos-social {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .chaos-social-link {
            width: 60px;
            height: 60px;
            border: 6px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 20px;
            text-decoration: none;
            box-shadow: 6px 6px 0 #fff;
            transition: all 0.3s;
          }

          .chaos-social-1 {
            background: #FF0000;
            color: #fff;
            transform: rotate(-15deg);
          }

          .chaos-social-2 {
            background: #0000FF;
            color: #fff;
            transform: rotate(10deg);
          }

          .chaos-social-3 {
            background: #FFFF00;
            color: #000;
            transform: rotate(-8deg);
          }

          .chaos-social-link:hover {
            transform: rotate(0deg) scale(1.1);
          }

          .chaos-copyright {
            font-weight: 700;
            font-size: 14px;
            color: #999;
          }

          /* Animations */
          @keyframes chaos-float {
            0%, 100% { transform: rotate(45deg) translateY(0); }
            50% { transform: rotate(50deg) translateY(-20px); }
          }

          @keyframes chaos-bounce-alt {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.1); }
          }

          @keyframes chaos-shake-hero {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(-4deg) translateX(2px); }
          }

          @keyframes chaos-bounce-dots {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          /* Responsive */
          @media (max-width: 1024px) {
            .chaos-main-wrapper {
              grid-template-columns: 1fr;
            }

            .chaos-sidebar {
              margin-top: 3rem;
            }

            .chaos-articles-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .chaos-hero-title {
              font-size: 48px;
            }

            .chaos-article-card {
              width: 100% !important;
              margin-left: 0 !important;
            }

            .chaos-timeline-item {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
        `,
        description: 'styles.visual.anti-design.previews.articleListDesc',
        features: [
          'Article card grid with random widths and rotations',
          'Chaotic timeline sidebar with offset nodes',
          'Brutal category badges with pure color contrast',
          'Bouncing dots loading animation',
          'Tilted pagination buttons',
          'Violent color scheme (red + blue + yellow)'
        ],
        colorScheme: {
          'zh-cn': '純紅 (#FF0000) + 純藍 (#0000FF) + 純黃 (#FFFF00) + 純黑白',
          'en-US': 'Pure red (#FF0000) + pure blue (#0000FF) + pure yellow (#FFFF00) + black/white'
        },
        customPrompt: {
          'zh-CN': `你现在是一名偏爱 Anti-Design（反设计）风格的资深 UI 设计师兼前端工程师，请你根据当前「Chaos Blog」博客首页的界面特征，生成一个风格高度相似的 Anti-Design 博客首页页面。生成结果必须在布局、配色、旋转角度、粗边框以及混乱排版上都保持同一套视觉语言，让人一眼就能看出它是同一风格的变体，而不是随便的彩色博客模板。

【使用场景】
- 页面类型：多作者博客 / 杂志首页，用于聚合最新文章与长期栏目；
- 品牌气质：朋克、叛逆、实验感强，故意破坏传统排版规范；
- 用户预期：不是「安静阅读」，而是「被视觉暴击」后再决定点哪篇文章。

【整体布局结构】
1. 顶部导航（Chaos Nav）
   - 整条导航略微旋转（例如 -1°），背景使用高饱和纯黄到纯红的线性渐变；
   - 左侧 Logo 区：有一个旋转 45° 的黑色方块，内部是大写字母（如 C），右侧是品牌名 CHAOS BLOG，黑字 + 白色文字阴影；
   - 右侧导航链接：4 个左右的入口（HOME / ARTICLES / ABOUT / CONTACT），每个按钮都有 4–6px 纯黑描边，使用不同的纯色背景，并保持轻度旋转。

2. Hero 区（Hero）
   - 大标题「BREAK THE RULES!」使用超大号粗黑体、强烈多层阴影（白色、黄色、黑色），整体倾斜；
   - 副标题说明当下博客的调性，例如「Welcome to the chaotic world of anti‑design blogging」；
   - 背景中要有至少两种几何形状（方块、圆形），带粗黑描边和简单动画（上下浮动/弹跳），形成持续的视觉噪声；
   - 两个主按钮：主按钮黑底黄字，次按钮蓝底白字，两者都有明显的 offset 阴影和旋转效果，Hover 时轻微变大并回正。

3. 主内容区（Main Grid + Sidebar）
   - 左侧为文章卡片网格（2 列布局）：每张卡片使用 8px 纯黑边框 + 12px 偏移阴影，卡片本身略有不同旋转角度与宽度，让排版看起来「歪歪扭扭」却可读；
   - 卡片内容结构：
     - 顶部：分类标签（DESIGN / CREATIVITY / TYPOGRAPHY 等），使用纯红/纯蓝/纯黄背景，搭配 4px 黑色边框和小角度旋转；
     - 右上角：阅读时长标签（5 MIN READ 等）；
     - 中部：文章标题（粗黑体，带轻微旋转与阴影）、简短摘要段落；
     - 底部：作者信息（带有旋转头像方块）+ 日期 + 一颗「READ MORE」按钮（整块按钮也要明显 Anti‑Design）。
   - 文章数量建议 4–6 篇，角度、边框、阴影略有差异，营造「精心设计的失控感」。

4. 加载与分页（Loading + Pagination）
   - 在文章列表区底部增加「LOADING MORE CHAOS...」文案，旁边有 3 个彩色方块或圆点，使用 keyframes 做上下弹跳动画；
   - 分页按钮区域：PREV / 1 / 2 / 3 / NEXT，每个按钮为白底、厚黑边框、旋转±几度，当前页为纯红背景白字并放大。

5. 侧边时间线（Chaos Timeline）
   - 右侧固定为混乱时间线，结构是垂直排列的时间节点，每个节点有圆形 Marker（渐变背景 + 厚黑描边 + 轻度旋转）与内容卡片；
   - 每个节点的卡片背景使用黄/红渐变，外框 6px 黑边 + offset 阴影，内部有标题（如 GRID DESTRUCTION）、一句描述和时间标记（如 2H AGO）。

6. 页脚（Footer）
   - 背景为黑到深灰渐变，上方有一行大标题（CHAOS BLOG）和副标题文案；
   - 下方放 2–3 个社交图标方块（X / IG / GH 等），每个图标背景为纯色、白边、粗阴影和不同旋转角度；
   - 最底部是一行版权文案，例如「All wrongs reserved。」保持 Anti‑Design 的幽默感。

【色彩与材质】
1. 主色：纯红 #FF0000、纯黄 #FFFF00、纯蓝 #0000FF、纯黑 #000000、纯白 #FFFFFF；
2. 所有按钮、卡片、时间线节点都使用 4–8px 黑色边框 + 明显的平移阴影（如 8px 8px 0 #000）；
3. 背景以白色为主，辅以大面积纯色块与渐变，不使用柔和中性色。

【交互与动画】
1. Hover：按钮与卡片在悬停时轻微放大并旋转回 0°，阴影略微加深；
2. Active：按钮在按下时阴影缩小并整体下沉 2–3px；
3. 装饰元素（浮动方块 / 圆点）使用简单平移动画或缩放动画，营造持续的混乱感，但不要遮挡内容。

【输出要求】
- 使用语义化 HTML（header/nav/main/section/footer/article/aside 等）；
- 布局和间距可以使用 TailwindCSS 风格的原子类，或在 <style> 中定义简单类名并在元素上组合使用；
- 不引入外部 JS 或第三方 UI 组件库，只用 HTML + CSS 完成； 
- 生成的页面在整体观感上必须与当前 Chaos Blog 首页保持高度一致：粗糙、吵闹、对撞色明显，但文章标题与按钮仍然清晰可点。
`,
          'en-US': `You are a senior UI designer and front-end engineer obsessed with Anti-Design aesthetics. Based on the existing "Chaos Blog" homepage, generate a new blog home UI that looks like a direct sibling: same chaotic energy, same clashing colors, same heavy borders and tilted layout, but with different copy and content. The result should feel like a variant of the same design system, not a random colorful blog.

[Usage Scenario]
- Page type: multi-author blog / magazine front page that aggregates latest posts and ongoing series;
- Brand mood: punk, rebellious, experimental; intentionally breaks traditional layout rules;
- User expectation: this is not a calm reading experience — it should hit them visually first, then invite them to choose what to read.

[Overall Layout]
1. Chaotic Top Navigation
   - Slightly rotated bar (around -1deg) with a high-saturation gradient background (pure yellow → pure red);
   - Left: logo block composed of a rotated black square with a bold letter inside plus a CHAOS BLOG wordmark with white drop shadow;
   - Right: 4 navigation links (HOME / ARTICLES / ABOUT / CONTACT), each with a different pure background color, 4–6px solid black borders and small rotation angles.

2. Hero Section
   - Oversized headline such as "BREAK THE RULES!" using ultra-bold type with layered shadows (white, yellow, black) and a noticeable tilt;
   - Subtitle describing the blog’s attitude (for example: "Welcome to the chaotic world of anti‑design blogging");
   - At least two floating geometric shapes (square and circle) with thick black strokes and simple keyframed motion (floating / bouncing);
   - Two primary actions: a black background / yellow text button and a blue background / white text button, both with heavy offset shadows and rotation, straightening and enlarging slightly on hover.

3. Article Grid + Sidebar
   - Main content uses a 2-column layout with posts on the left and a timeline sidebar on the right;
   - Each article card: white background, 8px black border, 12px offset shadow, individual rotation and width tweaks so the grid feels misaligned on purpose;
   - Inside a card:
     - Category badge (DESIGN, CREATIVITY, TYPOGRAPHY, etc.) with pure red/blue/yellow backgrounds, thick black borders and a small tilt;
     - Read time label aligned opposite the badge;
     - Bold, slightly rotated title and a short excerpt paragraph;
     - Footer row with a rotated avatar block and author name + date;
     - A full-width "READ MORE" button styled like a brutal black card with yellow text and strong shadow.

4. Loading and Pagination
   - Below the grid, show a "LOADING MORE CHAOS..." message with three colored boxes or dots that bounce vertically using keyframes;
   - Pagination controls (PREV, page numbers, NEXT) rendered as white tiles with heavy black borders, rotated in different directions, and one active red tile for the current page.

5. Chaotic Timeline Sidebar
   - Right-hand column displays a CHAOS TIMELINE with 3–4 events;
   - Each event has: a circular marker with gradient background and thick black border, rotated slightly, plus a rectangular card with yellow/red gradient background and bold black border;
   - Inside the card, include a short title (e.g. GRID DESTRUCTION), a single-sentence description and a relative time label (2H AGO, 5H AGO, etc.).

6. Footer
   - Dark gradient background (black → dark grey) with a bold CHAOS BLOG title and a tagline;
   - Row of social icons (X / IG / GH) as squared badges with pure colors, white borders and heavy shadows, each rotated differently;
   - A playful copyright line such as "All wrongs reserved." to keep the Anti-Design tone.

[Color & Visual Language]
1. Use pure red (#FF0000), pure yellow (#FFFF00), pure blue (#0000FF), black (#000000) and white (#FFFFFF) as the main colors;
2. Every major element (buttons, cards, timeline nodes) should use thick black borders and flat, offset shadows (8–12px);
3. The background should mostly stay white, with large pure color fields and gradients — avoid soft neutrals.

[Interaction & Motion]
1. Hover states: cards and buttons straighten slightly and scale up around 1.05x while shadows deepen;
2. Active states: buttons move down by 2–3px with reduced shadow, mimicking being slammed into the page;
3. Decorative elements animate gently but continuously; avoid large-scale motion that harms legibility.

[Output Requirements]
- Use semantic HTML structure (header, nav, main, section, article, aside, footer);
- Express layout and spacing with utility-style classes (Tailwind-like) or small custom CSS classes; do not rely on large monolithic components;
- Do not import external JS or UI libraries; everything must be achievable with HTML + CSS (and keyframe animations);
- The final homepage must be recognisably Anti-Design: loud, unbalanced and chaotic, yet the article titles and calls-to-action remain clear and clickable.`
        }
      },

      // Preview 3: Article Detail Page (部分實現 - 精简版)
      {
        id: 'article-detail',
        name: 'styles.visual.anti-design.previews.articleDetail',
        type: 'full',
        html: `
          <div class="chaos-detail-page" style="background: #fff; min-height: 100vh; font-family: 'Arial Black', sans-serif;">
            <!-- Simple Navigation -->
            <nav style="background: linear-gradient(135deg, #FFFF00, #FF0000); border-bottom: 8px solid #000; padding: 1.5rem 2rem; position: sticky; top: 0; z-index: 100;">
              <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 24px; font-weight: 900; color: #000;">← BACK TO CHAOS</span>
                <span style="font-size: 20px; font-weight: 900; color: #000;">CHAOS BLOG</span>
              </div>
            </nav>

            <!-- Article Content -->
            <article style="max-width: 900px; margin: 0 auto; padding: 4rem 2rem;">
              <!-- Article Header -->
              <header style="margin-bottom: 3rem;">
                <div style="margin-bottom: 2rem;">
                  <span style="display: inline-block; background: #FF0000; color: #fff; padding: 0.5rem 1.5rem; border: 5px solid #000; font-weight: 900; font-size: 14px; transform: rotate(-5deg); box-shadow: 4px 4px 0 #000;">DESIGN</span>
                </div>
                <h1 style="font-size: 64px; font-weight: 900; color: #000; margin-bottom: 2rem; transform: rotate(-3deg); text-shadow: 6px 6px 0 #FFFF00, 12px 12px 0 #000; line-height: 1.1; display: inline-block;">
                  Why Grids Are Overrated
                </h1>
                <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; margin-top: 2rem;">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #FF0000, #FFFF00); border: 5px solid #000; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #000; transform: rotate(15deg);">AM</div>
                    <span style="font-weight: 700; font-size: 16px;">Alex Martinez</span>
                  </div>
                  <span style="font-weight: 900; font-size: 14px; color: #666;">2 DAYS AGO</span>
                  <span style="font-weight: 900; font-size: 14px; color: #666;">5 MIN READ</span>
                </div>
              </header>

              <!-- Article Body -->
              <div style="font-family: Arial, sans-serif; font-size: 18px; line-height: 1.8; color: #333;">
                <p style="margin-bottom: 2rem;">
                  For years, designers have been obsessed with perfect grids, pixel-perfect alignment, and mathematical precision. But what if I told you that <strong style="background: #FFFF00; padding: 0 0.5rem; border: 3px solid #000; transform: rotate(-2deg); display: inline-block;">grids are killing creativity</strong>?
                </p>

                <p style="margin-bottom: 2rem;">
                  Breaking free from the tyranny of perfect alignment opens up a world of creative possibilities. When you tilt elements at random angles, overlap them chaotically, and ignore whitespace conventions, <span style="color: #FF0000; font-weight: 900;">magic happens</span>.
                </p>

                <!-- Chaotic Table -->
                <div style="margin: 4rem 0; transform: rotate(-2deg);">
                  <h3 style="font-size: 32px; font-weight: 900; margin-bottom: 1.5rem; transform: rotate(3deg); text-shadow: 3px 3px 0 #FFFF00; display: inline-block;">GRID VS CHAOS</h3>
                  <table style="width: 100%; border: 8px solid #000; border-collapse: separate; border-spacing: 0; box-shadow: 12px 12px 0 #000;">
                    <thead>
                      <tr style="background: #FF0000;">
                        <th style="padding: 1.5rem; border: 4px solid #000; font-weight: 900; color: #fff; text-align: left; transform: rotate(-1deg);">METRIC</th>
                        <th style="padding: 1.5rem; border: 4px solid #000; font-weight: 900; color: #fff; text-align: left; transform: rotate(1deg);">TRADITIONAL</th>
                        <th style="padding: 1.5rem; border: 4px solid #000; font-weight: 900; color: #fff; text-align: left; transform: rotate(-1deg);">CHAOS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="background: #fff;">
                        <td style="padding: 1.25rem; border: 4px solid #000; font-weight: 700;">Creativity</td>
                        <td style="padding: 1.25rem; border: 4px solid #000; background: #FFFF00;">⭐⭐</td>
                        <td style="padding: 1.25rem; border: 4px solid #000; background: #0000FF; color: #fff; font-weight: 900;">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr style="background: #f9f9f9;">
                        <td style="padding: 1.25rem; border: 4px solid #000; font-weight: 700;">Impact</td>
                        <td style="padding: 1.25rem; border: 4px solid #000; background: #FFFF00;">⭐⭐⭐</td>
                        <td style="padding: 1.25rem; border: 4px solid #000; background: #FF0000; color: #fff; font-weight: 900;">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr style="background: #fff;">
                        <td style="padding: 1.25rem; border: 4px solid #000; font-weight: 700;">Memorability</td>
                        <td style="padding: 1.25rem; border: 4px solid #000; background: #FFFF00;">⭐⭐</td>
                        <td style="padding: 1.25rem; border: 4px solid #000; background: #FFFF00; font-weight: 900;">⭐⭐⭐⭐⭐</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Chaotic List -->
                <div style="margin: 4rem 0;">
                  <h3 style="font-size: 32px; font-weight: 900; margin-bottom: 1.5rem; transform: rotate(-3deg); text-shadow: 3px 3px 0 #FF0000; display: inline-block;">KEY PRINCIPLES</h3>
                  <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 1.5rem; transform: rotate(2deg); background: linear-gradient(135deg, #FFFF00, #FF0000); padding: 1.5rem; border: 6px solid #000; box-shadow: 8px 8px 0 #000;">
                      <strong style="font-size: 20px; color: #000;">1. BREAK THE GRID</strong>
                      <p style="margin-top: 0.5rem; color: #000; font-weight: 600;">Forget 12-column layouts. Random positioning is your friend.</p>
                    </li>
                    <li style="margin-bottom: 1.5rem; transform: rotate(-3deg); background: linear-gradient(135deg, #0000FF, #00FFFF); padding: 1.5rem; border: 6px solid #000; box-shadow: 8px 8px 0 #000;">
                      <strong style="font-size: 20px; color: #fff;">2. ROTATE EVERYTHING</strong>
                      <p style="margin-top: 0.5rem; color: #fff; font-weight: 600;">Tilted elements add energy and movement.</p>
                    </li>
                    <li style="margin-bottom: 1.5rem; transform: rotate(4deg); background: linear-gradient(135deg, #FF0000, #FF00FF); padding: 1.5rem; border: 6px solid #000; box-shadow: 8px 8px 0 #000;">
                      <strong style="font-size: 20px; color: #fff;">3. CLASH COLORS</strong>
                      <p style="margin-top: 0.5rem; color: #fff; font-weight: 600;">Color theory is a suggestion, not a rule.</p>
                    </li>
                  </ul>
                </div>

                <p style="margin-bottom: 2rem; font-size: 20px; font-weight: 700; background: #000; color: #FFFF00; padding: 1.5rem; border: 6px solid #FF0000; box-shadow: 8px 8px 0 #FF0000; transform: rotate(-1deg);">
                  Remember: <span style="color: #fff;">Design rules are meant to be broken</span>. Embrace the chaos!
                </p>
              </div>

              <!-- Comments Section -->
              <section style="margin-top: 5rem; padding-top: 3rem; border-top: 8px solid #000;">
                <h2 style="font-size: 42px; font-weight: 900; margin-bottom: 2rem; transform: rotate(2deg); text-shadow: 4px 4px 0 #FFFF00; display: inline-block;">CHAOS COMMENTS (3)</h2>

                <!-- Comment 1 -->
                <div style="margin-bottom: 2rem; transform: rotate(-2deg); background: #f9f9f9; padding: 2rem; border: 6px solid #000; box-shadow: 8px 8px 0 #000;">
                  <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0000FF, #00FFFF); border: 5px solid #000; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff; transform: rotate(-15deg);">BC</div>
                    <div>
                      <div style="font-weight: 900; font-size: 16px;">Blake Chen</div>
                      <div style="font-size: 14px; color: #666;">1 DAY AGO</div>
                    </div>
                  </div>
                  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333;">
                    LOVE THIS! I've been experimenting with breaking grids for months. The results are mind-blowing! 🔥
                  </p>
                </div>

                <!-- Comment 2 -->
                <div style="margin-bottom: 2rem; transform: rotate(3deg); background: #fff; padding: 2rem; border: 6px solid #000; box-shadow: 8px 8px 0 #000;">
                  <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #FF0000, #FF00FF); border: 5px solid #000; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff; transform: rotate(20deg);">CS</div>
                    <div>
                      <div style="font-weight: 900; font-size: 16px;">Casey Smith</div>
                      <div style="font-size: 14px; color: #666;">18 HOURS AGO</div>
                    </div>
                  </div>
                  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333;">
                    This is exactly what the design world needs! Time to throw out the rulebook.
                  </p>
                </div>

                <!-- Comment 3 -->
                <div style="transform: rotate(-3deg); background: #f9f9f9; padding: 2rem; border: 6px solid #000; box-shadow: 8px 8px 0 #000;">
                  <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #FFFF00, #FF9800); border: 5px solid #000; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #000; transform: rotate(-25deg);">DW</div>
                    <div>
                      <div style="font-weight: 900; font-size: 16px;">Dana White</div>
                      <div style="font-size: 14px; color: #666;">12 HOURS AGO</div>
                    </div>
                  </div>
                  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333;">
                    Been following your work for a while - this article is pure genius! 💯
                  </p>
                </div>
              </section>
            </article>
          </div>
        `,
        styles: `
          * { margin: 0; padding: 0; box-sizing: border-box; }
          .chaos-detail-page { font-family: 'Arial Black', 'Impact', sans-serif; }
        `,
        description: 'styles.visual.anti-design.previews.articleDetailDesc',
        features: [
          'Giant tilted article title with multi-layer shadow',
          'Chaotic comparison table (Grid vs Chaos)',
          'Brutal list with random rotations',
          'Comment section with tilted comment cards',
          'Author avatars with bold borders',
          'Pure color contrast throughout'
        ],
        colorScheme: {
          'zh-cn': '純紅 + 純藍 + 純黃 + 純黑白',
          'en-US': 'Pure red + blue + yellow + black/white'
        },
        customPrompt: {
          'zh-CN': `你现在是一名痴迷 Anti-Design（反设计）风格的资深 UI 设计师兼前端工程师，请你为一篇「打破网格」主题的文章详情页生成完整 HTML 结构。这个详情页必须明显继承 Chaos Blog 列表页的视觉语言：巨大的倾斜标题、纯色块、大量粗黑边框和强烈阴影，同时在排版上更加聚焦阅读体验（但仍然是「带着噪音的阅读」）。

【使用场景】
- 页面类型：单篇博文详情页（Article Detail），来自一个 Anti-Design 主题博客；
- 文章主题：批判传统网格系统、鼓励打破对齐和留白规则；
- 目标：让读者在强烈视觉冲击中仍然能完成一篇文章的阅读，包括正文、对比表格、关键原则列表和评论区。

【整体布局结构】
1. 顶部导航条（简化版 Chaos Nav）
   - 使用与博客首页一致的黄→红渐变背景以及 8px 黑色底边；
   - 左侧是「← BACK TO CHAOS」返回链接，右侧是「CHAOS BLOG」字样，两端对齐，中间留白；
   - 导航整体略微旋转，保持 Anti‑Design 的不安定感，但不要盖住正文。

2. 文章头部（Article Header）
   - 分类标签：一个带红底白字、黑色粗边框的矩形标签（如 DESIGN），带轻微旋转和投影；
   - 主标题：使用超大字号粗黑体、倾斜 2–5 度，并叠加两层阴影（黄色高光 + 黑色重影），文案例如「Why Grids Are Overrated」，放在独立行中；
   - 元信息：作者头像块（旋转的彩色方块 + 作者缩写）、作者姓名、发布日期、阅读时长，使用横向排列，整体带一点随机位移。

3. 正文主体（Body）
   - 正文使用更易读的常规字体（如 Arial），字号约 16–18px，行距略大，默认黑色文本；
   - 每段正文之间留出足够的行距，但可以通过高亮标签、粗黑描边的 <strong> 块来制造 Anti‑Design 的突兀感；
   - 至少包含：
     - 引言段：说明传统网格和「像素级对齐」如何扼杀创造力；
     - 正文段：描述打破网格带来的可能性，适当地用彩色强调关键词；
     - 小标题：使用倾斜、加粗的小标题（例如「WHY GRIDS FEEL SAFE」）。

4. 对比表格（Grid vs Chaos）
   - 表格整体被外层 8px 黑边包裹，带大号偏移阴影；
   - 表头行背景使用纯红，文字为白色，列为 METRIC / TRADITIONAL / CHAOS，列标题本身也可以略微旋转；
   - 内容行示例：Creativity、Impact、Memorability、Brand Voice 等，每个单元格用纯色块模拟星级（可用 emoji 或文本），Chaos 一列的色彩更暴力、更饱和；
   - 整个表格可以整体稍微旋转 1–3 度，与正文形成对比。

5. 关键原则列表（Key Principles）
   - 使用无序列表，但每个列表项是一个独立卡片样式的块：背景为渐变（黄→红 / 蓝→青等）、6px 黑边、8px offset 阴影；
   - 每个条目包含一个短标题（例如「BREAK THE GRID」「ROTATE EVERYTHING」「CLASH COLORS」「OVERSHOOT SHADOWS」）以及 1–2 行解释；
   - 每个卡片自身具有不同的旋转角度、背景渐变方向和颜色组合，使列表呈现为一堆「贴纸」。

6. 评论区（Comments）
   - 至少设计 2–3 个评论卡片，每个卡片都有：
     - 左侧为旋转头像方块（线性渐变背景 + 粗黑边 + 缩写文字）；
     - 右侧为评论者姓名 + 时间标签；
     - 下方是评论正文，只要保持清晰可读即可；
   - 每个评论卡片整体有不同的旋转角度和背景色（白 / 浅灰 / 渐变），但都延续粗边框 + 强阴影。

【色彩与视觉语言】
1. 主色：纯红 #FF0000、纯黄 #FFFF00、纯蓝 #0000FF、黑 #000、白 #FFF；
2. 所有「重要模块」——标题卡片、表格、原则项、评论卡片——必须有 4–8px 黑色边框和不柔和的阴影；
3. 背景以白色为主，让正文可读，但局部用高饱和色块打断，保持 Anti‑Design 气质。

【交互与细节】
1. 不需要复杂交互，但可以为按钮式元素（如返回链接、部分 CTA）设置简单的 hover 效果：轻微放大 + 旋转角度减小；
2. 如使用锚点链接，可保持 HTML 原生行为，不必加入 JS 动画；
3. 所有链接和按钮应有足够可点击面积，并使用粗体或边框明确交互性。

【输出要求】
- 使用语义化 HTML 结构：header、nav、main、article、section、footer 等；
- 布局可以用 Tailwind 风格的原子类或你自定义的一小组类名；重点是让结构清晰、样式可复用；
- 禁止引入外部脚本和任何第三方 UI 库，仅使用 HTML + CSS（可包含少量 keyframes 动画）；
- 内容结构至少包含：文章标题区、引言、正文若干段、Grid vs Chaos 对比表、关键原则列表、评论区域；
- 整体视觉必须一眼看出是 Chaos Blog 列表页的延续：标题巨大、元素倾斜、色彩暴力，但正文区仍然可以连续阅读完一篇文章。`,
          'en-US': `You are a senior UI designer and front-end engineer specialising in Anti-Design. Your task is to create a full article detail page that feels like the logical continuation of the Chaos Blog homepage. The page must keep the same visual language (tilted headline, pure colors, heavy borders, harsh shadows) while being slightly more focused on readability.

[Usage Scenario]
- Page type: single article detail view for an Anti-Design themed blog;
- Topic: why traditional grid systems and pixel-perfect alignment can kill creativity;
- Goal: allow the user to read a full article (intro, body, comparison table, key principles, comments) without losing the chaotic, rebellious visual identity.

[Layout Structure]
1. Simplified Chaos Navigation
   - A sticky top bar with a pure yellow → red gradient background and an 8px black bottom border;
   - Left: a text link such as "← BACK TO CHAOS"; right: "CHAOS BLOG" wordmark;
   - The bar can be rotated slightly (around -1deg) but should not interfere with reading.

2. Article Header
   - Category badge: rectangular label (e.g. DESIGN) with pure red background, white text, thick black border and a small negative rotation;
   - Main title: very large, bold headline like "Why Grids Are Overrated", rotated a few degrees and wrapped in layered shadows (yellow highlight plus black shadow);
   - Meta row: avatar block (rotated gradient square with initials), author name, date and read time arranged in a horizontal cluster with small offsets and rotations.

3. Article Body
   - Use a more readable font for content text (e.g. Arial), around 16–18px with comfortable line height;
   - Paragraphs should be properly spaced but still allow Anti-Design moments: highlighted phrases inside bordered spans, strong emphasis blocks, occasional colored words;
   - Include:
     - An opening paragraph explaining the obsession with grids and pixel-perfect alignment;
     - Supporting paragraphs that show how breaking grids opens up creative possibilities, occasionally mentioning rotation, overlap and ignoring whitespace conventions;
     - One or more subheadings styled as smaller but still bold, tilted headings.

4. Grid vs Chaos Comparison Table
   - Full-width table wrapped by an 8px black border and a chunky offset shadow;
   - Header row uses pure red background with white text, three columns: METRIC / TRADITIONAL / CHAOS;
   - Body rows compare metrics like Creativity, Impact, Memorability, Brand Voice using star ratings or short labels; Chaos cells should use intense colors (blue, red, yellow) to emphasise how extreme the results are;
   - The entire table can be rotated slightly to visually contrast with the straight text paragraphs.

5. Key Principles List
   - Render as a list of card-like blocks rather than a simple bullet list;
   - Each principle (e.g. "BREAK THE GRID", "ROTATE EVERYTHING", "CLASH COLORS", "OVERSHOOT SHADOWS") lives inside a gradient background card with 6px black border, large offset shadow and a unique rotation angle;
   - Include a brief explanation (1–2 sentences) under each title in regular body font.

6. Comments Section
   - At least 2–3 comment blocks, each with:
     - A rotated avatar tile with gradient background and bold initials;
     - Commenter name and timestamp;
     - A paragraph of body text with normal readability;
   - Cards themselves should have thick black borders, angled edges, and shadows, with different background colors (white, light grey, gradients) to maintain chaotic variety.

[Color & Visual Language]
1. Primaries: pure red (#FF0000), pure yellow (#FFFF00), pure blue (#0000FF), black (#000000), white (#FFFFFF);
2. All key elements (badges, headline blocks, table, principle cards, comments) use 4–8px black borders and unapologetically strong, flat shadows;
3. Background remains mostly white to keep the text legible, while bold color blocks and gradients punctuate the layout to maintain Anti-Design flavour.

[Interactions & Details]
1. Hover on links and any CTA-like elements can straighten rotations slightly and scale up ~1.05x;
2. Active states may move elements down a couple of pixels with reduced shadow, simulating a physical press;
3. No complex JS interactions are needed; native HTML behaviour is sufficient.

[Output Requirements]
- Use semantic HTML (header, nav, main, article, section, footer);
- Use Tailwind-style utility classes or a small custom CSS utility set to handle spacing, layout and color, instead of huge monolithic styles;
- Do not import external scripts or UI libraries; rely only on HTML + CSS (with optional keyframe animations for decoration);
- The final article page must be clearly connected to the Chaos Blog index: same loud typography, same heavy borders and chaotic angles, yet structured enough for a full-article reading experience.`
        }
      },

      // Preview 4: 404 Error Page
      {
        id: 'error-404',
        name: 'styles.visual.anti-design.previews.error404',
        type: 'full',
        html: `
          <div style="min-height: 100vh; background: #fff; display: flex; align-items: center; justify-content: center; font-family: 'Arial Black', 'Impact', sans-serif; overflow: hidden; position: relative;">
            <!-- Floating Chaos Elements -->
            <div style="position: absolute; top: 10%; left: 5%; width: 100px; height: 100px; background: #FFFF00; border: 8px solid #000; transform: rotate(45deg); animation: chaos-404-float 4s ease-in-out infinite;"></div>
            <div style="position: absolute; bottom: 15%; right: 10%; width: 80px; height: 80px; background: #0000FF; border: 8px solid #000; border-radius: 50%; animation: chaos-404-bounce 3s ease-in-out infinite;"></div>
            <div style="position: absolute; top: 30%; right: 20%; width: 60px; height: 60px; background: #FF0000; border: 6px solid #000; transform: rotate(15deg); animation: chaos-404-spin 5s linear infinite;"></div>

            <!-- Main Content -->
            <div style="text-align: center; z-index: 1; max-width: 800px; padding: 2rem;">
              <!-- Giant 404 -->
              <div style="font-size: 180px; font-weight: 900; color: #000; text-shadow: 12px 12px 0 #FF0000, 24px 24px 0 #0000FF, 36px 36px 0 #FFFF00; transform: rotate(-8deg); margin-bottom: 2rem; line-height: 1; animation: chaos-404-shake 0.5s ease-in-out infinite;">
                404
              </div>

              <!-- Error Message -->
              <h1 style="font-size: 48px; font-weight: 900; color: #000; margin-bottom: 2rem; transform: rotate(3deg); text-shadow: 4px 4px 0 #FFFF00; animation: chaos-404-wiggle 2s ease-in-out infinite;">
                PAGE NOT FOUND!
              </h1>

              <p style="font-size: 20px; font-weight: 700; color: #333; margin-bottom: 3rem; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.6;">
                Looks like this page got lost in the <span style="background: #FF0000; color: #fff; padding: 0 0.5rem; border: 3px solid #000; transform: rotate(-5deg); display: inline-block;">CHAOS</span>!
                Maybe it never followed the rules...
              </p>

              <!-- Chaotic Buttons -->
              <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                <a href="javascript:void(0)" style="display: inline-block; padding: 1.5rem 3rem; background: #000; color: #FFFF00; border: 8px solid #000; font-weight: 900; font-size: 20px; text-decoration: none; box-shadow: 8px 8px 0 #FF0000, 16px 16px 0 #000; transform: rotate(-8deg); transition: all 0.3s; animation: chaos-404-pulse 2s ease-in-out infinite;">
                  ← BACK TO CHAOS
                </a>
                <a href="javascript:void(0)" style="display: inline-block; padding: 1.5rem 3rem; background: #0000FF; color: #fff; border: 8px solid #000; font-weight: 900; font-size: 20px; text-decoration: none; box-shadow: 8px 8px 0 #FFFF00, 16px 16px 0 #000; transform: rotate(5deg); transition: all 0.3s;">
                  START FRESH
                </a>
              </div>

              <!-- Error Code -->
              <div style="margin-top: 4rem; padding: 1.5rem; background: linear-gradient(135deg, #FFFF00, #FF0000); border: 6px solid #000; box-shadow: 8px 8px 0 #000; transform: rotate(-2deg);">
                <p style="font-weight: 900; font-size: 16px; color: #000; letter-spacing: 2px;">
                  ERROR CODE: <span style="color: #fff; background: #000; padding: 0.25rem 0.75rem; border: 3px solid #fff;">CHAOS_404_ANARCHY</span>
                </p>
              </div>
            </div>

            <style>
              @keyframes chaos-404-float {
                0%, 100% { transform: rotate(45deg) translateY(0); }
                50% { transform: rotate(50deg) translateY(-30px); }
              }

              @keyframes chaos-404-bounce {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-30px) scale(1.1); }
              }

              @keyframes chaos-404-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              @keyframes chaos-404-shake {
                0%, 100% { transform: rotate(-8deg); }
                25% { transform: rotate(-7deg) translateX(-5px); }
                50% { transform: rotate(-9deg) translateX(5px); }
                75% { transform: rotate(-7.5deg) translateX(-3px); }
              }

              @keyframes chaos-404-wiggle {
                0%, 100% { transform: rotate(3deg); }
                25% { transform: rotate(4deg); }
                50% { transform: rotate(2deg); }
                75% { transform: rotate(3.5deg); }
              }

              @keyframes chaos-404-pulse {
                0%, 100% { transform: rotate(-8deg) scale(1); }
                50% { transform: rotate(-8deg) scale(1.05); }
              }
            </style>
          </div>
        `,
        styles: `
          * { margin: 0; padding: 0; box-sizing: border-box; }
        `,
        description: 'styles.visual.anti-design.previews.error404Desc',
        features: [
          'Giant 404 with triple-layer shadow and shake animation',
          'Floating chaotic geometric elements',
          'Explosive error message with wiggle effect',
          'Brutal CTA buttons with violent shadows',
          'Pulsing and rotating animations',
          'Pure color contrast (red + blue + yellow)'
        ],
        colorScheme: {
          'zh-cn': '純紅 + 純藍 + 純黃 + 純黑白',
          'en-US': 'Pure red + blue + yellow + black/white'
        },
        customPrompt: {
          'zh-CN': `你现在是一名 Anti-Design（反设计）风格的 UI 设计师兼前端工程师，请为一个 404 错误页面生成完整 HTML 结构。这个页面不是温柔的「迷路了」，而是彻底拥抱混乱与失控：巨大的 404 数字、到处乱飞的几何形状、强烈的纯色对撞和极粗的黑色描边。用户一眼就知道「这里炸了」，但仍然能找到清晰的返回或重新开始按钮。

【使用场景】
- 场景：品牌官网或实验性博客的 404 错误页；
- 品牌调性：高饱和、反传统、敢于「丑」的 Anti-Design 品牌；
- 目标：让用户在迷路时被强烈视觉冲击，同时引导其返回首页或重新探索。

【整体布局结构】
1. 全屏容器
   - 使用 min-height: 100vh 居中布局，背景为纯白打底，方便高饱和色块「炸」出来；
   - 容器本身可以不旋转，但内部所有关键元素都可以有不同角度；
   - 页面顶部或侧面不需要常规导航，让注意力集中在错误信息与动作按钮上。

2. 浮动混乱元素（Floating Chaos）
   - 至少 3 个几何形状（方块、圆形、三角形等）散落在四周：
     - 例如左上角黄色方块：纯黄背景 + 8px 黑色边框 + 旋转 45°；
     - 右下角蓝色圆形：纯蓝背景 + 8px 黑边 + 弹跳动画；
     - 右上角红色小方块：纯红背景 + 6px 黑边 + 旋转动画；
   - 这些元素使用 CSS keyframes 做缓慢浮动、上下弹跳或旋转，营造「错误页面本身在震动」的感觉。

3. 超大 404 标题
   - 居中区域放置巨大的「404」数字，使用极端粗黑体（或模拟），字号远大于其它文本；
   - 文本添加多层阴影：例如红色、蓝色、黄色三个方向的实心阴影，产生浓厚的印刷海报感；
   - 整个 404 容器倾斜约 -8°，并且可以使用轻微的左右抖动动画（如 0.5 秒一周期）模拟地震感。

4. 错误文案（Message）
   - 主副标题使用简短但情绪化的语言，例如「PAGE NOT FOUND!」+ 一句荒诞的解释；
   - 主副标题也可以带轻微旋转和 text-shadow，与 404 数字形成一个混乱的「标题堆」；
   - 正文文案可使用 1–2 句补充说明，例如「Looks like this page got lost in the CHAOS」之类，保持幽默感。

5. 行为按钮（Actions）
   - 至少两个按钮：
     - 主按钮：返回主页或返回「混乱世界」，例如「← BACK TO CHAOS」，黑底黄字、8px 黑边、巨大偏移阴影，整体旋转 -8° 并带有轻微缩放脉动动画；
     - 次按钮：重新开始或查看其他页面（如「START FRESH」），蓝底白字、同样粗边框和阴影，旋转 5°；
   - Hover 状态：按钮略微回正并放大 5%，阴影加深；Active 状态：按钮下沉 2–3px，阴影变小。

6. 错误码与附加信息
   - 在按钮下方设计一个像警告牌一样的色块，使用黄色到红色渐变背景、黑色粗边框和 offset 阴影；
   - 内部展示错误代码（例如 CHAOS_404_ANARCHY），可用黑底白字小标签包裹；
   - 可附上一两句小号文本作为彩蛋，比如「Maybe this page never followed the rules...」。

【色彩与视觉语言】
1. 主色：纯红 #FF0000、纯黄 #FFFF00、纯蓝 #0000FF，辅以黑白；
2. 所有重要元素（404 数字、按钮、错误码条、浮动几何）必须有厚实的黑色描边和极具存在感的阴影；
3. 避免使用柔和渐变或中性灰，保持「大声说话」的视觉风格。

【交互与动效】
1. 404 数字使用轻微左右晃动动画（shake），周期短促，传达一种「页面不稳定」的感觉；
2. 浮动几何图形使用上下浮动 / 弹跳 / 缓慢旋转动画，但频率不要过高，确保文字仍可阅读；
3. Hover 效果集中在按钮与可能可点击的文案上，使用缩放 + 旋转变化突出交互性。

【输出要求】
- 使用语义化 HTML 结构：最外层可用 <main> 或 <section> 包裹主要内容，内部包含显式的标题、说明文本和按钮区域；
- 使用 Tailwind 风格的原子类或自定义类名组织样式，但必须在代码中体现粗边框、偏移阴影、旋转、动画等核心特征；
- 禁止加载任何外部脚本库或 UI 框架，只使用 HTML + CSS（含 keyframes 动画）；
- 页面应在桌面与移动端都保持「强烈但可用」：移动端可以适当减小 404 字号、压缩动画数量，但不放弃 Anti‑Design 的激烈视觉风格；
- 整体观感必须和现有 Chaos Blog 404 Demo 高度一致：巨大的倾斜数字、漂浮几何、爆炸式配色和粗暴阴影，但同时给出清晰的回退路径。`,
          'en-US': `You are a UI designer and front-end engineer specialising in Anti-Design. Create a full 404 error page in HTML that embraces chaos instead of hiding it. This is not a polite "oops" screen; it should shout "something broke" with a giant 404, flying shapes, violent color clashes and brutal shadows, while still providing clear ways to go back or start over.

[Usage Scenario]
- Context: 404 error page for an experimental, anti‑design brand or blog;
- Brand voice: loud, unapologetic, happy to look "wrong" as long as it is memorable;
- Goal: turn getting lost into a small visual event, but keep navigation options obvious.

[Layout Structure]
1. Fullscreen Container
   - Use a full-viewport container (min-height: 100vh) with centered content and a plain white base;
   - The container itself can stay straight, but key elements inside should be rotated and misaligned;
   - Do not display a full traditional navigation bar — focus the user on the error and the actions.

2. Floating Chaos Elements
   - Place at least three bold geometric shapes around the edges:
     - A yellow rotated square with a thick black border in the top-left;
     - A blue circle with a black stroke and bounce animation in the bottom-right;
     - A small red square near the top-right that spins slowly;
   - All shapes should have 6–8px black borders and simple keyframe animations (float, bounce, spin) to suggest ongoing chaos.

3. Giant 404
   - Center a huge "404" heading using ultra-bold type and multiple colored shadows (red, blue, yellow);
   - Rotate the whole 404 block around -8deg and animate it with a subtle shake effect to make it feel unstable;
   - This is the visual anchor of the page and must dominate the viewport.

4. Error Message
   - Add a main message line like "PAGE NOT FOUND!" with a slightly smaller but still bold font size;
   - Apply a small rotation and a bright yellow text shadow to keep it visually tied to the 404;
   - A supporting paragraph can explain the situation in a playful tone (for example: "Looks like this page got lost in the CHAOS. Maybe it never followed the rules...").

5. Action Buttons
   - Provide at least two calls-to-action:
     - Primary: a "BACK TO CHAOS" or "GO HOME" button in black with yellow text, 8px black border and big offset red shadow, rotated a few degrees and pulsing gently;
     - Secondary: a blue button (e.g. "START FRESH" or "VIEW OTHER PAGES") with yellow shadow and its own tilt;
   - Hover: straighten slightly and scale up around 1.05x while shadows deepen;
   - Active: button moves down by 2–3px and shadows shrink.

6. Error Code Panel
   - Below the buttons, place a warning-style banner built from a yellow→red gradient background, thick black border and heavy offset shadow;
   - Inside, show an error code like CHAOS_404_ANARCHY in a black pill with white text and its own small border;
   - Optionally add a tiny line of explanatory or humorous copy underneath.

[Color & Visual Style]
1. Primary colors: pure red (#FF0000), pure yellow (#FFFF00), pure blue (#0000FF), black (#000000), white (#FFFFFF);
2. All important elements use heavy black strokes and flat, offset shadows — little to no soft gradients or subtle strokes;
3. Avoid grey, pale gradients or "corporate" palettes; the page should feel like a poster rather than a serious system error.

[Interaction & Motion]
1. The 404 uses a quick shake animation with a short cycle (around 0.5s) to create tension;
2. Floating shapes loop with slower durations (3–5s) so they feel alive but not dizzying;
3. Button hover and active states should clearly communicate interactivity without requiring scripting.

[Output Requirements]
- Use semantic HTML elements (main, section, h1/h2, p, nav or div for actions) with clear structure;
- Use Tailwind-like utility classes or a small set of custom CSS classes to express rotations, shadows, spacing and colors;
- Do not rely on external scripts or UI libraries; all behaviour should be achievable with HTML + CSS (including keyframes);
- The final page should be instantly recognisable as part of the Chaos Blog Anti‑Design family: oversized tilted typography, loud pure colors, strong shadows and shapes in motion, but with action buttons that are easy to see and click.`
        }
      }
    ]
};
