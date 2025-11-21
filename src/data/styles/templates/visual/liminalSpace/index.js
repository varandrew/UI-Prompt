// Liminal Space - 边界空間 / 曖昧過渡空間设計
// Visual Substyle (單一模板)

import {
  liminalSpaceVacantFullPageHTML,
  liminalSpaceVacantFullPageStyles
} from './liminalSpaceVacantFullPage'
import {
  liminalSpaceMuseumFullPageHTML,
  liminalSpaceMuseumFullPageStyles
} from './liminalSpaceMuseumFullPage'

// Demo HTML for StyleCard preview
export const demoHTML = `
<div class="liminal-demo-wrapper">
  <div class="liminal-demo-card">
    <div class="liminal-card-glow"></div>
    <div class="liminal-card-content">
      <h3 class="liminal-card-title">TERMINAL_A</h3>
      <p class="liminal-card-text">// Vacant Terminal Site</p>
      <div class="liminal-status">
        <span class="liminal-led pink"></span>
        <span class="liminal-status-text">INACTIVE</span>
      </div>
    </div>
  </div>
</div>
`

// Custom Styles for StyleCard preview (reference existing CSS in index.css)
export const customStyles = `
/* Liminal Space Demo Styles - 已存在於 src/index.css (行 1251-1472) */
/* 此處仅作引用說明，實際樣式使用全局 CSS */
`

// Main Liminal Space style object
export const liminalSpace = {
  id: 'visual-liminalSpace',
  title: 'styles.visual.liminalSpace.title',
  description: 'styles.visual.liminalSpace.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML,
  customStyles,

  // CustomPrompt (双語 AI 指令)
  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个 **Liminal Space（边界空间）** 风格的界面。

**核心设计理念**

Liminal Space 是一种介于存在与虚无之间的暧昧过渡空间设计风格，营造出空旷、不安、介于真实与虚幻之间的数字美学体验。

---

## 核心设计要求

### 1. **暧昧空间感**
   - 设计理念：介于「存在」与「不存在」之间，暧昧、过渡、空旷的空间感
   - CSS 示例：
\`\`\`css
.liminal-space {
  background: linear-gradient(135deg, #1a1d24 0%, #2c3038 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
\`\`\`

### 2. **深灰基调 + 霓虹双色系**
   - 配色方案：
     * 主背景：#1a1d24, #2c3038（深灰基调）
     * 霓虹粉红：#ff006a（强调色 1）
     * 霓虹青蓝：#00ffcc（强调色 2）
     * 灰色文字：#5f6472, #8a8f9e, #3d4250
   - CSS 示例：
\`\`\`css
.liminal-text-primary {
  color: #8a8f9e;
}

.liminal-neon-pink {
  color: #ff006a;
  text-shadow: 0 0 10px rgba(255, 0, 106, 0.8),
               0 0 20px rgba(255, 0, 106, 0.6);
}

.liminal-neon-cyan {
  color: #00ffcc;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
}
\`\`\`

### 3. **多层背景效果（雾化、噪点、扫描线）**
   - 技术手法：叠加多层透明背景效果，营造数字质感
   - CSS 示例：
\`\`\`css
/* 雾化层 */
.liminal-fog {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.02) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.15) 100%);
}

/* 噪点纹理 */
.liminal-noise {
  background-image: url("data:image/svg+xml,...");
  opacity: 0.3;
}

/* 扫描线动画 */
.liminal-scanlines {
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    transparent 1px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 3px
  );
  animation: scanlineMove 20s linear infinite;
}

@keyframes scanlineMove {
  0% { background-position: 0 0; }
  100% { background-position: 0 100px; }
}
\`\`\`

### 4. **漂浮粒子动画**
   - 设计要点：缓慢、随机漂浮的霓虹粒子，增强空间感
   - CSS 示例：
\`\`\`css
.liminal-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ff006a 0%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 0, 106, 0.6);
  animation: liminalFloat 12s ease-in-out infinite;
}

@keyframes liminalFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.4;
  }
  33% {
    transform: translateY(-15px) translateX(8px);
    opacity: 0.7;
  }
  66% {
    transform: translateY(10px) translateX(-5px);
    opacity: 0.5;
  }
}
\`\`\`

### 5. **霓虹发光文字效果**
   - 技术手法：多层阴影模拟霓虹灯管发光
   - CSS 示例：
\`\`\`css
.liminal-neon-title {
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #ff006a;
  text-shadow:
    0 0 10px rgba(255, 0, 106, 0.8),
    0 0 20px rgba(255, 0, 106, 0.6),
    0 0 40px rgba(255, 0, 106, 0.4),
    0 0 80px rgba(255, 0, 106, 0.2);
  animation: neonFlicker 3s ease-in-out infinite;
}

@keyframes neonFlicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.92; }
  55% { opacity: 0.88; }
  60% { opacity: 1; }
}
\`\`\`

### 6. **玻璃态组件（Glassmorphism）**
   - 设计要点：半透明背景 + 模糊效果，制造暧昧层次感
   - CSS 示例：
\`\`\`css
.liminal-glass {
  background: rgba(37, 40, 48, 0.6);
  backdrop-filter: blur(20px) saturate(80%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 20px 60px rgba(0, 0, 0, 0.3);
}
\`\`\`

### 7. **终端/系统界面美学**
   - 设计要点：等宽字体、系统代码感、终端视觉语言
   - CSS 示例：
\`\`\`css
.liminal-terminal {
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  color: #8a8f9e;
}

.liminal-system-text {
  font-size: 0.75rem;
  color: #5f6472;
  letter-spacing: 0.15em;
  opacity: 0.7;
}

/* LED 状态指示灯 */
.liminal-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff006a;
  box-shadow: 0 0 10px rgba(255, 0, 106, 0.8);
  animation: ledPulse 2s ease-in-out infinite;
}

@keyframes ledPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
\`\`\`

### 8. **緩慢、不安的過渡效果**
   - 设計要點：6-8 秒長的過渡動画，營造不安定感
   - CSS 示例：
\`\`\`css
.liminal-transition {
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-card:hover {
  transform: translateY(-5px);
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\`

---

## 配色方案（完整參考）

**主色調**
- 深灰基調 1：#1a1d24
- 深灰基調 2：#2c3038
- 深灰基調 3：#252830, #2f3440

**強調色**
- 霓虹粉紅：#ff006a
- 霓虹青藍：#00ffcc

**文字颜色**
- 主要文字：#8a8f9e
- 次要文字：#5f6472
- 辅助文字：#3d4250

---

## 关键组件 CSS 示例

### 卡片组件（深层阴影）
\`\`\`css
.liminal-card {
  background: rgba(47, 52, 64, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 40px 80px rgba(0, 0, 0, 0.3),
    0 60px 120px rgba(0, 0, 0, 0.4),
    0 80px 160px rgba(0, 0, 0, 0.5);
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 50px 100px rgba(0, 0, 0, 0.35),
    0 75px 150px rgba(0, 0, 0, 0.45),
    0 100px 200px rgba(0, 0, 0, 0.55);
}
\`\`\`

### 霓虹按钮
\`\`\`css
.liminal-button {
  padding: 1rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid #00ffcc;
  color: #00ffcc;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  box-shadow:
    0 0 15px rgba(0, 255, 204, 0.4),
    inset 0 0 15px rgba(0, 255, 204, 0.1);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-button:hover {
  background: rgba(0, 255, 204, 0.1);
  box-shadow:
    0 0 25px rgba(0, 255, 204, 0.7),
    inset 0 0 25px rgba(0, 255, 204, 0.2);
}
\`\`\`

### 表单输入框
\`\`\`css
.liminal-input {
  padding: 1rem;
  background: rgba(26, 29, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #8a8f9e;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.3em;
  text-align: center;
  transition: all 0.6s;
}

.liminal-input:focus {
  border-color: #00ffcc;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.6);
}
\`\`\`

---

## 间距系统

- 超大间距（区块之间）：8rem
- 大间距（组件之间）：4rem
- 中间距（卡片网格间隙）：3–4rem
- 小间距（元素之间）：1–2rem
- 微间距（内部元素）：0.5–1rem

---

## 字体系统

- 主标题：clamp(2rem, 8vw, 4.5rem)
- 副标题：clamp(0.9rem, 2vw, 1.2rem)
- 正文：1rem / 0.85rem
- 小标签：0.75rem / 0.65rem
- 字体家族：'Courier New', monospace（终端风格）

---

## 重要提示

1. **缓慢过渡**：所有交互动画使用 6–8 秒过渡时间，制造不安定感
2. **多层叠加**：背景效果必须使用 3–5 层叠加（雾化、噪点、扫描线、晕影）
3. **霓虹发光**：所有强调元素使用多层 box-shadow 或 text-shadow 模拟霓虹效果
4. **深层阴影**：卡片组件使用 4–5 层深层阴影，营造空间深度
5. **等宽字体**：所有文字必须使用 Courier New 或 monospace 字体
6. **暧昧层次**：大量使用半透明背景（rgba）和 backdrop-filter 制造暧昧感
7. **避免饱和色**：除霓虹强调色外，其他颜色保持低饱和度灰调
8. **LED 动画**：状态指示使用脉冲动画（ledPulse）`,

    'en-US': `Please create a **Liminal Space** style interface using TailwindCSS.

**Core Design Concept**

Liminal Space is an ambiguous transitional space design style that exists between presence and nothingness, creating a vacant, unsettling, digital aesthetic experience between reality and virtuality.

---

## Core Design Requirements

### 1. **Ambiguous Spatial Feel**
   - Design Concept: Space between "existence" and "non-existence" - ambiguous, transitional, and vacant
   - CSS Example:
\`\`\`css
.liminal-space {
  background: linear-gradient(135deg, #1a1d24 0%, #2c3038 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
\`\`\`

### 2. **Dark Gray Base + Neon Dual Color System**
   - Color Scheme:
     * Main Background: #1a1d24, #2c3038 (dark gray base)
     * Neon Pink: #ff006a (accent color 1)
     * Neon Cyan: #00ffcc (accent color 2)
     * Gray Text: #5f6472, #8a8f9e, #3d4250
   - CSS Example:
\`\`\`css
.liminal-text-primary {
  color: #8a8f9e;
}

.liminal-neon-pink {
  color: #ff006a;
  text-shadow: 0 0 10px rgba(255, 0, 106, 0.8),
               0 0 20px rgba(255, 0, 106, 0.6);
}

.liminal-neon-cyan {
  color: #00ffcc;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
}
\`\`\`

### 3. **Multi-Layer Background Effects (Fog, Noise, Scanlines)**
   - Technical Approach: Layered transparent background effects for digital texture
   - CSS Example:
\`\`\`css
/* Fog Layer */
.liminal-fog {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.02) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.15) 100%);
}

/* Noise Texture */
.liminal-noise {
  background-image: url("data:image/svg+xml,...");
  opacity: 0.3;
}

/* Scanline Animation */
.liminal-scanlines {
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    transparent 1px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 3px
  );
  animation: scanlineMove 20s linear infinite;
}

@keyframes scanlineMove {
  0% { background-position: 0 0; }
  100% { background-position: 0 100px; }
}
\`\`\`

### 4. **Floating Particle Animation**
   - Design Point: Slow, randomly floating neon particles to enhance spatial feel
   - CSS Example:
\`\`\`css
.liminal-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ff006a 0%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 0, 106, 0.6);
  animation: liminalFloat 12s ease-in-out infinite;
}

@keyframes liminalFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.4;
  }
  33% {
    transform: translateY(-15px) translateX(8px);
    opacity: 0.7;
  }
  66% {
    transform: translateY(10px) translateX(-5px);
    opacity: 0.5;
  }
}
\`\`\`

### 5. **Neon Glow Text Effect**
   - Technical Approach: Multi-layer shadows simulating neon tube glow
   - CSS Example:
\`\`\`css
.liminal-neon-title {
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #ff006a;
  text-shadow:
    0 0 10px rgba(255, 0, 106, 0.8),
    0 0 20px rgba(255, 0, 106, 0.6),
    0 0 40px rgba(255, 0, 106, 0.4),
    0 0 80px rgba(255, 0, 106, 0.2);
  animation: neonFlicker 3s ease-in-out infinite;
}

@keyframes neonFlicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.92; }
  55% { opacity: 0.88; }
  60% { opacity: 1; }
}
\`\`\`

### 6. **Glassmorphism Components**
   - Design Point: Semi-transparent background + blur effect for ambiguous layering
   - CSS Example:
\`\`\`css
.liminal-glass {
  background: rgba(37, 40, 48, 0.6);
  backdrop-filter: blur(20px) saturate(80%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 20px 60px rgba(0, 0, 0, 0.3);
}
\`\`\`

### 7. **Terminal/System Interface Aesthetics**
   - Design Point: Monospace font, system code feel, terminal visual language
   - CSS Example:
\`\`\`css
.liminal-terminal {
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  color: #8a8f9e;
}

.liminal-system-text {
  font-size: 0.75rem;
  color: #5f6472;
  letter-spacing: 0.15em;
  opacity: 0.7;
}

/* LED Status Indicator */
.liminal-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff006a;
  box-shadow: 0 0 10px rgba(255, 0, 106, 0.8);
  animation: ledPulse 2s ease-in-out infinite;
}

@keyframes ledPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
\`\`\`

### 8. **Slow, Unsettling Transition Effects**
   - Design Point: 6-8 second long transition animations for unsettling feel
   - CSS Example:
\`\`\`css
.liminal-transition {
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-card:hover {
  transform: translateY(-5px);
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\`

---

## Color Scheme (Complete Reference)

**Primary Colors**
- Dark Gray Base 1: #1a1d24
- Dark Gray Base 2: #2c3038
- Dark Gray Base 3: #252830, #2f3440

**Accent Colors**
- Neon Pink: #ff006a
- Neon Cyan: #00ffcc

**Text Colors**
- Primary Text: #8a8f9e
- Secondary Text: #5f6472
- Tertiary Text: #3d4250

---

## Key Component CSS Examples

### Card Component (Deep Shadows)
\`\`\`css
.liminal-card {
  background: rgba(47, 52, 64, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 40px 80px rgba(0, 0, 0, 0.3),
    0 60px 120px rgba(0, 0, 0, 0.4),
    0 80px 160px rgba(0, 0, 0, 0.5);
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 50px 100px rgba(0, 0, 0, 0.35),
    0 75px 150px rgba(0, 0, 0, 0.45),
    0 100px 200px rgba(0, 0, 0, 0.55);
}
\`\`\`

### Neon Button
\`\`\`css
.liminal-button {
  padding: 1rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid #00ffcc;
  color: #00ffcc;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  box-shadow:
    0 0 15px rgba(0, 255, 204, 0.4),
    inset 0 0 15px rgba(0, 255, 204, 0.1);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-button:hover {
  background: rgba(0, 255, 204, 0.1);
  box-shadow:
    0 0 25px rgba(0, 255, 204, 0.7),
    inset 0 0 25px rgba(0, 255, 204, 0.2);
}
\`\`\`

### Form Input
\`\`\`css
.liminal-input {
  padding: 1rem;
  background: rgba(26, 29, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #8a8f9e;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.3em;
  text-align: center;
  transition: all 0.6s;
}

.liminal-input:focus {
  border-color: #00ffcc;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.6);
}
\`\`\`

---

## Spacing System

- Extra Large (between sections): 8rem
- Large (between components): 4rem
- Medium (card grid gaps): 3-4rem
- Small (between elements): 1-2rem
- Micro (internal elements): 0.5-1rem

---

## Typography System

- Main Title: clamp(2rem, 8vw, 4.5rem)
- Subtitle: clamp(0.9rem, 2vw, 1.2rem)
- Body Text: 1rem / 0.85rem
- Small Labels: 0.75rem / 0.65rem
- Font Family: 'Courier New', monospace (terminal style)

---

## Important Notes

1. **Slow Transitions**: All interactive animations use 6-8 second transition times for unsettling feel
2. **Multi-Layer Stack**: Background effects must use 3-5 layers (fog, noise, scanlines, vignette)
3. **Neon Glow**: All accent elements use multi-layer box-shadow or text-shadow for neon effect
4. **Deep Shadows**: Card components use 4-5 layers of deep shadows for spatial depth
5. **Monospace Font**: All text must use Courier New or monospace font
6. **Ambiguous Layers**: Extensive use of semi-transparent backgrounds (rgba) and backdrop-filter for ambiguity
7. **Avoid Saturated Colors**: Except neon accents, keep all colors low-saturation gray tones
8. **LED Animation**: Status indicators use pulse animation (ledPulse)`
  },

  // 敘事型 StylePrompt：描述 Liminal Space 的设計氛圍
  stylePrompt: {
    'zh-CN': `角色：你是一名擅长 Liminal Space（边界空间）风格的 UI 设计师，需要设计一个看起来像「介于现实场景与数字梦境之间的空场」。

场景定位：
- 适合叙事型网站、实验性作品集、概念展示页或游戏 / 影集的宣传页。
- 画面上应该只隐约暗示用途（终端、候车厅、走廊、展厅等），但不出现具体人物与日常杂物。

视觉设计理念：
- 强调「空、静、略不安」的情绪：空间很大、元素很少、颜色偏冷或偏灰。
- 利用远近透视、消失点与长阴影让画面看起来比实际内容更辽阔，让使用者意识到「这里没有被完全使用」。

材质与质感：
- 背景以深灰、冷蓝为主，叠加雾化层、噪点与扫描线，营造老旧摄影机或监控画面的感觉。
- 霓虹色只有少量点缀（状态灯、指示文字、标语），像是在冷空间中唯一的「活物」。

交互体验：
- 动画节奏偏慢且略带不稳定：光晕偶尔闪烁、扫描线缓慢移动、粒子不规则飘动。
- 交互反馈不应过度热情，只做轻微亮度或位置变化，好像系统迟钝地回应使用者。

氛围营造：
- 整体氛围是「深夜、无人、介于开机与关机之间」的空间，适合承载寂寞感、怀旧感或末世感题材。
- 使用者在浏览时，应有置身空旷场地、听着远处冷风声音的心理联想，而不只是看一个普通 landing page。`,
    'en-US': `Role: You are a UI designer focused on Liminal Space aesthetics, crafting an interface that feels like an empty in‑between place between reality and a digital dream.

Scene:
- Suitable for narrative websites, experimental portfolios, concept pages or promo sites for games and shows with eerie, contemplative moods.
- The screen should hint at function (terminal, concourse, corridor, gallery, etc.) without showing people or everyday clutter.

Visual philosophy:
- Emphasize emptiness, stillness and a faint sense of unease: large spaces, minimal objects, cool or desaturated colors.
- Use perspective, vanishing points and long shadows so the environment feels larger than the content actually shown, suggesting unused volume.

Material & texture:
- Base the background on deep grays and cold blues, layered with fog, noise and scanlines to evoke security camera or old VHS footage.
- Neon accents are rare and intentional (status LEDs, labels, signage), acting as the only “living” hints in an otherwise inert scene.

Interaction:
- Animation timing is slow and slightly irregular: glows flicker occasionally, scanlines drift, particles float unpredictably.
- Interaction feedback stays distant—small brightness or position shifts rather than eager, bouncy reactions, as if the system responds reluctantly.

Mood:
- Overall the mood is late-night, empty and liminal—between open and closed, online and offline, past and future.
- Users should feel like they are standing in a deserted public space hearing distant HVAC noise, rather than browsing a typical marketing page.`
  },

  // Preview templates
  previews: [
    {
      id: 'vacant-space',
      name: 'styles.visual.liminalSpace.preview.vacantSpace',
      type: 'full',
      description: {
        'zh-CN': 'VACANT_SPACE.EXE - 展示数字虚空空间，包含雾化导航、卡片网格、系统访问表单和霓虹效果',
        'en-US': 'VACANT_SPACE.EXE - Digital void space with glassmorphism navigation, card grid, system access form and neon effects'
      },
      html: liminalSpaceVacantFullPageHTML,
      styles: liminalSpaceVacantFullPageStyles,
      colorScheme: {
        'zh-CN': '深灰基调 #1a1d24/#2c3038、霓虹粉红 #ff006a、霓虹青蓝 #00ffcc、灰色文字 #5f6472/#8a8f9e/#3d4250',
        'en-US': 'Dark gray base #1a1d24/#2c3038, neon pink #ff006a, neon cyan #00ffcc, gray text #5f6472/#8a8f9e/#3d4250'
      }
    },
    {
      id: 'digital-museum',
      name: 'styles.visual.liminalSpace.preview.digitalMuseum',
      type: 'full',
      description: {
        'zh-CN': '数字博物馆档案馆 - 冷清神秘的博物馆系统，包含鼠标探照灯、档案卡片、监控摄像头、访问控制表单和系统日志',
        'en-US': 'Digital Museum Archive - Cold and mysterious museum system with mouse spotlight, archive cards, security cameras, access control form and system logs'
      },
      html: liminalSpaceMuseumFullPageHTML,
      styles: liminalSpaceMuseumFullPageStyles,
      colorScheme: {
        'zh-CN': '深灰基调 #0f1419/#1a1d24/#141820、霓虹粉红 #ff006a、霓虹青蓝 #00ffcc、灰色文字 #5f6472/#8a8f9e/#3d4250',
        'en-US': 'Dark gray base #0f1419/#1a1d24/#141820, neon pink #ff006a, neon cyan #00ffcc, gray text #5f6472/#8a8f9e/#3d4250'
      }
    }
  ]
}

// Override CustomPrompt with new Liminal Space full-page generation prompt
liminalSpace.customPrompt = {
  'zh-CN': `
你现在是一名非常熟悉「liminal space / 过渡空间」美学的资深 UI 设计师兼前端工程师，需要为一个全新页面生成一套与当前样式 /styles/preview/liminalSpace 高度一致的界面。

你的目标：在不复制现有页面具体文案和内容的前提下，生成一个「一眼能看出是同一世界观 / 同一时间线」的完整 HTML 全屏页面。你需要严格延续当前 liminalSpace 风格的空间构图、色彩倾向、光影层次和空旷氛围，只允许替换场景设定、文字内容和信息模块组合。

【使用场景（新的设定）】
- 这是一个「迷失在过渡空间档案馆 / Liminal Space Archive」的登陆页面，面向喜欢超现实摄影、氛围音乐、梦境记录的用户。
- 用户在这里浏览一组「空间入口卡片」，每一张卡片代表一种过渡空间：无人机场候机厅、夜里的购物中心走廊、空荡荡的学校楼道、长期关闭的游乐园通道等。
- 页面需要传达一种介于梦境与现实之间、略微诡异但又让人着迷的气氛：像在凌晨三点误入一栋陌生建筑，只能靠远处灯光和标识寻找方向。

【整体布局结构要求】
1. 顶部区域（Header）
   - 顶部保持简洁、略带「导引牌 / 指示牌」感觉的导航区，左侧放置品牌名称或「Liminal Archive」标题，右侧可以是简洁的导航链接和一个小的模式切换 / 语言切换入口。
   - 标题区域可以设计成类似建筑内标识牌的横向条形，带有轻微的发光或内发光边缘，好像被冷白荧光灯照亮。
   - Header 背景颜色与主背景略有区分，但不能突兀，可以通过透明度、渐变、微弱光带来实现，让人感觉是「空间的上边界」。

2. 主体区域（Main Content）
   - 主体采用左右结构或 2–3 列栅格，中央区域是一个沉浸式「主视图 / 主走廊」，两侧是入口卡片或说明模块。
   - 主视图可以是一个占据较大面积的「透视走廊区域」，在 HTML 中用一个大的 section 表示，内部用渐变背景和投影模拟远处灯带与消失在黑暗中的墙面。
   - 周围分布若干卡片，每张卡片像一扇「通往某个场所的门」，包含标题（例如「Empty Mall 02」）和简短描述（例如「You don't remember how you got here.」），以及一个轻量的按钮或链接。
   - 卡片布局需沿用当前样式中「远近透视 + 分区块」的逻辑：靠近用户的元素更大更亮，远处的元素更小、更模糊，整体保持中等信息密度而不显得拥挤。

3. 辅助区域（Sidebar / Footer）
   - 页面可以在底部或右侧设置一个细长的「状态条 / System Status」区域，用来显示例如「Ambient Noise Level」「Time Since Last Exit」「Current Floor」这类带一点叙事感的虚构状态。
   - 该区域的视觉风格仍然要遵守 liminalSpace 的基调，比如使用低饱和色块、细长的光带、分隔线和微弱的发光点来表达。
   - Footer 可以呈现很小、对比度较低的版权信息或说明文字，仿佛真正建筑中的安全标识或维护标签。

【色彩体系与空间氛围】
1. 背景与主色调
   - 全局背景使用深色但不完全黑的色值，比如 #020617、#020818、#030712 这类极深的蓝黑色，用来模拟夜间的室内或无人的走廊。
   - 局部使用偏「霓虹感 / 荧光灯感」的冷色与暖色混合，例如偏绿的荧光灯色 #a3f3c1、略显压抑的黄色 #facc15、低饱和的紫蓝色 #4f46e5，但整体对比不要太剧烈。
   - 需要通过大面积的暗色 + 局部强对比光带来营造深度，让用户感觉前方有未被完全照亮的空间。

2. 层次色块与发光区域
   - 使用大块渐变背景来模拟远处墙面与地面：例如从深蓝黑过渡到略带绿色的光带颜色，表示灯光照在墙面上形成的亮区。
   - 卡片本身可以是较暗的矩形，但在边缘或顶部有细窄的发光条，像自动售货机、紧急出口标牌或路线指示牌一样。
   - 利用低透明度色块叠加制造「雾气 / 噪点」的感觉，在文案中明确要求 LLM 通过带透明度的渐变背景或者带 blur 的容器来模拟朦胧空气感。

3. 对比与可读性
   - 虽然整体偏暗和诡异，但文字必须保持高可读性：正文字体颜色建议使用接近 #e5e7eb 或 #f9fafb 的浅色，标题可以略微偏亮且大一号。
   - 重要按钮和交互点可以使用偏饱和的荧光色或暖黄作为点缀，但面积控制在较小范围，不打破整体的空旷感。

【光影、阴影与透视】
1. 阴影风格
   - 与其强调「卡片投影」，不如强调「光源与光晕」：请在描述中让卡片使用微弱的外阴影 + 周围的模糊光带，模拟灯光溢出。
   - 某些元素可以使用内阴影（inner shadow）来表现凹陷的指示牌或屏幕，给人一种「嵌在墙里的显示器」的感觉。

2. 透视感与消失点
   - 主区域可以通过横向渐变和纵向的线性排布来暗示消失点，比如地面使用一条条细线或长条光带向远处缩小。
   - 在 Prompt 中明确指出：页面中的大部分块状元素应该遵循统一的透视方向，让用户感觉站在一个长长的通道入口。

【交互状态与动效】
1. 悬停（hover）状态
   - 卡片 hover 时不要大幅移动或变亮，而是「轻微上浮 + 边缘光增强」：例如上移 1–2px，发光条亮度提升，阴影略微变锐。
   - 某些卡片可以在 hover 时出现细小的扫描线效果或渐变移动（可以在描述中用文案引导 LLM 用 CSS 动画来模拟），但频率必须非常低，避免喧宾夺主。

2. 点击 / 按下（active）状态
   - 按钮按下时稍微变暗、略微缩小阴影范围，让人感到「触发了某个控制面板 / 门禁」。
   - 可以在文案中提示：active 态不需要明显位移，而是通过亮度、边框和阴影变化体现反馈。

3. 动画节奏
   - 动画节奏偏慢、克制，例如 200–260ms 之间的 ease-out 或 ease-in-out 过渡，更贴合梦境般的时间感。
   - 可以使用微弱的漂浮动效（very subtle floating），例如某些远处的光点缓慢闪烁，但须在 Prompt 中强调「不要制作眩晕或大范围晃动」，以免破坏可用性。

【文字与文案风格】
1. 文案气质
   - 中文与英文文案都要带一点梦境、迷路、记忆模糊的感觉，例如：「你不记得自己是怎么来到这里的」「Somewhere between your last memory and the next one」。
   - 不要使用太直白的营销语言，改用叙事化、环境描写式的文案，让用户感觉这是一个虚构世界的入口。

2. 字体与层级
   - 保持现代无衬线字体体系，标题字体略大且字距稍微拉开，给人「空间感」和「距离感」。
   - 卡片标题与正文之间留出充分的间距，让内容在视觉上有呼吸空间，对应「空旷但不空洞」的主题。

【输出技术要求】
- 使用语义化 HTML5 结构：包含 <header>、<main>、<section>、<aside>、<footer> 等标签，并根据模块分区合理命名。
- 使用 TailwindCSS 风格的原子类（例如 flex、grid、gap-8、min-h-screen、bg-gradient-to-b、from-...、to-...、text-slate-...、shadow-... 等）来构建布局和光影效果。
- 输出结果必须是一个完整页面的 HTML 结构：包括顶栏（有品牌 / 标题）、主内容区（有主走廊 / 主视觉 + 多个空间入口卡片）、至少一个辅助状态区域（sidebar 或底部状态条）。
- 样式和布局密度要与现有 liminalSpace 示例保持同一风格：暗色背景 + 局部霓虹光 + 空旷留白 + 强透视感，让人一眼可以辨认出这是「同一个宇宙」中的另一个界面。
- 不输出解释说明文字，只输出最终 HTML 结构代码，class 名称应当自然地体现 liminal space 与 transitional space 的氛围。`,
  'en-US': `
You are a senior UI designer and front-end engineer who deeply understands the "liminal space / transitional space" aesthetic. Your task is to generate a brand new full-page HTML layout that feels like a sibling of the existing /styles/preview/liminalSpace demo, without copying its exact copy or content.

Your goal: create a complete interface that clearly belongs to the same world and visual system as the current liminalSpace style. You must preserve the core principles of spatial composition, color direction, lighting, depth, and emptiness, while changing the narrative scenario, text, and information blocks.

[Scenario]
- This page is the landing interface for a "Liminal Space Archive", aimed at people who love surreal photography, ambient music, dream logs, and uncanny architecture.
- Here, the user browses a set of "portal cards", each representing a different transitional space: an empty airport gate at 3 a.m., a fluorescent-lit shopping mall corridor at night, a silent school hallway during vacation, a closed amusement park walkway, and so on.
- The mood should feel like being halfway between a dream and waking life: slightly unsettling, strangely nostalgic, and quietly mesmerizing—like getting lost in a building you've never seen before, with only distant lights and signs as clues.

[Overall Layout]
1. Header
   - Use a minimal header with a subtle "signage / wayfinding" vibe: brand or "Liminal Archive" title on the left, a few compact navigation links and a small mode or language toggle on the right.
   - The main title can appear on a horizontal strip that resembles an indoor sign board, with soft inner glow or edge glow as if lit by cold fluorescent tubes.
   - The header background should be slightly differentiated from the main background using transparency, gradient, or a faint light band, so it feels like the upper boundary of an interior space rather than a flat bar.

2. Main Content
   - Use a two- or three-column layout where the central area is a dominant "primary corridor view", and the sides host portal cards or descriptive modules.
   - Represent the primary corridor view as a large section with deep gradients and directional shadows that imply a vanishing point: the floor and walls fade into darkness, illuminated by strips of light.
   - Surround this main view with multiple cards, each acting as an entrance to a specific scene. Each card contains a title (e.g., "Empty Mall 02"), a short atmospheric description, and a minimal button or link.
   - Follow the visual logic of perspective and depth: elements closer to the viewer are larger and brighter; elements that are "farther away" are smaller, softer, and more diffuse. Maintain a medium information density with plenty of empty space.

3. Secondary Areas
   - Add a slender "status bar" or secondary area at the bottom or side for fictional system metrics: for example, "Ambient Noise Level", "Time Since Last Exit", "Current Floor", "Signal Strength".
   - This area must still follow the liminalSpace visual language: low-saturation colored bands, thin separators, small glowing indicators, and understated text.
   - The footer can show very small, low-contrast meta information or disclaimers, like building maintenance notes or safety signage, reinforcing the idea that this is a real-but-unreal facility.

[Color & Atmosphere]
1. Background & Primary Palette
   - Use very dark but not fully black background tones, such as #020617, #020818, or #030712, to simulate nocturnal indoor spaces or unoccupied corridors.
   - Introduce a mix of cold and slightly sickly warm light colors reminiscent of fluorescent bulbs and sodium lights: minty green (#a3f3c1), muted yellow (#facc15), low-saturation violet-blue (#4f46e5), etc. Keep contrast strong only around light sources.
   - Rely on large dark areas punctuated by narrow, bright light bands to create depth and emptiness.

2. Layered Color Blocks & Light Bands
   - Use large gradients to represent distant walls and floors: for example, a vertical gradient from deep navy to a greenish glow, suggesting light hitting a surface and fading out.
   - Cards can be darker rectangles with a thin glowing strip at the top or sides, referencing vending machines, emergency exit signs, or information panels embedded in walls.
   - Explicitly instruct the model to simulate haze or noise using semi-transparent overlays and blurred containers, hinting at air particles and imperfect visibility.

3. Contrast & Legibility
   - Despite the dark aesthetic, text should remain highly readable: body text in light tones close to #e5e7eb or #f9fafb, headings slightly brighter and larger.
   - Primary interactive elements can use small, concentrated accents of neon-like colors or warm yellow, but their area must be limited to preserve the sense of space and quiet.

[Light, Shadow & Perspective]
1. Shadow Treatment
   - Focus more on "light sources and halos" than on drop shadows under cards. Describe cards as having soft outer glow and surrounding light spill, rather than heavy shadows.
   - Some elements may use inner shadows to feel inset into the wall, like built-in displays or control panels.

2. Perspective & Vanishing Point
   - Emphasize a consistent perspective direction: floors and walls should imply converging lines and a vanishing point somewhere toward the center or off-center of the main hero area.
   - Use elongated horizontal light strips or floor markings that get narrower toward the back, reinforcing the impression of depth and distance.

[Interactions & Motion]
1. Hover
   - On hover, cards should not jump or become dramatically brighter. Instead, they gently lift by 1–2px and slightly intensify their glow or edge highlight.
   - For key cards, you may suggest a very subtle scanning-line or gradient-shift animation, but explicitly keep it slow and understated so it feels like quiet electronic equipment, not flashy UI chrome.

2. Active / Pressed
   - On press, buttons become slightly darker and reduce their glow, as if a control has been triggered and power is being rerouted.
   - Do not rely on large positional shifts; use brightness, border, and shadow changes to signal state transitions.

3. Timing & Rhythm
   - Transitions should be smooth and relatively slow compared to typical interfaces, around 200–260ms with ease-out or ease-in-out curves, to echo the dreamlike stretching of time.
   - Allow for extremely subtle ambient animations (faint flickers, slow pulses), but avoid anything that could cause eye strain or feel like a jump scare.

[Typography & Copywriting]
1. Narrative Tone
   - Use atmospheric, suggestive copy instead of marketing slogans. For example: "You don't remember how you got here." or "Somewhere between your last memory and the next exit."
   - Encourage bilingual microcopy (if appropriate) to reinforce the feeling of international airports or institutional spaces, but keep it minimal and quiet.

2. Hierarchy & Spacing
   - Use clean, modern sans-serif typefaces with slightly expanded letter spacing for headings to evoke distance and air.
   - Maintain generous spacing between card titles and body text, giving each block room to breathe and supporting the theme of emptiness-with-structure.

[Output Requirements]
- Output a complete HTML5 document structure using <header>, <main>, <section>, <aside>, and <footer>, with clear grouping that matches the described areas.
- Use TailwindCSS-like utility classes (e.g., min-h-screen, flex, grid, gap-8, bg-gradient-to-b, from-..., to-..., text-slate-..., shadow-..., ring-..., backdrop-blur-...) to implement layout, spacing, and light effects.
- The result must include: a top header with brand/title, a main area with a dominant corridor/hero section plus multiple liminal-space portal cards, and at least one secondary status area (sidebar or status bar/footer).
- Visually, the layout should instantly read as a sibling of the existing liminalSpace demo: dark, empty, perspective-driven, punctuated by narrow glowing elements and long corridors.
- Do not output explanations. Only return the final HTML structure, with class names and structure that clearly express the liminal space aesthetic.`
}

// Override StylePrompt with narrative Liminal Space explanation
liminalSpace.stylePrompt = {
  'zh-CN': `
角色设定：
你是一位专精于「liminal space / 过渡空间」审美的 UI 设计师。你熟悉那些空无一人的走廊、被遗忘的候机厅、深夜的商场通道、关闭的游乐场入口等场景，并能够把这类介于熟悉与陌生之间的气氛，转化为具有交互性的数字界面。

场景定位：
liminal space 风格适合用在探索类产品、氛围型展示页、艺术作品集、沉浸式体验入口、超现实叙事网站等。目标用户往往对梦境、怀旧感、废墟美学、超现实摄影感兴趣。他们希望在界面中感受到一种「正在经过某个地方，但并不打算停留」的状态——像是在连续空间中的一格过渡镜头，而不是终点站。

视觉设计理念：
这种风格的核心不在于「物品」，而在于「空间」。画面强调透视、距离感和空旷感，主角是长长的走廊、反复出现的门、重复的地砖、远处的小点光源。颜色往往偏暗、偏冷，但会用一些诡异的暖色或荧光色作为点缀，让人产生既熟悉又不安的体验。界面应该像描绘一栋真实存在的建筑，却又处处透露着时间错位和现实扭曲的细节。

材质与质感：
liminal space 并不追求华丽的材质，而是强调「略显陈旧的日常空间」。墙面可以是略微脏污的乳胶漆，地面是反光的瓷砖或磨损的地毯，天花板有一排排嵌入式灯管。你可以用大面积的渐变色与微弱的噪点来模拟这些表面，让它们看起来不是完全纯净的颜色，而是被时间侵蚀过的感觉。界面中的卡片、模块并不像独立的卡片组件，更像是墙上的告示牌、嵌入式显示屏或路牌，它们与空间融为一体。

光影与层次：
在 liminal space 风格中，光线是决定氛围的关键。通常只有少数光源，例如一排排冷白灯、一块发光导航板、远处楼梯间透出的微光。你需要通过强烈的明暗对比来营造深度：前景附近的光带非常亮，远处迅速陷入阴影。阴影不是锐利的硬边，而是大面积的模糊过渡，暗示空气中有尘埃、雾气或时间停滞的感觉。上层的光带会在地面和墙面上留下长条形的高光，形成引导视线的轨迹。

交互体验：
交互反馈应当克制而微妙，仿佛整个世界都在慢动作中运行。当用户 hover 在卡片上时，不是剧烈的放大或翻转，而是极小幅度的上浮、亮度变化或边缘光增强，好像原本静止的空间突然对你的存在做出微弱回应。点击时按钮会稍微变暗或收缩光晕，像是触发了建筑内部的某个开关。动画节奏保持轻盈、迅速但不浮夸，更多是「顺滑的移动」和「微小的位移」，而不是夸张的弹跳。整个交互过程应该给人一种细致、温柔、可亲近的感觉。

整体氛围：
liminal space 风格强调一种介于安全与不安之间的暧昧情绪。一方面，你看到的是再普通不过的公共空间：机场、商场、学校、办公楼；另一方面，完全没有人、没有时间线索、没有明确的用途说明。颜色、光线和空旷程度共同构成了一种轻微的迷失感。界面需要引导用户在这种感受中缓慢探索，让他们在「我好像来过这里」和「这里完全陌生」之间反复摇摆。

叙事与符号：
在设计这类界面时，可以大量使用暗示性的符号：重复的门牌号、指向模糊目的地的箭头、看不清内容的公告板、永远停在一个时间点的钟表。文字也应当配合这种叙事方式，多使用开放式、未完成的句子，而不是清晰的行动指令。比如「下一趟列车即将到达」这种常见提示，可以改写为「你似乎错过了某趟列车」，让用户自己在脑海中补全故事。

一致性原则：
无论新增多少页面和组件，都要围绕两个关键词思考：「过渡」和「空旷」。问自己：这个模块像是建筑中的哪一部分？它是在连接两个地点的走廊，还是在引导人们等待某件事发生的门厅？与其他模块相比，它是在前景还是在远处？光线从哪里来，如何消失？只要持续围绕这些问题做设计，所有界面即使内容不同，也会自然地保持在同一 liminal space 世界观之中。`,
  'en-US': `
Role:
You are a UI designer who specializes in the "liminal space" aesthetic. You are intimately familiar with empty corridors, forgotten waiting areas, fluorescent-lit mall hallways at night, school stairwells during vacation, and closed amusement park entries—and you know how to turn this in-between atmosphere into an interactive digital interface.

Context:
The liminalSpace style is ideal for exploratory products, mood-driven landing pages, art portfolios, immersive experience portals, and surreal storytelling sites. Users are often interested in dreams, nostalgia, ruin aesthetics, and uncanny photography. They want an interface that feels like a place they're passing through rather than a destination—a single frame from a continuous hallway, frozen somewhere between departure and arrival.

Visual Concept:
The focus of this style is not "objects" but "space". The composition emphasizes perspective, distance, and emptiness. The main characters are long corridors, repeating doorways, patterned floor tiles, and small lights in the distance. Colors tend toward dark and cool, with a few strange warm or neon accents that create a sense of familiarity mixed with unease. The UI should look like it depicts a real building, but with subtle hints that time is out of joint or reality is slightly warped.

Material & Texture:
Liminal spaces are built from ordinary, slightly worn materials: painted walls with minor stains, reflective tiles, faded carpeting, suspended ceilings with rows of recessed lights. In UI, you simulate this using large gradients, faint noise, and gentle color variations rather than flat, perfect surfaces. Interface blocks feel less like separate cards and more like embedded signage: wall-mounted displays, emergency exit panels, floor indicators, all integrated into the architecture instead of floating on top.

Light & Depth:
Light is the key to mood. There are usually only a few light sources—rows of cold fluorescent tubes, a glowing direction sign, a soft light leaking from a staircase. You create depth by combining strong localized highlights with rapid falloff into darkness. Shadows are broad and diffused, suggesting haze, dust, or time standing still. Light bands cast long reflections on the floor and walls, forming visual rails that guide the eye deeper into the scene.

Interaction:
Interactions should feel restrained and slightly delayed, as if the environment responds slowly to your presence. On hover, elements do not jump dramatically; they lift just a little, glow a bit more, or sharpen their edges—like a sign that has suddenly noticed you. On click, buttons dim subtly or contract their halo, hinting that some hidden mechanism inside the building has been toggled. Animation durations can be slightly longer than in typical UIs (around 200ms), with smooth, non-bouncy transitions.

Mood & Atmosphere:
The emotional core of liminalSpace lies between safety and unease. On the surface, everything looks mundane: airports, shopping centers, schools, office lobbies. But there are no people, no clear time-of-day cues, no obvious purpose for the space. Colors, lighting, and emptiness combine to produce a gentle sense of disorientation. The interface should encourage slow exploration, inviting users to linger in that feeling of "I might have been here before" and "I have never seen this place" at the same time.

Narrative & Symbols:
This style works well with suggestive symbolism. Repeated room numbers, arrows pointing to ambiguous destinations, bulletin boards with unreadable notices, clocks frozen at a single time—all of these can appear in microcopy and iconography. Text should be open-ended and atmospheric rather than directive: instead of telling users exactly what to do, it hints at events that might have just happened or might be about to happen. The user fills in the story.

Consistency:
Whenever you design a new screen or component in this style, keep asking two questions: "What kind of transitional space is this?" and "Where is it between?" Is this piece a hallway connecting two unknown zones, a waiting area for an event that never starts, a stairwell between floors you never see? How close is it to the viewer? Where does the light come from, and where does it fade out? By answering these questions consistently, you ensure that even very different layouts still feel like parts of a single liminalSpace universe.`
}

export default liminalSpace
