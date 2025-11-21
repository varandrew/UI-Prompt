// Aggregator for gradient templates
// 渐变艺术家族 - 利用多色渐变和色彩过渡创造动态视觉体验

import { demoHTML, customStyles } from './Demo';

// 导入所有模板（从子文件夹）
// meshGradient 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
// holographic 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
// duotone 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
// colorTransition 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
// animatedGradient 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）

// 导出家族元数据
export const name = 'styles.visual.gradient.title';
export const demoUI = demoHTML;
export { customStyles };
export const description = 'styles.visual.gradient.description';

// 导出家族级 customPrompt
export const customPrompt = {
  'zh-CN': `请使用 TailwindCSS 创建一个渐变艺术风格的界面，利用多色渐变和色彩过渡创造动态视觉体验。

**核心设计要求**

1. **多色渐变技术**
   - linear-gradient：线性渐变 \`background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);\`
   - radial-gradient：径向渐变 \`background: radial-gradient(circle, #667eea 0%, #764ba2 100%);\`
   - conic-gradient：锥形渐变 \`background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea);\`

2. **网格渐变（Mesh Gradient）**
   - 使用多个径向渐变叠加创造复杂效果
   - 示例：
     \`\`\`css
     .mesh-gradient {
       background:
         radial-gradient(at 0% 0%, #667eea 0px, transparent 50%),
         radial-gradient(at 100% 0%, #764ba2 0px, transparent 50%),
         radial-gradient(at 100% 100%, #f093fb 0px, transparent 50%),
         radial-gradient(at 0% 100%, #4facfe 0px, transparent 50%);
       background-color: #0f0f23;
     }
     \`\`\`

3. **动态渐变动画**
   - background-size 配合 animation
   - 示例：
     \`\`\`css
     .gradient-animated {
       background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe);
       background-size: 400% 400%;
       animation: gradientShift 8s ease infinite;
     }

     @keyframes gradientShift {
       0%, 100% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
     }
     \`\`\`

4. **渐变文字**
   - background-clip: text
   - 示例：
     \`\`\`css
     .gradient-text {
       background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
       -webkit-background-clip: text;
       background-clip: text;
       -webkit-text-fill-color: transparent;
       font-weight: 700;
       font-size: 48px;
     }
     \`\`\`

5. **双色调渐变**
   - 高对比度双色组合
   - 示例：
     \`\`\`css
     .duotone {
       background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
     }
     \`\`\`

**配色方案（鲜艳渐变）**

主色调：
- 紫色系：#667eea, #764ba2, #8e2de2
- 粉色系：#f093fb, #f5576c, #ff6f91
- 蓝色系：#4facfe, #00f2fe, #43e97b

**关键 CSS 类示例**

\`\`\`css
/* 动态渐变卡片 */
.gradient-card {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  border-radius: 16px;
  padding: 32px;
  color: white;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* 网格渐变背景 */
.mesh-bg {
  background:
    radial-gradient(at 0% 0%, #667eea 0px, transparent 50%),
    radial-gradient(at 100% 0%, #764ba2 0px, transparent 50%),
    radial-gradient(at 100% 100%, #f093fb 0px, transparent 50%),
    radial-gradient(at 0% 100%, #4facfe 0px, transparent 50%);
  background-color: #0f0f23;
  min-height: 400px;
}
\`\`\`

**重要提示**
- 渐变角度建议 135deg 或 90deg
- 颜色过渡点均匀分布
- 动画速度建议 6s-10s
- 避免过多颜色（3-5 种最佳）`,
  'en-US': `Please create a Gradient Art style interface using TailwindCSS, creating dynamic visual experiences through multi-color gradients and color transitions.

**Core Design Requirements**

1. **Multi-color Gradient Techniques**
   - linear-gradient: \`background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);\`
   - radial-gradient: \`background: radial-gradient(circle, #667eea 0%, #764ba2 100%);\`
   - conic-gradient: \`background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea);\`

2. **Mesh Gradient**
   - Layer multiple radial gradients for complex effects
   - Example:
     \`\`\`css
     .mesh-gradient {
       background:
         radial-gradient(at 0% 0%, #667eea 0px, transparent 50%),
         radial-gradient(at 100% 0%, #764ba2 0px, transparent 50%),
         radial-gradient(at 100% 100%, #f093fb 0px, transparent 50%),
         radial-gradient(at 0% 100%, #4facfe 0px, transparent 50%);
       background-color: #0f0f23;
     }
     \`\`\`

3. **Animated Gradients**
   - background-size with animation
   - Example:
     \`\`\`css
     .gradient-animated {
       background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe);
       background-size: 400% 400%;
       animation: gradientShift 8s ease infinite;
     }

     @keyframes gradientShift {
       0%, 100% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
     }
     \`\`\`

4. **Gradient Text**
   - background-clip: text
   - Example:
     \`\`\`css
     .gradient-text {
       background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
       -webkit-background-clip: text;
       background-clip: text;
       -webkit-text-fill-color: transparent;
       font-weight: 700;
       font-size: 48px;
     }
     \`\`\`

5. **Duotone Gradient**
   - High-contrast dual-color combinations
   - Example:
     \`\`\`css
     .duotone {
       background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
     }
     \`\`\`

**Color Scheme (Vibrant Gradients)**

Primary colors:
- Purple series: #667eea, #764ba2, #8e2de2
- Pink series: #f093fb, #f5576c, #ff6f91
- Blue series: #4facfe, #00f2fe, #43e97b

**Key CSS Class Examples**

\`\`\`css
/* Animated Gradient Card */
.gradient-card {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  border-radius: 16px;
  padding: 32px;
  color: white;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Mesh Gradient Background */
.mesh-bg {
  background:
    radial-gradient(at 0% 0%, #667eea 0px, transparent 50%),
    radial-gradient(at 100% 0%, #764ba2 0px, transparent 50%),
    radial-gradient(at 100% 100%, #f093fb 0px, transparent 50%),
    radial-gradient(at 0% 100%, #4facfe 0px, transparent 50%);
  background-color: #0f0f23;
  min-height: 400px;
}
\`\`\`

**Important Notes**
- Gradient angle recommended: 135deg or 90deg
- Color transition points evenly distributed
- Animation speed recommended: 6s-10s
- Avoid too many colors (3-5 optimal)`
};

// 导出模板数组
export const gradientTemplates = [
  // meshGradient 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
  // holographic 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
  // duotone 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
  // colorTransition 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
  // animatedGradient 已移除 - 与 visual-tech-gradients 重複（無 preview HTML）
];

export default gradientTemplates;
