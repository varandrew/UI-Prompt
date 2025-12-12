# Custom Prompt

## 中文版本 (zh-CN)

创建一个数据可视化（Data Visualization）风格的网页设计，以清晰的图表、仪表板和数据驱动的界面为核心。

**核心视觉特征**

色彩系统：
- **主色调**：专业蓝 (#2563eb, #3b82f6)、数据绿 (#10b981, #059669)、警告橙 (#f59e0b, #ea580c)、错误红 (#ef4444, #dc2626)
- **中性色**：深灰 (#1f2937, #111827)、浅灰 (#f3f4f6, #e5e7eb)、纯白 (#ffffff)
- **数据色板**：多色渐变用于图表分类（蓝、绿、紫、橙、粉、青、黄、红）
- **对比强**：背景深色配亮色数据，或浅色背景配深色数据

图表类型：
- **折线图**：时间序列数据，趋势分析，多条线对比
- **柱状图**：分类数据比较，垂直或水平排列
- **饼图/环形图**：占比关系，百分比展示
- **散点图**：相关性分析，数据分布
- **热力图**：密度分布，时间-事件矩阵
- **仪表盘**：实时指标，进度追踪
- **地图可视化**：地理数据，区域分布

**排版设计**

字体选择：
- 标题使用现代无衬线（如 Inter, Roboto, DM Sans）
- 数据标签使用等宽字体（如 Roboto Mono, IBM Plex Mono）
- 正文使用易读字体（如 Inter, Open Sans）

文字效果：
- 标题字号 32-48px，粗体 600-700
- 数据数字大字号 48-72px，粗体 700-900
- 标签小字号 12-14px，常规 400
- 对比度高，深色背景用白字，浅色背景用深字

数据展示：
- 数字使用等宽字体，对齐整齐
- 单位与数字分离，使用较小字号
- 百分比、增长率用颜色标记（绿涨红跌）
- 数据标签简洁，避免冗长

**界面组件**

仪表板布局：
- 卡片网格：2-4 列，每个卡片展示一个指标或图表
- 卡片设计：白色或深色背景，圆角 8-12px，阴影增强层次
- 标题区：指标名称，时间范围，筛选器
- 主数据区：大字号数字，变化趋势箭头，小图表
- 图表区：折线图、柱状图等可视化

图表组件：
- 坐标轴：细线 1px，浅灰色，标签 12px
- 网格线：虚线或细实线，透明度 10-20%
- 数据点：圆形 4-6px，悬停放大至 8-10px
- 数据线：粗细 2-3px，平滑曲线或折线
- 图例：右上或底部，色块 + 标签
- tooltip：悬停显示详细数据，白色背景，阴影

按钮与控件：
- 筛选按钮：小尺寸，圆角，激活态使用主色
- 时间范围选择：分段按钮，7天/30天/90天
- 下拉菜单：白色背景，深色文字，清晰分隔线
- 搜索框：带图标，灰色边框，focus 时蓝色边框

**数据表格**

表格设计：
- 表头：深色背景或粗体文字，固定顶部
- 单元格：高度 48-56px，内边距 12-16px
- 斑马纹：奇偶行不同背景色，提升可读性
- hover 效果：行高亮，浅色背景
- 对齐：数字右对齐，文字左对齐，居中对齐少用

排序与筛选：
- 排序图标：上下箭头，点击切换升降序
- 筛选图标：漏斗形，点击展开筛选面板
- 分页：底部显示，上一页/下一页，页码

**布局与构图**

页面结构：
- 顶部导航：Logo、菜单、用户信息、通知
- 左侧边栏：主导航、次级菜单、收起/展开
- 主内容区：仪表板、图表、表格
- 顶部摘要栏：关键指标卡片，横向排列
- 容器最大宽度：1440-1920px

仪表板布局：
- 12 列网格系统
- 卡片占据 3-6 列，灵活组合
- 重要指标放置在顶部或左侧
- 图表按重要性排序

间距与留白：
- 卡片间距：16-24px
- 区块间距：32-48px
- 内边距：16-24px（卡片）、24-32px（区块）

**动画与交互**

图表动画：
- 加载动画：数据从 0 增长至目标值，800-1200ms
- 折线图：线条从左至右绘制
- 柱状图：柱子从底部向上生长
- 饼图：扇形从 0 度旋转至目标角度
- 缓动函数：ease-out 或 cubic-bezier

交互反馈：
- hover：高亮数据点，显示 tooltip
- 点击：选中数据，其他数据降低透明度
- 拖拽：时间轴拖拽选择范围
- 缩放：图表放大/缩小，双击重置

实时更新：
- 新数据淡入，旧数据淡出
- 数字变化带有动画过渡
- 状态指示：加载中、更新中、错误

**技术实现要点**

图表库：
- Chart.js：轻量，易用，适合基础图表
- D3.js：强大，灵活，适合复杂可视化
- ECharts：功能丰富，中文友好
- Recharts：React 友好，声明式

响应式设计：
- 桌面：多列布局，完整图表
- 平板：2 列布局，简化图表
- 移动：单列布局，图表缩小或改为表格

性能优化：
- 虚拟滚动：大数据表格
- 数据分页：限制单次加载量
- canvas 渲染：大量数据点
- 懒加载：滚动加载图表

**无障碍考虑**

对比度：
- 图表颜色对比度 >3:1
- 文字对比度 >4.5:1
- 不仅依赖颜色区分数据（添加图案、标签）

可用性：
- 图表提供数据表格替代
- 键盘导航：Tab 切换元素
- 屏幕阅读器：图表描述，数据标签
- 放大缩放：支持浏览器缩放

**使用场景**

- 商业智能仪表板
- 财务报表系统
- 数据分析平台
- 监控告警系统
- 统计报告网站
- 项目管理工具

---

## English Version (en-US)

Create a Data Visualization web design focused on clear charts, dashboards, and data-driven interfaces.

**Core Visual Characteristics**

Color System:
- **Primary colors**: professional blue (#2563eb, #3b82f6), data green (#10b981, #059669), warning orange (#f59e0b, #ea580c), error red (#ef4444, #dc2626)
- **Neutral colors**: dark gray (#1f2937, #111827), light gray (#f3f4f6, #e5e7eb), pure white (#ffffff)
- **Data palette**: multi-color gradients for chart categories (blue, green, purple, orange, pink, cyan, yellow, red)
- **High contrast**: dark backgrounds with bright data, or light backgrounds with dark data

Chart Types:
- **Line charts**: time series data, trend analysis, multiple line comparisons
- **Bar charts**: categorical data comparison, vertical or horizontal
- **Pie/donut charts**: proportion relationships, percentage display
- **Scatter plots**: correlation analysis, data distribution
- **Heatmaps**: density distribution, time-event matrix
- **Gauges**: real-time metrics, progress tracking
- **Map visualization**: geographic data, regional distribution

**Typography Design**

Font Selection:
- Headlines use modern sans-serif (e.g., Inter, Roboto, DM Sans)
- Data labels use monospace fonts (e.g., Roboto Mono, IBM Plex Mono)
- Body text uses readable fonts (e.g., Inter, Open Sans)

Text Effects:
- Headline size 32-48px, bold 600-700
- Large data numbers 48-72px, bold 700-900
- Small labels 12-14px, regular 400
- High contrast: white on dark backgrounds, dark on light backgrounds

Data Display:
- Numbers use monospace fonts, aligned neatly
- Units separated from numbers, smaller font size
- Percentages, growth rates marked with colors (green up, red down)
- Data labels concise, avoid verbosity

**UI Components**

Dashboard Layout:
- Card grid: 2-4 columns, each card shows one metric or chart
- Card design: white or dark background, border-radius 8-12px, shadows enhance hierarchy
- Header area: metric name, time range, filters
- Main data area: large numbers, trend arrows, small charts
- Chart area: line charts, bar charts, etc.

Chart Components:
- Axes: thin 1px lines, light gray, labels 12px
- Grid lines: dashed or thin solid lines, 10-20% opacity
- Data points: circles 4-6px, enlarge to 8-10px on hover
- Data lines: thickness 2-3px, smooth curves or polylines
- Legend: top-right or bottom, color blocks + labels
- Tooltip: hover shows detailed data, white background, shadow

Buttons & Controls:
- Filter buttons: small size, rounded, active state uses primary color
- Time range selector: segmented buttons, 7 days/30 days/90 days
- Dropdown menus: white background, dark text, clear dividers
- Search box: with icon, gray border, blue border on focus

**Data Tables**

Table Design:
- Header: dark background or bold text, fixed at top
- Cells: height 48-56px, padding 12-16px
- Zebra stripes: alternating row colors for readability
- Hover effect: row highlight, light background
- Alignment: numbers right-aligned, text left-aligned, minimal center alignment

Sorting & Filtering:
- Sort icons: up/down arrows, click to toggle ascending/descending
- Filter icons: funnel shape, click to expand filter panel
- Pagination: bottom display, previous/next, page numbers

**Layout & Composition**

Page Structure:
- Top navigation: logo, menu, user info, notifications
- Left sidebar: main navigation, secondary menu, collapse/expand
- Main content area: dashboards, charts, tables
- Top summary bar: key metric cards, horizontal layout
- Max container width: 1440-1920px

Dashboard Layout:
- 12-column grid system
- Cards occupy 3-6 columns, flexible combinations
- Important metrics placed at top or left
- Charts ordered by importance

Spacing & Whitespace:
- Card spacing: 16-24px
- Block spacing: 32-48px
- Padding: 16-24px (cards), 24-32px (blocks)

**Animation & Interaction**

Chart Animations:
- Load animation: data grows from 0 to target value, 800-1200ms
- Line charts: lines draw left to right
- Bar charts: bars grow from bottom up
- Pie charts: sectors rotate from 0 degrees to target angle
- Easing: ease-out or cubic-bezier

Interaction Feedback:
- Hover: highlight data points, show tooltip
- Click: select data, reduce opacity of others
- Drag: timeline drag to select range
- Zoom: chart zoom in/out, double-click to reset

Real-time Updates:
- New data fades in, old data fades out
- Number changes with animated transitions
- Status indicators: loading, updating, error

**Technical Implementation**

Chart Libraries:
- Chart.js: lightweight, easy to use, basic charts
- D3.js: powerful, flexible, complex visualizations
- ECharts: feature-rich, Chinese-friendly
- Recharts: React-friendly, declarative

Responsive Design:
- Desktop: multi-column layout, full charts
- Tablet: 2-column layout, simplified charts
- Mobile: single-column layout, charts scaled or converted to tables

Performance Optimization:
- Virtual scrolling: large data tables
- Data pagination: limit single load amount
- Canvas rendering: massive data points
- Lazy loading: scroll-triggered chart loading

**Accessibility Considerations**

Contrast:
- Chart color contrast >3:1
- Text contrast >4.5:1
- Don't rely on color alone to differentiate data (add patterns, labels)

Usability:
- Charts provide data table alternatives
- Keyboard navigation: Tab to switch elements
- Screen readers: chart descriptions, data labels
- Zoom support: browser zoom compatibility

**Use Cases**

- Business intelligence dashboards
- Financial reporting systems
- Data analytics platforms
- Monitoring alert systems
- Statistical report websites
- Project management tools
