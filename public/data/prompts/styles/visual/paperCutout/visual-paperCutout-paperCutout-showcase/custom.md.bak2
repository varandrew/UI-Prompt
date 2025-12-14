# Custom Prompt

## 中文版本 (zh-CN)

创建**Paper Cutout（剪纸拼贴）**风格网站，展现层叠纸张效果、投影和手工艺术美学。TailwindCSS 实现：

### 核心特征
- 层叠纸张效果：多层元素叠加，使用 z-index 分层
- 偏移阴影：shadow-[4px_4px_12px_rgba(0,0,0,0.15)] 模拟纸张高度
- 纸质纹理：使用浅色背景（bg-amber-50, bg-blue-50）模拟彩色纸
- 撕裂边缘：使用不规则边框或 SVG clip-path 模拟手撕效果
- 拼贴构图：元素有意旋转（rotate-1, rotate-2）创造随意感
- 手工感：避免完美对齐，使用轻微偏移

### 组件设计
**卡片**：p-8 bg-white shadow-[6px_6px_16px_rgba(0,0,0,0.12)] rotate-1，边缘可选锯齿效果
**按钮**：px-8 py-4 shadow-[4px_4px_0px] hover:shadow-[2px_2px_0px] + translate 偏移
**图片**：border-8 border-white shadow-lg，像照片贴在纸上
**标签**：rounded-full px-4 py-2，使用彩色纸背景（bg-yellow-200, bg-pink-200）

### 层叠技巧
- 使用 relative + absolute 定位创造重叠
- z-10, z-20, z-30 控制层级
- transform-style: preserve-3d 增强立体感
- 每层使用不同阴影大小表现高度差异

### 配色（彩色纸系）
- 米黄纸（bg-amber-50, #fffbeb）
- 粉色纸（bg-pink-100, #fce7f3）
- 天蓝纸（bg-blue-50, #eff6ff）
- 浅绿纸（bg-green-50, #f0fdf4）
- 白纸（bg-white）
- 牛皮纸（bg-amber-100, #fef3c7）

### 排版
- 手写风格字体（可选 font-hand）或 font-sans
- 标题：text-4xl font-bold text-gray-800，可选轻微旋转
- 文字：text-lg text-gray-700 leading-relaxed

### 实现示例
```html
<div class="relative p-10 bg-white shadow-[8px_8px_20px_rgba(0,0,0,0.12)] rotate-1">
  <div class="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full shadow-md rotate-12 z-10"></div>
  <h2 class="text-3xl font-bold text-gray-800 mb-4">Paper Cutout Title</h2>
  <p class="text-lg text-gray-700">Content on paper layer...</p>
</div>
```

---

## English Version (en-US)

Create **Paper Cutout** style website showcasing layered paper effects, shadows, and handicraft aesthetic. TailwindCSS implementation:

### Core Features
- Layered paper effect: Multi-layer element stacking with z-index
- Offset shadows: shadow-[4px_4px_12px_rgba(0,0,0,0.15)] simulate paper height
- Paper texture: Use light backgrounds (bg-amber-50, bg-blue-50) to mimic colored paper
- Torn edges: Use irregular borders or SVG clip-path for hand-torn effect
- Collage composition: Intentional element rotation (rotate-1, rotate-2) for casual feel
- Handmade feel: Avoid perfect alignment, use slight offsets

### Component Design
**Cards**: p-8 bg-white shadow-[6px_6px_16px_rgba(0,0,0,0.12)] rotate-1, optional jagged edges
**Buttons**: px-8 py-4 shadow-[4px_4px_0px] hover:shadow-[2px_2px_0px] + translate offset
**Images**: border-8 border-white shadow-lg, like photos glued on paper
**Tags**: rounded-full px-4 py-2, colored paper backgrounds (bg-yellow-200, bg-pink-200)

### Layering Techniques
- Use relative + absolute positioning for overlap
- z-10, z-20, z-30 control layers
- transform-style: preserve-3d enhance 3D feel
- Each layer uses different shadow sizes to show height differences

### Color Palette (Colored Paper)
- Cream paper (bg-amber-50, #fffbeb)
- Pink paper (bg-pink-100, #fce7f3)
- Sky blue paper (bg-blue-50, #eff6ff)
- Light green paper (bg-green-50, #f0fdf4)
- White paper (bg-white)
- Kraft paper (bg-amber-100, #fef3c7)

### Typography
- Handwriting-style font (optional font-hand) or font-sans
- Headings: text-4xl font-bold text-gray-800, optional slight rotation
- Text: text-lg text-gray-700 leading-relaxed

### Implementation Example
```html
<div class="relative p-10 bg-white shadow-[8px_8px_20px_rgba(0,0,0,0.12)] rotate-1">
  <div class="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full shadow-md rotate-12 z-10"></div>
  <h2 class="text-3xl font-bold text-gray-800 mb-4">Paper Cutout Title</h2>
  <p class="text-lg text-gray-700">Content on paper layer...</p>
</div>
```
