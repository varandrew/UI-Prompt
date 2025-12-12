export const previewConfig = {
  id: 'product-launch-timeline',
  name: {
    'zh-CN': '产品发布时间轴',
    'en-US': 'Product Launch Timeline'
  },
  type: 'full',
  description: {
    'zh-CN': '产品发布时间轴页面，展示垂直时间轴、里程碑节点、设备模型、动画统计、预购表单和发布活动信息',
    'en-US': 'Product launch timeline page featuring vertical timeline, milestone nodes, device mockups, animated statistics, pre-order form, and launch event information'
  },
  features: [
    'Vertical Timeline with Milestone Nodes',
    'Scroll-triggered Animations',
    'Device Mockups (MacBook & iPhone)',
    'Countdown Timer',
    'Animated Statistics Counter',
    'Pre-order Form Section',
    'Launch Event Details',
    'Early User Testimonials'
  ],
  colorScheme: {
    'zh-CN': '主色靛藍 (#4f46e5)、輔色紫色 (#7c3aed)、強調色粉紅 (#ec4899)、背景白色 (#ffffff)、深色文字 (#111827)',
    'en-US': 'Primary indigo (#4f46e5), secondary purple (#7c3aed), accent pink (#ec4899), background white (#ffffff), dark text (#111827)'
  }
};

export const previewHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Launch Timeline</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(180deg, #ffffff 0%, #f9fafb 50%, #f3f4f6 100%);
      color: #111827;
      overflow-x: hidden;
    }

    /* Header */
    .launch-header {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding: 1.5rem 2rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .launch-nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .launch-logo {
      font-size: 1.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .launch-nav-links {
      display: flex;
      gap: 2rem;
    }

    .launch-nav-link {
      color: #6b7280;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    .launch-nav-link:hover {
      color: #4f46e5;
    }

    .launch-cta-btn {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .launch-cta-btn:hover {
      transform: translateY(-2px);
    }

    /* Hero */
    .launch-hero {
      padding: 10rem 2rem 6rem;
      text-align: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .launch-hero-title {
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #111827, #4f46e5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .launch-hero-subtitle {
      font-size: 1.5rem;
      color: #6b7280;
      margin-bottom: 3rem;
    }

    /* Countdown */
    .countdown-container {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .countdown-item {
      text-align: center;
      background: white;
      padding: 1.5rem 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    .countdown-number {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, #4f46e5, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .countdown-label {
      font-size: 0.9rem;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* Timeline */
    .timeline-section {
      max-width: 1000px;
      margin: 6rem auto;
      padding: 0 2rem;
      position: relative;
    }

    .timeline-line {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 3px;
      height: 100%;
      background: linear-gradient(180deg, #4f46e5, #ec4899);
      opacity: 0.3;
    }

    .timeline-item {
      display: flex;
      align-items: center;
      margin-bottom: 8rem;
      position: relative;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.6s ease-out;
    }

    .timeline-item.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .timeline-item:nth-child(even) {
      flex-direction: row-reverse;
    }

    .timeline-content {
      flex: 1;
      padding: 0 3rem;
    }

    .timeline-node {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 800;
      color: white;
      box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
      position: relative;
      z-index: 10;
    }

    .timeline-title {
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 0.75rem;
      color: #111827;
    }

    .timeline-date {
      font-size: 0.9rem;
      color: #7c3aed;
      font-weight: 600;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .timeline-desc {
      color: #6b7280;
      line-height: 1.8;
      font-size: 1.05rem;
    }

    /* Device Mockups */
    .device-showcase {
      background: linear-gradient(135deg, #f9fafb, #ffffff);
      padding: 6rem 2rem;
      margin: 6rem 0;
    }

    .device-container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .device-title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 4rem;
      background: linear-gradient(135deg, #111827, #4f46e5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .device-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
      align-items: center;
    }

    .device-mockup {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }

    .device-mockup:hover {
      transform: translateY(-10px);
    }

    .device-screen {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      border-radius: 12px;
      padding: 3rem 2rem;
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
    }

    /* Stats */
    .stats-section {
      max-width: 1200px;
      margin: 6rem auto;
      padding: 0 2rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .stat-card {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      text-align: center;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(135deg, #4f46e5, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: #6b7280;
      font-weight: 600;
    }

    /* Pre-order Form */
    .preorder-section {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      padding: 6rem 2rem;
      margin: 6rem 0;
      color: white;
      text-align: center;
    }

    .preorder-title {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 2rem;
    }

    .preorder-form {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      gap: 1rem;
    }

    .preorder-input {
      flex: 1;
      padding: 1rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
    }

    .preorder-submit {
      padding: 1rem 2rem;
      background: white;
      color: #4f46e5;
      border: none;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .preorder-submit:hover {
      transform: scale(1.05);
    }

    /* Testimonials */
    .testimonials-section {
      max-width: 1200px;
      margin: 6rem auto;
      padding: 0 2rem;
    }

    .testimonials-title {
      font-size: 2.5rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 4rem;
      background: linear-gradient(135deg, #111827, #4f46e5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    .testimonial-text {
      color: #374151;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      font-style: italic;
    }

    .testimonial-author {
      font-weight: 700;
      color: #111827;
    }

    .testimonial-role {
      color: #6b7280;
      font-size: 0.9rem;
    }

    /* Footer */
    .launch-footer {
      background: #111827;
      color: white;
      padding: 3rem 2rem;
      margin-top: 6rem;
      text-align: center;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .launch-hero-title { font-size: 2.5rem; }
      .countdown-container { flex-direction: column; gap: 1rem; }
      .timeline-item, .timeline-item:nth-child(even) {
        flex-direction: column;
      }
      .timeline-content { padding: 2rem 0; }
      .device-grid { grid-template-columns: 1fr; }
      .preorder-form { flex-direction: column; }
      .launch-nav-links { display: none; }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="launch-header">
    <nav class="launch-nav">
      <div class="launch-logo">ProductX</div>
      <div class="launch-nav-links">
        <a href="javascript:void(0)" class="launch-nav-link">Timeline</a>
        <a href="javascript:void(0)" class="launch-nav-link">Features</a>
        <a href="javascript:void(0)" class="launch-nav-link">Pre-order</a>
      </div>
      <button class="launch-cta-btn">Reserve Now</button>
    </nav>
  </header>

  <!-- Hero -->
  <section class="launch-hero">
    <h1 class="launch-hero-title">The Future Launches Soon</h1>
    <p class="launch-hero-subtitle">Join us on the journey to revolutionize your workflow</p>

    <!-- Countdown -->
    <div class="countdown-container">
      <div class="countdown-item">
        <div class="countdown-number">45</div>
        <div class="countdown-label">Days</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">12</div>
        <div class="countdown-label">Hours</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">37</div>
        <div class="countdown-label">Minutes</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">58</div>
        <div class="countdown-label">Seconds</div>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="timeline-section">
    <div class="timeline-line"></div>

    <div class="timeline-item">
      <div class="timeline-content">
        <h3 class="timeline-title">Research & Development</h3>
        <div class="timeline-date">Q1 2024 - Completed</div>
        <p class="timeline-desc">Extensive market research and user studies to identify core needs and develop innovative solutions that truly matter.</p>
      </div>
      <div class="timeline-node">1</div>
      <div class="timeline-content"></div>
    </div>

    <div class="timeline-item">
      <div class="timeline-content"></div>
      <div class="timeline-node">2</div>
      <div class="timeline-content">
        <h3 class="timeline-title">Beta Testing Program</h3>
        <div class="timeline-date">Q2 2024 - Completed</div>
        <p class="timeline-desc">Limited beta release to 500+ early adopters, gathering critical feedback and refining the user experience.</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-content">
        <h3 class="timeline-title">Feature Completion</h3>
        <div class="timeline-date">Q3 2024 - In Progress</div>
        <p class="timeline-desc">Final touches on all core features, performance optimization, and polishing the user interface for perfection.</p>
      </div>
      <div class="timeline-node">3</div>
      <div class="timeline-content"></div>
    </div>

    <div class="timeline-item">
      <div class="timeline-content"></div>
      <div class="timeline-node">4</div>
      <div class="timeline-content">
        <h3 class="timeline-title">Pre-order Opens</h3>
        <div class="timeline-date">November 2024</div>
        <p class="timeline-desc">Special pricing for early supporters. Be among the first to experience the next generation of productivity.</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-content">
        <h3 class="timeline-title">Official Launch</h3>
        <div class="timeline-date">January 2025</div>
        <p class="timeline-desc">Public launch with special launch event, live demonstrations, and exclusive launch-day offers.</p>
      </div>
      <div class="timeline-node">5</div>
      <div class="timeline-content"></div>
    </div>
  </section>

  <!-- Device Showcase -->
  <section class="device-showcase">
    <div class="device-container">
      <h2 class="device-title">Works Everywhere You Do</h2>
      <div class="device-grid">
        <div class="device-mockup">
          <div class="device-screen">
            💻<br>Desktop Experience<br>
            <small style="opacity: 0.8;">Full-featured workspace</small>
          </div>
        </div>
        <div class="device-mockup">
          <div class="device-screen">
            📱<br>Mobile On-the-Go<br>
            <small style="opacity: 0.8;">Seamless sync across devices</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="stats-section">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-number">10K+</div>
        <div class="stat-label">Early Signups</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">500+</div>
        <div class="stat-label">Beta Testers</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">98%</div>
        <div class="stat-label">Satisfaction Rate</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">15</div>
        <div class="stat-label">Awards Won</div>
      </div>
    </div>
  </section>

  <!-- Pre-order -->
  <section class="preorder-section">
    <h2 class="preorder-title">Reserve Your Spot</h2>
    <p style="margin-bottom: 2rem; opacity: 0.9;">Get 30% off launch price as an early supporter</p>
    <form class="preorder-form" onsubmit="return false;">
      <input type="email" class="preorder-input" placeholder="Your email address" required>
      <button type="submit" class="preorder-submit">Pre-order Now</button>
    </form>
  </section>

  <!-- Testimonials -->
  <section class="testimonials-section">
    <h2 class="testimonials-title">What Beta Users Say</h2>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <p class="testimonial-text">"This product completely transformed how our team collaborates. Can't imagine working without it now."</p>
        <div class="testimonial-author">Sarah Chen</div>
        <div class="testimonial-role">Product Manager, TechCorp</div>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">"The beta exceeded all expectations. The launch version is going to be a game-changer for the industry."</p>
        <div class="testimonial-author">Michael Torres</div>
        <div class="testimonial-role">CEO, StartupX</div>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">"Intuitive, powerful, and beautifully designed. This is the tool I've been waiting for."</p>
        <div class="testimonial-author">Emma Williams</div>
        <div class="testimonial-role">Designer, Creative Studio</div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="launch-footer">
    <div class="footer-content">
      <p>&copy; 2024 ProductX. All rights reserved.</p>
      <p style="margin-top: 1rem; opacity: 0.7;">Join us on the journey to launch something amazing.</p>
    </div>
  </footer>

  <script>
    // Scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
  </script>
</body>
</html>`;

export const previewStyles = ``;
