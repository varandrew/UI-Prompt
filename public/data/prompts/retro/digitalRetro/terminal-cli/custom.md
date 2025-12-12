# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「终端/CLI」界面，体现绿字黑底、扫描线、光标闪烁与分栏面板的复古终端感。输出可直接运行的 HTML/CSS（或 JSX 类名），包含 Hero（命令提示）、分栏状态/日志、快捷命令 CTA。

**核心设计要求**

1. **终端色彩与背景**
   - 背景 #060b06 ~ #0d0f10，轻微噪声；全局等宽字体（`JetBrains Mono`, `Fira Code`, `IBM Plex Mono`）。
2. **分栏信息面板**
   - 左侧命令区 `.cli-panel`，右侧/下方日志区 `.log-panel`；使用 `grid`/`flex`。
3. **光标与扫描线**
   - `.cli-cursor` 方块光标 `background: #35ff69`，动画闪烁 0.8s；可加低透明度扫描线层。
4. **提示行与代码块**
   - `.prompt-line` 采用 `user@host:~$` 前缀，命令高亮；块状输出用 `background: rgba(53,255,105,0.06)`。
5. **按钮/CTA**
   - `.cli-btn` 采用等宽、描边、朴素填充；hover 仅改变描边亮度与阴影；可使用键帽样式。

**配色方案（终端绿）**
- 背景：#060b06, #0d0f10
- 主绿：#35ff69, #2de36d
- 辅色：#52d1ff, #ffd166
- 文本：#e8f5e9 / rgba(232,245,233,0.8)
- 边框/分隔：rgba(53,255,105,0.28), rgba(255,255,255,0.08)

**关键 CSS 类示例**

```css
.cli-shell { padding: 20px; background: #060b06; border: 1px solid rgba(53,255,105,0.25); border-radius: 10px; box-shadow: 0 14px 34px rgba(0,0,0,0.45); }
.cli-panel { background: rgba(53,255,105,0.04); border: 1px solid rgba(53,255,105,0.25); border-radius: 8px; padding: 16px; }
.prompt-line { color: #35ff69; font-weight: 600; }
.prompt-line .path { color: #52d1ff; }
.cli-output { background: rgba(53,255,105,0.06); border-radius: 6px; padding: 12px; border: 1px solid rgba(53,255,105,0.18); }
.cli-cursor { display: inline-block; width: 10px; height: 18px; background: #35ff69; animation: blink 0.8s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }
.cli-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid rgba(53,255,105,0.5); border-radius: 8px; color: #e8f5e9; background: rgba(53,255,105,0.08); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04); transition: all .18s ease; }
.cli-btn:hover { border-color: rgba(53,255,105,0.8); box-shadow: 0 0 12px rgba(53,255,105,0.25); }
```

**可选部分：间距 / 图标**
- 间距基线 8px；区块间距 20–24px；内边距 14–20px。
- 图标可用线描终端/服务器符号，绿色或青色描边。
- 支持 tab 栏或顶栏指示灯（红/黄/绿）。

**重要提示**
- 保留 `.cli-shell`、`.cli-panel`、`.prompt-line`、`.cli-cursor`、`.cli-btn` 类名。
- 避免过度发光或模糊；保持清晰对比和等宽排版。
- 输出完整 HTML（header/main/section/footer），不含额外说明。

---

## English Version (en-US)

Build a “Terminal/CLI” themed page: green-on-black, mono type, blinking cursor, split panels for commands/logs, and minimalist CTAs. Provide runnable HTML/CSS (or JSX classNames).

**Core**
- Dark terminal background with mono fonts.
- Command panel + log panel; prompt prefix and highlighted path.
- Blinking block cursor; optional scanline overlay.
- Buttons styled as keyboard/terminal controls.
- Layout: hero command snippet + dual CTAs, grid of feature/log cards, footer shortcuts.

**Palette** Background #060b06/#0d0f10, Green #35ff69, Accent Cyan #52d1ff, Text #e8f5e9.

**Key Classes**
- `.cli-shell`, `.cli-panel`, `.prompt-line`, `.cli-output`, `.cli-cursor`, `.cli-btn`.

**Notes**
- Keep class names; high contrast; minimal glow.
- Output full HTML only (header/main/section/footer).

---

**Comprehensive Implementation Guide**

**Visual Design Principles**:
- Establish clear visual hierarchy through size, color, contrast, and positioning
- Apply consistent spacing rhythm using modular scale (8px, 16px, 24px, 32px, 48px, 64px base units)
- Create focal points using visual weight: size contrast, color saturation, detail complexity
- Balance symmetry and asymmetry: use symmetric grids with asymmetric content placement
- Implement depth through layering: use z-index, shadows, overlaps, and transparency
- Design for scannability: users should grasp content structure within 3-5 seconds

**Color System Architecture**:
- Define semantic colors: primary (brand), secondary (support), success, warning, error, info
- Create comprehensive shade scales: 50 (lightest) through 900 (darkest) for each color
- Implement alpha variants for transparency needs (e.g., primary-500/50 for 50% opacity)
- Use CSS custom properties for dynamic theming and easy maintenance
- Apply color psychology strategically: blue for trust, green for success, red for urgency
- Test color combinations for sufficient contrast and accessibility compliance

**Component Design Patterns**:
- Buttons: Establish primary, secondary, tertiary, and ghost variants with clear hierarchy
- Cards: Design consistent card anatomy (image, title, description, actions) with flexible layouts
- Forms: Implement clear states (default, focus, filled, error, disabled, success)
- Navigation: Create persistent, clear navigation with current page indication
- Modals: Design with backdrop, proper focus management, and ESC key dismissal
- Tooltips: Position intelligently with collision detection to stay within viewport

**Interaction Design Details**:
- Provide instant visual feedback for all user actions within 100ms
- Use appropriate cursor styles: pointer for clickable, grab for draggable, text for editable
- Implement hover states that preview action outcomes when appropriate
- Apply loading states for asynchronous operations: spinners, skeletons, progress bars
- Design error states with clear messaging and recovery actions
- Add success confirmation with appropriate timing (2-4s auto-dismiss for non-critical)

**Animation Best Practices**:
- Follow duration guidelines: micro (100-200ms), macro (300-500ms), cinematic (600-1000ms+)
- Use appropriate easing: ease-out for entrances, ease-in for exits, ease-in-out for moves
- Implement meaningful motion: animations should communicate state or relationship
- Respect performance budgets: limit simultaneous animations, use GPU-accelerated properties
- Provide animation controls: pause, speed adjustment for user preference
- Test animations on low-end devices to ensure acceptable performance

**Responsive Design Strategy**:
- Start mobile-first: design for smallest screen, progressively enhance for larger
- Define clear breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Implement content-first responsive: adjust based on content needs, not just device sizes
- Use fluid layouts: combine fixed, flexible, and hybrid sizing strategies appropriately
- Test on real devices across iOS, Android, different browsers for actual user experience
- Consider orientation changes: design works in both portrait and landscape modes

**Performance Optimization Techniques**:
- Minimize render-blocking resources: inline critical CSS, defer non-critical JavaScript
- Implement lazy loading for images, videos, and below-fold content
- Use appropriate image formats: SVG for graphics, WebP/AVIF for photos
- Apply code splitting to load features on demand, reducing initial bundle size
- Optimize fonts: subset to required glyphs, use font-display: swap
- Minimize DOM depth and complexity: flatten structure where possible
- Use CSS containment to isolate expensive rendering work
- Implement resource hints: preconnect, prefetch, preload for critical resources

**Accessibility Standards Compliance**:
- Ensure WCAG 2.1 Level AA compliance minimum across all pages and components
- Implement semantic HTML: proper heading hierarchy, landmark regions, lists
- Provide keyboard navigation: all functionality available without mouse
- Add visible focus indicators: 3px+ outlines with sufficient contrast
- Include skip links for keyboard users to bypass repetitive content
- Ensure form labels and error messages are programmatically associated
- Add ARIA attributes where needed: aria-label, aria-describedby, aria-live
- Test with assistive technologies: screen readers, voice control, switch devices
- Provide text alternatives: alt text for images, captions for videos, transcripts for audio
- Respect user preferences: prefers-reduced-motion, prefers-color-scheme, prefers-contrast

**Testing & Quality Assurance**:
- Test across browsers: Chrome, Firefox, Safari, Edge for visual and functional consistency
- Validate on real devices: iOS, Android, tablets, desktops with different screen sizes
- Check with browser DevTools: accessibility audit, performance profiling, network throttling
- Use automated testing tools: Lighthouse, axe DevTools, WAVE for accessibility and performance
- Perform manual keyboard testing: ensure complete navigation without mouse
- Test with screen readers: verify content is announced correctly and in logical order
- Validate HTML and CSS: use W3C validators to catch syntax errors
- Conduct usability testing with real users to identify friction points

