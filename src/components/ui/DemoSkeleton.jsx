/**
 * DemoSkeleton - StyleCard demo 區域的載入骨架
 *
 * 用於延遲載入時顯示載入動畫，
 * 提供視覺反饋避免空白狀態。
 */
export function DemoSkeleton({ className = '' }) {
  return (
    <div
      className={`
        w-full h-full min-h-[120px]
        bg-gradient-to-br from-slate-200 to-slate-300
        dark:from-slate-700 dark:to-slate-800
        rounded-lg
        animate-pulse motion-reduce:animate-none
        flex items-center justify-center
        ${className}
      `}
      aria-hidden="true"
      role="presentation"
    >
      {/* 內部裝飾元素 */}
      <div className="flex flex-col items-center gap-3 opacity-40">
        {/* 標題骨架 */}
        <div className="h-4 w-24 bg-slate-400 dark:bg-slate-600 rounded" />
        {/* 內容骨架 */}
        <div className="flex flex-col gap-2">
          <div className="h-3 w-32 bg-slate-400 dark:bg-slate-600 rounded" />
          <div className="h-3 w-28 bg-slate-400 dark:bg-slate-600 rounded" />
        </div>
      </div>
    </div>
  );
}

/**
 * DemoPlaceholder - 未進入 viewport 前的佔位元素
 *
 * 比 DemoSkeleton 更輕量，用於尚未觸發載入的卡片
 */
export function DemoPlaceholder({ className = '' }) {
  return (
    <div
      className={`
        w-full h-full min-h-[120px]
        bg-slate-100 dark:bg-slate-800
        rounded-lg
        flex items-center justify-center
        ${className}
      `}
      aria-hidden="true"
      role="presentation"
    >
      <div className="text-slate-400 dark:text-slate-600 text-sm">
        {/* 空狀態圖標 */}
        <svg
          className="w-8 h-8 mx-auto mb-2 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}

export default DemoSkeleton;
