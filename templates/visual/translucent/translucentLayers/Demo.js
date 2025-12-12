// Translucent Layers 透明层叠 - Demo UI

export const demoHTML = `
  <div class="layers-showcase">
    <div class="layers-container">
      <div class="layer layer-1">
        <span>Layer 1 - 5%</span>
      </div>
      <div class="layer layer-2">
        <span>Layer 2 - 10%</span>
      </div>
      <div class="layer layer-3">
        <span>Layer 3 - 15%</span>
      </div>
    </div>
  </div>
`;

export const customStyles = `
  .layers-showcase {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 48px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .layers-container {
    position: relative;
    width: 100%;
    max-width: 500px;
  }

  .layer {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 24px 32px;
    margin-bottom: 16px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .layer:hover {
    transform: translateX(8px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  }

  .layer-1 {
    background: rgba(255, 255, 255, 0.05);
    z-index: 1;
  }

  .layer-2 {
    background: rgba(255, 255, 255, 0.1);
    z-index: 2;
  }

  .layer-3 {
    background: rgba(255, 255, 255, 0.15);
    z-index: 3;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .layers-showcase { padding: 24px; }
    .layer { padding: 20px 24px; font-size: 14px; }
  }
`;
