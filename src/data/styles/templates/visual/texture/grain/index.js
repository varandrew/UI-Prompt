// Single template module: Texture — Grain Texture
// 颗粒质感 - 粗糙的表面纹理

import { demoHTML, customStyles } from './Demo';

export const grain = {
  id: 'visual-texture-grain',
  title: 'styles.visual.grain.title',
  description: 'styles.visual.grain.description',

  customPrompt: {
    'zh-CN': `核心理念：噪点纹理 + SVG滤镜 + 粗糙表面

设计要点：
1. SVG noise — feTurbulence 滤镜创造颗粒感
2. 细颗粒 — baseFrequency='0.9' numOctaves='4'
3. 粗颗粒 — baseFrequency='0.5' numOctaves='2'
4. 透明度控制 — opacity='0.15'-'0.2' 调节强度
5. 适用场景 — 复古设计、胶片感、纹理背景`,
    'en-US': `Core Concept: Noise texture + SVG filters + Rough surface

Design Points:
1. SVG noise — feTurbulence filter creates grain effect
2. Fine grain — baseFrequency='0.9' numOctaves='4'
3. Coarse grain — baseFrequency='0.5' numOctaves='2'
4. Opacity control — opacity='0.15'-'0.2' adjusts intensity
5. Use cases — Retro design, film look, textured backgrounds`
  },

  // 模板級 stylePrompt：描述顆粒质感与膠片風格
  stylePrompt: {
    'zh-CN': `角色：你是一位擅长打造「胶片颗粒」与复古质感的 UI 设计师，需要用細緻噪點让画面看起來像經過真實攝影或印刷。

场景定位：
- 適合作品集、攝影网站、音樂与文化相关专案，或任何想呈現「Analog / Film」氛圍的介面。
- 顆粒层多用於背景或卡片上层的疊加，不應影響文字辨識度。

视觉设计理念：
- 將顆粒視為一层細霧鋪在画面上，而不是明显的圖案；在遠看時只提升质感，在近看才會注意到細節。
- 与扁平色塊或大面積漸变結合時，顆粒可以弱化「数位感」，让画面更柔和、有溫度。

材质与质感：
- 使用 SVG feTurbulence 或位圖噪點貼圖产生隨機紋理，根据需求調整頻率与 octaves。
- 控制不透明度在 0.1–0.25 之間，避免顆粒過重导致画面髒亂或視覺疲勞。

交互体验：
- 顆粒紋理一般不需隨 hover 而改变，以免造成跳動或错位感；它更像固定在鏡頭或膠片上的物理层。
- 若搭配主題切換，可以輕微調整顆粒強度或色調，让深色／淺色模式都有合適的质感。

氛围营造：
- 顆粒感會帶來「懷舊、真實、略帶粗糙」的情緒，減少過度平滑 UI 的疏離感。
- 使用者應感覺画面像經過相機或印刷機處理過，而不是完全無瑕的数位輸出。`,

    'en-US': `Role: You are a UI designer who specializes in film grain and analog texture, using fine noise to make digital interfaces feel more tangible and lived-in.

Scene:
- Ideal for portfolios, photography sites, music and culture projects, or any interface seeking an “analog / film” atmosphere.
- Grain layers usually sit on backgrounds or card surfaces and must not compromise text readability.

Visual philosophy:
- Think of grain as a soft mist laid over the design: invisible from afar but rewarding closer inspection with subtle detail.
- When combined with flat colors or large gradients, grain reduces the overly plastic digital feel and adds warmth.

Material & texture:
- Generate random patterns via SVG feTurbulence or bitmap noise, tuning frequency and octaves to control fineness.
- Keep opacity around 0.1–0.25 so the texture never dominates or makes the canvas look dirty.

Interaction:
- Noise patterns typically remain static across hover states to avoid jitter or misalignment; they behave like a physical layer on the lens or film.
- Theme switches may gently adjust intensity or hue so both dark and light modes retain appropriate tactile quality.

Mood:
- Grain conveys nostalgia, realism and a hint of roughness, counterbalancing overly smooth, sterile UI.
- Users should feel the screen output resembles something captured or printed, not a perfectly pristine digital gradient.`
  },

  demoHTML,
  customStyles,
};

export default grain;
