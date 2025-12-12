# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「街机游戏大厅」界面，延续 Arcade CRT 复古霓虹风，生成可直接运行的 HTML 与 CSS（或 JSX 风格类名），让页面一眼呈现 80s 街机厅：扫描线、发光描边、格栅网格、像素字体与霓虹按钮。

**核心设计要求**

1. **CRT 屏幕与扫描线**
   - 使用 `.crt-frame` 包裹主要内容，内层 `.crt-screen` 添加 `linear-gradient` 扫描线与轻微噪声：
     ```css
     .crt-screen {
       background: radial-gradient(circle at 50% 20%, rgba(255,255,255,0.08), rgba(0,0,0,0.75)),
                   linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
       background-size: 100% 100%, 100% 2px;
       box-shadow: 0 0 0 2px #2ef2ff, 0 0 24px rgba(46,242,255,0.6), inset 0 0 20px rgba(0,0,0,0.6);
       filter: saturate(1.2) contrast(1.05);
     }
     ```
   - 整屏轻微弧度与外框发光，保留暗角 vignette。

2. **霓虹网格与透视地面**
   - 使用 `.arcade-grid` 绝对定位在底部：`background: linear-gradient(...)` 形成蓝紫网格；透视用 `transform: perspective(900px) rotateX(65deg) scale(1.1)`.
   - 添加轻微动画 `gridGlow 8s ease-in-out infinite alternate` 调整亮度。

3. **像素/等宽排版**
   - 主标题用像素或等宽字体：`'Press Start 2P', 'VT323', 'IBM Plex Mono'`，大写、字距稍增；正文用等宽或无衬线混排保持清晰。

4. **霓虹按钮与卡片**
   - 按钮 `.neon-btn`：双色渐变背景、描边发光、内阴影模拟凹凸，hover 放大 1.03、亮度+15%。
   - 卡片 `.neon-card`：深色背景 + 双层描边（内层亮青、外层紫红），轻微玻璃感 `backdrop-filter: blur(8px)`。
     ```css
     .neon-btn {
       background: linear-gradient(135deg, #ff2d92, #2ef2ff);
       border: 1px solid rgba(46,242,255,0.8);
       box-shadow: 0 0 12px rgba(46,242,255,0.7), 0 0 24px rgba(255,45,146,0.6);
       text-transform: uppercase; letter-spacing: 0.08em;
     }
     ```

5. **HUD 微件与分栏布局**
   - 布局示例：导航（Logo + 帧率/投币数）、主 Hero（宣传语 + CTA 双按钮）、功能区（游戏列表/排行榜/优惠 Banner）、底部状态栏（在线玩家/开局数）。
   - 使用 `grid` 划分 2-3 列，卡片保持等高；HUD 条使用 `.hud-bar` 显示数值与进度。

6. **动画节奏**
   - 扫描线 0.12s 循环，网格亮度 8s 呼吸；按钮 hover 200–260ms；卡片 hover 上浮 6px。
   - 降噪：背景动画 `opacity:0.08~0.15`，避免盖住文字。

**配色方案（霓虹街机）**

主色调：
- 亮青电光：#2ef2ff, #56f0ff
- 玫红霓虹：#ff2d92, #ff5bbd
- 霓虹紫：#8a2be2, #b388ff

中性色/辅助：
- 背景深灰：#05060a, #0a0d16
- 文本：#e8f0ff, rgba(232,240,255,0.78)
- 警示/状态：胜利 #7af56b，警告 #f5c542，错误 #ff5a5a

**关键 CSS 类示例**

```css
.crt-frame { border: 2px solid #2ef2ff; border-radius: 18px; padding: 18px; background: radial-gradient(circle at 20% 20%, rgba(46,242,255,0.08), transparent 55%); box-shadow: 0 0 32px rgba(46,242,255,0.35), 0 0 64px rgba(138,43,226,0.35); }
.crt-screen { position: relative; overflow: hidden; }
.scanline { position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,0.07), rgba(255,255,255,0.07) 1px, transparent 1px, transparent 2px); mix-blend-mode: screen; opacity: 0.3; pointer-events: none; }
.arcade-grid { position: absolute; inset: auto 0 0 0; height: 48%; background-image: linear-gradient(#2ef2ff33 1px, transparent 1px), linear-gradient(90deg, #2ef2ff33 1px, transparent 1px); background-size: 140px 140px; transform: perspective(900px) rotateX(65deg); filter: drop-shadow(0 0 18px #2ef2ff66); opacity: 0.28; }
.neon-card { background: rgba(10,13,22,0.72); border: 1px solid rgba(46,242,255,0.6); box-shadow: inset 0 0 0 1px rgba(255,45,146,0.45), 0 10px 28px rgba(0,0,0,0.55), 0 0 28px rgba(46,242,255,0.45); border-radius: 16px; padding: 16px; transition: all .25s ease; }
.neon-card:hover { transform: translateY(-6px); box-shadow: inset 0 0 0 1px rgba(255,45,146,0.6), 0 16px 38px rgba(0,0,0,0.6), 0 0 36px rgba(46,242,255,0.55); }
.neon-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; border-radius: 12px; font-weight: 800; text-transform: uppercase; }
.hud-bar { height: 10px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden; }
.hud-bar-fill { height: 100%; background: linear-gradient(90deg, #ff2d92, #2ef2ff); }
```

**可选部分：间距 / 字体 / 图标**
- 间距：8px 基线（8/16/24/32/48）。
- 字体：标题使用像素/等宽；正文可用 `Inter` 或 `IBM Plex Sans`；数字用等宽。
- 图标：线性矢量描边 + 外发光，尺寸 16–24px。

**重要提示**
- 保留 `.crt-frame`、`.crt-screen`、`.scanline`、`.arcade-grid`、`.neon-btn`、`.neon-card` 等类名，便于样式复用。
- 背景动效全部 `pointer-events: none`；内容区域 `z-index: 10+`。
- 文字与按钮对比度≥ AA，亮色发光用 `text-shadow` 而非过高透明度。
- 移动端降低网格尺寸与发光强度，避免闪烁。
- 输出完整 HTML 结构（header/main/section/footer），不添加额外解释。

---

## English Version (en-US)

Build a “Arcade Hall” page in TailwindCSS, keeping the 80s Arcade CRT vibe: scanlines, neon grid, pixel fonts, glowing buttons, and HUD cards. Output copy-paste-ready HTML + CSS (or JSX classNames) with intact class names for style reuse.

**Core Design Requirements**

1. **CRT frame + scanlines**
   - Wrap main content in `.crt-frame` and `.crt-screen`; add repeating-linear-gradient scanlines, subtle noise, and glow strokes.
2. **Neon grid floor**
   - `.arcade-grid` at bottom with perspective transform; breathing brightness animation.
3. **Pixel/mono typography**
   - Use pixel/mono for titles, tight uppercase spacing; body in clean sans/mono mix.
4. **Neon buttons + cards**
   - `.neon-btn` dual-gradient, glow border; `.neon-card` glassy dark background with inner/outer glow; hover lifts 6px.
5. **HUD widgets + layout**
   - Sections: nav (logo + credits), hero (tagline + dual CTA), game list/leaderboard, promo banner, footer status bar.
6. **Motion rhythm**
   - Scanlines loop fast (0.12s), grid glow 8s, hover 200–260ms; keep background opacity low.

**Color Palette (Neon Arcade)**
- Cyan: #2ef2ff, #56f0ff
- Magenta: #ff2d92, #ff5bbd
- Purple: #8a2be2, #b388ff
- Dark base: #05060a, #0a0d16
- Text: #e8f0ff / rgba(232,240,255,0.78)

**Key CSS Classes**

```css
.crt-frame { border: 2px solid #2ef2ff; border-radius: 18px; padding: 18px; background: radial-gradient(circle at 20% 20%, rgba(46,242,255,0.08), transparent 55%); box-shadow: 0 0 32px rgba(46,242,255,0.35), 0 0 64px rgba(138,43,226,0.35); }
.crt-screen { position: relative; overflow: hidden; }
.scanline { position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,0.07), rgba(255,255,255,0.07) 1px, transparent 1px, transparent 2px); opacity: 0.3; pointer-events: none; mix-blend-mode: screen; }
.arcade-grid { position: absolute; inset: auto 0 0 0; height: 48%; background-image: linear-gradient(#2ef2ff33 1px, transparent 1px), linear-gradient(90deg, #2ef2ff33 1px, transparent 1px); background-size: 140px 140px; transform: perspective(900px) rotateX(65deg); filter: drop-shadow(0 0 18px #2ef2ff66); opacity: 0.28; }
.neon-card { background: rgba(10,13,22,0.72); border: 1px solid rgba(46,242,255,0.6); box-shadow: inset 0 0 0 1px rgba(255,45,146,0.45), 0 10px 28px rgba(0,0,0,0.55), 0 0 28px rgba(46,242,255,0.45); border-radius: 16px; padding: 16px; transition: all .25s ease; }
.neon-card:hover { transform: translateY(-6px); box-shadow: inset 0 0 0 1px rgba(255,45,146,0.6), 0 16px 38px rgba(0,0,0,0.6), 0 0 36px rgba(46,242,255,0.55); }
.neon-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; border-radius: 12px; font-weight: 800; text-transform: uppercase; background: linear-gradient(135deg, #ff2d92, #2ef2ff); border: 1px solid rgba(46,242,255,0.8); box-shadow: 0 0 12px rgba(46,242,255,0.7), 0 0 24px rgba(255,45,146,0.6); }
.hud-bar { height: 10px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden; }
.hud-bar-fill { height: 100%; background: linear-gradient(90deg, #ff2d92, #2ef2ff); }
```

**Optional Spacing / Typography / Icons**
- 8px spacing scale; pixel/mono headers; sans/mono body; linear icons with glow.

**Important Notes**
- Preserve class names for reuse; set `pointer-events: none` on background layers.
- Content z-index ≥ 10; ensure AA contrast; prefer text-shadow for glow.
- Mobile: reduce glow/grid density; keep animations light.
- Output full HTML (header/main/section/footer) only—no extra explanations.

---

**Advanced Implementation Details**

**Performance Optimization**:
- Use `will-change: transform` on hover elements to enable GPU acceleration
- Limit the number of simultaneous glowing elements to prevent performance degradation (max 15-20 elements)
- Consider using `@media (prefers-reduced-motion: reduce)` to disable animations for users with motion sensitivity
- Use CSS containment (`contain: layout style paint`) on `.neon-card` elements for better rendering performance

**Responsive Breakpoints**:
- Mobile (< 640px): Stack cards vertically, reduce glow intensity by 40%, disable grid perspective effect
- Tablet (640-1024px): Use 2-column grid for game cards, maintain moderate glow effects
- Desktop (≥ 1024px): Full 3-4 column layouts with maximum visual effects

**Accessibility Guidelines**:
- Ensure all text maintains WCAG AA contrast ratio (minimum 4.5:1 for body text, 3:1 for large text)
- Provide alt text for all decorative graphics and game thumbnails
- Make all interactive elements keyboard-navigable with visible focus states
- Add `aria-labels` to icon-only buttons and ensure screen reader compatibility
- Test with color blindness simulators to verify neon color combinations remain distinguishable

**Browser Compatibility Notes**:
- CSS `backdrop-filter` requires `-webkit-` prefix for Safari
- `mix-blend-mode: screen` for scanlines works in all modern browsers
- Provide fallback gradients for older browsers that don't support advanced CSS features
- Test glow effects across different browsers as rendering may vary between Chrome, Firefox, and Safari
