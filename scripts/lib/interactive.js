// Interactive Input Handler for Template Creation

import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '../..');

/**
 * Interactive input flow for collecting template information
 * @returns {Promise<Object>} Configuration object with user inputs
 */
export async function interactiveInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  /**
   * Helper function to ask a question
   * @param {string} prompt - Question to ask
   * @returns {Promise<string>} User's answer
   */
  const question = (prompt) => new Promise((resolve) => {
    rl.question(prompt, resolve);
  });

  try {
    console.log('\n╔════════════════════════════════════════════════════╗');
    console.log('║    UI Style React - 模板創建工具 (交互式模式)    ║');
    console.log('╚════════════════════════════════════════════════════╝\n');

    // Read registry to get available categories and families
    const registryPath = path.join(projectRoot, 'src/data/styles/_registry.json');
    const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

    // Step 1: Select Category
    console.log('步驟 1/6: 選擇分類\n');
    console.log('可用分類:');
    const categories = Object.keys(registry.categories);
    categories.forEach((cat, idx) => {
      console.log(`  ${idx + 1}. ${cat} (${registry.categories[cat].name})`);
    });
    console.log();

    const categoryInput = await question('請輸入分類名稱: ');
    const category = categoryInput.trim();

    if (!registry.categories[category]) {
      throw new Error(`無效的分類 "${category}"`);
    }

    // Step 2: Select Family
    console.log(`\n步驟 2/6: 選擇家族 (${category} 分類)\n`);
    const families = registry.categories[category].families;
    console.log('可用家族:');

    // Display in columns for better readability
    const columns = 3;
    for (let i = 0; i < families.length; i += columns) {
      const row = families.slice(i, i + columns)
        .map((f, j) => `${i + j + 1}. ${f}`.padEnd(25))
        .join('');
      console.log(`  ${row}`);
    }
    console.log();

    const familyInput = await question('請輸入家族名稱: ');
    const family = familyInput.trim();

    if (!families.includes(family)) {
      throw new Error(`無效的家族 "${family}"`);
    }

    // Step 3: Input Template ID
    console.log('\n步驟 3/6: 輸入模板 ID\n');
    const suggestedPrefix = `${category}-${family}-`;
    console.log(`建議格式：${suggestedPrefix}<variant-name>`);
    console.log(`示例：${suggestedPrefix}landing-page\n`);

    const templateVariantInput = await question(`模板變體名稱（將自動添加前綴 "${suggestedPrefix}"）: `);
    const templateVariant = templateVariantInput.trim();

    if (!templateVariant) {
      throw new Error('模板變體名稱不能為空');
    }

    const templateId = suggestedPrefix + templateVariant;

    // Step 4: Input Titles
    console.log('\n步驟 4/6: 輸入雙語標題\n');

    const titleZhInput = await question('中文標題: ');
    const titleZh = titleZhInput.trim();

    if (!titleZh) {
      throw new Error('中文標題不能為空');
    }

    const titleEnInput = await question('英文標題: ');
    const titleEn = titleEnInput.trim();

    if (!titleEn) {
      throw new Error('英文標題不能為空');
    }

    // Step 5: Select Format
    console.log('\n步驟 5/6: 選擇文件格式\n');
    console.log('可用格式:');
    console.log('  1. html - 標準 HTML/CSS 格式');
    console.log('  2. jsx  - React JSX 格式\n');

    const formatInput = await question('請選擇格式 (html/jsx) [默認: html]: ');
    const format = formatInput.trim().toLowerCase() || 'html';

    if (!['html', 'jsx'].includes(format)) {
      throw new Error(`無效的格式 "${format}"`);
    }

    // Step 6: Prompt Files
    console.log('\n步驟 6/6: Prompt 文件\n');
    console.log('是否創建 Prompt 模板文件？（custom.md 和 style.md）');
    console.log('  y - 是（默認）');
    console.log('  n - 否\n');

    const createPromptsInput = await question('請選擇 (y/n) [默認: y]: ');
    const createPrompts = createPromptsInput.trim().toLowerCase() !== 'n';

    // Summary
    console.log('\n╔════════════════════════════════════════════════════╗');
    console.log('║                   配置摘要                         ║');
    console.log('╚════════════════════════════════════════════════════╝\n');
    console.log(`  分類:       ${category}`);
    console.log(`  家族:       ${family}`);
    console.log(`  模板 ID:    ${templateId}`);
    console.log(`  中文標題:   ${titleZh}`);
    console.log(`  英文標題:   ${titleEn}`);
    console.log(`  文件格式:   ${format.toUpperCase()}`);
    console.log(`  創建 Prompt: ${createPrompts ? '是' : '否'}`);
    console.log();

    const confirmInput = await question('確認創建？(y/n) [默認: y]: ');
    const confirm = confirmInput.trim().toLowerCase() !== 'n';

    if (!confirm) {
      console.log('\n❌ 已取消創建');
      rl.close();
      process.exit(0);
    }

    rl.close();

    return {
      category,
      family,
      templateId,
      titleZh,
      titleEn,
      format,
      createPrompts
    };

  } catch (error) {
    rl.close();
    throw error;
  }
}
