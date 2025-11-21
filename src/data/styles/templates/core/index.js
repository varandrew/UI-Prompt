// Core Templates Aggregator
// 核心模板聚合器 - 統一匯出所有 core templates

// Import all core templates
import {
  skeuomorphismTemplates,
  name as skeuomorphismName,
  demoUI as skeuomorphismDemoUI,
  customStyles as skeuomorphismCustomStyles,
  description as skeuomorphismDescription,
  customPrompt as skeuomorphismCustomPrompt,
} from './skeuomorphism';

import {
  flatDesignTemplates,
  name as flatDesignName,
  demoUI as flatDesignDemoUI,
  customStyles as flatDesignCustomStyles,
  description as flatDesignDescription,
  customPrompt as flatDesignCustomPrompt,
} from './flatDesign';

import {
  materialDesignTemplates,
  name as materialDesignName,
  demoUI as materialDesignDemoUI,
  customStyles as materialDesignCustomStyles,
  description as materialDesignDescription,
  customPrompt as materialDesignCustomPrompt,
} from './materialDesign';

import {
  minimalismTemplates,
  name as minimalismName,
  demoUI as minimalismDemoUI,
  customStyles as minimalismCustomStyles,
  description as minimalismDescription,
  customPrompt as minimalismCustomPrompt,
} from './minimalism';

import {
  fluent2Templates,
  title as fluent2Name,
  demoUI as fluent2DemoUI,
  customStyles as fluent2CustomStyles,
  description as fluent2Description,
} from './fluent2';

import {
  newspaperTemplates,
  name as newspaperName,
  demoUI as newspaperDemoUI,
  customStyles as newspaperCustomStyles,
  description as newspaperDescription,
  customPrompt as newspaperCustomPrompt,
  stylePrompt as newspaperStylePrompt,
} from './typography/newspaper';

// typography 已移除 - 重複显示

// ✨ 創建核心模板配置陣列
export const coreTemplateConfigs = [
  {
    id: 'core-skeuomorphism',
    name: skeuomorphismName,
    demoUI: skeuomorphismDemoUI,
    customStyles: skeuomorphismCustomStyles,
    description: skeuomorphismDescription,
    customPrompt: skeuomorphismCustomPrompt,
    templates: skeuomorphismTemplates,
  },
  {
    id: 'core-flat',
    name: flatDesignName,
    demoUI: flatDesignDemoUI,
    customStyles: flatDesignCustomStyles,
    description: flatDesignDescription,
    customPrompt: flatDesignCustomPrompt,
    templates: flatDesignTemplates,
  },
  {
    id: 'core-material',
    name: materialDesignName,
    demoUI: materialDesignDemoUI,
    customStyles: materialDesignCustomStyles,
    description: materialDesignDescription,
    customPrompt: materialDesignCustomPrompt,
    templates: materialDesignTemplates,
  },
  {
    id: 'core-minimalism',
    name: minimalismName,
    demoUI: minimalismDemoUI,
    customStyles: minimalismCustomStyles,
    description: minimalismDescription,
    customPrompt: minimalismCustomPrompt,
    templates: minimalismTemplates,
  },
  {
    id: 'core-fluent2',
    name: fluent2Name,
    demoUI: fluent2DemoUI,
    customStyles: fluent2CustomStyles,
    description: fluent2Description,
    templates: fluent2Templates,
  },
  {
    id: 'core-typography-newspaper',
    name: newspaperName,
    demoUI: newspaperDemoUI,
    customStyles: newspaperCustomStyles,
    description: newspaperDescription,
    customPrompt: newspaperCustomPrompt,
    stylePrompt: newspaperStylePrompt,
    templates: newspaperTemplates,
  },
  // core-typography 已移除 - 重複显示
];

// 保持向後兼容：單獨匯出所有变数（供其他地方直接使用）
export {
  skeuomorphismTemplates,
  skeuomorphismName,
  skeuomorphismDemoUI,
  skeuomorphismCustomStyles,
  skeuomorphismDescription,
  skeuomorphismCustomPrompt,
  flatDesignTemplates,
  flatDesignName,
  flatDesignDemoUI,
  flatDesignCustomStyles,
  flatDesignDescription,
  flatDesignCustomPrompt,
  materialDesignTemplates,
  materialDesignName,
  materialDesignDemoUI,
  materialDesignCustomStyles,
  materialDesignDescription,
  materialDesignCustomPrompt,
  minimalismTemplates,
  minimalismName,
  minimalismDemoUI,
  minimalismCustomStyles,
  minimalismDescription,
  minimalismCustomPrompt,
  fluent2Templates,
  fluent2Name,
  fluent2DemoUI,
  fluent2CustomStyles,
  fluent2Description,
  newspaperTemplates,
  newspaperName,
  newspaperDemoUI,
  newspaperCustomStyles,
  newspaperDescription,
  newspaperCustomPrompt,
  newspaperStylePrompt,
  // typography 已移除 - 重複显示
};
