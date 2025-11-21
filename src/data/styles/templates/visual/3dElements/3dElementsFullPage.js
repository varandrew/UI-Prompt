// Phase 3 Batch 2 - 3D Elements Fullpage
// 从 visualTechStyles.js 遷移

export const visualTech3dElementsFullPageHTML = `
      <!-- 3D Elements Creative Studio Full Page -->
      <div class="studio-3d-page">
        <!-- Header -->
        <header class="header-3d">
          <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="logo-3d">
              <span class="logo-text">STUDIO 3D</span>
            </div>
            <nav class="nav-3d hidden md:flex gap-8">
              <a href="javascript:void(0)" class="nav-link">Home</a>
              <a href="javascript:void(0)" class="nav-link">Portfolio</a>
              <a href="javascript:void(0)" class="nav-link">Services</a>
              <a href="javascript:void(0)" class="nav-link">Team</a>
            </nav>
            <button class="cta-button-3d">Contact</button>
          </div>
        </header>

        <!-- Hero Section with 3D Floating Cubes -->
        <section class="hero-3d">
          <div class="hero-content">
            <h1 class="hero-title">Creative Studio</h1>
            <p class="hero-subtitle">Experience the power of 3D web design</p>
            <button class="hero-cta">Explore Our Work</button>
          </div>
          <div class="hero-cubes">
            <div class="cube-float cube-float-1">
              <div class="cube-3d cube-3d-small">
                <div class="cube-face-3d front-3d"></div>
                <div class="cube-face-3d back-3d"></div>
                <div class="cube-face-3d right-3d"></div>
                <div class="cube-face-3d left-3d"></div>
                <div class="cube-face-3d top-3d"></div>
                <div class="cube-face-3d bottom-3d"></div>
              </div>
            </div>
            <div class="cube-float cube-float-2">
              <div class="cube-3d cube-3d-medium">
                <div class="cube-face-3d front-3d"></div>
                <div class="cube-face-3d back-3d"></div>
                <div class="cube-face-3d right-3d"></div>
                <div class="cube-face-3d left-3d"></div>
                <div class="cube-face-3d top-3d"></div>
                <div class="cube-face-3d bottom-3d"></div>
              </div>
            </div>
            <div class="cube-float cube-float-3">
              <div class="cube-3d cube-3d-large">
                <div class="cube-face-3d front-3d"></div>
                <div class="cube-face-3d back-3d"></div>
                <div class="cube-face-3d right-3d"></div>
                <div class="cube-face-3d left-3d"></div>
                <div class="cube-face-3d top-3d"></div>
                <div class="cube-face-3d bottom-3d"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Stats Dashboard -->
        <section class="stats-section">
          <div class="container mx-auto px-6">
            <div class="stats-grid">
              <div class="stat-card" data-flip="card1">
                <div class="stat-card-inner">
                  <div class="stat-card-front">
                    <div class="stat-number">250+</div>
                    <div class="stat-label">Projects</div>
                  </div>
                  <div class="stat-card-back">
                    <p class="stat-detail">Delivered with excellence and creativity</p>
                  </div>
                </div>
              </div>
              <div class="stat-card" data-flip="card2">
                <div class="stat-card-inner">
                  <div class="stat-card-front">
                    <div class="stat-number">150+</div>
                    <div class="stat-label">Happy Clients</div>
                  </div>
                  <div class="stat-card-back">
                    <p class="stat-detail">Trusted by global brands and startups</p>
                  </div>
                </div>
              </div>
              <div class="stat-card" data-flip="card3">
                <div class="stat-card-inner">
                  <div class="stat-card-front">
                    <div class="stat-number">35+</div>
                    <div class="stat-label">Awards Won</div>
                  </div>
                  <div class="stat-card-back">
                    <p class="stat-detail">Recognized for design excellence worldwide</p>
                  </div>
                </div>
              </div>
              <div class="stat-card" data-flip="card4">
                <div class="stat-card-inner">
                  <div class="stat-card-front">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">Satisfaction</div>
                  </div>
                  <div class="stat-card-back">
                    <p class="stat-detail">Client satisfaction rate based on reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 3D Carousel -->
        <section class="carousel-section">
          <div class="container mx-auto px-6">
            <h2 class="section-title">Featured Projects</h2>
            <div class="carousel-3d">
              <div class="carousel-track">
                <div class="carousel-card">
                  <div class="carousel-card-inner">
                    <div class="card-image card-gradient-1"></div>
                    <div class="card-content">
                      <h3>Project Alpha</h3>
                      <p>3D Interactive Dashboard</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-card">
                  <div class="carousel-card-inner">
                    <div class="card-image card-gradient-2"></div>
                    <div class="card-content">
                      <h3>Project Beta</h3>
                      <p>Immersive Portfolio Site</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-card">
                  <div class="carousel-card-inner">
                    <div class="card-image card-gradient-3"></div>
                    <div class="card-content">
                      <h3>Project Gamma</h3>
                      <p>AR Product Viewer</p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-btn carousel-prev">←</button>
              <button class="carousel-btn carousel-next">→</button>
            </div>
          </div>
        </section>

        <!-- Tabs Component -->
        <section class="tabs-section">
          <div class="container mx-auto px-6">
            <h2 class="section-title">Our Services</h2>
            <div class="tabs-3d">
              <div class="tabs-nav">
                <button class="tab-button active" data-tab="design">Design</button>
                <button class="tab-button" data-tab="development">Development</button>
                <button class="tab-button" data-tab="animation">Animation</button>
              </div>
              <div class="tabs-content">
                <div class="tab-panel active" id="design">
                  <div class="tab-panel-3d">
                    <div class="service-icon">🎨</div>
                    <h3>3D Design Excellence</h3>
                    <p>We create stunning 3D interfaces that captivate and engage your audience with cutting-edge visual design.</p>
                  </div>
                </div>
                <div class="tab-panel" id="development">
                  <div class="tab-panel-3d">
                    <div class="service-icon">⚡</div>
                    <h3>Advanced Development</h3>
                    <p>Leveraging modern web technologies to build performant and scalable 3D web experiences.</p>
                  </div>
                </div>
                <div class="tab-panel" id="animation">
                  <div class="tab-panel-3d">
                    <div class="service-icon">✨</div>
                    <h3>Motion & Animation</h3>
                    <p>Bringing designs to life with smooth animations and interactive 3D transformations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Team Section with Modal Trigger -->
        <section class="team-section">
          <div class="container mx-auto px-6">
            <h2 class="section-title">Meet Our Team</h2>
            <div class="team-grid">
              <div class="team-card" onclick="openModal('member1')">
                <div class="team-card-inner">
                  <div class="team-avatar team-gradient-1">
                    <span class="team-initial">A</span>
                  </div>
                  <h3 class="team-name">Alex Chen</h3>
                  <p class="team-role">Creative Director</p>
                </div>
              </div>
              <div class="team-card" onclick="openModal('member2')">
                <div class="team-card-inner">
                  <div class="team-avatar team-gradient-2">
                    <span class="team-initial">S</span>
                  </div>
                  <h3 class="team-name">Sarah Kim</h3>
                  <p class="team-role">3D Designer</p>
                </div>
              </div>
              <div class="team-card" onclick="openModal('member3')">
                <div class="team-card-inner">
                  <div class="team-avatar team-gradient-3">
                    <span class="team-initial">M</span>
                  </div>
                  <h3 class="team-name">Marcus Lee</h3>
                  <p class="team-role">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Modal -->
        <div id="teamModal" class="modal-3d" onclick="closeModal()">
          <div class="modal-content-3d" onclick="event.stopPropagation()">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <div id="modalBody" class="modal-body">
              <h3>Team Member Details</h3>
              <p>Click on a team member to see their details</p>
            </div>
          </div>
        </div>

        <!-- FAQ Accordion -->
        <section class="faq-section">
          <div class="container mx-auto px-6">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <div class="accordion-3d">
              <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                  <span>What technologies do you use?</span>
                  <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                  <p>We utilize modern CSS 3D transforms, WebGL, Three.js, and React for creating immersive 3D web experiences.</p>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                  <span>How long does a typical project take?</span>
                  <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                  <p>Project timelines vary based on complexity. A standard 3D website takes 4-8 weeks from concept to launch.</p>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                  <span>Do you provide ongoing support?</span>
                  <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                  <p>Yes! We offer comprehensive post-launch support, including maintenance, updates, and performance optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="footer-3d">
          <div class="container mx-auto px-6">
            <div class="footer-social">
              <a href="javascript:void(0)" class="social-icon">
                <span class="icon-3d">📘</span>
              </a>
              <a href="javascript:void(0)" class="social-icon">
                <span class="icon-3d">🐦</span>
              </a>
              <a href="javascript:void(0)" class="social-icon">
                <span class="icon-3d">📷</span>
              </a>
              <a href="javascript:void(0)" class="social-icon">
                <span class="icon-3d">💼</span>
              </a>
            </div>
            <p class="footer-text">© 2025 STUDIO 3D. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <script>
        // Tabs functionality
        document.querySelectorAll('.tab-button').forEach(button => {
          button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tab).classList.add('active');
          });
        });

        // Accordion functionality
        function toggleAccordion(header) {
          const item = header.parentElement;
          const content = header.nextElementSibling;
          const icon = header.querySelector('.accordion-icon');

          item.classList.toggle('active');

          if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.textContent = '−';
          } else {
            content.style.maxHeight = '0';
            icon.textContent = '+';
          }
        }

        // Modal functionality
        function openModal(memberId) {
          const modal = document.getElementById('teamModal');
          const modalBody = document.getElementById('modalBody');

          const members = {
            member1: {
              name: 'Alex Chen',
              role: 'Creative Director',
              bio: '10+ years of experience in 3D design and creative direction. Led award-winning campaigns for Fortune 500 companies.'
            },
            member2: {
              name: 'Sarah Kim',
              role: '3D Designer',
              bio: 'Specialized in immersive 3D experiences. Expert in WebGL, Three.js, and modern design tools.'
            },
            member3: {
              name: 'Marcus Lee',
              role: 'Lead Developer',
              bio: 'Full-stack developer passionate about creating performant 3D web applications. React & TypeScript expert.'
            }
          };

          const member = members[memberId];
          modalBody.innerHTML = \`
            <h3>\${member.name}</h3>
            <p class="modal-role">\${member.role}</p>
            <p class="modal-bio">\${member.bio}</p>
          \`;

          modal.classList.add('active');
        }

        function closeModal() {
          document.getElementById('teamModal').classList.remove('active');
        }

        // Carousel functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-card');

        document.querySelector('.carousel-prev')?.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          updateCarousel();
        });

        document.querySelector('.carousel-next')?.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % slides.length;
          updateCarousel();
        });

        function updateCarousel() {
          const track = document.querySelector('.carousel-track');
          track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
        }

        // Stat cards flip on click
        document.querySelectorAll('.stat-card').forEach(card => {
          card.addEventListener('click', () => {
            card.classList.toggle('flipped');
          });
        });
      </script>
    `;

export const visualTech3dElementsFullPageStyles = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .studio-3d-page {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        overflow-x: hidden;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        background-attachment: fixed;
      }

      .container {
        max-width: 1200px;
      }

      /* ========== HEADER ========== */
      .header-3d {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      .logo-3d {
        perspective: 500px;
      }

      .logo-text {
        font-size: 1.5rem;
        font-weight: 900;
        background: linear-gradient(135deg, #fff, #f0f0f0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transform: rotateY(-10deg);
        display: inline-block;
        transition: transform 0.3s ease;
      }

      .logo-text:hover {
        transform: rotateY(10deg) scale(1.05);
      }

      .nav-3d {
        perspective: 800px;
      }

      .nav-link {
        color: white;
        text-decoration: none;
        font-weight: 600;
        position: relative;
        padding: 0.5rem 1rem;
        transition: all 0.3s ease;
        transform-style: preserve-3d;
      }

      .nav-link:hover {
        transform: translateZ(10px);
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: white;
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      .nav-link:hover::after {
        width: 80%;
      }

      .cta-button-3d {
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
        border: none;
        padding: 0.75rem 2rem;
        border-radius: 50px;
        font-weight: 700;
        cursor: pointer;
        transform-style: preserve-3d;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(245, 87, 108, 0.4);
      }

      .cta-button-3d:hover {
        transform: translateY(-4px) translateZ(20px);
        box-shadow: 0 12px 30px rgba(245, 87, 108, 0.6);
      }

      /* ========== HERO SECTION ========== */
      .hero-3d {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        perspective: 1500px;
        padding-top: 80px;
        overflow: hidden;
      }

      .hero-content {
        text-align: center;
        z-index: 10;
        color: white;
        transform-style: preserve-3d;
      }

      .hero-title {
        font-size: 5rem;
        font-weight: 900;
        margin-bottom: 1rem;
        text-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transform: translateZ(50px);
        animation: hero-fade-in 1s ease-out;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        opacity: 0.95;
        transform: translateZ(30px);
        animation: hero-fade-in 1s ease-out 0.2s backwards;
      }

      .hero-cta {
        background: white;
        color: #667eea;
        border: none;
        padding: 1rem 3rem;
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        transform: translateZ(40px);
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        animation: hero-fade-in 1s ease-out 0.4s backwards;
      }

      .hero-cta:hover {
        transform: translateZ(60px) scale(1.05);
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
      }

      @keyframes hero-fade-in {
        from {
          opacity: 0;
          transform: translateZ(0) translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateZ(var(--z)) translateY(0);
        }
      }

      /* Hero 3D Cubes */
      .hero-cubes {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .cube-float {
        position: absolute;
        animation: float-gentle 6s ease-in-out infinite;
      }

      .cube-float-1 {
        top: 20%;
        left: 15%;
        animation-delay: 0s;
      }

      .cube-float-2 {
        top: 60%;
        right: 20%;
        animation-delay: 2s;
      }

      .cube-float-3 {
        bottom: 15%;
        left: 50%;
        animation-delay: 4s;
      }

      @keyframes float-gentle {
        0%, 100% {
          transform: translateY(0) rotateX(0deg) rotateY(0deg);
        }
        50% {
          transform: translateY(-30px) rotateX(180deg) rotateY(180deg);
        }
      }

      .cube-3d {
        transform-style: preserve-3d;
        animation: rotate-cube 20s linear infinite;
      }

      .cube-3d-small {
        width: 80px;
        height: 80px;
      }

      .cube-3d-medium {
        width: 120px;
        height: 120px;
      }

      .cube-3d-large {
        width: 100px;
        height: 100px;
      }

      @keyframes rotate-cube {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        100% { transform: rotateX(360deg) rotateY(360deg); }
      }

      .cube-face-3d {
        position: absolute;
        opacity: 0.9;
        border: 2px solid rgba(255,255,255,0.3);
        backdrop-filter: blur(5px);
      }

      .cube-3d-small .cube-face-3d {
        width: 80px;
        height: 80px;
      }

      .cube-3d-medium .cube-face-3d {
        width: 120px;
        height: 120px;
      }

      .cube-3d-large .cube-face-3d {
        width: 100px;
        height: 100px;
      }

      .front-3d {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
        transform: translateZ(40px);
      }
      .back-3d {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(20, 184, 166, 0.8));
        transform: rotateY(180deg) translateZ(40px);
      }
      .right-3d {
        background: linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(239, 68, 68, 0.8));
        transform: rotateY(90deg) translateZ(40px);
      }
      .left-3d {
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.8), rgba(234, 179, 8, 0.8));
        transform: rotateY(-90deg) translateZ(40px);
      }
      .top-3d {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(99, 102, 241, 0.8));
        transform: rotateX(90deg) translateZ(40px);
      }
      .bottom-3d {
        background: linear-gradient(135deg, rgba(107, 114, 128, 0.8), rgba(71, 85, 105, 0.8));
        transform: rotateX(-90deg) translateZ(40px);
      }

      .cube-3d-medium .front-3d,
      .cube-3d-medium .back-3d,
      .cube-3d-medium .right-3d,
      .cube-3d-medium .left-3d,
      .cube-3d-medium .top-3d,
      .cube-3d-medium .bottom-3d {
        transform-origin: center;
      }

      .cube-3d-medium .front-3d { transform: translateZ(60px); }
      .cube-3d-medium .back-3d { transform: rotateY(180deg) translateZ(60px); }
      .cube-3d-medium .right-3d { transform: rotateY(90deg) translateZ(60px); }
      .cube-3d-medium .left-3d { transform: rotateY(-90deg) translateZ(60px); }
      .cube-3d-medium .top-3d { transform: rotateX(90deg) translateZ(60px); }
      .cube-3d-medium .bottom-3d { transform: rotateX(-90deg) translateZ(60px); }

      .cube-3d-large .front-3d { transform: translateZ(50px); }
      .cube-3d-large .back-3d { transform: rotateY(180deg) translateZ(50px); }
      .cube-3d-large .right-3d { transform: rotateY(90deg) translateZ(50px); }
      .cube-3d-large .left-3d { transform: rotateY(-90deg) translateZ(50px); }
      .cube-3d-large .top-3d { transform: rotateX(90deg) translateZ(50px); }
      .cube-3d-large .bottom-3d { transform: rotateX(-90deg) translateZ(50px); }

      /* ========== STATS SECTION ========== */
      .stats-section {
        padding: 6rem 0;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        perspective: 1000px;
      }

      .stat-card {
        height: 200px;
        cursor: pointer;
        perspective: 1000px;
      }

      .stat-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
      }

      .stat-card.flipped .stat-card-inner {
        transform: rotateY(180deg);
      }

      .stat-card-front,
      .stat-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
      }

      .stat-card-front {
        background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85));
      }

      .stat-card-back {
        background: linear-gradient(135deg, #667eea, #764ba2);
        transform: rotateY(180deg);
        color: white;
      }

      .stat-number {
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(135deg, #667eea, #f093fb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
      }

      .stat-label {
        font-size: 1.1rem;
        color: #666;
        font-weight: 600;
      }

      .stat-detail {
        text-align: center;
        font-size: 1rem;
        line-height: 1.6;
      }

      /* ========== CAROUSEL SECTION ========== */
      .carousel-section {
        padding: 6rem 0;
      }

      .section-title {
        font-size: 3rem;
        font-weight: 900;
        text-align: center;
        color: white;
        margin-bottom: 3rem;
        text-shadow: 0 10px 30px rgba(0,0,0,0.3);
      }

      .carousel-3d {
        position: relative;
        overflow: hidden;
        padding: 2rem 0;
        perspective: 1200px;
      }

      .carousel-track {
        display: flex;
        transition: transform 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);
      }

      .carousel-card {
        min-width: 100%;
        padding: 0 1rem;
      }

      .carousel-card-inner {
        background: white;
        border-radius: 1.5rem;
        overflow: hidden;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      }

      .carousel-card-inner:hover {
        transform: translateZ(30px) rotateY(5deg);
      }

      .card-image {
        height: 300px;
        background-size: cover;
        background-position: center;
      }

      .card-gradient-1 {
        background: linear-gradient(135deg, #667eea, #764ba2);
      }

      .card-gradient-2 {
        background: linear-gradient(135deg, #f093fb, #f5576c);
      }

      .card-gradient-3 {
        background: linear-gradient(135deg, #4facfe, #00f2fe);
      }

      .card-content {
        padding: 2rem;
      }

      .card-content h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #333;
      }

      .card-content p {
        color: #666;
      }

      .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255,255,255,0.9);
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 10;
      }

      .carousel-btn:hover {
        background: white;
        transform: translateY(-50%) scale(1.1);
      }

      .carousel-prev {
        left: 1rem;
      }

      .carousel-next {
        right: 1rem;
      }

      /* ========== TABS SECTION ========== */
      .tabs-section {
        padding: 6rem 0;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
      }

      .tabs-3d {
        max-width: 800px;
        margin: 0 auto;
      }

      .tabs-nav {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
        perspective: 800px;
      }

      .tab-button {
        background: rgba(255,255,255,0.2);
        color: white;
        border: 2px solid rgba(255,255,255,0.3);
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        transform-style: preserve-3d;
      }

      .tab-button:hover {
        transform: translateZ(10px);
        background: rgba(255,255,255,0.3);
      }

      .tab-button.active {
        background: white;
        color: #667eea;
        transform: translateZ(20px);
      }

      .tabs-content {
        perspective: 1000px;
      }

      .tab-panel {
        display: none;
        animation: tab-fade-in 0.5s ease-out;
      }

      .tab-panel.active {
        display: block;
      }

      @keyframes tab-fade-in {
        from {
          opacity: 0;
          transform: translateY(20px) rotateX(-10deg);
        }
        to {
          opacity: 1;
          transform: translateY(0) rotateX(0deg);
        }
      }

      .tab-panel-3d {
        background: white;
        padding: 3rem;
        border-radius: 1.5rem;
        text-align: center;
        transform-style: preserve-3d;
        box-shadow: 0 20px 60px rgba(0,0,0,0.2);
      }

      .service-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        transform: translateZ(30px);
      }

      .tab-panel-3d h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #333;
        transform: translateZ(20px);
      }

      .tab-panel-3d p {
        font-size: 1.1rem;
        color: #666;
        line-height: 1.8;
        transform: translateZ(10px);
      }

      /* ========== TEAM SECTION ========== */
      .team-section {
        padding: 6rem 0;
      }

      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        perspective: 1000px;
      }

      .team-card {
        cursor: pointer;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
      }

      .team-card:hover {
        transform: translateZ(30px) rotateY(5deg);
      }

      .team-card-inner {
        background: white;
        padding: 2rem;
        border-radius: 1.5rem;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
      }

      .team-avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 0 auto 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: 900;
        color: white;
        transform-style: preserve-3d;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      }

      .team-gradient-1 {
        background: linear-gradient(135deg, #667eea, #764ba2);
      }

      .team-gradient-2 {
        background: linear-gradient(135deg, #f093fb, #f5576c);
      }

      .team-gradient-3 {
        background: linear-gradient(135deg, #4facfe, #00f2fe);
      }

      .team-name {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #333;
      }

      .team-role {
        color: #666;
        font-weight: 600;
      }

      /* ========== MODAL ========== */
      .modal-3d {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.7);
        backdrop-filter: blur(10px);
        z-index: 2000;
        align-items: center;
        justify-content: center;
        perspective: 1500px;
      }

      .modal-3d.active {
        display: flex;
        animation: modal-fade-in 0.3s ease-out;
      }

      @keyframes modal-fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .modal-content-3d {
        background: white;
        padding: 3rem;
        border-radius: 2rem;
        max-width: 500px;
        width: 90%;
        position: relative;
        transform-style: preserve-3d;
        animation: modal-slide-in 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);
        box-shadow: 0 30px 80px rgba(0,0,0,0.4);
      }

      @keyframes modal-slide-in {
        from {
          opacity: 0;
          transform: translateZ(-200px) translateY(50px) rotateX(-20deg);
        }
        to {
          opacity: 1;
          transform: translateZ(0) translateY(0) rotateX(0deg);
        }
      }

      .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
      }

      .modal-close:hover {
        background: #f0f0f0;
        transform: rotate(90deg);
      }

      .modal-body h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #333;
      }

      .modal-role {
        font-weight: 700;
        color: #667eea;
        margin-bottom: 1rem;
      }

      .modal-bio {
        color: #666;
        line-height: 1.8;
      }

      /* ========== FAQ ACCORDION ========== */
      .faq-section {
        padding: 6rem 0;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
      }

      .accordion-3d {
        max-width: 800px;
        margin: 0 auto;
        perspective: 1000px;
      }

      .accordion-item {
        background: white;
        margin-bottom: 1rem;
        border-radius: 1rem;
        overflow: hidden;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      }

      .accordion-item:hover {
        transform: translateZ(10px);
      }

      .accordion-item.active {
        transform: translateZ(20px);
      }

      .accordion-header {
        width: 100%;
        padding: 1.5rem 2rem;
        background: none;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: 700;
        color: #333;
        text-align: left;
        transition: all 0.3s ease;
      }

      .accordion-header:hover {
        background: #f9f9f9;
      }

      .accordion-icon {
        font-size: 1.5rem;
        font-weight: 300;
        transition: transform 0.3s ease;
      }

      .accordion-item.active .accordion-icon {
        transform: rotate(180deg);
      }

      .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }

      .accordion-content p {
        padding: 0 2rem 1.5rem;
        color: #666;
        line-height: 1.8;
      }

      /* ========== FOOTER ========== */
      .footer-3d {
        padding: 4rem 0 2rem;
        text-align: center;
        background: rgba(0,0,0,0.2);
      }

      .footer-social {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 2rem;
        perspective: 800px;
      }

      .social-icon {
        display: inline-block;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
      }

      .social-icon:hover {
        transform: translateZ(20px) rotateY(360deg);
      }

      .icon-3d {
        font-size: 2rem;
        filter: drop-shadow(0 5px 10px rgba(0,0,0,0.2));
      }

      .footer-text {
        color: rgba(255,255,255,0.8);
        font-size: 0.9rem;
      }

      /* ========== RESPONSIVE ========== */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 3rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
        }

        .section-title {
          font-size: 2rem;
        }

        .nav-3d {
          display: none;
        }

        .stats-grid {
          grid-template-columns: 1fr;
        }

        .team-grid {
          grid-template-columns: 1fr;
        }

        .tabs-nav {
          flex-direction: column;
        }

        .carousel-btn {
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
        }
      }
    `;
