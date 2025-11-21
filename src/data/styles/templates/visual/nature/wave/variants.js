// Aurora Wave - 3 個全页預覽变体
// 1. Classic Aurora（經典極光）
// 2. Deep Space Aurora（深空極光）
// 3. Neon Aurora（霓虹極光）

// ===== 1. Classic Aurora（經典極光）=====
export const classicAuroraHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Classic Aurora Wave</title>
</head>
<body>
  <div class="aurora-page">
    <!-- 背景波浪层 (4 层) -->
    <div class="aurora-bg-container">
      <div class="aurora-bg-wave aurora-wave-1"></div>
      <div class="aurora-bg-wave aurora-wave-2"></div>
      <div class="aurora-bg-wave aurora-wave-3"></div>
      <div class="aurora-bg-wave aurora-wave-4"></div>
    </div>

    <!-- 星點背景 (30 個) -->
    <div class="aurora-stars-bg">
      ${Array.from({ length: 30 }, (_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = 2 + Math.random() * 3;
        const delay = Math.random() * 5;
        return `<div class="star-dot" style="top: ${top}%; left: ${left}%; width: ${size}px; height: ${size}px; animation-delay: ${delay}s;"></div>`;
      }).join('')}
    </div>

    <!-- 主內容区 -->
    <div class="aurora-content">
      <!-- Hero 区域 -->
      <section class="aurora-hero">
        <div class="aurora-hero-content">
          <h1 class="aurora-title">Aurora Wave</h1>
          <p class="aurora-subtitle">Experience the dreamlike beauty of northern lights</p>
          <div class="aurora-cta-group">
            <a href="javascript:void(0)" class="aurora-btn aurora-btn-primary">Explore More</a>
            <a href="javascript:void(0)" class="aurora-btn aurora-btn-secondary">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</body>
</html>
`;

export const classicAuroraStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  overflow-x: hidden;
}

/* 页面容器 */
.aurora-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg,
    #0a192f 0%,
    #1e2a47 50%,
    #2d3561 100%
  );
  overflow: hidden;
}

/* 背景波浪容器 */
.aurora-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

/* 波浪层 */
.aurora-bg-wave {
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
  mix-blend-mode: screen;
}

.aurora-wave-1 {
  animation:
    auroraWaveFlow 12s linear infinite,
    auroraColorShift1 20s ease-in-out infinite;
  opacity: 1;
}

.aurora-wave-2 {
  animation:
    auroraWaveFlow 15s linear infinite reverse,
    auroraColorShift2 24s ease-in-out infinite;
  animation-delay: 2s;
  opacity: 0.8;
  transform: translateY(15%);
}

.aurora-wave-3 {
  animation:
    auroraWaveFlow 18s linear infinite,
    auroraColorShift3 28s ease-in-out infinite;
  animation-delay: 4s;
  opacity: 0.65;
  transform: translateY(-10%);
}

.aurora-wave-4 {
  animation:
    auroraWaveFlow 21s linear infinite reverse,
    auroraColorShift4 32s ease-in-out infinite;
  animation-delay: 6s;
  opacity: 0.5;
  transform: translateY(25%);
}

/* 波浪流動動画 */
@keyframes auroraWaveFlow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* 色彩变換動画（4 個不同週期）*/
@keyframes auroraColorShift1 {
  0%, 100% { filter: blur(50px) hue-rotate(0deg); }
  50% { filter: blur(50px) hue-rotate(60deg); }
}

@keyframes auroraColorShift2 {
  0%, 100% { filter: blur(50px) hue-rotate(0deg); }
  50% { filter: blur(50px) hue-rotate(-45deg); }
}

@keyframes auroraColorShift3 {
  0%, 100% { filter: blur(50px) hue-rotate(0deg); }
  50% { filter: blur(50px) hue-rotate(50deg); }
}

@keyframes auroraColorShift4 {
  0%, 100% { filter: blur(50px) hue-rotate(0deg); }
  50% { filter: blur(50px) hue-rotate(-55deg); }
}

/* 星點背景容器 */
.aurora-stars-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

/* 星點 */
.star-dot {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow:
    0 0 4px rgba(255, 255, 255, 0.8),
    0 0 8px rgba(100, 255, 218, 0.5);
  animation: starTwinkle 4s ease-in-out infinite;
}

@keyframes starTwinkle {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.4);
  }
}

/* 主內容区 */
.aurora-content {
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
}

/* Hero 区域 */
.aurora-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 64px 32px;
}

.aurora-hero-content {
  text-align: center;
  max-width: 800px;
  background: rgba(10, 25, 47, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 24px;
  padding: 64px 48px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(100, 255, 218, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.aurora-hero-content:hover {
  border-color: rgba(100, 255, 218, 0.4);
  transform: translateY(-8px);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(100, 255, 218, 0.2),
    0 0 64px rgba(102, 126, 234, 0.2);
}

/* 标題 */
.aurora-title {
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(135deg,
    #667eea 0%,
    #764ba2 25%,
    #00f2fe 50%,
    #4facfe 75%,
    #667eea 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 8s ease infinite;
  letter-spacing: -0.02em;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* 副标題 */
.aurora-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 48px;
  line-height: 1.6;
}

/* 按鈕組 */
.aurora-cta-group {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

/* 按鈕基礎樣式 */
.aurora-btn {
  display: inline-block;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* 主按鈕 */
.aurora-btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  box-shadow:
    0 4px 16px rgba(102, 126, 234, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.aurora-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(102, 126, 234, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

/* 次按鈕 */
.aurora-btn-secondary {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);
}

.aurora-btn-secondary:hover {
  background: rgba(100, 255, 218, 0.2);
  border-color: rgba(100, 255, 218, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(100, 255, 218, 0.2);
}

/* 響應式设計 */
@media (max-width: 1024px) {
  .aurora-bg-wave {
    filter: blur(45px);
  }

  .aurora-title {
    font-size: 56px;
  }
}

@media (max-width: 768px) {
  .aurora-bg-wave {
    filter: blur(40px);
    animation-duration: 16s, 30s !important;
  }

  .aurora-wave-3,
  .aurora-wave-4 {
    display: none;
  }

  .aurora-hero {
    padding: 48px 24px;
  }

  .aurora-hero-content {
    padding: 48px 32px;
  }

  .aurora-title {
    font-size: 42px;
  }

  .aurora-subtitle {
    font-size: 18px;
  }

  .aurora-cta-group {
    flex-direction: column;
    gap: 16px;
  }

  .aurora-btn {
    width: 100%;
    text-align: center;
  }
}

/* 降低動画偏好 */
@media (prefers-reduced-motion: reduce) {
  .aurora-bg-wave,
  .star-dot,
  .aurora-title {
    animation: none !important;
  }

  .star-dot {
    opacity: 0.8;
  }

  .aurora-title {
    background: #667eea;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
`;

// ===== 2. Deep Space Aurora（深空極光）=====
export const deepSpaceAuroraHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deep Space Aurora Wave</title>
</head>
<body>
  <div class="deep-space-page">
    <!-- 背景波浪层 -->
    <div class="deep-space-bg-container">
      <div class="deep-space-wave deep-wave-1"></div>
      <div class="deep-space-wave deep-wave-2"></div>
      <div class="deep-space-wave deep-wave-3"></div>
    </div>

    <!-- 星點背景 (50 個，更多星點) -->
    <div class="deep-space-stars">
      ${Array.from({ length: 50 }, (_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = 1.5 + Math.random() * 2.5;
        const delay = Math.random() * 6;
        return `<div class="deep-star" style="top: ${top}%; left: ${left}%; width: ${size}px; height: ${size}px; animation-delay: ${delay}s;"></div>`;
      }).join('')}
    </div>

    <!-- 主內容 -->
    <div class="deep-space-content">
      <section class="deep-space-hero">
        <div class="deep-space-hero-content">
          <h1 class="deep-space-title">Deep Space Aurora</h1>
          <p class="deep-space-subtitle">Journey into the cosmic depths</p>
          <div class="deep-space-cta-group">
            <a href="javascript:void(0)" class="deep-space-btn deep-btn-primary">Begin Journey</a>
            <a href="javascript:void(0)" class="deep-space-btn deep-btn-secondary">Discover</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</body>
</html>
`;

export const deepSpaceAuroraStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  overflow-x: hidden;
}

.deep-space-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg,
    #000000 0%,
    #0a0a1a 40%,
    #1a1535 100%
  );
  overflow: hidden;
}

.deep-space-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.deep-space-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(75, 85, 180, 0.35) 25%,
    rgba(100, 60, 140, 0.35) 50%,
    rgba(50, 80, 150, 0.35) 75%,
    transparent 100%
  );
  border-radius: 50% / 20px;
  filter: blur(60px);
  mix-blend-mode: screen;
}

.deep-wave-1 {
  animation:
    deepWaveFlow 18s linear infinite,
    deepColorShift1 30s ease-in-out infinite;
  opacity: 0.9;
}

.deep-wave-2 {
  animation:
    deepWaveFlow 22s linear infinite reverse,
    deepColorShift2 35s ease-in-out infinite;
  animation-delay: 3s;
  opacity: 0.7;
  transform: translateY(20%);
}

.deep-wave-3 {
  animation:
    deepWaveFlow 26s linear infinite,
    deepColorShift3 40s ease-in-out infinite;
  animation-delay: 6s;
  opacity: 0.5;
  transform: translateY(-18%);
}

@keyframes deepWaveFlow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes deepColorShift1 {
  0%, 100% { filter: blur(60px) hue-rotate(0deg); }
  50% { filter: blur(60px) hue-rotate(40deg); }
}

@keyframes deepColorShift2 {
  0%, 100% { filter: blur(60px) hue-rotate(0deg); }
  50% { filter: blur(60px) hue-rotate(-35deg); }
}

@keyframes deepColorShift3 {
  0%, 100% { filter: blur(60px) hue-rotate(0deg); }
  50% { filter: blur(60px) hue-rotate(45deg); }
}

.deep-space-stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

.deep-star {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    0 0 3px rgba(255, 255, 255, 0.9),
    0 0 6px rgba(150, 180, 255, 0.4);
  animation: deepStarTwinkle 5s ease-in-out infinite;
}

@keyframes deepStarTwinkle {
  0%, 100% {
    opacity: 0.5;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

.deep-space-content {
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
}

.deep-space-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 64px 32px;
}

.deep-space-hero-content {
  text-align: center;
  max-width: 800px;
  background: rgba(5, 10, 25, 0.85);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(100, 120, 200, 0.2);
  border-radius: 24px;
  padding: 64px 48px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(100, 120, 200, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.deep-space-hero-content:hover {
  border-color: rgba(100, 120, 200, 0.4);
  transform: translateY(-8px);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(100, 120, 200, 0.25),
    0 0 64px rgba(75, 85, 180, 0.25);
}

.deep-space-title {
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(135deg,
    #4b55b4 0%,
    #643c8c 25%,
    #325096 50%,
    #4b55b4 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: deepGradientShift 10s ease infinite;
  letter-spacing: -0.02em;
}

@keyframes deepGradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.deep-space-subtitle {
  font-size: 20px;
  color: rgba(200, 210, 255, 0.8);
  margin-bottom: 48px;
  line-height: 1.6;
}

.deep-space-cta-group {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.deep-space-btn {
  display: inline-block;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.deep-btn-primary {
  background: linear-gradient(135deg, #4b55b4 0%, #643c8c 100%);
  color: white;
  border: none;
  box-shadow:
    0 4px 16px rgba(75, 85, 180, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.deep-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(75, 85, 180, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.deep-btn-secondary {
  background: rgba(100, 120, 200, 0.1);
  color: #6478c8;
  border: 1px solid rgba(100, 120, 200, 0.3);
}

.deep-btn-secondary:hover {
  background: rgba(100, 120, 200, 0.2);
  border-color: rgba(100, 120, 200, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(100, 120, 200, 0.2);
}

@media (max-width: 1024px) {
  .deep-space-wave {
    filter: blur(55px);
  }

  .deep-space-title {
    font-size: 56px;
  }
}

@media (max-width: 768px) {
  .deep-space-wave {
    filter: blur(50px);
    animation-duration: 20s, 35s !important;
  }

  .deep-wave-3 {
    display: none;
  }

  .deep-space-hero {
    padding: 48px 24px;
  }

  .deep-space-hero-content {
    padding: 48px 32px;
  }

  .deep-space-title {
    font-size: 42px;
  }

  .deep-space-subtitle {
    font-size: 18px;
  }

  .deep-space-cta-group {
    flex-direction: column;
    gap: 16px;
  }

  .deep-space-btn {
    width: 100%;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .deep-space-wave,
  .deep-star,
  .deep-space-title {
    animation: none !important;
  }

  .deep-star {
    opacity: 0.7;
  }

  .deep-space-title {
    background: #4b55b4;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
`;

// ===== 3. Neon Aurora（霓虹極光）=====
export const neonAuroraHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Aurora Wave</title>
</head>
<body>
  <div class="neon-page">
    <!-- 背景波浪层 -->
    <div class="neon-bg-container">
      <div class="neon-wave neon-wave-1"></div>
      <div class="neon-wave neon-wave-2"></div>
      <div class="neon-wave neon-wave-3"></div>
    </div>

    <!-- 星點背景 (20 個，較少) -->
    <div class="neon-stars">
      ${Array.from({ length: 20 }, (_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = 2 + Math.random() * 3;
        const delay = Math.random() * 3;
        return `<div class="neon-star" style="top: ${top}%; left: ${left}%; width: ${size}px; height: ${size}px; animation-delay: ${delay}s;"></div>`;
      }).join('')}
    </div>

    <!-- 主內容 -->
    <div class="neon-content">
      <section class="neon-hero">
        <div class="neon-hero-content">
          <h1 class="neon-title">Neon Aurora</h1>
          <p class="neon-subtitle">Electric dreams in vivid colors</p>
          <div class="neon-cta-group">
            <a href="javascript:void(0)" class="neon-btn neon-btn-primary">Get Started</a>
            <a href="javascript:void(0)" class="neon-btn neon-btn-secondary">Explore</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</body>
</html>
`;

export const neonAuroraStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  overflow-x: hidden;
}

.neon-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg,
    #0f0f1e 0%,
    #1a1a2e 50%,
    #16213e 100%
  );
  overflow: hidden;
}

.neon-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.neon-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 0, 230, 0.45) 25%,
    rgba(0, 240, 255, 0.45) 50%,
    rgba(130, 255, 0, 0.45) 75%,
    transparent 100%
  );
  border-radius: 50% / 20px;
  filter: blur(40px);
  mix-blend-mode: screen;
}

.neon-wave-1 {
  animation:
    neonWaveFlow 8s linear infinite,
    neonColorShift1 15s ease-in-out infinite;
  opacity: 1;
}

.neon-wave-2 {
  animation:
    neonWaveFlow 10s linear infinite reverse,
    neonColorShift2 18s ease-in-out infinite;
  animation-delay: 1.5s;
  opacity: 0.85;
  transform: translateY(18%);
}

.neon-wave-3 {
  animation:
    neonWaveFlow 12s linear infinite,
    neonColorShift3 21s ease-in-out infinite;
  animation-delay: 3s;
  opacity: 0.7;
  transform: translateY(-12%);
}

@keyframes neonWaveFlow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes neonColorShift1 {
  0%, 100% { filter: blur(40px) hue-rotate(0deg); }
  50% { filter: blur(40px) hue-rotate(80deg); }
}

@keyframes neonColorShift2 {
  0%, 100% { filter: blur(40px) hue-rotate(0deg); }
  50% { filter: blur(40px) hue-rotate(-70deg); }
}

@keyframes neonColorShift3 {
  0%, 100% { filter: blur(40px) hue-rotate(0deg); }
  50% { filter: blur(40px) hue-rotate(90deg); }
}

.neon-stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

.neon-star {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  box-shadow:
    0 0 6px rgba(255, 255, 255, 1),
    0 0 12px rgba(0, 240, 255, 0.6);
  animation: neonStarTwinkle 3s ease-in-out infinite;
}

@keyframes neonStarTwinkle {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

.neon-content {
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
}

.neon-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 64px 32px;
}

.neon-hero-content {
  text-align: center;
  max-width: 800px;
  background: rgba(15, 15, 30, 0.8);
  backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 0, 230, 0.3);
  border-radius: 24px;
  padding: 64px 48px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 32px rgba(255, 0, 230, 0.15),
    0 0 64px rgba(0, 240, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.neon-hero-content:hover {
  border-color: rgba(255, 0, 230, 0.6);
  transform: translateY(-8px);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.5),
    0 0 48px rgba(255, 0, 230, 0.3),
    0 0 96px rgba(0, 240, 255, 0.2);
}

.neon-title {
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(135deg,
    #ff00e6 0%,
    #00f0ff 50%,
    #82ff00 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: neonGradientShift 6s ease infinite;
  letter-spacing: -0.02em;
  text-shadow:
    0 0 20px rgba(255, 0, 230, 0.3),
    0 0 40px rgba(0, 240, 255, 0.2);
}

@keyframes neonGradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.neon-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 48px;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
}

.neon-cta-group {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.neon-btn {
  display: inline-block;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.neon-btn-primary {
  background: linear-gradient(135deg, #ff00e6 0%, #00f0ff 100%);
  color: white;
  border: none;
  box-shadow:
    0 4px 16px rgba(255, 0, 230, 0.4),
    0 0 20px rgba(255, 0, 230, 0.2);
}

.neon-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(255, 0, 230, 0.5),
    0 0 32px rgba(255, 0, 230, 0.3);
}

.neon-btn-secondary {
  background: rgba(0, 240, 255, 0.1);
  color: #00f0ff;
  border: 2px solid rgba(0, 240, 255, 0.4);
}

.neon-btn-secondary:hover {
  background: rgba(0, 240, 255, 0.2);
  border-color: rgba(0, 240, 255, 0.6);
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(0, 240, 255, 0.3),
    0 0 20px rgba(0, 240, 255, 0.2);
}

@media (max-width: 1024px) {
  .neon-wave {
    filter: blur(38px);
  }

  .neon-title {
    font-size: 56px;
  }
}

@media (max-width: 768px) {
  .neon-wave {
    filter: blur(35px);
    animation-duration: 10s, 18s !important;
  }

  .neon-wave-3 {
    display: none;
  }

  .neon-hero {
    padding: 48px 24px;
  }

  .neon-hero-content {
    padding: 48px 32px;
  }

  .neon-title {
    font-size: 42px;
  }

  .neon-subtitle {
    font-size: 18px;
  }

  .neon-cta-group {
    flex-direction: column;
    gap: 16px;
  }

  .neon-btn {
    width: 100%;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .neon-wave,
  .neon-star,
  .neon-title {
    animation: none !important;
  }

  .neon-star {
    opacity: 0.8;
  }

  .neon-title {
    background: #ff00e6;
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: none;
  }
}
`;
