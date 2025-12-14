# Custom Prompt

## 中文版本 (zh-CN)

创建一个渐变（Gradients）风格的网页设计，通过平滑色彩过渡与多层次渐变展现现代视觉美学。

**核心视觉特征**

渐变类型：
- **线性渐变（Linear）**：单向或多向色彩过渡，角度 0-360 度
- **径向渐变（Radial）**：从中心向外扩散的圆形或椭圆形渐变
- **圆锥渐变（Conic）**：围绕中心点旋转的渐变，类似色轮
- **网格渐变（Mesh）**：多点控制的复杂渐变，模拟真实光照

色彩方案：
- **极光效果**：紫 (#a855f7) → 蓝 (#3b82f6) → 青 (#06b6d4) → 绿 (#10b981)
- **日落配色**：橙 (#fb923c) → 粉 (#f472b6) → 紫 (#a78bfa) → 蓝 (#60a5fa)
- **深海渐变**：深蓝 (#1e3a8a) → 蓝绿 (#0891b2) → 青 (#06b6d4) → 浅青 (#67e8f9)
- **火焰渐变**：红 (#dc2626) → 橙 (#ea580c) → 黄 (#fbbf24) → 白 (#fef3c7)
- **单色渐变**：从深到浅，同一色相不同明度

背景应用：
- 全页面背景：使用大尺寸渐变覆盖整个视口
- 区块背景：局部区域应用渐变，与白色或深色区块交替
- 卡片背景：在白色卡片上叠加半透明渐变
- 文字背景：使用 background-clip: text 制作渐变文字
- 边框渐变：使用 border-image 或伪元素制作渐变边框

**排版设计**

字体选择：
- 标题使用现代无衬线字体（如 Inter, Poppins, DM Sans, Manrope）
- 正文采用易读字体（如 Inter, Open Sans, Roboto）
- 等宽字体用于代码或技术内容（如 Fira Code, JetBrains Mono）

文字效果：
- 渐变文字：使用 background-clip: text 裁剪渐变
- 文字大小：标题 48-72px，副标题 24-32px，正文 16-18px
- 文字颜色：在浅色渐变上使用深色文字，深色渐变上使用浅色文字
- 阴影：添加文字阴影增强可读性，颜色与背景渐变协调
- 对比度：确保文字与背景有足够对比度（至少 4.5:1）

层级结构：
- 主标题：大尺寸，可使用渐变填充，粗体 700-900
- 副标题：中等尺寸，纯色或渐变，中粗 500-600
- 正文：常规尺寸，纯色，常规 400
- 辅助文字：小尺寸，半透明，细体 300

**界面组件**

按钮设计：
- 渐变按钮：背景使用渐变填充，白色或深色文字
- 轮廓按钮：透明背景，渐变边框，渐变文字
- hover 效果：渐变移动、旋转或亮度增加
- 尺寸：高度 48-56px，水平内边距 32-48px
- 阴影：添加渐变色阴影，增强立体感

卡片与面板：
- 白色卡片：在渐变背景上使用纯白卡片，阴影增强对比
- 渐变卡片：卡片本身使用渐变背景，内容使用对比色
- 半透明卡片：使用 backdrop-filter: blur() 制作毛玻璃效果
- 边框渐变：使用渐变边框装饰卡片
- 内边距：24-32px

表单元素：
- 输入框：白色或浅色背景，深色边框
- focus 状态：边框变为渐变色，或添加渐变外发光
- 占位符：灰色文字，透明度 60%
- 标签：深色文字，小号

导航栏：
- 渐变背景：顶部使用渐变条，或整体渐变背景
- 半透明背景：使用 backdrop-blur 制作毛玻璃导航栏
- 链接文字：白色或深色，hover 时变为渐变色
- 激活态：渐变下划线或背景高亮

**布局与构图**

页面结构：
- Hero 区：大尺寸标题，全宽渐变背景，高度 60-100vh
- 内容区块：渐变背景与纯色背景交替，制造节奏感
- 卡片网格：2-3 列，白色卡片叠加在渐变背景上
- 容器最大宽度：1140-1280px

渐变布局策略：
- 全屏渐变：覆盖整个视口，制造沉浸感
- 区块渐变：每个区块使用不同渐变，视觉分隔
- 对角渐变：从左上至右下或其他对角方向
- 分层渐变：前景、中景、背景使用不同渐变层次

装饰元素：
- 渐变球体：使用 radial-gradient 制作模糊圆形，叠加在背景
- 渐变线条：使用 linear-gradient 制作细线或粗条
- 几何图形：三角形、圆形、多边形填充渐变
- 光斑效果：多个渐变圆形叠加，制造光影效果
- 网格或点阵：在渐变背景上叠加半透明网格

**动画与交互**

微交互：
- 按钮 hover：渐变位置移动或角度旋转，200-300ms
- 链接 hover：文字变为渐变色，或下划线渐变出现
- 卡片 hover：轻微放大，阴影增强
- 输入框 focus：边框渐变淡入

页面动画：
- 页面加载：渐变从透明淡入，或从页面边缘扫入
- 滚动触发：内容区块从下方滑入，带有淡入效果
- 视差滚动：背景渐变移动速度慢于前景内容
- 渐变流动：渐变颜色位置缓慢移动，制造流动感

渐变动画：
- 色彩循环：渐变颜色位置在 3-6s 内循环移动
- 角度旋转：线性渐变角度在 4-8s 内旋转 360 度
- 渐变呼吸：渐变大小或位置周期性变化，2-4s 周期
- 鼠标跟随：渐变中心或高光位置跟随鼠标移动

**技术实现要点**

CSS 渐变语法：
```css
/* 线性渐变 */
background: linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #10b981 100%);

/* 径向渐变 */
background: radial-gradient(circle at center, #a855f7, #3b82f6, #10b981);

/* 圆锥渐变 */
background: conic-gradient(from 0deg, #a855f7, #3b82f6, #10b981, #a855f7);

/* 多层渐变叠加 */
background:
  linear-gradient(135deg, rgba(168,85,247,0.5), transparent),
  radial-gradient(circle at top right, #3b82f6, transparent),
  #10b981;
```

渐变文字：
```css
.gradient-text {
  background: linear-gradient(135deg, #a855f7, #3b82f7, #10b981);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

渐变边框：
```css
.gradient-border {
  border: 2px solid transparent;
  background-clip: padding-box;
  background-image:
    linear-gradient(white, white),
    linear-gradient(135deg, #a855f7, #3b82f6);
  background-origin: padding-box, border-box;
}
```

渐变动画：
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animated-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 6s ease infinite;
}
```

**响应式设计**

桌面（1280px+）：
- 完整渐变效果，包括所有动画
- 多列布局，展示更多内容
- 大尺寸渐变背景

平板（768-1279px）：
- 保持主要渐变效果
- 两列或单列布局
- 简化渐变复杂度

移动（<768px）：
- 简化渐变，使用较少颜色
- 单列布局
- 减少或禁用渐变动画
- 确保文字可读性

**内容建议**

文案风格：
- 现代简洁：short, powerful, clear
- 科技感：Innovation, Future, Transform, Elevate
- 积极正面：Empower, Enhance, Inspire, Create

色彩心理：
- 蓝色渐变：信任、专业、科技
- 紫色渐变：创意、奢华、神秘
- 绿色渐变：成长、健康、自然
- 橙红渐变：能量、热情、活力
- 单色渐变：优雅、简约、专注

图片处理：
- 图片叠加渐变遮罩，增强对比度
- 图片与渐变背景融合，使用相近色调
- 图片边缘使用渐变过渡至背景色
- 黑白图片配彩色渐变，增强视觉冲击

**无障碍考虑**

对比度：
- 确保文字与渐变背景对比度至少 4.5:1
- 在渐变较浅区域使用深色文字，较深区域使用浅色文字
- 渐变装饰不用于传达关键信息
- 提供高对比度模式选项

可用性：
- 动画可禁用，遵循 prefers-reduced-motion
- 渐变不应引起眩晕或不适
- 键盘导航：focus 状态使用纯色轮廓而非渐变
- 屏幕阅读器：装饰性渐变元素标记为 aria-hidden

性能：
- 使用 CSS 渐变而非图片
- 限制复杂渐变数量
- 使用 will-change 优化动画元素
- 移动端简化渐变效果

**使用场景**

- SaaS 产品官网
- 科技创业公司
- 设计工作室作品集
- 移动应用落地页
- 创意机构网站
- 活动或会议网站
- 音乐或娱乐平台
- 教育科技平台


---

## English Version (en-US)

Create a Gradients web design showcasing smooth color transitions and multi-layered gradients for modern visual aesthetics.

**Core Visual Characteristics**

Gradient Types:
- **Linear Gradients**: Unidirectional or multi-directional color transitions, angles 0-360 degrees
- **Radial Gradients**: Circular or elliptical gradients expanding from center outward
- **Conic Gradients**: Gradients rotating around a center point, like a color wheel
- **Mesh Gradients**: Complex gradients with multi-point control, simulating real lighting

Color Schemes:
- **Aurora Effect**: purple (#a855f7) → blue (#3b82f6) → cyan (#06b6d4) → green (#10b981)
- **Sunset Colors**: orange (#fb923c) → pink (#f472b6) → purple (#a78bfa) → blue (#60a5fa)
- **Deep Sea**: navy (#1e3a8a) → teal (#0891b2) → cyan (#06b6d4) → light cyan (#67e8f9)
- **Flame Gradient**: red (#dc2626) → orange (#ea580c) → yellow (#fbbf24) → white (#fef3c7)
- **Monochrome**: Dark to light, same hue with different brightness

Background Applications:
- Full-page background: large-scale gradient covering entire viewport
- Section backgrounds: local areas with gradients, alternating with white or dark sections
- Card backgrounds: semi-transparent gradients overlaid on white cards
- Text backgrounds: gradient text using background-clip: text
- Border gradients: gradient borders using border-image or pseudo-elements

**Typography Design**

Font Selection:
- Headlines use modern sans-serif fonts (e.g., Inter, Poppins, DM Sans, Manrope)
- Body text uses readable fonts (e.g., Inter, Open Sans, Roboto)
- Monospace for code or technical content (e.g., Fira Code, JetBrains Mono)

Text Effects:
- Gradient text: clip gradients using background-clip: text
- Text sizes: headlines 48-72px, subtitles 24-32px, body 16-18px
- Text color: dark text on light gradients, light text on dark gradients
- Shadow: add text shadows for readability, colors harmonize with background gradient
- Contrast: ensure text has sufficient contrast with background (at least 4.5:1)

Hierarchy Structure:
- Main titles: large size, can use gradient fill, bold 700-900
- Subtitles: medium size, solid or gradient, medium weight 500-600
- Body text: regular size, solid color, regular 400
- Support text: small size, semi-transparent, thin 300

**UI Components**

Button Design:
- Gradient buttons: background with gradient fill, white or dark text
- Outline buttons: transparent background, gradient border, gradient text
- Hover effects: gradient movement, rotation, or brightness increase
- Dimensions: height 48-56px, horizontal padding 32-48px
- Shadow: add gradient-colored shadows for 3D effect

Cards & Panels:
- White cards: pure white cards on gradient backgrounds, shadows enhance contrast
- Gradient cards: cards themselves use gradient backgrounds, content uses contrast colors
- Semi-transparent cards: use backdrop-filter: blur() for frosted glass effect
- Border gradients: decorate cards with gradient borders
- Padding: 24-32px

Form Elements:
- Input fields: white or light background, dark borders
- Focus state: border becomes gradient color, or add gradient outer glow
- Placeholder: gray text, 60% opacity
- Labels: dark text, small size

Navigation Bar:
- Gradient background: gradient bar at top, or overall gradient background
- Semi-transparent background: frosted glass navbar using backdrop-blur
- Link text: white or dark, becomes gradient color on hover
- Active state: gradient underline or background highlight

**Layout & Composition**

Page Structure:
- Hero section: large title, full-width gradient background, height 60-100vh
- Content blocks: alternate between gradient and solid backgrounds for rhythm
- Card grid: 2-3 columns, white cards overlaid on gradient backgrounds
- Max container width: 1140-1280px

Gradient Layout Strategy:
- Full-screen gradients: cover entire viewport for immersive feel
- Block gradients: each block uses different gradient for visual separation
- Diagonal gradients: from top-left to bottom-right or other diagonal directions
- Layered gradients: foreground, midground, background use different gradient layers

Decorative Elements:
- Gradient spheres: blurred circles using radial-gradient, overlaid on background
- Gradient lines: thin or thick stripes using linear-gradient
- Geometric shapes: triangles, circles, polygons filled with gradients
- Light spot effects: multiple gradient circles overlaid for light-shadow effects
- Grids or dot patterns: semi-transparent grids overlaid on gradient backgrounds

**Animation & Interaction**

Micro-interactions:
- Button hover: gradient position move or angle rotate, 200-300ms
- Link hover: text becomes gradient color, or gradient underline appears
- Card hover: slight scale up, enhanced shadow
- Input focus: gradient border fades in

Page Animations:
- Page load: gradient fades from transparent, or sweeps from page edges
- Scroll trigger: content blocks slide up from bottom with fade-in
- Parallax scroll: background gradients move slower than foreground content
- Gradient flow: gradient color positions slowly move for flowing effect

Gradient Animations:
- Color cycling: gradient color positions cycle over 3-6s
- Angle rotation: linear gradient angle rotates 360 degrees over 4-8s
- Gradient breathing: gradient size or position changes periodically, 2-4s cycle
- Mouse follow: gradient center or highlight position follows mouse

**Technical Implementation**

CSS Gradient Syntax:
```css
/* Linear gradient */
background: linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #10b981 100%);

/* Radial gradient */
background: radial-gradient(circle at center, #a855f7, #3b82f6, #10b981);

/* Conic gradient */
background: conic-gradient(from 0deg, #a855f7, #3b82f6, #10b981, #a855f7);

/* Multi-layer gradient overlay */
background:
  linear-gradient(135deg, rgba(168,85,247,0.5), transparent),
  radial-gradient(circle at top right, #3b82f6, transparent),
  #10b981;
```

Gradient Text:
```css
.gradient-text {
  background: linear-gradient(135deg, #a855f7, #3b82f7, #10b981);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

Gradient Border:
```css
.gradient-border {
  border: 2px solid transparent;
  background-clip: padding-box;
  background-image:
    linear-gradient(white, white),
    linear-gradient(135deg, #a855f7, #3b82f6);
  background-origin: padding-box, border-box;
}
```

Gradient Animation:
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animated-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 6s ease infinite;
}
```

**Responsive Design**

Desktop (1280px+):
- Full gradient effects including all animations
- Multi-column layout showing more content
- Large-scale gradient backgrounds

Tablet (768-1279px):
- Maintain main gradient effects
- Two-column or single-column layout
- Simplify gradient complexity

Mobile (<768px):
- Simplify gradients, use fewer colors
- Single-column layout
- Reduce or disable gradient animations
- Ensure text readability

**Content Suggestions**

Copy Style:
- Modern concise: short, powerful, clear
- Tech feel: Innovation, Future, Transform, Elevate
- Positive: Empower, Enhance, Inspire, Create

Color Psychology:
- Blue gradients: trust, professional, tech
- Purple gradients: creative, luxurious, mysterious
- Green gradients: growth, health, natural
- Orange-red gradients: energy, passion, vitality
- Monochrome gradients: elegant, minimal, focused

Image Treatment:
- Overlay gradient masks on images for enhanced contrast
- Blend images with gradient backgrounds using similar tones
- Use gradient transitions from image edges to background color
- Pair black-and-white images with color gradients for visual impact

**Accessibility Considerations**

Contrast:
- Ensure text-to-gradient background contrast ratio of at least 4.5:1
- Use dark text in lighter gradient areas, light text in darker areas
- Gradient decorations not used for conveying key information
- Provide high contrast mode option

Usability:
- Animations can be disabled, respect prefers-reduced-motion
- Gradients should not cause dizziness or discomfort
- Keyboard navigation: focus states use solid-color outlines, not gradients
- Screen readers: decorative gradient elements marked aria-hidden

Performance:
- Use CSS gradients instead of images
- Limit complex gradient count
- Use will-change for animated elements
- Simplify gradient effects on mobile

**Use Cases**

- SaaS product websites
- Tech startup companies
- Design studio portfolios
- Mobile app landing pages
- Creative agency websites
- Event or conference sites
- Music or entertainment platforms
- EdTech platforms
