// Claymorphism Custom Prompts - Two unique prompts for Dashboard and E-Commerce

export const dashboardCustomPrompt = {
  'zh-CN': `你现在是一名非常熟悉「黏土动画 / Claymorphism」风格的资深 UI 设计师兼前端工程师，需要创建一个面向设计师和创意工作者的创意工作台仪表板页面。

【使用场景：创意工作台仪表板】
这是一个面向设计师、插画师、内容创作者的工作台界面，用于展示他们的项目、创意收藏、统计数据和创作工具。用户群体是 20-35 岁的年轻创意工作者，他们希望界面不仅功能强大，还能在视觉上给予灵感和鼓励。整体氛围需要传达「友好、温暖、激励创造力」。

【整体布局结构】
页面采用单页滚动式设计，从上到下依次为：

1. **固定顶部导航栏（Sticky Navigation）**
   - 宽度：max-width 1400px，水平居中
   - 位置：fixed top 20px，悬浮在页面上方
   - 形状：超长胶囊形（border-radius: 50px）
   - 内容：Logo（左侧） + 导航链接（中间）+ CTA 按钮（右侧）
   - 背景：linear-gradient(145deg, #ffb3ba, #ff8fab)
   - 导航链接：Home | About | Gallery | Contact，使用 javascript:void(0) 避免跳转

2. **Hero 区块（视觉焦点）**
   - 高度：100vh，垂直居中对齐
   - 内容：Badge 标签（「3D Clay Design」） + 超大标题（「Welcome to Claymorphism」） + 副标题描述 + 双按钮组（Primary + Secondary）
   - Badge 样式：小型胶囊，粉紫渐变
   - 标题字号：4rem，超粗字重 900
   - 按钮布局：横向并排，左侧主按钮（「Get Started」），右侧次要按钮（「View Demo」）

3. **Features 特性展示区（3 列网格）**
   - 标题：「Key Features」，3rem 字号
   - 网格：3 列等宽，gap 3rem
   - 每个特性卡片包含：
     * 图标容器（80x80px，圆角 28px，深色渐变黏土块）
     * 特性标题（1.8rem）
     * 描述文字（1.05rem，半透明白色）

4. **Showcase 色彩展示区（4 列网格）**
   - 标题：「Design Showcase」
   - 网格：4 列等宽，展示 4 种不同配色的黏土卡片
   - 颜色方案：
     * Soft Pink（粉红系）
     * Ocean Blue（海洋蓝）
     * Mint Green（薄荷绿）
     * Sunset Orange（日落橙）
   - 每个卡片包含：色彩名称 + 情感关键词

5. **CTA 行动呼籲区块（单一大卡片）**
   - 背景：粉色渐变大卡片（border-radius: 48px）
   - 内容：「Ready to Start?」标题 + 描述文字 + 主按钮（「Get Started Now」）

6. **Footer 底部信息（双栏布局）**
   - 左侧：品牌名称 + Slogan
   - 右侧：导航链接（About | Blog | Contact）
   - 背景：与导航栏相同的粉色渐变

【黏土材质核心实现方案】

Claymorphism 的核心在于「多层阴影组合」营造真实的黏土块厚度感和立体感。

**1. 外部阴影（模拟黏土块投射在背景上的影子）**
- 下方阴影：6px 6px 12px rgba(255, 143, 171, 0.4)
- 模拟从左上方来的光源，右下角产生阴影

**2. 外部高光（模拟环境光反射）**
- 上方高光：-6px -6px 16px rgba(255, 255, 255, 0.6)
- 制造黏土块左上角的亮面

**3. 内部阴影（模拟黏土块内部的凹陷）**
- 右下内阴影：inset 2px 2px 4px rgba(255, 143, 171, 0.3)
- 增强立体厚度感

**4. 内部高光（模拟黏土块表面的凸起）**
- 左上内高光：inset -2px -2px 4px rgba(255, 255, 255, 0.2)
- 制造黏土表面的光泽感

**完整阴影组合示例**：
\`\`\`css
box-shadow:
  -6px -6px 16px rgba(255, 255, 255, 0.6),      /* 外高光 */
  6px 6px 16px rgba(255, 143, 171, 0.4),        /* 外阴影 */
  inset -2px -2px 4px rgba(255, 255, 255, 0.2), /* 内高光 */
  inset 2px 2px 4px rgba(255, 143, 171, 0.3);   /* 内阴影 */
\`\`\`

【配色系统详解】

**主色调（粉红系）**：
- 导航栏/按钮：linear-gradient(145deg, #ffb3ba, #ff8fab)
- 深色版本：linear-gradient(145deg, #ff99ac, #ff6a88)
- 浅色版本：linear-gradient(145deg, #ffc8dd, #ffafcc)

**背景渐变（温暖工作台）**：
- body 背景：linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ffecd2 100%)
- 模拟温暖的工作台光线，左上和右下较亮，中间偏暖

**Showcase 多彩配色**：
- 粉红系：linear-gradient(145deg, #ffb3ba, #ff8fab)
- 蓝色系：linear-gradient(145deg, #a8dadc, #457b9d)
- 绿色系：linear-gradient(145deg, #d8f3dc, #95d5b2)
- 橙色系：linear-gradient(145deg, #ffbe0b, #fb8500)

【交互动画详细规范】

**Hover 状态（黏土块被轻轻抬起）**：
\`\`\`css
.clay-element:hover {
  transform: translateY(-8px);
  box-shadow:
    -10px -10px 25px rgba(255, 255, 255, 0.7),  /* 外高光增强 */
    10px 10px 25px rgba(255, 143, 171, 0.5),    /* 外阴影增强 */
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 143, 171, 0.3);
  transition: all 0.3s ease;
}
\`\`\`

**Active 状态（黏土块被按压下去）**：
\`\`\`css
.clay-button:active {
  transform: translateY(2px);  /* 下沉 */
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.5),      /* 外高光减弱 */
    2px 2px 6px rgba(255, 143, 171, 0.3),        /* 外阴影减弱 */
    inset -3px -3px 6px rgba(255, 255, 255, 0.1), /* 内高光减弱 */
    inset 3px 3px 6px rgba(255, 143, 171, 0.4);  /* 内阴影增强 */
}
\`\`\`

【关键 CSS 类完整实现】

**1. 导航栏黏土胶囊**：
\`\`\`css
.clay-nav {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 1rem 2rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border-radius: 50px;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 143, 171, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

.clay-nav-content {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.clay-logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow:
    2px 2px 4px rgba(255, 143, 171, 0.3),
    -1px -1px 2px rgba(255, 255, 255, 0.3);
}
\`\`\`

**2. 主按钮黏土效果**：
\`\`\`css
.clay-btn-primary {
  padding: 1.1rem 2.5rem;
  border: none;
  border-radius: 32px;
  background: linear-gradient(145deg, #ff99ac, #ff6a88);
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px rgba(255, 106, 136, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}

.clay-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.7),
    6px 6px 16px rgba(255, 106, 136, 0.5),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
}

.clay-btn-primary:active {
  transform: translateY(2px);
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.5),
    2px 2px 6px rgba(255, 106, 136, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.1),
    inset 3px 3px 6px rgba(255, 106, 136, 0.4);
}
\`\`\`

**3. 特性卡片黏土块**：
\`\`\`css
.clay-feature-card {
  padding: 3rem 2rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border-radius: 40px;
  text-align: center;
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.6),
    8px 8px 20px rgba(255, 143, 171, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 143, 171, 0.3);
  transition: all 0.3s ease;
}

.clay-feature-card:hover {
  transform: translateY(-8px);
  box-shadow:
    -10px -10px 25px rgba(255, 255, 255, 0.7),
    10px 10px 25px rgba(255, 143, 171, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 143, 171, 0.3);
}
\`\`\`

**4. 文字黏土质感**：
\`\`\`css
.clay-hero-title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  color: #ffffff;
  text-shadow:
    4px 4px 8px rgba(255, 143, 171, 0.3),  /* 右下阴影 */
    -2px -2px 4px rgba(255, 255, 255, 0.3); /* 左上高光 */
}
\`\`\`

【输出要求】
1. 使用语义化 HTML5 标签（<nav>, <section>, <footer> 等）
2. 所有交互元素使用 <button> 或 <a> 标签
3. 所有链接使用 href="javascript:void(0)" 避免页面跳转
4. 颜色使用完整 hex 或 rgba 格式，不使用颜色名称
5. 圆角半径根据元素大小调整：按钮 24-32px，卡片 32-48px，导航栏 50px
6. 字体推荐使用 'Rounded Mplus 1c' 或系统圆润字体
7. 所有动画过渡时间控制在 0.3s，使用 ease 缓动
8. 响应式断点：768px（移动端隐藏导航菜单，调整网格为单列）

【技术提示】
- 使用 transform: translateY() 而非 margin/padding 改变位置，性能更好
- box-shadow 必须严格按照「外高光、外阴影、内高光、内阴影」顺序书写
- linear-gradient 角度统一使用 145deg，保持光源方向一致
- text-shadow 也采用双向阴影（右下暗 + 左上亮）模拟黏土压印文字效果
- z-index 层级：导航栏 1000，模态框 999，普通内容 1

生成的结果应该一眼看出是 Claymorphism 风格的变体，具有相同的黏土质感、柔和渐变和多层阴影特征。`,

  'en-US': `You are a senior UI designer and front-end engineer specializing in Claymorphism style, tasked with creating a creative dashboard page for designers and creative professionals.

【Use Case: Creative Dashboard】
This is a workspace interface for designers, illustrators, and content creators to showcase their projects, creative collections, statistics, and creative tools. The target audience is young creative professionals aged 20-35 who want an interface that is not only powerful but also visually inspiring and encouraging. The overall atmosphere should convey "friendly, warm, and creativity-inspiring".

【Overall Layout Structure】
The page uses a single-scroll design, from top to bottom:

1. **Sticky Top Navigation Bar**
   - Width: max-width 1400px, horizontally centered
   - Position: fixed top 20px, floating above the page
   - Shape: Super-long capsule (border-radius: 50px)
   - Content: Logo (left) + nav links (center) + CTA button (right)
   - Background: linear-gradient(145deg, #ffb3ba, #ff8fab)
   - Nav links: Home | About | Gallery | Contact, use javascript:void(0) to avoid navigation

2. **Hero Section (Visual Focus)**
   - Height: 100vh, vertically centered
   - Content: Badge ("3D Clay Design") + Large title ("Welcome to Claymorphism") + Subtitle + Dual button group (Primary + Secondary)
   - Badge style: Small capsule, pink-purple gradient
   - Title font-size: 4rem, font-weight 900
   - Button layout: Horizontal side-by-side, left primary ("Get Started"), right secondary ("View Demo")

3. **Features Section (3-column grid)**
   - Title: "Key Features", 3rem font-size
   - Grid: 3 equal-width columns, gap 3rem
   - Each feature card contains:
     * Icon container (80x80px, border-radius 28px, dark gradient clay block)
     * Feature title (1.8rem)
     * Description text (1.05rem, semi-transparent white)

4. **Showcase Section (4-column grid)**
   - Title: "Design Showcase"
   - Grid: 4 equal-width columns, showing 4 different colored clay cards
   - Color schemes:
     * Soft Pink (pink series)
     * Ocean Blue (ocean blue)
     * Mint Green (mint green)
     * Sunset Orange (sunset orange)
   - Each card contains: color name + emotional keyword

5. **CTA Section (Single large card)**
   - Background: Pink gradient large card (border-radius: 48px)
   - Content: "Ready to Start?" title + description + primary button ("Get Started Now")

6. **Footer (Two-column layout)**
   - Left: Brand name + Slogan
   - Right: Nav links (About | Blog | Contact)
   - Background: Same pink gradient as navigation bar

【Clay Material Core Implementation】

The core of Claymorphism is the "multi-layer shadow combination" that creates the realistic thickness and three-dimensional feel of clay blocks.

**1. Outer Shadow (simulating clay block shadow cast on background)**
- Bottom shadow: 6px 6px 12px rgba(255, 143, 171, 0.4)
- Simulates light source from top-left, creating shadow on bottom-right

**2. Outer Highlight (simulating ambient light reflection)**
- Top highlight: -6px -6px 16px rgba(255, 255, 255, 0.6)
- Creates bright area on top-left corner of clay block

**3. Inner Shadow (simulating depression inside clay block)**
- Bottom-right inner shadow: inset 2px 2px 4px rgba(255, 143, 171, 0.3)
- Enhances three-dimensional thickness

**4. Inner Highlight (simulating raised surface of clay)**
- Top-left inner highlight: inset -2px -2px 4px rgba(255, 255, 255, 0.2)
- Creates glossy effect on clay surface

**Complete Shadow Combination Example**:
\`\`\`css
box-shadow:
  -6px -6px 16px rgba(255, 255, 255, 0.6),      /* outer highlight */
  6px 6px 16px rgba(255, 143, 171, 0.4),        /* outer shadow */
  inset -2px -2px 4px rgba(255, 255, 255, 0.2), /* inner highlight */
  inset 2px 2px 4px rgba(255, 143, 171, 0.3);   /* inner shadow */
\`\`\`

【Color System】

**Primary Color (Pink series)**:
- Nav/Button: linear-gradient(145deg, #ffb3ba, #ff8fab)
- Dark version: linear-gradient(145deg, #ff99ac, #ff6a88)
- Light version: linear-gradient(145deg, #ffc8dd, #ffafcc)

**Background Gradient (Warm Workspace)**:
- body background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ffecd2 100%)
- Simulates warm workspace light, brighter on top-left and bottom-right, warmer in the middle

**Showcase Multi-color Palette**:
- Pink: linear-gradient(145deg, #ffb3ba, #ff8fab)
- Blue: linear-gradient(145deg, #a8dadc, #457b9d)
- Green: linear-gradient(145deg, #d8f3dc, #95d5b2)
- Orange: linear-gradient(145deg, #ffbe0b, #fb8500)

【Interaction Animation Specifications】

**Hover State (clay block gently lifted)**:
\`\`\`css
.clay-element:hover {
  transform: translateY(-8px);
  box-shadow:
    -10px -10px 25px rgba(255, 255, 255, 0.7),
    10px 10px 25px rgba(255, 143, 171, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 143, 171, 0.3);
  transition: all 0.3s ease;
}
\`\`\`

**Active State (clay block pressed down)**:
\`\`\`css
.clay-button:active {
  transform: translateY(2px);
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.5),
    2px 2px 6px rgba(255, 143, 171, 0.3),
    inset -3px -3px 6px rgba(255, 255, 255, 0.1),
    inset 3px 3px 6px rgba(255, 143, 171, 0.4);
}
\`\`\`

【Key CSS Classes - Complete Implementation】

**1. Navigation Clay Capsule**:
\`\`\`css
.clay-nav {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 1rem 2rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border-radius: 50px;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 143, 171, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}
\`\`\`

**2. Primary Button Clay Effect**:
\`\`\`css
.clay-btn-primary {
  padding: 1.1rem 2.5rem;
  border: none;
  border-radius: 32px;
  background: linear-gradient(145deg, #ff99ac, #ff6a88);
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px rgba(255, 106, 136, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}
\`\`\`

**3. Feature Card Clay Block**:
\`\`\`css
.clay-feature-card {
  padding: 3rem 2rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border-radius: 40px;
  text-align: center;
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.6),
    8px 8px 20px rgba(255, 143, 171, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 143, 171, 0.3);
  transition: all 0.3s ease;
}
\`\`\`

【Output Requirements】
1. Use semantic HTML5 tags (<nav>, <section>, <footer>, etc.)
2. All interactive elements use <button> or <a> tags
3. All links use href="javascript:void(0)" to avoid page navigation
4. Colors use complete hex or rgba format, no color names
5. Border-radius adjusted by element size: buttons 24-32px, cards 32-48px, nav 50px
6. Font recommendation: 'Rounded Mplus 1c' or system rounded fonts
7. All animation transition time controlled at 0.3s, use ease easing
8. Responsive breakpoint: 768px (mobile hides nav menu, adjusts grid to single column)

The generated result should immediately be recognizable as a Claymorphism style variant, with the same clay texture, soft gradients, and multi-layer shadow characteristics.`
};

export const ecommerceCustomPrompt = {
  'zh-CN': `你现在是一名专精「黏土动画 / Claymorphism」风格的电商 UI 设计师兼前端工程师，需要创建一个面向年轻用户的可爱风电商产品展示页面。

【使用场景：可爱风电商产品展示页】
这是一个面向 18-30 岁年轻用户的电商产品展示页面，销售创意小物、手工艺品、设计师玩具、生活美学商品等。用户希望购物体验不仅便捷，还能在视觉上给予愉悦和治愈感。整体氛围需要传达「友好、温暖、有趣、值得信赖」。

【整体布局结构】
页面采用产品网格式设计，从上到下依次为：

1. **固定顶部导航栏（带购物车图标徽章）**
   - 宽度：max-width 1400px，水平居中
   - 位置：fixed top 20px，悬浮在页面上方
   - 形状：胶囊形（border-radius: 50px）
   - 内容：Logo（左侧） + 导航链接（中间：Home | Products | About）+ 购物车按钮（右侧，带数字徽章「3」）
   - 背景：linear-gradient(145deg, #ffd7ba, #ffb88c)
   - 购物车徽章：右上角红色圆形徽章，显示商品数量

2. **Filter 产品过滤标签区**
   - 标题：「Browse Products」，3rem 字号
   - 标签按钮横向排列：All | Electronics | Fashion | Home & Garden | Sports
   - Active 标签使用粉红渐变（linear-gradient(145deg, #ff8fab, #ff6a88)）
   - 其他标签使用浅橙渐变（linear-gradient(145deg, #ffd7ba, #ffb88c)）

3. **Products 产品网格（3 列自适应）**
   - 网格：grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
   - Gap：2.5rem
   - 展示 6 个产品卡片（可扩展）
   - 每个产品卡片包含：
     * 产品图片占位符（200px 高，使用彩色渐变 + SVG 图标装饰）
     * 产品名称（1.3rem，粗字重）
     * 星星评分系统（5 颗星，黄色填充/灰色未填充）
     * 价格标签（1.5rem，粉红色，粗字重）
     * 加入购物车圆形按钮（48x48px，粉红渐变，+ 图标）

4. **Floating Shopping Cart Panel（右下角浮动购物车面板）**
   - 位置：fixed right 2rem, bottom 2rem
   - 宽度：360px
   - 内容：
     * 标题栏：「Shopping Cart」+ 关闭按钮（×）
     * 购物车项目列表（3 个示例项目，可滚动）
     * 每个项目包含：缩略图 + 名称 + 价格 + 移除按钮（×）
     * 总计金额：「Total: $774.97」（粉红色，粗字重）
     * 结帐按钮：全宽粉红渐变大按钮（「Checkout」）

5. **Footer 简化版底部信息**
   - 背景：与导航栏相同的浅橙渐变
   - 居中文字：「© 2025 Clay Shop - Handcrafted E-Commerce Experience」

【黏土材质核心实现方案】

与创意工作台相比，电商页面使用「温暖橙黄色调」替代粉红色调，营造更轻松愉悦的购物氛围。

**1. 产品卡片黏土效果（米黄/杏色基调）**：
\`\`\`css
.clay-product-card {
  background: linear-gradient(145deg, #fff4e6, #ffe4c4);
  border-radius: 32px;
  padding: 2rem;
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.7),
    8px 8px 20px rgba(210, 180, 140, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.3),
    inset 4px 4px 8px rgba(210, 180, 140, 0.2);
  transition: all 0.3s ease;
}

.clay-product-card:hover {
  transform: translateY(-8px);
  box-shadow:
    -10px -10px 25px rgba(255, 255, 255, 0.8),
    10px 10px 25px rgba(210, 180, 140, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.3),
    inset 4px 4px 8px rgba(210, 180, 140, 0.2);
}
\`\`\`

**2. 加入购物车按钮交互**：
\`\`\`css
.clay-add-to-cart {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff8fab, #ff6a88);
  color: white;
  cursor: pointer;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px rgba(255, 106, 136, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}

.clay-add-to-cart:hover {
  transform: translateY(-4px);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.7),
    6px 6px 16px rgba(255, 106, 136, 0.5),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
}

.clay-add-to-cart:active {
  transform: translateY(2px);  /* 按压下沉 */
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.5),
    2px 2px 6px rgba(255, 106, 136, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.1),
    inset 3px 3px 6px rgba(255, 106, 136, 0.4);  /* 内阴影增强 */
}
\`\`\`

【黏土星星评分系统详解】

这是电商页面的独特视觉元素，使用 clip-path 创建五角星形状：

\`\`\`css
.clay-star {
  width: 20px;
  height: 20px;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background: linear-gradient(145deg, #e0e0e0, #c0c0c0);  /* 未填充：灰色 */
  box-shadow:
    -2px -2px 4px rgba(255, 255, 255, 0.5),
    2px 2px 4px rgba(192, 192, 192, 0.3),
    inset -1px -1px 2px rgba(255, 255, 255, 0.2),
    inset 1px 1px 2px rgba(192, 192, 192, 0.2);
}

.clay-star.filled {
  background: linear-gradient(145deg, #ffd700, #ffed4e);  /* 填充：金黄色 */
  box-shadow:
    -2px -2px 4px rgba(255, 255, 255, 0.6),
    2px 2px 4px rgba(218, 165, 32, 0.4),
    inset -1px -1px 2px rgba(255, 255, 255, 0.3),
    inset 1px 1px 2px rgba(218, 165, 32, 0.3);
}
\`\`\`

**使用示例**：
\`\`\`html
<div class="clay-product-rating">
  <span class="clay-star filled"></span>
  <span class="clay-star filled"></span>
  <span class="clay-star filled"></span>
  <span class="clay-star filled"></span>
  <span class="clay-star"></span>  <!-- 4.0 星评分 -->
</div>
\`\`\`

【购物车徽章设计】

红色徽章使用更强的立体感，吸引用户注意：

\`\`\`css
.clay-cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(145deg, #ff6b6b, #ee5a6f);
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  box-shadow:
    -3px -3px 6px rgba(255, 255, 255, 0.5),
    3px 3px 6px rgba(238, 90, 111, 0.5),
    inset -1px -1px 2px rgba(255, 255, 255, 0.3),
    inset 1px 1px 2px rgba(238, 90, 111, 0.4);
}
\`\`\`

【配色系统详解】

**主色调（米黄/杏色）**：
- 页面背景：linear-gradient(135deg, #fff4e6 0%, #ffe4c4 50%, #fff4e6 100%)
- 产品卡片：linear-gradient(145deg, #fff4e6, #ffe4c4)
- 导航栏/标签：linear-gradient(145deg, #ffd7ba, #ffb88c)

**强调色（粉红系）**：
- Active 标签：linear-gradient(145deg, #ff8fab, #ff6a88)
- 购物车按钮：linear-gradient(145deg, #ff8fab, #ff6a88)
- 价格文字：#ff6a88（单色，不用渐变）

**产品图片占位符渐变（6 种）**：
- 产品 1：linear-gradient(145deg, #ffb3ba, #ff8fab)  // 粉红
- 产品 2：linear-gradient(145deg, #a8dadc, #457b9d)  // 蓝色
- 产品 3：linear-gradient(145deg, #d8f3dc, #95d5b2)  // 绿色
- 产品 4：linear-gradient(145deg, #ffbe0b, #fb8500)  // 橙色
- 产品 5：linear-gradient(145deg, #e5d4ff, #c9a0ff)  // 紫色
- 产品 6：linear-gradient(145deg, #ffc8dd, #ffafcc)  // 浅粉

【浮动购物车面板设计】

购物车面板是页面的「核心交互中心」，需要最强的黏土立体感：

\`\`\`css
.clay-cart-panel {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 360px;
  background: linear-gradient(145deg, #fff4e6, #ffe4c4);
  border-radius: 32px;
  padding: 2rem;
  box-shadow:
    -10px -10px 25px rgba(255, 255, 255, 0.7),  /* 超强外高光 */
    10px 10px 25px rgba(210, 180, 140, 0.5),    /* 超强外阴影 */
    inset -4px -4px 8px rgba(255, 255, 255, 0.3),
    inset 4px 4px 8px rgba(210, 180, 140, 0.2);
  z-index: 999;
}

.clay-cart-close {
  width: 32px;
  height: 32px;
  border: none;
  background: linear-gradient(145deg, #ff8fab, #ff6a88);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow:
    -3px -3px 8px rgba(255, 255, 255, 0.6),
    3px 3px 8px rgba(255, 106, 136, 0.4);
  transition: all 0.3s ease;
}

.clay-cart-close:hover {
  transform: rotate(90deg);  /* 旋转动画 */
}
\`\`\`

【购物车项目列表设计】

每个购物车项目是一个独立的小黏土块：

\`\`\`css
.clay-cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(145deg, #ffd7ba, #ffb88c);
  border-radius: 20px;
  box-shadow:
    -4px -4px 10px rgba(255, 255, 255, 0.6),
    4px 4px 10px rgba(210, 180, 140, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(210, 180, 140, 0.3);
}

.clay-cart-item-image {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  /* 使用与产品卡片相同的配色方案 */
}

.clay-cart-item-remove {
  width: 28px;
  height: 28px;
  border: none;
  background: linear-gradient(145deg, #ff6b6b, #ee5a6f);
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.5),
    2px 2px 6px rgba(238, 90, 111, 0.4);
}

.clay-cart-item-remove:hover {
  transform: scale(1.1);  /* 放大动画 */
}
\`\`\`

【Checkout 结帐按钮】

最重要的 CTA 按钮，使用最强的视觉吸引力：

\`\`\`css
.clay-checkout-btn {
  width: 100%;
  padding: 1.1rem;
  border: none;
  background: linear-gradient(145deg, #ff8fab, #ff6a88);
  color: white;
  border-radius: 28px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 106, 136, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}

.clay-checkout-btn:hover {
  transform: translateY(-4px);
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.7),
    8px 8px 20px rgba(255, 106, 136, 0.5),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
}

.clay-checkout-btn:active {
  transform: translateY(2px);
  box-shadow:
    -2px -2px 8px rgba(255, 255, 255, 0.5),
    2px 2px 8px rgba(255, 106, 136, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.1),
    inset 4px 4px 8px rgba(255, 106, 136, 0.4);
}
\`\`\`

【输出要求】
1. 使用语义化 HTML5 标签（<nav>, <section>, <aside>, <footer> 等）
2. 所有交互元素使用 <button> 或 <a> 标签
3. 所有链接使用 href="javascript:void(0)" 避免页面跳转
4. 价格格式：\`<span class="clay-product-price">$XX.XX</span>\`
5. 评分格式：5 个 \`<span class="clay-star [filled]"></span>\`
6. 产品图片占位符：使用彩色渐变 + SVG 简单图标装饰（不使用真实图片 URL）
7. 响应式设计：移动端产品网格改为单列，购物车面板宽度调整为 calc(100% - 2rem)

【关键提示】
- 电商场景特别强调「可触摸感」，所有按钮的 active 状态必须有明显的下沉效果
- 购物车徽章使用红色（#ff6b6b），与页面主色调形成对比，更醒目
- 星星评分使用 clip-path 而非 SVG 或字体图标，确保样式完全可控
- 浮动购物车面板 z-index 设为 999，低于导航栏（1000），避免层级冲突
- 产品卡片 hover 时 translateY(-8px)，加入购物车按钮 hover 时 translateY(-4px)，层次分明

生成的结果应该一眼看出是 Claymorphism 风格的电商页面，具有温暖的米黄色调、可爱的黏土质感和完整的购物交互流程。`,

  'en-US': `You are a senior UI designer and front-end engineer specializing in Claymorphism style, tasked with creating a cute e-commerce product showcase page for young users.

【Use Case: Cute E-Commerce Product Showcase】
This is an e-commerce product showcase page for users aged 18-30, selling creative items, handicrafts, designer toys, and lifestyle aesthetics products. Users expect a shopping experience that is not only convenient but also visually pleasing and healing. The overall atmosphere should convey "friendly, warm, fun, and trustworthy".

【Overall Layout Structure】
The page uses a product grid design, from top to bottom:

1. **Fixed Top Navigation Bar (with shopping cart icon badge)**
   - Width: max-width 1400px, horizontally centered
   - Position: fixed top 20px, floating above the page
   - Shape: Capsule (border-radius: 50px)
   - Content: Logo (left) + nav links (center: Home | Products | About) + cart button (right, with numeric badge "3")
   - Background: linear-gradient(145deg, #ffd7ba, #ffb88c)
   - Cart badge: Red circular badge on top-right, showing item count

2. **Filter Product Tags Section**
   - Title: "Browse Products", 3rem font-size
   - Tag buttons horizontally aligned: All | Electronics | Fashion | Home & Garden | Sports
   - Active tag uses pink gradient (linear-gradient(145deg, #ff8fab, #ff6a88))
   - Other tags use light orange gradient (linear-gradient(145deg, #ffd7ba, #ffb88c))

3. **Products Grid (3-column adaptive)**
   - Grid: grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
   - Gap: 2.5rem
   - Display 6 product cards (expandable)
   - Each product card contains:
     * Product image placeholder (200px height, using colorful gradient + SVG icon decoration)
     * Product name (1.3rem, bold)
     * Star rating system (5 stars, yellow filled/gray unfilled)
     * Price label (1.5rem, pink color, bold)
     * Add to cart circular button (48x48px, pink gradient, + icon)

4. **Floating Shopping Cart Panel (bottom-right floating cart panel)**
   - Position: fixed right 2rem, bottom 2rem
   - Width: 360px
   - Content:
     * Header: "Shopping Cart" + close button (×)
     * Cart items list (3 sample items, scrollable)
     * Each item includes: thumbnail + name + price + remove button (×)
     * Total amount: "Total: $774.97" (pink color, bold)
     * Checkout button: Full-width pink gradient large button ("Checkout")

5. **Footer Simplified Footer Information**
   - Background: Same light orange gradient as navigation bar
   - Centered text: "© 2025 Clay Shop - Handcrafted E-Commerce Experience"

【Clay Material Core Implementation】

Compared to the creative dashboard, the e-commerce page uses "warm orange-yellow tones" instead of pink tones to create a more relaxed and pleasant shopping atmosphere.

**1. Product Card Clay Effect (Beige/Apricot Base)**:
\`\`\`css
.clay-product-card {
  background: linear-gradient(145deg, #fff4e6, #ffe4c4);
  border-radius: 32px;
  padding: 2rem;
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.7),
    8px 8px 20px rgba(210, 180, 140, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.3),
    inset 4px 4px 8px rgba(210, 180, 140, 0.2);
  transition: all 0.3s ease;
}

.clay-product-card:hover {
  transform: translateY(-8px);
  box-shadow:
    -10px -10px 25px rgba(255, 255, 255, 0.8),
    10px 10px 25px rgba(210, 180, 140, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.3),
    inset 4px 4px 8px rgba(210, 180, 140, 0.2);
}
\`\`\`

**2. Add to Cart Button Interaction**:
\`\`\`css
.clay-add-to-cart {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff8fab, #ff6a88);
  color: white;
  cursor: pointer;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px rgba(255, 106, 136, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}

.clay-add-to-cart:active {
  transform: translateY(2px);
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.5),
    2px 2px 6px rgba(255, 106, 136, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.1),
    inset 3px 3px 6px rgba(255, 106, 136, 0.4);
}
\`\`\`

【Clay Star Rating System】

This is a unique visual element of the e-commerce page, using clip-path to create a star shape:

\`\`\`css
.clay-star {
  width: 20px;
  height: 20px;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background: linear-gradient(145deg, #e0e0e0, #c0c0c0);
  box-shadow:
    -2px -2px 4px rgba(255, 255, 255, 0.5),
    2px 2px 4px rgba(192, 192, 192, 0.3);
}

.clay-star.filled {
  background: linear-gradient(145deg, #ffd700, #ffed4e);
  box-shadow:
    -2px -2px 4px rgba(255, 255, 255, 0.6),
    2px 2px 4px rgba(218, 165, 32, 0.4);
}
\`\`\`

【Shopping Cart Badge Design】

The red badge uses stronger three-dimensional effect to attract user attention:

\`\`\`css
.clay-cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(145deg, #ff6b6b, #ee5a6f);
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 12px;
  font-weight: bold;
  box-shadow:
    -3px -3px 6px rgba(255, 255, 255, 0.5),
    3px 3px 6px rgba(238, 90, 111, 0.5),
    inset -1px -1px 2px rgba(255, 255, 255, 0.3),
    inset 1px 1px 2px rgba(238, 90, 111, 0.4);
}
\`\`\`

【Checkout Button】

The most important CTA button uses the strongest visual appeal:

\`\`\`css
.clay-checkout-btn {
  width: 100%;
  padding: 1.1rem;
  border: none;
  background: linear-gradient(145deg, #ff8fab, #ff6a88);
  color: white;
  border-radius: 28px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 106, 136, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}

.clay-checkout-btn:hover {
  transform: translateY(-4px);
}

.clay-checkout-btn:active {
  transform: translateY(2px);
  box-shadow:
    -2px -2px 8px rgba(255, 255, 255, 0.5),
    2px 2px 8px rgba(255, 106, 136, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.1),
    inset 4px 4px 8px rgba(255, 106, 136, 0.4);
}
\`\`\`

【Output Requirements】
1. Use semantic HTML5 tags (<nav>, <section>, <aside>, <footer>, etc.)
2. All interactive elements use <button> or <a> tags
3. All links use href="javascript:void(0)" to avoid page navigation
4. Price format: \`<span class="clay-product-price">$XX.XX</span>\`
5. Rating format: 5 \`<span class="clay-star [filled]"></span>\`
6. Product image placeholder: Use colorful gradient + simple SVG icon decoration (no real image URLs)
7. Responsive design: Mobile product grid changes to single column, cart panel width adjusts to calc(100% - 2rem)

The generated result should immediately be recognizable as a Claymorphism style e-commerce page, with warm beige tones, cute clay texture, and complete shopping interaction flow.`
};
