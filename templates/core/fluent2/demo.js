

export const demoHTML = `
  <div class="fluent2-demo-container">
    <div class="fluent2-demo-card">
      <div class="fluent2-demo-header">
        <div class="fluent2-demo-icon">⊞</div>
        <h4 class="fluent2-demo-title">Fluent 2 Design</h4>
      </div>
      <div class="fluent2-demo-content">
        <p class="fluent2-demo-text">Windows 11 Acrylic Material</p>
        <div class="fluent2-demo-progress-bar">
          <div class="fluent2-demo-progress-fill" style="width: 75%"></div>
        </div>
      </div>
      <div class="fluent2-demo-actions">
        <button class="fluent2-demo-btn primary">Action</button>
        <button class="fluent2-demo-btn secondary">Cancel</button>
      </div>
    </div>
  </div>
`;


export const customStyles = `
  .fluent2-demo-container {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f5f7fa 0%, #e8ebf0 100%);
  }
  .fluent2-demo-card {
    width: 100%;
    max-width: 320px;
    padding: 1.5rem;
    background: rgba(243, 243, 243, 0.7);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  .fluent2-demo-card::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 8px;
    padding: 1px;
    background: linear-gradient(135deg, transparent, rgba(0, 120, 212, 0.6), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .fluent2-demo-card:hover::before {
    opacity: 1;
  }
  .fluent2-demo-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14);
  }
  .fluent2-demo-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  .fluent2-demo-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0078D4;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: 8px;
  }
  .fluent2-demo-title {
    font-size: 16px;
    font-weight: 600;
    color: #242424;
    margin: 0;
  }
  .fluent2-demo-content {
    margin-bottom: 1.5rem;
  }
  .fluent2-demo-text {
    font-size: 14px;
    color: #605E5C;
    margin: 0 0 1rem 0;
  }
  .fluent2-demo-progress-bar {
    height: 6px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    overflow: hidden;
  }
  .fluent2-demo-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #0078D4, #50E6FF);
    border-radius: 3px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .fluent2-demo-actions {
    display: flex;
    gap: 0.5rem;
  }
  .fluent2-demo-btn {
    flex: 1;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  .fluent2-demo-btn.primary {
    background: #0078D4;
    color: white;
  }
  .fluent2-demo-btn.primary:hover {
    background: #106EBE;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }
  .fluent2-demo-btn.secondary {
    background: rgba(0, 0, 0, 0.05);
    color: #242424;
  }
  .fluent2-demo-btn.secondary:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;
