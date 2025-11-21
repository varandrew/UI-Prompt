import { useEffect, useState } from 'react';
import { getCurrentStage } from '../../utils/cyberpunkTimeline';
import { CyberBackground, CyberGrid, CyberScanLine } from '../cyberpunk/BackgroundLayers';
import { CyberNavbar } from '../cyberpunk/CyberNavbar';
import { CyberHero } from '../cyberpunk/CyberHero';
import { CyberCards, CyberTerminal, CyberFooter } from '../cyberpunk/ContentSections';
import { GlobalStyles } from '../cyberpunk/GlobalStyles';
import { BrowserFrame } from '../ui/BrowserFrame';

/**
 * LivePreview - 生成預覽組件
 * 使用 React 組件逐步添加方式，替代 iframe + HTML 刷新
 */
export function LivePreview({ progress = 0 }) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [previousStage, setPreviousStage] = useState('');

  // 直接同步更新進度
  useEffect(() => {
    setDisplayProgress(progress);
  }, [progress]);

  // 計算實際動画進度 (50-100% 映射到 0-100%)
  const actualProgress = displayProgress >= 50
    ? ((displayProgress - 50) / 50) * 100
    : 0;

  // 獲取當前階段名稱
  const currentStage = getCurrentStage(actualProgress);

  // 調試日誌 - 显示進度映射
  useEffect(() => {
    if (displayProgress >= 50 && displayProgress < 100) {
      console.log(`[Progress] Display: ${displayProgress.toFixed(1)}%, Actual: ${actualProgress.toFixed(1)}%, Stage: ${currentStage}`);
    }
  }, [displayProgress, actualProgress, currentStage]);

  // 跟隨式滾動 - 在動画過程中滾動到最新階段
  useEffect(() => {
    if (displayProgress < 50) return; // 打字階段不滾動

    const container = document.querySelector('.cyberpunk-container');
    if (!container) return;

    // 階段變化時,滾動到新階段 (但不在 100% 時執行)
    if (currentStage !== previousStage && currentStage !== 'typing' && displayProgress < 100) {
      setPreviousStage(currentStage);

      // 延遲 200ms 確保新階段的 DOM 已經渲染並且佈局完成
      setTimeout(() => {
        const target = container.querySelector(`[data-stage="${currentStage}"]`);

        if (target) {
          console.log(`[Scroll Debug]`);
          console.log(`  Stage: ${currentStage}`);
          console.log(`  Display: ${displayProgress.toFixed(1)}%`);
          console.log(`  Actual: ${actualProgress.toFixed(1)}%`);

          // 計算目标元素相對於容器的實際位置
          // 使用 getBoundingClientRect 獲取元素在視窗中的位置
          const targetRect = target.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          // 計算目标元素相對於容器頂部的偏移量
          const relativeTop = targetRect.top - containerRect.top + container.scrollTop;

          console.log(`  Target relative position: ${relativeTop}px`);
          console.log(`  Scrolling container to: ${relativeTop}px`);

          // 只滾動容器,不影響页面滾動
          container.scrollTo({
            top: relativeTop - 20, // 向上偏移 20px 留出間距
            behavior: 'smooth'
          });

          console.log(`  Scrolled to stage: ${currentStage}`);
        } else {
          console.log(`[Scroll Error] Target element [data-stage="${currentStage}"] not found!`);
        }
      }, 200);
    }
  }, [displayProgress, currentStage, previousStage, actualProgress]);

  // 單獨處理 100% 完成後滾動到頂部
  useEffect(() => {
    if (displayProgress >= 100) {
      const container = document.querySelector('.cyberpunk-container');
      if (container) {
        setTimeout(() => {
          console.log('[Scroll] 100% Complete - Scrolling to top');
          container.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 500); // 延遲 500ms 確保所有內容都已渲染
      }
    }
  }, [displayProgress]);


  return (
    <BrowserFrame>
      <div tabIndex={0} className="live-preview h-[556px] flex flex-col bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        {/* Preview Content */}
        <div className="preview-content flex-1 overflow-hidden relative bg-black">
          {/* Loading 遮罩层 */}
          <div
            className="loading-mask absolute inset-0 bg-white z-50"
            style={{
              opacity: displayProgress < 50 ? 1 : 0,
              transition: 'opacity 0.5s ease-out',
              pointerEvents: displayProgress < 50 ? 'auto' : 'none',
            }}
          />

          {/* Cyberpunk 页面容器 */}
          <div
            className="cyberpunk-container absolute inset-0 custom-scrollbar-dark"
            style={{
              opacity: displayProgress >= 50 ? 1 : 0,
              transition: 'opacity 0.5s ease-out',
              pointerEvents: displayProgress >= 50 ? 'auto' : 'none',
              overflowY: 'auto',  // 改為 auto，只在需要時显示滾動條
              overflowX: 'hidden', // 隱藏水平滾動條
              maxHeight: '100%',   // 限制最大高度為容器高度
              scrollBehavior: 'smooth' // 平滑滾動
            }}
          >
            {/* 注入全局樣式 */}
            <GlobalStyles />

            {/* 內容包裝器 - 限制高度並確保內容在視窗內 */}
            <div style={{
              minHeight: '100%',
              maxHeight: '100vh',
              paddingBottom: '2rem',
              boxSizing: 'border-box',
              backgroundColor: '#0a0a0a'  // 设置深色背景,与 Cyberpunk 主題一致
            }}>
              {/* 背景层 (fixed positioning) */}
              <CyberBackground progress={actualProgress} />
              <CyberGrid progress={actualProgress} />
              <CyberScanLine progress={actualProgress} />

              {/* 內容层 */}
              <div className="content-layer">
                <CyberNavbar progress={actualProgress} />
                <CyberHero progress={actualProgress} />
                <CyberCards progress={actualProgress} />
                <CyberTerminal progress={actualProgress} />
                <CyberFooter progress={actualProgress} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
