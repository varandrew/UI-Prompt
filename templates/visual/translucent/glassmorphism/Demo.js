// Glassmorphism 玻璃态设计 - Visual Demo (Minimal Text)

export const demoHTML = `
  <div class="glass-showcase">
    <!-- 背景彩色圓球（提供內容用於模糊效果） -->
    <div class="bg-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- 主玻璃卡片 -->
    <div class="glass-card">
      <h3 class="glass-title">Glassmorphism</h3>
      <div class="glass-divider"></div>
    </div>

    <!-- 小型玻璃元素 -->
    <div class="glass-pills">
      <div class="glass-pill"></div>
      <div class="glass-pill"></div>
      <div class="glass-pill"></div>
    </div>
  </div>
`;

export const customStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .glass-showcase {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 48px 32px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    gap: 40px;
    position: relative;
    overflow: hidden;
  }

  /* 背景彩色圓球 */
  .bg-orbs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    animation: orb-float 6s ease-in-out infinite;
  }

  .orb-1 {
    width: 220px;
    height: 220px;
    background: linear-gradient(135deg, #ff6b9d 0%, #ffa6c1 100%);
    top: 8%;
    left: 8%;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 180px;
    height: 180px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    bottom: 12%;
    right: 12%;
    animation-delay: 2s;
  }

  .orb-3 {
    width: 140px;
    height: 140px;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    top: 45%;
    right: 18%;
    animation-delay: 4s;
  }

  @keyframes orb-float {
    0%, 100% {
      transform: translateY(0px) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.08);
    }
  }

  /* 主玻璃卡片 */
  .glass-card {
    position: relative;
    width: 100%;
    max-width: 380px;
    padding: 48px 40px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.4s ease;
    z-index: 1;
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s ease;
  }

  .glass-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
    border-color: rgba(255, 255, 255, 0.35);
  }

  .glass-card:hover::before {
    left: 100%;
  }

  .glass-title {
    font-size: 36px;
    font-weight: 700;
    color: white;
    text-align: center;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .glass-divider {
    width: 120px;
    height: 3px;
    margin: 0 auto;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(255, 255, 255, 0.3);
  }

  /* 小型玻璃膠囊元素 */
  .glass-pills {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .glass-pill {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.25);
    transition: all 0.3s ease;
  }

  .glass-pill:nth-child(1) {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .glass-pill:nth-child(2) {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .glass-pill:nth-child(3) {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .glass-pill:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.35);
    border-color: rgba(255, 255, 255, 0.3);
  }

  /* 響應式设計 */
  @media (max-width: 768px) {
    .glass-showcase {
      padding: 40px 24px;
      gap: 32px;
    }

    .glass-card {
      max-width: 100%;
      padding: 40px 32px;
    }

    .glass-title {
      font-size: 30px;
    }

    .orb-1 {
      width: 160px;
      height: 160px;
    }

    .orb-2 {
      width: 130px;
      height: 130px;
    }

    .orb-3 {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    .glass-showcase {
      padding: 32px 16px;
      gap: 28px;
    }

    .glass-card {
      padding: 32px 24px;
    }

    .glass-title {
      font-size: 26px;
      margin-bottom: 20px;
    }

    .glass-divider {
      width: 100px;
      height: 2px;
    }

    .glass-pills {
      gap: 12px;
    }

    .glass-pill {
      width: 50px;
      height: 50px;
    }

    .orb-1,
    .orb-2,
    .orb-3 {
      width: 80px;
      height: 80px;
    }
  }
`;
