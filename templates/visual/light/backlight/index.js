// Single template module: Light — Backlight Effect
// 背光效果 - 边缘发光轮廓

import { demoHTML, customStyles } from './Demo';

export const backlight = {
  id: 'visual-light-backlight',
  title: 'styles.visual.backlight.title',
  description: 'styles.visual.backlight.description',

  customPrompt: {
    'zh-CN': `核心理念：旋转渐变边框 + 伪元素 + 轮廓光

设计要点：
1. 伪元素边框 — ::before 创建旋转渐变
2. linear-gradient — 45deg, transparent 30%, color 50%, transparent 70%
3. 旋转动画 — animation: rotate 4s linear infinite
4. Z-index 分层 — 边框在背后，内容在前
5. 适用场景 — 卡片边框、高级UI、科技感设计`,
    'en-US': `Core Concept: Rotating gradient border + Pseudo-element + Rim light

Design Points:
1. Pseudo-element border — ::before creates rotating gradient
2. linear-gradient — 45deg, transparent 30%, color 50%, transparent 70%
3. Rotation animation — animation: rotate 4s linear infinite
4. Z-index layering — Border behind, content in front
5. Use cases — Card borders, premium UI, tech-feel design`
  },

  demoHTML,
  customStyles,
};

export default backlight;
