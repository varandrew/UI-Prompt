// 3D Space 3D空间家族演示 UI

export const demoHTML = `
<div class="threed-demo">
  <div class="iso-container">
    <div class="iso-box">
      <h3>3D Space</h3>
      <p>3D 空间效果 / 3D Spatial Effect</p>
    </div>
  </div>
</div>
`;

export const customStyles = `
.threed-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.iso-container {
  perspective: 1000px;
}

.iso-box {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 16px;
  padding: 48px;
  color: white;
  text-align: center;
  transform: rotateX(15deg) rotateY(-15deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.iso-box:hover {
  transform: rotateX(0deg) rotateY(0deg);
}

.iso-box h3 {
  margin: 0 0 8px 0;
  font-size: 32px;
  font-weight: 700;
}

.iso-box p {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .threed-demo {
    padding: 24px;
  }

  .iso-box {
    padding: 32px;
  }

  .iso-box h3 {
    font-size: 24px;
  }
}
`;
