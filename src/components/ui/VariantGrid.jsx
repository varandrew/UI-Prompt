import Masonry from 'react-masonry-css';
import { VariantCard } from './VariantCard';
import './VariantGrid.css';

/**
 * VariantGrid - 瀑布流佈局容器
 * 使用 Masonry 佈局展示組件的多個變体
 * 支持: 點擊預覽 + Prompt 功能
 */
export function VariantGrid({
  variants = [],
  onViewCode,
  onGetPrompt,
  onPreview // 預覽功能 (可選)
}) {
  // 響應式斷點配置
  const breakpointColumns = {
    default: 3,  // 桌面: 3 列
    1024: 2,     // 平板: 2 列
    768: 1       // 手機: 1 列
  };

  if (!variants || variants.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-4xl mb-4">📦</div>
        <p className="text-gray-600">
          暫無變体数据
        </p>
      </div>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="variants-masonry-grid"
      columnClassName="variants-masonry-grid-column"
    >
      {variants.map((variant, index) => (
        <VariantCard
          key={variant.id || index}
          variant={variant}
          index={index}
          onViewCode={onViewCode}
          onGetPrompt={onGetPrompt}
          onPreview={onPreview}
        />
      ))}
    </Masonry>
  );
}

export default VariantGrid;
