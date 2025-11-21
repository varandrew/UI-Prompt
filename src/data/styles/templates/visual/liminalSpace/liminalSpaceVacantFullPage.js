// Liminal Space - Vacant Space Full Page Template
// VACANT_SPACE.EXE - 数位虛空空間完整页面預覽

export const liminalSpaceVacantFullPageHTML = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liminal Space - 曖昧空間感</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>INJECT_STYLES_HERE</style>
</head>
<body class="liminal-body">
  <!-- 背景效果层 -->
  <div class="liminal-background">
    <div class="liminal-fog-overlay"></div>
    <div class="liminal-noise-texture"></div>
    <div class="liminal-scanlines"></div>
  </div>

  <!-- 漂浮粒子 -->
  <div class="liminal-particles">
    <div class="liminal-particle" style="left: 15%; top: 20%; --delay: 0s; --duration: 12s;"></div>
    <div class="liminal-particle" style="left: 45%; top: 60%; --delay: 2s; --duration: 14s;"></div>
    <div class="liminal-particle" style="left: 75%; top: 35%; --delay: 4s; --duration: 13s;"></div>
    <div class="liminal-particle liminal-particle-cyan" style="left: 25%; top: 75%; --delay: 6s; --duration: 15s;"></div>
    <div class="liminal-particle liminal-particle-cyan" style="left: 85%; top: 15%; --delay: 8s; --duration: 11s;"></div>
  </div>

  <!-- Hero 区 -->
  <section class="liminal-hero">
    <div class="liminal-hero-content">
      <h1 class="liminal-neon-title">
        [ VACANT_SPACE.EXE ]
      </h1>
      <p class="liminal-subtitle">
        // Between existence and nothingness - digital space
      </p>
      <button class="liminal-neon-button">
        ENTER_THE_VOID
      </button>
    </div>
  </section>

  <!-- 霧化玻璃导航 -->
  <nav class="liminal-nav">
    <div class="liminal-glass-bar">
      <a href="javascript:void(0)" class="liminal-nav-item active">SECTOR_01</a>
      <a href="javascript:void(0)" class="liminal-nav-item">SECTOR_02</a>
      <a href="javascript:void(0)" class="liminal-nav-item">SECTOR_03</a>
      <span class="liminal-nav-indicator"></span>
    </div>
  </nav>

  <!-- 內容卡片网格 -->
  <section class="liminal-content">
    <div class="liminal-card-grid">
      <!-- 卡片 1 -->
      <div class="liminal-card">
        <div class="liminal-card-glow-ring"></div>
        <div class="liminal-card-image">
          <div class="liminal-placeholder-image"></div>
        </div>
        <div class="liminal-card-body">
          <h3 class="liminal-card-title">TERMINAL_A</h3>
          <p class="liminal-card-desc">Vacant Terminal Site / Waiting Area / Unattended</p>
          <div class="liminal-status-bar">
            <span class="liminal-led pink pulse"></span>
            <span class="liminal-status-text">INACTIVE</span>
          </div>
        </div>
      </div>

      <!-- 卡片 2 -->
      <div class="liminal-card">
        <div class="liminal-card-glow-ring"></div>
        <div class="liminal-card-image">
          <div class="liminal-placeholder-image"></div>
        </div>
        <div class="liminal-card-body">
          <h3 class="liminal-card-title">CORRIDOR_B</h3>
          <p class="liminal-card-desc">Corridor B Section / Late Night 03:47 / No Echo</p>
          <div class="liminal-status-bar">
            <span class="liminal-led cyan pulse"></span>
            <span class="liminal-status-text">MONITORING</span>
          </div>
        </div>
      </div>

      <!-- 卡片 3 -->
      <div class="liminal-card">
        <div class="liminal-card-glow-ring"></div>
        <div class="liminal-card-image">
          <div class="liminal-placeholder-image"></div>
        </div>
        <div class="liminal-card-body">
          <h3 class="liminal-card-title">VOID_C</h3>
          <p class="liminal-card-desc">Undefined Space / Digital Void / Boundless</p>
          <div class="liminal-status-bar">
            <span class="liminal-led pink pulse"></span>
            <span class="liminal-status-text">STANDBY</span>
          </div>
        </div>
      </div>

      <!-- 卡片 4 -->
      <div class="liminal-card">
        <div class="liminal-card-glow-ring"></div>
        <div class="liminal-card-image">
          <div class="liminal-placeholder-image"></div>
        </div>
        <div class="liminal-card-body">
          <h3 class="liminal-card-title">GATEWAY_D</h3>
          <p class="liminal-card-desc">Gateway D / Transitional Zone / Eternal Waiting</p>
          <div class="liminal-status-bar">
            <span class="liminal-led cyan pulse"></span>
            <span class="liminal-status-text">ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 交互元素区 -->
  <section class="liminal-interaction">
    <div class="liminal-form-container">
      <h3 class="liminal-section-title">SYSTEM_ACCESS</h3>

      <div class="liminal-input-group">
        <label class="liminal-label">ENTER_CODE</label>
        <input
          type="text"
          class="liminal-input"
          placeholder="_ _ _ _ _ _"
          maxlength="6"
        />
      </div>

      <div class="liminal-slider-group">
        <label class="liminal-label">SIGNAL_STRENGTH</label>
        <div class="liminal-slider">
          <div class="liminal-slider-track"></div>
          <div class="liminal-slider-thumb"></div>
        </div>
        <div class="liminal-slider-value">47%</div>
      </div>

      <div class="liminal-button-group">
        <button class="liminal-button primary">INITIALIZE</button>
        <button class="liminal-button secondary">ABORT</button>
      </div>
    </div>
  </section>

  <!-- 页腳 -->
  <footer class="liminal-footer">
    <p class="liminal-timestamp">SYSTEM_TIME: 03:47:21 AM</p>
    <p class="liminal-system-info">[ LIMINAL_OS v1.0.0 ] // NO_SIGNAL_DETECTED</p>
  </footer>

  <script>
    // 导航高亮切換
    document.querySelectorAll('.liminal-nav-item').forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.liminal-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // 滑桿交互
    const slider = document.querySelector('.liminal-slider');
    const thumb = document.querySelector('.liminal-slider-thumb');
    const valueDisplay = document.querySelector('.liminal-slider-value');

    if (slider && thumb) {
      let isDragging = false;

      thumb.addEventListener('mousedown', () => isDragging = true);
      document.addEventListener('mouseup', () => isDragging = false);

      slider.addEventListener('mousemove', (e) => {
        if (isDragging) {
          const rect = slider.getBoundingClientRect();
          const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
          const percentage = Math.round((x / rect.width) * 100);
          thumb.style.left = percentage + '%';
          valueDisplay.textContent = percentage + '%';
        }
      });
    }

    // 輸入框霓虹效果增強
    document.querySelectorAll('.liminal-input').forEach(input => {
      input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 20px rgba(0, 255, 204, 0.6), inset 0 0 15px rgba(0, 255, 204, 0.2)';
      });
      input.addEventListener('blur', () => {
        input.style.boxShadow = '';
      });
    });
  </script>
</body>
</html>
`;

export const liminalSpaceVacantFullPageStyles = `
/* 基礎樣式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.liminal-body {
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1d24 0%, #2c3038 100%);
  color: #8a8f9e;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* 背景效果层 */
.liminal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.liminal-fog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.02) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.15) 100%);
}

.liminal-noise-texture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  background-repeat: repeat;
  opacity: 0.3;
}

.liminal-scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    transparent 1px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 3px
  );
  animation: scanlineMove 20s linear infinite;
}

@keyframes scanlineMove {
  0% { background-position: 0 0; }
  100% { background-position: 0 100px; }
}

/* 漂浮粒子 */
.liminal-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.liminal-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ff006a 0%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 0, 106, 0.6);
  animation: liminalFloat var(--duration, 12s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

.liminal-particle-cyan {
  background: radial-gradient(circle, #00ffcc 0%, transparent 70%);
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.6);
}

@keyframes liminalFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.4;
  }
  33% {
    transform: translateY(-15px) translateX(8px);
    opacity: 0.7;
  }
  66% {
    transform: translateY(10px) translateX(-5px);
    opacity: 0.5;
  }
}

/* Hero 区 */
.liminal-hero {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20vh 10vw;
  text-align: center;
}

.liminal-hero-content {
  max-width: 800px;
}

.liminal-neon-title {
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #ff006a;
  text-shadow:
    0 0 10px rgba(255, 0, 106, 0.8),
    0 0 20px rgba(255, 0, 106, 0.6),
    0 0 40px rgba(255, 0, 106, 0.4),
    0 0 80px rgba(255, 0, 106, 0.2);
  animation: neonFlicker 3s ease-in-out infinite;
  margin-bottom: 2rem;
}

@keyframes neonFlicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.92; }
  55% { opacity: 0.88; }
  60% { opacity: 1; }
}

.liminal-subtitle {
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: #5f6472;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
  opacity: 0.7;
  transition: opacity 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-subtitle:hover {
  opacity: 1;
}

.liminal-neon-button {
  padding: 1rem 3rem;
  font-size: 1rem;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid #00ffcc;
  color: #00ffcc;
  cursor: pointer;
  box-shadow:
    0 0 15px rgba(0, 255, 204, 0.4),
    inset 0 0 15px rgba(0, 255, 204, 0.1);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-neon-button:hover {
  background: rgba(0, 255, 204, 0.1);
  box-shadow:
    0 0 25px rgba(0, 255, 204, 0.7),
    inset 0 0 25px rgba(0, 255, 204, 0.2);
  transform: translateY(-2px);
}

/* 霧化玻璃导航 */
.liminal-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
}

.liminal-glass-bar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  background: rgba(37, 40, 48, 0.6);
  backdrop-filter: blur(20px) saturate(80%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;
}

.liminal-nav-item {
  color: #5f6472;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  position: relative;
}

.liminal-nav-item:hover {
  color: #8a8f9e;
}

.liminal-nav-item.active {
  color: #00ffcc;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.6);
}

.liminal-nav-indicator {
  position: absolute;
  bottom: 0;
  left: 2rem;
  width: 60px;
  height: 2px;
  background: #00ffcc;
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 內容卡片网格 */
.liminal-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 8rem auto;
  padding: 0 2rem;
}

.liminal-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
}

.liminal-card {
  background: rgba(47, 52, 64, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  position: relative;
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 40px 80px rgba(0, 0, 0, 0.3),
    0 60px 120px rgba(0, 0, 0, 0.4),
    0 80px 160px rgba(0, 0, 0, 0.5);
}

.liminal-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 50px 100px rgba(0, 0, 0, 0.35),
    0 75px 150px rgba(0, 0, 0, 0.45),
    0 100px 200px rgba(0, 0, 0, 0.55);
}

.liminal-card-glow-ring {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(135deg, rgba(255, 0, 106, 0.1), rgba(0, 255, 204, 0.1));
  opacity: 0;
  transition: opacity 0.6s;
  pointer-events: none;
}

.liminal-card:hover .liminal-card-glow-ring {
  opacity: 1;
}

.liminal-card-image {
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.liminal-placeholder-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #252830 0%, #2f3440 100%);
  filter: grayscale(70%);
  position: relative;
}

.liminal-placeholder-image::before {
  content: '[ NO_IMAGE ]';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #3d4250;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}

.liminal-card-body {
  padding: 0.5rem 0;
}

.liminal-card-title {
  font-size: 1.2rem;
  color: #8a8f9e;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.liminal-card-desc {
  font-size: 0.85rem;
  color: #5f6472;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.liminal-status-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.liminal-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.liminal-led.pink {
  background: #ff006a;
  box-shadow: 0 0 10px rgba(255, 0, 106, 0.8);
}

.liminal-led.cyan {
  background: #00ffcc;
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
}

.liminal-led.pulse {
  animation: ledPulse 2s ease-in-out infinite;
}

@keyframes ledPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.liminal-status-text {
  font-size: 0.75rem;
  color: #5f6472;
  letter-spacing: 0.1em;
}

/* 交互元素区 */
.liminal-interaction {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 8rem auto;
  padding: 0 2rem;
}

.liminal-form-container {
  background: rgba(37, 40, 48, 0.6);
  backdrop-filter: blur(20px) saturate(80%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3rem;
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.liminal-section-title {
  font-size: 1.5rem;
  color: #8a8f9e;
  letter-spacing: 0.15em;
  margin-bottom: 2rem;
  text-align: center;
}

.liminal-input-group,
.liminal-slider-group {
  margin-bottom: 2rem;
}

.liminal-label {
  display: block;
  font-size: 0.8rem;
  color: #5f6472;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.liminal-input {
  width: 100%;
  padding: 1rem;
  background: rgba(26, 29, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #8a8f9e;
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  letter-spacing: 0.3em;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-input:focus {
  outline: none;
  border-color: #00ffcc;
}

.liminal-slider {
  position: relative;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.liminal-slider-track {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 47%;
  background: linear-gradient(90deg, #ff006a, #00ffcc);
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.6);
}

.liminal-slider-thumb {
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: #00ffcc;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.8);
  cursor: grab;
}

.liminal-slider-thumb:active {
  cursor: grabbing;
}

.liminal-slider-value {
  text-align: right;
  font-size: 0.9rem;
  color: #5f6472;
}

.liminal-button-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.liminal-button {
  flex: 1;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-button.primary {
  background: rgba(0, 255, 204, 0.1);
  border: 2px solid #00ffcc;
  color: #00ffcc;
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.3);
}

.liminal-button.primary:hover {
  background: rgba(0, 255, 204, 0.2);
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.6);
}

.liminal-button.secondary {
  background: rgba(255, 0, 106, 0.05);
  border: 2px solid #5f6472;
  color: #5f6472;
}

.liminal-button.secondary:hover {
  border-color: #ff006a;
  color: #ff006a;
  box-shadow: 0 0 15px rgba(255, 0, 106, 0.3);
}

/* 页腳 */
.liminal-footer {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 4rem 2rem;
  margin-top: 8rem;
}

.liminal-timestamp {
  font-size: 0.75rem;
  color: #3d4250;
  letter-spacing: 0.1em;
  opacity: 0.5;
  margin-bottom: 0.5rem;
}

.liminal-system-info {
  font-size: 0.7rem;
  color: #3d4250;
  letter-spacing: 0.05em;
  opacity: 0.3;
}

/* 響應式设計 */
@media (max-width: 768px) {
  .liminal-hero {
    padding: 15vh 5vw;
  }

  .liminal-neon-title {
    font-size: 2rem;
  }

  .liminal-glass-bar {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .liminal-card-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .liminal-card {
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 40px 80px rgba(0, 0, 0, 0.4);
  }

  .liminal-button-group {
    flex-direction: column;
  }
}
`;
