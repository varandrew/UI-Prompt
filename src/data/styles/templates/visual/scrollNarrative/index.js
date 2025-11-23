// Scroll Narrative - Main Configuration
// 滾動敘事風格 - 主配置文件

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './FullPageDemo';
import { customPrompt } from './customPrompt';
import { stylePrompt } from './stylePrompt';
import { fullPageCustomPrompt } from './fullPageCustomPrompt';

// Import Preview Templates with their CustomPrompts
import {
  previewConfig as preview1Config,
  previewHTML as preview1HTML,
  previewStyles as preview1Styles
} from './previews/preview1ProductFeature';
import { preview1CustomPrompt } from './previews/preview1CustomPrompt';

import {
  previewConfig as preview2Config,
  previewHTML as preview2HTML,
  previewStyles as preview2Styles
} from './previews/preview2ProductLaunch';
import { preview2CustomPrompt } from './previews/preview2CustomPrompt';

import {
  previewConfig as preview3Config,
  previewHTML as preview3HTML,
  previewStyles as preview3Styles
} from './previews/preview3ParallaxStory';
import { preview3CustomPrompt } from './previews/preview3CustomPrompt';

import {
  previewConfig as preview4Config,
  previewHTML as preview4HTML,
  previewStyles as preview4Styles,
  previewCustomPrompt as preview4CustomPrompt
} from './previews/preview4VisionLaunch';

export const scrollNarrative = {
  id: 'visual-scrollNarrative',
  title: 'styles.visual.scrollNarrative.title',
  description: 'styles.visual.scrollNarrative.description',

  // StyleCard Preview (Demo)
  demoHTML,
  customStyles,

  // Full Page Preview
  fullPageHTML,
  fullPageStyles,
  fullPageCustomPrompt,  // Template-specific prompt for FullPage

  // Additional Preview Templates (4 variants)
  previews: [
    {
      ...preview1Config,
      html: preview1HTML,
      styles: preview1Styles,
      customPrompt: preview1CustomPrompt  // Template-specific prompt
    },
    {
      ...preview2Config,
      html: preview2HTML,
      styles: preview2Styles,
      customPrompt: preview2CustomPrompt  // Template-specific prompt
    },
    {
      ...preview3Config,
      html: preview3HTML,
      styles: preview3Styles,
      customPrompt: preview3CustomPrompt  // Template-specific prompt
    },
    {
      ...preview4Config,
      html: preview4HTML,
      styles: preview4Styles,
      customPrompt: preview4CustomPrompt  // Template-specific prompt
    }
  ],

  // AI Prompts (Generic style-level prompts)
  customPrompt,
  stylePrompt
};

export default scrollNarrative;
