// Bento Grids - Phase 3 Batch 1
import {
  bentoGridsFullPageHTML,
  bentoGridsFullPageStyles,
} from './bentoGridsFullPage';

export const visualTechBentoGrids = {
  id: 'visual-tech-bento-grids',
  title: 'styles.visual.bento-grids.title',
  description: 'styles.visual.bento-grids.description',
  demoHTML: `
    <div class="bento-container">
      <div class="bento-box bento-large">
        <div class="bento-title">Analytics</div>
        <div class="bento-subtitle">Real-time data</div>
      </div>
      <div class="bento-box bento-tall">
        <div class="bento-title">Design</div>
      </div>
      <div class="bento-box bento-small">
        <div class="bento-title">Mobile</div>
      </div>
      <div class="bento-box bento-small">
        <div class="bento-title">Desktop</div>
      </div>
      <div class="bento-box bento-wide">
        <div class="bento-title">Deploy</div>
        <div class="bento-subtitle">One-click deployment</div>
      </div>
    </div>
  `,
  customStyles: `
    .bento-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 0.5rem;
      width: 100%;
      height: 100%;
      padding: 1rem;
    }
    .bento-box {
      background: white;
      border: 2px solid #e5e7eb;
      border-radius: 1rem;
      padding: 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.25rem;
      transition: all 0.3s ease;
      cursor: pointer;
      overflow: hidden;
      position: relative;
    }
    .bento-box::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 0%, rgba(99, 102, 241, 0.05) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .bento-box:hover {
      border-color: #6366f1;
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(99, 102, 241, 0.1);
    }
    .bento-box:hover::before {
      opacity: 1;
    }
    .bento-large {
      grid-column: span 2;
      grid-row: span 1;
    }
    .bento-tall {
      grid-column: span 1;
      grid-row: span 2;
    }
    .bento-small {
      grid-column: span 1;
      grid-row: span 1;
    }
    .bento-wide {
      grid-column: span 2;
      grid-row: span 1;
    }
    .bento-title {
      font-size: 1rem;
      font-weight: 700;
      color: #1f2937;
    }
    .bento-subtitle {
      font-size: 0.75rem;
      color: #6b7280;
      font-weight: 500;
    }
  `,
  demoBoxClass: 'bg-gray-50',
  colorScheme: {
    'zh-cn': '白色背景 (#FFFFFF)、灰色边框 (#E5E7EB)、靛藍高亮 (#6366F1)',
    'en-US': 'White background (#FFFFFF), gray border (#E5E7EB), indigo highlight (#6366F1)',
  },
  fullPagePreviewId: 'bento-grids',
  fullPageHTML: bentoGridsFullPageHTML,
  fullPageStyles: bentoGridsFullPageStyles,
};
