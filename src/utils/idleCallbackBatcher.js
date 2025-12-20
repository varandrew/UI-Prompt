/**
 * IdleCallbackBatcher - 批處理 requestIdleCallback 調度器
 *
 * 避免每個組件獨立調度 requestIdleCallback，
 * 改用全局批處理，減少調度開銷。
 *
 * 🚀 性能優化：
 * - 收集同一幀內的所有回調
 * - 使用單個 requestIdleCallback 批量執行
 * - 支持優先級排序
 *
 * @module utils/idleCallbackBatcher
 */

// 待執行的回調隊列
const pendingCallbacks = [];

// 當前批次是否已調度
let isScheduled = false;

// 默認超時時間
const DEFAULT_TIMEOUT = 300;

/**
 * 執行批處理
 * @param {IdleDeadline} deadline - requestIdleCallback 提供的 deadline
 */
function executeBatch(deadline) {
  isScheduled = false;

  // 在空閒時間內盡可能多地執行回調
  while (pendingCallbacks.length > 0) {
    // 檢查是否還有空閒時間（至少需要 1ms）
    if (deadline.timeRemaining() < 1 && !deadline.didTimeout) {
      // 沒有空閒時間了，重新調度剩餘的回調
      scheduleBatch();
      break;
    }

    const callback = pendingCallbacks.shift();
    try {
      callback();
    } catch (error) {
      console.warn('[IdleCallbackBatcher] Callback error:', error);
    }
  }
}

/**
 * 調度批處理執行
 */
function scheduleBatch() {
  if (isScheduled || pendingCallbacks.length === 0) {
    return;
  }

  isScheduled = true;

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(executeBatch, { timeout: DEFAULT_TIMEOUT });
  } else {
    // Fallback: 使用 setTimeout
    setTimeout(() => {
      executeBatch({
        timeRemaining: () => 50,
        didTimeout: false
      });
    }, 16); // 約一幀的時間
  }
}

/**
 * 添加回調到批處理隊列
 *
 * @param {Function} callback - 要執行的回調函數
 * @param {Object} [options] - 可選配置
 * @param {boolean} [options.priority=false] - 是否優先執行
 * @returns {Function} 取消函數
 */
export function scheduleIdleCallback(callback, options = {}) {
  const { priority = false } = options;

  if (priority) {
    // 優先級高的回調放在隊列前面
    pendingCallbacks.unshift(callback);
  } else {
    pendingCallbacks.push(callback);
  }

  scheduleBatch();

  // 返回取消函數
  return () => {
    const index = pendingCallbacks.indexOf(callback);
    if (index !== -1) {
      pendingCallbacks.splice(index, 1);
    }
  };
}

/**
 * 清空所有待執行的回調
 */
export function clearIdleCallbacks() {
  pendingCallbacks.length = 0;
  isScheduled = false;
}

/**
 * 獲取當前隊列長度（用於調試）
 */
export function getQueueLength() {
  return pendingCallbacks.length;
}

export default { scheduleIdleCallback, clearIdleCallbacks, getQueueLength };
