// Mouse Tracking Demo Panel - 专用於分类卡片展示
export const mouseTrackingDemo = {
  id: 'interaction-mouse-tracking-demo',
  title: 'styles.interaction.mouseTrackingDemo.title',
  description: 'styles.interaction.mouseTrackingDemo.description',
  demoHTML: `
    <div class="int-demo-container">
      <div class="int-hologram-card">
        <div class="int-hologram-glow"></div>
        <div class="int-card-content">
          <div class="int-neon-text">HOVER</div>
          <div class="int-tech-lines"></div>
        </div>
      </div>
    </div>
  `,
  customStyles: `
    .int-demo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    .int-hologram-card {
      position: relative;
      width: 120px;
      height: 120px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
      border: 1px solid rgba(59, 130, 246, 0.5);
      border-radius: 12px;
      overflow: hidden;
      box-shadow:
        0 0 20px rgba(59, 130, 246, 0.3),
        inset 0 0 20px rgba(59, 130, 246, 0.1);
    }

    .int-hologram-glow {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
      animation: int-glow-pulse 3s ease-in-out infinite;
    }

    .int-card-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 0.5rem;
    }

    .int-neon-text {
      font-size: 1.25rem;
      font-weight: 700;
      color: #60a5fa;
      text-shadow: 0 0 10px rgba(96, 165, 250, 0.8);
      letter-spacing: 0.1em;
    }

    .int-tech-lines {
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #60a5fa, transparent);
      box-shadow: 0 0 8px rgba(96, 165, 250, 0.5);
    }

    @keyframes int-glow-pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }
  `,
  fullPageHTML: null,
  fullPageStyles: null,
  previews: []
};
