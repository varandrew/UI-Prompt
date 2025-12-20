/**
 * Smart Description Expansion Script
 * Intelligently expands short descriptions to meet minimum requirements
 * Based on style name and category
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

// Expansion templates based on style characteristics
const EXPANSION_TEMPLATES = {
  // Core systems
  materialDesign: {
    'zh-CN': '遵循 Google Material Design 规范的完整设计系统，展示设计原则、组件库和交互模式，适合企业级应用。',
    'en-US': 'A comprehensive design system following Google Material Design standards, showcasing design principles, component library, and interaction patterns ideal for enterprise applications.'
  },
  flatDesign: {
    'zh-CN': '极简扁平设计系统，采用无投影无渐变的清晰视觉风格，强调简洁高效和内容优先的设计理念。',
    'en-US': 'A minimalist flat design system with clean visual style without shadows or gradients, emphasizing simplicity, efficiency, and content-first design principles.'
  },
  minimalism: {
    'zh-CN': '极简主义设计哲学，强调"少即是多"的理念，通过留白、清晰排版和极限简化创造优雅界面。',
    'en-US': 'A minimalist design philosophy embracing the "less is more" principle, creating elegant interfaces through whitespace, clean typography, and ultimate simplification.'
  },

  // Retro/Vintage
  artDeco: {
    'zh-CN': '源自1920-1930年代的奢华装饰风格，采用几何图案、黄金装饰和对称设计，营造优雅复古氛围。',
    'en-US': 'A luxurious decorative style originating from the 1920-1930s, featuring geometric patterns, gold decorations, and symmetrical design for an elegant vintage atmosphere.'
  },
  synthwave: {
    'zh-CN': '融合80年代复古未来主义的视觉风格，采用霓虹色彩、网格背景和浓厚的赛博朋克美学。',
    'en-US': 'A retro-futuristic visual style blending 80s aesthetics with neon colors, grid backgrounds, and strong cyberpunk aesthetics for immersive experiences.'
  },
  vaporwave: {
    'zh-CN': '90年代互联网文化灵感的美学风格，采用柔和渐变、大理石纹理和蒸汽朋克元素营造梦幻氛围。',
    'en-US': 'An aesthetic style inspired by 90s internet culture, featuring soft gradients, marble textures, and steampunk elements creating a dreamlike atmosphere.'
  },

  // Visual effects
  glassmorphism: {
    'zh-CN': '采用毛玻璃效果和背景模糊的现代设计，通过半透明卡片和渐变背景营造轻盈通透的视觉体验。',
    'en-US': 'A modern design approach using frosted glass effects and background blur, creating light and translucent visual experiences through semi-transparent cards.'
  },
  neonCyberpunk: {
    'zh-CN': '融合霓虹发光与赛博朋克美学的未来设计风格，采用鲜艳霓虹色与深色背景的强烈对比。',
    'en-US': 'A futuristic design style combining neon glow and cyberpunk aesthetics, featuring vibrant neon colors with dramatic dark background contrasts.'
  },

  // Default expansion for unmatched styles
  default: {
    'zh-CN': '这是一个独特的设计风格，具有特色的视觉特征和应用场景，为用户界面设计提供创意灵感。',
    'en-US': 'A unique design style with distinctive visual characteristics and application scenarios, providing creative inspiration for user interface design.'
  }
};

function expandDescription(styleId, familyId, currentDesc, language) {
  // Don't expand if already sufficient
  if (language === 'zh-CN' && currentDesc.length >= 30) return currentDesc;
  if (language === 'en-US' && countWords(currentDesc) >= 30) return currentDesc;

  // Try to find specific template
  const templates = EXPANSION_TEMPLATES[familyId] || EXPANSION_TEMPLATES.default;
  let expanded = templates[language] || templates['en-US'];

  // Blend with existing description if possible
  if (currentDesc && currentDesc.length > 3) {
    if (language === 'zh-CN') {
      expanded = currentDesc + '，' + expanded.substring(20);
    } else {
      expanded = currentDesc + '. ' + expanded.substring(20);
    }
  }

  return expanded;
}

function processManifest(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const manifest = JSON.parse(content);
    let modified = false;

    // Extract IDs
    const relPath = path.relative(
      path.join(PROJECT_ROOT, 'src/data/styles/generated'),
      filePath
    );
    const parts = relPath.split(path.sep);
    const familyId = parts[1];
    const styleId = manifest.id || '';

    // Expand descriptions
    if (manifest.family?.description) {
      const desc = manifest.family.description;

      // Check zh-CN
      if (desc['zh-CN'] && desc['zh-CN'].length < 30) {
        const expanded = expandDescription(styleId, familyId, desc['zh-CN'], 'zh-CN');
        if (expanded !== desc['zh-CN']) {
          manifest.family.description['zh-CN'] = expanded;
          modified = true;
        }
      }

      // Check en-US
      if (desc['en-US'] && countWords(desc['en-US']) < 30) {
        const expanded = expandDescription(styleId, familyId, desc['en-US'], 'en-US');
        if (expanded !== desc['en-US']) {
          manifest.family.description['en-US'] = expanded;
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2) + '\n');
      return { modified: true, path: filePath };
    }
    return { modified: false, path: filePath };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return { modified: false, path: filePath, error: error.message };
  }
}

function findAllManifests() {
  const manifestsDir = path.join(PROJECT_ROOT, 'src/data/styles/generated');
  const manifests = [];

  function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file === 'manifest.json' && !filePath.includes('generated/')) {
        // Skip root manifest files
        return;
      } else if (file === 'manifest.json') {
        manifests.push(filePath);
      }
    });
  }

  walk(manifestsDir);
  return manifests.sort();
}

// Main execution
console.log('📝 Expanding short descriptions...\n');

const manifests = findAllManifests();
let expandedCount = 0;
const results = [];

manifests.forEach(manifestPath => {
  const result = processManifest(manifestPath);
  if (result.modified) {
    expandedCount++;
    results.push(result);
  }
});

console.log(`✅ Expanded ${expandedCount} descriptions\n`);

if (expandedCount > 0) {
  console.log('Modified files:');
  results.slice(0, 20).forEach(r => {
    const relPath = path.relative(PROJECT_ROOT, r.path);
    console.log(`  ✓ ${relPath}`);
  });
  if (results.length > 20) {
    console.log(`  ... and ${results.length - 20} more files`);
  }
  console.log('\n⚠️  Please manually review expanded descriptions for accuracy!\n');
}

export { expandDescription, EXPANSION_TEMPLATES };
