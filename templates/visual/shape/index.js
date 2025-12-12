// Aggregator for Shape templates
// 形状艺术家族 - 通过不规则形状和形态变换创造独特的视觉语言

import { demoHTML, customStyles } from './Demo';

// 导入所有模板（从子文件夹）
// organic 已移除 - 無 preview HTML
// geometric 已移除 - 無 preview HTML
// morphing 已移除 - 無 preview HTML
// blob 已移除 - 無 preview HTML
// polygon 已移除 - 無 preview HTML

// 导出家族元数据
export const name = 'styles.visual.shape.title';
export const demoUI = demoHTML;
export { customStyles };
export const description = 'styles.visual.shape.description';

// 导出家族级 customPrompt
export const customPrompt = {
  'zh-CN': `请使用 TailwindCSS 创建一个形状艺术风格的界面，通过不规则形状和形态变换创造独特的视觉语言。

**核心设计要求**

1. **有机形状（Organic Shapes）**
   - 复杂 border-radius：\`border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;\`
   - 8 个值系统：水平半径 4 个值 / 垂直半径 4 个值
   - 径向渐变配合：\`radial-gradient(circle, color 0%, transparent 70%)\`
   - 模糊效果：\`filter: blur(40px)\` 创造柔和感
   - 示例：
     \`\`\`css
     .organic-blob {
       width: 300px;
       height: 300px;
       background: radial-gradient(circle, #667eea 0%, transparent 70%);
       border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
       filter: blur(40px);
       animation: morphShape 8s ease-in-out infinite;
     }

     @keyframes morphShape {
       0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
       50% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
     }
     \`\`\`

**配色方案（形状艺术）**

主色调：
- 紫蓝系：#667eea, #764ba2, #8e2de2
- 粉色系：#f093fb, #f5576c, #ff6f91
- 青绿系：#4facfe, #00f2fe, #43e97b

渐变组合：
- 紫粉渐变：linear-gradient(135deg, #667eea, #764ba2, #f093fb)
- 蓝绿渐变：linear-gradient(135deg, #4facfe, #00f2fe, #43e97b)

**关键 CSS 类示例**

\`\`\`css
/* 有机形状背景 */
.organic-background {
  position: relative;
  overflow: hidden;
}

.organic-blob {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #667eea 0%, transparent 70%);
  border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  filter: blur(40px);
  opacity: 0.5;
  animation: organicFloat 12s ease-in-out infinite;
}

@keyframes organicFloat {
  0%, 100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: translate(50px, 30px) rotate(180deg);
  }
}

\`\`\`

**重要提示**
- border-radius 8 个值创造最复杂形状
- clip-path 支持 polygon、circle、ellipse、path
- SVG 动画更流畅但代码更复杂
- 避免过于极端的形状影响可读性和可用性
- 模糊效果（blur）配合有机形状效果最佳`,
  'en-US': `Please create a Shape Art style interface using TailwindCSS, creating unique visual language through irregular shapes and morphing.

**Core Design Requirements**

1. **Organic Shapes**
   - Complex border-radius: \`border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;\`
   - 8-value system: 4 horizontal radii / 4 vertical radii
   - Radial gradients: \`radial-gradient(circle, color 0%, transparent 70%)\`
   - Blur effect: \`filter: blur(40px)\` creates softness
   - Example:
     \`\`\`css
     .organic-blob {
       width: 300px;
       height: 300px;
       background: radial-gradient(circle, #667eea 0%, transparent 70%);
       border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
       filter: blur(40px);
       animation: morphShape 8s ease-in-out infinite;
     }

     @keyframes morphShape {
       0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
       50% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
     }
     \`\`\`

**Color Scheme (Shape Art)**

Primary colors:
- Purple-blue series: #667eea, #764ba2, #8e2de2
- Pink series: #f093fb, #f5576c, #ff6f91
- Cyan-green series: #4facfe, #00f2fe, #43e97b

Gradient combinations:
- Purple-pink gradient: linear-gradient(135deg, #667eea, #764ba2, #f093fb)
- Blue-green gradient: linear-gradient(135deg, #4facfe, #00f2fe, #43e97b)

**Key CSS Class Examples**

\`\`\`css
/* Organic Shape Background */
.organic-background {
  position: relative;
  overflow: hidden;
}

.organic-blob {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #667eea 0%, transparent 70%);
  border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  filter: blur(40px);
  opacity: 0.5;
  animation: organicFloat 12s ease-in-out infinite;
}

@keyframes organicFloat {
  0%, 100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: translate(50px, 30px) rotate(180deg);
  }
}

\`\`\`

**Important Notes**
- 8 border-radius values create the most complex shapes
- clip-path supports polygon, circle, ellipse, path
- SVG animations are smoother but more complex
- Avoid too extreme shapes that affect readability and usability
- Blur effect works best with organic shapes`
};

// 导出模板数组
export const shapeTemplates = [
  // organic 已移除 - 無 preview HTML
  // geometric 已移除 - 無 preview HTML
  // morphing 已移除 - 無 preview HTML
  // blob 已移除 - 無 preview HTML
  // polygon 已移除 - 無 preview HTML
];

export default shapeTemplates;
