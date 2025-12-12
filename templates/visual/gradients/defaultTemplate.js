// Gradients 漸变效果風格模板
// Phase 3 Batch 1 - 从 visualTechStyles.js 遷移

import {
  gradientsFullPageHTML,
  gradientsFullPageStyles
} from './gradientsFullPage';
import { stylePrompt } from './stylePrompt';
import { fullPageCustomPrompt } from './fullPageCustomPrompt';

export const visualTechGradients = {
  id: 'visual-tech-gradients',
  title: 'styles.visual.gradients.title',
  description: 'styles.visual.gradients.description',

  // Demo 展示（简化版）
  demoHTML: `
    <div class="text-white text-center">
      <h4 class="text-3xl font-bold">GRADIENT</h4>
    </div>
  `,

  customStyles: '',

  // Demo Box 樣式类
  demoBoxClass: 'bg-gradient-to-br from-black via-gray-600 to-white',

  // 色彩方案
  colorScheme: {
    'zh-cn': '霓虹粉 (#EC4899)、霓虹紫 (#A855F7)、霓虹藍 (#3B82F6)、黑色背景 (#000000)',
    'en-US': 'Neon pink (#EC4899), neon purple (#A855F7), neon blue (#3B82F6), black background (#000000)'
  },

  // 全屏預覽
  fullPagePreviewId: 'gradients',
  fullPageHTML: gradientsFullPageHTML,
  fullPageStyles: gradientsFullPageStyles,
  fullPageCustomPrompt,
  stylePrompt
};
