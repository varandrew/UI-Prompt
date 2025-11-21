// Minimalism Full Page Design - SaaS Landing Page
// 溫暖極简風格 (Warm Minimalism) with Timeline, Loading, List View components

export const minimalismFullPageHTML = `
  <!-- Navigation -->
  <nav class="min-nav">
    <div class="min-nav-container">
      <div class="min-logo">FOCUS</div>
      <ul class="min-nav-menu">
        <li><a href="javascript:void(0)" data-i18n="saasLanding.nav.product">Product</a></li>
        <li><a href="javascript:void(0)" data-i18n="saasLanding.nav.features">Features</a></li>
        <li><a href="javascript:void(0)" data-i18n="saasLanding.nav.pricing">Pricing</a></li>
        <li><a href="javascript:void(0)" data-i18n="saasLanding.nav.docs">Docs</a></li>
      </ul>
      <button class="min-nav-cta" data-i18n="saasLanding.cta.startTrial">Start Free Trial</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="min-hero">
    <div class="min-hero-container">
      <div class="min-hero-label" data-i18n="saasLanding.hero.label">PRODUCTIVITY SUITE</div>
      <h1 class="min-hero-title">
        <span class="min-hero-title-line" data-i18n="saasLanding.hero.title1">Less Complexity</span>
        <span class="min-hero-title-line min-hero-title-bold" data-i18n="saasLanding.hero.title2">More Focus</span>
      </h1>
      <p class="min-hero-subtitle">
        <span data-i18n="saasLanding.hero.subtitle">The workspace designed for clarity. Remove distractions, amplify productivity. Simply powerful.</span>
      </p>
      <div class="min-hero-actions">
        <button class="min-btn-primary" data-i18n="saasLanding.cta.startFree">Start Free</button>
        <button class="min-btn-secondary" data-i18n="saasLanding.cta.watchDemo">Watch Demo →</button>
      </div>
      <div class="min-hero-scroll">
        <div class="min-scroll-line"></div>
        <span data-i18n="common.scroll">Scroll</span>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="min-stats">
    <div class="min-section-container">
      <div class="min-stats-grid">
        <div class="min-stat-card">
          <div class="min-stat-number">50K+</div>
          <div class="min-stat-label" data-i18n="saasLanding.stats.activeUsers">Active Users</div>
          <div class="min-stat-desc" data-i18n="saasLanding.stats.worldwide">Worldwide</div>
        </div>
        <div class="min-stat-card">
          <div class="min-stat-number">99.9%</div>
          <div class="min-stat-label" data-i18n="saasLanding.stats.uptime">Uptime</div>
          <div class="min-stat-desc" data-i18n="saasLanding.stats.last12Months">Last 12 months</div>
        </div>
        <div class="min-stat-card">
          <div class="min-stat-number">4.9/5</div>
          <div class="min-stat-label" data-i18n="saasLanding.stats.rating">Rating</div>
          <div class="min-stat-desc" data-i18n="saasLanding.stats.reviews">From 2,000+ reviews</div>
        </div>
        <div class="min-stat-card">
          <div class="min-stat-number">24/7</div>
          <div class="min-stat-label" data-i18n="saasLanding.stats.support">Support</div>
          <div class="min-stat-desc" data-i18n="saasLanding.stats.alwaysAvailable">Always available</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline Section -->
  <section class="min-timeline-section">
    <div class="min-section-container">
      <div class="min-section-header">
        <span class="min-section-label" data-i18n="saasLanding.timeline.label">ROADMAP</span>
        <h2 class="min-section-title" data-i18n="saasLanding.timeline.title">Our Journey</h2>
      </div>
      <div class="min-timeline">
        <div class="min-timeline-item">
          <div class="min-timeline-marker"></div>
          <div class="min-timeline-content">
            <div class="min-timeline-date" data-i18n="saasLanding.timeline.q1Date">Q1 2024</div>
            <h3 class="min-timeline-title" data-i18n="saasLanding.timeline.q1Title">Launch</h3>
            <p class="min-timeline-desc" data-i18n="saasLanding.timeline.q1Desc">Initial release with core features and workspace management.</p>
          </div>
        </div>
        <div class="min-timeline-item">
          <div class="min-timeline-marker"></div>
          <div class="min-timeline-content">
            <div class="min-timeline-date" data-i18n="saasLanding.timeline.q2Date">Q2 2024</div>
            <h3 class="min-timeline-title" data-i18n="saasLanding.timeline.q2Title">Collaboration Tools</h3>
            <p class="min-timeline-desc" data-i18n="saasLanding.timeline.q2Desc">Real-time collaboration, comments, and team features.</p>
          </div>
        </div>
        <div class="min-timeline-item">
          <div class="min-timeline-marker"></div>
          <div class="min-timeline-content">
            <div class="min-timeline-date" data-i18n="saasLanding.timeline.q3Date">Q3 2024</div>
            <h3 class="min-timeline-title" data-i18n="saasLanding.timeline.q3Title">API & Integrations</h3>
            <p class="min-timeline-desc" data-i18n="saasLanding.timeline.q3Desc">Developer API and third-party app integrations.</p>
          </div>
        </div>
        <div class="min-timeline-item">
          <div class="min-timeline-marker"></div>
          <div class="min-timeline-content">
            <div class="min-timeline-date" data-i18n="saasLanding.timeline.q4Date">Q4 2024</div>
            <h3 class="min-timeline-title" data-i18n="saasLanding.timeline.q4Title">AI Features</h3>
            <p class="min-timeline-desc" data-i18n="saasLanding.timeline.q4Desc">Smart suggestions and automated workflow optimization.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="min-features">
    <div class="min-section-container">
      <div class="min-section-header">
        <span class="min-section-label" data-i18n="saasLanding.features.label">CORE FEATURES</span>
        <h2 class="min-section-title" data-i18n="saasLanding.features.title">Everything You Need</h2>
      </div>
      <div class="min-features-grid">
        <div class="min-feature-card">
          <div class="min-feature-icon">—</div>
          <h3 class="min-feature-title" data-i18n="saasLanding.features.feature1.title">Clean Interface</h3>
          <p class="min-feature-desc" data-i18n="saasLanding.features.feature1.desc">Distraction-free workspace focused on what matters most.</p>
        </div>
        <div class="min-feature-card">
          <div class="min-feature-icon">○</div>
          <h3 class="min-feature-title" data-i18n="saasLanding.features.feature2.title">Fast Performance</h3>
          <p class="min-feature-desc" data-i18n="saasLanding.features.feature2.desc">Lightning-fast response times and instant synchronization.</p>
        </div>
        <div class="min-feature-card">
          <div class="min-feature-icon">□</div>
          <h3 class="min-feature-title" data-i18n="saasLanding.features.feature3.title">Secure Storage</h3>
          <p class="min-feature-desc" data-i18n="saasLanding.features.feature3.desc">End-to-end encryption keeps your data private and safe.</p>
        </div>
        <div class="min-feature-card">
          <div class="min-feature-icon">△</div>
          <h3 class="min-feature-title" data-i18n="saasLanding.features.feature4.title">Team Collaboration</h3>
          <p class="min-feature-desc" data-i18n="saasLanding.features.feature4.desc">Work together seamlessly with real-time updates.</p>
        </div>
        <div class="min-feature-card">
          <div class="min-feature-icon">◇</div>
          <h3 class="min-feature-title" data-i18n="saasLanding.features.feature5.title">Cross-Platform</h3>
          <p class="min-feature-desc" data-i18n="saasLanding.features.feature5.desc">Access your workspace from any device, anywhere.</p>
        </div>
        <div class="min-feature-card">
          <div class="min-feature-icon">▽</div>
          <h3 class="min-feature-title" data-i18n="saasLanding.features.feature6.title">Smart Automation</h3>
          <p class="min-feature-desc" data-i18n="saasLanding.features.feature6.desc">Automate repetitive tasks and boost productivity.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- List View Section -->
  <section class="min-list-section">
    <div class="min-section-container">
      <div class="min-section-header">
        <span class="min-section-label" data-i18n="saasLanding.listView.label">WHAT'S INCLUDED</span>
        <h2 class="min-section-title" data-i18n="saasLanding.listView.title">Complete Feature Set</h2>
      </div>
      <div class="min-list-grid">
        <div class="min-list-column">
          <h3 class="min-list-heading" data-i18n="saasLanding.listView.workspace">Workspace</h3>
          <ul class="min-list">
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.unlimitedProjects">Unlimited projects</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.customTemplates">Custom templates</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.folderOrganization">Folder organization</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.quickSearch">Quick search</span>
            </li>
          </ul>
        </div>
        <div class="min-list-column">
          <h3 class="min-list-heading" data-i18n="saasLanding.listView.collaboration">Collaboration</h3>
          <ul class="min-list">
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.realtimeSync">Real-time sync</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.teamComments">Team comments</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.sharePermissions">Share permissions</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.activityTracking">Activity tracking</span>
            </li>
          </ul>
        </div>
        <div class="min-list-column">
          <h3 class="min-list-heading" data-i18n="saasLanding.listView.integration">Integration</h3>
          <ul class="min-list">
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.restApi">REST API access</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.webhooks">Webhooks support</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.thirdPartyApps">Third-party apps</span>
            </li>
            <li class="min-list-item">
              <span class="min-list-check">✓</span>
              <span data-i18n="saasLanding.listView.exportData">Export data</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading Animations Section -->
  <section class="min-loading-section">
    <div class="min-section-container">
      <div class="min-section-header">
        <span class="min-section-label" data-i18n="saasLanding.loading.label">PERFORMANCE</span>
        <h2 class="min-section-title" data-i18n="saasLanding.loading.title">Loading States</h2>
        <p class="min-section-desc" data-i18n="saasLanding.loading.desc">Minimal, elegant loading indicators</p>
      </div>
      <div class="min-loading-grid">
        <div class="min-loading-demo">
          <div class="min-loading-label" data-i18n="saasLanding.loading.spinner">Spinner</div>
          <div class="min-loading-spinner"></div>
        </div>
        <div class="min-loading-demo">
          <div class="min-loading-label" data-i18n="saasLanding.loading.pulse">Pulse</div>
          <div class="min-loading-pulse">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="min-loading-demo">
          <div class="min-loading-label" data-i18n="saasLanding.loading.progress">Progress</div>
          <div class="min-loading-progress">
            <div class="min-loading-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="min-testimonials">
    <div class="min-section-container">
      <div class="min-section-header">
        <span class="min-section-label" data-i18n="saasLanding.testimonials.label">TESTIMONIALS</span>
        <h2 class="min-section-title" data-i18n="saasLanding.testimonials.title">Loved by Teams</h2>
      </div>
      <div class="min-testimonial-list">
        <div class="min-testimonial-item">
          <p class="min-testimonial-text" data-i18n="saasLanding.testimonials.testimonial1.text">"The cleanest workspace tool I've ever used. It just works."</p>
          <div class="min-testimonial-author">
            <div class="min-testimonial-name" data-i18n="saasLanding.testimonials.testimonial1.author">Sarah Chen</div>
            <div class="min-testimonial-role" data-i18n="saasLanding.testimonials.testimonial1.role">Product Designer, Stripe</div>
          </div>
        </div>
        <div class="min-testimonial-item">
          <p class="min-testimonial-text" data-i18n="saasLanding.testimonials.testimonial2.text">"Finally, a tool that doesn't get in the way. Pure productivity."</p>
          <div class="min-testimonial-author">
            <div class="min-testimonial-name" data-i18n="saasLanding.testimonials.testimonial2.author">Marcus Rivera</div>
            <div class="min-testimonial-role" data-i18n="saasLanding.testimonials.testimonial2.role">Engineering Lead, Notion</div>
          </div>
        </div>
        <div class="min-testimonial-item">
          <p class="min-testimonial-text" data-i18n="saasLanding.testimonials.testimonial3.text">"Minimalism done right. Every pixel has a purpose."</p>
          <div class="min-testimonial-author">
            <div class="min-testimonial-name" data-i18n="saasLanding.testimonials.testimonial3.author">Emma Thompson</div>
            <div class="min-testimonial-role" data-i18n="saasLanding.testimonials.testimonial3.role">CEO, Linear</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="min-pricing">
    <div class="min-section-container">
      <div class="min-section-header">
        <span class="min-section-label" data-i18n="saasLanding.pricing.label">PRICING</span>
        <h2 class="min-section-title" data-i18n="saasLanding.pricing.title">Simple, Transparent</h2>
      </div>
      <div class="min-pricing-grid">
        <div class="min-price-card">
          <div class="min-price-header">
            <div class="min-price-name" data-i18n="saasLanding.pricing.free.name">Free</div>
            <div class="min-price-amount">
              <span class="min-price-currency">$</span>
              <span class="min-price-value">0</span>
              <span class="min-price-period" data-i18n="saasLanding.pricing.period">/mo</span>
            </div>
          </div>
          <ul class="min-price-features">
            <li data-i18n="saasLanding.pricing.free.feature1">3 Projects</li>
            <li data-i18n="saasLanding.pricing.free.feature2">Basic features</li>
            <li data-i18n="saasLanding.pricing.free.feature3">Community support</li>
          </ul>
          <button class="min-price-btn" data-i18n="saasLanding.pricing.free.getStarted">Get Started</button>
        </div>
        <div class="min-price-card min-price-featured">
          <div class="min-price-badge" data-i18n="saasLanding.pricing.pro.badge">POPULAR</div>
          <div class="min-price-header">
            <div class="min-price-name" data-i18n="saasLanding.pricing.pro.name">Pro</div>
            <div class="min-price-amount">
              <span class="min-price-currency">$</span>
              <span class="min-price-value">12</span>
              <span class="min-price-period" data-i18n="saasLanding.pricing.period">/mo</span>
            </div>
          </div>
          <ul class="min-price-features">
            <li data-i18n="saasLanding.pricing.pro.feature1">Unlimited projects</li>
            <li data-i18n="saasLanding.pricing.pro.feature2">All features</li>
            <li data-i18n="saasLanding.pricing.pro.feature3">Priority support</li>
            <li data-i18n="saasLanding.pricing.pro.feature4">API access</li>
          </ul>
          <button class="min-price-btn min-price-btn-primary" data-i18n="saasLanding.pricing.pro.startTrial">Start Trial</button>
        </div>
        <div class="min-price-card">
          <div class="min-price-header">
            <div class="min-price-name" data-i18n="saasLanding.pricing.team.name">Team</div>
            <div class="min-price-amount">
              <span class="min-price-currency">$</span>
              <span class="min-price-value">29</span>
              <span class="min-price-period" data-i18n="saasLanding.pricing.period">/mo</span>
            </div>
          </div>
          <ul class="min-price-features">
            <li data-i18n="saasLanding.pricing.team.feature1">Everything in Pro</li>
            <li data-i18n="saasLanding.pricing.team.feature2">Team collaboration</li>
            <li data-i18n="saasLanding.pricing.team.feature3">Advanced analytics</li>
            <li data-i18n="saasLanding.pricing.team.feature4">Custom integrations</li>
          </ul>
          <button class="min-price-btn" data-i18n="saasLanding.pricing.team.contactSales">Contact Sales</button>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="min-cta">
    <div class="min-section-container">
      <div class="min-cta-content">
        <h2 class="min-cta-title" data-i18n="saasLanding.cta.title">Start Your Journey</h2>
        <p class="min-cta-subtitle" data-i18n="saasLanding.cta.subtitle">Join 50,000+ teams building with clarity</p>
        <button class="min-cta-btn" data-i18n="saasLanding.cta.startFreeTrial">Start Free Trial</button>
        <p class="min-cta-note" data-i18n="saasLanding.cta.note">No credit card required • 14-day trial</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="min-footer">
    <div class="min-section-container">
      <div class="min-footer-grid">
        <div class="min-footer-brand">
          <div class="min-footer-logo">FOCUS</div>
          <p class="min-footer-tagline" data-i18n="saasLanding.footer.tagline">Less complexity. More focus.</p>
        </div>
        <div class="min-footer-links">
          <div class="min-footer-column">
            <div class="min-footer-heading" data-i18n="saasLanding.footer.product">Product</div>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.features">Features</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.pricing">Pricing</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.roadmap">Roadmap</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.changelog">Changelog</a>
          </div>
          <div class="min-footer-column">
            <div class="min-footer-heading" data-i18n="saasLanding.footer.company">Company</div>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.about">About</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.blog">Blog</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.careers">Careers</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.contact">Contact</a>
          </div>
          <div class="min-footer-column">
            <div class="min-footer-heading" data-i18n="saasLanding.footer.resources">Resources</div>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.documentation">Documentation</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.apiReference">API Reference</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.support">Support</a>
            <a href="javascript:void(0)" data-i18n="saasLanding.footer.community">Community</a>
          </div>
        </div>
      </div>
      <div class="min-footer-bottom">
        <div class="min-footer-copyright" data-i18n="saasLanding.footer.copyright">© 2025 Focus. All rights reserved.</div>
        <div class="min-footer-social">
          <a href="javascript:void(0)" data-i18n="saasLanding.footer.twitter">Twitter</a>
          <a href="javascript:void(0)" data-i18n="saasLanding.footer.linkedin">LinkedIn</a>
          <a href="javascript:void(0)" data-i18n="saasLanding.footer.github">GitHub</a>
        </div>
      </div>
    </div>
  </footer>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色温暖米白 (#FAF9F7)、深色文字 (#1F1F1F)、中性灰色 (#8B8B8B)、浅灰背景 (#F5F5F5)、功能黑色 (#000000)
`;

// ===== 溫暖極简樣式系統 (Warm Minimalism) =====
export const minimalismFullPageStyles = `
  /* ===== 色彩系統 ===== */
  :root {
    --color-bg-primary: #FAF9F6;      /* 米白背景 */
    --color-bg-secondary: #F5F3EE;    /* 次要背景 */
    --color-bg-tertiary: #FFFFFF;     /* 純白背景 */
    --color-text-primary: #2C2C2C;    /* 深灰文字 */
    --color-text-secondary: #6B6B6B;  /* 次要文字 */
    --color-text-tertiary: #A8A29E;   /* 三級文字 */
    --color-accent: #8B7355;          /* 溫暖褐色點綴 */
    --color-border: #E8DFD0;          /* 淺褐边框 */
    --color-border-light: #F0EBE3;    /* 更淺边框 */
  }

  /* ===== 全局樣式 ===== */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ===== Navigation ===== */
  .min-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(250, 249, 246, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    z-index: 1000;
  }
  .min-nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .min-logo {
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: var(--color-text-primary);
  }

  .min-nav-menu {
    display: flex;
    gap: 3rem;
    list-style: none;
  }

  .min-nav-menu a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    transition: color 0.2s ease;
  }

  .min-nav-menu a:hover {
    color: var(--color-text-primary);
  }

  .min-nav-cta {
    padding: 0.625rem 1.5rem;
    border: 1px solid var(--color-accent);
    background: transparent;
    color: var(--color-accent);
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .min-nav-cta:hover {
    background: var(--color-accent);
    color: var(--color-bg-tertiary);
  }

  /* ===== Hero Section ===== */
  .min-hero {
    padding-top: 10rem;
    padding-bottom: 6rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-primary);
  }
  .min-hero-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
  }

  .min-hero-label {
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: var(--color-accent);
    margin-bottom: 2rem;
  }

  .min-hero-title {
    font-size: clamp(3rem, 10vw, 7rem);
    font-weight: 100;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 2rem;
    color: var(--color-text-primary);
  }

  .min-hero-title-line {
    display: block;
  }

  .min-hero-title-bold {
    font-weight: 600;
    margin-top: 0.5rem;
  }

  .min-hero-subtitle {
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.8;
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto 3rem;
  }

  .min-hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 5rem;
  }

  .min-btn-primary {
    padding: 1rem 2.5rem;
    border: 1px solid var(--color-text-primary);
    background: var(--color-text-primary);
    color: var(--color-bg-tertiary);
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .min-btn-primary:hover {
    background: transparent;
    color: var(--color-text-primary);
    transform: translateY(-2px);
  }

  .min-btn-secondary {
    padding: 1rem 2.5rem;
    border: 1px solid var(--color-border);
    background: transparent;
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .min-btn-secondary:hover {
    border-color: var(--color-text-primary);
    color: var(--color-text-primary);
    transform: translateY(-2px);
  }

  .min-hero-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-tertiary);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }

  .min-scroll-line {
    width: 1px;
    height: 3rem;
    background: linear-gradient(to bottom, transparent, var(--color-accent), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  /* ===== Stats Section ===== */
  .min-stats {
    padding: 4rem 0;
    background: var(--color-bg-secondary);
  }

  .min-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .min-stat-card {
    text-align: center;
    padding: 2rem 1rem;
  }

  .min-stat-number {
    font-size: 3rem;
    font-weight: 300;
    color: var(--color-text-primary);
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .min-stat-label {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
  }

  .min-stat-desc {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  /* ===== Section Shared ===== */
  .min-section-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .min-section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .min-section-label {
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: var(--color-accent);
    display: block;
    margin-bottom: 1rem;
  }

  .min-section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 300;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }

  .min-section-desc {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  /* ===== Timeline ===== */
  .min-timeline-section {
    padding: 6rem 0;
    background: var(--color-bg-primary);
  }

  .min-timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  .min-timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--color-border);
  }

  .min-timeline-item {
    position: relative;
    padding-left: 3rem;
    padding-bottom: 3rem;
  }

  .min-timeline-item:last-child {
    padding-bottom: 0;
  }

  .min-timeline-marker {
    position: absolute;
    left: -0.375rem;
    top: 0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: var(--color-accent);
    border: 2px solid var(--color-bg-primary);
  }

  .min-timeline-date {
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: var(--color-accent);
    margin-bottom: 0.5rem;
  }

  .min-timeline-title {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .min-timeline-desc {
    font-size: 1rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
  }

  /* ===== Features ===== */
  .min-features {
    padding: 6rem 0;
    background: var(--color-bg-secondary);
  }

  .min-features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
  }

  .min-feature-card {
    text-align: center;
  }

  .min-feature-icon {
    font-size: 2.5rem;
    color: var(--color-accent);
    margin-bottom: 1.5rem;
    line-height: 1;
  }

  .min-feature-title {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--color-text-primary);
    margin-bottom: 0.75rem;
  }

  .min-feature-desc {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
  }

  /* ===== List View ===== */
  .min-list-section {
    padding: 6rem 0;
    background: var(--color-bg-primary);
  }

  .min-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
  }

  .min-list-heading {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-border);
  }

  .min-list {
    list-style: none;
  }

  .min-list-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    border-bottom: 1px solid var(--color-border-light);
  }

  .min-list-item:last-child {
    border-bottom: none;
  }

  .min-list-check {
    color: var(--color-accent);
    font-weight: 600;
  }

  /* ===== Loading Animations ===== */
  .min-loading-section {
    padding: 6rem 0;
    background: var(--color-bg-secondary);
  }

  .min-loading-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
  }

  .min-loading-demo {
    text-align: center;
    padding: 3rem 2rem;
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
  }

  .min-loading-label {
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
  }

  .min-loading-spinner {
    width: 40px;
    height: 40px;
    border: 2px solid var(--color-border);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    margin: 0 auto;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .min-loading-pulse {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .min-loading-pulse span {
    width: 10px;
    height: 10px;
    background: var(--color-accent);
    border-radius: 50%;
    animation: pulse 1.4s ease-in-out infinite;
  }

  .min-loading-pulse span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .min-loading-pulse span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes pulse {
    0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
    40% { opacity: 1; transform: scale(1); }
  }

  .min-loading-progress {
    width: 100%;
    height: 2px;
    background: var(--color-border);
    overflow: hidden;
  }

  .min-loading-progress-bar {
    height: 100%;
    background: var(--color-accent);
    animation: progress 2s ease-in-out infinite;
  }

  @keyframes progress {
    0% { width: 0%; margin-left: 0%; }
    50% { width: 50%; margin-left: 25%; }
    100% { width: 0%; margin-left: 100%; }
  }

  /* ===== Testimonials ===== */
  .min-testimonials {
    padding: 6rem 0;
    background: var(--color-bg-primary);
  }

  .min-testimonial-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .min-testimonial-item {
    padding: 2rem;
    border: 1px solid var(--color-border);
    background: var(--color-bg-tertiary);
  }

  .min-testimonial-text {
    font-size: 1.125rem;
    font-weight: 300;
    color: var(--color-text-primary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .min-testimonial-name {
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--color-text-primary);
  }

  .min-testimonial-role {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  /* ===== Pricing ===== */
  .min-pricing {
    padding: 6rem 0;
    background: var(--color-bg-secondary);
  }

  .min-pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .min-price-card {
    padding: 3rem 2rem;
    border: 1px solid var(--color-border);
    background: var(--color-bg-tertiary);
    position: relative;
  }

  .min-price-featured {
    border-color: var(--color-accent);
    transform: scale(1.05);
  }

  .min-price-badge {
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.25rem 1rem;
    background: var(--color-accent);
    color: var(--color-bg-tertiary);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }

  .min-price-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-border-light);
  }

  .min-price-name {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }

  .min-price-amount {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.25rem;
  }

  .min-price-currency {
    font-size: 1.5rem;
    color: var(--color-text-secondary);
  }

  .min-price-value {
    font-size: 3.5rem;
    font-weight: 300;
    color: var(--color-text-primary);
    line-height: 1;
  }

  .min-price-period {
    font-size: 1rem;
    color: var(--color-text-secondary);
  }

  .min-price-features {
    list-style: none;
    margin-bottom: 2rem;
  }

  .min-price-features li {
    padding: 0.75rem 0;
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    text-align: center;
    border-bottom: 1px solid var(--color-border-light);
  }

  .min-price-features li:last-child {
    border-bottom: none;
  }

  .min-price-btn {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--color-border);
    background: transparent;
    color: var(--color-text-primary);
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .min-price-btn:hover {
    border-color: var(--color-text-primary);
  }

  .min-price-btn-primary {
    background: var(--color-text-primary);
    color: var(--color-bg-tertiary);
    border-color: var(--color-text-primary);
  }

  .min-price-btn-primary:hover {
    background: transparent;
    color: var(--color-text-primary);
  }

  /* ===== CTA ===== */
  .min-cta {
    padding: 8rem 0;
    background: var(--color-bg-primary);
    text-align: center;
  }

  .min-cta-content {
    max-width: 600px;
    margin: 0 auto;
  }

  .min-cta-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 300;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }

  .min-cta-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
  }

  .min-cta-btn {
    padding: 1.25rem 3rem;
    border: 1px solid var(--color-text-primary);
    background: var(--color-text-primary);
    color: var(--color-bg-tertiary);
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.25s ease;
    margin-bottom: 1rem;
  }

  .min-cta-btn:hover {
    background: transparent;
    color: var(--color-text-primary);
    transform: translateY(-2px);
  }

  .min-cta-note {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
  }

  /* ===== Footer ===== */
  .min-footer {
    padding: 4rem 0 2rem;
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
  }

  .min-footer-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    margin-bottom: 3rem;
  }

  .min-footer-logo {
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .min-footer-tagline {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  .min-footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }

  .min-footer-column {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .min-footer-heading {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
  }

  .min-footer-column a {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .min-footer-column a:hover {
    color: var(--color-text-primary);
  }

  .min-footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid var(--color-border-light);
  }

  .min-footer-copyright {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  .min-footer-social {
    display: flex;
    gap: 2rem;
  }

  .min-footer-social a {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .min-footer-social a:hover {
    color: var(--color-text-primary);
  }

  /* ===== Responsive ===== */
  @media (max-width: 768px) {
    .min-nav-menu {
      display: none;
    }

    .min-hero {
      padding-top: 8rem;
    }

    .min-hero-title {
      font-size: 3rem;
    }

    .min-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .min-footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .min-footer-bottom {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

// ===== 小型 Demo HTML (Hero Section 預覽) =====
export const minimalismDemoHTML = `
  <div class="min-demo-container">
    <!-- 裝飾线條 -->
    <div class="min-demo-line-accent"></div>

    <!-- 主內容区 -->
    <div class="min-demo-content">
      <div class="min-demo-meta">2025</div>
      <h1 class="min-demo-heading">
        <span class="min-demo-heading-light">Simplicity</span>
        <span class="min-demo-heading-bold">Refined</span>
      </h1>
      <p class="min-demo-description">Pure Design · Perfect Experience</p>
    </div>

    <!-- 底部裝飾元素 -->
    <div class="min-demo-footer">
      <div class="min-demo-dot"></div>
      <div class="min-demo-footer-line"></div>
    </div>
  </div>
`;

// ===== 小型 Demo 樣式 =====
export const minimalismDemoStyles = `
  .min-demo-container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 320px;
    background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem;
    overflow: hidden;
  }

  /* 頂部裝飾线 */
  .min-demo-line-accent {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 1px;
    background: #000;
    opacity: 0.2;
  }

  .min-demo-line-accent::before,
  .min-demo-line-accent::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background: #000;
    border-radius: 50%;
    top: -1px;
  }

  .min-demo-line-accent::before {
    left: -8px;
  }

  .min-demo-line-accent::after {
    right: -8px;
  }

  /* 主內容区 */
  .min-demo-content {
    text-align: center;
    z-index: 1;
  }

  .min-demo-meta {
    font-size: 0.625rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: #999;
    margin-bottom: 2rem;
    opacity: 0.6;
  }

  .min-demo-heading {
    font-size: 3rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .min-demo-heading-light {
    font-weight: 200;
    color: #666;
    letter-spacing: 0.05em;
  }

  .min-demo-heading-bold {
    font-weight: 600;
    color: #000;
    letter-spacing: -0.02em;
  }

  .min-demo-description {
    font-size: 0.875rem;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.15em;
    opacity: 0.8;
  }

  /* 底部裝飾元素 */
  .min-demo-footer {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .min-demo-dot {
    width: 4px;
    height: 4px;
    background: #000;
    border-radius: 50%;
    opacity: 0.3;
    animation: pulse 2s ease-in-out infinite;
  }

  .min-demo-footer-line {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.2) 50%,
      rgba(0,0,0,0) 100%
    );
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.2);
    }
  }

  /* 響應式調整 */
  @media (max-width: 640px) {
    .min-demo-heading {
      font-size: 2rem;
    }

    .min-demo-container {
      padding: 2rem 1.5rem;
    }
  }
`;

// ========================================================================================
// 日式極简風格 - 企業官网首页 (Japanese Minimal Style - Corporate Homepage)
// ========================================================================================

export const minimalismJapaneseFullPageHTML = `
  <!-- Fixed Navigation -->
  <nav class="zen-nav">
    <div class="zen-container">
      <div class="zen-nav-content">
        <div class="zen-logo">禪 ZEN</div>
        <ul class="zen-nav-links">
          <li><a href="javascript:void(0)" data-i18n="japaneseZen.nav.about">关於</a></li>
          <li><a href="javascript:void(0)" data-i18n="japaneseZen.nav.services">服务</a></li>
          <li><a href="javascript:void(0)" data-i18n="japaneseZen.nav.team">团隊</a></li>
          <li><a href="javascript:void(0)" data-i18n="japaneseZen.nav.news">動態</a></li>
        </ul>
        <button class="zen-nav-cta" data-i18n="japaneseZen.nav.contact">联絡我們</button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="zen-hero">
    <div class="zen-container">
      <div class="zen-hero-content">
        <div class="zen-hero-label" data-i18n="japaneseZen.hero.label">INTRODUCING</div>
        <h1 class="zen-hero-title">
          <span class="zen-hero-thin" data-i18n="japaneseZen.hero.title1">以简馭繁</span>
          <span class="zen-hero-bold" data-i18n="japaneseZen.hero.title2">返璞歸真</span>
        </h1>
        <p class="zen-hero-subtitle">
          <span data-i18n="japaneseZen.hero.subtitle">在喧囂的世界中尋找寧静，以简約的设計傳遞深遠的意義</span>
        </p>
        <div class="zen-hero-divider"></div>
        <div class="zen-scroll-hint">
          <span class="zen-scroll-line"></span>
          <span class="zen-scroll-text" data-i18n="common.scroll">向下滾動</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Company Introduction -->
  <section class="zen-intro">
    <div class="zen-container">
      <div class="zen-intro-grid">
        <div class="zen-intro-image">
          <div class="zen-placeholder-image">
            <svg class="zen-image-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
        <div class="zen-intro-text">
          <span class="zen-section-label" data-i18n="japaneseZen.about.label">ABOUT US</span>
          <h2 class="zen-section-title" data-i18n="japaneseZen.about.title">关於我們</h2>
          <div class="zen-divider"></div>
          <p class="zen-intro-desc" data-i18n="japaneseZen.about.desc1">
            我們相信，真正的美來自於克制。在紛繁複雜的商業世界中，我們以極简的设計哲學為指引，幫助企業找到本质，傳遞價值。
          </p>
          <p class="zen-intro-desc" data-i18n="japaneseZen.about.desc2">
            自創立以來，我們秉持著「以简馭繁，返璞歸真」的理念，為全球超過 200 家企業提供品牌设計与数位体驗服务。
          </p>
          <a href="javascript:void(0)" class="zen-link" data-i18n="japaneseZen.about.learnMore">了解更多 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Values Grid -->
  <section class="zen-values">
    <div class="zen-container">
      <div class="zen-section-header">
        <span class="zen-section-label" data-i18n="japaneseZen.values.label">CORE VALUES</span>
        <h2 class="zen-section-title" data-i18n="japaneseZen.values.title">核心價值</h2>
        <div class="zen-divider-center"></div>
      </div>
      <div class="zen-values-grid">
        <div class="zen-value-card">
          <div class="zen-value-icon">一</div>
          <h3 class="zen-value-title" data-i18n="japaneseZen.values.principle1.title">简約</h3>
          <p class="zen-value-desc" data-i18n="japaneseZen.values.principle1.desc">去除多餘，保留本质。让设計回歸最純粹的形態。</p>
        </div>
        <div class="zen-value-card">
          <div class="zen-value-icon">二</div>
          <h3 class="zen-value-title" data-i18n="japaneseZen.values.principle2.title">平衡</h3>
          <p class="zen-value-desc" data-i18n="japaneseZen.values.principle2.desc">在留白与內容之間尋找完美的平衡點。</p>
        </div>
        <div class="zen-value-card">
          <div class="zen-value-icon">三</div>
          <h3 class="zen-value-title" data-i18n="japaneseZen.values.principle3.title">禪意</h3>
          <p class="zen-value-desc" data-i18n="japaneseZen.values.principle3.desc">以東方美學為根，創造寧静和諧的視覺体驗。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="zen-services">
    <div class="zen-container">
      <div class="zen-section-header">
        <span class="zen-section-label" data-i18n="japaneseZen.services.label">SERVICES</span>
        <h2 class="zen-section-title" data-i18n="japaneseZen.services.title">服务項目</h2>
        <div class="zen-divider-center"></div>
      </div>
      <div class="zen-services-list">
        <div class="zen-service-item">
          <div class="zen-service-number">01</div>
          <div class="zen-service-content">
            <h3 class="zen-service-title" data-i18n="japaneseZen.services.service1.title">品牌设計</h3>
            <p class="zen-service-desc" data-i18n="japaneseZen.services.service1.desc">从 Logo 到完整視覺識別系統，打造獨特品牌形象。</p>
          </div>
          <div class="zen-service-arrow">→</div>
        </div>
        <div class="zen-service-item">
          <div class="zen-service-number">02</div>
          <div class="zen-service-content">
            <h3 class="zen-service-title" data-i18n="japaneseZen.services.service2.title">网页设計</h3>
            <p class="zen-service-desc" data-i18n="japaneseZen.services.service2.desc">響應式网站设計，提供优雅流暢的使用体驗。</p>
          </div>
          <div class="zen-service-arrow">→</div>
        </div>
        <div class="zen-service-item">
          <div class="zen-service-number">03</div>
          <div class="zen-service-content">
            <h3 class="zen-service-title" data-i18n="japaneseZen.services.service3.title">UI/UX 设計</h3>
            <p class="zen-service-desc" data-i18n="japaneseZen.services.service3.desc">以用戶為中心，創造直覺且美觀的数位产品。</p>
          </div>
          <div class="zen-service-arrow">→</div>
        </div>
        <div class="zen-service-item">
          <div class="zen-service-number">04</div>
          <div class="zen-service-content">
            <h3 class="zen-service-title" data-i18n="japaneseZen.services.service4.title">品牌顧問</h3>
            <p class="zen-service-desc" data-i18n="japaneseZen.services.service4.desc">提供策略規劃与品牌定位，協助企業找到核心價值。</p>
          </div>
          <div class="zen-service-arrow">→</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Counter -->
  <section class="zen-stats">
    <div class="zen-container">
      <div class="zen-stats-grid">
        <div class="zen-stat-item">
          <div class="zen-stat-number">200<span class="zen-stat-plus">+</span></div>
          <div class="zen-stat-label" data-i18n="japaneseZen.stats.clients">合作企業</div>
        </div>
        <div class="zen-stat-divider"></div>
        <div class="zen-stat-item">
          <div class="zen-stat-number">15<span class="zen-stat-plus" data-i18n="japaneseZen.stats.yearsUnit">年</span></div>
          <div class="zen-stat-label" data-i18n="japaneseZen.stats.experience">行業經驗</div>
        </div>
        <div class="zen-stat-divider"></div>
        <div class="zen-stat-item">
          <div class="zen-stat-number">98<span class="zen-stat-plus">%</span></div>
          <div class="zen-stat-label" data-i18n="japaneseZen.stats.satisfaction">客戶滿意度</div>
        </div>
        <div class="zen-stat-divider"></div>
        <div class="zen-stat-item">
          <div class="zen-stat-number">50<span class="zen-stat-plus">+</span></div>
          <div class="zen-stat-label" data-i18n="japaneseZen.stats.awards">獲獎作品</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="zen-team">
    <div class="zen-container">
      <div class="zen-section-header">
        <span class="zen-section-label" data-i18n="japaneseZen.team.label">TEAM</span>
        <h2 class="zen-section-title" data-i18n="japaneseZen.team.title">核心团隊</h2>
        <div class="zen-divider-center"></div>
      </div>
      <div class="zen-team-grid">
        <div class="zen-team-card">
          <div class="zen-team-image">
            <svg class="zen-avatar-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="zen-team-name" data-i18n="japaneseZen.team.member1.name">李明</h3>
          <p class="zen-team-role" data-i18n="japaneseZen.team.member1.role">創意總監</p>
        </div>
        <div class="zen-team-card">
          <div class="zen-team-image">
            <svg class="zen-avatar-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="zen-team-name" data-i18n="japaneseZen.team.member2.name">陳静</h3>
          <p class="zen-team-role" data-i18n="japaneseZen.team.member2.role">设計總監</p>
        </div>
        <div class="zen-team-card">
          <div class="zen-team-image">
            <svg class="zen-avatar-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="zen-team-name" data-i18n="japaneseZen.team.member3.name">王浩</h3>
          <p class="zen-team-role" data-i18n="japaneseZen.team.member3.role">技術總監</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Company Timeline -->
  <section class="zen-timeline">
    <div class="zen-container">
      <div class="zen-section-header">
        <span class="zen-section-label">HISTORY</span>
        <h2 class="zen-section-title">發展歷程</h2>
        <div class="zen-divider-center"></div>
      </div>
      <div class="zen-timeline-list">
        <div class="zen-timeline-item">
          <div class="zen-timeline-year">2010</div>
          <div class="zen-timeline-content">
            <h3 class="zen-timeline-title">公司創立</h3>
            <p class="zen-timeline-desc">在台北成立，专注於極简主義设計。</p>
          </div>
        </div>
        <div class="zen-timeline-item">
          <div class="zen-timeline-year">2015</div>
          <div class="zen-timeline-content">
            <h3 class="zen-timeline-title">國際拓展</h3>
            <p class="zen-timeline-desc">業务拓展至亞洲其他地区，服务超過 100 家企業。</p>
          </div>
        </div>
        <div class="zen-timeline-item">
          <div class="zen-timeline-year">2020</div>
          <div class="zen-timeline-content">
            <h3 class="zen-timeline-title">獲獎認可</h3>
            <p class="zen-timeline-desc">榮獲多項國際设計大獎，確立行業領导地位。</p>
          </div>
        </div>
        <div class="zen-timeline-item">
          <div class="zen-timeline-year">2025</div>
          <div class="zen-timeline-content">
            <h3 class="zen-timeline-title">持續創新</h3>
            <p class="zen-timeline-desc">推出 AI 輔助设計平台，引領设計新趨勢。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Latest News -->
  <section class="zen-news">
    <div class="zen-container">
      <div class="zen-section-header">
        <span class="zen-section-label">NEWS</span>
        <h2 class="zen-section-title">最新動態</h2>
        <div class="zen-divider-center"></div>
      </div>
      <div class="zen-news-grid">
        <article class="zen-news-card">
          <div class="zen-news-image">
            <svg class="zen-news-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
          </div>
          <div class="zen-news-content">
            <time class="zen-news-date">2025.01.15</time>
            <h3 class="zen-news-title">極简主義设計趨勢報告</h3>
            <p class="zen-news-excerpt">探討 2025 年極简主義在品牌设計中的應用与發展。</p>
            <a href="javascript:void(0)" class="zen-news-link">閱讀全文 →</a>
          </div>
        </article>
        <article class="zen-news-card">
          <div class="zen-news-image">
            <svg class="zen-news-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div class="zen-news-content">
            <time class="zen-news-date">2025.01.10</time>
            <h3 class="zen-news-title">獲得 Red Dot 设計獎</h3>
            <p class="zen-news-excerpt">我們的品牌重塑項目榮獲國際设計大獎肯定。</p>
            <a href="javascript:void(0)" class="zen-news-link">閱讀全文 →</a>
          </div>
        </article>
        <article class="zen-news-card">
          <div class="zen-news-image">
            <svg class="zen-news-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div class="zen-news-content">
            <time class="zen-news-date">2025.01.05</time>
            <h3 class="zen-news-title">日式美學设計工作坊</h3>
            <p class="zen-news-excerpt">開放報名！深入探索日本傳統美學与現代设計的融合。</p>
            <a href="javascript:void(0)" class="zen-news-link">閱讀全文 →</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section class="zen-newsletter">
    <div class="zen-container">
      <div class="zen-newsletter-content">
        <span class="zen-section-label">NEWSLETTER</span>
        <h2 class="zen-section-title">訂閱電子報</h2>
        <p class="zen-newsletter-desc">定期接收设計靈感与行業洞察</p>
        <form class="zen-newsletter-form" onsubmit="return false;">
          <input
            type="email"
            class="zen-newsletter-input"
            placeholder="your@email.com"
            required
          />
          <button type="submit" class="zen-newsletter-btn">訂閱</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="zen-footer">
    <div class="zen-container">
      <div class="zen-footer-grid">
        <div class="zen-footer-col">
          <div class="zen-footer-logo">禪 ZEN</div>
          <p class="zen-footer-tagline">以简馭繁，返璞歸真</p>
        </div>
        <div class="zen-footer-col">
          <h4 class="zen-footer-title">公司</h4>
          <ul class="zen-footer-links">
            <li><a href="javascript:void(0)">关於我們</a></li>
            <li><a href="javascript:void(0)">服务項目</a></li>
            <li><a href="javascript:void(0)">作品集</a></li>
            <li><a href="javascript:void(0)">联絡我們</a></li>
          </ul>
        </div>
        <div class="zen-footer-col">
          <h4 class="zen-footer-title">資源</h4>
          <ul class="zen-footer-links">
            <li><a href="javascript:void(0)">部落格</a></li>
            <li><a href="javascript:void(0)">设計指南</a></li>
            <li><a href="javascript:void(0)">案例研究</a></li>
            <li><a href="javascript:void(0)">職涯機會</a></li>
          </ul>
        </div>
        <div class="zen-footer-col">
          <h4 class="zen-footer-title">联絡</h4>
          <ul class="zen-footer-links">
            <li>taipei@zen.design</li>
            <li>+886 2 1234 5678</li>
            <li>台北市信義区</li>
          </ul>
        </div>
      </div>
      <div class="zen-footer-bottom">
        <p class="zen-footer-copy">© 2025 ZEN Design. All rights reserved.</p>
        <div class="zen-footer-legal">
          <a href="javascript:void(0)">隱私政策</a>
          <span class="zen-footer-sep">·</span>
          <a href="javascript:void(0)">使用條款</a>
        </div>
      </div>
    </div>
  </footer>
`;

export const minimalismJapaneseFullPageStyles = `
  /* ===== 日式極简色彩系統 ===== */
  :root {
    --zen-bg-primary: #FAFAF9;        /* 米白主背景 */
    --zen-bg-secondary: #F5F5F4;      /* 溫暖灰次要背景 */
    --zen-bg-tertiary: #FFFFFF;       /* 純白背景 */
    --zen-text-primary: #1C1917;      /* 深炭灰主文字 */
    --zen-text-secondary: #78716C;    /* 柔和灰次要文字 */
    --zen-text-tertiary: #A8A29E;     /* 石灰色三級文字 */
    --zen-accent: #A8A29E;            /* 石灰色強調 */
    --zen-border: #E7E5E4;            /* 細膩边框 */
  }

  /* ===== 全局樣式 ===== */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--zen-bg-primary);
    color: var(--zen-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 1.75;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ===== Fixed Navigation ===== */
  .zen-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(250, 250, 249, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--zen-border);
    z-index: 1000;
  }

  .zen-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .zen-nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }

  .zen-logo {
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: var(--zen-text-primary);
  }

  .zen-nav-links {
    display: flex;
    gap: 3rem;
    list-style: none;
  }

  .zen-nav-links a {
    color: var(--zen-text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }

  .zen-nav-links a:hover {
    color: var(--zen-text-primary);
  }

  .zen-nav-cta {
    padding: 0.5rem 1.5rem;
    border: 1px solid var(--zen-border);
    background: transparent;
    color: var(--zen-text-primary);
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .zen-nav-cta:hover {
    background: var(--zen-text-primary);
    color: var(--zen-bg-tertiary);
    border-color: var(--zen-text-primary);
  }

  /* ===== Hero Section ===== */
  .zen-hero {
    padding-top: 12rem;
    padding-bottom: 8rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zen-hero-content {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }

  .zen-hero-label {
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: var(--zen-accent);
    margin-bottom: 3rem;
  }

  .zen-hero-title {
    font-size: clamp(2.5rem, 8vw, 5.5rem);
    font-weight: 100;
    letter-spacing: 0.02em;
    line-height: 1.2;
    margin-bottom: 3rem;
  }

  .zen-hero-thin {
    display: block;
    font-weight: 100;
    color: var(--zen-text-secondary);
  }

  .zen-hero-bold {
    display: block;
    font-weight: 300;
    color: var(--zen-text-primary);
    margin-top: 0.5rem;
  }

  .zen-hero-subtitle {
    font-size: 1rem;
    font-weight: 300;
    line-height: 2;
    color: var(--zen-text-secondary);
    margin-bottom: 4rem;
  }

  .zen-hero-divider {
    width: 1px;
    height: 4rem;
    background: linear-gradient(to bottom, transparent, var(--zen-border), transparent);
    margin: 0 auto 4rem;
  }

  .zen-scroll-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .zen-scroll-line {
    width: 1px;
    height: 3rem;
    background: linear-gradient(to bottom, var(--zen-border), transparent);
    animation: zenScrollPulse 3s ease-in-out infinite;
  }

  @keyframes zenScrollPulse {
    0%, 100% { opacity: 0.2; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(8px); }
  }

  .zen-scroll-text {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--zen-text-tertiary);
  }

  /* ===== Company Introduction ===== */
  .zen-intro {
    padding: 8rem 0;
    background: var(--zen-bg-secondary);
  }

  .zen-intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .zen-placeholder-image {
    aspect-ratio: 4 / 3;
    background: var(--zen-bg-primary);
    border: 1px solid var(--zen-border);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zen-image-icon {
    width: 4rem;
    height: 4rem;
    color: var(--zen-text-tertiary);
    opacity: 0.3;
  }

  .zen-section-label {
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: var(--zen-accent);
    display: block;
    margin-bottom: 1.5rem;
  }

  .zen-section-title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 300;
    color: var(--zen-text-primary);
    margin-bottom: 1.5rem;
  }

  .zen-divider {
    width: 3rem;
    height: 1px;
    background: var(--zen-border);
    margin-bottom: 2rem;
  }

  .zen-intro-desc {
    font-size: 1rem;
    font-weight: 300;
    line-height: 2;
    color: var(--zen-text-secondary);
    margin-bottom: 1.5rem;
  }

  .zen-link {
    display: inline-block;
    margin-top: 1rem;
    color: var(--zen-text-primary);
    text-decoration: none;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    transition: opacity 0.3s ease;
  }

  .zen-link:hover {
    opacity: 0.6;
  }

  /* ===== Core Values ===== */
  .zen-values {
    padding: 8rem 0;
    background: var(--zen-bg-primary);
  }

  .zen-section-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .zen-divider-center {
    width: 3rem;
    height: 1px;
    background: var(--zen-border);
    margin: 2rem auto 0;
  }

  .zen-values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 4rem;
  }

  .zen-value-card {
    text-align: center;
  }

  .zen-value-icon {
    font-size: 2rem;
    font-weight: 300;
    color: var(--zen-accent);
    margin-bottom: 2rem;
    line-height: 1;
  }

  .zen-value-title {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--zen-text-primary);
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }

  .zen-value-desc {
    font-size: 0.9375rem;
    font-weight: 300;
    line-height: 1.8;
    color: var(--zen-text-secondary);
  }

  /* ===== Services ===== */
  .zen-services {
    padding: 8rem 0;
    background: var(--zen-bg-secondary);
  }

  .zen-services-list {
    max-width: 900px;
    margin: 0 auto;
  }

  .zen-service-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2rem;
    align-items: center;
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--zen-border);
    transition: all 0.3s ease;
  }

  .zen-service-item:hover {
    padding-left: 1rem;
  }

  .zen-service-number {
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--zen-text-tertiary);
    letter-spacing: 0.1em;
  }

  .zen-service-title {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--zen-text-primary);
    margin-bottom: 0.5rem;
    letter-spacing: 0.02em;
  }

  .zen-service-desc {
    font-size: 0.9375rem;
    font-weight: 300;
    color: var(--zen-text-secondary);
    line-height: 1.7;
  }

  .zen-service-arrow {
    font-size: 1.25rem;
    color: var(--zen-text-tertiary);
    transition: transform 0.3s ease;
  }

  .zen-service-item:hover .zen-service-arrow {
    transform: translateX(0.5rem);
  }

  /* ===== Stats Counter ===== */
  .zen-stats {
    padding: 6rem 0;
    background: var(--zen-bg-primary);
  }

  .zen-stats-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    text-align: center;
  }

  .zen-stat-item {
    grid-column: span 2;
  }

  .zen-stat-divider {
    width: 1px;
    height: 4rem;
    background: var(--zen-border);
    margin: 0 auto;
  }

  .zen-stat-number {
    font-size: 2.5rem;
    font-weight: 200;
    color: var(--zen-text-primary);
    line-height: 1;
    margin-bottom: 0.75rem;
  }

  .zen-stat-plus {
    font-size: 1.5rem;
    font-weight: 300;
  }

  .zen-stat-label {
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--zen-text-secondary);
    letter-spacing: 0.05em;
  }

  /* ===== Team ===== */
  .zen-team {
    padding: 8rem 0;
    background: var(--zen-bg-secondary);
  }

  .zen-team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
  }

  .zen-team-card {
    text-align: center;
  }

  .zen-team-image {
    width: 8rem;
    height: 8rem;
    margin: 0 auto 1.5rem;
    border: 1px solid var(--zen-border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--zen-bg-primary);
  }

  .zen-avatar-icon {
    width: 3rem;
    height: 3rem;
    color: var(--zen-text-tertiary);
    opacity: 0.5;
  }

  .zen-team-name {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--zen-text-primary);
    margin-bottom: 0.5rem;
  }

  .zen-team-role {
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--zen-text-secondary);
  }

  /* ===== Timeline ===== */
  .zen-timeline {
    padding: 8rem 0;
    background: var(--zen-bg-primary);
  }

  .zen-timeline-list {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  .zen-timeline-list::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--zen-border);
  }

  .zen-timeline-item {
    position: relative;
    padding-left: 3rem;
    margin-bottom: 4rem;
  }

  .zen-timeline-item:last-child {
    margin-bottom: 0;
  }

  .zen-timeline-year {
    position: absolute;
    left: -4rem;
    top: 0;
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: var(--zen-accent);
  }

  .zen-timeline-year::after {
    content: '';
    position: absolute;
    right: -3.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: var(--zen-accent);
    border: 2px solid var(--zen-bg-primary);
  }

  .zen-timeline-title {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--zen-text-primary);
    margin-bottom: 0.75rem;
  }

  .zen-timeline-desc {
    font-size: 0.9375rem;
    font-weight: 300;
    line-height: 1.8;
    color: var(--zen-text-secondary);
  }

  /* ===== Latest News ===== */
  .zen-news {
    padding: 8rem 0;
    background: var(--zen-bg-secondary);
  }

  .zen-news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
  }

  .zen-news-card {
    background: var(--zen-bg-tertiary);
    border: 1px solid var(--zen-border);
    transition: transform 0.3s ease;
  }

  .zen-news-card:hover {
    transform: translateY(-4px);
  }

  .zen-news-image {
    aspect-ratio: 16 / 9;
    background: var(--zen-bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--zen-border);
  }

  .zen-news-icon {
    width: 3rem;
    height: 3rem;
    color: var(--zen-text-tertiary);
    opacity: 0.3;
  }

  .zen-news-content {
    padding: 2rem;
  }

  .zen-news-date {
    display: block;
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: var(--zen-accent);
    margin-bottom: 1rem;
  }

  .zen-news-title {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--zen-text-primary);
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }

  .zen-news-excerpt {
    font-size: 0.9375rem;
    font-weight: 300;
    line-height: 1.7;
    color: var(--zen-text-secondary);
    margin-bottom: 1rem;
  }

  .zen-news-link {
    display: inline-block;
    color: var(--zen-text-primary);
    text-decoration: none;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    transition: opacity 0.3s ease;
  }

  .zen-news-link:hover {
    opacity: 0.6;
  }

  /* ===== Newsletter ===== */
  .zen-newsletter {
    padding: 8rem 0;
    background: var(--zen-bg-primary);
  }

  .zen-newsletter-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .zen-newsletter-desc {
    font-size: 1rem;
    font-weight: 300;
    color: var(--zen-text-secondary);
    margin-bottom: 2.5rem;
  }

  .zen-newsletter-form {
    display: flex;
    gap: 0;
    max-width: 500px;
    margin: 0 auto;
  }

  .zen-newsletter-input {
    flex: 1;
    padding: 0.875rem 1.25rem;
    border: 1px solid var(--zen-border);
    border-right: none;
    background: var(--zen-bg-tertiary);
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--zen-text-primary);
    outline: none;
    transition: border-color 0.3s ease;
  }

  .zen-newsletter-input:focus {
    border-color: var(--zen-accent);
  }

  .zen-newsletter-input::placeholder {
    color: var(--zen-text-tertiary);
  }

  .zen-newsletter-btn {
    padding: 0.875rem 2rem;
    border: 1px solid var(--zen-border);
    background: var(--zen-text-primary);
    color: var(--zen-bg-tertiary);
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .zen-newsletter-btn:hover {
    background: transparent;
    color: var(--zen-text-primary);
  }

  /* ===== Footer ===== */
  .zen-footer {
    padding: 5rem 0 3rem;
    background: var(--zen-bg-secondary);
    border-top: 1px solid var(--zen-border);
  }

  .zen-footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .zen-footer-logo {
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: var(--zen-text-primary);
    margin-bottom: 0.75rem;
  }

  .zen-footer-tagline {
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--zen-text-secondary);
  }

  .zen-footer-title {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--zen-text-primary);
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }

  .zen-footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .zen-footer-links a,
  .zen-footer-links li {
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--zen-text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .zen-footer-links a:hover {
    color: var(--zen-text-primary);
  }

  .zen-footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid var(--zen-border);
  }

  .zen-footer-copy {
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--zen-text-secondary);
  }

  .zen-footer-legal {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .zen-footer-legal a {
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--zen-text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .zen-footer-legal a:hover {
    color: var(--zen-text-primary);
  }

  .zen-footer-sep {
    color: var(--zen-text-tertiary);
  }

  /* ===== Responsive ===== */
  @media (max-width: 768px) {
    .zen-nav-links {
      display: none;
    }

    .zen-intro-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .zen-values-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .zen-stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .zen-stat-divider {
      display: none;
    }

    .zen-stat-item {
      grid-column: span 1;
    }

    .zen-team-grid {
      grid-template-columns: 1fr;
    }

    .zen-timeline-year {
      position: static;
      margin-bottom: 1rem;
    }

    .zen-timeline-year::after {
      display: none;
    }

    .zen-news-grid {
      grid-template-columns: 1fr;
    }

    .zen-footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .zen-footer-bottom {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
