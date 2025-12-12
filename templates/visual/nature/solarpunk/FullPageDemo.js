// Solarpunk Full Page Eco-Tech Dashboard
// 太阳庞克完整页面 - 生态科技仪表板

export const fullPageHTML = `
<!-- Solarpunk Eco-Tech Dashboard -->
<div class="solarpunk-dashboard">
  <!-- 背景生態元素 -->
  <div class="eco-background">
    <div class="sun-orb"></div>
    <div class="leaf leaf-1"></div>
    <div class="leaf leaf-2"></div>
    <div class="leaf leaf-3"></div>
    <div class="vine-trail"></div>
  </div>

  <!-- 頂部导航欄 -->
  <header class="solarpunk-header">
    <div class="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
      <div class="flex items-center gap-4">
        <div class="solarpunk-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="2" class="text-yellow-600"/>
            <path d="M20 5 L23 10 L28 10 L24 14 L26 19 L20 15 L14 19 L16 14 L12 10 L17 10 Z" fill="currentColor" class="text-yellow-600"/>
            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" stroke-width="1.5" class="text-green-700"/>
          </svg>
        </div>
        <div class="solarpunk-title">
          <h1 class="text-2xl font-bold text-green-900">EcoNet</h1>
          <p class="text-sm text-green-700">Sustainable Living Dashboard</p>
        </div>
      </div>
      <nav class="flex gap-8 items-center">
        <a href="javascript:void(0)" class="solarpunk-nav-link">Energy</a>
        <a href="javascript:void(0)" class="solarpunk-nav-link">Resources</a>
        <a href="javascript:void(0)" class="solarpunk-nav-link">Community</a>
        <button class="solarpunk-btn-primary">Connect</button>
      </nav>
    </div>
  </header>

  <!-- 主容器 -->
  <main class="container mx-auto px-6 py-8 max-w-7xl relative z-10">
    <!-- Hero Section -->
    <section class="solarpunk-hero mb-12">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-4xl font-bold text-green-900 mb-4">
            Welcome to the <span class="text-yellow-700">Solar</span> Future
          </h2>
          <p class="text-green-700 text-lg mb-6 leading-relaxed">
            Our eco-tech platform connects communities to sustainable energy,
            shared resources, and renewable technologies. Monitor your
            environmental impact in real-time.
          </p>
          <div class="flex gap-4">
            <button class="solarpunk-btn-primary">Get Started</button>
            <button class="solarpunk-btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="solarpunk-hero-visual">
          <div class="solar-panel-grid">
            <div class="panel panel-1"></div>
            <div class="panel panel-2"></div>
            <div class="panel panel-3"></div>
            <div class="panel panel-4"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 環保数据統計 -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <div class="solarpunk-stat-card">
        <div class="stat-icon">☀️</div>
        <div class="stat-value">2,847</div>
        <div class="stat-label">kWh Generated</div>
        <div class="stat-trend">↑ 12% this week</div>
      </div>
      <div class="solarpunk-stat-card">
        <div class="stat-icon">🌱</div>
        <div class="stat-value">847</div>
        <div class="stat-label">Trees Planted</div>
        <div class="stat-trend">↑ 34 this month</div>
      </div>
      <div class="solarpunk-stat-card">
        <div class="stat-icon">💧</div>
        <div class="stat-value">15,200</div>
        <div class="stat-label">Liters Saved</div>
        <div class="stat-trend">↑ 8% growth</div>
      </div>
      <div class="solarpunk-stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-value">2,340</div>
        <div class="stat-label">Community Members</div>
        <div class="stat-trend">↑ 156 joined</div>
      </div>
    </section>

    <!-- 能量生成時間线 -->
    <section class="mb-12">
      <h3 class="text-2xl font-bold text-green-900 mb-6">Energy Generation Today</h3>
      <div class="solarpunk-chart-card">
        <div class="chart-bars">
          <div class="bar" style="height: 30%;" title="6am"><span class="bar-label">6am</span></div>
          <div class="bar" style="height: 45%;" title="9am"><span class="bar-label">9am</span></div>
          <div class="bar" style="height: 75%;" title="12pm"><span class="bar-label">12pm</span></div>
          <div class="bar active" style="height: 88%;" title="3pm"><span class="bar-label">3pm</span></div>
          <div class="bar" style="height: 65%;" title="6pm"><span class="bar-label">6pm</span></div>
          <div class="bar" style="height: 25%;" title="9pm"><span class="bar-label">9pm</span></div>
        </div>
      </div>
    </section>

    <!-- 主要內容网格 -->
    <div class="grid md:grid-cols-3 gap-8 mb-12">
      <!-- 能源來源 -->
      <div class="md:col-span-2">
        <h3 class="text-2xl font-bold text-green-900 mb-6">Energy Sources</h3>
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="solarpunk-source-card">
            <div class="source-icon">☀️</div>
            <h4 class="font-semibold text-green-900">Solar Panels</h4>
            <p class="text-sm text-green-700">1,847 kWh</p>
            <div class="progress-bar">
              <div class="progress" style="width: 75%;"></div>
            </div>
          </div>
          <div class="solarpunk-source-card">
            <div class="source-icon">💨</div>
            <h4 class="font-semibold text-green-900">Wind Turbines</h4>
            <p class="text-sm text-green-700">682 kWh</p>
            <div class="progress-bar">
              <div class="progress" style="width: 42%;"></div>
            </div>
          </div>
          <div class="solarpunk-source-card">
            <div class="source-icon">💧</div>
            <h4 class="font-semibold text-green-900">Hydroelectric</h4>
            <p class="text-sm text-green-700">265 kWh</p>
            <div class="progress-bar">
              <div class="progress" style="width: 28%;"></div>
            </div>
          </div>
          <div class="solarpunk-source-card">
            <div class="source-icon">🌍</div>
            <h4 class="font-semibold text-green-900">Geothermal</h4>
            <p class="text-sm text-green-700">53 kWh</p>
            <div class="progress-bar">
              <div class="progress" style="width: 15%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 生態建議 -->
      <div>
        <h3 class="text-2xl font-bold text-green-900 mb-6">Eco Tips</h3>
        <div class="space-y-4">
          <div class="solarpunk-tip-card">
            <div class="tip-number">1</div>
            <div>
              <h4 class="font-semibold text-green-900">Peak Hours</h4>
              <p class="text-sm text-green-700">Use appliances 12-3pm</p>
            </div>
          </div>
          <div class="solarpunk-tip-card">
            <div class="tip-number">2</div>
            <div>
              <h4 class="font-semibold text-green-900">Water Harvest</h4>
              <p class="text-sm text-green-700">Next rain: 120L expected</p>
            </div>
          </div>
          <div class="solarpunk-tip-card">
            <div class="tip-number">3</div>
            <div>
              <h4 class="font-semibold text-green-900">Community Event</h4>
              <p class="text-sm text-green-700">Seed exchange Saturday!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 社区市場 -->
    <section class="mb-12">
      <h3 class="text-2xl font-bold text-green-900 mb-6">Community Marketplace</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="solarpunk-market-item">
          <div class="item-image">🥕</div>
          <h4 class="font-semibold text-green-900">Fresh Vegetables</h4>
          <p class="text-sm text-green-700">Local Harvest</p>
          <button class="solarpunk-btn-small">View</button>
        </div>
        <div class="solarpunk-market-item">
          <div class="item-image">⚙️</div>
          <h4 class="font-semibold text-green-900">Tool Library</h4>
          <p class="text-sm text-green-700">Share Tools</p>
          <button class="solarpunk-btn-small">View</button>
        </div>
        <div class="solarpunk-market-item">
          <div class="item-image">📚</div>
          <h4 class="font-semibold text-green-900">Knowledge Hub</h4>
          <p class="text-sm text-green-700">Learn & Share</p>
          <button class="solarpunk-btn-small">View</button>
        </div>
        <div class="solarpunk-market-item">
          <div class="item-image">🎨</div>
          <h4 class="font-semibold text-green-900">Crafts & Art</h4>
          <p class="text-sm text-green-700">Support Artists</p>
          <button class="solarpunk-btn-small">View</button>
        </div>
      </div>
    </section>

    <!-- 页腳 -->
    <footer class="solarpunk-footer mt-12 pt-8 border-t-2 border-yellow-500">
      <div class="grid md:grid-cols-4 gap-8 mb-6">
        <div>
          <h4 class="font-bold text-green-900 mb-3">About</h4>
          <ul class="space-y-2 text-sm text-green-700">
            <li><a href="javascript:void(0)">Our Mission</a></li>
            <li><a href="javascript:void(0)">How It Works</a></li>
            <li><a href="javascript:void(0)">Impact Report</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-green-900 mb-3">Resources</h4>
          <ul class="space-y-2 text-sm text-green-700">
            <li><a href="javascript:void(0)">Blog</a></li>
            <li><a href="javascript:void(0)">Guides</a></li>
            <li><a href="javascript:void(0)">API Docs</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-green-900 mb-3">Community</h4>
          <ul class="space-y-2 text-sm text-green-700">
            <li><a href="javascript:void(0)">Forum</a></li>
            <li><a href="javascript:void(0)">Events</a></li>
            <li><a href="javascript:void(0)">Partners</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-green-900 mb-3">Connect</h4>
          <ul class="space-y-2 text-sm text-green-700">
            <li><a href="javascript:void(0)">Twitter</a></li>
            <li><a href="javascript:void(0)">Discord</a></li>
            <li><a href="javascript:void(0)">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center text-green-700 text-sm py-4 border-t border-yellow-300">
        <p>© 2024 EcoNet - Building sustainable communities together 🌍</p>
      </div>
    </footer>
  </main>
</div>
`;

export const fullPageStyles = `
/* ==================== Solarpunk Eco-Tech Dashboard ==================== */

:root {
  --solarpunk-primary: #2d5016;
  --solarpunk-accent: #d4af37;
  --solarpunk-light: #e8f3d8;
  --solarpunk-dark: #1a3a0f;
  --solarpunk-soft: #a8d5a8;
}

/* ==================== DASHBOARD CONTAINER ==================== */
.solarpunk-dashboard {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(180deg, #f5faf0 0%, #e8f3d8 50%, #d4e8c1 100%);
  color: var(--solarpunk-primary);
  font-family: system-ui, -apple-system, sans-serif;
}

/* ==================== BACKGROUND ELEMENTS ==================== */
.eco-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.sun-orb {
  position: absolute;
  width: 200px;
  height: 200px;
  top: -50px;
  right: -30px;
  background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.05));
  border-radius: 50%;
  filter: blur(30px);
  animation: sun-glow 8s ease-in-out infinite;
}

@keyframes sun-glow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

.leaf {
  position: absolute;
  width: 120px;
  height: 120px;
  opacity: 0.15;
  background: radial-gradient(ellipse at 30% 30%, rgba(45, 80, 22, 0.3), transparent);
  border-radius: 50% 0 50% 50%;
  animation: float-leaf 15s ease-in-out infinite;
}

.leaf-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.leaf-2 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  right: 5%;
  animation-delay: 5s;
}

.leaf-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  animation-delay: 10s;
  opacity: 0.08;
}

@keyframes float-leaf {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(20px, -20px) rotate(15deg); }
  50% { transform: translate(-10px, -40px) rotate(30deg); }
  75% { transform: translate(-30px, -20px) rotate(15deg); }
}

.vine-trail {
  position: absolute;
  width: 100%;
  height: 4px;
  top: 40%;
  left: 0;
  background: linear-gradient(90deg, transparent, rgba(45, 80, 22, 0.1), transparent);
  animation: vine-draw 12s ease-in-out infinite;
}

@keyframes vine-draw {
  0% { width: 0; left: 0; }
  50% { width: 100%; left: 0; }
  100% { width: 0; left: 100%; }
}

/* ==================== HEADER ==================== */
.solarpunk-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(232, 243, 216, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid var(--solarpunk-accent);
  box-shadow: 0 2px 10px rgba(45, 80, 22, 0.1);
}

.solarpunk-logo {
  color: var(--solarpunk-accent);
  animation: rotate-logo 20s linear infinite;
}

@keyframes rotate-logo {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
}

.solarpunk-title h1 {
  background: linear-gradient(135deg, var(--solarpunk-primary), var(--solarpunk-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.solarpunk-nav-link {
  color: var(--solarpunk-primary);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
}

.solarpunk-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--solarpunk-accent);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.solarpunk-nav-link:hover::after {
  width: 100%;
}

.solarpunk-nav-link:hover {
  color: var(--solarpunk-accent);
  background: rgba(212, 175, 55, 0.1);
}

/* ==================== BUTTONS ==================== */
.solarpunk-btn-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--solarpunk-primary), var(--solarpunk-accent));
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(45, 80, 22, 0.2);
}

.solarpunk-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(212, 175, 55, 0.3);
}

.solarpunk-btn-secondary {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--solarpunk-primary);
  border: 2px solid var(--solarpunk-accent);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.solarpunk-btn-secondary:hover {
  background: rgba(212, 175, 55, 0.1);
  transform: translateY(-2px);
}

.solarpunk-btn-small {
  padding: 0.5rem 1rem;
  background: var(--solarpunk-accent);
  color: var(--solarpunk-dark);
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.solarpunk-btn-small:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
}

/* ==================== HERO SECTION ==================== */
.solarpunk-hero {
  background: rgba(232, 243, 216, 0.5);
  border: 2px solid var(--solarpunk-accent);
  border-radius: 16px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.solarpunk-hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: -50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent);
  border-radius: 50%;
}

.solar-panel-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.panel {
  aspect-ratio: 1;
  background: linear-gradient(135deg, rgba(45, 80, 22, 0.8), rgba(26, 58, 15, 0.8));
  border: 2px solid var(--solarpunk-accent);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.panel::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shine 3s infinite;
}

.panel-1 { animation-delay: 0s; }
.panel-2 { animation-delay: 0.75s; }
.panel-3 { animation-delay: 1.5s; }
.panel-4 { animation-delay: 2.25s; }

@keyframes shine {
  0% { left: -100%; }
  100% { left: 100%; }
}

.panel:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
}

/* ==================== STAT CARDS ==================== */
.solarpunk-stat-card {
  background: white;
  border: 2px solid var(--solarpunk-light);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.solarpunk-stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--solarpunk-primary), var(--solarpunk-accent));
}

.solarpunk-stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(45, 80, 22, 0.15);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: var(--solarpunk-primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--solarpunk-primary);
  font-weight: 500;
  margin-top: 0.5rem;
}

.stat-trend {
  font-size: 0.75rem;
  color: var(--solarpunk-accent);
  font-weight: 600;
  margin-top: 0.5rem;
}

/* ==================== CHART CARD ==================== */
.solarpunk-chart-card {
  background: white;
  border: 2px solid var(--solarpunk-light);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 200px;
  gap: 1rem;
}

.bar {
  width: 100%;
  background: linear-gradient(180deg, var(--solarpunk-accent), var(--solarpunk-primary));
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease;
  opacity: 0.7;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.bar:hover {
  opacity: 1;
  transform: scaleY(1.05);
}

.bar.active {
  opacity: 1;
  box-shadow: 0 0 16px rgba(212, 175, 55, 0.5);
}

.bar-label {
  font-size: 0.75rem;
  color: white;
  font-weight: 600;
  padding-bottom: 0.5rem;
}

/* ==================== SOURCE CARDS ==================== */
.solarpunk-source-card {
  background: white;
  border: 2px solid var(--solarpunk-light);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.solarpunk-source-card:hover {
  transform: translateY(-4px);
  border-color: var(--solarpunk-accent);
  box-shadow: 0 8px 16px rgba(212, 175, 55, 0.15);
}

.source-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--solarpunk-light);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.75rem;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, var(--solarpunk-primary), var(--solarpunk-accent));
  transition: width 0.5s ease;
  border-radius: 4px;
}

/* ==================== TIP CARDS ==================== */
.solarpunk-tip-card {
  background: white;
  border: 2px solid var(--solarpunk-accent);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  transition: all 0.3s ease;
}

.solarpunk-tip-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
}

.tip-number {
  width: 40px;
  height: 40px;
  background: var(--solarpunk-accent);
  color: var(--solarpunk-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

/* ==================== MARKET ITEMS ==================== */
.solarpunk-market-item {
  background: white;
  border: 2px solid var(--solarpunk-light);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.solarpunk-market-item:hover {
  transform: translateY(-8px);
  border-color: var(--solarpunk-accent);
  box-shadow: 0 12px 24px rgba(212, 175, 55, 0.2);
}

.item-image {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* ==================== FOOTER ==================== */
.solarpunk-footer {
  background: rgba(232, 243, 216, 0.8);
  color: var(--solarpunk-primary);
}

.solarpunk-footer a {
  color: var(--solarpunk-primary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.solarpunk-footer a:hover {
  color: var(--solarpunk-accent);
  padding-left: 4px;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 768px) {
  .solarpunk-header nav {
    flex-direction: column;
    gap: 1rem;
  }

  .solarpunk-hero {
    padding: 1.5rem;
  }

  .chart-bars {
    height: 150px;
  }

  .solar-panel-grid {
    grid-template-columns: 1fr;
  }
}
`;
