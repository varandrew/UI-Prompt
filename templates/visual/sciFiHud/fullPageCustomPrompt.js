/**
 * Sci-Fi HUD - FullPage Custom Prompt
 * 科幻 HUD 儀表板完整页面的 AI 指令（針對全屏控制台 / 儀表板佈局）
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Sci-Fi HUD 控制台全屏页面」界面风格高度接近的 UI。
要求：保持整体布局结构、科幻 HUD 质感和配色思路基本不变，只允许替换文案、品牌名称和部分数据内容。输出必须使用语义化 HTML 结构（header / main / section / aside / footer），并使用类似 TailwindCSS 的原子类（例如 flex、grid、gap、px-8、bg-slate-900、text-cyan-400 等）来控制布局与样式。

【使用场景与整体氛围】
- 目标场景：星舰指挥中心控制台、AI 系统总控平台、网络安全监控大屏、行星基地状态面板、未来数据运营指挥室
- 用户角色：舰桥指挥官、系统监控工程师、安全运营专家、数据分析师
- 整体气质：冷静、精准、未来感强、以信息可读性与态势感知为第一优先
- 视觉印象：像在黑暗的舰桥中操作一块巨大的透明 HUD 屏幕，所有状态与数据以发光线条和几何仪表形式呈现

【整体布局结构】
请使用一个最大宽度约为 1280px~1440px 的中央控制面板，外层使用 'min-h-screen'、'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 等类似类名營造深空背景。

1. 顶部系统状态栏（Top System Status Bar）
   - 使用 '<header>' 元素，固定在页面顶部，宽度占满内容区域，高度约 56~72px
   - 左侧区域：
     - 品牌 / 系统 Logo 文本，例如：'NEXUS HUD CORE'
     - 次级标签：模式徽章（如 LIVE / SIMULATION）、环境标签（如 ORBITAL / GROUND STATION）
   - 中间区域：
     - 全局状态摘要文本，例如："SYSTEM STABILITY: 97.2%"、"THREAT LEVEL: LOW"
     - 细线分隔，使用发光青色边线（border-b border-cyan-500/40）
   - 右侧区域：
     - 当前 UTC 时间、舰桥本地时间（两组时间）
     - 小型状态指示灯（在线 / 断开 / 加密信道），用圆形 + 发光阴影呈现
   - 背景处理：
     - 使用半透明深色条（如 'bg-slate-950/80 backdrop-blur'）
     - 底部添加一条 1px 高度的青色发光下边框，模拟 HUD 顶部边缘

2. 主控制面板布局（Main Control Grid）
   - 使用 '<main>' 包裹，内部采用 'grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-6' 的双列布局
   - 左侧为主系统仪表区（Primary Systems Panel），右侧为子系统与日志区（Subsystems & Logs）
   - 需要在大屏幕上呈现清晰分区，在小屏幕（如 <1024px）时改为单列纵向布局（'grid-cols-1'）

3. 左侧主系统仪表区（Primary Systems Panel）
   该区域包括：全局概览卡片、雷达 / 扇形扫描图、资源利用率卡片、任务进度卡片。

   3.1 全局系统概览卡（System Overview Card）
   - 使用带截角的 HUD 面板风格：
     - 外层容器使用 'relative rounded-xl border border-cyan-500/30 bg-slate-900/70 backdrop-blur-xl' 等类似类名
     - 在伪元素或额外 '<div>' 中添加截角效果（可用 'before' 模擬，或用內嵌 HTML 描述）
   - 内容结构：
     - 顶部标题行：左侧显示 "SYSTEM OVERVIEW"，右侧显示 "LOAD: 73%" 等摘要
     - 中间使用两行三列的 KPI 指标网格，例如：CPU / MEMORY / NETWORK / NODES / ALERTS / UPTIME
     - 指标使用大号数字 + 小号标签 + 小型条形或环形进度条
   - 视觉要求：
     - 主数字使用青色渐变文字（#06B6D4 → #22D3EE）
     - 背景叠加淡淡的网格线（可以用 'bg-[radial-gradient(...)]' 或 CSS 自定义）

   3.2 雷达扫描面板（Tactical Radar Panel）
   - 使用一个接近正方形的卡片，内部以圆形雷达为视觉中心
   - 雷达结构：
     - 外层圆形边框使用 'border border-cyan-400/60 rounded-full'
     - 内部绘制 3~4 圈同心圆 + 纵横十字线，线条使用低透明度青色
     - 使用 'conic-gradient' 或 SVG 模拟扫描扇形，并添加 'animate-[spin_6s_linear_infinite]' 之类的旋轉動画
     - 在雷达上随机分布 3~6 个发光节点，使用小圆形 + 'animate-ping' 或自定义脉冲动画
   - 卡片标题："THREAT MAP" 或 "TACTICAL RADAR"，下方可展示目标数量、锁定目标、干扰源等数值

   3.3 资源与能量面板（Resources & Power Panel）
   - 使用多列进度条卡片表示：REACTOR OUTPUT、COOLING CAPACITY、BANDWIDTH、SHIELD STATUS 等
   - 每个条目包括：
     - 左侧标签 + 小图标（如 ⚡、🛰️、🛡️）
     - 中间长条进度条，颜色根据状态变化：安全（青色）、警戒（橙色）、危险（红色）
     - 右侧数值百分比与趋势箭头（↑ / ↓）
   - 进度条可使用渐变背景，如 'bg-gradient-to-r from-cyan-400 via-emerald-400 to-sky-400'

   3.4 任务进度与阶段面板（Mission Timeline / Tasks Panel）
   - 以纵向时间轴形式显示当前任务阶段：INIT, ALIGN, EXECUTE, STANDBY 等
   - 每个阶段使用小圆点 + 水平连接线 + 标题 + 状态标签（如 ACTIVE / QUEUED / COMPLETE）
   - 当前阶段使用发光高亮、放大圆点和背景强调条

4. 右侧子系统与日志区（Subsystems & Logs）

   4.1 子系统状态栈（Subsystem Stack）
   - 垂直堆叠 3~4 个小卡片，每个代表一个子系统，如：COMM LINK、SENSOR GRID、SHIELD ARRAY、DRONE SWARM 等
   - 卡片结构：
     - 顶部为子系统名 + 状态徽章（ONLINE / DEGRADED / OFFLINE）
     - 中部为核心指标（例如：延迟、信噪比、覆盖范围、活跃节点数）
     - 底部为小型迷你图（迷你折线图 / 迷你柱状图可用渐变块或伪代码描述）

   4.2 告警与事件日志（Alerts & Event Log）
   - 使用 '<section>' 或 '<aside>' 容器，内部为纵向列表，每一行代表一个事件：
     - 左侧：状态标签（INFO / WARNING / CRITICAL），颜色分别为蓝 / 橙 / 红
     - 中间：事件标题，如 "Unauthorized access attempt blocked"
     - 右侧：时间戳，例如 23:17:03 Z 或 03:41 SHIP
   - 顶部显示 "EVENT LOG" 标题，附带小型过滤按钮（如 ALL / WARN / CRIT），按钮在 hover 时发光

   4.3 底部次级信息带（Secondary Info Strip）
   - 在右侧或整个底部区域放置一条细长信息带，滚动显示系统消息或广播（可用 CSS 動画模擬 marquee 效果，但保持克制）

5. 底部控制條与版權区（Footer Control Strip）
- 使用 '<footer>' 元素，背景為更深的 'bg-slate-950/90 border-t border-cyan-500/20'
- 左側显示系統名稱縮写与版本號，例如：'HUD CORE v3.2.1'
- 中間可以显示當前節點 / 数据中心資訊，例如：'NODE: ORBITAL-03 / CLUSTER: AURORA'
- 右側提供操作按鈕，如「OPEN COMMAND CONSOLE」「EXPORT REPORT」，使用實心青色按鈕 + 边框高亮

【色彩与樣式規範】
请在 Prompt 中明確要求使用以下色彩思路，並鼓勵 LLM 使用實際色值：
- 背景基色：'#020617', '#020617', '#0f172a'
- HUD 主色（青色 / 藍綠）：'#06B6D4', '#0EA5E9', '#22D3EE'
- 警告色：'#F97316'（橙）、'#EAB308'（黃）、'#EF4444'（紅）
- 成功 / 安全色：'#22C55E', '#10B981'
- 文本主色与次級文字：'#E5F2FF', '#94A3B8', '#6B7280'
- 卡片背景：深色 + 半透明，如 'bg-slate-900/70' 搭配 'backdrop-blur-xl'
- 边框与分割线：使用 'border-cyan-500/30' 或 'border-slate-700/60'，並在重要区域加內外發光阴影

【关鍵 HUD 視覺元素要求】
在 Prompt 中，请让 LLM 明確包含以下 HUD 元素描述，並在 HTML 中使用語義化区塊搭配 Tailwind 类名：
1. 雷達掃描圈（含掃描扇形動画与發光節點）
2. 多組實時数据 KPI 卡片（以网格呈現，具有單位与标籤）
3. 資源／能量條（使用漸变填充与狀態颜色）
4. 告警事件列表（帶颜色标籤与時間戳）
5. 任务階段時間軸或狀態流（使用步驟節點与連线）
6. 頂部狀態條与底部控制條

【交互与動效设計】
- 懸停（Hover）：
  - 卡片：'hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]'
  - 按鈕：'hover:bg-cyan-400 hover:text-slate-950 hover:shadow-lg'
- 按壓（Active）：
  - 卡片和按鈕在 'active' 時縮放至 'scale-95' 左右，並稍微降低亮度以模擬按壓感
- 常駐動画：
  - 雷達掃描使用緩慢旋轉動画（6~10 秒一圈）
  - 指示灯使用 1.8~2.4 秒的呼吸動画（透明度与外發光交替）
  - 粒子或背景掃描线可使用低頻率移動動画，但要明確要求「不要影響文字可讀性」

【輸出格式要求】
请在生成時遵循以下約束：
1. 使用語義化結構：必須包含 '<header>', '<main>', '<section>', '<aside>', '<footer>' 等元素；可輔以 '<nav>', '<ul>', '<li>' 來組織导航与列表。
2. 使用 Tailwind 类似原子类：例如 'min-h-screen', 'bg-slate-950', 'grid', 'gap-6', 'px-8', 'py-6', 'rounded-xl', 'border', 'border-cyan-500/30', 'backdrop-blur-xl', 'text-cyan-400', 'shadow-[0_0_40px_rgba(34,211,238,0.35)]' 等。
3. 不需要提供實際 Tailwind 配置档，只需在 class 中使用原子类名；若需自訂動画，可使用內联 '<style>' 或自定義 '@keyframes' 並在 class 中引用。
4. 生成的 HTML 必须是一个可单独渲染的完整页面结构（含 '<html>', '<head>', '<body>'），但樣例中可略写 '<head>' 內容，只需說明字体可使用类似 Orbitron / Space Grotesk 等科幻感字体。
5. 文案內容可以自由更換，但應保持用語偏「系統狀態」「指令」「模組名稱」等科技術語，而非日常生活語言。

【額外提示与限制】
- 请避免使用過於花俏的多色漸变背景遮蓋文字；所有動画与光效應以「不影響閱讀」為最高原則。
- 儀表与圖形可以使用純 CSS 或简單的 div 結構模擬，無需依賴 Canvas 或 SVG；如果需要，可用简單占位符表示圖表区域。
- 不要加入与 Sci-Fi HUD 無关的插画、人物大照片或卡通元素；整体風格應保持嚴謹科技与专業感。
- 若有空白区域，可以使用細线、刻度、小型数值标註填充，而不是大面積純色。

请根据以上完整說明，輸出一個完整的 Sci-Fi HUD 風格控制台 HTML 全页示例。',

  'en-US': 'You are now a senior UI designer and front-end engineer. Please generate a full-page Sci-Fi HUD control interface whose visual style is highly similar to the existing "Sci-Fi HUD Dashboard" page.
Requirements: Keep the overall layout, HUD texture, and color system very close to the described design. You may freely change copywriting, labels, and data values, but the structural logic and visual style should remain consistent. Output must use semantic HTML elements (header / main / section / aside / footer) and Tailwind-like utility classes (e.g. flex, grid, gap-6, bg-slate-950, text-cyan-400).

[Use Case & Atmosphere]
- Use cases: starship command console, AI platform control center, cybersecurity monitoring wall, planetary base status board, futuristic operations dashboard
- User roles: bridge commanders, monitoring engineers, security analysts, SRE / DevOps operators
- Overall tone: calm, precise, high-tech, focused on situational awareness and readability
- Visual feeling: as if operating a giant transparent HUD panel floating in a dark control room, with data rendered as glowing lines and geometric instruments

[Overall Layout]
Use a centered main container with a max-width around 1280–1440px, and wrap the whole viewport with a deep-space background using classes like 'min-h-screen' and 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'.

1. Top System Status Bar
   - Implemented with a '<header>' spanning the page width, about 56–72px tall.
   - Left segment:
     - Brand / system logo text, e.g. 'NEXUS HUD CORE'.
     - Secondary tag chips for mode (LIVE / SIMULATION) and environment (ORBITAL / GROUND STATION).
   - Center segment:
     - Global status summary, such as "SYSTEM STABILITY: 97.2%" or "THREAT LEVEL: LOW".
     - A thin cyan glowing divider under the header (border-b border-cyan-500/40).
   - Right segment:
     - Current UTC time and local ship / control-room time.
     - Small circular status indicators (online / disconnected / encrypted) with glowing shadows.
   - Background:
     - Semi-transparent dark strip ('bg-slate-950/80 backdrop-blur').
     - Thin 1px cyan glow line at the bottom edge to suggest the HUD frame.

2. Main Control Grid
   - Use '<main>' with a two-column grid: 'grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-6'.
   - Left column: primary systems panel.
   - Right column: subsystems and logs.
   - On smaller screens, collapse to a single column ('grid-cols-1').

3. Primary Systems Panel (Left Column)
   Contains a system overview card, a radar / tactical map card, a resources & power panel, and a mission timeline card.

   3.1 System Overview Card
   - Cut-corner HUD-style panel:
     - Container classes like 'relative rounded-xl border border-cyan-500/30 bg-slate-900/70 backdrop-blur-xl'.
     - Optional extra elements for cut corners using pseudo-elements or extra '<div>'.
   - Content:
     - Top row with title "SYSTEM OVERVIEW" on the left and a compact summary like "LOAD: 73%" on the right.
     - A 2×3 grid of KPIs: CPU, MEMORY, NETWORK, NODES, ALERTS, UPTIME.
     - Each KPI: large numeric value, unit, label, and a small bar or ring indicator.
   - Visual:
     - Main value text uses cyan gradient (#06B6D4 → #22D3EE).
     - Background subtly overlays a HUD-like grid.

   3.2 Tactical Radar Panel
   - A square-ish card with a central circular radar.
   - Radar structure:
     - Outer circle: 'border border-cyan-400/60 rounded-full'.
     - 3–4 inner rings and crosshair lines in low-opacity cyan.
     - A rotating scanning wedge using a conic gradient and 'animate-[spin_6s_linear_infinite]'.
     - 3–6 glowing blips using small circles with pulse animations.
   - Header text: "THREAT MAP" or "TACTICAL RADAR", with supporting stats under it (targets, locks, interference sources).

   3.3 Resources & Power Panel
   - Vertical stack of bars representing REACTOR OUTPUT, COOLING, BANDWIDTH, SHIELD STATUS, etc.
   - Each item:
     - Left: icon + label.
     - Center: horizontal progress bar whose color reflects state (safe / warning / danger).
     - Right: percentage and small trend arrow.
   - Use gradient fills like 'bg-gradient-to-r from-cyan-400 via-emerald-400 to-sky-400' for safe zones and warmer gradients for warning states.

   3.4 Mission Timeline / Phases Panel
   - Vertical stepper or timeline for phases such as INIT, ALIGN, EXECUTE, STANDBY.
   - Each step shows a small node (circle), a connecting line, a title, and a status badge (ACTIVE / QUEUED / COMPLETE).
   - The current phase is highlighted with a larger glowing node and a bright accent strip behind the row.

4. Subsystems & Logs (Right Column)

   4.1 Subsystem Stack
   - Vertically stacked cards for subsystems like COMM LINK, SENSOR GRID, SHIELD ARRAY, DRONE SWARM.
   - Each card:
     - Top: subsystem name + status badge (ONLINE / DEGRADED / OFFLINE).
     - Middle: key metrics (latency, SNR, coverage, active nodes, etc.).
     - Bottom: mini visualization (tiny bar chart / sparkline using simple divs).

   4.2 Alerts & Event Log
   - Use a '<section>' or '<aside>' containing a scrollable list of events.
   - Each row:
     - Left: level tag (INFO / WARNING / CRITICAL) with blue / orange / red background.
     - Center: short description (e.g. "Unauthorized access attempt blocked").
     - Right: timestamp (e.g. 23:17:03 Z / 03:41 SHIP).
   - Header label "EVENT LOG" with small filter chips (ALL / WARN / CRIT) that glow on hover.

   4.3 Secondary Info Strip
   - A slim info strip near the bottom of the column or across the full layout.
   - Shows scrolling system messages or broadcast notifications; you can emulate a marquee effect with CSS but keep it subtle.

5. Footer Control Strip
- '<footer>' with 'bg-slate-950/90 border-t border-cyan-500/20'.
- Left: system short name and version, e.g. 'HUD CORE v3.2.1'.
- Center: node / cluster information, such as 'NODE: ORBITAL-03 / CLUSTER: AURORA'.
- Right: solid cyan primary buttons like "OPEN COMMAND CONSOLE" and "EXPORT REPORT" with hover glow.

[Color and Style Guidelines]
Explicitly guide the model to use:
- Background base: '#020617', '#020617', '#0f172a'.
- HUD accent colors: '#06B6D4', '#0EA5E9', '#22D3EE'.
- Warning colors: '#F97316', '#EAB308', '#EF4444'.
- Success / safe: '#22C55E', '#10B981'.
- Typography: '#E5F2FF', '#94A3B8', '#6B7280'.
- Card backgrounds: dark semi-transparent with blur, like 'bg-slate-900/70 backdrop-blur-xl'.
- Borders and dividers: 'border-cyan-500/30', 'border-slate-700/60', with inner/outer glow for key modules.

[Required HUD Visual Motifs]
The generated UI should clearly include the following Sci-Fi HUD elements:
1. Circular radar with sweeping scan wedge and glowing blips.
2. Multiple real-time KPI cards in a grid, with numeric values and labels.
3. Resource / power bars with gradient fills and state-dependent colors.
4. Alerts list with colored severity tags and timestamps.
5. Mission phase timeline or stepper with active stage highlight.
6. A clearly defined top status bar and bottom control strip.

[Interaction & Motion]
- Hover:
  - Cards: 'hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]'.
  - Buttons: 'hover:bg-cyan-400 hover:text-slate-950 hover:shadow-lg'.
- Active:
  - On press, cards and buttons briefly scale down ('scale-95') and reduce brightness to simulate tactile feedback.
- Persistent animations:
  - Radar sweep rotates slowly (6–10 seconds per revolution).
  - Status indicators use breathing pulse animations (1.8–2.4 seconds).
  - Background scanlines or particles move slowly and subtly; explicitly state that text legibility must remain top priority.

[Output Requirements]
1. Use semantic HTML and meaningful structure: include '<html>', '<body>', '<header>', '<main>', '<section>', '<aside>', '<footer>'; optionally '<nav>', '<ul>', '<li>'.
2. Use Tailwind-like utility classes for layout and spacing. You do not need to configure Tailwind; simply treat classes as textual utilities.
3. You may define custom '@keyframes' and reference them via 'class' names or inline styles, but keep CSS organized inside a '<style>' block or as comments.
4. The result must be a full-page example (one HTML document), not just a fragment.
5. Copywriting should stay in a technical / system-oriented tone (module names, statuses, commands), avoiding casual colloquial language.

[Extra Notes]
- Avoid overwhelming rainbow gradients behind text; glowing accents should support, not fight, legibility.
- You may simulate charts and complex instruments using simple '<div>' structures and gradients, no need for real JS logic.
- Do not introduce unrelated illustrations or character photos; keep the look professional and system-focused.
- Empty areas can be filled with fine lines, ticks, and small numeric labels instead of large flat blanks.

Based on all the above instructions, produce a complete HTML page that strongly feels like a live Sci-Fi HUD control dashboard.`
};
