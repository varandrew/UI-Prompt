# Custom Prompt

## 中文版本 (zh-CN)

### 列表视图

列表视图组件，用于以垂直列表格式显示项目

**分类**：数据展示

**使用指南**：
此组件可以与不同的 UI 风格变体进行自定义。选择适合您设计系统的变体。

**可用变体**：
- **极简主义**：简洁极简的列表视图设计，带有简单的间距
- **Material Design**：Material Design列表视图，带有提升和波纹效果
- **Bootstrap 5**：Bootstrap 5列表视图设计，带有标准Bootstrap样式
- **新拟物化**：柔和的新拟物化列表视图设计，带有微妙的阴影
- **玻璃态**：玻璃态列表视图设计，具有毛玻璃效果

**实施注意事项**：
- 确保适当的可访问性属性
- 在不同屏幕尺寸上进行测试
- 验证颜色对比度以确保可读性

---

## English Version (en-US)

### List View

List view component for displaying items in a vertical list format

**Category**: Data Display

**Usage Guidelines**:
This component can be customized with different UI style variants. Choose the variant that best fits your design system.

**Available Variants**:
- **Minimalism**: Clean and minimal list view design with simple spacing
- **Material Design**: Material Design list view with elevation and ripple effects
- **Bootstrap 5**: Bootstrap 5 list view design with standard Bootstrap styling
- **Neumorphism**: Soft neumorphic list view design with subtle shadows
- **Glassmorphism**: Glassmorphic list view design with frosted glass effect

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

