# Custom Prompt - Home Office Dashboard（居家办公仪表板）

## 中文版本 (zh-CN)

你现在是一名资深 UI 设计师兼前端工程师，精通科幻 HUD（平视显示器）风格界面设计。请生成一个与当前「科幻风格居家办公生产力仪表板」风格高度一致的全新完整 HTML 页面。

你的目标：在不复制现有页面内容的前提下，生成一个「一眼能看出是同一系列」的全新完整 HTML 页面。你需要严格延续当前科幻 HUD 风格的布局逻辑、配色体系、光效质感和动画节奏，只替换数据内容、任务项目和功能模块。

### 【使用场景】

这是一个**科幻风格的个人工作站控制台**，融合科幻 HUD 美学与现代生产力工具，专为远程工作者、程序员、设计师和数字游牧民设计，用于：
- 追踪每周工作效率与时间分配（可视化图表）
- 管理多个项目的里程碑进度与任务优先级
- 监控工作设备的系统资源使用率（CPU、内存、存储空间、网络流量）
- 整理每日任务列表与 TODO 事项，支持优先级标记
- 接收即时通知与系统告警（构建完成、PR 审核、会议提醒）
- 快速执行常用操作（同步、备份、分析、导出数据）

整体氛围应营造出「未来感个人指挥中心」、「极客生产力工作站」、「沉浸式专注空间」的感觉，类似《攻壳机动队》中的操作台、《钢铁侠》的 JARVIS 界面，或《骇客任务》中的数据终端，但更偏向温和的生产力工具而非军事控制台。

### 【整体布局结构】

#### 1. 顶部导航条（Header Navigation）
- **位置**：固定在页面最顶部，宽度 100%
- **左侧**：品牌 Logo 或系统名称（例如「◆ NEXUS OS」、「⬡ QUANTUM WORKSPACE」），使用几何图标 + 大写英文
- **中央**：主导航菜单（Home | Projects | Analytics | Settings），使用等距排列，当前页高亮
- **右侧**：
  - 搜索框（可展开式，focus 时从 icon 展开为输入框）
  - 用户头像或缩写（圆形，带在线状态指示灯）
- **背景**：深色半透明背景（如 rgba(15, 23, 42, 0.9)），带 backdrop-filter 模糊效果
- **高度**：约 60-70px

#### 2. 主内容区（Main Content Grid）
使用 CSS Grid 12 列布局，分为以下几个区域：

##### 2.1 生产力图表区（Productivity Chart - 左上，6 列）
- **内容**：柱状图显示每周工作时数（Mon-Fri）
- **数据点**：
  - 每天一个柱状条，高度对应工作时数（85%-95% 范围的变化）
  - 柱状条使用渐变填充（`bg-gradient-to-t from-cyan-400 to-sky-500`）
  - 鼠标 hover 时显示精确数值（tooltip）
- **标题**：「Weekly Productivity」或「本周效率」，带小图标
- **背景**：深色卡片，带圆角和发光边框

##### 2.2 项目时间轴区（Project Timeline - 右上，6 列）
- **内容**：垂直步骤器显示项目里程碑
- **里程碑列表**：
  1. Project Kickoff ✓（已完成，绿色勾选）
  2. Design Phase ✓（已完成，绿色勾选）
  3. Development Sprint（进行中 65%，带进度条和脉冲动画）
  4. Testing Phase（待进行，灰色）
  5. Launch（待进行，灰色）
- **当前阶段**：带脉冲动画的圆点，颜色为青色
- **连接线**：垂直线连接各个里程碑，已完成部分为实线，未完成为虚线

##### 2.3 系统状态环形图区（System Status - 右侧，4 列，跨 2 行）
- **内容**：3 个 SVG 圆环进度条（CPU、Memory、Storage）
- **设计**：
  - 圆环使用 stroke-dasharray + stroke-dashoffset 动画实现进度
  - 颜色编码：
    - CPU 80%：绿色（#10B981）
    - Memory 70%：黄色（#F59E0B）
    - Storage 50%：青色（#06B6D4）
  - 中心显示百分比数值，使用等宽字体
  - 圆环外带发光效果（filter: drop-shadow）
- **布局**：三个圆环垂直堆叠，间距均匀

##### 2.4 任务列表区（Task List - 左下，8 列）
- **内容**：可勾选的任务列表，每个任务包含：
  - 勾选框（checkbox，圆角正方形）
  - 任务标题（简短描述）
  - 优先级标签（High / Medium / Low，带颜色编码）
- **示例任务**：
  1. ☐ Review PRs for new feature [Low]
  2. ☐ Update documentation [Medium]
  3. ☐ Fix bug #2847 in auth module [High]
  4. ☐ Prepare sprint demo [Medium]
- **交互**：
  - Checked 时文字出现删除线（text-decoration: line-through）
  - Hover 时整行高亮（background: rgba(6, 182, 212, 0.05)）
- **标题**：「Today's Tasks」或「今日任务」

##### 2.5 通知卡片区（Notifications - 右下，4 列）
- **内容**：即时告警列表，显示最近 3-5 条通知
- **每条通知格式**：
  - 状态图标（! 警告、✓ 成功、ⓘ 信息）
  - 简短文本（如「Build #487 completed」、「PR #132 approved」）
  - 时间戳（相对时间，如「2 min ago」）
- **颜色编码**：
  - 成功：绿色背景（rgba(16, 185, 129, 0.1)）
  - 警告：黄色背景（rgba(245, 158, 11, 0.1)）
  - 信息：青色背景（rgba(6, 182, 212, 0.1)）
- **动画**：新通知出现时淡入（fade-in 300ms）

#### 3. 底部快速操作条（Quick Actions Bar）
- **位置**：页面底部或主内容区底部
- **按钮列表**：
  - **SYNC** - 同步数据到云端（⟳ 图标）
  - **BACKUP** - 备份当前工作（💾 图标）
  - **ANALYZE** - 分析生产力数据（📈 图标）
  - **EXPORT** - 导出报告（📤 图标）
- **开关按钮**：
  - **Auto-Save** ✓（toggle 开关，已启用）
  - **Focus Mode**（toggle 开关，未启用）
- **按钮样式**：
  - 背景：深色半透明（rgba(15, 23, 42, 0.8)）
  - 边框：1px solid rgba(6, 182, 212, 0.3)
  - Hover：边框发光 + 背景变亮
  - Active：下沉效果（translateY(2px)）

### 【色彩与材质体系】

#### 1. 背景与大气层
- **主背景**：深色渐变，营造深空或夜间工作环境
  - 推荐色值：linear-gradient(135deg, #0a0e1a 0%, #1e293b 50%, #0f172a 100%)
  - 或纯色：#0f172a、#1e293b
- **背景扫描线**（可选）：
  - 使用 ::before 伪元素叠加水平扫描线
  - 颜色：rgba(255, 255, 255, 0.02)
  - 动画：3 秒上下移动循环

#### 2. 主色调（Primary Color）
- **青色（Cyan）**：#0EA5E9、#06B6D4
  - 用途：主要强调色、图表渐变、按钮边框、环形进度条高值
  - 发光效果：box-shadow: 0 0 10px #0EA5E9, 0 0 20px rgba(6, 182, 212, 0.3)

#### 3. 状态色（Status Colors）
- **成功/正常**：#10B981（翠绿）
  - 用途：已完成任务、成功通知、高进度条（80%-100%）
- **警告**：#F59E0B（琥珀黄）
  - 用途：中优先级任务、警告通知、中进度条（50%-79%）
- **危险/高优先级**：#EF4444（红色）
  - 用途：高优先级任务、错误通知、低进度条（0%-49%）
- **信息**：#06B6D4（青色）
  - 用途：普通通知、信息提示

#### 4. 卡片与面板
- **面板背景**：rgba(15, 23, 42, 0.6) 或 rgba(30, 41, 59, 0.6)
- **模糊效果**：backdrop-filter: blur(10px)
- **边框**：1px solid rgba(148, 163, 184, 0.2)
- **内阴影**：inset 0 1px 0 0 rgba(255, 255, 255, 0.05)
- **圆角**：rounded-xl（12px）或 rounded-2xl（16px）

#### 5. 文字与字体
- **主文字**：#F1F5F9（亮白）
- **次要文字**：#CBD5E1（淡灰）
- **弱化文字**：#64748B（深灰）
- **字体选择**：
  - 标题/数值：Inter、Roboto（现代无衬线字体，weight: 600-700）
  - 正文：Inter、Roboto（weight: 400-500）
  - 时间戳/数据：Fira Code、Source Code Pro（等宽字体）

### 【光影与质感】

#### 1. 发光效果（Glow）
- **卡片发光**：活跃卡片带青色发光边框
  - CSS：box-shadow: 0 0 0 1px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)
- **环形进度条发光**：进度条轨道带内发光
  - filter: drop-shadow(0 0 6px rgba(6, 182, 212, 0.6))
- **按钮 hover 发光**：hover 时边框亮度增强
  - box-shadow: 0 0 15px rgba(6, 182, 212, 0.5)

#### 2. 阴影层次
- **卡片阴影**：
  - 默认：box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
  - Hover：box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2)
- **悬浮效果**：hover 时卡片上浮 2px
  - transform: translateY(-2px)
  - transition: all 200ms ease-out

#### 3. 切角与几何感（Clipped Corners）
- **面板切角**：某些卡片使用 clip-path 切掉右上角
  - 示例：clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)
  - 营造科技感、硬朗的视觉风格

### 【交互与动效】

#### 1. 按钮交互
- **默认状态**：深色背景 + 青色边框
- **Hover**：
  - 背景变亮：filter: brightness(1.2)
  - 边框发光：box-shadow: 0 0 10px #0EA5E9
  - 上浮：transform: translateY(-2px)
  - 过渡时间：150ms ease-out
- **Active**：
  - 下沉：transform: translateY(1px)
  - 发光减弱：box-shadow: 0 0 5px #0EA5E9
- **Toggle 开关**：
  - 开启：背景青色，滑块在右侧
  - 关闭：背景深灰，滑块在左侧
  - 过渡：300ms ease-in-out

#### 2. 图表动画
- **柱状图填充**：
  - 页面加载时从底部向上填充（transform: scaleY(0) → scaleY(1)）
  - 每个柱状条延迟 100ms 依次出现
  - 过渡时间：600ms ease-out
- **环形进度条动画**：
  - 页面加载时从 0% 旋转填充到目标值
  - 使用 stroke-dashoffset 动画
  - 过渡时间：1s ease-out

#### 3. 时间轴动画
- **当前阶段脉冲**：
  - 当前里程碑的圆点带脉冲缩放动画（scale 1 → 1.2 → 1）
  - 动画时长：2s infinite
- **进度条填充**：
  - 当前阶段的进度条从左到右填充
  - 过渡：background-position 300ms ease-in-out

#### 4. 任务勾选动画
- **勾选时**：
  - 勾选框背景变为青色（transition: background 200ms）
  - 文字出现删除线（text-decoration: line-through）
  - 整行淡化（opacity: 0.6）
- **取消勾选**：
  - 背景恢复透明
  - 删除线消失
  - 不透明度恢复到 1

#### 5. 通知淡入动画
- **新通知出现**：
  - 从右侧滑入 + 淡入（translateX(20px) opacity(0) → translateX(0) opacity(1)）
  - 过渡时间：300ms ease-out
- **旧通知移除**：
  - 向上滑出 + 淡出（translateY(0) opacity(1) → translateY(-10px) opacity(0)）
  - 过渡时间：200ms ease-in

#### 6. 载入动画
- **初始载入**：
  - 全屏载入遮罩 + 旋转 Logo（3 秒）
  - 载入完成后遮罩淡出（opacity 1 → 0，500ms）
- **数据更新动画**：
  - 局部闪烁：更新的数据短暂高亮 200ms
  - 颜色：rgba(6, 182, 212, 0.2)

### 【技术实现要求】

#### 1. HTML 结构
- 使用语义化标签：`<header>`、`<main>`、`<section>`、`<aside>`、`<footer>`
- 布局系统：CSS Grid 12 列（主布局）+ Flexbox（组件内部）
- 示例结构：
  ```html
  <div class="hud-workspace">
    <header class="nav-bar">
      <div class="brand">◆ NEXUS OS</div>
      <nav class="main-nav">...</nav>
      <div class="user-area">...</div>
    </header>
    <main class="dashboard-grid">
      <section class="productivity-chart">...</section>
      <section class="project-timeline">...</section>
      <aside class="system-status">...</aside>
      <section class="task-list">...</section>
      <aside class="notifications">...</aside>
    </main>
    <footer class="quick-actions">...</footer>
  </div>
  ```

#### 2. CSS 样式
- 使用 Tailwind CSS 风格的原子类（推荐）：
  - 布局：grid、grid-cols-12、gap-6、flex、items-center
  - 间距：p-4、px-6、py-3、m-2、space-y-4
  - 圆角：rounded-xl、rounded-2xl
  - 背景：bg-slate-900、bg-opacity-60
  - 文字：text-white、text-sm、font-semibold
- 或使用自定义 class 配合 CSS 变量：
  ```css
  :root {
    --hud-bg: #0f172a;
    --hud-primary: #0EA5E9;
    --hud-success: #10B981;
    --hud-warning: #F59E0B;
    --hud-danger: #EF4444;
    --hud-panel: rgba(15, 23, 42, 0.6);
  }
  ```

#### 3. JavaScript 动态功能
- **实时时钟**（可选）：使用 `setInterval` 每秒更新顶部时钟
- **图表数据更新**：
  - 模拟数据波动，每 10 秒随机增减柱状图高度 ±5%
  - 更新时带过渡动画（transition: height 300ms）
- **环形进度条动画**：
  - 使用 JavaScript 计算 stroke-dashoffset
  - 公式：circumference * (1 - percentage / 100)
- **任务勾选**：
  - 监听 checkbox change 事件
  - 切换 completed class，触发 CSS 样式变化
- **通知自动生成**（可选）：
  - 每 10-15 秒随机生成一条新通知
  - 推入通知数组，限制最多显示 5 条

#### 4. SVG 环形进度条实现
```html
<svg width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="50" stroke="rgba(148, 163, 184, 0.2)"
          stroke-width="8" fill="none" />
  <circle cx="60" cy="60" r="50" stroke="#0EA5E9"
          stroke-width="8" fill="none"
          stroke-dasharray="314.16"
          stroke-dashoffset="94.25"
          transform="rotate(-90 60 60)" />
  <text x="60" y="65" text-anchor="middle"
        font-size="20" fill="#F1F5F9">80%</text>
</svg>
```
- stroke-dasharray = 2 * π * radius
- stroke-dashoffset = circumference * (1 - percentage / 100)

#### 5. 响应式设计（可选）
- **桌面端**（1920x1080）：完整 12 列布局
- **笔记本**（1440px）：保持 12 列，卡片略微紧凑
- **平板端**（1024px 以下）：
  - 改为 6 列布局
  - 系统状态面板移至底部
  - 图表和时间轴堆叠排列
- **移动端**（768px 以下）：
  - 单列布局
  - 导航变为汉堡菜单
  - 快速操作条变为底部固定导航

### 【输出要求】

- **完整性**：生成一个完整的 HTML 页面，包含所有必要的结构、样式和脚本
- **独立运行**：页面应该能够在浏览器中直接打开并正常显示和运行
- **风格一致性**：生成的页面在视觉上应该与现有的科幻 HUD 居家办公仪表板高度一致，使用相同的配色、字体、光效和动画节奏
- **可读性**：代码结构清晰，适当注释，方便后续修改和扩展
- **性能优化**：
  - 动画使用 CSS transform 和 opacity（触发 GPU 加速）
  - 避免频繁重排重绘
  - SVG 使用 transform 而非直接操作 DOM
- **可用性**：
  - 所有交互元素带 hover 和 active 状态
  - 任务勾选框支持键盘操作（空格键切换）
  - 搜索框支持 Esc 键关闭

---

## English Version (en-US)

You are now a senior UI designer and front-end engineer who specializes in Sci-Fi HUD (Heads-Up Display) interface design. Please generate a brand new, complete HTML page that is highly consistent with the current "Sci-Fi Style Home Office Productivity Dashboard" style.

Your goal: Without copying the existing page content verbatim, create a new full-page interface that clearly belongs to the same design family. You must strictly follow the layout logic, color palette, glow effects, and animation rhythm of the current Sci-Fi HUD style, while changing the data content, task items, and functional modules.

### [Scenario]

This is a **sci-fi style personal workstation console** that blends Sci-Fi HUD aesthetics with modern productivity tools, designed for remote workers, programmers, designers, and digital nomads, used for:
- Tracking weekly work efficiency and time allocation (visualized charts)
- Managing multiple project milestones, progress, and task priorities
- Monitoring work device system resource usage (CPU, memory, storage, network traffic)
- Organizing daily task lists and TODO items with priority marking
- Receiving real-time notifications and system alerts (build completed, PR review, meeting reminders)
- Quick execution of common operations (sync, backup, analyze, export data)

The overall atmosphere should evoke a "futuristic personal command center," "geek productivity workstation," and "immersive focus space," similar to the operation consoles in *Ghost in the Shell*, the JARVIS interface in *Iron Man*, or the data terminals in *The Matrix*, but more oriented towards gentle productivity tools rather than military control consoles.

### [Overall Layout Structure]

#### 1. Header Navigation
- **Position**: Fixed at the very top of the page, 100% width
- **Left**: Brand logo or system name (e.g., "◆ NEXUS OS", "⬡ QUANTUM WORKSPACE"), using geometric icons + uppercase English
- **Center**: Main navigation menu (Home | Projects | Analytics | Settings), evenly spaced, current page highlighted
- **Right**:
  - Search box (expandable, expands from icon to input on focus)
  - User avatar or initials (circular, with online status indicator)
- **Background**: Dark semi-transparent background (e.g., rgba(15, 23, 42, 0.9)), with backdrop-filter blur
- **Height**: Approximately 60-70px

#### 2. Main Content Grid
Using CSS Grid 12-column layout, divided into the following areas:

##### 2.1 Productivity Chart Area (Top Left, 6 columns)
- **Content**: Bar chart showing weekly work hours (Mon-Fri)
- **Data points**:
  - One bar per day, height corresponds to work hours (85%-95% range variation)
  - Bars use gradient fill (`bg-gradient-to-t from-cyan-400 to-sky-500`)
  - Show exact value on hover (tooltip)
- **Title**: "Weekly Productivity" or similar, with small icon
- **Background**: Dark card with rounded corners and glowing border

##### 2.2 Project Timeline Area (Top Right, 6 columns)
- **Content**: Vertical stepper showing project milestones
- **Milestone list**:
  1. Project Kickoff ✓ (completed, green checkmark)
  2. Design Phase ✓ (completed, green checkmark)
  3. Development Sprint (in progress 65%, with progress bar and pulse animation)
  4. Testing Phase (pending, gray)
  5. Launch (pending, gray)
- **Current phase**: Pulsing dot in cyan color
- **Connection lines**: Vertical lines connecting milestones, solid for completed, dashed for pending

##### 2.3 System Status Ring Area (Right Side, 4 columns, spans 2 rows)
- **Content**: 3 SVG circular progress rings (CPU, Memory, Storage)
- **Design**:
  - Rings use stroke-dasharray + stroke-dashoffset animation for progress
  - Color coding:
    - CPU 80%: Green (#10B981)
    - Memory 70%: Yellow (#F59E0B)
    - Storage 50%: Cyan (#06B6D4)
  - Center displays percentage value in monospace font
  - Rings have outer glow (filter: drop-shadow)
- **Layout**: Three rings vertically stacked with even spacing

##### 2.4 Task List Area (Bottom Left, 8 columns)
- **Content**: Checkable task list, each task contains:
  - Checkbox (rounded square)
  - Task title (brief description)
  - Priority label (High / Medium / Low, color-coded)
- **Example tasks**:
  1. ☐ Review PRs for new feature [Low]
  2. ☐ Update documentation [Medium]
  3. ☐ Fix bug #2847 in auth module [High]
  4. ☐ Prepare sprint demo [Medium]
- **Interaction**:
  - Checked text gets strikethrough (text-decoration: line-through)
  - Hover highlights entire row (background: rgba(6, 182, 212, 0.05))
- **Title**: "Today's Tasks" or similar

##### 2.5 Notification Cards Area (Bottom Right, 4 columns)
- **Content**: Real-time alert list showing latest 3-5 notifications
- **Each notification format**:
  - Status icon (! warning, ✓ success, ⓘ info)
  - Brief text (e.g., "Build #487 completed", "PR #132 approved")
  - Timestamp (relative time, e.g., "2 min ago")
- **Color coding**:
  - Success: Green background (rgba(16, 185, 129, 0.1))
  - Warning: Yellow background (rgba(245, 158, 11, 0.1))
  - Info: Cyan background (rgba(6, 182, 212, 0.1))
- **Animation**: New notifications fade in (fade-in 300ms)

#### 3. Quick Actions Bar (Bottom)
- **Position**: Bottom of page or main content area
- **Button list**:
  - **SYNC** - Sync data to cloud (⟳ icon)
  - **BACKUP** - Backup current work (💾 icon)
  - **ANALYZE** - Analyze productivity data (📈 icon)
  - **EXPORT** - Export report (📤 icon)
- **Toggle switches**:
  - **Auto-Save** ✓ (toggle switch, enabled)
  - **Focus Mode** (toggle switch, disabled)
- **Button style**:
  - Background: Dark semi-transparent (rgba(15, 23, 42, 0.8))
  - Border: 1px solid rgba(6, 182, 212, 0.3)
  - Hover: Border glows + background brightens
  - Active: Sink effect (translateY(2px))

### [Color & Material System]

#### 1. Background & Atmosphere
- **Main background**: Dark gradient creating deep space or nighttime work environment
  - Recommended values: linear-gradient(135deg, #0a0e1a 0%, #1e293b 50%, #0f172a 100%)
  - Or solid: #0f172a, #1e293b
- **Background scanlines** (optional):
  - Use ::before pseudo-element to overlay horizontal scanlines
  - Color: rgba(255, 255, 255, 0.02)
  - Animation: 3-second up-and-down loop

#### 2. Primary Color
- **Cyan**: #0EA5E9, #06B6D4
  - Usage: Main accent color, chart gradients, button borders, high-value ring progress
  - Glow effect: box-shadow: 0 0 10px #0EA5E9, 0 0 20px rgba(6, 182, 212, 0.3)

#### 3. Status Colors
- **Success/Normal**: #10B981 (emerald green)
  - Usage: Completed tasks, success notifications, high progress (80%-100%)
- **Warning**: #F59E0B (amber)
  - Usage: Medium priority tasks, warning notifications, mid progress (50%-79%)
- **Danger/High Priority**: #EF4444 (red)
  - Usage: High priority tasks, error notifications, low progress (0%-49%)
- **Info**: #06B6D4 (cyan)
  - Usage: Normal notifications, info tips

#### 4. Cards & Panels
- **Panel background**: rgba(15, 23, 42, 0.6) or rgba(30, 41, 59, 0.6)
- **Blur effect**: backdrop-filter: blur(10px)
- **Border**: 1px solid rgba(148, 163, 184, 0.2)
- **Inner shadow**: inset 0 1px 0 0 rgba(255, 255, 255, 0.05)
- **Border radius**: rounded-xl (12px) or rounded-2xl (16px)

#### 5. Text & Typography
- **Primary text**: #F1F5F9 (bright white)
- **Secondary text**: #CBD5E1 (light gray)
- **Muted text**: #64748B (dark gray)
- **Font selection**:
  - Titles/values: Inter, Roboto (modern sans-serif, weight: 600-700)
  - Body: Inter, Roboto (weight: 400-500)
  - Timestamps/data: Fira Code, Source Code Pro (monospace)

### [Light & Shadow Effects]

#### 1. Glow Effects
- **Card glow**: Active cards have cyan glowing border
  - CSS: box-shadow: 0 0 0 1px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)
- **Ring progress glow**: Progress ring track has inner glow
  - filter: drop-shadow(0 0 6px rgba(6, 182, 212, 0.6))
- **Button hover glow**: Border brightness increases on hover
  - box-shadow: 0 0 15px rgba(6, 182, 212, 0.5)

#### 2. Shadow Layers
- **Card shadow**:
  - Default: box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
  - Hover: box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2)
- **Float effect**: Card lifts 2px on hover
  - transform: translateY(-2px)
  - transition: all 200ms ease-out

#### 3. Clipped Corners & Geometric Feel
- **Panel corner clips**: Some cards use clip-path to cut top-right corner
  - Example: clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)
  - Creates tech-forward, rugged visual style

### [Interaction & Animation]

#### 1. Button Interaction
- **Default**: Dark background + cyan border
- **Hover**:
  - Background brightens: filter: brightness(1.2)
  - Border glows: box-shadow: 0 0 10px #0EA5E9
  - Lifts up: transform: translateY(-2px)
  - Transition: 150ms ease-out
- **Active**:
  - Sinks down: transform: translateY(1px)
  - Glow weakens: box-shadow: 0 0 5px #0EA5E9
- **Toggle switch**:
  - Enabled: Cyan background, slider on right
  - Disabled: Dark gray background, slider on left
  - Transition: 300ms ease-in-out

#### 2. Chart Animation
- **Bar chart fill**:
  - On page load, fill from bottom to top (transform: scaleY(0) → scaleY(1))
  - Each bar appears with 100ms stagger delay
  - Transition: 600ms ease-out
- **Ring progress animation**:
  - On page load, rotate fill from 0% to target value
  - Use stroke-dashoffset animation
  - Transition: 1s ease-out

#### 3. Timeline Animation
- **Current phase pulse**:
  - Current milestone dot has pulse scale animation (scale 1 → 1.2 → 1)
  - Duration: 2s infinite
- **Progress bar fill**:
  - Current phase progress bar fills left to right
  - Transition: background-position 300ms ease-in-out

#### 4. Task Check Animation
- **On check**:
  - Checkbox background turns cyan (transition: background 200ms)
  - Text gets strikethrough (text-decoration: line-through)
  - Entire row fades (opacity: 0.6)
- **On uncheck**:
  - Background returns to transparent
  - Strikethrough disappears
  - Opacity returns to 1

#### 5. Notification Fade-in Animation
- **New notification appears**:
  - Slide in from right + fade in (translateX(20px) opacity(0) → translateX(0) opacity(1))
  - Transition: 300ms ease-out
- **Old notification removal**:
  - Slide up + fade out (translateY(0) opacity(1) → translateY(-10px) opacity(0))
  - Transition: 200ms ease-in

#### 6. Loading Animation
- **Initial load**:
  - Full-screen loading overlay + rotating logo (3 seconds)
  - Overlay fades out after load (opacity 1 → 0, 500ms)
- **Data update animation**:
  - Local flash: Updated data briefly highlights for 200ms
  - Color: rgba(6, 182, 212, 0.2)

### [Technical Implementation]

#### 1. HTML Structure
- Use semantic tags: `<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`
- Layout system: CSS Grid 12-column (main layout) + Flexbox (component internals)
- Example structure:
  ```html
  <div class="hud-workspace">
    <header class="nav-bar">
      <div class="brand">◆ NEXUS OS</div>
      <nav class="main-nav">...</nav>
      <div class="user-area">...</div>
    </header>
    <main class="dashboard-grid">
      <section class="productivity-chart">...</section>
      <section class="project-timeline">...</section>
      <aside class="system-status">...</aside>
      <section class="task-list">...</section>
      <aside class="notifications">...</aside>
    </main>
    <footer class="quick-actions">...</footer>
  </div>
  ```

#### 2. CSS Styling
- Use Tailwind CSS style utility classes (recommended):
  - Layout: grid, grid-cols-12, gap-6, flex, items-center
  - Spacing: p-4, px-6, py-3, m-2, space-y-4
  - Border radius: rounded-xl, rounded-2xl
  - Background: bg-slate-900, bg-opacity-60
  - Text: text-white, text-sm, font-semibold
- Or use custom classes with CSS variables:
  ```css
  :root {
    --hud-bg: #0f172a;
    --hud-primary: #0EA5E9;
    --hud-success: #10B981;
    --hud-warning: #F59E0B;
    --hud-danger: #EF4444;
    --hud-panel: rgba(15, 23, 42, 0.6);
  }
  ```

#### 3. JavaScript Dynamic Features
- **Real-time clock** (optional): Use `setInterval` to update top clock every second
- **Chart data updates**:
  - Simulate data fluctuation, randomly increase/decrease bar height ±5% every 10 seconds
  - Update with transition animation (transition: height 300ms)
- **Ring progress animation**:
  - Use JavaScript to calculate stroke-dashoffset
  - Formula: circumference * (1 - percentage / 100)
- **Task checking**:
  - Listen to checkbox change event
  - Toggle completed class, trigger CSS style changes
- **Notification auto-generation** (optional):
  - Generate random new notification every 10-15 seconds
  - Push to notification array, limit to max 5 displayed

#### 4. SVG Ring Progress Implementation
```html
<svg width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="50" stroke="rgba(148, 163, 184, 0.2)"
          stroke-width="8" fill="none" />
  <circle cx="60" cy="60" r="50" stroke="#0EA5E9"
          stroke-width="8" fill="none"
          stroke-dasharray="314.16"
          stroke-dashoffset="94.25"
          transform="rotate(-90 60 60)" />
  <text x="60" y="65" text-anchor="middle"
        font-size="20" fill="#F1F5F9">80%</text>
</svg>
```
- stroke-dasharray = 2 * π * radius
- stroke-dashoffset = circumference * (1 - percentage / 100)

#### 5. Responsive Design (Optional)
- **Desktop** (1920x1080): Full 12-column layout
- **Laptop** (1440px): Keep 12 columns, slightly more compact cards
- **Tablet** (below 1024px):
  - Change to 6-column layout
  - System status panel moves to bottom
  - Charts and timeline stack vertically
- **Mobile** (below 768px):
  - Single-column layout
  - Navigation becomes hamburger menu
  - Quick actions bar becomes fixed bottom navigation

### [Output Requirements]

- **Completeness**: Generate a complete HTML page containing all necessary structure, styles, and scripts
- **Standalone**: Page should open and run properly directly in a browser
- **Style consistency**: Generated page should be visually highly consistent with existing Sci-Fi HUD home office dashboard, using same colors, fonts, glow effects, and animation rhythm
- **Readability**: Clear code structure, appropriate comments, easy to modify and extend
- **Performance optimization**:
  - Animations use CSS transform and opacity (trigger GPU acceleration)
  - Avoid frequent reflow/repaint
  - SVG uses transform rather than direct DOM manipulation
- **Usability**:
  - All interactive elements have hover and active states
  - Task checkboxes support keyboard operation (space key toggle)
  - Search box supports Esc key to close
