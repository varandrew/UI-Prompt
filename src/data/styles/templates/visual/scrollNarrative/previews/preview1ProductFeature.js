export const previewConfig = {
  id: 'product-feature-showcase',
  name: {
    'zh-CN': 'SaaS 产品功能展示',
    'en-US': 'Product Feature Showcase'
  },
  type: 'full',
  description: {
    'zh-CN': 'SaaS 产品功能介绍页，随滚动逐一展示核心功能，包含设备模型、统计数据、客户评价和定价方案',
    'en-US': 'SaaS product feature introduction page with scroll-triggered reveals, device mockups, statistics, testimonials, and pricing plans'
  },
  features: [
    'Scroll-triggered Section Animations',
    'Device Mockups (MacBook & iPhone)',
    'Animated Statistics Counter',
    'Customer Testimonial Cards',
    'Pricing Comparison Table',
    'Smooth Parallax Scrolling'
  ],
  colorScheme: {
    'zh-CN': '主色靛藍 (#4f46e5)、輔色紫粉漸变 (#7c3aed → #ec4899)、背景淺灰白 (#f9fafb → #ffffff)、文字深灰 (#111827, #6b7280)',
    'en-US': 'Primary indigo (#4f46e5), secondary purple-pink gradient (#7c3aed → #ec4899), background light gray-white (#f9fafb → #ffffff), text dark gray (#111827, #6b7280)'
  }
};

export const previewHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Feature Showcase</title>
</head>
<body class="scroll-product-body">
  <!-- Scroll Progress Indicator -->
  <div class="scroll-progress-bar">
    <div class="scroll-progress-fill" id="scrollProgress"></div>
  </div>

  <!-- Hero Section -->
  <section class="scroll-hero">
    <div class="scroll-container">
      <div class="scroll-hero-badge">✨ New Features Available</div>
      <h1 class="scroll-hero-title">Transform Your Workflow</h1>
      <p class="scroll-hero-subtitle">The all-in-one platform that helps teams collaborate, create, and ship faster than ever before.</p>
      <div class="scroll-hero-buttons">
        <button class="scroll-btn-primary">Start Free Trial</button>
        <button class="scroll-btn-ghost">Watch Demo →</button>
      </div>
      <div class="scroll-down-hint">
        <span>Scroll to explore</span>
        <svg class="scroll-down-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </section>

  <!-- Feature 1: Smart Collaboration -->
  <section class="scroll-feature scroll-feature-left">
    <div class="scroll-container">
      <div class="scroll-feature-content">
        <div class="scroll-feature-text">
          <span class="scroll-feature-label">Feature 01</span>
          <h2 class="scroll-feature-title">Smart Collaboration</h2>
          <p class="scroll-feature-desc">Work together seamlessly with real-time editing, comments, and task assignments. Your team stays in sync, no matter where they are.</p>
          <ul class="scroll-feature-list">
            <li>✓ Real-time co-editing</li>
            <li>✓ Inline comments & mentions</li>
            <li>✓ Version history & rollback</li>
            <li>✓ Smart notifications</li>
          </ul>
        </div>
        <div class="scroll-feature-visual">
          <div class="scroll-device scroll-device-macbook">
            <div class="scroll-device-screen">
              <div class="scroll-demo-content">
                <div class="scroll-demo-header">
                  <div class="scroll-demo-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="scroll-demo-title">Team Project</div>
                </div>
                <div class="scroll-demo-body">
                  <div class="scroll-demo-doc">
                    <div class="scroll-demo-line"></div>
                    <div class="scroll-demo-line scroll-demo-line-short"></div>
                    <div class="scroll-demo-line"></div>
                    <div class="scroll-demo-cursor"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature 2: Powerful Analytics -->
  <section class="scroll-feature scroll-feature-right">
    <div class="scroll-container">
      <div class="scroll-feature-content">
        <div class="scroll-feature-visual">
          <div class="scroll-device scroll-device-iphone">
            <div class="scroll-device-screen-mobile">
              <div class="scroll-demo-mobile">
                <div class="scroll-demo-chart">
                  <div class="scroll-chart-bar" style="height: 60%"></div>
                  <div class="scroll-chart-bar" style="height: 85%"></div>
                  <div class="scroll-chart-bar" style="height: 45%"></div>
                  <div class="scroll-chart-bar" style="height: 95%"></div>
                  <div class="scroll-chart-bar" style="height: 70%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-feature-text">
          <span class="scroll-feature-label">Feature 02</span>
          <h2 class="scroll-feature-title">Powerful Analytics</h2>
          <p class="scroll-feature-desc">Make data-driven decisions with beautiful, actionable insights. Track performance metrics and identify opportunities at a glance.</p>
          <ul class="scroll-feature-list">
            <li>✓ Real-time dashboards</li>
            <li>✓ Custom reports</li>
            <li>✓ Trend analysis</li>
            <li>✓ Export to CSV/PDF</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature 3: Automation -->
  <section class="scroll-feature scroll-feature-center">
    <div class="scroll-container">
      <div class="scroll-feature-content-center">
        <span class="scroll-feature-label">Feature 03</span>
        <h2 class="scroll-feature-title">Workflow Automation</h2>
        <p class="scroll-feature-desc-center">Automate repetitive tasks and focus on what matters. Set up custom workflows in minutes, not hours.</p>
        <div class="scroll-automation-demo">
          <div class="scroll-auto-step">
            <div class="scroll-auto-icon">📧</div>
            <div class="scroll-auto-label">New Email</div>
          </div>
          <div class="scroll-auto-arrow">→</div>
          <div class="scroll-auto-step">
            <div class="scroll-auto-icon">🤖</div>
            <div class="scroll-auto-label">AI Process</div>
          </div>
          <div class="scroll-auto-arrow">→</div>
          <div class="scroll-auto-step">
            <div class="scroll-auto-icon">✅</div>
            <div class="scroll-auto-label">Auto Reply</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Statistics Section -->
  <section class="scroll-stats">
    <div class="scroll-container">
      <h2 class="scroll-stats-title">Trusted by Teams Worldwide</h2>
      <div class="scroll-stats-grid">
        <div class="scroll-stat-card">
          <div class="scroll-stat-number" data-target="10000">0</div>
          <div class="scroll-stat-label">Active Teams</div>
        </div>
        <div class="scroll-stat-card">
          <div class="scroll-stat-number" data-target="500000">0</div>
          <div class="scroll-stat-label">Projects Created</div>
        </div>
        <div class="scroll-stat-card">
          <div class="scroll-stat-number" data-target="99">0</div>
          <div class="scroll-stat-label">% Satisfaction Rate</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="scroll-testimonials">
    <div class="scroll-container">
      <h2 class="scroll-section-title">What Our Customers Say</h2>
      <div class="scroll-testimonials-grid">
        <div class="scroll-testimonial-card">
          <div class="scroll-testimonial-stars">⭐⭐⭐⭐⭐</div>
          <p class="scroll-testimonial-text">"This tool has completely transformed how our team works. We're 3x more productive!"</p>
          <div class="scroll-testimonial-author">
            <div class="scroll-testimonial-avatar">SM</div>
            <div class="scroll-testimonial-info">
              <div class="scroll-testimonial-name">Sarah Miller</div>
              <div class="scroll-testimonial-role">Product Manager, TechCorp</div>
            </div>
          </div>
        </div>
        <div class="scroll-testimonial-card">
          <div class="scroll-testimonial-stars">⭐⭐⭐⭐⭐</div>
          <p class="scroll-testimonial-text">"The best investment we've made this year. ROI was immediate and substantial."</p>
          <div class="scroll-testimonial-author">
            <div class="scroll-testimonial-avatar">JD</div>
            <div class="scroll-testimonial-info">
              <div class="scroll-testimonial-name">John Davis</div>
              <div class="scroll-testimonial-role">CEO, StartupXYZ</div>
            </div>
          </div>
        </div>
        <div class="scroll-testimonial-card">
          <div class="scroll-testimonial-stars">⭐⭐⭐⭐⭐</div>
          <p class="scroll-testimonial-text">"Intuitive, powerful, and beautifully designed. Our whole company uses it daily."</p>
          <div class="scroll-testimonial-author">
            <div class="scroll-testimonial-avatar">EW</div>
            <div class="scroll-testimonial-info">
              <div class="scroll-testimonial-name">Emily Wong</div>
              <div class="scroll-testimonial-role">Design Lead, CreativeCo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="scroll-pricing">
    <div class="scroll-container">
      <h2 class="scroll-section-title">Choose Your Plan</h2>
      <div class="scroll-pricing-grid">
        <div class="scroll-pricing-card">
          <div class="scroll-pricing-header">
            <h3 class="scroll-pricing-name">Starter</h3>
            <div class="scroll-pricing-price">
              <span class="scroll-pricing-currency">$</span>
              <span class="scroll-pricing-amount">0</span>
              <span class="scroll-pricing-period">/month</span>
            </div>
          </div>
          <ul class="scroll-pricing-features">
            <li>✓ Up to 5 team members</li>
            <li>✓ 10 GB storage</li>
            <li>✓ Basic analytics</li>
            <li>✓ Email support</li>
          </ul>
          <button class="scroll-pricing-btn scroll-pricing-btn-outline">Start Free</button>
        </div>
        <div class="scroll-pricing-card scroll-pricing-card-featured">
          <div class="scroll-pricing-badge">Most Popular</div>
          <div class="scroll-pricing-header">
            <h3 class="scroll-pricing-name">Professional</h3>
            <div class="scroll-pricing-price">
              <span class="scroll-pricing-currency">$</span>
              <span class="scroll-pricing-amount">29</span>
              <span class="scroll-pricing-period">/month</span>
            </div>
          </div>
          <ul class="scroll-pricing-features">
            <li>✓ Unlimited team members</li>
            <li>✓ 100 GB storage</li>
            <li>✓ Advanced analytics</li>
            <li>✓ Priority support</li>
            <li>✓ Custom workflows</li>
            <li>✓ API access</li>
          </ul>
          <button class="scroll-pricing-btn scroll-pricing-btn-primary">Get Started</button>
        </div>
        <div class="scroll-pricing-card">
          <div class="scroll-pricing-header">
            <h3 class="scroll-pricing-name">Enterprise</h3>
            <div class="scroll-pricing-price">
              <span class="scroll-pricing-amount">Custom</span>
            </div>
          </div>
          <ul class="scroll-pricing-features">
            <li>✓ Everything in Pro</li>
            <li>✓ Unlimited storage</li>
            <li>✓ Dedicated support</li>
            <li>✓ SLA guarantee</li>
            <li>✓ Custom training</li>
            <li>✓ SSO & advanced security</li>
          </ul>
          <button class="scroll-pricing-btn scroll-pricing-btn-outline">Contact Sales</button>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="scroll-cta">
    <div class="scroll-container">
      <h2 class="scroll-cta-title">Ready to Get Started?</h2>
      <p class="scroll-cta-text">Join thousands of teams already using our platform.</p>
      <button class="scroll-cta-button">Start Your Free Trial</button>
      <p class="scroll-cta-small">No credit card required • 14-day free trial</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="scroll-footer">
    <div class="scroll-container">
      <p>&copy; 2024 ProductName. All rights reserved.</p>
    </div>
  </footer>

  <script>
    // Scroll progress bar
    window.addEventListener('scroll', () => {
      const scrollProgress = document.getElementById('scrollProgress');
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      scrollProgress.style.width = scrolled + '%';
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-feature, .scroll-stats, .scroll-testimonials, .scroll-pricing').forEach(el => {
      observer.observe(el);
    });

    // Animated statistics counter
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          let current = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.textContent = target.toLocaleString() + (target === 99 ? '%' : '+');
              clearInterval(timer);
            } else {
              entry.target.textContent = Math.floor(current).toLocaleString();
            }
          }, 30);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.scroll-stat-number').forEach(el => {
      statObserver.observe(el);
    });
  </script>
</body>
</html>
`;

export const previewStyles = `
/* ========== GLOBAL STYLES ========== */
.scroll-product-body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
  color: #111827;
  overflow-x: hidden;
}

/* ========== SCROLL PROGRESS ========== */
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #e5e7eb;
  z-index: 1000;
}

.scroll-progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899);
  transition: width 0.1s ease-out;
}

/* ========== CONTAINER ========== */
.scroll-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ========== HERO SECTION ========== */
.scroll-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%);
  position: relative;
}

.scroll-hero-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, #eef2ff, #faf5ff);
  border: 1px solid #e0e7ff;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4f46e5;
  margin-bottom: 2rem;
}

.scroll-hero-title {
  font-size: 4.5rem;
  font-weight: 900;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #111827, #4f46e5);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.scroll-hero-subtitle {
  font-size: 1.5rem;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.scroll-hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.scroll-btn-primary {
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.3);
}

.scroll-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.4);
}

.scroll-btn-ghost {
  padding: 1.25rem 2.5rem;
  background: transparent;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  color: #111827;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-btn-ghost:hover {
  border-color: #4f46e5;
  color: #4f46e5;
  transform: translateY(-3px);
}

.scroll-down-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.875rem;
  animation: scrollBounce 2s ease-in-out infinite;
}

.scroll-down-icon {
  width: 24px;
  height: 24px;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* ========== FEATURE SECTIONS ========== */
.scroll-feature {
  padding: 8rem 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-feature.scroll-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-feature:nth-child(even) {
  background: #f9fafb;
}

.scroll-feature-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.scroll-feature-left .scroll-feature-content {
  grid-template-columns: 1fr 1fr;
}

.scroll-feature-right .scroll-feature-content {
  grid-template-columns: 1fr 1fr;
}

.scroll-feature-right .scroll-feature-text {
  order: 2;
}

.scroll-feature-right .scroll-feature-visual {
  order: 1;
}

.scroll-feature-label {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: linear-gradient(135deg, #eef2ff, #faf5ff);
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}

.scroll-feature-title {
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 1.5rem;
  color: #111827;
}

.scroll-feature-desc {
  font-size: 1.25rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.scroll-feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scroll-feature-list li {
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

/* ========== DEVICE MOCKUPS ========== */
.scroll-device-macbook {
  background: linear-gradient(135deg, #1f2937, #111827);
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  position: relative;
}

.scroll-device-screen {
  background: #ffffff;
  border-radius: 0.5rem;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.scroll-demo-content {
  padding: 1.5rem;
}

.scroll-demo-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.scroll-demo-dots {
  display: flex;
  gap: 0.5rem;
}

.scroll-demo-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

.scroll-demo-title {
  font-weight: 600;
  color: #111827;
}

.scroll-demo-body {
  padding: 1rem;
}

.scroll-demo-line {
  height: 12px;
  background: linear-gradient(90deg, #e5e7eb, #f3f4f6);
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
}

.scroll-demo-line-short {
  width: 70%;
}

.scroll-demo-cursor {
  width: 2px;
  height: 20px;
  background: #4f46e5;
  animation: cursorBlink 1s steps(2) infinite;
}

@keyframes cursorBlink {
  50% { opacity: 0; }
}

.scroll-device-iphone {
  width: 280px;
  background: linear-gradient(135deg, #1f2937, #111827);
  border-radius: 2.5rem;
  padding: 1rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
}

.scroll-device-screen-mobile {
  background: #ffffff;
  border-radius: 2rem;
  aspect-ratio: 9 / 19.5;
  overflow: hidden;
  padding: 2rem 1.5rem;
}

.scroll-demo-mobile {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.scroll-demo-chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 200px;
  gap: 0.5rem;
}

.scroll-chart-bar {
  flex: 1;
  background: linear-gradient(180deg, #4f46e5, #7c3aed);
  border-radius: 0.5rem 0.5rem 0 0;
  animation: chartGrow 1s ease-out;
}

@keyframes chartGrow {
  from { height: 0%; }
}

/* ========== CENTER FEATURE ========== */
.scroll-feature-center {
  text-align: center;
}

.scroll-feature-content-center {
  max-width: 900px;
  margin: 0 auto;
}

.scroll-feature-desc-center {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto 4rem;
}

.scroll-automation-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  background: linear-gradient(135deg, #eff6ff, #faf5ff);
  border-radius: 1.5rem;
}

.scroll-auto-step {
  text-align: center;
}

.scroll-auto-icon {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.scroll-auto-label {
  font-weight: 600;
  color: #374151;
}

.scroll-auto-arrow {
  font-size: 2rem;
  color: #9ca3af;
  font-weight: 300;
}

/* ========== STATS SECTION ========== */
.scroll-stats {
  padding: 6rem 0;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.scroll-stats.scroll-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-stats-title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 4rem;
}

.scroll-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
}

.scroll-stat-card {
  padding: 2rem;
}

.scroll-stat-number {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
}

.scroll-stat-label {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
}

/* ========== TESTIMONIALS ========== */
.scroll-testimonials {
  padding: 8rem 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.scroll-testimonials.scroll-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-section-title {
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 4rem;
  color: #111827;
}

.scroll-testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.scroll-testimonial-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.scroll-testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.scroll-testimonial-stars {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.scroll-testimonial-text {
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.scroll-testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.scroll-testimonial-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
}

.scroll-testimonial-name {
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
}

.scroll-testimonial-role {
  font-size: 0.875rem;
  color: #6b7280;
}

/* ========== PRICING ========== */
.scroll-pricing {
  padding: 8rem 0;
  background: #f9fafb;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.scroll-pricing.scroll-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.scroll-pricing-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.scroll-pricing-card:hover {
  border-color: #4f46e5;
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.1);
}

.scroll-pricing-card-featured {
  border-color: #4f46e5;
  border-width: 3px;
  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.2);
}

.scroll-pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.375rem 1.25rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.scroll-pricing-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.scroll-pricing-price {
  margin-bottom: 2rem;
}

.scroll-pricing-currency {
  font-size: 2rem;
  font-weight: 700;
  color: #6b7280;
}

.scroll-pricing-amount {
  font-size: 4rem;
  font-weight: 900;
  color: #111827;
}

.scroll-pricing-period {
  font-size: 1.125rem;
  color: #6b7280;
}

.scroll-pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
  text-align: left;
}

.scroll-pricing-features li {
  padding: 0.75rem 0;
  color: #374151;
  font-size: 1rem;
  border-bottom: 1px solid #f3f4f6;
}

.scroll-pricing-btn {
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-pricing-btn-primary {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border: none;
  color: white;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.3);
}

.scroll-pricing-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.4);
}

.scroll-pricing-btn-outline {
  background: transparent;
  border: 2px solid #e5e7eb;
  color: #111827;
}

.scroll-pricing-btn-outline:hover {
  border-color: #4f46e5;
  color: #4f46e5;
}

/* ========== CTA SECTION ========== */
.scroll-cta {
  padding: 8rem 0;
  background: linear-gradient(135deg, #eff6ff, #faf5ff);
  text-align: center;
}

.scroll-cta-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #111827;
  margin-bottom: 1.5rem;
}

.scroll-cta-text {
  font-size: 1.5rem;
  color: #6b7280;
  margin-bottom: 3rem;
}

.scroll-cta-button {
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.scroll-cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.4);
}

.scroll-cta-small {
  color: #9ca3af;
  font-size: 0.875rem;
}

/* ========== FOOTER ========== */
.scroll-footer {
  padding: 3rem 0;
  background: #111827;
  text-align: center;
  color: #9ca3af;
}

/* ========== RESPONSIVE ========== */
@media (max-width: 1024px) {
  .scroll-hero-title {
    font-size: 3.5rem;
  }

  .scroll-feature-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .scroll-feature-right .scroll-feature-text,
  .scroll-feature-right .scroll-feature-visual {
    order: unset;
  }

  .scroll-stats-grid,
  .scroll-testimonials-grid,
  .scroll-pricing-grid {
    grid-template-columns: 1fr;
  }

  .scroll-automation-demo {
    flex-direction: column;
  }

  .scroll-auto-arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 768px) {
  .scroll-hero-title {
    font-size: 2.5rem;
  }

  .scroll-hero-subtitle {
    font-size: 1.25rem;
  }

  .scroll-hero-buttons {
    flex-direction: column;
  }

  .scroll-feature-title {
    font-size: 2rem;
  }

  .scroll-stats-title,
  .scroll-section-title,
  .scroll-cta-title {
    font-size: 2rem;
  }
}
`;
