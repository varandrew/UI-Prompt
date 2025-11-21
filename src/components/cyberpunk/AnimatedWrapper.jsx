import { useMemo } from 'react';
import { shouldShow, getAnimationProgress } from '../../utils/cyberpunkTimeline';

/**
 * AnimatedWrapper - 動画包裝器 HOC
 * 根据進度控制子組件的显示和動画效果
 *
 * @param {string} componentName - 組件名稱 (對應 timeline 中的 key)
 * @param {number} progress - 當前進度 (0-100)
 * @param {string} animationType - 動画类型
 * @param {ReactNode} children - 子組件
 */
export function AnimatedWrapper({
  componentName,
  progress,
  animationType = 'fadeInUp',
  className = '',
  children
}) {
  // 检查是否應該显示
  const visible = useMemo(() =>
    shouldShow(componentName, progress),
    [componentName, progress]
  );

  // 計算動画進度 (0-1)
  const animProgress = useMemo(() =>
    getAnimationProgress(componentName, progress),
    [componentName, progress]
  );

  // 根据動画类型生成樣式
  const animationStyle = useMemo(() => {
    if (!visible) {
      return {
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
      };
    }

    const baseStyle = {
      visibility: 'visible',
      pointerEvents: 'auto',
    };

    switch (animationType) {
      case 'fadeIn':
        return {
          ...baseStyle,
          opacity: animProgress,
          transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        };

      case 'fadeInUp':
        return {
          ...baseStyle,
          opacity: animProgress,
          transform: `translateY(${(1 - animProgress) * 20}px)`,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        };

      case 'fadeInDown':
        return {
          ...baseStyle,
          opacity: animProgress,
          transform: `translateY(${(1 - animProgress) * -20}px)`,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        };

      case 'fadeInLeft':
        return {
          ...baseStyle,
          opacity: animProgress,
          transform: `translateX(${(1 - animProgress) * -20}px)`,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        };

      case 'fadeInRight':
        return {
          ...baseStyle,
          opacity: animProgress,
          transform: `translateX(${(1 - animProgress) * 20}px)`,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        };

      case 'scaleIn':
        return {
          ...baseStyle,
          opacity: animProgress,
          transform: `scale(${0.8 + animProgress * 0.2})`,
          transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', // bounce effect
        };

      case 'slideDown':
        return {
          ...baseStyle,
          opacity: animProgress,
          transform: `translateY(${(1 - animProgress) * -100}%)`,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        };

      default:
        return {
          ...baseStyle,
          opacity: animProgress,
          transition: 'opacity 0.6s ease-out',
        };
    }
  }, [visible, animProgress, animationType]);

  return (
    <div className={className} style={animationStyle}>
      {children}
    </div>
  );
}
