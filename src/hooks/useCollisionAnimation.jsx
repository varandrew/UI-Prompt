import { useState, useEffect, useCallback, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import {
  getCollisionDirection,
  getCollisionAnimation,
  collisionVariants
} from '../utils/animations';

/**
 * 碰撞動画 Hook
 *
 * 用於检測和處理組件拖動時的碰撞效果
 * 提供碰撞狀態、動画控制和視覺反饋
 *
 * @param {string} componentId - 組件 ID
 * @returns {object} 碰撞動画控制器
 */
export function useCollisionAnimation() {
  const [scope, animate] = useAnimate();
  const [isColliding, setIsColliding] = useState(false);
  const [canDrop, setCanDrop] = useState(false);
  const collisionTimeoutRef = useRef(null);

  /**
   * 觸發碰撞動画
   * @param {DOMRect} movingRect - 移動組件的边界矩形
   * @param {DOMRect} targetRect - 目标組件的边界矩形
   * @param {number} intensity - 碰撞強度 (0-1)
   */
  const triggerCollision = useCallback((movingRect, targetRect, intensity = 0.5) => {
    // 清除之前的動画
    if (collisionTimeoutRef.current) {
      clearTimeout(collisionTimeoutRef.current);
    }

    // 设置碰撞狀態
    setIsColliding(true);

    // 計算碰撞方向
    const direction = getCollisionDirection(movingRect, targetRect);

    if (direction && scope.current) {
      // 執行反彈動画
      const collisionAnim = getCollisionAnimation(direction, intensity);
      animate(scope.current, collisionAnim);
    }

    // 延遲重置狀態
    collisionTimeoutRef.current = setTimeout(() => {
      setIsColliding(false);
    }, 400);
  }, [animate, scope]);

  /**
   * 设置可放置狀態
   * @param {boolean} droppable - 是否可放置
   */
  const setDroppable = useCallback((droppable) => {
    setCanDrop(droppable);
  }, []);

  /**
   * 重置所有狀態
   */
  const reset = useCallback(() => {
    setIsColliding(false);
    setCanDrop(false);
    if (collisionTimeoutRef.current) {
      clearTimeout(collisionTimeoutRef.current);
    }
  }, []);

  /**
   * 獲取當前動画變体
   */
  const getVariant = useCallback(() => {
    if (isColliding) return 'collision';
    if (canDrop) return 'canDrop';
    return 'normal';
  }, [isColliding, canDrop]);

  // 清理定時器
  useEffect(() => {
    return () => {
      if (collisionTimeoutRef.current) {
        clearTimeout(collisionTimeoutRef.current);
      }
    };
  }, []);

  return {
    scope,
    isColliding,
    canDrop,
    triggerCollision,
    setDroppable,
    reset,
    getVariant,
    collisionVariants
  };
}
