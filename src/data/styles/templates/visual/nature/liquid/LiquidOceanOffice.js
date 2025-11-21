// LiquidOceanOffice.js - Minimalist Home Office with Ocean Background
// Complete HTML document with 7+ ocean animation layers

export const liquidOceanOfficeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liquid Motion · Ocean Office</title>
  <style>
/* ========================================
   BASE STYLES
   ======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.liquid-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #020617 0%, #0a192f 50%, #112240 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #e2e8f0;
  position: relative;
  overflow-x: hidden;
}

/* ========================================
   LAYER 1: Deep Ocean Current (30s)
   ======================================== */
@keyframes deepOceanCurrent {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  20% {
    transform: translate(150px, -100px) rotate(72deg) scale(1.3);
    border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%;
  }
  40% {
    transform: translate(-80px, 120px) rotate(144deg) scale(0.8);
    border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%;
  }
  60% {
    transform: translate(200px, 80px) rotate(216deg) scale(1.2);
    border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%;
  }
  80% {
    transform: translate(-120px, -60px) rotate(288deg) scale(0.9);
    border-radius: 50% 50% 60% 40% / 55% 45% 55% 45%;
  }
}

.ocean-blob-deep {
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, rgba(100, 255, 218, 0.08) 50%, transparent 70%);
  filter: blur(80px);
  animation: deepOceanCurrent 30s ease-in-out infinite;
  will-change: transform, border-radius;
  pointer-events: none;
  z-index: 0;
}

.ocean-blob-deep-1 {
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.ocean-blob-deep-2 {
  bottom: -30%;
  right: -15%;
  animation-delay: -15s;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.12) 0%, rgba(0, 229, 255, 0.06) 50%, transparent 70%);
}

/* ========================================
   LAYER 2: Mid-Layer Water Mass (20s)
   ======================================== */
@keyframes midLayerFlow {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;
  }
  25% {
    transform: translate(100px, -80px) rotate(90deg) scale(1.15);
    border-radius: 40% 60% 50% 50% / 50% 50% 50% 50%;
  }
  50% {
    transform: translate(-60px, 100px) rotate(180deg) scale(0.85);
    border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%;
  }
  75% {
    transform: translate(80px, 40px) rotate(270deg) scale(1.1);
    border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%;
  }
}

.ocean-blob-mid {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, rgba(100, 255, 218, 0.1) 60%, transparent 80%);
  filter: blur(60px);
  animation: midLayerFlow 20s ease-in-out infinite;
  will-change: transform, border-radius;
  pointer-events: none;
  z-index: 0;
}

.ocean-blob-mid-1 {
  top: 20%;
  left: 30%;
  animation-delay: -5s;
}

.ocean-blob-mid-2 {
  top: 50%;
  right: 20%;
  animation-delay: -10s;
}

.ocean-blob-mid-3 {
  bottom: 20%;
  left: 10%;
  animation-delay: -15s;
}

/* ========================================
   LAYER 3: Surface Surge (12s)
   ======================================== */
@keyframes surfaceSurge {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  33% {
    transform: translate(120px, -60px) rotate(120deg) scale(1.25);
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  66% {
    transform: translate(-80px, 80px) rotate(240deg) scale(0.75);
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
  }
}

.ocean-blob-surface {
  position: absolute;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.25) 0%, rgba(100, 255, 218, 0.15) 50%, transparent 70%);
  filter: blur(40px);
  animation: surfaceSurge 12s ease-in-out infinite;
  will-change: transform, border-radius;
  pointer-events: none;
  z-index: 0;
}

.ocean-blob-surface-1 {
  top: 10%;
  right: 30%;
  animation-delay: -3s;
}

.ocean-blob-surface-2 {
  bottom: 30%;
  left: 40%;
  animation-delay: -6s;
}

/* ========================================
   LAYER 4: Rising Bubbles (8s)
   ======================================== */
@keyframes bubbleRise {
  0% {
    transform: translateY(100vh) translateX(0) scale(0.3);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  50% {
    transform: translateY(50vh) translateX(var(--bubble-drift, 20px)) scale(0.6);
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-10vh) translateX(calc(var(--bubble-drift, 20px) * -1)) scale(1);
    opacity: 0;
  }
}

.bubble {
  position: absolute;
  width: var(--bubble-size, 10px);
  height: var(--bubble-size, 10px);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(0, 229, 255, 0.3));
  border-radius: 50%;
  animation: bubbleRise var(--bubble-duration, 8s) ease-in-out infinite;
  animation-delay: var(--bubble-delay, 0s);
  will-change: transform, opacity;
  pointer-events: none;
  z-index: 1;
}

/* ========================================
   LAYER 5: Bioluminescent Plankton (15s)
   ======================================== */
@keyframes planktonGlow {
  0%, 100% {
    opacity: 0.2;
    transform: translate(0, 0) scale(0.8);
    filter: blur(1px);
  }
  25% {
    opacity: 0.9;
    transform: translate(30px, -20px) scale(1.3);
    filter: blur(0px);
    box-shadow: 0 0 20px #00e5ff, 0 0 40px #64ffda;
  }
  50% {
    opacity: 0.3;
    transform: translate(-25px, 35px) scale(0.9);
    filter: blur(2px);
  }
  75% {
    opacity: 0.95;
    transform: translate(40px, 15px) scale(1.2);
    filter: blur(0px);
    box-shadow: 0 0 25px #00e5ff, 0 0 50px #64ffda;
  }
}

.plankton {
  position: absolute;
  width: var(--plankton-size, 4px);
  height: var(--plankton-size, 4px);
  background: #00e5ff;
  border-radius: 50%;
  animation: planktonGlow var(--plankton-duration, 15s) ease-in-out infinite;
  animation-delay: var(--plankton-delay, 0s);
  will-change: transform, opacity, filter;
  pointer-events: none;
  z-index: 1;
}

/* ========================================
   LAYER 6: Light Refraction Beams (25s)
   ======================================== */
@keyframes lightBeam {
  0%, 100% {
    opacity: 0.2;
    transform: translateY(0) scaleY(1) skewX(0deg);
  }
  25% {
    opacity: 0.5;
    transform: translateY(30px) scaleY(1.1) skewX(2deg);
  }
  50% {
    opacity: 0.3;
    transform: translateY(10px) scaleY(0.95) skewX(-1deg);
  }
  75% {
    opacity: 0.6;
    transform: translateY(40px) scaleY(1.15) skewX(3deg);
  }
}

.light-beam {
  position: absolute;
  top: 0;
  width: var(--beam-width, 100px);
  height: 100%;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(0, 229, 255, 0.08) 30%,
    rgba(100, 255, 218, 0.03) 70%,
    transparent 100%
  );
  filter: blur(20px);
  animation: lightBeam var(--beam-duration, 25s) ease-in-out infinite;
  animation-delay: var(--beam-delay, 0s);
  will-change: transform, opacity;
  pointer-events: none;
  z-index: 0;
}

/* ========================================
   LAYER 7: Auto Ripples (10s)
   ======================================== */
@keyframes autoRipple {
  0%, 100% {
    transform: scale(0);
    opacity: 0.4;
  }
  50% {
    transform: scale(2);
    opacity: 0;
  }
}

.auto-ripple {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 50%;
  animation: autoRipple 10s ease-in-out infinite;
  will-change: transform, opacity;
  pointer-events: none;
  z-index: 0;
}

/* ========================================
   LAYER 8: Seaweed Sway (18s)
   ======================================== */
@keyframes seaweedSway {
  0%, 100% {
    transform: rotate(-5deg) scaleY(1);
  }
  25% {
    transform: rotate(3deg) scaleY(1.02);
  }
  50% {
    transform: rotate(-8deg) scaleY(0.98);
  }
  75% {
    transform: rotate(6deg) scaleY(1.01);
  }
}

.seaweed {
  position: absolute;
  bottom: 0;
  width: var(--seaweed-width, 20px);
  height: var(--seaweed-height, 150px);
  background: linear-gradient(180deg, rgba(100, 255, 218, 0.4) 0%, rgba(0, 229, 255, 0.2) 100%);
  border-radius: 50% 50% 0 0;
  transform-origin: bottom center;
  animation: seaweedSway var(--seaweed-duration, 18s) ease-in-out infinite;
  animation-delay: var(--seaweed-delay, 0s);
  will-change: transform;
  pointer-events: none;
  z-index: 1;
}

/* ========================================
   MAIN CONTENT CONTAINER
   ======================================== */
.ocean-content {
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* Stats Row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

/* Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 229, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.4);
  border-color: rgba(0, 229, 255, 0.3);
}

/* Floating Animation */
@keyframes floatCard {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floating-card {
  animation: floatCard 6s ease-in-out infinite;
}

/* Stat Values */
.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00e5ff, #64ffda);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

/* Liquid Progress Bar */
.liquid-progress {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 16px;
}

.liquid-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00e5ff, #64ffda);
  border-radius: 4px;
  animation: liquidFill 2s ease-out forwards;
}

@keyframes liquidFill {
  from { width: 0; }
}

/* Hero Section */
.hero-section {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

.hero-card {
  padding: 60px 40px;
}

.ocean-title {
  font-size: 3rem;
  font-weight: 800;
  color: #e2e8f0;
  text-shadow: 0 0 40px rgba(0, 229, 255, 0.3);
  margin-bottom: 20px;
}

.ocean-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Liquid Button */
.liquid-button {
  position: relative;
  padding: 12px 32px;
  background: linear-gradient(135deg, #00e5ff, #64ffda);
  border: none;
  border-radius: 12px;
  color: #020617;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.liquid-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.liquid-button:hover::before {
  width: 300px;
  height: 300px;
}

.liquid-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(0, 229, 255, 0.4);
}

.liquid-button-outline {
  background: transparent;
  border: 2px solid #00e5ff;
  color: #00e5ff;
}

.liquid-button-outline:hover {
  background: rgba(0, 229, 255, 0.1);
}

/* Info Cards Row */
.info-cards-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.info-card {
  padding: 32px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.card-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #00e5ff, #64ffda);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.card-title {
  color: #e2e8f0;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.card-meta {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  margin: 4px 0 0;
}

/* Chart Placeholder */
.chart-placeholder {
  height: 120px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 12px;
}

.chart-bar {
  flex: 1;
  max-width: 40px;
  background: linear-gradient(180deg, #00e5ff, #64ffda);
  border-radius: 4px 4px 0 0;
  margin: 0 4px;
}

/* Data Rows */
.data-rows {
  display: grid;
  gap: 12px;
  margin-bottom: 16px;
}

.data-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.data-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
}

.data-value {
  background: linear-gradient(135deg, #00e5ff, #64ffda);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

/* Card Badges */
.card-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.glow-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(0, 229, 255, 0.2);
  border: 1px solid #00e5ff;
  border-radius: 20px;
  color: #00e5ff;
  font-size: 0.75rem;
  font-weight: 500;
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 229, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 229, 255, 0);
  }
}

/* Footer Note */
.footer-note {
  text-align: center;
  padding: 20px;
}

.footer-note p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ocean-content {
    padding: 40px 20px;
    gap: 40px;
  }

  .ocean-title {
    font-size: 2rem;
  }

  .ocean-subtitle {
    font-size: 1rem;
  }

  .stats-row,
  .info-cards-row {
    grid-template-columns: 1fr;
  }

  .hero-card {
    padding: 40px 24px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .liquid-button {
    width: 100%;
  }
}


/* ========================================
   LAYER 9: STICKY NAVIGATION BAR
   ======================================== */
.liquid-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.liquid-nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.liquid-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #00e5ff;
}

.logo-wave {
  animation: logoWave 3s ease-in-out infinite;
}

@keyframes logoWave {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-4px) scale(1.05); }
}

.liquid-logo-text {
  background: linear-gradient(135deg, #00e5ff, #64ffda);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.liquid-nav-links {
  display: flex;
  gap: 32px;
  flex: 1;
  justify-content: center;
}

.liquid-nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0;
  transition: color 0.3s ease;
}

.liquid-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4FACFE, #00F2FE);
  transform: translateX(-50%);
  transition: width 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-radius: 2px;
}

.liquid-nav-link:hover {
  color: #00e5ff;
}

.liquid-nav-link:hover::after {
  width: 100%;
}

.liquid-btn-nav {
  padding: 10px 24px;
  background: linear-gradient(135deg, #00e5ff, #64ffda);
  border: none;
  border-radius: 8px;
  color: #020617;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.liquid-btn-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 229, 255, 0.4);
}

/* ========================================
   LAYER 10: HERO SECTION
   ======================================== */
.liquid-hero {
  position: relative;
  z-index: 10;
  padding: 120px 32px 80px;
  text-align: center;
}

.liquid-container {
  max-width: 1000px;
  margin: 0 auto;
}

.liquid-hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  text-shadow: 0 0 40px rgba(0, 229, 255, 0.3);
  margin-bottom: 24px;
  animation: heroFadeIn 1s ease-out;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.liquid-hero-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 40px;
  animation: heroFadeIn 1s ease-out 0.2s both;
}

.liquid-hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: heroFadeIn 1s ease-out 0.4s both;
}

/* ========================================
   BUTTONS
   ======================================== */
.liquid-btn-primary,
.liquid-btn-secondary,
.liquid-btn-cta {
  position: relative;
  padding: 16px 40px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
}

.liquid-btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.liquid-btn-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.liquid-btn-primary:hover::before {
  width: 300px;
  height: 300px;
}

.liquid-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4), 0 0 20px rgba(118, 75, 162, 0.3);
}

.liquid-btn-secondary {
  background: transparent;
  border: 2px solid rgba(0, 229, 255, 0.5);
  color: #00e5ff;
}

.liquid-btn-secondary:hover {
  background: rgba(0, 229, 255, 0.1);
  border-color: #00e5ff;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
}

.liquid-btn-cta {
  background: linear-gradient(135deg, #00e5ff, #64ffda);
  color: #020617;
  font-size: 18px;
  padding: 18px 48px;
}

.liquid-btn-cta:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 40px rgba(0, 229, 255, 0.5);
}

/* ========================================
   LAYER 11: LIQUID CARDS GRID
   ======================================== */
.liquid-cards-section {
  position: relative;
  z-index: 10;
  padding: 80px 32px;
}

.liquid-section-title {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  margin-bottom: 64px;
}

.liquid-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.liquid-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 40px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.liquid-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(79, 172, 254, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.liquid-card:hover::before {
  opacity: 1;
  animation: liquidCardRipple 1.5s ease-out;
}

@keyframes liquidCardRipple {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

.liquid-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(79, 172, 254, 0.3), 0 0 40px rgba(0, 242, 254, 0.2);
  border-color: rgba(79, 172, 254, 0.4);
}

.liquid-card-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: inline-block;
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.liquid-card-title {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.liquid-card-description {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
}

.liquid-card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #00e5ff;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s ease;
}

.liquid-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.liquid-card-link:hover {
  color: #64ffda;
}

.liquid-card-link:hover .liquid-arrow {
  transform: translateX(5px);
}

/* ========================================
   LAYER 12: CTA SECTION
   ======================================== */
.liquid-cta-section {
  position: relative;
  z-index: 10;
  padding: 100px 32px;
  text-align: center;
}

.liquid-cta-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 80px 40px;
  max-width: 800px;
}

.liquid-cta-title {
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
}

.liquid-cta-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

/* ========================================
   LAYER 13: FOOTER
   ======================================== */
.liquid-footer {
  position: relative;
  z-index: 10;
  padding: 60px 32px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.liquid-footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.liquid-footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.liquid-footer-heading {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.liquid-footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.liquid-footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.liquid-footer-links a:hover {
  color: #00e5ff;
}

.liquid-footer-bottom {
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.liquid-footer-bottom p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
}

/* ========================================
   LAYER 14: TOAST NOTIFICATION
   ======================================== */
.liquid-toast {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 1000;
  transform: translateX(400px);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.liquid-toast-show {
  transform: translateX(0);
  opacity: 1;
}

.liquid-toast::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -100px;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(79, 172, 254, 0.5), transparent);
  border-radius: 50%;
  transform: translateY(-50%);
  animation: toastRipple 2s ease-out infinite;
}

@keyframes toastRipple {
  0% {
    width: 0;
    height: 0;
    left: 0;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    left: -100px;
    opacity: 0;
  }
}

.liquid-toast-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.liquid-toast-content {
  flex: 1;
}

.liquid-toast-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
}

.liquid-toast-message {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */
@media (max-width: 768px) {
  .liquid-nav-container {
    padding: 12px 20px;
  }
  
  .liquid-nav-links {
    display: none;
  }
  
  .liquid-hero {
    padding: 80px 20px 60px;
  }
  
  .liquid-hero-title {
    font-size: 36px;
  }
  
  .liquid-hero-subtitle {
    font-size: 16px;
  }
  
  .liquid-hero-actions {
    flex-direction: column;
  }
  
  .liquid-btn-primary,
  .liquid-btn-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .liquid-cards-section {
    padding: 60px 20px;
  }
  
  .liquid-section-title {
    font-size: 32px;
  }
  
  .liquid-cards-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .liquid-card {
    padding: 32px 24px;
  }
  
  .liquid-cta-section {
    padding: 60px 20px;
  }
  
  .liquid-cta-container {
    padding: 60px 24px;
  }
  
  .liquid-cta-title {
    font-size: 32px;
  }
  
  .liquid-cta-subtitle {
    font-size: 16px;
  }
  
  .liquid-footer {
    padding: 40px 20px 30px;
  }
  
  .liquid-footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .liquid-toast {
    bottom: 20px;
    right: 20px;
    left: 20px;
  }
}
  </style>
</head>
<body>
  <!-- Ocean Background Layers -->
  <div class="liquid-page">
    <!-- Deep Ocean Blobs -->
    <div class="ocean-blob-deep ocean-blob-deep-1"></div>
    <div class="ocean-blob-deep ocean-blob-deep-2"></div>

    <!-- Mid-Layer Blobs -->
    <div class="ocean-blob-mid ocean-blob-mid-1"></div>
    <div class="ocean-blob-mid ocean-blob-mid-2"></div>
    <div class="ocean-blob-mid ocean-blob-mid-3"></div>

    <!-- Surface Blobs -->
    <div class="ocean-blob-surface ocean-blob-surface-1"></div>
    <div class="ocean-blob-surface ocean-blob-surface-2"></div>

    <!-- Rising Bubbles (22 particles) -->
    <div class="bubble" style="--bubble-size: 8px; --bubble-duration: 9s; --bubble-delay: 0s; --bubble-drift: 30px; left: 5%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 12px; --bubble-duration: 11s; --bubble-delay: -2s; --bubble-drift: -25px; left: 12%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 6px; --bubble-duration: 8s; --bubble-delay: -4s; --bubble-drift: 40px; left: 18%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 10px; --bubble-duration: 10s; --bubble-delay: -1s; --bubble-drift: -20px; left: 25%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 14px; --bubble-duration: 12s; --bubble-delay: -3s; --bubble-drift: 35px; left: 32%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 7px; --bubble-duration: 7s; --bubble-delay: -5s; --bubble-drift: -30px; left: 38%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 11px; --bubble-duration: 9.5s; --bubble-delay: -2.5s; --bubble-drift: 25px; left: 45%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 9px; --bubble-duration: 8.5s; --bubble-delay: -1.5s; --bubble-drift: -35px; left: 52%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 13px; --bubble-duration: 11.5s; --bubble-delay: -4s; --bubble-drift: 40px; left: 58%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 8px; --bubble-duration: 7.5s; --bubble-delay: -0.5s; --bubble-drift: -25px; left: 65%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 10px; --bubble-duration: 10.5s; --bubble-delay: -3.5s; --bubble-drift: 30px; left: 72%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 6px; --bubble-duration: 8.2s; --bubble-delay: -2.2s; --bubble-drift: -40px; left: 78%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 12px; --bubble-duration: 12s; --bubble-delay: -1s; --bubble-drift: 35px; left: 85%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 9px; --bubble-duration: 9.2s; --bubble-delay: -4.5s; --bubble-drift: -30px; left: 92%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 11px; --bubble-duration: 10.8s; --bubble-delay: -2.8s; --bubble-drift: 25px; left: 8%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 7px; --bubble-duration: 7.8s; --bubble-delay: -3.2s; --bubble-drift: -35px; left: 15%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 13px; --bubble-duration: 11.2s; --bubble-delay: -0.8s; --bubble-drift: 40px; left: 22%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 8px; --bubble-duration: 8.8s; --bubble-delay: -4.2s; --bubble-drift: -25px; left: 35%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 10px; --bubble-duration: 9.8s; --bubble-delay: -1.8s; --bubble-drift: 30px; left: 48%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 14px; --bubble-duration: 12.5s; --bubble-delay: -3.8s; --bubble-drift: -40px; left: 68%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 9px; --bubble-duration: 9.5s; --bubble-delay: -2.5s; --bubble-drift: 35px; left: 82%; bottom: 0;"></div>
    <div class="bubble" style="--bubble-size: 11px; --bubble-duration: 11s; --bubble-delay: -5s; --bubble-drift: -28px; left: 95%; bottom: 0;"></div>

    <!-- Bioluminescent Plankton (12 points) -->
    <div class="plankton" style="--plankton-size: 3px; --plankton-duration: 14s; --plankton-delay: 0s; top: 15%; left: 10%;"></div>
    <div class="plankton" style="--plankton-size: 5px; --plankton-duration: 16s; --plankton-delay: -3s; top: 25%; left: 25%;"></div>
    <div class="plankton" style="--plankton-size: 4px; --plankton-duration: 15s; --plankton-delay: -6s; top: 35%; left: 40%;"></div>
    <div class="plankton" style="--plankton-size: 6px; --plankton-duration: 17s; --plankton-delay: -2s; top: 45%; left: 60%;"></div>
    <div class="plankton" style="--plankton-size: 3px; --plankton-duration: 19s; --plankton-delay: -5s; top: 55%; left: 75%;"></div>
    <div class="plankton" style="--plankton-size: 5px; --plankton-duration: 14.5s; --plankton-delay: -4s; top: 65%; left: 20%;"></div>
    <div class="plankton" style="--plankton-size: 4px; --plankton-duration: 16.5s; --plankton-delay: -1s; top: 75%; left: 35%;"></div>
    <div class="plankton" style="--plankton-size: 6px; --plankton-duration: 18s; --plankton-delay: -7s; top: 20%; left: 55%;"></div>
    <div class="plankton" style="--plankton-size: 3px; --plankton-duration: 15.5s; --plankton-delay: -3.5s; top: 40%; left: 80%;"></div>
    <div class="plankton" style="--plankton-size: 5px; --plankton-duration: 17.5s; --plankton-delay: -6.5s; top: 60%; left: 15%;"></div>
    <div class="plankton" style="--plankton-size: 4px; --plankton-duration: 16.2s; --plankton-delay: -2.5s; top: 80%; left: 50%;"></div>
    <div class="plankton" style="--plankton-size: 6px; --plankton-duration: 18.5s; --plankton-delay: -5.5s; top: 30%; left: 90%;"></div>

    <!-- Light Refraction Beams (5 beams) -->
    <div class="light-beam" style="--beam-width: 120px; --beam-duration: 23s; --beam-delay: 0s; left: 10%;"></div>
    <div class="light-beam" style="--beam-width: 80px; --beam-duration: 25s; --beam-delay: -8s; left: 30%;"></div>
    <div class="light-beam" style="--beam-width: 100px; --beam-duration: 28s; --beam-delay: -15s; left: 50%;"></div>
    <div class="light-beam" style="--beam-width: 90px; --beam-duration: 24s; --beam-delay: -5s; left: 70%;"></div>
    <div class="light-beam" style="--beam-width: 110px; --beam-duration: 26s; --beam-delay: -12s; left: 85%;"></div>

    <!-- Auto Ripples (3 ripples) -->
    <div class="auto-ripple" style="animation-delay: 0s; top: 30%; left: 25%;"></div>
    <div class="auto-ripple" style="animation-delay: -3.3s; top: 55%; left: 60%;"></div>
    <div class="auto-ripple" style="animation-delay: -6.6s; top: 75%; left: 40%;"></div>

    <!-- Seaweed Sway (8 plants) -->
    <div class="seaweed" style="--seaweed-width: 18px; --seaweed-height: 180px; --seaweed-duration: 17s; --seaweed-delay: 0s; left: 5%;"></div>
    <div class="seaweed" style="--seaweed-width: 22px; --seaweed-height: 220px; --seaweed-duration: 19s; --seaweed-delay: -4s; left: 15%;"></div>
    <div class="seaweed" style="--seaweed-width: 16px; --seaweed-height: 160px; --seaweed-duration: 21s; --seaweed-delay: -8s; left: 28%;"></div>
    <div class="seaweed" style="--seaweed-width: 20px; --seaweed-height: 200px; --seaweed-duration: 18s; --seaweed-delay: -2s; left: 42%;"></div>
    <div class="seaweed" style="--seaweed-width: 24px; --seaweed-height: 240px; --seaweed-duration: 22s; --seaweed-delay: -10s; left: 58%;"></div>
    <div class="seaweed" style="--seaweed-width: 19px; --seaweed-height: 190px; --seaweed-duration: 20s; --seaweed-delay: -6s; left: 72%;"></div>
    <div class="seaweed" style="--seaweed-width: 21px; --seaweed-height: 210px; --seaweed-duration: 17.5s; --seaweed-delay: -12s; left: 85%;"></div>
    <div class="seaweed" style="--seaweed-width: 17px; --seaweed-height: 170px; --seaweed-duration: 19.5s; --seaweed-delay: -3s; left: 95%;"></div>

    <!-- Navigation Bar -->
    <nav class="liquid-nav">
      <div class="liquid-nav-container">
        <div class="liquid-logo">
          <span class="logo-wave">🌊</span>
          <span class="liquid-logo-text">Ocean Office</span>
        </div>
        <div class="liquid-nav-links">
          <a href="#home" class="liquid-nav-link">Home</a>
          <a href="#features" class="liquid-nav-link">Features</a>
          <a href="#workspace" class="liquid-nav-link">Workspace</a>
          <a href="#pricing" class="liquid-nav-link">Pricing</a>
        </div>
        <button class="liquid-btn-nav">Get Started</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="liquid-hero" id="home">
      <div class="liquid-container">
        <h1 class="liquid-hero-title">Dive Into Productivity</h1>
        <p class="liquid-hero-subtitle">Experience the fluidity of a modern workspace. Minimalist design meets ocean-inspired aesthetics for maximum focus and creativity.</p>
        <div class="liquid-hero-actions">
          <button class="liquid-btn-primary">Start Free Trial</button>
          <button class="liquid-btn-secondary">Watch Demo</button>
        </div>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="liquid-cards-section" id="features">
      <div class="liquid-container">
        <h2 class="liquid-section-title">Why Ocean Office?</h2>
        <div class="liquid-cards-grid">
          <div class="liquid-card">
            <div class="liquid-card-icon">⚡</div>
            <h3 class="liquid-card-title">Lightning Fast</h3>
            <p class="liquid-card-description">Optimized for performance with instant loading and smooth transitions. Work at the speed of thought.</p>
            <a href="#" class="liquid-card-link">Learn more <span class="liquid-arrow">→</span></a>
          </div>

          <div class="liquid-card">
            <div class="liquid-card-icon">🎨</div>
            <h3 class="liquid-card-title">Beautiful Design</h3>
            <p class="liquid-card-description">Clean, minimalist interface inspired by the calming depths of the ocean. Every pixel crafted with care.</p>
            <a href="#" class="liquid-card-link">Explore design <span class="liquid-arrow">→</span></a>
          </div>

          <div class="liquid-card">
            <div class="liquid-card-icon">🔒</div>
            <h3 class="liquid-card-title">Secure & Private</h3>
            <p class="liquid-card-description">Enterprise-grade security with end-to-end encryption. Your data stays safe, always.</p>
            <a href="#" class="liquid-card-link">Security details <span class="liquid-arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="liquid-cta-section">
      <div class="liquid-container liquid-cta-container">
        <h2 class="liquid-cta-title">Ready to dive in?</h2>
        <p class="liquid-cta-subtitle">Join thousands of teams already experiencing the flow.</p>
        <button class="liquid-btn-cta">Start Your Journey</button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="liquid-footer">
      <div class="liquid-footer-content">
        <div class="liquid-footer-column">
          <h4 class="liquid-footer-heading">Product</h4>
          <ul class="liquid-footer-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Roadmap</a></li>
          </ul>
        </div>
        <div class="liquid-footer-column">
          <h4 class="liquid-footer-heading">Company</h4>
          <ul class="liquid-footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="liquid-footer-column">
          <h4 class="liquid-footer-heading">Resources</h4>
          <ul class="liquid-footer-links">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>
        <div class="liquid-footer-column">
          <h4 class="liquid-footer-heading">Legal</h4>
          <ul class="liquid-footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Licenses</a></li>
          </ul>
        </div>
      </div>
      <div class="liquid-footer-bottom">
        <p>© 2024 Ocean Office. All rights reserved.</p>
      </div>
    </footer>

    <!-- Toast Notification -->
    <div class="liquid-toast liquid-toast-show">
      <div class="liquid-toast-icon">🌊</div>
      <div class="liquid-toast-content">
        <div class="liquid-toast-title">Welcome aboard!</div>
        <div class="liquid-toast-message">Enjoy the ocean-inspired workspace experience.</div>
      </div>
    </div>
  </div>
</body>
</html>
`;
