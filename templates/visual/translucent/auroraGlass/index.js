// Single template module: Translucent — Aurora Glass
// 极光玻璃 - 结合透明玻璃和彩色渐变的梦幻效果

import { demoHTML, customStyles } from './Demo';

export const auroraGlass = {
  id: 'visual-translucent-aurora-glass',
  title: 'styles.visual.auroraGlass.title',
  description: 'styles.visual.auroraGlass.description',

  customPrompt: {
    'zh-CN': `核心理念：彩色透明 + 旋转渐变 + 梦幻氛围

设计要点：
1. 彩色渐变背景 — linear-gradient 使用多个半透明颜色
2. 背景模糊 — backdrop-filter: blur(20px) 保持清透感
3. 旋转动画 — ::before 伪元素创建旋转极光效果
4. 较高边框透明度 — border: 1px solid rgba(255, 255, 255, 0.25)
5. 层次管理 — z-index 确保内容在动画之上`,
    'en-US': `Core Concept: Colorful transparency + Rotating gradient + Dreamy atmosphere

Design Points:
1. Colorful gradient background — linear-gradient with multiple semi-transparent colors
2. Background blur — backdrop-filter: blur(20px) maintain translucency
3. Rotation animation — ::before pseudo-element creates rotating aurora effect
4. Higher border opacity — border: 1px solid rgba(255, 255, 255, 0.25)
5. Z-index management — Ensure content above animation`
  },

  demoHTML,
  customStyles,
};

export default auroraGlass;
