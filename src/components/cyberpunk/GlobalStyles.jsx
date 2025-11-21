/**
 * GlobalStyles - Cyberpunk 全局樣式
 * ⚠️ 所有樣式都限定在 .live-preview 容器內，避免影響其他組件
 */
export function GlobalStyles() {
  const styles = `
    /* 動画定義（作用域：全局，但只被 .live-preview 內的元素使用） */
    @keyframes cyber-scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }

    @keyframes cyber-flow {
      0% { transform: translateY(-50%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(150%); opacity: 0; }
    }

    @keyframes cyber-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    @keyframes cyber-rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes cyber-pulse-bar {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    @keyframes cyber-cursor {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes fadeInBounce {
      0% {
        opacity: 0;
        transform: translateX(20px);
      }
      60% {
        opacity: 1;
        transform: translateX(-5px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    /* Cyberpunk 容器基礎樣式（限定在 .live-preview 內） */
    .live-preview .cyberpunk-container {
      font-family: 'Courier New', monospace;
      color: #00ff41;
      position: relative;
      min-height: 100%;
      /* 移除 overflow-x: hidden，避免与 LivePreview 的內联樣式衝突 */
    }

    /* 內容层 */
    .live-preview .content-layer {
      position: relative;
      z-index: 10;
    }

    /*
     * 滾動條樣式由 index.css 中的 .custom-scrollbar-dark 类控制
     * 這里不再重複定義，避免樣式衝突
     */

    /* Hover 效果（限定在 .live-preview 內） */
    .live-preview .cyber-navbar a:hover {
      border: 1px solid currentColor !important;
      box-shadow: 0 0 15px currentColor;
      background: rgba(0, 255, 65, 0.1);
    }

    .live-preview .cyberpunk-container button:hover {
      background: currentColor !important;
      color: #0a0a0a !important;
      transform: scale(1.05);
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
}
