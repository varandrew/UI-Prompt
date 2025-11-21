// Scroll Narrative - Full Page Preview
// 滾動敘事風格 - 完整页面預覽

export const fullPageHTML = `
  <div class="scroll-narrative-page">
    <!-- 滾動進度條 -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" id="scrollProgress"></div>
    </div>

    <!-- 章節导航點 -->
    <nav class="chapter-nav" id="chapterNav">
      <a href="#hero" class="nav-dot active" data-target="hero" title="Introduction"></a>
      <a href="#chapter1" class="nav-dot" data-target="chapter1" title="Chapter 1"></a>
      <a href="#chapter2" class="nav-dot" data-target="chapter2" title="Chapter 2"></a>
      <a href="#chapter3" class="nav-dot" data-target="chapter3" title="Chapter 3"></a>
      <a href="#chapter4" class="nav-dot" data-target="chapter4" title="Chapter 4"></a>
      <a href="#timeline" class="nav-dot" data-target="timeline" title="Timeline"></a>
      <a href="#cta" class="nav-dot" data-target="cta" title="Get Started"></a>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="parallax-bg"></div>
      <div class="hero-content">
        <div class="hero-badge fade-in-delay-1">📖 SCROLL-DRIVEN STORYTELLING</div>
        <h1 class="hero-title fade-in-delay-2">
          The Art of
          <br>
          <span class="gradient-text">Scroll Narrative</span>
        </h1>
        <p class="hero-subtitle fade-in-delay-3">
          Experience the journey through immersive storytelling, where every scroll reveals a new chapter in our narrative.
        </p>
        <div class="scroll-indicator fade-in-delay-4">
          <span>Scroll Down</span>
          <div class="scroll-arrow">↓</div>
        </div>
      </div>
    </section>

    <!-- Chapter 1: The Beginning -->
    <section id="chapter1" class="chapter-section">
      <div class="sticky-header">
        <h2 class="chapter-title">Chapter I: The Beginning</h2>
      </div>
      <div class="chapter-content">
        <div class="content-card scroll-reveal">
          <div class="card-icon">🌅</div>
          <h3 class="card-title">Where Stories Begin</h3>
          <p class="card-text">
            Every great journey starts with a single scroll. In the digital age, storytelling has evolved beyond static pages. We now craft experiences that unfold naturally as users navigate through content, creating a seamless flow of information and emotion.
          </p>
          <div class="card-stats">
            <div class="stat-item">
              <div class="stat-number">85%</div>
              <div class="stat-label">User Engagement</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">3.2x</div>
              <div class="stat-label">Time on Page</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">92%</div>
              <div class="stat-label">Scroll Depth</div>
            </div>
          </div>
        </div>

        <div class="content-card scroll-reveal">
          <div class="feature-grid">
            <div class="feature-item">
              <div class="feature-icon">📱</div>
              <h4 class="feature-title">Mobile First</h4>
              <p class="feature-desc">Optimized for touch and swipe gestures</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <h4 class="feature-title">Lightning Fast</h4>
              <p class="feature-desc">Smooth 60fps scroll animations</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🎨</div>
              <h4 class="feature-title">Beautiful Design</h4>
              <p class="feature-desc">Pixel-perfect attention to detail</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">♿</div>
              <h4 class="feature-title">Accessible</h4>
              <p class="feature-desc">WCAG 2.1 compliant experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter 2: The Journey -->
    <section id="chapter2" class="chapter-section bg-alternate">
      <div class="sticky-header">
        <h2 class="chapter-title">Chapter II: The Journey</h2>
      </div>
      <div class="chapter-content">
        <div class="content-card scroll-reveal">
          <div class="card-icon">🚀</div>
          <h3 class="card-title">Navigating the Experience</h3>
          <p class="card-text">
            As users scroll, they embark on a carefully orchestrated journey. Each section reveals itself at the perfect moment, creating anticipation and maintaining interest. This isn't just design—it's storytelling through motion.
          </p>
          <div class="journey-steps">
            <div class="step-item">
              <div class="step-number">01</div>
              <div class="step-content">
                <h4>Capture Attention</h4>
                <p>Hook visitors with compelling visuals and headlines</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">02</div>
              <div class="step-content">
                <h4>Build Interest</h4>
                <p>Layer information progressively as they scroll</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">03</div>
              <div class="step-content">
                <h4>Create Desire</h4>
                <p>Showcase value through interactive elements</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">04</div>
              <div class="step-content">
                <h4>Drive Action</h4>
                <p>Guide to conversion with clear calls-to-action</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-card scroll-reveal">
          <div class="parallax-image">
            <div class="image-placeholder">
              <span class="placeholder-icon">🖼️</span>
              <p>Parallax Image Layer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter 3: The Interaction -->
    <section id="chapter3" class="chapter-section">
      <div class="sticky-header">
        <h2 class="chapter-title">Chapter III: The Interaction</h2>
      </div>
      <div class="chapter-content">
        <div class="content-card scroll-reveal">
          <div class="card-icon">✨</div>
          <h3 class="card-title">Engaging Through Motion</h3>
          <p class="card-text">
            Motion design breathes life into narratives. Subtle animations guide the eye, while larger transitions create memorable moments. Every movement is intentional, every fade-in purposeful.
          </p>
          <div class="interaction-demo">
            <div class="demo-element hover-grow">
              <div class="demo-icon">🎯</div>
              <p>Hover Me</p>
            </div>
            <div class="demo-element hover-glow">
              <div class="demo-icon">💫</div>
              <p>Glow Effect</p>
            </div>
            <div class="demo-element hover-rotate">
              <div class="demo-icon">🔄</div>
              <p>Rotate</p>
            </div>
            <div class="demo-element hover-bounce">
              <div class="demo-icon">🎈</div>
              <p>Bounce</p>
            </div>
          </div>
        </div>

        <div class="content-card scroll-reveal">
          <div class="quote-block">
            <div class="quote-mark">"</div>
            <p class="quote-text">
              Good design is about creating experiences that feel natural and intuitive. Scroll narratives achieve this by aligning with the user's natural reading flow.
            </p>
            <div class="quote-author">
              <div class="author-avatar">👤</div>
              <div class="author-info">
                <div class="author-name">Alex Johnson</div>
                <div class="author-role">Design Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter 4: The Impact -->
    <section id="chapter4" class="chapter-section bg-alternate">
      <div class="sticky-header">
        <h2 class="chapter-title">Chapter IV: The Impact</h2>
      </div>
      <div class="chapter-content">
        <div class="content-card scroll-reveal">
          <div class="card-icon">📊</div>
          <h3 class="card-title">Measurable Results</h3>
          <p class="card-text">
            Scroll-driven storytelling isn't just beautiful—it's effective. Data shows significant improvements in user engagement, time on site, and conversion rates when narratives unfold naturally through scroll.
          </p>
          <div class="impact-metrics">
            <div class="metric-card">
              <div class="metric-icon">👁️</div>
              <div class="metric-value" data-target="2400">0</div>
              <div class="metric-label">Daily Visitors</div>
              <div class="metric-change">+45% this month</div>
            </div>
            <div class="metric-card">
              <div class="metric-icon">⏱️</div>
              <div class="metric-value" data-target="5">0</div>
              <div class="metric-suffix">min</div>
              <div class="metric-label">Avg. Session</div>
              <div class="metric-change">+120% increase</div>
            </div>
            <div class="metric-card">
              <div class="metric-icon">💬</div>
              <div class="metric-value" data-target="94">0</div>
              <div class="metric-suffix">%</div>
              <div class="metric-label">Satisfaction</div>
              <div class="metric-change">Above industry avg</div>
            </div>
          </div>
        </div>

        <div class="content-card scroll-reveal">
          <div class="testimonial-slider">
            <div class="testimonial-item">
              <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "The scroll narrative approach transformed our user engagement. Time on site increased by 200% and bounce rate dropped significantly."
              </p>
              <div class="testimonial-author">
                <span class="author-name">Sarah Chen</span>
                <span class="author-company">TechCorp Inc.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section id="timeline" class="timeline-section">
      <div class="section-header">
        <h2 class="section-title">Evolution Timeline</h2>
        <p class="section-subtitle">The journey of scroll-driven design</p>
      </div>

      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div class="timeline-item scroll-reveal">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-date">2010</div>
            <h3 class="timeline-title">Static Pages</h3>
            <p class="timeline-desc">Traditional web design with fixed layouts</p>
          </div>
        </div>

        <div class="timeline-item scroll-reveal">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-date">2014</div>
            <h3 class="timeline-title">Parallax Era</h3>
            <p class="timeline-desc">Introduction of depth and layered scrolling</p>
          </div>
        </div>

        <div class="timeline-item scroll-reveal">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-date">2018</div>
            <h3 class="timeline-title">Scroll Animations</h3>
            <p class="timeline-desc">Advanced CSS and JS scroll-triggered effects</p>
          </div>
        </div>

        <div class="timeline-item scroll-reveal">
          <div class="timeline-marker">
            <div class="marker-dot active"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-date">2024</div>
            <h3 class="timeline-title">Native Support</h3>
            <p class="timeline-desc">CSS Scroll-Driven Animations API</p>
          </div>
        </div>

        <div class="timeline-item scroll-reveal">
          <div class="timeline-marker">
            <div class="marker-dot future"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-date">2025+</div>
            <h3 class="timeline-title">AI Integration</h3>
            <p class="timeline-desc">Personalized scroll experiences</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="cta-section">
      <div class="cta-content">
        <div class="cta-icon">🎯</div>
        <h2 class="cta-title">Ready to Create Your Story?</h2>
        <p class="cta-text">
          Transform your content into an engaging narrative that captivates and converts. Start building scroll-driven experiences today.
        </p>
        <div class="cta-buttons">
          <a href="javascript:void(0)" class="btn-primary">Get Started Free</a>
          <a href="javascript:void(0)" class="btn-secondary">View Examples</a>
        </div>
        <div class="cta-features">
          <div class="cta-feature">✓ No credit card required</div>
          <div class="cta-feature">✓ 14-day free trial</div>
          <div class="cta-feature">✓ Cancel anytime</div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer-section">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">📖</div>
          <p class="brand-text">Scroll Narrative</p>
        </div>
        <p class="footer-copyright">
          © 2025 Scroll Narrative. Crafted with care.
        </p>
      </div>
    </footer>
  </div>

  <script>
    // Scroll Progress Bar
    function updateScrollProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      document.getElementById('scrollProgress').style.width = scrollPercent + '%';
    }

    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    // Chapter navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navDots = document.querySelectorAll('.chapter-nav .nav-dot');

    function highlightNavigation() {
      const scrollPos = window.pageYOffset + 200;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navDots.forEach(dot => dot.classList.remove('active'));
          const activeDot = document.querySelector(\`.chapter-nav .nav-dot[data-target="\${sectionId}"]\`);
          if (activeDot) activeDot.classList.add('active');
        }
      });
    }

    // Smooth scroll for navigation
    navDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = dot.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Counter animation for metrics
    function animateCounter(element) {
      const target = parseInt(element.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          element.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target;
        }
      };

      updateCounter();
    }

    // Observe metric cards for counter animation
    const metricObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('[data-target]');
          counters.forEach(counter => {
            if (!counter.classList.contains('counted')) {
              counter.classList.add('counted');
              animateCounter(counter);
            }
          });
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.impact-metrics').forEach(el => metricObserver.observe(el));

    // Event listeners
    window.addEventListener('scroll', () => {
      updateScrollProgress();
      highlightNavigation();
    });

    // Initial calls
    updateScrollProgress();
    highlightNavigation();
  </script>
`;

export const fullPageStyles = `
  /* ==================== RESET & BASE ==================== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .scroll-narrative-page {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
    color: #f3f4f6;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  /* ==================== SCROLL PROGRESS BAR ==================== */
  .scroll-progress-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 9999;
  }

  .scroll-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4);
    width: 0%;
    transition: width 0.1s ease-out;
  }

  /* ==================== CHAPTER NAVIGATION ==================== */
  .chapter-nav {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .nav-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  .nav-dot:hover {
    background: rgba(139, 92, 246, 0.5);
    border-color: #8b5cf6;
    transform: scale(1.2);
  }

  .nav-dot.active {
    background: #8b5cf6;
    border-color: #8b5cf6;
    transform: scale(1.4);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
  }

  .nav-dot::after {
    content: attr(title);
    position: absolute;
    right: calc(100% + 1rem);
    top: 50%;
    transform: translateY(-50%);
    background: rgba(15, 23, 42, 0.9);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .nav-dot:hover::after {
    opacity: 1;
  }

  /* ==================== HERO SECTION ==================== */
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 2rem;
  }

  .parallax-bg {
    position: absolute;
    top: -10%;
    left: -10%;
    right: -10%;
    bottom: -10%;
    background: radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 900px;
  }

  .hero-badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    color: #a78bfa;
    margin-bottom: 2rem;
  }

  .hero-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .gradient-text {
    background: linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: #9ca3af;
    max-width: 600px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: #6b7280;
    font-size: 0.875rem;
  }

  .scroll-arrow {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }

  /* Fade in delays */
  .fade-in-delay-1 { animation: fadeIn 0.6s ease-out 0.2s both; }
  .fade-in-delay-2 { animation: fadeIn 0.6s ease-out 0.4s both; }
  .fade-in-delay-3 { animation: fadeIn 0.6s ease-out 0.6s both; }
  .fade-in-delay-4 { animation: fadeIn 0.6s ease-out 0.8s both; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ==================== CHAPTER SECTIONS ==================== */
  .chapter-section {
    min-height: 100vh;
    padding: 6rem 2rem 4rem;
    position: relative;
  }

  .chapter-section.bg-alternate {
    background: rgba(30, 41, 59, 0.3);
  }

  .sticky-header {
    position: sticky;
    top: 4px;
    z-index: 10;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    padding: 1.5rem 0;
    margin-bottom: 3rem;
    border-bottom: 2px solid rgba(139, 92, 246, 0.3);
  }

  .chapter-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    text-align: center;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .chapter-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  /* ==================== CONTENT CARDS ==================== */
  .content-card {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 1.5rem;
    padding: 3rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .content-card:hover {
    border-color: rgba(139, 92, 246, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: inline-block;
  }

  .card-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #f3f4f6;
  }

  .card-text {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #9ca3af;
    margin-bottom: 2rem;
  }

  /* ==================== SCROLL REVEAL ANIMATION ==================== */
  .scroll-reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
  }

  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ==================== STATS ==================== */
  .card-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(139, 92, 246, 0.2);
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* ==================== FEATURE GRID ==================== */
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .feature-item {
    padding: 1.5rem;
    background: rgba(139, 92, 246, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.1);
    border-radius: 1rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .feature-item:hover {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
    transform: translateY(-2px);
  }

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .feature-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #f3f4f6;
  }

  .feature-desc {
    font-size: 0.875rem;
    color: #9ca3af;
  }

  /* ==================== JOURNEY STEPS ==================== */
  .journey-steps {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .step-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .step-number {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    font-weight: 700;
  }

  .step-content h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #f3f4f6;
  }

  .step-content p {
    color: #9ca3af;
    line-height: 1.6;
  }

  /* ==================== PARALLAX IMAGE ==================== */
  .parallax-image {
    aspect-ratio: 16/9;
    border-radius: 1rem;
    overflow: hidden;
    background: rgba(139, 92, 246, 0.1);
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #6b7280;
  }

  .placeholder-icon {
    font-size: 4rem;
  }

  /* ==================== INTERACTION DEMO ==================== */
  .interaction-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .demo-element {
    aspect-ratio: 1;
    background: rgba(139, 92, 246, 0.1);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .demo-icon {
    font-size: 2rem;
  }

  .demo-element p {
    font-size: 0.75rem;
    color: #9ca3af;
  }

  .hover-grow:hover {
    transform: scale(1.15);
    border-color: #8b5cf6;
  }

  .hover-glow:hover {
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
    border-color: #8b5cf6;
  }

  .hover-rotate:hover {
    transform: rotate(180deg);
    border-color: #ec4899;
  }

  .hover-bounce:hover {
    animation: bounceHover 0.6s ease;
  }

  @keyframes bounceHover {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  /* ==================== QUOTE BLOCK ==================== */
  .quote-block {
    position: relative;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
    border-left: 4px solid #8b5cf6;
    border-radius: 1rem;
  }

  .quote-mark {
    font-size: 4rem;
    color: rgba(139, 92, 246, 0.3);
    line-height: 1;
    margin-bottom: 1rem;
  }

  .quote-text {
    font-size: 1.25rem;
    font-style: italic;
    line-height: 1.6;
    color: #e5e7eb;
    margin-bottom: 1.5rem;
  }

  .quote-author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .author-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  .author-name {
    font-weight: 600;
    color: #f3f4f6;
  }

  .author-role {
    font-size: 0.875rem;
    color: #9ca3af;
  }

  /* ==================== IMPACT METRICS ==================== */
  .impact-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .metric-card {
    text-align: center;
    padding: 2rem;
    background: rgba(139, 92, 246, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 1rem;
    transition: all 0.3s ease;
  }

  .metric-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
  }

  .metric-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .metric-value {
    font-size: 3rem;
    font-weight: 900;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  .metric-suffix {
    font-size: 1.5rem;
    color: #9ca3af;
    display: inline-block;
    margin-left: 0.25rem;
  }

  .metric-label {
    font-size: 0.875rem;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 0.5rem;
  }

  .metric-change {
    font-size: 0.75rem;
    color: #10b981;
    margin-top: 0.5rem;
  }

  /* ==================== TESTIMONIAL ==================== */
  .testimonial-slider {
    padding: 2rem;
  }

  .testimonial-item {
    text-align: center;
  }

  .testimonial-stars {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .testimonial-text {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #e5e7eb;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .testimonial-author {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .author-company {
    font-size: 0.875rem;
    color: #6b7280;
  }

  /* ==================== TIMELINE SECTION ==================== */
  .timeline-section {
    padding: 6rem 2rem;
    background: rgba(30, 41, 59, 0.3);
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: #9ca3af;
  }

  .timeline-container {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding-left: 3rem;
  }

  .timeline-line {
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5));
  }

  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    gap: 2rem;
  }

  .timeline-marker {
    position: absolute;
    left: -2.5rem;
    top: 0;
  }

  .marker-dot {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: rgba(30, 41, 59, 0.9);
    border: 3px solid rgba(139, 92, 246, 0.5);
    transition: all 0.3s ease;
  }

  .marker-dot.active {
    border-color: #8b5cf6;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
    transform: scale(1.2);
  }

  .marker-dot.future {
    border-color: rgba(139, 92, 246, 0.3);
    border-style: dashed;
  }

  .timeline-content {
    flex: 1;
    padding: 1.5rem;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .timeline-content:hover {
    border-color: rgba(139, 92, 246, 0.5);
    transform: translateX(10px);
  }

  .timeline-date {
    font-size: 0.875rem;
    font-weight: 700;
    color: #8b5cf6;
    margin-bottom: 0.5rem;
  }

  .timeline-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #f3f4f6;
    margin-bottom: 0.5rem;
  }

  .timeline-desc {
    color: #9ca3af;
    line-height: 1.6;
  }

  /* ==================== CTA SECTION ==================== */
  .cta-section {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
  }

  .cta-content {
    text-align: center;
    max-width: 700px;
  }

  .cta-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  .cta-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 1rem;
    color: #f3f4f6;
  }

  .cta-text {
    font-size: 1.125rem;
    color: #9ca3af;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .btn-primary {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.5);
  }

  .btn-secondary {
    padding: 1rem 2rem;
    background: rgba(139, 92, 246, 0.1);
    color: #a78bfa;
    font-weight: 600;
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 0.75rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
    font-size: 1rem;
    backdrop-filter: blur(10px);
  }

  .btn-secondary:hover {
    background: rgba(139, 92, 246, 0.2);
    border-color: rgba(139, 92, 246, 0.5);
  }

  .cta-features {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-feature {
    font-size: 0.875rem;
    color: #9ca3af;
  }

  /* ==================== FOOTER ==================== */
  .footer-section {
    padding: 3rem 2rem;
    background: rgba(15, 23, 42, 0.8);
    border-top: 1px solid rgba(139, 92, 246, 0.2);
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .brand-logo {
    font-size: 1.5rem;
  }

  .brand-text {
    font-weight: 600;
    font-size: 1.125rem;
    color: #f3f4f6;
  }

  .footer-copyright {
    font-size: 0.875rem;
    color: #6b7280;
  }

  /* ==================== RESPONSIVE ==================== */
  @media (max-width: 768px) {
    .chapter-nav {
      right: 1rem;
    }

    .chapter-section {
      padding: 4rem 1rem 2rem;
    }

    .content-card {
      padding: 2rem;
    }

    .card-stats {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }

    .journey-steps {
      gap: 1rem;
    }

    .step-item {
      flex-direction: column;
    }

    .interaction-demo {
      grid-template-columns: repeat(2, 1fr);
    }

    .impact-metrics {
      grid-template-columns: 1fr;
    }

    .timeline-container {
      padding-left: 2rem;
    }

    .timeline-marker {
      left: -1.75rem;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .cta-features {
      flex-direction: column;
      gap: 0.5rem;
    }

    .nav-dot::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .scroll-progress-container {
      height: 3px;
    }

    .hero-badge {
      font-size: 0.75rem;
      padding: 0.375rem 1rem;
    }

    .card-icon {
      font-size: 2rem;
    }

    .card-title {
      font-size: 1.5rem;
    }

    .card-text {
      font-size: 1rem;
    }

    .interaction-demo {
      gap: 1rem;
    }

    .timeline-item {
      margin-bottom: 2rem;
    }
  }
`;
