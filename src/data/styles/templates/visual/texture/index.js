// Aggregator for Texture templates
// 质感艺术家族 - 通过阴影、滤镜和色彩过渡模拟真实材质质感

import { demoHTML, customStyles } from './Demo';

// 导入所有模板（从子文件夹）
// clay 已移除 - 無 preview HTML
// paper 已移除 - 無 preview HTML
import { fabric } from './fabric';
import { grain } from './grain';
import { leather } from './leather';

// 导出家族元数据
export const name = 'styles.visual.texture.title';
export const demoUI = demoHTML;
export { customStyles };
export const description = 'styles.visual.texture.description';

// 导出家族级 customPrompt
export const customPrompt = {
  'zh-CN': `请使用 TailwindCSS 创建一个质感艺术风格的界面，通过阴影、滤镜和色彩过渡模拟真实材质质感。

**核心设计要求**

1. **织物质感（Fabric Texture）**
   - 交叉渐变纹理：
     \`\`\`css
     .fabric-linen {
       background-image:
         repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
         repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
     }
     \`\`\`
   - 帆布纹理：
     \`\`\`css
     .fabric-canvas {
       background-image:
         repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px),
         repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px);
     }
     \`\`\`
   - 牛仔布：深色底 + 白黑交织线

2. **颗粒质感（Grain Texture）**
   - SVG noise 滤镜：
     \`\`\`html
     <svg>
       <filter id='noise'>
         <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/>
       </filter>
       <rect width='100' height='100' filter='url(#noise)' opacity='0.15'/>
     </svg>
     \`\`\`
   - 细颗粒：baseFrequency='0.9' numOctaves='4'
   - 粗颗粒：baseFrequency='0.5' numOctaves='2'
   - Data URI 内嵌 SVG

3. **皮革质感（Leather Texture）**
   - 径向渐变 + 噪点：
     \`\`\`css
     .leather {
       background: radial-gradient(ellipse at top, #8b6f47 0%, #6b4423 100%);
       background-image:
         radial-gradient(ellipse at top, #8b6f47, #6b4423),
         url("data:image/svg+xml,...noise...");
       box-shadow:
         0 15px 35px rgba(0, 0, 0, 0.4),
         inset 0 -2px 6px rgba(0, 0, 0, 0.3),
         inset 0 2px 6px rgba(255, 255, 255, 0.1);
     }
     \`\`\`
   - 缝线效果：
     \`\`\`css
     .leather-stitched::before {
       border: 2px dashed rgba(255, 255, 255, 0.2);
     }
     \`\`\`

**配色方案（材质色彩）**

织物系：
- 亚麻：#e8dcc4
- 帆布：#d4c5a9
- 牛仔：#4a5f7f

颗粒系：
- 淡紫：#e0c3fc
- 粉红：#fbc2eb

皮革系：
- 棕色皮革：#8b6f47, #6b4423
- 黑色皮革：#2a2a2a, #0a0a0a

**关键 CSS 类示例**

\`\`\`css
/* 织物纹理 */
.fabric-texture {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

/* 颗粒效果 */
.grain-surface {
  background: #e0c3fc;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
  border-radius: 20px;
}

/* 皮革面板 */
.leather-panel {
  background: radial-gradient(ellipse at top, #8b6f47 0%, #6b4423 100%);
  border-radius: 12px;
  padding: 32px;
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.4),
    inset 0 -2px 6px rgba(0, 0, 0, 0.3),
    inset 0 2px 6px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(139, 111, 71, 0.3);
}
\`\`\`

**重要提示**
- 内外阴影组合营造立体感
- SVG noise 可用 data URI 内嵌
- repeating-linear-gradient 创造纹理
- 颜色接近但有细微对比
- 避免过于极端的阴影和对比`,
  'en-US': `Please create a Texture Art style interface using TailwindCSS, simulating real material textures through shadows, filters, and color transitions.

**Core Design Requirements**

1. **Fabric Texture**
   - Cross gradient textures:
     \`\`\`css
     .fabric-linen {
       background-image:
         repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
         repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
     }
     \`\`\`
   - Canvas texture:
     \`\`\`css
     .fabric-canvas {
       background-image:
         repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px),
         repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px);
     }
     \`\`\`
   - Denim: Dark base + white-black woven lines

2. **Grain Texture**
   - SVG noise filter:
     \`\`\`html
     <svg>
       <filter id='noise'>
         <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/>
       </filter>
       <rect width='100' height='100' filter='url(#noise)' opacity='0.15'/>
     </svg>
     \`\`\`
   - Fine grain: baseFrequency='0.9' numOctaves='4'
   - Coarse grain: baseFrequency='0.5' numOctaves='2'
   - Data URI embedded SVG

3. **Leather Texture**
   - Radial gradient + noise:
     \`\`\`css
     .leather {
       background: radial-gradient(ellipse at top, #8b6f47 0%, #6b4423 100%);
       background-image:
         radial-gradient(ellipse at top, #8b6f47, #6b4423),
         url("data:image/svg+xml,...noise...");
       box-shadow:
         0 15px 35px rgba(0, 0, 0, 0.4),
         inset 0 -2px 6px rgba(0, 0, 0, 0.3),
         inset 0 2px 6px rgba(255, 255, 255, 0.1);
     }
     \`\`\`
   - Stitching effect:
     \`\`\`css
     .leather-stitched::before {
       border: 2px dashed rgba(255, 255, 255, 0.2);
     }
     \`\`\`

**Color Scheme (Material Colors)**

Fabric series:
- Linen: #e8dcc4
- Canvas: #d4c5a9
- Denim: #4a5f7f

Grain series:
- Light purple: #e0c3fc
- Pink: #fbc2eb

Leather series:
- Brown leather: #8b6f47, #6b4423
- Black leather: #2a2a2a, #0a0a0a

**Key CSS Class Examples**

\`\`\`css
/* Fabric Texture */
.fabric-texture {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

/* Grain Surface */
.grain-surface {
  background: #e0c3fc;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
  border-radius: 20px;
}

/* Leather Panel */
.leather-panel {
  background: radial-gradient(ellipse at top, #8b6f47 0%, #6b4423 100%);
  border-radius: 12px;
  padding: 32px;
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.4),
    inset 0 -2px 6px rgba(0, 0, 0, 0.3),
    inset 0 2px 6px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(139, 111, 71, 0.3);
}
\`\`\`

**Important Notes**
- Inner + outer shadows create dimensionality
- SVG noise can be embedded with data URI
- repeating-linear-gradient creates textures
- Colors similar with subtle contrast
- Avoid too extreme shadows and contrasts`
};

// 导出模板数组
export const textureTemplates = [
  // clay 已移除 - 無 preview HTML
  // paper 已移除 - 無 preview HTML
  leather,
  fabric,
  grain,
];

export default textureTemplates;
