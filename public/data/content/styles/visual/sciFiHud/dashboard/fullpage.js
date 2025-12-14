// Particle Canvas Background
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(14, 165, 233, ${0.2 * (1 - distance / 120)})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  drawConnections();

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Update Clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeElement = document.getElementById('hudTime');
  if (timeElement) {
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

setInterval(updateClock, 1000);
updateClock();

// Simulate Data Stream Updates
const dataStream = document.querySelector('.hud-data-stream');
const dataTemplates = [
  { type: 'normal', text: 'System check complete' },
  { type: 'success', text: 'Target acquired' },
  { type: 'warning', text: 'Anomaly detected' },
  { type: 'normal', text: 'Data sync in progress' },
  { type: 'success', text: 'Connection stable' },
  { type: 'normal', text: 'Processing request...' }
];

function addDataLine() {
  if (!dataStream) return;

  const now = new Date();
  const timestamp = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  const template = dataTemplates[Math.floor(Math.random() * dataTemplates.length)];

  const line = document.createElement('div');
  line.className = `hud-data-line ${template.type === 'success' ? 'hud-data-success' : template.type === 'warning' ? 'hud-data-warning' : ''}`;
  line.innerHTML = `
    <span class="hud-data-timestamp">${timestamp}</span>
    <span class="hud-data-text">${template.text}</span>
  `;

  dataStream.insertBefore(line, dataStream.firstChild);

  // Keep only last 10 lines
  while (dataStream.children.length > 10) {
    dataStream.removeChild(dataStream.lastChild);
  }
}

setInterval(addDataLine, 3000);
