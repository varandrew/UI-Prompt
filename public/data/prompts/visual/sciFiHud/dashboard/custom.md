# Custom Prompt - HUD Dashboard（系统监控仪表板）

## 中文版本 (zh-CN)

你现在是一名资深 UI 设计师兼前端工程师，精通科幻 HUD（平视显示器）风格界面设计。请生成一个与当前「科幻 HUD 系统监控仪表板」风格高度一致的全新完整 HTML 页面。

你的目标：在不复制现有页面内容的前提下，生成一个「一眼能看出是同一系列」的全新完整 HTML 页面。你需要严格延续当前科幻 HUD 风格的布局逻辑、配色体系、光效质感和动画节奏，只替换场景、数据内容和功能模块。

### 【使用场景】

这是一个**未来星际飞船指挥中心**或**AI 系统总控平台**的即时监控仪表板页面，用于：
- 实时监控复杂系统的运行状态（能量核心、护盾、引擎、热量散发等）
- 进行雷达扫描与威胁检测，实时追踪目标移动
- 显示系统事件日志流，记录操作历史与异常告警
- 提供快速操作入口（扫描、导航、锁定目标、通讯）

整体氛围应营造出「高科技指挥中心」、「军事级精密控制台」、「沉浸式数据可视化」的感觉，类似电影《星际穿越》、《普罗米修斯》中的飞船控制台，或游戏《质量效应》、《星际公民》中的舰桥界面。

### 【整体布局结构】

#### 1. 顶部状态条（Top Status Bar）
- **位置**：固定在页面最顶部，宽度 100%
- **左侧**：系统 Logo 或品牌标识（例如「◆ NEXUS SYSTEM」、「⬡ QUANTUM OS」），使用几何图标 + 大写英文
- **中央**：实时时钟显示（格式：HH:MM:SS 或 YYYY-MM-DD HH:MM:SS），字体使用等宽字体（monospace）
- **右侧**：系统在线状态指示灯（●ONLINE / ●OFFLINE），配合脉冲动画表示心跳
- **背景**：深色半透明背景（如 rgba(10, 14, 26, 0.8)），带 backdrop-filter 模糊效果
- **高度**：约 50-60px

#### 2. 左侧系统状态面板（Left System Status Panel）
- **宽度**：约占 20-25% 的视窗宽度
- **内容排列**：垂直堆叠的系统资源进度条，每个进度条包含：
  - 资源名称标签（POWER CORE、SHIELD、SYSTEMS、THERMAL、ENGINE 等）
  - 百分比数值（如 92%、78%、100%、45%）
  - 水平进度条（使用渐变填充，从左到右由深到浅）
  - 进度条末端带发光效果（filter: drop-shadow）
- **颜色编码**：
  - 绿色（#10B981）：正常状态（80%-100%）
  - 黄色（#F59E0B）：警告状态（50%-79%）
  - 红色（#EF4444）：危险状态（0%-49%）
- **动画**：进度条填充带脉冲动画（1.5s ease-in-out infinite alternate）

#### 3. 中央雷达扫描区（Center Radar Scanning Area）
- **位置**：页面中央，占据主视觉区域
- **核心元素**：圆形雷达扫描圈 + 旋转扫描扇形 + 发光节点
- **雷达圈设计**：
  - 外圈：粗边框圆环（border: 2px solid #0EA5E9），直径约 300-400px
  - 内圈：多层同心圆网格线（1-3 层），使用半透明线条
  - 刻度标记：12 个方向刻度（0°、30°、60°...330°），带小三角形或短线标记
- **扫描扇形**：
  - 使用 conic-gradient 或 SVG path 绘制扇形（扇区角度约 60-90°）
  - 从透明渐变到青色（transparent → rgba(6, 182, 212, 0.3)）
  - 旋转动画：6-10 秒完成 360° 旋转（transform: rotate, infinite linear）
- **目标节点**：
  - 在雷达圈内随机分布 3-6 个小圆点（直径 6-10px）
  - 颜色：青色或绿色，带脉冲缩放动画（scale from 1 to 1.3）
  - 可选：节点带扩散圆环效果（类似声纳波）

#### 4. 右侧数据流日志（Right Data Stream Log）
- **宽度**：约占 25-30% 的视窗宽度
- **显示方式**：垂直滚动的事件日志列表，最新记录在底部
- **每条日志格式**：
  - 时间戳（HH:MM:SS，使用等宽字体，颜色稍淡）
  - 事件文本（简短描述，如「System initialized」、「Connection established」）
  - 状态图标（✓ 成功、! 警告、✗ 错误）
- **颜色编码**：
  - INFO：白色或淡蓝色（#CBD5E1）
  - SUCCESS：绿色（#10B981）
  - WARNING：黄色（#F59E0B）
  - ERROR：红色（#EF4444）
- **自动新增**：每 3-5 秒自动添加一条新日志，旧日志向上滚动并淡出
- **背景**：深色半透明面板，带内阴影和模糊边框

#### 5. 底部控制条（Bottom Control Bar）
- **位置**：固定在页面底部，宽度 100%
- **按钮排列**：水平排列 4-6 个功能按钮，每个按钮包含：
  - 几何图标（◆ SCAN、▲ NAV、● TARGET、■ COMM）
  - 按钮标签（大写英文）
- **按钮样式**：
  - 背景：深色带青色边框（border: 1px solid #0EA5E9）
  - Hover：背景变亮（brightness(1.2)），边框发光（box-shadow: 0 0 10px #0EA5E9）
  - Active：按钮下沉效果（translateY(2px)），发光减弱
- **高度**：约 60-70px

### 【色彩与材质体系】

#### 1. 背景与大气层
- **主背景**：深色渐变，模拟深空或指挥中心的暗光环境
  - 推荐色值：linear-gradient(135deg, #0a0e1a 0%, #1e293b 50%, #0f172a 100%)
  - 或纯色：#0a0e1a、#0f172a
- **粒子背景**：使用 Canvas 绘制 100-200 个连接的粒子点（模拟星空或数据网络）
  - 粒子颜色：半透明白色或青色（rgba(6, 182, 212, 0.5)）
  - 连线：当两个粒子距离小于某个阈值时绘制连线
  - 动画：粒子缓慢漂移，连线动态生成和消失

#### 2. 主色调（Primary Color）
- **青色（Cyan）**：#0EA5E9、#06B6D4
  - 用途：主要强调色、扫描扇形、进度条高值、按钮边框
  - 发光效果：box-shadow: 0 0 10px #0EA5E9, 0 0 20px rgba(6, 182, 212, 0.5)

#### 3. 状态色（Status Colors）
- **成功/正常**：#10B981（翠绿）
  - 用途：进度条高值、SUCCESS 日志、在线状态指示灯
- **警告**：#F59E0B（琥珀黄）
  - 用途：进度条中值、WARNING 日志
- **危险/错误**：#EF4444（红色）
  - 用途：进度条低值、ERROR 日志、离线状态指示灯

#### 4. 面板与卡片
- **面板背景**：rgba(15, 23, 42, 0.6) 或 rgba(10, 14, 26, 0.6)
- **模糊效果**：backdrop-filter: blur(8px)
- **边框**：1px solid rgba(148, 163, 184, 0.2)
- **内阴影**：inset 0 1px 0 0 rgba(255, 255, 255, 0.05)

#### 5. 文字与图标
- **主文字**：#F1F5F9（亮白）
- **次要文字**：#CBD5E1（淡灰）
- **弱化文字**：#64748B（深灰）
- **字体**：
  - 标题/数值：Orbitron、Rajdhani、Exo 2（科幻感等宽字体）
  - 正文：Inter、Roboto（现代无衬线字体）
  - 时间戳/代码：Fira Code、Source Code Pro（等宽字体）

### 【光影与质感】

#### 1. 发光效果（Glow）
- **青色发光**：主要用于强调元素（雷达、进度条、按钮）
  - CSS：box-shadow: 0 0 10px #0EA5E9, 0 0 20px rgba(6, 182, 212, 0.3)
  - filter: drop-shadow(0 0 8px #0EA5E9)
- **脉冲发光**：用于在线指示灯、当前进行中的任务
  - 动画：opacity 和 scale 循环变化（1.5s ease-in-out infinite alternate）

#### 2. 扫描线动画（Scanlines）
- **水平扫描线**：在背景或面板上叠加细密的水平线条
  - 实现：使用 ::before 伪元素 + repeating-linear-gradient
  - 颜色：rgba(255, 255, 255, 0.02)
  - 动画：3-5 秒上下移动一次（translateY from -100% to 100%）

#### 3. 切角与几何感（Clipped Corners）
- **面板切角**：使用 clip-path 切掉卡片四角或其中某些角
  - 示例：clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)
  - 营造未来科技、硬朗的感觉

### 【交互与动效】

#### 1. 按钮交互
- **默认状态**：深色背景 + 青色边框
- **Hover**：
  - 背景变亮：filter: brightness(1.3)
  - 边框发光：box-shadow: 0 0 10px #0EA5E9
  - 上浮：transform: translateY(-2px)
  - 过渡时间：150ms ease-out
- **Active**：
  - 下沉：transform: translateY(1px)
  - 发光减弱：box-shadow: 0 0 5px #0EA5E9
- **Disabled**：
  - 灰度：filter: grayscale(1) opacity(0.5)

#### 2. 进度条动画
- **填充动画**：0.5-1s ease-out（页面加载时从 0% 填充到目标值）
- **脉冲动画**：进度条末端带光点，循环闪烁（1.5s infinite）
- **颜色过渡**：当数值变化时，颜色平滑过渡（transition: background 0.3s）

#### 3. 雷达扫描动画
- **旋转速度**：6-10 秒完成 360° 旋转
- **节点脉冲**：目标节点缩放动画（1-1.3-1，2s infinite）
- **扩散波**：节点周围的圆环扩散效果（opacity 0.8 → 0，scale 1 → 2，1.5s infinite）

#### 4. 数据流滚动
- **自动滚动**：新日志出现时，容器自动滚动到底部（scrollIntoView）
- **淡入淡出**：新日志淡入（opacity 0 → 1，300ms），旧日志超出可见区域后淡出
- **高亮效果**：新日志在前 1 秒带高亮背景（rgba(6, 182, 212, 0.1)）

#### 5. 载入动画
- **初始载入**：
  - 全屏遮罩 + 旋转 Logo 或进度圈（3 秒）
  - 载入完成后遮罩淡出（opacity 1 → 0，500ms）
- **数据更新**：
  - 局部闪烁效果（updated 元素短暂高亮 200ms）

### 【技术实现要求】

#### 1. HTML 结构
- 使用语义化标签：`<header>`、`<main>`、`<aside>`、`<section>`、`<footer>`
- 布局系统：CSS Grid 或 Flexbox（推荐 Grid 用于主布局，Flex 用于组件内部）
- 示例结构：
  ```html
  <div class="hud-dashboard">
    <header class="status-bar">...</header>
    <main class="dashboard-grid">
      <aside class="system-panel">...</aside>
      <section class="radar-area">...</section>
      <aside class="log-stream">...</aside>
    </main>
    <footer class="control-bar">...</footer>
  </div>
  ```

#### 2. CSS 样式
- 使用 Tailwind CSS 风格的原子类（flex、grid、gap-4、rounded-lg、bg-...、text-...）
- 或使用自定义 class 配合 CSS 变量：
  ```css
  :root {
    --hud-bg: #0a0e1a;
    --hud-primary: #0EA5E9;
    --hud-success: #10B981;
    --hud-warning: #F59E0B;
    --hud-danger: #EF4444;
  }
  ```

#### 3. JavaScript 动态功能
- **实时时钟**：使用 `setInterval` 每秒更新时间显示
- **雷达扫描**：CSS animation 或使用 `requestAnimationFrame` 更新 SVG transform
- **粒子背景**：Canvas API 绘制粒子网络，监听 `mousemove` 实现交互（可选）
- **数据流生成**：每 3-5 秒随机生成一条日志，推入数组并更新 DOM
- **进度条更新**：模拟数值波动，每 5-10 秒随机增减 1-5%

#### 4. 响应式设计（可选）
- **桌面端**（1920x1080）：完整布局，三列排列
- **平板端**（1024px 以下）：左右面板收缩或折叠，雷达缩小
- **移动端**（768px 以下）：单列布局，雷达移至顶部，控制条变为底部固定导航

### 【输出要求】

- **完整性**：生成一个完整的 HTML 页面，包含所有必要的结构、样式和脚本
- **独立运行**：页面应该能够在浏览器中直接打开并正常显示和运行
- **风格一致性**：生成的页面在视觉上应该与现有的科幻 HUD 仪表板高度一致，使用相同的配色、字体、光效和动画节奏
- **可读性**：代码结构清晰，适当注释，方便后续修改和扩展
- **性能优化**：动画使用 CSS transform 和 opacity（触发 GPU 加速），避免频繁重排重绘

---

## English Version (en-US)

You are now a senior UI designer and front-end engineer who specializes in Sci-Fi HUD (Heads-Up Display) interface design. Please generate a brand new, complete HTML page that is highly consistent with the current "Sci-Fi HUD System Monitoring Dashboard" style.

Your goal: Without copying the existing page content verbatim, create a new full-page interface that clearly belongs to the same design family. You must strictly follow the layout logic, color palette, glow effects, and animation rhythm of the current Sci-Fi HUD style, while changing the scenario, data content, and functional modules.

### [Scenario]

This is a **real-time monitoring dashboard** for a futuristic **starship command center** or **AI system control platform**, used for:
- Real-time monitoring of complex system operational status (power core, shields, engines, thermal dissipation, etc.)
- Radar scanning and threat detection, real-time target tracking
- Displaying system event log streams, recording operation history and anomaly alerts
- Providing quick action entries (scan, navigation, target lock, communication)

The overall atmosphere should evoke a "high-tech command center," "military-grade precision console," and "immersive data visualization," similar to the spacecraft control consoles in films like *Interstellar* and *Prometheus*, or the bridge interfaces in games like *Mass Effect* and *Star Citizen*.

### [Overall Layout Structure]

#### 1. Top Status Bar
- **Position**: Fixed at the very top of the page, 100% width
- **Left**: System logo or brand identity (e.g., "◆ NEXUS SYSTEM", "⬡ QUANTUM OS"), using geometric icons + uppercase English text
- **Center**: Real-time clock display (format: HH:MM:SS or YYYY-MM-DD HH:MM:SS), using monospace font
- **Right**: System online status indicator (●ONLINE / ●OFFLINE), with pulse animation for heartbeat effect
- **Background**: Dark semi-transparent background (e.g., rgba(10, 14, 26, 0.8)), with backdrop-filter blur
- **Height**: Approximately 50-60px

#### 2. Left System Status Panel
- **Width**: Approximately 20-25% of viewport width
- **Content**: Vertically stacked system resource progress bars, each containing:
  - Resource name label (POWER CORE, SHIELD, SYSTEMS, THERMAL, ENGINE, etc.)
  - Percentage value (e.g., 92%, 78%, 100%, 45%)
  - Horizontal progress bar (using gradient fill, from dark to light left to right)
  - Progress bar end with glow effect (filter: drop-shadow)
- **Color coding**:
  - Green (#10B981): Normal status (80%-100%)
  - Yellow (#F59E0B): Warning status (50%-79%)
  - Red (#EF4444): Danger status (0%-49%)
- **Animation**: Progress bar fill with pulse animation (1.5s ease-in-out infinite alternate)

#### 3. Center Radar Scanning Area
- **Position**: Center of page, occupying the main visual area
- **Core elements**: Circular radar scan ring + rotating scan wedge + glowing blips
- **Radar ring design**:
  - Outer ring: Thick border circle (border: 2px solid #0EA5E9), diameter approximately 300-400px
  - Inner rings: Multiple concentric grid circles (1-3 layers), using semi-transparent lines
  - Scale marks: 12 directional marks (0°, 30°, 60°...330°), with small triangles or short line marks
- **Scan wedge**:
  - Use conic-gradient or SVG path to draw wedge (sector angle approximately 60-90°)
  - Gradient from transparent to cyan (transparent → rgba(6, 182, 212, 0.3))
  - Rotation animation: 6-10 seconds for 360° rotation (transform: rotate, infinite linear)
- **Target blips**:
  - Randomly distribute 3-6 small dots within radar circle (diameter 6-10px)
  - Color: Cyan or green, with pulse scale animation (scale from 1 to 1.3)
  - Optional: Blips with expanding ring effect (sonar wave-like)

#### 4. Right Data Stream Log
- **Width**: Approximately 25-30% of viewport width
- **Display**: Vertically scrolling event log list, newest entries at bottom
- **Each log entry format**:
  - Timestamp (HH:MM:SS, using monospace font, slightly dimmed color)
  - Event text (brief description, e.g., "System initialized", "Connection established")
  - Status icon (✓ success, ! warning, ✗ error)
- **Color coding**:
  - INFO: White or light blue (#CBD5E1)
  - SUCCESS: Green (#10B981)
  - WARNING: Yellow (#F59E0B)
  - ERROR: Red (#EF4444)
- **Auto-append**: Automatically add a new log entry every 3-5 seconds, old logs scroll up and fade out
- **Background**: Dark semi-transparent panel, with inner shadow and blurred border

#### 5. Bottom Control Bar
- **Position**: Fixed at bottom of page, 100% width
- **Button layout**: Horizontally arranged 4-6 function buttons, each containing:
  - Geometric icon (◆ SCAN, ▲ NAV, ● TARGET, ■ COMM)
  - Button label (uppercase English)
- **Button style**:
  - Background: Dark with cyan border (border: 1px solid #0EA5E9)
  - Hover: Background brightens (brightness(1.2)), border glows (box-shadow: 0 0 10px #0EA5E9)
  - Active: Button sinks (translateY(2px)), glow weakens
- **Height**: Approximately 60-70px

### [Color & Material System]

#### 1. Background & Atmosphere
- **Main background**: Dark gradient, simulating deep space or dimly lit command center
  - Recommended values: linear-gradient(135deg, #0a0e1a 0%, #1e293b 50%, #0f172a 100%)
  - Or solid: #0a0e1a, #0f172a
- **Particle background**: Use Canvas to draw 100-200 connected particle dots (simulating starfield or data network)
  - Particle color: Semi-transparent white or cyan (rgba(6, 182, 212, 0.5))
  - Connections: Draw lines when two particles are closer than a threshold
  - Animation: Particles drift slowly, connections dynamically appear and disappear

#### 2. Primary Color
- **Cyan**: #0EA5E9, #06B6D4
  - Usage: Main accent color, scan wedge, high-value progress bars, button borders
  - Glow effect: box-shadow: 0 0 10px #0EA5E9, 0 0 20px rgba(6, 182, 212, 0.5)

#### 3. Status Colors
- **Success/Normal**: #10B981 (emerald green)
  - Usage: High-value progress bars, SUCCESS logs, online status indicator
- **Warning**: #F59E0B (amber)
  - Usage: Mid-value progress bars, WARNING logs
- **Danger/Error**: #EF4444 (red)
  - Usage: Low-value progress bars, ERROR logs, offline status indicator

#### 4. Panels & Cards
- **Panel background**: rgba(15, 23, 42, 0.6) or rgba(10, 14, 26, 0.6)
- **Blur effect**: backdrop-filter: blur(8px)
- **Border**: 1px solid rgba(148, 163, 184, 0.2)
- **Inner shadow**: inset 0 1px 0 0 rgba(255, 255, 255, 0.05)

#### 5. Text & Icons
- **Primary text**: #F1F5F9 (bright white)
- **Secondary text**: #CBD5E1 (light gray)
- **Muted text**: #64748B (dark gray)
- **Fonts**:
  - Titles/values: Orbitron, Rajdhani, Exo 2 (sci-fi monospace fonts)
  - Body: Inter, Roboto (modern sans-serif fonts)
  - Timestamps/code: Fira Code, Source Code Pro (monospace fonts)

### [Light & Shadow Effects]

#### 1. Glow Effects
- **Cyan glow**: Mainly for accent elements (radar, progress bars, buttons)
  - CSS: box-shadow: 0 0 10px #0EA5E9, 0 0 20px rgba(6, 182, 212, 0.3)
  - filter: drop-shadow(0 0 8px #0EA5E9)
- **Pulse glow**: For online indicators, ongoing tasks
  - Animation: Cycling opacity and scale (1.5s ease-in-out infinite alternate)

#### 2. Scanline Animation
- **Horizontal scanlines**: Overlay fine horizontal lines on background or panels
  - Implementation: Use ::before pseudo-element + repeating-linear-gradient
  - Color: rgba(255, 255, 255, 0.02)
  - Animation: Move up and down once every 3-5 seconds (translateY from -100% to 100%)

#### 3. Clipped Corners & Geometric Feel
- **Panel corner clips**: Use clip-path to cut card corners or specific corners
  - Example: clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)
  - Creates futuristic tech, rugged feel

### [Interaction & Animation]

#### 1. Button Interaction
- **Default**: Dark background + cyan border
- **Hover**:
  - Background brightens: filter: brightness(1.3)
  - Border glows: box-shadow: 0 0 10px #0EA5E9
  - Lifts up: transform: translateY(-2px)
  - Transition: 150ms ease-out
- **Active**:
  - Sinks down: transform: translateY(1px)
  - Glow weakens: box-shadow: 0 0 5px #0EA5E9
- **Disabled**:
  - Grayscale: filter: grayscale(1) opacity(0.5)

#### 2. Progress Bar Animation
- **Fill animation**: 0.5-1s ease-out (fill from 0% to target value on page load)
- **Pulse animation**: Light dot at progress bar end, cycles (1.5s infinite)
- **Color transition**: Smooth color transition when value changes (transition: background 0.3s)

#### 3. Radar Scan Animation
- **Rotation speed**: 6-10 seconds for 360° rotation
- **Blip pulse**: Target blip scale animation (1-1.3-1, 2s infinite)
- **Expanding wave**: Ring expanding around blip (opacity 0.8 → 0, scale 1 → 2, 1.5s infinite)

#### 4. Data Stream Scrolling
- **Auto-scroll**: Container automatically scrolls to bottom when new log appears (scrollIntoView)
- **Fade in/out**: New logs fade in (opacity 0 → 1, 300ms), old logs fade out when outside visible area
- **Highlight**: New logs have highlight background for first 1 second (rgba(6, 182, 212, 0.1))

#### 5. Loading Animation
- **Initial load**:
  - Full-screen overlay + rotating logo or progress circle (3 seconds)
  - Overlay fades out after load (opacity 1 → 0, 500ms)
- **Data update**:
  - Local flash effect (updated elements briefly highlight for 200ms)

### [Technical Implementation]

#### 1. HTML Structure
- Use semantic tags: `<header>`, `<main>`, `<aside>`, `<section>`, `<footer>`
- Layout system: CSS Grid or Flexbox (recommend Grid for main layout, Flex for component internals)
- Example structure:
  ```html
  <div class="hud-dashboard">
    <header class="status-bar">...</header>
    <main class="dashboard-grid">
      <aside class="system-panel">...</aside>
      <section class="radar-area">...</section>
      <aside class="log-stream">...</aside>
    </main>
    <footer class="control-bar">...</footer>
  </div>
  ```

#### 2. CSS Styling
- Use Tailwind CSS style utility classes (flex, grid, gap-4, rounded-lg, bg-..., text-...)
- Or use custom classes with CSS variables:
  ```css
  :root {
    --hud-bg: #0a0e1a;
    --hud-primary: #0EA5E9;
    --hud-success: #10B981;
    --hud-warning: #F59E0B;
    --hud-danger: #EF4444;
  }
  ```

#### 3. JavaScript Dynamic Features
- **Real-time clock**: Use `setInterval` to update time display every second
- **Radar scan**: CSS animation or use `requestAnimationFrame` to update SVG transform
- **Particle background**: Canvas API to draw particle network, listen to `mousemove` for interaction (optional)
- **Data stream generation**: Generate random log every 3-5 seconds, push to array and update DOM
- **Progress bar update**: Simulate value fluctuation, randomly increase/decrease 1-5% every 5-10 seconds

#### 4. Responsive Design (Optional)
- **Desktop** (1920x1080): Full layout, three-column arrangement
- **Tablet** (below 1024px): Left and right panels shrink or collapse, radar scales down
- **Mobile** (below 768px): Single-column layout, radar moves to top, control bar becomes fixed bottom navigation

### [Output Requirements]

- **Completeness**: Generate a complete HTML page containing all necessary structure, styles, and scripts
- **Standalone**: Page should open and run properly directly in a browser
- **Style consistency**: Generated page should be visually highly consistent with existing Sci-Fi HUD dashboard, using same colors, fonts, glow effects, and animation rhythm
- **Readability**: Clear code structure, appropriate comments, easy to modify and extend
- **Performance optimization**: Animations use CSS transform and opacity (trigger GPU acceleration), avoid frequent reflow/repaint
