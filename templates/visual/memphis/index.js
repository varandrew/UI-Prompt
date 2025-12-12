// Memphis Design - 80s Postmodern Style
// 孟菲斯設計風格，幾何圖形和大膽色彩

import { memphisFullPageHTML, memphisFullPageStyles } from './memphisFullPage.js';

export const memphis = {
  id: 'visual-memphis',
  title: 'styles.visual.memphis.title',
  description: 'styles.visual.memphis.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML: memphisFullPageHTML,
  customStyles: memphisFullPageStyles,

  // Full page template
  fullPageHTML: memphisFullPageHTML,
  fullPageStyles: memphisFullPageStyles,

  // Previews
  previews: [
    {
      id: 'memphis-creative',
      name: 'Memphis Creative Page',
      type: 'full',
      html: memphisFullPageHTML,
      styles: memphisFullPageStyles
    }
  ]
};

export default memphis;
