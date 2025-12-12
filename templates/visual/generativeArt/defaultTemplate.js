// Phase 3 Batch 2 - Generative Art Template
// 視覺元素：生成藝術
// 从 visualTechStyles.js 遷移

import {
  visualTechGenerativeArtFullPageHTML,
  visualTechGenerativeArtFullPageStyles
} from './generativeArtFullPage';
import { stylePrompt } from './stylePrompt';
import { fullPageCustomPrompt } from './fullPageCustomPrompt';

export const visualTechGenerativeArt = {
  id: 'visual-tech-generative-art',
  title: 'styles.visual.generativeArt.title',
  description: 'styles.visual.generativeArt.description',
  
  demoHTML: `
      <div class="w-full h-full flex flex-col items-center justify-center p-6 gap-6 bg-gradient-to-br from-purple-900 to-indigo-900">
        <svg width="200" height="200" viewBox="0 0 200 200" class="generative-art">
          <defs>
            <linearGradient id="gen-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="gen-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#gen-grad-1)" opacity="0.6" class="gen-pulse"/>
          <circle cx="100" cy="100" r="60" fill="url(#gen-grad-2)" opacity="0.6" class="gen-pulse" style="animation-delay: 0.5s;"/>
          <circle cx="100" cy="100" r="40" fill="#fff" opacity="0.8" class="gen-pulse" style="animation-delay: 1s;"/>
          <path d="M 100 20 Q 140 60 100 100 T 100 180" stroke="#fff" stroke-width="2" fill="none" opacity="0.4" class="gen-path"/>
          <path d="M 20 100 Q 60 140 100 100 T 180 100" stroke="#fff" stroke-width="2" fill="none" opacity="0.4" class="gen-path" style="animation-delay: 0.5s;"/>
        </svg>
        <div class="text-white font-mono text-sm opacity-70">GENERATIVE</div>
      </div>
    `,
  
  customStyles: `
      .gen-pulse {
        animation: gen-pulse-anim 3s ease-in-out infinite;
        transform-origin: center;
      }

      @keyframes gen-pulse-anim {
        0%, 100% {
          transform: scale(1);
          opacity: 0.6;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.8;
        }
      }

      .gen-path {
        animation: gen-path-anim 4s ease-in-out infinite;
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
      }

      @keyframes gen-path-anim {
        0%, 100% {
          stroke-dashoffset: 200;
          opacity: 0.2;
        }
        50% {
          stroke-dashoffset: 0;
          opacity: 0.6;
        }
      }

      .generative-art {
        filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
      }
    `,
  
  demoBoxClass: 'bg-gradient-to-br from-slate-900 to-purple-900',
  
  colorScheme: {
    'zh-cn': '深色画布 (#0F172A)、粒���白色 (#FFFFFF)、彩色軌跡（漸变色）、動態生成',
    'en-US': 'Dark canvas (#0F172A), particle white (#FFFFFF), colorful trails (gradients), dynamically generated'
  },
  
  fullPageHTML: visualTechGenerativeArtFullPageHTML,
  fullPageStyles: visualTechGenerativeArtFullPageStyles,
  fullPageCustomPrompt,
  stylePrompt,
  
  previews: [
      {
        id: 'particle-lab',
        name: 'styles.visual.generativeArt.previews.particleLab',
        type: 'full',
        description: 'styles.visual.generativeArt.previews.particleLabDesc',
        html: `<!-- Generative Art Interactive Lab -->
      <div class="gen-lab-container">
        <!-- Header -->
        <header class="gen-header">
          <div class="gen-header-content">
            <h1 class="gen-title">
              <span class="gen-title-line"></span>
              GENERATIVE ART LAB
              <span class="gen-title-line"></span>
            </h1>
            <p class="gen-subtitle">Interactive Particle System Laboratory</p>
          </div>
        </header>

        <!-- Main Content -->
        <div class="gen-main">
          <!-- Control Panel -->
          <aside class="gen-controls">
            <div class="gen-panel">
              <h3 class="gen-panel-title">
                <span class="gen-icon">⚙</span>
                CONTROL PARAMETERS
              </h3>

              <div class="gen-control-group">
                <label class="gen-label" for="particleSlider">Particles</label>
                <div class="gen-slider-container">
                  <input type="range" id="particleSlider" min="50" max="1000" value="300" class="gen-slider">
                  <span class="gen-value" id="particleValue">300</span>
                </div>
              </div>

              <div class="gen-control-group">
                <label class="gen-label" for="speedSlider">Speed</label>
                <div class="gen-slider-container">
                  <input type="range" id="speedSlider" min="0.1" max="3.0" value="1.0" step="0.1" class="gen-slider">
                  <span class="gen-value" id="speedValue">1.0x</span>
                </div>
              </div>

              <div class="gen-control-group">
                <label class="gen-label">Color Theme</label>
                <div class="gen-button-grid">
                  <button class="gen-theme-btn active" data-theme="cyberpunk">CYBERPUNK</button>
                  <button class="gen-theme-btn" data-theme="aurora">AURORA</button>
                  <button class="gen-theme-btn" data-theme="fire">FIRE</button>
                  <button class="gen-theme-btn" data-theme="ocean">OCEAN</button>
                </div>
              </div>

              <div class="gen-control-group">
                <label class="gen-label">Shape Mode</label>
                <div class="gen-button-grid">
                  <button class="gen-shape-btn active" data-shape="circle">CIRCLE</button>
                  <button class="gen-shape-btn" data-shape="square">SQUARE</button>
                  <button class="gen-shape-btn" data-shape="triangle">TRIANGLE</button>
                  <button class="gen-shape-btn" data-shape="star">STAR</button>
                </div>
              </div>

              <div class="gen-action-group">
                <button class="gen-btn gen-btn-primary" id="randomizeBtn">RANDOMIZE</button>
                <button class="gen-btn gen-btn-secondary" id="resetBtn">RESET</button>
                <button class="gen-btn gen-btn-success" id="exportBtn">EXPORT</button>
              </div>
            </div>
          </aside>

          <!-- Canvas Area -->
          <main class="gen-canvas-area">
            <div class="gen-canvas-container">
              <canvas id="genCanvas" class="gen-canvas"></canvas>
              <div class="gen-status-overlay">
                <div class="gen-status-item">
                  <span class="gen-status-label">PARTICLES:</span>
                  <span class="gen-status-value" id="particleCounter">300</span>
                </div>
                <div class="gen-status-item">
                  <span class="gen-status-label">MODE:</span>
                  <span class="gen-status-value" id="currentMode">LIVE</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <script>
        // Simplified interactive particle system
        const canvas = document.getElementById('genCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        let config = { particleCount: 300, speed: 1.0, theme: 'cyberpunk', shape: 'circle' };
        const themes = {
          cyberpunk: ['#ff00ff', '#00ffff', '#ffff00', '#ff0080'],
          aurora: ['#4ade80', '#06b6d4', '#8b5cf6', '#ec4899'],
          fire: ['#ff4500', '#ffa500', '#ff6347', '#dc143c'],
          ocean: ['#00bfff', '#1e90ff', '#4169e1', '#0000cd']
        };
        let particles = [];

        class Particle {
          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.color = themes[config.theme][Math.floor(Math.random() * themes[config.theme].length)];
            this.size = 3;
          }
          update() {
            this.x += this.vx * config.speed;
            this.y += this.vy * config.speed;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
          }
          draw() {
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }

        function initParticles() {
          particles = [];
          for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
          }
        }

        function animate() {
          ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          particles.forEach(particle => {
            particle.update();
            particle.draw();
          });
          document.getElementById('particleCounter').textContent = particles.length;
          requestAnimationFrame(animate);
        }

        // Event Listeners
        document.getElementById('particleSlider')?.addEventListener('input', (e) => {
          config.particleCount = parseInt(e.target.value);
          document.getElementById('particleValue').textContent = config.particleCount;
          initParticles();
        });

        document.querySelectorAll('.gen-theme-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.gen-theme-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            config.theme = btn.dataset.theme;
            particles.forEach(p => {
              p.color = themes[config.theme][Math.floor(Math.random() * themes[config.theme].length)];
            });
          });
        });

        document.getElementById('randomizeBtn')?.addEventListener('click', () => {
          config.particleCount = Math.floor(Math.random() * 500) + 100;
          document.getElementById('particleSlider').value = config.particleCount;
          document.getElementById('particleValue').textContent = config.particleCount;
          initParticles();
        });

        initParticles();
        animate();
        window.addEventListener('resize', () => {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
        });
      </script>`,
        styles: `* { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        font-family: 'Courier New', monospace;
        background: #0a0a0f;
        color: #fff;
        overflow-x: hidden;
      }

      .gen-lab-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: linear-gradient(to bottom, #0a0a0f, #1a0a1f);
      }

      .gen-header {
        padding: 2rem;
        background: rgba(10, 10, 15, 0.8);
        border-bottom: 2px solid #00ffff;
        box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3);
      }

      .gen-header-content {
        max-width: 1400px;
        margin: 0 auto;
        text-align: center;
      }

      .gen-title {
        font-size: 3rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
        background: linear-gradient(90deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientShift 3s linear infinite;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      @keyframes gradientShift {
        0% { background-position: 0% center; }
        100% { background-position: 200% center; }
      }

      .gen-title-line {
        width: 80px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ffff, transparent);
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }

      .gen-subtitle {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: #00ffff;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        opacity: 0.7;
      }

      .gen-main {
        flex: 1;
        display: grid;
        grid-template-columns: 350px 1fr;
        gap: 1rem;
        padding: 1rem;
        max-width: 1800px;
        width: 100%;
        margin: 0 auto;
      }

      .gen-controls {
        background: rgba(20, 20, 30, 0.8);
        border: 1px solid #00ffff;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        overflow-y: auto;
        max-height: calc(100vh - 300px);
      }

      .gen-panel-title {
        font-size: 1.2rem;
        color: #00ffff;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-bottom: 2px solid #00ffff;
        padding-bottom: 0.5rem;
      }

      .gen-icon {
        font-size: 1.5rem;
        animation: rotate 4s linear infinite;
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .gen-control-group {
        margin-bottom: 1.5rem;
      }

      .gen-label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        color: #00ffff;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
      }

      .gen-slider-container {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .gen-slider {
        flex: 1;
        appearance: none;
        height: 4px;
        background: rgba(0, 255, 255, 0.2);
        border-radius: 2px;
        outline: none;
      }

      .gen-slider::-webkit-slider-thumb {
        appearance: none;
        width: 16px;
        height: 16px;
        background: #00ffff;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
      }

      .gen-value {
        min-width: 60px;
        text-align: right;
        font-size: 0.8rem;
        color: #fff;
        background: rgba(0, 255, 255, 0.1);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        border: 1px solid rgba(0, 255, 255, 0.3);
      }

      .gen-button-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
      }

      .gen-theme-btn, .gen-shape-btn {
        padding: 0.5rem;
        background: rgba(0, 255, 255, 0.1);
        border: 1px solid rgba(0, 255, 255, 0.3);
        border-radius: 4px;
        color: #00ffff;
        font-size: 0.7rem;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .gen-theme-btn:hover, .gen-shape-btn:hover {
        background: rgba(0, 255, 255, 0.2);
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
      }

      .gen-theme-btn.active, .gen-shape-btn.active {
        background: rgba(0, 255, 255, 0.3);
        border-color: #00ffff;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
      }

      .gen-action-group {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 2rem;
      }

      .gen-btn {
        padding: 0.75rem;
        border: none;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .gen-btn-primary {
        background: linear-gradient(135deg, #ff00ff, #ff0080);
        color: white;
        box-shadow: 0 4px 15px rgba(255, 0, 255, 0.3);
      }

      .gen-btn-secondary {
        background: linear-gradient(135deg, #00ffff, #0080ff);
        color: white;
        box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
      }

      .gen-btn-success {
        background: linear-gradient(135deg, #ffff00, #80ff00);
        color: black;
        box-shadow: 0 4px 15px rgba(255, 255, 0, 0.3);
      }

      .gen-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }

      .gen-canvas-area {
        display: flex;
        flex-direction: column;
      }

      .gen-canvas-container {
        flex: 1;
        position: relative;
        background: #000;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
        border: 1px solid rgba(0, 255, 255, 0.2);
      }

      .gen-canvas {
        width: 100%;
        height: 500px;
        display: block;
        background: radial-gradient(circle at center, #1a0a1f, #0a0a0f);
      }

      .gen-status-overlay {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .gen-status-item {
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        border: 1px solid rgba(0, 255, 255, 0.3);
        display: flex;
        gap: 0.5rem;
        font-size: 0.7rem;
      }

      .gen-status-label {
        color: #00ffff;
      }

      .gen-status-value {
        color: #fff;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        .gen-title {
          font-size: 2rem;
        }
        .gen-main {
          grid-template-columns: 1fr;
        }
      }`,
        colorScheme: {
          'zh-cn': '主色深黑 (#0a0a0f)、賽博朋克漸变 (#ff00ff, #00ffff, #ffff00)、控制面板背景 (rgba(20,20,30,0.8))、边框霓虹青 (#00ffff)、按鈕漸变多色',
          'en-US': 'Primary deep black (#0a0a0f), cyberpunk gradients (#ff00ff, #00ffff, #ffff00), control panel background (rgba(20,20,30,0.8)), border neon cyan (#00ffff), multicolor button gradients'
        }
      },
      {
        id: 'creative-coding-showcase',
        name: 'styles.visual.generativeArt.previews.creativeCodingShowcase',
        type: 'full',
        description: 'styles.visual.generativeArt.previews.creativeCodingShowcaseDesc',
        html: `<!-- Creative Coding Showcase -->
      <div class="creative-showcase">
        <!-- Dynamic Hero Section -->
        <section class="showcase-hero">
          <div class="hero-background">
            <div class="generative-bg-layer-1"></div>
            <div class="generative-bg-layer-2"></div>
            <div class="generative-bg-layer-3"></div>
          </div>
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="title-fragment">CREATIVE</span>
              <span class="title-fragment">CODING</span>
              <span class="title-fragment">SHOWCASE</span>
            </h1>
            <p class="hero-subtitle">Where Algorithms Meet Creative Innovation</p>
            <button class="hero-cta" href="javascript:void(0)">Explore Creations</button>
          </div>
        </section>

        <!-- Algorithm Gallery -->
        <section class="algorithm-gallery">
          <div class="section-header">
            <h2 class="section-title">Algorithm Gallery</h2>
            <p class="section-subtitle">Explore generative art techniques</p>
          </div>
          <div class="gallery-grid">
            <div class="algorithm-card">
              <div class="card-preview">
                <div class="fractal-demo"></div>
              </div>
              <div class="card-info">
                <h3 class="card-title">Fractal Trees</h3>
                <p class="card-description">Recursive branching patterns</p>
              </div>
            </div>
            <div class="algorithm-card">
              <div class="card-preview">
                <div class="noise-demo"></div>
              </div>
              <div class="card-info">
                <h3 class="card-title">Perlin Noise</h3>
                <p class="card-description">Organic texture generation</p>
              </div>
            </div>
            <div class="algorithm-card">
              <div class="card-preview">
                <div class="voronoi-demo"></div>
              </div>
              <div class="card-info">
                <h3 class="card-title">Voronoi Diagrams</h3>
                <p class="card-description">Natural space partitioning</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Live Code Demo -->
        <section class="live-code-demo">
          <div class="section-header">
            <h2 class="section-title">Live Code Editor</h2>
            <p class="section-subtitle">See algorithms in action</p>
          </div>
          <div class="code-demo-container">
            <div class="code-editor">
              <div class="editor-header">
                <span class="editor-title">generative-art.js</span>
                <button class="run-code">▶ Run</button>
              </div>
              <div class="code-content">
                <pre><code>// Fractal Tree Generator
function drawTree(x, y, angle, length, depth) {
  if (depth === 0) return;

  const endX = x + Math.cos(angle) * length;
  const endY = y + Math.sin(angle) * length;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  const newLength = length * 0.7;
  drawTree(endX, endY, angle - 0.5, newLength, depth - 1);
  drawTree(endX, endY, angle + 0.5, newLength, depth - 1);
}</code></pre>
              </div>
            </div>
            <div class="code-output">
              <canvas class="demo-canvas" width="300" height="200"></canvas>
            </div>
          </div>
        </section>

        <!-- Pattern Library -->
        <section class="pattern-library">
          <div class="section-header">
            <h2 class="section-title">Pattern Library</h2>
            <p class="section-subtitle">Procedural design elements</p>
          </div>
          <div class="pattern-grid">
            <div class="pattern-tile">
              <div class="voronoi-pattern"></div>
              <span class="pattern-label">Voronoi</span>
            </div>
            <div class="pattern-tile">
              <div class="organic-flow"></div>
              <span class="pattern-label">Organic Flow</span>
            </div>
            <div class="pattern-tile">
              <div class="geometric-tessellation"></div>
              <span class="pattern-label">Tessellation</span>
            </div>
            <div class="pattern-tile">
              <div class="wave-interference"></div>
              <span class="pattern-label">Wave</span>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="contact-section">
          <div class="contact-content">
            <h2 class="contact-title">Let's Create Together</h2>
            <p class="contact-subtitle">Collaborate on generative art projects</p>
            <div class="contact-form">
              <input type="text" class="form-input" placeholder="Your Name" />
              <input type="email" class="form-input" placeholder="Email" />
              <textarea class="form-input" placeholder="Project Description"></textarea>
              <button class="contact-submit">Send Message</button>
            </div>
          </div>
        </section>
      </div>`,
        styles: `* { margin: 0; padding: 0; box-sizing: border-box; }

      .creative-showcase {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        color: #fff;
      }

      /* Dynamic Hero Section */
      .showcase-hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
      }

      .hero-background {
        position: absolute;
        inset: 0;
        z-index: 1;
      }

      .generative-bg-layer-1, .generative-bg-layer-2, .generative-bg-layer-3 {
        position: absolute;
        inset: 0;
        opacity: 0.3;
      }

      .generative-bg-layer-1 {
        background: radial-gradient(circle at 20% 80%, #667eea 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, #764ba2 0%, transparent 50%);
        animation: float 6s ease-in-out infinite;
      }

      .generative-bg-layer-2 {
        background: radial-gradient(circle at 40% 40%, #f093fb 0%, transparent 50%);
        animation: float 8s ease-in-out infinite reverse;
      }

      .generative-bg-layer-3 {
        background: conic-gradient(from 0deg at 50% 50%, #667eea, #764ba2, #f093fb, #667eea);
        animation: rotate 20s linear infinite;
        opacity: 0.1;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
      }

      .hero-title {
        font-size: 4rem;
        font-weight: 900;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .title-fragment {
        background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 3s ease-in-out infinite alternate;
      }

      @keyframes shimmer {
        0% { opacity: 0.8; transform: translateX(0); }
        100% { opacity: 1; transform: translateX(5px); }
      }

      .hero-subtitle {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        letter-spacing: 0.05em;
      }

      .hero-cta {
        padding: 1rem 2rem;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border: none;
        border-radius: 50px;
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
      }

      .hero-cta:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
      }

      /* Section Styles */
      section {
        padding: 4rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .section-header {
        text-align: center;
        margin-bottom: 3rem;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        background: linear-gradient(45deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .section-subtitle {
        font-size: 1.1rem;
        opacity: 0.8;
      }

      /* Algorithm Gallery */
      .algorithm-gallery {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        backdrop-filter: blur(10px);
      }

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .algorithm-card {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 1.5rem;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .algorithm-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 0.15);
      }

      .card-preview {
        height: 150px;
        border-radius: 10px;
        margin-bottom: 1rem;
        overflow: hidden;
        position: relative;
      }

      .fractal-demo, .noise-demo, .voronoi-demo {
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #667eea, #764ba2);
        position: relative;
      }

      .fractal-demo::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 10 L50 50 M50 50 L30 70 M50 50 L70 70" stroke="white" stroke-width="2" fill="none" opacity="0.6"/></svg>');
        background-size: 30px 30px;
        animation: pulse 2s ease-in-out infinite;
      }

      .card-title {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .card-description {
        opacity: 0.8;
        font-size: 0.9rem;
      }

      /* Live Code Demo */
      .code-demo-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        padding: 2rem;
      }

      .code-editor {
        background: #1e1e1e;
        border-radius: 10px;
        overflow: hidden;
      }

      .editor-header {
        background: #333;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .editor-title {
        color: #fff;
        font-weight: 600;
      }

      .run-code {
        background: #4CAF50;
        border: none;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
      }

      .code-content {
        padding: 1rem;
      }

      .code-content pre {
        color: #f8f8f2;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.4;
      }

      .code-output {
        background: #2a2a2a;
        border-radius: 10px;
        padding: 1rem;
      }

      .demo-canvas {
        width: 100%;
        background: #000;
        border-radius: 5px;
      }

      /* Pattern Library */
      .pattern-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1.5rem;
      }

      .pattern-tile {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .pattern-tile:hover {
        transform: translateY(-3px);
        background: rgba(255, 255, 255, 0.15);
      }

      .voronoi-pattern, .organic-flow, .geometric-tessellation, .wave-interference {
        width: 100%;
        height: 80px;
        border-radius: 5px;
        margin-bottom: 1rem;
        background: linear-gradient(45deg, #667eea, #764ba2);
        position: relative;
        overflow: hidden;
      }

      .voronoi-pattern::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="20,20 40,30 30,50 10,40" fill="none" stroke="white" opacity="0.6"/><polygon points="60,10 80,20 70,40 50,30" fill="none" stroke="white" opacity="0.6"/></svg>');
        background-size: 50px 50px;
      }

      .pattern-label {
        font-size: 0.9rem;
        font-weight: 500;
      }

      /* Contact Section */
      .contact-section {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
        border-radius: 20px;
        text-align: center;
      }

      .contact-title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .contact-subtitle {
        font-size: 1.1rem;
        opacity: 0.8;
        margin-bottom: 2rem;
      }

      .contact-form {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .form-input {
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        font-size: 1rem;
        backdrop-filter: blur(10px);
      }

      .form-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }

      .contact-submit {
        padding: 1rem 2rem;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .contact-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .code-demo-container {
          grid-template-columns: 1fr;
        }

        .gallery-grid {
          grid-template-columns: 1fr;
        }

        section {
          padding: 2rem 1rem;
        }
      }`,
        colorScheme: {
          'zh-cn': '主色渐变紫蓝 (#667eea → #764ba2)、背景深蓝渐变 (#1a1a2e → #0f3460)、半透明玻璃效果 (rgba(255,255,255,0.1))、强调色粉紫 (#f093fb)、按钮绿色 (#4CAF50)',
          'en-US': 'Primary gradient purple-blue (#667eea → #764ba2), background deep blue gradient (#1a1a2e → #0f3460), semi-transparent glass effect (rgba(255,255,255,0.1)), accent pink-purple (#f093fb), button green (#4CAF50)'
        }
      }
    ]
};
