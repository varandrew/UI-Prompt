# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个「DOS 终端风格」的单页面模板，完美呈现 1980-1990 年代 MS-DOS / PC-DOS 命令行界面的复古未来主义美学。

### 核心视觉特征

**配色方案**：
- 主色：经典 DOS 绿色 (`#00FF00`, `#00AA00`) 或琥珀橙色 (`#FFA500`, `#FF8800`)
- 背景：纯黑 (`#000000`) 或深灰 (`#111111`, `#0C0C0C`)
- 文字颜色：单色荧光效果，仅使用 1-2 种高亮色
- 选中/高亮：反转色块（黑底绿字变为绿底黑字）
- 扫描线效果：使用 `repeating-linear-gradient` 创建水平扫描线 (2px 间隔)
- CRT 荧光辉光：为文字添加 `text-shadow` 和 `box-shadow`，模拟阴极射线管显示器的发光效果

**字体与排版**：
- 使用等宽像素字体系列：`'Perfect DOS VGA 437'`, `'IBM Plex Mono'`, `'Courier New'`, `monospace`
- 字号：14px-16px 基准，大标题 24px-32px（保持 DOS 字符比例）
- 字符间距：正常或稍紧（-0.5px），模拟 CRT 字符紧凑感
- 行高：1.2-1.4，保持终端文本密度
- 全大写标题：使用 `uppercase` 突出 DOS 时代排版风格
- ASCII Art 装饰：使用 `<pre>` 标签嵌入 DOS 风格边框和分隔符（如 `═══`, `│`, `╔═╗`）

**布局与组件**：
- 终端窗口容器：黑色背景 + 窄边框 + 内边距 16-24px
- 命令提示符样式：`C:\>` 或 `A:\>` 前缀，使用 `::before` 伪元素
- 闪烁光标：使用 CSS `@keyframes` 实现方块光标闪烁动画 (500ms 间隔)
- 文本块：等宽排列，使用 `<pre>` 或 `white-space: pre` 保持格式
- 表格/列表：ASCII 字符边框 (`+---+`, `|   |`)，无圆角
- 按钮/交互元素：方形，反色填充，悬停时切换前景/背景色
- 输入框：黑色背景，单色边框，闪烁光标，`:focus` 状态显示反色选中块

### 页面结构

**Hero 区域**：
- 顶部 ASCII Art Logo（使用 `<pre>` 标签包裹）
- 大标题：模拟 DOS 启动画面文字（如 "MS-DOS Version 6.22", "System Ready"）
- 子标题：命令提示符风格说明文字
- 双 CTA 按钮：方形按钮，反色效果，带 `[Enter]` / `[ESC]` 按键提示

**功能展示区**：
- 3-4 个终端窗口式卡片
- 每个卡片包含：
  - 顶部标题栏（DOS 窗口标题样式，带 ASCII 装饰边框）
  - 内容区：命令列表或输出文本（等宽字体）
  - 底部：命令提示符 + 闪烁光标
- 使用 `DIR`, `CD`, `COPY`, `FORMAT` 等经典 DOS 命令作为内容示例

**技术细节展示**：
- 使用 ASCII 表格展示系统信息（类似 `MEM` 命令输出）
- 包含内存使用、磁盘空间、系统配置等虚拟数据
- 使用对齐的等宽字符创建列（空格填充）

**流程/时间轴区域**：
- 使用 DOS 启动日志风格
- 逐行显示系统加载步骤（如 "Loading CONFIG.SYS...", "Processing AUTOEXEC.BAT..."）
- 添加绿色 `[OK]` 或红色 `[FAIL]` 状态指示器
- 使用 ASCII 箭头 (`->`, `===>`) 连接步骤

**结尾 CTA**：
- 命令输入框样式
- 提示文字："C:\> TYPE YOUR_COMMAND.COM"
- 大号提交按钮：方形，反色，带 `[ENTER]` 标识

### 特效与交互

**CRT 显示器效果**：
- 扫描线覆盖层：`repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 2px)`
- 荧光辉光：`text-shadow: 0 0 8px currentColor, 0 0 12px currentColor`
- 轻微屏幕弯曲：外层容器使用 `border-radius: 8px` 模拟 CRT 屏幕曲面
- 隐约噪点/颗粒感：使用 SVG `<filter>` 或背景图案添加轻微噪点

**动画效果**（仅使用 CSS）：
- 文本逐字打字效果：`@keyframes typing` + `steps()` 函数
- 光标闪烁：`@keyframes blink` (0%-50% 可见，51%-100% 隐藏)
- 悬停高亮：按钮/链接悬停时背景色反转 (200ms ease-out)
- 页面加载动画：模拟 DOS 启动顺序，逐行淡入文本

**无障碍设计**：
- 保持 WCAG AA 级对比度（绿色/黑色至少 7:1）
- 为 ASCII Art 提供 `aria-label` 描述
- 确保键盘焦点可见（反色轮廓）
- 支持 `prefers-reduced-motion`，禁用打字/闪烁动画

### 文案风格

**语气**：技术化、极客风、怀旧、简洁直接

**示例文案**：
- Hero 标题："RETRO.SYS LOADED SUCCESSFULLY"
- 子标题："C:\> EXPERIENCE THE GOLDEN AGE OF COMPUTING"
- CTA："EXECUTE COMMAND", "BOOT SYSTEM"
- 功能描述：使用命令式语言（"Compile data...", "Process input...", "Generate output..."）
- 章节标题：大写 + ASCII 边框装饰

### 技术规范

**Tailwind 类建议**：
- 背景：`bg-black`, `bg-gray-950`
- 文字颜色：`text-green-400`, `text-green-500`, `text-amber-400`
- 字体：`font-mono`, `tracking-tight`
- 边框：`border border-green-500`, `border-2`
- 阴影：`shadow-[0_0_12px_rgba(0,255,0,0.5)]` (荧光效果)
- 间距：`p-4`, `p-6`, `space-y-2`
- 动画：`animate-pulse` (修改为闪烁)，自定义 `@keyframes`

**响应式设计**：
- 移动端：保持等宽字体，减小字号至 12px-14px，简化 ASCII 装饰
- 平板/桌面：标准 DOS 终端尺寸 (80 列宽度)，扩展 ASCII Art 细节
- 避免横向滚动，使用 `overflow-x: auto` 处理长命令行

**性能优化**：
- 使用 CSS 渐变代替扫描线图片
- 限制 `text-shadow` 层数（最多 2-3 层）
- 使用 `will-change: transform` 优化光标动画
- 避免过多 DOM 节点，合并 ASCII Art 为单个 `<pre>` 块


---

## English Version (en-US)

Use TailwindCSS to create a "DOS Terminal Style" single-page template that perfectly captures the retro-futuristic aesthetics of 1980-1990s MS-DOS / PC-DOS command-line interfaces.

### Core Visual Characteristics

**Color Scheme**:
- Primary: Classic DOS green (`#00FF00`, `#00AA00`) or amber orange (`#FFA500`, `#FF8800`)
- Background: Pure black (`#000000`) or deep gray (`#111111`, `#0C0C0C`)
- Text: Monochrome phosphor effect, use only 1-2 highlight colors
- Selection/highlight: Inverted color blocks (black-on-green becomes green-on-black)
- Scanline effect: Use `repeating-linear-gradient` to create horizontal scanlines (2px spacing)
- CRT phosphor glow: Add `text-shadow` and `box-shadow` to text, simulating cathode ray tube display glow

**Typography & Layout**:
- Use monospace pixel font families: `'Perfect DOS VGA 437'`, `'IBM Plex Mono'`, `'Courier New'`, `monospace`
- Font size: 14px-16px base, large headings 24px-32px (maintain DOS character proportions)
- Letter spacing: Normal or slightly tight (-0.5px), mimicking CRT character density
- Line height: 1.2-1.4, maintain terminal text density
- Uppercase headings: Use `uppercase` to emphasize DOS-era typographic style
- ASCII Art decorations: Use `<pre>` tags to embed DOS-style borders and dividers (e.g., `═══`, `│`, `╔═╗`)

**Layout & Components**:
- Terminal window container: Black background + narrow border + padding 16-24px
- Command prompt style: `C:\>` or `A:\>` prefix, use `::before` pseudo-element
- Blinking cursor: Use CSS `@keyframes` to implement square cursor blinking animation (500ms interval)
- Text blocks: Monospace alignment, use `<pre>` or `white-space: pre` to preserve formatting
- Tables/lists: ASCII character borders (`+---+`, `|   |`), no rounded corners
- Buttons/interactive elements: Square, inverted fill, toggle foreground/background color on hover
- Input fields: Black background, monochrome border, blinking cursor, `:focus` state shows inverted selection block

### Page Structure

**Hero Section**:
- Top ASCII Art Logo (wrapped in `<pre>` tag)
- Large title: Simulate DOS boot screen text (e.g., "MS-DOS Version 6.22", "System Ready")
- Subtitle: Command prompt style descriptive text
- Dual CTA buttons: Square buttons, inverted effect, with `[Enter]` / `[ESC]` key hints

**Feature Showcase**:
- 3-4 terminal window-style cards
- Each card contains:
  - Top title bar (DOS window title style, with ASCII decorative border)
  - Content area: Command list or output text (monospace font)
  - Bottom: Command prompt + blinking cursor
- Use classic DOS commands like `DIR`, `CD`, `COPY`, `FORMAT` as content examples

**Technical Details Display**:
- Use ASCII tables to show system information (like `MEM` command output)
- Include virtual data for memory usage, disk space, system configuration
- Use aligned monospace characters to create columns (space padding)

**Process/Timeline Section**:
- Use DOS boot log style
- Display system loading steps line by line (e.g., "Loading CONFIG.SYS...", "Processing AUTOEXEC.BAT...")
- Add green `[OK]` or red `[FAIL]` status indicators
- Use ASCII arrows (`->`, `===>`) to connect steps

**Closing CTA**:
- Command input box style
- Prompt text: "C:\> TYPE YOUR_COMMAND.COM"
- Large submit button: Square, inverted, with `[ENTER]` label

### Effects & Interactions

**CRT Monitor Effects**:
- Scanline overlay: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 2px)`
- Phosphor glow: `text-shadow: 0 0 8px currentColor, 0 0 12px currentColor`
- Slight screen curvature: Outer container uses `border-radius: 8px` to simulate CRT screen curvature
- Subtle noise/grain: Use SVG `<filter>` or background pattern to add slight noise

**Animation Effects** (CSS only):
- Text character-by-character typing effect: `@keyframes typing` + `steps()` function
- Cursor blinking: `@keyframes blink` (0%-50% visible, 51%-100% hidden)
- Hover highlight: Button/link hover inverts background color (200ms ease-out)
- Page load animation: Simulate DOS boot sequence, fade in text line by line

**Accessibility Design**:
- Maintain WCAG AA contrast ratio (green/black at least 7:1)
- Provide `aria-label` descriptions for ASCII Art
- Ensure keyboard focus is visible (inverted outline)
- Support `prefers-reduced-motion`, disable typing/blinking animations

### Copywriting Style

**Tone**: Technical, geeky, nostalgic, concise and direct

**Example Copy**:
- Hero title: "RETRO.SYS LOADED SUCCESSFULLY"
- Subtitle: "C:\> EXPERIENCE THE GOLDEN AGE OF COMPUTING"
- CTA: "EXECUTE COMMAND", "BOOT SYSTEM"
- Feature descriptions: Use imperative language ("Compile data...", "Process input...", "Generate output...")
- Section headings: Uppercase + ASCII border decorations

### Technical Specifications

**Recommended Tailwind Classes**:
- Background: `bg-black`, `bg-gray-950`
- Text color: `text-green-400`, `text-green-500`, `text-amber-400`
- Font: `font-mono`, `tracking-tight`
- Border: `border border-green-500`, `border-2`
- Shadow: `shadow-[0_0_12px_rgba(0,255,0,0.5)]` (phosphor glow effect)
- Spacing: `p-4`, `p-6`, `space-y-2`
- Animation: `animate-pulse` (modify for blinking), custom `@keyframes`

**Responsive Design**:
- Mobile: Keep monospace font, reduce font size to 12px-14px, simplify ASCII decorations
- Tablet/desktop: Standard DOS terminal size (80 column width), expand ASCII Art details
- Avoid horizontal scrolling, use `overflow-x: auto` for long command lines

**Performance Optimization**:
- Use CSS gradients instead of scanline images
- Limit `text-shadow` layers (maximum 2-3 layers)
- Use `will-change: transform` to optimize cursor animation
- Avoid excessive DOM nodes, merge ASCII Art into single `<pre>` blocks
