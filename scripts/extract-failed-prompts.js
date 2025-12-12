#!/usr/bin/env node

/**
 * Extract and categorize failed prompts from validation report
 */

import fs from 'fs';

const reportPath = 'validation-report.txt';
const content = fs.readFileSync(reportPath, 'utf8');

const lines = content.split('\n');
const failed = [];

let currentFile = null;
let currentType = null;
let currentChars = null;
let currentError = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Match file path
  const fileMatch = line.match(/^\d+\.\s+(.+\.md)$/);
  if (fileMatch) {
    // Save previous file if exists
    if (currentFile) {
      failed.push({
        path: currentFile,
        type: currentType,
        chars: currentChars,
        error: currentError
      });
    }

    currentFile = fileMatch[1];
    currentType = null;
    currentChars = null;
    currentError = null;
    continue;
  }

  // Match type
  const typeMatch = line.match(/Type:\s+(custom|style)/);
  if (typeMatch) {
    currentType = typeMatch[1];
    continue;
  }

  // Match character count
  const charsMatch = line.match(/❌ en-US:\s+(\d+)\s+\/\s+(\d+)\s+chars/);
  if (charsMatch) {
    currentChars = parseInt(charsMatch[1]);
    continue;
  }

  // Match error
  const errorMatch = line.match(/⚠️\s+Errors:\s+(.+)$/);
  if (errorMatch) {
    currentError = errorMatch[1];
    continue;
  }
}

// Don't forget the last file
if (currentFile) {
  failed.push({
    path: currentFile,
    type: currentType,
    chars: currentChars,
    error: currentError
  });
}

// Categorize
const missingEnglish = failed.filter(f => f.error === 'Missing en-US section');
const shortCustom = failed.filter(f => f.type === 'custom' && f.chars !== null && f.chars < 2000);
const shortStyle = failed.filter(f => f.type === 'style' && f.chars !== null && f.chars < 600);

console.log('📊 Failed Prompts Analysis\n');
console.log(`Total Failed: ${failed.length}`);
console.log(`  - Missing English Section: ${missingEnglish.length}`);
console.log(`  - Short custom.md (<2000 chars): ${shortCustom.length}`);
console.log(`  - Short style.md (<600 chars): ${shortStyle.length}`);
console.log();

// Group by directory
const byDir = {};
failed.forEach(f => {
  const parts = f.path.split('/');
  const dir = parts.slice(0, -1).join('/');
  const shortPath = parts.slice(parts.indexOf('prompts') + 1).join('/');

  if (!byDir[dir]) byDir[dir] = [];
  byDir[dir].push({ ...f, shortPath });
});

console.log('📁 Failed Files by Directory:\n');
Object.keys(byDir).sort().forEach(dir => {
  const files = byDir[dir];
  const shortDir = dir.split('/').slice(dir.split('/').indexOf('prompts') + 1).join('/');
  console.log(`${shortDir}/ (${files.length} files)`);
  files.forEach(f => {
    const status = f.error ? `Missing EN` : `${f.chars}/${f.type === 'custom' ? 2000 : 600}`;
    console.log(`  - ${f.shortPath.split('/').pop()}: ${status}`);
  });
  console.log();
});

// Save detailed report
const report = {
  summary: {
    total: failed.length,
    missingEnglish: missingEnglish.length,
    shortCustom: shortCustom.length,
    shortStyle: shortStyle.length
  },
  missingEnglish: missingEnglish.map(f => f.path),
  shortCustom: shortCustom.map(f => ({ path: f.path, chars: f.chars })),
  shortStyle: shortStyle.map(f => ({ path: f.path, chars: f.chars })),
  all: failed
};

fs.writeFileSync('failed-prompts-analysis.json', JSON.stringify(report, null, 2));
console.log('✓ Detailed report saved to: failed-prompts-analysis.json');
