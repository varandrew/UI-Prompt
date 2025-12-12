export const demoHTML = `
<div class="particle-demo">
  <div class="particle-container">
    <div class="particle particle-1"></div>
    <div class="particle particle-2"></div>
    <div class="particle particle-3"></div>
    <div class="particle particle-4"></div>
    <div class="particle particle-5"></div>
    <div class="particle particle-6"></div>
    <div class="particle particle-7"></div>
    <div class="particle particle-8"></div>
  </div>
  <div class="particle-info">
    <h3>Particle System</h3>
    <p>粒子系统 / Dynamic Particles</p>
  </div>
</div>
`;

export const customStyles = `
.particle-demo {
  background: radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0f0f1e 100%);
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.particle-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(100, 200, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(100, 200, 255, 0.8);
}

.particle-1 {
  top: 10%;
  left: 20%;
  animation: particleFloat 8s ease-in-out infinite;
}

.particle-2 {
  top: 30%;
  left: 80%;
  animation: particleFloat 10s ease-in-out infinite;
  animation-delay: 1s;
}

.particle-3 {
  top: 50%;
  left: 15%;
  animation: particleFloat 12s ease-in-out infinite;
  animation-delay: 2s;
  background: rgba(200, 100, 255, 0.8);
  box-shadow: 0 0 10px rgba(200, 100, 255, 0.8);
}

.particle-4 {
  top: 70%;
  left: 60%;
  animation: particleFloat 9s ease-in-out infinite;
  animation-delay: 3s;
}

.particle-5 {
  top: 20%;
  left: 50%;
  animation: particleFloat 11s ease-in-out infinite;
  animation-delay: 4s;
  background: rgba(100, 255, 200, 0.8);
  box-shadow: 0 0 10px rgba(100, 255, 200, 0.8);
}

.particle-6 {
  top: 80%;
  left: 30%;
  animation: particleFloat 13s ease-in-out infinite;
  animation-delay: 5s;
}

.particle-7 {
  top: 40%;
  left: 70%;
  animation: particleFloat 7s ease-in-out infinite;
  animation-delay: 6s;
  background: rgba(255, 150, 100, 0.8);
  box-shadow: 0 0 10px rgba(255, 150, 100, 0.8);
}

.particle-8 {
  top: 60%;
  left: 40%;
  animation: particleFloat 14s ease-in-out infinite;
  animation-delay: 7s;
}

.particle-info {
  text-align: center;
  color: white;
  z-index: 10;
}

.particle-info h3 {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.particle-info p {
  font-size: 16px;
  margin: 0;
  opacity: 0.9;
}

@keyframes particleFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.8;
  }
  25% {
    transform: translate(50px, -50px) scale(1.2);
    opacity: 1;
  }
  50% {
    transform: translate(-30px, -80px) scale(0.8);
    opacity: 0.6;
  }
  75% {
    transform: translate(70px, -40px) scale(1.1);
    opacity: 0.9;
  }
}

@media (max-width: 768px) {
  .particle-info h3 { font-size: 36px; }
  .particle { width: 4px; height: 4px; }
}
`;
