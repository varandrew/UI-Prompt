# Custom Prompt

## 中文版本 (zh-CN)

### 范围滑块

范围滑块组件，用于选择具有双手柄的值范围

**分类**：进阶组件

**使用指南**：
此组件可以与不同的 UI 风格变体进行自定义。选择适合您设计系统的变体。

**可用变体**：
- **基础**：基础范围滑块设计，支持双手柄选择
- **Material**：Material Design 范围滑块设计，带有提升效果
- **玻璃态**：玻璃态范围滑块设计，具有毛玻璃效果
- **新拟态**：新拟态范围滑块设计，带有柔和的阴影和高光
- **Bootstrap**：Bootstrap 范围滑块设计，带有标准Bootstrap样式
- **glassmorphism-dual**：毛玻璃背景效果的双手柄范围滑块,支持区间选择,悬停时带有光晕效果。采用 Glassmorphism 设计风格,适合价格筛选、数据范围选择。

**实施注意事项**：
- 确保适当的可访问性属性
- 在不同屏幕尺寸上进行测试
- 验证颜色对比度以确保可读性

---

## English Version (en-US)

### Range Slider

Range slider component for selecting a range of values with dual handles

**Category**: Advanced Components

**Usage Guidelines**:
This component can be customized with different UI style variants. Choose the variant that best fits your design system.

**Available Variants**:
- **glassmorphism-dual**: Glassmorphism-style dual-handle range slider with glass background effect, supports range selection, with glow effect on hover. Suitable for price filtering and data range selection.

**Implementation Notes**:
- Ensure proper accessibility attributes
- Test across different screen sizes
- Validate color contrast for readability

---

**Advanced Implementation & Best Practices**

**Component Design Patterns**: Implement flexible, reusable component architecture with clear prop interfaces and composition patterns. Design for extensibility and maintainability.

**State Management**: Handle all component states effectively - loading, error, empty, disabled, success. Provide clear visual feedback for each state with appropriate timing and transitions.

**Animation & Transitions**: Apply purposeful motion that enhances user understanding. Use appropriate durations (150-400ms), easing curves (ease-out for entrances), and respect prefers-reduced-motion preferences.

**Responsive Behavior**: Ensure components adapt gracefully across all screen sizes. Implement touch-friendly targets (44x44px minimum), optimize layouts for mobile-first, and enhance progressively for larger screens.

**Accessibility Standards**: Meet WCAG 2.1 Level AA compliance with keyboard navigation, screen reader support, proper ARIA labels, focus management, and sufficient color contrast (4.5:1 minimum).

**Performance Optimization**: Minimize re-renders, implement virtual scrolling for long lists, lazy load heavy components, and optimize animations using GPU-accelerated properties (transform, opacity).

**Error Handling**: Provide clear error messages with actionable solutions. Handle edge cases gracefully with appropriate fallbacks and user guidance.

**Testing Strategy**: Implement comprehensive testing including unit tests for logic, integration tests for component interactions, accessibility audits, and visual regression tests.

**Code Quality**: Write clean, self-documenting code with clear naming conventions, appropriate comments, and consistent patterns. Follow established style guides and best practices.

**User Experience**: Design intuitive interactions with instant feedback (<100ms), clear affordances, and progressive disclosure of complexity. Optimize for common use cases while supporting power users.

**Browser Compatibility**: Test across modern browsers (Chrome, Firefox, Safari, Edge) and provide fallbacks for newer CSS features using @supports and feature detection.

**Documentation**: Provide clear usage examples, prop documentation, and implementation guidelines for developers integrating these components.

**Internationalization**: Design components to support multiple languages with appropriate text directionality (LTR/RTL), date/number formatting, and translation-friendly patterns.

**Theme Support**: Implement theming capabilities using CSS custom properties, allowing easy customization of colors, spacing, and typography while maintaining design consistency.

