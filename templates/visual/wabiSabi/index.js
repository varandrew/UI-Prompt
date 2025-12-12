// Wabi-Sabi - Japanese Aesthetic
// 侘寂美學，不完美之美

import { wabiSabiFullPageHTML, wabiSabiFullPageStyles } from './wabiSabiFullPage.js';

export const wabiSabi = {
  id: 'visual-wabiSabi',
  title: 'styles.visual.wabiSabi.title',
  description: 'styles.visual.wabiSabi.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML: wabiSabiFullPageHTML,
  customStyles: wabiSabiFullPageStyles,

  // Full page template
  fullPageHTML: wabiSabiFullPageHTML,
  fullPageStyles: wabiSabiFullPageStyles,

  // Previews
  previews: [
    {
      id: 'wabiSabi-zen',
      name: 'Wabi-Sabi Zen',
      type: 'full',
      html: wabiSabiFullPageHTML,
      styles: wabiSabiFullPageStyles
    }
  ]
};

export default wabiSabi;
