// Single template module: Nature — Particle System
// 粒子系统 - 动态浮动的粒子效果

// ✨ 稳定的空数組引用（防止 useMemo 無限循環）
const EMPTY_PREVIEWS = [];

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './ParticleFullPage';

export const particle = {
  id: 'visual-nature-particle',
  title: 'styles.visual.particle.title',
  description: 'styles.visual.particle.description',

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 和原生 CSS 创建一个粒子系统（Particle System）风格的界面，通过多个发光粒子、动态连接线和深空背景，营造未来科技感。

**核心设计要求**

1. **多粒子元素系统**
   - 创建 15-20 个粒子元素，使用绝对定位随机分布在容器内
   - 粒子大小：8-12px，使用 \`border-radius: 50%\` 创建完美圆形
   - 颜色分层：
     * 主色粒子（60%）：\`rgba(0, 212, 255, 0.9)\` 青蓝色
     * 辅色粒子（30%）：\`rgba(139, 92, 246, 0.85)\` 紫色
     * 点缀粒子（10%）：\`rgba(34, 211, 238, 0.8)\` 青色
   - CSS 示例：
   \`\`\`css
   .particle {
     position: absolute;
     width: 10px;
     height: 10px;
     border-radius: 50%;
     background: rgba(0, 212, 255, 0.9);
   }
   \`\`\`

2. **三层发光效果**
   - 使用多层 \`box-shadow\` 创建强烈发光效果
   - 内层：10px 模糊，80% 不透明度
   - 中层：20px 模糊，50% 不透明度
   - 外层：30px 模糊，30% 不透明度
   - CSS 示例：
   \`\`\`css
   .particle {
     box-shadow:
       0 0 10px rgba(0, 212, 255, 0.8),
       0 0 20px rgba(0, 212, 255, 0.5),
       0 0 30px rgba(0, 212, 255, 0.3);
   }
   \`\`\`

3. **快速浮动动画**
   - 使用 \`@keyframes\` 定义 3 种不同的浮动轨迹
   - 动画时长：4-5 秒（快速可见）
   - 运动幅度：X 轴 ±60-80px，Y 轴 ±80-120px
   - 同时改变 \`scale\`（0.7-1.3）和 \`opacity\`（0.6-1.0）
   - 使用 \`animation-delay\`（0-4 秒）错开粒子启动时间
   - CSS 示例：
   \`\`\`css
   @keyframes particleFloat {
     0%, 100% {
       transform: translate3d(0, 0, 0) scale(1);
       opacity: 0.9;
     }
     25% {
       transform: translate3d(60px, -80px, 0) scale(1.3);
       opacity: 1;
     }
     50% {
       transform: translate3d(-70px, -100px, 0) scale(0.7);
       opacity: 0.6;
     }
     75% {
       transform: translate3d(80px, -50px, 0) scale(1.1);
       opacity: 0.95;
     }
   }

   .particle-1 {
     top: 15%;
     left: 20%;
     animation: particleFloat 4.5s ease-in-out infinite;
   }

   .particle-2 {
     top: 30%;
     left: 75%;
     animation: particleFloat 4.8s ease-in-out infinite 1s;
   }
   \`\`\`

4. **粒子连接线效果**
   - 使用细长的 \`div\` 元素模拟连接线（宽度 150-200px，高度 1px）
   - 使用 \`linear-gradient\` 创建渐隐效果
   - 颜色：\`rgba(0, 212, 255, 0.15-0.25)\`
   - 使用 \`transform: rotate()\` 调整角度（15-45 度）
   - 添加淡入淡出脉冲动画（3 秒循环）
   - CSS 示例：
   \`\`\`css
   .connection {
     position: absolute;
     height: 1px;
     width: 180px;
     background: linear-gradient(90deg,
       transparent,
       rgba(0, 212, 255, 0.2),
       transparent
     );
     transform: rotate(25deg);
     transform-origin: left center;
     animation: connectionPulse 3s ease-in-out infinite;
   }

   @keyframes connectionPulse {
     0%, 100% { opacity: 0.1; }
     50% { opacity: 0.35; }
   }
   \`\`\`

5. **深空背景 + 星点装饰**
   - 背景：\`radial-gradient(circle, #1a1f3a 0%, #0a0e27 100%)\`
   - 使用伪元素 \`::before\` 创建 20-30 个星点
   - 星点：1-2px 白色圆点，使用 \`radial-gradient\` 绘制
   - 星点透明度：0.4-0.9（随机）
   - CSS 示例：
   \`\`\`css
   .particle-container {
     background: radial-gradient(circle at 50% 50%,
       #1a1f3a 0%,
       #0a0e27 100%
     );
     position: relative;
     overflow: hidden;
   }

   .particle-container::before {
     content: '';
     position: absolute;
     inset: 0;
     background-image:
       radial-gradient(circle at 15% 20%, rgba(255,255,255,0.8) 1px, transparent 1px),
       radial-gradient(circle at 85% 15%, rgba(255,255,255,0.6) 1px, transparent 1px),
       radial-gradient(circle at 30% 70%, rgba(255,255,255,0.7) 1px, transparent 1px);
     opacity: 0.4;
     pointer-events: none;
   }
   \`\`\`

6. **中心光晕效果**
   - 创建一个居中的圆形光晕（400px 直径）
   - 使用 \`radial-gradient\` 从青蓝色渐变到透明
   - 添加呼吸动画（4 秒循环，scale 1-1.1）
   - CSS 示例：
   \`\`\`css
   .glow {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 400px;
     height: 400px;
     transform: translate(-50%, -50%);
     background: radial-gradient(circle,
       rgba(0, 212, 255, 0.15) 0%,
       transparent 70%
     );
     border-radius: 50%;
     animation: glowPulse 4s ease-in-out infinite;
   }

   @keyframes glowPulse {
     0%, 100% {
       opacity: 0.5;
       transform: translate(-50%, -50%) scale(1);
     }
     50% {
       opacity: 0.8;
       transform: translate(-50%, -50%) scale(1.1);
     }
   }
   \`\`\`

7. **标题发光效果**
   - 使用多层 \`text-shadow\` 创建霓虹灯效果
   - 4 层发光：10px / 20px / 40px / 80px 模糊半径
   - 颜色与粒子主色相同：\`rgba(0, 212, 255, ...)\`
   - 添加呼吸动画增强发光效果
   - CSS 示例：
   \`\`\`css
   .title {
     color: #fff;
     text-shadow:
       0 0 10px rgba(0, 212, 255, 0.8),
       0 0 20px rgba(0, 212, 255, 0.6),
       0 0 40px rgba(0, 212, 255, 0.4),
       0 0 80px rgba(0, 212, 255, 0.2);
     animation: titleGlow 3s ease-in-out infinite;
   }

   @keyframes titleGlow {
     0%, 100% {
       text-shadow:
         0 0 10px rgba(0, 212, 255, 0.8),
         0 0 20px rgba(0, 212, 255, 0.6),
         0 0 40px rgba(0, 212, 255, 0.4),
         0 0 80px rgba(0, 212, 255, 0.2);
     }
     50% {
       text-shadow:
         0 0 15px rgba(0, 212, 255, 1),
         0 0 30px rgba(0, 212, 255, 0.8),
         0 0 60px rgba(0, 212, 255, 0.6),
         0 0 120px rgba(0, 212, 255, 0.3);
     }
   }
   \`\`\`

**配色方案（深空科技主题）**

主色调：
- 青蓝色：#00d4ff, rgba(0, 212, 255, 0.9)
- 紫色：#8b5cf6, rgba(139, 92, 246, 0.85)
- 青色：#22d3ee, rgba(34, 211, 238, 0.8)

背景色：
- 深蓝黑：#0a0e27, #1a1f3a

中性色：
- 白色（星点）：rgba(255, 255, 255, 0.4-0.9)
- 白色（文字）：#ffffff, #e2e8f0

**关键 CSS 类示例**

\`\`\`css
/* 完整粒子示例 */
.particle-system {
  position: relative;
  min-height: 500px;
  background: radial-gradient(circle at 50% 50%, #1a1f3a 0%, #0a0e27 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 粒子容器 */
.particle-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* 单个粒子 */
.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.9);
  box-shadow:
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.5),
    0 0 30px rgba(0, 212, 255, 0.3);
  will-change: transform, opacity;
  animation: particleFloat 4.5s ease-in-out infinite;
}

/* 连接线 */
.connection {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
  animation: connectionPulse 3s ease-in-out infinite;
  pointer-events: none;
}

/* 标题容器 */
.title-container {
  position: relative;
  z-index: 10;
  text-align: center;
  pointer-events: none;
}

.title-container h3 {
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  text-shadow:
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.6),
    0 0 40px rgba(0, 212, 255, 0.4),
    0 0 80px rgba(0, 212, 255, 0.2);
  animation: titleGlow 3s ease-in-out infinite;
}
\`\`\`

**响应式设计**

\`\`\`css
/* 桌面：18-20 个粒子 */
@media (min-width: 769px) {
  .particle { display: block; }
}

/* 平板：12 个粒子 */
@media (max-width: 768px) {
  .particle:nth-child(n+13) { display: none; }
  .connection:nth-child(n+7) { display: none; }
}

/* 手机：8 个粒子 */
@media (max-width: 480px) {
  .particle {
    width: 6px;
    height: 6px;
  }
  .particle:nth-child(n+9) { display: none; }
  .connection:nth-child(n+5) { display: none; }
  .title-container h3 {
    font-size: 28px;
  }
}
\`\`\`

**性能优化建议**

1. 使用 \`transform3d()\` 而非 \`transform()\` 启用硬件加速
2. 添加 \`will-change: transform\` 提示浏览器优化
3. 粒子数量控制在 20 个以内
4. 使用 CSS 动画而非 JavaScript
5. 连接线使用静态 div 而非动态计算

**重要提示**

- 粒子必须使用绝对定位，随机分布在容器内（避免规则网格）
- 动画时长控制在 3-5 秒，确保快速可见
- 发光效果必须使用多层 \`box-shadow\`，单层效果不足
- 连接线使用渐变而非纯色，创造淡入淡出效果
- 背景必须是深色（深蓝黑）以凸显粒子发光
- 使用 \`will-change\` 和 \`transform3d\` 优化性能
- 响应式设计：桌面 18+ 粒子，手机 8 粒子
- 所有动画使用 \`ease-in-out\` 时间函数`,

    'en-US': `Please create a Particle System style interface using TailwindCSS and native CSS, featuring multiple glowing particles, dynamic connection lines, and a deep space background to create a futuristic tech atmosphere.

**Core Design Requirements**

1. **Multi-Particle Element System**
   - Create 15-20 particle elements, randomly distributed using absolute positioning
   - Particle size: 8-12px, use \`border-radius: 50%\` for perfect circles
   - Color layering:
     * Primary particles (60%): \`rgba(0, 212, 255, 0.9)\` cyan-blue
     * Secondary particles (30%): \`rgba(139, 92, 246, 0.85)\` purple
     * Accent particles (10%): \`rgba(34, 211, 238, 0.8)\` cyan
   - CSS example:
   \`\`\`css
   .particle {
     position: absolute;
     width: 10px;
     height: 10px;
     border-radius: 50%;
     background: rgba(0, 212, 255, 0.9);
   }
   \`\`\`

2. **Three-Layer Glow Effect**
   - Use multi-layer \`box-shadow\` to create strong glow
   - Inner layer: 10px blur, 80% opacity
   - Middle layer: 20px blur, 50% opacity
   - Outer layer: 30px blur, 30% opacity
   - CSS example:
   \`\`\`css
   .particle {
     box-shadow:
       0 0 10px rgba(0, 212, 255, 0.8),
       0 0 20px rgba(0, 212, 255, 0.5),
       0 0 30px rgba(0, 212, 255, 0.3);
   }
   \`\`\`

3. **Fast Floating Animation**
   - Define 3 different floating trajectories using \`@keyframes\`
   - Animation duration: 4-5 seconds (quickly visible)
   - Movement range: X-axis ±60-80px, Y-axis ±80-120px
   - Simultaneously change \`scale\` (0.7-1.3) and \`opacity\` (0.6-1.0)
   - Use \`animation-delay\` (0-4 seconds) to stagger particle start times
   - CSS example:
   \`\`\`css
   @keyframes particleFloat {
     0%, 100% {
       transform: translate3d(0, 0, 0) scale(1);
       opacity: 0.9;
     }
     25% {
       transform: translate3d(60px, -80px, 0) scale(1.3);
       opacity: 1;
     }
     50% {
       transform: translate3d(-70px, -100px, 0) scale(0.7);
       opacity: 0.6;
     }
     75% {
       transform: translate3d(80px, -50px, 0) scale(1.1);
       opacity: 0.95;
     }
   }

   .particle-1 {
     top: 15%;
     left: 20%;
     animation: particleFloat 4.5s ease-in-out infinite;
   }

   .particle-2 {
     top: 30%;
     left: 75%;
     animation: particleFloat 4.8s ease-in-out infinite 1s;
   }
   \`\`\`

4. **Particle Connection Lines**
   - Use thin \`div\` elements to simulate connection lines (width 150-200px, height 1px)
   - Use \`linear-gradient\` to create fade effect
   - Color: \`rgba(0, 212, 255, 0.15-0.25)\`
   - Use \`transform: rotate()\` to adjust angles (15-45 degrees)
   - Add fade-in/fade-out pulse animation (3-second cycle)
   - CSS example:
   \`\`\`css
   .connection {
     position: absolute;
     height: 1px;
     width: 180px;
     background: linear-gradient(90deg,
       transparent,
       rgba(0, 212, 255, 0.2),
       transparent
     );
     transform: rotate(25deg);
     transform-origin: left center;
     animation: connectionPulse 3s ease-in-out infinite;
   }

   @keyframes connectionPulse {
     0%, 100% { opacity: 0.1; }
     50% { opacity: 0.35; }
   }
   \`\`\`

5. **Deep Space Background + Starfield**
   - Background: \`radial-gradient(circle, #1a1f3a 0%, #0a0e27 100%)\`
   - Use \`::before\` pseudo-element to create 20-30 star points
   - Stars: 1-2px white dots, drawn with \`radial-gradient\`
   - Star opacity: 0.4-0.9 (random)
   - CSS example:
   \`\`\`css
   .particle-container {
     background: radial-gradient(circle at 50% 50%,
       #1a1f3a 0%,
       #0a0e27 100%
     );
     position: relative;
     overflow: hidden;
   }

   .particle-container::before {
     content: '';
     position: absolute;
     inset: 0;
     background-image:
       radial-gradient(circle at 15% 20%, rgba(255,255,255,0.8) 1px, transparent 1px),
       radial-gradient(circle at 85% 15%, rgba(255,255,255,0.6) 1px, transparent 1px),
       radial-gradient(circle at 30% 70%, rgba(255,255,255,0.7) 1px, transparent 1px);
     opacity: 0.4;
     pointer-events: none;
   }
   \`\`\`

6. **Central Glow Effect**
   - Create centered circular glow (400px diameter)
   - Use \`radial-gradient\` from cyan-blue to transparent
   - Add breathing animation (4-second cycle, scale 1-1.1)
   - CSS example:
   \`\`\`css
   .glow {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 400px;
     height: 400px;
     transform: translate(-50%, -50%);
     background: radial-gradient(circle,
       rgba(0, 212, 255, 0.15) 0%,
       transparent 70%
     );
     border-radius: 50%;
     animation: glowPulse 4s ease-in-out infinite;
   }

   @keyframes glowPulse {
     0%, 100% {
       opacity: 0.5;
       transform: translate(-50%, -50%) scale(1);
     }
     50% {
       opacity: 0.8;
       transform: translate(-50%, -50%) scale(1.1);
     }
   }
   \`\`\`

7. **Title Glow Effect**
   - Use multi-layer \`text-shadow\` to create neon effect
   - 4 glow layers: 10px / 20px / 40px / 80px blur radius
   - Color matches particle primary: \`rgba(0, 212, 255, ...)\`
   - Add breathing animation to enhance glow
   - CSS example:
   \`\`\`css
   .title {
     color: #fff;
     text-shadow:
       0 0 10px rgba(0, 212, 255, 0.8),
       0 0 20px rgba(0, 212, 255, 0.6),
       0 0 40px rgba(0, 212, 255, 0.4),
       0 0 80px rgba(0, 212, 255, 0.2);
     animation: titleGlow 3s ease-in-out infinite;
   }

   @keyframes titleGlow {
     0%, 100% {
       text-shadow:
         0 0 10px rgba(0, 212, 255, 0.8),
         0 0 20px rgba(0, 212, 255, 0.6),
         0 0 40px rgba(0, 212, 255, 0.4),
         0 0 80px rgba(0, 212, 255, 0.2);
     }
     50% {
       text-shadow:
         0 0 15px rgba(0, 212, 255, 1),
         0 0 30px rgba(0, 212, 255, 0.8),
         0 0 60px rgba(0, 212, 255, 0.6),
         0 0 120px rgba(0, 212, 255, 0.3);
     }
   }
   \`\`\`

**Color Scheme (Deep Space Tech Theme)**

Primary colors:
- Cyan-blue: #00d4ff, rgba(0, 212, 255, 0.9)
- Purple: #8b5cf6, rgba(139, 92, 246, 0.85)
- Cyan: #22d3ee, rgba(34, 211, 238, 0.8)

Background colors:
- Deep blue-black: #0a0e27, #1a1f3a

Neutral colors:
- White (stars): rgba(255, 255, 255, 0.4-0.9)
- White (text): #ffffff, #e2e8f0

**Key CSS Class Examples**

\`\`\`css
/* Complete particle system example */
.particle-system {
  position: relative;
  min-height: 500px;
  background: radial-gradient(circle at 50% 50%, #1a1f3a 0%, #0a0e27 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Particle container */
.particle-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* Individual particle */
.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.9);
  box-shadow:
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.5),
    0 0 30px rgba(0, 212, 255, 0.3);
  will-change: transform, opacity;
  animation: particleFloat 4.5s ease-in-out infinite;
}

/* Connection line */
.connection {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
  animation: connectionPulse 3s ease-in-out infinite;
  pointer-events: none;
}

/* Title container */
.title-container {
  position: relative;
  z-index: 10;
  text-align: center;
  pointer-events: none;
}

.title-container h3 {
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  text-shadow:
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.6),
    0 0 40px rgba(0, 212, 255, 0.4),
    0 0 80px rgba(0, 212, 255, 0.2);
  animation: titleGlow 3s ease-in-out infinite;
}
\`\`\`

**Responsive Design**

\`\`\`css
/* Desktop: 18-20 particles */
@media (min-width: 769px) {
  .particle { display: block; }
}

/* Tablet: 12 particles */
@media (max-width: 768px) {
  .particle:nth-child(n+13) { display: none; }
  .connection:nth-child(n+7) { display: none; }
}

/* Mobile: 8 particles */
@media (max-width: 480px) {
  .particle {
    width: 6px;
    height: 6px;
  }
  .particle:nth-child(n+9) { display: none; }
  .connection:nth-child(n+5) { display: none; }
  .title-container h3 {
    font-size: 28px;
  }
}
\`\`\`

**Performance Optimization Tips**

1. Use \`transform3d()\` instead of \`transform()\` to enable hardware acceleration
2. Add \`will-change: transform\` to hint browser optimization
3. Keep particle count under 20
4. Use CSS animations instead of JavaScript
5. Use static divs for connection lines instead of dynamic calculation

**Important Notes**

- Particles must use absolute positioning, randomly distributed in container (avoid regular grid)
- Animation duration 3-5 seconds for quick visibility
- Glow effect must use multi-layer \`box-shadow\`, single layer insufficient
- Connection lines use gradients not solid colors for fade effect
- Background must be dark (deep blue-black) to highlight particle glow
- Use \`will-change\` and \`transform3d\` for performance
- Responsive design: 18+ particles desktop, 8 particles mobile
- All animations use \`ease-in-out\` timing function`
  },

  // 模板級 stylePrompt：描述粒子場景的視覺氛圍与使用方式
  stylePrompt: {
    'zh-CN': `角色：你是一位擅長设計「粒子背景与星空效果」的 UI 设計師，需要用大量細小發光點營造科技感或夜空氛圍。

场景定位：
- 適用於科技产品首页、Landing Page 背景、数据或開發者平台的裝飾层。
- 粒子應該作為襯底，為內容增加活力与深度，而不是主角。

视觉设计理念：
- 使用大量尺寸接近的小圓點，以不規則但平衡的分佈方式填滿画面，避免出現明显圖案或网格。
- 透過透明度与模糊控制，让部分粒子更亮、更近，部分更暗、更遠，營造三維空間感。

材质与质感：
- 粒子本身多為純白或接近主題色的淺色，搭配細緻的外發光阴影。
- 背景可以是深色（类似宇宙 / 終端機）或柔和漸变，以凸显粒子的光點效果。

交互体验：
- 粒子運動節奏應該輕盈且隨機，像漂浮的塵埃或微小光點，而非快速閃爍。
- 若加入游标或滾動交互，只让局部粒子被「推開」或略微聚集，保持整体安静感。

氛围营造：
- 粒子背景應让人联想到夜空、数据流或能量場，既動態又不吵雜。
- 適合用來為冷静的介面增加一层柔和、未來感的「空氣」。`,

    'en-US': `Role: You are a UI designer focused on particle fields and starry backgrounds, using many tiny glowing dots to suggest technology or night-sky moods.

Scene:
- Works well as a background layer for tech product homepages, landing pages, or developer/data platforms.
- Particles should act as a supporting layer, adding energy and depth without competing with primary content.

Visual philosophy:
- Fill the scene with many similarly small circles, distributed irregularly but with overall balance so no obvious grid appears.
- Use opacity and subtle blur to push some particles forward and others backward, creating a sense of three-dimensional space.

Material & texture:
- Particles are mostly white or very light tints of the brand color, each with soft outer glow shadows.
- Backgrounds are typically dark (cosmic / terminal-like) or soft gradients so the lights stand out clearly.

Interaction:
- Motion should feel light and random, like drifting dust or tiny fireflies, not aggressive flashing.
- If cursor or scroll interaction is added, only local groups of particles should shift or cluster slightly to keep the scene calm.

Mood:
- The overall scene should evoke starfields, data streams or energy fields: quietly dynamic and subtly futuristic.
- It is ideal for adding a breathable, lively layer to otherwise minimal or serious layouts.`
  },

  demoHTML,
  customStyles,

  // Full page preview (Home Office webpage with 90 particles)
  fullPageHTML,
  fullPageStyles,
  previews: EMPTY_PREVIEWS,  // ✨ 使用稳定的空数組引用
};

export default particle;
