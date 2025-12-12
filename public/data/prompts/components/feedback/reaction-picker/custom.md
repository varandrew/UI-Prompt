# Custom Prompt

## 中文版本 (zh-CN)

### 表情反应选择器

社交互动表情选择器，支持多种设计风格

**分类**：反馈组件

**使用指南**：
此组件可以与不同的 UI 风格变体进行自定义。选择适合您设计系统的变体。

**可用变体**：
- **Material Design**：Google 设计规范，圆润卡片
- **玻璃态**：半透明毛玻璃效果
- **新拟态**：柔和浮雕效果
- **极简主义**：简洁黑白设计

**实施注意事项**：
- 确保适当的可访问性属性
- 在不同屏幕尺寸上进行测试
- 验证颜色对比度以确保可读性

---

## English Version (en-US)

### Reaction Picker

Social interaction emoji picker with multiple design styles

**Category**: Feedback Components

**Usage Guidelines**:
This component can be customized with different UI style variants. Choose the variant that best fits your design system.

**Available Variants**:
- **Material Design**: Google design specs with rounded cards
- **Glassmorphism**: Semi-transparent frosted glass effect
- **Neumorphism**: Soft embossed effect
- **Minimalism**: Clean black and white design

**Implementation Notes**:
- Ensure proper accessibility attributes
- Test across different screen sizes
- Validate color contrast for readability

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

