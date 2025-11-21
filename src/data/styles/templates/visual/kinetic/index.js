/**
 * Kinetic Typography - Main Configuration
 * 動態排版風格主配置文件
 */

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './FullPageDemo';
import { customPrompt } from './customPrompt';
import { stylePrompt } from './stylePrompt';
import { fullPageCustomPrompt } from './fullPageCustomPrompt';

export const kineticTypography = {
  id: 'visual-kineticTypography',
  title: 'styles.visual.kineticTypography.title',
  description: 'styles.visual.kineticTypography.description',

  // StyleCard 預覽
  demoHTML,
  customStyles,

  // 全页面預覽
  fullPageHTML,
  fullPageStyles,
  fullPageCustomPrompt,  // Template-specific prompt for FullPage

  // AI Prompt 生成 (Generic style-level prompts)
  customPrompt,
  stylePrompt,

  // 配色方案
  colorScheme: {
    'zh-CN': '黑色背景 (#000000)、霓虹藍 (#3b82f6)、霓虹粉 (#ec4899)、霓虹黃 (#fbbf24)、霓虹綠 (#10b981)、白色文字 (#FFFFFF)',
    'en-US': 'Black background (#000000), neon blue (#3b82f6), neon pink (#ec4899), neon yellow (#fbbf24), neon green (#10b981), white text (#FFFFFF)'
  },

  // 卡片背景
  demoBoxClass: 'bg-black'
};
