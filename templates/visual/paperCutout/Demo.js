// Paper Cutout Demo - Simplified preview for StyleCard
// 纸张剪贴风格 - StyleCard 简化预览

export const demoHTML = `
<div class="paper-demo-container">
  <!-- Cork board background texture -->
  <div class="cork-bg"></div>

  <!-- Sticky Note 1: Yellow -->
  <div class="sticky-note sticky-yellow">
    <div class="pin pin-red"></div>
    <div class="note-icon">✂️</div>
    <h3 class="note-title">Paper Art</h3>
    <p class="note-text">Handcrafted design with collage style</p>
  </div>

  <!-- Sticky Note 2: Pink -->
  <div class="sticky-note sticky-pink">
    <div class="pin pin-blue"></div>
    <div class="note-icon">🎨</div>
    <h3 class="note-title">Creative</h3>
    <p class="note-text">Playful interface elements</p>
  </div>

  <!-- Polaroid Photo Card -->
  <div class="polaroid-card">
    <div class="polar-img">
      <span class="img-icon">📸</span>
    </div>
    <div class="polar-caption">Memories</div>
    <div class="tape-deco"></div>
  </div>
</div>
`;

export const customStyles = `
/* Paper Cutout Demo Styles */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&display=swap');

/* Main Container: Cork Board Background */
.paper-demo-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #D7CCC8 0%, #BCAAA4 100%);
  min-height: 400px;
  border-radius: 8px;
  overflow: hidden;
}

/* Cork Board Texture (Grid Effect) */
.cork-bg {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(139, 69, 19, 0.05) 3px, rgba(139, 69, 19, 0.05) 6px),
    repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(139, 69, 19, 0.05) 3px, rgba(139, 69, 19, 0.05) 6px);
  opacity: 0.6;
  pointer-events: none;
}

/* Sticky Note Base */
.sticky-note {
  position: relative;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow:
    3px 3px 8px rgba(0,0,0,0.15),
    6px 6px 16px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  z-index: 10;
}

.sticky-note:hover {
  transform: translateY(-8px) rotate(0deg);
  box-shadow:
    4px 4px 12px rgba(0,0,0,0.2),
    8px 8px 24px rgba(0,0,0,0.12);
}

/* Sticky Note Color Variants */
.sticky-yellow {
  background: linear-gradient(135deg, #FFF59D 0%, #FFF176 100%);
  transform: rotate(-2deg);
}

.sticky-pink {
  background: linear-gradient(135deg, #F8BBD0 0%, #F48FB1 100%);
  transform: rotate(2deg);
}

/* Push Pin Decoration */
.pin {
  position: absolute;
  top: -10px;
  right: 30%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.3),
    inset 0 1px 2px rgba(255,255,255,0.4);
}

.pin-red {
  background: radial-gradient(circle, #EF5350 0%, #E53935 100%);
}

.pin-blue {
  background: radial-gradient(circle, #42A5F5 0%, #1E88E5 100%);
}

/* Sticky Note Content */
.note-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.note-title {
  font-family: 'Caveat', cursive;
  font-size: 1.8rem;
  color: #2C3E50;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.note-text {
  font-family: 'Patrick Hand', cursive;
  font-size: 0.95rem;
  color: #37474F;
  line-height: 1.5;
}

/* Polaroid Photo */
.polaroid-card {
  position: relative;
  background: #FFF;
  padding: 0.75rem;
  padding-bottom: 2.5rem;
  box-shadow: 4px 4px 12px rgba(0,0,0,0.2);
  transform: rotate(-3deg);
  transition: all 0.4s ease;
  z-index: 10;
}

.polaroid-card:hover {
  transform: rotate(0deg);
  box-shadow: 6px 6px 18px rgba(0,0,0,0.3);
}

.polar-img {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #E8D4B0 0%, #D4C19E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.img-icon {
  font-size: 4rem;
}

.polar-caption {
  font-family: 'Caveat', cursive;
  font-size: 1.2rem;
  color: #2C2416;
  text-align: center;
  font-weight: 600;
}

/* Transparent Tape Decoration */
.tape-deco {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(5deg);
  width: 60px;
  height: 20px;
  background: rgba(255,255,255,0.4);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .paper-demo-container {
    grid-template-columns: 1fr;
  }
}
`;
