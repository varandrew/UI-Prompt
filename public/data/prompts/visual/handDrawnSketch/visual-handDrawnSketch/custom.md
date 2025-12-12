# Custom Prompt

## 中文版本 (zh-CN)

创建一个手绘涂鸦（Hand Drawn Sketch）风格的网页设计，展现手工绘制的随性线条与温暖人性化的视觉感受。

**核心视觉特征**

线条风格：
- **不规则线条**：模拟手绘笔触，线条粗细不均，略带抖动
- **双线条轮廓**：线条略微分离或重叠，增加手绘感
- **虚线与破折线**：用于装饰或分隔，间距不完全均匀
- **线条端点**：手绘的起笔和收笔，带有自然的笔触感
- **交叉与连接**：线条交叉处不完美对齐，模拟真实绘制

色彩系统：
- **纸张背景**：米白 (#faf9f6, #f5f5dc)、淡黄 (#fffef0, #fefce8)、浅灰 (#f8f8f8)
- **铅笔灰**：炭灰 (#2d2d2d, #3a3a3a)、中灰 (#6b6b6b)、浅灰 (#9ca3af)
- **淡彩点缀**：柔和的水彩色，低饱和度（蓝 #a8d8ea、粉 (#ffaaa7)、黄 #fff4a3、绿 #b8e6b8）
- **高光**：白色或极浅色，模拟橡皮擦痕或留白

纹理效果：
- **纸张纹理**：添加微妙噪点或纸张扫描质感
- **铅笔笔触**：使用 filter: contrast() 或叠加纹理图层
- **阴影**：柔和的铅笔擦抹效果，而非硬边阴影
- **笔记本线条**：可选的横向或纵向格线，模拟笔记本纸

**排版设计**

字体选择：
- 手写字体（如 Patrick Hand, Indie Flower, Caveat, Shadows Into Light）
- 混搭印刷体（如 Architects Daughter, Permanent Marker）
- 正文可使用易读手写体或清晰无衬线

文字效果：
- 标题字号 40-64px，手写体，略带倾斜或不规则
- 正文字号 16-20px，行高 1.6-1.8
- 文字轮廓：略带不规则，模拟铅笔书写
- 删除线或下划线：手绘风格，不完全直
- 字母大小不完全一致，增加手写感

层级结构：
- 主标题：大尺寸手写体，可加粗或使用双线描边
- 副标题：中等尺寸，可使用不同字体区分
- 正文：小号手写体或清晰字体
- 注释：斜体或小字号，模拟旁注

**界面组件**

按钮设计：
- 轮廓型按钮：手绘边框，圆角不完美，线条略微抖动
- 填充型按钮：淡彩填充，手绘边框
- hover 效果：阴影增强或颜色加深
- 尺寸：高度 44-52px，内边距 24-32px
- 状态：禁用态降低饱和度和不透明度

卡片与面板：
- 白色或米色背景，手绘边框
- 边框：1-2px 不规则线条，角落略带弧度
- 装饰：四角可添加小图案（星号、箭头、圆点）
- 阴影：淡淡的铅笔擦抹阴影
- 内边距：20-28px

表单元素：
- 输入框：手绘边框，placeholder 用手写体
- focus 状态：边框加粗或颜色加深
- 复选框：手绘方框，勾选用手绘勾号
- 单选框：手绘圆形，选中填充圆点
- 下拉菜单：手绘箭头图标

导航栏：
- 简洁布局，手绘分隔线
- 链接文字：手写体，hover 时加下划线
- Logo：手绘图案或手写字体
- 菜单图标：手绘三条横线（汉堡菜单）

**布局与构图**

页面结构：
- 非对称布局：元素不完全对齐，略带随意感
- 手绘边框分隔区块
- Hero 区：大标题 + 手绘插图或涂鸦
- 内容区块：纸张风格卡片叠加
- 容器最大宽度：1100-1200px

装饰元素：
- 手绘箭头：指向重要内容
- 星号或圆点：点缀在标题旁
- 涂鸦图案：简单线条图，如心形、星星、云朵
- 波浪线：用于分隔或强调
- 手绘图标：代替标准图标

构图原则：
- 留白充足，避免拥挤
- 元素轻微旋转（-3 至 3 度），增加动态感
- 手绘线条引导视线
- 笔记本风格：横线背景或边缘卷边效果

**动画与交互**

微交互：
- 按钮 hover：轻微抖动或缩放，200-300ms
- 链接 hover：手绘下划线从左至右绘制
- 卡片 hover：轻微上浮，阴影增强
- 图标 hover：线条加粗或颜色变深

页面动画：
- 页面加载：元素像手绘一样逐个出现
- 滚动触发：内容从下方滑入，带有淡入
- 手绘动画：SVG 线条绘制动画（stroke-dasharray）
- 涂鸦出现：随机小图案在背景淡入

手绘效果动画：
- 线条绘制：使用 SVG stroke-dashoffset 动画
- 文字手写：逐字符出现，模拟书写
- 擦除效果：从右至左淡出，模拟橡皮擦
- 摇摆：元素轻微旋转，2-3s 周期

**技术实现要点**

CSS 技巧：
- 使用 SVG filter 模拟手绘线条：
```css
.hand-drawn {
  filter: url(#hand-drawn-filter);
}
```
- border-radius 不规则：每个角使用不同半径
- transform: rotate() 轻微旋转元素
- box-shadow 柔和：模拟铅笔阴影

SVG 路径：
- 使用 `<path>` 绘制不规则边框
- stroke-dasharray 制作虚线
- stroke-linecap="round" 圆润端点
- stroke-linejoin="round" 圆润连接

手绘边框生成：
- 使用 JS 库如 Rough.js 自动生成手绘效果
- 或使用 SVG 路径手动绘制不规则边框

性能优化：
- 手绘效果使用 CSS 而非大量 SVG（除非必要）
- 限制动画元素数量
- 使用 transform 和 opacity 实现动画

**响应式设计**

桌面（1280px+）：
- 完整手绘效果，包括所有装饰元素
- 多列布局
- 大尺寸插图

平板（768-1279px）：
- 保持主要手绘效果
- 两列或单列布局
- 简化装饰元素

移动（<768px）：
- 简化手绘细节
- 单列布局
- 减少装饰元素
- 确保文字可读性（手写体在小尺寸仍清晰）

**内容建议**

文案风格：
- 亲切友好：casual, friendly, warm
- 个性化：personalized, unique, authentic
- 简洁有趣：short, fun, engaging

图标与插图：
- 手绘线条图标
- 简笔画人物或物品
- 涂鸦风格装饰
- 避免过于复杂的细节

图片处理：
- 图片边缘添加手绘边框
- 叠加纸张纹理
- 降低饱和度，增加柔和感
- 可添加铅笔标注或箭头

**无障碍考虑**

对比度：
- 手写体文字与背景对比度 >4.5:1
- 手绘线条粗细至少 1-2px，确保可见
- 不依赖颜色区分，添加文字标签

可用性：
- 手写体清晰易读，避免过于花哨
- 装饰性手绘元素标记为 aria-hidden
- 键盘导航：focus 状态使用手绘轮廓
- 屏幕阅读器：提供文字描述

性能：
- 手绘字体文件优化，仅加载必要字符
- SVG 优化，移除不必要节点
- 纸张纹理使用小尺寸平铺图片

**使用场景**

- 创意工作室网站
- 个人博客或作品集
- 儿童教育平台
- 手工艺品商店
- 咖啡店或餐厅网站
- 活动邀请页
- 创意日记或笔记应用
- 插画师作品展示

---

## English Version (en-US)

Create a Hand Drawn Sketch web design featuring casual hand-drawn lines and warm humanized visual feel.

**Core Visual Characteristics**

Line Styles:
- **Irregular lines**: simulate hand-drawn strokes, uneven thickness, slight wobble
- **Double-line outlines**: lines slightly separated or overlapping, enhance hand-drawn feel
- **Dashed & broken lines**: for decoration or separation, spacing not perfectly uniform
- **Line endpoints**: hand-drawn start and end strokes with natural pen feel
- **Crossings & connections**: line intersections imperfectly aligned, simulating real drawing

Color System:
- **Paper backgrounds**: off-white (#faf9f6, #f5f5dc), pale yellow (#fffef0, #fefce8), light gray (#f8f8f8)
- **Pencil gray**: charcoal (#2d2d2d, #3a3a3a), mid-gray (#6b6b6b), light gray (#9ca3af)
- **Soft color accents**: gentle watercolor tones, low saturation (blue #a8d8ea, pink #ffaaa7, yellow #fff4a3, green #b8e6b8)
- **Highlights**: white or very light colors, simulating eraser marks or white space

Texture Effects:
- **Paper texture**: add subtle noise or scanned paper feel
- **Pencil strokes**: use filter: contrast() or overlay texture layers
- **Shadows**: soft pencil-smudged effects, not hard-edged shadows
- **Notebook lines**: optional horizontal or vertical grid lines, simulating notebook paper

**Typography Design**

Font Selection:
- Handwritten fonts (e.g., Patrick Hand, Indie Flower, Caveat, Shadows Into Light)
- Mix with print-style (e.g., Architects Daughter, Permanent Marker)
- Body text can use readable handwriting or clear sans-serif

Text Effects:
- Headline size 40-64px, handwritten font, slightly tilted or irregular
- Body text size 16-20px, line-height 1.6-1.8
- Text outline: slightly irregular, simulating pencil writing
- Strike-through or underlines: hand-drawn style, not perfectly straight
- Letter sizes not perfectly consistent, enhance handwritten feel

Hierarchy Structure:
- Main titles: large handwritten font, can be bold or use double-line stroke
- Subtitles: medium size, can use different fonts for distinction
- Body text: small handwritten or clear font
- Annotations: italic or small size, simulating margin notes

**UI Components**

Button Design:
- Outline buttons: hand-drawn borders, imperfect rounded corners, slightly wobbling lines
- Filled buttons: soft color fill, hand-drawn borders
- Hover effects: shadow enhancement or color deepening
- Dimensions: height 44-52px, padding 24-32px
- States: disabled reduces saturation and opacity

Cards & Panels:
- White or cream backgrounds, hand-drawn borders
- Borders: 1-2px irregular lines, corners slightly curved
- Decoration: corners can have small patterns (asterisks, arrows, dots)
- Shadows: faint pencil-smudged shadows
- Padding: 20-28px

Form Elements:
- Input fields: hand-drawn borders, placeholder in handwriting
- Focus state: border thickens or color deepens
- Checkboxes: hand-drawn squares, checked with hand-drawn checkmark
- Radio buttons: hand-drawn circles, selected fills with dot
- Dropdowns: hand-drawn arrow icons

Navigation Bar:
- Simple layout, hand-drawn dividers
- Link text: handwritten font, underline on hover
- Logo: hand-drawn pattern or handwritten font
- Menu icon: hand-drawn three horizontal lines (hamburger menu)

**Layout & Composition**

Page Structure:
- Asymmetric layout: elements not perfectly aligned, slightly casual feel
- Hand-drawn borders separate sections
- Hero section: large title + hand-drawn illustration or doodles
- Content blocks: paper-style cards overlaid
- Max container width: 1100-1200px

Decorative Elements:
- Hand-drawn arrows: pointing to important content
- Asterisks or dots: accent next to titles
- Doodle patterns: simple line drawings like hearts, stars, clouds
- Wavy lines: for separation or emphasis
- Hand-drawn icons: replace standard icons

Composition Principles:
- Ample whitespace, avoid crowding
- Elements slightly rotated (-3 to 3 degrees), add dynamic feel
- Hand-drawn lines guide visual flow
- Notebook style: lined background or curled edge effects

**Animation & Interaction**

Micro-interactions:
- Button hover: slight shake or scale, 200-300ms
- Link hover: hand-drawn underline draws from left to right
- Card hover: slight lift, shadow enhancement
- Icon hover: lines thicken or color deepens

Page Animations:
- Page load: elements appear one by one as if hand-drawn
- Scroll trigger: content slides up from bottom with fade-in
- Hand-drawn animation: SVG line drawing animation (stroke-dasharray)
- Doodle appearance: random small patterns fade in on background

Hand-drawn Effect Animations:
- Line drawing: use SVG stroke-dashoffset animation
- Text handwriting: character-by-character appearance, simulate writing
- Erase effect: fade right to left, simulate eraser
- Wobble: elements slightly rotate, 2-3s cycle

**Technical Implementation**

CSS Techniques:
- Use SVG filter to simulate hand-drawn lines:
```css
.hand-drawn {
  filter: url(#hand-drawn-filter);
}
```
- Irregular border-radius: different radius for each corner
- transform: rotate() slightly rotate elements
- Soft box-shadow: simulate pencil shadow

SVG Paths:
- Use `<path>` to draw irregular borders
- stroke-dasharray for dashed lines
- stroke-linecap="round" for rounded endpoints
- stroke-linejoin="round" for rounded connections

Hand-drawn Border Generation:
- Use JS libraries like Rough.js to auto-generate hand-drawn effects
- Or manually draw irregular borders with SVG paths

Performance Optimization:
- Hand-drawn effects use CSS instead of massive SVG (unless necessary)
- Limit animated element count
- Use transform and opacity for animations

**Responsive Design**

Desktop (1280px+):
- Full hand-drawn effects including all decorative elements
- Multi-column layout
- Large-scale illustrations

Tablet (768-1279px):
- Maintain main hand-drawn effects
- Two-column or single-column layout
- Simplify decorative elements

Mobile (<768px):
- Simplify hand-drawn details
- Single-column layout
- Reduce decorative elements
- Ensure text readability (handwriting remains clear at small sizes)

**Content Suggestions**

Copy Style:
- Friendly approachable: casual, friendly, warm
- Personalized: personalized, unique, authentic
- Concise fun: short, fun, engaging

Icons & Illustrations:
- Hand-drawn line icons
- Simple sketched figures or objects
- Doodle-style decorations
- Avoid overly complex details

Image Treatment:
- Add hand-drawn borders to image edges
- Overlay paper texture
- Reduce saturation, increase softness
- Can add pencil annotations or arrows

**Accessibility Considerations**

Contrast:
- Handwritten text-to-background contrast >4.5:1
- Hand-drawn lines at least 1-2px thickness, ensure visibility
- Don't rely on color alone, add text labels

Usability:
- Handwriting clear and readable, avoid overly fancy
- Decorative hand-drawn elements marked aria-hidden
- Keyboard navigation: focus states use hand-drawn outlines
- Screen readers: provide text descriptions

Performance:
- Optimize handwritten font files, load only necessary characters
- SVG optimization, remove unnecessary nodes
- Paper texture uses small tiled images

**Use Cases**

- Creative studio websites
- Personal blogs or portfolios
- Children's education platforms
- Handcraft stores
- Coffee shops or restaurant websites
- Event invitation pages
- Creative diary or note apps
- Illustrator work showcases
