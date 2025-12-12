// Dark Academia Family Demo
// 暗黑學院家族演示 UI
// Showcases Dark Academia aesthetic with library, books, and candlelight themes

export const demoHTML = `
  <div class="dark-academia-demo">
    <div class="academia-card">
      <!-- Header with book icon -->
      <div class="academia-header">
        <div class="book-icon">📚</div>
        <h2 class="academia-title">DARK ACADEMIA</h2>
        <div class="academia-subtitle">Knowledge · Literature · Heritage</div>
      </div>

      <!-- Content area -->
      <div class="academia-content">
        <!-- Book shelf illustration -->
        <div class="book-shelf">
          <div class="book book-1"></div>
          <div class="book book-2"></div>
          <div class="book book-3"></div>
          <div class="book book-4"></div>
        </div>

        <!-- Academic quote -->
        <blockquote class="academia-quote">
          "In the library, time is dammed up—not just stopped but saved."
        </blockquote>

        <!-- Candle light indicator -->
        <div class="candle-light">
          <div class="flame"></div>
        </div>
      </div>

      <!-- Footer with seal -->
      <div class="academia-footer">
        <div class="academic-seal">
          <div class="seal-ring"></div>
          <div class="seal-text">EST. 1848</div>
        </div>
      </div>
    </div>
  </div>
`;

export const customStyles = `
  /* CSS Variables */
  .dark-academia-demo {
    --da-dark-brown: #2d2416;
    --da-smoky-brown: #5d4e37;
    --da-parchment: #f4e8c1;
    --da-cream: #f4f1ea;
    --da-gold: #d4a574;
    --da-ink-green: #2c3e2f;
    --da-mid-brown: #8b7355;
  }

  /* Main container */
  .dark-academia-demo {
    min-height: 280px;
    padding: 16px;
    background: linear-gradient(135deg, var(--da-dark-brown) 0%, #1a120a 100%);
    font-family: 'Garamond', 'Georgia', serif;
  }

  /* Card with parchment aesthetic */
  .academia-card {
    background: var(--da-parchment);
    border: 3px solid var(--da-smoky-brown);
    border-radius: 8px;
    box-shadow:
      0 8px 24px rgba(0,0,0,0.4),
      inset 0 0 0 1px rgba(212,165,116,0.3);
    padding: 24px;
  }

  /* Header */
  .academia-header {
    text-align: center;
    padding-bottom: 16px;
    border-bottom: 3px double var(--da-smoky-brown);
    margin-bottom: 20px;
  }

  .book-icon {
    font-size: 32px;
    margin-bottom: 8px;
    opacity: 0.8;
  }

  .academia-title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 4px;
    color: var(--da-dark-brown);
    margin: 0 0 8px 0;
    font-family: 'Times New Roman', serif;
  }

  .academia-subtitle {
    font-size: 11px;
    font-style: italic;
    letter-spacing: 2px;
    color: #6d5d4e;
    opacity: 0.8;
  }

  /* Content area */
  .academia-content {
    padding: 16px 0;
  }

  /* Book shelf */
  .book-shelf {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 8px;
    margin-bottom: 20px;
    padding: 12px;
  }

  .book {
    width: 40px;
    border-radius: 2px;
    background: linear-gradient(to right, var(--da-smoky-brown) 0%, #6d5e47 10%, var(--da-smoky-brown) 20%, #4d3e27 100%);
    border: 2px solid var(--da-dark-brown);
    box-shadow:
      inset 2px 0 4px rgba(0,0,0,0.3),
      2px 2px 6px rgba(0,0,0,0.3);
    transition: transform 0.2s;
  }

  .book:hover {
    transform: translateY(-4px);
  }

  .book-1 { height: 60px; }
  .book-2 { height: 75px; }
  .book-3 { height: 55px; }
  .book-4 { height: 70px; }

  /* Academic quote */
  .academia-quote {
    text-align: center;
    font-size: 13px;
    font-style: italic;
    color: var(--da-dark-brown);
    margin: 0 0 20px 0;
    padding: 12px 16px;
    border-left: 4px solid var(--da-gold);
    background: rgba(212,165,116,0.15);
    line-height: 1.6;
  }

  /* Candle light */
  .candle-light {
    position: relative;
    width: 20px;
    height: 60px;
    background: linear-gradient(to bottom, #d4a574 0%, #8b7355 100%);
    border-radius: 2px 2px 8px 8px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }

  .flame {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 24px;
    background: radial-gradient(
      ellipse at center bottom,
      rgba(255, 200, 50, 0.9) 0%,
      rgba(255, 150, 0, 0.7) 40%,
      transparent 70%
    );
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    animation: flicker 1.5s ease-in-out infinite;
  }

  .flame::after {
    content: '';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 24px;
    background: radial-gradient(
      circle,
      rgba(212, 165, 116, 0.4) 0%,
      rgba(212, 165, 116, 0.2) 30%,
      transparent 70%
    );
    filter: blur(8px);
  }

  @keyframes flicker {
    0%, 100% { opacity: 0.9; transform: translateX(-50%) scale(1); }
    50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
  }

  /* Footer */
  .academia-footer {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid var(--da-smoky-brown);
  }

  /* Academic seal */
  .academic-seal {
    position: relative;
    text-align: center;
    padding: 16px 0;
  }

  .seal-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border: 2px solid var(--da-gold);
    border-radius: 50%;
    opacity: 0.4;
  }

  .seal-ring::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border: 1px solid var(--da-gold);
    border-radius: 50%;
  }

  .seal-text {
    position: relative;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--da-dark-brown);
    opacity: 0.7;
  }
`;

export default { demoHTML, customStyles };
