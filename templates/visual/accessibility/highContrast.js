// Modern Accessibility - High Contrast Template

import {
  accessibilityHighContrastFullPageHTML,
  accessibilityHighContrastFullPageStyles
} from './accessibilityHighContrastFullPage';

export const modernAccessibilityHighContrast = {
  id: 'modern-accessibility-high-contrast',
  title: 'styles.accessibilityHighContrast.title',
  description: 'styles.accessibilityHighContrast.description',
  demoHTML: `
    <div class="hc-container">
      <h3 class="hc-title">High Contrast</h3>

      <!-- Large circle with focus border -->
      <div class="hc-circle hc-circle-focus"></div>

      <!-- Solid white circle -->
      <div class="hc-circle hc-circle-solid"></div>

      <!-- Large square with focus border -->
      <div class="hc-square hc-square-focus"></div>

      <!-- Solid white square -->
      <div class="hc-square hc-square-solid"></div>

      <!-- Triangle shapes -->
      <div class="hc-triangle hc-triangle-up"></div>
      <div class="hc-triangle hc-triangle-down"></div>

      <!-- Lines -->
      <div class="hc-line hc-line-h"></div>
      <div class="hc-line hc-line-v"></div>

      <!-- Small decorative squares -->
      <div class="hc-dot hc-dot-1"></div>
      <div class="hc-dot hc-dot-2"></div>
      <div class="hc-dot hc-dot-3"></div>
      <div class="hc-dot hc-dot-4"></div>

      <!-- Focus indicator box -->
      <div class="hc-focus-box"></div>
    </div>
  `,
  customStyles: `
    .hc-container {
      position: relative;
      width: 100%;
      height: 300px;
      background: #000000;
      overflow: hidden;
    }

    .hc-title {
      position: absolute;
      top: 16px;
      left: 16px;
      color: #ffffff;
      font-size: 24px;
      font-weight: 700;
      margin: 0;
      z-index: 10;
    }

    /* Circles */
    .hc-circle {
      position: absolute;
      border-radius: 50%;
    }

    .hc-circle-focus {
      top: 60px;
      left: 30px;
      width: 80px;
      height: 80px;
      background: transparent;
      border: 3px solid #ffff00;
    }

    .hc-circle-solid {
      top: 180px;
      left: 60px;
      width: 50px;
      height: 50px;
      background: #ffffff;
      border: none;
    }

    /* Squares */
    .hc-square {
      position: absolute;
    }

    .hc-square-focus {
      top: 80px;
      right: 50px;
      width: 100px;
      height: 100px;
      background: transparent;
      border: 3px solid #ffff00;
    }

    .hc-square-solid {
      top: 200px;
      right: 80px;
      width: 60px;
      height: 60px;
      background: #ffffff;
      border: none;
    }

    /* Triangles */
    .hc-triangle {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
    }

    .hc-triangle-up {
      top: 120px;
      left: 45%;
      border-bottom: 50px solid #ffffff;
    }

    .hc-triangle-down {
      bottom: 60px;
      left: 50%;
      border-top: 40px solid #ffffff;
      transform: translateX(-50%);
    }

    /* Lines */
    .hc-line {
      position: absolute;
      background: #ffffff;
    }

    .hc-line-h {
      top: 50%;
      left: 20px;
      width: 120px;
      height: 2px;
    }

    .hc-line-v {
      top: 60px;
      left: 50%;
      width: 2px;
      height: 100px;
    }

    /* Small decorative dots */
    .hc-dot {
      position: absolute;
      width: 12px;
      height: 12px;
      background: #ffffff;
    }

    .hc-dot-1 {
      top: 70px;
      right: 30px;
    }

    .hc-dot-2 {
      bottom: 80px;
      left: 40px;
      background: #ffff00;
    }

    .hc-dot-3 {
      top: 50%;
      right: 40%;
    }

    .hc-dot-4 {
      bottom: 40px;
      right: 60px;
    }

    /* Focus indicator box */
    .hc-focus-box {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      width: 140px;
      height: 60px;
      background: transparent;
      border: 4px solid #ffff00;
    }
  `,
  fullPageHTML: accessibilityHighContrastFullPageHTML,
  fullPageStyles: accessibilityHighContrastFullPageStyles,
  fullPagePreviewId: 'modern-accessibility-high-contrast',
  colorScheme: {
    'zh-cn': '主色纯黑 (#000000)、纯白 (#ffffff)、焦点黄 (#ffff00)、错误红 (#ff0000)、成功绿 (#00ff00)',
    'en-US': 'Primary pure black (#000000), pure white (#ffffff), focus yellow (#ffff00), error red (#ff0000), success green (#00ff00)'
  },
  features: [
    '極高對比度：黑白配色確保 21:1 對比度 (WCAG AAA)',
    '粗体文字：所有文字使用 700 權重提升可讀性',
    '明確焦點狀態：使用黃色边框标示當前焦點元素',
    '大尺寸元素：按鈕、表單控件使用放大尺寸 (48px 最小觸控目标)',
    '無漸层無阴影：避免視覺混淆的純色设計',
    '鍵盤导航友好：所有交互元素支持 Tab 鍵导航',
    '屏幕閱讀器优化：完整的 ARIA 标籤和語義化 HTML',
    '清晰的错誤提示：使用圖标+文字+颜色三重提示'
  ],

  // ✅ Previews configuration (aligned with core family pattern)
  previews: [
    {
      id: 'modern-accessibility-high-contrast',
      name: 'styles.accessibilityHighContrast.preview.dashboard',
      type: 'fullpage'
    }
  ]
};
