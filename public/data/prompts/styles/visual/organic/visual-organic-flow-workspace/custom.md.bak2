# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个「有机流动工作空间」主题的单页面模板，以温暖自然的色调、流动的有机形状和宁静的氛围，打造一个兼具生产力与疗愈感的工作空间界面。

### 核心视觉特征

**配色方案**：
- 主色调：温暖琥珀色 (`#F59E0B`, `#FBBF24`) 和柔和沙色 (`#FEF3C7`, `#FDE68A`)
- 辅助色：鼠尾草绿 (`#10B981`, `#34D399`) 和柔和薄荷绿 (`#6EE7B7`, `#A7F3D0`)
- 中性色：米白 (`#FFFBEB`, `#FEF7E0`) 和浅驼色 (`#D6C9B8`, `#E5DDD0`)
- 深色点缀：深棕色 (`#78350F`, `#92400E`) 用于文字和细节
- 背景渐变：从浅米色到淡琥珀色的柔和过渡 (`linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)`)
- 玻璃态卡片：半透明白色背景 (`rgba(255,255,255,0.6)`) + 轻微模糊效果

**有机形状与流动元素**：
- Blob 形状背景：使用 `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%` 创建不规则有机形状
- 流动动画：`@keyframes morph` 实现形状缓慢变化 (8-12s 循环，`ease-in-out`)
- 曲线分隔线：使用 SVG `<path>` 绘制柔和波浪曲线代替直线分隔
- 圆润边角：所有元素使用大圆角 (`rounded-2xl`, `rounded-3xl`, 20px-32px)
- 自然阴影：柔和、分散的阴影 (`shadow-[0_8px_30px_rgba(0,0,0,0.08)]`)
- 渐变叠加层：多层半透明渐变创建深度感

**纹理与细节**：
- 轻噪点覆盖层：使用 SVG `<filter feTurbulence>` 添加细微颗粒感 (噪点不透明度 0.03-0.05)
- 纸质纹理：为卡片背景添加细微的纸张质感
- 柔和光晕：重要元素周围添加发光效果 (`filter: drop-shadow(0 0 20px rgba(245,158,11,0.2))`)
- 模糊背景：使用 `backdrop-filter: blur(10px) saturate(120%)` 实现玻璃态效果

**字体与排版**：
- 标题字体：柔和的无衬线字体 (`'Inter'`, `'Outfit'`, `'Plus Jakarta Sans'`)，字重 400-700
- 正文字体：高可读性的无衬线字体 (`'Inter'`, `'system-ui'`)，字重 300-500
- 字号：18px-20px 基准，大标题 48px-64px，小标题 28px-36px
- 行高：1.6-1.8（营造呼吸感和放松氛围）
- 字间距：正常或稍宽 (0.01em-0.02em)，避免拥挤感
- 柔和的文字颜色：使用深棕色 (`text-amber-900`, `text-amber-800`) 而非纯黑

### 页面结构

**Hero 区域**：
- 流动 blob 形状背景（2-3 层，不同颜色，慢速形变动画）
- 主标题：大号、柔和字重 (600-700)，带轻微文字阴影
- 副标题：温暖文案，强调平静和专注
- 双 CTA 按钮：
  - 主按钮：琥珀色填充，柔和圆角，悬停时上浮 (`hover:-translate-y-1`)
  - 次按钮：透明边框，玻璃态背景
- 小标签/徽章：圆角胶囊形状，带图标（如 "🌿 Natural Flow" / "✨ Mindful Work"）

**关键指标展示（3 组）**：
- 玻璃态卡片容器，柔和阴影
- 每组包含：
  - 大号数字（48px-64px，琥珀色或鼠尾草绿）
  - 简短标签（"Hours Saved", "Focus Score", "Tasks Completed"）
  - 小图标或装饰性 blob 形状
- 使用 `grid grid-cols-1 md:grid-cols-3 gap-6` 布局

**产品/灵感卡片区**：
- 3-4 个卡片，交错排列（使用 `mt-8` / `mt-12` 错开）
- 每个卡片：
  - 玻璃态背景，模糊效果
  - 顶部装饰性 blob 或渐变条
  - 圆形图标或插图（使用柔和色调）
  - 标题 + 2-3 行描述文字
  - 轻微悬停动画：上浮 + 阴影加深
- 使用 Masonry 布局或 Grid 布局（`grid-auto-rows: auto`）

**流程/时间轴区域**：
- 横向滚动时间轴（移动端）或垂直流程图（桌面端）
- 使用曲线连接器代替直线（SVG 贝塞尔曲线）
- 每个步骤节点：
  - 圆形或圆角方形容器
  - 步骤编号 + 标题 + 简短说明
  - 柔和颜色编码（琥珀→沙色→鼠尾草绿渐变）
- 添加装饰性小图标或叶子元素

**Daily Rituals（日常仪式）区域**：
- 网格布局展示 4-6 个仪式卡片
- 每个卡片：
  - 小型圆角卡片，玻璃态背景
  - 顶部表情图标或插图
  - 仪式标题（如 "Morning Pages", "Midday Stretch", "Evening Review"）
  - 1-2 行描述
  - 时间标签（如 "08:00 AM" / "15 min"）
- 使用柔和色调区分不同时间段（晨间琥珀色，午间沙色，晚间薄荷绿）

**结尾 CTA 区域**：
- 宽幅容器，大 blob 形状背景
- 居中大标题："Begin Your Flow"
- 简短激励文案（2-3 行）
- 单个大号主 CTA 按钮
- 可选："Lite Mode" / "Calm Mode" 切换按钮（为动态敏感用户提供静态版本）

### 动画与交互效果

**CSS 动画（必须使用 CSS only）**：
- Blob 形变动画：
  ```css
  @keyframes morph {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }
  ```
  应用：`animation: morph 10s ease-in-out infinite`

- 浮动效果：
  ```css
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  ```
  应用于装饰性元素，`animation: float 6s ease-in-out infinite`

- 淡入滑入（页面加载）：
  ```css
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  ```
  应用：`animation: fadeInUp 0.8s ease-out forwards`，使用 `animation-delay` 错开元素

- 悬停效果：
  - 卡片：`hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]` (200ms ease-out)
  - 按钮：`hover:scale-105 hover:shadow-lg` (150ms ease-out)
  - 轻微旋转：`hover:rotate-1` (某些装饰元素)

**无障碍与动态敏感性**：
- 所有动画使用 `@media (prefers-reduced-motion: reduce)` 查询，提供静态替代
- 清晰的焦点指示器：`focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-4`
- 保持 WCAG AA 级对比度（最小 4.5:1），在浅色背景上使用深棕色文字
- 键盘可访问性：所有交互元素可通过 Tab 键访问
- 为装饰性图像添加 `aria-hidden="true"` 或 `alt=""`

### 文案风格

**语气**：平静、治愈、专业、温暖、激励

**示例文案**：

**Hero**：
- 标题："Flow Through Your Workday with Natural Ease"
- 副标题："Experience productivity that feels effortless—designed to nurture focus, creativity, and calm."
- CTA："Start Your Journey" / "Explore Rituals"

**功能描述**：
- "Breathe into focus with organic workflows"
- "Gentle reminders that honor your natural rhythms"
- "Create space for deep work and mindful breaks"

**仪式卡片**：
- "Morning Pages – Set intentions with clarity"
- "Midday Stretch – Release tension, restore energy"
- "Evening Review – Reflect and celebrate progress"

**结尾 CTA**：
- "Begin Your Flow"
- "Let's cultivate a workspace that supports your best work—and your wellbeing."

### 技术规范

**Tailwind 类建议**：
- 背景：`bg-gradient-to-br from-amber-50 via-amber-100 to-orange-50`
- 玻璃态卡片：`bg-white/60 backdrop-blur-md border border-white/20`
- 文字颜色：`text-amber-900`, `text-amber-800`, `text-neutral-700`
- 圆角：`rounded-2xl`, `rounded-3xl`, `rounded-full`
- 阴影：`shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
- 悬停效果：`hover:-translate-y-2 hover:shadow-xl transition-all duration-200 ease-out`
- 按钮：`bg-amber-400 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-medium`
- 间距：`space-y-8`, `gap-8`, `p-8` (generous spacing)

**响应式设计**：
- 移动端：单列布局，减小字号（16px 基准），简化 blob 动画
- 平板：2 列卡片布局，保持流动感
- 桌面：3-4 列网格，展开大 blob 背景，增强视觉深度
- 使用 `container mx-auto px-4 md:px-8 lg:px-12` 保持内容居中

**性能优化**：
- 限制 blob 形状数量（最多 3-4 个）
- 使用 CSS `will-change: transform` 优化动画性能
- 避免同时运行过多动画（错开 `animation-delay`）
- 模糊效果使用适中参数 (`backdrop-blur-md` / 10px)，避免性能开销
- 使用 SVG 过滤器时设置合理的 `baseFrequency` (0.5-0.65)

**SVG Blob 形状示例**：
```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FEF3C7" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.3,53.8,66.8,40.3,74.4C26.8,82,10.9,85.7,-4.8,84.3C-20.5,82.9,-41,76.4,-56.3,65.1C-71.6,53.8,-81.7,37.7,-85.3,20.2C-88.9,2.7,-86,-16.2,-78.4,-32.4C-70.8,-48.6,-58.5,-62.1,-43.8,-69C-29.1,-75.9,-14.6,-76.2,0.3,-76.8C15.2,-77.4,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
</svg>
```

**玻璃态效果标准**：
- 背景：`bg-white/60` 或 `bg-amber-50/40`
- 模糊：`backdrop-blur-md` (10px) 或 `backdrop-blur-lg` (16px)
- 边框：`border border-white/20` 或 `border-amber-200/30`
- 饱和度：`backdrop-saturate-120` (可选，增强色彩)

---

## English Version (en-US)

Use TailwindCSS to create an "Organic Flow Workspace" single-page template with warm natural tones, flowing organic shapes, and a serene atmosphere, crafting a workspace interface that balances productivity with healing vibes.

### Core Visual Characteristics

**Color Scheme**:
- Primary: Warm amber (`#F59E0B`, `#FBBF24`) and soft sand (`#FEF3C7`, `#FDE68A`)
- Secondary: Sage green (`#10B981`, `#34D399`) and soft mint (`#6EE7B7`, `#A7F3D0`)
- Neutrals: Off-white (`#FFFBEB`, `#FEF7E0`) and light taupe (`#D6C9B8`, `#E5DDD0`)
- Dark accents: Deep brown (`#78350F`, `#92400E`) for text and details
- Background gradient: Soft transition from light cream to pale amber (`linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)`)
- Glassmorphic cards: Semi-transparent white background (`rgba(255,255,255,0.6)`) + light blur

**Organic Shapes & Flowing Elements**:
- Blob shape backgrounds: Use `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%` for irregular organic shapes
- Flow animations: `@keyframes morph` for slow shape changes (8-12s cycle, `ease-in-out`)
- Curved dividers: Use SVG `<path>` to draw soft wave curves instead of straight dividers
- Rounded corners: All elements use large border-radius (`rounded-2xl`, `rounded-3xl`, 20px-32px)
- Natural shadows: Soft, diffused shadows (`shadow-[0_8px_30px_rgba(0,0,0,0.08)]`)
- Gradient overlays: Multiple semi-transparent layers creating depth

**Texture & Details**:
- Light noise overlay: Use SVG `<filter feTurbulence>` for subtle grain (noise opacity 0.03-0.05)
- Paper texture: Add subtle paper texture to card backgrounds
- Soft glow: Add glow effect around important elements (`filter: drop-shadow(0 0 20px rgba(245,158,11,0.2))`)
- Blurred backgrounds: Use `backdrop-filter: blur(10px) saturate(120%)` for glassmorphic effect

**Typography & Layout**:
- Heading font: Soft sans-serif (`'Inter'`, `'Outfit'`, `'Plus Jakarta Sans'`), weight 400-700
- Body font: Highly readable sans-serif (`'Inter'`, `'system-ui'`), weight 300-500
- Font size: 18px-20px base, large headings 48px-64px, subheadings 28px-36px
- Line height: 1.6-1.8 (creates breathing room and relaxed atmosphere)
- Letter spacing: Normal or slightly wide (0.01em-0.02em), avoid crowding
- Soft text color: Use deep brown (`text-amber-900`, `text-amber-800`) instead of pure black

### Page Structure

**Hero Section**:
- Flowing blob shape backgrounds (2-3 layers, different colors, slow morph animations)
- Main title: Large, soft weight (600-700), with subtle text shadow
- Subtitle: Warm copy emphasizing calm and focus
- Dual CTA buttons:
  - Primary: Amber fill, soft corners, hover lift (`hover:-translate-y-1`)
  - Secondary: Transparent border, glassmorphic background
- Small label/badge: Rounded capsule shape with icon (e.g., "🌿 Natural Flow" / "✨ Mindful Work")

**Key Metrics Display (3 groups)**:
- Glassmorphic card containers, soft shadows
- Each group contains:
  - Large number (48px-64px, amber or sage green)
  - Short label ("Hours Saved", "Focus Score", "Tasks Completed")
  - Small icon or decorative blob shape
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-6`

**Product/Inspiration Card Section**:
- 3-4 cards, staggered arrangement (use `mt-8` / `mt-12` offsets)
- Each card:
  - Glassmorphic background with blur effect
  - Top decorative blob or gradient bar
  - Circular icon or illustration (soft tones)
  - Title + 2-3 lines description
  - Subtle hover animation: lift + shadow deepening
- Use Masonry layout or Grid layout (`grid-auto-rows: auto`)

**Process/Timeline Section**:
- Horizontal scrolling timeline (mobile) or vertical flowchart (desktop)
- Use curved connectors instead of straight lines (SVG Bezier curves)
- Each step node:
  - Circular or rounded square container
  - Step number + title + brief description
  - Soft color coding (amber → sand → sage green gradient)
- Add decorative small icons or leaf elements

**Daily Rituals Section**:
- Grid layout displaying 4-6 ritual cards
- Each card:
  - Small rounded card, glassmorphic background
  - Top emoji icon or illustration
  - Ritual title (e.g., "Morning Pages", "Midday Stretch", "Evening Review")
  - 1-2 line description
  - Time label (e.g., "08:00 AM" / "15 min")
- Use soft tones to differentiate time periods (morning amber, midday sand, evening mint)

**Closing CTA Section**:
- Wide container, large blob shape background
- Centered large title: "Begin Your Flow"
- Short motivational copy (2-3 lines)
- Single large primary CTA button
- Optional: "Lite Mode" / "Calm Mode" toggle (static version for motion-sensitive users)

### Animation & Interaction Effects

**CSS Animations (CSS only)**:
- Blob morph animation:
  ```css
  @keyframes morph {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }
  ```
  Apply: `animation: morph 10s ease-in-out infinite`

- Float effect:
  ```css
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  ```
  Apply to decorative elements: `animation: float 6s ease-in-out infinite`

- Fade in slide up (page load):
  ```css
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  ```
  Apply: `animation: fadeInUp 0.8s ease-out forwards`, use `animation-delay` to stagger elements

- Hover effects:
  - Cards: `hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]` (200ms ease-out)
  - Buttons: `hover:scale-105 hover:shadow-lg` (150ms ease-out)
  - Subtle rotation: `hover:rotate-1` (certain decorative elements)

**Accessibility & Motion Sensitivity**:
- All animations use `@media (prefers-reduced-motion: reduce)` query, provide static alternatives
- Clear focus indicators: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-4`
- Maintain WCAG AA contrast ratio (minimum 4.5:1), use deep brown text on light backgrounds
- Keyboard accessibility: All interactive elements accessible via Tab key
- Add `aria-hidden="true"` or `alt=""` for decorative images

### Copywriting Style

**Tone**: Calm, reassuring, expert, warm, motivational

**Example Copy**:

**Hero**:
- Title: "Flow Through Your Workday with Natural Ease"
- Subtitle: "Experience productivity that feels effortless—designed to nurture focus, creativity, and calm."
- CTA: "Start Your Journey" / "Explore Rituals"

**Feature Descriptions**:
- "Breathe into focus with organic workflows"
- "Gentle reminders that honor your natural rhythms"
- "Create space for deep work and mindful breaks"

**Ritual Cards**:
- "Morning Pages – Set intentions with clarity"
- "Midday Stretch – Release tension, restore energy"
- "Evening Review – Reflect and celebrate progress"

**Closing CTA**:
- "Begin Your Flow"
- "Let's cultivate a workspace that supports your best work—and your wellbeing."

### Technical Specifications

**Recommended Tailwind Classes**:
- Background: `bg-gradient-to-br from-amber-50 via-amber-100 to-orange-50`
- Glassmorphic cards: `bg-white/60 backdrop-blur-md border border-white/20`
- Text colors: `text-amber-900`, `text-amber-800`, `text-neutral-700`
- Border radius: `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Shadows: `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
- Hover effects: `hover:-translate-y-2 hover:shadow-xl transition-all duration-200 ease-out`
- Buttons: `bg-amber-400 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-medium`
- Spacing: `space-y-8`, `gap-8`, `p-8` (generous spacing)

**Responsive Design**:
- Mobile: Single column layout, reduce font size (16px base), simplify blob animations
- Tablet: 2-column card layout, maintain fluidity
- Desktop: 3-4 column grid, expand large blob backgrounds, enhance visual depth
- Use `container mx-auto px-4 md:px-8 lg:px-12` to center content

**Performance Optimization**:
- Limit number of blob shapes (maximum 3-4)
- Use CSS `will-change: transform` to optimize animation performance
- Avoid running too many animations simultaneously (stagger with `animation-delay`)
- Use moderate blur parameters (`backdrop-blur-md` / 10px) to avoid performance overhead
- Set reasonable `baseFrequency` (0.5-0.65) when using SVG filters

**SVG Blob Shape Example**:
```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FEF3C7" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.3,53.8,66.8,40.3,74.4C26.8,82,10.9,85.7,-4.8,84.3C-20.5,82.9,-41,76.4,-56.3,65.1C-71.6,53.8,-81.7,37.7,-85.3,20.2C-88.9,2.7,-86,-16.2,-78.4,-32.4C-70.8,-48.6,-58.5,-62.1,-43.8,-69C-29.1,-75.9,-14.6,-76.2,0.3,-76.8C15.2,-77.4,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
</svg>
```

**Glassmorphism Standards**:
- Background: `bg-white/60` or `bg-amber-50/40`
- Blur: `backdrop-blur-md` (10px) or `backdrop-blur-lg` (16px)
- Border: `border border-white/20` or `border-amber-200/30`
- Saturation: `backdrop-saturate-120` (optional, enhance colors)
