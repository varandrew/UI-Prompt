# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个全面展示现代 CSS 布局技术的示范页面，系统地呈现网格系统、Flexbox 模式和响应式设计基础。

**布局系统核心概念**：

**12 列网格系统**：
- 实现标准 12 列网格布局，展示 1/12 到 12/12 的所有列宽组合
- 网格容器最大宽度：1280px（xl）、1536px（2xl）
- 列间距（gutter）：16px（移动端）、24px（平板）、32px（桌面）
- 展示常用列组合：单列、二等分、三等分、四等分、2:1 黄金比例、3:9 侧边栏布局
- 使用可视化网格线标注，显示列边界和间距区域
- 添加行号和列号标记，便于理解网格结构

**CSS Grid 布局技术**：
- 演示 `display: grid` 基础语法和属性
- 展示 `grid-template-columns` 的多种定义方式：
  - 固定宽度：`300px 300px 300px`
  - 百分比：`33.33% 33.33% 33.33%`
  - fr 单位：`1fr 2fr 1fr`（展示比例分配）
  - repeat 函数：`repeat(3, 1fr)`, `repeat(auto-fit, minmax(250px, 1fr))`
  - minmax 函数：`minmax(200px, 1fr)` 展示弹性范围
- 展示 `grid-template-rows` 行高控制
- 演示 `gap`, `row-gap`, `column-gap` 间距属性
- 展示 `grid-column` 和 `grid-row` 跨列跨行
- 演示 `grid-template-areas` 命名网格区域布局

**Flexbox 布局技术**：
- 演示 `display: flex` 基础语法
- 展示主轴方向：`flex-direction: row | row-reverse | column | column-reverse`
- 展示主轴对齐：`justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly`
- 展示交叉轴对齐：`align-items: stretch | flex-start | center | flex-end | baseline`
- 展示多行对齐：`align-content` 属性的各种取值
- 演示 `flex-wrap: nowrap | wrap | wrap-reverse`
- 展示 Flex 子项属性：
  - `flex-grow`: 0, 1, 2（展示增长比例）
  - `flex-shrink`: 0, 1（展示收缩行为）
  - `flex-basis`: auto, 200px, 50%（展示基准尺寸）
  - `order`: -1, 0, 1（展示排序控制）

**响应式断点系统**：
- 明确标注 Tailwind 默认断点：
  - sm: 640px（小屏幕手机横屏）
  - md: 768px（平板竖屏）
  - lg: 1024px（平板横屏 / 小笔记本）
  - xl: 1280px（桌面显示器）
  - 2xl: 1536px（大屏显示器）
- 展示每个断点下的布局变化：
  - 移动端（< 640px）：单列堆叠
  - 平板竖屏（640px-768px）：两列布局
  - 平板横屏（768px-1024px）：三列布局
  - 桌面（> 1024px）：四列或更复杂的网格

**容器宽度控制**：
- 展示固定宽度容器：`max-w-screen-sm`, `max-w-screen-md`, `max-w-screen-lg`, `max-w-screen-xl`, `max-w-screen-2xl`
- 展示内容宽度容器：`max-w-prose`（最佳阅读宽度，约 65ch）
- 展示自定义最大宽度：`max-w-[1200px]`
- 展示全宽容器：`w-full` + 内部使用 `max-w-*` 限制内容区
- 演示居中对齐：`mx-auto`

**主次内容区布局模式**：
- 经典侧边栏布局（sidebar layout）：
  - 左侧固定宽度侧边栏（240px-280px）+ 右侧流动主内容区
  - 或右侧固定宽度侧边栏 + 左侧流动主内容区
  - 展示侧边栏折叠/展开交互状态
- 圣杯布局（Holy Grail Layout）：
  - 顶部导航 + 中间三列（左侧边栏 + 主内容 + 右侧边栏）+ 底部页脚
  - 使用 CSS Grid 实现：`grid-template-areas`
- 双侧边栏布局：
  - 左侧主导航（200px）+ 中间内容区 + 右侧信息栏（300px）
- 仪表板布局（Dashboard Layout）：
  - 顶部固定导航（64px）+ 左侧固定侧边栏（240px）+ 右侧滚动内容区

**页面结构要求**：

1. **顶部导航区域**：
   - 固定宽度容器（`max-w-7xl`）居中
   - Flex 布局：左侧 Logo + 中间导航菜单 + 右侧操作按钮
   - 响应式：移动端隐藏菜单，显示汉堡按钮
   - 高度：64px（桌面）、56px（移动端）

2. **网格展示区域**：
   - 标题："12 列网格系统演示"
   - 使用浅色背景网格线（`border border-gray-200`）
   - 展示 12 个等宽列，每列标注序号（1-12）
   - 展示常用列组合示例：
     - 单列（12/12）
     - 二等分（6/12 + 6/12）
     - 三等分（4/12 + 4/12 + 4/12）
     - 四等分（3/12 × 4）
     - 不等分（8/12 + 4/12，展示主次内容布局）
     - 跨列展示（某元素占 span-8 列）

3. **Flexbox 演示区域**：
   - 标题："Flexbox 布局模式"
   - 子模块 1：主轴对齐演示
     - 展示 `justify-content` 的 6 种取值
     - 每种取值使用独立的容器，包含 3-4 个色块
   - 子模块 2：交叉轴对齐演示
     - 展示 `align-items` 的 5 种取值
     - 使用不同高度的元素展示对齐效果
   - 子模块 3：弹性增长收缩
     - 展示 `flex-grow` 和 `flex-shrink` 的效果
     - 使用拖动或按钮交互动态改变容器宽度

4. **响应式断点演示区域**：
   - 标题："响应式断点系统"
   - 显示当前视口宽度的实时指示器
   - 展示 5 个断点标记（sm, md, lg, xl, 2xl）
   - 使用不同颜色的卡片展示在各断点下的列数变化：
     - 移动端（< sm）：1 列
     - sm：2 列
     - md：3 列
     - lg：4 列
     - xl：4 列（保持）
   - 每张卡片显示当前生效的断点类名

5. **主次内容区示例（两列布局）**：
   - 左侧主内容区（占 8/12 或 9/12）：
     - 展示文章/表格示例
     - 标题 + 段落文本（Lorem ipsum）
     - 或数据表格（3-5 行 × 4-6 列）
   - 右侧侧边栏（占 4/12 或 3/12）：
     - 展示侧边栏卡片（2-3 个）
     - 每个卡片包含标题 + 简短描述 + 操作链接
     - 固定位置（sticky）或跟随滚动
   - 移动端：改为单列堆叠，侧边栏移至主内容下方

6. **底部区块（Footer）**：
   - 三列或四列布局
   - 每列包含标题 + 链接列表
   - 底部版权信息居中
   - 移动端：改为手风琴折叠或单列堆叠

**可视化辅助元素**：
- 网格线显示：使用虚线边框（`border-dashed`）+ 浅灰色（`border-gray-300`）
- 列间距标注：在间距区域显示宽度数值（如 "gap: 24px"）
- 断点指示器：页面右上角固定显示当前断点（如 "md: 768px"）
- 列序号标记：每列顶部显示序号（1-12）
- 尺寸标注：使用小标签显示元素宽度（如 "w-1/3" 或 "33.33%"）

**代码示例展示**：
- 在每个布局模式下方展示对应的 Tailwind 类名
- 使用代码块样式（等宽字体、浅灰背景）
- 示例：
  ```html
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-8">主内容</div>
    <div class="col-span-4">侧边栏</div>
  </div>
  ```

**交互功能**：
- 提供"切换网格线"按钮，显示/隐藏网格可视化辅助线
- 提供断点切换器，模拟不同屏幕尺寸（移动端、平板、桌面）
- 提供"复制代码"按钮，一键复制布局代码

**色彩与样式**：
- 网格演示使用浅色系：浅蓝（#E0F2FE）、浅绿（#D1FAE5）、浅紫（#E9D5FF）
- 文字：深灰色（#1F2937）用于标题，中灰色（#6B7280）用于说明文字
- 代码块：浅灰背景（#F3F4F6）+ 等宽字体（Courier New, monospace）
- 边框：统一使用浅灰色（#E5E7EB）

**响应式实现**：
- 移动端（< 640px）：
  - 所有演示模块改为单列堆叠
  - 网格演示简化为 6 列
  - Flexbox 演示每个示例独立一行
- 平板（640px-1024px）：
  - 演示模块两列布局
  - 保持完整 12 列网格展示
- 桌面（> 1024px）：
  - 演示模块可以并排展示（如 Flexbox 的 3 个子模块横向排列）

---

## English Version (en-US)

Create a comprehensive demonstration page using TailwindCSS that systematically presents modern CSS layout techniques, including grid systems, Flexbox patterns, and responsive design foundations.

**Layout System Core Concepts**:

**12-Column Grid System**:
- Implement standard 12-column grid layout, showcasing all column width combinations from 1/12 to 12/12
- Grid container max-width: 1280px (xl), 1536px (2xl)
- Gutter spacing: 16px (mobile), 24px (tablet), 32px (desktop)
- Show common column combinations: single column, halves, thirds, quarters, 2:1 golden ratio, 3:9 sidebar layout
- Use visualized grid lines with annotations showing column boundaries and spacing areas
- Add row and column number markers for better understanding of grid structure

**CSS Grid Layout Techniques**:
- Demonstrate `display: grid` basic syntax and properties
- Show various `grid-template-columns` definitions:
  - Fixed width: `300px 300px 300px`
  - Percentage: `33.33% 33.33% 33.33%`
  - fr units: `1fr 2fr 1fr` (showing proportional distribution)
  - repeat function: `repeat(3, 1fr)`, `repeat(auto-fit, minmax(250px, 1fr))`
  - minmax function: `minmax(200px, 1fr)` showing flexible ranges
- Show `grid-template-rows` row height control
- Demonstrate `gap`, `row-gap`, `column-gap` spacing properties
- Show `grid-column` and `grid-row` spanning
- Demonstrate `grid-template-areas` named grid area layout

**Flexbox Layout Techniques**:
- Demonstrate `display: flex` basic syntax
- Show main axis direction: `flex-direction: row | row-reverse | column | column-reverse`
- Show main axis alignment: `justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly`
- Show cross axis alignment: `align-items: stretch | flex-start | center | flex-end | baseline`
- Show multi-line alignment: various `align-content` property values
- Demonstrate `flex-wrap: nowrap | wrap | wrap-reverse`
- Show Flex item properties:
  - `flex-grow`: 0, 1, 2 (showing growth ratios)
  - `flex-shrink`: 0, 1 (showing shrink behavior)
  - `flex-basis`: auto, 200px, 50% (showing base size)
  - `order`: -1, 0, 1 (showing order control)

**Responsive Breakpoint System**:
- Clearly annotate Tailwind default breakpoints:
  - sm: 640px (small phone landscape)
  - md: 768px (tablet portrait)
  - lg: 1024px (tablet landscape / small laptop)
  - xl: 1280px (desktop monitor)
  - 2xl: 1536px (large monitor)
- Show layout changes at each breakpoint:
  - Mobile (< 640px): single column stack
  - Tablet portrait (640px-768px): two-column layout
  - Tablet landscape (768px-1024px): three-column layout
  - Desktop (> 1024px): four-column or more complex grid

**Container Width Control**:
- Show fixed-width containers: `max-w-screen-sm`, `max-w-screen-md`, `max-w-screen-lg`, `max-w-screen-xl`, `max-w-screen-2xl`
- Show content-width containers: `max-w-prose` (optimal reading width, ~65ch)
- Show custom max-width: `max-w-[1200px]`
- Show full-width container: `w-full` + inner `max-w-*` to constrain content
- Demonstrate center alignment: `mx-auto`

**Primary-Secondary Content Layout Patterns**:
- Classic sidebar layout:
  - Fixed-width sidebar left (240px-280px) + fluid main content right
  - Or fixed-width sidebar right + fluid main content left
  - Show sidebar collapse/expand interactive states
- Holy Grail Layout:
  - Top nav + middle three columns (left sidebar + main + right sidebar) + footer
  - Implement using CSS Grid: `grid-template-areas`
- Double sidebar layout:
  - Left main nav (200px) + center content + right info panel (300px)
- Dashboard Layout:
  - Fixed top nav (64px) + fixed left sidebar (240px) + scrollable right content

**Page Structure Requirements**:

1. **Top Navigation Area**:
   - Fixed-width container (`max-w-7xl`) centered
   - Flex layout: Logo left + center nav menu + right action buttons
   - Responsive: Hide menu on mobile, show hamburger button
   - Height: 64px (desktop), 56px (mobile)

2. **Grid Demonstration Area**:
   - Title: "12-Column Grid System Demo"
   - Use light background grid lines (`border border-gray-200`)
   - Show 12 equal-width columns, each labeled with number (1-12)
   - Show common column combination examples:
     - Single column (12/12)
     - Halves (6/12 + 6/12)
     - Thirds (4/12 + 4/12 + 4/12)
     - Quarters (3/12 × 4)
     - Unequal split (8/12 + 4/12, showing primary-secondary content)
     - Spanning (some element occupies span-8 columns)

3. **Flexbox Demonstration Area**:
   - Title: "Flexbox Layout Patterns"
   - Submodule 1: Main axis alignment demo
     - Show 6 `justify-content` values
     - Each value uses independent container with 3-4 colored blocks
   - Submodule 2: Cross axis alignment demo
     - Show 5 `align-items` values
     - Use different height elements to show alignment effects
   - Submodule 3: Flex grow/shrink
     - Show effects of `flex-grow` and `flex-shrink`
     - Use drag or button interaction to dynamically change container width

4. **Responsive Breakpoint Demonstration Area**:
   - Title: "Responsive Breakpoint System"
   - Show live indicator of current viewport width
   - Display 5 breakpoint markers (sm, md, lg, xl, 2xl)
   - Use different colored cards to show column count changes at each breakpoint:
     - Mobile (< sm): 1 column
     - sm: 2 columns
     - md: 3 columns
     - lg: 4 columns
     - xl: 4 columns (maintained)
   - Each card displays the currently active breakpoint class name

5. **Primary-Secondary Content Example (Two-Column Layout)**:
   - Left main content area (8/12 or 9/12):
     - Show article/table example
     - Title + paragraph text (Lorem ipsum)
     - Or data table (3-5 rows × 4-6 columns)
   - Right sidebar (4/12 or 3/12):
     - Show sidebar cards (2-3 cards)
     - Each card includes title + brief description + action link
     - Fixed position (sticky) or follow scroll
   - Mobile: Change to single-column stack, sidebar moves below main content

6. **Footer Block**:
   - Three or four-column layout
   - Each column contains title + link list
   - Bottom copyright info centered
   - Mobile: Change to accordion collapse or single-column stack

**Visual Aid Elements**:
- Grid lines: Use dashed borders (`border-dashed`) + light gray (`border-gray-300`)
- Spacing annotations: Show width values in gutter areas (e.g., "gap: 24px")
- Breakpoint indicator: Fixed display in top-right corner showing current breakpoint (e.g., "md: 768px")
- Column number markers: Show sequence numbers (1-12) at top of each column
- Size annotations: Use small labels to show element widths (e.g., "w-1/3" or "33.33%")

**Code Example Display**:
- Show corresponding Tailwind class names below each layout pattern
- Use code block styling (monospace font, light gray background)
- Example:
  ```html
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-8">Main Content</div>
    <div class="col-span-4">Sidebar</div>
  </div>
  ```

**Interactive Features**:
- Provide "Toggle Grid Lines" button to show/hide grid visualization aids
- Provide breakpoint switcher to simulate different screen sizes (mobile, tablet, desktop)
- Provide "Copy Code" button for one-click layout code copying

**Colors & Styling**:
- Grid demos use light colors: Light blue (#E0F2FE), light green (#D1FAE5), light purple (#E9D5FF)
- Text: Dark gray (#1F2937) for titles, medium gray (#6B7280) for descriptions
- Code blocks: Light gray background (#F3F4F6) + monospace font (Courier New, monospace)
- Borders: Uniformly use light gray (#E5E7EB)

**Responsive Implementation**:
- Mobile (< 640px):
  - All demo modules change to single-column stack
  - Grid demo simplified to 6 columns
  - Flexbox demos each example on separate row
- Tablet (640px-1024px):
  - Demo modules in two-column layout
  - Maintain full 12-column grid display
- Desktop (> 1024px):
  - Demo modules can display side-by-side (e.g., Flexbox's 3 submodules horizontally arranged)
