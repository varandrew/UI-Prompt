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

/**
 * 全局碰撞管理 Hook
 *
 * 用於在 LayoutEditorPage 层級管理所有組件的碰撞狀態
 * 追蹤當前拖動的組件和可能的碰撞目标
 */
export function useGlobalCollisionManager() {
  const [activeCollisions, setActiveCollisions] = useState(new Map());
  const activeRectRef = useRef(null);

  /**
   * 设置當前拖動組件的边界
   */
  const setActiveDragRect = useCallback((rect) => {
    activeRectRef.current = rect;
  }, []);

  /**
   * 註冊碰撞检測
   * @param {string} targetId - 目标組件 ID
   * @param {DOMRect} targetRect - 目标組件边界
   * @returns {boolean} 是否發生碰撞
   */
  const checkCollision = useCallback((targetId, targetRect) => {
    if (!activeRectRef.current || !targetRect) return false;

    const isOverlapping = !(
      activeRectRef.current.right < targetRect.left ||
      activeRectRef.current.left > targetRect.right ||
      activeRectRef.current.bottom < targetRect.top ||
      activeRectRef.current.top > targetRect.bottom
    );

    if (isOverlapping) {
      setActiveCollisions((prev) => {
        const next = new Map(prev);
        next.set(targetId, {
          targetRect,
          timestamp: Date.now()
        });
        return next;
      });
    } else {
      setActiveCollisions((prev) => {
        const next = new Map(prev);
        next.delete(targetId);
        return next;
      });
    }

    return isOverlapping;
  }, []);

  /**
   * 清除所有碰撞狀態
   */
  const clearCollisions = useCallback(() => {
    setActiveCollisions(new Map());
    activeRectRef.current = null;
  }, []);

  /**
   * 獲取特定組件的碰撞狀態
   */
  const isColliding = useCallback((componentId) => {
    return activeCollisions.has(componentId);
  }, [activeCollisions]);

  return {
    setActiveDragRect,
    checkCollision,
    clearCollisions,
    isColliding,
    activeCollisions
  };
}
