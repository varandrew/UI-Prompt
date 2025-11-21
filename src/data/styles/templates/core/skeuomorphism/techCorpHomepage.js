// Single template module: Skeuomorphism — Tech Corp Homepage
// Note: code comments in English per repository guideline.
// Contains 3 template variations accessible via previews

import {
  skeuomorphismTechCompanyFullPageHTML,
  skeuomorphismTechCompanyFullPageStyles
} from './skeuomorphismTechCompanyFullPage'

import {
  skeuomorphismHomeOfficeFullPageHTML,
  skeuomorphismHomeOfficeFullPageStyles,
} from './skeuomorphismHomeOfficeFullPage'

import {
  vintageLibraryFullPageHTML,
  vintageLibraryFullPageStyles,
} from './skeuomorphismVintageLibraryFullPage'

import { homeOfficeDashboard } from './homeOfficeDashboard'
import { vintageLibraryLanding } from './vintageLibraryLanding'

export const techCorpHomepage = {
  id: 'core-skeuomorphism-tech-corp-homepage',
  title: 'styles.core.skeuomorphism.techCorpHomepage.title',
  description: 'styles.core.skeuomorphism.techCorpHomepage.description',

  // ✨ AI 专用 Prompt（用於生成与當前「科技公司主页」極為接近的擬物化 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「科技公司主页」界面风格高度接近的拟物化 (Skeuomorphism) 科技公司官网首页。
要求：保持整体布局、质感和配色思路基本不变，只允许替换文案、品牌名称和少量细节。输出使用语义化 HTML 结构和类似 TailwindCSS 的原子类。

【使用场景】
- 目标：用于 B2B 科技企业官网首页，主要受众是企业决策者与技术负责人。
- 整体气质：高端、冷静、可靠、偏硬件感的「高科技仪表盘」式官网。

【整体布局结构】
1. 顶部导航栏
   - 布局：水平导航条，居中宽度约 1120–1280px，左右留出呼吸空白。
   - 背景：深色金属渐变，接近 #020617 → #020617 → #020617 ~ #0f172a。
   - 左侧：品牌 LOGO 文本（大写英文字母），使用金属渐变文字（#cbd5e1 → #94a3b8 → #64748b），带明显 text-shadow。
   - 右侧：4–5 个导航链接 + 1 个主 CTA 按钮。
   - CTA 按钮：蓝色渐变背景（#3b82f6 → #2563eb），上下高光 + 多层阴影模拟实体按键。

2. Hero 主视觉玻璃面板
   - 面板：居中大尺寸玻璃卡片，背景为半透明白色 rgba(255,255,255,0.05–0.08)，带 blur 和内外阴影。
   - 边框：1px solid rgba(255,255,255,0.1)，外阴影 0 20px 60px rgba(0,0,0,0.4)。
   - 内容：两行主标题（上行金属字，下行品牌蓝渐变大字）、一行副标题、两个按钮（主按钮蓝色、次按钮蓝灰金属）。
   - 标题示例风格：
     - 金属字：线性渐变 #e2e8f0 → #94a3b8 → #475569，字距略大，带 0 4px 8px rgba(0,0,0,0.3) 阴影。
     - 品牌字：线性渐变 #60a5fa → #3b82f6 → #2563eb。

3. 状态条 (Status Bar)
   - 位于玻璃面板下方，水平排列 3 个状态项。
   - 每项包含一个 LED 点 + 标签文字，例如「SYSTEM ONLINE」「LOW LATENCY」「SLA 99.99%」。
   - LED 颜色规范：
     - 绿色 (#10b981)：正常 / 运行中。
     - 蓝色 (#3b82f6)：信息 / 一般状态。
     - 橙色 (#f97316)：警告 / 需要关注。

4. 功能卡片区 (Features)
   - 使用 3–4 张功能卡片，以玻璃 + 金属质感呈现。
   - 卡片背景：rgba(255,255,255,0.03–0.06)，带轻微玻璃模糊、细边框和柔和阴影。
   - 内容：顶部小图标、标题、副标题/说明 2–3 行。
   - 悬停：卡片整体向上平移 6–8px，阴影加深，边框轻微发出蓝色光晕。

5. 底部控制面板 (Control Panel)
   - 含多组拟物化旋钮、开关、滑杆，布局在一个深色金属容器中。
   - 控件主色：深蓝灰渐变 (#64748b → #475569 → #334155)，外圈有厚重阴影，内圈有高光。
   - 旋钮在 hover 时略微上浮，active 时向下压并轻微旋转。

【色彩与排版规范】
- 背景主色：#020617 ~ #0b1120 深蓝灰渐变，适当加入柔光或径向高光。
- 面板与卡片：半透明白 + 蓝色光晕，突出玻璃与金属质感。
- 品牌蓝：#2563eb、#3b82f6，用于主按钮、重要链接、LED、发光描边。
- 正文文字：#cbd5e1、#e2e8f0，保证在深色背景下有足够对比度。
- 字体：无衬线、较粗标题 + 中等粗细正文字体，字距略放大以体现科技感。

【交互与动效】
- 按钮 Hover：向上平移 2–3px，阴影加深，出现轻微蓝色外发光。
- 按钮 Active：向下平移 2–3px，阴影高度变小，模拟机械按压。
- 卡片 Hover：上浮、边框变亮，背景透明度略提升。
- LED：使用 CSS 动画让 box-shadow 和不透明度做缓慢呼吸变化。

【输出要求】
- 使用语义化 HTML (<header>、<nav>、<main>、<section>、<footer>)。
- 使用类似 TailwindCSS 的原子类控制间距、排版和对齐。
- 生成结果在布局结构、色彩搭配和光影质感上，应与上述描述高度贴近，让人一眼认出是金属 + 玻璃的高端科技公司拟物化首页。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a skeuomorphic tech company homepage that looks very close to the current “Tech Corp Homepage” demo.
Keep the overall layout, material feeling and color strategy almost identical: dark brushed-metal background, central glass main panel, metal buttons, LED status indicators and dashboard-like composition. You may change text, brand name and small details, but not the core structure or material language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: B2B technology company homepage targeted at enterprise decision makers and technical leaders.
- Mood: high-end, cold, reliable, with a strong hardware-inspired “control panel” feeling.

[Layout]
1. Top navigation bar on a dark metal gradient background with centered content width and generous horizontal padding.
2. Left side: metallic logo text in uppercase; right side: 4–5 navigation links plus one primary call-to-action button.
3. Center hero glass panel acting as the main console: two-line title (upper metallic line and lower brand-blue gradient line), subtitle and two buttons (primary blue, secondary blue-grey metal).
4. Directly beneath the hero panel, a horizontal status bar with three status items, each composed of an LED dot and label text such as SYSTEM ONLINE, LOW LATENCY and SLA 99.99%.
5. Below the status bar, a row of feature cards with glass+metal treatment; at the bottom, a control-panel section with skeuomorphic knobs, switches and sliders in a dark metal container.

[Materials and colors]
1. Background uses dark blue-grey metal gradients with soft radial highlights to simulate a premium device chassis.
2. Glass panels use semi-transparent light surfaces with blur, thin bright borders and strong drop shadows to appear floating above the metal.
3. Buttons use blue gradients with bright top edges and darker bottoms plus inner highlights to feel like real physical keys.
4. LED indicators use saturated green for normal, blue for informational and orange for warnings, each with a bright center and soft halo.
5. Text colors are light greys and off-whites for body content, while headings may use metallic gradients to echo the hardware theme.

[Interaction]
1. Hover over buttons subtly adjusts highlights and shadows to mimic metal reacting to light and may lift the button slightly.
2. Active button presses push the button down with reduced height and stronger inner shadow, simulating mechanical interaction.
3. Feature cards lift 6–8 pixels on hover with deeper shadows and a faint blue glow around edges; knobs and switches can rotate or move slightly on hover and press.

[Output requirements]
- Use semantic HTML structure with separate regions for navigation, hero glass panel, status bar, feature cards and bottom control panel.
- Use Tailwind-style utility classes to express layout, spacing, colors and layered shadows (or equivalent utility classes).
- The generated homepage must preserve the recognisable traits of this skeuomorphic tech site: dark metal background, central glass console, physical-feeling buttons, LED status bar and dense control-panel layout.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于拟物化设计的 UI 设计师，专注于现代科技公司官网的高端视觉设计。

场景定位：
为现代科技企业打造具有专业感和科技感的网站首页，通过拟物化材质传达品牌的可靠性和创新力。目标用户为企业客户和技术决策者，需要在视觉上体现高端、精密、专业的品牌形象。界面要求在保持专业性的同时，展现出前沿技术和人性化设计的平衡，让访问者在第一时间感受到品牌的技术实力和服务品质。

视觉设计理念：
采用高端科技产品的质感设计语言，通过精心打造的材质细节和细腻的光影处理，营造出专业而不失温度的品牌形象。设计强调真实感与现代感的融合，让数字界面具有物理产品般的质感和可信度。整体风格追求精致、克制的奢华感，通过材质的精雕细琢而非过度装饰来体现品质。界面运用冷色调为主的配色系统，营造出专业、沉稳、高科技的视觉氛围。

材质与质感：
主视觉采用拉丝金属面板，呈现出细腻的方向性纹理和柔和的金属光泽，如同高端笔记本电脑的铝合金外壳般精致。整体背景为浅灰蓝色调，给人以清爽专业的视觉印象。卡片元素使用磨砂玻璃效果，边缘带有细微的高光反射，营造出轻盈而现代的层次感。按钮设计模拟实体按键的触感，具有明显的凸起质感和按压回弹，让数字交互拥有物理世界的真实反馈。LED 指示灯设计模拟真实电子设备的状态灯，中心明亮边缘柔和扩散，带有真实的光晕效果。所有元素都运用多层阴影系统，通过外阴影营造深度、内阴影增加凹陷感，组合打造出复杂而精致的材质感受。

交互体验：
所有交互都强调物理反馈的真实性，鼠标悬停时按钮会展现出细微的光泽变化，如同金属表面在光线下的自然反应。点击时按钮产生明显的下压动作，伴随着内阴影的变化，完美模拟真实按压的触觉反馈。动画节奏采用物理曲线，快速响应用户操作但不失流畅感。页面滚动流畅而有质感，卡片元素在进入视口时展现出细腻的浮现动画，营造出专业工具的精密感。按钮的边框设计上亮下暗，模拟自然光照效果，悬停时增强顶部高光而非改变颜色，保持视觉连贯性。

氛围营造：
整体界面营造出高端科技公司的专业氛围，如同走进一间精心设计的现代办公空间。冷色调为主的配色系统包含浅灰蓝背景、深蓝黑文字和品牌蓝强调色，传递出专业、可靠、创新的品牌印象。细腻的材质处理和精确的光影效果，让界面在数字与现实之间找到完美的平衡点，既具有科技感又不失人性化温度。金属和玻璃材质的对比保持柔和，避免过度刺眼，营造出沉稳专业的视觉基调。LED 指示灯遵循通用语义，绿色代表正常运行、蓝色代表信息提示、橙色代表警告状态。整体设计避免过多装饰性元素，保持极简主义的专业形象，让内容成为绝对焦点。`,

    'en-US': `Role: You are a UI designer specializing in Skeuomorphism design, focusing on high-end visual design for modern tech company websites.

Scenario Positioning:
Create a professional and tech-savvy website homepage for modern technology enterprises, conveying brand reliability and innovation through skeuomorphic materials. Target users are enterprise clients and technical decision-makers who need interfaces that visually reflect high-end, precise, and professional brand imagery. The interface must balance professionalism with cutting-edge technology and humanized design, allowing visitors to immediately sense the brand's technical strength and service quality.

Visual Design Philosophy:
Adopt the textural design language of high-end tech products, creating a professional yet warm brand image through carefully crafted material details and delicate light-shadow treatment. The design emphasizes the fusion of realism and modernity, giving digital interfaces the texture and credibility of physical products. The overall style pursues refined, restrained luxury, reflecting quality through meticulous material craftsmanship rather than excessive decoration. The interface employs a cool-toned color system to create a professional, stable, high-tech visual atmosphere.

Materials & Textures:
The main visual uses brushed metal panels, presenting delicate directional textures and soft metallic luster, as refined as the aluminum alloy shell of premium laptops. The overall background features light gray-blue tones, giving a fresh and professional visual impression. Card elements feature frosted glass effects with subtle edge highlights, creating a light and modern sense of depth. Button designs simulate the feel of physical keys with obvious raised texture and press rebound, giving digital interaction real-world physical feedback. LED indicator designs simulate real electronic device status lights, with bright centers and soft edge diffusion creating realistic halo effects. All elements employ multi-layer shadow systems, using outer shadows to create depth and inner shadows to add indentation, combining to create complex and refined material sensations.

Interaction Experience:
All interactions emphasize the authenticity of physical feedback. On hover, buttons show subtle luster changes like natural reactions of metal surfaces under light. On click, buttons produce obvious press-down motion with inner shadow changes, perfectly simulating real tactile press feedback. Animation rhythm adopts physical curves, responding quickly to user operations while maintaining fluidity. Page scrolling is smooth and textured, with card elements showing delicate emergence animations upon entering viewport, creating the precision feel of professional tools. Button borders are designed lighter on top and darker on bottom to simulate natural lighting effects, with enhanced top highlights on hover rather than color changes, maintaining visual continuity.

Atmosphere Creation:
The overall interface creates the professional atmosphere of a high-end tech company, like entering a meticulously designed modern office space. The cool-toned color system includes light gray-blue backgrounds, deep blue-black text, and brand blue accents, conveying a professional, reliable, and innovative brand impression. Delicate material treatment and precise light-shadow effects allow the interface to find perfect balance between digital and reality, being both tech-savvy and humanly warm. The contrast between metal and glass materials remains soft, avoiding excessive glare, creating a stable and professional visual foundation. LED indicators follow universal semantics: green represents normal operation, blue represents information prompts, orange represents warning status. The overall design avoids excessive decorative elements, maintaining a minimalist professional image that makes content the absolute focus.`
  },

  demoHTML: `
    <div class="sk-corp">
      <header class="sk-corp__nav" role="navigation" aria-label="Main Navigation">
        <div class="sk-corp__brand">TechCorp</div>
        <nav class="sk-corp__menu">
          <a>Products</a>
          <a>Solutions</a>
          <a>Pricing</a>
          <a>Support</a>
        </nav>
        <button class="sk-corp__cta">Get Started</button>
      </header>

      <section class="sk-corp__hero" role="banner">
        <div class="sk-corp__panel">
          <h1>Next‑Gen Enterprise Cloud</h1>
          <p>Blend skeuomorphic depth with modern usability for trustworthy experiences.</p>
          <div class="sk-corp__actions">
            <button class="sk-btn sk-btn--primary">Launch</button>
            <button class="sk-btn sk-btn--ghost">Learn More</button>
          </div>
        </div>
      </section>

      <section class="sk-corp__features" aria-label="Key Features">
        <div class="sk-feature">
          <div class="sk-led sk-led--green"></div>
          <h3>Secure & Reliable</h3>
          <p>Glass panels and metal edges imply trust and professionalism.</p>
        </div>
        <div class="sk-feature">
          <div class="sk-led sk-led--blue"></div>
          <h3>Fast Iteration</h3>
          <p>Knobs and layered depth convey performance and control.</p>
        </div>
        <div class="sk-feature">
          <div class="sk-led sk-led--orange"></div>
          <h3>Scalable Design</h3>
          <p>Modular patterns and consistent visuals ease maintenance.</p>
        </div>
      </section>
    </div>
  `,
  customStyles: `
    .sk-corp {
      --panel: #f5f7fb;
      --ink: #0b1220;
      --muted: #5b667a;
      --brand: #2563eb;
      --edge: rgba(0,0,0,0.15);
      --glass: rgba(255,255,255,0.6);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: var(--ink);
    }
    .sk-corp__nav {
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 16px; border-radius: 12px; margin-bottom: 12px;
      background: linear-gradient(180deg, var(--panel), #e9edf6);
      box-shadow: inset 0 1px 0 #fff, 0 6px 18px var(--edge);
      border: 1px solid rgba(12, 20, 36, 0.08);
    }
    .sk-corp__brand { font-weight: 800; letter-spacing: 0.02em; }
    .sk-corp__menu { display: flex; gap: 16px; color: var(--muted); }
    .sk-corp__menu a { cursor: pointer; }
    .sk-corp__cta {
      padding: 8px 12px; border-radius: 10px; border: 0;
      background: linear-gradient(180deg, #fff, var(--glass));
      box-shadow: inset 0 1px 0 #fff, 0 4px 10px var(--edge);
      color: var(--ink); font-weight: 600;
    }
    .sk-corp__hero { padding: 14px 0; }
    .sk-corp__panel {
      padding: 20px; border-radius: 18px;
      background: linear-gradient(180deg, var(--panel), #e8eef9);
      box-shadow: inset 0 1px 0 #fff, 0 10px 24px var(--edge);
      border: 1px solid rgba(12, 20, 36, 0.08);
    }
    .sk-corp__panel h1 { margin: 0 0 8px; font-size: 20px; }
    .sk-corp__panel p { margin: 0 0 12px; color: var(--muted); }
    .sk-corp__actions { display: flex; gap: 8px; }
    .sk-btn {
      padding: 8px 12px; border-radius: 10px; border: 0; cursor: pointer;
      box-shadow: inset 0 1px 0 #fff, 0 4px 10px var(--edge);
    }
    .sk-btn--primary { background: linear-gradient(180deg, #3b82f6, #2563eb); color: #fff; }
    .sk-btn--ghost { background: linear-gradient(180deg, #fff, var(--glass)); color: var(--ink); }
    .sk-corp__features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 12px; }
    .sk-feature {
      padding: 12px; border-radius: 14px;
      background: linear-gradient(180deg, #fff, #eef2f9);
      border: 1px solid rgba(12, 20, 36, 0.08);
      box-shadow: inset 0 1px 0 #fff, 0 8px 16px var(--edge);
    }
    .sk-feature h3 { margin: 8px 0 6px; font-size: 14px; }
    .sk-feature p { margin: 0; color: var(--muted); font-size: 12px; }
    .sk-led { width: 8px; height: 8px; border-radius: 50%; display: inline-block; box-shadow: 0 0 12px currentColor; }
    .sk-led--green { color: #22c55e; }
    .sk-led--blue { color: #3b82f6; }
    .sk-led--orange { color: #f59e0b; }
  `,
  fullPageHTML: skeuomorphismTechCompanyFullPageHTML,
  fullPageStyles: skeuomorphismTechCompanyFullPageStyles,

  // Multiple template previews
  previews: [
    // Preview 1: Tech Corp Homepage
    {
      id: 'tech-corp-homepage',
      name: 'styles.core.skeuomorphism.preview.techCorpHomepage',
      type: 'fullpage',
      html: skeuomorphismTechCompanyFullPageHTML,
      styles: skeuomorphismTechCompanyFullPageStyles,
      // 使用 Tech Corp Homepage 专用 customPrompt（含专屬色彩与材质說明）
      get customPrompt() {
        return techCorpHomepage.customPrompt;
      },
      // ✨ 使用 techCorpHomepage 的 stylePrompt（稍后通过代码注入）
      get stylePrompt() {
        return techCorpHomepage.stylePrompt;
      }
    },
    // Preview 2: Home Office Dashboard
    {
      id: 'home-office-dashboard',
      name: 'styles.core.skeuomorphism.preview.homeOfficeDashboard',
      type: 'fullpage',
      html: skeuomorphismHomeOfficeFullPageHTML,
      styles: skeuomorphismHomeOfficeFullPageStyles,
      // ✨ 使用 homeOfficeDashboard 专用 customPrompt
      customPrompt: homeOfficeDashboard.customPrompt,
      // ✨ 引用 homeOfficeDashboard 的 stylePrompt
      stylePrompt: homeOfficeDashboard.stylePrompt,
    },
    // Preview 3: Vintage Library Landing
    {
      id: 'vintage-library-landing',
      name: 'styles.core.skeuomorphism.preview.vintageLibraryLanding',
      type: 'fullpage',
      html: vintageLibraryFullPageHTML,
      styles: vintageLibraryFullPageStyles,
      // ✨ 使用 vintageLibraryLanding 专用 customPrompt
      customPrompt: vintageLibraryLanding.customPrompt,
      // ✨ 引用 vintageLibraryLanding 的 stylePrompt
      stylePrompt: vintageLibraryLanding.stylePrompt,
    },
  ],
};
