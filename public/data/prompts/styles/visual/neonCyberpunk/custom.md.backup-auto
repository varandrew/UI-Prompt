# Neon Cyberpunk (霓虹赛博朋克) - Custom Prompt

## 中文版本 (zh-CN)

### 设计概述
为产品生成 **Neon Cyberpunk（霓虹赛博朋克）** 风格的界面设计。这是一种融合了赛博朋克美学和霓虹灯光的未来主义风格，通过深黑背景、高对比霓虹色、终端界面和数字雨效果，创造出科幻电影般的数字世界体验。每个元素都像是从《黑客帝国》或《赛博朋克2077》中走出来的，充满了电子脉冲和数据流的感觉。

---

## 核心设计要求

### 1. 深黑背景系统（Deep Dark Background）

**背景原则**:
- 使用近乎纯黑的渐变背景
- 可叠加轻微噪点与扫描线
- 营造深邃的赛博空间感

**完整 CSS 实现**:
```css
/* 赛博朋克深色背景 */
.cyber-bg {
  background: radial-gradient(
    circle at center,
    #0a0f14 0%,
    #050810 45%,
    #000000 100%
  );
  min-height: 100vh;
  color: #e5e7eb;
  position: relative;
  overflow: hidden;
}

/* 噪点纹理叠加 */
.cyber-noise {
  position: relative;
}

.cyber-noise::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.08;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    );
  mix-blend-mode: overlay;
  z-index: 1;
}

/* 径向网格背景 */
.cyber-grid {
  background-image:
    linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;
}

/* 光晕效果 */
.cyber-radial-glow {
  background: radial-gradient(
    ellipse at center,
    rgba(0, 255, 65, 0.15) 0%,
    transparent 70%
  );
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
```

---

### 2. 霓虹色彩系统（Neon Color System）

**色彩原则**:
- 使用高饱和度的霓虹色
- 每种颜色必须有多层发光效果
- 文字和边框都要有光晕

**完整色彩方案**:
```css
:root {
  /* 基础深色 - Base Dark Colors */
  --cyber-black: #000000;
  --cyber-dark-900: #0a0a0a;
  --cyber-dark-800: #0f0f0f;
  --cyber-dark-700: #1a1a1a;

  /* 霓虹色 - Neon Colors */
  --cyber-neon-green: #00ff41;
  --cyber-neon-cyan: #00ffff;
  --cyber-neon-purple: #b967ff;
  --cyber-neon-magenta: #ff00ff;
  --cyber-neon-pink: #ff1493;
  --cyber-neon-orange: #ff6600;
  --cyber-neon-yellow: #ffff00;

  /* 文本色 - Text Colors */
  --cyber-text-primary: #e5e7eb;
  --cyber-text-secondary: #9ca3af;
  --cyber-text-muted: #6b7280;

  /* 霓虹色 RGB 值（用于 rgba） */
  --cyber-green-rgb: 0, 255, 65;
  --cyber-cyan-rgb: 0, 255, 255;
  --cyber-purple-rgb: 185, 103, 255;
  --cyber-magenta-rgb: 255, 0, 255;
}

/* 霓虹绿文字发光 */
.cyber-text-neon-green {
  color: var(--cyber-neon-green);
  text-shadow:
    0 0 5px rgba(var(--cyber-green-rgb), 0.8),
    0 0 10px rgba(var(--cyber-green-rgb), 0.6),
    0 0 20px rgba(var(--cyber-green-rgb), 0.4),
    0 0 40px rgba(var(--cyber-green-rgb), 0.2);
}

/* 霓虹青文字发光 */
.cyber-text-neon-cyan {
  color: var(--cyber-neon-cyan);
  text-shadow:
    0 0 5px rgba(var(--cyber-cyan-rgb), 0.8),
    0 0 10px rgba(var(--cyber-cyan-rgb), 0.6),
    0 0 20px rgba(var(--cyber-cyan-rgb), 0.4);
}

/* 霓虹紫文字发光 */
.cyber-text-neon-purple {
  color: var(--cyber-neon-purple);
  text-shadow:
    0 0 5px rgba(var(--cyber-purple-rgb), 0.8),
    0 0 10px rgba(var(--cyber-purple-rgb), 0.6),
    0 0 20px rgba(var(--cyber-purple-rgb), 0.4);
}

/* 霓虹边框发光 */
.cyber-border-neon-green {
  border: 1px solid rgba(var(--cyber-green-rgb), 0.6);
  box-shadow:
    0 0 10px rgba(var(--cyber-green-rgb), 0.4),
    0 0 20px rgba(var(--cyber-green-rgb), 0.2),
    inset 0 0 10px rgba(var(--cyber-green-rgb), 0.1);
}

.cyber-border-neon-cyan {
  border: 1px solid rgba(var(--cyber-cyan-rgb), 0.6);
  box-shadow:
    0 0 10px rgba(var(--cyber-cyan-rgb), 0.4),
    0 0 20px rgba(var(--cyber-cyan-rgb), 0.2),
    inset 0 0 10px rgba(var(--cyber-cyan-rgb), 0.1);
}
```

---

### 3. 终端窗口（Terminal Window）

**终端设计原则**:
- 使用等宽字体
- 黑色背景 + 霓虹绿文字
- 包含标题栏和状态栏
- 模拟真实终端界面

**完整 CSS 实现**:
```css
/* 终端容器 */
.cyber-terminal {
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(0, 255, 65, 0.6);
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0 0 20px rgba(0, 255, 65, 0.3),
    0 0 40px rgba(0, 255, 65, 0.15),
    inset 0 0 20px rgba(0, 255, 65, 0.05);
  font-family: 'Courier New', 'Monaco', monospace;
}

/* 终端标题栏 */
.cyber-terminal-header {
  background: rgba(0, 255, 65, 0.1);
  border-bottom: 1px solid rgba(0, 255, 65, 0.4);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cyber-terminal-title {
  color: var(--cyber-neon-green);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
}

/* 终端控制按钮 */
.cyber-terminal-controls {
  display: flex;
  gap: 0.5rem;
}

.cyber-terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0, 255, 65, 0.4);
}

.cyber-terminal-btn.close {
  background: rgba(255, 0, 0, 0.6);
  box-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
}

.cyber-terminal-btn.minimize {
  background: rgba(255, 255, 0, 0.6);
  box-shadow: 0 0 8px rgba(255, 255, 0, 0.6);
}

.cyber-terminal-btn.maximize {
  background: rgba(0, 255, 0, 0.6);
  box-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
}

/* 终端内容区域 */
.cyber-terminal-body {
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--cyber-neon-green);
  max-height: 400px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
}

/* 终端命令行 */
.cyber-terminal-line {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.cyber-terminal-prompt {
  color: var(--cyber-neon-cyan);
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.8);
}

.cyber-terminal-command {
  color: var(--cyber-text-primary);
}

.cyber-terminal-output {
  color: var(--cyber-text-secondary);
  margin-left: 1.5rem;
}

/* 终端光标 */
.cyber-terminal-cursor {
  display: inline-block;
  width: 0.5rem;
  height: 1rem;
  background: var(--cyber-neon-green);
  margin-left: 0.25rem;
  animation: cursor-blink 1s steps(2, start) infinite;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 终端滚动条 */
.cyber-terminal-body::-webkit-scrollbar {
  width: 8px;
}

.cyber-terminal-body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.5);
}

.cyber-terminal-body::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 65, 0.3);
  border-radius: 4px;
}

.cyber-terminal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 255, 65, 0.5);
}
```

---

### 4. 状态卡片（Status Cards）

**卡片设计原则**:
- 半透明黑色背景
- 霓虹色边框和发光
- 显示系统监控数据

**完整 CSS 实现**:
```css
/* 状态卡片容器 */
.cyber-stat-card {
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(0, 255, 255, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.3),
    0 8px 32px rgba(0, 255, 255, 0.1),
    inset 0 0 20px rgba(0, 255, 255, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cyber-stat-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 30px rgba(0, 255, 255, 0.5),
    0 12px 48px rgba(0, 255, 255, 0.2),
    inset 0 0 30px rgba(0, 255, 255, 0.12);
}

/* 卡片标题 */
.cyber-stat-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--cyber-text-secondary);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

/* 卡片数值 */
.cyber-stat-value {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--cyber-neon-cyan);
  text-shadow:
    0 0 10px rgba(0, 255, 255, 0.8),
    0 0 20px rgba(0, 255, 255, 0.6);
  line-height: 1;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

/* 卡片单位 */
.cyber-stat-unit {
  font-size: 1rem;
  color: var(--cyber-text-muted);
  font-weight: 400;
}

/* 卡片进度条 */
.cyber-stat-progress {
  margin-top: 1rem;
}

.cyber-progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.cyber-progress-fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 255, 255, 0.8),
    rgba(0, 255, 65, 0.8)
  );
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
  transition: width 0.5s ease;
  position: relative;
}

.cyber-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: progress-shine 2s ease-in-out infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

---

### 5. LED 指示灯（LED Indicators）

**LED 设计原则**:
- 圆形发光点
- 多层阴影创造发光效果
- 支持多种状态（正常/警告/危险）

**完整 CSS 实现**:
```css
/* LED 指示灯容器 */
.cyber-led-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* LED 基础样式 */
.cyber-led {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
}

/* LED 正常状态（绿色） */
.cyber-led.status-normal {
  background: var(--cyber-neon-green);
  box-shadow:
    0 0 5px rgba(0, 255, 65, 1),
    0 0 10px rgba(0, 255, 65, 0.8),
    0 0 20px rgba(0, 255, 65, 0.6),
    0 0 30px rgba(0, 255, 65, 0.4);
  animation: led-pulse-green 2s ease-in-out infinite;
}

@keyframes led-pulse-green {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    box-shadow:
      0 0 5px rgba(0, 255, 65, 1),
      0 0 10px rgba(0, 255, 65, 0.8),
      0 0 20px rgba(0, 255, 65, 0.6),
      0 0 30px rgba(0, 255, 65, 0.4);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.9);
    box-shadow:
      0 0 3px rgba(0, 255, 65, 0.8),
      0 0 6px rgba(0, 255, 65, 0.6),
      0 0 12px rgba(0, 255, 65, 0.4);
  }
}

/* LED 警告状态（黄色） */
.cyber-led.status-warning {
  background: #ffff00;
  box-shadow:
    0 0 5px rgba(255, 255, 0, 1),
    0 0 10px rgba(255, 255, 0, 0.8),
    0 0 20px rgba(255, 255, 0, 0.6);
  animation: led-pulse-yellow 1.5s ease-in-out infinite;
}

@keyframes led-pulse-yellow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* LED 危险状态（红色） */
.cyber-led.status-danger {
  background: #ff0000;
  box-shadow:
    0 0 5px rgba(255, 0, 0, 1),
    0 0 10px rgba(255, 0, 0, 0.8),
    0 0 20px rgba(255, 0, 0, 0.6);
  animation: led-pulse-red 1s ease-in-out infinite;
}

@keyframes led-pulse-red {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* LED 标签 */
.cyber-led-label {
  font-size: 0.75rem;
  color: var(--cyber-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}
```

---

### 6. 按钮设计（Button Components）

**按钮设计原则**:
- 霓虹边框和发光效果
- hover 时增强发光
- active 时内陷效果

**完整 CSS 实现**:
```css
/* 主要按钮（霓虹绿） */
.cyber-btn-primary {
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid var(--cyber-neon-green);
  color: var(--cyber-neon-green);
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;

  box-shadow:
    0 0 10px rgba(0, 255, 65, 0.4),
    0 0 20px rgba(0, 255, 65, 0.2),
    inset 0 0 10px rgba(0, 255, 65, 0.1);

  text-shadow:
    0 0 5px rgba(0, 255, 65, 0.8),
    0 0 10px rgba(0, 255, 65, 0.6);
}

.cyber-btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 65, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.cyber-btn-primary:hover {
  background: rgba(0, 255, 65, 0.2);
  box-shadow:
    0 0 20px rgba(0, 255, 65, 0.6),
    0 0 40px rgba(0, 255, 65, 0.4),
    inset 0 0 20px rgba(0, 255, 65, 0.2);
  transform: translateY(-2px);
}

.cyber-btn-primary:hover::before {
  left: 100%;
}

.cyber-btn-primary:active {
  transform: translateY(0);
  box-shadow:
    0 0 10px rgba(0, 255, 65, 0.4),
    inset 0 0 20px rgba(0, 255, 65, 0.3);
}

/* 次要按钮（霓虹青） */
.cyber-btn-secondary {
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid var(--cyber-neon-cyan);
  color: var(--cyber-neon-cyan);
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;

  box-shadow:
    0 0 10px rgba(0, 255, 255, 0.4),
    0 0 20px rgba(0, 255, 255, 0.2),
    inset 0 0 10px rgba(0, 255, 255, 0.1);

  text-shadow:
    0 0 5px rgba(0, 255, 255, 0.8),
    0 0 10px rgba(0, 255, 255, 0.6);
}

.cyber-btn-secondary:hover {
  background: rgba(0, 255, 255, 0.2);
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.6),
    0 0 40px rgba(0, 255, 255, 0.4),
    inset 0 0 20px rgba(0, 255, 255, 0.2);
}

/* 危险按钮（红色） */
.cyber-btn-danger {
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff0000;
  color: #ff0000;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;

  box-shadow:
    0 0 10px rgba(255, 0, 0, 0.4),
    0 0 20px rgba(255, 0, 0, 0.2),
    inset 0 0 10px rgba(255, 0, 0, 0.1);

  text-shadow:
    0 0 5px rgba(255, 0, 0, 0.8),
    0 0 10px rgba(255, 0, 0, 0.6);
}
```

---

### 7. 扫描线与 Matrix 数据雨（Scanlines & Matrix Rain）

**动画效果原则**:
- 扫描线从上到下循环移动
- Matrix 数据雨垂直下落
- 故障效果随机触发

**完整 CSS 实现**:
```css
/* 扫描线效果 */
.cyber-scanline {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 255, 0.8),
    transparent
  );
  opacity: 0.7;
  mix-blend-mode: screen;
  animation: scanline-move 4s linear infinite;
  pointer-events: none;
  z-index: 10;
}

@keyframes scanline-move {
  0% {
    top: 0%;
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.7;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

/* Matrix 数据雨背景 */
.cyber-matrix-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.cyber-matrix-column {
  position: absolute;
  top: -100%;
  color: var(--cyber-neon-green);
  font-size: 14px;
  line-height: 14px;
  font-family: 'Courier New', monospace;
  opacity: 0.3;
  text-shadow: 0 0 5px rgba(0, 255, 65, 0.8);
  white-space: pre;
  animation: matrix-rain linear infinite;
}

@keyframes matrix-rain {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(150vh);
    opacity: 0;
  }
}

/* 故障效果 */
.cyber-glitch {
  position: relative;
  animation: glitch-skew 3s infinite;
}

.cyber-glitch::before,
.cyber-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.cyber-glitch::before {
  left: 2px;
  text-shadow: -2px 0 var(--cyber-neon-cyan);
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.cyber-glitch::after {
  left: -2px;
  text-shadow: 2px 0 var(--cyber-neon-magenta);
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-skew {
  0% {
    transform: skew(0deg);
  }
  10% {
    transform: skew(0deg);
  }
  11% {
    transform: skew(-2deg);
  }
  12% {
    transform: skew(2deg);
  }
  13% {
    transform: skew(0deg);
  }
  100% {
    transform: skew(0deg);
  }
}

@keyframes glitch-anim {
  0% {
    clip: rect(31px, 9999px, 94px, 0);
    transform: skew(0.18deg);
  }
  5% {
    clip: rect(70px, 9999px, 71px, 0);
    transform: skew(0.85deg);
  }
  10% {
    clip: rect(65px, 9999px, 25px, 0);
    transform: skew(0.46deg);
  }
  /* ... 可添加更多关键帧 */
  100% {
    clip: rect(28px, 9999px, 10px, 0);
    transform: skew(0.12deg);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(65px, 9999px, 119px, 0);
    transform: skew(0.58deg);
  }
  5% {
    clip: rect(52px, 9999px, 106px, 0);
    transform: skew(0.29deg);
  }
  /* ... 可添加更多关键帧 */
  100% {
    clip: rect(103px, 9999px, 73px, 0);
    transform: skew(0.91deg);
  }
}
```

---

## 完整 Tailwind 配置

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#000000',
          dark: {
            900: '#0a0a0a',
            800: '#0f0f0f',
            700: '#1a1a1a',
          },
          neon: {
            green: '#00ff41',
            cyan: '#00ffff',
            purple: '#b967ff',
            magenta: '#ff00ff',
            pink: '#ff1493',
            orange: '#ff6600',
            yellow: '#ffff00',
          },
          text: {
            primary: '#e5e7eb',
            secondary: '#9ca3af',
            muted: '#6b7280',
          },
        },
      },
      fontFamily: {
        'cyber': ['Courier New', 'Monaco', 'monospace'],
      },
      boxShadow: {
        'cyber-green': '0 0 10px rgba(0, 255, 65, 0.4), 0 0 20px rgba(0, 255, 65, 0.2)',
        'cyber-green-lg': '0 0 20px rgba(0, 255, 65, 0.6), 0 0 40px rgba(0, 255, 65, 0.4)',
        'cyber-cyan': '0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)',
        'cyber-cyan-lg': '0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.4)',
        'cyber-inset-green': 'inset 0 0 10px rgba(0, 255, 65, 0.1)',
        'cyber-inset-cyan': 'inset 0 0 10px rgba(0, 255, 255, 0.1)',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s steps(2, start) infinite',
        'scanline': 'scanline-move 4s linear infinite',
        'matrix-rain': 'matrix-rain linear infinite',
        'glitch': 'glitch-skew 3s infinite',
        'led-pulse': 'led-pulse-green 2s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'scanline-move': {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { top: '100%', opacity: '0' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(150vh)', opacity: '0' },
        },
        'glitch-skew': {
          '0%, 10%, 13%, 100%': { transform: 'skew(0deg)' },
          '11%': { transform: 'skew(-2deg)' },
          '12%': { transform: 'skew(2deg)' },
        },
        'led-pulse-green': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
            boxShadow: '0 0 5px rgba(0, 255, 65, 1), 0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(0.9)',
            boxShadow: '0 0 3px rgba(0, 255, 65, 0.8), 0 0 6px rgba(0, 255, 65, 0.6)',
          },
        },
      },
    },
  },
};
```

---

## 字体系统

```css
/* 推荐字体 */
font-family: 'Courier New', 'Monaco', 'Consolas', monospace;

/* 字重 */
--cyber-font-regular: 400;
--cyber-font-medium: 500;
--cyber-font-bold: 700;
--cyber-font-black: 900;

/* 字体大小 */
--cyber-text-xs: 0.625rem;    /* 10px */
--cyber-text-sm: 0.75rem;     /* 12px */
--cyber-text-base: 0.875rem;  /* 14px */
--cyber-text-lg: 1rem;        /* 16px */
--cyber-text-xl: 1.25rem;     /* 20px */
--cyber-text-2xl: 1.5rem;     /* 24px */
--cyber-text-3xl: 2rem;       /* 32px */
--cyber-text-4xl: 2.5rem;     /* 40px */
```

---

## 发光强度系统

```css
/* 文字发光等级 */
--cyber-glow-sm: 0 0 5px rgba(0, 255, 65, 0.6);
--cyber-glow-md: 0 0 5px rgba(0, 255, 65, 0.8), 0 0 10px rgba(0, 255, 65, 0.6);
--cyber-glow-lg: 0 0 5px rgba(0, 255, 65, 0.8), 0 0 10px rgba(0, 255, 65, 0.6), 0 0 20px rgba(0, 255, 65, 0.4);
--cyber-glow-xl: 0 0 5px rgba(0, 255, 65, 1), 0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6), 0 0 40px rgba(0, 255, 65, 0.4);

/* 边框发光等级 */
--cyber-border-glow-sm: 0 0 10px rgba(0, 255, 65, 0.3);
--cyber-border-glow-md: 0 0 10px rgba(0, 255, 65, 0.4), 0 0 20px rgba(0, 255, 65, 0.2);
--cyber-border-glow-lg: 0 0 20px rgba(0, 255, 65, 0.6), 0 0 40px rgba(0, 255, 65, 0.4);
```

---

## 动画时长系统

```css
/* 推荐动画时长 */
--cyber-duration-fast: 0.15s;
--cyber-duration-normal: 0.3s;
--cyber-duration-slow: 0.5s;

/* 循环动画时长 */
--cyber-loop-scanline: 4s;
--cyber-loop-cursor: 1s;
--cyber-loop-led: 2s;
--cyber-loop-glitch: 3s;
```

---

## 重要事项（Important Notes）

1. **深色背景必须**: 背景必须是接近纯黑（#000000 - #1a1a1a）以保证霓虹色的高对比度
2. **多层发光效果**: 所有霓虹元素必须使用多层 box-shadow 或 text-shadow 创造发光效果
3. **等宽字体**: 终端和数据显示必须使用等宽字体（Courier New, Monaco）
4. **动画节奏**: 所有动画保持一致的节奏（2-8秒区间）
5. **半透明叠加**: 使用 rgba() 和 backdrop-filter 创造玻璃态效果
6. **边框发光**: 边框不仅要有颜色，还要有内外发光阴影
7. **响应式**: 移动端适当减小发光强度和动画复杂度

---

## 禁止事项（Things to Avoid）

❌ **不要使用浅色背景**: 避免任何亮度超过 #2a2a2a 的背景色
❌ **不要使用低饱和度颜色**: 霓虹色必须是高饱和度的纯色
❌ **不要省略发光效果**: 所有霓虹元素必须有 text-shadow 或 box-shadow
❌ **不要使用衬线字体**: 终端和数据必须使用等宽字体
❌ **不要过度动画**: 避免同时有太多快速动画，保持节奏统一
❌ **不要使用实心填充**: 按钮和卡片应使用半透明背景而非实色
❌ **不要忽略 webkit 前缀**: backdrop-filter 需要 -webkit- 前缀以支持 Safari

---

## English Version (en-US)

### Design Overview
Generate **Neon Cyberpunk** style interface design for products. This is a futuristic style that combines cyberpunk aesthetics with neon lighting, creating a sci-fi movie-like digital world experience through deep black backgrounds, high-contrast neon colors, terminal interfaces, and matrix rain effects.

---

## Core Design Requirements

### 1. Deep Dark Background System

**Background Principles**:
- Use near-pure black gradients
- Optional subtle noise and scanlines
- Create deep cyber space atmosphere

**Complete CSS Implementation**:
```css
/* Cyberpunk deep background */
.cyber-bg {
  background: radial-gradient(
    circle at center,
    #0a0f14 0%,
    #050810 45%,
    #000000 100%
  );
  min-height: 100vh;
  color: #e5e7eb;
  position: relative;
  overflow: hidden;
}

/* Noise texture overlay */
.cyber-noise {
  position: relative;
}

.cyber-noise::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.08;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    );
  mix-blend-mode: overlay;
  z-index: 1;
}
```

### 2. Neon Color System

**Color Principles**:
- Use high-saturation neon colors
- Every color must have multi-layer glow effects
- Text and borders need halos

**Complete Color Scheme**:
```css
:root {
  /* Base dark colors */
  --cyber-black: #000000;
  --cyber-dark-900: #0a0a0a;
  --cyber-dark-800: #0f0f0f;
  --cyber-dark-700: #1a1a1a;

  /* Neon colors */
  --cyber-neon-green: #00ff41;
  --cyber-neon-cyan: #00ffff;
  --cyber-neon-purple: #b967ff;
  --cyber-neon-magenta: #ff00ff;
  --cyber-neon-pink: #ff1493;
  --cyber-neon-orange: #ff6600;
  --cyber-neon-yellow: #ffff00;

  /* Text colors */
  --cyber-text-primary: #e5e7eb;
  --cyber-text-secondary: #9ca3af;
  --cyber-text-muted: #6b7280;

  /* Neon RGB values (for rgba) */
  --cyber-green-rgb: 0, 255, 65;
  --cyber-cyan-rgb: 0, 255, 255;
  --cyber-purple-rgb: 185, 103, 255;
  --cyber-magenta-rgb: 255, 0, 255;
}

/* Neon green text glow */
.cyber-text-neon-green {
  color: var(--cyber-neon-green);
  text-shadow:
    0 0 5px rgba(var(--cyber-green-rgb), 0.8),
    0 0 10px rgba(var(--cyber-green-rgb), 0.6),
    0 0 20px rgba(var(--cyber-green-rgb), 0.4),
    0 0 40px rgba(var(--cyber-green-rgb), 0.2);
}
```

*(继续包含终端、卡片、LED、按钮、动画等所有组件的英文版说明...)*

---

## Important Notes

1. **Deep Dark Background Required**: Background must be near-black (#000000 - #1a1a1a) to ensure high contrast with neon colors
2. **Multi-layer Glow Effects**: All neon elements must use multi-layer box-shadow or text-shadow for glow
3. **Monospace Fonts**: Terminals and data displays must use monospace fonts (Courier New, Monaco)
4. **Animation Rhythm**: All animations maintain consistent rhythm (2-8 second range)
5. **Semi-transparent Overlays**: Use rgba() and backdrop-filter for glass morphism effects
6. **Border Glow**: Borders need both color and inner/outer glow shadows
7. **Responsive**: Reduce glow intensity and animation complexity on mobile

---

## Things to Avoid

❌ **Don't use light backgrounds**: Avoid any background brighter than #2a2a2a
❌ **Don't use low-saturation colors**: Neon colors must be high-saturation pure colors
❌ **Don't skip glow effects**: All neon elements must have text-shadow or box-shadow
❌ **Don't use serif fonts**: Terminals and data must use monospace fonts
❌ **Don't over-animate**: Avoid too many fast animations simultaneously, keep rhythm unified
❌ **Don't use solid fills**: Buttons and cards should use semi-transparent backgrounds not solid colors
❌ **Don't ignore webkit prefixes**: backdrop-filter needs -webkit- prefix for Safari support

---

## Additional Implementation Tips

**Performance Optimization**:
- Use `will-change: transform, opacity` for animated elements to enable GPU acceleration
- Limit the number of simultaneous glow effects on screen (max 10-15 glowing elements)
- Consider reducing animation complexity on lower-end devices using media queries

**Browser Compatibility**:
- Always provide fallback colors for rgba() and hsla()
- Test backdrop-filter effects across different browsers (not supported in older Firefox versions)
- Use CSS custom properties for easy theme switching

**Accessibility Considerations**:
- Ensure text contrast ratio meets WCAG AA standards (minimum 4.5:1 for normal text)
- Provide `prefers-reduced-motion` media query alternatives for users sensitive to animations
- Test color combinations for colorblind users using tools like Coblis or Color Oracle
