export const demoHTML = `
<div class="backlight-demo">
  <div class="backlight-cards">
    <div class="backlight-card backlight-blue">
      <h4>Blue Light</h4>
      <p>藍色背光</p>
    </div>
    <div class="backlight-card backlight-violet">
      <h4>Violet Light</h4>
      <p>紫色背光</p>
    </div>
  </div>
  <div class="backlight-info">
    <h3>Backlight Effect</h3>
    <p>背光效果 / Rim Lighting</p>
  </div>
</div>
`;

export const customStyles = `
.backlight-demo {
  background: #0f0f0f;
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.backlight-cards {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.backlight-card {
  width: 240px;
  height: 300px;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.backlight-card:hover {
  transform: translateY(-10px);
}

.backlight-card::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, transparent 30%, currentColor 50%, transparent 70%);
  border-radius: 20px;
  z-index: -1;
  animation: rotate 4s linear infinite;
}

.backlight-blue {
  color: #3b82f6;
  border: 2px solid rgba(59, 130, 246, 0.3);
}

.backlight-blue::before {
  background: linear-gradient(45deg, transparent 30%, #3b82f6 50%, transparent 70%);
}

.backlight-violet {
  color: #a855f7;
  border: 2px solid rgba(168, 85, 247, 0.3);
}

.backlight-violet::before {
  background: linear-gradient(45deg, transparent 30%, #a855f7 50%, transparent 70%);
}

.backlight-card h4 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: white;
  position: relative;
  z-index: 1;
}

.backlight-card p {
  font-size: 14px;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 1;
}

.backlight-info {
  text-align: center;
  color: white;
}

.backlight-info h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.backlight-info p {
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .backlight-cards { gap: 24px; }
  .backlight-card { width: 200px; height: 260px; }
}
`;
