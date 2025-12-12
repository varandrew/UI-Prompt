// Paper Cutout - Handcrafted collage style
// 纸张剪贴风格 - 手工拼贴美学

import { demoHTML, customStyles } from './Demo.js';
import { paperCutoutCustomPrompt } from './customPrompt.js';
import { paperCutoutStylePrompt } from './stylePrompt.js';

export const paperCutout = {
  id: 'visual-paperCutout',
  title: 'styles.visual.paperCutout.title',
  description: 'styles.visual.paperCutout.description',

  // ✅ StyleCard preview
  demoHTML: demoHTML,
  customStyles: customStyles,

  // ✅ AI Prompts (bilingual)
  customPrompt: paperCutoutCustomPrompt,
  stylePrompt: paperCutoutStylePrompt,

  // ✅ Optional: StyleCard background
  demoBoxClass: 'bg-gradient-to-br from-amber-50 to-stone-100',

  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'paperCutout-showcase',
      name: 'styles.visual.paperCutout.preview.paperCutoutShowcase',
      type: 'fullpage'
    }
  ]
};

export default paperCutout;
