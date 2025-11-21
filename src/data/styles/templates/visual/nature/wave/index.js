// Aurora Wave (極光海浪) - Visual Nature Wave Effect
// 結合極光現象与海浪律動的夢幻多彩視覺效果

import { demoHTML, customStyles as demoStyles } from './Demo.js';
import {
  classicAuroraHTML,
  classicAuroraStyles,
  deepSpaceAuroraHTML,
  deepSpaceAuroraStyles,
  neonAuroraHTML,
  neonAuroraStyles
} from './variants.js';

// 家族元数据
export const name = 'Aurora Wave';
export const description = 'A dreamlike visual effect combining aurora phenomena with wave motion, featuring multi-color gradients and dual animation systems.';

// 简化的 demo UI（用於分类卡片）
export const demoUI = `
<div class="relative w-full h-full overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950">
  <!-- 波浪层 -->
  <div class="absolute inset-0">
    <div class="aurora-wave-mini aurora-wave-1"></div>
    <div class="aurora-wave-mini aurora-wave-2"></div>
  </div>
  <!-- 星點裝飾 -->
  <div class="absolute inset-0">
    <div class="star-dot" style="top: 20%; left: 15%; width: 3px; height: 3px;"></div>
    <div class="star-dot" style="top: 40%; left: 70%; width: 2px; height: 2px;"></div>
    <div class="star-dot" style="top: 60%; left: 30%; width: 4px; height: 4px;"></div>
    <div class="star-dot" style="top: 80%; left: 80%; width: 2px; height: 2px;"></div>
  </div>
</div>
`;

export const customStyles = `
.aurora-wave-mini {
  position: absolute;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent,
    rgba(102, 126, 234, 0.4),
    rgba(118, 75, 162, 0.4),
    rgba(0, 242, 254, 0.4),
    transparent
  );
  border-radius: 50% / 20px;
  filter: blur(40px);
}

.aurora-wave-1 {
  animation: auroraWaveMini 10s linear infinite, auroraColorShiftMini 16s ease-in-out infinite;
}

.aurora-wave-2 {
  animation: auroraWaveMini 14s linear infinite reverse, auroraColorShiftMini 20s ease-in-out infinite;
  animation-delay: 2s;
  opacity: 0.7;
}

@keyframes auroraWaveMini {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes auroraColorShiftMini {
  0%, 100% { filter: blur(40px) hue-rotate(0deg); }
  50% { filter: blur(40px) hue-rotate(40deg); }
}

.star-dot {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
  animation: starTwinkle 3s ease-in-out infinite;
}

@keyframes starTwinkle {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}
`;

// CustomPrompt（用於 AI 生成指令）- 800+ 字符
export const customPrompt = {
  'zh-CN': `请使用 TailwindCSS 和原生 CSS 创建一个 **Aurora Wave（极光海浪）** 风格的界面，通过流畅的波浪动画和极光般的多彩渐变，营造梦幻、动态、未来感的视觉体验。

**核心设计要求**

1. **多层波浪系统**
   - 创建 2-4 层波浪元素，每层使用不同的动画时长和延迟
   - 波浪形状使用 \`border-radius: 50% / 20px;\` 创建扁平曲线
   - 容器宽度设置为 200%，支持无缝循环动画

2. **双重动画系统**
   - **横向流动动画**：使用 \`translateX\` 从 0 到 -50% 实现循环滚动
   - **色彩变换动画**：使用 \`hue-rotate\` 在 0-60deg 之间创造极光色彩变化
   - 流动周期：12-18 秒，色彩变换周期：20-30 秒

   示例代码：
   \`\`\`css
   .aurora-wave {
     animation:
       auroraWaveFlow 12s linear infinite,
       auroraColorShift 20s ease-in-out infinite;
   }

   @keyframes auroraWaveFlow {
     0% { transform: translateX(0); }
     100% { transform: translateX(-50%); }
   }

   @keyframes auroraColorShift {
     0%, 100% { filter: blur(50px) hue-rotate(0deg); }
     50% { filter: blur(50px) hue-rotate(60deg); }
   }
   \`\`\`

3. **极光配色方案**
   - 深色基底渐变：\`#0a192f\` → \`#1e2a47\` → \`#2d3561\`
   - 波浪主色渐变（4 色）：
     - 浅紫：\`#667eea\` (rgba(102, 126, 234, 0.4))
     - 紫红：\`#764ba2\` (rgba(118, 75, 162, 0.4))
     - 青色：\`#00f2fe\` (rgba(0, 242, 254, 0.4))
     - 天蓝：\`#4facfe\` (rgba(79, 172, 254, 0.4))
   - 星点高光：\`rgba(255, 255, 255, 0.8)\`
   - 前景强调色：\`#64ffda\` (薄荷绿)

4. **星点背景装饰**
   - 创建 20-40 个小圆点，使用绝对定位随机分布
   - 圆点大小：2-5px，使用 \`border-radius: 50%;\`
   - 添加轻微发光效果：\`box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);\`
   - 闪烁动画周期：3-5 秒，改变 opacity (0.6-1.0) 和 scale (1.0-1.2)

5. **玻璃态前景元素**
   - 卡片背景：\`rgba(10, 25, 47, 0.7)\` (深色半透明)
   - 毛玻璃效果：\`backdrop-filter: blur(12px);\`
   - 边框发光：\`border: 1px solid rgba(100, 255, 218, 0.2);\`
   - Hover 状态：增强边框发光到 0.4，添加轻微上浮效果 \`translateY(-4px)\`

6. **高度模糊效果**
   - 所有波浪层应用 \`filter: blur(50px);\` 创造柔和融合效果
   - 模糊程度可根据变体调整：经典版本 50px，深空版本 60px，霓虹版本 40px

7. **混合模式增强**
   - 波浪容器使用 \`mix-blend-mode: screen;\` 增强色彩叠加效果
   - 星点可选使用 \`mix-blend-mode: lighten;\` 提升亮度

**关键 CSS 类示例**

\`\`\`css
/* 波浪容器 */
.aurora-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #0a192f 0%, #1e2a47 50%, #2d3561 100%);
}

/* 单个波浪层 */
.aurora-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(102, 126, 234, 0.4) 25%,
    rgba(118, 75, 162, 0.4) 50%,
    rgba(0, 242, 254, 0.4) 75%,
    transparent 100%
  );
  border-radius: 50% / 20px;
  filter: blur(50px);
  animation:
    auroraWaveFlow 12s linear infinite,
    auroraColorShift 20s ease-in-out infinite;
  mix-blend-mode: screen;
}

/* 玻璃态卡片 */
.aurora-glass-card {
  background: rgba(10, 25, 47, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.aurora-glass-card:hover {
  border-color: rgba(100, 255, 218, 0.4);
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .aurora-wave { animation: none; }
}
\`\`\`

**重要提示**

1. **性能优化**：避免在移动设备上使用过多波浪层（建议 2-3 层）
2. **可读性保证**：前景内容必须使用足够不透明的背景（alpha >= 0.7）
3. **色彩平衡**：hue-rotate 角度不宜过大（建议 60deg 以内）
4. **无障碍支持**：必须添加 \`prefers-reduced-motion\` 媒体查询
5. **浏览器兼容**：\`backdrop-filter\` 在 Firefox 需要手动启用

**输出格式**
请使用 TailwindCSS 类名结合自定义 CSS，生成完整的 HTML 和样式代码。`,

  'en-US': `Please create an **Aurora Wave** style interface using TailwindCSS and native CSS, featuring flowing wave animations and aurora-like multi-color gradients to create a dreamlike, dynamic, and futuristic visual experience.

**Core Design Requirements**

1. **Multi-layer Wave System**
   - Create 2-4 wave layers with different animation durations and delays
   - Shape waves using \`border-radius: 50% / 20px;\` for flat curves
   - Set container width to 200% to support seamless loop animations

2. **Dual Animation System**
   - **Horizontal flow**: Use \`translateX\` from 0 to -50% for loop scrolling
   - **Color shift**: Use \`hue-rotate\` between 0-60deg for aurora color changes
   - Flow cycle: 12-18s, color shift cycle: 20-30s

3. **Aurora Color Scheme**
   - Dark base gradient: \`#0a192f\` → \`#1e2a47\` → \`#2d3561\`
   - Wave gradient (4 colors): \`#667eea\`, \`#764ba2\`, \`#00f2fe\`, \`#4facfe\`
   - Star highlight: \`rgba(255, 255, 255, 0.8)\`
   - Foreground accent: \`#64ffda\`

4. **Star Background**
   - Create 20-40 small dots with random absolute positioning
   - Dot size: 2-5px, \`border-radius: 50%;\`
   - Glow effect: \`box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);\`

5. **Glassmorphism Elements**
   - Card background: \`rgba(10, 25, 47, 0.7)\`
   - Frosted glass: \`backdrop-filter: blur(12px);\`
   - Border glow: \`border: 1px solid rgba(100, 255, 218, 0.2);\`

**Output Format**
Use TailwindCSS classes combined with custom CSS to generate complete HTML and style code.`
};

// StylePrompt（用於詳細說明）- 1500+ 字符
export const stylePrompt = {
  'zh-CN': `角色：你是一位专精于「极光视觉效果」的 UI 设计师，擅长将自然界的极光现象转化为动态的界面背景，创造沉浸式的视觉体验。

场景定位：
- 主要应用于高端品牌网站、数字艺术展示平台、创意工作室作品集、NFT/Web3 产品
- 适合需要强烈视觉印象和未来科技感的场景
- 可作为全页面背景或 Hero 区域的主视觉元素

视觉设计理念：
- 以北极光的色彩变幻为灵感，结合海浪的节奏律动
- 通过多层半透明渐变波浪的叠加，模拟极光在夜空中的流动效果
- 色彩系统采用紫→粉→青→蓝的渐变序列，通过 hue-rotate 实现动态色彩变换
- 星点装饰增强深空氛围，创造「站在北极海岸观看极光」的沉浸感

材质与质感：
- **波浪层材质**：使用大面积高斯模糊（50-60px）创造柔和融合效果
  \`\`\`css
  .aurora-wave {
    background: linear-gradient(90deg,
      transparent,
      rgba(102, 126, 234, 0.4),  /* 浅紫 */
      rgba(118, 75, 162, 0.4),    /* 紫红 */
      rgba(0, 242, 254, 0.4),     /* 青色 */
      transparent
    );
    filter: blur(50px);
    mix-blend-mode: screen;  /* 屏幕混合模式增强发光感 */
  }
  \`\`\`

- **前景卡片质感**：使用玻璃态设计确保内容可读性
  \`\`\`css
  .aurora-card {
    background: rgba(10, 25, 47, 0.85);  /* 深色半透明 */
    backdrop-filter: blur(12px);
    border: 1px solid rgba(100, 255, 218, 0.2);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(100, 255, 218, 0.1);
  }
  \`\`\`

- **星点装饰**：模拟星空中的恒星
  \`\`\`css
  .aurora-star {
    width: 2-5px;
    height: 2-5px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
    animation: starTwinkle 4s ease-in-out infinite;
  }

  @keyframes starTwinkle {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  \`\`\`

交互体验：
- **波浪动画节奏**：
  - 横向流动：12-18 秒缓慢循环，创造平静的观感
  - 色彩变换：20-30 秒缓慢色相旋转，模拟极光的自然变化
  - 多层波浪使用不同速度和反向流动，增加视觉复杂度

- **交互反馈**：
  - 卡片 hover 时边框发光增强（0.2 → 0.4 opacity）
  - 轻微上浮效果（translateY(-4px)）
  - 添加色彩呼应的阴影

- **性能考虑**：
  - 移动端减少波浪层数（2 层）和模糊程度（40px）
  - 使用 \`will-change: transform, filter;\` 优化动画性能
  - 提供 \`prefers-reduced-motion\` 降级方案

整体氛围：
- 视觉感受应该是梦幻、神秘、未来科技感
- 色彩变化应该柔和且连续，避免突兀的色彩跳跃
- 前景内容应该清晰可读，背景效果不应干扰信息传达
- 整体氛围类似「在北极圈的海岸边，仰望夜空中的极光流动」

配色系统完整规范：
\`\`\`css
/* 基底渐变 */
background: linear-gradient(135deg,
  #0a192f 0%,   /* 深海军蓝 */
  #1e2a47 50%,  /* 中调紫蓝 */
  #2d3561 100%  /* 深紫 */
);

/* 波浪渐变（4 色序列）*/
--aurora-purple: #667eea;      /* 浅紫 */
--aurora-magenta: #764ba2;     /* 紫红 */
--aurora-cyan: #00f2fe;        /* 青色 */
--aurora-blue: #4facfe;        /* 天蓝 */

/* 功能色 */
--aurora-accent: #64ffda;      /* 薄荷绿（强调色）*/
--aurora-star: rgba(255, 255, 255, 0.8);  /* 星点白 */
--aurora-card-bg: rgba(10, 25, 47, 0.85);  /* 卡片背景 */
--aurora-border: rgba(100, 255, 218, 0.2);  /* 边框 */
\`\`\`

响应式设计规范：
\`\`\`css
/* 桌面端（默认）*/
.aurora-wave {
  filter: blur(50px);
  animation-duration: 12s, 20s;
}

/* 平板端 */
@media (max-width: 1024px) {
  .aurora-wave {
    filter: blur(45px);
    animation-duration: 15s, 25s;
  }
}

/* 移动端 */
@media (max-width: 768px) {
  .aurora-wave {
    filter: blur(40px);
    animation-duration: 16s, 30s;
  }
  /* 只保留 2 层波浪 */
  .aurora-wave-3,
  .aurora-wave-4 {
    display: none;
  }
}

/* 降低动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .aurora-wave {
    animation: none;
  }
  .aurora-star {
    animation: none;
    opacity: 0.8;
  }
}
\`\`\`

无障碍设计考虑：
- 确保前景文字与背景对比度 >= 4.5:1（使用深色半透明卡片）
- 提供静态版本选项（关闭动画）
- 避免过于剧烈的色彩变化，防止光敏性癫痫触发
- 所有交互元素必须有明确的聚焦样式

适用场景与变体建议：
1. **经典极光版**（Classic Aurora）：标准速度 + 完整 4 色渐变
   - 适合品牌官网、作品集首页

2. **深空极光版**（Deep Space Aurora）：慢速 + 深色调 + 更多星点
   - 适合冥想应用、天文主题、科幻内容

3. **霓虹极光版**（Neon Aurora）：快速 + 高饱和度 + 减少模糊
   - 适合音乐节、电竞、潮流品牌

实现时的关键注意事项：
- 波浪容器必须使用 \`overflow: hidden;\` 确保循环动画不溢出
- 使用 \`position: fixed;\` 固定背景层，避免滚动时的性能问题
- z-index 层级：背景波浪（1-5）< 星点（10）< 内容卡片（20）< 导航栏（100）
- 双重动画（translateX + hue-rotate）需要在同一个 animation 属性中声明，用逗号分隔`,

  'en-US': `Role: You are a UI designer specializing in aurora visual effects, skilled at transforming natural aurora phenomena into dynamic interface backgrounds to create immersive visual experiences.

Scene:
- Primarily for high-end brand websites, digital art platforms, creative studio portfolios, NFT/Web3 products
- Suitable for scenarios requiring strong visual impact and futuristic tech feel
- Can be used as full-page background or hero section main visual

Visual Philosophy:
- Inspired by the color transformations of northern lights, combined with wave rhythm
- Simulate aurora flow in night sky through multi-layer translucent gradient wave overlay
- Color system uses purple → pink → cyan → blue gradient sequence with dynamic hue-rotate
- Star decoration enhances deep space atmosphere, creating "watching aurora from Arctic coast" immersion

Material & Texture:
- **Wave layer material**: Use large-area Gaussian blur (50-60px) for soft blending
  \`\`\`css
  .aurora-wave {
    background: linear-gradient(90deg,
      transparent,
      rgba(102, 126, 234, 0.4),
      rgba(118, 75, 162, 0.4),
      rgba(0, 242, 254, 0.4),
      transparent
    );
    filter: blur(50px);
    mix-blend-mode: screen;
  }
  \`\`\`

- **Foreground card texture**: Glassmorphism for content readability
  \`\`\`css
  .aurora-card {
    background: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(100, 255, 218, 0.2);
  }
  \`\`\`

Interaction:
- **Wave animation rhythm**: Horizontal flow 12-18s, color shift 20-30s
- **Hover feedback**: Enhanced border glow, slight lift effect
- **Performance**: Reduce layers on mobile, provide reduced-motion fallback

Atmosphere:
- Should feel dreamlike, mysterious, futuristic
- Color changes should be smooth and continuous
- Foreground content must remain readable
- Overall mood: "Watching aurora flow in Arctic night sky"

Accessibility:
- Ensure text contrast >= 4.5:1
- Provide static version option
- Avoid dramatic color changes
- All interactive elements must have clear focus styles`
};

// 極光海浪風格模板
export const wave = {
  id: 'visual-nature-aurora-wave',
  title: 'styles.visual.auroraWave.title',
  description: 'styles.visual.auroraWave.description',

  customPrompt,
  stylePrompt,

  demoHTML,
  customStyles: demoStyles,

  // 全页預覽（3 個变体）
  previews: [
    {
      id: 'classic-aurora',
      name: 'styles.visual.auroraWave.preview.classicAurora',
      type: 'fullpage',
      html: classicAuroraHTML,
      styles: classicAuroraStyles
    },
    {
      id: 'deep-space-aurora',
      name: 'styles.visual.auroraWave.preview.deepSpaceAurora',
      type: 'fullpage',
      html: deepSpaceAuroraHTML,
      styles: deepSpaceAuroraStyles
    },
    {
      id: 'neon-aurora',
      name: 'styles.visual.auroraWave.preview.neonAurora',
      type: 'fullpage',
      html: neonAuroraHTML,
      styles: neonAuroraStyles
    }
  ]
};

export default wave;
