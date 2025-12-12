// Dark Mode Demo - Simplified preview for StyleCard
// 深色模式 - StyleCard 简化预览

export const demoHTML = `
<div class="dark-demo-container">
  <!-- Stat Card 1: CPU Usage -->
  <div class="dark-stat-card">
    <div class="stat-header">
      <div class="stat-info">
        <div class="stat-label">CPU Usage</div>
        <div class="stat-value">42%</div>
      </div>
      <div class="stat-icon stat-icon-blue">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 7H7v6h6V7z"/>
          <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"/>
        </svg>
      </div>
    </div>
    <div class="stat-footer">
      <span class="trend-up">↑ 8%</span>
      <span class="trend-label">from last hour</span>
    </div>
  </div>

  <!-- Stat Card 2: Memory -->
  <div class="dark-stat-card">
    <div class="stat-header">
      <div class="stat-info">
        <div class="stat-label">Memory</div>
        <div class="stat-value">8.2 GB</div>
      </div>
      <div class="stat-icon stat-icon-green">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
        </svg>
      </div>
    </div>
    <div class="stat-footer">
      <span class="trend-down">↓ 12%</span>
      <span class="trend-label">from last hour</span>
    </div>
  </div>

  <!-- Progress Bar Section -->
  <div class="dark-progress-section">
    <div class="progress-header">
      <span class="progress-title">Build Optimization</span>
      <span class="progress-percent">78%</span>
    </div>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" style="width: 78%;"></div>
    </div>
  </div>
</div>
`;

export const customStyles = `
/* Dark Mode Demo Styles */

/* Progress Bar Animation */
@keyframes progressFill {
  from { width: 0%; }
}

/* Main Container */
.dark-demo-container {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  min-height: 400px;
  color: #e5e7eb;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  border-radius: 12px;
}

/* Stat Card Base */
.dark-stat-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
  transition: all 0.3s ease;
  cursor: pointer;
}

.dark-stat-card:hover {
  transform: translateY(-4px);
  border-color: #3b82f6;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

/* Card Header */
.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
}

.stat-label {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #e5e7eb;
}

/* Icon Styles */
.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon svg {
  width: 24px;
  height: 24px;
}

.stat-icon-blue {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.stat-icon-green {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

/* Stat Footer */
.stat-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
}

.trend-up {
  color: #10b981;
  font-weight: 600;
}

.trend-down {
  color: #f59e0b;
  font-weight: 600;
}

.trend-label {
  color: #6b7280;
}

/* Progress Bar Section */
.dark-progress-section {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.progress-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #e5e7eb;
}

.progress-percent {
  font-size: 0.875rem;
  font-weight: 700;
  color: #3b82f6;
}

.progress-bar-bg {
  width: 100%;
  height: 8px;
  background: #2a2a2a;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  border-radius: 4px;
  animation: progressFill 1.5s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .dark-demo-container {
    grid-template-columns: 1fr;
  }
}
`;
