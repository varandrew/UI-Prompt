import { createBrowserRouter } from 'react-router-dom';
import { HydrateFallback } from '../components/HydrateFallback';

// 基於 Vite BASE_URL 设定 Router basename，支援子路徑部署（如 /styles）
const __BASENAME__ = (import.meta.env.DEV ? '' : (import.meta.env.BASE_URL || '/')).replace(/\/$/, '');

export const router = createBrowserRouter([
  // 獨立的布局編輯器路由 (不使用主 Layout)
  {
    path: '/layout',
    lazy: async () => ({ Component: (await import('../pages/layouts/LayoutEditorPage')).LayoutEditorPage, ErrorBoundary: (await import('../components/RouteError')).RouteError }),
  },

  // 風格預覽页面路由 (不使用主 Layout)
  {
    path: '/styles/preview/:styleId',
    lazy: async () => {
      const [{ StylePreviewPage }, { RouteError }] = await Promise.all([
        import('../pages/styles/StylePreviewPage'),
        import('../components/RouteError')
      ]);

      return {
        Component: StylePreviewPage,
        ErrorBoundary: RouteError,
        loader: async ({ params }) => {
          const { decodeStyleId, findStyleById } = await import('../utils/styleHelper');
          const styleId = decodeStyleId(params.styleId);
          const style = findStyleById(styleId);

          if (!style) {
            throw new Response('风格不存在', {
              status: 404,
              statusText: 'Not Found'
            });
          }

          return { style };
        }
      };
    }
  },

  // 主應用路由
  {
    path: '/',
    lazy: async () => {
      const mod = await import('../components/layout/Layout')
      const err = await import('../components/RouteError')
      return { Component: mod.Layout, ErrorBoundary: err.RouteError }
    },
    // React Router v7：在根路由提供 Hydration Fallback
    hydrateFallbackElement: <HydrateFallback />,
    children: [
      // 新的首页
      {
        index: true,
        lazy: async () => ({ Component: (await import('../pages/home/HomePage')).HomePage, ErrorBoundary: (await import('../components/RouteError')).RouteError }),
      },
      // Home 路由 (指向相同的首页组件)
      {
        path: 'home',
        lazy: async () => ({ Component: (await import('../pages/home/HomePage')).HomePage, ErrorBoundary: (await import('../components/RouteError')).RouteError }),
      },
      // 新的统一风格页面
      {
        path: 'styles',
        // 显式附上副档名以避免個別環境的副档名解析問題
        lazy: async () => ({ Component: (await import('../pages/styles/AllStylesPage.jsx')).AllStylesPage, ErrorBoundary: (await import('../components/RouteError')).RouteError }),
      },
      // 新的统一组件页面
      {
        path: 'components',
        lazy: async () => ({ Component: (await import('../pages/components/AllComponentsPage')).AllComponentsPage, ErrorBoundary: (await import('../components/RouteError')).RouteError }),
      },
      // 布局样式展示页面
      {
        path: 'layouts',
        lazy: async () => ({ Component: (await import('../pages/layouts/LayoutsPage')).LayoutsPage, ErrorBoundary: (await import('../components/RouteError')).RouteError }),
      },
      // 新增: 組件詳情页 (動態路由)
      { path: 'components/:category/:componentId', lazy: async () => ({ Component: (await import('../pages/components/ComponentDetailPage')).ComponentDetailPage, ErrorBoundary: (await import('../components/RouteError')).RouteError }) },
      // 404 通配符路由 - 必須放在最後
      { path: '*', lazy: async () => ({ Component: (await import('../pages/special/NotFoundPage')).NotFoundPage, ErrorBoundary: (await import('../components/RouteError')).RouteError }) },
    ],
  },
], {
  basename: __BASENAME__ || undefined
});
