# Custom Prompt

## 中文版本 (zh-CN)

创建一个体现 **Neo-Brutalism（新粗野主义）** 视觉美学的完整网页设计，融合现代感与粗犷风格，采用大胆阴影、黑色描边和俏皮配色。使用 TailwindCSS 实现以下风格特点：

### 核心视觉特征
- **粗黑描边**：所有元素使用 3-5px 的纯黑边框（border-4 border-black），创造卡通般的轮廓感
- **大胆立体阴影**：使用偏移阴影（shadow-[8px_8px_0px_rgba(0,0,0,1)]）模拟层叠效果
- **俏皮色彩**：明亮、饱和的配色方案（黄色、蓝色、粉色、绿色）与黑白形成对比
- **厚重组件**：按钮、卡片等组件采用大尺寸、高内边距（px-8 py-4, px-12 py-6）
- **无过渡动画**：保持瞬时状态变化，拒绝平滑过渡（no transition）
- **几何形状**：使用方形、圆形等纯几何形状，避免复杂曲线

### 布局与组件设计
- **卡片设计**：白色或彩色背景（bg-white, bg-yellow-300），配合 border-4 border-black 和 shadow-[8px_8px_0px_rgba(0,0,0,1)]
- **按钮样式**：大尺寸（px-10 py-5），黑色边框，hover 时阴影位移（hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]）和轻微偏移（hover:translate-x-1 hover:translate-y-1）
- **网格布局**：使用规则网格（grid-cols-2, grid-cols-3），间距较大（gap-8, gap-12）
- **重叠层次**：通过偏移阴影和 z-index 创造深度感
- **图标与插图**：使用粗线条（stroke-width: 3-4）的图标，配合纯色填充

### 交互特性
- **阴影位移反馈**：hover 时阴影从 [8px_8px] 变为 [4px_4px]，同时元素向右下偏移（translate-x-1 translate-y-1）
- **颜色切换**：hover 时背景色变化（bg-yellow-300 hover:bg-pink-300）
- **瞬时状态**：所有交互无过渡时间，保持硬切换美学
- **明显焦点**：使用粗黑焦点环（ring-4 ring-black ring-offset-4）
- **按压效果**：active 状态时阴影消失（active:shadow-none），元素完全压平（active:translate-x-2 active:translate-y-2）

### 排版系统
- **粗体优先**：标题使用 font-bold 或 font-extrabold（text-4xl font-extrabold）
- **无衬线字体**：使用 font-sans（Inter, Arial, sans-serif）
- **大字号**：标题 text-5xl 到 text-7xl，正文 text-lg 到 text-xl
- **紧凑行高**：标题使用 leading-tight 或 leading-none
- **大写强调**：重要文字使用 uppercase 和 tracking-wider

### 配色方案
- **主色系**：
  - 柠檬黄（bg-yellow-300, #fde047）
  - 天蓝色（bg-blue-400, #60a5fa）
  - 粉红色（bg-pink-300, #f9a8d4）
  - 翠绿色（bg-green-400, #4ade80）
- **基础色**：白色（bg-white）和黑色（text-black, border-black）
- **阴影色**：纯黑（rgba(0,0,0,1)）或深色（rgba(0,0,0,0.8)）

### 阴影系统
- **常规阴影**：shadow-[6px_6px_0px_rgba(0,0,0,1)]
- **大阴影**：shadow-[10px_10px_0px_rgba(0,0,0,1)]
- **小阴影**：shadow-[4px_4px_0px_rgba(0,0,0,1)]
- **hover 阴影**：shadow-[4px_4px_0px_rgba(0,0,0,1)]
- **active 阴影**：shadow-none

### 实现指南
1. **Hero 区域**：
   - 大标题（text-7xl font-extrabold uppercase）
   - 彩色背景块（bg-yellow-300），配合黑色边框和偏移阴影
   - CTA 按钮使用对比色（bg-pink-400）

2. **内容卡片**：
   - 白色或浅色背景（bg-white 或 bg-blue-100）
   - border-4 border-black
   - shadow-[8px_8px_0px_rgba(0,0,0,1)]
   - 内边距 p-8 或 p-10

3. **按钮组件**：
   - 大尺寸内边距（px-12 py-6）
   - 粗黑边框（border-3 border-black）
   - 明亮背景色（bg-yellow-300, bg-pink-300）
   - 黑色文字（text-black）
   - hover 状态：阴影缩小 + 元素偏移

4. **表单元素**：
   - 输入框：border-3 border-black，无圆角（rounded-none）
   - focus 状态：ring-4 ring-black ring-offset-0
   - 大尺寸（px-6 py-4）

5. **图片处理**：
   - 添加粗黑边框（border-4 border-black）
   - 添加偏移阴影
   - 使用 object-cover 确保比例

### 技术要求
- 使用 TailwindCSS 的 utility classes
- 所有边框统一使用 border-black
- 使用自定义阴影（通过 shadow-[custom] 或 extend theme）
- 避免使用 transition 动画
- 避免使用圆角（统一 rounded-none）
- 确保色彩对比度符合 WCAG AA 标准（黑色文字 + 浅色背景）

### 代码示例
```html
<!-- 典型的 Neo-Brutalism 按钮 -->
<button class="px-12 py-6 text-xl font-bold uppercase bg-yellow-300 text-black border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-2 active:translate-y-2">
  Click Me
</button>

<!-- 典型的 Neo-Brutalism 卡片 -->
<div class="p-10 bg-white border-4 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]">
  <h3 class="text-3xl font-extrabold mb-4">Card Title</h3>
  <p class="text-lg">Card content goes here...</p>
</div>
```

---

## English Version (en-US)

Create a complete web page design embodying the **Neo-Brutalism** visual aesthetic, blending modern sensibility with rough style, featuring bold shadows, black outlines, and playful colors. Use TailwindCSS to implement the following style features:

### Core Visual Characteristics
- **Thick Black Outlines**: All elements use 3-5px pure black borders (border-4 border-black), creating cartoon-like contours
- **Bold 3D Shadows**: Use offset shadows (shadow-[8px_8px_0px_rgba(0,0,0,1)]) to simulate layering effects
- **Playful Colors**: Bright, saturated color schemes (yellow, blue, pink, green) contrasting with black and white
- **Chunky Components**: Buttons, cards use large sizes with high padding (px-8 py-4, px-12 py-6)
- **No Transitions**: Maintain instant state changes, reject smooth transitions (no transition)
- **Geometric Shapes**: Use pure geometric shapes like squares and circles, avoid complex curves

### Layout & Component Design
- **Card Design**: White or colored backgrounds (bg-white, bg-yellow-300) with border-4 border-black and shadow-[8px_8px_0px_rgba(0,0,0,1)]
- **Button Style**: Large size (px-10 py-5), black border, shadow shifts on hover (hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]) with slight offset (hover:translate-x-1 hover:translate-y-1)
- **Grid Layout**: Use regular grids (grid-cols-2, grid-cols-3) with generous spacing (gap-8, gap-12)
- **Overlapping Layers**: Create depth through offset shadows and z-index
- **Icons & Illustrations**: Use thick stroke-width (3-4) icons with solid color fills

### Interactive Features
- **Shadow Shift Feedback**: Hover changes shadow from [8px_8px] to [4px_4px], element shifts right-down (translate-x-1 translate-y-1)
- **Color Switching**: Background color changes on hover (bg-yellow-300 hover:bg-pink-300)
- **Instant States**: All interactions have no transition time, maintain hard-switch aesthetic
- **Prominent Focus**: Use thick black focus rings (ring-4 ring-black ring-offset-4)
- **Press Effect**: Active state removes shadow (active:shadow-none), element fully flattens (active:translate-x-2 active:translate-y-2)

### Typography System
- **Bold Priority**: Headings use font-bold or font-extrabold (text-4xl font-extrabold)
- **Sans-Serif Font**: Use font-sans (Inter, Arial, sans-serif)
- **Large Sizes**: Headings text-5xl to text-7xl, body text-lg to text-xl
- **Tight Line Heights**: Headings use leading-tight or leading-none
- **Uppercase Emphasis**: Important text uses uppercase and tracking-wider

### Color Palette
- **Primary Colors**:
  - Lemon yellow (bg-yellow-300, #fde047)
  - Sky blue (bg-blue-400, #60a5fa)
  - Pink (bg-pink-300, #f9a8d4)
  - Emerald green (bg-green-400, #4ade80)
- **Base Colors**: White (bg-white) and black (text-black, border-black)
- **Shadow Colors**: Pure black (rgba(0,0,0,1)) or dark (rgba(0,0,0,0.8))

### Shadow System
- **Regular Shadow**: shadow-[6px_6px_0px_rgba(0,0,0,1)]
- **Large Shadow**: shadow-[10px_10px_0px_rgba(0,0,0,1)]
- **Small Shadow**: shadow-[4px_4px_0px_rgba(0,0,0,1)]
- **Hover Shadow**: shadow-[4px_4px_0px_rgba(0,0,0,1)]
- **Active Shadow**: shadow-none

### Implementation Guidelines
1. **Hero Section**:
   - Large title (text-7xl font-extrabold uppercase)
   - Colored background block (bg-yellow-300) with black border and offset shadow
   - CTA button uses contrasting color (bg-pink-400)

2. **Content Cards**:
   - White or light background (bg-white or bg-blue-100)
   - border-4 border-black
   - shadow-[8px_8px_0px_rgba(0,0,0,1)]
   - Padding p-8 or p-10

3. **Button Components**:
   - Large padding (px-12 py-6)
   - Thick black border (border-3 border-black)
   - Bright background (bg-yellow-300, bg-pink-300)
   - Black text (text-black)
   - Hover state: shadow shrinks + element shifts

4. **Form Elements**:
   - Input fields: border-3 border-black, no rounded corners (rounded-none)
   - Focus state: ring-4 ring-black ring-offset-0
   - Large size (px-6 py-4)

5. **Image Treatment**:
   - Add thick black border (border-4 border-black)
   - Add offset shadow
   - Use object-cover to maintain aspect ratio

### Technical Requirements
- Use TailwindCSS utility classes
- All borders consistently use border-black
- Use custom shadows (via shadow-[custom] or extend theme)
- Avoid transition animations
- Avoid rounded corners (consistent rounded-none)
- Ensure color contrast meets WCAG AA standards (black text + light backgrounds)

### Code Examples
```html
<!-- Typical Neo-Brutalism Button -->
<button class="px-12 py-6 text-xl font-bold uppercase bg-yellow-300 text-black border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-2 active:translate-y-2">
  Click Me
</button>

<!-- Typical Neo-Brutalism Card -->
<div class="p-10 bg-white border-4 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]">
  <h3 class="text-3xl font-extrabold mb-4">Card Title</h3>
  <p class="text-lg">Card content goes here...</p>
</div>
```
