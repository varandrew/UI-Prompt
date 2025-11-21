// Single template module: Light — Spotlight Effect
// 聚光灯 - 聚焦式光束效果

// ✨ 稳定的空数組引用（防止 useMemo 無限循環）
const EMPTY_PREVIEWS = [];

import { demoHTML, customStyles } from './Demo';
import { spotlightFullPageHTML, spotlightFullPageStyles } from './spotlightFullPage';

export const spotlight = {
  id: 'visual-light-spotlight',
  title: 'styles.visual.spotlight.title',
  description: 'styles.visual.spotlight.description',

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 和原生 CSS 创建一个 **Spotlight（聚光灯效果）** 风格的界面，通过戏剧化的舞台光束将用户注意力聚焦在关键内容上。

**核心设计要求**

1. **径向渐变光源系统**
   - 主聚光圈使用 \`radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(147,197,253,0.3) 20%, rgba(147,197,253,0.15) 40%, transparent 80%)\`
   - 中心区域最亮（白光 + 冷蓝辅助光混合），向外平滑过渡至完全透明
   - 光源尺寸：桌面端 800px × 800px，移动端 500px × 500px
   - 光源定位：\`position: fixed; top: -20%; left: 50%; transform: translateX(-50%);\`

2. **深色舞台背景**
   - 主背景：\`background: #000000;\`（纯黑）
   - 舞台地板渐变：\`linear-gradient(to bottom, #0a0a0a 50%, #000000 100%)\`
   - 细微纹理（可选）：\`repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.02) 2px)\`

3. **动态光束移动动画**
   - 聚光灯缓慢在内容区间移动，使用 \`@keyframes spotlightMoveMain\`
   - 动画时长：20-30 秒，\`ease-in-out\` 缓动
   - 变换属性：\`transform: translate(-50%, Y%) scale(0.95-1.1)\`
   - 配合 \`opacity\` 变化（0.8 → 1 → 0.9）创造呼吸感

4. **内容照亮层次系统**
   - Hero 区块：主聚光圈直接照亮，最高优先级
   - 卡片网格：每张卡片有独立小聚光圈（\`radial-gradient\` 200px × 200px），默认透明，hover 时显示
   - 统计数据：微型聚光效果（150px × 150px），脉冲动画 3-4 秒周期
   - CTA 按钮：位于主聚光正中央，额外脉冲光暈增强焦点

5. **交互反馈设计**
   - **Hover 状态**：卡片或按钮被聚光增强照亮，\`box-shadow: 0 20px 40px rgba(59,130,246,0.3)\`
   - **Focus 状态**：边框添加蓝色光晕，\`outline: 2px solid rgba(147,197,253,0.5)\`
   - **Active 状态**：轻微缩放 \`scale(0.98)\` + 阴影收缩

6. **渐进式内容显现**
   - 内容使用 \`animation: contentIlluminate 1-2s ease-out\` 淡入
   - 从 \`opacity: 0; transform: translateY(20px)\` 到完全显示
   - 不同区块添加 0.2s 延迟，创造舞台幕布拉开效果

**配色方案（冷色调 + 戏剧化对比）**

主光源色调：
- 主白光：\`rgba(255, 255, 255, 0.4)\` - 聚光中心
- 冷蓝辅助光：\`rgba(147, 197, 253, 0.3)\` - 光圈外围
- 光晕边缘：\`rgba(255, 255, 255, 0.05)\` - 最外层扩散

背景与内容：
- 舞台黑：\`#000000\` - 主背景
- 暗区渐变：\`#0a0a0a\` - 局部过渡
- 主文字：\`#ffffff\` - 高亮内容
- 次级文字：\`#a0aec0\` - 说明性文本
- 强调色：\`#3b82f6\` - 按钮与链接

**关键 CSS 类示例**

\`\`\`css
/* 主聚光灯光源 */
.spotlight-main-light {
  position: fixed;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(147, 197, 253, 0.3) 20%,
    rgba(147, 197, 253, 0.15) 40%,
    transparent 80%
  );
  pointer-events: none;
  z-index: 10;
  animation: spotlightMoveMain 24s ease-in-out infinite;
  will-change: transform;
}

@keyframes spotlightMoveMain {
  0% { transform: translate(-50%, 0%) scale(1); opacity: 0.8; }
  33% { transform: translate(-30%, 30%) scale(1.1); opacity: 1; }
  66% { transform: translate(-70%, 50%) scale(0.95); opacity: 0.9; }
  100% { transform: translate(-50%, 0%) scale(1); opacity: 0.8; }
}

/* 被照亮的内容卡片 */
.spotlight-card {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.4s ease;
}

.spotlight-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(147, 197, 253, 0.15) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.spotlight-card:hover::before {
  opacity: 1;
}

.spotlight-card:hover {
  transform: translateY(-8px);
  border-color: rgba(147, 197, 253, 0.3);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

/* Hero 标题（主舞台内容） */
.spotlight-hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  background: linear-gradient(to bottom, #ffffff 0%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: contentIlluminate 1.2s ease-out;
}

/* CTA 按钮（强聚光焦点） */
.spotlight-cta-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  transition: all 0.3s ease;
}

.spotlight-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.6);
}
\`\`\`

**间距与布局系统（8px 基础单位）**

- 组件间距：\`gap: 2rem\`（32px）- 中等间距
- 区块内边距：\`padding: 6rem 2rem\`（96px 上下，32px 左右）
- 卡片内边距：\`padding: 2.5rem 2rem\`（40px 上下，32px 左右）
- 最大内容宽度：\`max-width: 1400px\` - 保持舞台感

**动画性能优化**

- 使用 \`transform\` 和 \`opacity\`（GPU 加速）
- 避免动画 \`width\`、\`height\`、\`left\`、\`right\`
- 关键动画元素添加 \`will-change: transform\`
- 长动画周期（20-30s）降低 CPU 负担

**输出格式要求**

- 使用语义化 HTML5 标签（\`<section>\`、\`<article>\`、\`<header>\`）
- TailwindCSS 原子类 + 自定义 CSS 变量结合
- 关键动画和渐变效果使用内嵌 \`<style>\` 标签
- 所有交互元素添加 \`aria-label\` 属性

**重要提示**

1. 聚光灯必须使用 \`position: fixed\`，确保滚动时保持效果
2. 背景必须保持深色（#000000 或接近黑色），否则聚光效果不明显
3. 主聚光圈的 z-index 应高于背景（1-5）但低于导航栏（20+）
4. 移动端需要缩小聚光圈尺寸（500px）并简化动画
5. 内容文字颜色使用 #ffffff 或 #e5e7eb，确保在黑背景上清晰可读
6. 避免过多聚光圈同时移动，保持 1-2 个主光源即可`,

    'en-US': `Please create a **Spotlight Effect** style interface using TailwindCSS and native CSS, focusing user attention on key content through dramatic stage lighting.

**Core Design Requirements**

1. **Radial Gradient Light Source System**
   - Main spotlight uses \`radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(147,197,253,0.3) 20%, rgba(147,197,253,0.15) 40%, transparent 80%)\`
   - Center area is brightest (white + cool blue auxiliary light mix), smoothly transitioning to full transparency
   - Light size: Desktop 800px × 800px, Mobile 500px × 500px
   - Light positioning: \`position: fixed; top: -20%; left: 50%; transform: translateX(-50%);\`

2. **Dark Stage Background**
   - Main background: \`background: #000000;\` (pure black)
   - Stage floor gradient: \`linear-gradient(to bottom, #0a0a0a 50%, #000000 100%)\`
   - Subtle texture (optional): \`repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.02) 2px)\`

3. **Dynamic Light Beam Movement Animation**
   - Spotlight moves slowly between content areas using \`@keyframes spotlightMoveMain\`
   - Animation duration: 20-30 seconds, \`ease-in-out\` easing
   - Transform properties: \`transform: translate(-50%, Y%) scale(0.95-1.1)\`
   - Combined with \`opacity\` changes (0.8 → 1 → 0.9) for breathing effect

4. **Content Illumination Hierarchy System**
   - Hero section: Directly illuminated by main spotlight, highest priority
   - Card grid: Each card has individual small spotlight (\`radial-gradient\` 200px × 200px), transparent by default, visible on hover
   - Statistics: Micro spotlight effect (150px × 150px), pulse animation 3-4 second cycle
   - CTA button: Positioned at center of main spotlight, additional pulse glow enhances focus

5. **Interactive Feedback Design**
   - **Hover state**: Card or button enhanced with spotlight, \`box-shadow: 0 20px 40px rgba(59,130,246,0.3)\`
   - **Focus state**: Border adds blue glow, \`outline: 2px solid rgba(147,197,253,0.5)\`
   - **Active state**: Slight scale \`scale(0.98)\` + shadow contraction

6. **Progressive Content Reveal**
   - Content uses \`animation: contentIlluminate 1-2s ease-out\` fade-in
   - From \`opacity: 0; transform: translateY(20px)\` to fully visible
   - Different sections add 0.2s delay, creating stage curtain opening effect

**Color Scheme (Cool Tones + Dramatic Contrast)**

Main light source colors:
- Primary white light: \`rgba(255, 255, 255, 0.4)\` - Spotlight center
- Cool blue auxiliary light: \`rgba(147, 197, 253, 0.3)\` - Light ring periphery
- Glow edge: \`rgba(255, 255, 255, 0.05)\` - Outermost diffusion

Background & content:
- Stage black: \`#000000\` - Main background
- Dark gradient: \`#0a0a0a\` - Local transitions
- Primary text: \`#ffffff\` - Highlighted content
- Secondary text: \`#a0aec0\` - Explanatory text
- Accent color: \`#3b82f6\` - Buttons and links

**Key CSS Class Examples**

\`\`\`css
/* Main spotlight source */
.spotlight-main-light {
  position: fixed;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(147, 197, 253, 0.3) 20%,
    rgba(147, 197, 253, 0.15) 40%,
    transparent 80%
  );
  pointer-events: none;
  z-index: 10;
  animation: spotlightMoveMain 24s ease-in-out infinite;
  will-change: transform;
}

@keyframes spotlightMoveMain {
  0% { transform: translate(-50%, 0%) scale(1); opacity: 0.8; }
  33% { transform: translate(-30%, 30%) scale(1.1); opacity: 1; }
  66% { transform: translate(-70%, 50%) scale(0.95); opacity: 0.9; }
  100% { transform: translate(-50%, 0%) scale(1); opacity: 0.8; }
}

/* Illuminated content card */
.spotlight-card {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.4s ease;
}

.spotlight-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(147, 197, 253, 0.15) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.spotlight-card:hover::before {
  opacity: 1;
}

.spotlight-card:hover {
  transform: translateY(-8px);
  border-color: rgba(147, 197, 253, 0.3);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

/* Hero title (main stage content) */
.spotlight-hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  background: linear-gradient(to bottom, #ffffff 0%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: contentIlluminate 1.2s ease-out;
}

/* CTA button (strong spotlight focus) */
.spotlight-cta-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  transition: all 0.3s ease;
}

.spotlight-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.6);
}
\`\`\`

**Spacing & Layout System (8px base unit)**

- Component spacing: \`gap: 2rem\` (32px) - Medium spacing
- Section padding: \`padding: 6rem 2rem\` (96px top/bottom, 32px left/right)
- Card padding: \`padding: 2.5rem 2rem\` (40px top/bottom, 32px left/right)
- Max content width: \`max-width: 1400px\` - Maintains stage feel

**Animation Performance Optimization**

- Use \`transform\` and \`opacity\` (GPU accelerated)
- Avoid animating \`width\`, \`height\`, \`left\`, \`right\`
- Add \`will-change: transform\` to key animated elements
- Long animation cycles (20-30s) reduce CPU load

**Output Format Requirements**

- Use semantic HTML5 tags (\`<section>\`, \`<article>\`, \`<header>\`)
- Combine TailwindCSS atomic classes with custom CSS variables
- Use inline \`<style>\` tags for key animations and gradients
- Add \`aria-label\` attributes to all interactive elements

**Important Notes**

1. Spotlight must use \`position: fixed\` to maintain effect during scrolling
2. Background must stay dark (#000000 or near black), otherwise spotlight effect is not visible
3. Main spotlight's z-index should be higher than background (1-5) but lower than navigation (20+)
4. Mobile requires smaller spotlight size (500px) and simplified animations
5. Content text should use #ffffff or #e5e7eb for clear readability on black background
6. Avoid too many spotlights moving simultaneously, keep 1-2 main light sources`
  },

  // 模板級 stylePrompt：描述聚光灯式光效的设計語彙
  stylePrompt: {
    'zh-CN': `角色：你是一位擅长舞台光效与焦點營造的 UI 设计师，需要用「聚光灯」将注意力集中在少数关键模块上。

场景定位：
- 用於強調單一或少数幾個关鍵区塊，例如主要卡片、登入框、行銷重點模組。
- 特別適合活動页、产品發布页、演示型介面或需要「舞台感」的设計。

视觉设计理念：
- 將背景視作舞台或幕布，整体保持較暗，让一到数個聚光圓形成為視覺主角。
- 聚光中心区域亮度最高、對比度最大，越往外越接近透明，使焦點自然落在中心內容上。

材质与质感：
- 聚光灯以徑向漸变實現，中心用高亮度白或淺色，边緣快速過渡到透明，搭配適度模糊。
- 可以在聚光区內疊加輕微阴影或圖案，暗示舞台表面或空氣中的微塵。

交互体验：
- 聚光灯位置可隨緩慢動画在画面中稍微移動，但整体節奏要稳定，避免让使用者眼睛疲勞。
- 當使用者 hover 某個焦點卡片時，可以略微提升該区域的亮度或增加一层次要聚光，強化被「打光」的感覺。

氛围营造：
- 整体氛圍像演出即將開始的舞台：周圍昏暗、中央有一束明確但溫和的光。
- 让使用者感覺主內容是被刻意照亮、值得注視的主角，強化敘事与儀式感。`,

    'en-US': `Role: You are a UI designer who specializes in stage lighting and focus, using “spotlights” to direct attention to a small set of key modules.

Scene:
- Used to emphasize one or a few primary blocks such as main cards, login panels, or marketing highlight sections.
- Especially suitable for event pages, product launch layouts, presentation UIs, or any design that benefits from a theatrical feel.

Visual philosophy:
- Treat the background as a stage or curtain: overall dim, with one or more circular beams becoming the visual protagonists.
- The center of each spotlight is the brightest and highest-contrast area, fading smoothly to transparency so focus naturally falls on the content inside.

Material & texture:
- Implement spotlights with radial gradients: bright white or light tones at the center, quickly transitioning to transparent edges with soft blur.
- You may layer subtle shadows or textures within the lit area to hint at a stage floor or particles in the air.

Interaction:
- Spotlight positions can drift slowly across the canvas, but motion should remain steady and low-frequency to avoid eye strain.
- When the user hovers key cards, you can slightly boost local brightness or add a secondary glow, reinforcing the feeling of being “lit up”.

Mood:
- The interface should feel like a stage just before or during a performance: surroundings darkened, the main subject clearly illuminated.
- Users should sense that the highlighted content is intentional and important, enhancing narrative focus and a sense of ceremony.`
  },

  demoHTML,
  customStyles,
  fullPageHTML: spotlightFullPageHTML,
  fullPageStyles: spotlightFullPageStyles,
  previews: EMPTY_PREVIEWS,  // ✨ 使用稳定的空数組引用
};

export default spotlight;
