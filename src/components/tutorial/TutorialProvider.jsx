import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { tutorialEvents, TUTORIAL_EVENTS } from './eventBus';
import { tutorialSteps, transitionStep } from './tutorialSteps';
import '../../styles/tutorial-outline.css';

// 创建 Context
const TutorialContext = createContext(null);

export function TutorialProvider({ children }) {
  // 状态管理
  const [isActive, setIsActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [showTransition, setShowTransition] = useState(false);
  const [startTime, setStartTime] = useState(null);

  // 当前步骤
  const currentStep = showTransition ? transitionStep : tutorialSteps[currentStepIndex];

  // 检查是否应该触发导览
  const shouldTriggerTutorial = useCallback(() => {
    const hasCompleted = localStorage.getItem('layoutTour.completed');
    if (hasCompleted) return false;

    // 移除同一天内不再触发的限制，让用户可以多次学习
    // const lastTrigger = localStorage.getItem('layoutTour.lastTrigger');
    // const today = new Date().toDateString();
    // if (lastTrigger === today) return false;

    return true;
  }, []);

  // 启动导览
  const startTutorial = useCallback(() => {
    setIsActive(true);
    setCurrentStepIndex(0);
    setCompletedSteps([]);
    setSkippedSteps([]);
    setStartTime(Date.now());
    localStorage.setItem('layoutTour.lastTrigger', new Date().toDateString());
    tutorialEvents.emit(TUTORIAL_EVENTS.TUTORIAL_START);
  }, []);

  // 前进到下一步
  const nextStep = useCallback(() => {
    if (currentStep.id === 'properties' && currentStep.isCoreEnd) {
      // 核心流程结束，显示过渡画面
      setShowTransition(true);
      return;
    }

    if (showTransition) {
      // 从过渡画面继续
      setShowTransition(false);
      setCurrentStepIndex(5); // 跳到 prompt 步骤
      return;
    }

    if (currentStepIndex < tutorialSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      tutorialEvents.emit(TUTORIAL_EVENTS.STEP_CHANGE, {
        from: currentStepIndex,
        to: currentStepIndex + 1
      });
    } else {
      // 完成导览
      completeTutorial();
    }
  }, [currentStepIndex, currentStep, showTransition, completeTutorial]);

  // 跳过当前步骤
  const skipStep = useCallback(() => {
    setSkippedSteps(prev => [...prev, currentStep.id]);
    tutorialEvents.emit(TUTORIAL_EVENTS.TUTORIAL_SKIP, { stepId: currentStep.id });
    nextStep();
  }, [currentStep, nextStep]);

  // 完成当前步骤
  const completeStep = useCallback((stepId) => {
    setCompletedSteps(prev => [...prev, stepId]);
    nextStep();
  }, [nextStep]);

  // 完成导览
  const completeTutorial = useCallback(() => {
    const duration = Date.now() - startTime;
    localStorage.setItem('layoutTour.completed', 'true');
    localStorage.setItem('layoutTour.version', '1');
    localStorage.setItem('layoutTour.completedAt', new Date().toISOString());

    tutorialEvents.emit(TUTORIAL_EVENTS.TUTORIAL_COMPLETE, {
      duration,
      skippedSteps: skippedSteps.length,
      completedSteps: completedSteps.length
    });

    setIsActive(false);
  }, [startTime, skippedSteps, completedSteps]);

  // 跳过过渡，直接完成
  const skipToComplete = useCallback(() => {
    setShowTransition(false);
    setCurrentStepIndex(tutorialSteps.length - 1); // 跳到完成步骤
  }, []);

  // 重新开始导览
  const restartTutorial = useCallback(() => {
    localStorage.removeItem('layoutTour.completed');
    startTutorial();
  }, [startTutorial]);

  // 退出导览
  const exitTutorial = useCallback(() => {
    setIsActive(false);
    tutorialEvents.emit(TUTORIAL_EVENTS.TUTORIAL_SKIP, { reason: 'user_exit' });
  }, []);

  // 监听事件驱动的步骤前进
  useEffect(() => {
    if (!isActive || !currentStep.gate) return;

    const handleGateEvent = () => {
      completeStep(currentStep.id);
    };

    const unsubscribe = tutorialEvents.on(currentStep.gate, handleGateEvent);

    // 设置超时
    let timeoutId;
    if (currentStep.timeout) {
      timeoutId = setTimeout(() => {
        tutorialEvents.emit(TUTORIAL_EVENTS.STEP_TIMEOUT, {
          stepId: currentStep.id
        });
      }, currentStep.timeout);
    }

    return () => {
      unsubscribe();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isActive, currentStep, completeStep]);

  // 自动触发（首次进入）
  useEffect(() => {
    if (shouldTriggerTutorial()) {
      setTimeout(() => {
        startTutorial();
      }, 800);
    }
  }, [shouldTriggerTutorial, startTutorial]);

  // Context value
  const value = {
    // 状态
    isActive,
    currentStep,
    currentStepIndex,
    completedSteps,
    skippedSteps,
    showTransition,

    // 方法
    startTutorial,
    nextStep,
    skipStep,
    completeStep,
    completeTutorial,
    skipToComplete,
    restartTutorial,
    exitTutorial
  };

  return (
    <TutorialContext.Provider value={value}>
      {children}
    </TutorialContext.Provider>
  );
}

// Hook for consuming the context
// eslint-disable-next-line react-refresh/only-export-components
export function useTutorial() {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error('useTutorial must be used within TutorialProvider');
  }
  return context;
}
