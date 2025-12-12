// Translucent 透明质感家族演示 UI
// 展示透明层叠效果和玻璃质感

export const demoHTML = `
<div class="translucent-demo">
  <div class="glass-stack">
    <div class="glass-layer layer-1">
      <h3>Layer 1</h3>
      <p>透明度 0.05 / Opacity 0.05</p>
    </div>
    <div class="glass-layer layer-2">
      <h3>Layer 2</h3>
      <p>透明度 0.1 / Opacity 0.1</p>
    </div>
    <div class="glass-layer layer-3">
      <h3>Layer 3</h3>
      <p>透明度 0.15 / Opacity 0.15</p>
    </div>
  </div>
</div>
`;

export const customStyles = `
.translucent-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-stack {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.glass-layer {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  color: white;
  transition: all 0.3s ease;
}

.glass-layer:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
}

.glass-layer h3 {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 600;
}

.glass-layer p {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

.layer-1 {
  background: rgba(255, 255, 255, 0.05);
}

.layer-2 {
  background: rgba(255, 255, 255, 0.1);
}

.layer-3 {
  background: rgba(255, 255, 255, 0.15);
}

/* 响应式 */
@media (max-width: 768px) {
  .translucent-demo {
    padding: 24px;
  }

  .glass-layer {
    padding: 24px;
  }

  .glass-layer h3 {
    font-size: 20px;
  }
}
`;
