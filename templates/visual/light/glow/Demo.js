export const demoHTML = `
<div class="glow-demo">
  <div class="glow-elements">
    <button class="glow-button glow-blue">Blue Glow</button>
    <button class="glow-button glow-purple">Purple Glow</button>
    <button class="glow-button glow-orange">Orange Glow</button>
  </div>
  <div class="glow-info">
    <h3>Glow Effect</h3>
    <p>发光效果 / Luminous Border</p>
  </div>
</div>
`;

export const customStyles = `
.glow-demo {
  background: #1a1a1a;
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.glow-elements {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.glow-button {
  padding: 20px 40px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 2s ease-in-out infinite;
}

.glow-blue {
  background: #1e3a8a;
  color: white;
  box-shadow:
    0 0 10px rgba(59, 130, 246, 0.5),
    0 0 20px rgba(59, 130, 246, 0.3),
    0 0 40px rgba(59, 130, 246, 0.2);
}

.glow-blue:hover {
  background: #2563eb;
  box-shadow:
    0 0 20px rgba(59, 130, 246, 0.8),
    0 0 40px rgba(59, 130, 246, 0.6),
    0 0 80px rgba(59, 130, 246, 0.4);
  transform: translateY(-5px);
}

.glow-purple {
  background: #581c87;
  color: white;
  box-shadow:
    0 0 10px rgba(168, 85, 247, 0.5),
    0 0 20px rgba(168, 85, 247, 0.3),
    0 0 40px rgba(168, 85, 247, 0.2);
  animation-delay: 0.5s;
}

.glow-purple:hover {
  background: #7c3aed;
  box-shadow:
    0 0 20px rgba(168, 85, 247, 0.8),
    0 0 40px rgba(168, 85, 247, 0.6),
    0 0 80px rgba(168, 85, 247, 0.4);
  transform: translateY(-5px);
}

.glow-orange {
  background: #9a3412;
  color: white;
  box-shadow:
    0 0 10px rgba(249, 115, 22, 0.5),
    0 0 20px rgba(249, 115, 22, 0.3),
    0 0 40px rgba(249, 115, 22, 0.2);
  animation-delay: 1s;
}

.glow-orange:hover {
  background: #ea580c;
  box-shadow:
    0 0 20px rgba(249, 115, 22, 0.8),
    0 0 40px rgba(249, 115, 22, 0.6),
    0 0 80px rgba(249, 115, 22, 0.4);
  transform: translateY(-5px);
}

.glow-info {
  text-align: center;
  color: white;
}

.glow-info h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.glow-info p {
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
}

@keyframes pulse {
  0%, 100% {
    box-shadow:
      0 0 10px currentColor,
      0 0 20px currentColor,
      0 0 40px currentColor;
  }
  50% {
    box-shadow:
      0 0 15px currentColor,
      0 0 30px currentColor,
      0 0 60px currentColor;
  }
}

@media (max-width: 768px) {
  .glow-elements { gap: 20px; }
  .glow-button { padding: 16px 32px; font-size: 16px; }
}
`;
