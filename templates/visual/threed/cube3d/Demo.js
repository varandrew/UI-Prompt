export const demoHTML = `
<div class="cube3d-demo">
  <div class="cube-container">
    <div class="cube">
      <div class="cube-face cube-front">Front</div>
      <div class="cube-face cube-back">Back</div>
      <div class="cube-face cube-right">Right</div>
      <div class="cube-face cube-left">Left</div>
      <div class="cube-face cube-top">Top</div>
      <div class="cube-face cube-bottom">Bottom</div>
    </div>
  </div>
  <div class="cube-info">
    <h3>3D Cube</h3>
    <p>立体魔方 / Interactive Rotation</p>
  </div>
</div>
`;

export const customStyles = `
.cube3d-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  perspective: 1200px;
}

.cube-container {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 12s infinite linear;
}

.cube-container:hover {
  animation-play-state: paused;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.cube-front {
  background: rgba(102, 126, 234, 0.8);
  transform: rotateY(0deg) translateZ(100px);
}

.cube-back {
  background: rgba(118, 75, 162, 0.8);
  transform: rotateY(180deg) translateZ(100px);
}

.cube-right {
  background: rgba(240, 147, 251, 0.8);
  transform: rotateY(90deg) translateZ(100px);
}

.cube-left {
  background: rgba(79, 172, 254, 0.8);
  transform: rotateY(-90deg) translateZ(100px);
}

.cube-top {
  background: rgba(142, 45, 226, 0.8);
  transform: rotateX(90deg) translateZ(100px);
}

.cube-bottom {
  background: rgba(67, 233, 123, 0.8);
  transform: rotateX(-90deg) translateZ(100px);
}

.cube-info {
  text-align: center;
  color: white;
}

.cube-info h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.cube-info p {
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
}

@keyframes rotateCube {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(90deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(90deg) rotateY(90deg);
  }
  75% {
    transform: rotateX(0deg) rotateY(180deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(360deg);
  }
}

@media (max-width: 768px) {
  .cube-container { width: 150px; height: 150px; }
  .cube-face { width: 150px; height: 150px; font-size: 18px; }
  .cube-front, .cube-back, .cube-right, .cube-left, .cube-top, .cube-bottom {
    transform: translateZ(75px);
  }
  .cube-back { transform: rotateY(180deg) translateZ(75px); }
  .cube-right { transform: rotateY(90deg) translateZ(75px); }
  .cube-left { transform: rotateY(-90deg) translateZ(75px); }
  .cube-top { transform: rotateX(90deg) translateZ(75px); }
  .cube-bottom { transform: rotateX(-90deg) translateZ(75px); }
}
`;
