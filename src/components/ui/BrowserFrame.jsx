import { useDarkMode } from '../../hooks/useDarkMode';

/**
 * BrowserFrame - Safari 風格瀏覽器窗口組件 (简化版)
 * 只包含标籤欄,沒有地址欄和控制按鈕
 * 自動響應系統深色模式
 */
export function BrowserFrame({ children }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`browser-frame rounded-xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Safari 窗口頂部工具欄 */}
      <div className={`browser-toolbar border-b ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-b from-gray-200 to-gray-100 border-gray-300'}`}>

        {/* 标籤页区域 */}
        <div className="tabs-bar flex items-center px-2 py-2 space-x-1">
          {/* macOS 交通灯按鈕 */}
          <div className="traffic-lights flex space-x-2 pl-2 pr-4">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
          </div>

          {/* 活動标籤 */}
          <div className={`tab-active flex items-center space-x-2 rounded-t-lg px-4 py-1.5 border border-b-0 shadow-sm min-w-[200px] max-w-[300px] ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
            <svg className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            <span className={`text-sm truncate flex-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Cyberpunk Demo</span>
            <button className={isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 新建标籤按鈕 */}
          <button className={`tab-new px-3 py-1.5 rounded-md ${isDarkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* 內容区域 */}
      <div className={`browser-content ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {children}
      </div>
    </div>
  );
}
