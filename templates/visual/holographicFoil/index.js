// Holographic Foil - Premium rainbow gradient effects
// 全息箔纸风格 - 高端彩虹渐变效果

import { demoHTML, customStyles } from './Demo.js';
import { holographicFoilCustomPrompt } from './customPrompt.js';
import { holographicFoilStylePrompt } from './stylePrompt.js';

export const holographicFoil = {
  id: 'visual-holographicFoil',
  title: 'styles.visual.holographicFoil.title',
  description: 'styles.visual.holographicFoil.description',

  // ✅ StyleCard preview
  demoHTML: demoHTML,
  customStyles: customStyles,

  // ✅ AI Prompts (bilingual)
  customPrompt: holographicFoilCustomPrompt,
  stylePrompt: holographicFoilStylePrompt,

  // ✅ Optional: StyleCard background
  demoBoxClass: 'bg-gradient-to-br from-gray-900 to-black',

  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'holographicFoil-landing',
      name: 'styles.visual.holographicFoil.preview.holographicFoilLanding',
      type: 'fullpage'
    }
  ]
};

export default holographicFoil;
