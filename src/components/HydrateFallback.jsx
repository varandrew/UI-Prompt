// Hydration fallback component for React Router v7
// 極简風格三點序列載入動画 - 無文字干擾，純視覺傳達
export function HydrateFallback() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gray-50"
      role="status"
      aria-label="Application initializing"
    >
      <div
        className="flex space-x-2 md:space-x-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded-lg p-3"
        tabIndex="0"
      >
        <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-800 rounded-full animate-bounce-1"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-800 rounded-full animate-bounce-2"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-800 rounded-full animate-bounce-3"></div>
      </div>
    </main>
  );
}

