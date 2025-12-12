# Custom Prompt - Nexus Control Center

## 中文版本 (zh-CN)

请使用 TailwindCSS 设计全新的「Nexus 控制中心」页面，保持工业控制台的硬朗质感，聚焦实时指令、状态监测与风险管控。不要复用现有文案，需与工业系列同源但面向“指挥/调度”场景。

**核心设计要求（指挥调度导向）**

1. **版式与信息分区**
   - 头部 64px：左侧品牌 + 运行模式标签（ACTIVE / STANDBY），右侧同步时间与安全状态徽章。
   - 左主列：指令队列、任务面板、机器人/设备卡片。
   - 右侧固定列：全局风险面板、紧急控制、消息流。
   - 示例：
     ```css
     .layout { @apply grid grid-cols-12 gap-6 min-h-screen bg-black text-zinc-200; }
     .col-main { @apply col-span-12 lg:col-span-8 space-y-6; }
     .col-aside { @apply col-span-12 lg:col-span-4 space-y-6; }
     ```

2. **工业配色与状态映射**
   - 基底：#0b0d11 / #111827 / #18181b；边框：#1f2937/#27303f。
   - 主强调：cyan-400 (#22d3ee) 用于操作按钮、关键数据；警告 amber-500 (#f59e0b)；危险 red-500 (#ef4444)。
   - 文本：zinc-200/400/500；表头与编号使用等宽字体。

3. **指令队列与操作条**
   - 队列行：左侧任务 ID，右侧状态点 + 动作按钮（执行/取消）。
   - 激活行突出描边：`border-l-4 border-cyan-400`；悬停提升背景对比。
   - 命令标签使用等宽 + 大写：`font-mono tracking-[0.12em]`.

4. **风险与告警卡片**
   - 危险条纹侧边 + 上部标题条，右上角显示优先级（P1/P2/P3）。
   - 配色：P1 红、P2 琥珀、P3 蓝；背景保持深色不可透明。
   - 底部加入“ACK”按钮与时间戳。

5. **地图/态势组件**
   - 背景网格：20px，叠加准星（4px 线段）与节点点位。
   - 信息浮层使用硬边框 + 投影：`shadow-[0_8px_24px_rgba(0,0,0,0.45)]`。
   - 角标显示区块/机台编号，等宽字体。

6. **控制按钮与操作面板**
   - 主操作按钮：cyan 渐变 + 2px 边框；危险按钮使用红色描边 + 内阴影。
   - 切换/分组控制：`toggle` 采用硬边矩形，选中态填充强调色并显示 `ON/OFF` 标签。
   - 进度/能量条：叠加斜向条纹，颜色根据状态切换。

**配色方案（冷色主控 + 琥珀警戒）**
- 背景：#0b0d11 / #111827 / #18181b
- 边框：#1f2937 / #27303f
- 主强调：#22d3ee；辅助蓝：#38bdf8；警告：#f59e0b；危险：#ef4444
- 文本：#e5e7eb / #a1a1aa / #71717a

**关键 CSS 类示例**

```css
/* 头部与状态徽章 */
.header { @apply h-16 flex items-center justify-between px-6 bg-zinc-950/90 border-b border-zinc-800 backdrop-blur; }
.badge-active { @apply px-2 py-1 bg-emerald-600 text-black text-xs font-mono uppercase tracking-[0.16em]; }
.badge-standby { @apply px-2 py-1 border border-amber-500 text-amber-400 text-xs font-mono uppercase tracking-[0.16em]; }

/* 指令队列 */
.command-row { @apply flex items-center justify-between px-4 py-3 border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 transition; }
.command-row.is-active { @apply border-l-4 border-cyan-400 shadow-[0_8px_18px_rgba(0,0,0,0.35)]; }
.command-id { @apply text-[11px] font-mono uppercase tracking-[0.14em] text-cyan-300; }

/* 风险卡片 */
.risk-card { @apply relative border border-zinc-800 bg-zinc-950 overflow-hidden; }
.risk-card::before { content:''; @apply absolute inset-y-0 left-0 w-2; background: repeating-linear-gradient(-45deg,#0b0d11 0 8px,#f59e0b 8px 16px); }
.risk-title { @apply pl-4 pr-3 py-3 flex items-center justify-between text-sm font-bold uppercase tracking-[0.1em] border-b border-zinc-800; }
.risk-meta { @apply text-[10px] font-mono text-zinc-500 flex items-center gap-2 px-4 pb-3; }

/* 控制按钮 */
.btn-primary { @apply px-4 py-2 bg-cyan-400 text-black font-bold uppercase tracking-[0.14em] border-2 border-cyan-300 transition; }
.btn-primary:hover { @apply bg-cyan-300; }
.btn-danger { @apply px-4 py-2 border-2 border-red-500 text-red-400 uppercase tracking-[0.14em] font-bold bg-red-500/10; }
.btn-danger:active { @apply shadow-inner; }

/* 地图/态势 */
.map-shell { @apply relative overflow-hidden border border-zinc-800 bg-zinc-950; }
.map-grid { background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }
.map-node { @apply w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]; }
```

**间距/排版**
- 基础字号 13px；标题大写，字距 0.08–0.14em。
- 间距 6/12/18/24px；卡片网格 gap 20–24px。
- 字体：Inter/Roboto；等宽 DM Mono 用于 ID、数值、徽章。

**重要提示**
- ✅ 维持硬边 + 清晰描边，避免玻璃/柔光效果。
- ✅ 单一冷色强调（cyan），警示用 amber/red，避免多色混用。
- ✅ 指令/风险信息使用等宽+大写，突出可读性与设备感。
- ✅ 保持高对比、低透明度；网格/条纹不可喧宾夺主。
- ❌ 不要使用圆角 >4px、霓虹渐变或毛玻璃；❌ 不要加入多余插画。
- 输出完整 HTML，响应式（md/lg），确保暗色模式对比充足。

---

## English Version (en-US)

Design a fresh “Nexus Control Center” page in TailwindCSS. Keep the rugged industrial console feel while focusing on command dispatch, monitoring, and risk control. No reused copy; it must feel like the same family but optimized for command-and-control scenarios.

**Core Requirements (command-focused)**

1. **Layout & Sections**
   - 64px header: brand + mode badge (ACTIVE/STANDBY), right-side time + security state. Treat it like a command fascia with uppercase identifiers and mode tokens.
   - Left column: command queue, task board, robot/device cards. Keep the queue at the top to prioritize issuing orders.
   - Right column: global risk panel, emergency controls, message feed. This column is the “safety lane” and should stay visible whenever possible.
   - On small screens, stack columns but preserve the order: header → risk → commands → devices → messages.

2. **Color & Status Mapping**
   - Base: #0b0d11 / #111827 / #18181b; Borders: #1f2937/#27303f.
   - Primary accent cyan-400 (#22d3ee); Warning amber-500 (#f59e0b); Danger red-500 (#ef4444).
   - Text: zinc-200/400/500; monospace for IDs and headers. Only use accent for active/critical data, never for decoration.
   - Maintain a clear severity ladder: info (blue), warn (amber), danger (red). Avoid mixing them in the same control cluster.

3. **Command Queue & Actions**
   - Rows with left ID, right status dot + action buttons (exec/cancel). Show planned start time and dependencies inline.
   - Active row: `border-l-4 border-cyan-400`, stronger shadow on hover; include mini progress and last update timestamp.
   - IDs in monospace uppercase, tracking 0.14em. Use concise verbs: EXEC, HOLD, ROLL, ABORT.
   - Add confirmation for destructive actions; support keyboard shortcuts and focus rings.

4. **Risk/Alert Cards**
   - Left hazard stripe + top title bar; priority badge (P1/P2/P3) on the right.
   - P1 red, P2 amber, P3 blue; solid dark backgrounds.
    - Footer with ACK button + timestamp; include next step hint like “Isolate node” or “Switch to standby”.
    - Provide state transitions: OPEN → ACKED → RESOLVED, with badges and time deltas.

5. **Map/Situational Panel**
   - 20px grid overlay with crosshair markers and glowing cyan nodes.
   - Info overlays with hard borders and deep shadow.
   - Corner labels for zone/equipment IDs in monospace.
   - Place a coordinate readout (e.g., X/Y or lat/long) and a compass marker to keep spatial awareness.

6. **Controls**
   - Primary buttons: cyan gradient + 2px border; danger buttons red outline + inset shadow; add loading stripes when sending.
   - Toggles: hard-edged rectangles; selected state filled with accent color and ON/OFF tag; disabled state uses muted zinc with 60% opacity.
   - Progress/energy bars with angled stripes; color switches by state. Add textual percentages to avoid color-only signaling.

**Extended Layout & Flow**
- Command-first reading order: queue → active task detail → devices → messages. Risk lane runs in parallel.
- Keep right rail sticky when space allows; on mobile, provide a “jump to hazard” link.
- Use a slim top sub-bar inside the main canvas to display “Command Channel / Encryption / Sync status” in monospace.
- Provide breadcrumbs for system scope (Plant → Line → Cell → Machine) using uppercase and separators like “//”.

**Statefulness & Feedback**
- Commands need pending/sent/ack/failed states with clear text labels; include retry guidance.
- Display last sync time and drift; color it amber/red when stale.
- Device cards show connection quality with tiny LEDs and a short descriptor (ONLINE / DEGRADED / OFFLINE).
- For emergency controls, require a two-step action (arm then execute) to reduce mistakes.

**Micro-interactions & Motion**
- Keep motion utilitarian: 120–200ms linear/ease-out. No bouncy curves.
- Queue insertions slide down quickly; removals fade/slide up. Hazard badges can pulse slowly when P1.
- Avoid continuous animation on the map; allow subtle glow on active nodes only.

**Accessibility & Readability**
- Maintain WCAG AA contrast; text should never drop below 4.5:1. Avoid translucent text on dark backgrounds.
- Keyboard order: header → risk rail → command queue → task detail → devices → messages → footer controls.
- Screen reader labels must include severity and next action (e.g., “P1 Fire Sensor Trip, ACK required”).
- Do not rely on color only; combine with icons, text, and weight changes.

**Content & Copy Tone**
- Operational, concise, hardware-like. Prefer verbs and codes: “EXECUTE”, “ABORT”, “ISOLATE NODE”.
- Mode badges: ACTIVE, STANDBY, LOCKDOWN. Avoid marketing terms.
- Include origin and time on alerts: “LINE-04 // 14:23:10 // Conveyor torque high”.
- Keep CTAs 2–3 words; avoid filler adjectives.

**Reliability & Performance**
- Avoid expensive filters; prefer solid fills, gradients, and simple textures. No glass blur.
- Provide skeleton states for queue, risk, and map while loading; keep layout from shifting by reserving heights.
- Cap animation to reduce GPU strain; stop non-essential pulses after inactivity.
- Keep numeric widths stable using monospace; avoid layout jump when numbers change.

**Palette (Cool Command + Amber Guard)**
- Base: #0b0d11 / #111827 / #18181b
- Borders: #1f2937 / #27303f
- Accent: #22d3ee; Assist blue: #38bdf8; Warning: #f59e0b; Danger: #ef4444
- Text: #e5e7eb / #a1a1aa / #71717a

**Key CSS Examples**

```css
.header { @apply h-16 flex items-center justify-between px-6 bg-zinc-950/90 border-b border-zinc-800 backdrop-blur; }
.badge-active { @apply px-2 py-1 bg-emerald-600 text-black text-xs font-mono uppercase tracking-[0.16em]; }
.badge-standby { @apply px-2 py-1 border border-amber-500 text-amber-400 text-xs font-mono uppercase tracking-[0.16em]; }

.command-row { @apply flex items-center justify-between px-4 py-3 border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 transition; }
.command-row.is-active { @apply border-l-4 border-cyan-400 shadow-[0_8px_18px_rgba(0,0,0,0.35)]; }
.command-id { @apply text-[11px] font-mono uppercase tracking-[0.14em] text-cyan-300; }

.risk-card { @apply relative border border-zinc-800 bg-zinc-950 overflow-hidden; }
.risk-card::before { content:''; @apply absolute inset-y-0 left-0 w-2; background: repeating-linear-gradient(-45deg,#0b0d11 0 8px,#f59e0b 8px 16px); }
.risk-title { @apply pl-4 pr-3 py-3 flex items-center justify-between text-sm font-bold uppercase tracking-[0.1em] border-b border-zinc-800; }
.risk-meta { @apply text-[10px] font-mono text-zinc-500 flex items-center gap-2 px-4 pb-3; }

.btn-primary { @apply px-4 py-2 bg-cyan-400 text-black font-bold uppercase tracking-[0.14em] border-2 border-cyan-300 transition; }
.btn-primary:hover { @apply bg-cyan-300; }
.btn-danger { @apply px-4 py-2 border-2 border-red-500 text-red-400 uppercase tracking-[0.14em] font-bold bg-red-500/10; }
.btn-danger:active { @apply shadow-inner; }

.map-shell { @apply relative overflow-hidden border border-zinc-800 bg-zinc-950; }
.map-grid { background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }
.map-node { @apply w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]; }
```

**Spacing & Typography**
- Base font 13px; uppercase headings with 0.08–0.14em tracking.
- Spacing 6/12/18/24px; grid gaps 20–24px; keep consistent paddings on list items and hazard cards.
- Fonts: Inter/Roboto; DM Mono for IDs, numbers, badges. Align decimals and keep IDs uppercase for quick scan.

**Important Notes**
- ✅ Hard edges, crisp borders; avoid glassy/soft looks.
- ✅ Single cool accent (cyan); amber/red strictly for warnings/danger.
- ✅ IDs and alerts in monospace uppercase for legibility.
- ✅ Keep contrast high; textures/stripes are subtle.
- ❌ No large radii (>4px), no neon gradients, no frosted glass; ❌ no decorative illustrations.
- Deliver a complete, responsive HTML (md/lg) with strong dark-mode readability.
