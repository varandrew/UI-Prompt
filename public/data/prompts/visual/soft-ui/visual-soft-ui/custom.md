# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个「Soft UI（柔和界面）」风格的单页面模板，通过微妙的阴影、温柔的深度感和舒缓的色调，打造一个既现代又平静的用户界面。

### 核心视觉特征

**配色方案**：
- 主色调：柔和中性色（浅灰蓝 `#E8EDF2`、淡紫灰 `#E6E8F0`、浅米色 `#F5F5F0`）
- 背景色：非常浅的灰蓝色或米色（`#F0F4F8`, `#EFF1F5`, `#F7F8FA`）
- 强调色：柔和的蓝色（`#7BA4DB`, `#8FB4E8`）、薄荷绿（`#A8D8B9`）或粉紫色（`#C5B9D8`）
- 文字颜色：中等深度灰色（`#4A5568`, `#5A6374`），避免纯黑
- 按钮/卡片：与背景颜色接近，通过阴影创建层次（例如背景 `#F0F4F8`，卡片 `#F0F4F8`）
- 渐变：同色系浅深渐变（如 `linear-gradient(145deg, #F0F4F8, #E0E8F0)`）

**Soft UI 核心技术**：
- **内阴影（Inner Shadow）**：凹陷效果，模拟按压状态
  - 示例：`box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5)`
- **外阴影（Outer Shadow）**：凸起效果，模拟浮起状态
  - 示例：`box-shadow: 6px 6px 12px rgba(163,177,198,0.4), -6px -6px 12px rgba(255,255,255,0.9)`
- **双向光源**：模拟从左上方的主光源和右下方的反射光
  - 明亮阴影（light shadow）：白色或接近背景色的浅色（右下角）
  - 暗色阴影（dark shadow）：半透明深灰或蓝灰色（左上角）
- **低对比度**：元素与背景颜色差异极小（亮度差 5%-10%），主要靠阴影区分
- **柔和边缘**：使用大 `blur-radius`（10px-20px）创建柔和阴影过渡

**字体与排版**：
- 字体家族：柔和圆润的无衬线字体（`'Inter'`, `'Nunito'`, `'Poppins'`, `'Montserrat'`）
- 字重：300-600（避免极端字重，保持柔和）
- 字号：16px-18px 基准，标题 32px-48px
- 行高：1.6-1.8（增加呼吸空间）
- 字间距：正常或稍宽（0.01em），营造轻松感
- 文字颜色：中灰色（`#4A5568`），避免高对比

**布局与组件**：
- 大圆角：所有元素使用中大圆角（`rounded-xl`, `rounded-2xl`, 16px-24px）
- 慷慨间距：元素间保持充足空白（padding 24px-32px，gap 16px-24px）
- 浮动效果：卡片和按钮使用外阴影，看起来从背景浮起
- 凹陷效果：输入框和按压状态使用内阴影，看起来被按入背景
- 微妙渐变：同色系渐变增强立体感（例如按钮从 `#E8EDF2` 到 `#DCE4EC`）

### 页面结构

**Hero 区域**：
- 柔和渐变背景（`bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50`）
- 主标题：大号柔和字体，中等字重（500-600），柔和文字阴影
- 副标题：中灰色，较小字重（400）
- 双 CTA 按钮：
  - 主按钮：Soft UI 凸起效果（外阴影），悬停时阴影加深
  - 次按钮：Soft UI 凹陷效果（内阴影），悬停时阴影变浅
- 装饰性圆形/椭圆形元素：柔和阴影，低对比度

**功能卡片区域**：
- 3-4 个 Soft UI 卡片，Grid 布局（`grid grid-cols-1 md:grid-cols-3 gap-8`）
- 每个卡片：
  - 背景色与页面背景接近（例如都使用 `#F0F4F8`）
  - 外阴影创建浮起效果
  - 大圆角（`rounded-2xl`）
  - 内边距 32px
  - 顶部圆形图标容器（凹陷效果，内阴影）
  - 标题 + 2-3 行描述
  - 悬停时：阴影变强，轻微上浮（`hover:-translate-y-1`）

**数据/指标展示**：
- 使用 Soft UI 样式的数据卡片
- 大号数字（48px-64px），柔和颜色（蓝色或紫色）
- 数字容器使用凹陷效果（内阴影）
- 标签文字：小号，中灰色
- 图表/进度条：柔和色彩，圆角，内阴影（凹陷）

**表单/输入区域**：
- 输入框：内阴影（凹陷效果），背景色与页面一致
- 占位符：浅灰色（`placeholder:text-gray-400`）
- 焦点状态：内阴影加深，轻微蓝色边框（`focus:border-blue-300`）
- 标签：小号字体，中等字重，中灰色
- 按钮：凸起效果（外阴影），按压时切换为凹陷效果（内阴影）

**进度条/滑块**：
- 轨道：凹陷效果（内阴影），大圆角
- 滑块/进度：凸起效果（外阴影），圆形或大圆角
- 柔和颜色渐变（例如蓝色到紫色）

**切换开关/复选框**：
- 背景：凹陷效果（内阴影）
- 开关滑块：凸起效果（外阴影），圆形
- 激活状态：柔和颜色填充 + 滑块移动动画（150ms ease-out）

**底部 CTA 区域**：
- 大块 Soft UI 容器，柔和渐变背景
- 居中标题 + 简短文案
- 单个大号 CTA 按钮（凸起效果）
- 可选：社交链接图标（小圆形按钮，凸起效果）

### 动画与交互效果

**悬停效果**：
- 按钮/卡片悬停：阴影加深 + 轻微上浮
  ```css
  .soft-ui-button {
    box-shadow: 6px 6px 12px rgba(163,177,198,0.4), -6px -6px 12px rgba(255,255,255,0.9);
    transition: all 200ms ease-out;
  }
  .soft-ui-button:hover {
    box-shadow: 8px 8px 16px rgba(163,177,198,0.5), -8px -8px 16px rgba(255,255,255,1);
    transform: translateY(-2px);
  }
  ```

**按压效果**：
- 按钮按下：从外阴影切换到内阴影（凸起→凹陷）
  ```css
  .soft-ui-button:active {
    box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5);
    transform: translateY(0);
  }
  ```

**焦点效果**：
- 输入框焦点：内阴影加深 + 柔和蓝色边框
- 轮廓：柔和发光效果（`focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 focus-visible:outline-offset-2`）

**加载动画**：
- 脉动效果：柔和的阴影变化（150ms-300ms 周期）
- 骨架屏：使用 Soft UI 风格的占位块（凹陷效果）

**页面加载动画**：
- 元素淡入 + 轻微上滑（`fadeInUp`）
- 错开延迟（100ms-200ms 间隔）
- 柔和缓动函数（`ease-out`）

**无障碍性**：
- 保持 WCAG AA 级对比度（至少 4.5:1）
- 清晰的焦点指示器（柔和发光轮廓）
- 支持 `prefers-reduced-motion`（禁用所有动画）
- 键盘导航：所有交互元素可访问

### 阴影配方

**凸起效果（按钮、卡片）**：
```css
/* 标准凸起 */
box-shadow: 6px 6px 12px rgba(163,177,198,0.4), -6px -6px 12px rgba(255,255,255,0.9);

/* 轻微凸起 */
box-shadow: 3px 3px 6px rgba(163,177,198,0.3), -3px -3px 6px rgba(255,255,255,0.8);

/* 强凸起（悬停） */
box-shadow: 10px 10px 20px rgba(163,177,198,0.5), -10px -10px 20px rgba(255,255,255,1);
```

**凹陷效果（输入框、按压状态）**：
```css
/* 标准凹陷 */
box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5);

/* 深凹陷（焦点状态） */
box-shadow: inset 4px 4px 8px rgba(163,177,198,0.7), inset -4px -4px 8px rgba(255,255,255,0.6);
```

### 文案风格

**语气**：温柔、友好、轻松、现代、舒缓

**示例文案**：

**Hero**：
- 标题："Embrace the Softness of Modern Design"
- 副标题："Experience interfaces that feel as good as they look—designed for comfort and clarity."
- CTA："Explore Features" / "Get Started"

**功能描述**：
- "Gentle interactions that feel natural"
- "Soft shadows bring depth without distraction"
- "A calming interface for focused work"

**按钮文字**：
- "Learn More", "Start Now", "Discover"
- 避免强硬语气（如 "Buy Now", "Act Fast"）

**表单标签**：
- "Your Name", "Email Address", "Message"
- 占位符："Enter your email...", "Type your message..."

**结尾 CTA**：
- "Ready to Experience Soft UI?"
- "Join thousands who've discovered a gentler way to interact with technology."

### 技术规范

**Tailwind 类建议**：
- 背景：`bg-[#F0F4F8]`, `bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50`
- 文字颜色：`text-gray-700`, `text-gray-600`, `text-blue-600`
- 圆角：`rounded-xl`, `rounded-2xl`, `rounded-full`
- 内边距：`p-8`, `p-10`, `px-12 py-6`
- 间距：`gap-8`, `space-y-6`
- 阴影（凸起）：`shadow-[6px_6px_12px_rgba(163,177,198,0.4),-6px_-6px_12px_rgba(255,255,255,0.9)]`
- 阴影（凹陷）：`shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]`
- 过渡：`transition-all duration-200 ease-out`

**响应式设计**：
- 移动端：单列布局，减小阴影强度，简化效果
- 平板：2 列卡片布局
- 桌面：3-4 列布局，完整 Soft UI 效果
- 使用 `container mx-auto px-4 md:px-8 lg:px-12`

**性能优化**：
- 使用 CSS `box-shadow` 代替多层元素
- 避免过度复杂的阴影（最多 2-3 层）
- 使用 `will-change: transform, box-shadow` 优化动画
- 限制同时动画的元素数量（错开 `transition-delay`）

**浏览器兼容性**：
- `box-shadow` 广泛支持，但 Safari 可能需要 `-webkit-box-shadow`
- 使用 PostCSS autoprefixer 自动添加前缀
- 测试跨浏览器阴影渲染一致性（Chrome, Firefox, Safari, Edge）

---

## English Version (en-US)

Use TailwindCSS to create a "Soft UI" style single-page template with subtle shadows, gentle depth perception, and soothing tones to craft a modern yet calming user interface.

### Core Visual Characteristics

**Color Scheme**:
- Primary: Soft neutrals (light gray-blue `#E8EDF2`, pale purple-gray `#E6E8F0`, light beige `#F5F5F0`)
- Background: Very light gray-blue or beige (`#F0F4F8`, `#EFF1F5`, `#F7F8FA`)
- Accent: Soft blue (`#7BA4DB`, `#8FB4E8`), mint green (`#A8D8B9`), or pink-purple (`#C5B9D8`)
- Text color: Medium depth gray (`#4A5568`, `#5A6374`), avoid pure black
- Buttons/cards: Colors close to background, create hierarchy through shadows (e.g., background `#F0F4F8`, card `#F0F4F8`)
- Gradients: Same-tone light-to-dark gradients (e.g., `linear-gradient(145deg, #F0F4F8, #E0E8F0)`)

**Soft UI Core Techniques**:
- **Inner Shadow**: Recessed effect, simulates pressed state
  - Example: `box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5)`
- **Outer Shadow**: Raised effect, simulates floating state
  - Example: `box-shadow: 6px 6px 12px rgba(163,177,198,0.4), -6px -6px 12px rgba(255,255,255,0.9)`
- **Dual Light Source**: Simulates main light from top-left and reflected light from bottom-right
  - Light shadow: White or near-background light color (bottom-right)
  - Dark shadow: Semi-transparent deep gray or blue-gray (top-left)
- **Low Contrast**: Minimal color difference between elements and background (5%-10% brightness difference), distinguish mainly by shadows
- **Soft Edges**: Use large `blur-radius` (10px-20px) for smooth shadow transitions

**Typography & Layout**:
- Font family: Soft rounded sans-serif (`'Inter'`, `'Nunito'`, `'Poppins'`, `'Montserrat'`)
- Font weight: 300-600 (avoid extreme weights, maintain softness)
- Font size: 16px-18px base, headings 32px-48px
- Line height: 1.6-1.8 (increase breathing space)
- Letter spacing: Normal or slightly wide (0.01em), create relaxed feel
- Text color: Medium gray (`#4A5568`), avoid high contrast

**Layout & Components**:
- Large border radius: All elements use medium-large radius (`rounded-xl`, `rounded-2xl`, 16px-24px)
- Generous spacing: Maintain ample whitespace between elements (padding 24px-32px, gap 16px-24px)
- Floating effect: Cards and buttons use outer shadow, appear to float from background
- Recessed effect: Input fields and pressed states use inner shadow, appear pressed into background
- Subtle gradients: Same-tone gradients enhance dimensionality (e.g., button from `#E8EDF2` to `#DCE4EC`)

### Page Structure

**Hero Section**:
- Soft gradient background (`bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50`)
- Main title: Large soft font, medium weight (500-600), soft text shadow
- Subtitle: Medium gray, lighter weight (400)
- Dual CTA buttons:
  - Primary: Soft UI raised effect (outer shadow), shadow deepens on hover
  - Secondary: Soft UI recessed effect (inner shadow), shadow lightens on hover
- Decorative circular/elliptical elements: Soft shadows, low contrast

**Feature Card Section**:
- 3-4 Soft UI cards, Grid layout (`grid grid-cols-1 md:grid-cols-3 gap-8`)
- Each card:
  - Background color close to page background (e.g., both use `#F0F4F8`)
  - Outer shadow creates floating effect
  - Large border radius (`rounded-2xl`)
  - Padding 32px
  - Top circular icon container (recessed effect, inner shadow)
  - Title + 2-3 lines description
  - Hover: Shadow strengthens, slight lift (`hover:-translate-y-1`)

**Data/Metrics Display**:
- Use Soft UI styled data cards
- Large numbers (48px-64px), soft colors (blue or purple)
- Number container uses recessed effect (inner shadow)
- Label text: Small size, medium gray
- Charts/progress bars: Soft colors, rounded corners, inner shadow (recessed)

**Form/Input Section**:
- Input fields: Inner shadow (recessed effect), background matches page
- Placeholder: Light gray (`placeholder:text-gray-400`)
- Focus state: Inner shadow deepens, slight blue border (`focus:border-blue-300`)
- Labels: Small font, medium weight, medium gray
- Buttons: Raised effect (outer shadow), switches to recessed effect (inner shadow) when pressed

**Progress Bars/Sliders**:
- Track: Recessed effect (inner shadow), large border radius
- Slider/progress: Raised effect (outer shadow), circular or large radius
- Soft color gradients (e.g., blue to purple)

**Toggle Switches/Checkboxes**:
- Background: Recessed effect (inner shadow)
- Switch slider: Raised effect (outer shadow), circular
- Active state: Soft color fill + slider movement animation (150ms ease-out)

**Bottom CTA Section**:
- Large Soft UI container, soft gradient background
- Centered title + brief copy
- Single large CTA button (raised effect)
- Optional: Social link icons (small circular buttons, raised effect)

### Animation & Interaction Effects

**Hover Effects**:
- Button/card hover: Shadow deepens + slight lift
  ```css
  .soft-ui-button {
    box-shadow: 6px 6px 12px rgba(163,177,198,0.4), -6px -6px 12px rgba(255,255,255,0.9);
    transition: all 200ms ease-out;
  }
  .soft-ui-button:hover {
    box-shadow: 8px 8px 16px rgba(163,177,198,0.5), -8px -8px 16px rgba(255,255,255,1);
    transform: translateY(-2px);
  }
  ```

**Press Effect**:
- Button press: Switch from outer to inner shadow (raised → recessed)
  ```css
  .soft-ui-button:active {
    box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5);
    transform: translateY(0);
  }
  ```

**Focus Effect**:
- Input focus: Inner shadow deepens + soft blue border
- Outline: Soft glow effect (`focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 focus-visible:outline-offset-2`)

**Loading Animation**:
- Pulse effect: Soft shadow changes (150ms-300ms cycle)
- Skeleton screens: Use Soft UI styled placeholder blocks (recessed effect)

**Page Load Animation**:
- Element fade in + slight slide up (`fadeInUp`)
- Staggered delay (100ms-200ms intervals)
- Soft easing function (`ease-out`)

**Accessibility**:
- Maintain WCAG AA contrast ratio (at least 4.5:1)
- Clear focus indicators (soft glow outline)
- Support `prefers-reduced-motion` (disable all animations)
- Keyboard navigation: All interactive elements accessible

### Shadow Recipes

**Raised Effect (buttons, cards)**:
```css
/* Standard raised */
box-shadow: 6px 6px 12px rgba(163,177,198,0.4), -6px -6px 12px rgba(255,255,255,0.9);

/* Light raised */
box-shadow: 3px 3px 6px rgba(163,177,198,0.3), -3px -3px 6px rgba(255,255,255,0.8);

/* Strong raised (hover) */
box-shadow: 10px 10px 20px rgba(163,177,198,0.5), -10px -10px 20px rgba(255,255,255,1);
```

**Recessed Effect (input fields, pressed state)**:
```css
/* Standard recessed */
box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5);

/* Deep recessed (focus state) */
box-shadow: inset 4px 4px 8px rgba(163,177,198,0.7), inset -4px -4px 8px rgba(255,255,255,0.6);
```

### Copywriting Style

**Tone**: Gentle, friendly, relaxed, modern, soothing

**Example Copy**:

**Hero**:
- Title: "Embrace the Softness of Modern Design"
- Subtitle: "Experience interfaces that feel as good as they look—designed for comfort and clarity."
- CTA: "Explore Features" / "Get Started"

**Feature Descriptions**:
- "Gentle interactions that feel natural"
- "Soft shadows bring depth without distraction"
- "A calming interface for focused work"

**Button Text**:
- "Learn More", "Start Now", "Discover"
- Avoid harsh tone (e.g., "Buy Now", "Act Fast")

**Form Labels**:
- "Your Name", "Email Address", "Message"
- Placeholders: "Enter your email...", "Type your message..."

**Closing CTA**:
- "Ready to Experience Soft UI?"
- "Join thousands who've discovered a gentler way to interact with technology."

### Technical Specifications

**Recommended Tailwind Classes**:
- Background: `bg-[#F0F4F8]`, `bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50`
- Text colors: `text-gray-700`, `text-gray-600`, `text-blue-600`
- Border radius: `rounded-xl`, `rounded-2xl`, `rounded-full`
- Padding: `p-8`, `p-10`, `px-12 py-6`
- Spacing: `gap-8`, `space-y-6`
- Shadow (raised): `shadow-[6px_6px_12px_rgba(163,177,198,0.4),-6px_-6px_12px_rgba(255,255,255,0.9)]`
- Shadow (recessed): `shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]`
- Transition: `transition-all duration-200 ease-out`

**Responsive Design**:
- Mobile: Single column layout, reduce shadow intensity, simplify effects
- Tablet: 2-column card layout
- Desktop: 3-4 column layout, full Soft UI effects
- Use `container mx-auto px-4 md:px-8 lg:px-12`

**Performance Optimization**:
- Use CSS `box-shadow` instead of multiple layers
- Avoid overly complex shadows (maximum 2-3 layers)
- Use `will-change: transform, box-shadow` to optimize animations
- Limit number of simultaneously animated elements (stagger with `transition-delay`)

**Browser Compatibility**:
- `box-shadow` widely supported, but Safari may need `-webkit-box-shadow`
- Use PostCSS autoprefixer to automatically add prefixes
- Test cross-browser shadow rendering consistency (Chrome, Firefox, Safari, Edge)
