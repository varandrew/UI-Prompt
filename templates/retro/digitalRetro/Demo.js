// Digital Retro Family Demo
// 数位复古家族演示 UI
// Showcases Terminal CLI, Arcade, Pixel Art, and Vaporwave aesthetics

export const demoHTML = `
  <div class="retro-digital-demo">
    <div class="retro-digital-card">
      <!-- CRT Terminal header -->
      <div class="terminal-header">
        <div class="terminal-toolbar">
          <span class="terminal-btn terminal-close"></span>
          <span class="terminal-btn terminal-min"></span>
          <span class="terminal-btn terminal-max"></span>
        </div>
        <div class="terminal-title">DIGITAL_RETRO.EXE</div>
      </div>

      <!-- Terminal content with scanlines -->
      <div class="terminal-content">
        <div class="terminal-line">
          <span class="terminal-prompt">C:\\RETRO&gt;</span>
          <span class="terminal-text">LOAD "STYLES"</span>
          <span class="terminal-cursor">_</span>
        </div>

        <!-- Pixel art section -->
        <div class="pixel-section">
          <div class="pixel-grid">
            <div class="pixel pixel-1"></div>
            <div class="pixel pixel-2"></div>
            <div class="pixel pixel-3"></div>
            <div class="pixel pixel-4"></div>
            <div class="pixel pixel-5"></div>
            <div class="pixel pixel-6"></div>
            <div class="pixel pixel-7"></div>
            <div class="pixel pixel-8"></div>
          </div>
          <div class="pixel-label">8-BIT DESIGN</div>
        </div>

        <!-- Vaporwave gradient bar -->
        <div class="vaporwave-bar">
          <div class="vaporwave-text">ＡＥＳＴＨＥＴＩＣ</div>
        </div>

        <!-- Arcade score display -->
        <div class="arcade-score">
          <span class="score-label">HIGH SCORE</span>
          <span class="score-value">999999</span>
        </div>
      </div>

      <!-- CRT scanlines overlay -->
      <div class="scanlines"></div>
      <div class="crt-glow"></div>
    </div>
  </div>
`;

export const customStyles = `
  /* CSS Variables */
  .retro-digital-demo {
    --terminal-bg: #0a0a0a;
    --terminal-green: #33ff33;
    --terminal-amber: #ffb000;
    --crt-glow: #00ff41;
    --pixel-pink: #ff006e;
    --pixel-cyan: #00f5ff;
    --pixel-yellow: #ffbe0b;
    --vaporwave-pink: #ff71ce;
    --vaporwave-blue: #01cdfe;
    --vaporwave-purple: #b967ff;
    --arcade-red: #ff0055;
  }

  /* Main container with CRT effect */
  .retro-digital-demo {
    min-height: 300px;
    padding: 16px;
    background:
      radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%);
    font-family: 'Courier New', 'Consolas', monospace;
  }

  /* Card with CRT monitor effect */
  .retro-digital-card {
    position: relative;
    background: var(--terminal-bg);
    border: 4px solid #2a2a2a;
    border-radius: 8px;
    box-shadow:
      0 0 20px rgba(0,255,65,0.3),
      inset 0 0 30px rgba(0,255,65,0.1),
      0 8px 24px rgba(0,0,0,0.6);
    overflow: hidden;
  }

  /* Terminal header */
  .terminal-header {
    background:
      linear-gradient(180deg, #333 0%, #1a1a1a 100%);
    padding: 8px 12px;
    border-bottom: 1px solid #444;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .terminal-toolbar {
    display: flex;
    gap: 6px;
  }

  .terminal-btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  }

  .terminal-close { background: #ff5f56; }
  .terminal-min { background: #ffbd2e; }
  .terminal-max { background: #27c93f; }

  .terminal-title {
    font-size: 11px;
    color: #999;
    letter-spacing: 1px;
  }

  /* Terminal content */
  .terminal-content {
    padding: 16px;
    min-height: 220px;
    position: relative;
  }

  .terminal-line {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 16px;
  }

  .terminal-prompt {
    color: var(--terminal-green);
    font-size: 13px;
    font-weight: 700;
    text-shadow: 0 0 8px var(--crt-glow);
  }

  .terminal-text {
    color: var(--terminal-amber);
    font-size: 13px;
    text-shadow: 0 0 6px var(--terminal-amber);
  }

  .terminal-cursor {
    color: var(--terminal-green);
    animation: cursorBlink 1s step-end infinite;
  }

  @keyframes cursorBlink {
    50% { opacity: 0; }
  }

  /* Pixel art section */
  .pixel-section {
    margin-bottom: 14px;
  }

  .pixel-grid {
    display: grid;
    grid-template-columns: repeat(8, 12px);
    gap: 2px;
    margin-bottom: 6px;
  }

  .pixel {
    width: 12px;
    height: 12px;
    box-shadow: 0 0 4px currentColor;
  }

  .pixel-1 { background: var(--pixel-pink); }
  .pixel-2 { background: var(--pixel-cyan); }
  .pixel-3 { background: var(--pixel-yellow); }
  .pixel-4 { background: var(--pixel-pink); }
  .pixel-5 { background: var(--pixel-cyan); }
  .pixel-6 { background: var(--pixel-yellow); }
  .pixel-7 { background: var(--pixel-pink); }
  .pixel-8 { background: var(--pixel-cyan); }

  .pixel-label {
    font-size: 10px;
    color: var(--terminal-green);
    letter-spacing: 2px;
  }

  /* Vaporwave gradient bar */
  .vaporwave-bar {
    padding: 10px;
    margin-bottom: 14px;
    background:
      linear-gradient(
        90deg,
        var(--vaporwave-pink) 0%,
        var(--vaporwave-purple) 50%,
        var(--vaporwave-blue) 100%
      );
    border-radius: 4px;
    box-shadow:
      0 0 20px rgba(255,113,206,0.5),
      inset 0 1px 0 rgba(255,255,255,0.3);
  }

  .vaporwave-text {
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
    letter-spacing: 4px;
    text-shadow:
      2px 2px 0 rgba(0,0,0,0.5),
      0 0 10px rgba(255,255,255,0.5);
  }

  /* Arcade score display */
  .arcade-score {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background: rgba(255,0,85,0.1);
    border: 2px solid var(--arcade-red);
    border-radius: 4px;
  }

  .score-label {
    font-size: 10px;
    color: var(--arcade-red);
    letter-spacing: 1px;
    text-shadow: 0 0 6px var(--arcade-red);
  }

  .score-value {
    font-size: 18px;
    font-weight: 700;
    color: var(--terminal-amber);
    letter-spacing: 2px;
    text-shadow:
      0 0 10px var(--terminal-amber),
      0 0 20px var(--terminal-amber);
    font-family: 'Courier New', monospace;
  }

  /* CRT scanlines effect */
  .scanlines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.15) 0px,
        rgba(0,0,0,0.15) 1px,
        transparent 1px,
        transparent 2px
      );
    pointer-events: none;
    z-index: 10;
  }

  /* CRT screen glow */
  .crt-glow {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background:
      radial-gradient(
        ellipse at center,
        rgba(0,255,65,0.05) 0%,
        transparent 60%
      );
    pointer-events: none;
    z-index: 5;
    animation: crtFlicker 4s ease-in-out infinite;
  }

  @keyframes crtFlicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.95; }
  }
`;

export default { demoHTML, customStyles };
