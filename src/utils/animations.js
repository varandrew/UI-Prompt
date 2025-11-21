/**
 * 動画配置中心
 *
 * 為 LayoutEditor 提供統一的動画配置和輔助函数
 * 使用 Framer Motion 的 spring 物理引擎
 */

// ========== Spring 配置預设 ==========

/**
 * 平滑交換動画 - 用於組件位置變化
 * 特點: 流暢、自然、不過度誇張
 */
export const smoothSwapTransition = {
  type: 'spring',
  stiffness: 300,  // 彈簧剛度
  damping: 30,     // 阻尼係数
  mass: 0.8        // 质量
};

/**
 * 碰撞反彈動画 - 用於拖動碰撞效果
 * 特點: 有力、明显、快速恢復
 */
export const collisionBounceTransition = {
  type: 'spring',
  stiffness: 500,
  damping: 15,
  mass: 0.8
};

/**
 * 彈性動画 - 用於懸停和輕微互動
 * 特點: 柔和、輕盈
 */
export const elasticTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
  mass: 0.5
};

/**
 * 快速動画 - 用於即時反饋
 * 特點: 迅速、乾脆
 */
export const quickTransition = {
  type: 'spring',
  stiffness: 600,
  damping: 30,
  mass: 0.3
};

// ========== 動画變体 (Variants) ==========

/**
 * 組件拖動狀態變体
 */
export const dragVariants = {
  // 静止狀態
  idle: {
    scale: 1,
    rotate: 0,
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
  },
  // 懸停狀態
  hover: {
    scale: 1.02,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: elasticTransition
  },
  // 拖動中
  dragging: {
    scale: 1.05,
    rotate: 2,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
    transition: quickTransition
  },
  // 落地時
  drop: {
    scale: 1,
    rotate: 0,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
      mass: 0.8
    }
  }
};

/**
 * 碰撞效果變体
 */
export const collisionVariants = {
  // 正常狀態
  normal: {
    scale: 1,
    x: 0,
    y: 0,
    borderColor: 'rgba(229, 231, 235, 1)', // gray-200
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  // 碰撞時 - 震動效果
  collision: {
    scale: [1, 0.98, 1.02, 1],
    x: [0, -2, 2, 0],
    borderColor: 'rgba(251, 191, 36, 1)', // amber-400
    backgroundColor: 'rgba(254, 252, 232, 1)', // yellow-50
    transition: {
      duration: 0.4,
      times: [0, 0.2, 0.6, 1]
    }
  },
  // 懸停時 (可放置区域)
  canDrop: {
    scale: 1.01,
    borderColor: 'rgba(34, 197, 94, 1)', // green-500
    backgroundColor: 'rgba(240, 253, 244, 1)', // green-50
    transition: elasticTransition
  }
};

/**
 * 拖動預覽動画變体
 */
export const previewVariants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 0.95,
    scale: 1,
    transition: quickTransition
  },
  // 脈搏效果 (可選)
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

/**
 * 放置指示器動画
 */
export const dropIndicatorVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25
    }
  }
};

// ========== 輔助函数 ==========

/**
 * 計算兩個矩形是否重疊 (碰撞检測)
 * @param {DOMRect} rect1 - 第一個矩形
 * @param {DOMRect} rect2 - 第二個矩形
 * @returns {boolean} 是否重疊
 */
export function isRectOverlapping(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

/**
 * 計算重疊面積
 * @param {DOMRect} rect1
 * @param {DOMRect} rect2
 * @returns {number} 重疊面積 (像素平方)
 */
export function getOverlapArea(rect1, rect2) {
  const xOverlap = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
  const yOverlap = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));
  return xOverlap * yOverlap;
}

/**
 * 計算碰撞方向
 * @param {DOMRect} movingRect - 移動的組件
 * @param {DOMRect} targetRect - 目标組件
 * @returns {'left'|'right'|'top'|'bottom'|null}
 */
export function getCollisionDirection(movingRect, targetRect) {
  if (!isRectOverlapping(movingRect, targetRect)) return null;

  const centerX1 = movingRect.left + movingRect.width / 2;
  const centerY1 = movingRect.top + movingRect.height / 2;
  const centerX2 = targetRect.left + targetRect.width / 2;
  const centerY2 = targetRect.top + targetRect.height / 2;

  const dx = centerX2 - centerX1;
  const dy = centerY2 - centerY1;

  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? 'right' : 'left';
  } else {
    return dy > 0 ? 'bottom' : 'top';
  }
}

/**
 * 根据碰撞方向生成反彈動画
 * @param {'left'|'right'|'top'|'bottom'} direction
 * @param {number} intensity - 反彈強度 (0-1)
 * @returns {object} Framer Motion 動画配置
 */
export function getCollisionAnimation(direction, intensity = 0.5) {
  const offset = 10 * intensity; // 最大偏移 10px

  const animations = {
    left: { x: [-offset, 0] },
    right: { x: [offset, 0] },
    top: { y: [-offset, 0] },
    bottom: { y: [offset, 0] }
  };

  return {
    ...animations[direction],
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
      mass: 0.5
    }
  };
}

/**
 * 检測是否應該禁用動画 (Accessibility)
 * 尊重用戶的 prefers-reduced-motion 设置
 */
export function shouldReduceMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * 獲取適配的過渡配置
 * 如果用戶偏好減少動画,返回即時過渡
 */
export function getAdaptiveTransition(transition) {
  if (shouldReduceMotion()) {
    return { duration: 0.01 };
  }
  return transition;
}

// ========== 預定義動画場景 ==========

/**
 * 組件添加到画布的動画
 */
export const componentEnterAnimation = {
  initial: { opacity: 0, scale: 0.8, y: -20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 20 },
  transition: smoothSwapTransition
};

/**
 * 組件刪除動画
 */
export const componentExitAnimation = {
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

/**
 * 成功放置動画 (綠色脈搏)
 */
export const successDropAnimation = {
  scale: [1, 1.1, 1],
  borderColor: ['rgba(34, 197, 94, 0)', 'rgba(34, 197, 94, 1)', 'rgba(34, 197, 94, 0)'],
  transition: {
    duration: 0.6,
    times: [0, 0.5, 1]
  }
};

/**
 * 失敗放置動画 (紅色抖動)
 */
export const failedDropAnimation = {
  x: [0, -10, 10, -10, 10, 0],
  borderColor: ['rgba(239, 68, 68, 0)', 'rgba(239, 68, 68, 1)', 'rgba(239, 68, 68, 0)'],
  transition: {
    duration: 0.5
  }
};
