export const demoHTML = `
<div class="shape-demo">
  <div class="blob-container">
    <div class="organic-blob">
      <h3>Shape Language</h3>
      <p>形状语言 / 有机形态</p>
    </div>
  </div>
</div>
`;

export const customStyles = `
.shape-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blob-container {
  width: 100%;
  max-width: 600px;
}

.organic-blob {
  background: linear-gradient(135deg, #f093fb, #4facfe);
  border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  padding: 64px 32px;
  color: white;
  text-align: center;
  animation: blobMorph 8s ease-in-out infinite;
}

.organic-blob h3 {
  margin: 0 0 8px 0;
  font-size: 32px;
  font-weight: 700;
}

.organic-blob p {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

@keyframes blobMorph {
  0%, 100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
  33% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  66% { border-radius: 50% 50% 30% 70% / 50% 50% 70% 30%; }
}

@media (max-width: 768px) {
  .shape-demo {
    padding: 24px;
  }

  .organic-blob {
    padding: 48px 24px;
  }

  .organic-blob h3 {
    font-size: 24px;
  }
}
`;
