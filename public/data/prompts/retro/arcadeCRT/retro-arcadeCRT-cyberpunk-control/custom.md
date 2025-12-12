# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「赛博控制台」界面，延续 Arcade CRT + 赛博中控氛围：扫描线、霓虹网格、指令面板与 HUD 状态条，输出可直接运行的 HTML/CSS（或 JSX 类名），整体像 80s 科幻控制室。

**核心设计要求**

1. **CRT 控制屏**
   - 顶层 `.crt-shell` 包含导航与面板，内部 `.crt-screen` 叠加扫描线与噪声；外框描边发光。
   - 采用暗角 vignette，屏幕轻微弯曲效果（`border-radius: 20px; filter: contrast(1.05)`）。

2. **赛博网格与数据光束**
   - `.cyber-grid` 透视网格覆盖底部 50%；`linear-gradient` 形成纵横线，使用 `transform: perspective(900px) rotateX(60deg)`。
   - `.data-beam` 纵向光束，线性渐变 + `mix-blend-mode: screen`，缓慢上下漂移。

3. **命令行/模块化面板**
   - 使用等宽字体（`IBM Plex Mono`、`JetBrains Mono`）；主标题可用像素字；模块用 `.hud-card`，分区显示「电源、连线、监控、日志」。
   - 右侧/底部提供日志区（表格式），显示时间戳与状态。

4. **霓虹按钮与切换**
   - `.neon-toggle` 双色渐变 + 外发光，选中态高亮描边；hover 提升亮度、缩放 1.04。
   - CTA 按钮 `.neon-btn` 沿用霓虹青/玫红配色。

5. **状态条与进度**
   - `.hud-bar` 显示系统负载/网络延迟；`linear-gradient` 填充并动画宽度。
   - 卡片顶部可用 `.tag-chip` 显示 Online/Idle/Error 状态，颜色区分。

6. **动画与节奏**
   - 扫描线 0.1s、网格亮度 6–8s 呼吸，光束 12s 上下移动；卡片/按钮 hover 200–250ms。
   - 所有背景层 `pointer-events: none`，内容层 `z-index: 10`。

**配色方案（赛博霓虹）**

主色调：
- 霓虹青：#2ef2ff, #5cf5ff
- 赛博紫：#8a2be2, #b388ff
- 品红高光：#ff2d92, #ff5bbd

中性色/功能：
- 背景：#05060a, #0b0f1c
- 文本：#e8f0ff / rgba(232,240,255,0.8)
- 状态：成功 #7af56b，警告 #f5c542，错误 #ff5a5a

**关键 CSS 类示例**

```css
.crt-shell { border: 2px solid #2ef2ff; border-radius: 18px; padding: 18px; background: radial-gradient(circle at 20% 20%, rgba(46,242,255,0.08), transparent 55%); box-shadow: 0 0 36px rgba(46,242,255,0.35), 0 0 64px rgba(255,45,146,0.35); }
.crt-screen { position: relative; overflow: hidden; background: #05060a; }
.scanline { position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,0.07), rgba(255,255,255,0.07) 1px, transparent 1px, transparent 2px); opacity: 0.3; pointer-events: none; mix-blend-mode: screen; }
.cyber-grid { position: absolute; inset: auto 0 0 0; height: 50%; background-image: linear-gradient(#2ef2ff33 1px, transparent 1px), linear-gradient(90deg, #2ef2ff33 1px, transparent 1px); background-size: 140px 140px; transform: perspective(900px) rotateX(60deg); filter: drop-shadow(0 0 18px #2ef2ff66); opacity: 0.25; }
.data-beam { position: absolute; top: 0; width: 120px; height: 100%; background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(46,242,255,0.25), rgba(255,45,146,0.1)); mix-blend-mode: screen; filter: blur(8px); animation: beamMove 12s ease-in-out infinite; }
@keyframes beamMove { 0%,100% { transform: translateY(-6%); } 50% { transform: translateY(6%); } }
.hud-card { background: rgba(11,15,28,0.8); border: 1px solid rgba(46,242,255,0.6); border-radius: 14px; padding: 16px; box-shadow: inset 0 0 0 1px rgba(255,45,146,0.45), 0 10px 28px rgba(0,0,0,0.55); transition: all .22s ease; }
.hud-card:hover { transform: translateY(-4px); box-shadow: inset 0 0 0 1px rgba(255,45,146,0.6), 0 16px 36px rgba(0,0,0,0.6); }
.neon-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; background: linear-gradient(135deg, #ff2d92, #2ef2ff); border: 1px solid rgba(46,242,255,0.8); border-radius: 12px; font-weight: 800; text-transform: uppercase; box-shadow: 0 0 12px rgba(46,242,255,0.7), 0 0 22px rgba(255,45,146,0.6); }
.neon-toggle { padding: 10px 16px; border-radius: 10px; background: rgba(255,45,146,0.08); border: 1px solid rgba(255,45,146,0.5); box-shadow: 0 0 16px rgba(255,45,146,0.35); }
.hud-bar { height: 10px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden; }
.hud-bar-fill { height: 100%; background: linear-gradient(90deg, #ff2d92, #2ef2ff); }
```

**可选部分：间距 / 字体 / 图标**
- 间距：8px 基线；外框 18px 内边距；卡片间距 16–24px。
- 字体：标题可像素体/等宽体，正文等宽；数字与状态保持等宽。
- 图标：线性描边 + 外发光，尺寸 16–20px。

**重要提示**
- 保留 `.crt-shell`、`.crt-screen`、`.scanline`、`.cyber-grid`、`.data-beam`、`.neon-btn`、`.hud-card` 类名。
- 背景层禁用指针，内容层提升 z-index，确保可读性与对比度。
- 移动端降低网格密度与发光强度，减少动画时长。
- 输出完整 HTML（header/main/section/footer），不含额外解释文字。

---

## English Version (en-US)

Create a “Cyber Control Console” page with the Arcade CRT + cyber control-room vibe: scanlines, neon grid, data beams, mono command panels, and glowing HUD cards. Provide runnable HTML/CSS (or JSX classNames) with reusable class names.

**Core Design Requirements**
- CRT shell + screen with scanlines/noise and glowing outline.
- Perspective neon grid at the bottom; data beams drifting vertically.
- Mono/pixel typography; modular HUD cards for power/links/monitoring/logs.
- Neon buttons/toggles with gradient glow; status chips and progress bars.
- Sections: nav (logo + system status), hero (tagline + dual CTAs), control panels, logs, footer status bar.
- Motion: scanlines fast, grid 6–8s breathing, beam 12s drift, hover 200–250ms.

**Palette (Cyber Neon)**
- Cyan #2ef2ff, Magenta #ff2d92, Purple #8a2be2; Dark #05060a; Text #e8f0ff.

**Key Classes**

```css
.crt-shell { border: 2px solid #2ef2ff; border-radius: 18px; padding: 18px; box-shadow: 0 0 36px rgba(46,242,255,0.35), 0 0 64px rgba(255,45,146,0.35); }
.crt-screen { position: relative; overflow: hidden; }
.scanline { position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,0.07), rgba(255,255,255,0.07) 1px, transparent 1px, transparent 2px); opacity: 0.3; pointer-events: none; }
.cyber-grid { position: absolute; inset: auto 0 0 0; height: 50%; background-image: linear-gradient(#2ef2ff33 1px, transparent 1px), linear-gradient(90deg, #2ef2ff33 1px, transparent 1px); background-size: 140px 140px; transform: perspective(900px) rotateX(60deg); opacity: 0.25; }
.data-beam { position: absolute; top: 0; width: 120px; height: 100%; background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(46,242,255,0.25), rgba(255,45,146,0.1)); animation: beamMove 12s ease-in-out infinite; }
.hud-card { background: rgba(11,15,28,0.8); border: 1px solid rgba(46,242,255,0.6); border-radius: 14px; padding: 16px; box-shadow: inset 0 0 0 1px rgba(255,45,146,0.45), 0 10px 28px rgba(0,0,0,0.55); transition: all .22s ease; }
.neon-btn { background: linear-gradient(135deg, #ff2d92, #2ef2ff); border: 1px solid rgba(46,242,255,0.8); border-radius: 12px; font-weight: 800; text-transform: uppercase; }
.hud-bar { height: 10px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden; }
.hud-bar-fill { height: 100%; background: linear-gradient(90deg, #ff2d92, #2ef2ff); }
```

**Important**
- Preserve class names; set pointer-events none on background; ensure AA contrast.
- Mobile: reduce glow density and animation intensity.
- Output full HTML structure only, no extra explanations.

---

**Advanced Implementation Details**

**Performance Optimization Strategies**:
- Use CSS containment (`contain: layout style paint`) on independent sections to improve rendering performance
- Implement lazy loading for images and heavy content below the fold using Intersection Observer API
- Utilize `will-change` property judiciously on elements that will animate (remove after animation completes)
- Minimize layout thrashing by batching DOM reads and writes
- Use requestAnimationFrame for smooth JavaScript animations at 60fps
- Consider using CSS custom properties for dynamic values instead of inline styles

**Responsive Design Patterns**:
- Mobile (< 640px): Stack all elements vertically, simplify animations, reduce visual effects by 40-50%
- Tablet (640-1024px): Use 2-column layouts where appropriate, maintain moderate visual effects
- Desktop (≥ 1024px): Full visual experience with all effects, animations, and interactive elements
- Implement fluid typography using clamp() for seamless scaling across breakpoints
- Test on actual devices, not just browser resize, to catch touch and performance issues

**Accessibility Standards**:
- Ensure WCAG 2.1 Level AA compliance minimum (4.5:1 contrast for text, 3:1 for UI components)
- Implement keyboard navigation for all interactive elements with visible focus indicators (3px+ outline)
- Provide skip links to main content for screen reader users
- Add appropriate ARIA labels, roles, and states for complex interactive components
- Respect user preferences: prefers-reduced-motion, prefers-color-scheme, prefers-contrast
- Test with actual assistive technologies (NVDA, JAWS, VoiceOver) not just automated tools
- Ensure all images have descriptive alt text and decorative images use alt=""

**Browser Compatibility & Fallbacks**:
- Test across Chrome, Firefox, Safari, and Edge for visual consistency
- Provide fallback styles for CSS features with limited support (backdrop-filter, scroll-timeline)
- Use feature detection (@supports) to progressively enhance
- Implement polyfills for critical features in older browsers if necessary
- Test on both desktop and mobile browsers as rendering may differ
- Ensure graceful degradation: site remains functional even without advanced CSS features

**Code Quality & Maintainability**:
- Use CSS custom properties (variables) for consistent theming and easy maintenance
- Organize styles with clear naming conventions (BEM, utility-first, or custom methodology)
- Comment complex CSS techniques for future maintainability
- Extract repeated patterns into reusable utility classes
- Keep specificity low to avoid cascading issues
- Validate HTML and CSS to catch errors early


---

**Cyberpunk CRT Implementation Guide**

**Authentic CRT Display Effects**:
- Implement scanline overlay using repeating-linear-gradient (2px lines, 4px spacing)
- Add chromatic aberration effect by offsetting red, green, blue color channels slightly
- Create screen curvature illusion using subtle radial distortion with CSS transforms
- Apply vignette effect using radial-gradient overlay with dark edges
- Add phosphor glow by combining multiple text-shadow layers in cyan/magenta
- Implement flicker animation (subtle opacity 0.98-1.0) for unstable power feel

**Terminal Aesthetic Components**:
- Use monospace fonts exclusively (Courier New, Monaco, Consolas, JetBrains Mono)
- Implement blinking cursor using CSS animation with steps() timing function
- Create command-line style inputs with green text on black background
- Add text typing animation effects for dynamic content reveal
- Display system messages in brackets with timestamps [14:23:45]
- Use ASCII art or box-drawing characters for decorative elements

**Cyberpunk Color Grading**:
- Primary: Electric cyan (#00ffff, #0ff0ff) for data and UI elements
- Secondary: Hot magenta (#ff00ff, #ff007f) for warnings and highlights
- Accent: Toxic green (#00ff41, #39ff14) for success states and active elements
- Base: Pure black (#000000) or very dark blue (#050512) backgrounds
- Text: Light cyan (#e0ffff) or white (#ffffff) with glow effects
- Avoid warm colors (reds, oranges, yellows) except for critical alerts

**Glitch & Corruption Effects**:
- Implement random glitch animation using clip-path or transform skew
- Add digital noise overlay with animated grain texture
- Create data corruption visual: random character changes, misaligned text blocks
- Use distortion effects on hover: slight RGB split, wave distortion
- Apply scanline jitter animation for unstable display feeling

**HUD & Dashboard Elements**:
- Design corner brackets and frame elements using CSS borders and pseudo-elements
- Create data readouts with monospace numbers and progress bars
- Implement radar/sonar circular displays using SVG or conic-gradients
- Add system status indicators: blinking dots, animated bars, numerical counters
- Design minimalist icons with angular geometric shapes

**Animation & Motion**:
- Boot sequence animation: text scrolling, system checks, progress bars filling
- Idle animations: subtle flicker, scanline movement, data stream scrolling
- Interaction feedback: button press with glow pulse, command execution flash
- Use cubic-bezier easing for mechanical, precise motion feel
- Keep frame rate at 30-60fps to maintain retro CRT aesthetic

**Performance & Optimization**:
- Limit number of active glow effects to prevent performance degradation
- Use CSS animations over JavaScript for better performance
- Implement will-change on animated elements sparingly
- Reduce effect complexity on mobile devices significantly
- Test on mid-range devices to ensure smooth 30fps minimum

**Accessibility Adaptations**:
- Provide high-contrast mode without glow effects for better readability
- Ensure text remains legible despite CRT effects (4.5:1 contrast minimum)
- Respect prefers-reduced-motion: disable flicker, glitch, and scanline animations
- Add aria-labels to decorative terminal elements
- Ensure keyboard navigation works with focus indicators visible against dark background

