// ✅ Simplified: demo HTML/CSS now embedded directly

export const minimalismDemoHTML = `
  <div class="min-demo-container">
    <!-- 裝飾线條 -->
    <div class="min-demo-line-accent"></div>

    <!-- 主內容区 -->
    <div class="min-demo-content">
      <div class="min-demo-meta">2025</div>
      <h1 class="min-demo-heading">
        <span class="min-demo-heading-light">Simplicity</span>
        <span class="min-demo-heading-bold">Refined</span>
      </h1>
      <p class="min-demo-description">Pure Design · Perfect Experience</p>
    </div>

    <!-- 底部裝飾元素 -->
    <div class="min-demo-footer">
      <div class="min-demo-dot"></div>
      <div class="min-demo-footer-line"></div>
    </div>
  </div>
`;

export const minimalismDemoStyles = `
  .min-demo-container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 320px;
    background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem;
    overflow: hidden;
  }

  /* 頂部裝飾线 */
  .min-demo-line-accent {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 1px;
    background: #000;
    opacity: 0.2;
  }

  .min-demo-line-accent::before,
  .min-demo-line-accent::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background: #000;
    border-radius: 50%;
    top: -1px;
  }

  .min-demo-line-accent::before {
    left: -8px;
  }

  .min-demo-line-accent::after {
    right: -8px;
  }

  /* 主內容区 */
  .min-demo-content {
    text-align: center;
    z-index: 1;
  }

  .min-demo-meta {
    font-size: 0.625rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: #999;
    margin-bottom: 2rem;
    opacity: 0.6;
  }

  .min-demo-heading {
    font-size: 3rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .min-demo-heading-light {
    font-weight: 200;
    color: #666;
    letter-spacing: 0.05em;
  }

  .min-demo-heading-bold {
    font-weight: 600;
    color: #000;
    letter-spacing: -0.02em;
  }

  .min-demo-description {
    font-size: 0.875rem;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.15em;
    opacity: 0.8;
  }

  /* 底部裝飾元素 */
  .min-demo-footer {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .min-demo-dot {
    width: 4px;
    height: 4px;
    background: #000;
    border-radius: 50%;
    opacity: 0.3;
  }

  .min-demo-footer-line {
    width: 60px;
    height: 1px;
    background: #000;
    opacity: 0.2;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .min-demo-heading {
      font-size: 2rem;
    }
  }
`;

export const demo = {
  id: 'core-minimalism-demo',
  title: 'styles.core.minimalism.demo.title',
  description: 'styles.core.minimalism.demo.description',
  demoHTML: minimalismDemoHTML,
  customStyles: minimalismDemoStyles,
}

