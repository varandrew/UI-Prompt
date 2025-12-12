// Arcade Hall Template
// 街機大廳模板

import { arcadeHallFullPageHTML, arcadeHallFullPageStyles } from './arcadeHallFullPage.js';

export const arcadeHall = {
  id: 'retro-arcadeCRT-arcade-hall',
  title: 'styles.retro.arcadeCRT.preview.arcadeGameHall',
  description: 'styles.retro.arcadeCRT.preview.arcadeGameHallDesc',

  // Demo preview (mini version for template card)
  demoHTML: `
    <div style="background: #0a0a0a; padding: 30px; border: 3px solid #00ffff; border-radius: 12px; box-shadow: 0 0 20px rgba(0,255,255,0.4);">
      <div style="text-align: center; margin-bottom: 20px;">
        <span style="font-size: 24px; font-weight: bold; color: #fff; text-shadow: 2px 0 0 rgba(255,0,255,0.7), -2px 0 0 rgba(0,255,255,0.7);">NEON ARCADE</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
        <div style="background: rgba(0,0,0,0.8); border: 2px solid #00ff41; border-radius: 8px; padding: 15px; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 10px;">👾</div>
          <div style="color: #00ffff; font-size: 12px; text-shadow: 0 0 10px #00ffff;">SPACE INVADERS</div>
        </div>
        <div style="background: rgba(0,0,0,0.8); border: 2px solid #ffff00; border-radius: 8px; padding: 15px; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 10px;">⚫</div>
          <div style="color: #ffff00; font-size: 12px; text-shadow: 0 0 10px #ffff00;">PAC-MAZE</div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <button style="background: linear-gradient(180deg, #ff00ff 0%, #8b008b 100%); border: 2px solid #ff00ff; color: #fff; padding: 10px 20px; border-radius: 6px; font-weight: bold; box-shadow: 0 0 15px rgba(255,0,255,0.6);">INSERT COIN</button>
      </div>
    </div>
  `,

  customStyles: ``,

  // Full page preview
  fullPageHTML: arcadeHallFullPageHTML,
  fullPageStyles: arcadeHallFullPageStyles,

  // Template-level customPrompt
  customPrompt: {
    'zh-CN': `
你现在是一名非常熟悉「Arcade CRT / 复古街机 CRT 显示器」风格的资深 UI 设计师兼前端工程师，需要为一个全新的「街机游戏大厅首页」生成完整 HTML 全页面模板。

你的目标：让 LLM 依据本指令，生成一个与当前示例页 /styles/preview/retro-arcadeCRT 中「Arcade Hall」预览高度相似、但内容与文案完全不同的全屏界面。生成结果在第一眼上要明显属于同一套 Arcade CRT 家族：深色街机厅背景、中心 CRT 屏幕、霓虹发光色、像素按钮与投币系统都必须被稳定延续。

【使用场景与目标】
- 场景：线上 retro arcade 平台的首页 / 登陆页，用于展示多款经典街机游戏入口、当前热门游戏、排行榜与玩家在线状态。
- 目标用户：怀旧玩家、复古像素游戏爱好者、喜欢赛博朋克 / 合成波美学的创作者和玩家社群。
- 使用目的：引导用户快速浏览可玩的游戏、查看高分榜、了解当前活动，并通过强烈的 CRT + 霓虹氛围把人“拉进”虚拟游戏厅。
- 设计基调：充满能量但不刺眼；偏暗的环境中由霓虹与屏幕发光，带一点科技感、一点废土赛博感，同时保留老式街机机器的物理厚重感。

【整体布局结构（必须遵循的骨架）】
1. 顶部导航区（Arcade HUD）
   - 固定在页面顶部，使用半透明深色条作为背景（类似玻璃面板罩在机台前）。
   - 左侧为品牌区域：街机图标 +「ARCADE CRT」字样，建议使用等宽或像素感字体，并带轻微 RGB 偏移发光。
   - 右侧放置简化导航：HOME / GAMES / LEADERBOARD / EVENTS / CONTACT 等；导航文字使用霓虹色，hover 时展示下划线或亮度增强。
   - 导航条应在滚动时保持可见（sticky / fixed），模拟悬浮在 CRT 画面之上的 HUD。

2. 主英雄区（Hero + Main CRT Screen）
   - 位于首屏中央，整体占据视窗中间的大部分区域。
   - 中央需要有一个大号「CRT 屏幕」容器：背景接近纯黑，四周有高亮霓虹描边与内嵌阴影，暗示厚玻璃与机台外框。
   - 屏幕内上方以大标题显示平台名称或本次专题名称，例如「NEON ARCADE STATION」「CRITICAL HIT NIGHT」等；标题建议使用 RGB 分离 + 发光文字（通过多层 text-shadow 描述）。
   - 屏幕中部使用两列或三列布局，展示「推荐游戏卡片 / 游戏分组入口」，每张卡片包含：游戏名、像素图标（可以用 emoji 模拟）、类型标签（SHOOTER / PUZZLE / FIGHTING）、一个小按钮（PLAY / DETAILS）。
   - 屏幕底部留出细长状态栏，展示如「INSERT COIN · CREDITS: 09 · PLAYER 1 READY」之类的状态信息，强调复古系统 UI 语气。

3. 游戏栅格区（Game Grid Section）
   - 英雄区下方，以全宽 section 呈现更大规模的游戏列表，采用响应式 grid（在桌面为 3–4 列，移动端单列）。
   - 每一张卡片使用深色背景 + 霓虹边框 + 顶部彩色条（渐变）构成，内含：
     - 游戏名称（大号粗体，使用特定霓虹色）
     - 一行说明文字（如「Classic space shooter」「Fast-paced maze runner」）
     - 显示“最高得分 / 在线人数 / 难度等级”的小状态行
     - 一个主操作按钮（PLAY / WATCH DEMO），按钮具有像素方块感和明显按压反馈。
   - 鼠标悬停时卡片微微上浮、边框颜色增强并出现额外发光阴影。

4. 排行榜与活动区（Leaderboard + Events）
   - 建议以两列布局呈现：左侧为「全球高分榜 / 本周冠军」，右侧为「即将开始的活动 / 挑战赛」。
   - 排行榜部分采用列表形式，每一行包含：名次（#1 / #2 / #3）、玩家 ID、代表游戏、得分；前三名使用不同霓虹色强调（黄、蓝、橙），并可附带奖杯 / 星形 emoji。
   - 活动区可展示卡片式条目，包含活动名称、时间、参与条件以及一个「JOIN EVENT」按钮。
   - 整个区域应嵌在一个比主背景略亮的深色“面板”内，四角圆角较小，强调硬朗电子设备感。

5. 底部信息区（Footer / System Bar）
   - 作为最后一个完整 section，模拟「系统状态栏」或「操作员控制栏」。
   - 左侧可展示简短品牌说明（例如「Arcade CRT — Bringing CRT nostalgia to the web」），右侧展示简化链接（Terms、Support、Community）。
   - 可以增加一条细小的持续滚动文本（marquee 效果，可用 CSS 动画描述），显示系统公告或彩蛋文本。

【色彩体系与光影规范】
1. 背景与环境
   - 页面主要背景使用接近纯黑或极深灰，例如 #050509 ~ #0A0A0A。
   - 在说明中强调：背景不应是平坦的纯黑，而是可以带有轻微径向渐变或模糊光斑，模拟远处街机屏幕的散射光。
2. 霓虹主色
   - 建议的霓虹色集合：
     - 霓虹粉：#FF00FF
     - 霓虹蓝：#00FFFF
     - 霓虹黄：#FFFF00
     - 霓虹绿：#00FF41
     - 霓虹橙：#FF6600
   - 这些颜色主要用于文字、边框、图标与按钮描边，通过 text-shadow / box-shadow 构建外发光；应避免在大面积背景中使用，以免刺眼。
3. CRT 扫描线与噪点
   - 在主屏幕容器上使用伪元素叠加水平扫描线图案（细线 + 透明间隔），并添加轻微上下位移动画。
   - 可描述通过多层线性渐变与低不透明度实现微弱 RGB 噪点效果，让屏幕看起来有亮度起伏与模拟色偏。

【交互与动效设计】
1. 按钮与卡片 Hover 状态
   - 按钮 hover 时略微上移 2–3 像素，外发光增强、边框亮度提升；active 时回落并略微减弱光晕，模拟实体按钮按下。
   - 游戏卡片 hover 时可以添加轻微放大（scale 1.02）、边框颜色切换到更鲜亮的霓虹色，并在卡片顶部的亮条加入流动渐变动画。
2. 扫描线与闪烁文字
   - 主屏幕上方带有「PRESS START」或类似提示文字，采用 steps() 动画实现轻微闪烁，但节奏需控制舒适（不宜过快）。
   - CRT 扫描线动画应缓慢移动或轻微抖动，而不是剧烈闪烁，以免疲劳。
3. 微交互
   - 投币按钮（INSERT COIN）可以周期性地做轻微 scale、亮度变化或阴影脉动，营造「吸引玩家投币」的感觉。
   - 鼠标点击按钮时，可以附加一个短暂的“波纹”或发光扩散效果，模拟电子信号触发。

【文案与信息结构】
1. 文案风格
   - 文案整体语气可以偏向街机系统提示，将普通文案写成系统消息形式，如「PLAYER 1 · READY」「SYSTEM ONLINE · 12 GAMES AVAILABLE」等。
   - 英文部分尽量使用大写、简短句子与短语；中文部分可适度混入英文缩写保持风格统一。
2. 信息层级
   - 首屏必须明确回答：这是一个什么样的 arcade 平台？用户现在可以做什么？例如「发现并游玩 12 款经典街机」「参与限时高分挑战」等。
   - 通过标题、副标题、小标签和辅助说明分层呈现信息，避免一大段连续正文。

【输出技术要求】
- 仅输出完整 HTML5 文档结构（<!DOCTYPE html>、<html>、<head>、<body>），不得添加额外解释。
- 使用语义化标签：<header>、<nav>、<main>、<section>、<aside>、<footer> 来组织大区块。
- 所有布局与间距使用 TailwindCSS 风格原子类（如 flex、grid、gap-8、px-6、py-8、rounded-xl、shadow-lg 等）；如需自定义效果，可在 class 名中加入语义化自定义类（如 crt-screen、neon-border）。
- 必须包含：一个顶部导航、一个主 CRT 英雄区、一个游戏栅格区、一个排行榜与活动区，以及一个底部状态栏；这些区域的布局与视觉应与当前 /styles/preview/retro-arcadeCRT 示例保持高度一致。
- 不引用外部 CDN（字体 / 图标），如需图标可使用 emoji 或简单字符；如需额外样式，请通过 <style> 内联或通过 Tailwind 原子类进行描述。
`,
    'en-US': `
You are a senior UI designer and front-end engineer who deeply understands the “Arcade CRT / retro arcade monitor” aesthetic. Your task is to write a full, copy‑pasteable instruction for another LLM so that it can generate a brand‑new HTML full page that looks like a sibling of the current “Arcade Hall” demo at /styles/preview/retro-arcadeCRT, without copying its text or exact content.

Goal: the generated page should instantly read as part of the same Arcade CRT family—dark arcade hall environment, central CRT screen, neon glow palette, pixel‑like buttons and an “INSERT COIN” ecosystem—while presenting a different scenario, copy and game lineup.

[Usage & Purpose]
- Context: a landing page for an online retro arcade platform that aggregates multiple classic games and time‑limited events.
- Audience: players who love pixel art, retro consoles, synthwave / cyberpunk visuals, and nostalgic cabinet experiences.
- Purpose: let users quickly scan available games, see high scores, discover events, and feel as if they just walked into a dim physical arcade.

[Required Layout Skeleton]
1. Top Navigation (Arcade HUD)
   - Fixed to the top with a semi‑transparent dark bar, like a glass overlay in front of the cabinet.
   - Left side: icon + “ARCADE CRT” logotype using a bold, techno or pixel‑feeling font, optionally with an RGB split glow.
   - Right side: compact navigation items such as HOME, GAMES, LEADERBOARD, EVENTS, CONTACT; on hover, links brighten and draw a small underline.

2. Hero Section with Main CRT Screen
   - Centered in the viewport as the primary focal point.
   - There must be a large “CRT screen” container: almost‑black interior, glowing rectangular frame, inner shadows suggesting curved glass.
   - Inside the screen, place:
     - A large title (e.g., “NEON ARCADE STATION”) with RGB separated, glowing text.
     - A grid of featured game entries with name, minimal description, genre tag and a small PLAY / DETAILS button.
     - A thin status bar at the bottom with system‑style copy such as “INSERT COIN · CREDITS: 09 · PLAYER 1 READY”.

3. Game Grid Section
   - Below the hero, use a responsive grid (3–4 columns on desktop, 1 on mobile) to show more titles.
   - Each game card: dark panel, neon border, small top accent strip, title, short blurb, meta line (high score / players online / difficulty), and a primary button.

4. Leaderboard & Events
   - Side‑by‑side columns on desktop: left for a high‑score leaderboard, right for upcoming events or challenges.
   - Leaderboard rows must include rank, player name, game and score; top ranks use different neon colors and optional emoji medals.
   - Event cards show name, schedule, a short description and a JOIN / DETAILS button.

5. Footer / System Bar
   - Bottom section styled as a system status bar with brand copy, minimal links and optionally a slow scrolling marquee line for announcements or Easter eggs.

[Color & Lighting]
- Global background: near‑black (#050509–#0A0A0A) with subtle gradients or soft glows hinting at distant machines.
- Neon palette (to be reused across text, borders and icons):
  - Neon Magenta: #FF00FF
  - Neon Cyan: #00FFFF
  - Neon Yellow: #FFFF00
  - Neon Green: #00FF41
  - Neon Orange: #FF6600
- Explain that these colors should rarely fill large areas; they primarily act as light sources and outlines over a dark backdrop.
- Describe CRT scanlines as a transparent horizontal stripe pattern animated slowly, combined with slight brightness variation and optional color noise.

[Interaction & Motion]
- Hover states:
  - Buttons move up slightly, become brighter and gain a stronger glow; on press they sink back and lose some glow to mimic physical buttons.
  - Game cards lift a bit and intensify their top accent strip or border color.
- Animated details:
  - A “PRESS START” or equivalent hint should blink gently using a steps()‑style animation with a comfortable rhythm.
  - An INSERT COIN control may pulse in size and glow intensity, attracting attention without causing eye strain.

[Copy & Information Hierarchy]
- Encourage system‑style copy such as “PLAYER 1 READY”, “SYSTEM ONLINE”, “CREDITS 09” instead of generic marketing slogans.
- Require a clear hierarchy: concise main headline, supporting subtitle, section titles, and short bullet‑like descriptions rather than long paragraphs.

[Output Requirements]
- Output a complete HTML5 document only (<!DOCTYPE html>, <html>, <head>, <body>) with no explanations around it.
- Use semantic tags: <header>, <nav>, <main>, <section>, <aside>, <footer>.
- Layout and spacing must be expressed via TailwindCSS‑like utilities (flex, grid, gap‑8, px‑6, py‑8, rounded‑xl, shadow‑lg, bg‑..., text‑...) plus a few semantic custom classes such as crt-screen, neon-border, arcade-btn.
- The page must include at least: one fixed top nav, one hero CRT screen, a game grid section, a leaderboard + events area and a footer bar.
- The final design should clearly look like a variant of the current Arcade Hall demo at /styles/preview/retro-arcadeCRT: same mood, same visual language, different content.`
  },

  // Template-level stylePrompt
  stylePrompt: {
    'zh-CN': `
角色设定：
你是一位沉迷复古游戏机厅与赛博朋克文化的 UI 设计师，你擅长把现实世界的街机机台、霓虹灯牌、CRT 显示器和闪烁状态灯，转化为一个可交互的 Web 界面。Arcade Hall 模板是 Arcade CRT 家族中「最像真实街机厅入口」的一种页面，它既是产品首页，也是视觉世界观的开场镜头。

场景定位：
这种风格适用于复古游戏集合平台首页、街机主题活动落地页、游戏工作室的 Showcase 页面，或者任何想要营造「走进地下街机厅」氛围的场景。用户打开页面的那一刻，就像推开一扇沉重的门：门后是昏暗的空间、只有机器在发光、远处隐约传来电子音效和投币的叮当声。页面的主要任务是展示多款游戏入口、当前热门内容以及高分榜，同时保持强烈的沉浸感。

视觉设计理念：
Arcade Hall 把整个视窗想象成一台巨型街机机台的正面：上方是一块带 LOGO 与导航的发光标牌，中间是主屏幕区域，下方是控制面板和状态栏。背景必须保持非常深的黑色或深灰，以突出来自屏幕与霓虹的高亮对比；亮的部分永远来自「设备发光」而不是平涂色块。字体与排版延续老式游戏 UI 语气：大量大写英文、等宽或像素感字体、简短的系统提示，而不是平面广告式的文案。

材质与质感：
核心材质是 CRT 玻璃、粗糙金属外壳和塑料按钮。屏幕通过水平扫描线、轻微噪点、色偏与弧形暗示老电视机或游戏机显示器；边框使用粗线条与内阴影让人感觉“有厚度”。按钮与卡片像是塑料和金属面板上的发光方块：有明显边框、圆角极小或没有圆角，边缘通过多层 box-shadow 形成发光轮廓。背景可以加入模糊的彩色光斑，好像旁边的机台在闪烁，营造空间纵深感。

交互体验：
交互反馈参考实体街机硬件：按钮在 hover 时像刚被通电的霓虹灯那样变亮、出现微弱扩散光晕；在点击时稍微下压、发光减弱，仿佛按下真实的硬按钮。游戏卡片在鼠标经过时轻轻上浮，边框霓虹色更强烈，顶部的彩色光带像电流扫过。屏幕上的「PRESS START」「INSERT COIN」等文字可以有轻微、不规则的闪烁，但频率要足够温和，像老机器偶尔抖动而不是广告牌乱闪。

信息结构与氛围：
Arcade Hall 的信息组织需要在「清晰可扫读」与「保持神秘」之间取得平衡。用户应该一眼就能看到有哪些游戏、如何开始游玩、排行榜和活动在哪里，但视觉上又不会像传统企业官网那样规整干净，而是保持一定的噪点与混沌感。局部可以有刻意多余的细节：无意义的状态灯、假装的系统码流、仅作装饰的像素图标，这些元素并不承载真实功能，但共同构成了街机宇宙的“噪声”背景。

整体氛围：
这种风格强调封闭、专注、略带叛逆的夜间体验——你不在一个明亮的办公环境，而是在一个只为游戏存在的空间。屏幕与霓虹是唯一的光源，周围的一切都是黑暗的；色彩集中在高亮的边缘和文本上，使视觉注意力自然聚焦在游戏内容及操作按钮上。只要牢牢抓住「暗室背景 + 发光 CRT 屏幕 + 霓虹色按钮 + 像素系统文案」这四个关键词，任何新的页面或组件都会自然融入 Arcade CRT / Arcade Hall 这一风格体系。`,
    'en-US': `
Role:
You are a UI designer obsessed with old arcade halls and cyberpunk cities. Your specialty is translating physical arcade cabinets—glowing marquees, CRT monitors, chunky buttons, coin slots—into interactive web layouts. The Arcade Hall template represents the “entrance scene” of the Arcade CRT universe: it should feel like the moment a player steps into a dim game room filled with machines.

Scene:
This style fits retro game hub homepages, arcade‑themed event landing pages, studio showcases, or any product that wants to evoke the feeling of entering a hidden arcade in a neon‑lit alley. The page introduces a lineup of games, shows what is popular right now, and advertises challenges or events, all while keeping the environment dark and richly atmospheric.

Visual Concept:
The viewport is treated as the front of a large arcade cabinet. The top behaves like a glowing marquee with logo and navigation. The middle is the main CRT screen, where featured content lives. The lower portion feels like a control panel with status messages and call‑to‑action buttons. Almost everything around the screen is dark; light comes from displays, labels and neon trim. Typography borrows from system UIs and game HUDs: dense uppercase labels, monospace or pixel‑like fonts, short status phrases instead of long marketing headlines.

Material & Texture:
Core materials are glass, painted metal and hard plastic. The CRT is conveyed through scanlines, subtle noise, slight color separation and a hint of curvature. Frames and panels have thick borders and inner shadows, giving the impression of depth and weight. Buttons and cards feel like lit plastic blocks: sharp corners or tiny radii, strong outlines, and multi‑layered glows. The background can feature soft color blooms and gradients that imply other machines and signage off to the side, reinforcing the sense of being in a room rather than on a flat web canvas.

Interaction:
Interactions mimic hardware. When users hover on a button, it brightens and the glow spreads as if more current is flowing through the neon tube. On press, the button sinks and the glow tightens, like a physical switch being toggled. Game cards lift slightly and gain stronger edge lights on hover. Status copy such as “PRESS START” or “INSERT COIN” can blink gently, recalling the imperfect behavior of old electronics rather than loud billboard animations.

Atmosphere & Information:
The Arcade Hall page must balance clarity and mystery. Users should quickly see which games they can play, how to start, where the leaderboard and events are—yet the composition should still feel packed with visual noise: decorative status lights, scrolling system text, abstract pixel icons, and other non‑functional but flavorful details. These fragments build the illusion of a complex machine. The overall mood is enclosed and focused: you are not browsing a corporate dashboard, you are standing in front of a machine waiting for you to press a glowing button.

If every new screen and component keeps returning to the same anchors—dark room, glowing CRT, neon edges, pixel‑driven copy—then the Arcade Hall style remains coherent, no matter how the content evolves.`
  }
};

export default arcadeHall;
