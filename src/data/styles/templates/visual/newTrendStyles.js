// 新趨勢風格数据 - New Trend Styles
// ✅ 階段 3.2 优化: 移除所有静態 import，改用動態加載
// 預期減少構建体積：55 KB

export const newTrendStyles = [
  {
    id: 'maximalism',
    title: 'styles.newTrend.maximalism.title',
    description: 'styles.newTrend.maximalism.description',
    demoHTML: `
      <div class="w-full h-full p-4 bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 relative overflow-hidden">
        <!-- 背景裝飾元素 -->
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-2 left-2 w-16 h-16 bg-yellow-300 rounded-full"></div>
          <div class="absolute top-8 right-4 w-12 h-12 bg-green-400 rotate-45"></div>
          <div class="absolute bottom-4 left-8 w-20 h-20 bg-blue-400 rounded-full"></div>
          <div class="absolute bottom-2 right-2 w-14 h-14 bg-red-400"></div>
        </div>

        <!-- 主要內容 -->
        <div class="relative z-10 text-center space-y-2">
          <h4 class="text-3xl font-black text-white drop-shadow-lg">MORE</h4>
          <p class="text-white font-bold text-sm drop-shadow">IS MORE!</p>
        </div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'p-0',
    colorScheme: 'styles.newTrend.maximalism.colorScheme',
    // 極繁主義風格的 CustomPrompt（給 LLM 的生成指令）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Maximalism 极繁主义」核心样式卡展示界面风格高度接近的页面。
要求：保持高饱和、多元素、舞台式视觉的整体气质，只允许替换文案、插图及具体配色组合，不允许将版面简化为极简或低密度布局。输出语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 艺术博物馆或当代艺术展览 Landing Page
- 音乐 / 文化节宣传页、创意品牌活动页
- 需要传达「More is more」「信息很满但很有趣」的体验型页面

【整体布局结构】
1. 顶部区域
   - 使用带有渐变或半透明背景的导航栏，Logo 与主导航项可以使用彩色标签或徽章形式呈现。
   - 导航文字可以略大且粗体，配合小图标或 Emoji 强化「节日感」。
2. Hero 标题区
   - 使用超大字号、粗体标题（例如 MORE IS MORE!），置于画面中心或稍偏上位置。
   - 标题周围用若干彩色徽章、标签、Icon 或 Emoji 环绕，营造视觉爆炸感。
3. 内容区块
   - 可以采用多列卡片或模块化区域，每块内容卡片都有自己的高饱和渐变背景、边框和装饰图形。
   - 允许信息密度较高，但必须通过标题、分组和合理的留白将信息组织成可识别的块。

【色彩与材质】
1. 配色策略
   - 同屏中可同时出现多种高饱和颜色（粉、紫、橙、蓝、翠绿等），但需要通过大小和位置控制，避免所有元素同时抢眼。
   - 背景可以是强烈渐变或图案纹理，前景卡片再叠加自己的渐变或纯色，形成层层叠加。
2. 材质质感
   - 使用粗边框、强阴影和发光外框，让卡片像一张张海报或贴纸被贴在舞台上。
   - 可以在背景中加入光斑、颗粒噪点或光束线条，增加炫目、庆典氛围。

【图形元素与排版】
1. 图形
   - 使用几何形状（圆、三角形、矩形）、Emoji、图标和小插画自由散布，但要注意围绕某个主视觉中心。
2. 文本排版
   - 标题字重极粗（black / extrabold），字距可略扩展，强化视觉存在感。
   - 分组标题和标签也可以使用全部大写或带背景块的形式，强化「海报」感。

【交互与动效】
1. 悬停
   - 卡片和按钮在 hover 时可以轻微放大、旋转或加强阴影，并让边框或渐变变更亮。
2. 动画
   - 可以给背景元素或小徽章添加缓慢浮动或闪烁高光，但避免高频闪烁，以免视觉疲劳。
   - 动效节奏可稍快于常规企业页面，但不要超过 300ms 的快速抖动。

【输出要求】
- 使用语义化 HTML：header、nav、main、section 组织导航、Hero 和内容区域。
- 使用 TailwindCSS 原子类控制多彩背景（如 bg-gradient-to-br）、阴影（shadow-2xl）、圆角和布局。
- 生成的 UI 必须让人一眼感到「视觉极度丰富，同时仍看得见层级与结构」，明确属于 Maximalism 极繁主义风格变体。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Maximalism style page that looks very close to the current “Maximalism” core style card demo.
Keep the high-saturation, element-dense, stage-like aesthetic; you may change copy, illustrations and specific color combinations, but you must not simplify the layout into a minimal or low-density design. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Landing pages for museums, contemporary art exhibitions and cultural festivals.
- Bold creative brand or campaign homepages where “more is more” is part of the identity.
- Experiences that should feel visually packed, loud and entertaining, yet still navigable.

[Layout structure]
1. Header
   - Use a gradient or semi-transparent header bar with a strong logo and navigation links styled as colorful pills or badges.
   - Navigation text can be bold and slightly oversized, optionally with emojis or icons to express festivity.
2. Hero section
   - Place an oversized, heavy headline (e.g. “MORE IS MORE!”) at or near the center of the viewport.
   - Surround the headline with badges, tags and decorative icons or emojis to create a visual explosion focal point.
3. Content blocks
   - Use multi-column cards or modules where each card has its own saturated gradient or bold solid color, plus strong borders and shadows.
   - Allow rich content but group it clearly: strong titles, subheadings and consistent spacing maintain readability.

[Color and material]
1. Palette
   - Combine multiple saturated hues (pinks, purples, oranges, blues, emeralds) in a single view; control dominance via size and placement.
   - Backgrounds may be strong gradients or patterns, with foreground cards stacking additional gradients or solids.
2. Rendering
   - Cards, chips and buttons carry thick borders, pronounced shadows and glow-like outlines so they feel like poster fragments pasted together.
   - Background layers can include light flares, noise or streaks to simulate stage lighting or neon festival signage.

[Interaction and motion]
1. Hover
   - On hover, cards and buttons can scale up slightly, strengthen shadows and bright borders, and feel theatrically responsive.
2. Motion
   - Use gentle floating, pulsing or shimmering for decorative elements; avoid fast flicker that would cause eye strain.
   - Keep motion timings lively but controlled (roughly 180–300ms for typical UI transitions).

[Output requirements]
- Use semantic HTML (header/nav/main/section) to structure the page.
- Use Tailwind-style utilities for gradients, layout, spacing, shadows and typography.
- The resulting UI must clearly embody Maximalism: visually dense, multi-colored and celebratory, while preserving enough hierarchy and grouping to remain usable.`
    },
    // 極繁主義風格的敘事型 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长极繁主义（Maximalism）视觉风格的 UI 设计师，需要打造一个「一眼就感到爆炸丰富」的艺术或文化页面。

场景定位：
- 适用于艺术博物馆、展览活动页、创意品牌 Landing Page 或音乐 / 文化节的宣传站。
- 页面要传达“More is more”的态度：信息、色彩和装饰都很多，但仍需保持结构和可用性。

视觉设计理念：
- 在同一画面中大胆堆叠多种高饱和色彩（粉、紫、橙、蓝、翠绿等）以及几何形状、表情符号与渐变块。
- 大字号、粗字体标题置于中心或视线焦点位置，周围用标签、徽章、装饰符号（如 💎✨👑）围绕，形成视觉爆点。
- 不追求「留白」，而追求带节奏的「填满」：每个区域都有内容或装饰，但透过分组和层次让用户仍然能读懂结构。

材质与质感：
- 大量使用渐变背景、荧光感高光以及带发光边框的卡片，营造舞台灯光或夜店灯牌的感觉。
- 卡片、徽章和按钮多采用粗边框、强阴影与高对比度颜色，使每个元素都像独立海报碎片被拼贴在一起。

交互体验：
- 悬停与点击反馈可以稍微夸张：例如轻微放大、阴影加深、彩色描边亮度提升，让交互本身也带「戏剧感」。
- 动画节奏可比普通界面略快，但要避免眩目闪烁：以平滑位移、缩放和发光变化为主，而非频繁闪烁。

氛围营造：
- 整体氛围应该是热闹、张扬、庆典式的，让用户有走进当代艺术馆或夜间艺术节的感觉。
- 用户在浏览时应感到「信息很多但很有趣」，愿意在页面上四处探索不同角落。`,

      'en-US': `Role: You are a UI designer specializing in Maximalism, creating a “more is more” visual experience for an art or culture-focused page.

Scene:
- Suited for museum or exhibition sites, festival and event landings, or bold creative brand homepages.
- The page should feel visually packed and loud, yet still navigable and structurally readable.

Visual philosophy:
- Combine many saturated colors (pink, purple, orange, blue, emerald, etc.) with geometric shapes, emojis and gradient panels in the same viewport.
- Use oversized, heavy headings at the center or main focal area, surrounded by badges, tags and decorative icons like 💎✨👑 to create a visual explosion.
- Favor “organized fullness” over minimalism: nearly every region hosts content or decoration, but grouping and hierarchy keep it understandable.

Material & texture:
- Rely on strong gradients, glow effects and thick framed cards to evoke stage lighting or neon signage.
- Cards, chips and buttons should feel like poster fragments pasted together—bold borders, pronounced shadows and high color contrast.

Interaction:
- Hover and active states may be somewhat dramatic: light scaling, deeper shadows, brighter outlines, so interaction itself feels performative.
- Animation timing can be livelier than in neutral UIs, but avoid eye-straining flicker—prefer smooth motion and glow changes.

Mood:
- Overall, the mood is festive, exuberant and theatrical, like walking into a contemporary art show or night-time street festival.
- Users should feel there is “a lot going on, in a fun way” and be encouraged to explore every corner of the page.`
    },
    fullPageHTML: `
      <!-- 企業級 SaaS Dashboard - 純 CSS 设計 -->
      <div class="dashboard-wrapper">

        <!-- 頂部导航欄 -->
        <header class="navbar">
          <div class="nav-container">
            <div class="nav-left">
              <div class="logo-box"><span class="logo-text">E</span></div>
              <span class="brand-name">EnterpriseHub</span>
            </div>
            <div class="nav-right">
              <button class="icon-button">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <span class="notification-dot"></span>
              </button>
              <div class="user-avatar">JD</div>
            </div>
          </div>
        </header>

        <!-- 主內容区 -->
        <main class="main-content">
          <div class="container">
            <!-- 页面标題 -->
            <div class="page-header">
              <div>
                <h1 class="page-title">Dashboard Overview</h1>
                <p class="page-subtitle">Welcome back! Here's your performance summary.</p>
              </div>
              <div class="button-group">
                <button class="btn btn-secondary">Export</button>
                <button class="btn btn-primary">+ New Project</button>
              </div>
            </div>

            <!-- KPI 卡片网格 -->
            <div class="kpi-grid">
              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Total Revenue</span>
                  <div class="icon-box icon-box-blue">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">$2.4M</span>
                  <span class="kpi-change kpi-change-positive">↑ 12.5%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Active Users</span>
                  <div class="icon-box icon-box-green">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">18.2K</span>
                  <span class="kpi-change kpi-change-positive">↑ 8.3%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Conversion Rate</span>
                  <div class="icon-box icon-box-purple">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">3.6%</span>
                  <span class="kpi-change kpi-change-negative">↓ 2.1%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Growth Rate</span>
                  <div class="icon-box icon-box-orange">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">+94%</span>
                  <span class="kpi-change kpi-change-positive">↑ 5.2%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>
            </div>

            <!-- 数据表格 -->
            <div class="data-section">
              <div class="section-header">
                <h2 class="section-title">Recent Transactions</h2>
              </div>
              <div class="table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#001</td>
                      <td>Acme Corporation</td>
                      <td>$12,450</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 15, 2025</td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>Tech Innovations Inc</td>
                      <td>$8,320</td>
                      <td><span class="badge badge-warning">Pending</span></td>
                      <td>Oct 14, 2025</td>
                    </tr>
                    <tr>
                      <td>#003</td>
                      <td>Global Solutions Ltd</td>
                      <td>$5,100</td>
                      <td><span class="badge badge-danger">Failed</span></td>
                      <td>Oct 13, 2025</td>
                    </tr>
                    <tr>
                      <td>#004</td>
                      <td>StartupXYZ</td>
                      <td>$9,800</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 12, 2025</td>
                    </tr>
                    <tr>
                      <td>#005</td>
                      <td>Enterprise Group</td>
                      <td>$15,600</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 11, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

    `,
    fullPageStyles: `
      /* 企業級 SaaS Dashboard - 純 CSS 樣式 */

      /* 重置与基礎 */
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }

      /* 主容器 */
      .dashboard-wrapper {
        min-height: 100vh;
        background: #f9fafb;
      }

      /* 导航欄 */
      .navbar {
        background: white;
        border-bottom: 1px solid #e5e7eb;
        padding: 0;
        position: sticky;
        top: 0;
        z-index: 50;
      }
      .nav-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 24px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nav-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .logo-box {
        width: 32px;
        height: 32px;
        background: #2563eb;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .logo-text {
        color: white;
        font-weight: 700;
        font-size: 18px;
      }
      .brand-name {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
      }
      .nav-right {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .icon-button {
        position: relative;
        padding: 8px;
        background: none;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        color: #6b7280;
        transition: all 0.2s;
      }
      .icon-button:hover {
        background: #f3f4f6;
        color: #374151;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
      .notification-dot {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 8px;
        height: 8px;
        background: #ef4444;
        border-radius: 50%;
      }
      .user-avatar {
        width: 40px;
        height: 40px;
        background: #2563eb;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-center;
        font-weight: 600;
        font-size: 14px;
      }

      /* 主內容区 */
      .main-content {
        padding: 32px 0;
      }
      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* 页面标題 */
      .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
      }
      .page-title {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 4px;
      }
      .page-subtitle {
        font-size: 14px;
        color: #6b7280;
      }
      .button-group {
        display: flex;
        gap: 12px;
      }
      .btn {
        padding: 10px 16px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
      }
      .btn-primary {
        background: #2563eb;
        color: white;
      }
      .btn-primary:hover {
        background: #1d4ed8;
      }
      .btn-secondary {
        background: white;
        color: #374151;
        border: 1px solid #d1d5db;
      }
      .btn-secondary:hover {
        background: #f9fafb;
      }

      /* KPI 卡片网格 */
      .kpi-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
        margin-bottom: 32px;
      }
      .kpi-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 24px;
        transition: box-shadow 0.2s;
      }
      .kpi-card:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .kpi-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      .kpi-label {
        font-size: 14px;
        font-weight: 500;
        color: #6b7280;
      }
      .icon-box {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-box-blue {
        background: #dbeafe;
        color: #2563eb;
      }
      .icon-box-green {
        background: #d1fae5;
        color: #10b981;
      }
      .icon-box-purple {
        background: #e9d5ff;
        color: #9333ea;
      }
      .icon-box-orange {
        background: #fed7aa;
        color: #ea580c;
      }
      .icon-box .icon {
        width: 20px;
        height: 20px;
      }
      .kpi-value-row {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-bottom: 8px;
      }
      .kpi-value {
        font-size: 30px;
        font-weight: 700;
        color: #111827;
      }
      .kpi-change {
        font-size: 12px;
        font-weight: 500;
      }
      .kpi-change-positive {
        color: #10b981;
      }
      .kpi-change-negative {
        color: #ef4444;
      }
      .kpi-note {
        font-size: 12px;
        color: #9ca3af;
      }

      /* 数据区塊 */
      .data-section {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
      }
      .section-header {
        padding: 20px 24px;
        border-bottom: 1px solid #e5e7eb;
      }
      .section-title {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
      }
      .table-wrapper {
        overflow-x: auto;
      }
      .data-table {
        width: 100%;
        border-collapse: collapse;
      }
      .data-table thead {
        background: #f9fafb;
      }
      .data-table th {
        padding: 12px 24px;
        text-align: left;
        font-size: 12px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .data-table td {
        padding: 16px 24px;
        font-size: 14px;
        color: #374151;
        border-top: 1px solid #e5e7eb;
      }
      .data-table tbody tr:hover {
        background: #f9fafb;
      }

      /* 徽章 */
      .badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
      }
      .badge-success {
        background: #d1fae5;
        color: #065f46;
      }
      .badge-warning {
        background: #fef3c7;
        color: #92400e;
      }
      .badge-danger {
        background: #fee2e2;
        color: #991b1b;
      }

      /* 響應式 */
      @media (max-width: 768px) {
        .page-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .kpi-grid {
          grid-template-columns: 1fr;
        }
      }

    `
  },
  {
    id: 'scandi',
    title: 'styles.newTrend.scandi.title',
    description: 'styles.newTrend.scandi.description',
    demoHTML: `
      <div class="w-full h-full bg-gray-50 p-6 space-y-4">
        <!-- 简約卡片 -->
        <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div class="flex-1">
              <div class="h-2 bg-gray-300 rounded w-2/3 mb-1"></div>
              <div class="h-2 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="h-2 bg-gray-100 rounded"></div>
            <div class="h-2 bg-gray-100 rounded w-5/6"></div>
          </div>
        </div>

        <!-- 自然元素 -->
        <div class="flex gap-2 justify-center">
          <div class="w-8 h-8 bg-green-100 rounded-full border border-green-200"></div>
          <div class="w-8 h-8 bg-blue-50 rounded-full border border-blue-100"></div>
          <div class="w-8 h-8 bg-amber-50 rounded-full border border-amber-100"></div>
        </div>
      </div>
    `,
    // ✅ 階段 3.2: 改用動態加載 ID
    fullPagePreviewId: 'scandi',
    colorScheme: 'styles.newTrend.scandi.colorScheme',
    customStyles: '',
    demoBoxClass: 'bg-gray-50 p-0',
    // 北歐極简風格的 CustomPrompt（給 LLM 的生成指令）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Scandi 北欧极简」示例界面风格高度接近的 UI。
要求：保持大量白色与浅灰、极少量柔和彩色点缀以及工整栅格布局的整体气质，只允许替换文案、图标与局部模块，不允许引入高饱和大色块或复杂纹理。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 个人仪表板：展示今日任务、日程、习惯追踪和简单统计信息。
- 轻量级 SaaS 工具：如待办管理、个人财务概览、学习进度面板。
- 任何需要「安静、理性、不打扰」体验的日常工具型界面。

【整体布局结构】
1. 外层容器
   - 使用浅灰背景包裹主要内容，例如 bg-gray-50，左右留有充足边距。
2. 卡片区
   - 多张白色卡片按栅格排列（单列或双列），每张卡片使用小圆角、轻阴影和细边框。
   - 卡片内部典型结构：头像 / 图标 + 文本骨架条（灰色占位条）+ 简单状态信息。
3. 自然元素区
   - 在卡片下方或侧边增加少量彩色圆形或小块区域，作为状态 / 分类色点，颜色柔和、面积较小。

【色彩与材质】
1. 基底颜色
   - 背景：白色、浅灰（如 #f9fafb、#f3f4f6）。
   - 文本：深灰（#111827、#374151），避免使用纯黑。
2. 强调色
   - 使用少量绿色、浅蓝、暖黄作为「自然感」点缀，例如绿色用于完成状态、蓝色用于信息、黄橙用于提醒。
3. 材质与质感
   - 卡片与按钮表面接近纸张或薄木板的感觉：无强烈高光，阴影短而柔。
   - 图标采用简单线框或极简填色，不做写实阴影或 3D 效果。

【交互与动效】
1. 悬停反馈
   - 对卡片和按钮使用非常轻微的背景提亮或阴影变化，动画时长约 120–180ms。
2. 按钮行为
   - 主按钮可使用纯色填充（如柔和的蓝或绿），但阴影与边框都要保持克制。

【输出要求】
- 使用语义化 HTML（main、section、header）组织卡片区和自然元素区。
- 使用 TailwindCSS 原子类控制颜色、间距和排版（如 bg-gray-50、shadow-sm、rounded-lg）。
- 生成的界面必须保留「大量白+浅灰 + 少量柔和点色 + 工整排版」的北欧极简特征，让人一眼感到安静、实用且有一点温度。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Scandinavian Minimal (Scandi) style interface that looks very close to the current demo.
Keep the large white and light-gray surfaces, tiny muted color accents and orderly grid layout. You may change copy, icons and specific modules, but you must not introduce large saturated color blocks or heavy textures. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Personal dashboards: tasks, schedule, habit tracking and light analytics.
- Lightweight SaaS tools such as to-do managers, personal finance summaries or learning progress views.
- Any everyday tool UI that should feel calm, unobtrusive and quietly supportive.

[Layout structure]
1. Outer container
   - Use a pale gray background (e.g. bg-gray-50) with comfortable padding on all sides.
2. Card area
   - Arrange white cards in one or two columns; each card has small radii, soft shadows and subtle borders.
   - Typical card content: avatar or icon, skeleton-like gray bars for text, and perhaps a small state indicator.
3. Natural accents
   - Place a few small circular color spots (greens, blues, ambers) to represent categories or statuses; keep them visually light.

[Color and material]
1. Base colors
   - Backgrounds: whites and very light grays.
   - Text: dark grays instead of pure black to reduce harshness.
2. Accents
   - Muted greens, soft blues and warm yellows used sparingly for tags, status pills or small icons.
3. Rendering
   - Surfaces should feel like paper or thin wood: no strong highlights or deep shadows; use short, diffused drop shadows instead.
   - Icons are simple outline or minimal solid shapes, more like signage than illustration.

[Interaction]
1. Hover
   - Cards and buttons react with tiny background lifts or border tints, with fast but gentle transitions (around 120–180ms).
2. Primary actions
   - Primary buttons may use solid fills in the accent color family, but avoid heavy shadows or dramatic gradients.

[Output requirements]
- Use semantic sections (main/section/header) to structure the layout.
- Use Tailwind utilities for spacing, alignment and neutral color palette.
- The resulting UI must clearly express Scandi minimalism: bright, quiet, orderly and warm enough to feel like a tidy Nordic apartment.`},
    // 北歐極简風格的 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长北欧（Scandi）极简风格的 UI 设计师，需要设计一个安静、明亮、功能清晰的日常工具界面。

场景定位：
- 适用于个人仪表板、习惯追踪、日程管理或轻量级 SaaS 应用。
- 用户期待界面“看起来简单、用起来直接、不打扰日常节奏”。

视觉设计理念：
- 以大量白色和浅灰为基底，搭配非常少量的柔和彩色点（如绿色、浅蓝、暖黄）作为状态或分类标记。
- 布局强调整齐、对齐和节奏感：明显的分组、清晰的间距层级，没有多余线条和装饰。

材质与质感：
- 元素表面接近“纸 + 薄木板”的感觉：浅背景、轻阴影、小圆角，尽量避免厚重的发光和强渐变。
- 图标可以是简单线框或极简填色图形，不追求写实，而更像简洁的图示。

交互体验：
- 悬停状态改变极轻：轻微背景提亮、边框从浅灰变为略深或带一点主色，动画时间短而干净。
- 重点按钮可使用纯色填充，但仍保持克制，不使用过大阴影或高对比渐变。

氛围营造：
- 整体氛围应该像整理良好的北欧公寓：干净、明亮、安静且有一点温度。
- 用户在使用时应感到界面“不会催促我”，反而像一张随时可以书写的干净桌面。`,

      'en-US': `Role: You are a UI designer focusing on Scandinavian minimalism, crafting a calm, bright and straightforward interface for everyday tools.

Scene:
- Suitable for personal dashboards, habit trackers, scheduling tools or lightweight SaaS products.
- Users expect the UI to “look simple, work directly, and never get in the way”.

Visual philosophy:
- Rely on large areas of white and very light gray, with small touches of muted color (greens, soft blues, warm yellows) to mark status or categories.
- Layout is about order and rhythm: clear grouping, generous spacing and strict alignment, with no unnecessary adornments.

Material & texture:
- Surfaces should feel like paper and thin wood: pale backgrounds, subtle shadows, modest corner radius; avoid heavy glows or loud gradients.
- Icons are simple outlines or minimal filled shapes—more like clear signage than detailed illustration.

Interaction:
- Hover feedback is gentle: slight background lift, border tinting towards the primary color, short and clean transitions.
- Primary buttons may use solid fills but remain modest—no oversized shadows or aggressive gradients.

Mood:
- The interface should feel like a tidy Scandinavian apartment: bright, quiet and comfortable without shouting for attention.
- Users should feel that the UI respects their pace and simply gives them a clear, uncluttered surface to work on.`
    }
  },
  {
    id: 'memphis',
    title: 'styles.newTrend.memphis.title',
    description: 'styles.newTrend.memphis.description',
    demoHTML: `
      <div class="w-full h-full bg-yellow-300 p-4 relative overflow-hidden">
        <!-- Memphis 幾何圖案 -->
        <div class="absolute inset-0">
          <!-- 圓點 -->
          <div class="absolute top-4 left-4 w-3 h-3 bg-black rounded-full"></div>
          <div class="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div class="absolute bottom-6 left-12 w-2 h-2 bg-pink-500 rounded-full"></div>

          <!-- 线條 -->
          <div class="absolute top-12 left-8 w-16 h-1 bg-black rotate-45"></div>
          <div class="absolute bottom-12 right-4 w-12 h-1 bg-pink-500 -rotate-12"></div>

          <!-- 波浪线 -->
          <svg class="absolute top-20 right-2 w-16 h-4" viewBox="0 0 100 20">
            <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke="#000" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <!-- 主要形狀 -->
        <div class="relative z-10 flex items-center justify-center h-full">
          <div class="relative">
            <!-- 三角形背景 -->
            <div class="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-cyan-400"></div>
            <!-- 圓形疊加 -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-pink-500 rounded-full border-4 border-black"></div>
            <!-- 正方形 -->
            <div class="absolute -bottom-2 -left-2 w-8 h-8 bg-black rotate-12"></div>
          </div>
        </div>
      </div>
    `,
    // ✅ 階段 3.2: 改用動態加載 ID
    fullPagePreviewId: 'memphis',
    colorScheme: 'styles.newTrend.memphis.colorScheme',
    customStyles: '',
    demoBoxClass: 'p-0',
    // Memphis 幾何風格的 CustomPrompt
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Memphis 80 年代几何」示例界面风格高度接近的 UI。
要求：保留高饱和黄色背景、黑色与彩色的几何符号、波浪线与随机散布的装饰形状，只允许替换文案、图案与局部配色，不允许将画面改为极简或低对比布局。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 青少年 / 校园产品的活动页或登陆页
- 轻量小游戏入口、创意工作坊报名页
- 带有「趣味、反叛、反极简」品牌调性的宣传页

【整体布局结构】
1. 背景层
   - 使用大面积纯色或高饱和渐变背景（如亮黄），其上散布小尺寸几何形状（圆点、粗线、波浪线）。
   - 形状可通过 absolute 定位分布在四周，形成轻微的视觉噪点。
2. 主内容区域
   - 居中放置主几何组合（如三角形 + 圆形 + 方块），作为画面焦点。
   - 可在其旁边或下方放置标题、副标题与主要按钮，用简短英文或单词营造海报感。

【色彩与材质】
1. 配色策略
   - 背景使用明亮基色（如黄色），前景几何使用黑色和对比色（青、粉、蓝、红）。
   - 通过控制各形状面积与数量，避免所有元素同时抢占注意力。
2. 材质质感
   - 采用平涂色块，无渐变或仅轻度渐变，使画面更贴近平面插画风。
   - 适度使用粗描边和纯黑轮廓，营造复古印刷海报的感觉。

【交互与动效】
1. 悬停行为
   - 对主几何组合和按钮施加轻微旋转或位移（例如 rotate-6、-translate-y-1），仿佛纸片被轻轻拨动。
2. 动画
   - 装饰形状可有缓慢漂移或微小震动，但频率要低，避免造成晃动眩晕。

【输出要求】
- 使用语义化 HTML 将装饰背景与主内容分层（例如外层容器 + 背景装饰层 + 主内容层）。
- 使用 Tailwind 原子类实现背景色、绝对定位、旋转和圆角等效果。
- 生成的 UI 必须保持「高饱和背景 + 散布几何符号 + 强烈图形对比」的 Memphis 核心特征，让人一眼联想到 80 年代复古派对海报。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Memphis 1980s geometric style interface that looks very close to the current demo.
Keep the bright yellow background, bold black strokes and scattered colorful geometric elements (dots, lines, triangles, wavy strokes). You may change copy, icons and specific colors, but you must not turn the layout into a minimalist or low-contrast design. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Landing pages for youth or campus products, playful campaigns and mini-games.
- Entry pages for creative workshops or artistic experiments with a “fun / rebellious / anti-minimal” tone.

[Layout structure]
1. Background layer
   - Use a large solid or gradient background (typically bright yellow) with small geometric decorations positioned using absolute coordinates.
   - Include circles, short lines and wavy strokes placed around the edges to create a sense of rhythm and visual noise.
2. Main shape cluster
   - Center a composition made of a triangle, circle and square (or similar shapes), acting as the main focal point.
   - Around or below this cluster, place a short headline, optional subtitle and a primary button in contrasting colors.

[Color and material]
1. Palette
   - Base: bright yellow or a comparable vivid base; accents: cyan, pink, blue, red and black.
   - Balance the palette by controlling relative area: large background, medium main shape cluster, small decorative elements.
2. Rendering
   - Prefer flat fills and bold strokes; avoid heavy gradients or 3D shading so the design feels like print-era poster art.

[Interaction and motion]
1. Hover
   - On hover, slightly rotate or nudge the main shape cluster and buttons, as if paper pieces are being flicked by hand.
2. Motion
   - Allow subtle drifting or wiggle animations on background shapes with low frequency; avoid jittery or high-speed motion.

[Output requirements]
- Use semantic HTML to separate background decoration and foreground content.
- Use Tailwind-style utilities for background colors, absolute positioning, transforms and layout.
- The resulting UI must clearly express Memphis geometry: bold shapes, strong contrast and a playful, 80s-inspired party-flyer mood.`
    },
    // Memphis 幾何風格的 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长 Memphis 80 年代几何风格的 UI 设计师，需要用大胆图形和强烈对比打造欢快、玩乐感十足的界面。

场景定位：
- 适合创意活动页、青少年或校园产品、小游戏入口页以及强调“趣味 / 反叛 / 反极简”的品牌。
- 界面重点是传递“活泼、不严肃”的性格，同时仍能让用户看清主按钮和关键信息。

视觉设计理念：
- 大量使用几何基本形（圆形、三角形、方块、不规则波形）以随机但有节奏的方式散布在背景和前景。
- 颜色采用高饱和对比搭配（黄+黑、青+粉、蓝+红等），但通过面积控制避免完全失控。

材质与质感：
- 元素轮廓多数为实线描边或粗边框，辅以平涂大色块，整体更像平面插画而不是写实 3D。
- 适度用手绘感波浪线或不规则路径，打破过于机械的直线布局。

交互体验：
- 悬停时可以加入轻微旋转、位移或缩放，制造「纸片被轻轻拨动」的动感。
- 重点按钮可带有图形装饰（如小三角、小圆点），但点击区域要保持清晰并满足可达性。

氛围营造：
- 页面应给人“复古派对海报”的感觉：充满能量与幽默感，而不是严肃工作介面。
- 用户应该在第一眼就明白：这是一个可以玩、可以尝试、不会出错太多的空间。`,

      'en-US': `Role: You are a UI designer specializing in 1980s Memphis style, using bold geometry and sharp contrasts to create playful, energetic interfaces.

Scene:
- Ideal for creative campaigns, youth or campus products, casual mini-games and brands that celebrate fun and anti-minimalism.
- The UI’s main purpose is to express a lively personality while still keeping primary actions and messages discoverable.

Visual philosophy:
- Scatter basic geometric shapes (circles, triangles, squares, wavy lines) across background and foreground in a way that feels random yet rhythmic.
- Use high-contrast saturated palettes (yellow + black, cyan + pink, blue + red, etc.), balancing them via size and density so the page remains usable.

Material & texture:
- Outlines are often thick strokes; fills are flat, poster-like color blocks—more graphic design than realistic 3D.
- Hand-drawn wiggles or irregular lines help break rigid alignment and reinforce the playful tone.

Interaction:
- Hover effects can include small rotations, shifts or scale changes, as if the paper pieces are nudged by hand.
- Primary buttons may integrate decorative shapes but must retain a clear hit area and adequate contrast for accessibility.

Mood:
- The page should feel like a vintage party flyer or album cover: exuberant, humorous and unafraid of visual noise.
- Users should immediately sense that this is a space for experimentation and fun rather than strict productivity.`
    }
  },
  {
    id: 'claymation',
    title: 'styles.newTrend.claymation.title',
    description: 'styles.newTrend.claymation.description',
    demoHTML: `
      <div class="w-full h-full bg-gradient-to-b from-blue-100 to-purple-100 p-6 flex flex-col items-center justify-center gap-4">
        <!-- 玩具風格圓形 -->
        <div class="relative">
          <div class="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg">
            <!-- 高光 -->
            <div class="absolute top-4 left-6 w-8 h-8 bg-white/40 rounded-full blur-sm"></div>
            <div class="absolute top-6 left-8 w-4 h-4 bg-white/60 rounded-full"></div>
          </div>
          <!-- 阴影 -->
          <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/10 rounded-full blur-md"></div>
        </div>

        <!-- 玩具按鈕 -->
        <div class="flex gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl shadow-md relative">
            <div class="absolute top-1 left-2 w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
          <div class="w-10 h-10 bg-gradient-to-br from-green-300 to-green-500 rounded-2xl shadow-md relative">
            <div class="absolute top-1 left-2 w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
          <div class="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl shadow-md relative">
            <div class="absolute top-1 left-2 w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'p-0',
    colorScheme: 'styles.newTrend.claymation.colorScheme',
    // Claymation 黏土玩具風格的 CustomPrompt
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Claymation 黏土玩具」示例界面风格高度接近的 UI。
要求：保持圆润、饱满的几何形状和软糖般的渐变色，以及轻柔的阴影和高光，只允许替换文案、图标和部分色板，不允许把整体风格改成扁平或金属质感。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 儿童教育/故事应用首页或主要功能入口
- 玩具电商 Landing Page、亲子活动报名页面
- 需要传达「安全、可爱、没有压力」的休闲型界面

【整体布局结构】
1. 主视觉区域
   - 居中放置一枚或多枚黏土感圆形或胶囊形组件，配合高光和投影，让它们像立在桌面上的玩具。
   - 主圆形可搭配表情或图标（如笑脸、玩具图案），下方或周围放置几个小按钮或彩色块。
2. 操作区
   - 使用多枚色块按钮（如黄色、绿色、蓝色），形状圆润，排列紧凑但不过度拥挤；
   - 可用于「开始游戏」「进入故事」「选择角色」等操作。

【色彩与材质】
1. 配色策略
   - 背景使用柔和渐变（如蓝到紫、粉到橙），避免高对比强烈撞色。
   - 前景玩具使用明亮但略带奶油感的色彩（黄、绿、蓝、粉），整体风格偏「糖果色」。
2. 材质表现
   - 通过上下不均匀的高光和渐变模拟黏土或塑料玩具表面：顶部更亮、下半部更深。
   - 阴影短而模糊，类似小玩具在桌面下方的投影，不做写实长阴影。

【交互与动效】
1. 悬停与按下
   - 按钮在悬停时轻微放大或变亮，按下时略微扁平或缩小，好像被手指按压。
2. 动画
   - 粒子或背景元素可缓慢浮动或上下轻微弹起，节奏要舒缓，不能让人紧张。

【输出要求】
- 使用语义化 HTML 将主玩具区域与按钮区分层。
- 使用 TailwindCSS 原子类构建渐变背景、圆形/圆角组件（如 rounded-full、rounded-3xl）与投影（shadow-md、shadow-lg）。
- 生成界面必须保留「圆润形状 + 柔和渐变 + 黏土玩具质感」这些关键特征，让用户一眼就知道这是 Claymation 风格，而不是普通扁平卡片。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Claymation toy style interface that looks very close to the current demo.
Keep the rounded, chubby geometry, candy-like gradients, soft highlights and shadows. You may change text, icons and parts of the palette, but you must not turn the design into flat or metallic UI. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Home screens or main entry views for kids’ apps and story experiences.
- Landing pages for toy e-commerce or parent-child activities.
- Any relaxed, friendly interface that should feel safe and playful rather than serious.

[Layout structure]
1. Hero / main toy
   - Center one or more clay-like circles or pill-shaped elements with strong gradients and highlights so they read as physical toys.
   - Place expressive icons or emojis inside (faces, toys, symbols) and arrange small, colorful buttons around them.
2. Action area
   - Use a row or grid of chunky buttons in bright, creamy colors (yellow, green, blue, pink) for primary actions.

[Color and material]
1. Palette
   - Backgrounds use gentle, optimistic gradients (blue→purple, pink→orange, etc.).
   - Foreground toys use bright but soft tones that feel like candy or modeling clay.
2. Rendering
   - Apply directional highlights and shading to the shapes so they appear soft and squeezable.
   - Use short, blurred shadows under the objects to suggest they sit on a surface without looking heavy.

[Interaction and motion]
1. Hover / active
   - On hover, let toys and buttons grow slightly or become brighter; on active, let them squash a bit as though pressed.
2. Motion
   - Use smooth, slow bobbing or floating animations for decorative elements; avoid nervous jitter.

[Output requirements]
- Use semantic HTML to separate the hero toy area from the controls.
- Use Tailwind utilities for gradients, rounded corners, shadows and layout.
- The resulting UI must clearly read as Claymation/toy-like: rounded forms, soft candy colors and gentle motion that feels playful and safe.`
    },
    // Claymation 黏土玩具風格的 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长 Claymation 黏土玩具风格的 UI 设计师，需要让界面看起来像由柔软、可捏的彩色橡皮泥拼出来。

场景定位：
- 适用于儿童教育产品、亲子类应用、玩具电商、轻松小游戏或任何希望传达“安全、可爱、无压力”的界面。
- 用户需要一眼就看出：这是为友好、轻松场景设计的，而非严肃商务工具。

视觉设计理念：
- 以圆润的几何形状和肥厚的比例为主：大圆、大胶囊按钮、胖胖的图标与厚边框。
- 颜色多为明亮但略带奶油感的暖色与粉彩色，避免过度荧光或纯度过高的刺眼配色。

材质与质感：
- 利用渐变和高光模拟黏土或塑料玩具表面：一侧有柔和高光，另一侧略暗，边缘始终圆滑。
- 阴影短而柔和，像玩具放在桌面上投下的小影子，凸显立体感但不过度写实。

交互体验：
- 悬停与按下时可以有轻微“挤压”感：按钮或组件略微扁一点、缩放一点，好像被手指按压。
- 动画节奏偏慢、柔和，避免快速抖动或弹跳造成紧张；所有动效应像玩具在慢慢移动。

氛围营造：
- 整体氛围应当是安全、友善、略带童趣的，适合家长与小朋友共同使用。
- 用户在浏览时会联想到玩具陈列架、糖果店或儿童绘本封面，而不是冷冰冰的网店后台。`,

      'en-US': `Role: You are a UI designer focusing on claymation and toy-like aesthetics, making the interface look as if it were sculpted from soft, colorful clay.

Scene:
- Perfect for kids’ educational apps, family products, toy e-commerce, casual games or any UI that needs to feel safe, cute and low-pressure.
- Users should instantly recognize this as a friendly environment rather than a serious business dashboard.

Visual philosophy:
- Favor chubby, rounded geometry: big circles, pill-shaped buttons, chunky icons and thick outlines.
- Color palette leans toward warm, creamy pastels rather than harsh neons—bright but gentle on the eyes.

Material & texture:
- Use gradients and highlights to mimic clay or plastic toy surfaces: soft specular highlight on one side, gentle shading on the other, with fully rounded edges.
- Shadows are soft and close to the object, as if toys are sitting on a tabletop, providing depth without heavy realism.

Interaction:
- Hover and active states may “squish” slightly: components compress or scale down a bit as though pressed by a finger.
- Animations are smooth and moderately slow; avoid jittery motion so the interface feels relaxed and approachable.

Mood:
- The overall mood is safe, friendly and play-oriented—appropriate for both children and parents.
- The UI should evoke toy shelves, candy stores or picture book covers, not sterile admin consoles.`
    },
    fullPageHTML: `
      <!-- 企業級 SaaS Dashboard - 純 CSS 设計 -->
      <div class="dashboard-wrapper">

        <!-- 頂部导航欄 -->
        <header class="navbar">
          <div class="nav-container">
            <div class="nav-left">
              <div class="logo-box"><span class="logo-text">E</span></div>
              <span class="brand-name">EnterpriseHub</span>
            </div>
            <div class="nav-right">
              <button class="icon-button">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <span class="notification-dot"></span>
              </button>
              <div class="user-avatar">JD</div>
            </div>
          </div>
        </header>

        <!-- 主內容区 -->
        <main class="main-content">
          <div class="container">
            <!-- 页面标題 -->
            <div class="page-header">
              <div>
                <h1 class="page-title">Dashboard Overview</h1>
                <p class="page-subtitle">Welcome back! Here's your performance summary.</p>
              </div>
              <div class="button-group">
                <button class="btn btn-secondary">Export</button>
                <button class="btn btn-primary">+ New Project</button>
              </div>
            </div>

            <!-- KPI 卡片网格 -->
            <div class="kpi-grid">
              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Total Revenue</span>
                  <div class="icon-box icon-box-blue">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">$2.4M</span>
                  <span class="kpi-change kpi-change-positive">↑ 12.5%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Active Users</span>
                  <div class="icon-box icon-box-green">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">18.2K</span>
                  <span class="kpi-change kpi-change-positive">↑ 8.3%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Conversion Rate</span>
                  <div class="icon-box icon-box-purple">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">3.6%</span>
                  <span class="kpi-change kpi-change-negative">↓ 2.1%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Growth Rate</span>
                  <div class="icon-box icon-box-orange">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">+94%</span>
                  <span class="kpi-change kpi-change-positive">↑ 5.2%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>
            </div>

            <!-- 数据表格 -->
            <div class="data-section">
              <div class="section-header">
                <h2 class="section-title">Recent Transactions</h2>
              </div>
              <div class="table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#001</td>
                      <td>Acme Corporation</td>
                      <td>$12,450</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 15, 2025</td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>Tech Innovations Inc</td>
                      <td>$8,320</td>
                      <td><span class="badge badge-warning">Pending</span></td>
                      <td>Oct 14, 2025</td>
                    </tr>
                    <tr>
                      <td>#003</td>
                      <td>Global Solutions Ltd</td>
                      <td>$5,100</td>
                      <td><span class="badge badge-danger">Failed</span></td>
                      <td>Oct 13, 2025</td>
                    </tr>
                    <tr>
                      <td>#004</td>
                      <td>StartupXYZ</td>
                      <td>$9,800</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 12, 2025</td>
                    </tr>
                    <tr>
                      <td>#005</td>
                      <td>Enterprise Group</td>
                      <td>$15,600</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 11, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

    `,
    fullPageStyles: `
      /* 企業級 SaaS Dashboard - 純 CSS 樣式 */

      /* 重置与基礎 */
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }

      /* 主容器 */
      .dashboard-wrapper {
        min-height: 100vh;
        background: #f9fafb;
      }

      /* 导航欄 */
      .navbar {
        background: white;
        border-bottom: 1px solid #e5e7eb;
        padding: 0;
        position: sticky;
        top: 0;
        z-index: 50;
      }
      .nav-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 24px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nav-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .logo-box {
        width: 32px;
        height: 32px;
        background: #2563eb;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .logo-text {
        color: white;
        font-weight: 700;
        font-size: 18px;
      }
      .brand-name {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
      }
      .nav-right {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .icon-button {
        position: relative;
        padding: 8px;
        background: none;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        color: #6b7280;
        transition: all 0.2s;
      }
      .icon-button:hover {
        background: #f3f4f6;
        color: #374151;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
      .notification-dot {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 8px;
        height: 8px;
        background: #ef4444;
        border-radius: 50%;
      }
      .user-avatar {
        width: 40px;
        height: 40px;
        background: #2563eb;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-center;
        font-weight: 600;
        font-size: 14px;
      }

      /* 主內容区 */
      .main-content {
        padding: 32px 0;
      }
      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* 页面标題 */
      .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
      }
      .page-title {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 4px;
      }
      .page-subtitle {
        font-size: 14px;
        color: #6b7280;
      }
      .button-group {
        display: flex;
        gap: 12px;
      }
      .btn {
        padding: 10px 16px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
      }
      .btn-primary {
        background: #2563eb;
        color: white;
      }
      .btn-primary:hover {
        background: #1d4ed8;
      }
      .btn-secondary {
        background: white;
        color: #374151;
        border: 1px solid #d1d5db;
      }
      .btn-secondary:hover {
        background: #f9fafb;
      }

      /* KPI 卡片网格 */
      .kpi-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
        margin-bottom: 32px;
      }
      .kpi-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 24px;
        transition: box-shadow 0.2s;
      }
      .kpi-card:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .kpi-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      .kpi-label {
        font-size: 14px;
        font-weight: 500;
        color: #6b7280;
      }
      .icon-box {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-box-blue {
        background: #dbeafe;
        color: #2563eb;
      }
      .icon-box-green {
        background: #d1fae5;
        color: #10b981;
      }
      .icon-box-purple {
        background: #e9d5ff;
        color: #9333ea;
      }
      .icon-box-orange {
        background: #fed7aa;
        color: #ea580c;
      }
      .icon-box .icon {
        width: 20px;
        height: 20px;
      }
      .kpi-value-row {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-bottom: 8px;
      }
      .kpi-value {
        font-size: 30px;
        font-weight: 700;
        color: #111827;
      }
      .kpi-change {
        font-size: 12px;
        font-weight: 500;
      }
      .kpi-change-positive {
        color: #10b981;
      }
      .kpi-change-negative {
        color: #ef4444;
      }
      .kpi-note {
        font-size: 12px;
        color: #9ca3af;
      }

      /* 数据区塊 */
      .data-section {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
      }
      .section-header {
        padding: 20px 24px;
        border-bottom: 1px solid #e5e7eb;
      }
      .section-title {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
      }
      .table-wrapper {
        overflow-x: auto;
      }
      .data-table {
        width: 100%;
        border-collapse: collapse;
      }
      .data-table thead {
        background: #f9fafb;
      }
      .data-table th {
        padding: 12px 24px;
        text-align: left;
        font-size: 12px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .data-table td {
        padding: 16px 24px;
        font-size: 14px;
        color: #374151;
        border-top: 1px solid #e5e7eb;
      }
      .data-table tbody tr:hover {
        background: #f9fafb;
      }

      /* 徽章 */
      .badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
      }
      .badge-success {
        background: #d1fae5;
        color: #065f46;
      }
      .badge-warning {
        background: #fef3c7;
        color: #92400e;
      }
      .badge-danger {
        background: #fee2e2;
        color: #991b1b;
      }

      /* 響應式 */
      @media (max-width: 768px) {
        .page-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .kpi-grid {
          grid-template-columns: 1fr;
        }
      }

    `
  },
  {
    id: 'corporate',
    title: 'styles.newTrend.corporate.title',
    description: 'styles.newTrend.corporate.description',
    demoHTML: `
      <div class="w-full h-full bg-white p-6">
        <!-- 企業級卡片 -->
        <div class="border border-gray-300 rounded-sm bg-white shadow-sm p-4 space-y-3">
          <!-- 标題区 -->
          <div class="flex items-center justify-between pb-3 border-b border-gray-200">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-800">Dashboard</div>
                <div class="text-xs text-gray-500">Enterprise</div>
              </div>
            </div>
            <div class="text-xs text-gray-400">Q4 2025</div>
          </div>

          <!-- 数据指标 -->
          <div class="grid grid-cols-3 gap-2">
            <div class="text-center">
              <div class="text-lg font-bold text-gray-800">94%</div>
              <div class="text-xs text-gray-500">Growth</div>
            </div>
            <div class="text-center border-l border-r border-gray-200">
              <div class="text-lg font-bold text-green-600">+12K</div>
              <div class="text-xs text-gray-500">Users</div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-blue-600">$2.4M</div>
              <div class="text-xs text-gray-500">Revenue</div>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'bg-gray-100 p-0',
    colorScheme: 'styles.newTrend.corporate.colorScheme',
    // 現代企業級 SaaS 風格的 CustomPrompt
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Corporate 企业级 SaaS」示例界面风格高度接近的 Dashboard。
要求：保持浅灰 / 白底 + 冷色主色（蓝 / 绿）+ 严谨栅格布局的企业级仪表盘气质，只允许替换模块内容、图表数据与文案，不允许改成高饱和娱乐化或过度装饰风格。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 中大型企业运营后台、分析仪表盘、多团队协作平台首页
- 决策者、运营负责人和一线团队需要在同一界面快速浏览 KPI 并进行常规操作

【整体布局结构】
1. 顶部导航栏
   - 含 Logo、产品名称、全局搜索和右侧用户/通知/设置入口；
   - Navigation 使用横向排列，保持高度统一（如 h-16），背景为白色并带有底部分割线。
2. 左侧侧边栏（可选）
   - 放置部门 / 模块导航（如 Overview、Analytics、Billing、Team 等），采用图标 + 文本形式。
3. 主内容区
   - 上方使用若干统计卡片显示核心指标（营收、活跃用户、转化率等）；下方使用图表（折线、柱状、饼图）与表格展示详细数据；
   - 卡片与图表区按栅格系统对齐（例如三列指标卡 + 两列图表区）。

【色彩与材质】
1. 背景与卡片
   - 整体背景使用浅灰色（如 #f3f4f6），主内容容器内卡片使用白底和细边框；
   - 轻微阴影用于区分卡片层级，但不抢眼。
2. 主色与语义色
   - 主色多为蓝或青蓝（如 #2563eb、#1d4ed8），用于主要按钮和关键指标；
   - 语义色：绿色表示增长 / 成功，红色表示风险 / 下降，灰色表示次要信息。

【图表与数据模块】
1. 图表
   - 使用简单清晰的折线图 / 柱状图，线条与柱子采用主色和次要色搭配；
   - 坐标轴和网格线保持淡灰色，避免喧宾夺主。
2. 表格与列表
   - 表头突出、行距适中，支持 hover 高亮当前行。

【交互与动效】
1. 悬停反馈
   - 按钮和卡片在 hover 时增强边框和阴影，背景轻微提亮即可；
   - 避免大幅缩放或高度弹跳，保持专业稳重。
2. 过滤与切换
   - 常见交互如日期筛选、下拉菜单和标签切换需要清晰的选中状态和过渡（如 border-b-2、背景轻微变化）。

【输出要求】
- 使用语义化 HTML 划分 header、nav、aside、main、section 和 footer。
- 使用 TailwindCSS 原子类构建栅格（如 grid、gap-6）、卡片（bg-white、shadow-sm、rounded-lg）与图表容器。
- 生成 Dashboard 必须保留「浅灰背景 + 白色卡片 + 冷色主色 + 清晰栅格」这些关键特征，让人一眼看出是稳重的企业级 SaaS 后台界面。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Corporate/Enterprise SaaS dashboard interface that looks very close to the current demo.
Keep the light neutral backgrounds, white cards, cool primary accents (blues/greens) and strict grid-based layout. You may change module content, chart data and copy, but must not restyle it into a playful, highly saturated or decorative theme. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Operations consoles, analytics dashboards and collaboration hubs for mid-to-large organizations.
- Used by decision-makers, ops leads and frontline staff to scan KPIs and perform everyday actions.

[Layout structure]
1. Top navigation bar
   - Contains logo, product name, global search and a right-aligned cluster of notifications, account and settings.
   - Typically a fixed-height white bar with a bottom border to separate it from the content.
2. Side navigation (optional)
   - Provides module navigation (Overview, Analytics, Billing, Team, etc.) using icon + label entries.
3. Main content
   - The upper area hosts metric cards summarizing key KPIs; the lower area uses charts and tables for deeper analysis.
   - Align all cards and modules on a grid with consistent spacing (e.g., 3-column stat row, 2-column chart layout).

[Color and material]
1. Surfaces
   - Backgrounds are light grays; cards are white with fine borders and subtle shadows to indicate elevation.
2. Colors
   - Primary accent is a calm blue or teal for main actions and key metrics.
   - Semantic colors: green for growth/success, red for risk/decline, gray for secondary information.

[Charts and data]
1. Charts
   - Use clean line and bar charts; chart colors follow the primary/secondary palette while axes and gridlines stay soft gray.
2. Tables/lists
   - Emphasize headers, leave comfortable row height and support hover highlighting for active rows.

[Interaction and motion]
1. Hover
   - Buttons and cards respond with slightly stronger borders, subtle shadow and mild background lift; avoid exaggerated scaling.
2. Filters and tabs
   - Range pickers, dropdowns and segmented controls must have clear selected states and crisp transitions.

[Output requirements]
- Use semantic HTML to structure header, navigation, sidebar and main content areas.
- Use Tailwind-style utilities for layout grids, cards, typography and color.
- The resulting dashboard must strongly convey “enterprise SaaS”: neutral, structured, reliable and comfortable for long work sessions.`
    },
    // 現代企業級 SaaS 風格的 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长企业级 SaaS Dashboard 的 UI 设计师，需要为 B2B 产品设计稳重、专业、可扩展的大屏界面。

场景定位：
- 用于中大型企业的运营后台、分析仪表板或多团队协作平台。
- 用户包括决策者、运营负责人和一线团队，他们在界面中快速浏览关键指标并进行日常操作。

视觉设计理念：
- 以中性浅灰和白色为主背景，搭配蓝色 / 绿色等冷色作为主色，以传达可靠、冷静、理性的品牌形象。
- 布局基于栅格系统：清晰的导航区、工具栏、主体内容区与侧栏，卡片之间对齐严格、间距统一。

材质与质感：
- 卡片表面多为白底配细边框和非常浅的阴影，强调信息层级而非视觉炫技。
- 图表和数字模块使用清晰的配色规则（例如蓝色代表主指标、绿色代表增长、灰色代表次要信息）。

交互体验：
- 悬停与按下反馈简洁明确：边框强化、背景略微提亮、图标颜色变化，不需要复杂动画。
- 重点在于信息密度与可读性：过滤器、标签、分页、表格交互应优先保证易操作和清晰反馈。

氛围营造：
- 整体氛圍應該是「专業、可靠但不壓迫」，让使用者長時間使用也不覺得疲累。
- 介面要表現出組織性与可預測性，让新用戶一眼看出結構，老用戶能形成稳定操作肌肉記憶。`,

      'en-US': `Role: You are a UI designer specializing in enterprise SaaS dashboards, creating stable, professional large-screen interfaces for B2B products.

Scene:
- Designed for operations consoles, analytics dashboards and multi-team collaboration platforms in mid-to-large organizations.
- Users include decision makers, operations leads and frontline staff who quickly scan KPIs and perform routine actions.

Visual philosophy:
- Base visuals on light neutrals and white, with restrained blues and greens as primary accents to signal reliability and clarity.
- Layout follows a clear grid: navigation bars, toolbars, main content and side panels are all aligned with consistent spacing.

Material & texture:
- Cards typically use white backgrounds, fine borders and very subtle shadows, emphasizing information hierarchy over visual spectacle.
- Charts and metric blocks follow strict color semantics (e.g., blue for primary metrics, green for growth, gray for secondary details).

Interaction:
- Hover and active states are simple and explicit: slightly stronger borders, lifted backgrounds, icon color shifts; no flashy transitions required.
- Filters, tags, pagination and table interactions prioritize ease of use and clear feedback in high-density data environments.

Mood:
- The overall mood is professional, trustworthy and low-drama, suitable for long work sessions.
- The interface should convey organization and predictability so new users grasp structure quickly and experienced users build reliable muscle memory.`
    },
    fullPageHTML: `
      <!-- 企業級 SaaS Dashboard - 純 CSS 设計 -->
      <div class="dashboard-wrapper">

        <!-- 頂部导航欄 -->
        <header class="navbar">
          <div class="nav-container">
            <div class="nav-left">
              <div class="logo-box"><span class="logo-text">E</span></div>
              <span class="brand-name">EnterpriseHub</span>
            </div>
            <div class="nav-right">
              <button class="icon-button">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <span class="notification-dot"></span>
              </button>
              <div class="user-avatar">JD</div>
            </div>
          </div>
        </header>

        <!-- 主內容区 -->
        <main class="main-content">
          <div class="container">
            <!-- 页面标題 -->
            <div class="page-header">
              <div>
                <h1 class="page-title">Dashboard Overview</h1>
                <p class="page-subtitle">Welcome back! Here's your performance summary.</p>
              </div>
              <div class="button-group">
                <button class="btn btn-secondary">Export</button>
                <button class="btn btn-primary">+ New Project</button>
              </div>
            </div>

            <!-- KPI 卡片网格 -->
            <div class="kpi-grid">
              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Total Revenue</span>
                  <div class="icon-box icon-box-blue">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">$2.4M</span>
                  <span class="kpi-change kpi-change-positive">↑ 12.5%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Active Users</span>
                  <div class="icon-box icon-box-green">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">18.2K</span>
                  <span class="kpi-change kpi-change-positive">↑ 8.3%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Conversion Rate</span>
                  <div class="icon-box icon-box-purple">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">3.6%</span>
                  <span class="kpi-change kpi-change-negative">↓ 2.1%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>

              <div class="kpi-card">
                <div class="kpi-header">
                  <span class="kpi-label">Growth Rate</span>
                  <div class="icon-box icon-box-orange">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                </div>
                <div class="kpi-value-row">
                  <span class="kpi-value">+94%</span>
                  <span class="kpi-change kpi-change-positive">↑ 5.2%</span>
                </div>
                <p class="kpi-note">vs last month</p>
              </div>
            </div>

            <!-- 数据表格 -->
            <div class="data-section">
              <div class="section-header">
                <h2 class="section-title">Recent Transactions</h2>
              </div>
              <div class="table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#001</td>
                      <td>Acme Corporation</td>
                      <td>$12,450</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 15, 2025</td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>Tech Innovations Inc</td>
                      <td>$8,320</td>
                      <td><span class="badge badge-warning">Pending</span></td>
                      <td>Oct 14, 2025</td>
                    </tr>
                    <tr>
                      <td>#003</td>
                      <td>Global Solutions Ltd</td>
                      <td>$5,100</td>
                      <td><span class="badge badge-danger">Failed</span></td>
                      <td>Oct 13, 2025</td>
                    </tr>
                    <tr>
                      <td>#004</td>
                      <td>StartupXYZ</td>
                      <td>$9,800</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 12, 2025</td>
                    </tr>
                    <tr>
                      <td>#005</td>
                      <td>Enterprise Group</td>
                      <td>$15,600</td>
                      <td><span class="badge badge-success">Completed</span></td>
                      <td>Oct 11, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

    `,
    fullPageStyles: `
      /* 企業級 SaaS Dashboard - 純 CSS 樣式 */

      /* 重置与基礎 */
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }

      /* 主容器 */
      .dashboard-wrapper {
        min-height: 100vh;
        background: #f9fafb;
      }

      /* 导航欄 */
      .navbar {
        background: white;
        border-bottom: 1px solid #e5e7eb;
        padding: 0;
        position: sticky;
        top: 0;
        z-index: 50;
      }
      .nav-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 24px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nav-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .logo-box {
        width: 32px;
        height: 32px;
        background: #2563eb;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .logo-text {
        color: white;
        font-weight: 700;
        font-size: 18px;
      }
      .brand-name {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
      }
      .nav-right {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .icon-button {
        position: relative;
        padding: 8px;
        background: none;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        color: #6b7280;
        transition: all 0.2s;
      }
      .icon-button:hover {
        background: #f3f4f6;
        color: #374151;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
      .notification-dot {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 8px;
        height: 8px;
        background: #ef4444;
        border-radius: 50%;
      }
      .user-avatar {
        width: 40px;
        height: 40px;
        background: #2563eb;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-center;
        font-weight: 600;
        font-size: 14px;
      }

      /* 主內容区 */
      .main-content {
        padding: 32px 0;
      }
      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* 页面标題 */
      .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
      }
      .page-title {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 4px;
      }
      .page-subtitle {
        font-size: 14px;
        color: #6b7280;
      }
      .button-group {
        display: flex;
        gap: 12px;
      }
      .btn {
        padding: 10px 16px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
      }
      .btn-primary {
        background: #2563eb;
        color: white;
      }
      .btn-primary:hover {
        background: #1d4ed8;
      }
      .btn-secondary {
        background: white;
        color: #374151;
        border: 1px solid #d1d5db;
      }
      .btn-secondary:hover {
        background: #f9fafb;
      }

      /* KPI 卡片网格 */
      .kpi-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
        margin-bottom: 32px;
      }
      .kpi-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 24px;
        transition: box-shadow 0.2s;
      }
      .kpi-card:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .kpi-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      .kpi-label {
        font-size: 14px;
        font-weight: 500;
        color: #6b7280;
      }
      .icon-box {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-box-blue {
        background: #dbeafe;
        color: #2563eb;
      }
      .icon-box-green {
        background: #d1fae5;
        color: #10b981;
      }
      .icon-box-purple {
        background: #e9d5ff;
        color: #9333ea;
      }
      .icon-box-orange {
        background: #fed7aa;
        color: #ea580c;
      }
      .icon-box .icon {
        width: 20px;
        height: 20px;
      }
      .kpi-value-row {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-bottom: 8px;
      }
      .kpi-value {
        font-size: 30px;
        font-weight: 700;
        color: #111827;
      }
      .kpi-change {
        font-size: 12px;
        font-weight: 500;
      }
      .kpi-change-positive {
        color: #10b981;
      }
      .kpi-change-negative {
        color: #ef4444;
      }
      .kpi-note {
        font-size: 12px;
        color: #9ca3af;
      }

      /* 数据区塊 */
      .data-section {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
      }
      .section-header {
        padding: 20px 24px;
        border-bottom: 1px solid #e5e7eb;
      }
      .section-title {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
      }
      .table-wrapper {
        overflow-x: auto;
      }
      .data-table {
        width: 100%;
        border-collapse: collapse;
      }
      .data-table thead {
        background: #f9fafb;
      }
      .data-table th {
        padding: 12px 24px;
        text-align: left;
        font-size: 12px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .data-table td {
        padding: 16px 24px;
        font-size: 14px;
        color: #374151;
        border-top: 1px solid #e5e7eb;
      }
      .data-table tbody tr:hover {
        background: #f9fafb;
      }

      /* 徽章 */
      .badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
      }
      .badge-success {
        background: #d1fae5;
        color: #065f46;
      }
      .badge-warning {
        background: #fef3c7;
        color: #92400e;
      }
      .badge-danger {
        background: #fee2e2;
        color: #991b1b;
      }

      /* 響應式 */
      @media (max-width: 768px) {
        .page-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .kpi-grid {
          grid-template-columns: 1fr;
        }
      }

    `
  }
];
