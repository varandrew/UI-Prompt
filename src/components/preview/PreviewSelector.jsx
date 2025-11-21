import { useLanguage } from '../../hooks/useLanguage';

/**
 * PreviewSelector - 預覽選擇器組件（極简主義風格重構版）
 *
 * 设計原則：
 * - 極简配色：黑白灰系統
 * - 充分留白：避免視覺擁擠
 * - 清晰层次：通過边框和颜色区分狀態
 * - 無圓角：純幾何形狀
 * - 極简過渡：仅颜色變化，無複雜動画
 *
 * 響應式设計:
 * - 桌面端 (≥768px): 显示極简按鈕組
 * - 移動端 (<768px): 显示極简下拉選單
 *
 * @param {Object[]} previews - 預覽列表
 * @param {number} activeIndex - 當前激活的預覽索引
 * @param {Function} onChange - 索引變化回調
 * @param {string} variant - 显示模式: 'buttons' | 'dropdown' | 'auto'
 * @param {string} className - 自定義容器樣式
 */
export function PreviewSelector({
  previews = [],
  activeIndex = 0,
  onChange,
  variant = 'auto',
  className = ''
}) {
  const { t, language } = useLanguage();

  // 如果沒有預覽或只有一個預覽,不显示選擇器
  if (!previews || previews.length <= 1) {
    return null;
  }

  // 確保 activeIndex 在有效範圍內
  const safeActiveIndex = Math.min(Math.max(0, activeIndex), previews.length - 1);

  // 處理選擇變化
  const handleChange = (newIndex) => {
    if (newIndex !== safeActiveIndex && onChange) {
      onChange(newIndex);
    }
  };

  // 處理下拉選單變化
  const handleSelectChange = (e) => {
    handleChange(Number(e.target.value));
  };

  // 輔助函数：獲取預覽名稱（處理對象和字符串兩種格式）
  const getPreviewName = (preview, idx) => {
    if (!preview || !preview.name) {
      return `Preview ${idx + 1}`;
    }

    let result = '';
    
    // 如果 name 是對象，直接使用語言鍵
    if (typeof preview.name === 'object' && preview.name !== null && !Array.isArray(preview.name)) {
      result = preview.name[language] || preview.name['zh-cn'] || preview.name['en-US'] || '';
    }
    // 如果 name 是字符串，使用翻譯函数
    else if (typeof preview.name === 'string') {
      result = t(preview.name);
    }
    
    // 確保返回值始終是字符串，避免显示 [object Object]
    return String(result || `Preview ${idx + 1}`);
  };

  // 桌面端：極简按鈕組
  const renderButtons = () => (
    <nav
      className={`inline-flex gap-1 ${className}`}
      role="tablist"
      aria-label={t('preview.selectPreview') || 'Select preview'}
    >
      {previews.map((preview, idx) => {
        // 跳過 inline 类型的預覽
        if (preview.type === 'inline') return null;

        return (
          <button
            key={preview.id || idx}
            type="button"
            role="tab"
            onClick={() => handleChange(idx)}
            aria-selected={idx === safeActiveIndex}
            aria-controls={`preview-panel-${idx}`}
            className={`
              px-3 py-1.5
              text-sm font-medium
              border
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
              ${idx === safeActiveIndex
                ? 'border-black bg-black text-white'
                : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900'
              }
            `.trim().replace(/\s+/g, ' ')}
            title={getPreviewName(preview, idx)}
          >
            {getPreviewName(preview, idx)}
          </button>
        );
      })}
    </nav>
  );

  // 移動端：極简下拉選單
  const renderDropdown = () => (
    <div className={`w-full ${className}`}>
      <label htmlFor="preview-selector" className="sr-only">
        {t('preview.selectPreview') || 'Select preview'}
      </label>
      <select
        id="preview-selector"
        value={safeActiveIndex}
        onChange={handleSelectChange}
        className="
          w-full px-3 py-2.5
          text-sm font-medium text-gray-900
          bg-white
          border border-gray-200
          focus:border-black focus:outline-none focus:ring-1 focus:ring-black
          transition-colors duration-200
        "
        style={{ minHeight: '44px' }}
        aria-label={t('preview.selectPreview') || 'Select preview'}
      >
        {previews.map((preview, idx) => {
          // 跳過 inline 类型的預覽
          if (preview.type === 'inline') return null;

          return (
            <option key={preview.id || idx} value={idx}>
              {getPreviewName(preview, idx)}
            </option>
          );
        })}
      </select>
    </div>
  );

  // 根据 variant 決定显示內容
  switch (variant) {
    case 'buttons':
      return renderButtons();

    case 'dropdown':
      return renderDropdown();

    case 'auto':
    default:
      return (
        <>
          {/* 桌面端: 極简按鈕組 */}
          <div className="hidden md:block">
            {renderButtons()}
          </div>

          {/* 移動端: 極简下拉選單 */}
          <div className="block md:hidden">
            {renderDropdown()}
          </div>
        </>
      );
  }
}
