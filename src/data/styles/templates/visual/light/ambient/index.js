// Single template module: Light — Ambient Lighting
// 环境光 - 柔和的氛围光效

// ✨ 稳定的空数組引用（防止 useMemo 無限循環）
const EMPTY_PREVIEWS = [];

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './AmbientFullPage';

export const ambient = {
  id: 'visual-light-ambient',
  title: 'styles.visual.ambient.title',
  description: 'styles.visual.ambient.description',

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个「环境光 — 暖色日落光辉」风格的冥想/健康应用界面，营造温暖、疗愈、放松的氛围。

**核心设计要求**

1. **暖色日落光球系统**
   - 珊瑚红光球: radial-gradient(circle at 30% 30%, rgba(255, 107, 107, 0.7) 0%, rgba(255, 107, 107, 0.3) 40%, transparent 70%)
   - 金色光球: radial-gradient(circle at 30% 30%, rgba(254, 202, 87, 0.65) 0%, rgba(254, 202, 87, 0.25) 40%, transparent 70%)
   - 粉紫光球: radial-gradient(circle at 30% 30%, rgba(255, 159, 243, 0.6) 0%, rgba(255, 159, 243, 0.2) 40%, transparent 70%)

2. **大范围模糊效果**
   - 主光球: filter: blur(70px)
   - 次要光球: filter: blur(65px)
   - 创造柔和、无边界的氛围感

3. **低透明度与层次感**
   - 光球透明度: opacity: 0.5-0.75
   - 卡片背景: rgba(255, 255, 255, 0.02-0.04)
   - 边框: rgba(255, 159, 243, 0.1-0.15)

4. **缓慢浮动动画（10-16 秒循环）**
   - 珊瑚红光球: animation: ambientFloat1 10s ease-in-out infinite
   - 金色光球: animation: ambientFloat2 12s ease-in-out infinite
   - 粉紫光球: animation: ambientFloat3 14s ease-in-out infinite
   - 平移范围: translate(20px-35px, -15px to 30px)

5. **玻璃态设计 (Glassmorphism)**
   - backdrop-filter: blur(25px-30px)
   - -webkit-backdrop-filter: blur(25px-30px)
   - 微妙阴影: box-shadow: 0 8px 32px rgba(255, 107, 107, 0.15)

**配色方案（暖色日落光辉 — Warm Sunset Glow）**

主色调：
- 珊瑚红: #ff6b6b, rgba(255, 107, 107, 0.7)
- 金色: #feca57, rgba(254, 202, 87, 0.65)
- 粉紫色: #ff9ff3, rgba(255, 159, 243, 0.6)
- 暖橙色: #ff8c6b, rgba(255, 140, 107, 0.55)
- 柔桃色: #ffc896, rgba(255, 200, 150, 0.5)

背景色：
- 深暖棕: #2a1a1f, #1a0f14
- 渐变背景: radial-gradient(circle at 50% 50%, #2a1a1f 0%, #1a0f14 100%)

**关键 CSS 类示例**

\`\`\`css
/* 暖色环境光球 */
.ambient-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
  opacity: 0.7;
  will-change: transform;
}

.ambient-orb-coral {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 107, 107, 0.7) 0%,
    rgba(255, 107, 107, 0.3) 40%,
    transparent 70%
  );
  top: -100px;
  left: -100px;
  animation: ambientFloat1 10s ease-in-out infinite;
}

/* 玻璃态卡片 */
.meditation-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 159, 243, 0.15);
  border-radius: 20px;
  padding: 48px 32px;
  box-shadow: 0 8px 32px rgba(255, 107, 107, 0.15);
}

/* 缓慢浮动动画 */
@keyframes ambientFloat1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(35px, -25px) scale(1.05);
    opacity: 0.8;
  }
}
\`\`\`

**冥想应用专用元素**

- 呼吸练习计时器: 圆形 SVG 进度环 + 渐变描边
- 统计卡片: 2x2 网格布局 + 玻璃态效果
- 功能卡片: 图标 + 标题 + 描述，悬停轻微上浮
- 评价组件: 头像 + 星级 + 引用文本

**响应式要求**

- Desktop (> 1024px): 多列布局，光球 400-500px
- Tablet (768-1024px): 2 列布局，光球 300-350px
- Mobile (< 768px): 单列布局，光球 200-250px，隐藏部分光球提升性能

**重要提示**
- 所有动画需支持 prefers-reduced-motion 无障碍设置
- 光球使用 will-change: transform 优化性能
- 背景必须使用深色调（#1a0f14, #2a1a1f）以凸显暖色光效
- 文字渐变使用 linear-gradient(135deg, #ffffff 0%, #feca57 100%)`,

    'en-US': `Please create an "Ambient Light — Warm Sunset Glow" style meditation/wellness app interface using TailwindCSS, cultivating a warm, healing, and relaxing atmosphere.

**Core Design Requirements**

1. **Warm Sunset Orb System**
   - Coral red orb: radial-gradient(circle at 30% 30%, rgba(255, 107, 107, 0.7) 0%, rgba(255, 107, 107, 0.3) 40%, transparent 70%)
   - Golden orb: radial-gradient(circle at 30% 30%, rgba(254, 202, 87, 0.65) 0%, rgba(254, 202, 87, 0.25) 40%, transparent 70%)
   - Pink-purple orb: radial-gradient(circle at 30% 30%, rgba(255, 159, 243, 0.6) 0%, rgba(255, 159, 243, 0.2) 40%, transparent 70%)

2. **Large Blur Effects**
   - Primary orbs: filter: blur(70px)
   - Secondary orbs: filter: blur(65px)
   - Create soft, boundless atmospheric feeling

3. **Low Opacity & Layering**
   - Orb opacity: opacity: 0.5-0.75
   - Card backgrounds: rgba(255, 255, 255, 0.02-0.04)
   - Borders: rgba(255, 159, 243, 0.1-0.15)

4. **Slow Floating Animations (10-16s cycles)**
   - Coral orb: animation: ambientFloat1 10s ease-in-out infinite
   - Golden orb: animation: ambientFloat2 12s ease-in-out infinite
   - Pink orb: animation: ambientFloat3 14s ease-in-out infinite
   - Translation range: translate(20px-35px, -15px to 30px)

5. **Glassmorphism Design**
   - backdrop-filter: blur(25px-30px)
   - -webkit-backdrop-filter: blur(25px-30px)
   - Subtle shadows: box-shadow: 0 8px 32px rgba(255, 107, 107, 0.15)

**Color Scheme (Warm Sunset Glow)**

Primary colors:
- Coral red: #ff6b6b, rgba(255, 107, 107, 0.7)
- Golden yellow: #feca57, rgba(254, 202, 87, 0.65)
- Pink purple: #ff9ff3, rgba(255, 159, 243, 0.6)
- Warm orange: #ff8c6b, rgba(255, 140, 107, 0.55)
- Soft peach: #ffc896, rgba(255, 200, 150, 0.5)

Background colors:
- Deep warm brown: #2a1a1f, #1a0f14
- Gradient background: radial-gradient(circle at 50% 50%, #2a1a1f 0%, #1a0f14 100%)

**Key CSS Class Examples**

\`\`\`css
/* Warm ambient light orb */
.ambient-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
  opacity: 0.7;
  will-change: transform;
}

.ambient-orb-coral {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 107, 107, 0.7) 0%,
    rgba(255, 107, 107, 0.3) 40%,
    transparent 70%
  );
  top: -100px;
  left: -100px;
  animation: ambientFloat1 10s ease-in-out infinite;
}

/* Glassmorphism card */
.meditation-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 159, 243, 0.15);
  border-radius: 20px;
  padding: 48px 32px;
  box-shadow: 0 8px 32px rgba(255, 107, 107, 0.15);
}

/* Slow floating animation */
@keyframes ambientFloat1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(35px, -25px) scale(1.05);
    opacity: 0.8;
  }
}
\`\`\`

**Meditation App Specific Elements**

- Breathing exercise timer: Circular SVG progress ring + gradient stroke
- Stats cards: 2x2 grid layout + glassmorphism effect
- Feature cards: Icon + title + description, slight lift on hover
- Testimonial component: Avatar + star rating + quote text

**Responsive Requirements**

- Desktop (> 1024px): Multi-column layout, orbs 400-500px
- Tablet (768-1024px): 2-column layout, orbs 300-350px
- Mobile (< 768px): Single column, orbs 200-250px, hide some orbs for performance

**Important Notes**
- All animations must support prefers-reduced-motion accessibility
- Orbs use will-change: transform for performance optimization
- Background must use dark tones (#1a0f14, #2a1a1f) to highlight warm light effects
- Text gradients use linear-gradient(135deg, #ffffff 0%, #feca57 100%)`
  },

  // 模板級 stylePrompt：敘事描述環境光風格（暖色日落光輝 + 冥想主題）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精「暖色环境光 + 冥想疗愈」设计的 UI 设计师，擅长用柔和的日落光晕与模糊色斑，为冥想、健康应用营造温暖、放松、疗愈的氛围，让用户在使用界面时就能感受到内心的平静。

场景定位：
- **核心应用场景**：冥想应用、健康管理平台、睡眠辅助工具、呼吸练习 App、瑜伽课程平台。
- **Hero 区域**：大标题 "Find Your Inner Peace" 配合暖色光球浮动，营造温暖迎接感。
- **仪表板背景**：统计卡片（每日冥想时长、课程完成数）悬浮在暖色光晕之上，数据可视化更有情绪温度。
- **功能展示区**：呼吸练习、引导冥想、睡眠故事三大卡片，背景光球错落分布，每个功能都像被温柔包裹。
- **用户评价区**：柔和的粉紫光晕衬托用户头像与五星评分，让评价更有人情味。
- **冥想计时器**：圆形 SVG 进度环配合金色渐变描边，中心显示倒计时，周围暖橙光球缓慢呼吸，仿佛与用户的呼吸同步。

光斑本身不承载关键信息，而是作为情绪底色，让玻璃态卡片、渐变文字、统计数字更有空气感与深度。

视觉设计理念：
- **暖色日落光谱系统**：使用 5 个暖色光球（珊瑚红 #ff6b6b、金色 #feca57、粉紫 #ff9ff3、暖橙 #ff8c6b、柔桃 #ffc896），模拟日落时分的温暖光线透过空气散射到界面上。
- **光晕的边缘处理**：所有光球使用 filter: blur(65px-70px) 完全柔化边缘，避免明确圆圈或硬边，看起来像「氛围」而不是装饰图形。用户应该感觉到光的存在，但无法指出光球的确切边界。
- **多层次光源分布**：5 个光球分别位于左上、右下、左中、右上、中心，创造环绕式的温暖光环，像是日落时分四面八方的余晖。
- **径向渐变的呼吸感**：每个光球使用 radial-gradient(circle at 30% 30%, color 0%, transparent 70%)，从中心向外自然衰减，模拟真实光源的发散规律。

材质与质感：
- **暖色透明度控制**：珊瑚红光球 opacity: 0.75，金色光球 opacity: 0.7，粉紫光球 opacity: 0.65，透明度递减营造远近层次，前景内容始终清晰可读。
- **深暖棕背景基底**：使用 radial-gradient(circle at 50% 50%, #2a1a1f 0%, #1a0f14 100%)，深色调让暖色光球更加突出，仿佛在黑夜中点亮温暖的蜡烛。
- **玻璃态卡片融合**：统计卡片、功能卡片、评价卡片均使用 backdrop-filter: blur(25px-30px) + rgba(255, 255, 255, 0.02-0.04) 背景，与暖色光球完美融合，形成「光穿透磨砂玻璃」的梦幻质感。
- **微妙阴影层次**：卡片阴影使用 box-shadow: 0 8px 32px rgba(255, 107, 107, 0.15)，珊瑚红色的柔和阴影让卡片像是被温暖光线托起。
- **渐变文字点缀**：大标题使用 linear-gradient(135deg, #ffffff 0%, #feca57 100%)，从白色渐变到金色，与光球色系呼应，强化温暖疗愈的情绪基调。

交互体验：
- **缓慢呼吸节奏（10-16 秒循环）**：
  - 珊瑚红光球：10 秒，向右上方轻移 35px，缩放 1.05 倍，opacity 0.75 → 0.85
  - 金色光球：12 秒，向左下方轻移 30px，缩放 1.08 倍，opacity 0.7 → 0.8
  - 粉紫光球：14 秒，向右下方轻移 25px，缩放 1.06 倍，opacity 0.65 → 0.75
  - 暖橙光球：16 秒，向左上方轻移 20px，缩放 1.07 倍，opacity 0.6 → 0.7
  - 柔桃光球：13 秒，中心微缩放 1.1 倍，opacity 0.5 → 0.65
- **轻微鼠标追踪（可选）**：光球对鼠标位置做出轻微避让反应（300px 感应半径，0.08 倍力度），营造互动感但不干扰主要内容。当鼠标远离时，光球以 0.6 秒缓慢复位，仿佛「呼吸回归平静」。
- **背景持续呼吸**：光球动画独立于用户操作，以固定节奏「呼吸」，营造冥想应用特有的平静氛围，避免让用户感到分心或焦虑。
- **无障碍支持**：检测 prefers-reduced-motion，若用户启用减少动画，则停止所有光球浮动，仅保留静态光晕，确保包容性设计。

氛围营造：
- **整体情绪定位**：「温暖、疗愈、平静、带一点梦幻」，像是日落时分坐在海边冥想，温暖的余晖从四面八方包裹全身。
- **打破冷色科技感**：与常见的蓝紫色（Purple-Blue Spectrum）环境光形成差异化，暖色系更适合冥想、健康类产品，减少科技距离感，增强人性化温度。
- **空间与深度感**：用户应该感觉界面背后不是平面墙壁，而是有温暖光源的三维空间，仿佛光从遥远的日落天边散射而来。
- **呼吸与同步感**：光球的缓慢浮动（10-16 秒）与人类自然呼吸节奏（4-6 秒一次呼吸）形成微妙共鸣，用户潜意识中会感到放松。
- **品牌情绪传递**：暖色光球不仅是视觉装饰，更是品牌价值「温暖陪伴、疗愈身心」的隐喻表达，让用户在打开 App 的第一秒就感受到关怀。

设计细节把控：
- **光球尺寸递减**：主光球 500px（左上珊瑚红）→ 450px（右下金色）→ 400px（左中粉紫）→ 350px（右上暖橙）→ 300px（中心柔桃），营造远近层次，避免平面感。
- **模糊半径一致性**：所有光球统一使用 blur(65px-70px)，确保柔和度一致，避免部分光球过于锐利破坏整体氛围。
- **颜色饱和度控制**：暖色光球使用低饱和度版本（rgba 透明度通道），避免过于鲜艳刺眼，保持「柔和日落」而非「霓虹派对」的感觉。
- **深色背景必须性**：必须使用深暖棕 (#2a1a1f, #1a0f14) 背景，若使用浅色背景，暖色光球会失去视觉冲击力，效果大打折扣。
- **响应式光球适配**：移动端（< 768px）减少光球尺寸（200-250px）并隐藏中心柔桃光球，避免性能问题，保证 60fps 流畅体验。

适用产品类型：
- ✅ 冥想应用（Headspace、Calm 同类产品）
- ✅ 睡眠辅助工具（白噪音、睡眠故事）
- ✅ 呼吸练习 App（Box Breathing、4-7-8 技巧）
- ✅ 瑜伽课程平台（线上瑜伽、冥想课程）
- ✅ 健康管理平台（心理健康、情绪日记）
- ✅ 个人成长社区（冥想挑战、正念打卡）
- ❌ 高强度运动 App（应使用鲜艳撞色）
- ❌ 金融理财产品（应使用冷静蓝绿色）
- ❌ 电商购物平台（光球会分散购买决策注意力）

最终检查清单：
1. 是否使用暖色光谱（#ff6b6b, #feca57, #ff9ff3）而非冷色？
2. 所有光球是否有 blur(65px-70px) 完全柔化边缘？
3. 背景是否为深暖棕色（#2a1a1f, #1a0f14）？
4. 动画循环时间是否在 10-16 秒区间？
5. 卡片是否使用玻璃态（backdrop-filter: blur(25px-30px)）？
6. 是否支持 prefers-reduced-motion 无障碍设置？
7. 移动端是否隐藏部分光球以优化性能？`,

    'en-US': `Role: You are a UI designer specializing in "Warm Ambient Light + Meditation Healing" design, expert at using soft sunset halos and blurred color patches to create warm, relaxing, and therapeutic atmospheres for meditation and wellness applications, allowing users to feel inner peace just by using the interface.

Scene Positioning:
- **Core application scenarios**: Meditation apps, health management platforms, sleep aid tools, breathing exercise apps, yoga course platforms.
- **Hero area**: Large title "Find Your Inner Peace" with warm color orbs floating, creating a warm welcoming feeling.
- **Dashboard background**: Stats cards (daily meditation duration, course completion) float above warm halos, making data visualization more emotionally warm.
- **Feature showcase area**: Three cards for breathing exercises, guided meditation, sleep stories, with background orbs distributed in layers, each function gently wrapped.
- **User testimonial area**: Soft pink-purple halos set off user avatars and five-star ratings, making reviews more humane.
- **Meditation timer**: Circular SVG progress ring with golden gradient stroke, countdown display in center, surrounded by warm orange orbs slowly breathing, as if synchronized with user's breath.

The halos themselves carry no key information, but serve as emotional base colors, giving glassmorphism cards, gradient text, and statistics more sense of air and depth.

Visual Design Philosophy:
- **Warm sunset light spectrum system**: Use 5 warm color orbs (coral red #ff6b6b, gold #feca57, pink-purple #ff9ff3, warm orange #ff8c6b, soft peach #ffc896) to simulate warm light from sunset scattering through air onto the interface.
- **Halo edge treatment**: All orbs use filter: blur(65px-70px) to completely soften edges, avoiding clear circles or hard edges, appearing as "atmosphere" rather than decorative graphics. Users should feel the presence of light but cannot point out exact boundaries of orbs.
- **Multi-layer light source distribution**: 5 orbs located at top-left, bottom-right, center-left, top-right, and center, creating an encircling warm halo like sunset glow from all directions.
- **Breathing sense of radial gradients**: Each orb uses radial-gradient(circle at 30% 30%, color 0%, transparent 70%), naturally decaying from center outward, simulating real light source dispersion patterns.

Material & Texture:
- **Warm color opacity control**: Coral red orb opacity: 0.75, gold orb opacity: 0.7, pink-purple orb opacity: 0.65, decreasing opacity creates near-far layering while keeping foreground content clearly readable.
- **Deep warm brown background base**: Use radial-gradient(circle at 50% 50%, #2a1a1f 0%, #1a0f14 100%), dark tones make warm orbs more prominent, like lighting warm candles in the night.
- **Glassmorphism card fusion**: Stats cards, feature cards, testimonial cards all use backdrop-filter: blur(25px-30px) + rgba(255, 255, 255, 0.02-0.04) background, perfectly blending with warm orbs to form "light penetrating frosted glass" dreamy texture.
- **Subtle shadow layering**: Card shadows use box-shadow: 0 8px 32px rgba(255, 107, 107, 0.15), soft coral red shadows make cards appear lifted by warm light.
- **Gradient text accent**: Large titles use linear-gradient(135deg, #ffffff 0%, #feca57 100%), gradating from white to gold, echoing orb color scheme, reinforcing warm healing emotional tone.

Interactive Experience:
- **Slow breathing rhythm (10-16s cycles)**:
  - Coral red orb: 10s, slight movement 35px top-right, scale 1.05x, opacity 0.75 → 0.85
  - Gold orb: 12s, slight movement 30px bottom-left, scale 1.08x, opacity 0.7 → 0.8
  - Pink-purple orb: 14s, slight movement 25px bottom-right, scale 1.06x, opacity 0.65 → 0.75
  - Warm orange orb: 16s, slight movement 20px top-left, scale 1.07x, opacity 0.6 → 0.7
  - Soft peach orb: 13s, center micro-scale 1.1x, opacity 0.5 → 0.65
- **Slight mouse tracking (optional)**: Orbs gently move away from mouse position (300px sensing radius, 0.08x force), creating interaction without disrupting main content. When mouse moves away, orbs slowly reset in 0.6s, as if "breathing returns to calm."
- **Background continuous breathing**: Orb animations independent of user operations, "breathing" at fixed rhythm, creating meditation app's unique calm atmosphere, avoiding user distraction or anxiety.
- **Accessibility support**: Detect prefers-reduced-motion, if user enables reduced animation, stop all orb floating, keeping only static halos, ensuring inclusive design.

Atmosphere Creation:
- **Overall emotional positioning**: "Warm, healing, calm, with a touch of dreaminess," like meditating by the seaside at sunset, warm glow wrapping from all directions.
- **Breaking cold tech feeling**: Differentiate from common blue-purple (Purple-Blue Spectrum) ambient light, warm colors more suitable for meditation and health products, reducing tech distance, enhancing humanized warmth.
- **Spatial & depth sense**: Users should feel interface background is not a flat wall but a three-dimensional space with warm light sources, as if light scatters from distant sunset horizon.
- **Breathing & synchronization sense**: Slow floating of orbs (10-16s) subtly resonates with natural human breathing rhythm (4-6s per breath), users subconsciously feel relaxed.
- **Brand emotion transmission**: Warm orbs are not just visual decoration, but metaphorical expression of brand values "warm companionship, healing body and mind," making users feel cared for in the first second of opening the app.

Design Detail Control:
- **Orb size decreasing**: Main orb 500px (top-left coral red) → 450px (bottom-right gold) → 400px (center-left pink-purple) → 350px (top-right warm orange) → 300px (center soft peach), creating near-far layering, avoiding flatness.
- **Blur radius consistency**: All orbs uniformly use blur(65px-70px), ensuring consistent softness, avoiding some orbs being too sharp and breaking overall atmosphere.
- **Color saturation control**: Warm orbs use low-saturation versions (rgba transparency channel), avoiding overly bright eye strain, maintaining "soft sunset" rather than "neon party" feeling.
- **Dark background necessity**: Must use deep warm brown (#2a1a1f, #1a0f14) background, if using light background, warm orbs lose visual impact, effect greatly reduced.
- **Responsive orb adaptation**: Mobile (< 768px) reduce orb size (200-250px) and hide center soft peach orb, avoiding performance issues, ensuring smooth 60fps experience.

Suitable Product Types:
- ✅ Meditation apps (Headspace, Calm similar products)
- ✅ Sleep aid tools (white noise, sleep stories)
- ✅ Breathing exercise apps (Box Breathing, 4-7-8 technique)
- ✅ Yoga course platforms (online yoga, meditation courses)
- ✅ Health management platforms (mental health, mood diary)
- ✅ Personal growth communities (meditation challenges, mindfulness check-ins)
- ❌ High-intensity exercise apps (should use vibrant contrasting colors)
- ❌ Finance products (should use calm blue-green)
- ❌ E-commerce shopping platforms (orbs distract purchase decision attention)

Final Checklist:
1. Using warm color spectrum (#ff6b6b, #feca57, #ff9ff3) instead of cool colors?
2. All orbs have blur(65px-70px) fully softening edges?
3. Background is deep warm brown (#2a1a1f, #1a0f14)?
4. Animation cycle time within 10-16s range?
5. Cards use glassmorphism (backdrop-filter: blur(25px-30px))?
6. Support prefers-reduced-motion accessibility setting?
7. Mobile hides some orbs to optimize performance?`
  },

  demoHTML,
  customStyles,
  fullPageHTML,
  fullPageStyles,
  previews: EMPTY_PREVIEWS,  // ✨ 使用稳定的空数組引用
};

export default ambient;
