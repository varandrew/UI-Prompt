# Custom Prompt

## 中文版本 (zh-CN)

创建一个全息箔纸（Holographic Foil）风格的网页设计，展现彩虹般的变幻色彩与奢华金属质感。

**核心视觉特征**

色彩系统：
- 全息彩虹：从紫 (#8b00ff) → 蓝 (#0080ff) → 青 (#00ffff) → 绿 (#00ff00) → 黄 (#ffff00) → 橙 (#ff8800) → 红 (#ff0066) → 紫，循环渐变
- 金属基底：铂金灰 (#d0d0d8, #c8c8d0)、香槟金 (#f4e8c1, #e6d8a3)、玫瑰金 (#f6c8c8, #e8b8b8)
- 背景色：纯白 (#ffffff) 或极浅灰 (#f8f8f8, #fafafa)
- 强调色：深紫 (#5a00b8) 或深蓝 (#003d7a) 提供对比

光泽效果：
- 多层渐变模拟光泽：使用 linear-gradient 叠加 3-5 层
- 角度变化：渐变方向 45-135 度，制造动态感
- 高光点：在特定位置添加白色径向渐变，模拟反光
- 金属光泽：使用 conic-gradient 制造旋转彩虹效果
- 透明度层次：叠加 rgba 渐变，不透明度 20-60%

变换效果：
- 视角倾斜：使用 transform: rotateX() 或 rotateY() 制造 3D 效果
- 光线跟随：鼠标移动时改变渐变角度或位置
- 色彩循环：使用 animation 让渐变色彩缓慢旋转或移动
- 波纹闪光：周期性的高光扫过表面

**排版设计**

字体选择：
- 标题使用优雅衬线字体（如 Playfair Display, Cormorant, Crimson Pro）
- 或使用现代几何字体（如 Montserrat, Poppins, DM Sans）
- 正文采用易读无衬线（如 Inter, Open Sans, Lato）
- 数字可使用等宽字体增加现代感

文字效果：
- 全息文字：使用 background-clip: text 裁剪渐变背景
- 文字大小：标题 56-80px，副标题 28-36px
- 字母间距：标题较宽 2-4px，正文正常
- 文字轮廓：添加细微白色或浅色描边，增加立体感
- 阴影：多层 text-shadow 模拟金属质感，颜色为彩虹色

层级结构：
- 主标题：全息渐变填充，粗体 700-800
- 副标题：金属色或深色，中等粗细 500-600
- 正文：深灰色 #333333，常规 400
- 辅助文字：中灰色 #666666，细体 300

**界面组件**

按钮设计：
- 全息按钮：彩虹渐变背景，白色文字，轻微圆角 4-8px
- 轮廓按钮：透明背景，全息渐变边框 2-3px
- hover 效果：渐变角度或位置移动，添加阴影
- 尺寸：高度 48-56px，水平内边距 32-48px
- 状态：禁用态降低饱和度至灰色

卡片与面板：
- 背景：白色或浅灰，带有全息边框或角落装饰
- 边框：2-3px 全息渐变，或使用 box-shadow 模拟
- 内边距：28-36px
- hover 状态：边框闪光，卡片轻微上浮，添加全息阴影

表单元素：
- 输入框：白色背景，浅灰边框，focus 时全息边框
- focus 状态：边框变为彩虹渐变，外发光
- 占位符：浅灰色 #999999
- 标签：深灰色，小号大写

导航栏：
- 白色或半透明背景，带有 backdrop-blur
- 链接文字：深灰色，hover 时变为全息渐变色
- 激活态：全息渐变下划线或背景
- Logo：可使用全息效果或保持单色对比

图标设计：
- 线条图标，添加全息渐变描边
- 或填充型图标使用彩虹渐变填充
- 尺寸：20-28px 常规，32-48px 大图标
- hover 效果：渐变移动或旋转

**布局与构图**

页面结构：
- Hero 区：大标题 + 副标题 + CTA，背景使用全息装饰元素
- 内容区块：白色卡片叠加全息边框或阴影
- 功能区块：使用全息分隔线或装饰图形
- 容器最大宽度：1140-1280px

间距与留白：
- 区块间距：64-96px
- 卡片间距：24-32px
- 内容内边距：28-40px
- 大量留白：让全息效果更突出

装饰元素：
- 全息光斑：在背景添加模糊彩虹渐变圆形
- 几何图形：三角形、圆形、多边形边框使用全息效果
- 分隔线：细线带有彩虹渐变
- 角落装饰：卡片四角添加全息 L 型线条或点
- 背景纹理：微妙的噪点或网格，增加质感

构图原则：
- 对称或近对称布局，营造高端感
- 中心对齐或左对齐，避免右对齐
- 使用黄金比例划分区域
- 内容与全息装饰平衡，不要过度

**动画与交互**

微交互：
- 按钮 hover：渐变移动 200-300ms，ease-out
- 链接 hover：文字变为全息色，200ms
- 卡片 hover：上浮 4-6px，阴影增强
- 输入框 focus：边框颜色平滑过渡

页面动画：
- 页面加载：元素从透明淡入，带有轻微上移
- 滚动触发：全息元素从侧边滑入或缩放出现
- 视差滚动：背景全息装饰移动速度慢于内容
- 光泽扫过：周期性的高光从左至右或对角扫过

全息动画：
- 色彩循环：渐变颜色位置缓慢移动，3-6s 周期
- 角度旋转：渐变方向旋转，4-8s 周期
- 闪光效果：周期性的高光快速扫过，2-3s 间隔
- 鼠标跟随：渐变角度或高光位置跟随鼠标移动

性能考虑：
- 使用 transform 和 opacity 实现动画
- 限制同时动画的元素数量
- 复杂渐变使用图片而非 CSS（如有需要）
- 移动端简化效果

**技术实现要点**

CSS 渐变技巧：
- linear-gradient：基础彩虹渐变，`linear-gradient(135deg, #8b00ff 0%, #0080ff 20%, #00ffff 40%, #00ff00 60%, #ffff00 80%, #ff0066 100%)`
- conic-gradient：旋转彩虹，`conic-gradient(from 45deg, #8b00ff, #0080ff, #00ffff, #00ff00, #ffff00, #ff0066, #8b00ff)`
- radial-gradient：高光点，`radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)`
- 多层叠加：使用伪元素 ::before 和 ::after 叠加多个渐变

background-clip 文字：
```css
.holographic-text {
  background: linear-gradient(135deg, rainbow colors);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

阴影与边框：
- box-shadow 多层：`0 4px 8px rgba(138,0,255,0.2), 0 8px 16px rgba(0,255,0,0.15)`
- border-image：使用渐变作为边框，`border-image: linear-gradient(135deg, colors) 1`

动画实现：
```css
@keyframes holographic-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.holographic {
  background-size: 200% 200%;
  animation: holographic-shift 6s ease infinite;
}
```

**响应式设计**

桌面（1280px+）：
- 完整全息效果，包括所有动画
- 多列布局，展示更多内容
- 大尺寸标题和装饰元素

平板（768-1279px）：
- 保持主要全息效果
- 两列或单列布局
- 减少装饰元素数量

移动（<768px）：
- 简化全息效果，使用静态渐变
- 单列布局
- 减少或禁用动画
- 增大触摸目标尺寸至 44px+

**内容建议**

文案风格：
- 奢华高端：Luxury, Premium, Exclusive, Elite
- 现代科技：Innovation, Future, Advanced, Cutting-edge
- 简洁有力：短句，主动语态

图片选择：
- 高质量产品照片
- 现代科技产品
- 奢侈品、珠宝、化妆品
- 图片边缘或背景可添加全息效果

色彩搭配建议：
- 主色：全息彩虹
- 辅色：白色、浅灰
- 强调色：深紫、深蓝
- 文字色：深灰、黑色

**无障碍考虑**

对比度：
- 全息效果主要用于装饰，不用于传达关键信息
- 文字使用深色，确保与白色背景对比度 >7:1
- 全息文字仅用于标题，正文使用纯色

可用性：
- 动画可禁用，遵循 prefers-reduced-motion
- 提供静态版本作为降级方案
- 键盘导航：focus 状态使用全息边框或轮廓
- 屏幕阅读器：装饰性全息元素标记为 aria-hidden

性能：
- 避免过多复杂渐变
- 使用 will-change 优化动画元素
- 图片优化，使用 WebP 格式
- 懒加载非关键内容

**使用场景**

- 奢侈品牌网站
- 高端科技产品发布页
- 化妆品或美容品牌
- 音乐专辑或艺术家官网
- 时尚品牌或设计工作室
- 加密货币或 NFT 平台
- 活动邀请页或电子贺卡

---

## English Version (en-US)

Create a Holographic Foil web design showcasing rainbow iridescent colors and luxurious metallic sheen.

**Core Visual Characteristics**

Color System:
- Holographic rainbow: purple (#8b00ff) → blue (#0080ff) → cyan (#00ffff) → green (#00ff00) → yellow (#ffff00) → orange (#ff8800) → red (#ff0066) → purple, cycling gradient
- Metallic base: platinum gray (#d0d0d8, #c8c8d0), champagne gold (#f4e8c1, #e6d8a3), rose gold (#f6c8c8, #e8b8b8)
- Background: pure white (#ffffff) or very light gray (#f8f8f8, #fafafa)
- Accent colors: deep purple (#5a00b8) or deep blue (#003d7a) for contrast

Glossy Effects:
- Multi-layer gradients simulating gloss: overlay 3-5 linear-gradient layers
- Angle variation: gradient directions 45-135 degrees for dynamic feel
- Highlight spots: white radial gradients at specific locations simulating reflections
- Metallic luster: use conic-gradient for rotating rainbow effect
- Opacity layers: overlay rgba gradients with 20-60% opacity

Transform Effects:
- Perspective tilt: use transform: rotateX() or rotateY() for 3D effect
- Light tracking: change gradient angle or position with mouse movement
- Color cycling: use animation for slow gradient color rotation or movement
- Ripple flash: periodic highlights sweeping across surface

**Typography Design**

Font Selection:
- Headlines use elegant serif fonts (e.g., Playfair Display, Cormorant, Crimson Pro)
- Or use modern geometric fonts (e.g., Montserrat, Poppins, DM Sans)
- Body text uses readable sans-serif (e.g., Inter, Open Sans, Lato)
- Numbers can use monospace for modern feel

Text Effects:
- Holographic text: use background-clip: text to clip gradient background
- Text sizes: headlines 56-80px, subtitles 28-36px
- Letter spacing: wider for headlines 2-4px, normal for body
- Text outline: add subtle white or light stroke for 3D effect
- Shadow: multi-layer text-shadow simulating metallic texture with rainbow colors

Hierarchy Structure:
- Main titles: holographic gradient fill, bold 700-800
- Subtitles: metallic or dark colors, medium weight 500-600
- Body text: dark gray #333333, regular 400
- Support text: mid-gray #666666, thin 300

**UI Components**

Button Design:
- Holographic buttons: rainbow gradient background, white text, slight border-radius 4-8px
- Outline buttons: transparent background, holographic gradient border 2-3px
- Hover effect: gradient angle or position shift, add shadow
- Dimensions: height 48-56px, horizontal padding 32-48px
- States: disabled reduces saturation to gray

Cards & Panels:
- Background: white or light gray with holographic border or corner decoration
- Border: 2-3px holographic gradient, or simulate with box-shadow
- Padding: 28-36px
- Hover state: border shimmer, card slight lift, add holographic shadow

Form Elements:
- Input fields: white background, light gray border, holographic border on focus
- Focus state: border becomes rainbow gradient with outer glow
- Placeholder: light gray #999999
- Labels: dark gray, small caps

Navigation Bar:
- White or semi-transparent background with backdrop-blur
- Link text: dark gray, becomes holographic gradient on hover
- Active state: holographic gradient underline or background
- Logo: can use holographic effect or keep monochrome for contrast

Icon Design:
- Line icons with holographic gradient stroke
- Or filled icons using rainbow gradient fill
- Sizes: 20-28px regular, 32-48px large icons
- Hover effect: gradient movement or rotation

**Layout & Composition**

Page Structure:
- Hero section: large title + subtitle + CTA, background with holographic decorative elements
- Content blocks: white cards overlaid with holographic borders or shadows
- Feature blocks: use holographic dividers or decorative graphics
- Max container width: 1140-1280px

Spacing & Whitespace:
- Block spacing: 64-96px
- Card spacing: 24-32px
- Content padding: 28-40px
- Abundant whitespace: makes holographic effects stand out

Decorative Elements:
- Holographic light spots: add blurred rainbow gradient circles in background
- Geometric shapes: triangles, circles, polygons with holographic borders
- Dividers: thin lines with rainbow gradients
- Corner decorations: holographic L-shaped lines or dots at card corners
- Background texture: subtle noise or grid for added texture

Composition Principles:
- Symmetric or near-symmetric layout for premium feel
- Center or left alignment, avoid right alignment
- Use golden ratio for area division
- Balance content with holographic decoration, avoid excess

**Animation & Interaction**

Micro-interactions:
- Button hover: gradient shift 200-300ms, ease-out
- Link hover: text becomes holographic color, 200ms
- Card hover: lift 4-6px, enhanced shadow
- Input focus: border color smooth transition

Page Animations:
- Page load: elements fade from transparent with slight upward movement
- Scroll trigger: holographic elements slide from side or scale in
- Parallax scroll: background holographic decorations move slower than content
- Gloss sweep: periodic highlights sweep left-to-right or diagonally

Holographic Animations:
- Color cycling: gradient color positions slowly move, 3-6s cycle
- Angle rotation: gradient direction rotates, 4-8s cycle
- Flash effect: periodic quick highlight sweep, 2-3s interval
- Mouse follow: gradient angle or highlight position follows mouse

Performance Considerations:
- Use transform and opacity for animations
- Limit simultaneously animated elements
- Use images for complex gradients if needed
- Simplify effects on mobile

**Technical Implementation**

CSS Gradient Techniques:
- linear-gradient: basic rainbow gradient, `linear-gradient(135deg, #8b00ff 0%, #0080ff 20%, #00ffff 40%, #00ff00 60%, #ffff00 80%, #ff0066 100%)`
- conic-gradient: rotating rainbow, `conic-gradient(from 45deg, #8b00ff, #0080ff, #00ffff, #00ff00, #ffff00, #ff0066, #8b00ff)`
- radial-gradient: highlight spots, `radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)`
- Multi-layer overlay: use pseudo-elements ::before and ::after to overlay multiple gradients

background-clip Text:
```css
.holographic-text {
  background: linear-gradient(135deg, rainbow colors);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Shadows & Borders:
- Multi-layer box-shadow: `0 4px 8px rgba(138,0,255,0.2), 0 8px 16px rgba(0,255,0,0.15)`
- border-image: use gradient as border, `border-image: linear-gradient(135deg, colors) 1`

Animation Implementation:
```css
@keyframes holographic-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.holographic {
  background-size: 200% 200%;
  animation: holographic-shift 6s ease infinite;
}
```

**Responsive Design**

Desktop (1280px+):
- Full holographic effects including all animations
- Multi-column layout showing more content
- Large-scale titles and decorative elements

Tablet (768-1279px):
- Maintain main holographic effects
- Two-column or single-column layout
- Reduce decorative element count

Mobile (<768px):
- Simplify holographic effects, use static gradients
- Single-column layout
- Reduce or disable animations
- Increase touch target size to 44px+

**Content Suggestions**

Copy Style:
- Luxurious premium: Luxury, Premium, Exclusive, Elite
- Modern tech: Innovation, Future, Advanced, Cutting-edge
- Concise powerful: short sentences, active voice

Image Selection:
- High-quality product photos
- Modern tech products
- Luxury goods, jewelry, cosmetics
- Add holographic effects to image edges or backgrounds

Color Pairing Recommendations:
- Primary: holographic rainbow
- Secondary: white, light gray
- Accent: deep purple, deep blue
- Text color: dark gray, black

**Accessibility Considerations**

Contrast:
- Holographic effects primarily decorative, not for conveying key information
- Text uses dark colors, ensure >7:1 contrast with white background
- Holographic text only for headlines, body uses solid colors

Usability:
- Animations can be disabled, respect prefers-reduced-motion
- Provide static version as fallback
- Keyboard navigation: focus states use holographic border or outline
- Screen readers: decorative holographic elements marked aria-hidden

Performance:
- Avoid too many complex gradients
- Use will-change for animated elements
- Optimize images, use WebP format
- Lazy load non-critical content

**Use Cases**

- Luxury brand websites
- Premium tech product launch pages
- Cosmetics or beauty brands
- Music albums or artist official sites
- Fashion brands or design studios
- Cryptocurrency or NFT platforms
- Event invitation pages or e-cards
