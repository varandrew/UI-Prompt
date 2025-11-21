export const demoHTML = `
<div class="liquid-demo">
  <!-- Liquid Background Layer -->
  <div class="liquid-container">
    <div class="liquid-blob liquid-blob-1"></div>
    <div class="liquid-blob liquid-blob-2"></div>
  </div>

  <!-- Content Layer -->
  <div class="liquid-content">
    <!-- Style Title -->
    <h3 class="liquid-title">Liquid Motion</h3>

    <!-- Glassmorphism Tag -->
    <div class="liquid-tag">
      <p>Deep Ocean</p>
    </div>
  </div>
</div>
`;

export const customStyles = `
.liquid-demo {
  background: linear-gradient(135deg, #0a192f 0%, #0d3b66 50%, #112240 100%);
  padding: 48px 32px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Liquid Background Container */
.liquid-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  filter: blur(40px);
  opacity: 0.7;
}

/* Liquid Blobs */
.liquid-blob {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: liquidMorph 20s ease-in-out infinite;
  will-change: transform, border-radius;
}

.liquid-blob-1 {
  width: 550px;
  height: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(0, 229, 255, 0.5) 0%, rgba(0, 229, 255, 0.2) 40%, transparent 70%);
  animation-duration: 20s;
}

.liquid-blob-2 {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(100, 255, 218, 0.4) 0%, rgba(100, 255, 218, 0.15) 40%, transparent 70%);
  animation-duration: 18s;
  animation-delay: 2s;
}

/* Content Layer */
.liquid-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Title */
.liquid-title {
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #ccd6f6 0%, #64ffda 50%, #00e5ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  text-align: center;
}

/* Glassmorphism Tag */
.liquid-tag {
  padding: 10px 24px;
  background: rgba(17, 34, 64, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;
}

.liquid-tag:hover {
  background: rgba(17, 34, 64, 0.6);
  border-color: rgba(100, 255, 218, 0.4);
  box-shadow: 0 8px 24px rgba(0, 229, 255, 0.15);
  transform: translateY(-2px);
}

.liquid-tag p {
  margin: 0;
  font-size: 14px;
  color: #64ffda;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-align: center;
}

/* Keyframe Animations */
@keyframes liquidMorph {
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%;
    transform: translate(-50%, -50%) rotate(90deg) scale(1.08);
  }
  50% {
    border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%;
    transform: translate(-50%, -50%) rotate(180deg) scale(0.95);
  }
  75% {
    border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%;
    transform: translate(-50%, -50%) rotate(270deg) scale(1.05);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .liquid-demo {
    padding: 40px 24px;
    min-height: 450px;
  }

  .liquid-title {
    font-size: 28px;
  }

  .liquid-blob-1 {
    width: 400px;
    height: 400px;
  }

  .liquid-blob-2 {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .liquid-demo {
    padding: 32px 16px;
    min-height: 400px;
  }

  .liquid-title {
    font-size: 24px;
  }

  .liquid-tag {
    padding: 8px 20px;
  }

  .liquid-tag p {
    font-size: 12px;
  }

  .liquid-blob-1 {
    width: 320px;
    height: 320px;
  }

  .liquid-blob-2 {
    width: 240px;
    height: 240px;
  }
}
`;
