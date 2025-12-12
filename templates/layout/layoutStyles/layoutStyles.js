// 布局风格数据 - Layout Styles
export const layoutStyles = [
  {
    id: 'brokenGrid',
    title: 'styles.brokenGrid.title',
    description: 'styles.brokenGrid.description',
    demoHTML: `
      <div class="broken-grid-container">
        <div class="broken-grid-block broken-grid-1">
          <div class="broken-grid-text">BREAK</div>
        </div>
        <div class="broken-grid-block broken-grid-2">
          <div class="broken-grid-text">THE</div>
        </div>
        <div class="broken-grid-block broken-grid-3">
          <div class="broken-grid-text">RULES</div>
        </div>
      </div>
    `,
    customStyles: `
      .broken-grid-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .broken-grid-block {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        border-radius: 0.5rem;
      }
      .broken-grid-block:hover {
        transform: rotate(0deg) scale(1.1) !important;
        z-index: 10 !important;
      }
      .broken-grid-1 {
        width: 140px;
        height: 160px;
        background: #000;
        top: 30px;
        left: 20px;
        transform: rotate(-8deg);
        z-index: 3;
      }
      .broken-grid-2 {
        width: 180px;
        height: 180px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        bottom: 20px;
        right: 30px;
        transform: rotate(5deg);
        z-index: 2;
      }
      .broken-grid-3 {
        width: 130px;
        height: 140px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        top: 110px;
        right: 25px;
        transform: rotate(-12deg);
        z-index: 1;
      }
      .broken-grid-text {
        color: white;
        font-size: 1.25rem;
        font-weight: 900;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }
    `,
    demoBoxClass: 'bg-white',
    colorScheme: 'styles.brokenGrid.colorScheme',
    // 全页預覽数据
    fullPageHTML: `
      <div class="breaking-page">
        <!-- 导航欄 -->
        <nav class="nav-tilted">
          <div class="nav-logo">BRK<span class="accent-gold">.</span>GRID</div>
          <div class="nav-menu">
            <a href="javascript:void(0)" class="nav-item nav-item-1">Work</a>
            <a href="javascript:void(0)" class="nav-item nav-item-2">About</a>
            <a href="javascript:void(0)" class="nav-item nav-item-3">Contact</a>
          </div>
        </nav>

        <!-- Hero 区域 -->
        <section class="hero-chaos">
          <h1 class="hero-title hero-title-1">BREAKING</h1>
          <h1 class="hero-title hero-title-2">THE GRID</h1>
          <p class="hero-subtitle">Design Without Boundaries</p>
        </section>

        <!-- 卡片网格区 -->
        <section class="card-mosaic">
          <div class="chaos-card card-1">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <h3 class="card-title">Asymmetry</h3>
            <p class="card-desc">Break free from rigid structures</p>
          </div>

          <div class="chaos-card card-2">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
            </svg>
            <h3 class="card-title">Layering</h3>
            <p class="card-desc">Depth through z-index mastery</p>
          </div>

          <div class="chaos-card card-3">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            <h3 class="card-title">Rotation</h3>
            <p class="card-desc">Dynamic angles create energy</p>
          </div>

          <div class="chaos-card card-4">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <path d="M9 3v18"></path>
            </svg>
            <h3 class="card-title">Contrast</h3>
            <p class="card-desc">Bold colors demand attention</p>
          </div>

          <div class="chaos-card card-5">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <h3 class="card-title">Rhythm</h3>
            <p class="card-desc">Unpredictable visual flow</p>
          </div>

          <div class="chaos-card card-6">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <h3 class="card-title">Overlap</h3>
            <p class="card-desc">Elements interact freely</p>
          </div>

          <div class="chaos-card card-7">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
            </svg>
            <h3 class="card-title">Chaos</h3>
            <p class="card-desc">Controlled disorder</p>
          </div>

          <div class="chaos-card card-8">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <h3 class="card-title">Impact</h3>
            <p class="card-desc">Visual statements</p>
          </div>
        </section>

        <!-- 文字排版区 -->
        <section class="text-flow">
          <div class="text-col text-col-1">
            <svg class="text-icon icon-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            </svg>
            <h2 class="text-heading">Philosophy</h2>
            <p class="text-body">
              <span class="first-letter">G</span>rid systems have dominated web design for decades.
              But true creativity emerges when we challenge conventions. Breaking the grid isn't
              about chaos—it's about intentional disruption that creates memorable experiences.
            </p>
          </div>

          <div class="text-col text-col-2">
            <svg class="text-icon icon-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <h2 class="text-heading">Application</h2>
            <p class="text-body">
              Use rotation, scale, and position to create visual tension. Layer elements with
              varying z-index values. Embrace asymmetry while maintaining balance. Let typography
              breathe outside its constraints.
            </p>
          </div>
        </section>
      </div>
    `,
    fullPageStyles: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        overflow-x: hidden;
      }

      .breaking-page {
        background: #0a0a0a;
        color: #ffffff;
        min-height: 100vh;
        overflow-x: hidden;
      }

      /* 导航欄 */
      .nav-tilted {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 4rem;
        position: relative;
        z-index: 100;
      }

      .nav-logo {
        font-size: 1.5rem;
        font-weight: 900;
        letter-spacing: 0.1em;
        transform: rotate(-3deg);
      }

      .accent-gold {
        color: #FFD700;
      }

      .nav-menu {
        display: flex;
        gap: 3rem;
      }

      .nav-item {
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        position: relative;
        transition: color 0.3s ease;
      }

      .nav-item-1 { transform: translateY(-2px); }
      .nav-item-2 { transform: translateY(2px); }
      .nav-item-3 { transform: translateY(-3px); }

      .nav-item:hover {
        color: #FFD700;
      }

      .nav-item::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 3px;
        background: #FFD700;
        transition: width 0.3s ease;
      }

      .nav-item:hover::after {
        width: 100%;
      }

      /* Hero 区域 */
      .hero-chaos {
        padding: 8rem 4rem 6rem;
        position: relative;
      }

      .hero-title {
        font-size: 8rem;
        font-weight: 900;
        line-height: 0.9;
        letter-spacing: -0.02em;
        margin: 0;
      }

      .hero-title-1 {
        transform: rotate(-3deg) translateX(-2rem);
        color: #ffffff;
        text-shadow: 0 0 40px rgba(255, 215, 0, 0.3);
      }

      .hero-title-2 {
        transform: rotate(2deg) translateX(3rem);
        background: linear-gradient(135deg, #FFD700 0%, #FF4444 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 0.5rem;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        font-weight: 300;
        color: #aaaaaa;
        margin-top: 2rem;
        transform: translateX(4rem);
        letter-spacing: 0.2em;
      }

      /* 卡片网格区 */
      .card-mosaic {
        padding: 4rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        position: relative;
      }

      .chaos-card {
        background: #1a1a1a;
        border: 2px solid #FFD700;
        border-radius: 1rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .chaos-card:hover {
        transform: scale(1.05) rotate(0deg) !important;
        box-shadow: 0 0 40px rgba(255, 215, 0, 0.4);
        z-index: 10;
        border-color: #FF4444;
      }

      .card-1 { transform: rotate(-3deg); z-index: 1; }
      .card-2 { transform: rotate(5deg); z-index: 2; }
      .card-3 { transform: rotate(-2deg); z-index: 3; }
      .card-4 { transform: rotate(4deg); z-index: 4; }
      .card-5 { transform: rotate(-6deg); z-index: 5; }
      .card-6 { transform: rotate(3deg); z-index: 6; }
      .card-7 { transform: rotate(-4deg); z-index: 7; }
      .card-8 { transform: rotate(2deg); z-index: 8; }

      .card-icon {
        width: 3rem;
        height: 3rem;
        color: #FFD700;
        stroke-width: 2;
      }

      .card-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #ffffff;
        text-align: center;
        letter-spacing: 0.05em;
      }

      .card-desc {
        font-size: 0.875rem;
        color: #888888;
        text-align: center;
        line-height: 1.4;
      }

      /* 文字排版区 */
      .text-flow {
        padding: 6rem 4rem;
        display: grid;
        grid-template-columns: 40% 60%;
        gap: 4rem;
        position: relative;
      }

      .text-col {
        position: relative;
      }

      .text-col-1 {
        transform: translateY(2rem);
      }

      .text-col-2 {
        transform: translateY(-2rem);
      }

      .text-icon {
        width: 4rem;
        height: 4rem;
        color: #FF4444;
        margin-bottom: 1.5rem;
      }

      .icon-1 {
        transform: rotate(-15deg);
      }

      .icon-2 {
        transform: rotate(15deg);
      }

      .text-heading {
        font-size: 2.5rem;
        font-weight: 900;
        color: #FFD700;
        margin-bottom: 1.5rem;
        letter-spacing: 0.05em;
      }

      .text-body {
        font-size: 1.125rem;
        line-height: 1.8;
        color: #cccccc;
      }

      .first-letter {
        font-size: 3rem;
        font-weight: 900;
        color: #FFD700;
        float: left;
        line-height: 1;
        margin-right: 0.5rem;
        margin-top: 0.2rem;
      }

      /* 響應式设計 */
      @media (max-width: 1200px) {
        .card-mosaic {
          grid-template-columns: repeat(3, 1fr);
        }

        .hero-title {
          font-size: 6rem;
        }
      }

      @media (max-width: 768px) {
        .nav-tilted {
          padding: 1.5rem 2rem;
        }

        .nav-menu {
          gap: 1.5rem;
        }

        .hero-chaos {
          padding: 4rem 2rem 3rem;
        }

        .hero-title {
          font-size: 4rem;
        }

        .hero-title-1,
        .hero-title-2 {
          transform: none;
        }

        .card-mosaic {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          padding: 2rem;
        }

        .text-flow {
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 3rem 2rem;
        }

        .text-col-1,
        .text-col-2 {
          transform: none;
        }
      }
    `,
    // 布局級 CustomPrompt：Broken Grid 破格网格
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Broken Grid」示例界面布局风格高度接近的破格网格页面。
要求：延续当前 Demo 中「倾斜导航 + 破碎标题 + 旋转卡片 + 打散网格」的整体节奏，只允许替换文案、图标和配色，不允许将布局简化为规则栅格。输出语义化 HTML 和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 创意工作室首页、作品集 Landing Page、视觉设计活动页；
- 希望传达「打破常规、善于实验、重视视觉张力」的品牌；
- 适用于以视觉展示为主的页面，而非严肃 B2B 控制台。

【整体布局结构】
1. 顶部导航（Tilted Nav）
   - 使用横向导航栏，但文字或 Logo 有轻微旋转（-3° ~ +3°），打破绝对水平；
   - 导航项之间保留较大间距，使用大写字母和明显字距营造「海报式」感。
2. Hero 标题区
   - 主标题行以大字号（如 5xl–7xl）、不同旋转角度与错位排版呈现，例如一行略向上倾斜，另一行略向下倾斜；
   - 标题可叠加渐变填充、投影和发光效果，强化主视觉冲击力；
   - 副标题采用较小字号但同样参与位移或微旋转，使整体呈现「有秩序的混乱」。
3. 卡片网格区
   - 使用 3–4 列卡片组成表面上接近网格的布局，但每张卡片带有不同的旋转角度与位置微调；
   - 卡片间仍保留统一间距，而旋转与层级（z-index）用来营造「翻飞散落」的视觉效果；
   - 每张卡片包含图标、标题与简短说明，围绕 Asymmetry / Layering / Rotation / Contrast / Rhythm 等主题展开。
4. 文本叙事区
   - 使用两列或多列文字说明 Broken Grid 的设计哲学与应用方式；
   - 同样加入少量图标或首字放大，让文本区域视觉上与上方混乱的卡片区形成对比。

【视觉与配色】
1. 背景
   - 使用深色背景（如 #0a0a0a）搭配大面积留白（深色留白），凸显彩色块；
   - 可叠加低不透明度的噪点或渐变，以避免背景过于平。
2. 主色
   - 适合使用高饱和度的霓虹色或高对比配色（如金色 #FFD700、橙红 #FF4444、蓝紫渐变等）强调主题；
   - 卡片之间的配色可以多样，但整体色系应有统一逻辑（例如同一冷暖区间）。
3. 排版
   - 标题使用极粗字重（900），字距略微拉开，强化「海报」感；
   - 正文使用常规或偏轻字重，提供阅读节奏与视觉休息区。

【交互与动效】
1. Hover 行为
   - 卡片在 hover 时恢复为 0° 或接近 0° 的角度并稍微放大，营造「重获秩序」的动感；
   - 阴影与边框在 hover 时略微增强，加强立体感和点击暗示。
2. 运动节奏
   - 动效以 200–300ms 为主，使用 ease-out 曲线，避免长时间摇晃；
   - 可加入少量缓慢漂浮或轻微位移动画，但应控制在舒适范围内，防止视觉疲劳。

【输出要求】
- 使用语义化结构（nav / main / section / footer）组织导航、Hero、卡片区和文本区；
- 使用 TailwindCSS 原子类实现 flex/grid 布局、旋转（\`rotate-*\` 或自定义 class）、阴影与渐变；
- 最终页面必须保留「倾斜导航 + 破碎大标题 + 旋转错位卡片」的 Broken Grid 核心特征，让用户一眼感受到这是一个故意打破规则的布局，而非普通整齐网格。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Broken Grid layout that looks very close to the current “Breaking the Grid” demo.
You must preserve the overall feeling of tilted navigation, fractured hero titles and rotated cards that appear to break out of a strict grid. You may change copy, icons and colors, but you should not simplify the layout back into a clean, perfectly aligned grid. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Creative studio homepages, portfolio landing pages and design-led campaign sites.
- Brands that want to communicate “experimental, rule-breaking, visually bold”.
- Best suited for visual storytelling and showcase pages, not conservative B2B dashboards.

[Layout structure]
1. Tilted navigation
   - A standard horizontal nav bar whose logo and/or links are slightly rotated (-3° to +3°) to suggest controlled chaos.
   - Items use generous spacing, uppercase labels and noticeable letter-spacing to create a poster-like feel.
2. Hero titles
   - Large type (e.g. 5xl–7xl) split across two lines or more, each line rotated differently and offset horizontally.
   - Words may use gradients, shadows and glow to become a central visual statement.
   - A short subtitle sits nearby with its own offset or rotation, reinforcing the sense of deliberate disruption.
3. Card mosaic
   - A grid of cards arranged in rows and columns, but each card is slightly rotated and possibly layered with different z-index values.
   - Each card contains an icon, a bold title and a short description, highlighting themes like Asymmetry, Layering, Rotation, Contrast, Rhythm.
4. Text narrative
   - A follow-up section explaining the philosophy and applications of breaking the grid, using 1–2 columns of copy with supporting iconography.

[Visual language]
1. Background
   - Use a dark base (e.g. #0a0a0a) with subtle gradients or noise to avoid flatness.
2. Color
   - Rely on high‑energy accent colors (gold, neon orange, purple, etc.) for titles, borders and key cards.
   - Maintain a coherent palette so the page feels like a single visual system rather than random chaos.
3. Typography
   - Hero type is heavy and expressive; body copy is more restrained, providing visual rest and explanation.

[Interaction and motion]
1. Hover
   - Cards may “snap” closer to 0° rotation and scale up slightly on hover, as if the layout momentarily regains order.
   - Shadows and border colors can intensify to signal interactivity.
2. Motion rhythm
   - Use short transitions (around 200–300ms) with ease‑out curves; avoid continuous shaking or excessive wobble.
   - Optional slow float or parallax-like micro-motions can be applied sparingly to reinforce the experimental tone.

[Output requirements]
- Use semantic regions (nav, main, section, footer) to structure navigation, hero, card mosaic and copy sections.
- Use Tailwind-style utilities for flex/grid layout, rotation (\`rotate-*\` or custom classes), shadows, gradients and spacing.
- The final layout must clearly preserve the Broken Grid identity: tilted nav, fractured headlines and misaligned-yet-intentional cards, so that it reads as a deliberate break from traditional grid-based design.`}
  },
  {
    id: 'splitScreen',
    title: 'styles.splitScreen.title',
    description: 'styles.splitScreen.description',
    layoutMode: 'fullPage',
    demoHTML: `
      <div class="w-full h-full flex">
        <div class="w-1/2 bg-black flex items-center justify-center text-white text-4xl font-bold">A</div>
        <div class="w-1/2 bg-white flex items-center justify-center text-black text-4xl font-bold border-l border-gray-200">B</div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'p-0',
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Split Screen（左右分屏）」示例界面布局风格高度接近的页面。
要求：保持左右各占 50% 的硬分割结构，一侧为深色背景浅色文字，另一侧为浅色背景深色文字，只允许替换文案、品牌元素和具体配色，不允许改变「强对比双区域」这一核心布局思路。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 方案对比页：例如「个人版 / 企业版」「基础版 / 高级版」。
- 双入口页：例如「我是新用户 / 我是已有用户」「设计师入口 / 开发者入口」。
- 品牌叙事：左侧为视觉故事，右侧为关键信息与行动按钮。

【整体布局结构】
1. 外层容器
   - 使用一个全宽容器包裹左右两侧区域：\`<main class='w-full h-screen flex'>\`。
   - 高度可为视窗高度（h-screen）或至少铺满首屏。
2. 左右面板
   - 左面板与右面板在桌面端使用固定 50/50 宽度：\`w-1/2\` + \`flex items-center justify-center\`。
   - 主要内容（标题、副标题、按钮）在各自面板内垂直水平居中，文本尽可能简洁有力（例如单字母 A/B 或简洁短句）。
3. 分隔线
   - 在两个面板之间使用清晰的分界：如中间 1px 灰色边线（\`border-l border-gray-200\`）或轻微投影。

【色彩与对比】
1. 左右对比
   - 一侧使用深色背景（如 \`bg-black\`、\`bg-slate-900\`）+ 白色或浅灰文字；
   - 另一侧使用白色或浅灰背景（如 \`bg-white\`、\`bg-gray-50\`）+ 深灰或黑色文字。
2. 品牌色应用
   - 可在两侧标题或按钮上统一使用品牌色（如蓝/紫）作为强调，但不要破坏左右反差的整体印象。
3. 字号与字重
   - 主文本建议在 \`text-3xl\`–\`text-5xl\` 之间，\`font-bold\` 或 \`font-extrabold\`，确保结构一眼可见。

【响应式行为】
1. 桌面端（≥1024px）
   - 保持 50/50 横向分屏，内容居中显示。
2. 平板与手机端
   - 可将两个区域调整为上下堆叠（如 \`flex-col\`），但应保留色调对比与内容层级；
   - 参数建议：上方区域仍为深色，下方为浅色，并保留清晰的分割线（如 \`border-t\`）。

【交互与动效】
1. 悬停反馈
   - 若面板可点击，可在 hover 时略微提高亮度或增加轻微阴影，暗示「可进入」；
   - 若只是静态对比，交互反馈可保持极简，避免喧宾夺主。
2. 按钮交互
   - 若面板内部有按钮，保持常规 CTA 交互（背景色微调、阴影轻微变化），避免与整体分屏对比冲突。

【输出要求】
- 使用语义化结构（\`<main>\` / \`<section>\`）包裹左右面板；
- 使用 TailwindCSS 风格原子类描述布局（\`flex\`、\`w-1/2\`、\`items-center\`、\`justify-center\` 等）与配色；
- 生成结果必须保留「50/50 横向分屏 + 明确中线 + 强色彩对比」这些关键特征，让人一眼看出这是一个用于对比或双入口的 Split Screen 布局变体。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Split Screen layout that looks very close to the current “Split Screen” demo.
Keep the strict 50/50 horizontal split: one side uses a dark background with light text, the other uses a light background with dark text. You may change copy, brand elements and exact colors, but you must preserve the core idea of a high-contrast dual-panel layout. Output semantic HTML plus TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Comparison pages: “Personal vs Business”, “Basic vs Pro”, etc.
- Dual-entry pages: “New user vs Existing user”, “Designer vs Developer”.
- Brand storytelling: one side visual narrative, the other side key information and actions.

[Layout structure]
1. Outer container
   - Use a full-width flex container, for example \`<main class='w-full h-screen flex'>\`.
   - Height can be viewport height or at least a full hero section.
2. Left and right panels
   - On desktop, each panel takes 50% width (\`w-1/2\`) and centers its content with \`flex items-center justify-center\`.
   - Inside each panel, place a concise headline (letter, word, or short phrase) and optional supporting text or button.
3. Divider
   - Add a clear divider between the panels via a 1px border (\`border-l border-gray-200\`) or a subtle shadow so the split is unambiguous.

[Color and contrast]
1. Panel palettes
   - One panel uses a dark theme (e.g. \`bg-black\`, \`bg-slate-900\`) with light text;
   - The other uses a light theme (e.g. \`bg-white\`, \`bg-gray-50\`) with dark text.
2. Brand accent
   - A single accent color (e.g. blue or purple) may be used for headings or buttons on both sides, as long as the overall light/dark contrast remains strong.
3. Type scale
   - Use large, bold type (\`text-3xl\`–\`text-5xl\`, \`font-bold\`/\`font-extrabold\`) so the split-screen structure is immediately obvious.

[Responsive behaviour]
1. Desktop (≥1024px)
   - Maintain the 50/50 horizontal split with centered content in each panel.
2. Tablet and mobile
   - Stack panels vertically (e.g. via \`flex-col\`) while preserving their contrasting roles and a clear dividing line (e.g. \`border-t\`).

[Interaction and motion]
1. Hover
   - If panels are clickable, you may slightly brighten the background or increase shadow on hover to imply interactivity.
   - If they are static, keep hover states minimal so structure remains the main visual focus.
2. Buttons
   - Buttons within panels should follow standard CTA interactions (subtle background/shadow shifts) without undermining the overall split contrast.

[Output requirements]
- Use semantic HTML structure (\`<main>\`, \`<section>\`) to wrap the split-screen panels.
- Use Tailwind-style utilities for layout (\`flex\`, \`w-1/2\`, \`items-center\`, \`justify-center\`) and color.
- The resulting UI must retain “50/50 split + clear central divider + strong color contrast” as key cues so it is instantly recognisable as a split-screen layout designed for comparison or dual entry.`
    },
    stylePrompt: {
      'zh-CN': `角色设定：你是一位擅长「左右分屏（Split Screen）」结构的 UI 设计师，经常为对比型内容和双入口页面设计极简却极具冲击力的版面。

场景定位：
Split Screen 布局广泛应用于产品方案对比、登录/注册双入口、品牌故事 vs 功能介绍、两类角色入口等场景。当产品需要同时呈现「A 与 B 两种选择」或「两种截然不同的状态/路径」时，这种布局可以在第一时间帮用户快速建立心智模型。使用场景往往是用户刚进入网站的首屏，或者关键节点页面的主要视图，因此结构必须非常清晰，一眼就能看出左右两块区域的不同。

视觉设计理念：
Split Screen 的核心不在于复杂装饰，而在于「强对比 + 清分区」。通过两个等宽、视觉上高度对立的面板（深色 vs 浅色、图像 vs 纯色、静态 vs 动态），强化 A/B 的差异感。版面里很少出现杂乱元素：主标题、简短说明和关键按钮就是主角，其余辅助信息要尽量克制，避免干扰使用者判断。整体风格偏向现代、专业、理性，但可根据品牌调性适度加入情绪化图像或渐变。

材质与质感：
在视觉层面，左右两侧可以采用不同的材质与表现：一侧可以是纯色或渐变背景搭配排版文字，另一侧可以是全屏视觉图像、插画或视频；也可以两侧都使用纯色，只通过明暗对比和排版来制造差异。边界处建议使用细线、分割条或轻微投影强调「这是两块独立区域」，但不要使用过厚的线条或复杂装饰，以免破坏简洁感。整体质感应偏平面化，阴影仅用于加强层级，不应抢夺注意力。

交互体验：
交互上，Split Screen 可以是静态对比，也可以让整块面板变成巨大的点击目标。当面板可点击时，悬停状态应清晰可见——例如轻微提升亮度、增加阴影或出现微妙放大效果——让用户自然地理解「点击会进入对应路径」。按钮位置可以集中放在每个面板的中心或靠下位置，确保在视线扫过时立即捕捉到。移动端则可通过上下堆叠保持结构逻辑，适当缩短高度，避免需要滚动太多才能看到 B 区域。

整体氛围：
Split Screen 布局带来的氛围是「明确、直接、带一点仪式感」：用户刚进页面就被邀请做出选择，左右两侧仿佛两扇不同风格的门。强烈左右对比、宽大的留白和大字号，让界面看起来果断、有主见，又保有足够现代感和专业度。只要控制好内容密度与对比度，这种布局既适合酷炫的品牌叙事，也适合严肃的企业级产品首页。`,
      'en-US': `Role: You are a UI designer who specialises in split-screen layouts, often used for comparisons and dual-entry experiences. Your job is to make the structure so clear that users understand “two distinct paths” at a glance.

Scene Positioning:
Split Screen layouts are ideal for plan comparisons, login/register dual flows, brand story vs feature overview, or role-based entry points. Any time a product needs to present “A vs B” or two clearly different journeys, this layout can frame the decision immediately. It is typically used in hero sections or other key pages, where the first impression strongly influences user choices, so the division must be visually unambiguous.

Visual Design Philosophy:
The heart of split-screen is not decoration but contrast and separation. Two equal-width panels are placed side by side, each with its own mood: dark vs light, image vs solid, quiet vs energetic, etc. The interface uses minimal elements—headlines, short supporting text and primary calls-to-action—so that structure, not ornament, dominates. The overall tone tends to be modern, professional and rational, while still allowing space for brand personality on either side.

Material & Texture:
Each side may express a different “material”. One panel might use a solid or gradient background with bold typography; the other could host a full-bleed photo, illustration or looping video. Alternatively, both panels can stay flat and typographic while relying purely on light/dark contrast and composition. The center boundary is usually emphasised with a thin line, subtle divider or soft shadow to make the split explicit, but heavy borders or overly decorative separators should be avoided. Depth, if present at all, is subtle—a hint of shadow or layering is enough.

Interaction Experience:
Interactions can be quiet or more assertive depending on whether the entire panel is clickable. For clickable panels, hover states should clearly signal interactivity: slightly brighter tones, deeper shadows or small scale changes across the whole panel. Calls-to-action placed within each side should be easy to find but not fight the split itself—consider vertically aligned buttons or consistent placement along the bottom or center. On mobile, panels generally stack vertically; the visual order and contrast must still make it obvious that they represent two alternatives, not a continuous narrative.

Overall Mood:
The mood of a split-screen layout is decisive, clear and somewhat ceremonial. It feels like standing between two doors and being invited to choose one, with the layout providing enough visual cues for users to intuit what each door represents. Strong side-by-side contrast, generous whitespace and bold typography together project confidence and structure. When executed well, split-screen design works equally for expressive consumer brands and serious enterprise products, as long as the core attributes remain: two distinct, balanced panels and a clear, guided choice.`
    }
  },
  {
    id: 'masonry',
    title: 'styles.masonry.title',
    description: 'styles.masonry.description',
    layoutMode: 'fullWidth',
    demoHTML: `
      <div class="masonry-container">
        <!-- 第 1 列 -->
        <div class="masonry-column">
          <div class="masonry-card masonry-card-1">
            <svg class="masonry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12" y2="18"></line>
            </svg>
            <div class="masonry-title">Mobile App</div>
            <div class="masonry-subtitle">Interface Design</div>
            <div class="masonry-tag">UI Design</div>
          </div>
          <div class="masonry-card masonry-card-2">
            <svg class="masonry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <div class="masonry-title">Website Redesign</div>
            <div class="masonry-subtitle">Full Platform Refresh</div>
            <div class="masonry-tag">Web Design</div>
          </div>
        </div>
        
        <!-- 第 2 列 -->
        <div class="masonry-column">
          <div class="masonry-card masonry-card-3">
            <svg class="masonry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <div class="masonry-title">Brand Identity</div>
            <div class="masonry-subtitle">Visual System</div>
            <div class="masonry-tag">Branding</div>
          </div>
          <div class="masonry-card masonry-card-4">
            <svg class="masonry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <div class="masonry-title">Photography</div>
            <div class="masonry-subtitle">Visual Storytelling</div>
            <div class="masonry-tag">Photography</div>
          </div>
        </div>
        
        <!-- 第 3 列 -->
        <div class="masonry-column">
          <div class="masonry-card masonry-card-5">
            <svg class="masonry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 19l7 2-7-18-7 18 7-2zm0 0v-8"></path>
            </svg>
            <div class="masonry-title">Illustration</div>
            <div class="masonry-subtitle">Custom Artwork</div>
            <div class="masonry-tag">Digital Art</div>
          </div>
          <div class="masonry-card masonry-card-6">
            <svg class="masonry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <polyline points="4 7 4 4 20 4 20 7"></polyline>
              <line x1="9" y1="20" x2="15" y2="20"></line>
              <line x1="12" y1="4" x2="12" y2="20"></line>
            </svg>
            <div class="masonry-title">Typography</div>
            <div class="masonry-subtitle">Type System</div>
            <div class="masonry-tag">Typography</div>
          </div>
        </div>
      </div>
    `,
    customStyles: `
      /* 容器與列結構 */
      .masonry-container {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        height: 100%;
      }
      .masonry-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      
      /* 卡片基礎樣式 - 極簡風格 */
      .masonry-card {
        background: #ffffff;
        border-radius: 12px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.75rem;
        cursor: pointer;
        
        /* 極簡陰影系統 */
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        transition: all 0.25s ease;
      }
      
      /* Hover 效果 - 增強深度與輕微放大 */
      .masonry-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      }
      
      /* SVG 圖標樣式 */
      .masonry-icon {
        width: 32px;
        height: 32px;
        color: #1a1a1a;
        stroke-width: 1.5;
        margin-bottom: 0.5rem;
      }
      
      /* 文字層次結構 */
      .masonry-title {
        font-size: 16px;
        font-weight: 600;
        color: #1a1a1a;
        line-height: 1.3;
        margin: 0;
      }
      
      .masonry-subtitle {
        font-size: 12px;
        font-weight: 400;
        color: #666666;
        line-height: 1.4;
        margin: 0;
      }
      
      .masonry-tag {
        font-size: 10px;
        font-weight: 600;
        color: #3b82f6;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-top: auto;
      }
      
      /* 極致高度範圍（80-320px，差距 240px）*/
      .masonry-card-1 {
        height: 160px; /* 中等 */
      }
      .masonry-card-2 {
        height: 280px; /* 極高 */
      }
      .masonry-card-3 {
        height: 80px; /* 極低 */
      }
      .masonry-card-4 {
        height: 240px; /* 高 */
      }
      .masonry-card-5 {
        height: 200px; /* 較高 */
      }
      .masonry-card-6 {
        height: 120px; /* 較低 */
      }
      
      /* 響應式調整（可選） */
      @media (max-width: 768px) {
        .masonry-container {
          gap: 0.375rem;
        }
        .masonry-column {
          gap: 0.375rem;
        }
        .masonry-card {
          padding: 1rem;
        }
        .masonry-icon {
          width: 24px;
          height: 24px;
        }
        .masonry-title {
          font-size: 14px;
        }
        .masonry-subtitle {
          font-size: 11px;
        }
      }
    `,
    demoBoxClass: 'bg-gray-50 p-6',
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Masonry（瀑布流）」示例界面布局风格高度接近的 Masonry 网格区块。
要求：保留三列不等高度彩色卡片的瀑布流效果，每列自上而下自然堆叠卡片，整体铺满可视宽度，只允许替换卡片文案、图像内容、色板和外围模块，不允许改变「固定列宽 + 不等高度卡片」这一核心布局模式。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 作品集 Gallery：展示摄影、插画、UI 作品等高度视觉化内容；
- 灵感墙 / Moodboard：汇总各类灵感卡片、配色、构图和参考；
- 内容集合：博客卡片、商品卡片、案例卡片等大数量内容列表。

【整体布局结构】
1. 外层容器
   - 使用 \`display: flex\` 或 CSS Grid 包裹 3 列；在 Tailwind 中可使用 \`flex\` + 自定义列容器。
   - Masonry 区应占据一个完整区块宽度，四周留有适度内外边距（例如 \`p-4\`）。
2. 列级结构
   - 每列使用 \`flex\` + \`flex-col\` 垂直堆叠卡片，列之间使用统一水平间距（例如 \`gap-2\`、\`mx-2\`）。
   - 列数默认为 3 列，桌面端宽度接近等分；移动端可降为 1–2 列。
3. 卡片
   - 每张卡片有统一的内边距与圆角（如 \`rounded-xl\`、\`py-6 px-4\`），高度由内容或预设值决定，形成不等高效果；
   - 卡片内可放置标签文字、标题、图标或图片缩略图。

【布局与响应式】
1. 桌面端
   - 三列并排，卡片高度差异营造错落节奏，整体高度由内容决定；
   - Masonry 区块可以作为页面主视觉下方的大型内容集合。
2. 平板与手机
   - 可使用媒体查询或 Tailwind 的响应式类将列数缩减为 2 或 1 列；
   - 保持卡片间距一致，避免在小屏幕上出现过密排布。

【色彩与视觉语言】
1. 卡片配色
   - 使用高饱和度渐变或图片作为卡片背景（类似当前示例中的多彩渐变）；
   - 卡片内文字保持高对比度（白字或深色字），确保可读性。
2. 标签与排版
   - 标签可使用大写字母和较大的字间距（\`tracking-widest\`）强化「标签墙」感；
   - 内容较多时可在卡片中加入标题 + 简短描述，但要控制行数，避免破坏瀑布流节奏。

【交互与动效】
1. 悬停反馈
   - Hover 时卡片轻微上浮（如 \`-translate-y-1\` 或 \`-translate-y-2\`）并增强阴影，表达「可点击」；
   - 动画时长控制在 150–250ms，使用柔和缓动曲线。
2. 点击反馈
   - 可在 active 状态稍微降低高度或减弱阴影，模拟按压效果。

【输出要求】
- 使用语义化 HTML 将 Masonry 作为一个独立内容区块（如 \`<section aria-label='Masonry gallery'>\`）；
- 使用 Tailwind 原子类搭建列容器和卡片（\`flex\`、\`flex-col\`、\`gap-x\`、\`gap-y\`、\`rounded-xl\` 等）；
- 生成结果必须保留「固定列宽 + 不等高度卡片 + 垂直堆叠」的瀑布流核心特征，让人一眼看出这是 Pinterest 式 Masonry 布局变体，而不是普通整齐网格。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Masonry-style grid section that looks very close to the current “Masonry” demo.
Preserve the three-column, staggered-height card behaviour: each column stacks cards vertically with different heights, and the layout fills the available width. You may change card labels, imagery, color palette and surrounding sections, but you must not alter the core “fixed columns + variable-height cards” pattern. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Portfolio galleries for photography, illustration or UI work.
- Inspiration walls / moodboards with many small visual tiles.
- Content collections such as blog cards, product tiles or case studies.

[Layout structure]
1. Outer container
   - Wrap 3 columns in a flex container or CSS Grid; in Tailwind, use \`flex\` plus custom column wrappers.
   - The Masonry section should span the full content width, with comfortable padding/margins (e.g. \`p-4\`).
2. Columns
   - Each column is a vertical stack (\`flex flex-col\`) of cards with a consistent vertical gap (\`gap-2\` or similar).
   - At desktop sizes, use three roughly equal-width columns; on smaller viewports you may reduce to two or one.
3. Cards
   - Cards share consistent padding and radius (\`rounded-xl\`, \`py-6 px-4\`), but heights differ per card to create the waterfall effect.
   - Inside each card, place a label, title, icon or thumbnail; keep copy tight so the overall rhythm stays light.

[Responsive behaviour]
1. Desktop
   - Three columns side by side, with staggered card heights producing a brick-wall rhythm;
   - The Masonry section can sit under a hero area as the primary content gallery.
2. Tablet and mobile
   - Use responsive classes/media queries to reduce column count to 2 or 1;
   - Maintain consistent gaps so the layout does not feel cramped on small screens.

[Color and visual language]
1. Card backgrounds
   - Use bold gradients or imagery for card backgrounds (similar to the multi-color gradients in the current demo).
   - Ensure high contrast between background and text (white on dark, or dark on light).
2. Labels and typography
   - Consider uppercase labels with increased letter-spacing (\`tracking-widest\`) to emphasise the “tag wall” feeling.
   - When including longer text, limit the number of lines to avoid breaking the visual rhythm.

[Interaction and motion]
1. Hover
   - On hover, cards should gently lift (e.g. \`-translate-y-1\`/\`-translate-y-2\`) and/or deepen their shadows to signal clickability.
   - Keep animations short (150–250ms) with smooth easing.
2. Active
   - Optionally reduce the lift and shadow slightly on active press to mimic a physical press.

[Output requirements]
- Use semantic HTML to wrap the Masonry section (e.g. \`<section aria-label='Masonry gallery'>\`).
- Use Tailwind-style utilities for columns and cards (\`flex\`, \`flex-col\`, \`gap-x\`, \`gap-y\`, \`rounded-xl\`, etc.).
- The generated UI must preserve “fixed columns + variable-height stacked cards” as key cues so it is clearly read as a Masonry layout, not a regular uniform grid.`
    },
    stylePrompt: {
      'zh-CN': `角色设定：你是一位熟悉 Pinterest 等瀑布流网站的 UI 设计师，专门为图片集、作品集和灵感墙设计 Masonry 布局，使大量内容看起来既丰富又有秩序。

场景定位：
Masonry 布局最适合承载数量众多且高度不一的内容卡片，例如摄影作品、插画、UI 截图、商品卡片、短文摘录等。用户通常以「浏览 + 探索」为主，而非逐条精读，所以界面需要提供轻松的滚动体验与明显的视觉节奏，让人愿意一直往下滑，像翻看灵感墙或 Pinterest 动态流一样。

视觉设计理念：
Masonry 的核心在于「固定列宽 + 不等高卡片 + 垂直自然堆叠」。与传统严格的行列网格不同，它有意打破整齐的行高，让卡片高度随内容而变化，从而形成砖墙般错落的视觉节奏。但在列宽、列间距、卡片样式等方面保持高度一致，以避免画面混乱。整体视觉应该给人一种「丰富而不凌乱」的感觉：每一张卡片都像可以被拿起的砖块，组合成一面内容墙。

材质与质感：
在具体表现上，Masonry 卡片可以采用渐变背景、纯色背景或图片作为底层材质。重要的是整组卡片在圆角、阴影、边距和字体体系上具有一致性：例如统一的圆角半径、统一的阴影深浅和统一的标题字号。这样即便颜色或图片内容变化很大，整体仍然像一套经过设计的系统，而不是杂乱堆砌。卡片上的标签、标题和辅助文字应该简洁有力，避免过长说明破坏瀑布流的轻盈感。

交互体验：
交互上，Masonry 布局往往通过简单的 hover 上浮、阴影增强或轻微缩放来表达「可点击性」，而不会使用复杂动画。因为屏幕上同时出现的卡片数量较多，任何过于复杂或频繁的动画都会让画面显得嘈杂。滚动行为应当顺畅、连续，不建议在瀑布流中加入大量分页或强制停顿；如有加载更多内容，也应以自然的「继续往下延伸墙面」方式呈现。点击卡片后，应为用户提供清晰的返回位置感（例如返回后仍回到原来的滚动位置）。

整体氛围：
Masonry 布局营造的是一种「灵感墙」式的氛围：内容像一块块彩色砖块紧密排列，用户可以在其中自由游走。它既适合活泼、多彩的创意品牌，也可以通过更克制的色彩与边框表现成冷静的内容博物馆。只要列宽、间距和卡片风格保持统一，哪怕内容极其多样，用户依然能快速建立对版面结构的认识，放心地滚动和探索。`,
      'en-US': `Role: You are a UI designer who frequently works with Pinterest-style Masonry layouts, designing dense yet readable walls of content for galleries, portfolios and inspiration feeds.

Scene Positioning:
Masonry layouts are ideal for large collections of items with variable height: photography, illustration, UI mockups, product cards, quote snippets and more. Users typically browse and explore rather than read each item in depth, so the interface must support comfortable scrolling and an engaging visual rhythm that invites “just one more scroll”.

Visual Design Philosophy:
The core idea of Masonry is “fixed column widths + variable-height cards + natural vertical stacking”. Unlike rigid row-and-column grids, Masonry deliberately breaks uniform row heights so cards align vertically within columns but not across rows. This creates a brick-wall rhythm while column widths, gaps and card styling remain consistent to prevent chaos. The layout should feel rich but not messy: every card looks like a small, self-contained tile that contributes to a larger content wall.

Material & Texture:
Cards may be gradient-based, image-based or solid blocks, but they should share a unified visual language: consistent corner radii, similar shadow depth and a coherent type scale. This cohesion allows the layout to accommodate highly diverse content without feeling visually fragmented. Labels, titles and brief metadata should be concise and punchy; overly long descriptions will make the waterfall feel heavy and break the sense of lightness. The grid itself—columns, gaps, alignment—acts as the invisible structure that holds everything together.

Interaction Experience:
Interactions in Masonry layouts are usually subtle. Hover states often involve gentle lift, slightly stronger shadows or minor scale changes to indicate clickability. Because many cards are visible at once, heavy or complex animations would quickly overwhelm the eye. Scrolling should feel smooth and continuous; infinite or “load more” patterns should extend the wall downward rather than interrupt the flow. After drilling into an item and then returning, users should land back at the same scroll position so they can continue exploring seamlessly.

Overall Mood:
The Masonry family conveys the feeling of an inspiration wall: a dense but structured field of ideas and visuals. It can support vibrant, colourful brands as well as more restrained, museum-like presentations simply by tuning colors and shadows. As long as column widths, spacing and card styling are consistent, even extremely varied content will feel curated rather than chaotic, giving users confidence to explore and discover without getting lost.`}
  }
];
