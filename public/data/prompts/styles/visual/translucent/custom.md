# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个透明质感风格的界面，通过透明度、背景模糊和光影穿透创造层次丰富的视觉效果。

**核心设计要求**

1. **透明度层级系统**
   - 使用 rgba 控制透明度：\`background: rgba(255, 255, 255, 0.1)\`
   - 透明度范围：0.05（极浅） - 0.2（较深）
   - 示例：
     \`\`\`css
     .glass-light { background: rgba(255, 255, 255, 0.05); }
     .glass-medium { background: rgba(255, 255, 255, 0.1); }
     .glass-heavy { background: rgba(255, 255, 255, 0.15); }
     \`\`\`

2. **背景模糊效果**
   - 使用 backdrop-filter 实现背景虚化
   - 模糊半径：10px（轻微） - 30px（强烈）
   - 示例：
     \`\`\`css
     .glass-blur {
       backdrop-filter: blur(20px);
       -webkit-backdrop-filter: blur(20px); /* Safari 兼容 */
     }
     \`\`\`

3. **边缘光晕和描边**
   - 使用半透明边框创建光感：\`border: 1px solid rgba(255, 255, 255, 0.2)\`
   - 边框透明度：0.1 - 0.3
   - 可选渐变边框：
     \`\`\`css
     .glass-border {
       border: 1px solid transparent;
       background-image: linear-gradient(white, white),
                         linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
       background-origin: border-box;
       background-clip: padding-box, border-box;
     }
     \`\`\`

4. **柔和阴影系统**
   - 使用低透明度阴影：\`box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)\`
   - 阴影参数：
     - 水平偏移：0
     - 垂直偏移：8px - 32px
     - 模糊半径：16px - 64px
     - 阴影颜色：rgba(0, 0, 0, 0.05 - 0.15)
   - 示例：
     \`\`\`css
     .glass-shadow {
       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                   0 2px 8px rgba(0, 0, 0, 0.05);
     }
     \`\`\`

5. **多层叠加技巧**
   - 透明层之间的间距：16px - 24px
   - 使用 z-index 管理层级（10, 20, 30...）
   - 每层透明度递增：0.05 → 0.1 → 0.15
   - 示例：
     \`\`\`css
     .glass-layer-1 {
       background: rgba(255, 255, 255, 0.05);
       z-index: 10;
     }
     .glass-layer-2 {
       background: rgba(255, 255, 255, 0.1);
       z-index: 20;
       margin-top: 16px;
     }
     \`\`\`

6. **圆角和形状**
   - 使用较大圆角：\`border-radius: 16px - 24px\`
   - 避免直角，保持柔和感
   - 特殊形状可使用 \`clip-path\`

7. **背景建议**
   - 需要深色或渐变背景衬托
   - 推荐背景：
     \`\`\`css
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
     \`\`\`

**配色方案（清透质感）**

主色调：
- 白色透明：rgba(255, 255, 255, 0.05-0.2)
- 边框高光：rgba(255, 255, 255, 0.1-0.3)

背景色（用于衬托）：
- 深紫渐变：#667eea → #764ba2
- 蓝紫渐变：#667eea → #764ba2 → #f093fb → #4facfe
- 深蓝：#1e3a8a → #1e40af

阴影色：
- 柔和黑：rgba(0, 0, 0, 0.05-0.15)

**关键 CSS 类示例**

\`\`\`css
/* 玻璃态卡片 */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 32px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

/* 玻璃态按钮 */
.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 24px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}

.glass-button:active {
  transform: scale(0.98);
}

/* 玻璃态输入框 */
.glass-input {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 16px;
  width: 100%;
  transition: all 0.3s ease;
}

.glass-input:focus {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  outline: none;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* 玻璃态容器 */
.glass-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
\`\`\`

**Tailwind CSS 配置**

如使用 Tailwind CSS，添加以下配置：

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '10px',
        lg: '20px',
        xl: '30px',
      },
    },
  },
  plugins: [],
}
\`\`\`

Tailwind 类示例：
\`\`\`html
<div class="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-8">
  <!-- 玻璃态卡片内容 -->
</div>
\`\`\`

**重要提示**
- 必须有深色或渐变背景衬托，否则透明效果不明显
- backdrop-filter 在 Safari 需要 -webkit- 前缀
- 透明度不宜过高（避免超过 0.3），否则失去玻璃质感
- 边框透明度应低于背景透明度，保持细腻感
- 避免使用强烈色彩，保持清透感
- 圆角半径建议 12px-24px 之间，避免过于锐利
- 阴影颜色使用黑色低透明度，不要使用彩色阴影


---

## English Version (en-US)

Please create a Translucent style interface using TailwindCSS, creating rich layered visual effects through transparency, background blur, and light penetration.

**Core Design Requirements**

1. **Transparency Hierarchy System**
   - Use rgba to control transparency: \`background: rgba(255, 255, 255, 0.1)\`
   - Transparency range: 0.05 (very light) - 0.2 (heavier)
   - Examples:
     \`\`\`css
     .glass-light { background: rgba(255, 255, 255, 0.05); }
     .glass-medium { background: rgba(255, 255, 255, 0.1); }
     .glass-heavy { background: rgba(255, 255, 255, 0.15); }
     \`\`\`

2. **Background Blur Effects**
   - Use backdrop-filter for background blur
   - Blur radius: 10px (subtle) - 30px (strong)
   - Example:
     \`\`\`css
     .glass-blur {
       backdrop-filter: blur(20px);
       -webkit-backdrop-filter: blur(20px); /* Safari compatibility */
     }
     \`\`\`

3. **Edge Glow and Borders**
   - Use semi-transparent borders for light effect: \`border: 1px solid rgba(255, 255, 255, 0.2)\`
   - Border opacity: 0.1 - 0.3
   - Optional gradient border:
     \`\`\`css
     .glass-border {
       border: 1px solid transparent;
       background-image: linear-gradient(white, white),
                         linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
       background-origin: border-box;
       background-clip: padding-box, border-box;
     }
     \`\`\`

4. **Soft Shadow System**
   - Use low opacity shadows: \`box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)\`
   - Shadow parameters:
     - Horizontal offset: 0
     - Vertical offset: 8px - 32px
     - Blur radius: 16px - 64px
     - Shadow color: rgba(0, 0, 0, 0.05 - 0.15)
   - Example:
     \`\`\`css
     .glass-shadow {
       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                   0 2px 8px rgba(0, 0, 0, 0.05);
     }
     \`\`\`

5. **Multi-layer Stacking**
   - Spacing between transparent layers: 16px - 24px
   - Use z-index to manage hierarchy (10, 20, 30...)
   - Increase opacity per layer: 0.05 → 0.1 → 0.15
   - Example:
     \`\`\`css
     .glass-layer-1 {
       background: rgba(255, 255, 255, 0.05);
       z-index: 10;
     }
     .glass-layer-2 {
       background: rgba(255, 255, 255, 0.1);
       z-index: 20;
       margin-top: 16px;
     }
     \`\`\`

6. **Border Radius and Shapes**
   - Use larger border radius: \`border-radius: 16px - 24px\`
   - Avoid sharp corners, maintain softness
   - Special shapes can use \`clip-path\`

7. **Background Recommendations**
   - Requires dark or gradient background for contrast
   - Recommended backgrounds:
     \`\`\`css
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
     \`\`\`

**Color Scheme (Clear Translucency)**

Primary colors:
- White transparent: rgba(255, 255, 255, 0.05-0.2)
- Border highlight: rgba(255, 255, 255, 0.1-0.3)

Background colors (for contrast):
- Deep purple gradient: #667eea → #764ba2
- Blue-purple gradient: #667eea → #764ba2 → #f093fb → #4facfe
- Deep blue: #1e3a8a → #1e40af

Shadow colors:
- Soft black: rgba(0, 0, 0, 0.05-0.15)

**Key CSS Class Examples**

\`\`\`css
/* Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 32px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

/* Glass Button */
.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 24px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}

.glass-button:active {
  transform: scale(0.98);
}

/* Glass Input */
.glass-input {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 16px;
  width: 100%;
  transition: all 0.3s ease;
}

.glass-input:focus {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  outline: none;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* Glass Container */
.glass-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
\`\`\`

**Tailwind CSS Configuration**

If using Tailwind CSS, add the following configuration:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '10px',
        lg: '20px',
        xl: '30px',
      },
    },
  },
  plugins: [],
}
\`\`\`

Tailwind class example:
\`\`\`html
<div class="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-8">
  <!-- Glass card content -->
</div>
\`\`\`

**Important Notes**
- Must have dark or gradient background for contrast, otherwise transparency effect is not obvious
- backdrop-filter requires -webkit- prefix for Safari
- Transparency should not be too high (avoid exceeding 0.3), otherwise lose glass texture
- Border opacity should be lower than background opacity, maintain delicacy
- Avoid strong colors, maintain clear transparency
- Border radius recommended between 12px-24px, avoid being too sharp
- Shadow color uses black with low opacity, do not use colored shadows
