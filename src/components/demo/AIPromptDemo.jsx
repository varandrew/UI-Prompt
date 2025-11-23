import { useState, useEffect } from 'react';
import { TerminalDemo } from './TerminalDemo';
import { LivePreview } from './LivePreview';
// useLanguage 未使用

export function AIPromptDemo() {
  // 語言上下文目前未在此組件中使用
  const [totalProgress, setTotalProgress] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  // 取消重置控制与進度頭部显示

  // 處理打字進度 (0-50%)
  const handleProgressChange = (typingProgress) => {
    setTotalProgress(typingProgress);

    // 當打字達到 50% 時,标記為完成
    if (typingProgress >= 50 && !isTypingComplete) {
      setIsTypingComplete(true);
    }
  };

  // 當打字完成後,自動啟動生成動画 (50% → 100%)
  useEffect(() => {
    if (isTypingComplete) {
      const duration = 15000; // 生成階段持續 15 秒
      const fps = 30;         // 每秒 30 幀 (避免更新過快被跳過)
      const totalFrames = (duration / 1000) * fps;
      const increment = 50 / totalFrames; // 从 50% 增加到 100%

      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const newProgress = 50 + (frame * increment);

        if (newProgress >= 100) {
          setTotalProgress(100);
          clearInterval(timer);
        } else {
          setTotalProgress(newProgress);
        }
      }, 1000 / fps);

      return () => clearInterval(timer);
    }
  }, [isTypingComplete]);

  // 已移除當進度達到 50% 時的自動聚焦到 Preview 功能


  return (
    <section className="ai-prompt-demo w-full mb-16">
      {/* 已移除進度條与重置按鈕 */}

      {/* Demo Container - 3/7 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 h-[600px]">
        {/* Left: Terminal (30%) */}
        <div className="md:col-span-3 h-full min-h-[400px]">
          <TerminalDemo onProgressChange={handleProgressChange} totalProgress={totalProgress} />
        </div>

        {/* Right: Preview (70%) */}
        <div className="md:col-span-7 h-full min-h-[400px]">
          <LivePreview progress={totalProgress} />
        </div>
      </div>

      {/* Demo Decoration */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ai-prompt-demo {
          position: relative;
        }

        /* Gradient Background Effect */
        .ai-prompt-demo::before {
          content: '';
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 150px;
          background: radial-gradient(ellipse at center, rgba(0, 255, 65, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .ai-prompt-demo .grid {
            height: auto;
          }

          .ai-prompt-demo .grid > div {
            min-height: 500px;
          }
        }

        /* Subtle animation on load */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-prompt-demo {
          animation: fadeInUp 0.6s ease-out;
        }
      ` }} />
    </section>
  );
}
