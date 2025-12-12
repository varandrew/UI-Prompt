export const demoHTML = `
<div class="fabric-demo-square">
  <!-- 布料標籤容器 -->
  <div class="fabric-tag-label">
    <div class="tag-pin"></div>
    <span class="tag-text">Fabric</span>
    <div class="tag-stitch"></div>
  </div>

  <!-- 三種布料樣本 -->
  <div class="fabric-swatches-grid">
    <div class="fabric-mini-swatch linen-mini">
      <span class="swatch-label">Linen</span>
    </div>
    <div class="fabric-mini-swatch canvas-mini">
      <span class="swatch-label">Canvas</span>
    </div>
    <div class="fabric-mini-swatch denim-mini">
      <span class="swatch-label">Denim</span>
    </div>
  </div>

  <!-- 裝飾性縫線 -->
  <div class="decorative-stitches">
    <div class="stitch-line stitch-top-left"></div>
    <div class="stitch-line stitch-bottom-right"></div>
  </div>
</div>
`;

export const customStyles = `
/* 正方形容器（height = width） */
.fabric-demo-square {
  aspect-ratio: 1 / 1;
  width: 100%;
  background: linear-gradient(135deg, #f5f2ed 0%, #ebe8e3 100%);
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.015) 3px,
      rgba(0, 0, 0, 0.015) 6px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.015) 3px,
      rgba(0, 0, 0, 0.015) 6px
    );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

/* 布料標籤樣式 */
.fabric-tag-label {
  background: linear-gradient(180deg, #e8dcc4 0%, #d4c5a9 100%);
  padding: 16px 40px;
  border-radius: 12px;
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.6);
  position: relative;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.02) 2px,
      rgba(0, 0, 0, 0.02) 4px
    );
}

/* 標籤釘子 */
.tag-pin {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #8b7355 0%, #6b5845 100%);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.tag-pin::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

/* 標籤文字 */
.tag-text {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
  letter-spacing: 1px;
}

/* 標籤縫線 */
.tag-stitch {
  position: absolute;
  bottom: 8px;
  left: 16px;
  right: 16px;
  border-bottom: 2px dashed rgba(0, 0, 0, 0.2);
}

/* 三個布料樣本網格 */
.fabric-swatches-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 320px;
}

/* 小型布料樣本 */
.fabric-mini-swatch {
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.15),
    inset 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 3px solid rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 8px;
}

.fabric-mini-swatch:hover {
  transform: translateY(-4px) rotate(2deg);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* 樣本標籤 */
.swatch-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 10px;
  border-radius: 6px;
  color: #2c3e50;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

/* 亞麻布樣本 */
.linen-mini {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.04) 2px,
      rgba(0, 0, 0, 0.04) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.04) 2px,
      rgba(0, 0, 0, 0.04) 4px
    );
}

/* 帆布樣本 */
.canvas-mini {
  background: #d4c5a9;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.03) 3px,
      rgba(0, 0, 0, 0.03) 6px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.03) 3px,
      rgba(0, 0, 0, 0.03) 6px
    );
}

/* 牛仔布樣本 */
.denim-mini {
  background: #4a5f7f;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.08) 2px,
      rgba(255, 255, 255, 0.08) 4px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.15) 2px,
      rgba(0, 0, 0, 0.15) 4px
    );
}

.denim-mini .swatch-label {
  color: #ffffff;
  background: rgba(74, 95, 127, 0.9);
}

/* 裝飾性縫線 */
.decorative-stitches {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.stitch-line {
  position: absolute;
  border: 1px dashed rgba(139, 115, 85, 0.25);
}

.stitch-top-left {
  top: 24px;
  left: 24px;
  width: 80px;
  height: 80px;
  border-right: none;
  border-bottom: none;
  border-radius: 8px 0 0 0;
}

.stitch-bottom-right {
  bottom: 24px;
  right: 24px;
  width: 80px;
  height: 80px;
  border-left: none;
  border-top: none;
  border-radius: 0 0 8px 0;
}

/* 響應式調整 */
@media (max-width: 768px) {
  .fabric-demo-square {
    padding: 24px;
    gap: 20px;
  }

  .fabric-tag-label {
    padding: 12px 32px;
  }

  .tag-text {
    font-size: 24px;
  }

  .fabric-swatches-grid {
    gap: 12px;
    max-width: 240px;
  }

  .swatch-label {
    font-size: 9px;
    padding: 3px 8px;
  }

  .stitch-top-left,
  .stitch-bottom-right {
    width: 60px;
    height: 60px;
  }
}

/* 移動端進一步調整 */
@media (max-width: 480px) {
  .fabric-demo-square {
    padding: 16px;
    gap: 16px;
  }

  .fabric-tag-label {
    padding: 10px 24px;
  }

  .tag-text {
    font-size: 20px;
  }

  .fabric-swatches-grid {
    gap: 10px;
    max-width: 200px;
  }

  .stitch-top-left,
  .stitch-bottom-right {
    width: 40px;
    height: 40px;
  }
}
`;
