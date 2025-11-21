// Scroll Narrative - StyleCard Preview Demo
// 滾動敘事風格 - 卡片預覽

export const demoHTML = `
  <div class="scroll-narrative-mini">
    <!-- Top Progress Indicator -->
    <div class="story-progress-bar">
      <div class="story-progress"></div>
    </div>

    <!-- Scrollable Story Content -->
    <div class="story-container">
      <!-- Chapter 1: Beginning -->
      <div class="story-section section-1">
        <div class="story-number">01</div>
        <div class="story-title">Beginning</div>
        <div class="story-line"></div>
      </div>

      <!-- Chapter 2: Journey -->
      <div class="story-section section-2">
        <div class="story-number">02</div>
        <div class="story-title">Journey</div>
        <div class="story-line"></div>
      </div>

      <!-- Chapter 3: Climax -->
      <div class="story-section section-3">
        <div class="story-number">03</div>
        <div class="story-title">Climax</div>
        <div class="story-line"></div>
      </div>

      <!-- Chapter 4: Resolution -->
      <div class="story-section section-4">
        <div class="story-number">04</div>
        <div class="story-title">Resolution</div>
        <div class="story-line"></div>
      </div>

      <!-- Chapter 5: The End -->
      <div class="story-section section-5">
        <div class="story-number">05</div>
        <div class="story-title">The End</div>
        <div class="story-icon">✨</div>
      </div>
    </div>

    <!-- Scroll Hint -->
    <div class="scroll-hint">
      <span class="hint-text">Scroll to tell story</span>
      <span class="hint-arrow">↓</span>
    </div>
  </div>
`;

export const customStyles = `
  /* ==================== CSS VARIABLES ==================== */
  :root {
    --sn-bg-start: #0a0e1a;
    --sn-bg-mid: #050810;
    --sn-bg-end: #0d0a1f;
    --sn-primary: #a855f7;
    --sn-secondary: #f472b6;
    --sn-accent: #22d3ee;
    --sn-text: #ffffff;
    --sn-progress-shadow: rgba(168, 85, 247, 0.8);
  }

  /* ==================== CONTAINER ==================== */
  .scroll-narrative-mini {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      var(--sn-bg-start) 0%,
      var(--sn-bg-mid) 50%,
      var(--sn-bg-end) 100%
    );
    border-radius: 0.5rem;
    overflow: hidden;
  }

  /* ==================== PROGRESS BAR ==================== */
  .story-progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: rgba(0, 0, 0, 0.3);
    z-index: 20;
    overflow: hidden;
  }

  .story-progress {
    height: 100%;
    width: 30%;  /* Static demo progress */
    background: linear-gradient(
      90deg,
      var(--sn-primary),
      var(--sn-secondary),
      var(--sn-accent)
    );
    box-shadow: 0 0 20px var(--sn-progress-shadow);
    animation: progress-pulse 3s ease-in-out infinite;
  }

  @keyframes progress-pulse {
    0%, 100% {
      width: 30%;
      box-shadow: 0 0 20px var(--sn-progress-shadow);
    }
    50% {
      width: 70%;
      box-shadow: 0 0 30px rgba(244, 114, 182, 0.9);
    }
  }

  /* ==================== STORY CONTAINER ==================== */
  .story-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 3rem 1.5rem;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .story-container::-webkit-scrollbar {
    display: none;
  }

  /* ==================== STORY SECTIONS ==================== */
  .story-section {
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 3rem;
    opacity: 0.9;
    transform: scale(0.98);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .story-section:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  /* ==================== STORY NUMBER ==================== */
  .story-number {
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--sn-primary), var(--sn-secondary));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    line-height: 1;
    opacity: 0.9;
    transition: all 0.6s ease;
    filter: drop-shadow(0 0 25px var(--sn-progress-shadow));
  }

  .story-section:hover .story-number {
    opacity: 1;
    transform: scale(1.15);
    filter: drop-shadow(0 0 40px var(--sn-primary));
  }

  /* ==================== STORY TITLE ==================== */
  .story-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--sn-text);
    text-align: center;
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
    opacity: 0.85;
    transition: all 0.6s ease;
    text-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
  }

  .story-section:hover .story-title {
    opacity: 1;
    text-shadow: 0 0 25px var(--sn-progress-shadow);
  }

  /* ==================== STORY LINE (連接线) ==================== */
  .story-line {
    width: 3px;
    height: 6rem;
    background: linear-gradient(
      180deg,
      rgba(168, 85, 247, 0.95) 0%,
      rgba(244, 114, 182, 0.85) 50%,
      rgba(34, 211, 238, 0.7) 100%
    );
    position: relative;
    margin-top: 1rem;
    opacity: 0.8;
    transition: all 0.6s ease;
    box-shadow: 0 0 18px rgba(168, 85, 247, 0.7);
  }

  .story-section:hover .story-line {
    opacity: 1;
    box-shadow: 0 0 30px var(--sn-primary);
    transform: scaleX(1.5);
  }

  /* Line Dot */
  .story-line::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #c084fc;
    box-shadow: 0 0 25px rgba(192, 132, 252, 1), 0 0 50px var(--sn-progress-shadow);
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% {
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateX(-50%) scale(1.4);
      opacity: 1;
      box-shadow: 0 0 35px rgba(192, 132, 252, 1), 0 0 70px var(--sn-primary);
    }
  }

  /* Line Arrow */
  .story-line::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 12px solid rgba(244, 114, 182, 0.95);
    filter: drop-shadow(0 0 15px var(--sn-secondary));
  }

  /* ==================== SECTION COLOR VARIATIONS ==================== */
  .section-1 .story-number {
    background: linear-gradient(135deg, #14f195, #22d3ee);
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 0 25px rgba(20, 241, 149, 0.8));
  }

  .section-2 .story-number {
    background: linear-gradient(135deg, #22d3ee, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 0 25px rgba(34, 211, 238, 0.8));
  }

  .section-3 .story-number {
    background: linear-gradient(135deg, #a855f7, #f472b6);
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 0 25px var(--sn-progress-shadow));
  }

  .section-4 .story-number {
    background: linear-gradient(135deg, #f472b6, #fb923c);
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 0 25px rgba(244, 114, 182, 0.8));
  }

  .section-5 .story-number {
    background: linear-gradient(135deg, #fb923c, #fde047);
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 0 25px rgba(251, 146, 60, 0.8));
  }

  /* ==================== FINAL SECTION (Chapter 5) ==================== */
  .section-5 .story-line {
    display: none;
  }

  .story-icon {
    font-size: 3rem;
    margin-top: 1rem;
    animation: story-sparkle 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(251, 146, 60, 0.8));
  }

  @keyframes story-sparkle {
    0%, 100% {
      transform: scale(1) rotate(0deg);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.3) rotate(180deg);
      opacity: 1;
      filter: drop-shadow(0 0 40px rgba(253, 224, 71, 1));
    }
  }

  /* ==================== SCROLL HINT ==================== */
  .scroll-hint {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    z-index: 10;
    pointer-events: none;
  }

  .hint-text {
    font-size: 0.625rem;
    font-weight: 700;
    color: rgba(168, 85, 247, 0.9);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-shadow: 0 0 10px var(--sn-progress-shadow);
  }

  .hint-arrow {
    font-size: 1.5rem;
    color: rgba(168, 85, 247, 0.9);
    animation: hint-bounce 2s ease-in-out infinite;
    filter: drop-shadow(0 0 10px var(--sn-progress-shadow));
  }

  @keyframes hint-bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-4px);
    }
  }

  /* ==================== RESPONSIVE ==================== */
  @media (max-width: 768px) {
    .story-number {
      font-size: 2.5rem;
    }

    .story-title {
      font-size: 1.25rem;
    }

    .story-line {
      height: 4rem;
    }

    .story-section {
      min-height: 35vh;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    .story-number {
      font-size: 2rem;
    }

    .story-title {
      font-size: 1rem;
    }

    .story-line {
      height: 3rem;
    }

    .story-icon {
      font-size: 2rem;
    }
  }
`;
