/**
 * Skeuomorphism Tech Company Full Page - Official Technology Website
 * 擬物化科技公司完整页面 - 官方技術网站主題
 *
 * 特色組件：
 * - 金屬质感导航欄
 * - 玻璃面板 Hero 区域
 * - LED 狀態指示灯
 * - 立体按鈕与控制器
 * - 产品展示舞台
 * - 金屬旋鈕控制面板
 * - 物理開关按鈕
 * - 發光效果与動画
 */
 
export const skeuomorphismTechCompanyFullPageHTML = `        
<!-- Skeuomorphism Tech Company Full Page -->
<div class="skeuo-full-page">
        <!-- Navigation Bar -->
        <nav class="skeuo-nav" role="navigation" aria-label="Main Navigation">
          <div class="skeuo-nav-container">
            <div class="skeuo-logo" aria-label="TechCore Systems">
              <span class="skeuo-logo-text">TECHCORE</span>
            </div>
            <ul class="skeuo-nav-menu">
              <li><a class="skeuo-nav-link">Home</a></li>
              <li><a class="skeuo-nav-link">Products</a></li>
              <li><a class="skeuo-nav-link">Features</a></li>
              <li><a class="skeuo-nav-link">Contact</a></li>
            </ul>
            <button class="skeuo-nav-cta" aria-label="Get Started">
              <span>GET STARTED</span>
            </button>
          </div>
        </nav>

        <!-- Hero Section -->
        <header class="skeuo-hero" role="banner">
          <div class="skeuo-hero-container">
            <!-- Glass Panel -->
            <div class="skeuo-glass-panel">
              <div class="skeuo-led-indicator"></div>
              <h1 class="skeuo-hero-title">
                <span class="skeuo-metal-text">NEXT-GEN</span>
                <span class="skeuo-gradient-text">Technology</span>
              </h1>
              <p class="skeuo-hero-subtitle">
                Experience the fusion of physical and digital design
              </p>
              <div class="skeuo-hero-actions">
                <button class="skeuo-btn-primary" tabindex="0">
                  <span class="skeuo-btn-icon">▶</span>
                  <span>LAUNCH DEMO</span>
                </button>
                <button class="skeuo-btn-secondary" tabindex="0">
                  <span>LEARN MORE</span>
                </button>
              </div>
              <!-- Status Indicators -->
              <div class="skeuo-status-bar">
                <div class="skeuo-status-item">
                  <span class="skeuo-led skeuo-led-green"></span>
                  <span>ONLINE</span>
                </div>
                <div class="skeuo-status-item">
                  <span class="skeuo-led skeuo-led-blue"></span>
                  <span>SECURE</span>
                </div>
                <div class="skeuo-status-item">
                  <span class="skeuo-led skeuo-led-orange"></span>
                  <span>ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Features Section -->
        <section class="skeuo-features" aria-label="Key Features">
          <div class="skeuo-section-container">
            <h2 class="skeuo-section-title">
              <span class="skeuo-title-metal">CORE FEATURES</span>
            </h2>
            <div class="skeuo-features-grid">
              <!-- Feature Card 1 -->
              <article class="skeuo-feature-card">
                <div class="skeuo-feature-icon-base">
                  <div class="skeuo-feature-icon">⚡</div>
                </div>
                <div class="skeuo-feature-content">
                  <h3 class="skeuo-feature-title">High Performance</h3>
                  <p class="skeuo-feature-desc">Advanced algorithms for lightning-fast processing</p>
                </div>
              </article>

              <!-- Feature Card 2 -->
              <article class="skeuo-feature-card">
                <div class="skeuo-feature-icon-base">
                  <div class="skeuo-feature-icon">🔒</div>
                </div>
                <div class="skeuo-feature-content">
                  <h3 class="skeuo-feature-title">Security First</h3>
                  <p class="skeuo-feature-desc">Military-grade encryption for your data</p>
                </div>
              </article>

              <!-- Feature Card 3 -->
              <article class="skeuo-feature-card">
                <div class="skeuo-feature-icon-base">
                  <div class="skeuo-feature-icon">🎯</div>
                </div>
                <div class="skeuo-feature-content">
                  <h3 class="skeuo-feature-title">Precision Control</h3>
                  <p class="skeuo-feature-desc">Fine-tuned controls for exact adjustments</p>
                </div>
              </article>

              <!-- Feature Card 4 -->
              <article class="skeuo-feature-card">
                <div class="skeuo-feature-icon-base">
                  <div class="skeuo-feature-icon">🌐</div>
                </div>
                <div class="skeuo-feature-content">
                  <h3 class="skeuo-feature-title">Global Access</h3>
                  <p class="skeuo-feature-desc">Connected worldwide with 99.9% uptime</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <!-- Product Showcase -->
        <section class="skeuo-showcase" aria-label="Product Showcase">
          <div class="skeuo-section-container">
            <h2 class="skeuo-section-title">
              <span class="skeuo-title-metal">SHOWCASE</span>
            </h2>
            <div class="skeuo-showcase-frame">
              <!-- Display Stage -->
              <div class="skeuo-display-stage">
                <div class="skeuo-spotlight"></div>
                <div class="skeuo-product-display">
                  <div class="skeuo-product-item">
                    <div class="skeuo-product-frame">
                      <div class="skeuo-product-content">
                        <span class="skeuo-product-label">SYSTEM X1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Control Panel -->
              <div class="skeuo-controls-panel">
                <div class="skeuo-control-group">
                  <label class="skeuo-control-label">INTENSITY</label>
                  <button class="skeuo-knob-control" role="slider" aria-label="Intensity Control" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" tabindex="0">
                    <span class="skeuo-knob-indicator"></span>
                  </button>
                </div>
                <div class="skeuo-control-group">
                  <label class="skeuo-control-label">ROTATION</label>
                  <button class="skeuo-knob-control" role="slider" aria-label="Rotation Control" aria-valuemin="0" aria-valuemax="360" aria-valuenow="0" tabindex="0">
                    <span class="skeuo-knob-indicator"></span>
                  </button>
                </div>
                <div class="skeuo-control-group">
                  <label class="skeuo-control-label">POWER</label>
                  <button class="skeuo-switch" role="switch" aria-checked="true" aria-label="Power Switch" tabindex="0">
                    <span class="skeuo-switch-handle"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="skeuo-footer" role="contentinfo">
          <div class="skeuo-footer-container">
            <div class="skeuo-footer-grid">
              <div class="skeuo-footer-col">
                <h4 class="skeuo-footer-title">PRODUCT</h4>
                <ul class="skeuo-footer-links">
                  <li><a class="skeuo-footer-link">Features</a></li>
                  <li><a class="skeuo-footer-link">Pricing</a></li>
                  <li><a class="skeuo-footer-link">Downloads</a></li>
                </ul>
              </div>
              <div class="skeuo-footer-col">
                <h4 class="skeuo-footer-title">COMPANY</h4>
                <ul class="skeuo-footer-links">
                  <li><a class="skeuo-footer-link">About</a></li>
                  <li><a class="skeuo-footer-link">Blog</a></li>
                  <li><a class="skeuo-footer-link">Careers</a></li>
                </ul>
              </div>
              <div class="skeuo-footer-col">
                <h4 class="skeuo-footer-title">SUPPORT</h4>
                <ul class="skeuo-footer-links">
                  <li><a class="skeuo-footer-link">Help Center</a></li>
                  <li><a class="skeuo-footer-link">Contact</a></li>
                  <li><a class="skeuo-footer-link">Status</a></li>
                </ul>
              </div>
            </div>
            <div class="skeuo-footer-bottom">
              <p class="skeuo-copyright">© 2025 TechCore Systems. All rights reserved.</p>
              <div class="skeuo-social-links">
                <a class="skeuo-social-btn" aria-label="Twitter">𝕏</a>
                <a class="skeuo-social-btn" aria-label="GitHub">GH</a>
                <a class="skeuo-social-btn" aria-label="LinkedIn">in</a>
              </div>
            </div>
          </div>
        </footer>
        </div>
`;

export const skeuomorphismTechCompanyFullPageStyles = `

      /* IMPORTANT: Disable all link navigation in preview */
      .skeuo-full-page a {
        pointer-events: auto;
        cursor: pointer;
      }
      .skeuo-full-page a:focus {
        outline: 2px solid rgba(59,130,246,0.5);
        outline-offset: 2px;
      }
      /* Prevent default link behavior */
      .skeuo-full-page a[href="javascript:void(0)"],
      .skeuo-full-page a[href="javascript:void(0)"] {
        text-decoration: none;
      }

      /* Base & Layout */
      .skeuo-full-page {
        min-height: 100vh;
        background: linear-gradient(180deg, #1e293b 0%, #334155 50%, #1e293b 100%);
        font-family: system-ui, -apple-system, sans-serif;
      }

      /* ===== NAVIGATION BAR ===== */
      .skeuo-nav {
        background: linear-gradient(to bottom, #334155 0%, #1e293b 100%);
        border-bottom: 1px solid rgba(255,255,255,0.1);
        box-shadow:
          0 4px 12px rgba(0,0,0,0.4),
          inset 0 1px 0 rgba(255,255,255,0.15),
          inset 0 -1px 0 rgba(0,0,0,0.3);
        position: sticky;
        top: 0;
        z-index: 1000;
        backdrop-filter: blur(12px);
      }

      .skeuo-nav-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .skeuo-logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .skeuo-logo-text {
        font-size: 1.5rem;
        font-weight: 900;
        background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 50%, #64748b 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        letter-spacing: 0.1em;
      }

      .skeuo-nav-menu {
        display: flex;
        gap: 1.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .skeuo-nav-link {
        color: #cbd5e1;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
        letter-spacing: 0.05em;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        transition: all 0.2s;
        position: relative;
      }

      .skeuo-nav-link:hover {
        color: #fff;
        background: rgba(255,255,255,0.05);
        box-shadow: 0 0 12px rgba(59,130,246,0.3);
      }

      .skeuo-nav-link:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(59,130,246,0.5);
      }

      .skeuo-nav-cta {
        background: linear-gradient(to bottom, #3b82f6 0%, #2563eb 100%);
        color: white;
        border: none;
        padding: 0.625rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 700;
        font-size: 0.875rem;
        letter-spacing: 0.05em;
        cursor: pointer;
        box-shadow:
          0 4px 0 #1d4ed8,
          inset 0 1px 0 rgba(255,255,255,0.3),
          0 6px 12px rgba(59,130,246,0.3);
        transition: all 0.15s;
      }

      .skeuo-nav-cta:hover {
        transform: translateY(-2px);
        box-shadow:
          0 6px 0 #1d4ed8,
          inset 0 1px 0 rgba(255,255,255,0.3),
          0 8px 16px rgba(59,130,246,0.4);
      }

      .skeuo-nav-cta:active {
        transform: translateY(2px);
        box-shadow:
          0 2px 0 #1d4ed8,
          inset 0 1px 0 rgba(255,255,255,0.3);
      }

      /* ===== HERO SECTION ===== */
      .skeuo-hero {
        padding: 6rem 2rem;
        position: relative;
        overflow: hidden;
      }

      .skeuo-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%);
        pointer-events: none;
      }

      .skeuo-hero-container {
        max-width: 900px;
        margin: 0 auto;
        position: relative;
      }

      /* Glass Panel */
      .skeuo-glass-panel {
        background: rgba(255,255,255,0.05);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 1.5rem;
        padding: 4rem 3rem;
        box-shadow:
          0 20px 60px rgba(0,0,0,0.4),
          inset 0 1px 0 rgba(255,255,255,0.1),
          inset 0 -1px 0 rgba(0,0,0,0.2);
        position: relative;
      }

      .skeuo-glass-panel::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%);
        border-radius: 1.5rem 1.5rem 0 0;
        pointer-events: none;
      }

      .skeuo-led-indicator {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 12px;
        height: 12px;
        background: #3b82f6;
        border-radius: 50%;
        box-shadow:
          0 0 16px rgba(59,130,246,0.8),
          0 0 32px rgba(59,130,246,0.4),
          inset 0 1px 2px rgba(255,255,255,0.5);
        animation: skeuo-led-pulse 2s infinite;
      }

      @keyframes skeuo-led-pulse {
        0%, 100% { opacity: 1; box-shadow: 0 0 16px rgba(59,130,246,0.8), 0 0 32px rgba(59,130,246,0.4); }
        50% { opacity: 0.6; box-shadow: 0 0 8px rgba(59,130,246,0.6), 0 0 16px rgba(59,130,246,0.2); }
      }

      .skeuo-hero-title {
        text-align: center;
        margin-bottom: 1.5rem;
      }

      .skeuo-metal-text {
        display: block;
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(135deg, #e2e8f0 0%, #94a3b8 50%, #475569 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 0.1em;
        text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        margin-bottom: 0.5rem;
      }

      .skeuo-gradient-text {
        display: block;
        font-size: 4rem;
        font-weight: 900;
        background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 0.05em;
      }

      .skeuo-hero-subtitle {
        text-align: center;
        color: #cbd5e1;
        font-size: 1.25rem;
        margin-bottom: 3rem;
        font-weight: 400;
      }

      .skeuo-hero-actions {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        margin-bottom: 3rem;
      }

      .skeuo-btn-primary,
      .skeuo-btn-secondary {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 2rem;
        border-radius: 0.75rem;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 0.05em;
        cursor: pointer;
        border: none;
        transition: all 0.15s;
      }

      .skeuo-btn-primary {
        background: linear-gradient(to bottom, #3b82f6 0%, #2563eb 100%);
        color: white;
        box-shadow:
          0 6px 0 #1d4ed8,
          inset 0 1px 0 rgba(255,255,255,0.3),
          0 10px 25px rgba(59,130,246,0.4);
      }

      .skeuo-btn-primary:hover {
        transform: translateY(-3px);
        box-shadow:
          0 9px 0 #1d4ed8,
          inset 0 1px 0 rgba(255,255,255,0.3),
          0 15px 35px rgba(59,130,246,0.5);
      }

      .skeuo-btn-primary:active {
        transform: translateY(3px);
        box-shadow:
          0 3px 0 #1d4ed8,
          inset 0 1px 0 rgba(255,255,255,0.3);
      }

      .skeuo-btn-secondary {
        background: linear-gradient(to bottom, #64748b 0%, #475569 100%);
        color: white;
        box-shadow:
          0 6px 0 #334155,
          inset 0 1px 0 rgba(255,255,255,0.2),
          0 10px 25px rgba(0,0,0,0.2);
      }

      .skeuo-btn-secondary:hover {
        transform: translateY(-3px);
        box-shadow:
          0 9px 0 #334155,
          inset 0 1px 0 rgba(255,255,255,0.2),
          0 15px 35px rgba(0,0,0,0.3);
      }

      .skeuo-btn-secondary:active {
        transform: translateY(3px);
        box-shadow:
          0 3px 0 #334155,
          inset 0 1px 0 rgba(255,255,255,0.2);
      }

      .skeuo-btn-icon {
        font-size: 1.25rem;
        line-height: 1;
      }

      /* Status Bar */
      .skeuo-status-bar {
        display: flex;
        justify-content: center;
        gap: 3rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.1);
      }

      .skeuo-status-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: #cbd5e1;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.05em;
      }

      .skeuo-led {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        box-shadow: inset 0 1px 2px rgba(255,255,255,0.3);
      }

      .skeuo-led-green {
        background: #10b981;
        box-shadow:
          0 0 12px rgba(16,185,129,0.8),
          inset 0 1px 2px rgba(255,255,255,0.3);
        animation: skeuo-led-pulse 2s infinite;
      }

      .skeuo-led-blue {
        background: #3b82f6;
        box-shadow:
          0 0 12px rgba(59,130,246,0.8),
          inset 0 1px 2px rgba(255,255,255,0.3);
      }

      .skeuo-led-orange {
        background: #f97316;
        box-shadow:
          0 0 12px rgba(249,115,22,0.8),
          inset 0 1px 2px rgba(255,255,255,0.3);
        animation: skeuo-led-pulse 2.5s infinite;
      }

      /* ===== FEATURES SECTION ===== */
      .skeuo-features {
        padding: 6rem 2rem;
        background: linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%);
      }

      .skeuo-section-container {
        max-width: 1280px;
        margin: 0 auto;
      }

      .skeuo-section-title {
        text-align: center;
        margin-bottom: 4rem;
      }

      .skeuo-title-metal {
        display: inline-block;
        font-size: 2.5rem;
        font-weight: 900;
        background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 30%, #94a3b8 60%, #64748b 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 0.15em;
        position: relative;
        padding-bottom: 1rem;
      }

      .skeuo-title-metal::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: linear-gradient(to right, transparent, #3b82f6, transparent);
        box-shadow: 0 0 12px rgba(59,130,246,0.5);
      }

      .skeuo-features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }

      .skeuo-feature-card {
        background: rgba(255,255,255,0.03);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 1rem;
        padding: 2rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow:
          0 8px 24px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.05);
      }

      .skeuo-feature-card:hover {
        transform: translateY(-8px);
        background: rgba(255,255,255,0.05);
        border-color: rgba(59,130,246,0.3);
        box-shadow:
          0 16px 48px rgba(0,0,0,0.3),
          0 0 24px rgba(59,130,246,0.2),
          inset 0 1px 0 rgba(255,255,255,0.1);
      }

      .skeuo-feature-icon-base {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #475569 0%, #334155 100%);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        box-shadow:
          0 6px 0 #1e293b,
          inset 0 2px 4px rgba(255,255,255,0.1),
          inset 0 -2px 4px rgba(0,0,0,0.2);
        transition: all 0.3s;
      }

      .skeuo-feature-card:hover .skeuo-feature-icon-base {
        transform: translateY(-3px);
        box-shadow:
          0 9px 0 #1e293b,
          inset 0 2px 4px rgba(255,255,255,0.1),
          inset 0 -2px 4px rgba(0,0,0,0.2);
      }

      .skeuo-feature-icon {
        font-size: 2.5rem;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      }

      .skeuo-feature-content {
        /* Content styling */
      }

      .skeuo-feature-title {
        color: #e2e8f0;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        letter-spacing: 0.025em;
      }

      .skeuo-feature-desc {
        color: #94a3b8;
        font-size: 0.9375rem;
        line-height: 1.6;
      }

      /* ===== PRODUCT SHOWCASE ===== */
      .skeuo-showcase {
        padding: 6rem 2rem;
        background: linear-gradient(180deg, rgba(15,23,42,0.5) 0%, rgba(30,41,59,0.5) 100%);
      }

      .skeuo-showcase-frame {
        background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
        border: 2px solid rgba(255,255,255,0.1);
        border-radius: 1.5rem;
        padding: 3rem;
        box-shadow:
          0 25px 60px rgba(0,0,0,0.5),
          inset 0 2px 0 rgba(255,255,255,0.1),
          inset 0 -2px 4px rgba(0,0,0,0.3);
      }

      .skeuo-display-stage {
        background: linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%);
        border-radius: 1rem;
        padding: 3rem;
        margin-bottom: 2rem;
        box-shadow:
          inset 0 4px 16px rgba(0,0,0,0.8),
          inset 0 -2px 4px rgba(255,255,255,0.03);
        position: relative;
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .skeuo-spotlight {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%);
        pointer-events: none;
        animation: skeuo-spotlight-pulse 3s infinite;
      }

      @keyframes skeuo-spotlight-pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }

      .skeuo-product-display {
        position: relative;
        z-index: 1;
      }

      .skeuo-product-frame {
        background: rgba(255,255,255,0.05);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 0.75rem;
        padding: 2rem 3rem;
        box-shadow:
          0 12px 32px rgba(0,0,0,0.4),
          inset 0 1px 0 rgba(255,255,255,0.1);
      }

      .skeuo-product-label {
        display: block;
        font-size: 2rem;
        font-weight: 900;
        background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 0.2em;
        text-align: center;
      }

      /* Control Panel */
      .skeuo-controls-panel {
        display: flex;
        justify-content: center;
        gap: 4rem;
        align-items: flex-end;
      }

      .skeuo-control-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .skeuo-control-label {
        color: #94a3b8;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.5);
      }

      .skeuo-knob-control {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #64748b 0%, #475569 50%, #334155 100%);
        border: 4px solid rgba(0,0,0,0.4);
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        box-shadow:
          0 8px 0 #1e293b,
          inset 0 3px 8px rgba(255,255,255,0.2),
          inset 0 -3px 8px rgba(0,0,0,0.4);
        transition: all 0.15s;
      }

      .skeuo-knob-control:hover {
        transform: translateY(-4px);
        box-shadow:
          0 12px 0 #1e293b,
          inset 0 3px 8px rgba(255,255,255,0.2),
          inset 0 -3px 8px rgba(0,0,0,0.4);
      }

      .skeuo-knob-control:active {
        transform: translateY(4px) rotate(30deg);
        box-shadow:
          0 4px 0 #1e293b,
          inset 0 3px 8px rgba(255,255,255,0.2),
          inset 0 -3px 8px rgba(0,0,0,0.4);
      }

      .skeuo-knob-indicator {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        width: 3px;
        height: 20px;
        background: linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.5));
        border-radius: 2px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
      }

      /* Switch Control */
      .skeuo-switch {
        width: 80px;
        height: 40px;
        background: linear-gradient(to bottom, #1e293b 0%, #0f172a 100%);
        border: 3px solid rgba(0,0,0,0.4);
        border-radius: 25px;
        cursor: pointer;
        position: relative;
        box-shadow:
          inset 0 2px 8px rgba(0,0,0,0.6),
          inset 0 -1px 2px rgba(255,255,255,0.05);
        transition: all 0.3s;
      }

      .skeuo-switch[aria-checked="true"] {
        background: linear-gradient(to bottom, #2563eb 0%, #1d4ed8 100%);
      }

      .skeuo-switch-handle {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 28px;
        height: 28px;
        background: linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%);
        border-radius: 50%;
        box-shadow:
          0 4px 0 #475569,
          inset 0 1px 2px rgba(255,255,255,0.5),
          0 4px 8px rgba(0,0,0,0.3);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .skeuo-switch[aria-checked="true"] .skeuo-switch-handle {
        left: 44px;
      }

      .skeuo-switch:hover .skeuo-switch-handle {
        box-shadow:
          0 6px 0 #475569,
          inset 0 1px 2px rgba(255,255,255,0.5),
          0 6px 12px rgba(0,0,0,0.4);
      }

      .skeuo-switch:active .skeuo-switch-handle {
        box-shadow:
          0 2px 0 #475569,
          inset 0 1px 2px rgba(255,255,255,0.5);
      }

      /* ===== FOOTER ===== */
      .skeuo-footer {
        background: linear-gradient(to bottom, #1e293b 0%, #0f172a 100%);
        border-top: 1px solid rgba(255,255,255,0.1);
        padding: 4rem 2rem 2rem;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.05),
          inset 0 4px 8px rgba(0,0,0,0.2);
      }

      .skeuo-footer-container {
        max-width: 1280px;
        margin: 0 auto;
      }

      .skeuo-footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 3rem;
        margin-bottom: 3rem;
      }

      .skeuo-footer-title {
        color: #cbd5e1;
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: 0.15em;
        margin-bottom: 1.5rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.5);
      }

      .skeuo-footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .skeuo-footer-link {
        color: #94a3b8;
        text-decoration: none;
        font-size: 0.875rem;
        transition: all 0.2s;
        display: inline-block;
      }

      .skeuo-footer-link:hover {
        color: #cbd5e1;
        transform: translateX(4px);
      }

      .skeuo-footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.05);
      }

      .skeuo-copyright {
        color: #64748b;
        font-size: 0.875rem;
        margin: 0;
      }

      .skeuo-social-links {
        display: flex;
        gap: 1rem;
      }

      .skeuo-social-btn {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #475569 0%, #334155 100%);
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #cbd5e1;
        text-decoration: none;
        font-weight: 700;
        font-size: 0.875rem;
        box-shadow:
          0 4px 0 #1e293b,
          inset 0 1px 0 rgba(255,255,255,0.1);
        transition: all 0.15s;
      }

      .skeuo-social-btn:hover {
        transform: translateY(-2px);
        box-shadow:
          0 6px 0 #1e293b,
          inset 0 1px 0 rgba(255,255,255,0.1);
        color: #fff;
      }

      .skeuo-social-btn:active {
        transform: translateY(2px);
        box-shadow:
          0 2px 0 #1e293b,
          inset 0 1px 0 rgba(255,255,255,0.1);
      }

      /* ===== RESPONSIVE DESIGN ===== */
      @media (max-width: 768px) {
        .skeuo-nav-menu {
          display: none;
        }

        .skeuo-nav-container {
          padding: 1rem;
        }

        .skeuo-hero {
          padding: 3rem 1rem;
        }

        .skeuo-glass-panel {
          padding: 2rem 1.5rem;
        }

        .skeuo-metal-text {
          font-size: 2rem;
        }

        .skeuo-gradient-text {
          font-size: 2.5rem;
        }

        .skeuo-hero-actions {
          flex-direction: column;
        }

        .skeuo-status-bar {
          flex-direction: column;
          gap: 1rem;
        }

        .skeuo-features,
        .skeuo-showcase {
          padding: 3rem 1rem;
        }

        .skeuo-features-grid {
          grid-template-columns: 1fr;
        }

        .skeuo-controls-panel {
          flex-wrap: wrap;
          gap: 2rem;
        }

        .skeuo-knob-control {
          width: 60px;
          height: 60px;
        }

        .skeuo-footer-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .skeuo-footer-bottom {
          flex-direction: column;
          gap: 1.5rem;
        }
      }

      @media (min-width: 769px) and (max-width: 1024px) {
        .skeuo-features-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .skeuo-controls-panel {
          gap: 3rem;
        }
      }
`;
