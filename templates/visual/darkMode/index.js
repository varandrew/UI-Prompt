// Dark Mode - Professional dashboard design
// 深色模式 - 专业仪表板设计

import { demoHTML, customStyles } from './Demo.js';
import { darkModeCustomPrompt } from './customPrompt.js';
import { darkModeStylePrompt } from './stylePrompt.js';

export const darkMode = {
  id: 'visual-darkMode',
  title: 'styles.visual.darkMode.title',
  description: 'styles.visual.darkMode.description',

  // ✅ StyleCard preview
  demoHTML: demoHTML,
  customStyles: customStyles,

  // ✅ AI Prompts (bilingual)
  customPrompt: darkModeCustomPrompt,
  stylePrompt: darkModeStylePrompt,

  // ✅ Optional: StyleCard background
  demoBoxClass: 'bg-gradient-to-br from-gray-950 to-black',

  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'darkMode-dashboard',
      name: 'styles.visual.darkMode.preview.darkModeDashboard',
      type: 'fullpage'
    }
  ]
};

export default darkMode;
