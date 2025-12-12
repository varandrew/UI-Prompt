export const demoHTML = `
<div class="light-demo">
  <div class="neon-container">
    <div class="neon-sign">
      <h3>Light Effects</h3>
      <p>光效设计 / 霓虹发光</p>
    </div>
  </div>
</div>
`;

export const customStyles = `
.light-demo {
  background: #0a0a0a;
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.neon-container {
  width: 100%;
  max-width: 600px;
}

.neon-sign {
  background: #0a0a0a;
  border: 2px solid #0ff;
  border-radius: 16px;
  padding: 64px 32px;
  text-align: center;
  color: #0ff;
  box-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #0ff,
    0 0 20px #0ff,
    0 0 30px #0ff;
}

.neon-sign h3 {
  margin: 0 0 8px 0;
  font-size: 36px;
  font-weight: 700;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #0ff,
    0 0 42px #0ff;
}

.neon-sign p {
  margin: 0;
  font-size: 14px;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #0ff;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .light-demo {
    padding: 24px;
  }

  .neon-sign {
    padding: 48px 24px;
  }

  .neon-sign h3 {
    font-size: 28px;
  }
}
`;
