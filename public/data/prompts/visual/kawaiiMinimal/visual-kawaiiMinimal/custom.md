# Custom Prompt

## 中文版本 (zh-CN)

创建**Kawaii Minimal（可爱极简）**风格网站，融合日式卡哇伊美学与极简设计，使用柔和色彩和圆润造型。TailwindCSS 实现：

### 核心特征
- 柔和马卡龙配色：粉色（#ffc0cb）、薰衣草紫（#e6e6fa）、薄荷绿（#98fb98）、桃子橙（#ffdab9）
- 超圆角设计：rounded-3xl，按钮 rounded-full
- 可爱图标：简化的笑脸、爱心、星星、云朵（fill + stroke 结合）
- 轻柔阴影：shadow-sm，避免强烈对比
- 留白充足：py-16, py-20 营造轻松氛围
- 小装饰元素：小星星、小爱心点缀

### 组件设计
**卡片**：p-8 bg-pink-50 rounded-3xl shadow-sm，顶部可选可爱图标
**按钮**：px-8 py-4 bg-pink-300 text-white rounded-full，hover 轻微放大（hover:scale-105）
**输入框**：border-2 border-pink-200 rounded-2xl px-6 py-3，focus:border-pink-400
**标签**：text-xs px-3 py-1 bg-purple-100 text-purple-600 rounded-full

### 排版
- 字体：font-sans（Quicksand, Poppins, Comfortaa）圆润字体
- 标题：text-4xl font-semibold text-gray-700（避免纯黑）
- 正文：text-base text-gray-600 leading-relaxed
- 可选：使用表情符号装饰标题（✨、💖、🌸）

### 配色（马卡龙系）
- 柔粉（bg-pink-100, #fce7f3）
- 薰衣草（bg-purple-100, #f3e8ff）
- 薄荷（bg-green-100, #d1fae5）
- 桃橙（bg-orange-100, #ffedd5）
- 天蓝（bg-blue-100, #dbeafe）
- 奶黄（bg-yellow-100, #fef9c3）

### 可爱元素
- 笑脸图标：圆形脸 + 两个点眼睛 + 弯曲嘴巴
- 爱心：fill="currentColor" 实心爱心
- 星星：五角星或四角星闪烁装饰
- 云朵：圆润的云形状背景

### 交互
- 平滑放大：hover:scale-105 transition-transform duration-300
- 颜色变浅：hover:bg-pink-200
- 轻微弹跳：active:scale-95
- 柔和过渡：transition-all duration-300 ease-in-out

### 实现示例
```html
<div class="p-10 bg-pink-50 rounded-3xl shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
      <span class="text-2xl">😊</span>
    </div>
    <h3 class="text-2xl font-semibold text-gray-700">Kawaii Title</h3>
  </div>
  <p class="text-gray-600 leading-relaxed mb-6">Cute and minimal content...</p>
  <button class="px-8 py-3 bg-pink-300 text-white rounded-full hover:scale-105 transition-transform duration-300">
    Click Me ✨
  </button>
</div>
```

---

## English Version (en-US)

Create **Kawaii Minimal** style website blending Japanese kawaii aesthetic with minimal design, using soft colors and rounded shapes. TailwindCSS implementation:

### Core Features
- Soft macaron colors: pink (#ffc0cb), lavender (#e6e6fa), mint green (#98fb98), peach (#ffdab9)
- Ultra-rounded design: rounded-3xl, buttons rounded-full
- Cute icons: simplified smiles, hearts, stars, clouds (fill + stroke combined)
- Gentle shadows: shadow-sm, avoid strong contrast
- Generous whitespace: py-16, py-20 for relaxed atmosphere
- Small decorative elements: tiny stars, hearts as accents

### Component Design
**Cards**: p-8 bg-pink-50 rounded-3xl shadow-sm, optional cute icon on top
**Buttons**: px-8 py-4 bg-pink-300 text-white rounded-full, hover:scale-105
**Input Fields**: border-2 border-pink-200 rounded-2xl px-6 py-3, focus:border-pink-400
**Tags**: text-xs px-3 py-1 bg-purple-100 text-purple-600 rounded-full

### Typography
- Font: font-sans (Quicksand, Poppins, Comfortaa) rounded fonts
- Headings: text-4xl font-semibold text-gray-700 (avoid pure black)
- Body: text-base text-gray-600 leading-relaxed
- Optional: Use emojis to decorate headings (✨, 💖, 🌸)

### Color Palette (Macaron)
- Soft pink (bg-pink-100, #fce7f3)
- Lavender (bg-purple-100, #f3e8ff)
- Mint (bg-green-100, #d1fae5)
- Peach (bg-orange-100, #ffedd5)
- Sky blue (bg-blue-100, #dbeafe)
- Cream yellow (bg-yellow-100, #fef9c3)

### Cute Elements
- Smiley icon: circular face + two dot eyes + curved smile
- Hearts: fill="currentColor" solid hearts
- Stars: five or four-point stars for sparkle decoration
- Clouds: rounded cloud shapes as backgrounds

### Interactions
- Smooth scale: hover:scale-105 transition-transform duration-300
- Color lighten: hover:bg-pink-200
- Slight bounce: active:scale-95
- Soft transition: transition-all duration-300 ease-in-out

### Implementation Example
```html
<div class="p-10 bg-pink-50 rounded-3xl shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
      <span class="text-2xl">😊</span>
    </div>
    <h3 class="text-2xl font-semibold text-gray-700">Kawaii Title</h3>
  </div>
  <p class="text-gray-600 leading-relaxed mb-6">Cute and minimal content...</p>
  <button class="px-8 py-3 bg-pink-300 text-white rounded-full hover:scale-105 transition-transform duration-300">
    Click Me ✨
  </button>
</div>
```
