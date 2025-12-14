# Custom Prompt

## 中文版本 (zh-CN)

创建一个霓虹赛博朋克风格的网页设计，融合未来主义科技美学与80年代霓虹灯管光效。

**核心视觉特征**

色彩系统：
- 主色调采用电光蓝 (#00ffff, #0ff)、霓虹粉 (#ff00ff, #f0f)、荧光紫 (#7700ff)
- 深邃背景使用纯黑 (#000000, #0a0a0f) 至深灰蓝 (#0f0f1e, #1a1a2e)
- 强调色为激光绿 (#00ff41, #39ff14)、电子橙 (#ff6600, #ff3e00)
- 所有亮色采用高饱和度（90-100%）与高亮度（80-100%）

光效与阴影：
- 霓虹发光效果：使用多层 box-shadow 模拟光晕，如 `0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #00f`
- 文字发光：text-shadow 采用 3-4 层递进式模糊，核心光强，外层光弱
- 背景使用径向渐变模拟光源：`radial-gradient(circle at center, #1a1a2e 0%, #000 100%)`
- 网格线条：1-2px 细线，带有微弱发光，透明度 30-50%

几何与图案：
- 矩形网格背景：使用 linear-gradient 绘制，间距 20-50px
- 扫描线效果：水平细线动画，模拟旧显示器
- 对角线条纹：45度倾斜，透明度 5-15%
- 六边形/菱形图案：点缀在标题或卡片角落

**排版设计**

字体选择：
- 标题使用几何无衬线字体（如 Orbitron, Audiowide, Rajdhani）
- 正文采用等宽字体（如 Roboto Mono, IBM Plex Mono）模拟终端风格
- 代码片段使用霓虹色高亮，背景为半透明深色面板

文字效果：
- 标题字号 48-72px，全大写，字母间距 2-4px
- 发光文字：核心白色或浅蓝，外层光晕为主题色
- 故障效果（Glitch）：偶尔在标题上应用 RGB 分离动画
- 闪烁效果：重要关键词添加轻微明暗变化动画（1.5-2s 周期）

层级结构：
- 主标题：粗体 700-900，发光强度最高
- 副标题：中等粗细 500-600，发光中等
- 正文：常规 400，无发光或微弱发光
- 辅助文字：细体 300，透明度 60-80%

**界面组件**

按钮设计：
- 轮廓型按钮：2-3px 霓虹色边框，透明背景，hover 时填充同色并增强发光
- 填充型按钮：半透明背景 rgba(0, 255, 255, 0.1)，边框发光，hover 时背景不透明度增至 0.3
- 尺寸：高度 48-56px，水平内边距 32-48px
- 状态：禁用态降低不透明度至 40%，保持边框但移除发光

卡片与面板：
- 背景色：rgba(15, 15, 30, 0.6-0.9)，带有 backdrop-filter: blur(10px)
- 边框：1-2px 霓虹色，带有 box-shadow 外发光
- 内边距：24-32px
- hover 状态：边框发光增强，背景亮度提升 10%，轻微上浮 translateY(-4px)

表单元素：
- 输入框：深色背景 #0a0a0f，霓虹色底边框 2px
- focus 状态：底边框发光，整体轮廓增加 0 0 0 2px 半透明主题色
- 占位符文字：透明度 50%，斜体
- 标签：小号大写字母，字母间距 1px

导航栏：
- 透明或半透明背景，带有 backdrop-blur
- 链接文字：常态下白色 opacity 70%，hover 时 100% 并添加下划线发光
- 激活态：底部 3px 霓虹色发光线条
- Logo：可使用故障效果或扫描线动画

**布局与构图**

页面结构：
- Hero 区：全屏或 70vh，深色背景叠加网格图案，主标题居中或偏左
- 功能区块：采用非对称布局，左右交替排列
- 卡片网格：2-3 列，间距 24-32px，边缘对齐但内容可错位
- 容器最大宽度：1200-1440px

网格与线条：
- 背景网格：使用 background-image 绘制，透明度 15-25%
- 分隔线：1px 发光线条，或使用渐变从透明到霓虹色再到透明
- 边角装饰：在卡片或区块四角添加小型 L 型霓虹线条
- 扫描线：从上至下移动的半透明白线，动画时长 4-6s

装饰元素：
- 几何形状漂浮：六边形、三角形、圆形在背景缓慢移动或旋转
- 粒子效果：小型发光点在特定区域飘散
- 光束：对角线或竖直光束扫过特定区块
- 数字雨：类似黑客帝国的字符下落（可选，不要过度）

**动画与交互**

微交互：
- 按钮 hover：发光强度增加 50%，持续 200-300ms，ease-out
- 链接下划线：从左至右扫过动画，200ms
- 卡片 hover：轻微放大 scale(1.02)，阴影增强，300ms ease-in-out
- 输入框 focus：边框发光逐渐亮起，200ms

页面动画：
- 页面加载：标题字符逐个浮现，带有发光效果
- 区块进入：从透明到不透明，带有轻微上移或缩放
- 滚动视差：背景网格与前景内容移动速度不同
- 扫描线循环：持续动画，不影响阅读

特效动画：
- 故障效果（Glitch）：偶尔在标题触发，RGB 通道错位，持续 100-200ms
- 闪烁：霓虹灯管闪烁效果，透明度在 80-100% 间快速变化
- 脉冲：重要元素的发光强度周期性变化，2-3s 周期
- 扫光：从左至右的高光扫过按钮或卡片

**技术实现要点**

CSS 技巧：
- 使用 CSS Grid 与 Flexbox 构建响应式布局
- 发光效果用多层 box-shadow 与 text-shadow
- 动画使用 @keyframes 定义，配合 animation 属性
- 背景图案用 linear-gradient 或 repeating-linear-gradient
- 使用 CSS 变量定义主题色，便于调整

性能优化：
- 限制同时出现的动画数量
- 使用 transform 与 opacity 实现动画，避免触发重排
- 对复杂发光效果使用 will-change: box-shadow
- 背景图案尽可能使用 CSS 而非图片

响应式设计：
- 移动端：减弱发光效果，降低动画复杂度
- 平板：保持主要视觉效果，调整网格列数
- 桌面：完整视觉效果，最大化发光与动画
- 考虑 prefers-reduced-motion，提供简化版本

**内容建议**

文案风格：
- 科技感强，使用未来主义词汇：Cyber, Neo, Protocol, Interface, System
- 简短有力，多用祈使句和主动语态
- 标题可使用数字或代码风格前缀：[01] [SYS] [INIT]

图标与图形：
- 几何化图标，棱角分明
- 使用线条而非填充
- 添加霓虹色描边与发光
- 可集成电路板图案或数字元素

图片处理：
- 降低饱和度，增加对比度
- 叠加半透明霓虹色遮罩
- 边缘添加发光或故障效果
- 考虑使用赛博朋克风格插图或3D渲染

**无障碍考虑**

对比度：
- 确保文字与背景对比度至少 4.5:1（正文）或 3:1（大字号）
- 虽然使用深色背景与亮色文字，但要测试可读性
- 提供高对比度模式选项

可用性：
- 发光效果不应影响文字辨识度
- 动画应可暂停或禁用
- 键盘导航：focus 状态要有明确视觉反馈（不仅仅依赖发光）
- 屏幕阅读器：确保装饰性元素标记为 aria-hidden

**使用场景**

- 科技产品发布页
- 游戏社区网站
- 区块链/加密货币平台
- 音乐节/电子音乐活动
- 科幻主题作品集
- 黑客马拉松活动页


---

## English Version (en-US)

Create a Neon Cyberpunk web design that fuses futuristic tech aesthetics with 1980s neon tube lighting effects.

**Core Visual Characteristics**

Color System:
- Primary colors: electric blue (#00ffff, #0ff), neon pink (#ff00ff, #f0f), fluorescent purple (#7700ff)
- Deep backgrounds: pure black (#000000, #0a0a0f) to dark gray-blue (#0f0f1e, #1a1a2e)
- Accent colors: laser green (#00ff41, #39ff14), electronic orange (#ff6600, #ff3e00)
- All bright colors use high saturation (90-100%) and high brightness (80-100%)

Glow & Shadows:
- Neon glow effect: multi-layer box-shadow simulating halos, like `0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #00f`
- Text glow: text-shadow with 3-4 progressive blur layers, strong core light with weaker outer layers
- Backgrounds use radial gradients to simulate light sources: `radial-gradient(circle at center, #1a1a2e 0%, #000 100%)`
- Grid lines: 1-2px thin lines with subtle glow, 30-50% opacity

Geometry & Patterns:
- Rectangular grid background: drawn with linear-gradient, spacing 20-50px
- Scanline effect: horizontal thin line animations simulating old monitors
- Diagonal stripes: 45-degree tilt, 5-15% opacity
- Hexagon/diamond patterns: accenting titles or card corners

**Typography Design**

Font Selection:
- Headings use geometric sans-serif fonts (e.g., Orbitron, Audiowide, Rajdhani)
- Body text uses monospace fonts (e.g., Roboto Mono, IBM Plex Mono) simulating terminal style
- Code snippets with neon color highlighting, semi-transparent dark panel backgrounds

Text Effects:
- Heading size 48-72px, all caps, letter-spacing 2-4px
- Glowing text: core white or light blue, outer halo in theme color
- Glitch effect: occasional RGB separation animation on titles
- Flicker effect: subtle brightness variation on important keywords (1.5-2s cycle)

Hierarchy Structure:
- Main titles: bold 700-900, highest glow intensity
- Subtitles: medium weight 500-600, moderate glow
- Body text: regular 400, no glow or subtle glow
- Support text: thin 300, 60-80% opacity

**UI Components**

Button Design:
- Outline buttons: 2-3px neon border, transparent background, hover fills with same color and enhanced glow
- Filled buttons: semi-transparent background rgba(0, 255, 255, 0.1), glowing border, hover increases opacity to 0.3
- Dimensions: height 48-56px, horizontal padding 32-48px
- States: disabled reduces opacity to 40%, keeps border but removes glow

Cards & Panels:
- Background color: rgba(15, 15, 30, 0.6-0.9) with backdrop-filter: blur(10px)
- Border: 1-2px neon color with box-shadow outer glow
- Padding: 24-32px
- Hover state: enhanced border glow, 10% brightness increase, slight lift translateY(-4px)

Form Elements:
- Input fields: dark background #0a0a0f, 2px neon bottom border
- Focus state: bottom border glow, overall outline adds 0 0 0 2px semi-transparent theme color
- Placeholder text: 50% opacity, italic
- Labels: small caps, letter-spacing 1px

Navigation Bar:
- Transparent or semi-transparent background with backdrop-blur
- Link text: normal state white 70% opacity, hover 100% with glowing underline
- Active state: bottom 3px neon glowing line
- Logo: can use glitch effect or scanline animation

**Layout & Composition**

Page Structure:
- Hero section: full-screen or 70vh, dark background overlaid with grid pattern, main title centered or left-aligned
- Feature blocks: asymmetric layout, alternating left-right arrangement
- Card grid: 2-3 columns, spacing 24-32px, edges aligned but content can be staggered
- Max container width: 1200-1440px

Grids & Lines:
- Background grid: drawn with background-image, 15-25% opacity
- Dividers: 1px glowing lines, or gradient from transparent to neon to transparent
- Corner decorations: small L-shaped neon lines at card or block corners
- Scanlines: semi-transparent white line moving top to bottom, animation duration 4-6s

Decorative Elements:
- Floating geometric shapes: hexagons, triangles, circles slowly moving or rotating in background
- Particle effects: small glowing dots dispersing in specific areas
- Light beams: diagonal or vertical beams sweeping across specific blocks
- Digital rain: Matrix-style character drops (optional, avoid overuse)

**Animation & Interaction**

Micro-interactions:
- Button hover: glow intensity increases 50%, duration 200-300ms, ease-out
- Link underline: left-to-right sweep animation, 200ms
- Card hover: slight scale(1.02), enhanced shadow, 300ms ease-in-out
- Input focus: border glow gradually brightens, 200ms

Page Animations:
- Page load: title characters appear one by one with glow effect
- Block entry: opacity 0 to 1, with slight upward movement or scaling
- Scroll parallax: background grid and foreground content move at different speeds
- Scanline loop: continuous animation that doesn't affect readability

Special Effects:
- Glitch effect: occasionally triggered on titles, RGB channel displacement, 100-200ms duration
- Flicker: neon tube flicker effect, opacity rapid variation between 80-100%
- Pulse: periodic glow intensity variation on important elements, 2-3s cycle
- Sweep light: left-to-right highlight sweeping across buttons or cards

**Technical Implementation**

CSS Techniques:
- Use CSS Grid and Flexbox for responsive layout
- Glow effects with multi-layer box-shadow and text-shadow
- Animations defined with @keyframes, combined with animation property
- Background patterns with linear-gradient or repeating-linear-gradient
- Use CSS custom properties for theme colors, easy adjustment

Performance Optimization:
- Limit simultaneous animation count
- Use transform and opacity for animations, avoid triggering reflow
- Apply will-change: box-shadow for complex glow effects
- Background patterns use CSS instead of images when possible

Responsive Design:
- Mobile: reduce glow effects, lower animation complexity
- Tablet: maintain main visual effects, adjust grid column count
- Desktop: full visual effects, maximize glow and animations
- Consider prefers-reduced-motion, provide simplified version

**Content Suggestions**

Copy Style:
- Strong tech feel, use futuristic vocabulary: Cyber, Neo, Protocol, Interface, System
- Short and powerful, use imperatives and active voice
- Titles can use numeric or code-style prefixes: [01] [SYS] [INIT]

Icons & Graphics:
- Geometric icons with sharp angles
- Use strokes instead of fills
- Add neon outlines and glow
- Can integrate circuit board patterns or digital elements

Image Treatment:
- Reduce saturation, increase contrast
- Overlay semi-transparent neon color masks
- Add glow or glitch effects to edges
- Consider using cyberpunk-style illustrations or 3D renders

**Accessibility Considerations**

Contrast:
- Ensure text-to-background contrast ratio of at least 4.5:1 (body text) or 3:1 (large text)
- While using dark backgrounds with bright text, test readability
- Provide high contrast mode option

Usability:
- Glow effects should not impair text legibility
- Animations should be pausable or disablable
- Keyboard navigation: focus states need clear visual feedback (not just relying on glow)
- Screen readers: ensure decorative elements are marked aria-hidden

**Use Cases**

- Tech product launch pages
- Gaming community websites
- Blockchain/cryptocurrency platforms
- Music festivals/electronic music events
- Sci-fi themed portfolios
- Hackathon event pages
