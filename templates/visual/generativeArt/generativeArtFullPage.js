// Phase 3 Batch 2 - Generative Art Fullpage
// 視覺元素：生成藝術
// 从 visualTechStyles.js 遷移

export const visualTechGenerativeArtFullPageHTML = `
      <!-- Generative Art Interactive Lab -->
      <div class="gen-lab-container">
        <!-- Header -->
        <header class="gen-header">
          <div class="gen-header-content">
            <h1 class="gen-title">
              <span class="gen-title-line"></span>
              GENERATIVE ART LAB
              <span class="gen-title-line"></span>
            </h1>
            <p class="gen-subtitle">算法艺术互动实验室 • Interactive Generative Art Experiment</p>
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

              <!-- Particle Count -->
              <div class="gen-control-group">
                <label class="gen-label">
                  <span>Particle Count</span>
                  <span class="gen-value" id="particleValue">300</span>
                </label>
                <input type="range" min="50" max="1000" value="300" class="gen-slider" id="particleSlider">
              </div>

              <!-- Animation Speed -->
              <div class="gen-control-group">
                <label class="gen-label">
                  <span>Animation Speed</span>
                  <span class="gen-value" id="speedValue">1.0x</span>
                </label>
                <input type="range" min="0.1" max="3" step="0.1" value="1" class="gen-slider" id="speedSlider">
              </div>

              <!-- Glow Intensity -->
              <div class="gen-control-group">
                <label class="gen-label">
                  <span>Glow Intensity</span>
                  <span class="gen-value" id="glowValue">50%</span>
                </label>
                <input type="range" min="0" max="100" value="50" class="gen-slider" id="glowSlider">
              </div>

              <!-- Blur Effect -->
              <div class="gen-control-group">
                <label class="gen-label">
                  <span>Blur Effect</span>
                  <span class="gen-value" id="blurValue">5px</span>
                </label>
                <input type="range" min="0" max="20" value="5" class="gen-slider" id="blurSlider">
              </div>

              <!-- Connection Distance -->
              <div class="gen-control-group">
                <label class="gen-label">
                  <span>Connection Range</span>
                  <span class="gen-value" id="connectionValue">100px</span>
                </label>
                <input type="range" min="50" max="300" value="100" class="gen-slider" id="connectionSlider">
              </div>

              <!-- Size Range -->
              <div class="gen-control-group">
                <label class="gen-label">
                  <span>Particle Size</span>
                  <span class="gen-value" id="sizeValue">3px</span>
                </label>
                <input type="range" min="1" max="10" value="3" class="gen-slider" id="sizeSlider">
              </div>

              <!-- Color Themes -->
              <div class="gen-control-group">
                <label class="gen-label">
                  <span>Color Theme</span>
                </label>
                <div class="gen-theme-buttons">
                  <button class="gen-theme-btn active" data-theme="cyberpunk">Cyberpunk</button>
                  <button class="gen-theme-btn" data-theme="neon">Neon Nights</button>
                  <button class="gen-theme-btn" data-theme="aurora">Aurora</button>
                  <button class="gen-theme-btn" data-theme="matrix">Matrix</button>
                </div>
              </div>

              <!-- Shape Type -->
              <div class="gen-control-group">
                <label class="gen-label">
                  <span>Shape Type</span>
                </label>
                <div class="gen-shape-buttons">
                  <button class="gen-shape-btn active" data-shape="circle">●</button>
                  <button class="gen-shape-btn" data-shape="square">■</button>
                  <button class="gen-shape-btn" data-shape="triangle">▲</button>
                  <button class="gen-shape-btn" data-shape="star">★</button>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="gen-actions">
                <button class="gen-btn gen-btn-primary" id="randomizeBtn">
                  <span>🎲</span> Randomize
                </button>
                <button class="gen-btn gen-btn-secondary" id="resetBtn">
                  <span>↻</span> Reset
                </button>
                <button class="gen-btn gen-btn-accent" id="exportBtn">
                  <span>💾</span> Export PNG
                </button>
              </div>
            </div>
          </aside>

          <!-- Canvas Area -->
          <div class="gen-canvas-wrapper">
            <canvas id="genCanvas" class="gen-canvas"></canvas>
            <div class="gen-canvas-overlay">
              <div class="gen-scan-line"></div>
            </div>
          </div>
        </div>

        <!-- Dashboard -->
        <footer class="gen-dashboard">
          <div class="gen-dashboard-grid">
            <!-- FPS Counter -->
            <div class="gen-stat">
              <div class="gen-stat-label">FPS</div>
              <div class="gen-stat-value" id="fpsValue">60</div>
              <div class="gen-stat-bar">
                <div class="gen-stat-fill" id="fpsFill" style="width: 100%"></div>
              </div>
            </div>

            <!-- Particle Count -->
            <div class="gen-stat">
              <div class="gen-stat-label">Active Particles</div>
              <div class="gen-stat-value" id="activeParticles">300</div>
              <div class="gen-stat-bar">
                <div class="gen-stat-fill gen-stat-fill-cyan" id="particleFill" style="width: 30%"></div>
              </div>
            </div>

            <!-- Render Time -->
            <div class="gen-stat">
              <div class="gen-stat-label">Render Time</div>
              <div class="gen-stat-value" id="renderTime">16ms</div>
              <div class="gen-stat-bar">
                <div class="gen-stat-fill gen-stat-fill-pink" id="renderFill" style="width: 50%"></div>
              </div>
            </div>

            <!-- GPU Usage (Mock) -->
            <div class="gen-stat">
              <div class="gen-stat-label">GPU Usage</div>
              <div class="gen-stat-value" id="gpuUsage">45%</div>
              <div class="gen-stat-bar">
                <div class="gen-stat-fill gen-stat-fill-green" id="gpuFill" style="width: 45%"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <!-- Particle Animation Script -->
      <script>
        const canvas = document.getElementById('genCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        let config = {
          particleCount: 300,
          speed: 1.0,
          glowIntensity: 50,
          blurEffect: 5,
          connectionDistance: 100,
          particleSize: 3,
          theme: 'cyberpunk',
          shape: 'circle'
        };

        const themes = {
          cyberpunk: ['#ff00ff', '#00ffff', '#ffff00', '#ff0080'],
          neon: ['#ff1744', '#00e5ff', '#76ff03', '#f50057'],
          aurora: ['#00ffaa', '#0080ff', '#ff00ff', '#00ff80'],
          matrix: ['#00ff00', '#00cc00', '#009900', '#00ff80']
        };

        let particles = [];

        class Particle {
          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 2 * config.speed;
            this.vy = (Math.random() - 0.5) * 2 * config.speed;
            this.color = themes[config.theme][Math.floor(Math.random() * themes[config.theme].length)];
            this.size = config.particleSize;
          }

          update() {
            this.x += this.vx * config.speed;
            this.y += this.vy * config.speed;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
          }

          draw() {
            ctx.save();
            ctx.shadowBlur = config.blurEffect;
            ctx.shadowColor = this.color;
            ctx.fillStyle = this.color;
            ctx.globalAlpha = config.glowIntensity / 100;

            if (config.shape === 'circle') {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fill();
            } else if (config.shape === 'square') {
              ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
            } else if (config.shape === 'triangle') {
              ctx.beginPath();
              ctx.moveTo(this.x, this.y - this.size);
              ctx.lineTo(this.x + this.size, this.y + this.size);
              ctx.lineTo(this.x - this.size, this.y + this.size);
              ctx.closePath();
              ctx.fill();
            } else if (config.shape === 'star') {
              ctx.beginPath();
              for (let i = 0; i < 5; i++) {
                ctx.lineTo(
                  this.x + Math.cos((i * 4 * Math.PI) / 5) * this.size,
                  this.y + Math.sin((i * 4 * Math.PI) / 5) * this.size
                );
              }
              ctx.closePath();
              ctx.fill();
            }
            ctx.restore();
          }
        }

        function initParticles() {
          particles = [];
          for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
          }
        }

        function drawConnections() {
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < config.connectionDistance) {
                ctx.save();
                ctx.strokeStyle = particles[i].color;
                ctx.globalAlpha = (1 - distance / config.connectionDistance) * (config.glowIntensity / 150);
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.restore();
              }
            }
          }
        }

        let fps = 60;
        let lastTime = performance.now();
        let frameCount = 0;
        let fpsUpdateTime = 0;

        function animate() {
          const currentTime = performance.now();
          const deltaTime = currentTime - lastTime;
          lastTime = currentTime;

          frameCount++;
          fpsUpdateTime += deltaTime;
          if (fpsUpdateTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            fpsUpdateTime = 0;
            document.getElementById('fpsValue').textContent = fps;
            document.getElementById('fpsFill').style.width = (fps / 60 * 100) + '%';
          }

          ctx.fillStyle = '#0a0a0f';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.save();
          ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
          ctx.lineWidth = 1;
          for (let x = 0; x < canvas.width; x += 50) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }
          for (let y = 0; y < canvas.height; y += 50) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
          ctx.restore();

          particles.forEach(p => {
            p.update();
            p.draw();
          });

          drawConnections();

          document.getElementById('activeParticles').textContent = particles.length;
          document.getElementById('renderTime').textContent = Math.round(deltaTime) + 'ms';
          document.getElementById('gpuUsage').textContent = Math.round(30 + Math.random() * 20) + '%';

          requestAnimationFrame(animate);
        }

        document.getElementById('particleSlider').addEventListener('input', (e) => {
          config.particleCount = parseInt(e.target.value);
          document.getElementById('particleValue').textContent = config.particleCount;
          initParticles();
          document.getElementById('particleFill').style.width = (config.particleCount / 1000 * 100) + '%';
        });

        document.getElementById('speedSlider').addEventListener('input', (e) => {
          config.speed = parseFloat(e.target.value);
          document.getElementById('speedValue').textContent = config.speed.toFixed(1) + 'x';
        });

        document.getElementById('glowSlider').addEventListener('input', (e) => {
          config.glowIntensity = parseInt(e.target.value);
          document.getElementById('glowValue').textContent = config.glowIntensity + '%';
        });

        document.getElementById('blurSlider').addEventListener('input', (e) => {
          config.blurEffect = parseInt(e.target.value);
          document.getElementById('blurValue').textContent = config.blurEffect + 'px';
        });

        document.getElementById('connectionSlider').addEventListener('input', (e) => {
          config.connectionDistance = parseInt(e.target.value);
          document.getElementById('connectionValue').textContent = config.connectionDistance + 'px';
        });

        document.getElementById('sizeSlider').addEventListener('input', (e) => {
          config.particleSize = parseInt(e.target.value);
          document.getElementById('sizeValue').textContent = config.particleSize + 'px';
          particles.forEach(p => p.size = config.particleSize);
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

        document.querySelectorAll('.gen-shape-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.gen-shape-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            config.shape = btn.dataset.shape;
          });
        });

        document.getElementById('randomizeBtn').addEventListener('click', () => {
          config.particleCount = Math.floor(Math.random() * 950) + 50;
          config.speed = Math.random() * 2.9 + 0.1;
          config.glowIntensity = Math.floor(Math.random() * 100);
          config.blurEffect = Math.floor(Math.random() * 20);
          config.connectionDistance = Math.floor(Math.random() * 250) + 50;
          config.particleSize = Math.floor(Math.random() * 9) + 1;

          document.getElementById('particleSlider').value = config.particleCount;
          document.getElementById('particleValue').textContent = config.particleCount;
          document.getElementById('speedSlider').value = config.speed;
          document.getElementById('speedValue').textContent = config.speed.toFixed(1) + 'x';
          document.getElementById('glowSlider').value = config.glowIntensity;
          document.getElementById('glowValue').textContent = config.glowIntensity + '%';
          document.getElementById('blurSlider').value = config.blurEffect;
          document.getElementById('blurValue').textContent = config.blurEffect + 'px';
          document.getElementById('connectionSlider').value = config.connectionDistance;
          document.getElementById('connectionValue').textContent = config.connectionDistance + 'px';
          document.getElementById('sizeSlider').value = config.particleSize;
          document.getElementById('sizeValue').textContent = config.particleSize + 'px';

          initParticles();
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
          config = {
            particleCount: 300,
            speed: 1.0,
            glowIntensity: 50,
            blurEffect: 5,
            connectionDistance: 100,
            particleSize: 3,
            theme: 'cyberpunk',
            shape: 'circle'
          };

          document.getElementById('particleSlider').value = 300;
          document.getElementById('particleValue').textContent = '300';
          document.getElementById('speedSlider').value = 1.0;
          document.getElementById('speedValue').textContent = '1.0x';
          document.getElementById('glowSlider').value = 50;
          document.getElementById('glowValue').textContent = '50%';
          document.getElementById('blurSlider').value = 5;
          document.getElementById('blurValue').textContent = '5px';
          document.getElementById('connectionSlider').value = 100;
          document.getElementById('connectionValue').textContent = '100px';
          document.getElementById('sizeSlider').value = 3;
          document.getElementById('sizeValue').textContent = '3px';

          document.querySelectorAll('.gen-theme-btn').forEach(b => b.classList.remove('active'));
          document.querySelector('[data-theme="cyberpunk"]').classList.add('active');
          document.querySelectorAll('.gen-shape-btn').forEach(b => b.classList.remove('active'));
          document.querySelector('[data-shape="circle"]').classList.add('active');

          initParticles();
        });

        document.getElementById('exportBtn').addEventListener('click', () => {
          const link = document.createElement('a');
          link.download = 'generative-art-' + Date.now() + '.png';
          link.href = canvas.toDataURL();
          link.click();
        });

        initParticles();
        animate();

        window.addEventListener('resize', () => {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
        });
      </script>
    `;

export const visualTechGenerativeArtFullPageStyles = `
      * { margin: 0; padding: 0; box-sizing: border-box; }
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

      .gen-title-line {
        width: 80px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ffff, transparent);
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes gradientShift {
        0% { background-position: 0% center; }
        100% { background-position: 200% center; }
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        font-size: 0.85rem;
        color: #aaa;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
      }

      .gen-value {
        color: #ff00ff;
        font-weight: bold;
        font-size: 0.9rem;
      }

      .gen-slider {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        outline: none;
        border-radius: 2px;
        -webkit-appearance: none;
      }

      .gen-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        background: linear-gradient(135deg, #ff00ff, #00ffff);
        cursor: pointer;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
      }

      .gen-slider::-moz-range-thumb {
        width: 16px;
        height: 16px;
        background: linear-gradient(135deg, #ff00ff, #00ffff);
        cursor: pointer;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
      }

      .gen-theme-buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .gen-theme-btn {
        padding: 0.6rem;
        font-size: 0.75rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #fff;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s;
        text-transform: uppercase;
        font-family: inherit;
      }

      .gen-theme-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #00ffff;
      }

      .gen-theme-btn.active {
        background: linear-gradient(135deg, #ff00ff, #00ffff);
        border-color: #00ffff;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
      }

      .gen-shape-buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .gen-shape-btn {
        padding: 0.8rem;
        font-size: 1.2rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #fff;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s;
        font-family: inherit;
      }

      .gen-shape-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #ff00ff;
      }

      .gen-shape-btn.active {
        background: linear-gradient(135deg, #ff00ff, #00ffff);
        border-color: #ff00ff;
        box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
      }

      .gen-actions {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }

      .gen-btn {
        padding: 0.8rem 1rem;
        font-size: 0.9rem;
        font-weight: bold;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-family: inherit;
      }

      .gen-btn-primary {
        background: linear-gradient(135deg, #ff00ff, #ff0080);
        color: #fff;
        box-shadow: 0 4px 15px rgba(255, 0, 255, 0.4);
      }

      .gen-btn-primary:hover {
        box-shadow: 0 6px 25px rgba(255, 0, 255, 0.6);
        transform: translateY(-2px);
      }

      .gen-btn-secondary {
        background: rgba(255, 255, 255, 0.1);
        color: #00ffff;
        border: 1px solid #00ffff;
      }

      .gen-btn-secondary:hover {
        background: rgba(0, 255, 255, 0.2);
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
      }

      .gen-btn-accent {
        background: linear-gradient(135deg, #ffff00, #00ff00);
        color: #000;
        box-shadow: 0 4px 15px rgba(255, 255, 0, 0.4);
      }

      .gen-btn-accent:hover {
        box-shadow: 0 6px 25px rgba(255, 255, 0, 0.6);
        transform: translateY(-2px);
      }

      .gen-canvas-wrapper {
        position: relative;
        background: #0a0a0f;
        border: 2px solid #ff00ff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 40px rgba(255, 0, 255, 0.3);
      }

      .gen-canvas {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 500px;
      }

      .gen-canvas-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }

      .gen-scan-line {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ffff, transparent);
        animation: scan 3s linear infinite;
      }

      @keyframes scan {
        from { top: 0; }
        to { top: 100%; }
      }

      .gen-dashboard {
        background: rgba(20, 20, 30, 0.9);
        border-top: 2px solid #00ffff;
        padding: 1rem;
        box-shadow: 0 -4px 20px rgba(0, 255, 255, 0.2);
      }

      .gen-dashboard-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        max-width: 1400px;
        margin: 0 auto 1rem;
      }

      .gen-stat {
        background: rgba(255, 255, 255, 0.05);
        padding: 1rem;
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .gen-stat-label {
        font-size: 0.75rem;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        margin-bottom: 0.5rem;
      }

      .gen-stat-value {
        font-size: 1.8rem;
        font-weight: bold;
        color: #00ffff;
        margin-bottom: 0.5rem;
      }

      .gen-stat-bar {
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        overflow: hidden;
      }

      .gen-stat-fill {
        height: 100%;
        background: linear-gradient(90deg, #ff00ff, #00ffff);
        transition: width 0.3s;
      }

      .gen-stat-fill-cyan {
        background: linear-gradient(90deg, #00ffff, #0080ff);
      }

      .gen-stat-fill-pink {
        background: linear-gradient(90deg, #ff00ff, #ff0080);
      }

      .gen-stat-fill-green {
        background: linear-gradient(90deg, #00ff00, #00ff80);
      }

      @media (max-width: 1200px) {
        .gen-main {
          grid-template-columns: 1fr;
        }

        .gen-controls {
          max-height: none;
        }

        .gen-dashboard-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .gen-title {
          font-size: 2rem;
        }

        .gen-dashboard-grid {
          grid-template-columns: 1fr;
        }
      }
    `;
