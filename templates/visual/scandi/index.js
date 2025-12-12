// Scandinavian Design - Nordic Minimalism
// 斯堪的納維亞設計，簡約實用主義

import { scandiFullPageHTML, scandiFullPageStyles } from './scandiFullPage.js';

export const scandi = {
  id: 'visual-scandi',
  title: 'styles.visual.scandi.title',
  description: 'styles.visual.scandi.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML: scandiFullPageHTML,
  customStyles: scandiFullPageStyles,

  // Full page template
  fullPageHTML: scandiFullPageHTML,
  fullPageStyles: scandiFullPageStyles,

  // Previews
  previews: [
    {
      id: 'scandi-interior',
      name: 'Scandinavian Interior',
      type: 'full',
      html: scandiFullPageHTML,
      styles: scandiFullPageStyles
    }
  ]
};

export default scandi;
