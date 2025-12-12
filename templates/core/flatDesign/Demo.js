// Flat Design Demo UI - for style card display only
// Showcases flat design principles: solid colors, no shadows, clean typography

export const flatDesignDemo = {
  id: 'core-flat-design-demo',
  title: 'styles.core.flat-design.demo.title',
  description: 'styles.core.flat-design.demo.description',
  demoHTML: `
    <div class="flat-demo">
      <div class="flat-card">
        <!-- Icon area -->
        <div class="flat-icon-wrapper">
          <div class="flat-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="8" width="24" height="24" rx="4" fill="#3498db"/>
              <rect x="12" y="12" width="16" height="3" rx="1.5" fill="white"/>
              <rect x="12" y="18" width="12" height="3" rx="1.5" fill="white"/>
              <rect x="12" y="24" width="8" height="3" rx="1.5" fill="white"/>
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="flat-content">
          <h3 class="flat-title">Flat Design</h3>
          <p class="flat-desc">Clean & minimalist interface with bold colors</p>
        </div>

        <!-- Tags -->
        <div class="flat-tags">
          <span class="flat-tag flat-tag--blue">Clean</span>
          <span class="flat-tag flat-tag--green">Simple</span>
          <span class="flat-tag flat-tag--orange">Bold</span>
        </div>

        <!-- Actions -->
        <div class="flat-actions">
          <button class="flat-btn flat-btn--primary">Explore</button>
          <button class="flat-btn flat-btn--secondary">Learn More</button>
        </div>
      </div>
    </div>
  `,
  customStyles: `
    /* Flat Design Demo Styles */
    .flat-demo {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 8px;
    }

    .flat-card {
      background: #ffffff;
      border: 2px solid #ecf0f1;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
    }

    /* Icon area */
    .flat-icon-wrapper {
      margin-bottom: 16px;
      display: flex;
      justify-content: center;
    }

    .flat-icon {
      width: 64px;
      height: 64px;
      background: #ecf0f1;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Content */
    .flat-content {
      margin-bottom: 16px;
    }

    .flat-title {
      margin: 0 0 8px 0;
      font-size: 20px;
      font-weight: 700;
      color: #2c3e50;
      letter-spacing: -0.02em;
    }

    .flat-desc {
      margin: 0;
      font-size: 13px;
      color: #7f8c8d;
      line-height: 1.5;
    }

    /* Tags */
    .flat-tags {
      display: flex;
      gap: 8px;
      justify-content: center;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .flat-tag {
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .flat-tag--blue {
      background: #3498db;
    }

    .flat-tag--green {
      background: #2ecc71;
    }

    .flat-tag--orange {
      background: #e67e22;
    }

    /* Actions */
    .flat-actions {
      display: flex;
      gap: 8px;
      justify-content: center;
    }

    .flat-btn {
      padding: 10px 16px;
      border: none;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
      letter-spacing: 0.01em;
    }

    .flat-btn:hover {
      opacity: 0.85;
    }

    .flat-btn--primary {
      background: #3498db;
      color: #ffffff;
    }

    .flat-btn--secondary {
      background: #ecf0f1;
      color: #2c3e50;
    }
  `,
  fullPageHTML: null,
  fullPageStyles: null,
  previews: []
};

export default flatDesignDemo;
