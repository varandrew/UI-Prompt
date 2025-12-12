// Material Design Demo UI - for style card display only
// Showcases Material Design principles: elevation, shadows, material colors

export const materialDesignDemo = {
  id: 'core-material-design-demo',
  title: 'styles.core.material-design.demo.title',
  description: 'styles.core.material-design.demo.description',
  demoHTML: `
    <div class="mat-demo">
      <div class="mat-card">
        <!-- Header with gradient -->
        <div class="mat-header">
          <div class="mat-avatar">M</div>
          <div class="mat-header-text">
            <div class="mat-header-title">Material Design</div>
            <div class="mat-header-subtitle">Google Design System</div>
          </div>
        </div>

        <!-- Content -->
        <div class="mat-content">
          <div class="mat-metric">
            <div class="mat-value">4.8</div>
            <div class="mat-stars">
              <span class="mat-star">★</span>
              <span class="mat-star">★</span>
              <span class="mat-star">★</span>
              <span class="mat-star">★</span>
              <span class="mat-star mat-star--half">★</span>
            </div>
          </div>

          <p class="mat-desc">"Material creates an immersive and responsive experience"</p>

          <!-- Chips -->
          <div class="mat-chips">
            <span class="mat-chip mat-chip--primary">Elevation</span>
            <span class="mat-chip mat-chip--accent">Motion</span>
            <span class="mat-chip mat-chip--secondary">Color</span>
          </div>

          <!-- Actions -->
          <div class="mat-actions">
            <button class="mat-btn mat-btn--raised">GET STARTED</button>
            <button class="mat-btn mat-btn--text">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  `,
  customStyles: `
    /* Material Design Demo Styles */
    .mat-demo {
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 8px;
    }

    .mat-card {
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.08),
        0 4px 12px rgba(0, 0, 0, 0.08);
      transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mat-card:hover {
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.12),
        0 8px 16px rgba(0, 0, 0, 0.12);
    }

    /* Header with gradient */
    .mat-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      color: #ffffff;
    }

    .mat-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 18px;
      backdrop-filter: blur(8px);
    }

    .mat-header-text {
      flex: 1;
    }

    .mat-header-title {
      font-weight: 600;
      font-size: 16px;
      line-height: 1.2;
      margin-bottom: 2px;
    }

    .mat-header-subtitle {
      font-size: 12px;
      opacity: 0.9;
      font-weight: 400;
    }

    /* Content */
    .mat-content {
      padding: 16px;
    }

    /* Metric */
    .mat-metric {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }

    .mat-value {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      line-height: 1;
    }

    .mat-stars {
      display: flex;
      gap: 2px;
    }

    .mat-star {
      color: #ffa726;
      font-size: 16px;
      line-height: 1;
    }

    .mat-star--half {
      opacity: 0.5;
    }

    /* Description */
    .mat-desc {
      margin: 0 0 14px 0;
      font-size: 13px;
      color: #616161;
      line-height: 1.5;
      font-style: italic;
    }

    /* Chips */
    .mat-chips {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .mat-chip {
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 11px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 0.02em;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    }

    .mat-chip--primary {
      background: #1e88e5;
    }

    .mat-chip--accent {
      background: #e91e63;
    }

    .mat-chip--secondary {
      background: #00bcd4;
    }

    /* Actions */
    .mat-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    .mat-btn {
      padding: 10px 16px;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .mat-btn--raised {
      background: #667eea;
      color: #ffffff;
      box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.14),
        0 3px 4px rgba(0, 0, 0, 0.12);
    }

    .mat-btn--raised:hover {
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.18),
        0 6px 8px rgba(0, 0, 0, 0.15);
      transform: translateY(-1px);
    }

    .mat-btn--raised:active {
      box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.14),
        0 3px 4px rgba(0, 0, 0, 0.12);
      transform: translateY(0);
    }

    .mat-btn--text {
      background: transparent;
      color: #667eea;
    }

    .mat-btn--text:hover {
      background: rgba(102, 126, 234, 0.08);
    }
  `,
  fullPageHTML: null,
  fullPageStyles: null,
  previews: []
};

export default materialDesignDemo;
