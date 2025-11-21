// Visual 總分类演示 UI
// 展示 7 個子家族的代表性視覺效果

export const demoHTML = `
<div class="visual-showcase">
  <div class="showcase-grid">
    <!-- 透明质感預覽 -->
    <div class="translucent-preview">
      <div class="glass-card">
        <h3>Translucent</h3>
        <p>透明质感</p>
      </div>
    </div>

    <!-- 漸变藝術預覽 -->
    <div class="gradient-preview">
      <div class="mesh-bg">
        <h3>Gradient</h3>
        <p>漸变藝術</p>
      </div>
    </div>

    <!-- 3D 空間預覽 -->
    <div class="threed-preview">
      <div class="iso-box">
        <h3>3D Space</h3>
        <p>3D 空間</p>
      </div>
    </div>

    <!-- 形狀語言預覽 -->
    <div class="shape-preview">
      <div class="organic-blob">
        <h3>Shape</h3>
        <p>形狀語言</p>
      </div>
    </div>

    <!-- 质感表現預覽 -->
    <div class="texture-preview">
      <div class="clay-card">
        <h3>Texture</h3>
        <p>质感表現</p>
      </div>
    </div>

    <!-- 光效设計預覽 -->
    <div class="light-preview">
      <div class="neon-sign">
        <h3>Light</h3>
        <p>光效设計</p>
      </div>
    </div>

    <!-- 自然元素預覽 -->
    <div class="nature-preview">
      <div class="aurora-bg">
        <h3>Nature</h3>
        <p>自然元素</p>
      </div>
    </div>
  </div>
</div>
`;

export const customStyles = `
.visual-showcase {
  min-height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

/* 透明质感預覽 */
.translucent-preview .glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
}

/* 漸变藝術預覽 */
.gradient-preview .mesh-bg {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  border-radius: 16px;
  padding: 32px;
  color: white;
  text-align: center;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* 3D 空間預覽 */
.threed-preview {
  perspective: 1000px;
}

.threed-preview .iso-box {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 16px;
  padding: 32px;
  color: white;
  text-align: center;
  transform: rotateX(15deg) rotateY(-15deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.threed-preview .iso-box:hover {
  transform: rotateX(0deg) rotateY(0deg);
}

/* 形狀語言預覽 */
.shape-preview .organic-blob {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  padding: 32px;
  color: white;
  text-align: center;
  animation: blobMorph 8s ease-in-out infinite;
}

@keyframes blobMorph {
  0%, 100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
  50% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
}

/* 质感表現預覽 */
.texture-preview .clay-card {
  background: #e0e5ec;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  color: #5a5a5a;
  box-shadow:
    9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5),
    inset 3px 3px 6px rgba(163, 177, 198, 0.2),
    inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}

/* 光效设計預覽 */
.light-preview .neon-sign {
  background: #0a0a0a;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  color: #0ff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #0ff,
    0 0 42px #0ff;
  box-shadow:
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 15px #0ff;
}

/* 自然元素預覽 */
.nature-preview .aurora-bg {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe, #00f2fe);
  background-size: 400% 400%;
  animation: auroraShift 15s ease infinite;
  border-radius: 16px;
  padding: 32px;
  color: white;
  text-align: center;
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  33% { background-position: 100% 50%; }
  66% { background-position: 50% 100%; }
}

/* 響應式 */
@media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .visual-showcase {
    padding: 24px;
  }
}
`;
