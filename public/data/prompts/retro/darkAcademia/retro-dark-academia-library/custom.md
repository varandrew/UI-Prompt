# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「Dark Academia 图书馆」界面，呈现复古学术氛围：深棕木质、黄铜灯光、纸本文档与打字机字体。输出可直接运行的 HTML/CSS（或 JSX 类名），包含 Hero、馆藏/课程卡片、阅读列表、订阅 CTA。

**核心设计要求**

1. **色调与质感**
   - 背景使用深棕/墨绿渐变，叠加噪声纹理；卡片 `.academia-card` 采用仿纸或皮质暗纹。
2. **排版**
   - 标题：衬线/打字机字体（'Cormorant', 'Playfair Display', 'DM Serif', 'IBM Plex Serif'）；正文：等宽或细衬线；行距 1.6–1.8。
3. **分隔与装饰**
   - 使用细线与小圆点/书签图标 `.ink-divider`；章节标题前可加短横或卷轴符号。
4. **按钮与标签**
   - `.brass-btn` 仿黄铜：暖金描边 + 暗色填充，hover 提亮；`.tag` 使用纸张底色 + 细描边。
5. **布局**
   - Hero（馆藏主题 + CTA）、双列卡片（稀有藏书/课程/讲座）、阅读列表（时间线或表格）、底部订阅/预约模块；留足边距与呼吸感。

**配色方案（深棕书房）**
- 背景：#0f0c0a, #1a140f, #1f2a24
- 纸张：#f0e5d8, #e5d5bd
- 黄铜：#c8a66a, #ae8745
- 墨绿/暗红点缀：#304236, #5a2a27
- 文本：#f8f4ec / rgba(248,244,236,0.85)

**关键 CSS 类示例**

```css
.academia-shell { padding: 28px 22px; background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.04), transparent 50%), linear-gradient(135deg, #1a140f, #0f0c0a); border-radius: 14px; box-shadow: 0 18px 40px rgba(0,0,0,0.55); }
.academia-card { background: linear-gradient(160deg, rgba(34,27,20,0.94), rgba(24,19,14,0.94)); border: 1px solid rgba(200,166,106,0.45); border-radius: 12px; padding: 18px; box-shadow: 0 12px 28px rgba(0,0,0,0.45); transition: all .2s ease; }
.academia-card:hover { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(0,0,0,0.55); border-color: rgba(200,166,106,0.65); }
.ink-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(200,166,106,0.6), transparent); margin: 12px 0; }
.brass-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: 10px; background: linear-gradient(135deg, rgba(50,39,29,0.95), rgba(26,20,15,0.95)); color: #f8f4ec; border: 1px solid rgba(200,166,106,0.7); box-shadow: 0 8px 18px rgba(0,0,0,0.35); letter-spacing: 0.05em; }
.brass-btn:hover { filter: brightness(1.05); box-shadow: 0 12px 26px rgba(0,0,0,0.45); }
.tag { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px; background: rgba(240,229,216,0.1); border: 1px solid rgba(200,166,106,0.35); color: #f0e5d8; }
```

**可选部分：间距 / 字体 / 图标**
- 间距基线 8px；区块间距 24–32px；卡片内边距 16–20px。
- 图标：线描羽毛笔/书本/时钟，黄铜色；尺寸 16–20px。
- 列表使用圆点或短横；引用块添加左侧线条和斜体。

**重要提示**
- 保留 `.academia-shell`、`.academia-card`、`.ink-divider`、`.brass-btn` 类名以便复用。
- 控制对比度：深背景 + 纸色文字；避免大面积亮色。
- 移动端缩减阴影与装饰线，保持性能。
- 输出完整 HTML（header/main/section/footer），不添加额外解释。

---

## English Version (en-US)

Design a “Dark Academia Library” page: dark wood, brass glow, paper-like cards, typewriter/serif typography. Provide runnable HTML/CSS (or JSX classNames) with hero, collection/course cards, reading list, and a subscription CTA.

**Core**
- Deep brown/ink-green background with noise; paper/brass accents.
- Serif/typewriter titles; generous line-height.
- Decorative ink dividers; brass-styled buttons `.brass-btn`; paper tags.
- Layout: hero, 2–3 column cards (rare books/courses/lectures), reading list, footer CTA.
- Motion: subtle hover lift/brightness; 180–220ms.

**Palette** Dark #0f0c0a/#1a140f, Paper #f0e5d8, Brass #c8a66a, Accents #304236/#5a2a27, Text #f8f4ec.

**Key Classes**
- `.academia-shell`, `.academia-card`, `.ink-divider`, `.brass-btn`, `.tag` (see CSS block).

**Notes**
- Preserve class names; ensure readable contrast; trim ornaments on mobile.
- Output full HTML only (header/main/section/footer).

---

**Implementation Best Practices**

**Layout & Composition**:
- Use CSS Grid for precise alignment and structured layouts (grid-template-columns: repeat(12, 1fr))
- Implement asymmetric balance: pair large elements with smaller complementary pieces
- Apply golden ratio (1.618) for proportional spacing and element sizing
- Create visual focal points using size contrast, color contrast, and positioning
- Maintain consistent margins and padding rhythm using 8px or 12px base unit
- Use max-width containers (max-w-6xl to max-w-7xl) for optimal reading line length

**Typography Excellence**:
- Establish clear type scale with sufficient size differentiation between levels (1.25-1.5 ratio)
- Apply proper line-height for optimal readability: 1.4-1.6 for headings, 1.6-1.8 for body
- Use appropriate font weights: avoid single-weight designs, vary from 300-700+
- Implement responsive typography with clamp() for fluid scaling across viewports
- Maintain optimal line length: 60-75 characters for body text, shorter for headings
- Pair fonts thoughtfully: maximum 2-3 font families, ensure visual harmony

**Color Theory Application**:
- Define primary, secondary, and accent colors with clear purpose and hierarchy
- Create tints and shades for each main color (5-7 variations: 100, 200, 300... 900)
- Ensure sufficient contrast ratios: 4.5:1 for text, 3:1 for UI components (WCAG AA)
- Apply 60-30-10 rule: 60% dominant color, 30% secondary, 10% accent
- Test color combinations for accessibility with colorblind simulation tools
- Use color psychology: warm colors for energy/action, cool colors for calm/trust

**Interactive States & Feedback**:
- Implement clear visual feedback for all interactive elements (hover, active, focus, disabled)
- Use multi-property transitions for smooth state changes: color, transform, shadow simultaneously
- Apply appropriate timing: quick for buttons (200-300ms), slower for complex reveals (400-600ms)
- Provide loading states for asynchronous actions with spinners or skeleton screens
- Use micro-interactions to delight users: subtle bounces, ripples, or morphs on interaction
- Ensure disabled states are visually distinct but maintain sufficient contrast

**Animation Principles**:
- Follow Disney's 12 principles of animation: ease-in, ease-out, anticipation, follow-through
- Use spring-based physics for natural, organic motion feel
- Implement easing curves that match content: bounce for playful, ease-out for professional
- Stagger animations when revealing multiple elements (50-150ms delays)
- Respect animation budgets: limit simultaneous animations to 5-8 elements
- Provide prefers-reduced-motion alternatives: instant transitions or simple fades

**Performance Optimization**:
- Use CSS transforms and opacity for animations (GPU accelerated properties)
- Implement lazy loading for images and components below the fold
- Apply code splitting to load features on demand, reducing initial bundle size
- Optimize images: compress, use appropriate formats (WebP, AVIF), responsive srcset
- Minimize DOM depth and complexity to improve rendering performance
- Use CSS containment for independent sections to isolate rendering work
- Implement virtual scrolling for long lists to render only visible items

**Cross-Browser Compatibility**:
- Test across Chrome, Firefox, Safari, Edge for consistent experience
- Provide fallbacks for modern CSS features (backdrop-filter, scroll-snap)
- Use autoprefixer or PostCSS to automatically add vendor prefixes
- Implement feature detection with @supports for progressive enhancement
- Ensure touch interactions work correctly on mobile browsers
- Test on actual devices, not just emulators, for real-world validation

**Accessibility Compliance**:
- Meet WCAG 2.1 Level AA standards minimum, aim for AAA where feasible
- Ensure keyboard navigation works for all functionality with visible focus states
- Provide sufficient color contrast for all text and interactive elements
- Add appropriate ARIA attributes: labels, roles, states, live regions
- Include skip links for keyboard users to bypass repetitive navigation
- Test with screen readers (NVDA, JAWS, VoiceOver) for actual user experience
- Provide text alternatives for all non-text content (images, icons, charts)
- Ensure forms have proper labels, error messages, and help text
- Respect user preferences: reduced motion, high contrast, color schemes

