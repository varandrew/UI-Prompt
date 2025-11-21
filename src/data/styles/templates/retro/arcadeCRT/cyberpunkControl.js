// Cyberpunk Control Center Template
// 賽博龐克控制中心模板

import { cyberpunkControlFullPageHTML, cyberpunkControlFullPageStyles } from './cyberpunkControlFullPage.js';

export const cyberpunkControl = {
  id: 'retro-arcadeCRT-cyberpunk-control',
  title: 'styles.retro.arcadeCRT.preview.cyberpunkControl',
  description: 'styles.retro.arcadeCRT.preview.cyberpunkControlDesc',

  // Demo preview (mini version for template card)
  demoHTML: `
    <div style="background: #0a0a0a; padding: 30px; border: 3px solid #ff00ff; border-radius: 12px; box-shadow: 0 0 20px rgba(255,0,255,0.4);">
      <div style="text-align: center; margin-bottom: 20px;">
        <span style="font-size: 20px; font-weight: bold; color: #fff; text-shadow: 2px 0 0 rgba(255,0,255,0.7), -2px 0 0 rgba(0,255,255,0.7);">CYBER CONTROL</span>
      </div>

      <!-- Stats -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 15px;">
        <div style="background: rgba(0,0,0,0.6); border: 2px solid #ff00ff; border-radius: 6px; padding: 12px;">
          <div style="font-size: 10px; color: #888; margin-bottom: 4px;">CPU</div>
          <div style="font-size: 18px; font-weight: bold; color: #ff00ff; text-shadow: 0 0 10px #ff00ff;">78.5%</div>
        </div>
        <div style="background: rgba(0,0,0,0.6); border: 2px solid #00ffff; border-radius: 6px; padding: 12px;">
          <div style="font-size: 10px; color: #888; margin-bottom: 4px;">Memory</div>
          <div style="font-size: 18px; font-weight: bold; color: #00ffff; text-shadow: 0 0 10px #00ffff;">12.4 GB</div>
        </div>
      </div>

      <!-- Form -->
      <div style="background: rgba(0,0,0,0.6); border: 2px solid rgba(0,255,255,0.3); border-radius: 6px; padding: 12px; margin-bottom: 12px;">
        <div style="font-size: 10px; color: #00ffff; margin-bottom: 6px; text-shadow: 0 0 10px #00ffff;">System Name</div>
        <input type="text" value="CYBER-NODE-01" style="width: 100%; background: rgba(0,0,0,0.8); border: 1px solid rgba(0,255,255,0.3); border-radius: 4px; padding: 6px; color: #fff; font-size: 12px;" />
      </div>

      <!-- Buttons -->
      <div style="display: flex; gap: 10px;">
        <button style="flex: 1; background: linear-gradient(135deg, #ff00ff 0%, #cc00cc 100%); border: 2px solid #ff00ff; color: #fff; padding: 8px; border-radius: 6px; font-weight: bold; font-size: 11px; box-shadow: 0 0 15px rgba(255,0,255,0.4);">SAVE</button>
        <button style="flex: 1; background: rgba(0,0,0,0.6); border: 2px solid rgba(255,255,255,0.3); color: #fff; padding: 8px; border-radius: 6px; font-weight: bold; font-size: 11px;">CANCEL</button>
      </div>
    </div>
  `,

  customStyles: ``,

  // Full page preview
  fullPageHTML: cyberpunkControlFullPageHTML,
  fullPageStyles: cyberpunkControlFullPageStyles,

  // Template-level customPrompt
  customPrompt: {
    'zh-CN': `
你现在是一名对「赛博朋克城市 / 数据中枢 / CRT 控制台」极其熟悉的资深 UI 设计师兼前端工程师，需要为一个全新的「Cyberpunk Control Center」页面，编写一段可以直接复制给 LLM 使用的完整生成指令。

你的目标：让 LLM 生成一个与当前样式 /styles/preview/retro-arcadeCRT 中「Cyberpunk Control Center」预览高度一致、但业务场景和文案完全不同的全屏 HTML 页面。生成结果在布局、色彩、光效和交互上，必须一眼就能被识别为 Arcade CRT 家族下的赛博控制中心变体。

【使用场景设定】
- 场景：一座未来赛博城市中的「系统控制中枢」，用于监控城市网络、设备节点、能源分配、安防状态与任务队列。
- 用户：城市运维工程师、网络安全分析师、AI 运维人员，甚至是地下黑客组织的操作手。
- 目标：在同一页面内快速感知系统整体健康状况，查看告警、下发指令、修改配置，并通过 UI 的节奏感与灯光氛围传达“高压但可控”的状态。
- 体验：像在控制一台巨大的主机或塔楼顶端的运营中心，而不是在操作普通的企业后台。

【页面整体结构（必须具备的主要区块）】
1. 顶部系统栏（System HUD）
   - 固定在页面顶部，背景为半透明深色面板，带轻微模糊与内发光边缘。
   - 左侧显示系统 Logo 或代号（例如「NEON-NET CORE」「CYBER OPS NODE」），使用锐利几何或等宽字体，并叠加 RGB 色散 text-shadow。
   - 中间可显示当前环境信息，例如「CITY-NET · REGION: DELTA」「SECURITY LEVEL: HIGH」「ACTIVE NODES: 128」。
   - 右侧为关键信息：时间戳、当前值班人员、系统模式（LIVE / SIMULATION）、一个小型状态灯条（绿色=正常、黄=告警、红=危急）。

2. 主控制面板区（Main Control Grid）
   - 使用多列响应式 grid，将多个「核心仪表卡片」整齐排列在一个大型面板中，看起来像被嵌在同一控制台上。
   - 至少包含以下类型的卡片：
     - 资源监控卡片：CPU / Memory / Network / Storage 等，每张卡片有标题、小标签（利用霓虹色）、主数值（带巨大数字和单位）、一个进度条或环形余量条。
     - 状态概览卡片：例如「ONLINE NODES」「ACTIVE SESSIONS」「FAILED JOBS」「SECURITY INCIDENTS」，主数值下方用小字说明趋势和更新时间。
     - 模式切换卡片：例如「MAINTENANCE MODE」「FIREWALL PROFILE」，包含开关、单选按钮、Tag 标签等交互控件。
   - 卡片背景为极深灰 / 黑色，边框采用霓虹色线条和内阴影；悬停时卡片轻微上浮，边框发光增强。

3. 告警与日志区（Alerts & Activity Stream）
   - 页面一侧（建议右侧）设置一列纵向面板，用于显示最新告警、系统事件和操作日志。
   - 告警条目以颜色区分等级：红色（Critical）、橙色（High）、黄色（Medium）、蓝色（Info），每条包含时间戳、模块名、简短描述。
   - 日志列表可采用类似终端 / 控制台的布局：等宽字体、小字号、颜色区分模块标签，如 [NET] / [AUTH] / [STORAGE] 等。
   - 列表区域背景略亮，顶部固定一个 Filter / Tabs 行，可以切换「All · Alerts · System · Security」等类别。

4. 指令/表单区（Command & Forms）
   - 页面下半部分或左侧，保留一个「指令面板」，包含若干表单元素和操作按钮：
     - 文本输入框（如「Target Node」「Command」），带占位符与标签文案，标签用清晰的系统风格英文，如「TARGET NODE ID」「EXECUTION PAYLOAD」。
     - 下拉选择/多选（例如环境 ENV、优先级 PRIORITY），视觉上采用霓虹描边 + 暗色下拉面板。
     - 开关 / Toggle：用于切换「SAFE MODE」「AUTO-RECOVER」「LOG VERBOSITY」等选项，开关轨道带发光边缘，开启状态使用霓虹亮色。
     - 主操作按钮：例如「EXECUTE」「ARM SEQUENCE」「DISPATCH PATCH」，按钮大而厚重，具有明显的 hover / active 按压反馈。
   - 所有表单控件的视觉语言必须与整体控制台相符：没有默认浅灰边框，而是深底 + 霓虹描边 + 内部渐变 / 微小高光。

5. 数据可视化区（Data Visualization / Timelines）
   - 可在主面板下方或中部添加一块「趋势视图」区域，用折线图 / 条形图 / 时间线展示最近的网络负载、请求流量或错误率。
   - 图表背景保持暗色，并用霓虹线条绘制曲线；Y 轴 / X 轴可使用细线和暗色刻度，避免显得喧宾夺主。
   - 可以加入少量动效，例如沿着折线移动的光点、轻微的扫描光扫过曲线区域，强化“数据流动”的感觉。

【色彩与光效规范】
1. 基础背景
   - 全局背景为接近黑的色值，如 #050509 ~ #0A0A0A，允许融入轻微蓝紫或品红渐变，暗示霓虹城市夜景。
2. 霓虹主色（与 Arcade CRT 一致，但偏向控制台）
   - 霓虹粉：#FF00FF（用于强调性按钮、主标题部分）
   - 霓虹蓝：#00FFFF（用于边框和数据标签）
   - 霓虹绿：#00FF41（用于「在线 / 正常」状态）
   - 霓虹黄：#FFFF00（用于警告 / 临界值接近）
   - 霓虹橙：#FF6600（用于高风险操作 / 高优先级任务）
   - 霓虹红：#FF0040（用于 Critical error / lockdown）
   - 指出：大面积背景仍应保持暗色，霓虹色多用于文字、描边、图标和细节点缀。
3. CRT/赛博效果
   - 在整页或主面板上叠加极细水平扫描线（scanlines），可使用 ::before 伪元素 + repeating-linear-gradient 并加入缓慢位移动画。
   - 文字可使用 RGB 分离 text-shadow、轻微故障感（glitch）动画，但仅用在标题和关键标识上，避免过多闪烁。

【交互与动效】
1. 悬停与按下
   - 卡片 hover：上移 2–4px，边框和顶部高光增强，box-shadow 产生蓝/品红色光晕。
   - 按钮 hover：外轮廓发光增强，背景渐变略微偏移；active 时按钮下压，阴影变小，模拟实体机械按钮。
2. 实时状态与呼吸灯
   - 状态灯（在线/离线/告警）使用小圆点或小矩形，与 soft 呼吸动画结合（透明度在 0.6–1 之间轻微变化）。
   - 某些关键指标可以有缓慢的数字滚动动画，例如 CPU 使用率变化时数字平滑过渡而不是瞬间跳变。
3. 性能与舒适度
   - 所有动画节奏应控制在 150–300ms 的过渡、或 2–6 秒的循环周期；避免高频闪烁和快速抖动。

【输出 HTML / CSS 技術要求】
- 仅输出完整 HTML5 页面（<!DOCTYPE html>、<html>、<head>、<body>），不得包含解释说明文字。
- 使用语义化结构标籤：<header>、<nav>、<main>、<section>、<aside>、<footer> 將上述区塊清晰分段。
- 使用类 TailwindCSS 原子类（例如：flex、grid、gap-4、gap-6、px-6、py-4、rounded-lg、border、bg-...、text-...、shadow-lg 等）描述布局与間距；可搭配少量語義化类名（如 cyber-console、crt-overlay、neon-border、stat-card）。
- 不依赖外部 CDN 字体与图标；如需图标，可使用 emoji 或純文字符號（例如 ● ◆ ■ ▲）。
- 页面必須包含：頂部系統欄、主控制面板 grid、告警/日志側欄、指令/表單区、至少一個数据可視化区，以及底部狀態/版權信息欄，並保持与現有 Cyberpunk Control 範例在氛圍、色彩与佈局密度上的高度一致性。`,
    'en-US': `
You are a senior UI designer and front-end engineer with deep experience in cyberpunk control-room interfaces and CRT-inspired dashboards. Your job is to craft a full, copy‑pasteable instruction for an LLM to generate a brand new “Cyberpunk Control Center” HTML full page.

Goal: the resulting layout must look like a close sibling of the existing Cyberpunk Control Center demo under /styles/preview/retro-arcadeCRT, while using completely different copy and business context. The page should clearly belong to the same Arcade CRT family: dark city background, neon edges, CRT scanlines, dense stat cards and command controls.

[Scenario]
- Setting: a futuristic city-wide operations center that monitors network health, device clusters, energy grids, security incidents and automated jobs.
- Users: operators, SREs, security analysts, AI ops engineers or even underground hackers in a cyberpunk narrative.
- Purpose: provide a single-screen overview of system health, alerts and commands, with a strong sense of tension and control—feeling like a physical control deck, not a generic enterprise admin UI.

[Required Layout Sections]
1. System HUD (Top Bar)
   - Fixed at the top with a dark translucent background and light blur, like a glass overlay.
   - Left: logo or codename (e.g., “NEON-NET CORE”, “CYBER OPS NODE”) using a bold, techno or monospace font with RGB-split glow.
   - Center: environment status such as “REGION: DELTA GRID”, “SECURITY LEVEL: HIGH”, “ACTIVE NODES: 128”.
   - Right: current time, on-duty operator name, mode indicator (LIVE / SIM), plus a small status indicator bar using green/yellow/red lights.

2. Main Control Grid
   - A multi-column grid of “console cards” forming the heart of the page.
   - Include at least:
     - Resource cards: CPU, Memory, Network, Storage with big numeric values, unit labels and progress bars or radial meters.
     - Status overview cards: e.g., ONLINE NODES, ACTIVE SESSIONS, FAILED JOBS, SECURITY INCIDENTS with trend hints and last-update timestamps.
     - Mode / profile cards: switches or radio-style controls for “MAINTENANCE MODE”, “FIREWALL PROFILE”, “AUTO-RECOVERY”, etc.
   - Each card uses a dark background, neon border and subtle inner shadow; on hover they lift slightly and intensify their glow.

3. Alerts & Activity Stream
   - A vertical side panel (preferably on the right) listing real-time alerts and system logs.
   - Alerts: color-coded rows for severity (red/orange/yellow/blue) with timestamp, subsystem tag and a short message.
   - Logs: console-style lines in monospace font, small size, with prefixed tags like [NET], [AUTH], [STORAGE], [AI].
   - Provide tabs or filters (All / Alerts / System / Security) at the top of the panel.

4. Command & Forms Panel
   - A dedicated section for sending commands and editing configuration.
   - Include:
     - Text inputs with labels like “TARGET NODE ID”, “COMMAND PAYLOAD”.
     - Selects and dropdowns for ENV, PRIORITY, REGION, etc.
     - Toggles for flags such as SAFE MODE, AUTO PATCH, LOG VERBOSITY.
     - Primary action buttons (“EXECUTE”, “DISPATCH”, “ARM SEQUENCE”) styled as thick neon blocks with strong hover/active states.
   - All form controls must visually match the console: dark fills, neon outlines, subtle gradients/highlights inside.

5. Data Visualization / Timeline
   - A chart or timeline block showing recent metrics: traffic volume, error rate, or node utilization trends.
   - Use neon lines over a dark grid, with small moving points or a slow sweeping light to suggest live data.

[Color & Effects]
- Global background: near‑black (#050509–#0A0A0A) with faint gradients hinting at distant city lights.
- Neon palette:
  - Neon Magenta: #FF00FF
  - Neon Cyan: #00FFFF
  - Neon Green: #00FF41
  - Neon Yellow: #FFFF00
  - Neon Orange: #FF6600
  - Neon Red: #FF0040
- Use neon colors primarily for text, borders and accent strips, not as large flat backgrounds.
- Describe a CRT scanline overlay (horizontal stripes, low opacity) plus very subtle noise or RGB tinting in main console areas.

[Interaction & Motion]
- Hover:
  - Cards shift up by a few pixels, borders and top accents glow more strongly.
  - Buttons brighten and cast stronger glows; on press they sink slightly and their glow tightens.
- Continuous motion:
  - Status lights use slow “breathing” opacity changes to indicate activity.
  - Key numeric metrics can animate between values smoothly rather than jumping.
- Timing:
  - Transitions around 150–250ms with ease-out or ease-in-out.
  - Long-running animations (scanlines, breathing lights) cycle over several seconds; avoid fast flickering.

[Output Requirements]
- Output a complete HTML5 document only (<!DOCTYPE html>, <html>, <head>, <body>) with no explanations.
- Use semantic tags: <header>, <nav>, <main>, <section>, <aside>, <footer>.
- Express layout and spacing using TailwindCSS-like utilities (flex, grid, gap-6, gap-8, px-6, py-4, rounded-lg, border, shadow-lg, bg-..., text-...) plus a few semantic custom classes like cyber-console, crt-overlay, neon-border, stat-card, alert-list.
- Do not rely on external CDN fonts or icon libraries; use system fonts and simple glyphs/emoji for icons.
- The resulting page must include: a fixed top HUD, a main control grid, an alerts/logs side panel, a command/forms section, at least one data visualization block and a bottom status/footer bar, all clearly matching the mood and density of the existing Cyberpunk Control Center demo.`
  },

  // Template-level stylePrompt
  stylePrompt: {
    'zh-CN': `使用 TailwindCSS 創建賽博龐克控制中心界面，包含完整的表單組件、狀態反饋、数据可視化和實時監控系統。`,
    'en-US': `Create cyberpunk control center interface using TailwindCSS with complete form components, status feedback, data visualization, and real-time monitoring system.`
  }
};

export default cyberpunkControl;
