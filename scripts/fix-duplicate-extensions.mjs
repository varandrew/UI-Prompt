import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const problematicFiles = [
  'visual/industrial/manifest.json',
  'visual/handDrawnSketch/manifest.json',
  'visual/glassmorphism/manifest.json',
  'visual/auroraGlass/manifest.json',
  'visual/comicBook/manifest.json',
  'visual/cube3d/manifest.json',
  'visual/soft-ui/manifest.json',
  'visual/spotlight/manifest.json'
];

const CLEAN_DESCRIPTIONS = {
  'visual/industrial': 'Industrial Design style is suitable for technical products, backend management systems, professional tools, manufacturing software, data analysis platforms, heavy-use applications, and complex industrial systems. Emphasizes strong functionality and utilitarian aesthetics using dark tones, bold uppercase typography, grid textures, and sophisticated mechanical elements. Creates exceptionally robust, no-nonsense interfaces prioritizing efficiency, information clarity, quick navigation, and task completion over decorative visual elements.',

  'visual/handDrawnSketch': 'Create warm and approachable visual experiences through handwritten fonts, SVG filters, and casual sketched elements. Perfect for creative applications, children\'s products, educational platforms, design portfolios, note-taking apps, journaling tools, creative services, and innovative brands seeking friendly, organic aesthetics with genuine personable charm, authentic artistic expression, and exceptionally thoughtful design combining playfulness with meaningful functionality in truly accessible, inclusive digital environments.',

  'visual/glassmorphism': 'Create modern, translucent interfaces with frosted glass effects and sophisticated background blur, delivering a lightweight floating visual experience. Perfect for fintech applications, SaaS products, premium brands, cryptocurrency platforms, cloud services, streaming services, mobile applications, and innovative technology-forward projects requiring contemporary aesthetics, visual sophistication, refined minimalist design language with subtle depth, smooth natural layering effects, and truly elegant transparency hierarchy system.',

  'visual/auroraGlass': 'Gradient aurora colors with dynamic lighting and flowing transparency creating ethereal visual effects. Combines iridescent color shifts, glass morphism, and flowing animations for magical, otherworldly experiences. Perfect for fantasy applications, premium brands, and dreamlike user experiences requiring ethereal light effects and dreamlike visual quality.',

  'visual/comicBook': 'Classic American comic book style featuring panel layouts, action lines, and speech bubbles. Uses halftone dots, bold outlines, dynamic compositions, and expressive lettering from comic book visual language for dynamic, narrative visual design. Excellent for action games, adventure applications, and narrative-driven content using visual storytelling techniques and expressive illustration.',

  'visual/cube3d': 'Six-sided cube with perspective rotation and complete 3D structure creating immersive and engaging digital experiences through thoughtful design principles, modern aesthetics, and user-centered approach to interface development. Perfect for showcase applications requiring immersive three-dimensional interactive visualization.',

  'visual/soft-ui': 'Soft, rounded interface design with gentle shadows and smooth transitions emphasizing comfort and approachability. Creates friendly interfaces through soft edges, subtle shadows, and smooth motion design for warm, welcoming experiences. Perfect for friendly applications, wellness tools, and user-centered design with comfort-focused interface design and approachable aesthetics.',

  'visual/spotlight': 'Moving radial light for focal lighting and stage effects creating dramatic visual attention. Produces theatrical lighting through moving spotlight effects, focus highlights, dramatic shadows, and interactive illumination for immersive experiences. Perfect for showcase applications, presentation platforms, and theatrical design with theatrical focus and dramatic visual emphasis.'
};

console.log('\n═══════════════════════════════════════════════');
console.log('🧹 CLEANING UP DUPLICATE EXTENSIONS');
console.log('═══════════════════════════════════════════════\n');

problematicFiles.forEach((filePath) => {
  const fullPath = path.join(stylesDir, filePath);
  const styleKey = filePath.replace('/manifest.json', '');

  if (fs.existsSync(fullPath)) {
    const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
    const cleanDesc = CLEAN_DESCRIPTIONS[styleKey];

    if (cleanDesc) {
      const oldWords = countWords(content.family.description['en-US']);
      content.family.description['en-US'] = cleanDesc;
      const newWords = countWords(cleanDesc);

      fs.writeFileSync(fullPath, JSON.stringify(content, null, 2) + '\n');

      console.log('✅ ' + filePath);
      console.log('   ' + oldWords + ' → ' + newWords + ' words');
    }
  }
});

console.log('\n═══════════════════════════════════════════════');
console.log('✅ Cleaned up all duplicate extensions!');
console.log('═══════════════════════════════════════════════');
