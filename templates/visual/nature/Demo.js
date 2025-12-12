export const demoHTML = `
<div class="nature-demo">
  <div class="aurora-container">
    <div class="aurora-bg">
      <h3>Nature Elements</h3>
      <p>自然元素 / 极光效果</p>
    </div>
  </div>
</div>
`;

export const customStyles = `
.nature-demo {
  background: #0a0a0a;
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.aurora-container {
  width: 100%;
  max-width: 800px;
}

.aurora-bg {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe, #00f2fe);
  background-size: 400% 400%;
  animation: auroraShift 15s ease infinite;
  border-radius: 24px;
  padding: 64px 32px;
  text-align: center;
  color: white;
}

.aurora-bg h3 {
  margin: 0 0 8px 0;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.aurora-bg p {
  margin: 0;
  font-size: 14px;
  opacity: 0.95;
}

@keyframes auroraShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  33% {
    background-position: 100% 50%;
  }
  66% {
    background-position: 50% 100%;
  }
}

@media (max-width: 768px) {
  .nature-demo {
    padding: 24px;
  }

  .aurora-bg {
    padding: 48px 24px;
  }

  .aurora-bg h3 {
    font-size: 28px;
  }
}
`;
