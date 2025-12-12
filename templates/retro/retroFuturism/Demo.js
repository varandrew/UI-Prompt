// Retro Futurism Family Demo
// 复古未来主义家族演示 UI

export const demoHTML = `
  <div class="retro-future-demo">
    <div class="terminal-card">
      <div class="terminal-header">
        <span class="terminal-prompt">C:\\></span>
        <span class="terminal-cursor">_</span>
      </div>
      <div class="terminal-content">
        <div class="terminal-line">> SYSTEM ONLINE</div>
        <div class="terminal-line">> LOADING...</div>
        <div class="ascii-border">
          ┌─────────────┐
          │   RETRO     │
          │   FUTURE    │
          └─────────────┘
        </div>
      </div>
      <div class="scanlines"></div>
    </div>
  </div>
`;

export const customStyles = `
  .retro-future-demo {
    --phosphor-green: #00ff00;
    --amber: #ffa500;
    --terminal-black: #000000;
  }

  .retro-future-demo {
    min-height: 280px;
    padding: 16px;
    background: #0a0a0a;
    font-family: 'Courier New', Courier, monospace;
  }

  .terminal-card {
    position: relative;
    background: var(--terminal-black);
    border: 2px solid var(--phosphor-green);
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
  }

  .terminal-header {
    color: var(--phosphor-green);
    font-size: 14px;
    margin-bottom: 16px;
    text-shadow: 0 0 5px var(--phosphor-green);
  }

  .terminal-cursor {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .terminal-content {
    color: var(--phosphor-green);
    font-size: 13px;
    line-height: 1.5;
  }

  .terminal-line {
    text-shadow: 0 0 3px var(--phosphor-green);
    margin-bottom: 8px;
  }

  .ascii-border {
    margin-top: 16px;
    color: var(--amber);
    text-shadow: 0 0 3px var(--amber);
    white-space: pre;
    font-size: 12px;
  }

  .scanlines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 255, 0, 0.05) 0px,
      rgba(0, 255, 0, 0.05) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
  }
`;

export default { demoHTML, customStyles };
