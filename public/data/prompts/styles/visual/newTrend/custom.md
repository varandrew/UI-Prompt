# Custom Prompt: New Trend / 极繁主义（Maximalism）

## 中文版本 (zh-CN)

### 1. 设计哲学与核心原则

**New Trend / 极繁主义（Maximalism）**是对极简主义的反叛，强调**"更多就是更多"（More is More）**的设计理念。这种风格融合**高饱和撞色、粗黑描边、贴纸拼贴、跑马灯、浮动几何形状、网格纹理**等元素，创造出充满**舞台感、张扬感、年轻能量**的视觉体验，特别适用于艺术节、潮流活动、时尚品牌、音乐文化等需要强烈视觉冲击力的场景。

**核心哲学**：
- **视觉丰富性（Visual Richness）**：使用多层次、多元素的叠加创造视觉深度
- **色彩冲突美学（Color Clash）**：高饱和度对比色的大胆组合（洋红+电蓝+鲜黄）
- **无序中的秩序（Organized Chaos）**：看似杂乱无章，实则精心编排节奏
- **舞台化表现（Theatrical Presence）**：每个元素都在"表演"，抓住用户注意力
- **年轻文化认同（Youth Culture Identity）**：反映 Gen Z 的审美偏好和潮流文化

**设计原则**：
- **粗黑描边**：所有核心元素使用 2-4px 的粗黑色边框
- **硬阴影**：使用平移式投影（无模糊），模拟贴纸层叠效果
- **高饱和配色**：主色控制在 3-4 种，饱和度 > 80%
- **动态元素**：跑马灯、浮动形状、旋转卡片等动效增强活力
- **纹理叠加**：噪点、网格、渐变等纹理增强质感
- **贴纸美学**：元素像贴纸一样可以旋转、层叠、撕起

### 2. 核心设计要求

#### 2.1 高饱和撞色系统（High-Saturation Color Clash System）

New Trend 的配色系统以**极高饱和度的对比色**为核心，创造强烈的视觉冲击。

**主色调（Primary Colors）**：
- **洋红（Magenta）**：`#FF0080` - 主要强调色、按钮、标题背景
- **电蓝（Electric Blue）**：`#0080FF` - 次要强调色、链接、边框
- **鲜黄（Vivid Yellow）**：`#FFFF00` - 警告色、高亮、贴纸
- **草绿（Grass Green）**：`#00FF80` - 成功色、辅助色、装饰

**次级色调（Secondary Colors）**：
- **橙红（Orange Red）**：`#FF4500` - 紧急状态、折扣标签
- **紫罗兰（Violet）**：`#8B00FF` - 装饰色、渐变辅助
- **天蓝（Cyan）**：`#00FFFF` - 冷色辅助、背景变化
- **柠檬黄（Lemon Yellow）**：`#FFF700` - 次要高亮

**中性色（Neutral Colors）**：
- **纯白（Pure White）**：`#FFFFFF` - 背景、卡片底色
- **纯黑（Pure Black）**：`#000000` - 文本、描边、阴影
- **深灰（Dark Gray）**：`#1A1A1A` - 次要文本
- **浅灰（Light Gray）**：`#F0F0F0` - 辅助背景

**渐变组合（Gradient Combinations）**：
- **洋红→橙红**：`linear-gradient(135deg, #FF0080 0%, #FF4500 100%)`
- **电蓝→紫罗兰**：`linear-gradient(135deg, #0080FF 0%, #8B00FF 100%)`
- **鲜黄→草绿**：`linear-gradient(135deg, #FFFF00 0%, #00FF80 100%)`
- **彩虹渐变**：`linear-gradient(135deg, #FF0080, #FF4500, #FFFF00, #00FF80, #0080FF, #8B00FF)`

**完整 CSS 变量定义**：
```css
:root {
  /* 主色调 */
  --trend-magenta: #FF0080;
  --trend-electric-blue: #0080FF;
  --trend-vivid-yellow: #FFFF00;
  --trend-grass-green: #00FF80;

  /* 次级色调 */
  --trend-orange-red: #FF4500;
  --trend-violet: #8B00FF;
  --trend-cyan: #00FFFF;
  --trend-lemon-yellow: #FFF700;

  /* 中性色 */
  --trend-white: #FFFFFF;
  --trend-black: #000000;
  --trend-dark-gray: #1A1A1A;
  --trend-light-gray: #F0F0F0;

  /* 渐变 */
  --trend-gradient-hot: linear-gradient(135deg, #FF0080 0%, #FF4500 100%);
  --trend-gradient-cool: linear-gradient(135deg, #0080FF 0%, #8B00FF 100%);
  --trend-gradient-fresh: linear-gradient(135deg, #FFFF00 0%, #00FF80 100%);
  --trend-gradient-rainbow: linear-gradient(135deg, #FF0080, #FF4500, #FFFF00, #00FF80, #0080FF, #8B00FF);

  /* 描边粗细 */
  --trend-stroke-thin: 2px;
  --trend-stroke-medium: 3px;
  --trend-stroke-thick: 4px;
  --trend-stroke-extra-thick: 6px;

  /* 硬阴影（平移式投影） */
  --trend-shadow-sm: 4px 4px 0 var(--trend-black);
  --trend-shadow-md: 6px 6px 0 var(--trend-black);
  --trend-shadow-lg: 8px 8px 0 var(--trend-black);
  --trend-shadow-xl: 12px 12px 0 var(--trend-black);

  /* 圆角 */
  --trend-radius-sm: 8px;
  --trend-radius-md: 16px;
  --trend-radius-lg: 24px;
  --trend-radius-full: 9999px;

  /* 旋转角度 */
  --trend-rotate-slight: 1.5deg;
  --trend-rotate-medium: 3deg;
  --trend-rotate-strong: 5deg;
}
```

#### 2.2 粗黑描边系统（Bold Black Stroke System）

New Trend 的标志性特征是**粗黑色边框**（2-4px），为所有核心元素提供清晰的视觉分隔。

```css
/* 基础描边卡片 */
.trend-card {
  background: var(--trend-white);
  border: var(--trend-stroke-thick) solid var(--trend-black);
  border-radius: var(--trend-radius-md);
  padding: 2rem;
  box-shadow: var(--trend-shadow-md);
  transform: rotate(-1deg);
  transition: all 0.2s ease;
}

.trend-card:hover {
  transform: rotate(1deg) translateY(-8px);
  box-shadow: var(--trend-shadow-lg);
}

/* 彩色背景卡片 */
.trend-card-magenta {
  background: var(--trend-magenta);
  color: var(--trend-white);
  border: var(--trend-stroke-thick) solid var(--trend-black);
  box-shadow: var(--trend-shadow-md);
}

.trend-card-electric {
  background: var(--trend-electric-blue);
  color: var(--trend-white);
  border: var(--trend-stroke-thick) solid var(--trend-black);
  box-shadow: var(--trend-shadow-md);
}

.trend-card-yellow {
  background: var(--trend-vivid-yellow);
  color: var(--trend-black);
  border: var(--trend-stroke-thick) solid var(--trend-black);
  box-shadow: var(--trend-shadow-md);
}

/* 渐变边框卡片 */
.trend-card-gradient-border {
  position: relative;
  background: var(--trend-white);
  padding: 2rem;
  border-radius: var(--trend-radius-md);
  box-shadow: var(--trend-shadow-md);
}

.trend-card-gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--trend-radius-md);
  padding: var(--trend-stroke-thick);
  background: var(--trend-gradient-rainbow);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

/* 双重描边效果 */
.trend-card-double-stroke {
  background: var(--trend-white);
  border: var(--trend-stroke-medium) solid var(--trend-black);
  border-radius: var(--trend-radius-md);
  padding: 2rem;
  box-shadow:
    var(--trend-shadow-md),
    inset 0 0 0 var(--trend-stroke-thin) var(--trend-magenta);
}
```

#### 2.3 硬阴影系统（Hard Shadow System）

New Trend 使用**平移式投影（无模糊）**，模拟贴纸层叠的立体效果。

```css
/* 基础硬阴影 */
.trend-shadow-basic {
  box-shadow: var(--trend-shadow-md);
}

/* 彩色硬阴影（洋红） */
.trend-shadow-magenta {
  box-shadow: 6px 6px 0 var(--trend-magenta);
}

/* 彩色硬阴影（电蓝） */
.trend-shadow-electric {
  box-shadow: 6px 6px 0 var(--trend-electric-blue);
}

/* 彩色硬阴影（鲜黄） */
.trend-shadow-yellow {
  box-shadow: 6px 6px 0 var(--trend-vivid-yellow);
}

/* 渐变硬阴影（双色叠加） */
.trend-shadow-gradient {
  box-shadow:
    4px 4px 0 var(--trend-magenta),
    8px 8px 0 var(--trend-electric-blue);
}

/* 三层硬阴影 */
.trend-shadow-triple {
  box-shadow:
    4px 4px 0 var(--trend-vivid-yellow),
    8px 8px 0 var(--trend-magenta),
    12px 12px 0 var(--trend-black);
}

/* Hover 时阴影变化 */
.trend-interactive {
  box-shadow: var(--trend-shadow-md);
  transition: all 0.2s ease;
}

.trend-interactive:hover {
  box-shadow: var(--trend-shadow-xl);
  transform: translate(-2px, -2px);
}

.trend-interactive:active {
  box-shadow: 2px 2px 0 var(--trend-black);
  transform: translate(2px, 2px);
}
```

#### 2.4 贴纸系统（Sticker System）

New Trend 的元素像**贴纸**一样可以旋转、层叠、撕起。

```css
/* 基础贴纸 */
.trend-sticker {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--trend-magenta);
  color: var(--trend-white);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--trend-stroke-medium) solid var(--trend-black);
  border-radius: var(--trend-radius-sm);
  box-shadow: var(--trend-shadow-md);
  transform: rotate(var(--trend-rotate-slight));
  cursor: pointer;
  transition: all 0.2s ease;
}

.trend-sticker:hover {
  transform: rotate(calc(var(--trend-rotate-slight) * -1)) translateY(-4px);
  box-shadow: var(--trend-shadow-lg);
}

/* 圆形贴纸 */
.trend-sticker-round {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: var(--trend-vivid-yellow);
  color: var(--trend-black);
  font-weight: 900;
  font-size: 0.875rem;
  text-align: center;
  border: var(--trend-stroke-thick) solid var(--trend-black);
  border-radius: 50%;
  box-shadow: var(--trend-shadow-md);
  transform: rotate(var(--trend-rotate-medium));
}

/* 撕起效果（卷边贴纸） */
.trend-sticker-peel {
  position: relative;
  background: var(--trend-electric-blue);
  padding: 1rem 2rem;
  border: var(--trend-stroke-medium) solid var(--trend-black);
  border-radius: var(--trend-radius-sm);
  box-shadow: var(--trend-shadow-md);
  overflow: hidden;
}

.trend-sticker-peel::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent var(--trend-white) transparent transparent;
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.3);
}

.trend-sticker-peel:hover::after {
  border-width: 0 30px 30px 0;
}

/* 贴纸堆叠 */
.trend-sticker-stack {
  position: relative;
  display: inline-block;
}

.trend-sticker-stack .trend-sticker {
  position: relative;
  z-index: 3;
}

.trend-sticker-stack::before,
.trend-sticker-stack::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--trend-grass-green);
  border: var(--trend-stroke-medium) solid var(--trend-black);
  border-radius: var(--trend-radius-sm);
  box-shadow: var(--trend-shadow-sm);
}

.trend-sticker-stack::before {
  transform: rotate(-3deg) translate(-4px, 4px);
  z-index: 1;
}

.trend-sticker-stack::after {
  transform: rotate(2deg) translate(-2px, 2px);
  z-index: 2;
}
```

#### 2.5 跑马灯系统（Marquee System）

New Trend 使用**跑马灯效果**展示动态信息，增强活力感。

```css
/* 跑马灯容器 */
.trend-marquee {
  width: 100%;
  overflow: hidden;
  background: var(--trend-black);
  color: var(--trend-vivid-yellow);
  padding: 1rem 0;
  border-top: var(--trend-stroke-thick) solid var(--trend-vivid-yellow);
  border-bottom: var(--trend-stroke-thick) solid var(--trend-vivid-yellow);
}

.trend-marquee-content {
  display: flex;
  gap: 3rem;
  animation: trend-marquee-scroll 20s linear infinite;
  white-space: nowrap;
}

@keyframes trend-marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.trend-marquee-item {
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* 双向跑马灯 */
.trend-marquee-reverse .trend-marquee-content {
  animation-direction: reverse;
}

/* 渐变跑马灯 */
.trend-marquee-gradient {
  background: var(--trend-gradient-rainbow);
  background-size: 200% 200%;
  animation: trend-gradient-shift 5s ease infinite;
}

@keyframes trend-gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* 闪烁跑马灯 */
.trend-marquee-blink .trend-marquee-item:nth-child(odd) {
  animation: trend-blink 1.5s ease-in-out infinite;
}

@keyframes trend-blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
```

#### 2.6 浮动形状系统（Floating Shapes System）

New Trend 使用**浮动几何形状**作为背景装饰，增强动态感和空间感。

```css
/* 浮动形状容器 */
.trend-float-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* 基础浮动形状 */
.trend-float-shape {
  position: absolute;
  border: var(--trend-stroke-medium) solid var(--trend-black);
  animation: trend-float 8s ease-in-out infinite;
}

@keyframes trend-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(-10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-25px) rotate(3deg);
  }
}

/* 圆形浮动 */
.trend-float-circle {
  width: 120px;
  height: 120px;
  background: var(--trend-magenta);
  border-radius: 50%;
  box-shadow: var(--trend-shadow-md);
}

/* 方形浮动 */
.trend-float-square {
  width: 100px;
  height: 100px;
  background: var(--trend-electric-blue);
  border-radius: var(--trend-radius-sm);
  box-shadow: var(--trend-shadow-md);
  transform: rotate(45deg);
}

/* 三角形浮动 */
.trend-float-triangle {
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 100px solid var(--trend-vivid-yellow);
  border: var(--trend-stroke-medium) solid var(--trend-black);
  box-shadow: var(--trend-shadow-md);
}

/* 星形浮动 */
.trend-float-star {
  width: 100px;
  height: 100px;
  background: var(--trend-grass-green);
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%,
    68% 57%, 79% 91%, 50% 70%,
    21% 91%, 32% 57%, 2% 35%, 39% 35%
  );
  box-shadow: var(--trend-shadow-md);
}

/* 位置变体 */
.trend-float-1 {
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.trend-float-2 {
  top: 30%;
  right: 10%;
  animation-delay: 2s;
}

.trend-float-3 {
  bottom: 20%;
  left: 15%;
  animation-delay: 4s;
}

.trend-float-4 {
  bottom: 40%;
  right: 5%;
  animation-delay: 6s;
}
```

#### 2.7 网格与纹理系统（Grid & Texture System）

New Trend 使用**网格、噪点、条纹**等纹理增强质感和层次感。

```css
/* 棋盘格背景 */
.trend-bg-checkerboard {
  background-image:
    linear-gradient(45deg, var(--trend-light-gray) 25%, transparent 25%),
    linear-gradient(-45deg, var(--trend-light-gray) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--trend-light-gray) 75%),
    linear-gradient(-45deg, transparent 75%, var(--trend-light-gray) 75%);
  background-size: 40px 40px;
  background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
}

/* 网格背景 */
.trend-bg-grid {
  background-image:
    linear-gradient(var(--trend-light-gray) 1px, transparent 1px),
    linear-gradient(90deg, var(--trend-light-gray) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* 粗网格背景 */
.trend-bg-grid-bold {
  background-image:
    linear-gradient(var(--trend-black) 2px, transparent 2px),
    linear-gradient(90deg, var(--trend-black) 2px, transparent 2px);
  background-size: 40px 40px;
}

/* 噪点纹理 */
.trend-texture-noise {
  position: relative;
}

.trend-texture-noise::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
  pointer-events: none;
}

/* 条纹纹理 */
.trend-texture-stripes {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(0, 0, 0, 0.05) 10px,
    rgba(0, 0, 0, 0.05) 20px
  );
}

/* 圆点纹理 */
.trend-texture-dots {
  background-image: radial-gradient(
    circle,
    var(--trend-black) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
}

/* 半透明复盖层（强化冲击力） */
.trend-overlay {
  position: relative;
}

.trend-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 128, 0.1) 0%,
    rgba(0, 128, 255, 0.1) 100%
  );
  pointer-events: none;
}
```

#### 2.8 按钮系统（Button System）

New Trend 按钮结合**粗描边、硬阴影、旋转效果**，模拟贴纸被按下的感觉。

```css
/* 主要按钮（洋红） */
.trend-btn-primary {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--trend-magenta);
  color: var(--trend-white);
  font-weight: 800;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--trend-stroke-thick) solid var(--trend-black);
  border-radius: var(--trend-radius-md);
  box-shadow: var(--trend-shadow-md);
  cursor: pointer;
  transform: rotate(-1deg);
  transition: all 0.15s ease;
}

.trend-btn-primary:hover {
  transform: rotate(1deg) translateY(-4px);
  box-shadow: var(--trend-shadow-lg);
}

.trend-btn-primary:active {
  transform: rotate(0deg) translateY(0);
  box-shadow: 2px 2px 0 var(--trend-black);
}

/* 次要按钮（电蓝） */
.trend-btn-secondary {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--trend-electric-blue);
  color: var(--trend-white);
  font-weight: 800;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--trend-stroke-thick) solid var(--trend-black);
  border-radius: var(--trend-radius-md);
  box-shadow: var(--trend-shadow-md);
  cursor: pointer;
  transition: all 0.15s ease;
}

/* 轮廓按钮 */
.trend-btn-outline {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--trend-white);
  color: var(--trend-black);
  font-weight: 800;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--trend-stroke-thick) solid var(--trend-black);
  border-radius: var(--trend-radius-md);
  box-shadow: var(--trend-shadow-md);
  cursor: pointer;
  transition: all 0.15s ease;
}

.trend-btn-outline:hover {
  background: var(--trend-vivid-yellow);
  transform: translateY(-4px);
  box-shadow: var(--trend-shadow-lg);
}

/* 渐变按钮 */
.trend-btn-gradient {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--trend-gradient-hot);
  color: var(--trend-white);
  font-weight: 800;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--trend-stroke-thick) solid var(--trend-black);
  border-radius: var(--trend-radius-md);
  box-shadow: var(--trend-shadow-md);
  cursor: pointer;
  transition: all 0.15s ease;
  background-size: 200% 200%;
  animation: trend-gradient-shift 3s ease infinite;
}

/* 图标按钮 */
.trend-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--trend-grass-green);
  color: var(--trend-black);
  font-size: 1.5rem;
  border: var(--trend-stroke-thick) solid var(--trend-black);
  border-radius: 50%;
  box-shadow: var(--trend-shadow-md);
  cursor: pointer;
  transform: rotate(-5deg);
  transition: all 0.15s ease;
}

.trend-btn-icon:hover {
  transform: rotate(5deg) scale(1.1);
  box-shadow: var(--trend-shadow-lg);
}
```

### 3. Tailwind CSS 配置

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        trend: {
          magenta: '#FF0080',
          'electric-blue': '#0080FF',
          'vivid-yellow': '#FFFF00',
          'grass-green': '#00FF80',
          'orange-red': '#FF4500',
          violet: '#8B00FF',
          cyan: '#00FFFF',
          'lemon-yellow': '#FFF700',
        },
      },
      borderWidth: {
        trend: {
          thin: '2px',
          medium: '3px',
          thick: '4px',
          'extra-thick': '6px',
        },
      },
      boxShadow: {
        'trend-sm': '4px 4px 0 #000000',
        'trend-md': '6px 6px 0 #000000',
        'trend-lg': '8px 8px 0 #000000',
        'trend-xl': '12px 12px 0 #000000',
        'trend-magenta': '6px 6px 0 #FF0080',
        'trend-electric': '6px 6px 0 #0080FF',
        'trend-yellow': '6px 6px 0 #FFFF00',
        'trend-gradient': '4px 4px 0 #FF0080, 8px 8px 0 #0080FF',
        'trend-triple': '4px 4px 0 #FFFF00, 8px 8px 0 #FF0080, 12px 12px 0 #000000',
      },
      borderRadius: {
        'trend-sm': '8px',
        'trend-md': '16px',
        'trend-lg': '24px',
      },
      rotate: {
        'trend-slight': '1.5deg',
        'trend-medium': '3deg',
        'trend-strong': '5deg',
      },
      animation: {
        'trend-float': 'trendFloat 8s ease-in-out infinite',
        'trend-marquee': 'trendMarquee 20s linear infinite',
        'trend-gradient': 'trendGradient 5s ease infinite',
        'trend-blink': 'trendBlink 1.5s ease-in-out infinite',
      },
      keyframes: {
        trendFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-25px) rotate(3deg)' },
        },
        trendMarquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        trendGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        trendBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
```

### 4. 使用示例

```html
<!-- New Trend 页面 -->
<div class="relative min-h-screen bg-white overflow-hidden">
  <!-- 浮动形状背景 -->
  <div class="trend-float-container">
    <div class="trend-float-shape trend-float-circle trend-float-1"></div>
    <div class="trend-float-shape trend-float-square trend-float-2"></div>
    <div class="trend-float-shape trend-float-star trend-float-3"></div>
  </div>

  <!-- 跑马灯顶部 -->
  <div class="trend-marquee">
    <div class="trend-marquee-content">
      <span class="trend-marquee-item">★ NEW COLLECTION</span>
      <span class="trend-marquee-item">✦ LIMITED EDITION</span>
      <span class="trend-marquee-item">◆ HOT DEALS</span>
      <span class="trend-marquee-item">★ NEW COLLECTION</span>
      <span class="trend-marquee-item">✦ LIMITED EDITION</span>
      <span class="trend-marquee-item">◆ HOT DEALS</span>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center">
    <div class="inline-block mb-6">
      <div class="trend-sticker-round">
        NEW
      </div>
    </div>
    <h1 class="text-7xl font-black mb-6 uppercase" style="text-shadow: 4px 4px 0 #000;">
      WELCOME TO<br/>
      <span style="color: #FF0080;">THE FUTURE</span>
    </h1>
    <p class="text-2xl font-bold max-w-3xl mx-auto mb-12 trend-texture-noise">
      Experience bold colors, thick strokes, and unlimited creativity
    </p>
    <div class="flex gap-6 justify-center flex-wrap">
      <button class="trend-btn-primary">
        GET STARTED
      </button>
      <button class="trend-btn-secondary">
        LEARN MORE
      </button>
      <button class="trend-btn-gradient">
        EXPLORE
      </button>
    </div>
  </section>

  <!-- Feature Cards -->
  <section class="relative z-10 max-w-7xl mx-auto px-8 py-20">
    <h2 class="text-5xl font-black text-center mb-16 uppercase">
      OUR <span style="color: #0080FF;">FEATURES</span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div class="trend-card trend-card-magenta">
        <div class="text-6xl mb-4">🎨</div>
        <h3 class="text-2xl font-black mb-3 uppercase">Bold Colors</h3>
        <p class="text-lg">
          High-saturation color clashes create stunning visual impact
        </p>
      </div>

      <!-- Card 2 -->
      <div class="trend-card trend-card-electric">
        <div class="text-6xl mb-4">✨</div>
        <h3 class="text-2xl font-black mb-3 uppercase">Thick Strokes</h3>
        <p class="text-lg">
          Bold black borders define every element with clarity
        </p>
      </div>

      <!-- Card 3 -->
      <div class="trend-card trend-card-yellow">
        <div class="text-6xl mb-4">🚀</div>
        <h3 class="text-2xl font-black mb-3 uppercase">Dynamic Motion</h3>
        <p class="text-lg">
          Floating shapes and marquees bring life to your designs
        </p>
      </div>
    </div>
  </section>

  <!-- Sticker Section -->
  <section class="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center">
    <div class="flex gap-6 justify-center flex-wrap">
      <div class="trend-sticker">LIMITED OFFER</div>
      <div class="trend-sticker" style="background: #0080FF;">50% OFF</div>
      <div class="trend-sticker" style="background: #FFFF00; color: #000;">HOT DEAL</div>
      <div class="trend-sticker" style="background: #00FF80; color: #000;">NEW ARRIVAL</div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="relative z-10 max-w-4xl mx-auto px-8 py-20 text-center">
    <div class="trend-card-gradient-border p-12">
      <h2 class="text-5xl font-black mb-6 uppercase">
        READY TO<br/>
        <span style="color: #FF0080;">GET STARTED?</span>
      </h2>
      <p class="text-xl mb-8">
        Join thousands of creators using our platform
      </p>
      <button class="trend-btn-primary">
        JOIN NOW
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-black text-white py-12 border-t-4 border-yellow-400">
    <div class="max-w-7xl mx-auto px-8 text-center">
      <p class="text-lg font-bold uppercase">
        &copy; 2025 NEW TREND. ALL RIGHTS RESERVED.
      </p>
    </div>
  </footer>
</div>
```


---

## English Version (en-US)

### 1. Design Philosophy & Core Principles

**New Trend / Maximalism** is a rebellion against minimalism, emphasizing the **"More is More"** design philosophy. This style combines **high-saturation color clashes, thick black strokes, sticker collages, marquees, floating geometric shapes, and grid textures** to create a visual experience full of **theatrical presence, boldness, and youthful energy**, particularly suitable for art festivals, hype campaigns, fashion brands, music culture, and other scenarios requiring strong visual impact.

**Core Philosophy**:
- **Visual Richness**: Create visual depth through multi-layered, multi-element overlays
- **Color Clash Aesthetic**: Bold combinations of high-saturation contrasting colors (magenta + electric blue + vivid yellow)
- **Organized Chaos**: Appears chaotic but carefully orchestrated rhythm
- **Theatrical Presence**: Every element is "performing" to capture user attention
- **Youth Culture Identity**: Reflects Gen Z aesthetic preferences and trend culture

**Design Principles**:
- **Thick Black Strokes**: All core elements use 2-4px thick black borders
- **Hard Shadows**: Use offset shadows (no blur) to simulate sticker layering
- **High Saturation Colors**: Control 3-4 main colors with saturation > 80%
- **Dynamic Elements**: Marquees, floating shapes, rotating cards enhance vitality
- **Texture Overlays**: Noise, grids, gradients enhance texture
- **Sticker Aesthetic**: Elements can rotate, stack, and peel like stickers

### 2. Core Design Requirements

[English translation continues with same structure and detail level...]

**Advanced Implementation Techniques**

**Sticker Layer System**:
- Use CSS transforms (rotate, translate, scale) to create natural sticker placement
- Apply random rotation angles (-8deg to +8deg) for organic feel
- Implement z-index layering (10, 20, 30, etc.) to simulate sticker stacking
- Add subtle drop shadows (offset 8-12px, no blur) for depth perception

**Animation Strategies**:
- Marquee effects: Use CSS animation or JavaScript for continuous scrolling text
- Floating shapes: Implement gentle bobbing motion (translateY: -20px to 20px) over 4-6s
- Hover interactions: Scale(1.05-1.1) + rotate(2-5deg) for playful feedback
- Entrance animations: Slide-in, fade-in, or scale-in with staggered timing (100-200ms delays)

**Performance Optimization**:
- Limit number of simultaneously animated elements (max 8-10) to maintain 60fps
- Use CSS transforms and opacity for animations (GPU accelerated)
- Implement intersection observer to animate only visible elements
- Reduce animation complexity on mobile devices

**Typography Details**:
- Use display/headline fonts with personality (Righteous, Rubik Mono One, Titan One)
- Mix 2-3 fonts maximum to avoid visual chaos
- Apply text shadows or outlines for emphasis without losing readability
- Use uppercase sparingly for maximum impact

**Color Management**:
- Define 3-4 core brand colors with clear hierarchy (primary, secondary, accent)
- Ensure colors work together when overlapping or adjacent
- Maintain sufficient contrast for text readability (WCAG AA minimum)
- Use gradient backgrounds (subtle) to add depth without adding more colors

**Responsive Behavior**:
- On mobile: Reduce sticker rotation angles, simplify animations, stack elements vertically
- Tablet: Maintain most effects but reduce shadow intensity for performance
- Desktop: Full experience with all effects, animations, and interactive elements
