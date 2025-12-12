# Custom Prompt

## 中文版本 (zh-CN)

创建**Liminal Space - Digital Museum（阈限空间-数字博物馆）**风格网站，营造空旷画廊氛围、超现实过渡空间美学。TailwindCSS 实现：

### 核心特征
- 极简空间：大量留白（py-24, py-32），模拟空旷画廊
- 冷色调：灰白色系（#f3f4f6, #e5e7eb）、冷蓝色（#1e3a8a）
- 柔和光线：使用渐变模拟画廊顶光（bg-gradient-to-b from-white to-gray-100）
- 低饱和度：避免鲜艳色彩，使用 opacity-70, opacity-80
- 几何构图：使用严格的 grid 对齐，创造秩序感
- 阴影微妙：shadow-sm 或无阴影，避免强烈对比

### 空间感营造
- 透视效果：使用 perspective-1000 + rotateX/Y 创造3D空间
- 消失点：元素向中心收缩（scale-95, scale-90）
- 层次深度：使用 opacity 表现距离（远处 opacity-40）
- 地板反射：使用 -scale-y-100 + opacity-30 模拟镜面地板

### 组件设计
**展品框架**：p-12 bg-white border border-gray-200 shadow-sm，周围大量空白
**导航**：fixed top，透明背景（bg-white/80 backdrop-blur），极简文字链接
**文字说明牌**：text-sm text-gray-600，使用 monospace 字体模拟博物馆标签
**走廊效果**：使用长方形容器 + perspective 创造深度

### 排版
- 字体：font-mono（Courier New）或 font-sans（Inter, Helvetica）
- 标题：text-2xl font-light text-gray-800 tracking-wide
- 说明：text-sm text-gray-500 leading-relaxed
- 大量空行：mb-16, mb-20 创造呼吸感

### 配色（画廊系）
- 展厅白（bg-white, #ffffff）
- 墙面灰（bg-gray-50, #f9fafb）
- 边框灰（border-gray-200, #e5e7eb）
- 文字灰（text-gray-600, #4b5563）
- 点缀深蓝（text-blue-900, #1e3a8a）

### 空旷氛围元素
- 远处门框：使用小尺寸矩形 + opacity-40 模拟远处出口
- 光线柱：使用 linear-gradient 创造从上而下的光束
- 空荡走廊：长方形容器 + 透视变换
- 悬浮展品：使用 animate-float 轻微上下浮动

### 交互
- 缓慢过渡：transition-all duration-1000 创造梦幻感
- hover 靠近：scale-105 模拟走近观察
- 渐显效果：opacity-0 → opacity-100
- 无声交互：避免跳跃式动画

### 实现示例
```html
<div class="min-h-screen bg-gray-50 flex items-center justify-center py-32">
  <div class="max-w-4xl mx-auto px-20">
    <!-- Artwork Frame -->
    <div class="p-16 bg-white border border-gray-200 shadow-sm">
      <div class="aspect-video bg-gray-100 flex items-center justify-center">
        <p class="text-sm text-gray-400 font-mono">[ DIGITAL ARTIFACT ]</p>
      </div>
    </div>
    <!-- Museum Label -->
    <div class="mt-8 text-center">
      <p class="text-xs text-gray-500 font-mono tracking-wider">UNTITLED, 2024</p>
      <p class="text-xs text-gray-400 font-mono mt-1">Collection #0001</p>
    </div>
  </div>
</div>
```

---

## English Version (en-US)

Create **Liminal Space - Digital Museum** style website creating empty gallery atmosphere and surreal transitional space aesthetics. TailwindCSS implementation:

### Core Features
- Minimalist space: generous whitespace (py-24, py-32) simulating empty gallery
- Cold tones: gray-white palette (#f3f4f6, #e5e7eb), cold blue (#1e3a8a)
- Soft lighting: gradients simulating gallery ceiling light (bg-gradient-to-b from-white to-gray-100)
- Low saturation: avoid bright colors, use opacity-70, opacity-80
- Geometric composition: strict grid alignment creating sense of order
- Subtle shadows: shadow-sm or no shadow, avoid strong contrast

### Spatial Perception
- Perspective effect: perspective-1000 + rotateX/Y creating 3D space
- Vanishing point: elements shrink toward center (scale-95, scale-90)
- Depth layers: use opacity to represent distance (far opacity-40)
- Floor reflection: -scale-y-100 + opacity-30 simulating mirror floor

### Component Design
**Artwork Frames**: p-12 bg-white border border-gray-200 shadow-sm, surrounded by generous whitespace
**Navigation**: fixed top, transparent background (bg-white/80 backdrop-blur), minimal text links
**Description Plaques**: text-sm text-gray-600, monospace font simulating museum labels
**Corridor Effect**: rectangular containers + perspective creating depth

### Typography
- Font: font-mono (Courier New) or font-sans (Inter, Helvetica)
- Headings: text-2xl font-light text-gray-800 tracking-wide
- Description: text-sm text-gray-500 leading-relaxed
- Generous line breaks: mb-16, mb-20 creating breathing space

### Color Palette (Gallery)
- Exhibition white (bg-white, #ffffff)
- Wall gray (bg-gray-50, #f9fafb)
- Border gray (border-gray-200, #e5e7eb)
- Text gray (text-gray-600, #4b5563)
- Accent deep blue (text-blue-900, #1e3a8a)

### Empty Atmosphere Elements
- Distant doorframes: small rectangles + opacity-40 simulating far exits
- Light columns: linear-gradient creating top-down light beams
- Empty corridors: rectangular containers + perspective transform
- Floating exhibits: animate-float slight up-down motion

### Interactions
- Slow transitions: transition-all duration-1000 creating dreamlike feel
- Hover approach: scale-105 simulating walking closer to observe
- Fade-in effects: opacity-0 → opacity-100
- Silent interactions: avoid jumpy animations

### Implementation Example
```html
<div class="min-h-screen bg-gray-50 flex items-center justify-center py-32">
  <div class="max-w-4xl mx-auto px-20">
    <!-- Artwork Frame -->
    <div class="p-16 bg-white border border-gray-200 shadow-sm">
      <div class="aspect-video bg-gray-100 flex items-center justify-center">
        <p class="text-sm text-gray-400 font-mono">[ DIGITAL ARTIFACT ]</p>
      </div>
    </div>
    <!-- Museum Label -->
    <div class="mt-8 text-center">
      <p class="text-xs text-gray-500 font-mono tracking-wider">UNTITLED, 2024</p>
      <p class="text-xs text-gray-400 font-mono mt-1">Collection #0001</p>
    </div>
  </div>
</div>
```
