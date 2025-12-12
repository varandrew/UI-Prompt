// Swiss Design Family Demo
// 瑞士设计家族演示 UI
// Showcases grid system, Helvetica typography, and minimal aesthetics

export const demoHTML = `
  <div class="swiss-demo">
    <div class="swiss-card">
      <!-- Header -->
      <div class="swiss-header">
        <div class="swiss-logo">SWISS</div>
        <div class="swiss-accent-line"></div>
      </div>

      <!-- Content -->
      <div class="swiss-content">
        <!-- Grid demonstration -->
        <div class="swiss-grid-preview">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell grid-accent"></div>
          <div class="grid-cell"></div>
        </div>

        <!-- Typography sample -->
        <h2 class="swiss-typo">Helvetica</h2>
        <p class="swiss-text">PRECISION · ORDER · CLARITY</p>
      </div>

      <!-- Footer -->
      <div class="swiss-footer">
        <div class="swiss-footer-line"></div>
      </div>
    </div>
  </div>
`;

export const customStyles = `
  /* CSS Variables */
  .swiss-demo {
    --swiss-black: #000000;
    --swiss-white: #ffffff;
    --swiss-red: #e30613;
    --swiss-gray: #e0e0e0;
  }

  /* Main container */
  .swiss-demo {
    min-height: 280px;
    padding: 16px;
    background: var(--swiss-white);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  /* Card */
  .swiss-card {
    background: var(--swiss-white);
    border: 1px solid var(--swiss-black);
    padding: 24px;
  }

  /* Header */
  .swiss-header {
    margin-bottom: 24px;
  }

  .swiss-logo {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--swiss-black);
    margin-bottom: 12px;
  }

  .swiss-accent-line {
    width: 60px;
    height: 3px;
    background: var(--swiss-red);
  }

  /* Content */
  .swiss-content {
    padding: 20px 0;
  }

  /* Grid preview */
  .swiss-grid-preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-bottom: 24px;
  }

  .grid-cell {
    height: 40px;
    background: var(--swiss-gray);
    border: 1px solid var(--swiss-black);
  }

  .grid-accent {
    background: var(--swiss-red);
  }

  /* Typography */
  .swiss-typo {
    font-size: 32px;
    font-weight: 300;
    letter-spacing: -0.01em;
    color: var(--swiss-black);
    margin: 0 0 12px 0;
  }

  .swiss-text {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.15em;
    color: var(--swiss-black);
    margin: 0;
  }

  /* Footer */
  .swiss-footer {
    margin-top: 24px;
    padding-top: 16px;
  }

  .swiss-footer-line {
    width: 100%;
    height: 1px;
    background: var(--swiss-black);
  }
`;

export default { demoHTML, customStyles };
