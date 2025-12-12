// Vaporwave - Retro Aesthetic
// 蒸氣波美學，復古未來主義

import { vaporwaveFullPageHTML, vaporwaveFullPageStyles } from './vaporwaveFullPage.js';

export const vaporwave = {
  id: 'visual-vaporwave',
  title: 'styles.visual.vaporwave.title',
  description: 'styles.visual.vaporwave.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML: vaporwaveFullPageHTML,
  customStyles: vaporwaveFullPageStyles,

  // Full page template
  fullPageHTML: vaporwaveFullPageHTML,
  fullPageStyles: vaporwaveFullPageStyles,

  // Previews
  previews: [
    {
      id: 'vaporwave-aesthetic',
      name: 'Vaporwave Aesthetic',
      type: 'full',
      html: vaporwaveFullPageHTML,
      styles: vaporwaveFullPageStyles
    }
  ]
};

export default vaporwave;
