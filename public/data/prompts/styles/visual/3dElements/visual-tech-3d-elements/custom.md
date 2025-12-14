# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个「3D 元素」风格的单页面模板，通过 CSS 3D 变换、透视效果和立体阴影，打造一个充满深度和维度感的现代科技界面。

### 核心视觉特征

**配色方案**：
- 主色调：深色科技背景（深灰 `#1A1D29`、深蓝灰 `#1E2235`、墨黑 `#0F1117`）
- 强调色：明亮青色（`#00D9FF`, `#0BC5EA`）、电蓝（`#3B82F6`, `#60A5FA`）或科技紫（`#8B5CF6`, `#A78BFA`）
- 次要色：柔和青色（`#22D3EE`）、薄荷绿（`#10B981`）或霓虹粉（`#EC4899`）
- 中性色：深灰到浅灰渐变（`#374151` → `#9CA3AF`）
- 背景渐变：深色径向或线性渐变（`radial-gradient(circle at center, #1E2235 0%, #0F1117 100%)`）
- 发光效果：半透明青色或蓝色辉光（`rgba(0, 217, 255, 0.3)`）

**3D 变换技术**：
- **透视（Perspective）**：为容器添加透视深度（`perspective: 1000px` - `1500px`）
- **3D 旋转（Rotate3D）**：
  - X 轴旋转：`rotateX(10deg)` - `rotateX(-10deg)` (俯仰角度)
  - Y 轴旋转：`rotateY(5deg)` - `rotateY(-15deg)` (左右倾斜)
  - Z 轴旋转：`rotateZ(2deg)` (平面旋转，用于微妙倾斜)
- **3D 平移（Translate3D）**：
  - Z 轴平移：`translateZ(20px)` - `translateZ(50px)` (向前/后移动，创建浮起效果)
  - 悬停时：`hover:translateZ(30px)` (卡片浮起)
- **保持 3D 空间**：父容器使用 `transform-style: preserve-3d`
- **背面可见性**：翻转卡片使用 `backface-visibility: hidden`

**阴影与深度**：
- **层叠阴影（Stacked Shadows）**：多层阴影创建立体感
  - 示例：`box-shadow: 0 12px 30px rgba(0,0,0,0.35), 0 4px 10px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)`
- **透视阴影**：斜向阴影模拟 3D 投影
  - 示例：`box-shadow: 20px 20px 40px rgba(0,0,0,0.5), -5px -5px 15px rgba(255,255,255,0.05)`
- **内阴影层次**：结合内外阴影创建凹凸效果
- **发光边缘**：使用 `box-shadow` 创建霓虹发光
  - 示例：`box-shadow: 0 0 15px rgba(0, 217, 255, 0.4), 0 0 30px rgba(0, 217, 255, 0.2)`
- **避免过度模糊**：保持阴影清晰度，模糊半径 10px-30px

**字体与排版**：
- 字体家族：现代科技感无衬线字体（`'Inter'`, `'Space Grotesk'`, `'Orbitron'`, `'Rajdhani'`, `monospace`）
- 字重：500-700（粗体用于标题，创建厚重感）
- 字号：16px-18px 基准，大标题 48px-72px
- 行高：1.4-1.6（保持紧凑科技感）
- 字间距：稍宽（0.02em-0.05em），特别是全大写标题
- 文字效果：3D 文字（层叠 `text-shadow`）或发光文字（`text-shadow: 0 0 10px currentColor`）

**布局与组件**：
- 硬边角或小圆角：8px-14px（保持科技锐利感，避免过度圆润）
- 锐利边框：1px-2px 细边框，使用稍亮的颜色（`border: 1px solid rgba(255,255,255,0.1)`）
- 分层卡片：使用 `translateZ()` 创建多层堆叠效果
- 浮动芯片/徽章：小型 3D 元素，悬停时旋转或浮起
- 数据块：等宽数字，细分隔线，斜角装饰

### 页面结构

**Hero 区域**：
- 3D 标题处理：
  - 层叠文字阴影创建挤压效果：`text-shadow: 2px 2px 0 rgba(0,0,0,0.2), 4px 4px 0 rgba(0,0,0,0.15), 6px 6px 0 rgba(0,0,0,0.1)`
  - 或使用透视旋转：`transform: perspective(500px) rotateX(10deg)`
- 主 CTA 按钮：3D 按钮效果（凸起，悬停时按下）
- 可选：旋转/倾斜的 3D 代币或卡片（使用 `@keyframes` 实现慢速旋转）
- 背景：深色，确保文字高对比度

**功能网格（3-6 项）**：
- 每个卡片使用层叠背景和内阴影
- 3D 悬停效果：
  - 2px-6px 平移（`hover:translateZ(6px)`）
  - 轻微旋转（`hover:rotateX(-5deg) rotateY(5deg)`）
  - 透视阴影加深
- 包含图标/迷你 3D 芯片
- 标题 + 2-3 行正文 + 小型操作按钮

**展示区（2-3 个大型 3D 瓦片）**：
- 用于定价、功能高亮等
- 深度堆叠效果：多层背景，使用 `translateZ()` 分层
- 柔和的透视阴影
- 悬停时整体倾斜或浮起

**结尾 CTA**：
- 宽幅条形容器，单一强操作
- 提供"Lite Mode"切换按钮（为低动态用户提供静态版本）
- 3D 按钮，按压效果（`active:translateZ(-2px)`）

### 3D 样式指南

**阴影配方**：
- 层叠阴影（立体卡片）：
  ```css
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.35),
    0 4px 10px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  ```
- 发光边缘：
  ```css
  box-shadow:
    0 0 15px rgba(0, 217, 255, 0.4),
    0 0 30px rgba(0, 217, 255, 0.2),
    inset 0 0 20px rgba(0, 217, 255, 0.1);
  ```

**边框样式**：
- 1-2px 细边框，稍亮色调（`border: 1px solid rgba(255, 255, 255, 0.1)`）
- 内阴影创建凹陷效果：`box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5)`
- 边框发光（强调状态）：`border: 1px solid rgba(0, 217, 255, 0.5)`

**渐变使用**：
- 线性渐变创建深度暗示（无需嘈杂纹理）：
  ```css
  background: linear-gradient(145deg, #1E2235, #0F1117);
  ```
- 径向渐变创建聚光效果：
  ```css
  background: radial-gradient(circle at top left, #1E2235 0%, #0F1117 100%);
  ```
- 微妙噪点（仅用于哑光表面）：使用 SVG `filter` 或背景图案，不透明度 0.03-0.05

**动画效果**：
- 悬停时上浮 4-8px：`hover:-translateY-1 hover:translateZ(8px)`
- 旋转 1-3deg：`hover:rotateY(2deg)`
- 缓动函数：`transition: all 150ms ease-out`（或 140ms-200ms）
- 触摸设备禁用旋转：使用 `@media (pointer: coarse)` 查询
- 尊重用户偏好：`@media (prefers-reduced-motion: reduce)` 禁用动画或使用静态阴影

### 组件详细设计

**按钮**：
- 形状：药丸形或方圆形（`rounded-full` 或 `rounded-xl`）
- 内外阴影组合创建立体感
- 激活状态：按下效果（`active:translateY(2px)` + 减少阴影）
- 悬停：浮起 + 阴影加深

**芯片/徽章**：
- 浮动标签，发光边缘
- 轻微模糊背景（`backdrop-blur-sm`）
- 小型，圆角，低不透明度背景

**数据块**：
- 等宽数字（`font-mono`）
- 小标签文字
- 细分隔线（`border-t border-white/10`）
- 斜角装饰元素（使用 `transform: skewX(-5deg)`）

**装饰元素**：
- 小浮动立方体/球体，低不透明度轨迹
- 限制数量以保证性能（最多 3-5 个）
- 使用 CSS `@keyframes` 实现慢速旋转或浮动

### 无障碍与性能

**对比度与可访问性**：
- 所有文字保持 4.5:1 对比度（在深色背景上使用白色或浅色文字）
- 焦点指示器与发光效果分离：`focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2`
- 保持变换适度，避免动态晕眩（旋转角度 <15deg）

**性能优化**：
- 使用 `prefers-reduced-motion` 查询提供静态版本
- 移动端禁用透视/旋转（`@media (pointer: coarse)`）
- 为媒体预留宽高比（`aspect-ratio`）
- 延迟加载重资源（`loading="lazy"`）
- 避免触发 GPU 过载的效果（限制 `backdrop-filter` 使用）

**响应式设计**：
- 移动端：减少 3D 效果，简化阴影，单列布局
- 平板：保持部分 3D 效果，2 列布局
- 桌面：完整 3D 效果，3-4 列网格
- 使用 `container mx-auto px-4 md:px-8 lg:px-12`

### 文案风格

**语气**：自信、技术化、未来感、强势

**示例文案**：

**Hero**：
- 标题："Built in Layers, Designed for Depth"
- 副标题："Control the dimension—experience interfaces that break through the screen."
- CTA："Launch 3D Mode" / "Explore Stack"

**功能描述**：
- "Depth with purpose"
- "Tactile interactions that feel real"
- "Dimensional design for modern interfaces"

**按钮文字**：
- "Launch", "Engage", "Activate", "Explore"
- 技术性动词：强调行动和控制

**模式切换**：
- "View in Lite mode" (为低动态用户)
- "Enable Full 3D" (为支持用户)

**数据标签**：
- "Performance Score", "Render Time", "Frame Rate"
- 使用技术性语言和数据可视化

### 技术规范

**Tailwind 类建议**：
- 背景：`bg-[#1A1D29]`, `bg-gradient-to-br from-gray-900 via-slate-800 to-black`
- 文字颜色：`text-white`, `text-cyan-400`, `text-blue-400`
- 边框：`border border-white/10`, `border-cyan-500/30`
- 圆角：`rounded-xl`, `rounded-2xl` (8px-16px)
- 阴影：`shadow-[0_12px_30px_rgba(0,0,0,0.35),0_4px_10px_rgba(0,0,0,0.5)]`
- 发光：`shadow-[0_0_15px_rgba(0,217,255,0.4),0_0_30px_rgba(0,217,255,0.2)]`
- 3D 变换：`hover:-translate-y-1 hover:rotate-1 transition duration-150 ease-out`
- 透视：自定义类或内联样式（`style="perspective: 1000px"`）
- 模糊背景：`backdrop-blur-sm backdrop-saturate-150`

**自定义 CSS 示例**：
```css
/* 3D 容器 */
.perspective-container {
  perspective: 1200px;
  transform-style: preserve-3d;
}

/* 3D 卡片 */
.card-3d {
  transform-style: preserve-3d;
  transition: transform 200ms ease-out;
}

.card-3d:hover {
  transform: translateZ(10px) rotateX(-5deg) rotateY(5deg);
}

/* 3D 文字 */
.text-3d {
  text-shadow:
    2px 2px 0 rgba(0, 0, 0, 0.2),
    4px 4px 0 rgba(0, 0, 0, 0.15),
    6px 6px 0 rgba(0, 0, 0, 0.1);
}

/* 旋转动画 */
@keyframes rotate3d {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.rotating-cube {
  animation: rotate3d 10s linear infinite;
}
```

**浏览器兼容性**：
- `transform` 和 `perspective` 广泛支持，但需要前缀（使用 autoprefixer）
- `transform-style: preserve-3d` 在某些移动浏览器上支持有限，提供降级方案
- `backdrop-filter` 在 Firefox 和部分旧版浏览器需要启用标志


---

## English Version (en-US)

Use TailwindCSS to create a "3D Elements" style single-page template with CSS 3D transforms, perspective effects, and dimensional shadows to craft a modern tech interface full of depth and dimensionality.

### Core Visual Characteristics

**Color Scheme**:
- Primary: Dark tech backgrounds (deep gray `#1A1D29`, deep blue-gray `#1E2235`, ink black `#0F1117`)
- Accent: Bright cyan (`#00D9FF`, `#0BC5EA`), electric blue (`#3B82F6`, `#60A5FA`), or tech purple (`#8B5CF6`, `#A78BFA`)
- Secondary: Soft cyan (`#22D3EE`), mint green (`#10B981`), or neon pink (`#EC4899`)
- Neutrals: Deep gray to light gray gradient (`#374151` → `#9CA3AF`)
- Background gradient: Dark radial or linear gradient (`radial-gradient(circle at center, #1E2235 0%, #0F1117 100%)`)
- Glow effects: Semi-transparent cyan or blue glow (`rgba(0, 217, 255, 0.3)`)

**3D Transform Techniques**:
- **Perspective**: Add perspective depth to containers (`perspective: 1000px` - `1500px`)
- **3D Rotation (Rotate3D)**:
  - X-axis rotation: `rotateX(10deg)` - `rotateX(-10deg)` (pitch angle)
  - Y-axis rotation: `rotateY(5deg)` - `rotateY(-15deg)` (left-right tilt)
  - Z-axis rotation: `rotateZ(2deg)` (planar rotation for subtle tilt)
- **3D Translation (Translate3D)**:
  - Z-axis translation: `translateZ(20px)` - `translateZ(50px)` (forward/backward movement, creates floating effect)
  - On hover: `hover:translateZ(30px)` (card lifts)
- **Preserve 3D Space**: Parent container uses `transform-style: preserve-3d`
- **Backface Visibility**: Flip cards use `backface-visibility: hidden`

**Shadows & Depth**:
- **Stacked Shadows**: Multiple shadow layers create dimensionality
  - Example: `box-shadow: 0 12px 30px rgba(0,0,0,0.35), 0 4px 10px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)`
- **Perspective Shadow**: Angled shadows simulate 3D projection
  - Example: `box-shadow: 20px 20px 40px rgba(0,0,0,0.5), -5px -5px 15px rgba(255,255,255,0.05)`
- **Inner Shadow Layers**: Combine inner and outer shadows for embossed effects
- **Glowing Edges**: Use `box-shadow` to create neon glow
  - Example: `box-shadow: 0 0 15px rgba(0, 217, 255, 0.4), 0 0 30px rgba(0, 217, 255, 0.2)`
- **Avoid Excessive Blur**: Keep shadows crisp, blur radius 10px-30px

**Typography & Layout**:
- Font family: Modern tech sans-serif (`'Inter'`, `'Space Grotesk'`, `'Orbitron'`, `'Rajdhani'`, `monospace`)
- Font weight: 500-700 (bold for headings, creates weight)
- Font size: 16px-18px base, large headings 48px-72px
- Line height: 1.4-1.6 (maintain compact tech feel)
- Letter spacing: Slightly wide (0.02em-0.05em), especially for all-caps headings
- Text effects: 3D text (stacked `text-shadow`) or glowing text (`text-shadow: 0 0 10px currentColor`)

**Layout & Components**:
- Hard edges or small radius: 8px-14px (maintain tech sharpness, avoid excessive roundness)
- Sharp borders: 1px-2px thin borders, use slightly brighter colors (`border: 1px solid rgba(255,255,255,0.1)`)
- Layered cards: Use `translateZ()` to create multi-layer stacking effect
- Floating chips/badges: Small 3D elements, rotate or lift on hover
- Data blocks: Monospace numbers, thin dividers, angled corner accents

### Page Structure

**Hero Section**:
- 3D headline treatment:
  - Stacked text shadows create extrusion effect: `text-shadow: 2px 2px 0 rgba(0,0,0,0.2), 4px 4px 0 rgba(0,0,0,0.15), 6px 6px 0 rgba(0,0,0,0.1)`
  - Or use perspective rotation: `transform: perspective(500px) rotateX(10deg)`
- Primary CTA button: 3D button effect (raised, presses down on hover)
- Optional: Rotating/tilting 3D token or card (using `@keyframes` for slow rotation)
- Background: Dark, ensure high text contrast

**Feature Grid (3-6 items)**:
- Each card uses layered backgrounds and inner shadows
- 3D hover effects:
  - 2px-6px translation (`hover:translateZ(6px)`)
  - Slight rotation (`hover:rotateX(-5deg) rotateY(5deg)`)
  - Perspective shadow deepens
- Includes icon/mini 3D chip
- Title + 2-3 lines body + small action button

**Showroom Section (2-3 large 3D tiles)**:
- For pricing, feature highlights, etc.
- Depth stacking effect: Multiple background layers, use `translateZ()` for layering
- Soft perspective shadows
- Entire tile tilts or lifts on hover

**Closing CTA**:
- Wide bar container, single strong action
- Provide "Lite Mode" toggle (for low-motion users)
- 3D button, press effect (`active:translateZ(-2px)`)

### 3D Styling Guidelines

**Shadow Recipes**:
- Stacked shadows (dimensional cards):
  ```css
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.35),
    0 4px 10px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  ```
- Glowing edges:
  ```css
  box-shadow:
    0 0 15px rgba(0, 217, 255, 0.4),
    0 0 30px rgba(0, 217, 255, 0.2),
    inset 0 0 20px rgba(0, 217, 255, 0.1);
  ```

**Border Styles**:
- 1-2px thin borders, slightly brighter tones (`border: 1px solid rgba(255, 255, 255, 0.1)`)
- Inner shadow creates recessed effect: `box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5)`
- Border glow (emphasis state): `border: 1px solid rgba(0, 217, 255, 0.5)`

**Gradient Usage**:
- Linear gradients create depth hints (no noisy textures):
  ```css
  background: linear-gradient(145deg, #1E2235, #0F1117);
  ```
- Radial gradients create spotlight effect:
  ```css
  background: radial-gradient(circle at top left, #1E2235 0%, #0F1117 100%);
  ```
- Subtle noise (only for matte surfaces): Use SVG `filter` or background pattern, opacity 0.03-0.05

**Animation Effects**:
- Hover lift 4-8px: `hover:-translateY-1 hover:translateZ(8px)`
- Rotate 1-3deg: `hover:rotateY(2deg)`
- Easing function: `transition: all 150ms ease-out` (or 140ms-200ms)
- Disable rotation on touch devices: Use `@media (pointer: coarse)` query
- Respect user preferences: `@media (prefers-reduced-motion: reduce)` disable animations or use static shadows

### Component Detailed Design

**Buttons**:
- Shape: Pill or squircle (`rounded-full` or `rounded-xl`)
- Inner and outer shadow combination creates dimensionality
- Active state: Press effect (`active:translateY(2px)` + reduce shadow)
- Hover: Lift + shadow deepens

**Chips/Badges**:
- Floating labels, glowing edges
- Slight blurred background (`backdrop-blur-sm`)
- Small, rounded, low opacity background

**Data Blocks**:
- Monospace numbers (`font-mono`)
- Small label text
- Thin dividers (`border-t border-white/10`)
- Angled decorative elements (using `transform: skewX(-5deg)`)

**Decorative Elements**:
- Small floating cubes/spheres, low opacity trails
- Limit quantity for performance (maximum 3-5)
- Use CSS `@keyframes` for slow rotation or floating

### Accessibility & Performance

**Contrast & Accessibility**:
- All text maintains 4.5:1 contrast (use white or light text on dark backgrounds)
- Focus indicators separate from glow effects: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2`
- Keep transforms moderate, avoid motion sickness (rotation angle <15deg)

**Performance Optimization**:
- Use `prefers-reduced-motion` query to provide static version
- Disable perspective/rotation on mobile (`@media (pointer: coarse)`)
- Reserve aspect ratios for media (`aspect-ratio`)
- Lazy load heavy resources (`loading="lazy"`)
- Avoid effects that spike GPU (`limit backdrop-filter` usage)

**Responsive Design**:
- Mobile: Reduce 3D effects, simplify shadows, single column layout
- Tablet: Maintain some 3D effects, 2-column layout
- Desktop: Full 3D effects, 3-4 column grid
- Use `container mx-auto px-4 md:px-8 lg:px-12`

### Copywriting Style

**Tone**: Confident, technical, futuristic, assertive

**Example Copy**:

**Hero**:
- Title: "Built in Layers, Designed for Depth"
- Subtitle: "Control the dimension—experience interfaces that break through the screen."
- CTA: "Launch 3D Mode" / "Explore Stack"

**Feature Descriptions**:
- "Depth with purpose"
- "Tactile interactions that feel real"
- "Dimensional design for modern interfaces"

**Button Text**:
- "Launch", "Engage", "Activate", "Explore"
- Technical verbs: emphasize action and control

**Mode Toggle**:
- "View in Lite mode" (for low-motion users)
- "Enable Full 3D" (for supportive users)

**Data Labels**:
- "Performance Score", "Render Time", "Frame Rate"
- Use technical language and data visualization

### Technical Specifications

**Recommended Tailwind Classes**:
- Background: `bg-[#1A1D29]`, `bg-gradient-to-br from-gray-900 via-slate-800 to-black`
- Text colors: `text-white`, `text-cyan-400`, `text-blue-400`
- Borders: `border border-white/10`, `border-cyan-500/30`
- Border radius: `rounded-xl`, `rounded-2xl` (8px-16px)
- Shadows: `shadow-[0_12px_30px_rgba(0,0,0,0.35),0_4px_10px_rgba(0,0,0,0.5)]`
- Glow: `shadow-[0_0_15px_rgba(0,217,255,0.4),0_0_30px_rgba(0,217,255,0.2)]`
- 3D transforms: `hover:-translate-y-1 hover:rotate-1 transition duration-150 ease-out`
- Perspective: Custom class or inline style (`style="perspective: 1000px"`)
- Blurred background: `backdrop-blur-sm backdrop-saturate-150`

**Custom CSS Examples**:
```css
/* 3D container */
.perspective-container {
  perspective: 1200px;
  transform-style: preserve-3d;
}

/* 3D card */
.card-3d {
  transform-style: preserve-3d;
  transition: transform 200ms ease-out;
}

.card-3d:hover {
  transform: translateZ(10px) rotateX(-5deg) rotateY(5deg);
}

/* 3D text */
.text-3d {
  text-shadow:
    2px 2px 0 rgba(0, 0, 0, 0.2),
    4px 4px 0 rgba(0, 0, 0, 0.15),
    6px 6px 0 rgba(0, 0, 0, 0.1);
}

/* Rotation animation */
@keyframes rotate3d {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.rotating-cube {
  animation: rotate3d 10s linear infinite;
}
```

**Browser Compatibility**:
- `transform` and `perspective` widely supported, but need prefixes (use autoprefixer)
- `transform-style: preserve-3d` has limited support on some mobile browsers, provide fallback
- `backdrop-filter` requires flags in Firefox and some older browsers
