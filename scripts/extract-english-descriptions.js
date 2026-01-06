#!/usr/bin/env node
/**
 * extract-english-descriptions.js
 * 提取所有組件的英文描述，用於批量翻譯
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function extractDescriptions() {
  const baseDir = path.join(projectRoot, 'src/data/components/generated');
  const output = [];

  output.push('# 組件翻譯文本提取\n');
  output.push('以下是所有需要翻譯的英文描述，按組件分類\n');
  output.push('=' .repeat(80) + '\n');

  const categories = fs.readdirSync(baseDir);
  for (const category of categories) {
    const categoryPath = path.join(baseDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    output.push(`\n\n## 分類: ${category}\n`);

    const components = fs.readdirSync(categoryPath);
    for (const component of components) {
      const manifestPath = path.join(categoryPath, component, 'manifest.json');
      if (!fs.existsSync(manifestPath)) continue;

      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      
      output.push(`\n### [${manifest.id}] Component\n`);
      output.push(`**英文名稱**: ${manifest.component.name}\n`);
      output.push(`**英文描述**:\n${manifest.component.description}\n`);
      
      // 變體描述（僅列出有詳細描述的變體）
      if (manifest.variants && manifest.variants.length > 0) {
        const detailedVariants = manifest.variants.filter(v => 
          v.description && !v.description.includes('implementation in')
        );
        
        if (detailedVariants.length > 0) {
          output.push(`\n**變體描述**:\n`);
          detailedVariants.forEach((variant, idx) => {
            output.push(`- **${variant.id}** (${variant.name})\n  ${variant.description}\n`);
          });
        }
      }

      output.push(`\n${'-'.repeat(80)}\n`);
    }
  }

  const outputDir = path.join(projectRoot, 'logs');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const outputPath = path.join(outputDir, 'translations-needed.md');
  fs.writeFileSync(outputPath, output.join(''), 'utf-8');
  console.log(`✅ 已提取待翻譯文本: ${outputPath}`);
}

extractDescriptions();
