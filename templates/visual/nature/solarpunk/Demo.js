// Solarpunk Eco-Tech Demo (重新設計版)
// 太阳庞克 - 绿能未来生态科技
// 設計理念：科技森林 + 未來城市景觀 + 有機植物元素

export const demoHTML = `
  <div class="solarpunk-mini">
    <!-- 裝飾性藤蔓葉片（四角） -->
    <div class="vine-leaf vine-top-left">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 30 Q15 20 20 10 Q18 15 20 20 Q22 18 30 10"
              stroke="rgba(106, 168, 79, 0.7)"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"/>
        <ellipse cx="22" cy="15" rx="6" ry="10"
                 fill="rgba(106, 168, 79, 0.4)"
                 transform="rotate(30 22 15)"/>
      </svg>
    </div>

    <div class="vine-leaf vine-top-right">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M30 30 Q25 20 20 10 Q22 15 20 20 Q18 18 10 10"
              stroke="rgba(106, 168, 79, 0.7)"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"/>
        <ellipse cx="18" cy="15" rx="6" ry="10"
                 fill="rgba(106, 168, 79, 0.4)"
                 transform="rotate(-30 18 15)"/>
      </svg>
    </div>

    <div class="vine-leaf vine-bottom-left">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="25" rx="8" ry="12"
                 fill="rgba(106, 168, 79, 0.5)"
                 transform="rotate(45 20 25)"/>
      </svg>
    </div>

    <div class="vine-leaf vine-bottom-right">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="25" rx="8" ry="12"
                 fill="rgba(106, 168, 79, 0.5)"
                 transform="rotate(-45 20 25)"/>
      </svg>
    </div>

    <!-- 中央六邊形太陽能面板 -->
    <div class="hexagon-panel">
      <div class="hexagon-glow"></div>
      <svg class="hexagon-icon" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <!-- 太陽能電池網格 -->
        <line x1="30" y1="15" x2="30" y2="45" stroke="rgba(212, 175, 55, 0.6)" stroke-width="1"/>
        <line x1="15" y1="30" x2="45" y2="30" stroke="rgba(212, 175, 55, 0.6)" stroke-width="1"/>
        <line x1="20" y1="20" x2="40" y2="40" stroke="rgba(212, 175, 55, 0.4)" stroke-width="0.5"/>
        <line x1="40" y1="20" x2="20" y2="40" stroke="rgba(212, 175, 55, 0.4)" stroke-width="0.5"/>

        <!-- 中央能量核心 -->
        <circle cx="30" cy="30" r="8" fill="rgba(212, 175, 55, 0.3)" stroke="#d4af37" stroke-width="2"/>
        <circle cx="30" cy="30" r="4" fill="#d4af37"/>

        <!-- 能量脈衝環 -->
        <circle cx="30" cy="30" r="12" fill="none" stroke="rgba(212, 175, 55, 0.5)" stroke-width="1" class="pulse-ring"/>
      </svg>
    </div>

    <!-- 簡潔標籤 -->
    <div class="panel-label">SOLAR</div>
  </div>
`;

export const customStyles = `
  /* 根容器 - 科技森林背景 */
  .solarpunk-mini {
    aspect-ratio: 1 / 1;  /* 確保正方形 */
    width: 100%;
    background: linear-gradient(180deg, #1a3a0f 0%, #2d5016 50%, #1e3a2e 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.4);
  }

  /* 掃描線效果（微妙的科技感） */
  .solarpunk-mini::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.3) 50%,
      transparent 100%);
    animation: scan 5s linear infinite;
  }

  @keyframes scan {
    0% { transform: translateY(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(300px); opacity: 0; }
  }

  /* 藤蔓葉片基礎樣式 */
  .vine-leaf {
    position: absolute;
    width: 40px;
    height: 40px;
    opacity: 0.6;
    z-index: 1;
  }

  .vine-top-left {
    top: 8%;
    left: 8%;
    animation: float-slow 6s ease-in-out infinite;
  }

  .vine-top-right {
    top: 8%;
    right: 8%;
    animation: float-slow 6s ease-in-out infinite 1s;
  }

  .vine-bottom-left {
    bottom: 8%;
    left: 8%;
    animation: float-slow 6s ease-in-out infinite 2s;
  }

  .vine-bottom-right {
    bottom: 8%;
    right: 8%;
    animation: float-slow 6s ease-in-out infinite 3s;
  }

  @keyframes float-slow {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-5px) rotate(5deg);
    }
  }

  /* 六邊形太陽能面板 */
  .hexagon-panel {
    width: 140px;
    height: 140px;
    background: rgba(74, 124, 60, 0.6);
    backdrop-filter: blur(10px);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border: 2px solid #d4af37;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pulse 3s ease-in-out infinite;
    box-shadow:
      0 0 30px rgba(212, 175, 55, 0.4),
      inset 0 0 40px rgba(212, 175, 55, 0.1);
  }

  /* 脈衝動畫（能量流動感） */
  @keyframes pulse {
    0%, 100% {
      box-shadow:
        0 0 30px rgba(212, 175, 55, 0.4),
        inset 0 0 40px rgba(212, 175, 55, 0.1);
      transform: scale(1);
    }
    50% {
      box-shadow:
        0 0 50px rgba(212, 175, 55, 0.8),
        inset 0 0 60px rgba(212, 175, 55, 0.2);
      transform: scale(1.02);
    }
  }

  /* 六邊形內發光層 */
  .hexagon-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%,
      rgba(212, 175, 55, 0.3) 0%,
      transparent 60%);
    animation: glow-pulse 3s ease-in-out infinite;
  }

  @keyframes glow-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* 六邊形圖標 */
  .hexagon-icon {
    position: relative;
    z-index: 1;
  }

  /* SVG 脈衝環動畫 */
  .pulse-ring {
    animation: ring-pulse 3s ease-in-out infinite;
  }

  @keyframes ring-pulse {
    0%, 100% {
      r: 12px;
      opacity: 1;
    }
    50% {
      r: 16px;
      opacity: 0.3;
    }
  }

  /* 簡潔標籤 */
  .panel-label {
    position: absolute;
    bottom: 15%;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: #e8f5e9;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
    z-index: 3;
    opacity: 0.8;
  }
`;
