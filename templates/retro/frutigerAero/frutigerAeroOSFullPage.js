// Frutiger Aero 全页预览 - Windows Vista/7 风格生产力工具界面
// 包含玻璃透明效果、自然元素、浮动气泡动画

export const frutigerAeroOSFullPageHTML = `
<!-- FRUTIGER AERO - 生产力工具界面全页預覽 -->
<div class="frutiger-aero-container">
  
  <!-- 浮动气泡背景 -->
  <div class="bubbles-container">
    <div class="bubble" style="left: 10%; animation-delay: 0s; animation-duration: 20s;"></div>
    <div class="bubble" style="left: 20%; animation-delay: 2s; animation-duration: 25s;"></div>
    <div class="bubble" style="left: 35%; animation-delay: 4s; animation-duration: 18s;"></div>
    <div class="bubble" style="left: 50%; animation-delay: 0s; animation-duration: 22s;"></div>
    <div class="bubble" style="left: 65%; animation-delay: 3s; animation-duration: 27s;"></div>
    <div class="bubble" style="left: 80%; animation-delay: 5s; animation-duration: 20s;"></div>
    <div class="bubble" style="left: 90%; animation-delay: 1s; animation-duration: 24s;"></div>
    <div class="bubble bubble-small" style="left: 15%; animation-delay: 6s; animation-duration: 15s;"></div>
    <div class="bubble bubble-small" style="left: 45%; animation-delay: 8s; animation-duration: 19s;"></div>
    <div class="bubble bubble-small" style="left: 75%; animation-delay: 7s; animation-duration: 16s;"></div>
    <div class="bubble bubble-large" style="left: 25%; animation-delay: 2s; animation-duration: 30s;"></div>
    <div class="bubble bubble-large" style="left: 55%; animation-delay: 4s; animation-duration: 28s;"></div>
    <div class="bubble bubble-large" style="left: 85%; animation-delay: 6s; animation-duration: 32s;"></div>
  </div>

  <!-- 1. 顶部导航栏 (Sticky Navigation) -->
  <nav class="aero-navbar">
    <div class="aero-container">
      <div class="navbar-content">
        <div class="navbar-logo">
          <div class="logo-icon"></div>
          <span class="logo-text">AeroDesk</span>
        </div>
        
        <div class="navbar-search">
          <input type="text" placeholder="Search apps, files and settings..." class="aero-search-input">
          <button class="search-button">🔍</button>
        </div>

        <div class="navbar-actions">
          <button class="aero-icon-button" title="Notifications">
            <span class="icon">🔔</span>
            <span class="badge">3</span>
          </button>
          <button class="aero-icon-button" title="Settings">
            <span class="icon">⚙️</span>
          </button>
          <div class="system-clock">
            <div class="clock-time">14:35</div>
            <div class="clock-date">2025/10/31</div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- 2. Hero 区域 - 桌面环境 -->
  <section class="aero-hero">
    <div class="aero-container">
      <div class="hero-content fade-in-up" data-delay="0">
        <h1 class="hero-title">
          Welcome to AeroDesk
        </h1>
        <p class="hero-subtitle">
          Experience the classic glass aesthetics of Windows Vista/7 era · Transparency · Gloss · Nature
        </p>
        
        <!-- 中心窗口展示 -->
        <div class="hero-window glass-card fade-in-up" data-delay="200">
          <div class="window-titlebar">
            <div class="window-buttons">
              <span class="window-btn window-btn-close"></span>
              <span class="window-btn window-btn-minimize"></span>
              <span class="window-btn window-btn-maximize"></span>
            </div>
            <div class="window-title">My Documents</div>
          </div>
          <div class="window-content">
            <div class="window-preview-grid">
              <div class="preview-item">📄</div>
              <div class="preview-item">📁</div>
              <div class="preview-item">🖼️</div>
              <div class="preview-item">🎵</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 核心功能窗口网格 -->
  <section class="aero-section">
    <div class="aero-container">
      <h2 class="section-title fade-in-up">
        Core Applications
      </h2>
      
      <div class="features-grid">
        <!-- 功能窗口 1 -->
        <div class="feature-window glass-card fade-in-up" data-delay="0">
          <div class="feature-icon">📧</div>
          <h3 class="feature-title">Mail</h3>
          <p class="feature-desc">Manage your emails and contacts</p>
          <button class="aero-button">Open</button>
        </div>

        <!-- 功能視窗 2 -->
        <div class="feature-window glass-card fade-in-up" data-delay="100">
          <div class="feature-icon">📅</div>
          <h3 class="feature-title">Calendar</h3>
          <p class="feature-desc">Schedule meetings and reminders</p>
          <button class="aero-button">Open</button>
        </div>

        <!-- 功能視窗 3 -->
        <div class="feature-window glass-card fade-in-up" data-delay="200">
          <div class="feature-icon">📝</div>
          <h3 class="feature-title">Notes</h3>
          <p class="feature-desc">Quick capture ideas and memos</p>
          <button class="aero-button">Open</button>
        </div>

        <!-- 功能視窗 4 -->
        <div class="feature-window glass-card fade-in-up" data-delay="300">
          <div class="feature-icon">🌐</div>
          <h3 class="feature-title">Browser</h3>
          <p class="feature-desc">Explore the web</p>
          <button class="aero-button">Open</button>
        </div>

        <!-- 功能視窗 5 -->
        <div class="feature-window glass-card fade-in-up" data-delay="400">
          <div class="feature-icon">🎨</div>
          <h3 class="feature-title">Paint</h3>
          <p class="feature-desc">Create and edit images</p>
          <button class="aero-button">Open</button>
        </div>

        <!-- 功能視窗 6 -->
        <div class="feature-window glass-card fade-in-up" data-delay="500">
          <div class="feature-icon">🎵</div>
          <h3 class="feature-title">Media Player</h3>
          <p class="feature-desc">Play music and videos</p>
          <button class="aero-button">Open</button>
        </div>
      </div>
    </div>
  </section>
</div>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色天空蓝渐变 (#87CEEB, #E0F6FF)、自然绿色 (#90EE90, #228B22)、纯白色 (#FFFFFF)、透明玻璃效果 (rgba(255,255,255,0.6-0.9))
`;

export const frutigerAeroOSFullPageStyles = `
/* ============================================
   FRUTIGER AERO - 完整样式表
   Windows Vista/7 经典 Aero Glass 美学
   ============================================ */

/* === 基础容器与背景 === */
.frutiger-aero-container {
  min-height: 100vh;
  background: linear-gradient(180deg, #87CEEB 0%, #7EC8E3 40%, #5FB3CC 100%);
  position: relative;
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

/* === 浮动气泡背景动画 === */
.bubbles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.bubble {
  position: absolute;
  bottom: -100px;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
  border-radius: 50%;
  opacity: 0.6;
  animation: float-up 20s linear infinite;
  filter: blur(2px);
  box-shadow: 
    inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.3);
}

.bubble-small {
  width: 30px;
  height: 30px;
}

.bubble-large {
  width: 100px;
  height: 100px;
}

@keyframes float-up {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-120vh) translateX(100px);
    opacity: 0;
  }
}

/* === 通用容器 === */
.aero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;
}

/* === 玻璃卡片效果 === */
.glass-card {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.6s ease;
}

.glass-card:hover::before {
  left: 100%;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 12px 48px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

/* === 导航栏 === */
.aero-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  padding: 12px 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.navbar-search {
  flex: 1;
  max-width: 500px;
  position: relative;
}

.aero-search-input {
  width: 100%;
  padding: 10px 46px 10px 16px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  font-size: 14px;
  color: #2c3e50;
  transition: all 0.3s ease;
}

.aero-search-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.search-button {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 50%;
  transition: background 0.2s;
}

.search-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.aero-icon-button {
  position: relative;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
}

.aero-icon-button:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.aero-icon-button .badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #e74c3c;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  border: 2px solid #87CEEB;
}

.system-clock {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 6px 12px;
  text-align: center;
  font-size: 13px;
  line-height: 1.4;
}

.clock-time {
  font-weight: 600;
  color: #2c3e50;
}

.clock-date {
  font-size: 11px;
  color: #5a6c7d;
}

/* === Hero 区域 === */
.aero-hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  position: relative;
}

.hero-content {
  text-align: center;
  max-width: 900px;
}

.hero-title {
  font-size: 56px;
  font-weight: 300;
  color: #2c3e50;
  margin-bottom: 16px;
  text-shadow: 
    0 2px 4px rgba(255, 255, 255, 0.8),
    0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 20px;
  color: #34495e;
  margin-bottom: 60px;
  font-weight: 400;
}

.hero-window {
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
}

.window-titlebar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px 12px 0 0;
}

.window-buttons {
  display: flex;
  gap: 8px;
}

.window-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.window-btn:hover {
  transform: scale(1.2);
}

.window-btn-close {
  background: linear-gradient(135deg, #ff5f56, #e81123);
  box-shadow: 0 2px 4px rgba(255, 95, 86, 0.4);
}

.window-btn-minimize {
  background: linear-gradient(135deg, #ffbd2e, #f0ad4e);
  box-shadow: 0 2px 4px rgba(255, 189, 46, 0.4);
}

.window-btn-maximize {
  background: linear-gradient(135deg, #27c93f, #5cb85c);
  box-shadow: 0 2px 4px rgba(39, 201, 63, 0.4);
}

.window-title {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
}

.window-content {
  padding: 32px;
}

.window-preview-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.preview-item {
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.preview-item:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

/* === Section 样式 === */
.aero-section {
  padding: 80px 0;
  position: relative;
}

.section-title {
  font-size: 40px;
  font-weight: 300;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 60px;
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
}

/* === 功能网格 === */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.feature-window {
  padding: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.feature-icon {
  font-size: 64px;
  margin-bottom: 8px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.feature-title {
  font-size: 22px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.feature-desc {
  font-size: 15px;
  color: #5a6c7d;
  margin: 0;
}

.aero-button {
  padding: 10px 24px;
  background: rgba(52, 152, 219, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(52, 152, 219, 0.5);
  border-radius: 6px;
  color: #2c3e50;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
}

.aero-button:hover {
  background: rgba(52, 152, 219, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(52, 152, 219, 0.3);
}

/* === 进场动画 === */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.fade-in-up[data-delay="0"] { animation-delay: 0s; }
.fade-in-up[data-delay="100"] { animation-delay: 0.1s; }
.fade-in-up[data-delay="200"] { animation-delay: 0.2s; }
.fade-in-up[data-delay="300"] { animation-delay: 0.3s; }
.fade-in-up[data-delay="400"] { animation-delay: 0.4s; }
.fade-in-up[data-delay="500"] { animation-delay: 0.5s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* === 响应式设计 === */
@media (max-width: 768px) {
  .aero-container {
    padding: 0 20px;
  }
  
  .navbar-content {
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .navbar-search {
    order: 3;
    width: 100%;
    max-width: none;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .window-preview-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
`;
