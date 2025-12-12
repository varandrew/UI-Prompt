// Single template module: Texture — Fabric Texture
// 织物质感 - 布料纹理材质

import { demoHTML, customStyles } from './Demo';
import { fabricFullPageHTML, fabricFullPageStyles } from './FabricFullPage';

export const fabric = {
  id: 'visual-texture-fabric',
  title: 'styles.visual.fabric.title',
  description: 'styles.visual.fabric.description',

  customPrompt: {
    'zh-CN': `核心理念：编织纹理 + 交叉线条 + 自然色彩

设计要点：
1. 交叉渐变 — repeating-linear-gradient 45deg 和 -45deg
2. 亚麻布 — 垂直和水平细线交织
3. 帆布 — 斜向交叉纹理
4. 牛仔布 — 深色底 + 白色和黑色交织线
5. 适用场景 — 背景纹理、卡片材质、自然风格界面`,
    'en-US': `Core Concept: Woven texture + Cross lines + Natural colors

Design Points:
1. Cross gradients — repeating-linear-gradient 45deg and -45deg
2. Linen — Vertical and horizontal fine lines interwoven
3. Canvas — Diagonal cross texture
4. Denim — Dark base + white and black woven lines
5. Use cases — Background textures, card materials, natural style interfaces`
  },

  // 模板級 stylePrompt：描述織物质感風格与適用場景
  stylePrompt: {
    'zh-CN': `角色：你是一位擅长用「织物质感」营造自然、亲切界面的 UI 设计师，需要用布料紋理让画面更有人情味与日常感。

场景定位：
- 適合作為设定页、收藏区、筆記或任务看板的背景，让內容像放在桌布或布面上。
- 對於手作品牌、生活方式产品、教育或兒童向设計特別合適。

视觉设计理念：
- 使用大面積亞麻、帆布或牛仔色塊作為背景，細節靠規律但細膩的交叉线條來呈現。
- 視覺重點仍應放在卡片与文字，布料紋理主要提供溫度与层次，而不是搶戲的主角。

材质与质感：
- 透過 repeating-linear-gradient 疊加 90° / 45° / -45° 細线，模擬垂直与水平纖維交織。
- 可輕微加入噪點或色差，让材质更接近真實布面，而非完全電腦化的网格。

交互体验：
- 布料本身不需跟隨 hover 強烈变化，只需在整体主題切換或页面捲動時保持稳定。
- 卡片或按鈕可以使用略微抬起的阴影，營造「放在布面上」的立体感。

氛围营造：
- 整体氛圍應該溫暖、生活化，让使用者覺得介面是「可觸摸」而非冰冷屏幕。
- 適當降低飽和度与對比度，避免布料紋理在長時間使用時造成視覺疲勞。

**配色方案（自然布料色系）**

主色調（三種布料材質）：
- 亞麻米黃 (Linen Beige): #e8dcc4, #dfd0b0 (漸變用)
- 帆布卡其 (Canvas Khaki): #d4c5a9, #c5b595 (漸變用)
- 牛仔藍灰 (Denim Blue-Gray): #4a5f7f, #3d4f68 (漸變用)

背景色（溫暖中性）：
- 溫暖米白 (Warm Off-White): #f5f2ed
- 柔和灰米 (Soft Gray-Beige): #ebe8e3
- 純白襯底 (Pure White): #ffffff

文字色（可讀性優先）：
- 深灰藍 (Dark Gray-Blue): #2c3e50 - 主要文字
- 柔和灰 (Soft Gray): #5a6c7d - 次要文字
- 白色文字 (White Text): #ffffff - 用於深色背景

點綴色（自然元素）：
- 泥土棕 (Earth Brown): #8b7355 - 標籤、徽章
- 鼠尾草綠 (Sage Green): #9caf88 - 可選點綴
- 陶土橙 (Terracotta): #d4a574 - 可選點綴

縫線色（細節裝飾）：
- 淺色縫線 (Light Stitch): rgba(255, 255, 255, 0.6)
- 深色縫線 (Dark Stitch): rgba(0, 0, 0, 0.15)

**關鍵 CSS 類示例**

\`\`\`css
/* 亞麻布紋理背景 */
.fabric-linen-texture {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
}

/* 帆布紋理背景 */
.fabric-canvas-texture {
  background: #d4c5a9;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.02) 3px,
      rgba(0, 0, 0, 0.02) 6px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.02) 3px,
      rgba(0, 0, 0, 0.02) 6px
    );
}

/* 牛仔布紋理背景 */
.fabric-denim-texture {
  background: #4a5f7f;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.05) 2px,
      rgba(255, 255, 255, 0.05) 4px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.1) 2px,
      rgba(0, 0, 0, 0.1) 4px
    );
}

/* 亞麻布按鈕 */
.fabric-btn-linen {
  background: #e8dcc4;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px 32px;
  color: #2c3e50;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
}

.fabric-btn-linen::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 12px;
  right: 12px;
  border-top: 1px dashed rgba(255, 255, 255, 0.5);
}

.fabric-btn-linen::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 12px;
  right: 12px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
}

.fabric-btn-linen:hover {
  background: #dfd0b0;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* 布料卡片 */
.fabric-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.fabric-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

/* 縫線細節 */
.fabric-stitch-border {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  border-bottom: 2px dashed rgba(139, 115, 85, 0.3);
}

/* 布料標籤 */
.fabric-tag {
  display: inline-block;
  background: #8b7355;
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 0.8em;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
\`\`\`

**技術實現細節**

1. **布料紋理疊加技術**：
   - 使用兩層 \`repeating-linear-gradient\` 模擬經緯線交織
   - 亞麻布：90° 和 0° 正交，間距 2-4px
   - 帆布：45° 和 -45° 斜交，間距 3-6px
   - 牛仔布：45° 和 -45° 斜交，淺色線 + 深色線混合，間距 2-4px

2. **縫線效果實現**：
   - 使用 \`border: 1px dashed\` 搭配 rgba 顏色
   - 添加 \`box-shadow\` 創造立體感
   - 淺色縫線用於亮部，深色縫線用於暗部

3. **陰影層次系統**：
   - 靜止狀態：0 4px 12px rgba(0,0,0,0.1)
   - 懸停狀態：0 6px 16px rgba(0,0,0,0.2)
   - 按壓狀態：0 2px 8px rgba(0,0,0,0.15)

4. **過渡動畫**：
   - 統一使用 \`transition: all 0.3s ease\`
   - 懸停時 \`transform: translateY(-2px)\` 至 \`translateY(-8px)\`
   - 避免過度動畫，保持布料質感的穩定性

**響應式設計**

\`\`\`css
@media (max-width: 1024px) {
  /* 平板佈局 */
  .fabric-card {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  /* 手機佈局 */
  .fabric-btn {
    width: 100%;
    padding: 14px 24px;
  }

  .fabric-card {
    padding: 20px;
  }
}
\`\`\`

**間距系統（8px 基礎單位）**

- xs: 8px - 小間距
- sm: 16px - 標準間距
- md: 24px - 中等間距
- lg: 32px - 大間距
- xl: 48px - 超大間距
- 2xl: 64px - 區塊間距

**重要提示**

- 布料紋理應該微妙，不要過度搶眼
- 使用自然色系，避免高飽和度顏色
- 縫線細節是點睛之筆，但不要過多
- 保持良好的文字可讀性，布料紋理僅作為背景
- 手寫字體（如 Caveat, Dancing Script）可增強手作感
- 適合展示手作品牌、生活方式產品、教育內容`,

    'en-US': `Role: You are a UI designer who uses fabric textures to create natural, friendly interfaces, bringing warmth and everyday familiarity to the screen.

Scene:
- Works well as a backdrop for settings, collections, notes or task boards, as if content rests on a tablecloth or textile surface.
- Especially fitting for craft brands, lifestyle products, education and child-oriented designs.

Visual philosophy:
- Use large linen, canvas or denim-like blocks as backgrounds while keeping focus on cards and text layered above them.
- The fabric pattern should provide warmth and depth, not compete with primary content for attention.

Material & texture:
- Layer repeating-linear-gradients at 90°, 45° and -45° to mimic vertical and horizontal fibers weaving together.
- Add light noise or color variation so the surface feels like real cloth rather than a sterile digital grid.

Interaction:
- The fabric background itself should remain stable across hover interactions; only theme or page transitions might affect it.
- Cards and buttons can cast soft shadows so they appear to sit on top of the textile surface.

Mood:
- Overall the mood is warm, tactile and domestic, making the interface feel more like an object in daily life than a cold screen.
- Slightly muted saturation and contrast help ensure long-term readability and visual comfort.

**Color Scheme (Natural Fabric Palette)**

Primary Colors (Three Fabric Materials):
- Linen Beige: #e8dcc4, #dfd0b0 (for gradients)
- Canvas Khaki: #d4c5a9, #c5b595 (for gradients)
- Denim Blue-Gray: #4a5f7f, #3d4f68 (for gradients)

Background Colors (Warm Neutrals):
- Warm Off-White: #f5f2ed
- Soft Gray-Beige: #ebe8e3
- Pure White: #ffffff

Text Colors (Readability Priority):
- Dark Gray-Blue: #2c3e50 - Primary text
- Soft Gray: #5a6c7d - Secondary text
- White Text: #ffffff - For dark backgrounds

Accent Colors (Natural Elements):
- Earth Brown: #8b7355 - Tags, badges
- Sage Green: #9caf88 - Optional accent
- Terracotta: #d4a574 - Optional accent

Stitch Colors (Detail Decoration):
- Light Stitch: rgba(255, 255, 255, 0.6)
- Dark Stitch: rgba(0, 0, 0, 0.15)

**Key CSS Class Examples**

\`\`\`css
/* Linen Fabric Texture Background */
.fabric-linen-texture {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
}

/* Canvas Fabric Texture Background */
.fabric-canvas-texture {
  background: #d4c5a9;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.02) 3px,
      rgba(0, 0, 0, 0.02) 6px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.02) 3px,
      rgba(0, 0, 0, 0.02) 6px
    );
}

/* Denim Fabric Texture Background */
.fabric-denim-texture {
  background: #4a5f7f;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.05) 2px,
      rgba(255, 255, 255, 0.05) 4px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.1) 2px,
      rgba(0, 0, 0, 0.1) 4px
    );
}

/* Linen Fabric Button */
.fabric-btn-linen {
  background: #e8dcc4;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px 32px;
  color: #2c3e50;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
}

.fabric-btn-linen::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 12px;
  right: 12px;
  border-top: 1px dashed rgba(255, 255, 255, 0.5);
}

.fabric-btn-linen::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 12px;
  right: 12px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
}

.fabric-btn-linen:hover {
  background: #dfd0b0;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* Fabric Card */
.fabric-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.fabric-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

/* Stitch Detail */
.fabric-stitch-border {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  border-bottom: 2px dashed rgba(139, 115, 85, 0.3);
}

/* Fabric Tag */
.fabric-tag {
  display: inline-block;
  background: #8b7355;
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 0.8em;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
\`\`\`

**Technical Implementation Details**

1. **Fabric Texture Overlay Technique**:
   - Use two layers of \`repeating-linear-gradient\` to simulate warp and weft weaving
   - Linen: 90° and 0° orthogonal, 2-4px spacing
   - Canvas: 45° and -45° diagonal cross, 3-6px spacing
   - Denim: 45° and -45° diagonal cross, light + dark lines mixed, 2-4px spacing

2. **Stitch Effect Implementation**:
   - Use \`border: 1px dashed\` with rgba colors
   - Add \`box-shadow\` for three-dimensional effect
   - Light stitches for highlights, dark stitches for shadows

3. **Shadow Hierarchy System**:
   - Resting state: 0 4px 12px rgba(0,0,0,0.1)
   - Hover state: 0 6px 16px rgba(0,0,0,0.2)
   - Pressed state: 0 2px 8px rgba(0,0,0,0.15)

4. **Transition Animations**:
   - Unified \`transition: all 0.3s ease\`
   - Hover \`transform: translateY(-2px)\` to \`translateY(-8px)\`
   - Avoid excessive animation, maintain fabric texture stability

**Responsive Design**

\`\`\`css
@media (max-width: 1024px) {
  /* Tablet layout */
  .fabric-card {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  /* Mobile layout */
  .fabric-btn {
    width: 100%;
    padding: 14px 24px;
  }

  .fabric-card {
    padding: 20px;
  }
}
\`\`\`

**Spacing System (8px base unit)**

- xs: 8px - Small spacing
- sm: 16px - Standard spacing
- md: 24px - Medium spacing
- lg: 32px - Large spacing
- xl: 48px - Extra large spacing
- 2xl: 64px - Block spacing

**Important Notes**

- Fabric textures should be subtle, not overpowering
- Use natural color palettes, avoid highly saturated colors
- Stitch details are finishing touches, but don't overuse them
- Maintain good text readability, fabric texture is background only
- Handwriting fonts (e.g., Caveat, Dancing Script) can enhance the handcrafted feel
- Best suited for artisan brands, lifestyle products, educational content`
  },

  demoHTML,
  customStyles,

  // 全頁預覽 (Artisan Craft Landing Page)
  fullPageHTML: fabricFullPageHTML,
  fullPageStyles: fabricFullPageStyles,
  layoutMode: 'fullPage',
};

export default fabric;
