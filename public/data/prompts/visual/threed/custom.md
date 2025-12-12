# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个三维空间艺术风格的界面，利用透视、深度和立体效果创造空间体验。

**核心设计要求**

1. **3D 变换系统**
   - transform-style: preserve-3d — 启用 3D 空间
   - perspective: 1000px — 设置透视距离
   - transform: rotateX() rotateY() rotateZ() — 三轴旋转
   - transform: translateZ() — Z 轴位移创造深度

2. **3D 立方体（Cube 3D）**
   - 六面体构建（前/后/左/右/上/下）
   - 每个面使用 rotateY/rotateX + translateZ 定位
   - 连续旋转动画
   - 示例：
     \`\`\`css
     .cube {
       width: 200px;
       height: 200px;
       position: relative;
       transform-style: preserve-3d;
       animation: rotateCube 12s infinite linear;
     }
     .cube-front  { transform: rotateY(0deg) translateZ(100px); }
     .cube-back   { transform: rotateY(180deg) translateZ(100px); }
     .cube-right  { transform: rotateY(90deg) translateZ(100px); }
     .cube-left   { transform: rotateY(-90deg) translateZ(100px); }
     .cube-top    { transform: rotateX(90deg) translateZ(100px); }
     .cube-bottom { transform: rotateX(-90deg) translateZ(100px); }

     @keyframes rotateCube {
       0%   { transform: rotateX(0deg) rotateY(0deg); }
       100% { transform: rotateX(360deg) rotateY(360deg); }
     }
     \`\`\`

**配色方案（空间渐变）**

主色调：
- 深空蓝：#0f2027, #203a43, #2c5364
- 紫色系：#667eea, #764ba2, #8e2de2
- 青色系：#4facfe, #00f2fe, #43e97b

中性色：
- 背景深色：#0f0f23, #1a1a2e
- 高光：rgba(255, 255, 255, 0.1-0.3)

**关键 CSS 类示例**

\`\`\`css
/* 3D 容器基础 */
.threed-container {
  perspective: 1000px;
  transform-style: preserve-3d;
}

/* 等距卡片 */
.isometric-card {
  transform: rotateX(30deg) rotateY(45deg);
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.isometric-card:hover {
  transform: rotateX(30deg) rotateY(45deg) translateY(-20px);
}

/* 视差层 */
.parallax-scene {
  perspective: 1px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* 深度卡片 */
.depth-stack {
  position: relative;
  transform-style: preserve-3d;
}

.depth-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* 浮动元素 */
.floating-ui {
  animation: gentleFloat 4s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* 3D 立方体 */
.cube-3d {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: spin3d 10s infinite linear;
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin3d {
  0%   { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}
\`\`\`

**重要提示**
- perspective 值建议 800px-1200px
- preserve-3d 必须在父元素设置
- translateZ 配合 scale 补偿透视缩小
- 旋转角度建议使用 30deg/45deg/90deg
- 浏览器兼容：需要 -webkit- 前缀

---

## English Version (en-US)

Please create a 3D Spatial Art style interface using TailwindCSS, creating spatial experiences through perspective, depth, and three-dimensional effects.

**Core Design Requirements**

1. **3D Transform System**
   - transform-style: preserve-3d — Enable 3D space
   - perspective: 1000px — Set perspective distance
   - transform: rotateX() rotateY() rotateZ() — Three-axis rotation
   - transform: translateZ() — Z-axis translation creates depth

2. **3D Cube**
   - Hexahedron construction (front/back/left/right/top/bottom)
   - Each face positioned using rotateY/rotateX + translateZ
   - Continuous rotation animation
   - Example:
     \`\`\`css
     .cube {
       width: 200px;
       height: 200px;
       position: relative;
       transform-style: preserve-3d;
       animation: rotateCube 12s infinite linear;
     }
     .cube-front  { transform: rotateY(0deg) translateZ(100px); }
     .cube-back   { transform: rotateY(180deg) translateZ(100px); }
     .cube-right  { transform: rotateY(90deg) translateZ(100px); }
     .cube-left   { transform: rotateY(-90deg) translateZ(100px); }
     .cube-top    { transform: rotateX(90deg) translateZ(100px); }
     .cube-bottom { transform: rotateX(-90deg) translateZ(100px); }

     @keyframes rotateCube {
       0%   { transform: rotateX(0deg) rotateY(0deg); }
       100% { transform: rotateX(360deg) rotateY(360deg); }
     }
     \`\`\`

**Color Scheme (Spatial Gradients)**

Primary colors:
- Deep space blue: #0f2027, #203a43, #2c5364
- Purple series: #667eea, #764ba2, #8e2de2
- Cyan series: #4facfe, #00f2fe, #43e97b

Neutral colors:
- Dark backgrounds: #0f0f23, #1a1a2e
- Highlights: rgba(255, 255, 255, 0.1-0.3)

**Key CSS Class Examples**

\`\`\`css
/* 3D Container Base */
.threed-container {
  perspective: 1000px;
  transform-style: preserve-3d;
}

/* 3D Cube */
.cube-3d {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: spin3d 10s infinite linear;
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin3d {
  0%   { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}
\`\`\`

**Important Notes**
- perspective value recommended: 800px-1200px
- preserve-3d must be set on parent element
- translateZ with scale compensates perspective shrinkage
- Rotation angles recommended: 30deg/45deg/90deg
- Browser compatibility: Requires -webkit- prefix

---

**3D Effect Implementation Guide**

**CSS 3D Transform Fundamentals**:
- Use `perspective` property on parent container (typically 800-1200px) to enable 3D space
- Apply `transform-style: preserve-3d` to maintain 3D positioning in nested elements
- Combine multiple transforms: `rotateX()`, `rotateY()`, `rotateZ()`, `translateZ()`
- Use `backface-visibility: hidden` to improve performance and hide element backs during rotation

**Realistic Lighting & Shadows**:
- Implement multi-layer box-shadows to simulate realistic light sources
- Use gradients on pseudo-elements to create highlight and shadow areas
- Apply CSS filters (brightness, contrast) to simulate lighting changes
- Create ambient occlusion effects using subtle dark gradients at element edges
- Position shadows based on consistent light source direction (usually top-left)

**3D Card Interactions**:
- Implement mouse-tracking perspective shifts using JavaScript for dynamic 3D feel
- Create flip animations using rotateY(180deg) with transition timing
- Add depth on hover by translating elements on Z-axis (translateZ(20-50px))
- Use scale transforms combined with perspective for zoom effects
- Implement smooth transitions (300-600ms) with ease-out easing

**Performance Best Practices**:
- Use `will-change: transform` on elements that will animate, but remove after animation completes
- Limit number of 3D transformed elements on screen (max 10-15) to maintain 60fps
- Implement intersection observer to only animate visible 3D elements
- Use CSS containment (`contain: layout paint`) on 3D containers
- Test on mid-range devices to ensure smooth performance
- Reduce 3D complexity on mobile (use 2D alternatives or simpler effects)

**Cross-Browser Compatibility**:
- Test 3D transforms across browsers as rendering quality varies (Chrome typically best)
- Provide 2D fallbacks for older browsers that don't support 3D transforms
- Use vendor prefixes for experimental 3D properties
- Test on Safari as it may have different performance characteristics
- Ensure transforms work correctly on touch devices with proper event handling

**Accessibility Considerations**:
- Provide `prefers-reduced-motion` alternatives with minimal or no 3D effects
- Ensure 3D effects don't interfere with content readability
- Maintain focus indicators visibility during 3D transformations
- Avoid rapid 3D rotations that could trigger motion sickness
- Ensure all content remains accessible when viewed from different angles

