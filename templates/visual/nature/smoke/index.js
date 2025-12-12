// Single template module: Nature — Smoke Effect
// 煙霧效果 - 縹緲霧氣動態

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './SmokeFullPage';

export const smoke = {
  id: 'visual-nature-smoke',
  title: 'styles.visual.smoke.title',
  description: 'styles.visual.smoke.description',

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 或原生 CSS + Canvas 创建一个烟雾效果风格的界面，通过真实的粒子物理模拟自然上升的烟雾。

**核心设计要求**

1. **粒子渲染系统**
   - Canvas 粒子数量：桌面端 60-80 个，移动端 30-40 个
   - 粒子尺寸：\`60-180px\`（随机），逐渐放大（scale 1 → 1.5）
   - 径向渐变：\`ctx.createRadialGradient(x, y, 0, x, y, size)\`
   - 颜色渐变：中心 \`rgba(255,255,255,0.3)\` → 边缘 \`transparent\`

2. **运动物理**
   - 垂直速度：\`-0.2 ~ -0.5px/frame\`（向上）
   - 水平飘移：\`±0.3px/frame\`（随机）
   - 旋转速度：\`±0.005 rad/frame\`
   - 生命周期：透明度 \`0.35 → 0\`，超出画布重生

3. **玻璃态 UI 组件**
   - 背景：\`background: rgba(17, 34, 64, 0.4)\`
   - 模糊：\`backdrop-filter: blur(12px) saturate(180%)\`
   - 边框：\`border: 1px solid rgba(255, 255, 255, 0.08)\`
   - 阴影：\`box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)\`

4. **响应式优化**
   - Desktop (>1024px): 80 粒子，强模糊
   - Tablet (768-1024px): 50 粒子，中等模糊
   - Mobile (<768px): 30 粒子，轻量动画

**配色方案（自然烟雾）**

主烟雾色：
- 纯白烟雾：\`rgba(255, 255, 255, 0.25)\`
- 浅灰烟雾：\`rgba(240, 240, 240, 0.2)\`
- 微蓝紫调：\`rgba(245, 240, 250, 0.15)\`

背景色系：
- 深色背景：\`#0a0e1a\` 到 \`#1a1f2e\`（渐变）
- 玻璃 UI：\`rgba(17, 34, 64, 0.4)\`

**关键 CSS 类示例**

\`\`\`css
/* 玻璃态卡片 */
.glass-card {
  background: rgba(17, 34, 64, 0.4);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  background: rgba(17, 34, 64, 0.6);
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
}

/* 烟雾层（CSS fallback）*/
.smoke-layer {
  position: absolute;
  background: radial-gradient(
    ellipse,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  filter: blur(40px);
  border-radius: 50%;
  opacity: 0.4;
  animation: smokeRise 20s ease-in-out infinite;
}

@keyframes smokeRise {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.4;
  }
  100% {
    transform: translate(-50px, -500px) scale(2) rotate(180deg);
    opacity: 0;
  }
}
\`\`\`

**高级物理模拟（增强真实感）**

5. **Perlin 噪聲湍流系統**
   - 實現 SimplexNoise 类生成 2D 噪聲場
   - 每個粒子獨立噪聲偏移：\`noiseOffsetX/Y = Math.random() * 1000\`
   - 噪聲頻率：\`0.001-0.002\`（控制湍流尺度）
   - 湍流強度：\`turbulence = 0.3-0.7\`（隨機变化）
   - 應用噪聲力：\`speedX += noiseX * turbulence * 0.08\`

6. **速度衰減与空氣阻力**
   - 垂直衰減：\`speedY *= 0.992\`（每幀減速）
   - 水平衰減：\`speedX *= 0.98\`（橫向阻力更大）
   - 模擬煙霧上升時逐漸減速的真實效果

7. **多层粒子疊加（不規則形狀）**
   - 每個煙霧团由 3 层徑向漸变組成（Desktop）或 2 层（Mobile）
   - 层間偏移：\`(layer - 1) * 25 * expansion\`
   - 层間大小：\`size * (1 - layer * 0.15)\`
   - 层間透明度：\`opacity * (1 - layer * 0.25)\`

8. **橫向擴散效果**
   - 擴散係数：\`expansion = 1\`，每幀 \`+= 0.002-0.005\`
   - 應用於层間偏移和粒子寬度
   - 模擬煙霧团隨時間变寬

9. **呼吸式大小波動**
   - 正弦波：\`sin(time * breatheSpeed + phase) * 0.15\`
   - 每粒子獨立相位和頻率
   - 創造有機的非機械動態

10. **動態色溫变化**
    - 初期（life < 0.3）：微藍 \`rgb(240, 245, 255)\`
    - 中期（0.3-0.7）：純白 \`rgb(255, 255, 255)\`
    - 晚期（> 0.7）：灰色 \`rgb(230 - life * 50)\`

**完整 Smoke Code 實現**

\`\`\`javascript
// ===== 煙霧粒子类（含变形橢圓） =====
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = -2.5 - Math.random() * 2; // 初始向上速度
    this.size = Math.random() * 20 + 10;
    this.life = 0;
    this.maxLife = 300 + Math.random() * 100;
    this.opacity = 0.08; // 濃密煙霧不透明度
    this.noiseOffsetX = Math.random() * 1000;
    this.noiseOffsetY = Math.random() * 1000;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
  }

  update(time) {
    this.life++;

    // 简化 Perlin 噪聲（高性能）
    const noiseX = this.noise(
      this.x * 0.003 + time * 0.0001 + this.noiseOffsetX,
      this.y * 0.003 + time * 0.0001
    ) * 0.8;
    const noiseY = this.noise(
      this.x * 0.003 + time * 0.0001,
      this.y * 0.003 + time * 0.0001 + this.noiseOffsetY
    ) * 0.8;

    // 動態速度衰減（模擬空氣阻力）
    const lifeRatio = this.life / this.maxLife;
    const speedDecay = 1 - lifeRatio * 0.8;

    this.vx += noiseX;
    this.vy += noiseY;
    this.vy *= speedDecay; // 垂直減速
    this.vx *= 0.98; // 水平阻力

    // 動態擴散
    this.size += 1.5 * lifeRatio * 0.5;

    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;

    // 透明度衰減
    this.opacity = 0.08 * (1 - lifeRatio * 0.5);
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    // 灰藍色調漸变（真實煙霧）
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
    gradient.addColorStop(0, \`rgba(200, 200, 220, \${this.opacity})\`);
    gradient.addColorStop(0.5, \`rgba(150, 150, 180, \${this.opacity * 0.5})\`);
    gradient.addColorStop(1, 'rgba(100, 100, 130, 0)');
    ctx.fillStyle = gradient;

    // 变形橢圓（捲曲效果）
    const deformX = 1 + Math.sin(this.life * 0.05) * 0.1;
    const deformY = 1 + Math.cos(this.life * 0.05) * 0.1;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * deformX, this.size * deformY, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  noise(x, y) {
    // 简化 Perlin 噪聲
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return (n - Math.floor(n)) * 2 - 1;
  }

  isDead() {
    return this.life > this.maxLife || this.y < -50;
  }
}

// ===== 煙霧源类（持續發射） =====
class SmokeSource {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.emitTimer = 0;
    this.emitInterval = 2; // 每 2 幀發射一次
  }

  update(particles, maxParticles) {
    this.emitTimer++;
    if (this.emitTimer >= this.emitInterval) {
      this.emitTimer = 0;
      const count = window.innerWidth > 768 ? 5 : 3; // 響應式
      for (let i = 0; i < count; i++) {
        if (particles.length < maxParticles) {
          particles.push(new Particle(
            this.x + (Math.random() - 0.5) * 20,
            this.y + (Math.random() - 0.5) * 10
          ));
        }
      }
    }
  }
}

// ===== 初始化和動画循環 =====
const canvas = document.getElementById('smokeCanvas');
const ctx = canvas.getContext('2d', { alpha: true });
let particles = [];
let smokeSources = [];
let time = 0;
const maxParticles = window.innerWidth > 768 ? 500 : 300;

function initSmokeSources() {
  smokeSources = [];
  // 底部中央主煙霧源
  smokeSources.push(new SmokeSource(canvas.width / 2, canvas.height - 50));
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initSmokeSources();
}

function animate() {
  // 淡出效果（拖尾）
  ctx.fillStyle = 'rgba(10, 14, 26, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over';

  // 更新煙霧源（發射新粒子）
  smokeSources.forEach(source => source.update(particles, maxParticles));

  // 更新並繪製粒子
  particles = particles.filter(particle => {
    particle.update(time);
    particle.draw(ctx);
    return !particle.isDead();
  });

  time++;
  requestAnimationFrame(animate);
}

// 啟動
window.addEventListener('resize', resizeCanvas);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) animate();
});
resizeCanvas();
initSmokeSources();
animate();
\`\`\`

**重要提示**
- 优先使用 Canvas + Perlin 噪聲實現真實效果
- CSS 版本作為 fallback 或简化場景
- 移動端降級：30 粒子 + 2 层疊加（非 3 层）
- 添加 \`prefers-reduced-motion\` 支持
- 使用 \`requestAnimationFrame\` 確保 60fps`,

    'en-US': `Please create a Smoke Effect style interface using TailwindCSS or native CSS + Canvas, simulating natural rising smoke through realistic particle physics.

**Core Design Requirements**

1. **Particle Rendering System**
   - Canvas particle count: 60-80 (desktop), 30-40 (mobile)
   - Particle size: \`60-180px\` (random), gradually scaling (1 → 1.5)
   - Radial gradient: \`ctx.createRadialGradient(x, y, 0, x, y, size)\`
   - Color gradient: center \`rgba(255,255,255,0.3)\` → edge \`transparent\`

2. **Motion Physics**
   - Vertical speed: \`-0.2 ~ -0.5px/frame\` (upward)
   - Horizontal drift: \`±0.3px/frame\` (random)
   - Rotation speed: \`±0.005 rad/frame\`
   - Life cycle: opacity \`0.35 → 0\`, respawn when out of canvas

3. **Glassmorphism UI Components**
   - Background: \`background: rgba(17, 34, 64, 0.4)\`
   - Blur: \`backdrop-filter: blur(12px) saturate(180%)\`
   - Border: \`border: 1px solid rgba(255, 255, 255, 0.08)\`
   - Shadow: \`box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)\`

4. **Responsive Optimization**
   - Desktop (>1024px): 80 particles, strong blur
   - Tablet (768-1024px): 50 particles, medium blur
   - Mobile (<768px): 30 particles, lightweight animation

**Color Scheme (Natural Smoke)**

Primary Smoke Colors:
- Pure white smoke: \`rgba(255, 255, 255, 0.25)\`
- Light gray smoke: \`rgba(240, 240, 240, 0.2)\`
- Slight blue-purple tint: \`rgba(245, 240, 250, 0.15)\`

Background Colors:
- Dark background: \`#0a0e1a\` to \`#1a1f2e\` (gradient)
- Glass UI: \`rgba(17, 34, 64, 0.4)\`

**Key CSS Class Examples**

\`\`\`css
/* Glassmorphism Card */
.glass-card {
  background: rgba(17, 34, 64, 0.4);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  background: rgba(17, 34, 64, 0.6);
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
}

/* Smoke Layer (CSS fallback) */
.smoke-layer {
  position: absolute;
  background: radial-gradient(
    ellipse,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  filter: blur(40px);
  border-radius: 50%;
  opacity: 0.4;
  animation: smokeRise 20s ease-in-out infinite;
}

@keyframes smokeRise {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.4;
  }
  100% {
    transform: translate(-50px, -500px) scale(2) rotate(180deg);
    opacity: 0;
  }
}
\`\`\`

**Advanced Physics Simulation (Enhanced Realism)**

5. **Perlin Noise Turbulence System**
   - Implement SimplexNoise class to generate 2D noise field
   - Independent noise offset per particle: \`noiseOffsetX/Y = Math.random() * 1000\`
   - Noise frequency: \`0.001-0.002\` (controls turbulence scale)
   - Turbulence intensity: \`turbulence = 0.3-0.7\` (random variation)
   - Apply noise force: \`speedX += noiseX * turbulence * 0.08\`

6. **Velocity Decay & Air Resistance**
   - Vertical decay: \`speedY *= 0.992\` (per-frame deceleration)
   - Horizontal decay: \`speedX *= 0.98\` (stronger lateral resistance)
   - Simulates realistic smoke slowing down while rising

7. **Multi-Layer Particle Overlay (Irregular Shapes)**
   - Each smoke puff composed of 3 radial gradient layers (Desktop) or 2 (Mobile)
   - Layer offset: \`(layer - 1) * 25 * expansion\`
   - Layer size: \`size * (1 - layer * 0.15)\`
   - Layer opacity: \`opacity * (1 - layer * 0.25)\`

8. **Horizontal Diffusion Effect**
   - Expansion coefficient: \`expansion = 1\`, increases \`+= 0.002-0.005\` per frame
   - Applied to layer offset and particle width
   - Simulates smoke puffs widening over time

9. **Breathing Size Fluctuation**
   - Sine wave: \`sin(time * breatheSpeed + phase) * 0.15\`
   - Independent phase and frequency per particle
   - Creates organic, non-mechanical dynamics

10. **Dynamic Color Temperature**
    - Early stage (life < 0.3): Slight blue \`rgb(240, 245, 255)\`
    - Mid stage (0.3-0.7): Pure white \`rgb(255, 255, 255)\`
    - Late stage (> 0.7): Gray \`rgb(230 - life * 50)\`

**Complete Smoke Code Implementation**

\`\`\`javascript
// ===== Smoke Particle Class (with Deformation) =====
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = -2.5 - Math.random() * 2; // Initial upward velocity
    this.size = Math.random() * 20 + 10;
    this.life = 0;
    this.maxLife = 300 + Math.random() * 100;
    this.opacity = 0.08; // Dense smoke opacity
    this.noiseOffsetX = Math.random() * 1000;
    this.noiseOffsetY = Math.random() * 1000;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
  }

  update(time) {
    this.life++;

    // Simplified Perlin noise (high performance)
    const noiseX = this.noise(
      this.x * 0.003 + time * 0.0001 + this.noiseOffsetX,
      this.y * 0.003 + time * 0.0001
    ) * 0.8;
    const noiseY = this.noise(
      this.x * 0.003 + time * 0.0001,
      this.y * 0.003 + time * 0.0001 + this.noiseOffsetY
    ) * 0.8;

    // Dynamic velocity decay (air resistance simulation)
    const lifeRatio = this.life / this.maxLife;
    const speedDecay = 1 - lifeRatio * 0.8;

    this.vx += noiseX;
    this.vy += noiseY;
    this.vy *= speedDecay; // Vertical deceleration
    this.vx *= 0.98; // Horizontal resistance

    // Dynamic spreading
    this.size += 1.5 * lifeRatio * 0.5;

    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;

    // Opacity fade
    this.opacity = 0.08 * (1 - lifeRatio * 0.5);
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    // Gray-blue tint gradient (realistic smoke)
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
    gradient.addColorStop(0, \`rgba(200, 200, 220, \${this.opacity})\`);
    gradient.addColorStop(0.5, \`rgba(150, 150, 180, \${this.opacity * 0.5})\`);
    gradient.addColorStop(1, 'rgba(100, 100, 130, 0)');
    ctx.fillStyle = gradient;

    // Deformed ellipse (curling effect)
    const deformX = 1 + Math.sin(this.life * 0.05) * 0.1;
    const deformY = 1 + Math.cos(this.life * 0.05) * 0.1;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * deformX, this.size * deformY, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  noise(x, y) {
    // Simplified Perlin noise
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return (n - Math.floor(n)) * 2 - 1;
  }

  isDead() {
    return this.life > this.maxLife || this.y < -50;
  }
}

// ===== Smoke Source Class (Continuous Emission) =====
class SmokeSource {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.emitTimer = 0;
    this.emitInterval = 2; // Emit every 2 frames
  }

  update(particles, maxParticles) {
    this.emitTimer++;
    if (this.emitTimer >= this.emitInterval) {
      this.emitTimer = 0;
      const count = window.innerWidth > 768 ? 5 : 3; // Responsive
      for (let i = 0; i < count; i++) {
        if (particles.length < maxParticles) {
          particles.push(new Particle(
            this.x + (Math.random() - 0.5) * 20,
            this.y + (Math.random() - 0.5) * 10
          ));
        }
      }
    }
  }
}

// ===== Initialization and Animation Loop =====
const canvas = document.getElementById('smokeCanvas');
const ctx = canvas.getContext('2d', { alpha: true });
let particles = [];
let smokeSources = [];
let time = 0;
const maxParticles = window.innerWidth > 768 ? 500 : 300;

function initSmokeSources() {
  smokeSources = [];
  // Main smoke source at bottom center
  smokeSources.push(new SmokeSource(canvas.width / 2, canvas.height - 50));
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initSmokeSources();
}

function animate() {
  // Fade effect (trailing)
  ctx.fillStyle = 'rgba(10, 14, 26, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over';

  // Update smoke sources (emit new particles)
  smokeSources.forEach(source => source.update(particles, maxParticles));

  // Update and draw particles
  particles = particles.filter(particle => {
    particle.update(time);
    particle.draw(ctx);
    return !particle.isDead();
  });

  time++;
  requestAnimationFrame(animate);
}

// Startup
window.addEventListener('resize', resizeCanvas);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) animate();
});
resizeCanvas();
initSmokeSources();
animate();
\`\`\`

**Important Notes**
- Prioritize Canvas + Perlin noise for realistic effects
- CSS version as fallback or simplified scenarios
- Mobile degradation: 30 particles + 2-layer overlay (not 3)
- Add \`prefers-reduced-motion\` support
- Use \`requestAnimationFrame\` to ensure 60fps`
  },

  // 模板級 stylePrompt：描述煙霧效果的氣氛与使用方式
  stylePrompt: {
    'zh-CN': `角色：你是一位擅長營造「煙霧与霧氣」氛圍的 UI 设計師，专精於通過 Canvas 粒子系統和玻璃態 UI 打造沉浸式視覺体驗，让用戶感受到自然、縹緲的煙霧效果。

场景定位：
- **音樂節与演唱會**: 營造舞台煙霧效果，搭配大标題和 CTA 按鈕
- **藝術展覽与画廊**: 作為背景层突出藝術作品，創造神秘氛圍
- **冥想与健康 App**: 柔和的煙霧動画幫助用戶放鬆，搭配極简 UI
- **遊戲啟動页**: 从底部緩緩上升的煙霧，配合角色立繪或 Logo
- **電影与娛樂**: 預告片風格的背景，煙霧位於內容後方不遮擋文字

视觉设计理念：
- 使用 **Canvas 2D API** 繪製 60-80 個獨立粒子，每個粒子有自己的生命週期、速度和透明度
- 透過 **徑向漸变** (radial-gradient) 創建从中心到边緣的自然過渡，模擬真實煙霧的光學特性
- **多层煙霧** 不同尺寸（60-180px）、不同速度（-0.2 ~ -0.5px/frame）、不同旋轉角度，避免機械重複
- 粒子在上升過程中逐漸 **放大** (scale 1 → 1.5) 和 **淡出** (opacity 0.35 → 0)，營造自然消散感

材质与质感：
- **主煙霧色**: 純白 rgba(255,255,255,0.25)、淡灰 rgba(240,240,240,0.2)、微藍紫 rgba(245,240,250,0.15)
- **背景漸变**: 深色 #0a0e1a 到 #1a1f2e，創造夜晚或舞台的氛圍
- **玻璃態 UI**: 半透明背景 rgba(17,34,64,0.4) + backdrop-filter: blur(12px)，让 UI 与煙霧和諧共存
- **無边界感**: 透過極致模糊（blur 40-60px）让煙霧边緣完全融入背景

技术实现细节：
- **Canvas 粒子系統**: 使用 requestAnimationFrame 實現 60fps 流暢動画
- **粒子类设計**: 封裝 x, y, size, speedY, opacity, life 等屬性，update() 和 draw() 方法
- **響應式优化**: Desktop 80 粒子、Tablet 50 粒子、Mobile 30 粒子，確保各端性能
- **性能优化**: 粒子池管理、離屏 Canvas 預渲染、視口外剔除
- **CSS Fallback**: 為不支持 Canvas 的環境提供 CSS 動画版本

交互体验：
- **緩慢上升**: 粒子以 -0.2 ~ -0.5px/frame 的速度向上飄動，搭配輕微水平飄移（±0.3px）
- **自然旋轉**: 每個粒子以 ±0.005 rad/frame 的速度旋轉，增加真實感
- **重生機制**: 粒子到達頂部或完全淡出後重新从底部生成，形成無限循環
- **滾動联動**: 可選的 parallax 效果，煙霧跟隨滾動輕微位移（opacity 变化）
- **懸停反饋**: UI 組件懸停時輕微上浮（translateY -8px）和阴影加深

性能优化建议：
- 使用 **document.visibilitychange** 監聽标籤页切換，隱藏時暫停動画
- 添加 **prefers-reduced-motion** 媒体查詢，為偏好減少動画的用戶提供静態版本
- 移動端自動降級到較少粒子数（30 個）和简化的動画效果
- 使用 **will-change: transform** 提示瀏覽器优化渲染层

氛围营造：
- **神秘与夢幻**: 如同舞台灯光尚未完全亮起，觀眾席的期待感
- **電影质感**: 类似《銀翼殺手》中的城市霧氣或《星際效應》的太空塵埃
- **沉浸式体驗**: 極简 UI 让煙霧成為主角，配合大标題（72-96px）和玻璃態卡片
- **情緒引导**: 緩慢的動画節奏營造平静、冥想的氛圍，適合需要用戶专注的場景

整体设計原則：
- 煙霧作為**背景层**（z-index: 1），UI 作為**前景层**（z-index: 10+）
- 保持 UI 組件的**可讀性**，煙霧透明度不超過 0.35
- 使用 **glassmorphism** 让 UI 与煙霧視覺融合但层次分明
- 確保所有交互元素（按鈕、連結）清晰可見，不被煙霧干擾`,

    'en-US': `Role: You are a UI designer specializing in mist and smoke atmospheres, expert in creating immersive visual experiences through Canvas particle systems and glassmorphism UI that evoke natural, ethereal smoke effects.

Scene Positioning:
- **Music Festivals & Concerts**: Create stage smoke effects with large titles and CTA buttons
- **Art Exhibitions & Galleries**: Background layer highlighting artwork, creating mysterious ambiance
- **Meditation & Wellness Apps**: Soft smoke animations helping users relax, paired with minimal UI
- **Game Launch Pages**: Slowly rising smoke from bottom, complementing character art or logos
- **Film & Entertainment**: Trailer-style backgrounds, smoke behind content without obscuring text

Visual Design Philosophy:
- Use **Canvas 2D API** to render 60-80 independent particles, each with its own lifecycle, speed, and opacity
- Create natural transitions through **radial gradients** from center to edge, simulating real smoke optics
- **Multi-layer smoke** with varying sizes (60-180px), speeds (-0.2 ~ -0.5px/frame), rotation angles to avoid mechanical repetition
- Particles gradually **scale up** (1 → 1.5) and **fade out** (opacity 0.35 → 0) while rising, creating natural dissipation

Material & Texture:
- **Primary smoke colors**: Pure white rgba(255,255,255,0.25), light gray rgba(240,240,240,0.2), slight blue-purple rgba(245,240,250,0.15)
- **Background gradient**: Dark #0a0e1a to #1a1f2e, creating night or stage atmosphere
- **Glassmorphism UI**: Semi-transparent background rgba(17,34,64,0.4) + backdrop-filter: blur(12px), harmonizing UI with smoke
- **Boundless feel**: Extreme blur (40-60px) makes smoke edges completely blend into background

Technical Implementation Details:
- **Canvas Particle System**: Use requestAnimationFrame for smooth 60fps animation
- **Particle Class Design**: Encapsulate x, y, size, speedY, opacity, life properties with update() and draw() methods
- **Responsive Optimization**: 80 particles (desktop), 50 (tablet), 30 (mobile) ensuring cross-device performance
- **Performance Optimization**: Particle pooling, off-screen canvas pre-rendering, viewport culling
- **CSS Fallback**: Provide CSS animation version for environments without Canvas support

Interaction Experience:
- **Slow ascent**: Particles drift upward at -0.2 ~ -0.5px/frame with slight horizontal drift (±0.3px)
- **Natural rotation**: Each particle rotates at ±0.005 rad/frame for realism
- **Respawn mechanism**: Particles regenerate from bottom when reaching top or fully fading, creating infinite loop
- **Scroll coupling**: Optional parallax effect with smoke slightly shifting on scroll (opacity changes)
- **Hover feedback**: UI components gently lift (translateY -8px) and deepen shadows on hover

Performance Optimization Recommendations:
- Use **document.visibilitychange** to monitor tab switching, pause animation when hidden
- Add **prefers-reduced-motion** media query for users preferring reduced animations
- Mobile auto-degrades to fewer particles (30) and simplified animation effects
- Use **will-change: transform** to hint browser for rendering layer optimization

Atmosphere Creation:
- **Mystery & Dreaminess**: Like stage lights before full illumination, audience anticipation
- **Cinematic Quality**: Similar to city fog in *Blade Runner* or space dust in *Interstellar*
- **Immersive Experience**: Minimal UI lets smoke take center stage, with large titles (72-96px) and glass cards
- **Emotional Guidance**: Slow animation rhythm creates calm, meditative mood for focus-requiring scenarios

Overall Design Principles:
- Smoke as **background layer** (z-index: 1), UI as **foreground layer** (z-index: 10+)
- Maintain UI component **readability**, smoke opacity not exceeding 0.35
- Use **glassmorphism** to visually blend UI with smoke while maintaining clear hierarchy
- Ensure all interactive elements (buttons, links) remain clearly visible, unobstructed by smoke`
  },

  demoHTML,
  customStyles,
  fullPageHTML,
  fullPageStyles,
};

export default smoke;
