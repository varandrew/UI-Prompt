#!/usr/bin/env node

/**
 * 简化版翻译助手 - 手动翻译工作流程
 *
 * 这个脚本帮助你：
 * 1. 查看需要翻译的文件列表
 * 2. 提取英文内容供翻译
 * 3. 手动输入翻译后更新文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROMPTS_DIR = path.join(__dirname, '../dist/data/prompts/styles');

/**
 * 创建命令行交互界面
 */
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

/**
 * 读取分析结果
 */
function loadAnalysis() {
  const analysisPath = path.join(__dirname, '../markdown-translation-analysis.json');
  if (!fs.existsSync(analysisPath)) {
    console.error('❌ 未找到分析文件');
    console.error('请先运行: npm run analyze:markdown');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(analysisPath, 'utf-8'));
}

/**
 * 提取文件的英文内容
 */
function extractEnglishContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const enMatch = content.match(/## English Version \(en-US\)([\s\S]*?)$/);
  return enMatch ? enMatch[1].trim() : '';
}

/**
 * 提取文件的中文内容
 */
function extractChineseContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const zhMatch = content.match(/## 中文版本 \(zh-CN\)([\s\S]*?)(---\s*## English Version|## English Version)/);
  return zhMatch ? zhMatch[1].trim() : '';
}

/**
 * 更新文件的中文部分
 */
function updateChineseSection(filePath, translatedContent) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const zhPattern = /(## 中文版本 \(zh-CN\))([\s\S]*?)(---\s*## English Version|## English Version)/;

  let updatedContent;
  if (zhPattern.test(content)) {
    updatedContent = content.replace(zhPattern, `$1\n\n${translatedContent}\n\n$3`);
  } else {
    updatedContent = content.replace(
      /## English Version \(en-US\)/,
      `## 中文版本 (zh-CN)\n\n${translatedContent}\n\n---\n\n## English Version (en-US)`
    );
  }

  fs.writeFileSync(filePath, updatedContent, 'utf-8');
  console.log('✅ 文件已更新');
}

/**
 * 显示文件列表
 */
function displayFileList(files) {
  console.log('\n📋 需要翻译的文件列表（按优先级排序）：\n');

  files.slice(0, 20).forEach((file, index) => {
    const ratio = file.ratio ? `${file.ratio}x` : '∞';
    console.log(`${index + 1}. ${file.path}`);
    console.log(`   比例: ${ratio} (英文: ${file.enLength}, 中文: ${file.zhLength})`);
    console.log();
  });

  console.log(`总计 ${files.length} 个文件需要翻译\n`);
}

/**
 * 交互式翻译单个文件
 */
async function interactiveTranslate(filePath) {
  const rl = createInterface();

  return new Promise((resolve) => {
    console.log('\n' + '='.repeat(60));
    console.log(`📄 文件: ${path.relative(PROMPTS_DIR, filePath)}`);
    console.log('='.repeat(60));

    const enContent = extractEnglishContent(filePath);
    const zhContent = extractChineseContent(filePath);

    if (!enContent) {
      console.log('⚠️  此文件没有英文内容');
      rl.close();
      resolve(false);
      return;
    }

    console.log('\n📝 当前中文内容:');
    console.log(zhContent || '[空]');
    console.log('\n📝 英文内容:');
    console.log(enContent.substring(0, 500));
    if (enContent.length > 500) {
      console.log(`... (共 ${enContent.length} 字符)`);
    }

    console.log('\n选项:');
    console.log('1. 复制英文内容到剪贴板（手动翻译）');
    console.log('2. 输入翻译后的中文内容');
    console.log('3. 跳过此文件');
    console.log('4. 查看完整英文内容');
    console.log('0. 退出');

    rl.question('\n请选择操作 (0-4): ', (choice) => {
      switch (choice.trim()) {
        case '1':
          console.log('\n📋 英文内容（可复制）:');
          console.log('```');
          console.log(enContent);
          console.log('```');
          console.log('\n请将此内容复制到翻译工具中，翻译完成后选择选项 2');
          rl.close();
          resolve(false);
          break;

        case '2':
          console.log('\n请输入翻译后的中文内容（输入 END 结束输入）:');
          let translatedContent = '';
          rl.on('line', (line) => {
            if (line.trim() === 'END') {
              rl.close();
              if (translatedContent.trim()) {
                updateChineseSection(filePath, translatedContent.trim());
                resolve(true);
              } else {
                console.log('⚠️  未输入内容，跳过');
                resolve(false);
              }
            } else {
              translatedContent += line + '\n';
            }
          });
          break;

        case '3':
          console.log('⏭️  跳过此文件');
          rl.close();
          resolve(false);
          break;

        case '4':
          console.log('\n📋 完整英文内容:');
          console.log('```');
          console.log(enContent);
          console.log('```');
          rl.close();
          resolve(false);
          break;

        case '0':
          console.log('👋 退出');
          rl.close();
          resolve(null);
          break;

        default:
          console.log('❌ 无效选择');
          rl.close();
          resolve(false);
      }
    });
  });
}

/**
 * 批量导出英文内容到文件
 */
function exportEnglishContent(files, outputDir) {
  const exportPath = path.join(__dirname, outputDir);

  if (!fs.existsSync(exportPath)) {
    fs.mkdirSync(exportPath, { recursive: true });
  }

  console.log(`\n📦 导出英文内容到: ${exportPath}\n`);

  files.forEach((file, index) => {
    const filePath = path.join(PROMPTS_DIR, file.path);
    const enContent = extractEnglishContent(filePath);

    if (enContent) {
      const outputFileName = `${index + 1}_${path.basename(file.path, '.md')}_${path.basename(path.dirname(file.path))}.txt`;
      const outputFilePath = path.join(exportPath, outputFileName);

      const header = `文件: ${file.path}\n比例: ${file.ratio}x\n英文长度: ${file.enLength}\n中文长度: ${file.zhLength}\n\n${'='.repeat(60)}\n\n`;

      fs.writeFileSync(outputFilePath, header + enContent, 'utf-8');
      console.log(`✓ ${outputFileName}`);
    }
  });

  console.log(`\n✅ 已导出 ${files.length} 个文件`);
  console.log('\n💡 你可以：');
  console.log('1. 使用翻译工具批量翻译这些文件');
  console.log('2. 翻译完成后使用选项 3 导入翻译内容');
}

/**
 * 主菜单
 */
async function mainMenu() {
  const analysis = loadAnalysis();
  const files = analysis.files;

  console.log('\n🌐 Prompt 翻译助手\n');
  console.log(`总计 ${files.length} 个文件需要翻译\n`);

  const rl = createInterface();

  rl.question(
    '请选择操作:\n' +
    '1. 查看需要翻译的文件列表\n' +
    '2. 交互式翻译（逐个文件）\n' +
    '3. 批量导出英文内容（用于外部翻译）\n' +
    '4. 查看统计信息\n' +
    '0. 退出\n\n' +
    '请输入选项 (0-4): ',
    async (choice) => {
      rl.close();

      switch (choice.trim()) {
        case '1':
          displayFileList(files);
          break;

        case '2':
          console.log('\n开始交互式翻译...');
          let count = 0;
          for (const file of files.slice(0, 10)) {
            const filePath = path.join(PROMPTS_DIR, file.path);
            const result = await interactiveTranslate(filePath);

            if (result === null) break; // 用户退出
            if (result) count++;
          }
          console.log(`\n✅ 完成！共翻译 ${count} 个文件`);
          break;

        case '3':
          exportEnglishContent(files, '../translation-export');
          break;

        case '4':
          console.log('\n📊 统计信息:');
          console.log(`总文件数: ${analysis.totalFiles}`);
          console.log(`有内容的文件: ${analysis.filesWithContent}`);
          console.log(`需要翻译: ${analysis.filesToTranslate}`);
          console.log(`\n生成时间: ${new Date(analysis.timestamp).toLocaleString('zh-CN')}`);
          break;

        case '0':
          console.log('👋 再见！');
          process.exit(0);
          break;

        default:
          console.log('❌ 无效选择');
      }
    }
  );
}

// 运行
mainMenu().catch(console.error);
