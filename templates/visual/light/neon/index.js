// Single template module: Light — Neon Lights
// 霓虹灯光 - 电子发光效果

import { demoHTML, customStyles } from './Demo';

export const neon = {
  id: 'visual-light-neon',
  title: 'styles.visual.neon.title',
  description: 'styles.visual.neon.description',

  customPrompt: {
    'zh-CN': `核心理念：多层发光 + 高饱和色彩 + 闪烁动画

设计要点：
1. 多层 text-shadow — 0 0 5px, 0 0 10px, 0 0 20px, 0 0 40px...
2. 高饱和颜色 — #00f3ff (蓝), #ff006e (粉), #39ff14 (绿)
3. 闪烁效果 — animation: flicker 改变 opacity
4. 深色背景 — #0a0a0a 让霓虹更突出
5. 适用场景 — 夜店风格、赛博朋克、复古未来`,
    'en-US': `Core Concept: Multi-layer glow + High saturation + Flicker animation

Design Points:
1. Multi-layer text-shadow — 0 0 5px, 0 0 10px, 0 0 20px, 0 0 40px...
2. High saturation colors — #00f3ff (blue), #ff006e (pink), #39ff14 (green)
3. Flicker effect — animation: flicker changes opacity
4. Dark background — #0a0a0a makes neon stand out
5. Use cases — Nightclub style, cyberpunk, retro future`
  },

  demoHTML,
  customStyles,
};

export default neon;
