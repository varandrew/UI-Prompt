// BusinessDemo.js - 商業网站模板
// Outline Style 的专業商業場景實現

export const fullPageHTML = `
  <!-- Navigation -->
  <nav class="outline-nav">
    <div class="outline-container">
      <div class="outline-nav-content">
        <!-- Logo -->
        <div class="outline-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" class="outline-logo-svg">
            <rect x="5" y="5" width="30" height="30" fill="none" stroke="#000" stroke-width="2"/>
            <circle cx="20" cy="20" r="8" fill="none" stroke="#000" stroke-width="2"/>
          </svg>
          <span class="outline-logo-text">OUTLINE</span>
        </div>

        <!-- Nav Links -->
        <div class="outline-nav-links">
          <a href="javascript:void(0)" class="outline-nav-link">Home</a>
          <a href="javascript:void(0)" class="outline-nav-link">Services</a>
          <a href="javascript:void(0)" class="outline-nav-link">About</a>
          <a href="javascript:void(0)" class="outline-nav-link">Contact</a>
        </div>

        <!-- CTA Button -->
        <button class="outline-btn outline-btn-primary">Get Started</button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="outline-hero">
    <div class="outline-container">
      <div class="outline-hero-grid">
        <!-- Left Content -->
        <div class="outline-hero-left">
          <div class="outline-hero-badge">Professional Business Solutions</div>
          <h1 class="outline-hero-title">
            Pure Lines,
            <span class="outline-hero-title-decorated">Clear Vision</span>
          </h1>
          <p class="outline-hero-subtitle">
            Experience the elegance of minimalist design with our outline-first approach.
            Clean, professional, and timeless.
          </p>
          <div class="outline-hero-buttons">
            <button class="outline-btn outline-btn-primary outline-btn-large">Start Project</button>
            <button class="outline-btn outline-btn-secondary outline-btn-large">Learn More</button>
          </div>
        </div>

        <!-- Right Illustration -->
        <div class="outline-hero-right">
          <svg class="outline-hero-svg" viewBox="0 0 400 400">
            <!-- Geometric Abstract Illustration -->
            <circle cx="200" cy="200" r="150" fill="none" stroke="#000" stroke-width="2" class="outline-anim-1"/>
            <rect x="100" y="100" width="200" height="200" fill="none" stroke="#000" stroke-width="2" class="outline-anim-2"/>
            <polygon points="200,50 350,200 200,350 50,200" fill="none" stroke="#000" stroke-width="2" class="outline-anim-3"/>
            <circle cx="200" cy="200" r="80" fill="none" stroke="#000" stroke-width="2" class="outline-anim-4"/>
            <line x1="50" y1="200" x2="350" y2="200" stroke="#000" stroke-width="1" class="outline-anim-5"/>
            <line x1="200" y1="50" x2="200" y2="350" stroke="#000" stroke-width="1" class="outline-anim-5"/>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="outline-section">
    <div class="outline-container">
      <div class="outline-section-header">
        <h2 class="outline-section-title">Our Services</h2>
        <p class="outline-section-subtitle">Comprehensive solutions for modern businesses</p>
      </div>

      <div class="outline-services-grid">
        <!-- Service Card 1 -->
        <div class="outline-service-card">
          <div class="outline-service-icon">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect x="10" y="10" width="40" height="40" fill="none" stroke="#000" stroke-width="2" rx="4"/>
              <path d="M 20 30 L 28 38 L 40 22" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="outline-service-title">Strategy</h3>
          <p class="outline-service-desc">
            Comprehensive business strategy consulting to align your vision with market opportunities.
          </p>
          <a href="javascript:void(0)" class="outline-service-link">Learn More →</a>
        </div>

        <!-- Service Card 2 -->
        <div class="outline-service-card">
          <div class="outline-service-icon">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="20" fill="none" stroke="#000" stroke-width="2"/>
              <path d="M 30 10 L 30 30 L 45 30" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="outline-service-title">Development</h3>
          <p class="outline-service-desc">
            Custom software development with modern technologies and best practices for optimal results.
          </p>
          <a href="javascript:void(0)" class="outline-service-link">Learn More →</a>
        </div>

        <!-- Service Card 3 -->
        <div class="outline-service-card">
          <div class="outline-service-icon">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect x="15" y="20" width="30" height="25" fill="none" stroke="#000" stroke-width="2" rx="2"/>
              <polyline points="20,30 30,37 40,30" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="25" y1="15" x2="25" y2="20" stroke="#000" stroke-width="2" stroke-linecap="round"/>
              <line x1="35" y1="15" x2="35" y2="20" stroke="#000" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="outline-service-title">Support</h3>
          <p class="outline-service-desc">
            24/7 dedicated support and maintenance to ensure your business operations run smoothly.
          </p>
          <a href="javascript:void(0)" class="outline-service-link">Learn More →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="outline-section outline-section-alt">
    <div class="outline-container">
      <div class="outline-section-header">
        <h2 class="outline-section-title">Why Choose Us</h2>
        <p class="outline-section-subtitle">Key features that set us apart</p>
      </div>

      <div class="outline-features-grid">
        <div class="outline-feature">
          <div class="outline-feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <polygon points="20,5 35,35 5,35" fill="none" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          <h4 class="outline-feature-title">Quality First</h4>
          <p class="outline-feature-text">Premium standards in every project</p>
        </div>

        <div class="outline-feature">
          <div class="outline-feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#000" stroke-width="2"/>
              <path d="M 14 20 L 18 24 L 26 16" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h4 class="outline-feature-title">Proven Results</h4>
          <p class="outline-feature-text">Track record of successful deliveries</p>
        </div>

        <div class="outline-feature">
          <div class="outline-feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <rect x="10" y="10" width="20" height="20" fill="none" stroke="#000" stroke-width="2" rx="2"/>
              <circle cx="20" cy="20" r="5" fill="none" stroke="#000" stroke-width="2"/>
            </svg>
          </div>
          <h4 class="outline-feature-title">Innovation</h4>
          <p class="outline-feature-text">Cutting-edge solutions and technologies</p>
        </div>

        <div class="outline-feature">
          <div class="outline-feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M 10 30 L 10 15 L 20 10 L 30 15 L 30 30" fill="none" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
              <rect x="16" y="22" width="8" height="8" fill="none" stroke="#000" stroke-width="2"/>
            </svg>
          </div>
          <h4 class="outline-feature-title">Reliability</h4>
          <p class="outline-feature-text">Dependable service you can trust</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="outline-section">
    <div class="outline-container outline-container-narrow">
      <div class="outline-section-header">
        <h2 class="outline-section-title">Get In Touch</h2>
        <p class="outline-section-subtitle">Start your project with us today</p>
      </div>

      <form class="outline-form">
        <div class="outline-form-group">
          <label class="outline-form-label">Name</label>
          <input type="text" class="outline-form-input" placeholder="Your name" />
        </div>

        <div class="outline-form-group">
          <label class="outline-form-label">Email</label>
          <input type="email" class="outline-form-input" placeholder="your@email.com" />
        </div>

        <div class="outline-form-group">
          <label class="outline-form-label">Message</label>
          <textarea class="outline-form-textarea" rows="5" placeholder="Tell us about your project..."></textarea>
        </div>

        <button type="submit" class="outline-btn outline-btn-primary outline-btn-large outline-btn-full">
          Send Message
        </button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="outline-footer">
    <div class="outline-container">
      <div class="outline-footer-content">
        <!-- Social Icons -->
        <div class="outline-social">
          <a href="javascript:void(0)" class="outline-social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="javascript:void(0)" class="outline-social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="javascript:void(0)" class="outline-social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>

        <!-- Quick Links -->
        <div class="outline-footer-links">
          <a href="javascript:void(0)" class="outline-footer-link">Privacy</a>
          <a href="javascript:void(0)" class="outline-footer-link">Terms</a>
          <a href="javascript:void(0)" class="outline-footer-link">Contact</a>
        </div>

        <!-- Copyright -->
        <div class="outline-footer-copy">
          © 2025 Outline. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
`;

export const fullPageStyles = `
  /* Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
    background: #ffffff;
    color: #000000;
    line-height: 1.6;
  }

  /* Container */
  .outline-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .outline-container-narrow {
    max-width: 800px;
  }

  /* Navigation */
  .outline-nav {
    position: sticky;
    top: 0;
    background: #ffffff;
    border-bottom: 2px solid #000000;
    z-index: 100;
    padding: 1.5rem 0;
  }

  .outline-nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .outline-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }

  .outline-logo-svg {
    animation: outlineLogoRotate 8s linear infinite;
  }

  @keyframes outlineLogoRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .outline-logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .outline-nav-links {
    display: flex;
    gap: 2.5rem;
  }

  .outline-nav-link {
    position: relative;
    color: #000000;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }

  .outline-nav-link::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 0;
    height: 2px;
    background: #000000;
    transition: width 0.3s ease;
  }

  .outline-nav-link:hover::after {
    width: 100%;
  }

  /* Buttons */
  .outline-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid #000000;
    background: transparent;
    color: #000000;
    font-weight: 600;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .outline-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #000000;
    transition: left 0.3s ease;
    z-index: -1;
  }

  .outline-btn:hover::before {
    left: 0;
  }

  .outline-btn:hover {
    color: #ffffff;
  }

  .outline-btn-primary {
    background: #000000;
    color: #ffffff;
  }

  .outline-btn-primary::before {
    background: #ffffff;
  }

  .outline-btn-primary:hover {
    color: #000000;
  }

  .outline-btn-secondary {
    background: transparent;
    color: #000000;
  }

  .outline-btn-large {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .outline-btn-full {
    width: 100%;
  }

  /* Hero Section */
  .outline-hero {
    padding: 6rem 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .outline-hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .outline-hero-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid #000000;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-bottom: 2rem;
  }

  .outline-hero-title {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .outline-hero-title-decorated {
    position: relative;
    display: inline-block;
  }

  .outline-hero-title-decorated::after {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    width: 100%;
    height: 3px;
    background: #000000;
    animation: outlineLineGrow 1.5s ease-out;
  }

  @keyframes outlineLineGrow {
    from { width: 0; }
    to { width: 100%; }
  }

  .outline-hero-subtitle {
    font-size: 1.25rem;
    color: #555555;
    margin-bottom: 2.5rem;
    line-height: 1.8;
  }

  .outline-hero-buttons {
    display: flex;
    gap: 1rem;
  }

  .outline-hero-svg {
    width: 100%;
    height: auto;
  }

  .outline-anim-1 {
    animation: outlinePulse 4s ease-in-out infinite;
  }

  .outline-anim-2 {
    animation: outlinePulse 4s ease-in-out 0.5s infinite;
  }

  .outline-anim-3 {
    animation: outlinePulse 4s ease-in-out 1s infinite;
  }

  .outline-anim-4 {
    animation: outlinePulse 4s ease-in-out 1.5s infinite;
  }

  .outline-anim-5 {
    animation: outlineFade 4s ease-in-out 2s infinite;
  }

  @keyframes outlinePulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  @keyframes outlineFade {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }

  /* Section */
  .outline-section {
    padding: 5rem 0;
  }

  .outline-section-alt {
    background: #fafafa;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }

  .outline-section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .outline-section-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
  }

  .outline-section-title::before {
    content: '';
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 3rem;
    height: 2px;
    background: #000000;
  }

  .outline-section-subtitle {
    font-size: 1.25rem;
    color: #666666;
  }

  /* Services Grid */
  .outline-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .outline-service-card {
    padding: 2.5rem;
    border: 2px solid #000000;
    background: #ffffff;
    transition: all 0.3s ease;
    position: relative;
  }

  .outline-service-card::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid #000000;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .outline-service-card:hover::after {
    opacity: 1;
    inset: -6px;
  }

  .outline-service-icon {
    margin-bottom: 1.5rem;
  }

  .outline-service-icon svg {
    transition: transform 0.3s ease;
  }

  .outline-service-card:hover .outline-service-icon svg {
    transform: scale(1.1);
  }

  .outline-service-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .outline-service-desc {
    color: #666666;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }

  .outline-service-link {
    color: #000000;
    text-decoration: none;
    font-weight: 600;
    position: relative;
    display: inline-block;
  }

  .outline-service-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #000000;
  }

  /* Features Grid */
  .outline-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }

  .outline-feature {
    padding: 3rem;
    border: 1px solid #e5e5e5;
    text-align: center;
    transition: all 0.3s ease;
  }

  .outline-feature:hover {
    background: #ffffff;
    border-color: #000000;
    transform: scale(1.05);
    z-index: 10;
  }

  .outline-feature-icon {
    margin-bottom: 1.5rem;
  }

  .outline-feature-icon svg {
    transition: transform 0.3s ease;
  }

  .outline-feature:hover .outline-feature-icon svg {
    transform: rotate(360deg);
  }

  .outline-feature-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .outline-feature-text {
    color: #666666;
  }

  /* Form */
  .outline-form {
    border: 2px solid #000000;
    padding: 3rem;
    background: #ffffff;
  }

  .outline-form-group {
    margin-bottom: 2rem;
  }

  .outline-form-label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
  }

  .outline-form-input,
  .outline-form-textarea {
    width: 100%;
    padding: 1rem;
    border: none;
    border-bottom: 2px solid #e5e5e5;
    background: transparent;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    outline: none;
  }

  .outline-form-input:focus,
  .outline-form-textarea:focus {
    border-bottom-color: #000000;
  }

  .outline-form-textarea {
    resize: vertical;
    border: 2px solid #e5e5e5;
    padding: 1rem;
  }

  .outline-form-textarea:focus {
    border-color: #000000;
  }

  /* Footer */
  .outline-footer {
    padding: 3rem 0;
    border-top: 2px solid #000000;
    background: #fafafa;
  }

  .outline-footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .outline-social {
    display: flex;
    gap: 1.5rem;
  }

  .outline-social-link {
    width: 48px;
    height: 48px;
    border: 2px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    transition: all 0.3s ease;
  }

  .outline-social-link:hover {
    background: #000000;
    color: #ffffff;
    transform: rotate(360deg);
  }

  .outline-footer-links {
    display: flex;
    gap: 2rem;
  }

  .outline-footer-link {
    color: #000000;
    text-decoration: none;
    font-weight: 500;
    position: relative;
  }

  .outline-footer-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: #000000;
    transition: width 0.3s ease;
  }

  .outline-footer-link:hover::after {
    width: 100%;
  }

  .outline-footer-copy {
    color: #666666;
    font-size: 0.875rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .outline-hero-grid,
    .outline-services-grid,
    .outline-features-grid {
      grid-template-columns: 1fr;
    }

    .outline-hero-title {
      font-size: 2.5rem;
    }

    .outline-section-title {
      font-size: 2rem;
    }

    .outline-nav-links {
      display: none;
    }

    .outline-hero-buttons {
      flex-direction: column;
    }
  }
`;

// 标準模板對象
export const businessDemo = {
  id: 'visual-outlineStyle-business',
  title: 'styles.outlineStyle.businessDemo.title',
  description: 'styles.outlineStyle.businessDemo.description',

  // Demo 預覽 (在 StyleCard 中显示，使用 Demo.js 的內容)
  demoHTML: `<!-- 使用 Demo.js 提供的預覽 -->`,
  customStyles: `/* 使用 Demo.js 提供的樣式 */`,

  // 完整页面預覽
  fullPageHTML,
  fullPageStyles,

  // 配色方案
  colorScheme: {
    'zh-CN': '主色黑色线條 (#000000)、白色背景 (#ffffff)、次色淺灰 (#f5f5f5)、边框黑 (#000000 / stroke-width: 1-2px)、文本深灰 (#333333)',
    'en-US': 'Primary black outlines (#000000), white background (#ffffff), secondary light gray (#f5f5f5), border black (#000000 / stroke-width: 1-2px), text dark gray (#333333)'
  }
};

export default businessDemo;
