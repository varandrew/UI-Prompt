// Soft UI - Neumorphic Light/Dark Themes
// 柔和 UI 設計，輕盈的新擬物化風格

import { softUILightFullPageHTML, softUILightFullPageStyles } from './softUILightFullPage.js';
import { softUIDarkFullPageHTML, softUIDarkFullPageStyles } from './softUIDarkFullPage.js';

export const softUI = {
  id: 'visual-softUI',
  title: 'styles.visual.softUI.title',
  description: 'styles.visual.softUI.description',

  // Demo HTML and Styles (use light version as default preview)
  demoHTML: softUILightFullPageHTML,
  customStyles: softUILightFullPageStyles,

  // Full page template (default to light)
  fullPageHTML: softUILightFullPageHTML,
  fullPageStyles: softUILightFullPageStyles,

  // Previews (both light and dark versions)
  previews: [
    {
      id: 'softUI-light',
      name: 'Soft UI Light',
      type: 'full',
      html: softUILightFullPageHTML,
      styles: softUILightFullPageStyles
    },
    {
      id: 'softUI-dark',
      name: 'Soft UI Dark',
      type: 'full',
      html: softUIDarkFullPageHTML,
      styles: softUIDarkFullPageStyles
    }
  ]
};

export default softUI;
