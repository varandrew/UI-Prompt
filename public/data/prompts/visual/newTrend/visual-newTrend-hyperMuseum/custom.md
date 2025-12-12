# Custom Prompt

## 中文版本 (zh-CN)

为 New Trend 主题的子页面生成 HTML/CSS：
- 保持非对称排版与大胆色块，结合玻璃/渐变/颗粒/粗描边元素。
- 版面包含标题、说明、CTA、3-5 张亮点卡片或案例模块，留足 24px 以上行距与呼吸感。
- 按钮与标签使用强反馈的 hover/focus（色相/亮度切换或轻微位移），动画 < 300ms。
- 颜色控制在 3-4 个主色并提供暗/亮模式对比，确保文字可读性与键盘可达性。

---

## English Version (en-US)

Generate HTML/CSS for a New Trend subpage:
- Keep asymmetrical layouts with bold color blocks plus glass/gradient/grain/bold-stroke elements.
- Include title, description, CTA, and 3–5 highlight cards or case modules with 24px+ line height and breathing space.
- Buttons and chips need strong hover/focus feedback (hue/brightness shifts or slight movement) under 300ms.
- Limit to 3–4 core colors and provide dark/light contrast, ensuring text readability and keyboard accessibility.

---

**Comprehensive Implementation Framework**

**Design System Integration**: Ensure components integrate seamlessly with existing design systems. Use design tokens (CSS custom properties) for colors, spacing, typography. Maintain consistency with established patterns while allowing customization.

**Component API Design**: Create intuitive, well-documented prop interfaces. Support common use cases out-of-the-box while allowing advanced customization. Provide sensible defaults that work in most scenarios.

**Advanced Styling Techniques**: Implement modern CSS features including Grid, Flexbox, Custom Properties, Logical Properties, Container Queries (where supported). Use CSS-in-JS or utility-first approaches as appropriate for the project.

**State Management Patterns**: Handle component state effectively using hooks, reducers, or state machines. Manage loading, error, success states with clear visual indicators. Implement optimistic updates for better perceived performance.

**Animation Engineering**: Create smooth, performant animations using CSS transforms and opacity. Implement spring physics for natural motion. Use requestAnimationFrame for JavaScript animations. Respect user motion preferences.

**Accessibility Excellence**: Implement full keyboard support with visible focus indicators. Add proper ARIA attributes for screen readers. Ensure color contrast meets WCAG standards. Support assistive technologies comprehensively.

**Performance Optimization**: Minimize bundle size through code splitting and tree shaking. Implement lazy loading for heavy components. Optimize re-renders using memoization. Use web workers for intensive computations.

**Error Handling & Resilience**: Provide graceful degradation when features aren't supported. Implement error boundaries to catch rendering errors. Display helpful error messages with recovery actions. Log errors appropriately for debugging.

**Testing Strategies**: Write comprehensive unit tests for component logic. Implement integration tests for user workflows. Add accessibility tests using jest-axe or similar tools. Perform visual regression testing for UI consistency.

**Responsive Design**: Implement mobile-first responsive layouts. Use fluid typography and spacing. Optimize touch targets for mobile (48x48px minimum). Test on actual devices across iOS and Android platforms.

**Browser Support**: Ensure compatibility with modern browsers (last 2 versions). Provide polyfills for critical features. Use feature detection for progressive enhancement. Test thoroughly across Chrome, Firefox, Safari, and Edge.

**Code Quality Standards**: Follow consistent naming conventions and code style. Write self-documenting code with clear variable and function names. Add comments for complex logic. Maintain type safety using TypeScript or JSDoc.

**Documentation Requirements**: Provide clear usage examples showing common scenarios. Document all props, events, and methods. Include accessibility notes and keyboard shortcuts. Offer migration guides for breaking changes.

**Internationalization Support**: Design components to support multiple languages and locales. Handle text directionality (LTR/RTL). Format dates, numbers, and currencies appropriately. Provide translation-friendly component structure.

**Security Considerations**: Sanitize user inputs to prevent XSS attacks. Validate data on both client and server. Use Content Security Policy headers. Implement rate limiting for user actions. Handle sensitive data appropriately.

