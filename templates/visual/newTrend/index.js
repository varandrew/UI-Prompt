// New Trend - Maximalism & Hyper Visual
// 新趨勢視覺設計，極繁主義風格

import {
  previewConfig,
  demoJSX,
  previewStyles,
  previewCustomPrompt
} from './previews/preview1HyperMuseum.js';

export const newTrend = {
  id: 'visual-newTrend',
  title: 'styles.visual.newTrend.title',
  description: 'styles.visual.newTrend.description',

  // Demo HTML and Styles (use JSX as HTML)
  demoHTML: demoJSX,
  customStyles: previewStyles,

  // Full page template
  fullPageHTML: demoJSX,
  fullPageStyles: previewStyles,

  // Custom prompt
  customPrompt: previewCustomPrompt,

  // Previews
  previews: [
    {
      id: previewConfig.id,
      name: previewConfig.name?.['en-US'] || 'HYPER MUSEUM Art Festival',
      type: previewConfig.type,
      html: demoJSX,
      styles: previewStyles,
      customPrompt: previewCustomPrompt
    }
  ]
};

export default newTrend;
