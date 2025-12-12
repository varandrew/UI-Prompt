/**
 * Particle System - Enhanced Demo with Connection Lines
 *
 * Features:
 * - 18 dynamic particles (Blue 12, Purple 4, Cyan 2)
 * - Simulated connection lines between particles
 * - Background starfield decoration
 * - Glowing text effects
 * - Fast animation cycles (3-5s)
 * - Responsive design
 */

export const demoHTML = `
<div class="particle-demo-v2">
  <!-- Background glow layer -->
  <div class="particle-bg-glow"></div>

  <!-- Particle container (18 particles) -->
  <div class="particle-container-v2">
    <!-- Blue particles (12) -->
    <div class="particle-v2 p-blue p1"></div>
    <div class="particle-v2 p-blue p2"></div>
    <div class="particle-v2 p-blue p3"></div>
    <div class="particle-v2 p-blue p4"></div>
    <div class="particle-v2 p-blue p5"></div>
    <div class="particle-v2 p-blue p6"></div>
    <div class="particle-v2 p-blue p7"></div>
    <div class="particle-v2 p-blue p8"></div>
    <div class="particle-v2 p-blue p9"></div>
    <div class="particle-v2 p-blue p10"></div>
    <div class="particle-v2 p-blue p11"></div>
    <div class="particle-v2 p-blue p12"></div>

    <!-- Purple particles (4) -->
    <div class="particle-v2 p-purple p13"></div>
    <div class="particle-v2 p-purple p14"></div>
    <div class="particle-v2 p-purple p15"></div>
    <div class="particle-v2 p-purple p16"></div>

    <!-- Cyan particles (2) -->
    <div class="particle-v2 p-cyan p17"></div>
    <div class="particle-v2 p-cyan p18"></div>
  </div>

  <!-- Connection lines layer (simulated with pseudo-elements) -->
  <div class="particle-connections">
    <div class="connection c1"></div>
    <div class="connection c2"></div>
    <div class="connection c3"></div>
    <div class="connection c4"></div>
    <div class="connection c5"></div>
    <div class="connection c6"></div>
    <div class="connection c7"></div>
    <div class="connection c8"></div>
    <div class="connection c9"></div>
    <div class="connection c10"></div>
    <div class="connection c11"></div>
    <div class="connection c12"></div>
  </div>

  <!-- Title and info -->
  <div class="particle-info-v2">
    <h3>Particle System</h3>
    <p>Dynamic Connections Network</p>
  </div>
</div>
`;

export const customStyles = `
/* ==================== Container Base ==================== */
.particle-demo-v2 {
  position: relative;
  background: radial-gradient(circle at 50% 50%, #1a1f3a 0%, #0a0e27 100%);
  padding: 48px 32px;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Background stars (using ::before) */
.particle-demo-v2::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
    radial-gradient(circle at 60% 25%, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 75% 80%, rgba(255, 255, 255, 0.9) 1px, transparent 1px),
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 90% 60%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
    radial-gradient(circle at 40% 90%, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 10% 85%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    radial-gradient(circle at 95% 35%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
    radial-gradient(circle at 65% 55%, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 25% 35%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    radial-gradient(circle at 80% 90%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 45% 40%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
    radial-gradient(circle at 5% 60%, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 70% 12%, rgba(255, 255, 255, 0.9) 1px, transparent 1px),
    radial-gradient(circle at 35% 75%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 88% 45%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
    radial-gradient(circle at 12% 30%, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 55% 85%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    radial-gradient(circle at 92% 70%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 28% 15%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
    radial-gradient(circle at 62% 68%, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 78% 28%, rgba(255, 255, 255, 0.9) 1px, transparent 1px),
    radial-gradient(circle at 18% 95%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 48% 22%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
    radial-gradient(circle at 82% 8%, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 8% 42%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    radial-gradient(circle at 97% 92%, rgba(255, 255, 255, 0.6) 1px, transparent 1px);
  background-size: 100% 100%;
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
}

/* ==================== Background Glow Layer ==================== */
.particle-bg-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: glowPulse 4s ease-in-out infinite;
  pointer-events: none;
  z-index: 2;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

/* ==================== Particle Container ==================== */
.particle-container-v2 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
}

/* ==================== Base Particle Styles ==================== */
.particle-v2 {
  position: absolute;
  border-radius: 50%;
  will-change: transform, opacity;
}

/* Blue particles (default) */
.particle-v2.p-blue {
  background: rgba(0, 212, 255, 0.9);
  box-shadow:
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.5),
    0 0 30px rgba(0, 212, 255, 0.3);
}

/* Purple particles */
.particle-v2.p-purple {
  background: rgba(139, 92, 246, 0.85);
  box-shadow:
    0 0 10px rgba(139, 92, 246, 0.8),
    0 0 20px rgba(139, 92, 246, 0.5),
    0 0 30px rgba(139, 92, 246, 0.3);
}

/* Cyan particles */
.particle-v2.p-cyan {
  background: rgba(34, 211, 238, 0.8);
  box-shadow:
    0 0 10px rgba(34, 211, 238, 0.8),
    0 0 20px rgba(34, 211, 238, 0.5),
    0 0 30px rgba(34, 211, 238, 0.3);
}

/* ==================== Particle Animations (3 variants) ==================== */
@keyframes particleFloat1 {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.9;
  }
  25% {
    transform: translate3d(60px, -80px, 0) scale(1.3);
    opacity: 1;
  }
  50% {
    transform: translate3d(-70px, -100px, 0) scale(0.7);
    opacity: 0.6;
  }
  75% {
    transform: translate3d(80px, -50px, 0) scale(1.1);
    opacity: 0.95;
  }
}

@keyframes particleFloat2 {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.85;
  }
  25% {
    transform: translate3d(-65px, -90px, 0) scale(1.2);
    opacity: 0.95;
  }
  50% {
    transform: translate3d(75px, -110px, 0) scale(0.8);
    opacity: 0.65;
  }
  75% {
    transform: translate3d(-55px, -60px, 0) scale(1.15);
    opacity: 0.9;
  }
}

@keyframes particleFloat3 {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.8;
  }
  25% {
    transform: translate3d(70px, -70px, 0) scale(0.9);
    opacity: 1;
  }
  50% {
    transform: translate3d(-60px, -120px, 0) scale(1.4);
    opacity: 0.55;
  }
  75% {
    transform: translate3d(85px, -55px, 0) scale(1.05);
    opacity: 0.85;
  }
}

/* ==================== Individual Particle Positions & Animations ==================== */
/* Blue particles (1-12) */
.p1 { width: 10px; height: 10px; top: 15%; left: 20%; animation: particleFloat1 4.2s ease-in-out infinite; }
.p2 { width: 8px; height: 8px; top: 25%; left: 75%; animation: particleFloat2 4.8s ease-in-out infinite 0.5s; }
.p3 { width: 12px; height: 12px; top: 45%; left: 12%; animation: particleFloat3 5.1s ease-in-out infinite 1s; }
.p4 { width: 9px; height: 9px; top: 65%; left: 58%; animation: particleFloat1 4.5s ease-in-out infinite 1.5s; }
.p5 { width: 11px; height: 11px; top: 18%; left: 50%; animation: particleFloat2 4.9s ease-in-out infinite 2s; }
.p6 { width: 8px; height: 8px; top: 75%; left: 28%; animation: particleFloat3 5.3s ease-in-out infinite 2.5s; }
.p7 { width: 10px; height: 10px; top: 35%; left: 68%; animation: particleFloat1 4.6s ease-in-out infinite 3s; }
.p8 { width: 9px; height: 9px; top: 55%; left: 38%; animation: particleFloat2 5s ease-in-out infinite 3.5s; }
.p9 { width: 12px; height: 12px; top: 10%; left: 85%; animation: particleFloat3 4.4s ease-in-out infinite 0.3s; }
.p10 { width: 8px; height: 8px; top: 80%; left: 65%; animation: particleFloat1 4.7s ease-in-out infinite 0.8s; }
.p11 { width: 11px; height: 11px; top: 40%; left: 90%; animation: particleFloat2 5.2s ease-in-out infinite 1.3s; }
.p12 { width: 9px; height: 9px; top: 60%; left: 8%; animation: particleFloat3 4.9s ease-in-out infinite 1.8s; }

/* Purple particles (13-16) */
.p13 { width: 10px; height: 10px; top: 30%; left: 42%; animation: particleFloat1 4.8s ease-in-out infinite 2.3s; }
.p14 { width: 11px; height: 11px; top: 70%; left: 80%; animation: particleFloat2 5.1s ease-in-out infinite 2.8s; }
.p15 { width: 9px; height: 9px; top: 12%; left: 35%; animation: particleFloat3 4.5s ease-in-out infinite 3.3s; }
.p16 { width: 12px; height: 12px; top: 50%; left: 52%; animation: particleFloat1 5s ease-in-out infinite 3.8s; }

/* Cyan particles (17-18) */
.p17 { width: 10px; height: 10px; top: 85%; left: 45%; animation: particleFloat2 4.6s ease-in-out infinite 0.6s; }
.p18 { width: 11px; height: 11px; top: 22%; left: 10%; animation: particleFloat3 4.9s ease-in-out infinite 1.1s; }

/* ==================== Connection Lines Layer ==================== */
.particle-connections {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 2;
}

.connection {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
  transform-origin: left center;
  animation: connectionPulse 3s ease-in-out infinite;
}

@keyframes connectionPulse {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.35; }
}

/* Connection line positions (simulated static connections) */
.c1 { width: 180px; top: 18%; left: 20%; transform: rotate(25deg); animation-delay: 0s; }
.c2 { width: 200px; top: 27%; left: 52%; transform: rotate(-15deg); animation-delay: 0.5s; }
.c3 { width: 150px; top: 48%; left: 12%; transform: rotate(35deg); animation-delay: 1s; }
.c4 { width: 160px; top: 58%; left: 38%; transform: rotate(-25deg); animation-delay: 1.5s; }
.c5 { width: 190px; top: 20%; left: 35%; transform: rotate(45deg); animation-delay: 2s; }
.c6 { width: 140px; top: 72%; left: 28%; transform: rotate(-35deg); animation-delay: 2.5s; }
.c7 { width: 170px; top: 38%; left: 50%; transform: rotate(20deg); animation-delay: 0.3s; }
.c8 { width: 155px; top: 65%; left: 60%; transform: rotate(-40deg); animation-delay: 0.8s; }
.c9 { width: 185px; top: 15%; left: 70%; transform: rotate(30deg); animation-delay: 1.3s; }
.c10 { width: 165px; top: 45%; left: 80%; transform: rotate(-20deg); animation-delay: 1.8s; }
.c11 { width: 175px; top: 55%; left: 10%; transform: rotate(40deg); animation-delay: 2.3s; }
.c12 { width: 145px; top: 75%; left: 50%; transform: rotate(-30deg); animation-delay: 2.8s; }

/* ==================== Title & Info ==================== */
.particle-info-v2 {
  position: relative;
  text-align: center;
  color: white;
  z-index: 10;
  pointer-events: none;
}

.particle-info-v2 h3 {
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.2;
  color: #fff;
  text-shadow:
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.6),
    0 0 40px rgba(0, 212, 255, 0.4),
    0 0 80px rgba(0, 212, 255, 0.2);
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% {
    text-shadow:
      0 0 10px rgba(0, 212, 255, 0.8),
      0 0 20px rgba(0, 212, 255, 0.6),
      0 0 40px rgba(0, 212, 255, 0.4),
      0 0 80px rgba(0, 212, 255, 0.2);
  }
  50% {
    text-shadow:
      0 0 15px rgba(0, 212, 255, 1),
      0 0 30px rgba(0, 212, 255, 0.8),
      0 0 60px rgba(0, 212, 255, 0.6),
      0 0 120px rgba(0, 212, 255, 0.3);
  }
}

.particle-info-v2 p {
  font-size: 15px;
  margin: 0;
  opacity: 0.85;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
}

/* ==================== Responsive Design ==================== */
@media (max-width: 768px) {
  .particle-demo-v2 {
    min-height: 400px;
    padding: 40px 24px;
  }

  .particle-info-v2 h3 {
    font-size: 32px;
  }

  .particle-info-v2 p {
    font-size: 13px;
  }

  /* Hide some particles on tablets */
  .p9, .p10, .p11, .p12, .p16, .p18 {
    display: none;
  }

  /* Hide some connection lines */
  .c7, .c8, .c9, .c10, .c11, .c12 {
    display: none;
  }

  .particle-bg-glow {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .particle-demo-v2 {
    min-height: 350px;
    padding: 32px 16px;
  }

  .particle-info-v2 h3 {
    font-size: 28px;
  }

  .particle-info-v2 p {
    font-size: 12px;
  }

  /* Keep only 8 particles on mobile */
  .p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8 {
    width: 6px !important;
    height: 6px !important;
  }

  .p9, .p10, .p11, .p12, .p13, .p14, .p15, .p16, .p17, .p18 {
    display: none;
  }

  /* Keep only 4 connection lines */
  .c1, .c2, .c3, .c4 {
    display: block;
  }

  .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12 {
    display: none;
  }

  .particle-bg-glow {
    width: 250px;
    height: 250px;
  }
}

/* ==================== Print Styles ==================== */
@media print {
  .particle-demo-v2::before,
  .particle-bg-glow,
  .particle-connections {
    display: none;
  }
}
`;
