import PropTypes from 'prop-types';

/**
 * LoadingDots - 可重用的脉冲点加载动画组件
 *
 * 基于极简主义设计，三个点交替脉冲
 * 支持不同尺寸和可选的提示文字
 *
 * @example
 * // 基础用法
 * <LoadingDots />
 *
 * // 带尺寸和文字
 * <LoadingDots size="large" text="正在加载..." />
 *
 * @param {Object} props - 组件属性
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - 点的尺寸
 * @param {string} [props.text] - 可选的加载提示文字
 * @param {string} [props.className] - 额外的 CSS 类名
 * @returns {JSX.Element} 脉冲点加载动画
 */
export function LoadingDots({
  size = 'medium',
  text = null,
  className = ''
}) {
  // 尺寸映射 - 使用 CSS 变量实现动态尺寸
  const sizeStyles = {
    small: { dotSize: '6px', gap: '0.5rem' },
    medium: { dotSize: '8px', gap: '0.75rem' },
    large: { dotSize: '10px', gap: '1rem' }
  };

  const { dotSize, gap } = sizeStyles[size] || sizeStyles.medium;

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-live="polite"
      aria-label={text || 'Loading'}
    >
      {/* 脉冲点容器 */}
      <div
        className="minimalism-loader"
        style={{ gap }}
      >
        <div
          className="minimalism-loader-dot"
          style={{ width: dotSize, height: dotSize }}
        />
        <div
          className="minimalism-loader-dot"
          style={{ width: dotSize, height: dotSize }}
        />
        <div
          className="minimalism-loader-dot"
          style={{ width: dotSize, height: dotSize }}
        />
      </div>

      {/* 可选的提示文字 */}
      {text && (
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          {text}
        </p>
      )}

      {/* 屏幕阅读器提示 */}
      <span className="sr-only">{text || 'Loading...'}</span>
    </div>
  );
}

LoadingDots.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string,
  className: PropTypes.string
};

export default LoadingDots;
