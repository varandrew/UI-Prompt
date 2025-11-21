import { useRouteError } from 'react-router-dom';

/**
 * 路由错誤边界（Minimalism 風格）
 * - 提供更好的错誤可視化与可操作建議
 */
export function RouteError() {
  const error = useRouteError();

  const status = error?.status || error?.statusCode || 'Error';
  const message = error?.message || error?.statusText || 'Unexpected Application Error';

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <section className="w-full max-w-xl bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <header className="mb-4">
          <h1 className="text-lg font-semibold text-gray-900">发生错误</h1>
          <p className="text-sm text-gray-500 mt-1">{String(status)}</p>
        </header>
        <p className="text-sm text-gray-700 mb-4">{String(message)}</p>
        {error?.stack && (
          <pre className="text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded p-3 overflow-auto max-h-64">
            {String(error.stack)}
          </pre>
        )}
        <div className="mt-4 flex items-center gap-3">
          <button
            className="px-3 py-1.5 text-sm rounded-md bg-gray-900 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900"
            onClick={() => window.location.reload()}
          >
            重新加载
          </button>
          <button
            className="px-3 py-1.5 text-sm rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={() => history.back()}
          >
            返回上一页
          </button>
        </div>
      </section>
    </main>
  );
}
