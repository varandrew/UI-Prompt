// Aurora Glass 极光玻璃 - Demo UI

export const demoHTML = `
  <div class="aurora-glass-showcase">
    <div class="aurora-glass-card">
      <h3 class="aurora-glass-title">Aurora Glass</h3>
      <p class="aurora-glass-subtitle">极光玻璃 / Colorful Translucency</p>
    </div>
  </div>
`;

export const customStyles = `
  .aurora-glass-showcase {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 48px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aurora-glass-card {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15), rgba(240, 147, 251, 0.15));
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 48px 32px;
    max-width: 400px;
    width: 100%;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .aurora-glass-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.3), 
      rgba(118, 75, 162, 0.3), 
      rgba(240, 147, 251, 0.3),
      rgba(74, 172, 254, 0.3)
    );
    animation: aurora-rotate 15s linear infinite;
    opacity: 0.5;
  }

  @keyframes aurora-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .aurora-glass-title {
    margin: 0 0 8px 0;
    font-size: 32px;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }

  .aurora-glass-subtitle {
    margin: 0;
    font-size: 14px;
    opacity: 0.95;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .aurora-glass-showcase { padding: 24px; }
    .aurora-glass-card { padding: 32px 24px; }
  }
`;
