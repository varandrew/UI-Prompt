import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { PromptGenerator } from '../../utils/promptGenerator';
import { LANGUAGES } from '../../utils/i18n/languageConstants';

// ⚡ 不再從 templates 導入，使用內聯的 demo 風格數據
const DEMO_NEON_NOIR_STYLE = {
  id: 'neon-noir',
  title: 'Neon Noir',
  description: {
    'zh-CN': '霓虹灯与黑暗城市的融合，营造出神秘而迷人的赛博朋克氛围',
    'en-US': 'A fusion of neon lights and dark urban aesthetics, creating a mysterious and captivating cyberpunk atmosphere'
  },
  stylePrompt: {
    'zh-CN': `请以「霓虹黑色电影」风格创建一个网页界面，融合赛博朋克和黑色电影美学。

设计特点：
• 深邃的黑色背景配合鲜艳的霓虹色彩（青色、品红、电光蓝）
• 高对比度的光影效果，模拟城市霓虹灯光
• 锐利的几何线条与发光边框
• 神秘而富有未来感的视觉氛围
• 模拟雨夜城市的视觉质感`,
    'en-US': `Create a webpage interface in "Neon Noir" style, blending cyberpunk and film noir aesthetics.

Design features:
• Deep black backgrounds with vivid neon colors (cyan, magenta, electric blue)
• High-contrast lighting effects simulating urban neon lights
• Sharp geometric lines with glowing borders
• Mysterious and futuristic visual atmosphere
• Simulated rainy night cityscape texture`
  }
};

export function TerminalDemo({ onProgressChange, totalProgress = 0, typingSpeed }) {
  const { t, language } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const contentRef = useRef(null);

  // 判斷是否完成 (totalProgress >= 100)
  const isComplete = totalProgress >= 100;

  // 生成 Neon Noir 風格的 prompt (使用內聯的 demo 數據)
  const neonNoirPrompt = PromptGenerator.generate(
    DEMO_NEON_NOIR_STYLE,  // 使用內聯的 demo 風格對象
    { mode: 'card' },
    language
  );

  // 動態計算打字速度，確保中英文動画時長一致
  // 目标時長 3500ms (3.5秒)，使用精確計算來減少誤差
  const targetDuration = 3500;

  // 精確計算速度，避免四捨五入造成的誤差
  const calculatedTypingSpeed = targetDuration / neonNoirPrompt.length;

  // 如果外部傳入了 typingSpeed 則使用外部值，否則使用計算值
  const finalTypingSpeed = typingSpeed || calculatedTypingSpeed;

  // 動態打字效果 (1秒內完成,進度佔 0-50%)
  useEffect(() => {
    if (currentIndex < neonNoirPrompt.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + neonNoirPrompt[currentIndex]);
        setCurrentIndex(prev => prev + 1);

        // 計算進度百分比:打字階段只佔 0-50%
        const typingProgress = ((currentIndex + 1) / neonNoirPrompt.length) * 50;
        if (onProgressChange) {
          onProgressChange(typingProgress);
        }
      }, finalTypingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, neonNoirPrompt, onProgressChange, finalTypingSpeed]);

  // 游标閃爍效果
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // 內容更新時自動滾動到底部
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [displayedText, currentIndex]);


  return (
    <div tabIndex={0} className="terminal-demo h-full flex flex-col bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.3)] focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-opacity-50">
      {/* Terminal Header */}
      <div className="terminal-header flex items-center justify-between px-4 py-3 bg-[#0f0f0f] border-b border-[#00ff41]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1"></div>
        <button
          onClick={() => window.location.reload()}
          className="text-[#00ffff] hover:text-[#00ff41] text-xs transition-colors"
          aria-label="刷新网页"
        >
          ↻
        </button>
      </div>

      {/* Terminal Content */}
      <div ref={contentRef} className="terminal-content flex-1 p-6 font-mono text-sm text-[#00ff41] overflow-y-auto">
        {/* Claude Code Header */}
        <div className="mb-4">
          <pre className="text-[#00ffff]">
{`  ▛███▜▌   ${t('aiDemo.version')}
▝▜█████▛▘  ${t('aiDemo.model')}
  ▘▘ ▝▝    ${t('aiDemo.workdir')}`}
          </pre>
          <div className="border-t border-[#00ff41] my-4 opacity-30"></div>
        </div>

        {/* Copy & Paste Hint */}
        <div className="mb-2 text-[#00ffff] opacity-90 font-semibold">
          {t('aiDemo.tryHint')}
        </div>
        <div className="border-t border-[#00ff41] my-4 opacity-10"></div>

        {/* Prompt Content with Typing Effect */}
        <div className="whitespace-pre-wrap leading-relaxed">
          {displayedText}
          <span className={`inline-block w-2 h-4 bg-[#00ff41] ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>

        {/* Generating Message after prompt is complete */}
        {currentIndex >= neonNoirPrompt.length && !isComplete && (
          <div className="mt-4 text-[#00ffff] font-semibold animate-pulse">
            ✻ {t('aiDemo.generatingMessage')}
          </div>
        )}

        {/* Complete Message when animation is done */}
        {isComplete && (
          <div className="mt-4">
            <div className="text-[#00ffff] font-semibold mb-2">
              ✻ {t('aiDemo.generatingMessage')}
            </div>
            <div className="text-[#00ff41] font-bold flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>{t('aiDemo.completeMessage')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Scan Line Effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes terminal-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .terminal-demo::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.3), transparent);
          animation: terminal-scan 8s linear infinite;
          pointer-events: none;
          z-index: 10;
        }

        .terminal-content::-webkit-scrollbar {
          width: 8px;
        }

        .terminal-content::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        .terminal-content::-webkit-scrollbar-thumb {
          background: #00ff41;
          border-radius: 4px;
        }

        .terminal-content::-webkit-scrollbar-thumb:hover {
          background: #00ffff;
        }
      ` }} />
    </div>
  );
}
