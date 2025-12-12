#!/usr/bin/env node

// UI Style React - Template Creation CLI Tool
// Automated tool to create new style templates

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import modules
import { interactiveInput } from './lib/interactive.js';
import {
  generateHTMLTemplate,
  generateCSSTemplate,
  generateFullpageHTML,
  generateFullpageCSSTemplate,
  generatePromptTemplate
} from './lib/generators.js';
import {
  validateInputs,
  validateFormat,
  validateTitles
} from './lib/validator.js';
import {
  updateManifest,
  updateStyleTagsMapping
} from './lib/metadata-updater.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// Setup CLI
const program = new Command();

program
  .name('create-template')
  .description('自動創建 UI Style 模板 - 支持交互式和命令行參數兩種模式')
  .version('1.0.0')
  .option('-c, --category <category>', '分類（core/visual/retro/interaction/layout）')
  .option('-f, --family <family>', '家族名稱')
  .option('-t, --template-id <id>', '模板 ID（格式：{category}-{family}-{variant}）')
  .option('--title-zh <title>', '中文標題')
  .option('--title-en <title>', '英文標題')
  .option('--format <format>', 'HTML 或 JSX 格式', 'html')
  .option('--skip-prompts', '跳過 Prompt 文件創建（不創建 custom.md 和 style.md）')
  .option('--quiet', '靜默模式（減少輸出）')
  .parse();

/**
 * Main execution function
 */
async function main() {
  const options = program.opts();
  let config;

  try {
    // Determine mode: CLI parameters or interactive
    const hasAllRequiredParams = options.category && options.family && options.templateId;

    if (hasAllRequiredParams) {
      // CLI Parameters Mode
      if (!options.quiet) {
        console.log('\n使用命令行參數模式...\n');
      }

      config = {
        category: options.category,
        family: options.family,
        templateId: options.templateId,
        titleZh: options.titleZh || '新模板',
        titleEn: options.titleEn || 'New Template',
        format: options.format.toLowerCase(),
        createPrompts: !options.skipPrompts
      };
    } else {
      // Interactive Mode
      if (!options.quiet) {
        console.log('未提供完整參數，啟動交互式模式...');
      }
      config = await interactiveInput();
    }

    // Validate inputs
    validateFormat(config.format);
    validateTitles(config.titleZh, config.titleEn);
    validateInputs(config.category, config.family, config.templateId);

    if (!options.quiet) {
      console.log('\n開始創建模板...\n');
    }

    // Create directory structure
    const contentDir = path.join(projectRoot, `public/data/content/${config.category}/${config.family}/${config.templateId}`);
    fs.mkdirSync(contentDir, { recursive: true });
    console.log(`✅ 已創建目錄：${contentDir}`);

    // Generate HTML/CSS files
    const ext = (config.format === 'jsx' || config.format === 'react-jsx') ? 'jsx' : 'html';

    // Create demo files
    const demoHTML = generateHTMLTemplate(config.format);
    const demoCSS = generateCSSTemplate();
    fs.writeFileSync(path.join(contentDir, `demo.${ext}`), demoHTML, 'utf8');
    fs.writeFileSync(path.join(contentDir, 'demo.css'), demoCSS, 'utf8');

    // Create fullpage files
    const fullpageHTML = generateFullpageHTML(config.format);
    const fullpageCSS = generateFullpageCSSTemplate();
    fs.writeFileSync(path.join(contentDir, `fullpage.${ext}`), fullpageHTML, 'utf8');
    fs.writeFileSync(path.join(contentDir, 'fullpage.css'), fullpageCSS, 'utf8');

    console.log(`✅ 已生成 ${config.format.toUpperCase()} 模板文件`);

    // Create Prompt files (optional)
    if (config.createPrompts) {
      const promptDir = path.join(projectRoot, `public/data/prompts/${config.category}/${config.family}/${config.templateId}`);
      fs.mkdirSync(promptDir, { recursive: true });

      const customPrompt = generatePromptTemplate('custom');
      const stylePrompt = generatePromptTemplate('style');

      fs.writeFileSync(path.join(promptDir, 'custom.md'), customPrompt, 'utf8');
      fs.writeFileSync(path.join(promptDir, 'style.md'), stylePrompt, 'utf8');

      console.log(`✅ 已生成 Prompt 模板文件：${promptDir}`);
    }

    // Update manifest.json
    updateManifest(config.category, config.family, config.templateId, config.titleZh, config.titleEn);

    // Update styleTagsMapping.js
    updateStyleTagsMapping(config.templateId, config.category);

    // Success message
    console.log('\n╔════════════════════════════════════════════════════╗');
    console.log('║           🎉 模板創建成功！                       ║');
    console.log('╚════════════════════════════════════════════════════╝\n');

    console.log('📝 下一步操作：\n');
    console.log(`1. 編輯 HTML/CSS 文件：`);
    console.log(`   ${contentDir}/\n`);

    if (config.createPrompts) {
      console.log(`2. 填寫 Prompt 文件（可選）：`);
      console.log(`   public/data/prompts/${config.category}/${config.family}/${config.templateId}/\n`);
    }

    console.log(`${config.createPrompts ? '3' : '2'}. 完善標籤配置：`);
    console.log(`   src/data/metadata/styleTagsMapping.js`);
    console.log(`   （搜索 "${config.templateId}"）\n`);

    console.log(`${config.createPrompts ? '4' : '3'}. 運行開發服務器測試：`);
    console.log(`   npm run dev`);
    console.log(`   訪問 http://localhost:1000\n`);

    console.log('💡 提示：記得在編輯完成後測試模板在 UI 中的顯示效果\n');

  } catch (error) {
    console.error('\n❌ 錯誤:', error.message);
    if (error.stack && !options.quiet) {
      console.error('\n詳細錯誤信息:');
      console.error(error.stack);
    }
    process.exit(1);
  }
}

// Execute
main();
