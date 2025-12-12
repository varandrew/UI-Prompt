// Single template module: Translucent — Translucent Layers
// 透明层叠 - 多层透明卡片叠加展示不同透明度

import { demoHTML, customStyles } from './Demo';

export const translucentLayers = {
  id: 'visual-translucent-translucent-layers',
  title: 'styles.visual.translucentLayers.title',
  description: 'styles.visual.translucentLayers.description',

  customPrompt: {
    'zh-CN': `核心理念：层次叠加 + 递增透明度 + 视觉深度

设计要点：
1. 递增透明度 — 0.05 → 0.1 → 0.15 创造层次感
2. Z-index 管理 — 1 → 2 → 3 确保正确叠加
3. 统一模糊 — backdrop-filter: blur(20px) 所有层一致
4. 交互反馈 — hover 时 translateX(8px) 展现层次
5. 间距控制 — margin-bottom: 16px 保持视觉呼吸`,
    'en-US': `Core Concept: Layer stacking + Incremental opacity + Visual depth

Design Points:
1. Incremental opacity — 0.05 → 0.1 → 0.15 creates hierarchy
2. Z-index management — 1 → 2 → 3 ensures proper stacking
3. Uniform blur — backdrop-filter: blur(20px) consistent across layers
4. Interactive feedback — hover translateX(8px) reveals layers
5. Spacing control — margin-bottom: 16px maintains visual breathing`
  },

  demoHTML,
  customStyles,
};

export default translucentLayers;
