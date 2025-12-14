# Custom Prompt

## 中文版本 (zh-CN)

你现在是一名资深 UI 设计师兼前端工程师，请生成一个复古旅行日志风格的皮革质感界面。该风格模拟真实的皮革笔记本、旅行印章和手工制作的视觉效果。

**使用场景**
适用于旅行博客、摄影作品集、创意机构网站、生活方式品牌、手工艺品平台等需要传达冒险精神、个人故事和怀旧情怀的产品。

**整体布局结构**
1. 导航栏 - 皮革标签样式
   - 使用深棕色皮革渐变背景
   - 标签采用拟物化设计，模拟翻开的书本标签
   - Logo 区域使用黄铜徽章装饰

2. Hero 主视觉区 - 地图背景叠加
   - 背景：皮革纹理 + 复古地图网格叠加
   - 装饰元素：旋转的邮票图案（左上、右下）
   - CTA 按钮：金属质感按钮，带立体阴影

3. 特色卡片区 - 邮票样式
   - 3 列响应式网格布局
   - 每张卡片模拟邮票：锯齿状边缘、邮戳装饰
   - 卡片背景：羊皮纸色 (#F4E8C1)

4. 相册展示区 - Polaroid 相片墙
   - 4 列网格，每张照片略微旋转
   - 使用透明胶带装饰固定
   - 手写字体标注

5. 评价区 - 日记页面
   - 2 列布局，模拟手写日记本
   - 左侧装订线效果（红色虚线）
   - 页面装饰符号（星星、爱心）

6. CTA 区域 - 皮革面板
   - 深色皮革背景
   - 居中的大型 CTA 按钮
   - 底部：旅行数据徽章

**色彩与材质**
主色调（皮革质感）：
- 浅棕皮革: #8B6F47
- 深棕皮革: #5D4E37
- 深褐边缘: #4A3C2F
- 羊皮纸: #F4E8C1

强调色（装饰元素）：
- 邮票红: #DC143C
- 黄铜金: #B8860B, #8B6914
- 深墨色: #2C2416
- 柔和白: #E8D4B0

**皮革纹理实现（关键 CSS）**
\`\`\`css
/* 主背景皮革渐变 */
.leather-bg {
  background: linear-gradient(135deg, #8B6F47 0%, #5D4E37 100%);
}

/* SVG 噪点纹理叠加 */
.leather-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/></filter><rect width="200" height="200" filter="url(%23noise)" opacity="0.15"/></svg>');
  opacity: 0.4;
}

/* 皮革卡片阴影（多层模拟厚度）*/
.leather-card {
  background: linear-gradient(180deg, #6B5644 0%, #5A4837 100%);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  border: 3px solid rgba(0, 0, 0, 0.3);
}

/* 黄铜按钮金属质感 */
.brass-button {
  background: linear-gradient(180deg, #B8860B 0%, #8B6914 100%);
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  border: 3px solid rgba(0, 0, 0, 0.4);
}

/* 邮票锯齿边缘 */
.stamp-perforation {
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 12px,
    rgba(0,0,0,0.15) 12px,
    rgba(0,0,0,0.15) 14px
  ),
  repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 12px,
    rgba(0,0,0,0.15) 12px,
    rgba(0,0,0,0.15) 14px
  );
}

/* 缝线效果 */
.stitching {
  border: 2px dashed rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
\`\`\`

**字体系统**
- 标题/手写文字: 'Caveat', cursive
- 正文: 'Merriweather', serif
- 装饰签名: 'Dancing Script', cursive

**阴影与拟物效果**
1. 皮革卡片立体感
   - 外阴影: 0 8px 20px rgba(0,0,0,0.25)
   - 内阴影: inset 0 1px 0 rgba(255,255,255,0.5)
   - 厚度边框: 3px solid rgba(0,0,0,0.4)

2. 金属扣件/徽章
   - 径向渐变: radial-gradient(circle, #B8860B 0%, #8B6914 100%)
   - 高光: inset 0 1px 2px rgba(255,255,255,0.3)
   - 圆角: border-radius: 50%

3. Polaroid 相片
   - 白色边框: padding: 1rem (上下左), 3rem (底部)
   - 旋转: transform: rotate(2deg) 或 rotate(-2deg)
   - 悬停: 旋转归零 + 阴影加深

**交互与动效**
1. 卡片悬停
   - 上浮: translateY(-8px)
   - 轻微旋转: rotate(2deg)
   - 阴影扩大: 0 12px 28px rgba(0,0,0,0.35)

2. 按钮按压
   - Hover: translateY(-3px) + 阴影增强
   - Active: translateY(-1px) + 内阴影加深

3. 动画节奏
   - 过渡时间: 0.3s
   - 缓动函数: cubic-bezier(0.4, 0.0, 0.2, 1)

**装饰元素**
1. 旅行印章/邮戳
   - SVG 圆形轮廓
   - 半透明红色: rgba(220, 20, 60, 0.4)
   - 旋转角度: 8-12deg

2. 透明胶带
   - 半透明白色: rgba(255, 255, 255, 0.4)
   - 阴影: 0 2px 8px rgba(0,0,0,0.2)
   - 45度倾斜

3. 装订线
   - 红色虚线: repeating-linear-gradient
   - 间距: 20px

**输出要求**
- 使用语义化 HTML5 标签（nav, section, article）
- 类名使用 BEM 命名或描述性类名
- 响应式设计：移动端单列布局
- 所有链接使用 href="javascript:void(0)"
- 生成结果应一眼看出"复古旅行日志"主题


---

## English Version (en-US)

You are a senior UI designer and front-end engineer. Please create a vintage travel journal style interface with leather texture. This style simulates real leather notebooks, travel stamps, and handcrafted visual effects.

**Use Cases**
Suitable for travel blogs, photography portfolios, creative agency websites, lifestyle brands, handmade craft platforms, and products that need to convey adventure spirit, personal stories, and nostalgia.

**Overall Layout Structure**
1. Navigation - Leather Tab Style
   - Deep brown leather gradient background
   - Tabs use skeuomorphic design simulating book tabs
   - Logo area decorated with brass badges

2. Hero Section - Map Background Overlay
   - Background: Leather texture + vintage map grid overlay
   - Decorative elements: Rotated stamp patterns (top-left, bottom-right)
   - CTA buttons: Metallic buttons with 3D shadows

3. Feature Cards - Postage Stamp Style
   - 3-column responsive grid layout
   - Each card simulates a stamp: serrated edges, postmark decoration
   - Card background: Parchment color (#F4E8C1)

4. Gallery Section - Polaroid Photo Wall
   - 4-column grid, each photo slightly rotated
   - Decorated with transparent tape
   - Handwritten font captions

5. Testimonials - Journal Pages
   - 2-column layout simulating handwritten diary
   - Left binding line effect (red dashed line)
   - Page decoration symbols (stars, hearts)

6. CTA Area - Leather Panel
   - Dark leather background
   - Centered large CTA button
   - Bottom: Travel data badges

**Colors and Materials**
Main Colors (Leather Texture):
- Light brown leather: #8B6F47
- Dark brown leather: #5D4E37
- Deep brown edges: #4A3C2F
- Parchment: #F4E8C1

Accent Colors (Decorative Elements):
- Stamp red: #DC143C
- Brass gold: #B8860B, #8B6914
- Deep ink: #2C2416
- Soft white: #E8D4B0

**Leather Texture Implementation (Key CSS)**
\`\`\`css
/* Main background leather gradient */
.leather-bg {
  background: linear-gradient(135deg, #8B6F47 0%, #5D4E37 100%);
}

/* SVG noise texture overlay */
.leather-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/></filter><rect width="200" height="200" filter="url(%23noise)" opacity="0.15"/></svg>');
  opacity: 0.4;
}

/* Leather card shadow (multi-layer simulating thickness) */
.leather-card {
  background: linear-gradient(180deg, #6B5644 0%, #5A4837 100%);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  border: 3px solid rgba(0, 0, 0, 0.3);
}

/* Brass button metallic texture */
.brass-button {
  background: linear-gradient(180deg, #B8860B 0%, #8B6914 100%);
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  border: 3px solid rgba(0, 0, 0, 0.4);
}

/* Stamp serrated edges */
.stamp-perforation {
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 12px,
    rgba(0,0,0,0.15) 12px,
    rgba(0,0,0,0.15) 14px
  ),
  repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 12px,
    rgba(0,0,0,0.15) 12px,
    rgba(0,0,0,0.15) 14px
  );
}

/* Stitching effect */
.stitching {
  border: 2px dashed rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
\`\`\`

**Font System**
- Titles/Handwritten text: 'Caveat', cursive
- Body text: 'Merriweather', serif
- Decorative signatures: 'Dancing Script', cursive

**Shadows and Skeuomorphic Effects**
1. Leather card 3D effect
   - Outer shadow: 0 8px 20px rgba(0,0,0,0.25)
   - Inner shadow: inset 0 1px 0 rgba(255,255,255,0.5)
   - Thickness border: 3px solid rgba(0,0,0,0.4)

2. Metal clasps/badges
   - Radial gradient: radial-gradient(circle, #B8860B 0%, #8B6914 100%)
   - Highlight: inset 0 1px 2px rgba(255,255,255,0.3)
   - Round: border-radius: 50%

3. Polaroid photos
   - White border: padding: 1rem (top/left/right), 3rem (bottom)
   - Rotation: transform: rotate(2deg) or rotate(-2deg)
   - Hover: Rotation to zero + shadow deepening

**Interaction and Animation**
1. Card hover
   - Lift up: translateY(-8px)
   - Slight rotation: rotate(2deg)
   - Shadow expansion: 0 12px 28px rgba(0,0,0,0.35)

2. Button press
   - Hover: translateY(-3px) + shadow enhancement
   - Active: translateY(-1px) + inner shadow deepening

3. Animation rhythm
   - Transition time: 0.3s
   - Easing function: cubic-bezier(0.4, 0.0, 0.2, 1)

**Decorative Elements**
1. Travel stamps/postmarks
   - SVG circular outline
   - Semi-transparent red: rgba(220, 20, 60, 0.4)
   - Rotation angle: 8-12deg

2. Transparent tape
   - Semi-transparent white: rgba(255, 255, 255, 0.4)
   - Shadow: 0 2px 8px rgba(0,0,0,0.2)
   - 45-degree tilt

3. Binding line
   - Red dashed line: repeating-linear-gradient
   - Spacing: 20px

**Output Requirements**
- Use semantic HTML5 tags (nav, section, article)
- Class names use BEM naming or descriptive class names
- Responsive design: Single column layout on mobile
- All links use href="javascript:void(0)"
- Generated results should immediately show "vintage travel journal" theme
