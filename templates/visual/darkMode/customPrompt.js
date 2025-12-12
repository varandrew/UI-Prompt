// Dark Mode Custom Prompt - Technical Implementation Guide
// 深色模式自定义 Prompt - 技术实现指南

export const darkModeCustomPrompt = {
  'zh-CN': `
**使用场景 (Usage Context):**
专为数据密集型应用设计，如服务器监控仪表盘（Server Monitoring Dashboard）、SaaS 管理后台、加密货币交易界面、开发者 IDE 环境或复杂的系统分析工具。此风格旨在支持长时间的沉浸式工作，通过降低屏幕亮度来减少视觉疲劳，同时保持极高的信息可读性。

**整体布局结构 (Layout Structure):**
- **网格系统**: 强烈建议使用 BENTO Grid 或模块化卡片布局。采用 CSS Grid 定义严格的区域（Sidebar, Header, Main Content）。
- **层级深度**: 虽然是扁平化设计，但需通过背景亮度的微小差异来区分层级。
  - 背景层：最深 (#0a0a0a)。
  - 内容层：次深 (#111111 - #1a1a1a)。
  - 悬浮层：较亮 (#262626)。
- **信息密度**: 高密度布局。统计卡片（Stats Card）应包含标题、主数值、趋势指示器和迷你图表（Sparkline）。

**色彩与材质 (Colors & Materials):**
- **深色基调**: 避免纯黑（#000000），推荐使用带有极其微弱冷色倾向的深灰（#0a0a0a 到 #1a1a1a 的线性渐变）。
- **主色调 (Primary)**: 科技蓝 (#3b82f6)。用于主要按钮、激活状态图标、关键数据的高亮。
- **语义色**:
  - 上升/成功：翡翠绿 (#10b981) 或 荧光绿。
  - 下降/警告：琥珀色 (#f59e0b) 或 橙色。
  - 错误/危险：玫瑰红 (#f43f5e)。
- **文字层级**:
  - 标题：灰白 (#f3f4f6)。
  - 正文：中灰 (#9ca3af)。
  - 辅助信息：深灰 (#6b7280)。

**关键 CSS 实现 (Key CSS Implementation):**
1.  **深色渐变背景 (Subtle Gradient Backgrounds)**:
    - 页面背景应用 \`background: linear-gradient(to bottom right, #0a0a0a, #171717)\`。
    - 卡片背景建议使用 \`bg-gray-900/50\` 配合 \`backdrop-blur-sm\`（如果位于复杂背景上）或纯色 \`bg-[#161616]\`。

2.  **边框与分隔 (Borders & Separators)**:
    - 在深色模式下，阴影（Shadows）的作用被削弱，边框变得至关重要。
    - 为卡片添加 1px 的微弱边框：\`border: 1px solid rgba(255, 255, 255, 0.08)\`。这能清晰地界定内容区域。

3.  **统计卡片与交互 (Interactive Stats Cards)**:
    - **Hover 效果**: 当鼠标悬停时，边框颜色变亮（如变为 #3b82f6 的低透明度版本），并产生轻微的上浮 \`transform: translateY(-2px)\`。
    - **趋势箭头**: 使用 SVG 图标。上升箭头配绿色文字，下降箭头配橙色文字。

4.  **进度条动画 (Progress Bar Animation)**:
    - 轨道（Track）：深色背景 \`bg-gray-800\`，圆角 \`rounded-full\`。
    - 填充（Fill）：主色调 \`bg-blue-500\`。
    - 动画：加载时宽度从 0% 过渡到目标值 \`transition: width 1s ease-out\`。可添加 \`box-shadow: 0 0 10px rgba(59, 130, 246, 0.5)\` 制造微弱的发光效果。

**交互与动效 (Interaction & Motion):**
- **微交互**: 按钮点击要有明显的 \`active:scale-95\` 反馈。
- **图表动态**: 数据加载时，图表线条应有绘制动画（Draw-in animation）。
- **状态切换**: 开关（Toggle）和复选框（Checkbox）应有平滑的颜色过渡。

**输出要求 (Output Requirements):**
- 必须确保 WCAG 2.0 AA 级对比度标准（尤其是灰色文字在深色背景上的可读性）。
- 使用 Tailwind CSS 的 \`dark:\` 前缀类或自定义颜色变量。
- 代码需包含具体的统计卡片组件示例（含 CPU/Memory 模拟数据）。
`,
  'en-US': `
**Usage Context:**
Designed for data-intensive applications such as Server Monitoring Dashboards, SaaS Admin Panels, Crypto Trading Interfaces, Developer IDE environments, or complex system analytics tools. This style is built to support long, immersive work sessions by reducing screen glare and visual fatigue while maintaining extremely high information readability.

**Layout Structure:**
- **Grid System**: Strongly recommended to use a BENTO Grid or modular card layout. Use CSS Grid to define strict areas (Sidebar, Header, Main Content).
- **Depth Hierarchy**: While the design is flat, depth must be distinguished by subtle differences in background lightness.
  - Background Layer: Darkest (#0a0a0a).
  - Content Layer: Medium Dark (#111111 - #1a1a1a).
  - Hover/Overlay Layer: Lighter (#262626).
- **Information Density**: High density. Stats Cards should include a title, primary metric, trend indicator, and sparkline chart.

**Colors & Materials:**
- **Base Tone**: Avoid pure black (#000000). Recommend very deep greys with a faint cool tint (Linear gradient from #0a0a0a to #1a1a1a).
- **Primary Color**: Tech Blue (#3b82f6). Used for primary buttons, active state icons, and highlighting key data.
- **Semantic Colors**:
  - Up/Success: Emerald Green (#10b981) or Neon Green.
  - Down/Warning: Amber (#f59e0b) or Orange.
  - Error/Danger: Rose Red (#f43f5e).
- **Text Hierarchy**:
  - Headings: Off-white (#f3f4f6).
  - Body: Medium Grey (#9ca3af).
  - Auxiliary: Dark Grey (#6b7280).

**Key CSS Implementation:**
1.  **Subtle Gradient Backgrounds**:
    - Apply \`background: linear-gradient(to bottom right, #0a0a0a, #171717)\` to the page body.
    - For card backgrounds, strictly use \`bg-gray-900/50\` with \`backdrop-blur-sm\` (if over complex elements) or solid \`bg-[#161616]\`.

2.  **Borders & Separators**:
    - In Dark Mode, shadows are less effective, making borders crucial.
    - Add a 1px subtle border to cards: \`border: 1px solid rgba(255, 255, 255, 0.08)\`. This clearly defines content boundaries.

3.  **Interactive Stats Cards**:
    - **Hover Effect**: Upon hover, the border color should brighten (e.g., to a low-opacity version of #3b82f6), accompanied by a slight lift \`transform: translateY(-2px)\`.
    - **Trend Arrows**: Use SVG icons. Up arrows paired with green text, down arrows with orange text.

4.  **Progress Bar Animation**:
    - Track: Dark background \`bg-gray-800\`, \`rounded-full\`.
    - Fill: Primary color \`bg-blue-500\`.
    - Animation: Width transitions from 0% to target value on load \`transition: width 1s ease-out\`. Add \`box-shadow: 0 0 10px rgba(59, 130, 246, 0.5)\` for a faint glow effect.

**Interaction & Motion:**
- **Micro-interactions**: Buttons should have a distinct \`active:scale-95\` feedback.
- **Chart Dynamics**: When data loads, chart lines should have a draw-in animation.
- **State Toggling**: Toggles and checkboxes should have smooth color transitions.

**Output Requirements:**
- Ensure WCAG 2.0 AA contrast standards are met (especially for grey text on dark backgrounds).
- Use Tailwind CSS \`dark:\` prefix classes or custom color variables.
- Code must include specific examples of Stats Card components (including mock CPU/Memory data).
`
};
