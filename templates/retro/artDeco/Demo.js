// Art Deco Family Demo
// 装饰艺术家族演示 UI
// Showcases geometric patterns, golden textures, and gem facets

export const demoHTML = `
  <div class="art-deco-demo">
    <div class="art-deco-card">
      <!-- Header with golden sunburst -->
      <div class="art-deco-header">
        <div class="sunburst"></div>
      </div>

      <!-- Content with geometric patterns -->
      <div class="art-deco-content">
        <!-- Gemstone row -->
        <div class="gem-row">
          <div class="gem gem-1"></div>
          <div class="gem gem-2"></div>
          <div class="gem gem-3"></div>
        </div>

        <!-- Typography sample -->
        <h2 class="art-deco-title">DECO</h2>

        <!-- Fan pattern -->
        <div class="fan-pattern"></div>
      </div>
    </div>
  </div>
`;

export const customStyles = `
  /* CSS Variables */
  .art-deco-demo {
    --gold: #d4af37;
    --gold-light: #f9f295;
    --gold-dark: #aa8929;
    --sapphire: #357abd;
    --black: #1a1a1a;
    --ivory: #fffff0;
  }

  /* Main container */
  .art-deco-demo {
    min-height: 280px;
    padding: 16px;
    background: linear-gradient(135deg, var(--black) 0%, #2a2a2a 100%);
    font-family: Georgia, 'Times New Roman', serif;
  }

  /* Card */
  .art-deco-card {
    background: linear-gradient(to bottom, var(--ivory) 0%, #f5f5dc 100%);
    border: 3px solid var(--gold);
    padding: 24px;
    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
  }

  /* Header */
  .art-deco-header {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .sunburst {
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, var(--gold-light) 0%, var(--gold) 100%);
    clip-path: polygon(
      50% 0%, 55% 35%, 90% 35%, 60% 55%,
      75% 90%, 50% 70%, 25% 90%, 40% 55%,
      10% 35%, 45% 35%
    );
    animation: rotate-sunburst 8s linear infinite;
  }

  @keyframes rotate-sunburst {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Content */
  .art-deco-content {
    text-align: center;
  }

  /* Gemstones */
  .gem-row {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .gem {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #4a90e2 0%, var(--sapphire) 50%, #2a5f8f 100%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation: gem-sparkle 2s ease-in-out infinite;
  }

  .gem-2 {
    animation-delay: 0.3s;
  }

  .gem-3 {
    animation-delay: 0.6s;
  }

  @keyframes gem-sparkle {
    0%, 100% { transform: scale(1); filter: brightness(1); }
    50% { transform: scale(1.15); filter: brightness(1.4); }
  }

  /* Typography */
  .art-deco-title {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: var(--gold);
    text-shadow: 2px 2px 0 var(--black), 4px 4px 8px rgba(212, 175, 55, 0.3);
    margin: 16px 0;
  }

  /* Fan pattern */
  .fan-pattern {
    width: 100%;
    height: 40px;
    background: conic-gradient(
      from 180deg at 50% 100%,
      var(--gold) 0deg 36deg,
      var(--gold-dark) 36deg 72deg,
      var(--gold) 72deg 108deg,
      var(--gold-dark) 108deg 144deg,
      var(--gold) 144deg 180deg
    );
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    margin-top: 16px;
  }
`;

export default { demoHTML, customStyles };
