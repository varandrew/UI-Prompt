export const demoHTML = `
<div class="neon-demo">
  <div class="neon-signs">
    <h2 class="neon-text neon-blue">NEON</h2>
    <h2 class="neon-text neon-pink">LIGHTS</h2>
    <h2 class="neon-text neon-green">GLOW</h2>
  </div>
  <div class="neon-info">
    <h3>Neon Lights</h3>
    <p>霓虹灯光 / Electric Glow</p>
  </div>
</div>
`;

export const customStyles = `
.neon-demo {
  background: #0a0a0a;
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.neon-signs {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}

.neon-text {
  font-size: 64px;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin: 0;
  animation: flicker 3s infinite;
}

.neon-blue {
  color: #00f3ff;
  text-shadow:
    0 0 5px #00f3ff,
    0 0 10px #00f3ff,
    0 0 20px #00f3ff,
    0 0 40px #00a8ff,
    0 0 80px #00a8ff,
    0 0 120px #00a8ff;
}

.neon-pink {
  color: #ff006e;
  text-shadow:
    0 0 5px #ff006e,
    0 0 10px #ff006e,
    0 0 20px #ff006e,
    0 0 40px #d90056,
    0 0 80px #d90056,
    0 0 120px #d90056;
  animation-delay: 1s;
}

.neon-green {
  color: #39ff14;
  text-shadow:
    0 0 5px #39ff14,
    0 0 10px #39ff14,
    0 0 20px #39ff14,
    0 0 40px #2bcc0f,
    0 0 80px #2bcc0f,
    0 0 120px #2bcc0f;
  animation-delay: 2s;
}

.neon-info {
  text-align: center;
  color: white;
}

.neon-info h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #00f3ff;
  text-shadow: 0 0 10px #00f3ff;
}

.neon-info p {
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
}

@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.7;
  }
}

/* 霓虹按鈕 */
.neon-button {
  padding: 16px 48px;
  background: transparent;
  border: 2px solid #00f3ff;
  color: #00f3ff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.1em;
  cursor: pointer;
  box-shadow:
    0 0 5px #00f3ff,
    0 0 10px #00f3ff,
    inset 0 0 5px #00f3ff;
  transition: all 0.3s ease;
}

.neon-button:hover {
  background: #00f3ff;
  color: #0a0a0a;
  box-shadow:
    0 0 10px #00f3ff,
    0 0 20px #00f3ff,
    0 0 40px #00f3ff;
}

@media (max-width: 768px) {
  .neon-text { font-size: 40px; }
  .neon-signs { gap: 20px; }
}
`;
