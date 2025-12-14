# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个 **Accessibility High Contrast（高对比无障碍）** 风格的企业仪表板界面，重点保证对比度、可读性和键盘可访问性。

**核心设计要求**

1. **色彩与对比度**
   - 主配色为黑白高对比：白底黑字或黑底亮色文字。
   - 对比度需满足 WCAG AA 甚至 AAA（文本对背景 7:1 以上）。
   - 可以提供黑白 / 黑黄 / 黑青等主题按钮切换。

2. **粗边框与清晰分区**
   - 使用 4px 实线黑色边框勾勒卡片、按钮和输入框。
   - 区块标题下方加粗实线分隔（如 4px 黑线），使结构一眼可见。

3. **大字号与字重**
   - 标题：\`text-2xl~3xl font-black\`
   - 正文与标签：\`text-base~lg font-bold\`，避免过细字体。

4. **键盘导航与焦点样式**
   - 所有可点击元素必须有清晰的 \`:focus-visible\` 样式，例如：
     \`\`\`css
     *:focus-visible {
       outline: 4px solid #3B82F6;
       outline-offset: 2px;
     }
     \`\`\`
   - 布局需完全可通过键盘（Tab、Shift+Tab、Enter、Space）操作。

5. **布局与模块**
   - 典型布局包含：
     - 顶部导航（粗边框 + 大字号菜单）。
     - 关键指标卡片（Total Users 等）。
     - 条形图 / 进度条模块。
     - 大字号表单区（任务名称、优先级、描述）。
     - 按钮组展示主要 / 次要 / 禁用状态。

**重要提示**
- 不要仅用颜色传达状态，需搭配文字或图标。
- 悬停与聚焦状态必须明显可区分，且对低视力用户也易察觉。
- 动效应简洁，可提供「减少动效」选项以照顾对运动敏感用户。


---

## English Version (en-US)

Create an **Accessibility High Contrast** enterprise dashboard using TailwindCSS, focusing on contrast, legibility, and keyboard accessibility.

**Core Design Requirements**

1. **Color and Contrast**
   - Primary scheme: black and white with very high contrast.
   - Aim for WCAG AA/AAA contrast (7:1+ for text vs background).
   - Provide theme toggles such as black-on-white, black-on-yellow, and cyan-on-black.

2. **Bold Borders and Clear Sections**
   - Use 4px solid black borders around cards, inputs, and buttons.
   - Emphasize section headers with thick bottom borders to clarify structure.

3. **Large Type and Strong Weight**
   - Titles: \`text-2xl–3xl font-black\`.
   - Body and labels: \`text-base–lg font-bold\` for easy scanning.

4. **Keyboard Navigation and Focus**
   - Every interactive element must have a visible \`:focus-visible\` ring (for example a 4px blue outline with offset).
   - Layout must be fully navigable with the keyboard only, without relying on pointer devices.

5. **Layout and Modules**
   - Include: main nav, key metric cards, performance bars, a large form section, and a button group.
   - Use solid black fills for progress bars to convey values clearly, without subtle gradients.

**Important Notes**
- Do not rely on color alone for status; pair colors with text or icons.
- Focus and hover states must be obvious and clearly distinct.
- Consider a “reduce motion” toggle for users sensitive to animation.

**Advanced Implementation Guidelines**

**Color Contrast Management**:
- Use tools like Chrome DevTools, axe DevTools, or WAVE to audit contrast ratios continuously
- Create a contrast matrix documenting all color combinations used in the interface
- Test against WCAG AAA (7:1) where possible for enhanced accessibility beyond minimum requirements
- Implement high-contrast mode toggle allowing users to switch to maximum contrast palette
- Ensure contrast is maintained across all UI states (default, hover, focus, active, disabled, loading)

**Typography Accessibility**:
- Use relative units (rem, em) instead of pixels to respect user font size preferences
- Implement fluid typography with clamp() to scale proportionally across screen sizes
- Maintain line-height of 1.5-1.8 for body text to improve readability for dyslexic users
- Avoid justified text alignment which creates uneven spacing (use left-align instead)
- Ensure font weights are sufficiently different (minimum 200 weight difference) for clear hierarchy

**Interactive Element Accessibility**:
- All clickable elements must have minimum 44x44px touch target size (WCAG 2.5.5)
- Implement clear focus indicators with 3px+ outline and sufficient color contrast
- Provide focus-visible styles that only show for keyboard navigation
- Ensure disabled states are visually distinct and announced to screen readers
- Add loading states with ARIA live regions to announce progress to screen readers

**Form Accessibility Best Practices**:
- Associate labels with inputs using explicit for/id relationship or implicit nesting
- Provide clear error messages with specific instructions for correction
- Use aria-required, aria-invalid, and aria-describedby for enhanced screen reader support
- Implement inline validation with both visual and programmatic feedback
- Group related inputs using fieldset and legend elements
- Add help text using aria-describedby to provide additional context

**Animation & Motion Accessibility**:
- Implement comprehensive prefers-reduced-motion support disabling all non-essential animations
- For essential animations, reduce speed and intensity when motion preferences are set
- Avoid parallax effects and rapid animations that can cause vestibular disorders
- Provide pause/play controls for auto-playing content (videos, carousels, animations)
- Ensure animations don't interfere with content readability or usability
