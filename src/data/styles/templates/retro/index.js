// Retro Styles Aggregator - Reorganized into 8 Independent Families
// 复古风格聚合器 - 重组为 8 个独立家族

// Import Art Deco Family (装饰艺术)
import {
  artDecoTemplates,
  name as artDecoName,
  demoUI as artDecoDemoUI,
  customStyles as artDecoCustomStyles,
  description as artDecoDescription,
} from './artDeco'

// Import Vintage Newspaper Retro Family (复古报纸)
import {
  vintageNewspaperRetroTemplates,
  name as vintageNewspaperRetroName,
  demoUI as vintageNewspaperRetroDemoUI,
  customStyles as vintageNewspaperRetroCustomStyles,
  description as vintageNewspaperRetroDescription,
} from './vintageNewspaperRetro'

// Import Retro OS Family (复古操作系统)
import {
  retroOSTemplates,
  name as retroOSName,
  demoUI as retroOSDemoUI,
  customStyles as retroOSCustomStyles,
  description as retroOSDescription,
} from './retroOS'

// Import Retro Futurism Family (复古未来主义)
import {
  retroFuturismTemplates,
  name as retroFuturismName,
  demoUI as retroFuturismDemoUI,
  customStyles as retroFuturismCustomStyles,
  description as retroFuturismDescription,
} from './retroFuturism'

// Import Digital Retro Family (数位复古)
import {
  digitalRetroTemplates,
  name as digitalRetroName,
  demoUI as digitalRetroDemoUI,
  customStyles as digitalRetroCustomStyles,
  description as digitalRetroDescription,
} from './digitalRetro'

// Import Arcade CRT Family (街機 CRT)
import {
  arcadeCRTTemplates,
  name as arcadeCRTName,
  demoUI as arcadeCRTDemoUI,
  customStyles as arcadeCRTCustomStyles,
  description as arcadeCRTDescription,
  customPrompt as arcadeCRTCustomPrompt,
} from './arcadeCRT'

// Import Dark Academia Family (暗黑学院)
import {
  darkAcademiaTemplates,
  name as darkAcademiaName,
  demoUI as darkAcademiaDemoUI,
  customStyles as darkAcademiaCustomStyles,
  description as darkAcademiaDescription,
} from './darkAcademia'

// Import Frutiger Aero Family (Frutiger Aero)
import {
  frutigerAeroTemplates,
  name as frutigerAeroName,
  demoUI as frutigerAeroDemoUI,
  customStyles as frutigerAeroCustomStyles,
  description as frutigerAeroDescription,
} from './frutigerAero'

// Import Swiss Design Family (瑞士设计)
import {
  swissDesignTemplates,
  name as swissDesignName,
  demoUI as swissDesignDemoUI,
  customStyles as swissDesignCustomStyles,
  description as swissDesignDescription,
} from './swissDesign'

// Top-level category metadata
export const name = 'nav.retro'
export const description = 'styles.retro.description'

// Use Digital Retro (Vaporwave) as the category demo
export const demoUI = digitalRetroDemoUI
export const customStyles = digitalRetroCustomStyles

// ✨ arcadeCRT 家族配置（类似 core 風格的格式）
export const arcadeCRTConfig = {
  id: 'retro-arcadeCRT',
  name: arcadeCRTName,
  demoUI: arcadeCRTDemoUI,
  customStyles: arcadeCRTCustomStyles,
  description: arcadeCRTDescription,
  customPrompt: arcadeCRTCustomPrompt,
  templates: arcadeCRTTemplates,
};

// Export all templates from all families
export const retroTemplateStyles = [
  ...artDecoTemplates,
  ...vintageNewspaperRetroTemplates,
  ...retroOSTemplates,
  ...retroFuturismTemplates,
  ...digitalRetroTemplates,
  // arcadeCRT 使用家族卡片格式，不在這里展開模板
  ...darkAcademiaTemplates,
  ...frutigerAeroTemplates,
  ...swissDesignTemplates,
]

// Export individual families for potential sub-navigation
export const retroFamilies = [
  {
    id: 'artDeco',
    name: artDecoName,
    description: artDecoDescription,
    demoUI: artDecoDemoUI,
    customStyles: artDecoCustomStyles,
    templates: artDecoTemplates,
  },
  {
    id: 'vintageNewspaperRetro',
    name: vintageNewspaperRetroName,
    description: vintageNewspaperRetroDescription,
    demoUI: vintageNewspaperRetroDemoUI,
    customStyles: vintageNewspaperRetroCustomStyles,
    templates: vintageNewspaperRetroTemplates,
  },
  {
    id: 'retroOS',
    name: retroOSName,
    description: retroOSDescription,
    demoUI: retroOSDemoUI,
    customStyles: retroOSCustomStyles,
    templates: retroOSTemplates,
  },
  {
    id: 'retroFuturism',
    name: retroFuturismName,
    description: retroFuturismDescription,
    demoUI: retroFuturismDemoUI,
    customStyles: retroFuturismCustomStyles,
    templates: retroFuturismTemplates,
  },
  {
    id: 'digitalRetro',
    name: digitalRetroName,
    description: digitalRetroDescription,
    demoUI: digitalRetroDemoUI,
    customStyles: digitalRetroCustomStyles,
    templates: digitalRetroTemplates,
  },
  {
    id: 'arcadeCRT',
    name: arcadeCRTName,
    description: arcadeCRTDescription,
    demoUI: arcadeCRTDemoUI,
    customStyles: arcadeCRTCustomStyles,
    templates: arcadeCRTTemplates,
  },
  {
    id: 'darkAcademia',
    name: darkAcademiaName,
    description: darkAcademiaDescription,
    demoUI: darkAcademiaDemoUI,
    customStyles: darkAcademiaCustomStyles,
    templates: darkAcademiaTemplates,
  },
  {
    id: 'frutigerAero',
    name: frutigerAeroName,
    description: frutigerAeroDescription,
    demoUI: frutigerAeroDemoUI,
    customStyles: frutigerAeroCustomStyles,
    templates: frutigerAeroTemplates,
  },
  {
    id: 'swissDesign',
    name: swissDesignName,
    description: swissDesignDescription,
    demoUI: swissDesignDemoUI,
    customStyles: swissDesignCustomStyles,
    templates: swissDesignTemplates,
  },
]

export default retroTemplateStyles
