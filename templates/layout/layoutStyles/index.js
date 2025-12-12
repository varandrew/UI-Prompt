// Layout Styles - Grid Systems and Layout Patterns
// 布局系統 - 網格系統和佈局模式

import { layoutStyles as layoutTemplates } from './layoutStyles.js';

// Extract first template for demo
const firstTemplate = layoutTemplates[0];

export const layoutStyles = {
  id: 'layout-layoutStyles',
  title: 'styles.layout.layoutStyles.title',
  description: 'styles.layout.layoutStyles.description',

  // Demo HTML and Styles (use first template)
  demoHTML: firstTemplate.demoHTML,
  customStyles: firstTemplate.customStyles,

  // Full page template (use first template)
  fullPageHTML: firstTemplate.fullPageHTML,
  fullPageStyles: firstTemplate.fullPageStyles,

  // Previews (all three layout templates)
  previews: layoutTemplates.map(template => ({
    id: `layoutStyles-${template.id}`,
    name: template.title,
    type: 'full',
    html: template.fullPageHTML,
    styles: template.fullPageStyles
  }))
};

export default layoutStyles;
