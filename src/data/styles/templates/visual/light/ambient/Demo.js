/**
 * Ambient Light - Small Card Demo
 * Redesigned with single-layer structure
 * Pure visual atmosphere - no emoji, minimal text
 */

export const demoHTML = `
<div class="ambient-demo">
  <!-- Background orbs layer -->
  <div class="ambient-orbs">
    <div class="ambient-orb ambient-orb-1"></div>
    <div class="ambient-orb ambient-orb-2"></div>
  </div>

  <!-- Label layer -->
  <div class="ambient-label">Ambient Light</div>
</div>
`;

export const customStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.ambient-demo {
  background: radial-gradient(circle at 50% 50%, #2a1a1f 0%, #1a0f14 100%);
  padding: 48px 32px;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Background orbs container */
.ambient-orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.7;
  will-change: transform;
}

/* Orb 1: Coral Red (Top Left) */
.ambient-orb-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 107, 107, 0.8) 0%,
    rgba(255, 107, 107, 0.4) 40%,
    transparent 70%
  );
  top: 10%;
  left: 10%;
  animation: ambientFloat1 10s ease-in-out infinite;
}

/* Orb 2: Golden Yellow (Bottom Right) */
.ambient-orb-2 {
  width: 180px;
  height: 180px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(254, 202, 87, 0.75) 0%,
    rgba(254, 202, 87, 0.35) 40%,
    transparent 70%
  );
  bottom: 15%;
  right: 15%;
  animation: ambientFloat2 12s ease-in-out infinite;
}

@keyframes ambientFloat1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(20px, -15px) scale(1.05);
    opacity: 0.8;
  }
}

@keyframes ambientFloat2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-15px, 12px) scale(1.06);
    opacity: 0.8;
  }
}

/* Label (centered content) */
.ambient-label {
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(254, 202, 87, 0.2);
  border-radius: 20px;
  padding: 12px 28px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(254, 202, 87, 0.15);
  transition: all 0.3s ease;
}

.ambient-label:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(254, 202, 87, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 202, 87, 0.2);
}

/* Accessibility: Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .ambient-orb {
    animation: none !important;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .ambient-demo {
    padding: 40px 24px;
  }

  .ambient-label {
    padding: 10px 24px;
    font-size: 16px;
  }

  .ambient-orb-1 {
    width: 160px;
    height: 160px;
  }

  .ambient-orb-2 {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 480px) {
  .ambient-demo {
    padding: 32px 16px;
  }

  .ambient-label {
    padding: 8px 20px;
    font-size: 14px;
  }

  .ambient-orb-1 {
    width: 130px;
    height: 130px;
  }

  .ambient-orb-2 {
    width: 110px;
    height: 110px;
  }
}
`;
