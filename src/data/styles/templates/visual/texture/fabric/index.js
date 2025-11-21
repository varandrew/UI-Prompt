// Single template module: Texture — Fabric Texture
// 织物质感 - 布料纹理材质

import { demoHTML, customStyles } from './Demo';

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
- 適當降低飽和度与對比度，避免布料紋理在長時間使用時造成視覺疲勞。`,

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
- Slightly muted saturation and contrast help ensure long-term readability and visual comfort.`
  },

  demoHTML,
  customStyles,
};

export default fabric;
