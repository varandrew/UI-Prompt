// Aurora Wave - 简潔抽象 Demo（無文字內容）
// 用於 StyleCard 的小型預覽

export const demoHTML = `
<div class="aurora-demo-container">
  <!-- 背景波浪层 -->
  <div class="aurora-wave-layer aurora-wave-layer-1"></div>
  <div class="aurora-wave-layer aurora-wave-layer-2"></div>
  <div class="aurora-wave-layer aurora-wave-layer-3"></div>

  <!-- 星點裝飾 -->
  <div class="aurora-stars">
    <div class="aurora-star" style="top: 15%; left: 10%; width: 3px; height: 3px; animation-delay: 0s;"></div>
    <div class="aurora-star" style="top: 25%; left: 75%; width: 2px; height: 2px; animation-delay: 0.5s;"></div>
    <div class="aurora-star" style="top: 35%; left: 40%; width: 4px; height: 4px; animation-delay: 1s;"></div>
    <div class="aurora-star" style="top: 50%; left: 85%; width: 2px; height: 2px; animation-delay: 1.5s;"></div>
    <div class="aurora-star" style="top: 65%; left: 20%; width: 3px; height: 3px; animation-delay: 2s;"></div>
    <div class="aurora-star" style="top: 75%; left: 60%; width: 2px; height: 2px; animation-delay: 2.5s;"></div>
    <div class="aurora-star" style="top: 85%; left: 30%; width: 3px; height: 3px; animation-delay: 3s;"></div>
    <div class="aurora-star" style="top: 20%; left: 55%; width: 4px; height: 4px; animation-delay: 0.8s;"></div>
    <div class="aurora-star" style="top: 45%; left: 12%; width: 2px; height: 2px; animation-delay: 1.8s;"></div>
    <div class="aurora-star" style="top: 80%; left: 80%; width: 3px; height: 3px; animation-delay: 2.3s;"></div>
  </div>
</div>
`;

export const customStyles = `
/* 容器 */
.aurora-demo-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  background: linear-gradient(135deg,
    #0a192f 0%,
    #1e2a47 50%,
    #2d3561 100%
  );
}

/* 波浪层 */
.aurora-wave-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(102, 126, 234, 0.35) 25%,
    rgba(118, 75, 162, 0.35) 50%,
    rgba(0, 242, 254, 0.35) 75%,
    transparent 100%
  );
  border-radius: 50% / 20px;
  filter: blur(45px);
  mix-blend-mode: screen;
}

.aurora-wave-layer-1 {
  animation:
    auroraFlow1 12s linear infinite,
    auroraColor1 18s ease-in-out infinite;
  opacity: 1;
}

.aurora-wave-layer-2 {
  animation:
    auroraFlow2 15s linear infinite reverse,
    auroraColor2 22s ease-in-out infinite;
  animation-delay: 2s;
  opacity: 0.75;
  transform: translateY(20%);
}

.aurora-wave-layer-3 {
  animation:
    auroraFlow3 18s linear infinite,
    auroraColor3 25s ease-in-out infinite;
  animation-delay: 4s;
  opacity: 0.6;
  transform: translateY(-15%);
}

/* 波浪流動動画 */
@keyframes auroraFlow1 {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(-50%) translateY(0); }
}

@keyframes auroraFlow2 {
  0% { transform: translateX(0) translateY(20%); }
  100% { transform: translateX(-50%) translateY(20%); }
}

@keyframes auroraFlow3 {
  0% { transform: translateX(0) translateY(-15%); }
  100% { transform: translateX(-50%) translateY(-15%); }
}

/* 色彩变換動画 */
@keyframes auroraColor1 {
  0%, 100% {
    filter: blur(45px) hue-rotate(0deg);
  }
  50% {
    filter: blur(45px) hue-rotate(50deg);
  }
}

@keyframes auroraColor2 {
  0%, 100% {
    filter: blur(45px) hue-rotate(0deg);
  }
  50% {
    filter: blur(45px) hue-rotate(-40deg);
  }
}

@keyframes auroraColor3 {
  0%, 100% {
    filter: blur(45px) hue-rotate(0deg);
  }
  50% {
    filter: blur(45px) hue-rotate(60deg);
  }
}

/* 星點容器 */
.aurora-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

/* 單個星點 */
.aurora-star {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow:
    0 0 4px rgba(255, 255, 255, 0.8),
    0 0 8px rgba(100, 255, 218, 0.4);
  animation: starTwinkle 4s ease-in-out infinite;
}

/* 星點閃爍動画 */
@keyframes starTwinkle {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

/* 響應式調整 */
@media (max-width: 768px) {
  .aurora-demo-container {
    min-height: 300px;
  }

  .aurora-wave-layer {
    filter: blur(35px);
    animation-duration: 14s, 22s !important;
  }

  .aurora-wave-layer-3 {
    display: none;  /* 移動端隱藏第三层波浪 */
  }
}

/* 降低動画偏好设置 */
@media (prefers-reduced-motion: reduce) {
  .aurora-wave-layer {
    animation: none !important;
  }

  .aurora-star {
    animation: none !important;
    opacity: 0.8;
  }
}
`;
