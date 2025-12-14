# Custom Prompt

## 中文版本 (zh-CN)

创建一个体现 **Outline Business Style（线框商务风格）** 视觉美学的专业商务网站设计，采用简洁的线条艺术风格和专业的线框美学。使用 TailwindCSS 实现以下风格特点：

### 核心视觉特征
- **线条艺术优先**：所有元素使用细线条边框（border border-gray-800），避免填充色
- **极简图标**：使用 stroke-only 图标，线宽 1.5-2px，无填充
- **专业配色**：深灰色线条（#1f2937）配合白色或浅灰色背景（#f9fafb）
- **商务插图**：使用简笔画风格的商业场景插图（办公、团队、数据分析）
- **大量留白**：采用宽松的间距（py-12, py-16），突出专业感
- **清晰层级**：通过线条粗细（border, border-2）和透明度（opacity-50, opacity-100）建立层级

### 布局与组件设计
- **卡片设计**：
  - 使用 border border-gray-300 或 border-gray-400
  - 白色背景（bg-white）配合轻微阴影（shadow-sm）
  - 内边距 p-8 或 p-10
  - hover 时边框变深（hover:border-gray-600）

- **按钮样式**：
  - 描边按钮（border-2 border-gray-800 bg-transparent）
  - 悬停时填充（hover:bg-gray-800 hover:text-white）
  - 中等尺寸（px-8 py-3）
  - 圆角（rounded-lg）

- **图标与插图**：
  - 使用 SVG stroke 图标（无 fill）
  - 统一线宽（stroke-width: 1.5 或 2）
  - 颜色使用深灰色（text-gray-800）或主题色（text-blue-600）

- **导航栏**：
  - 细线条分隔（border-b border-gray-200）
  - 图标 + 文字组合
  - hover 时下划线（hover:border-b-2 hover:border-blue-600）

### 交互特性
- **平滑过渡**：使用 transition-all duration-300 实现优雅的状态变化
- **填充效果**：描边按钮 hover 时从透明变为填充（bg-transparent → bg-gray-800）
- **颜色变化**：链接 hover 时颜色加深（text-gray-600 hover:text-gray-900）
- **边框强调**：focus 状态使用双色环（ring-2 ring-blue-500 ring-offset-2）
- **阴影提升**：卡片 hover 时阴影增强（hover:shadow-md）

### 排版系统
- **专业字体**：使用 font-sans（Inter, Helvetica, Arial）
- **清晰层级**：
  - h1: text-5xl font-semibold leading-tight
  - h2: text-4xl font-semibold
  - h3: text-2xl font-medium
  - 正文: text-base text-gray-600 leading-relaxed
- **适度字重**：标题 font-semibold（600），正文 font-normal（400）
- **宽松行高**：正文使用 leading-relaxed（1.625）确保可读性

### 配色方案
- **主色系**：
  - 深灰线条（border-gray-800, #1f2937）
  - 中灰线条（border-gray-400, #9ca3af）
  - 浅灰线条（border-gray-200, #e5e7eb）
- **背景色**：
  - 纯白（bg-white, #ffffff）
  - 浅灰背景（bg-gray-50, #f9fafb）
- **强调色**：
  - 专业蓝（text-blue-600, bg-blue-600）用于 CTA 和重要链接
  - 成功绿（text-green-600）用于成功状态
- **文字色**：
  - 标题（text-gray-900）
  - 正文（text-gray-600）
  - 辅助文字（text-gray-400）

### 商务场景组件
1. **Hero 区域**：
   - 左侧大标题 + 副标题 + 描边 CTA 按钮
   - 右侧线框风格插图（团队协作、办公场景）
   - 背景使用浅灰色（bg-gray-50）

2. **特性展示卡片**：
   - 网格布局（grid-cols-3）
   - 顶部图标（stroke-only，text-blue-600）
   - 标题 + 描述文字
   - 细边框分隔（border border-gray-200）

3. **统计数据区域**：
   - 大数字展示（text-6xl font-bold text-gray-900）
   - 下方描述标签（text-sm text-gray-500）
   - 竖线分隔（border-r border-gray-300）

4. **客户评价卡片**：
   - 引号图标（线框风格）
   - 评价文字（text-lg text-gray-600 italic）
   - 客户信息（头像使用圆形边框 + 姓名职位）

5. **表单元素**：
   - 输入框：border border-gray-300，focus:border-blue-500
   - 标签：text-sm font-medium text-gray-700
   - 帮助文字：text-xs text-gray-500

### 插图风格指南
- **办公场景**：桌子、椅子、电脑使用简单线条勾勒
- **人物**：使用极简的火柴人风格或简笔画风格
- **数据图表**：柱状图、饼图使用线框表示，无填充
- **装饰元素**：使用几何线条（圆、方、三角）点缀

### 实现指南
```html
<!-- 典型的 Outline Business 按钮 -->
<button class="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
  Get Started
</button>

<!-- 典型的特性卡片 -->
<div class="p-8 border border-gray-200 rounded-xl bg-white hover:shadow-md hover:border-gray-400 transition-all duration-300">
  <div class="w-12 h-12 mb-4">
    <!-- Stroke-only icon SVG -->
    <svg class="text-blue-600" stroke="currentColor" fill="none" stroke-width="1.5">
      <!-- icon path -->
    </svg>
  </div>
  <h3 class="text-xl font-semibold text-gray-900 mb-2">Feature Title</h3>
  <p class="text-gray-600 leading-relaxed">Feature description goes here...</p>
</div>

<!-- Hero 区域 -->
<section class="min-h-screen bg-gray-50 flex items-center">
  <div class="container mx-auto px-6 py-16">
    <div class="grid grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Professional Business Solutions
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed mb-8">
          Streamline your workflow with our innovative platform
        </p>
        <button class="px-10 py-4 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
          Start Free Trial
        </button>
      </div>
      <div class="flex justify-center">
        <!-- Outline-style business illustration SVG -->
      </div>
    </div>
  </div>
</section>
```

### 技术要求
- 使用 TailwindCSS utility classes
- 所有图标使用 stroke-only（无填充）
- 使用平滑过渡（transition-all duration-300）
- 适度圆角（rounded-lg, rounded-xl）
- 确保对比度符合 WCAG AA 标准
- 响应式设计（mobile-first approach）


---

## English Version (en-US)

Create a professional business website design embodying the **Outline Business Style** visual aesthetic, featuring clean line-art style and professional wireframe aesthetics. Use TailwindCSS to implement the following style features:

### Core Visual Characteristics
- **Line Art Priority**: All elements use thin line borders (border border-gray-800), avoid fill colors
- **Minimalist Icons**: Use stroke-only icons, line width 1.5-2px, no fill
- **Professional Color Scheme**: Dark gray lines (#1f2937) with white or light gray backgrounds (#f9fafb)
- **Business Illustrations**: Use simple line-drawn business scenes (office, team, data analysis)
- **Generous Whitespace**: Use spacious spacing (py-12, py-16) to highlight professionalism
- **Clear Hierarchy**: Establish hierarchy through line thickness (border, border-2) and opacity (opacity-50, opacity-100)

### Layout & Component Design
- **Card Design**:
  - Use border border-gray-300 or border-gray-400
  - White background (bg-white) with subtle shadow (shadow-sm)
  - Padding p-8 or p-10
  - Darker border on hover (hover:border-gray-600)

- **Button Style**:
  - Outlined buttons (border-2 border-gray-800 bg-transparent)
  - Fill on hover (hover:bg-gray-800 hover:text-white)
  - Medium size (px-8 py-3)
  - Rounded corners (rounded-lg)

- **Icons & Illustrations**:
  - Use SVG stroke icons (no fill)
  - Consistent line width (stroke-width: 1.5 or 2)
  - Colors use dark gray (text-gray-800) or theme color (text-blue-600)

- **Navigation Bar**:
  - Thin line separator (border-b border-gray-200)
  - Icon + text combination
  - Underline on hover (hover:border-b-2 hover:border-blue-600)

### Interactive Features
- **Smooth Transitions**: Use transition-all duration-300 for elegant state changes
- **Fill Effect**: Outlined buttons transition from transparent to filled on hover (bg-transparent → bg-gray-800)
- **Color Changes**: Links darken on hover (text-gray-600 hover:text-gray-900)
- **Border Emphasis**: Focus state uses two-color ring (ring-2 ring-blue-500 ring-offset-2)
- **Shadow Lift**: Card shadow intensifies on hover (hover:shadow-md)

### Typography System
- **Professional Font**: Use font-sans (Inter, Helvetica, Arial)
- **Clear Hierarchy**:
  - h1: text-5xl font-semibold leading-tight
  - h2: text-4xl font-semibold
  - h3: text-2xl font-medium
  - Body: text-base text-gray-600 leading-relaxed
- **Moderate Weight**: Headings font-semibold (600), body font-normal (400)
- **Relaxed Line Height**: Body uses leading-relaxed (1.625) for readability

### Color Palette
- **Primary Colors**:
  - Dark gray lines (border-gray-800, #1f2937)
  - Medium gray lines (border-gray-400, #9ca3af)
  - Light gray lines (border-gray-200, #e5e7eb)
- **Backgrounds**:
  - Pure white (bg-white, #ffffff)
  - Light gray background (bg-gray-50, #f9fafb)
- **Accent Colors**:
  - Professional blue (text-blue-600, bg-blue-600) for CTAs and important links
  - Success green (text-green-600) for success states
- **Text Colors**:
  - Headings (text-gray-900)
  - Body (text-gray-600)
  - Secondary text (text-gray-400)

### Business Scene Components
1. **Hero Section**:
   - Left: Large title + subtitle + outlined CTA button
   - Right: Wireframe-style illustration (team collaboration, office scene)
   - Background uses light gray (bg-gray-50)

2. **Feature Cards**:
   - Grid layout (grid-cols-3)
   - Top icon (stroke-only, text-blue-600)
   - Title + description text
   - Thin border separator (border border-gray-200)

3. **Statistics Section**:
   - Large number display (text-6xl font-bold text-gray-900)
   - Description label below (text-sm text-gray-500)
   - Vertical line separator (border-r border-gray-300)

4. **Customer Testimonial Cards**:
   - Quote icon (wireframe style)
   - Testimonial text (text-lg text-gray-600 italic)
   - Customer info (circular border avatar + name/title)

5. **Form Elements**:
   - Input fields: border border-gray-300, focus:border-blue-500
   - Labels: text-sm font-medium text-gray-700
   - Help text: text-xs text-gray-500

### Illustration Style Guide
- **Office Scenes**: Desks, chairs, computers outlined with simple lines
- **People**: Use minimalist stick figures or simple line-drawn style
- **Data Charts**: Bar charts, pie charts shown as wireframes, no fill
- **Decorative Elements**: Use geometric lines (circles, squares, triangles) as accents

### Implementation Guide
```html
<!-- Typical Outline Business Button -->
<button class="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
  Get Started
</button>

<!-- Typical Feature Card -->
<div class="p-8 border border-gray-200 rounded-xl bg-white hover:shadow-md hover:border-gray-400 transition-all duration-300">
  <div class="w-12 h-12 mb-4">
    <!-- Stroke-only icon SVG -->
    <svg class="text-blue-600" stroke="currentColor" fill="none" stroke-width="1.5">
      <!-- icon path -->
    </svg>
  </div>
  <h3 class="text-xl font-semibold text-gray-900 mb-2">Feature Title</h3>
  <p class="text-gray-600 leading-relaxed">Feature description goes here...</p>
</div>

<!-- Hero Section -->
<section class="min-h-screen bg-gray-50 flex items-center">
  <div class="container mx-auto px-6 py-16">
    <div class="grid grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Professional Business Solutions
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed mb-8">
          Streamline your workflow with our innovative platform
        </p>
        <button class="px-10 py-4 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
          Start Free Trial
        </button>
      </div>
      <div class="flex justify-center">
        <!-- Outline-style business illustration SVG -->
      </div>
    </div>
  </div>
</section>
```

### Technical Requirements
- Use TailwindCSS utility classes
- All icons use stroke-only (no fill)
- Use smooth transitions (transition-all duration-300)
- Moderate rounded corners (rounded-lg, rounded-xl)
- Ensure contrast meets WCAG AA standards
- Responsive design (mobile-first approach)
