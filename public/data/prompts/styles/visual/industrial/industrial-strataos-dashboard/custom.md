# Custom Prompt - StrataOS Industrial Dashboard

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「StrataOS 工业仪表板」新页面，保持工业控制台的深色、工程化质感，突出仪表读数、运行状态与告警可视化。输出完整 HTML，避免复用现有文案，需一眼看出与现有工业系列同源。

**核心设计要求（保持硬朗、工程感）**

1. **控制台布局与分区**
   - 头部 64px，左侧品牌 + 版本信息，右侧状态灯/时间/紧急按钮。
   - 侧边栏：移动端 80px 仅图标，桌面 256px 图标+文字；使用 1px 边框与扫描高亮。
   - 主区三段：状态条（网格/坐标）、仪表网格（3 列）、告警/资源面板（右列）。
   - 示例：
     ```css
     .console-shell { @apply min-h-screen bg-black text-zinc-200 grid grid-cols-12; }
     .sidebar { @apply col-span-2 bg-zinc-950 border-r border-zinc-800; }
     .main { @apply col-span-10 bg-zinc-950/60 backdrop-blur px-6 py-8; }
     ```

2. **工业配色与状态编码**
   - 背景：#000000 / #0b0d11 / #111827；面板：#18181b。
   - 主强调：amber-600 (#d97706)，警告 red-500 (#ef4444)，成功 emerald-500 (#10b981)，信息 blue-500 (#3b82f6)。
   - 文本：zinc-200/400，边框：zinc-800。
   - 状态灯：pulse 动效，成功绿，警告琥珀，危险红。

3. **工业纹理与网格**
   - 背景叠加 20px 网格：`repeating-linear-gradient` 透明 + rgba(255,255,255,0.03)。
   - 危险条纹：`repeating-linear-gradient(-45deg, #0b0d11 0 10px, #d97706 10px 20px)`。
   - 角落螺丝/刻度：使用 8px 圆点 + 内阴影。

4. **仪表与指标组件**
   - 圆形 SVG 仪表：外圈 stroke #27272a，进度弧用状态色，`stroke-dasharray` 控制。
   - 数字用等宽字体、0.1em 字距；单位小号大写。
   - KPI 卡片：渐变背景 `from-zinc-900 to-zinc-950`，顶部编号条、右上状态点。
   - 进度条条纹：`repeating-linear-gradient(45deg, rgba(0,0,0,0.25) 0 6px, transparent 6px 12px)`。

5. **导航与交互**
   - 按钮：硬边 2px 边框，hover 提升对比度，active 内阴影。
   - 侧边按钮支持扫描高亮：使用 `before` 伪元素滑动。
   - 键帽/紧急按钮：红色边框 + 轻微内凹阴影。

6. **数据与告警模块**
   - 日志/终端：等宽字体，10px 行高，带顶部标签条。
   - 告警卡：红/琥珀描边，左侧危险条纹，右上优先级标记。
   - 表格：无间隙、1px 行分隔，表头大写加粗。

**配色方案（琥珀工业色 + 冷色高光）**
- 背景：#000000 / #0b0d11 / #111827 / #18181b
- 边框：#27272a / #374151
- 主强调：#d97706；警告：#ef4444；成功：#10b981；信息：#3b82f6
- 文本：#e4e4e7 / #a1a1aa / #71717a

**关键 CSS 类示例**

```css
/* 头部与状态灯 */
.console-header { @apply h-16 flex items-center justify-between px-6 bg-zinc-950/90 border-b border-zinc-800 backdrop-blur; }
.status-dot { @apply w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]; }

/* 仪表卡片 */
.gauge-card { @apply relative border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden; }
.gauge-card__header { @apply flex items-center justify-between px-3 py-2 bg-zinc-950 border-b border-zinc-800; }
.gauge-card__grid { background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }

/* 危险条纹与按钮 */
.hazard-strip { background: repeating-linear-gradient(-45deg, #0b0d11 0 10px, #d97706 10px 20px); }
.industrial-btn { @apply px-4 py-2 border-2 border-amber-500 bg-amber-600 text-black font-bold uppercase tracking-widest transition; }
.industrial-btn:active { @apply shadow-inner border-amber-400; }

/* 日志/表格 */
.log-panel { @apply bg-black border border-zinc-800 p-3 font-mono text-[10px] text-emerald-400 space-y-1; }
.industrial-table { @apply w-full border-collapse; }
.industrial-table th { @apply bg-zinc-950 text-zinc-200 uppercase text-xs tracking-[0.12em] border-b-2 border-amber-500 px-3 py-2; }
.industrial-table td { @apply text-zinc-300 border-b border-zinc-800 px-3 py-2; }
```

**间距/字体系统**
- 基础字号 13px；标题全大写，字距 0.08-0.12em。
- 间距：4/8/12/16/24/32px；卡片网格 gap 24px。
- 字体：Sans 使用 Inter/Roboto；数值/标签用等宽 DM Mono。

**重要提示**
- ✅ 深色基底 + 硬朗描边，避免柔和圆角（最大 4px）。
- ✅ 使用单一主强调色（amber-600），其他强调仅用于状态。
- ✅ 所有数字与代码使用等宽字体；标题必须大写。
- ✅ 通过网格纹理与危险条纹强化工业氛围。
- ❌ 避免霓虹色与玻璃态；❌ 避免大面积渐变光晕。
- 输出完整 HTML，保持响应式（md/lg 断点）与高对比度可读性。


---

## English Version (en-US)

Use TailwindCSS to craft a brand-new “StrataOS Industrial Dashboard” page. Keep the dark, engineered console vibe: clear telemetry, alert visibility, and sturdy control surfaces. Deliver a full HTML page (no reused copy), immediately recognizable as part of the same industrial family.

**Core Design Requirements (rugged + engineered)**

1. **Console Layout**
   - 64px header: left brand + version, right status dot/time/emergency button. Header must feel like a control fascia with uppercase product name, firmware string, uptime counter, and a guarded emergency action.
   - Sidebar: 80px icons on mobile, 256px icons+labels on desktop; 1px strokes with scanning hover. Active state uses accent borders and a narrow glow; idle stays monochrome.
   - Main: status strip (grid/coordinates), 3-col gauge grid, right column for alerts/resources. Keep gutters at 24px and avoid floaty spacing; every panel should appear anchored to the chassis.
   - Place hazard content above resource bars on narrow screens so risks stay top-of-mind.

2. **Industrial Color & Status Codes**
   - Base: #000000 / #0b0d11 / #111827; Panels: #18181b; Borders: #27272a.
   - Accent: amber-600 (#d97706); Warning red-500 (#ef4444); Success emerald-500 (#10b981); Info blue-500 (#3b82f6).
   - Text: zinc-200/400; status dots with pulse animation. Avoid pastels and semi-transparent text for primary data.
   - Use one accent family only—no rainbow highlights. State colors appear in small, functional doses (lights, arcs, badges).

3. **Textures & Grids**
   - 20px grid overlay via repeating-linear-gradient with rgba(255,255,255,0.03).
   - Hazard stripes: repeating-linear-gradient(-45deg, #0b0d11 0 10px, #d97706 10px 20px).
   - Corner screws/ticks: 8px circles with inner shadow to simulate mechanical fastening.
   - Keep texture subtle; operators must see data first, texture second.

4. **Gauges & KPI Cards**
   - Circular SVG gauges: outer stroke #27272a, progress arc with state color, stroke-dasharray offset.
   - Monospace numbers with 0.1em tracking; uppercase unit labels; add min/target markers for context.
   - KPI cards: gradient from-zinc-900 to-zinc-950, top code strip, status dot, striped progress bars. Include delta text (e.g., “+2.4% vs last hour”) beside the main number.
   - When values change, animate numeric fade/slide for 120–180ms; no spring/overshoot.

5. **Navigation & Controls**
   - Buttons: hard 2px borders, hover raises contrast, active inner shadow.
   - Sidebar buttons get scanning highlight via sliding pseudo-element; icons stay monochrome unless active.
   - Emergency buttons: red outline + subtle inset shadow; require confirmation or long-press equivalent.
   - Toggle switches use rectangular forms with crisp edges; ON uses accent fill, OFF uses deep neutral.

6. **Data/Alert Modules**
   - Logs/terminal: monospace, 10px line height, top label bar. Include source node prefix and timestamp on each line.
   - Alert cards: red/amber strokes, left hazard stripe, priority badge; show incident code, module, and required action.
   - Tables: dense rows, 1px dividers, uppercase bold headers; freeze header row and align decimals for metrics.
   - Provide ACK/Resolve actions with clear hierarchy; never hide destructive actions behind low-contrast buttons.

**Extended Layout Guidance**
- Build three dominant regions: header (system state), nav rail (mode switching), and canvas (gauges + hazards + resources).
- The status strip should echo “sector / grid / unit” labels in monospace with generous tracking to feel engineered.
- Reserve a “critical lane” in the right column for P1 alerts and emergency procedures; never let it scroll out of view when possible.
- For responsive behavior, collapse the right rail beneath gauges on small screens while preserving the alert-first order.

**Component Behavior & States**
- Gauges must expose normal/warn/critical arcs and a numeric delta. When crossing thresholds, update the badge text and add a subtle ring glow, not a blur.
- Buttons require keyboard focus outlines (amber for primary, blue for secondary). Do not rely solely on color; combine with icon flip or weight change.
- Progress bars should show a subtle diagonal stripe only while “processing”; once steady, remove movement to reduce fatigue.
- Selection in nav uses a narrow highlight band plus uppercase label; avoid pill shapes or round ends.

**Micro-interactions & Motion**
- Motion stays utilitarian: linear/ease-out, 120–200ms. No bounce or elastic curves.
- Status dots pulse at 1.2s; hazard stripes animate only for critical states. Keep glow radii tight to avoid softness.
- Tooltips are optional; primary hints should live inline as short labels. Avoid hover-only guidance for critical flows.

**Accessibility & Readability**
- Maintain WCAG AA contrast; primary text never drops below 4.5:1. Avoid translucent overlays on top of data.
- Keyboard order: header → sidebar → gauges → alerts → tables → logs → footer controls. Provide skip links where needed.
- Screen reader labels for gauges: include value, unit, and state (e.g., “Hydraulic Pressure 55 percent, nominal”).
- Use uppercase sparingly for short identifiers; keep long paragraphs in sentence case to preserve readability.

**Content & Copy Guidance**
- Tone: terse, operational, code-like. Examples: “SYSTEM ONLINE”, “GRID A7”, “SYNC NOW”, “SAFE STOP”.
+- Always include source and time for alerts: “HYD-PUMP-02 // 14:03:22 // Pressure drop detected”.
- Keep CTAs two to three words; avoid marketing language. Prefer “Force Reset”, “Isolate Node”, “Resume Flow”.

**Reliability & Performance**
- Favor CSS textures over heavy canvas; avoid blur on large regions. Keep gradients shallow to maintain contrast.
- Provide skeletons while data loads; show placeholder grids and muted cards rather than blank space.
- Reserve width for numeric strings to prevent layout shift; use monospace for metrics and IDs.
- Ensure idle CPU/GPU cost is low for long shifts; disable non-critical animations after a period of inactivity.

**Color Scheme (Amber Industrial + Cool Accents)**
- Base: #000000 / #0b0d11 / #111827 / #18181b
- Borders: #27272a / #374151
- Accent: #d97706; Warning: #ef4444; Success: #10b981; Info: #3b82f6
- Text: #e4e4e7 / #a1a1aa / #71717a

**Key CSS Class Examples**

```css
.console-header { @apply h-16 flex items-center justify-between px-6 bg-zinc-950/90 border-b border-zinc-800 backdrop-blur; }
.status-dot { @apply w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]; }

.gauge-card { @apply relative border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden; }
.gauge-card__header { @apply flex items-center justify-between px-3 py-2 bg-zinc-950 border-b border-zinc-800; }
.gauge-card__grid { background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }

.hazard-strip { background: repeating-linear-gradient(-45deg, #0b0d11 0 10px, #d97706 10px 20px); }
.industrial-btn { @apply px-4 py-2 border-2 border-amber-500 bg-amber-600 text-black font-bold uppercase tracking-widest transition; }
.industrial-btn:active { @apply shadow-inner border-amber-400; }

.log-panel { @apply bg-black border border-zinc-800 p-3 font-mono text-[10px] text-emerald-400 space-y-1; }
.industrial-table { @apply w-full border-collapse; }
.industrial-table th { @apply bg-zinc-950 text-zinc-200 uppercase text-xs tracking-[0.12em] border-b-2 border-amber-500 px-3 py-2; }
.industrial-table td { @apply text-zinc-300 border-b border-zinc-800 px-3 py-2; }
```

**Spacing & Typography**
- Base font 13px; headings uppercase with 0.08–0.12em tracking.
- Spacing scale 4/8/12/16/24/32px; card grid gap 24px; keep paddings balanced left/right to avoid drift.
- Sans: Inter/Roboto; monospace for numbers/tags; align decimals and suffixes; cap line length to keep scan speed high.

**Important Notes**
- ✅ Dark, hard-edged surfaces; avoid soft glassy looks (max 4px radius).
- ✅ Single primary accent (amber-600); other accents only for state coding.
- ✅ Monospace for numbers; uppercase headings; keep high contrast.
- ✅ Use grid textures + hazard stripes to preserve industrial mood.
- ❌ No neon/iridescent glows; ❌ no overly soft gradients.
- Ship a complete, responsive HTML (md/lg) with strong readability.
