/**
 * Kinetic Typography - Full Page Demo
 * 完整的動態排版登陸页面範例
 * 包含: Hero, Stats, Demo, Pricing, FAQ, Footer 共 6 個章節
 */

export const fullPageHTML = `
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-title-wrapper">
      <h1 class="hero-title">
        <span class="hero-letter" style="animation-delay: 0s;">N</span><span class="hero-letter" style="animation-delay: 0.1s;">E</span><span class="hero-letter" style="animation-delay: 0.2s;">U</span><span class="hero-letter" style="animation-delay: 0.3s;">R</span><span class="hero-letter" style="animation-delay: 0.4s;">O</span><span class="hero-letter" style="animation-delay: 0.5s;">T</span><span class="hero-letter" style="animation-delay: 0.6s;">Y</span><span class="hero-letter" style="animation-delay: 0.7s;">P</span><span class="hero-letter" style="animation-delay: 0.8s;">E</span>
      </h1>
    </div>
    <p class="hero-subtitle">
      <span class="typewriter">Next-Gen Typography Engine for Modern Web</span>
      <span class="cursor">|</span>
    </p>
    <button class="cta-button">
      <span class="cta-text">Get Started</span>
    </button>
  </section>

  <!-- Stats Section -->
  <section class="stats-section">
    <div class="stat-card">
      <div class="stat-number"><span class="count-up" data-target="99">0</span><span class="stat-unit">%</span></div>
      <div class="stat-label">Performance</div>
    </div>
    <div class="stat-card">
      <div class="stat-number"><span class="count-up" data-target="50">0</span><span class="stat-unit">K+</span></div>
      <div class="stat-label">Active Users</div>
    </div>
    <div class="stat-card">
      <div class="stat-number"><span class="count-up" data-target="12">0</span><span class="stat-unit">ms</span></div>
      <div class="stat-label">Render Time</div>
    </div>
    <div class="stat-card">
      <div class="stat-number"><span class="count-up" data-target="100">0</span><span class="stat-unit">+</span></div>
      <div class="stat-label">Animations</div>
    </div>
  </section>

  <!-- Product Demo Section -->
  <section class="demo-section">
    <h2 class="section-title">
      <span class="title-word" style="animation-delay: 0s;">Live</span>
      <span class="title-word" style="animation-delay: 0.2s;">Typography</span>
      <span class="title-word" style="animation-delay: 0.4s;">Engine</span>
    </h2>
    <div class="demo-container">
      <div class="demo-box">
        <div class="demo-text-line"><span class="demo-char">T</span><span class="demo-char">Y</span><span class="demo-char">P</span><span class="demo-char">E</span></div>
        <div class="demo-text-line"><span class="demo-char">I</span><span class="demo-char">N</span></div>
        <div class="demo-text-line"><span class="demo-char">M</span><span class="demo-char">O</span><span class="demo-char">T</span><span class="demo-char">I</span><span class="demo-char">O</span><span class="demo-char">N</span></div>
      </div>
      <div class="feature-tags">
        <div class="feature-tag" style="animation-delay: 0s;">Real-time Animation</div>
        <div class="feature-tag" style="animation-delay: 0.2s;">GPU Accelerated</div>
        <div class="feature-tag" style="animation-delay: 0.4s;">60 FPS Smooth</div>
        <div class="feature-tag" style="animation-delay: 0.6s;">Responsive Design</div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing-section">
    <h2 class="section-title">
      <span class="title-word">Choose</span>
      <span class="title-word">Your</span>
      <span class="title-word">Plan</span>
    </h2>
    <div class="pricing-grid">
      <div class="pricing-card">
        <h3 class="pricing-tier">Basic</h3>
        <div class="pricing-amount">
          <span class="currency">$</span>
          <span class="price-number pulse-price">29</span>
          <span class="period">/mo</span>
        </div>
        <ul class="feature-list">
          <li class="feature-item" style="animation-delay: 0s;">✓ 50 Animations</li>
          <li class="feature-item" style="animation-delay: 0.1s;">✓ Basic Support</li>
          <li class="feature-item" style="animation-delay: 0.2s;">✓ 5 Projects</li>
        </ul>
      </div>
      <div class="pricing-card featured">
        <div class="popular-badge">Popular</div>
        <h3 class="pricing-tier">Pro</h3>
        <div class="pricing-amount">
          <span class="currency">$</span>
          <span class="price-number pulse-price">99</span>
          <span class="period">/mo</span>
        </div>
        <ul class="feature-list">
          <li class="feature-item" style="animation-delay: 0s;">✓ Unlimited Animations</li>
          <li class="feature-item" style="animation-delay: 0.1s;">✓ Priority Support</li>
          <li class="feature-item" style="animation-delay: 0.2s;">✓ Unlimited Projects</li>
          <li class="feature-item" style="animation-delay: 0.3s;">✓ Advanced Effects</li>
        </ul>
      </div>
      <div class="pricing-card">
        <h3 class="pricing-tier">Enterprise</h3>
        <div class="pricing-amount">
          <span class="price-number pulse-price">Custom</span>
        </div>
        <ul class="feature-list">
          <li class="feature-item" style="animation-delay: 0s;">✓ Everything in Pro</li>
          <li class="feature-item" style="animation-delay: 0.1s;">✓ Custom Integration</li>
          <li class="feature-item" style="animation-delay: 0.2s;">✓ Dedicated Support</li>
          <li class="feature-item" style="animation-delay: 0.3s;">✓ SLA Guarantee</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="faq-section">
    <h2 class="section-title">
      <span class="title-word">Frequently</span>
      <span class="title-word">Asked</span>
      <span class="title-word">Questions</span>
    </h2>
    <div class="faq-list">
      <details class="faq-item">
        <summary class="faq-question">What is Kinetic Typography?</summary>
        <p class="faq-answer">Kinetic typography is a motion graphics technique that uses moving text to capture attention and express ideas.</p>
      </details>
      <details class="faq-item">
        <summary class="faq-question">How does it improve user engagement?</summary>
        <p class="faq-answer">Animated text creates visual interest, guides attention, and makes content more memorable and engaging.</p>
      </details>
      <details class="faq-item">
        <summary class="faq-question">Is it mobile-friendly?</summary>
        <p class="faq-answer">Yes, all animations are optimized for mobile devices with reduced motion support for accessibility.</p>
      </details>
      <details class="faq-item">
        <summary class="faq-question">What browsers are supported?</summary>
        <p class="faq-answer">All modern browsers including Chrome, Firefox, Safari, and Edge with full CSS animation support.</p>
      </details>
      <details class="faq-item">
        <summary class="faq-question">Can I customize the animations?</summary>
        <p class="faq-answer">Absolutely! Our API provides full control over timing, easing, colors, and motion paths.</p>
      </details>
    </div>
  </section>

  <!-- Footer CTA -->
  <section class="footer-cta">
    <h2 class="cta-title">
      <span class="cta-word">Start</span>
      <span class="cta-word">Creating</span>
      <span class="cta-word">Today</span>
    </h2>
    <div class="email-signup">
      <input type="email" class="email-input" placeholder="Enter your email">
      <button class="submit-button">Subscribe</button>
    </div>
    <div class="social-icons">
      <a href="javascript:void(0)" class="social-icon">Twitter</a>
      <a href="javascript:void(0)" class="social-icon">GitHub</a>
      <a href="javascript:void(0)" class="social-icon">Discord</a>
    </div>
  </section>

  <!-- JavaScript for Counter Animation -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const counters = document.querySelectorAll('.count-up');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current);
          }
        }, 20);
      });
    });
  </script>
`;

export const fullPageStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #000;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    overflow-x: hidden;
  }

  /* Hero Section */
  .hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  }

  .hero-title {
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 900;
    margin-bottom: 2rem;
    display: flex;
    gap: 0.2em;
  }

  .hero-letter {
    display: inline-block;
    animation: hero-bounce 2s ease-in-out infinite, gradient-flow 3s ease infinite;
    background: linear-gradient(45deg, #3b82f6, #ec4899, #fbbf24, #10b981);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes hero-bounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-30px) rotate(-5deg); }
    75% { transform: translateY(-15px) rotate(5deg); }
  }

  @keyframes gradient-flow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .hero-subtitle {
    font-size: clamp(1.2rem, 3vw, 2rem);
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 3rem;
  }

  .typewriter {
    display: inline-block;
  }

  .cursor {
    display: inline-block;
    animation: blink 1s step-end infinite;
    color: #3b82f6;
    margin-left: 0.1em;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .cta-button {
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
  }

  .cta-button:hover .cta-text {
    animation: text-jump 0.5s ease;
  }

  @keyframes text-jump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  /* Stats Section */
  .stats-section {
    padding: 5rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .stat-card {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-10px);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
  }

  .stat-number {
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, #3b82f6, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }

  .stat-unit {
    font-size: 2rem;
    opacity: 0.7;
  }

  .stat-label {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* Demo Section */
  .demo-section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    text-align: center;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .title-word {
    display: inline-block;
    animation: word-appear 1s ease-out both;
  }

  @keyframes word-appear {
    from {
      opacity: 0;
      transform: translateY(30px) rotateX(-90deg);
    }
    to {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }
  }

  .demo-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .demo-box {
    width: 100%;
    max-width: 600px;
    padding: 3rem;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.2));
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .demo-text-line {
    display: flex;
    gap: 0.5rem;
  }

  .demo-char {
    font-size: 3rem;
    font-weight: 900;
    display: inline-block;
    animation: char-wave 2s ease-in-out infinite;
  }

  .demo-char:nth-child(1) { animation-delay: 0s; color: #3b82f6; }
  .demo-char:nth-child(2) { animation-delay: 0.1s; color: #ec4899; }
  .demo-char:nth-child(3) { animation-delay: 0.2s; color: #fbbf24; }
  .demo-char:nth-child(4) { animation-delay: 0.3s; color: #10b981; }
  .demo-char:nth-child(5) { animation-delay: 0.4s; color: #8b5cf6; }
  .demo-char:nth-child(6) { animation-delay: 0.5s; color: #f59e0b; }

  @keyframes char-wave {
    0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
    25% { transform: translateY(-20px) rotate(-10deg) scale(1.2); }
    50% { transform: translateY(0) rotate(0deg) scale(1); }
    75% { transform: translateY(-10px) rotate(10deg) scale(1.1); }
  }

  .feature-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .feature-tag {
    padding: 0.8rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    font-size: 1rem;
    animation: tag-fade-in 0.5s ease-out both;
  }

  @keyframes tag-fade-in {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Pricing Section */
  .pricing-section {
    padding: 5rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .pricing-card {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2.5rem;
    position: relative;
    transition: all 0.3s ease;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
  }

  .pricing-card.featured {
    border-color: #3b82f6;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
  }

  .popular-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
    animation: badge-pulse 2s ease-in-out infinite;
  }

  @keyframes badge-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .pricing-tier {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

  .pricing-amount {
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
    margin: 2rem 0;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.2rem;
  }

  .pulse-price {
    animation: price-pulse 2s ease-in-out infinite;
    background: linear-gradient(135deg, #3b82f6, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes price-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .currency, .period {
    font-size: 1.5rem;
    opacity: 0.6;
  }

  .feature-list {
    list-style: none;
    margin-top: 2rem;
  }

  .feature-item {
    padding: 0.8rem 0;
    font-size: 1.1rem;
    animation: feature-slide-in 0.5s ease-out both;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  @keyframes feature-slide-in {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* FAQ Section */
  .faq-section {
    padding: 5rem 2rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .faq-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .faq-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.5);
  }

  .faq-question {
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-question::after {
    content: '+';
    font-size: 2rem;
    transition: transform 0.3s ease;
  }

  .faq-item[open] .faq-question::after {
    transform: rotate(45deg);
  }

  .faq-answer {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    animation: answer-slide-down 0.3s ease-out;
  }

  @keyframes answer-slide-down {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Footer CTA */
  .footer-cta {
    padding: 5rem 2rem;
    text-align: center;
    background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.1));
  }

  .cta-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 900;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cta-word {
    display: inline-block;
    animation: cta-word-float 3s ease-in-out infinite;
    text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }

  .cta-word:nth-child(1) { animation-delay: 0s; }
  .cta-word:nth-child(2) { animation-delay: 0.2s; }
  .cta-word:nth-child(3) { animation-delay: 0.4s; }

  @keyframes cta-word-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .email-signup {
    display: flex;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto 3rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .email-input {
    flex: 1;
    min-width: 250px;
    padding: 1.2rem 1.5rem;
    font-size: 1.1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: white;
    transition: all 0.3s ease;
  }

  .email-input:focus {
    outline: none;
    border-color: #3b82f6;
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
  }

  .email-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .submit-button {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .submit-button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  }

  .social-icons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 3rem;
  }

  .social-icon {
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    animation: icon-bounce 2s ease-in-out infinite;
  }

  .social-icon:nth-child(1) { animation-delay: 0s; }
  .social-icon:nth-child(2) { animation-delay: 0.2s; }
  .social-icon:nth-child(3) { animation-delay: 0.4s; }

  @keyframes icon-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .social-icon:hover {
    background: rgba(59, 130, 246, 0.3);
    border-color: #3b82f6;
    transform: scale(1.1) translateY(-5px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }

    .stats-section {
      grid-template-columns: 1fr;
    }

    .pricing-grid {
      grid-template-columns: 1fr;
    }

    .section-title {
      font-size: 2rem;
    }

    .email-signup {
      flex-direction: column;
    }

    .social-icons {
      flex-direction: column;
      align-items: center;
    }
  }

  /* Accessibility: Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
