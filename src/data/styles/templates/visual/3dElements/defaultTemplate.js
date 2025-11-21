// Phase 3 Batch 2 - 3D Elements Template
// 視覺元素：3D元素
// 从 visualTechStyles.js 遷移

import {
  visualTech3dElementsFullPageHTML,
  visualTech3dElementsFullPageStyles
} from './3dElementsFullPage';

export const visualTech3dElements = {
  id: 'visual-tech-3d-elements',
  title: 'styles.visual.3d-elements.title',
  description: 'styles.visual.3d-elements.description',
  
  demoHTML: `
      <div class="relative w-full h-full flex items-center justify-center">
        <div class="rotating-cube">
          <div class="cube-face cube-front">3D</div>
          <div class="cube-face cube-back"></div>
          <div class="cube-face cube-right"></div>
          <div class="cube-face cube-left"></div>
          <div class="cube-face cube-top"></div>
          <div class="cube-face cube-bottom"></div>
        </div>
      </div>
`,
  
  customStyles: `
      .rotating-cube {
        width: 100px;
        height: 100px;
        position: relative;
        transform-style: preserve-3d;
        animation: rotate3d 10s linear infinite;
      }
      .cube-face {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 0.5rem;
        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
      }
      .cube-front {
        background: linear-gradient(to bottom right, #3b82f6, #8b5cf6);
        transform: translateZ(50px);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 0.75rem;
      }
      .cube-back {
        background: linear-gradient(to bottom right, #10b981, #14b8a6);
        transform: rotateY(180deg) translateZ(50px);
      }
      .cube-right {
        background: linear-gradient(to bottom right, #ec4899, #ef4444);
        transform: rotateY(90deg) translateZ(50px);
      }
      .cube-left {
        background: linear-gradient(to bottom right, #f97316, #eab308);
        transform: rotateY(-90deg) translateZ(50px);
      }
      .cube-top {
        background: linear-gradient(to bottom right, #8b5cf6, #6366f1);
        transform: rotateX(90deg) translateZ(50px);
      }
      .cube-bottom {
        background: linear-gradient(to bottom right, #6b7280, #475569);
        transform: rotateX(-90deg) translateZ(50px);
      }
      @keyframes rotate3d {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        100% { transform: rotateX(360deg) rotateY(360deg); }
      }
`,
  
  demoBoxClass: 'bg-gradient-to-br from-purple-100 to-pink-100',
  demoBoxStyle: 'perspective: 1000px;',
  
  colorScheme: {
    'zh-cn': '深藍漸变 (#1E40AF)、紫色漸变 (#7C3AED)、白色文字 (#FFFFFF)、3D阴影效果',
    'en-US': 'Deep blue gradient (#1E40AF), purple gradient (#7C3AED), white text (#FFFFFF), 3D shadow effects'
  },

  // 3D Elements 家族風格說明（StylePrompt）
  stylePrompt: {
    'zh-CN': `角色设定：
你是一名专精于 3D Web 界面的资深 UI 设计师，长期为科技品牌、数字产品和创意工作室打造带有「空间感」和「实体感」的网页体验。你的目标不是模拟真实 3D 游戏，而是用 CSS 3D、透视、分层阴影和光晕，营造一种「屏幕里有实体装置」的错觉。

场景定位：
3D Elements 风格适用于需要突出科技感、创新力和高价值感的场景：例如 SaaS 仪表盘首页、3D 产品展示页、创意工作室官网、Web3 / 加密货币仪表盘、概念项目展示等等。它不适合信息极度密集、强调纯效率的后台，而更适合「第一印象很重要」「需要强烈视觉记忆点」的页面。

视觉设计理念：
3D Elements 的核心是通过「分层 + 透视 + 光影」在二维屏幕上构建一个伪 3D 空间。页面中的模块（卡片、按钮、图标、图表）不再只是扁平方块，而是像浮在舞台上的小方盒：它们有厚度、有投影、有旋转角度。背景通常使用深色渐变或带网格的星空式底板，前景元素则通过明亮渐变、光带和发光边缘凸显出来，让用户感觉自己在浏览一组「实体组件」的陈列架。

材质与质感：
常用材质包括：玻璃（glassmorphism）、金属、亚克力、霓虹塑料等。玻璃质感通过半透明背景、模糊（blur）、内外阴影和细边框实现；金属与塑料通过高光渐变、大范围柔和阴影实现；重点元素（如主要 CTA、主产品模型、NFT 立方体）会叠加体积光、反射光或彩色边缘高光，让它们在画面中显得更「重」也更「近」。所有这些质感都由 CSS 渐变、阴影和 3D 变换组合而成，尽量减少位图纹理的依赖，以保证在不同分辨率下的可控性。

交互体验：
交互反馈强调「深度」和「视角变化」。鼠标悬停时，卡片会轻微向前「弹出」，同时伴随 rotateX/rotateY 的细微变化和阴影的重排，像是被用户从桌面上轻轻抬起；按钮在 hover 时不仅变亮，还可能有光带滑过、投影拉长或缩短；3D 模型（如立方体、手表、代币图标）可以持续缓慢旋转，在悬停时暂停或加速，强调「这是一个可以被探索的物件」。动效节奏一般控制在 0.3–0.6 秒之间，既有重量感，又不会太拖沓。

整体氛围：
3D Elements 风格营造的是一种「未来实验室 / 创意工作台」的氛围。背景像昏暗的工作室或数据机房，前景是一排排悬浮的设备、卡片和模块；色彩以冷色渐变为主（深蓝、紫色、青色），再用少量暖色点缀关键区域；影视级的光影与微妙的透视让用户觉得自己在操作一个真实的控制台或产品展示台，而不是单纯浏览一张网页。正确使用时，这种风格会让用户对品牌产生「技术领先」「注重细节」「体验高端」的印象。`,
    'en-US': `Role:
You are a senior UI designer specialising in 3D-inspired web interfaces. Your job is to build layouts that feel spatial and tangible without turning the page into a full 3D game. You work primarily with CSS 3D transforms, perspective, layered shadows and glows to create the illusion of depth and physical objects inside the screen.

Scene Positioning:
The 3D Elements family is ideal for experiences that need to communicate innovation, technological sophistication and premium value: SaaS dashboards, product launch pages, creative studio sites, Web3 dashboards, concept project showcases, etc. It is less suited for dense, utilitarian admin tools and more appropriate for first-impression experiences where memorability and perceived quality matter.

Visual Design Philosophy:
Instead of flat blocks on a flat canvas, cards and components in this style behave like small devices floating on a stage. Each module has thickness, cast shadows, inner highlights and a sense of weight. Backgrounds are often deep gradients or subtle grid fields that suggest a dark studio or data space; foreground elements use bright gradients, accent glows and rim lights to stand out. The composition aims to build a believable mini 3D world using only 2D primitives.

Materials & Texture:
Common materials include glass (glassmorphism), brushed metal, acrylic plastic and neon-lit surfaces. Glass panels are built from semi-transparent backgrounds, blur, border highlights and soft inner shadows. Metal and plastic blocks use directional gradients, specular highlights and stronger drop shadows. Important objects—hero products, 3D cubes, token icons—often receive volumetric-like glows or coloured edge highlights so they feel closer to the viewer. All of this is implemented with gradients, shadows and transforms rather than heavy bitmap textures to remain crisp and adjustable.

Interaction & Motion:
Interactions emphasise depth and parallax. On hover, cards lift forward with subtle rotateX/rotateY changes and reconfigured shadows, as if the user picked them up from the desk. Buttons not only brighten but may receive moving light streaks or lengthened shadows. 3D objects can rotate slowly by default and pause or accelerate on hover, inviting exploration. Animation timings are usually in the 0.3–0.6s range to feel weighty yet responsive, avoiding jittery micro-interactions that break the illusion of physical mass.

Overall Mood:
The 3D Elements mood lives somewhere between a futuristic control room and a designer’s prototype workbench. The page feels like a space full of instruments and artefacts rather than flat panels. Deep blues, purples and cyans dominate, with warm accents highlighting calls-to-action or key metrics. Done well, this style makes users feel they are interacting with a sophisticated piece of equipment or a carefully arranged product stage, reinforcing a perception of technical excellence and attention to detail.`
  },

  // Family-level CustomPrompt：用於生成 STUDIO 3D 全页風格
  customPrompt: {
    'zh-CN': `你现在是一名专注于 3D 网页体验的资深 UI 设计师兼前端工程师，请根据当前「STUDIO 3D 创意工作室」示例页的视觉特征，生成一个风格高度相似的全屏主页。你必须保留「3D 浮动立方体 Hero」「可翻转的统计卡片」「3D 轮播作品区」「服务 Tab 模块」「团队卡片 + Modal」「FAQ 手风琴」等结构逻辑，但允许替换文案和具体内容。生成结果应让人一眼认出这是同一个 3D Elements 设计体系下的创意工作室主页变体。

【使用场景】
- 品牌类型：以 3D 视觉、沉浸式网页为卖点的创意工作室或数位代理；
- 用户目标：快速了解该工作室的能力、代表作品、服务范围和核心团队，并有明显的联络/咨询入口；
- 设备假设：以桌面端为主，移动端需要保留纵向滚动和基本 3D 效果（可适当减弱复杂动画）。

【整体布局结构】
1. 固定顶部导航（Header）
   - 半透明玻璃导航条，背景为白色或浅色透明叠加到彩色渐变上，带轻微模糊和 1px 亮边；
   - 左侧是 STUDIO 3D 风格 Logo：大写粗体渐变文字，略微 rotateY，Hover 时左右轻微摆动；
   - 右侧导航链接（Home / Portfolio / Services / Team / Contact），文字为白色或浅色，Hover 时向 Z 轴方向抬起 10px，底部出现亮线；
   - 右侧一个「Contact」或「Start a Project」圆角按钮，背景为粉 → 橙或蓝 → 紫渐变，Hover 时上移并增强阴影。

2. Hero 区（3D 浮动立方体）
   - 页面首屏中心为标题区 + 3 组浮动立方体：
     - 标题文案如「Creative 3D Studio」或同类两行主标题，使用极粗白字 + 投影，整体向前突出（translateZ）；
     - 副标题简短说明工作室擅长「3D web design / immersive interfaces / interactive dashboards」；
     - CTA 按钮区包括主按钮（View Portfolio）与次按钮（Book a Call），都具备 3D 阴影与 hover 放大效果；
   - 右侧或背景区域排列 2–3 组不同大小的立方体：使用 preserve-3d、six faces、渐变色面与阴影，整体缓慢旋转，不同立方体有不同的轨迹与速度。

3. Stats Dashboard（统计卡片）
   - 下一屏为 2×2 或 1×4 的统计网格，Card 采用「可翻转」结构：
     - 正面：大号数字（项目数量、客户数量、获奖数量、满意度等）+ 描述标签；
     - 背面：一段更具体的说明；
   - 整个卡片使用 transform-style: preserve-3d 构建，Hover 或点击时绕 Y 轴旋转 180° 显示背面；
   - 背景可为深色玻璃容器，有轻微光带或渐变叠加，强化「仪表盘面板」感觉。

4. 3D Carousel（作品轮播）
   - 使用水平方向的 3D 卡片轮播展示 3–5 个代表项目；
   - 每张卡片包含：顶部大图（可用渐变块代替示意）、项目名称、简短说明；
   - 卡片在轮播轨道中以不同的 translateZ 和 scale 表示前后关系，当前卡片更大、更亮，其他卡片略微后退并降低透明度；
   - 左右两侧使用半透明圆形按钮控制轮播，Hover 时按钮向前浮出。

5. Services Tabs（服务选项卡）
   - 服务区采用 Tab 切换形式（例如 Design / Development / Animation）；
   - 顶部为 3 个按钮式 Tab，具有立体边框和底部阴影，当前 Tab 向前突出，其余略退后；
   - 下方内容面板为「悬浮的 3D 服务卡片」，内含 Emoji/Icon、标题、服务说明，每个面板切换时可伴随轻微淡入与上浮动效。

6. Team + Modal（团队 & 弹窗）
   - 使用 3–4 张团队卡片，每张卡片包含圆形或方形 Avatar（彩色渐变背景 + 首字母）、姓名、职位；
   - Hover 时卡片倾斜并拉长阴影，点击则打开中央的模态框，展示详细简介（名称、角色、项目经验、技能等）；
   - 模态框本身采用玻璃 + 3D 边框样式，带入场缩放和阴影变化。

7. FAQ 手风琴
   - 列出 3–5 个常见问题，每一项是带有 3D 边缘和阴影的折叠卡片；
   - Header 部分包括问题标题与 +/− 图标，点击时展开内容并更新图标；
   - 展开动画为 max-height 过渡 + 轻微位移，让整个区块视觉上像「展开的立体牌」。

【色彩与光影】
1. 背景：使用蓝→紫→粉的对角线渐变或深色渐变，配合轻微噪点或网格；
2. 前景：使用冷色系渐变块（蓝、紫、青）和暖色点缀（粉、橙），在重要区域叠加发光阴影；
3. 阴影：多用软阴影 + 轻微色偏（例如蓝色阴影），在 3D 元素上强化浮空感。

【交互与动效】
1. 尽量使用 CSS 动画和 transition 表达旋转、翻转和浮动，不依赖 JS 动画库；
2. Hover 与 Active 态要清晰地区分可交互元素，避免纯装饰动画抢走注意力；
3. 动画节奏统一控制在 0.3–0.8 秒区间，Hero 背景立方体可以更慢。

【输出要求】
- 使用语义化 HTML（header/nav/main/section/footer 等），结合合理的 class 名称（可接近 Tailwind 风格但不强制）；
- 不引入外部脚本库（如 Three.js）和大型 UI 框架，仅用 HTML + CSS 实现上述 3D 效果和交互；
- 结构中必须包含：Hero（带 3D 立方体）、Stats 卡片、Carousel、Services Tabs、Team + Modal、FAQ，模块名称可以调整但职能相似；
- 整体视觉必须与当前 STUDIO 3D 示例高度一致：强烈的渐变背景、玻璃卡片、3D 阴影和漂浮立方体，同时保持文字可读和交互清晰。`,
    'en-US': `You are a senior UI designer and front-end engineer focused on 3D web experiences. Based on the existing “STUDIO 3D” creative studio page, generate a full-page landing layout with the same design language. You must preserve the structural logic—3D floating cubes in the hero, flippable stats cards, 3D carousel, services tabs, team cards with modal, and FAQ accordion—while allowing text and details to change. The result should look like a sibling homepage in the same 3D Elements design system.

[Use Case]
- Brand: A creative studio or digital agency specialising in 3D web, immersive interfaces and interactive dashboards;
- User goals: Understand capabilities, representative projects, service offerings and core team, with obvious entry points for contact or project brief;
- Devices: Desktop first, but the page should still work on mobile via vertical scroll with simplified 3D effects.

[Layout Structure]
1. Fixed Glass Header
   - A sticky, glassy navigation bar with a faint blur and subtle light border over the gradient background;
   - Left: a STUDIO 3D logo rendered as bold gradient text with a slight rotateY tilt and hover wobble;
   - Right: navigation links (Home / Portfolio / Services / Team / Contact) that lift along the Z-axis on hover and draw a bright underline;
   - A pill-shaped CTA button (“Contact” or “Start a Project”) with pink→orange or blue→purple gradient, heavy shadow and hover lift.

2. Hero with Floating Cubes
   - Centered hero block combining headline, subheading and CTAs with a cluster of 3D cubes;
   - Headline (e.g. “Creative 3D Studio”) uses oversized white type, strong drop shadow and a Z-translation so it appears closer to the viewer;
   - Subheading briefly states what the studio does (3D web design, immersive products, etc.);
   - Two main buttons (“View Portfolio”, “Book a Call”) behave like physical chips with depth and hover scaling;
   - Around the hero, 2–3 cube clusters built from six faces each, using gradients and CSS 3D transforms to slowly rotate along multiple axes.

3. Stats Dashboard
   - Below the hero, a grid of 4 cards summarising metrics (projects, clients, awards, satisfaction);
   - Each card uses a 3D flip pattern: front shows the metric number and label, back shows a short explanatory sentence;
   - Cards sit on a dark glass surface, with layered shadows that intensify on hover and a smooth 180deg rotation on the Y-axis.

4. 3D Carousel of Projects
   - A horizontally scrolling track of project cards, each composed of an image block, project title and short description;
   - Cards are arranged with different translateZ/scale values to simulate depth; the active card is larger, brighter and closer;
   - Left/right arrow buttons appear as floating discs with subtle glow, moving forward on hover.

5. Services Tabs
   - A 3-tab switcher for services such as Design / Development / Animation;
   - Tab buttons themselves are 3D pills with shadows and perspective; the active tab is pushed toward the viewer;
   - Each tab panel presents a 3D service card with icon, title and paragraph text, transitioning in with a gentle fade and upward movement.

6. Team Section with Modal
   - A responsive grid of team cards, each containing a gradient avatar tile, name and role;
   - Hover effects tilt the cards and strengthen shadows; clicking a card opens a central glass modal with extended bio text;
   - The modal uses a frosted background, depth shadow and entrance animation that scales from the center while fading in.

7. FAQ Accordion
   - A list of 3–5 questions styled as thick, 3D-edged panels;
   - Clicking a header toggles the expanded content, rotates the +/− icon and animates max-height and padding to feel like the card “unfolds”;

[Color & Lighting]
- Background: rich diagonal gradients (blue→purple→pink) or dark space-like transitions with subtle noise or grid lines;
- Foreground: cool gradients (blues, purples, cyans) with warm accents (pinks, oranges) on key CTAs and highlights;
- Shadows: layered, sometimes tinted shadows that enhance the sense of floating depth.

[Interaction & Motion]
- Prefer CSS transitions and keyframes over JavaScript animation libraries;
- Hover and active states must make interactive elements unmistakable while keeping decorative animations calm and predictable;
- Use consistent timing (around 0.3–0.8s) across lifts, flips and movements to maintain a coherent sense of mass.

[Output Requirements]
- Use semantic HTML (header, nav, main, section, footer, etc.) and meaningful class names (utility-like or BEM-style);
- Do not import external JS libraries or heavy UI frameworks; implement all 3D effects and interactions with HTML + CSS (and minimal vanilla JS only for tabs/accordion/modal state);
- Include the following modules in some form: Hero with 3D cubes, Stats cards, Project carousel, Services tabs, Team cards with modal, FAQ accordion;
- The generated page should be instantly recognisable as belonging to the same 3D Elements creative studio family: dramatic gradients, glassy cards, deep shadows and floating cubes, while still keeping text legible and navigation clear.`
  },
  
  fullPageHTML: visualTech3dElementsFullPageHTML,
  fullPageStyles: visualTech3dElementsFullPageStyles,
  
  previews: [
      {
        id: 'product-showcase',
        name: 'styles.visual.3d-elements.previews.productShowcase',
        type: 'full',
        description: 'styles.visual.3d-elements.previews.productShowcaseDesc',
        features: [
          '3D Rotating Hero Product',
          '6 Interactive Feature Cards with Flip Effect',
          'Depth-layered Product Gallery',
          'Multi-axis Rotation Animations',
          'Glassmorphic Navigation',
          'Floating CTA Buttons'
        ],
        colorScheme: {
          'zh-cn': '主色深蓝渐变 (#1e3a8a → #3b82f6)、辅色紫色渐变 (#8b5cf6 → #a78bfa)、强调色青光晕 (#06b6d4)、背景深网格 (#0f172a)',
          'en-US': 'Primary deep blue gradient (#1e3a8a → #3b82f6), secondary purple gradient (#8b5cf6 → #a78bfa), accent cyan glow (#06b6d4), background dark grid (#0f172a)'
        },
        customPrompt: {
          'zh-CN': `你现在是一名擅长 3D 产品展示页面的资深 UI 设计师兼前端工程师，请根据当前「NEXUS 3D Smartwatch」示例页的视觉和交互特征，生成一个风格高度相似的 3D 产品展示全页。你的目标是让主打智能手表/硬件产品的品牌，通过一个具有强烈空间感的首页，展示产品外观、核心功能以及不同配色/型号组合。布局、色彩、光影和交互都必须延续示例的设计语言：深色 3D 背景、玻璃导航、旋转舞台、翻转功能卡片、分层产品画廊和高能 CTA。

【使用场景】
- 产品类型：可穿戴设备（智能手表）、高端电子产品或 3C 旗舰单品；
- 用户目标：第一时间看到立体产品形象、快速理解核心卖点和差异化功能、确认有多种配色和价格档位，最终被引导至购买或查看更多信息；
- 设备假设：桌面端为主，移动端需要退化为单列但仍保留关键 3D 感（如旋转舞台与卡片阴影）。

【整体布局结构】
1. 顶部导航（3D Glass Nav）
   - 固定在顶部的玻璃导航条，背景为深色 + 模糊 + 半透明，底部有一条淡色边框；
   - 左侧显示品牌 Logo（如 NEXUS 3D），使用蓝紫渐变文字和轻微发光阴影，Hover 时有细微的光晕增强或轻微旋转；
   - 中部/右侧是文本导航（Products / Features / Gallery / Contact），颜色为浅灰，Hover 时向上位移 2px 并改变文字颜色；
   - 右侧有一个「Buy Now」或「Pre-Order」按钮——渐变背景 + 圆角 + 强阴影，Hover 时略微放大并加强发光。

2. Hero 区（3D 旋转舞台）
   - 左侧为文案区：两行主标题（如「Next-Gen Smartwatch」）、一段产品愿景描述、两个 CTA 按钮（Explore Features / Watch Video）；
   - 右侧为 3D 产品舞台：一个圆形或椭圆形平台上摆放主视角的手表立体模型；
   - 手表主体可通过多个嵌套 div + 渐变 + 阴影模拟：例如表盘、表带、高光、屏幕内容（时间、心率、卡路里等），整体轻微上下浮动并围绕 Y 轴缓慢旋转；
   - 背景外围有两个或以上的发光球体（orb），颜色为蓝紫/青色渐变，用 blur 和 drop-shadow 制造光晕效果。

3. 功能区（3D 翻转 Feature Cards）
   - 使用 2×3 的网格容纳六张功能卡片，每张卡片为可翻转的 3D 盒子：
     - 正面展示功能图标（Emoji 或简化图形）、功能名称和一句简短说明；
     - 背面提供更详细的参数或卖点（如亮度、续航、传感器种类）；
   - 卡片使用 transform-style: preserve-3d 和 rotateY 实现翻转，Hover 时或点击时旋转 180°；
   - 前后两面使用不同的渐变配色（如蓝紫、紫粉、青绿），阴影略有变化以体现不同的材质感。

4. 深度产品画廊（Depth-layered Gallery）
   - 下方使用一个 3D 堆叠的产品卡片区域，展示不同配色/版本：
     - 每张卡片包含颜色名称（Midnight Black / Arctic Silver / Ocean Blue / Rose Gold 等）、产品预览图（抽象的圆形渐变块）、价格；
     - 卡片在 Z 轴上以 40–80px 为间隔向后堆叠，前面卡片更大、更亮、透明度更高；
   - Hover 在任意卡片上时，该卡向前移动（translateZ）、稍微放大并提高亮度和阴影；
   - 画廊整体需要设置 perspective，使用户从略微仰视的角度看到一叠产品卡片。

5. CTA 区（強行動召喚）
   - 使用一個寬幅 CTA 区塊總結購買理由（如「Ready to Upgrade?」+ 三個简短 bullet：Free shipping / 30-day returns / 2-year warranty）；
   - 主按鈕採用更大型的 3D 按鈕，添加「光帶掃過」的動画（线性漸变从左到右穿過）；
   - 背景可以使用深色漸变疊加細微噪點，让 CTA 区塊像一個被打光的舞台正中央。

【色彩与材质】
1. 背景：深藍到深紫的對角漸变，帶有微弱的网格或噪點，表現科技感与夜間光线；
2. 前景：使用藍紫漸变（#1e3a8a → #3b82f6）、紫色漸变（#8b5cf6 → #a78bfa）、青色光暈 (#06b6d4) 以及白色高光；
3. 阴影：手表和主卡片的阴影需要有足够的模糊和距离，以表现出「悬浮在舞台上」的感觉。

【交互与動效】
1. 旋轉舞台：手表主視圖持續緩慢旋轉，在 Hover 時可以稍微加速或停止旋轉；
2. 功能卡片：翻轉動效要流暢（0.4–0.6 秒），並在 hover 時略微放大；
3. 产品堆疊：Hover 卡片向前移動並增加透光阴影，未被 hover 的卡片保持原位但略微变暗；
4. CTA 按鈕：Hover 時觸發光帶掃過動画並略微抬起；Active 狀態向下按壓，阴影縮小。

【輸出要求】
- 使用語義化 HTML 結構（header/nav/main/section/footer），並為各区塊賦予清晰的 class 名稱；
- 樣式可使用 Tailwind 風格的原子类或自定義类，不強制使用任何框架，但必須能表達 3D 变換与阴影效果；
- 不引入外部 JS 或動画庫，交互效果（如翻轉、堆疊 hover）可用 CSS 与少量原生 JS（只處理 state，不負責動画）實現；
- 生成页面應与當前示例高度貼近：深色 3D 背景、玻璃导航、旋轉产品舞台、翻轉功能卡片、分层画廊和強 CTA，同時確保产品賣點与行動路徑清晰可見。`,
          'en-US': `You are a senior UI designer and front-end engineer specialising in 3D product pages. Based on the existing “NEXUS 3D Smartwatch” demo, generate a full product showcase page that feels like part of the same design system. The new page should highlight a hero product in a 3D scene, communicate key features through flippable cards, and present multiple color/variant options in a depth-stacked gallery, all while preserving the deep, neon-infused 3D aesthetic.

[Use Case]
- Product types: high-end smartwatch, wearable device or flagship electronics;
- User goals: immediately perceive the product as premium and futuristic, understand the top features and technical differentiators, see color/variant options and price tiers, and be compelled to click a primary purchase/learn-more CTA;
- Device assumption: desktop first; mobile falls back to a single column but still retains core 3D cues (rotating stage, elevated cards, shadows).

[Layout Structure]
1. Glassy Fixed Navigation
   - A fixed, semi-transparent nav bar with blurred dark background and a subtle bottom border;
   - Left: brand logo (e.g. NEXUS 3D) as bold gradient text with a soft glow, reacting to hover with slight tilt or glow intensity changes;
   - Center/right: plain text links (Products / Features / Gallery / Contact) that move up slightly and brighten on hover;
   - Right: a gradient pill button (“Buy Now” / “Pre-Order”) with strong shadow and hover scale.

2. Hero with 3D Product Stage
   - Left column: textual hero—two-line headline (e.g. “Next-Gen Smartwatch”), one short paragraph of product promise, and two CTAs (“Explore Features”, “Watch Video”);
   - Right column: a 3D stage featuring the product:
     - Simulate the watch body using nested divs, gradients, highlights and shadows to convey volume;
     - The watch sits on a circular plinth with strong shadow and faint reflections;
     - The whole assembly gently rotates and floats via CSS transforms;
   - Background includes a couple of glowing orbiting orbs, matching the brand colors and adding depth.

3. Feature Grid with Flip Cards
   - A 2x3 grid of feature cards, each behaving like a 3D box that flips around the Y-axis;
   - Front side: large icon, feature name, one-line benefit;
   - Back side: more specific details (e.g. brightness metrics, sensor list, health tracking dimensions);
   - Front and back faces use different gradients and shadow treatments to suggest different materials, while the flip animation runs over ~0.5s.

4. Depth-Layered Product Gallery
   - A stacked gallery representing different colorways or editions:
     - Each card contains the variant name, a stylised circular gradient preview and a price line;
     - Cards are arranged with translateZ and translateY offsets to appear stacked in depth;
   - On hover, a card moves toward the viewer, scales up and brightens, while others fade slightly into the background;
   - Provide at least four variants to demonstrate the stacking effect.

5. CTA Section
   - A dedicated CTA band summarising reasons to purchase (headline + short line of benefits such as shipping, returns, warranty);
   - A large 3D button with a “shine” animation (diagonal light sweep) that loops slowly;
   - Background uses a darker gradient overlay with blur to look like a spotlighted stage.

[Color & Material]
- Background: deep blue→indigo gradients with subtle grid or noise, communicating tech and night-time lighting;
- Foreground: blue, purple and cyan gradients for surfaces; bright white for text and highlights;
- Shadows: strong, soft-edged shadows beneath the product and main cards to reinforce the sense of hovering objects.

[Interaction & Motion]
- The hero watch rotates and/or floats with a slow, continuous animation; hover may accelerate or pause it;
- Feature cards flip on hover or click and slightly scale up at the same time;
- Gallery cards move forward and glow when hovered, indicating interactivity;
- CTA button uses a repeating light sweep plus hover lift and active press states.

[Output Requirements]
- Use semantic HTML (header/nav/main/section/footer) and meaningful class names, with utility-like classes where appropriate;
- Implement 3D transforms, shadows and animations purely with HTML + CSS (minimal vanilla JS only for behaviour such as click-to-flip if desired);
- Do not import external JS or CSS frameworks; the generated layout should be self-contained;
- The final page must clearly look like a sibling of the existing NEXUS 3D demo: deep 3D background, glassy navigation, rotating product stage, flippable feature cards, layered variant gallery and a strong purchasing CTA.`
        },
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Product Showcase</title>
</head>
<body class="product-3d-body">
  <!-- Navigation -->
  <nav class="product-3d-nav">
    <div class="product-nav-container">
      <div class="product-logo">
        <span class="product-logo-3d">NEXUS</span>
        <span class="product-logo-sub">3D</span>
      </div>
      <div class="product-nav-links">
        <a href="javascript:void(0)" class="product-nav-link">Products</a>
        <a href="javascript:void(0)" class="product-nav-link">Features</a>
        <a href="javascript:void(0)" class="product-nav-link">Gallery</a>
        <a href="javascript:void(0)" class="product-nav-link">Contact</a>
      </div>
      <button class="product-nav-cta">Buy Now</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="product-hero-section">
    <div class="product-hero-content">
      <div class="product-hero-text">
        <h1 class="product-hero-title">Next-Gen<br/>Smartwatch</h1>
        <p class="product-hero-desc">Experience the future on your wrist. Advanced health tracking, seamless connectivity, and stunning design in perfect harmony.</p>
        <div class="product-hero-buttons">
          <button class="product-btn-primary">Explore Features</button>
          <button class="product-btn-ghost">Watch Video</button>
        </div>
      </div>
      <div class="product-hero-visual">
        <div class="product-rotating-stage">
          <div class="product-main-card">
            <div class="product-card-face product-card-front">
              <div class="product-watch-display">
                <div class="watch-screen">
                  <div class="watch-time">10:30</div>
                  <div class="watch-stats">
                    <span class="watch-stat">❤️ 72</span>
                    <span class="watch-stat">🔥 850</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-orb product-orb-1"></div>
        <div class="product-orb product-orb-2"></div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="product-features-section">
    <h2 class="product-section-title">Premium Features</h2>
    <div class="product-features-grid">
      <!-- Feature Card 1 -->
      <div class="product-feature-card">
        <div class="product-feature-inner">
          <div class="product-feature-front">
            <div class="product-feature-icon">⌚</div>
            <h3 class="product-feature-title">Always-On Display</h3>
            <p class="product-feature-text">Crystal-clear AMOLED screen visible in any light</p>
          </div>
          <div class="product-feature-back">
            <p class="product-feature-detail">2000 nits peak brightness • 120Hz refresh rate • Sapphire crystal protection</p>
          </div>
        </div>
      </div>

      <!-- Feature Card 2 -->
      <div class="product-feature-card">
        <div class="product-feature-inner">
          <div class="product-feature-front">
            <div class="product-feature-icon">💓</div>
            <h3 class="product-feature-title">Health Tracking</h3>
            <p class="product-feature-text">Advanced sensors monitor your wellness 24/7</p>
          </div>
          <div class="product-feature-back">
            <p class="product-feature-detail">Heart rate • Blood oxygen • Sleep stages • Stress tracking • ECG monitoring</p>
          </div>
        </div>
      </div>

      <!-- Feature Card 3 -->
      <div class="product-feature-card">
        <div class="product-feature-inner">
          <div class="product-feature-front">
            <div class="product-feature-icon">🔋</div>
            <h3 class="product-feature-title">7-Day Battery</h3>
            <p class="product-feature-text">Power through your week with ease</p>
          </div>
          <div class="product-feature-back">
            <p class="product-feature-detail">Fast charging • Wireless charging • Ultra power-saving mode</p>
          </div>
        </div>
      </div>

      <!-- Feature Card 4 -->
      <div class="product-feature-card">
        <div class="product-feature-inner">
          <div class="product-feature-front">
            <div class="product-feature-icon">🏃</div>
            <h3 class="product-feature-title">100+ Sports</h3>
            <p class="product-feature-text">Professional tracking for every activity</p>
          </div>
          <div class="product-feature-back">
            <p class="product-feature-detail">Auto-detection • GPS tracking • VO2 max • Training suggestions</p>
          </div>
        </div>
      </div>

      <!-- Feature Card 5 -->
      <div class="product-feature-card">
        <div class="product-feature-inner">
          <div class="product-feature-front">
            <div class="product-feature-icon">💧</div>
            <h3 class="product-feature-title">Waterproof</h3>
            <p class="product-feature-text">Swim, surf, and shower worry-free</p>
          </div>
          <div class="product-feature-back">
            <p class="product-feature-detail">50m water resistance • IP68 rating • Ocean swimming compatible</p>
          </div>
        </div>
      </div>

      <!-- Feature Card 6 -->
      <div class="product-feature-card">
        <div class="product-feature-inner">
          <div class="product-feature-front">
            <div class="product-feature-icon">🎵</div>
            <h3 class="product-feature-title">Music Control</h3>
            <p class="product-feature-text">Your favorite songs at your fingertips</p>
          </div>
          <div class="product-feature-back">
            <p class="product-feature-detail">2GB storage • Bluetooth audio • Spotify • Apple Music</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Product Gallery -->
  <section class="product-gallery-section">
    <h2 class="product-section-title">Choose Your Style</h2>
    <div class="product-gallery">
      <div class="product-gallery-stack">
        <div class="product-gallery-card product-card-1">
          <div class="product-variant-badge">Midnight Black</div>
          <div class="product-variant-display variant-black"></div>
          <div class="product-variant-price">$399</div>
        </div>
        <div class="product-gallery-card product-card-2">
          <div class="product-variant-badge">Arctic Silver</div>
          <div class="product-variant-display variant-silver"></div>
          <div class="product-variant-price">$399</div>
        </div>
        <div class="product-gallery-card product-card-3">
          <div class="product-variant-badge">Ocean Blue</div>
          <div class="product-variant-display variant-blue"></div>
          <div class="product-variant-price">$449</div>
        </div>
        <div class="product-gallery-card product-card-4">
          <div class="product-variant-badge">Rose Gold</div>
          <div class="product-variant-display variant-rose"></div>
          <div class="product-variant-price">$449</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="product-cta-section">
    <div class="product-cta-container">
      <h2 class="product-cta-title">Ready to Upgrade?</h2>
      <p class="product-cta-text">Free shipping • 30-day returns • 2-year warranty</p>
      <button class="product-cta-button">
        <span class="product-cta-button-text">Shop Now</span>
        <div class="product-cta-button-shine"></div>
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="product-footer">
    <div class="product-footer-content">
      <p>&copy; 2024 NEXUS 3D. All rights reserved.</p>
      <div class="product-footer-links">
        <a href="javascript:void(0)">Privacy</a>
        <a href="javascript:void(0)">Terms</a>
        <a href="javascript:void(0)">Support</a>
      </div>
    </div>
  </footer>
</body>
</html>
        `,
        styles: `
/* ========== GLOBAL STYLES ========== */
.product-3d-body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: #fff;
  overflow-x: hidden;
  perspective: 1200px;
}

/* ========== NAVIGATION ========== */
.product-3d-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.product-nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-logo {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.product-logo-3d {
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(96, 165, 250, 0.5);
}

.product-logo-sub {
  font-size: 0.75rem;
  color: #06b6d4;
  font-weight: 600;
}

.product-nav-links {
  display: flex;
  gap: 2rem;
}

.product-nav-link {
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.product-nav-link:hover {
  color: #60a5fa;
  transform: translateY(-2px);
}

.product-nav-cta {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.product-nav-cta:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);
}

/* ========== HERO SECTION ========== */
.product-hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;
}

.product-hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.product-hero-title {
  font-size: 4rem;
  font-weight: 900;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #fff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-hero-desc {
  font-size: 1.25rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.product-hero-buttons {
  display: flex;
  gap: 1rem;
}

.product-btn-primary {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
}

.product-btn-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 20px 45px rgba(59, 130, 246, 0.6);
}

.product-btn-ghost {
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.product-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #60a5fa;
  transform: translateY(-5px);
}

/* ========== 3D PRODUCT DISPLAY ========== */
.product-hero-visual {
  position: relative;
  height: 500px;
  perspective: 1500px;
}

.product-rotating-stage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
}

.product-main-card {
  width: 350px;
  height: 450px;
  transform-style: preserve-3d;
  animation: productRotate 20s linear infinite;
}

@keyframes productRotate {
  0% { transform: rotateY(0deg) rotateX(5deg); }
  100% { transform: rotateY(360deg) rotateX(5deg); }
}

.product-card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.product-watch-display {
  width: 200px;
  height: 250px;
  background: linear-gradient(135deg, #1e293b, #334155);
  border-radius: 2.5rem;
  padding: 1.5rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.6),
    inset 0 2px 4px rgba(255, 255, 255, 0.1);
}

.watch-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.watch-time {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.watch-stats {
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  color: #94a3b8;
}

/* ========== FLOATING ORBS ========== */
.product-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  animation: orbFloat 8s ease-in-out infinite;
}

.product-orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #3b82f6, transparent);
  top: 10%;
  right: 5%;
  animation-delay: 0s;
}

.product-orb-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #8b5cf6, transparent);
  bottom: 10%;
  left: 10%;
  animation-delay: 2s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}

/* ========== FEATURES SECTION ========== */
.product-features-section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-section-title {
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #fff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-feature-card {
  perspective: 1000px;
  height: 280px;
}

.product-feature-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-feature-card:hover .product-feature-inner {
  transform: rotateY(180deg);
}

.product-feature-front,
.product-feature-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.product-feature-front {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.8));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.product-feature-back {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  transform: rotateY(180deg);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
}

.product-feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}

.product-feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
}

.product-feature-text {
  color: #cbd5e1;
  line-height: 1.6;
}

.product-feature-detail {
  color: #fff;
  line-height: 1.8;
  font-size: 1.05rem;
}

/* ========== GALLERY SECTION ========== */
.product-gallery-section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
}

.product-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1500px;
}

.product-gallery-stack {
  position: relative;
  width: 350px;
  height: 500px;
  transform-style: preserve-3d;
}

.product-gallery-card {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(51, 65, 85, 0.9));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.product-card-1 {
  transform: translateZ(0) translateY(0);
  z-index: 4;
}

.product-card-2 {
  transform: translateZ(-80px) translateY(20px) scale(0.95);
  z-index: 3;
  opacity: 0.85;
}

.product-card-3 {
  transform: translateZ(-160px) translateY(40px) scale(0.9);
  z-index: 2;
  opacity: 0.7;
}

.product-card-4 {
  transform: translateZ(-240px) translateY(60px) scale(0.85);
  z-index: 1;
  opacity: 0.6;
}

.product-gallery-card:hover {
  transform: translateZ(40px) scale(1.05);
  z-index: 10;
  opacity: 1;
  box-shadow: 0 40px 80px rgba(59, 130, 246, 0.6);
}

.product-variant-badge {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
}

.product-variant-display {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 5px 10px rgba(255, 255, 255, 0.2);
}

.variant-black {
  background: linear-gradient(135deg, #1e293b, #0f172a);
}

.variant-silver {
  background: linear-gradient(135deg, #cbd5e1, #94a3b8);
}

.variant-blue {
  background: linear-gradient(135deg, #3b82f6, #1e40af);
}

.variant-rose {
  background: linear-gradient(135deg, #f472b6, #ec4899);
}

.product-variant-price {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ========== CTA SECTION ========== */
.product-cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(51, 65, 85, 0.6));
  backdrop-filter: blur(30px);
}

.product-cta-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.product-cta-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-cta-text {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
}

.product-cta-button {
  position: relative;
  padding: 1.5rem 4rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  border-radius: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5);
  transition: all 0.3s ease;
}

.product-cta-button:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 30px 70px rgba(59, 130, 246, 0.7);
}

.product-cta-button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: buttonShine 3s linear infinite;
}

@keyframes buttonShine {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

/* ========== FOOTER ========== */
.product-footer {
  padding: 3rem 2rem;
  background: rgba(15, 23, 42, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.product-footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #94a3b8;
}

.product-footer-links {
  display: flex;
  gap: 2rem;
}

.product-footer-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.product-footer-links a:hover {
  color: #60a5fa;
}

/* ========== RESPONSIVE ========== */
@media (max-width: 768px) {
  .product-nav-links {
    display: none;
  }

  .product-hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .product-hero-title {
    font-size: 2.5rem;
  }

  .product-hero-visual {
    height: 350px;
  }

  .product-main-card {
    width: 250px;
    height: 320px;
  }

  .product-section-title {
    font-size: 2rem;
  }

  .product-features-grid {
    grid-template-columns: 1fr;
  }

  .product-cta-title {
    font-size: 2.5rem;
  }

  .product-footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
        `
      },
      {
        id: 'web3-dashboard',
        name: 'styles.visual.3d-elements.previews.web3Dashboard',
        type: 'full',
        description: 'styles.visual.3d-elements.previews.web3DashboardDesc',
        features: [
          '3D Floating Crypto Icons (BTC/ETH/SOL)',
          'NFT Gallery with Rotating 3D Cubes',
          'Crypto Price Cards with Flip Animation',
          '3D Staking Pool Visualization',
          'Animated Portfolio Statistics',
          'Wallet Connector Modal',
          'Blockchain Network Status Indicator',
          'Glassmorphic Navigation'
        ],
        colorScheme: {
          'zh-cn': '主色紫蓝渐变 (#6366f1 → #8b5cf6)、辅色青色 (#06b6d4)、强调色金色 (#fbbf24)、背景深网格 (#0f172a → #1e1b4b)',
          'en-US': 'Primary purple-blue gradient (#6366f1 → #8b5cf6), secondary cyan (#06b6d4), accent gold (#fbbf24), background dark grid (#0f172a → #1e1b4b)'
        },
        customPrompt: {
          'zh-CN': `你现在是一名专门为 Web3 / 加密货币产品设计 3D 仪表盘界面的资深 UI 设计师，请根据当前「CryptoVerse Web3 Dashboard」示例页的视觉和交互特征，生成一个风格高度相似的 3D Dashboard 全页。布局应包含：悬浮的 3D 加密图标、带深度感的统计卡片、NFT 立方体画廊、价格卡片、质押（staking）可视化和钱包连接弹窗，并使用紫蓝渐变 + 深色网格背景 + 玻璃卡片来营造高科技、沉浸式的 Web3 控制台氛围。

【使用场景】
- 产品类型：链上资产监控面板、DeFi 聚合仪表盘、NFT 平台或交易终端的品牌首页/登录后首页；
- 用户目标：快速浏览资产概览、市场数据和关键指标，同时感知品牌的技术实力和未来感，并找到明显的钱包连接入口；
- 体验定位：不是「简约管理后台」，而是带有舞台感、强调空间深度和动态光影的展示型控制台。

【整体布局结构】
1. 全屏背景与网格
   - 使用深蓝到深紫的对角线渐变作为主背景（例如 #0f172a → #1e1b4b），叠加细致的网格线（通过伪元素实现），形成「宇宙 / 数据空间」的氛围；
   - 整体页面使用一个 web3-container 包裹内容，以保证背景网格与前景内容分层。

2. 顶部导航（Web3 Header）
   - 固定头部导航条，背景为深色半透明 + 模糊 + 下边界描边；
   - 左侧 Logo 区域显示带渐变文字的品牌名（CryptoVerse）和一个 3D 风格图标方块（旋转动画 + 光照）；
   - 右侧为导航链接（Overview / Markets / NFT / DeFi / Activity 等），Hover 时文字变亮并出现渐变下划线；
   - 最右侧为「Connect Wallet」按钮，以紫蓝渐变背景、圆角矩形形态呈现，Hover 时增加阴影并产生轻微 3D 抬升。

3. Hero 区（3D Crypto Icons + 总览）
   - Hero 主体为居中的标题与简短副标：例如「Web3 Portfolio, Reimagined」；
   - 在 Hero 背景中央放置一个大型隐形球体区域，内部漂浮多个 3D 加密货币图标（BTC/ETH/SOL 等），每个图标为彩色圆形渐变块，带 3D 投影和旋转动画；
   - 标题下方可以放一个简易过滤或切换控件（如 Day / Week / Month 切换），以小型 3D 卡片形式呈现；
   - 整个 Hero 区域使用 perspective 以让加密图标的浮动具备空间感。

4. Stats 概览（3D 统计卡片）
   - 在 Hero 下方配置一行或两行 statistic 卡片，内容如「Total Portfolio」「24h PnL」「Active Chains」「Staked Assets」等；
   - 卡片使用玻璃质感背景（深色叠加 blur）、浅色边框与渐变高光，Hover 时稍微向前移动并加重阴影与边框亮度；
   - 可为卡片增加小型 3D 装饰（如角落的发光点、迷你立方体）强化 3D Elements 风格。

5. NFT 3D 立方体画廊
   - 新增一个「Featured Collections」或「NFT Gallery」区域，使用 3D 立方体展示 NFT：
     - 每个 NFT 使用一个旋转的 3D cube，六个面是渐变色或简化封面图像；
     - 立方体使用 rotateX / rotateY 的持续动画，Hover 时暂停旋转或者略微放大；
   - 多个立方体排列成网格或行列，整个容器具有 perspective，以强调深度。

6. Crypto 价格卡片与 3D 图表
   - 设计若干价格卡片（BTC / ETH / SOL 等），每张卡片包含：图标、名称、当前价格、24h 涨跌幅、简单的小图表；
   - 卡片在 Hover 时略微翻转（rotateX / rotateY），同时涨跌幅文字颜色根据正负变化（绿/红）；
   - 视觉上要保持玻璃 + 3D 阴影的风格，避免过于扁平化。

7. Staking / Pools 可视化
   - 使用一个 3D 卡片或小型面板集合展示质押池：例如「Total Staked」「APY」「Lockup」「TVL」；
   - 可使用圆环图或立体柱状图风格的简单图形，通过阴影与渐变呈现立体感，而不是复杂的真 3D 图表；
   - Hover 每个池时，该池的卡片向前弹出并高亮。

8. Portfolio Activity / Feed
   - 在页面下方添加活动记录或事件流（如最近交易、NFT 售卖、收益变动），以 3D 卡片列表呈现；
   - 每条记录是一张薄卡片，带有细阴影和小图标，Hover 时略微位移，像是一叠浮动的票据。

9. Wallet Modal（钱包连接弹窗）
   - 「Connect Wallet」按钮点击后，打开一个中央 Modal：背景为全屏深色遮罩 + 中央玻璃面板；
   - 面板内列出多种钱包选项（MetaMask、WalletConnect、自定义钱包等），每个选项是一张可 hover 的 3D 卡片；
   - Modal 的外框和内容应具有明显的 3D 抬升与光晕，关闭按钮可以带旋转或缩放动画。

【色彩与材质】
1. 背景：紫蓝渐变 + 深色网格，强化 Web3 / 未来城市 / 区块链宇宙的氛围；
2. 卡片：使用玻璃风格 + 内亮外暗的边框组合，搭配统一的紫蓝/青色发光；
3. 3D 元素：加密图标、NFT 立方体以及图表使用饱和色，配合高对比阴影。

【交互与动画】
1. 浮动图标与立方体：使用 keyframes 让它们在 Y 轴上下浮动、沿 Y 轴旋转；
2. 卡片 Hover：所有可互动卡片在 hover 时应有 translateZ 或轻微 rotateX/rotateY 效果，加强「可点击」感；
3. Modal 和 Accordion：开合动效应平顺，重点在缩放、透明度和阴影变化，保持整体节奏一致。

【输出要求】
- 使用语义化 HTML：header/nav/main/section/footer 等结构清晰，模块划分包括 Hero、Stats、NFT、Prices、Staking、Activity、Footer 和 Wallet Modal；
- 样式可使用 Tailwind 风格的原子类或自定义类，不引入第三方 CSS/JS 框架；动画与 3D 效果尽量以 CSS 实现；
- 不需要接入真实数据，但布局中应清楚预留数值、图表和列表内容的位置；
- 最终页面必须一眼看出是 CryptoVerse Web3 Dashboard 家族的一员：深色网格背景、漂浮的 3D 加密图标、玻璃卡片和富有深度的紫蓝色调。`,
          'en-US': `You are a senior UI designer and front-end engineer who designs 3D-style dashboards for Web3 and crypto products. Based on the existing “CryptoVerse Web3 Dashboard” demo, generate a full 3D dashboard page in the same visual language. The layout should feature floating 3D crypto icons, depthful stats cards, a rotating NFT cube gallery, price cards, staking visualisation and a wallet connect modal, all framed by a purple-blue gradient and dark grid background.

[Use Case]
- Product type: on-chain portfolio monitor, DeFi aggregator dashboard, NFT platform or trading terminal landing/home view;
- User goals: skim portfolio totals and key metrics at a glance, feel the brand’s technical sophistication and futuristic aesthetic, and find a clear “Connect Wallet” entry point;
- Experience positioning: not a minimal, quiet admin panel, but a stage-like, immersive control surface with strong depth cues.

[Overall Layout]
1. Background & Grid
   - Use a deep blue→indigo gradient background (e.g. #0f172a → #1e1b4b) with a subtle overlay grid to evoke a data/space environment;
   - Wrap all content in a container element so background and foreground layers remain separated.

2. Header
   - Fixed, semi-transparent header with blur and bottom border;
   - Left: brand logo (CryptoVerse) in a multi-stop purple/blue/cyan gradient with a rotating cube-like icon;
   - Right: navigation links (Overview / Markets / NFT / DeFi / Activity, etc.) with gradient underline on hover;
   - A “Connect Wallet” button styled as a glowing purple-blue pill, lifting and intensifying its shadow on hover.

3. Hero with Floating Crypto Icons
   - Centered hero copy: strong headline (e.g. “Web3 Portfolio, Reimagined”) and short supporting subtitle;
   - Behind or around the text, place several floating crypto tokens (BTC, ETH, SOL…), each as a circular gradient badge with 3D shadow and continuous float/rotate animation;
   - Optionally include a small control strip under the hero (e.g. time range toggle) rendered as mini 3D cards.

4. Stats Overview
   - A responsive grid of stat cards that summarise portfolio totals, profit/loss, active chains, staking amounts and so on;
   - Each card uses a glassmorphism style: semi-transparent background, blur, border, inner glow;
   - Hover interactions should lift the cards slightly, adjust shadows and strengthen border/overlay highlights.

5. NFT 3D Cube Gallery
   - Introduce a “Featured Collections” or “NFT Gallery” section with rotating 3D cubes representing NFTs or collections;
   - Each cube is built from six faces with gradients or artwork placeholders and continuously rotates via CSS keyframes;
   - On hover, the cube may pause, speed up or scale up slightly.

6. Crypto Price Cards & Mini Charts
   - Cards for key assets (BTC, ETH, SOL, etc.) displaying icon, name, current price, 24h change and a tiny sparkline chart;
   - Cards tilt on hover with rotateX/rotateY and change text colour to indicate gains/losses;
   - Visual style should stay consistent with the glass + depth aesthetic.

7. Staking / Pools Visualisation
   - A section summarising staking pools or DeFi positions using 3D-inspired gauges (pill bars, ring charts or stacked panels) rather than flat charts;
   - Each pool card has a headline metric (APY / TVL / lockup) and animates slightly when hovered to show it is interactive.

8. Activity / Feed
   - A list or grid of recent actions (trades, mints, claims) as stacked 3D cards, each with small icons, descriptions and timestamps;
   - Hover shifts the cards slightly to reinforce the sense of depth and interactivity.

9. Wallet Connect Modal
   - Tapping “Connect Wallet” opens a central modal built as a glass panel over a dimmed background;
   - Inside, show wallet options as 3D cards (MetaMask, WalletConnect, etc.) that translate forward and tilt on hover;
   - The modal uses a strong depth shadow, rim light and an animated close button (e.g. rotation on hover).

[Color & Material]
- Background: purple-blue gradients and dark grid textures that signal Web3 and futuristic tech;
- Foreground: glassy cards with transparent layers, cyan/gold accents, and gradients that glow;
- 3D elements: token icons, cubes and charts use saturated colours with deep shadows for volumetric feel.

[Interaction & Motion]
- Floating icons and cubes should move slowly and smoothly, using CSS keyframes only;
- All interactive cards should use translateZ or rotateX/rotateY on hover to advertise clickability;
- Modal and accordion transitions should focus on scale, opacity and shadows rather than jarring position shifts.

[Output Requirements]
- Use semantic HTML to structure sections (header, main, sections for hero, stats, NFTs, prices, staking, activity, footer and wallet modal);
- Implement styling via CSS classes (or Tailwind-like utilities), avoiding external frameworks or JS animation libraries;
- You do not need to wire up real data, but the design must clearly reserve space for numeric values, charts and lists;
- The final result should be unmistakably part of the CryptoVerse Web3 Dashboard family: dark grid background, floating 3D crypto icons, glassmorphic panels and a vivid purple-blue depth-heavy aesthetic.`
        },
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CryptoVerse - Web3 Dashboard</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
      color: #ffffff;
      overflow-x: hidden;
      min-height: 100vh;
      position: relative;
    }

    /* Grid Background */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: 0;
      pointer-events: none;
    }

    .web3-container {
      position: relative;
      z-index: 1;
    }

    /* ========== HEADER ========== */
    .web3-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(99, 102, 241, 0.2);
      z-index: 1000;
      padding: 1rem 0;
    }

    .web3-nav {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .web3-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform-style: preserve-3d;
      transition: transform 0.3s ease;
    }

    .web3-logo:hover {
      transform: translateZ(10px) rotateY(5deg);
    }

    .web3-logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      transform-style: preserve-3d;
      animation: rotate-logo 8s linear infinite;
    }

    @keyframes rotate-logo {
      0%, 100% { transform: rotateY(0deg); }
      50% { transform: rotateY(180deg); }
    }

    .web3-nav-links {
      display: flex;
      gap: 2.5rem;
      align-items: center;
    }

    .web3-nav-link {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }

    .web3-nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
      transition: width 0.3s ease;
    }

    .web3-nav-link:hover {
      color: #ffffff;
    }

    .web3-nav-link:hover::after {
      width: 100%;
    }

    .web3-wallet-btn {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transform-style: preserve-3d;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
    }

    .web3-wallet-btn:hover {
      transform: translateZ(10px) rotateX(5deg);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
    }

    /* ========== HERO SECTION ========== */
    .web3-hero {
      padding: 10rem 2rem 6rem;
      text-align: center;
      position: relative;
      perspective: 1200px;
    }

    .web3-hero-title {
      font-size: 4rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #ffffff, #a78bfa, #60a5fa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: hero-fade-in 1s ease-out;
    }

    .web3-hero-subtitle {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 3rem;
      animation: hero-fade-in 1s ease-out 0.2s backwards;
    }

    @keyframes hero-fade-in {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Floating Crypto Icons */
    .web3-crypto-icons {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 400px;
      pointer-events: none;
    }

    .crypto-icon-3d {
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      font-weight: bold;
      transform-style: preserve-3d;
      animation: float-crypto 6s ease-in-out infinite;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    .crypto-btc {
      background: linear-gradient(135deg, #f7931a, #ff6b00);
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    .crypto-eth {
      background: linear-gradient(135deg, #627eea, #3c50e0);
      top: 60%;
      left: 15%;
      animation-delay: 1s;
    }

    .crypto-sol {
      background: linear-gradient(135deg, #14f195, #00c2ff);
      top: 40%;
      right: 10%;
      animation-delay: 2s;
    }

    @keyframes float-crypto {
      0%, 100% {
        transform: translateY(0) rotateY(0deg);
      }
      25% {
        transform: translateY(-20px) rotateY(90deg);
      }
      50% {
        transform: translateY(0) rotateY(180deg);
      }
      75% {
        transform: translateY(20px) rotateY(270deg);
      }
    }

    /* ========== STATS SECTION ========== */
    .web3-stats {
      max-width: 1400px;
      margin: 0 auto 4rem;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .stat-card-3d {
      background: rgba(30, 27, 75, 0.6);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 20px;
      padding: 2rem;
      position: relative;
      transform-style: preserve-3d;
      transition: all 0.4s ease;
      cursor: pointer;
      overflow: hidden;
    }

    .stat-card-3d::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .stat-card-3d:hover::before {
      opacity: 1;
    }

    .stat-card-3d:hover {
      transform: translateZ(20px) rotateX(5deg);
      box-shadow: 0 20px 50px rgba(99, 102, 241, 0.4);
      border-color: rgba(139, 92, 246, 0.5);
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .stat-value {
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .stat-change {
      color: #10b981;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .stat-change.negative {
      color: #ef4444;
    }

    /* ========== NFT GALLERY ========== */
    .web3-nft-section {
      max-width: 1400px;
      margin: 0 auto 4rem;
      padding: 0 2rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 2rem;
      text-align: center;
      background: linear-gradient(135deg, #ffffff, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nft-gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      perspective: 1500px;
    }

    .nft-cube-container {
      position: relative;
      height: 300px;
      transform-style: preserve-3d;
    }

    .nft-cube {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: rotate-nft-cube 12s linear infinite;
      cursor: pointer;
      transition: animation-play-state 0.3s;
    }

    .nft-cube:hover {
      animation-play-state: paused;
    }

    @keyframes rotate-nft-cube {
      0% { transform: rotateY(0deg) rotateX(0deg); }
      100% { transform: rotateY(360deg) rotateX(360deg); }
    }

    .nft-face {
      position: absolute;
      width: 250px;
      height: 250px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
    }

    .nft-face-front { transform: translateZ(125px); }
    .nft-face-back { transform: rotateY(180deg) translateZ(125px); background: linear-gradient(135deg, #10b981, #14b8a6); }
    .nft-face-right { transform: rotateY(90deg) translateZ(125px); background: linear-gradient(135deg, #ec4899, #ef4444); }
    .nft-face-left { transform: rotateY(-90deg) translateZ(125px); background: linear-gradient(135deg, #f97316, #fbbf24); }
    .nft-face-top { transform: rotateX(90deg) translateZ(125px); background: linear-gradient(135deg, #8b5cf6, #6366f1); }
    .nft-face-bottom { transform: rotateX(-90deg) translateZ(125px); background: linear-gradient(135deg, #06b6d4, #0ea5e9); }

    /* ========== CRYPTO PRICE CARDS ========== */
    .web3-prices {
      max-width: 1400px;
      margin: 0 auto 4rem;
      padding: 0 2rem;
    }

    .price-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      perspective: 1200px;
    }

    .price-card {
      position: relative;
      height: 200px;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      cursor: pointer;
    }

    .price-card.flipped {
      transform: rotateY(180deg);
    }

    .price-card-front,
    .price-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 20px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .price-card-front {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
      border: 1px solid rgba(99, 102, 241, 0.3);
      backdrop-filter: blur(20px);
    }

    .price-card-back {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3));
      border: 1px solid rgba(139, 92, 246, 0.3);
      backdrop-filter: blur(20px);
      transform: rotateY(180deg);
    }

    .price-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price-card-symbol {
      font-size: 1.5rem;
      font-weight: 800;
    }

    .price-card-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .price-card-price {
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(135deg, #ffffff, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .price-card-change {
      font-size: 1.1rem;
      color: #10b981;
      font-weight: 600;
    }

    .price-card-details {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .price-detail-row {
      display: flex;
      justify-content: space-between;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }

    .price-detail-value {
      color: #ffffff;
      font-weight: 600;
    }

    /* ========== STAKING POOL ========== */
    .web3-staking {
      max-width: 1200px;
      margin: 0 auto 4rem;
      padding: 0 2rem;
    }

    .staking-container {
      background: rgba(30, 27, 75, 0.6);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 30px;
      padding: 3rem;
      position: relative;
      transform-style: preserve-3d;
      perspective: 1500px;
    }

    .staking-visual {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }

    .staking-pool {
      position: relative;
      height: 200px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
      border-radius: 20px;
      border: 1px solid rgba(99, 102, 241, 0.3);
      padding: 1.5rem;
      transform-style: preserve-3d;
      transition: all 0.4s ease;
    }

    .staking-pool::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1));
      border-radius: 20px;
      transform: translateZ(10px);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .staking-pool:hover::before {
      opacity: 1;
    }

    .staking-pool:hover {
      transform: translateZ(30px) rotateX(5deg);
      box-shadow: 0 30px 60px rgba(99, 102, 241, 0.5);
    }

    .pool-name {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .pool-apy {
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(135deg, #10b981, #14b8a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .pool-tvl {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }

    .pool-stake-btn {
      margin-top: 1rem;
      width: 100%;
      padding: 0.75rem;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border: none;
      border-radius: 12px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .pool-stake-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);
    }

    /* ========== FOOTER ========== */
    .web3-footer {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(20px);
      border-top: 1px solid rgba(99, 102, 241, 0.2);
      padding: 3rem 2rem 2rem;
      margin-top: 6rem;
    }

    .web3-footer-content {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(255, 255, 255, 0.6);
    }

    .footer-social {
      display: flex;
      gap: 1.5rem;
    }

    .footer-social-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(99, 102, 241, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      transform-style: preserve-3d;
    }

    .footer-social-icon:hover {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      transform: translateZ(10px) rotateY(360deg);
    }

    .network-status {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1.5rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 20px;
    }

    .status-indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #10b981;
      animation: pulse-status 2s ease-in-out infinite;
    }

    @keyframes pulse-status {
      0%, 100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      50% {
        box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
      }
    }

    /* ========== WALLET MODAL ========== */
    .wallet-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      animation: modal-fade-in 0.3s ease-out;
    }

    .wallet-modal.active {
      display: flex;
    }

    @keyframes modal-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .wallet-modal-content {
      background: linear-gradient(135deg, rgba(30, 27, 75, 0.95), rgba(15, 23, 42, 0.95));
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 30px;
      padding: 3rem;
      max-width: 500px;
      width: 90%;
      transform-style: preserve-3d;
      animation: modal-slide-up 0.4s ease-out;
      position: relative;
    }

    @keyframes modal-slide-up {
      from {
        transform: translateY(50px) rotateX(-15deg);
        opacity: 0;
      }
      to {
        transform: translateY(0) rotateX(0deg);
        opacity: 1;
      }
    }

    .modal-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.3s ease;
    }

    .modal-close:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: rotate(90deg);
    }

    .modal-title {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 2rem;
      text-align: center;
      background: linear-gradient(135deg, #ffffff, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .wallet-options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .wallet-option {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      transform-style: preserve-3d;
    }

    .wallet-option:hover {
      background: rgba(99, 102, 241, 0.2);
      border-color: rgba(139, 92, 246, 0.5);
      transform: translateZ(10px) translateX(10px);
      box-shadow: -5px 10px 25px rgba(99, 102, 241, 0.3);
    }

    .wallet-option-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .wallet-option-name {
      font-size: 1.2rem;
      font-weight: 700;
    }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 768px) {
      .web3-nav-links {
        display: none;
      }

      .web3-hero-title {
        font-size: 2.5rem;
      }

      .web3-hero-subtitle {
        font-size: 1.2rem;
      }

      .web3-crypto-icons {
        width: 300px;
        height: 250px;
      }

      .crypto-icon-3d {
        width: 60px;
        height: 60px;
        font-size: 1.8rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .nft-gallery-grid {
        grid-template-columns: 1fr;
      }

      .staking-visual {
        grid-template-columns: 1fr;
      }

      .web3-footer-content {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <div class="web3-container">
    <!-- Header -->
    <header class="web3-header">
      <nav class="web3-nav">
        <div class="web3-logo">
          <div class="web3-logo-icon">₿</div>
          <span>CryptoVerse</span>
        </div>
        <div class="web3-nav-links">
          <a href="javascript:void(0)" class="web3-nav-link">Dashboard</a>
          <a href="javascript:void(0)" class="web3-nav-link">NFT Gallery</a>
          <a href="javascript:void(0)" class="web3-nav-link">Staking</a>
          <a href="javascript:void(0)" class="web3-nav-link">Portfolio</a>
        </div>
        <button class="web3-wallet-btn" onclick="openWalletModal()">Connect Wallet</button>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="web3-hero">
      <div class="web3-crypto-icons">
        <div class="crypto-icon-3d crypto-btc">₿</div>
        <div class="crypto-icon-3d crypto-eth">Ξ</div>
        <div class="crypto-icon-3d crypto-sol">◎</div>
      </div>
      <h1 class="web3-hero-title">Welcome to Web3</h1>
      <p class="web3-hero-subtitle">Experience the future of decentralized finance</p>
    </section>

    <!-- Portfolio Stats -->
    <section class="web3-stats">
      <div class="stat-card-3d">
        <div class="stat-label">Total Portfolio Value</div>
        <div class="stat-value">$247,893</div>
        <div class="stat-change">+12.5% (24h)</div>
      </div>
      <div class="stat-card-3d">
        <div class="stat-label">NFT Holdings</div>
        <div class="stat-value">127</div>
        <div class="stat-change">+5 (This week)</div>
      </div>
      <div class="stat-card-3d">
        <div class="stat-label">Staked Assets</div>
        <div class="stat-value">$89,421</div>
        <div class="stat-change">+3.8% APY</div>
      </div>
      <div class="stat-card-3d">
        <div class="stat-label">Trading Volume</div>
        <div class="stat-value">$1.2M</div>
        <div class="stat-change">+28.3% (30d)</div>
      </div>
    </section>

    <!-- NFT Gallery -->
    <section class="web3-nft-section">
      <h2 class="section-title">NFT Gallery</h2>
      <div class="nft-gallery-grid">
        <div class="nft-cube-container">
          <div class="nft-cube">
            <div class="nft-face nft-face-front">🎨</div>
            <div class="nft-face nft-face-back">🖼️</div>
            <div class="nft-face nft-face-right">🌈</div>
            <div class="nft-face nft-face-left">✨</div>
            <div class="nft-face nft-face-top">💎</div>
            <div class="nft-face nft-face-bottom">🔮</div>
          </div>
        </div>
        <div class="nft-cube-container">
          <div class="nft-cube">
            <div class="nft-face nft-face-front">🚀</div>
            <div class="nft-face nft-face-back">🌟</div>
            <div class="nft-face nft-face-right">🎭</div>
            <div class="nft-face nft-face-left">🎪</div>
            <div class="nft-face nft-face-top">🎯</div>
            <div class="nft-face nft-face-bottom">🎲</div>
          </div>
        </div>
        <div class="nft-cube-container">
          <div class="nft-cube">
            <div class="nft-face nft-face-front">🦄</div>
            <div class="nft-face nft-face-back">🐉</div>
            <div class="nft-face nft-face-right">🦋</div>
            <div class="nft-face nft-face-left">🌺</div>
            <div class="nft-face nft-face-top">🌸</div>
            <div class="nft-face nft-face-bottom">🍀</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crypto Price Cards -->
    <section class="web3-prices">
      <h2 class="section-title">Live Prices</h2>
      <div class="price-cards-grid">
        <div class="price-card" onclick="this.classList.toggle('flipped')">
          <div class="price-card-front">
            <div class="price-card-header">
              <div>
                <div class="price-card-symbol">BTC</div>
                <div style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">Bitcoin</div>
              </div>
              <div class="price-card-icon">₿</div>
            </div>
            <div>
              <div class="price-card-price">$42,857</div>
              <div class="price-card-change">+5.2%</div>
            </div>
          </div>
          <div class="price-card-back">
            <div class="price-card-details">
              <div class="price-detail-row">
                <span>24h Volume</span>
                <span class="price-detail-value">$28.5B</span>
              </div>
              <div class="price-detail-row">
                <span>Market Cap</span>
                <span class="price-detail-value">$838B</span>
              </div>
              <div class="price-detail-row">
                <span>24h High</span>
                <span class="price-detail-value">$43,250</span>
              </div>
              <div class="price-detail-row">
                <span>24h Low</span>
                <span class="price-detail-value">$41,890</span>
              </div>
            </div>
          </div>
        </div>

        <div class="price-card" onclick="this.classList.toggle('flipped')">
          <div class="price-card-front">
            <div class="price-card-header">
              <div>
                <div class="price-card-symbol">ETH</div>
                <div style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">Ethereum</div>
              </div>
              <div class="price-card-icon">Ξ</div>
            </div>
            <div>
              <div class="price-card-price">$2,247</div>
              <div class="price-card-change">+3.8%</div>
            </div>
          </div>
          <div class="price-card-back">
            <div class="price-card-details">
              <div class="price-detail-row">
                <span>24h Volume</span>
                <span class="price-detail-value">$15.2B</span>
              </div>
              <div class="price-detail-row">
                <span>Market Cap</span>
                <span class="price-detail-value">$269B</span>
              </div>
              <div class="price-detail-row">
                <span>24h High</span>
                <span class="price-detail-value">$2,289</span>
              </div>
              <div class="price-detail-row">
                <span>24h Low</span>
                <span class="price-detail-value">$2,198</span>
              </div>
            </div>
          </div>
        </div>

        <div class="price-card" onclick="this.classList.toggle('flipped')">
          <div class="price-card-front">
            <div class="price-card-header">
              <div>
                <div class="price-card-symbol">SOL</div>
                <div style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">Solana</div>
              </div>
              <div class="price-card-icon">◎</div>
            </div>
            <div>
              <div class="price-card-price">$98.45</div>
              <div class="price-card-change">+7.1%</div>
            </div>
          </div>
          <div class="price-card-back">
            <div class="price-card-details">
              <div class="price-detail-row">
                <span>24h Volume</span>
                <span class="price-detail-value">$2.8B</span>
              </div>
              <div class="price-detail-row">
                <span>Market Cap</span>
                <span class="price-detail-value">$42B</span>
              </div>
              <div class="price-detail-row">
                <span>24h High</span>
                <span class="price-detail-value">$99.87</span>
              </div>
              <div class="price-detail-row">
                <span>24h Low</span>
                <span class="price-detail-value">$91.23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Staking Pools -->
    <section class="web3-staking">
      <h2 class="section-title">Staking Pools</h2>
      <div class="staking-container">
        <div class="staking-visual">
          <div class="staking-pool">
            <div class="pool-name">Ethereum 2.0</div>
            <div class="pool-apy">4.5% APY</div>
            <div class="pool-tvl">TVL: $1.2B</div>
            <button class="pool-stake-btn">Stake ETH</button>
          </div>
          <div class="staking-pool">
            <div class="pool-name">Solana</div>
            <div class="pool-apy">7.2% APY</div>
            <div class="pool-tvl">TVL: $450M</div>
            <button class="pool-stake-btn">Stake SOL</button>
          </div>
          <div class="staking-pool">
            <div class="pool-name">Polygon</div>
            <div class="pool-apy">12.8% APY</div>
            <div class="pool-tvl">TVL: $280M</div>
            <button class="pool-stake-btn">Stake MATIC</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="web3-footer">
      <div class="web3-footer-content">
        <div>© 2025 CryptoVerse. All rights reserved.</div>
        <div class="footer-social">
          <div class="footer-social-icon">𝕏</div>
          <div class="footer-social-icon">📱</div>
          <div class="footer-social-icon">💬</div>
        </div>
        <div class="network-status">
          <div class="status-indicator"></div>
          <span>Ethereum Mainnet</span>
        </div>
      </div>
    </footer>

    <!-- Wallet Modal -->
    <div class="wallet-modal" id="walletModal">
      <div class="wallet-modal-content">
        <button class="modal-close" onclick="closeWalletModal()">×</button>
        <h3 class="modal-title">Connect Wallet</h3>
        <div class="wallet-options">
          <div class="wallet-option">
            <div class="wallet-option-icon">🦊</div>
            <div class="wallet-option-name">MetaMask</div>
          </div>
          <div class="wallet-option">
            <div class="wallet-option-icon">🔗</div>
            <div class="wallet-option-name">WalletConnect</div>
          </div>
          <div class="wallet-option">
            <div class="wallet-option-icon">💼</div>
            <div class="wallet-option-name">Coinbase Wallet</div>
          </div>
          <div class="wallet-option">
            <div class="wallet-option-icon">👻</div>
            <div class="wallet-option-name">Phantom</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    function openWalletModal() {
      document.getElementById('walletModal').classList.add('active');
    }

    function closeWalletModal() {
      document.getElementById('walletModal').classList.remove('active');
    }

    // Close modal on outside click
    document.getElementById('walletModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeWalletModal();
      }
    });
  </script>
</body>
</html>
        `
      }
    ]
};
