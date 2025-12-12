# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个「Liquid Flow Home Office」风格的界面，以“深海流体 + 居家办公仪表盘”为核心理念，输出可直接复制运行的 HTML 与 CSS 片段，保持与 /styles/preview/visual-liquid-visual-nature-liquid-flow-home-office 预览一致的多层背景与玻璃态卡片。

**核心设计要求**

1. **多层液体背景（5-8 层）**
   - 深层/中层/表层 blob：使用 `.ocean-blob-deep` / `.ocean-blob-mid` / `.ocean-blob-surface`，径向渐变 + blur + 12–30s 变形动画，固定定位。
   - 光束、波纹、海草：补充 `.light-beam`、`.auto-ripple`、`.seaweed` 增强流动感，pointer-events: none。
   - 示例：
     ```css
     @keyframes deepOceanCurrent {
       0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
       20% { transform: translate(150px, -100px) rotate(72deg) scale(1.3); border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%; }
       40% { transform: translate(-80px, 120px) rotate(144deg) scale(0.8); border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%; }
       60% { transform: translate(200px, 80px) rotate(216deg) scale(1.2); border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%; }
       80% { transform: translate(-120px, -60px) rotate(288deg) scale(0.9); border-radius: 50% 50% 60% 40% / 55% 45% 55% 45%; }
     }
     .ocean-blob-deep { position: fixed; width: 520px; height: 520px; background: radial-gradient(circle, rgba(0,229,255,0.4), transparent 70%); filter: blur(40px); opacity: 0.55; animation: deepOceanCurrent 28s ease-in-out infinite; will-change: transform, border-radius; }
     .ocean-blob-deep-1 { top: -12%; left: -6%; }
     .ocean-blob-deep-2 { bottom: -18%; right: -10%; animation-delay: -10s; background: radial-gradient(circle, rgba(100,255,218,0.28), transparent 70%); }
     ```

2. **气泡与生物荧光粒子**
   - 20+ `.bubble` 自底向上漂浮，CSS 变量控制 size/duration/delay/drift。
   - `.plankton` 随机闪烁，radial-gradient 叠加 box-shadow，尺寸 2–6px。
   - 示例：
     ```css
     @keyframes bubbleRise { 0%{transform:translate3d(0,0,0);opacity:0;}10%{opacity:.9;}80%{opacity:.9;}100%{transform:translate3d(var(--bubble-drift,20px),-120vh,0);opacity:0;} }
     .bubble { position: fixed; bottom: -40px; width: var(--bubble-size,10px); height: var(--bubble-size,10px); border-radius: 999px; background: radial-gradient(circle, rgba(148,163,255,0.9), rgba(59,130,246,0.2)); animation: bubbleRise var(--bubble-duration,9s) linear infinite; animation-delay: var(--bubble-delay,0s); pointer-events: none; z-index: 1; }
     @keyframes planktonFlicker { 0%,100%{opacity:.25;transform:translate3d(0,0,0) scale(1);}40%{opacity:.9;transform:translate3d(4px,-6px,0) scale(1.2);}70%{opacity:.5;transform:translate3d(-3px,3px,0) scale(.9);} }
     .plankton { position: fixed; width: var(--plankton-size,4px); height: var(--plankton-size,4px); border-radius: 999px; background: radial-gradient(circle, rgba(125,211,252,1), rgba(56,189,248,0.08)); animation: planktonFlicker var(--plankton-duration,15s) ease-in-out infinite; animation-delay: var(--plankton-delay,0s); box-shadow: 0 0 20px rgba(100,255,218,0.45); }
     ```

3. **玻璃态仪表卡（居家办公模块）**
   - `.glass-card` 统一用于「任务/会议/专注计时/设备状态」；背景 rgba + backdrop-filter + 1px 边框 + 深色阴影。
   - Hover 提升边框亮度与上浮位移；内部可包含 `.glow-badge`、`.stat-value`、`.stat-delta`、`.liquid-progress`。
   - 示例：
     ```css
     .glass-card { background: rgba(15,23,42,0.78); backdrop-filter: blur(16px); border: 1px solid rgba(148,163,255,0.35); border-radius: 20px; box-shadow: 0 20px 60px rgba(15,23,42,0.75); padding: 20px; transition: all .35s ease; }
     .glass-card:hover { border-color: rgba(56,189,248,0.7); box-shadow: 0 32px 90px rgba(15,23,42,0.9); transform: translateY(-4px); }
     .liquid-progress { height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; }
     .liquid-progress-fill { height: 100%; background: linear-gradient(90deg, #00e5ff, #64ffda); border-radius: 4px; animation: liquidFill 2s ease-out forwards; }
     @keyframes liquidFill { from { width: 0; } }
     ```

4. **液态按钮与 CTA 区**
   - `.liquid-button` 主按钮：线性渐变填充、波纹伪元素、按下态加深阴影。
   - `.liquid-button-outline` 次要按钮：透明背景 + 描边，hover 渐变填充并保留描边。
   - `.cta-panel` 半透明容器，用于「加入会议 / 创建任务 / 同步日历」。
   - 示例：
     ```css
     .liquid-button { position: relative; padding: 12px 32px; background: linear-gradient(135deg, #00e5ff, #64ffda); border-radius: 12px; border: none; color: #020617; font-weight: 700; letter-spacing: 0.01em; overflow: hidden; box-shadow: 0 12px 40px rgba(0,229,255,0.35); transition: all .3s ease; }
     .liquid-button::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: rgba(255,255,255,0.25); border-radius: 50%; transform: translate(-50%, -50%); transition: width .6s ease, height .6s ease; }
     .liquid-button:hover::before { width: 260px; height: 260px; }
     .liquid-button-outline { padding: 12px 28px; background: transparent; border: 1px solid rgba(100,255,218,0.75); border-radius: 12px; color: #cbd5f5; box-shadow: inset 0 0 0 1px rgba(0,229,255,0.35); transition: all .28s ease; }
     .liquid-button-outline:hover { background: rgba(100,255,218,0.12); color: #e2e8f0; }
     ```

5. **居家办公内容框架**
   - 布局：顶部导航（logo + 快捷入口），Hero（标题/副标题/双按钮），任务统计区（3-4 张 glass 卡），日程/会议列表（2 列 grid），底部 CTA。
   - 使用 Tailwind 原子类组合：`max-w-6xl mx-auto px-6 py-12 grid gap-8 lg:grid-cols-3`，内容容器 `.ocean-content { position: relative; z-index: 10; }`，确保浮于背景之上。

6. **交互动效节奏**
   - 背景动画周期 12–30s，避免过快；按钮/卡片 hover 0.2–0.35s；进度条/计时条使用宽度动画呈现数据变化。
   - 移动端：减少 blob 数量与 blur，停用光束/海草以换取性能。

**配色方案（深海居家办公）**

主色调：
- 深海梯度：#020617 → #0a192f → #112240
- 青绿高光：#00e5ff, #64ffda
- 紫色补光：#8b5cf6, #7c3aed

中性色/功能色：
- 文本：#e2e8f0, rgba(226,232,240,0.72)
- 分隔/描边：rgba(148,163,255,0.35), rgba(15,23,42,0.55)
- 成功/警示：#34d399, #f97316；警告：#f59e0b；错误：#ef4444

**关键 CSS 类示例**

```css
/* 页面与内容层 */
.liquid-page { min-height: 100vh; background: linear-gradient(180deg, #020617 0%, #0a192f 50%, #112240 100%); position: relative; overflow-x: hidden; color: #e2e8f0; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
.ocean-content { position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; padding: 48px 24px 72px; display: grid; gap: 24px; }

/* 导航与 Hero */
.liquid-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 0; }
.liquid-hero { background: rgba(15,23,42,0.82); border: 1px solid rgba(148,163,255,0.35); border-radius: 24px; padding: 28px; backdrop-filter: blur(14px); box-shadow: 0 24px 70px rgba(15,23,42,0.75); }
.liquid-hero-title { font-size: 36px; line-height: 1.1; font-weight: 800; color: #e0f2fe; }
.liquid-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 18px; }

/* 玻璃卡与进度条 */
.glass-card { background: rgba(15,23,42,0.78); backdrop-filter: blur(16px); border: 1px solid rgba(148,163,255,0.35); border-radius: 20px; box-shadow: 0 20px 60px rgba(15,23,42,0.75); padding: 20px; transition: all .35s ease; }
.glass-card:hover { border-color: rgba(56,189,248,0.7); box-shadow: 0 32px 90px rgba(15,23,42,0.9); transform: translateY(-4px); }
.glow-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; background: rgba(56,189,248,0.14); color: #67e8f9; border: 1px solid rgba(56,189,248,0.5); box-shadow: 0 0 18px rgba(56,189,248,0.35); }
.stat-value { font-size: 28px; font-weight: 800; }
.stat-delta { font-size: 14px; color: #34d399; }
.liquid-progress { height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; }
.liquid-progress-fill { height: 100%; background: linear-gradient(90deg, #00e5ff, #64ffda); border-radius: 4px; animation: liquidFill 2s ease-out forwards; }
@keyframes liquidFill { from { width: 0; } }

/* CTA 区 */
.cta-panel { background: linear-gradient(135deg, rgba(0,229,255,0.16), rgba(100,255,218,0.12)); border: 1px solid rgba(100,255,218,0.55); border-radius: 20px; padding: 24px; box-shadow: 0 20px 70px rgba(0,229,255,0.25); backdrop-filter: blur(12px); display: grid; gap: 12px; }
```

**可选部分：间距/字体/图标系统**

- 间距：8px 基础（8/16/24/32/48）。
- 字体：标题 36–54px、700；正文 16–18px、500；等宽字体用于代码或监控数字。
- 图标：线性描边，主色 #64ffda，尺寸 16–24px；在暗背景禁用强阴影。

**重要提示**
- 保留 blob/bubble/plankton/light-beam/ripple 至少 5 层，class 名称与现有预览一致以便样式复用。
- 内容区域 z-index ≥ 10，背景层 pointer-events:none，避免遮挡交互。
- 所有颜色使用明确 hex/rgba，避免模糊色名；透明度写出 0.xx。
- 输出完整 HTML 结构（含 header/main/section/footer），不输出额外解释或注释。
- 移动端降低模糊半径、减少粒子数量，确保流畅。

---

## English Version (en-US)

Please use TailwindCSS to build a “Liquid Flow Home Office” interface, fusing deep-sea fluid motion with a home-office dashboard. Deliver paste-ready HTML/CSS that preserves the multi-layer background and glass cards seen in /styles/preview/visual-liquid-visual-nature-liquid-flow-home-office.

**Core Design Requirements**

1. **Multi-layer liquid background (5–8 layers)**
   - Deep/Mid/Surface blobs via `.ocean-blob-deep|mid|surface`, radial-gradient + blur + 12–30s morphing, fixed positioning.
   - Add `.light-beam`, `.auto-ripple`, `.seaweed` to reinforce motion; keep `pointer-events: none`.
   - Example:
     ```css
     @keyframes deepOceanCurrent {
       0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
       20% { transform: translate(150px, -100px) rotate(72deg) scale(1.3); border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%; }
       40% { transform: translate(-80px, 120px) rotate(144deg) scale(0.8); border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%; }
       60% { transform: translate(200px, 80px) rotate(216deg) scale(1.2); border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%; }
       80% { transform: translate(-120px, -60px) rotate(288deg) scale(0.9); border-radius: 50% 50% 60% 40% / 55% 45% 55% 45%; }
     }
     .ocean-blob-deep { position: fixed; width: 520px; height: 520px; background: radial-gradient(circle, rgba(0,229,255,0.4), transparent 70%); filter: blur(40px); opacity: 0.55; animation: deepOceanCurrent 28s ease-in-out infinite; will-change: transform, border-radius; }
     .ocean-blob-deep-1 { top: -12%; left: -6%; }
     .ocean-blob-deep-2 { bottom: -18%; right: -10%; animation-delay: -10s; background: radial-gradient(circle, rgba(100,255,218,0.28), transparent 70%); }
     ```

2. **Bubbles and bioluminescent particles**
   - 20+ `.bubble` rising from the bottom; CSS variables drive size/duration/delay/drift.
   - `.plankton` flickers softly with radial gradients + box-shadows, 2–6px size.
   - Example:
     ```css
     @keyframes bubbleRise { 0%{transform:translate3d(0,0,0);opacity:0;}10%{opacity:.9;}80%{opacity:.9;}100%{transform:translate3d(var(--bubble-drift,20px),-120vh,0);opacity:0;} }
     .bubble { position: fixed; bottom: -40px; width: var(--bubble-size,10px); height: var(--bubble-size,10px); border-radius: 999px; background: radial-gradient(circle, rgba(148,163,255,0.9), rgba(59,130,246,0.2)); animation: bubbleRise var(--bubble-duration,9s) linear infinite; animation-delay: var(--bubble-delay,0s); pointer-events: none; z-index: 1; }
     @keyframes planktonFlicker { 0%,100%{opacity:.25;transform:translate3d(0,0,0) scale(1);}40%{opacity:.9;transform:translate3d(4px,-6px,0) scale(1.2);}70%{opacity:.5;transform:translate3d(-3px,3px,0) scale(.9);} }
     .plankton { position: fixed; width: var(--plankton-size,4px); height: var(--plankton-size,4px); border-radius: 999px; background: radial-gradient(circle, rgba(125,211,252,1), rgba(56,189,248,0.08)); animation: planktonFlicker var(--plankton-duration,15s) ease-in-out infinite; animation-delay: var(--plankton-delay,0s); box-shadow: 0 0 20px rgba(100,255,218,0.45); }
     ```

3. **Glass dashboard cards (home-office modules)**
   - `.glass-card` for tasks/meetings/focus timer/device status; rgba background + blur + 1px stroke + deep shadow.
   - Hover lifts border brightness; use `.glow-badge`, `.stat-value`, `.stat-delta`, `.liquid-progress` inside.
   - Example:
     ```css
     .glass-card { background: rgba(15,23,42,0.78); backdrop-filter: blur(16px); border: 1px solid rgba(148,163,255,0.35); border-radius: 20px; box-shadow: 0 20px 60px rgba(15,23,42,0.75); padding: 20px; transition: all .35s ease; }
     .glass-card:hover { border-color: rgba(56,189,248,0.7); box-shadow: 0 32px 90px rgba(15,23,42,0.9); transform: translateY(-4px); }
     .liquid-progress { height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; }
     .liquid-progress-fill { height: 100%; background: linear-gradient(90deg, #00e5ff, #64ffda); border-radius: 4px; animation: liquidFill 2s ease-out forwards; }
     @keyframes liquidFill { from { width: 0; } }
     ```

4. **Liquid buttons and CTA**
   - `.liquid-button`: gradient fill, ripple pseudo-element, stronger shadow on active.
   - `.liquid-button-outline`: transparent fill + stroke; hover with soft gradient.
   - `.cta-panel`: translucent container for “Join meeting / Create task / Sync calendar”.
   - Example:
     ```css
     .liquid-button { position: relative; padding: 12px 32px; background: linear-gradient(135deg, #00e5ff, #64ffda); border-radius: 12px; border: none; color: #020617; font-weight: 700; letter-spacing: 0.01em; overflow: hidden; box-shadow: 0 12px 40px rgba(0,229,255,0.35); transition: all .3s ease; }
     .liquid-button::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: rgba(255,255,255,0.25); border-radius: 50%; transform: translate(-50%, -50%); transition: width .6s ease, height .6s ease; }
     .liquid-button:hover::before { width: 260px; height: 260px; }
     .liquid-button-outline { padding: 12px 28px; background: transparent; border: 1px solid rgba(100,255,218,0.75); border-radius: 12px; color: #cbd5f5; box-shadow: inset 0 0 0 1px rgba(0,229,255,0.35); transition: all .28s ease; }
     .liquid-button-outline:hover { background: rgba(100,255,218,0.12); color: #e2e8f0; }
     ```

5. **Home-office content skeleton**
   - Layout: top nav (logo + quick actions), hero (title/subtitle/dual CTAs), stats row (3–4 glass cards), schedule/meeting list (2-column grid), bottom CTA.
   - Tailwind utility mix: `max-w-6xl mx-auto px-6 py-12 grid gap-8 lg:grid-cols-3`; content wrapper `.ocean-content { position: relative; z-index: 10; }` to float above animation layers.

6. **Motion pacing**
   - Background loops 12–30s; hover/active 0.2–0.35s; progress/timers animate width for data changes.
   - Mobile: reduce blob count/blur, disable beams/seaweed to protect FPS.

**Color Palette (Deep-Sea Home Office)**

Primary:
- Deep gradient: #020617 → #0a192f → #112240
- Cyan-teal highlights: #00e5ff, #64ffda
- Violet accent: #8b5cf6, #7c3aed

Neutral/Functional:
- Text: #e2e8f0, rgba(226,232,240,0.72)
- Divider/stroke: rgba(148,163,255,0.35), rgba(15,23,42,0.55)
- State: #34d399, #f97316; warning #f59e0b; error #ef4444

**Key CSS Classes**

```css
.liquid-page { min-height: 100vh; background: linear-gradient(180deg, #020617 0%, #0a192f 50%, #112240 100%); position: relative; overflow-x: hidden; color: #e2e8f0; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
.ocean-content { position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; padding: 48px 24px 72px; display: grid; gap: 24px; }
.liquid-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 0; }
.liquid-hero { background: rgba(15,23,42,0.82); border: 1px solid rgba(148,163,255,0.35); border-radius: 24px; padding: 28px; backdrop-filter: blur(14px); box-shadow: 0 24px 70px rgba(15,23,42,0.75); }
.liquid-hero-title { font-size: 36px; line-height: 1.1; font-weight: 800; color: #e0f2fe; }
.liquid-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 18px; }
.glass-card { background: rgba(15,23,42,0.78); backdrop-filter: blur(16px); border: 1px solid rgba(148,163,255,0.35); border-radius: 20px; box-shadow: 0 20px 60px rgba(15,23,42,0.75); padding: 20px; transition: all .35s ease; }
.glass-card:hover { border-color: rgba(56,189,248,0.7); box-shadow: 0 32px 90px rgba(15,23,42,0.9); transform: translateY(-4px); }
.glow-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; background: rgba(56,189,248,0.14); color: #67e8f9; border: 1px solid rgba(56,189,248,0.5); box-shadow: 0 0 18px rgba(56,189,248,0.35); }
.stat-value { font-size: 28px; font-weight: 800; }
.stat-delta { font-size: 14px; color: #34d399; }
.liquid-progress { height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; }
.liquid-progress-fill { height: 100%; background: linear-gradient(90deg, #00e5ff, #64ffda); border-radius: 4px; animation: liquidFill 2s ease-out forwards; }
@keyframes liquidFill { from { width: 0; } }
.cta-panel { background: linear-gradient(135deg, rgba(0,229,255,0.16), rgba(100,255,218,0.12)); border: 1px solid rgba(100,255,218,0.55); border-radius: 20px; padding: 24px; box-shadow: 0 20px 70px rgba(0,229,255,0.25); backdrop-filter: blur(12px); display: grid; gap: 12px; }
```

**Optional spacing/font/icon system**

- Spacing: 8px base (8/16/24/32/48).
- Typography: Headings 36–54px/700; body 16–18px/500; monospace for code/metrics.
- Icons: Linear stroke, primary #64ffda, 16–24px; avoid heavy shadows on dark glass.

**Important Notes**
- Keep at least layers for blobs/bubbles/plankton/light-beam/ripple; reuse class names so preview CSS applies directly.
- Content z-index ≥ 10; backgrounds `pointer-events: none` to avoid blocking UI.
- Use explicit hex/rgba values; state colors must be named; specify opacity like 0.xx.
- Output full HTML (header/main/section/footer) with no extra explanation or comments.
- On mobile, reduce blur and particle count to maintain performance.
