// Neomorphism - Soft UI Design
// 新擬物化設計，柔和陰影和浮雕效果

import { neomorphismFullPageHTML, neomorphismFullPageStyles } from './neomorphismFullPage.js';

export const neomorphism = {
  id: 'visual-neomorphism',
  title: 'styles.visual.neomorphism.title',
  description: 'styles.visual.neomorphism.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML: neomorphismFullPageHTML,
  customStyles: neomorphismFullPageStyles,

  // Full page template
  fullPageHTML: neomorphismFullPageHTML,
  fullPageStyles: neomorphismFullPageStyles,

  // Previews
  previews: [
    {
      id: 'neomorphism-dashboard',
      name: 'Neomorphism Dashboard',
      type: 'full',
      html: neomorphismFullPageHTML,
      styles: neomorphismFullPageStyles
    }
  ]
};

export default neomorphism;
