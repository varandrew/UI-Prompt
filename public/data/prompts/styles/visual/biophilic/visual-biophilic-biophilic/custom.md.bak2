# Custom Prompt

## 中文版本 (zh-CN)

创建**Biophilic（亲生物设计）**风格网站，融合自然元素、有机造型和绿色植物美学。TailwindCSS 实现：

### 核心特征
- 自然配色：绿色系（#16a34a, #22c55e, #84cc16）、土色系（#78350f, #92400e）、天空蓝（#0ea5e9）
- 有机形状：使用 rounded-3xl 或不规则 SVG clip-path 模拟自然曲线
- 植物元素：叶子、藤蔓、树木SVG图案作为装饰
- 自然纹理：使用背景图案（木纹、石纹、草地纹理）
- 柔和阴影：shadow-md 模拟自然光线
- 流动布局：避免僵硬的网格，使用 asymmetric layout

### 组件设计
**卡片**：p-8 bg-green-50 rounded-3xl shadow-md，边缘装饰叶子图案
**按钮**：px-8 py-4 bg-green-600 text-white rounded-full，hover:bg-green-700
**图片框**：rounded-2xl overflow-hidden，配合自然场景照片
**分隔线**：使用藤蔓SVG图案代替直线

### 排版
- 字体：font-serif（Lora, Georgia）或 font-sans（Quicksand）
- 标题：text-4xl font-semibold text-green-900
- 正文：text-lg text-gray-700 leading-relaxed
- 引用：italic text-green-800，配合叶子图标

### 配色（自然系）
- 森林绿（bg-green-700, #15803d）
- 草地绿（bg-green-500, #22c55e）
- 薄荷绿（bg-green-100, #dcfce7）
- 土棕色（bg-amber-800, #92400e）
- 天空蓝（bg-sky-400, #38bdf8）
- 米白色（bg-stone-50, #fafaf9）

### 自然元素
- 叶子图标：简化的叶片形状，使用 SVG path
- 树木轮廓：用作背景装饰
- 藤蔓边框：环绕卡片边缘
- 水滴形状：用于加载动画或装饰点
- 阳光光线：使用径向渐变（bg-gradient-radial from-yellow-200）

### 交互
- 生长动画：scale-0 → scale-100 模拟植物生长
- 叶子飘落：使用 animate-float 上下飘动
- 柔和过渡：transition-all duration-500 ease-out
- hover 效果：轻微放大 + 阴影增强

### 实现示例
```html
<div class="relative p-10 bg-green-50 rounded-3xl shadow-md">
  <div class="absolute top-0 right-0 w-24 h-24 opacity-20">
    <!-- Leaf SVG decoration -->
    <svg viewBox="0 0 100 100">
      <path d="M50,10 Q70,30 50,90 Q30,30 50,10" fill="currentColor" class="text-green-600"/>
    </svg>
  </div>
  <h3 class="text-3xl font-semibold text-green-900 mb-4">Natural Living</h3>
  <p class="text-lg text-gray-700 leading-relaxed">Embrace nature in your design...</p>
  <button class="mt-6 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
    Explore Nature
  </button>
</div>
```

---

## English Version (en-US)

Create **Biophilic** style website integrating natural elements, organic shapes, and green plant aesthetics. TailwindCSS implementation:

### Core Features
- Natural colors: green series (#16a34a, #22c55e, #84cc16), earth tones (#78350f, #92400e), sky blue (#0ea5e9)
- Organic shapes: rounded-3xl or irregular SVG clip-path simulating natural curves
- Plant elements: leaves, vines, trees as SVG pattern decorations
- Natural textures: background patterns (wood grain, stone texture, grass texture)
- Soft shadows: shadow-md simulating natural lighting
- Flowing layout: avoid rigid grids, use asymmetric layout

### Component Design
**Cards**: p-8 bg-green-50 rounded-3xl shadow-md, leaf pattern decoration on edges
**Buttons**: px-8 py-4 bg-green-600 text-white rounded-full, hover:bg-green-700
**Image Frames**: rounded-2xl overflow-hidden with natural scene photos
**Dividers**: Use vine SVG patterns instead of straight lines

### Typography
- Font: font-serif (Lora, Georgia) or font-sans (Quicksand)
- Headings: text-4xl font-semibold text-green-900
- Body: text-lg text-gray-700 leading-relaxed
- Quotes: italic text-green-800 with leaf icon

### Color Palette (Natural)
- Forest green (bg-green-700, #15803d)
- Grass green (bg-green-500, #22c55e)
- Mint green (bg-green-100, #dcfce7)
- Earth brown (bg-amber-800, #92400e)
- Sky blue (bg-sky-400, #38bdf8)
- Off-white (bg-stone-50, #fafaf9)

### Natural Elements
- Leaf icons: simplified leaf shapes using SVG path
- Tree silhouettes: used as background decoration
- Vine borders: surrounding card edges
- Water drop shapes: for loading animations or decorative dots
- Sunlight rays: use radial gradient (bg-gradient-radial from-yellow-200)

### Interactions
- Growth animation: scale-0 → scale-100 simulating plant growth
- Falling leaves: animate-float moving up and down
- Soft transitions: transition-all duration-500 ease-out
- Hover effects: slight scale + enhanced shadow

### Implementation Example
```html
<div class="relative p-10 bg-green-50 rounded-3xl shadow-md">
  <div class="absolute top-0 right-0 w-24 h-24 opacity-20">
    <!-- Leaf SVG decoration -->
    <svg viewBox="0 0 100 100">
      <path d="M50,10 Q70,30 50,90 Q30,30 50,10" fill="currentColor" class="text-green-600"/>
    </svg>
  </div>
  <h3 class="text-3xl font-semibold text-green-900 mb-4">Natural Living</h3>
  <p class="text-lg text-gray-700 leading-relaxed">Embrace nature in your design...</p>
  <button class="mt-6 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
    Explore Nature
  </button>
</div>
```
