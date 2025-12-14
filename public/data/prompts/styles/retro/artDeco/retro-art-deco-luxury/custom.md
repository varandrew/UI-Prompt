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
