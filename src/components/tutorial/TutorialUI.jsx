import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTutorial } from './TutorialProvider';
import { TutorialIcons } from './icons';
import { tutorialSteps, getTotalSteps } from './tutorialSteps';

export function TutorialUI() {
  const {
    isActive,
    currentStep
  } = useTutorial();

  if (!isActive) return null;

  return (
    <>
      <TutorialOverlay />
      <AnimatePresence mode="wait">
        {currentStep.type === 'modal' ? (
          <TutorialModal key={currentStep.id} />
        ) : (
          <TutorialCard key={currentStep.id} />
        )}
      </AnimatePresence>
      {currentStep.target && <TutorialSpotlight />}
      {currentStep.demo && <TutorialDemo />}
    </>
  );
}

// 遮罩层
function TutorialOverlay() {
  return <div className="tutorial-overlay" />;
}

// 高亮框
function TutorialSpotlight() {
  const { currentStep } = useTutorial();
  const [rect, setRect] = useState(null);

  useEffect(() => {
    if (!currentStep.target) return;

    const updateRect = () => {
      const element = document.querySelector(currentStep.target);
      if (element) {
        const boundingRect = element.getBoundingClientRect();
        setRect({
          top: boundingRect.top - 8,
          left: boundingRect.left - 8,
          width: boundingRect.width + 16,
          height: boundingRect.height + 16
        });
      }
    };

    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, [currentStep.target]);

  if (!rect) return null;

  return (
    <motion.div
      layout
      layoutId="tutorial-spotlight"
      className="tutorial-spotlight active"
      style={{
        '--step-color': currentStep.color,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
    />
  );
}

// 引导卡片
function TutorialCard() {
  const { currentStep, nextStep, skipStep } = useTutorial();
  const [position, setPosition] = useState({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });

  useEffect(() => {
    if (!currentStep.target) return;

    const element = document.querySelector(currentStep.target);
    if (element) {
      const rect = element.getBoundingClientRect();
      const cardWidth = 400;
      const cardHeight = 250;

      let top, left;

      // 根据元素位置动态调整卡片位置
      if (rect.right + cardWidth + 40 < window.innerWidth) {
        // 右侧有空间
        left = rect.right + 20;
        top = rect.top;
      } else if (rect.left - cardWidth - 40 > 0) {
        // 左侧有空间
        left = rect.left - cardWidth - 20;
        top = rect.top;
      } else {
        // 上方或下方
        left = Math.max(20, Math.min(window.innerWidth - cardWidth - 20, rect.left));
        if (rect.bottom + cardHeight + 40 < window.innerHeight) {
          top = rect.bottom + 20;
        } else {
          top = Math.max(20, rect.top - cardHeight - 20);
        }
      }

      setPosition({ top, left, transform: 'none' });
    }
  }, [currentStep.target]);

  const Icon = TutorialIcons[currentStep.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="tutorial-card"
      style={{
        ...position,
        '--step-color': currentStep.color,
        '--step-color-light': currentStep.colorLight
      }}
    >
      <div className="tutorial-card-header">
        <div className="tutorial-card-icon">
          {Icon && <Icon color={currentStep.color} />}
        </div>
        <h3 className="tutorial-card-title">{currentStep.title}</h3>
      </div>

      <p className="tutorial-card-content">{currentStep.content}</p>

      {currentStep.hint && (
        <div className="tutorial-card-hint">
          <span>{currentStep.hint}</span>
        </div>
      )}

      <div className="tutorial-buttons">
        <button
          className="tutorial-button-primary"
          onClick={nextStep}
        >
          {currentStep.buttonText || '下一步'}
        </button>
        <button
          className="tutorial-button-secondary"
          onClick={skipStep}
        >
          {currentStep.secondaryButtonText || '跳过'}
        </button>
      </div>
    </motion.div>
  );
}

// Modal 弹窗
function TutorialModal() {
  const { currentStep, nextStep, skipToComplete, exitTutorial, restartTutorial } = useTutorial();
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handlePrimaryClick = () => {
    if (dontShowAgain) {
      localStorage.setItem('layoutTour.completed', 'true');
    }

    if (currentStep.id === 'welcome') {
      nextStep();
    } else if (currentStep.id === 'complete') {
      // 完成页面的主按钮
      exitTutorial();
    } else {
      nextStep();
    }
  };

  const handleSecondaryClick = () => {
    if (currentStep.id === 'welcome') {
      if (dontShowAgain) {
        localStorage.setItem('layoutTour.completed', 'true');
      }
      exitTutorial();
    } else if (currentStep.id === 'complete') {
      // 完成页面的次按钮（再学一次）
      restartTutorial();
    } else {
      // 过渡页面的次按钮（完成导览）
      skipToComplete();
    }
  };

  const Icon = TutorialIcons[currentStep.icon];
  const totalSteps = getTotalSteps();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10002
      }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 200,
          damping: 20
        }}
        className="tutorial-modal"
        style={{
          '--step-color': currentStep.color,
          '--step-color-light': currentStep.colorLight,
          position: 'relative',
          top: 'auto',
          left: 'auto',
          transform: 'none'
        }}
      >
      {/* 标题 */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          border: `2px solid ${currentStep.color}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          background: currentStep.colorLight
        }}>
          {Icon && <Icon color={currentStep.color} />}
        </div>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '700',
          margin: '0 0 12px',
          color: '#000'
        }}>
          {currentStep.title}
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#374151',
          margin: 0
        }}>
          {currentStep.content}
        </p>
      </div>

      {/* 步骤指示器 */}
      {currentStep.showSteps && (
        <TutorialStepIndicator total={totalSteps} />
      )}

      {/* 完成列表 */}
      {currentStep.showCompleteList && (
        <ul className="tutorial-complete-list">
          {currentStep.completeList.map((item, index) => (
            <li key={index} className="tutorial-complete-item">
              <span className="tutorial-complete-icon">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* 帮助提示 */}
      {currentStep.id === 'complete' && (
        <div style={{
          background: '#F9FAFB',
          padding: '16px',
          borderRadius: '6px',
          marginBottom: '24px'
        }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151',
            margin: '0 0 8px'
          }}>
            📚 需要帮助？
          </p>
          <ul style={{
            fontSize: '14px',
            color: '#6B7280',
            margin: 0,
            paddingLeft: '20px'
          }}>
            <li>快捷键：点击菜单 &gt; 帮助 &gt; 快捷键说明</li>
            <li>重新学习：点击菜单 &gt; 帮助 &gt; 重新开始导览</li>
          </ul>
        </div>
      )}

      {/* 按钮 */}
      <div className="tutorial-buttons">
        <button
          className="tutorial-button-primary"
          onClick={handlePrimaryClick}
        >
          {currentStep.buttonText || '下一步'}
        </button>
        <button
          className="tutorial-button-secondary"
          onClick={handleSecondaryClick}
        >
          {currentStep.secondaryButtonText || '取消'}
        </button>
      </div>

      {/* 不再显示 Checkbox */}
      {currentStep.id === 'welcome' && (
        <label className="tutorial-checkbox">
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
          />
          <span>不再显示此导览</span>
        </label>
      )}
      </motion.div>
    </div>
  );
}

// 步骤指示器
function TutorialStepIndicator({ total }) {
  const { currentStepIndex, completedSteps } = useTutorial();

  return (
    <div className="tutorial-steps">
      {Array.from({ length: total }).map((_, index) => {
        const stepIndex = index + 1; // 跳过欢迎步骤
        const step = tutorialSteps[stepIndex];
        const isActive = currentStepIndex === stepIndex;
        const isCompleted = completedSteps.includes(step?.id);

        return (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.05,
              type: 'spring',
              stiffness: 200
            }}
            className={`tutorial-step-dot ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            style={{
              '--step-color': step?.color
            }}
          >
            {isCompleted ? '✓' : index + 1}
          </motion.div>
        );
      })}
    </div>
  );
}

// 拖放演示动画
function TutorialDemo() {
  const { currentStep } = useTutorial();

  return (
    <motion.div
      className="tutorial-demo"
      style={{ '--step-color': currentStep.color }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: [0, 150, 300],
        y: [0, -30, 0],
        scale: [1, 1.05, 1],
        rotate: [0, 3, 0]
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2.5,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 3,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      🎨 卡片组件
    </motion.div>
  );
}
