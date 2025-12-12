# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「Art Deco 奢华大厅」界面，突出 1920s 装饰艺术几何、金属质感与对称布局。输出可直接运行的 HTML/CSS（或 JSX 类名），包含 Hero、特色卡片、服务栅格与 CTA。

**核心设计要求**

1. **几何对称骨架**
   - 使用网格或双列对称布局；大量垂直线、菱形/扇形分割；留白与对齐严格。
2. **金属质感边框**
   - `.deco-frame` 使用 `linear-gradient` 金色描边 + 细内阴影；圆角轻微（6–10px）；可叠加双线框。
     ```css
     .deco-frame {
       border: 1px solid rgba(212,175,55,0.85);
       box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05), 0 12px 32px rgba(0,0,0,0.35);
       background: linear-gradient(135deg, rgba(32,24,15,0.9), rgba(12,10,8,0.92));
     }
     ```
3. **装饰分隔与图形**
   - `.deco-divider` 使用重复线段/菱形图样；底部可加扇形放射渐变；图标保持线性几何。
4. **字体与排版**
   - 标题用衬线/Art Deco 风格（如 'Cinzel', 'Cormorant Garamond'），大写、字距 0.08–0.12em；正文用优雅无衬线或细衬线。
5. **交互与动效**
   - Hover 仅轻微高亮与阴影加深；按钮 `.deco-btn` 金色渐变 + 细描边；动画节奏 180–220ms。

**配色方案（奢华金黑）**
- 背景：#0b0a0a, #141112
- 金色：#d4af37, #f0d17a
- 翡翠点缀：#1f8a70, #2fbf71
- 文本：#f7f3e8 / rgba(247,243,232,0.82)
- 线条/分隔：rgba(212,175,55,0.55), rgba(255,255,255,0.06)

**关键 CSS 类示例**

```css
.deco-hero { padding: 32px 28px; border-radius: 12px; background: linear-gradient(145deg, rgba(12,10,8,0.92), rgba(20,17,18,0.94)); border: 1px solid rgba(212,175,55,0.75); box-shadow: 0 16px 38px rgba(0,0,0,0.45); }
.deco-frame { border: 1px solid rgba(212,175,55,0.85); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05), 0 12px 32px rgba(0,0,0,0.35); border-radius: 10px; padding: 18px; background: linear-gradient(135deg, rgba(32,24,15,0.9), rgba(12,10,8,0.92)); }
.deco-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(212,175,55,0.65), transparent); position: relative; }
.deco-divider::after { content: ''; position: absolute; left: 50%; top: -3px; width: 18px; height: 6px; background: radial-gradient(circle, rgba(212,175,55,0.9), transparent); transform: translateX(-50%); }
.deco-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 10px; background: linear-gradient(135deg, #f0d17a, #d4af37); color: #0b0a0a; font-weight: 700; letter-spacing: 0.06em; box-shadow: 0 8px 20px rgba(0,0,0,0.35); transition: all .2s ease; }
.deco-btn:hover { box-shadow: 0 12px 28px rgba(0,0,0,0.45); filter: brightness(1.06); }
```

**可选部分：间距 / 字体 / 图标**
- 间距基线 8px；Hero 与卡片内边距 18–28px；区块间距 24–32px。
- 图标使用线性几何（金色/象牙色描边），避免拟物渐变。
- 列表/时间轴可加细分隔线与小菱形 bullets。

**重要提示**
- 保留 `.deco-hero`、`.deco-frame`、`.deco-btn`、`.deco-divider` 等类名，便于样式复用。
- 控制高对比：背景深、文字浅；金色仅用于强调与分隔，避免满屏高亮。
- 移动端减少线条与分隔数量，保持简洁。
- 输出完整 HTML（header/main/section/footer），不含额外说明。

---

## English Version (en-US)

Create an “Art Deco Luxury Hall” page with 1920s geometric symmetry, metallic framing, and elegant serif headlines. Deliver copy-paste-ready HTML/CSS (or JSX classNames) with hero, feature cards, service grid, and CTA.

**Core Requirements**
- Symmetric grid layout with vertical lines/diamond motifs.
- Metallic frames (`.deco-frame`), subtle inner shadows, gentle corner radius.
- Decorative dividers with diamond/radiant accents.
- Serif Art Deco titles (uppercase, letter-spaced); refined sans/serif body.
- Gold-gradient buttons `.deco-btn`; restrained hover (brightness/shadow).

**Palette** Gold #d4af37/#f0d17a, Dark #0b0a0a, Accent Emerald #1f8a70/#2fbf71, Text #f7f3e8.

**Key Classes**
- `.deco-hero`, `.deco-frame`, `.deco-divider`, `.deco-btn` (see CSS block).

**Notes**
- Keep class names; ensure high contrast; gold for emphasis only.
- Mobile: reduce line density and ornaments.
- Output full HTML structure only, no extra explanations.

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

