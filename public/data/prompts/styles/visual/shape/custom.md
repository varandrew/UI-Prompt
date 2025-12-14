# Custom Prompt

## 中文版本 (zh-CN)

### 核心指令
请使用 TailwindCSS 创建一个形状艺术风格的界面，通过几何形状、有机曲线和形态变换创造独特的视觉语言。

### 1. 核心设计要求

#### 1.1 有机形状 (Organic Shapes) & Blob 效果
不再使用标准的圆形或椭圆，而是利用 8 值 `border-radius` 语法创建自然、流动的有机形态。这些形状通常作为背景装饰或容器边缘。

```css
/* 有机形状的基础实现 */
.organic-shape {
  /* 顺序：左上角水平 右上角水平 右下角水平 左下角水平 / 左上角垂直 右上角垂直 右下角垂直 左下角垂直 */
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.5s ease-in-out;
}

/* 悬停时的形态变化 */
.organic-shape:hover {
  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}
```

#### 1.2 几何裁切 (Geometric Clipping)
使用 `clip-path` 创建锐利的几何图形（多边形、三角形、菱形），与有机形状形成视觉对比。

```css
/* 几何多边形卡片 */
.geometric-card {
  /* 创建一个非矩形的切角形状 */
  clip-path: polygon(
    0% 10px,           /* 左上切角起点 */
    10px 0%,           /* 左上切角终点 */
    calc(100% - 10px) 0%, /* 右上切角起点 */
    100% 10px,         /* 右上切角终点 */
    100% calc(100% - 10px), /* 右下切角起点 */
    calc(100% - 10px) 100%, /* 右下切角终点 */
    10px 100%,         /* 左下切角起点 */
    0% calc(100% - 10px)    /* 左下切角终点 */
  );
  background: white;
  padding: 2rem;
}

/* 纯CSS三角形装饰 */
.shape-triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #ff6f91;
  width: 100px;
  height: 100px;
}

/* 菱形装饰 */
.shape-diamond {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  width: 80px;
  height: 80px;
}

/* 六边形卡片 */
.shape-hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: #667eea;
  padding: 2rem;
}
```

#### 1.3 形态变换动画 (Morphing Animation)
让形状处于不断的流动状态，模仿液体或漂浮物，增加界面的生命力。

```css
@keyframes morphing {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 45% 55% 55% 45% / 35% 65% 35% 65%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  75% {
    border-radius: 55% 45% 40% 60% / 65% 35% 55% 45%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

.animate-morph {
  animation: morphing 8s ease-in-out infinite;
  will-change: border-radius;
}

/* 多层Blob动画 - 交错效果 */
.blob-layer-1 { animation-delay: 0s; }
.blob-layer-2 { animation-delay: -2s; }
.blob-layer-3 { animation-delay: -4s; }
```

#### 1.4 波浪形状 (Wave Shapes)
在区块分割处使用波浪线条或 SVG 路径，打破直线布局的单调性。

```css
/* 使用 mask-image 创建波浪边缘 */
.wave-bottom {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: bottom;
}

/* CSS波浪动画 */
@keyframes wave {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.wave-animated {
  background: repeating-linear-gradient(
    90deg,
    #667eea 0px,
    #764ba2 40px,
    #667eea 80px
  );
  animation: wave 3s linear infinite;
}
```

#### 1.5 渐变叠加与混合 (Gradient Overlay & Blend Modes)
使用多层渐变和混合模式（如 `mix-blend-mode: overlay`）创造深邃的色彩层次。

```css
.gradient-mesh {
  background-color: #667eea;
  background-image:
    radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
}

/* 混合模式叠加效果 */
.blend-overlay {
  position: relative;
}

.blend-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #667eea, transparent);
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

#### 1.6 3D 形状透视 (3D Shape Perspective)
给平面形状添加轻微的 3D 旋转和阴影，创造悬浮感。

```css
.shape-3d-card {
  transform: perspective(1000px) rotateY(10deg) rotateX(5deg);
  box-shadow:
    -20px 20px 60px #bebebe,
    20px -20px 60px #ffffff;
  transition: transform 0.3s ease;
}

.shape-3d-card:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
}

/* 3D立方体效果 */
.cube-3d {
  transform-style: preserve-3d;
  animation: rotate3d 10s linear infinite;
}

@keyframes rotate3d {
  from { transform: rotateY(0deg) rotateX(0deg); }
  to { transform: rotateY(360deg) rotateX(360deg); }
}
```

### 2. 配色方案

请严格使用以下配色方案构建 CSS 变量或 Tailwind 配置：

**紫蓝系 (Deep & Mystic):**
- Primary: `#667eea` (Royal Blue)
- Secondary: `#764ba2` (Deep Purple)
- Accent: `#8e2de2` (Vivid Violet)

**粉色系 (Soft & Playful):**
- Light: `#f093fb` (Soft Pink)
- Vivid: `#f5576c` (Coral Pink)
- Hot: `#ff6f91` (Hot Pink)

**青绿系 (Fresh & Tech):**
- Sky: `#4facfe` (Sky Blue)
- Cyan: `#00f2fe` (Bright Cyan)
- Mint: `#43e97b` (Mint Green)

**橙黄系 (Warm & Energetic):**
- Peach: `#fa709a` (Peach Red)
- Lemon: `#fee140` (Lemon Yellow)

**推荐渐变组合:**
1. **Mystic Aurora:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
2. **Sunset Vibes:** `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`
3. **Ocean Breeze:** `linear-gradient(to right, #4facfe 0%, #00f2fe 100%)`
4. **Citrus Punch:** `linear-gradient(to top, #fee140 0%, #fa709a 100%)`

### 3. 关键 CSS 类实现

#### 3.1 .shape-blob (有机背景元素)
用于背景装饰，通常设置绝对定位和低层级。

```css
.shape-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.7;
  mix-blend-mode: multiply;
  animation: blob 7s infinite;
  /* 基础尺寸，可覆盖 */
  width: 300px;
  height: 300px;
  /* 默认背景，通常会被 specific 颜色类覆盖 */
  background: linear-gradient(180deg, #f093fb 0%, #f5576c 100%);
  z-index: 0;
}

.shape-blob.blob-purple {
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.shape-blob.blob-cyan {
  background: linear-gradient(180deg, #4facfe 0%, #00f2fe 100%);
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
```

#### 3.2 .shape-btn (形状风格按钮)
打破常规矩形按钮，使用不对称圆角。

```css
.shape-btn {
  position: relative;
  padding: 12px 32px;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;
  transform: scale(1);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  /* 不对称圆角 */
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(to right, #667eea, #764ba2);
  border: none;
  overflow: hidden;
  cursor: pointer;
}

.shape-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; /* 悬停变圆 */
  background: linear-gradient(to right, #764ba2, #667eea); /* 渐变反转 */
}

.shape-btn:active {
  transform: scale(0.95);
}

/* 按钮光效 */
.shape-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.shape-btn:hover::before {
  left: 100%;
}
```

#### 3.3 .shape-card (形状风格卡片)
结合玻璃拟态和独特的形状裁切。

```css
.shape-card {
  position: relative;
  padding: 32px;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #1a1a2e;
  transition: all 0.5s ease;
  /* 有机卡片形状 */
  border-radius: 20px 20px 50px 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

.shape-card:hover {
  /* 悬停时稍微改变形状和阴影 */
  border-radius: 20px 50px 20px 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  transform: translateY(-5px);
}

/* 内部装饰圆点 */
.shape-card::before {
  content: '';
  position: absolute;
  top: 15px;
  right: 15px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff6f91;
}

/* 卡片底部渐变装饰 */
.shape-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #667eea, #764ba2, #f093fb);
  border-radius: 0 0 50px 20px;
}
```

#### 3.4 .wave-divider (波浪分隔线)
用于 Section 之间的平滑过渡。

```css
.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.wave-divider .shape-fill {
  fill: #FFFFFF;
}

/* 多层波浪效果 */
.wave-divider.multi-layer svg:nth-child(1) { opacity: 0.3; }
.wave-divider.multi-layer svg:nth-child(2) { opacity: 0.5; margin-top: -50px; }
.wave-divider.multi-layer svg:nth-child(3) { opacity: 1; margin-top: -80px; }
```

#### 3.5 .morph-container (变形容器)
用于图片展示或重点内容，容器本身形状会持续变化。

```css
.morph-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  /* 调用 morphing 关键帧 */
  animation: morphing 10s ease-in-out infinite;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  box-shadow: inset 10px 10px 20px rgba(255,255,255,0.2),
              inset -10px -10px 20px rgba(0,0,0,0.1);
}

.morph-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  mix-blend-mode: overlay;
}

/* 带边框的变形容器 */
.morph-container.bordered {
  border: 3px solid rgba(255, 255, 255, 0.5);
}

/* 发光效果 */
.morph-container.glow {
  box-shadow:
    inset 10px 10px 20px rgba(255,255,255,0.2),
    inset -10px -10px 20px rgba(0,0,0,0.1),
    0 0 40px rgba(79, 172, 254, 0.5);
}
```

### 4. Tailwind Configuration

将以下配置添加到 `tailwind.config.js` 以支持自定义颜色和动画。

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        shape: {
          purple: '#667eea',
          deep: '#764ba2',
          violet: '#8e2de2',
          pink: '#f093fb',
          coral: '#f5576c',
          hot: '#ff6f91',
          sky: '#4facfe',
          cyan: '#00f2fe',
          mint: '#43e97b',
          peach: '#fa709a',
          lemon: '#fee140',
        }
      },
      animation: {
        blob: "blob 7s infinite",
        morph: "morphing 10s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        wave: "wave 3s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        morphing: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
      backgroundImage: {
        'gradient-mystic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-sunset': 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
        'gradient-ocean': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
        'gradient-citrus': 'linear-gradient(to top, #fee140 0%, #fa709a 100%)',
      }
    },
  },
};
```

### 5. 重要提示

1. **性能优化**：对于 `.animate-morph` 和 `.shape-blob` 等涉及形状变换的元素，务必使用 `will-change: border-radius` 或 `will-change: transform`，以强制浏览器使用 GPU 渲染，避免高帧率下的重绘卡顿。

2. **内容可读性**：Shape Art 风格背景通常色彩丰富且形状复杂。确保文本内容放在 `backdrop-blur` (毛玻璃) 容器或高对比度的纯色卡片中，避免文字直接覆盖在复杂的形状上影响阅读。

3. **视觉平衡**：不要满屏都是变形动画。遵循 "动静结合" 原则，将形态变换主要用于 Hero Section、按钮悬停或强调区域，主体内容区域应保持几何结构的稳定性。

4. **无障碍设计 (A11y)**：使用 `clip-path` 裁剪元素时，确保点击区域（Hit area）仍然符合用户预期。对于纯装饰性的 Blob 形状，应当加上 `aria-hidden="true"`，以免干扰屏幕阅读器。

5. **浏览器兼容性**：虽然大多数现代浏览器支持 `clip-path` 和复杂的 `border-radius`，但在旧版 Safari 上可能会有抗锯齿问题。建议在容器上添加 `transform: translateZ(0)` 来修复潜在的渲染瑕疵。

6. **层级管理**：使用 Blob 背景时，注意 `z-index` 的管理。推荐将所有背景形状放入一个专用的 `div.background-layer` (z-index: -1)，避免遮挡交互元素。

7. **SVG vs CSS**：对于简单的圆角变形，CSS `border-radius` 足矣且性能最好。对于复杂的波浪或特定几何插画，优先使用内联 SVG，因为它们缩放不失真且文件体积小。

8. **响应式调整**：在移动端，过大的 Blob 形状或复杂的 `clip-path` 可能会占据过多屏幕空间或导致布局错乱。在小屏幕上应简化形状，或者降低动画的幅度。


---

## English Version (en-US)

### Core Instruction
Please create a Shape Art style interface using TailwindCSS, creating unique visual language through geometric shapes, organic curves, and morphing transformations.

### 1. Core Design Requirements

#### 1.1 Organic Shapes & Blob Effects
Instead of standard circles or ellipses, utilize the 8-value `border-radius` syntax to create natural, fluid organic forms. These shapes typically serve as background decorations or container edges.

```css
/* Basic implementation of an organic shape */
.organic-shape {
  /* Order: top-left-x top-right-x bottom-right-x bottom-left-x / top-left-y top-right-y bottom-right-y bottom-left-y */
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.5s ease-in-out;
}

/* Shape transformation on hover */
.organic-shape:hover {
  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}
```

#### 1.2 Geometric Clipping
Use `clip-path` to create sharp geometric figures (polygons, triangles, diamonds), forming a visual contrast against organic shapes.

```css
/* Geometric polygon card */
.geometric-card {
  /* Create a non-rectangular chamfered shape */
  clip-path: polygon(
    0% 10px,           /* Top-left start */
    10px 0%,           /* Top-left end */
    calc(100% - 10px) 0%, /* Top-right start */
    100% 10px,         /* Top-right end */
    100% calc(100% - 10px), /* Bottom-right start */
    calc(100% - 10px) 100%, /* Bottom-right end */
    10px 100%,         /* Bottom-left start */
    0% calc(100% - 10px)    /* Bottom-left end */
  );
  background: white;
  padding: 2rem;
}

/* Pure CSS triangle decoration */
.shape-triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #ff6f91;
  width: 100px;
  height: 100px;
}

/* Diamond decoration */
.shape-diamond {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  width: 80px;
  height: 80px;
}

/* Hexagon card */
.shape-hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: #667eea;
  padding: 2rem;
}
```

#### 1.3 Morphing Animation
Keep shapes in a constant state of flux, mimicking liquid or floating objects to add vitality to the interface.

```css
@keyframes morphing {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 45% 55% 55% 45% / 35% 65% 35% 65%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  75% {
    border-radius: 55% 45% 40% 60% / 65% 35% 55% 45%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

.animate-morph {
  animation: morphing 8s ease-in-out infinite;
  will-change: border-radius;
}

/* Multi-layer blob animation - staggered effect */
.blob-layer-1 { animation-delay: 0s; }
.blob-layer-2 { animation-delay: -2s; }
.blob-layer-3 { animation-delay: -4s; }
```

#### 1.4 Wave Shapes
Use wave lines or SVG paths at section divisions to break the monotony of linear layouts.

```css
/* Create wave edge using mask-image */
.wave-bottom {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: bottom;
}

/* CSS wave animation */
@keyframes wave {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.wave-animated {
  background: repeating-linear-gradient(
    90deg,
    #667eea 0px,
    #764ba2 40px,
    #667eea 80px
  );
  animation: wave 3s linear infinite;
}
```

#### 1.5 Gradient Overlay & Blend Modes
Use multi-layered gradients and blend modes (e.g., `mix-blend-mode: overlay`) to create deep color stratification.

```css
.gradient-mesh {
  background-color: #667eea;
  background-image:
    radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
}

/* Blend mode overlay effect */
.blend-overlay {
  position: relative;
}

.blend-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #667eea, transparent);
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

#### 1.6 3D Shape Perspective
Add slight 3D rotation and shadows to flat shapes to create a sense of levitation.

```css
.shape-3d-card {
  transform: perspective(1000px) rotateY(10deg) rotateX(5deg);
  box-shadow:
    -20px 20px 60px #bebebe,
    20px -20px 60px #ffffff;
  transition: transform 0.3s ease;
}

.shape-3d-card:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
}

/* 3D cube effect */
.cube-3d {
  transform-style: preserve-3d;
  animation: rotate3d 10s linear infinite;
}

@keyframes rotate3d {
  from { transform: rotateY(0deg) rotateX(0deg); }
  to { transform: rotateY(360deg) rotateX(360deg); }
}
```

### 2. Color Scheme

Please strictly use the following color scheme when building CSS variables or Tailwind configuration:

**Purple/Blue Series (Deep & Mystic):**
- Primary: `#667eea` (Royal Blue)
- Secondary: `#764ba2` (Deep Purple)
- Accent: `#8e2de2` (Vivid Violet)

**Pink Series (Soft & Playful):**
- Light: `#f093fb` (Soft Pink)
- Vivid: `#f5576c` (Coral Pink)
- Hot: `#ff6f91` (Hot Pink)

**Cyan/Green Series (Fresh & Tech):**
- Sky: `#4facfe` (Sky Blue)
- Cyan: `#00f2fe` (Bright Cyan)
- Mint: `#43e97b` (Mint Green)

**Orange/Yellow Series (Warm & Energetic):**
- Peach: `#fa709a` (Peach Red)
- Lemon: `#fee140` (Lemon Yellow)

**Recommended Gradient Combinations:**
1. **Mystic Aurora:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
2. **Sunset Vibes:** `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`
3. **Ocean Breeze:** `linear-gradient(to right, #4facfe 0%, #00f2fe 100%)`
4. **Citrus Punch:** `linear-gradient(to top, #fee140 0%, #fa709a 100%)`

### 3. Key CSS Class Implementations

#### 3.1 .shape-blob (Organic Background Element)
Used for background decoration, usually set with absolute positioning and low z-index.

```css
.shape-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.7;
  mix-blend-mode: multiply;
  animation: blob 7s infinite;
  /* Base size, can be overridden */
  width: 300px;
  height: 300px;
  /* Default background, usually overridden by specific color classes */
  background: linear-gradient(180deg, #f093fb 0%, #f5576c 100%);
  z-index: 0;
}

.shape-blob.blob-purple {
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.shape-blob.blob-cyan {
  background: linear-gradient(180deg, #4facfe 0%, #00f2fe 100%);
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
```

#### 3.2 .shape-btn (Shape Style Button)
Breaks the convention of rectangular buttons by using asymmetric rounded corners.

```css
.shape-btn {
  position: relative;
  padding: 12px 32px;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;
  transform: scale(1);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  /* Asymmetric border radius */
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(to right, #667eea, #764ba2);
  border: none;
  overflow: hidden;
  cursor: pointer;
}

.shape-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; /* Becomes rounder on hover */
  background: linear-gradient(to right, #764ba2, #667eea); /* Gradient flip */
}

.shape-btn:active {
  transform: scale(0.95);
}

/* Button shine effect */
.shape-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.shape-btn:hover::before {
  left: 100%;
}
```

#### 3.3 .shape-card (Shape Style Card)
Combines glassmorphism with unique shape clipping.

```css
.shape-card {
  position: relative;
  padding: 32px;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #1a1a2e;
  transition: all 0.5s ease;
  /* Organic card shape */
  border-radius: 20px 20px 50px 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

.shape-card:hover {
  /* Slightly modify shape and shadow on hover */
  border-radius: 20px 50px 20px 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  transform: translateY(-5px);
}

/* Internal dot decoration */
.shape-card::before {
  content: '';
  position: absolute;
  top: 15px;
  right: 15px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff6f91;
}

/* Card bottom gradient decoration */
.shape-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #667eea, #764ba2, #f093fb);
  border-radius: 0 0 50px 20px;
}
```

#### 3.4 .wave-divider (Wave Divider)
Used for smooth transitions between sections.

```css
.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.wave-divider .shape-fill {
  fill: #FFFFFF;
}

/* Multi-layer wave effect */
.wave-divider.multi-layer svg:nth-child(1) { opacity: 0.3; }
.wave-divider.multi-layer svg:nth-child(2) { opacity: 0.5; margin-top: -50px; }
.wave-divider.multi-layer svg:nth-child(3) { opacity: 1; margin-top: -80px; }
```

#### 3.5 .morph-container (Morphing Container)
Used for image displays or highlighted content; the container shape changes continuously.

```css
.morph-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  /* Calls the morphing keyframes */
  animation: morphing 10s ease-in-out infinite;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  box-shadow: inset 10px 10px 20px rgba(255,255,255,0.2),
              inset -10px -10px 20px rgba(0,0,0,0.1);
}

.morph-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  mix-blend-mode: overlay;
}

/* Bordered morph container */
.morph-container.bordered {
  border: 3px solid rgba(255, 255, 255, 0.5);
}

/* Glow effect */
.morph-container.glow {
  box-shadow:
    inset 10px 10px 20px rgba(255,255,255,0.2),
    inset -10px -10px 20px rgba(0,0,0,0.1),
    0 0 40px rgba(79, 172, 254, 0.5);
}
```

### 4. Tailwind Configuration

Add the following configuration to `tailwind.config.js` to support custom colors and animations.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        shape: {
          purple: '#667eea',
          deep: '#764ba2',
          violet: '#8e2de2',
          pink: '#f093fb',
          coral: '#f5576c',
          hot: '#ff6f91',
          sky: '#4facfe',
          cyan: '#00f2fe',
          mint: '#43e97b',
          peach: '#fa709a',
          lemon: '#fee140',
        }
      },
      animation: {
        blob: "blob 7s infinite",
        morph: "morphing 10s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        wave: "wave 3s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        morphing: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
      backgroundImage: {
        'gradient-mystic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-sunset': 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
        'gradient-ocean': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
        'gradient-citrus': 'linear-gradient(to top, #fee140 0%, #fa709a 100%)',
      }
    },
  },
};
```

### 5. Important Notes

1. **Performance Optimization**: For elements involving continuous shape transformation (like `.animate-morph` and `.shape-blob`), always use `will-change: border-radius` or `will-change: transform`. This forces the browser to use GPU rendering, avoiding repaint lag at high frame rates.

2. **Content Readability**: Shape Art style backgrounds are often colorful and complex. Ensure text content is placed inside `backdrop-blur` (frosted glass) containers or high-contrast solid color cards to prevent text from being obscured by complex underlying shapes.

3. **Visual Balance**: Avoid filling the entire screen with morphing animations. Follow the principle of "balance between motion and stillness." Use morphing transformations primarily for Hero Sections, button hovers, or emphasis areas, while keeping the main content areas geometrically stable.

4. **Accessibility (A11y)**: When using `clip-path` to crop elements, ensure the clickable area (Hit area) still aligns with user expectations. For purely decorative Blob shapes, add `aria-hidden="true"` to prevent interference with screen readers.

5. **Browser Compatibility**: While most modern browsers support `clip-path` and complex `border-radius`, there may be anti-aliasing issues on older versions of Safari. It is recommended to add `transform: translateZ(0)` to the container to fix potential rendering artifacts.

6. **Layer Management**: When using Blob backgrounds, pay close attention to `z-index` management. It is recommended to place all background shapes in a dedicated `div.background-layer` (z-index: -1) to avoid blocking interactive elements.

7. **SVG vs CSS**: For simple rounded corner deformations, CSS `border-radius` is sufficient and performs best. For complex waves or specific geometric illustrations, prioritize inline SVG, as they scale without distortion and have small file sizes.

8. **Responsive Adjustments**: On mobile devices, overly large Blob shapes or complex `clip-path` usages might occupy too much screen space or cause layout confusion. Simplify shapes or reduce the amplitude of animations on small screens.
