// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { componentLibrary } from '../../data/components/componentLibrary';
import { previewVariants, quickTransition } from '../../utils/animations';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * 拖動預覽組件
 *
 * 職責:
 * - 显示正在拖動的組件的詳細信息
 * - 显示中文名稱和描述
 * - 跟隨鼠标移動
 *
 * 设計:
 * - 極简風格:白色背景、藍色边框、柔和阴影
 * - 清晰层次:圖标 + 文本垂直排列
 * - 可讀性:足夠對比度、合適字號
 */
export function DragPreview({ activeData }) {
  const { language } = useLanguage();
  
  const getComponentInfo = () => {
    if (!activeData?.current) return null;

    const { componentType } = activeData.current;

    // 从組件庫查找定義
    const componentDef = componentLibrary.find(
      c => c.componentType === componentType
    );

    if (!componentDef) return null;

    return {
      name: componentDef.displayName?.[language] || componentDef.displayName?.['zh-cn'] || componentDef.displayName?.['en-US'] || '',
      description: componentDef.description?.[language] || componentDef.description?.['zh-cn'] || componentDef.description?.['en-US'] || '',
      icon: componentDef.icon || '📦'
    };
  };

  const info = getComponentInfo();

  if (!info) {
    // 降級显示:無法找到組件定義時
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={previewVariants}
        className="bg-blue-100 border-2 border-blue-500 rounded-lg p-3 shadow-xl opacity-90 pointer-events-none"
      >
        <p className="text-sm font-medium text-blue-900">拖动中...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={previewVariants}
      transition={quickTransition}
      className="bg-white border-2 border-blue-500 rounded-lg p-3 shadow-xl opacity-95 max-w-xs pointer-events-none"
    >
      <div className="flex items-start gap-3">
        {/* 組件圖标 */}
        <motion.span
          className="text-3xl flex-shrink-0"
          aria-hidden="true"
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          {info.icon}
        </motion.span>

        {/* 組件信息 */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {info.name}
          </p>
          {info.description && (
            <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed">
              {info.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
