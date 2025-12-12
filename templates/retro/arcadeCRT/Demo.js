// Arcade CRT Scanlines Style Demo
// 街機 CRT 掃描线風格演示

export const demoHTML = `
  <div class="crt-demo-container">
    <div class="crt-demo-screen">
      <div class="crt-demo-scanlines"></div>

      <!-- CRT 边框效果 -->
      <div class="crt-demo-bezel">
        <!-- 霓虹 Logo -->
        <div class="crt-demo-logo">
          <span class="rgb-shift-demo">ARCADE</span>
        </div>

        <!-- INSERT COIN 按鈕 -->
        <button class="insert-coin-btn">
          <span class="coin-icon">⬤</span>
          INSERT COIN
        </button>

        <!-- 像素化圖标 -->
        <div class="pixel-icons">
          <div class="pixel-icon">▲</div>
          <div class="pixel-icon">●</div>
          <div class="pixel-icon">■</div>
        </div>

        <!-- 閃爍文字 -->
        <div class="blink-text">PRESS START</div>
      </div>
    </div>
  </div>
`;

export const customStyles = `
  .crt-demo-container {
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow: hidden;
    position: relative;
  }

  .crt-demo-screen {
    position: relative;
    background: rgba(0, 255, 255, 0.05);
    border: 4px solid #00ffff;
    border-radius: 12px;
    padding: 30px 20px;
    box-shadow:
      0 0 20px rgba(0, 255, 255, 0.5),
      0 0 40px rgba(255, 0, 255, 0.3),
      inset 0 0 30px rgba(0, 0, 0, 0.5);
    max-width: 280px;
    width: 100%;
  }

  .crt-demo-scanlines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 50%,
      rgba(0, 0, 0, 0.5) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 10;
    animation: scanline-demo 8s linear infinite;
  }

  @keyframes scanline-demo {
    0% { transform: translateY(0); }
    100% { transform: translateY(4px); }
  }

  .crt-demo-bezel {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .crt-demo-logo {
    font-size: 32px;
    font-weight: bold;
    font-family: 'Courier New', monospace;
  }

  .rgb-shift-demo {
    display: inline-block;
    color: #fff;
    text-shadow:
      2px 0 0 rgba(255, 0, 255, 0.7),
      -2px 0 0 rgba(0, 255, 255, 0.7),
      0 0 10px rgba(255, 255, 0, 0.5);
    animation: rgb-glitch 3s infinite;
  }

  @keyframes rgb-glitch {
    0%, 90%, 100% {
      text-shadow:
        2px 0 0 rgba(255, 0, 255, 0.7),
        -2px 0 0 rgba(0, 255, 255, 0.7),
        0 0 10px rgba(255, 255, 0, 0.5);
    }
    92%, 94%, 96% {
      text-shadow:
        4px 0 0 rgba(255, 0, 255, 0.9),
        -4px 0 0 rgba(0, 255, 255, 0.9),
        0 0 15px rgba(255, 255, 0, 0.8);
    }
  }

  .insert-coin-btn {
    background: linear-gradient(180deg, #ff00ff 0%, #8b008b 100%);
    border: 3px solid #ff00ff;
    color: #fff;
    padding: 12px 24px;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    box-shadow:
      0 0 15px rgba(255, 0, 255, 0.6),
      0 0 30px rgba(255, 0, 255, 0.3),
      inset 0 -2px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.2s;
    animation: neon-pulse-demo 1.5s ease-in-out infinite alternate;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @keyframes neon-pulse-demo {
    from {
      box-shadow:
        0 0 15px rgba(255, 0, 255, 0.6),
        0 0 30px rgba(255, 0, 255, 0.3),
        inset 0 -2px 5px rgba(0, 0, 0, 0.5);
    }
    to {
      box-shadow:
        0 0 25px rgba(255, 0, 255, 0.8),
        0 0 50px rgba(255, 0, 255, 0.5),
        inset 0 -2px 5px rgba(0, 0, 0, 0.3);
    }
  }

  .insert-coin-btn:hover {
    transform: translateY(-2px);
    box-shadow:
      0 0 30px rgba(255, 0, 255, 1),
      0 0 60px rgba(255, 0, 255, 0.6);
  }

  .insert-coin-btn:active {
    transform: translateY(0);
  }

  .coin-icon {
    display: inline-block;
    animation: coin-spin 2s linear infinite;
  }

  @keyframes coin-spin {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.2); }
  }

  .pixel-icons {
    display: flex;
    gap: 15px;
    margin-top: 10px;
  }

  .pixel-icon {
    font-size: 24px;
    color: #00ff41;
    text-shadow:
      0 0 10px #00ff41,
      0 0 20px #00ff41;
    animation: pixel-blink 2s ease-in-out infinite;
  }

  .pixel-icon:nth-child(2) {
    animation-delay: 0.4s;
    color: #00ffff;
    text-shadow:
      0 0 10px #00ffff,
      0 0 20px #00ffff;
  }

  .pixel-icon:nth-child(3) {
    animation-delay: 0.8s;
    color: #ffff00;
    text-shadow:
      0 0 10px #ffff00,
      0 0 20px #ffff00;
  }

  @keyframes pixel-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .blink-text {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #fff;
    text-shadow:
      0 0 10px #00ffff,
      0 0 20px #00ffff;
    animation: blink-demo 1.5s steps(2, start) infinite;
    margin-top: 10px;
  }

  @keyframes blink-demo {
    50% { opacity: 0; }
  }
`;
