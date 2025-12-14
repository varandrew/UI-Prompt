# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建「像素艺术」界面，体现 8-bit/16-bit 复古游戏质感：有限色板、方块像素、粗描边按钮与低分辨率背景图块。输出可直接运行的 HTML/CSS（或 JSX 类名），包含 Hero、像素卡片、功能区与 CTA。
**核心设计要求**
1. **像素网格感**
   - 背景可用平铺小图（8–16px tile）；或使用 `box-shadow` 重复模拟像素块。
2. **有限色板**
   - 6–8 色以内；高饱和+对比；保持统一。
3. **像素按钮与卡片**
   - `.pixel-btn` 使用阶梯状边框（`outline` + `box-shadow` 模拟像素台阶）；`.pixel-card` 方正直角 + 粗描边。

Build a “Pixel Art” page with 8/16-bit aesthetics: limited palette, blocky pixels, stepped borders, and mono/pixel fonts. Provide runnable HTML/CSS (or JSX classNames) with hero, pixel cards, feature grid, and CTA.

**Core**
- Tileable pixel background; limited 6–8-color palette.
- Square cards/buttons with hard-edged shadows; pixel/mono typography.
- Layout: hero + dual CTAs, grid of feature/level cards, leaderboard/hint box.
- Hover: color inversion or tiny translation; no blur shadows.

**Palette** Dark #0f1021/#1f2540, Yellow #ffcc00, Coral #ff5e5b, Cyan #00c2ff, Border #1b1b1b, Text #f5f7ff.

**Key Classes**
- `.pixel-shell`, `.pixel-grid`, `.pixel-card`, `.pixel-title`, `.pixel-btn`, `.pixel-alert`.

**Notes**
- Keep class names; avoid blur/round corners; keep contrast high.
- Output full HTML only (header/main/section/footer).

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

---

## English Version (en-US)

Build a “Pixel Art” page with 8/16-bit aesthetics: limited palette, blocky pixels, stepped borders, and mono/pixel fonts. Provide runnable HTML/CSS (or JSX classNames) with hero, pixel cards, feature grid, and CTA.

**Core**
- Tileable pixel background; limited 6–8-color palette.
- Square cards/buttons with hard-edged shadows; pixel/mono typography.
- Layout: hero + dual CTAs, grid of feature/level cards, leaderboard/hint box.
- Hover: color inversion or tiny translation; no blur shadows.

**Palette** Dark #0f1021/#1f2540, Yellow #ffcc00, Coral #ff5e5b, Cyan #00c2ff, Border #1b1b1b, Text #f5f7ff.

**Key Classes**
- `.pixel-shell`, `.pixel-grid`, `.pixel-card`, `.pixel-title`, `.pixel-btn`, `.pixel-alert`.

**Notes**
- Keep class names; avoid blur/round corners; keep contrast high.
- Output full HTML only (header/main/section/footer).

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
