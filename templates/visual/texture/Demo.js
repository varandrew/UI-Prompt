export const demoHTML = `
<div class="texture-demo">
  <div class="clay-showcase">
    <div class="clay-card">
      <h3>Texture</h3>
      <p>质感表现 / 黏土质感</p>
    </div>
  </div>
</div>
`;

export const customStyles = `
.texture-demo {
  background: #e0e5ec;
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clay-showcase {
  width: 100%;
  max-width: 600px;
}

.clay-card {
  background: #e0e5ec;
  border-radius: 24px;
  padding: 64px 32px;
  text-align: center;
  color: #5a5a5a;
  box-shadow:
    9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5),
    inset 3px 3px 6px rgba(163, 177, 198, 0.2),
    inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}

.clay-card h3 {
  margin: 0 0 8px 0;
  font-size: 32px;
  font-weight: 700;
  color: #6b7280;
}

.clay-card p {
  margin: 0;
  font-size: 14px;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .texture-demo {
    padding: 24px;
  }

  .clay-card {
    padding: 48px 24px;
  }

  .clay-card h3 {
    font-size: 24px;
  }
}
`;
