/**
 * Cyberpunk 動画時間軸配置
 * 定義每個組件出現的進度区間和動画參数
 */

export const ANIMATION_TIMELINE = {
  // 背景层 (0-8%) - 約 1.2 秒完成
  background: { start: 0, end: 1, duration: 1 },
  grid: { start: 1, end: 3, duration: 2 },
  scanline: { start: 3, end: 8, duration: 5 },

  // 导航欄 (8-20%) - 約 1.8 秒
  navbar: { start: 8, end: 10, duration: 2 },
  navbarLogo: { start: 10, end: 11, duration: 1 },
  navbarLink1: { start: 11, end: 12, duration: 1 },
  navbarLink2: { start: 12, end: 13, duration: 1 },
  navbarLink3: { start: 13, end: 14, duration: 1 },
  navbarLink4: { start: 14, end: 15, duration: 1 },
  navbarSearch: { start: 15, end: 17, duration: 2 },
  navbarNotif: { start: 17, end: 18, duration: 1 },
  navbarAvatar: { start: 18, end: 20, duration: 2 },

  // Hero 区塊 (20-38%) - 約 2.7 秒
  hero: { start: 20, end: 22, duration: 2 },
  heroTitle: { start: 22, end: 25, duration: 3 },
  heroSubtitle: { start: 25, end: 28, duration: 3 },
  heroButton1: { start: 28, end: 30, duration: 2 },
  heroButton2: { start: 30, end: 32, duration: 2 },
  heroDataflow: { start: 32, end: 38, duration: 6 },

  // 監控卡片 (38-58%) - 約 3 秒
  monitoringSection: { start: 38, end: 40, duration: 2 },
  cpuCard: { start: 40, end: 45, duration: 5 },
  gpuCard: { start: 45, end: 50, duration: 5 },
  networkCard: { start: 50, end: 55, duration: 5 },
  securityCard: { start: 55, end: 58, duration: 3 },

  // 終端区塊 (58-78%) - 約 3 秒
  terminalSection: { start: 58, end: 60, duration: 2 },
  terminalLog1: { start: 60, end: 63, duration: 3 },
  terminalLog2: { start: 63, end: 66, duration: 3 },
  terminalLog3: { start: 66, end: 69, duration: 3 },
  terminalLog4: { start: 69, end: 71, duration: 2 },
  terminalLog5: { start: 71, end: 73, duration: 2 },
  terminalLog6: { start: 73, end: 78, duration: 5 },

  // Footer (78-100%) - 約 3.3 秒
  footer: { start: 78, end: 100, duration: 22 },
};

/**
 * 检查組件是否應該显示
 * @param {string} componentName - 組件名稱
 * @param {number} progress - 當前進度 (0-100)
 * @returns {boolean}
 */
export function shouldShow(componentName, progress) {
  const config = ANIMATION_TIMELINE[componentName];
  if (!config) return false;
  return progress >= config.start;
}

/**
 * 計算組件的動画進度
 * @param {string} componentName - 組件名稱
 * @param {number} progress - 當前進度 (0-100)
 * @returns {number} 0-1 之間的動画進度
 */
export function getAnimationProgress(componentName, progress) {
  const config = ANIMATION_TIMELINE[componentName];
  if (!config) return 0;

  if (progress < config.start) return 0;
  if (progress >= config.end) return 1;

  return (progress - config.start) / config.duration;
}

/**
 * 獲取當前階段名稱(用於滾動定位)
 * @param {number} progress - 當前進度 (0-100)
 * @returns {string}
 */
export function getCurrentStage(progress) {
  if (progress < 0) return 'typing';
  if (progress < 8) return 'background';
  if (progress < 20) return 'navbar';
  if (progress < 38) return 'hero';
  if (progress < 58) return 'monitoring';
  if (progress < 78) return 'terminal';
  if (progress < 100) return 'footer';
  return 'complete';
}
