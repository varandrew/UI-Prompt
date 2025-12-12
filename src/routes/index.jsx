import { createBrowserRouter } from 'react-router-dom';
import { HydrateFallback } from '../components/HydrateFallback';

// 基於 Vite BASE_URL 设定 Router basename，支援子路徑部署（如 /styles）
const __BASENAME__ = (import.meta.env.DEV ? '' : (import.meta.env.BASE_URL || '/')).replace(/\/$/, '');

export const router = createBrowserRouter([
  // 風格預覽页面路由 (不使用主 Layout)
  {
    path: '/styles/preview/:styleId',
    lazy: async () => {
      const [{ StylePreviewPage }, { RouteError }] = await Promise.all([
        import('../pages/styles/StylePreviewPage.jsx'),
        import('../components/RouteError.jsx')
      ]);

      return {
        Component: StylePreviewPage,
        ErrorBoundary: RouteError,
        loader: async ({ params }) => {
          const { decodeStyleId } = await import('../utils/styleHelper.js');
          const { loadStyleFromJSON } = await import('../data/index.js');
          const styleId = decodeStyleId(params.styleId);

          // 只使用 JSON 架構加載
          const style = await loadStyleFromJSON(styleId);

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

  // 代碼編輯器页面路由 (不使用主 Layout)
  {
    path: '/styles/code/:styleId',
    lazy: async () => {
      const [{ CodeEditorPage }, { RouteError }] = await Promise.all([
        import('../pages/styles/CodeEditorPage.jsx'),
        import('../components/RouteError.jsx')
      ]);

      return {
        Component: CodeEditorPage,
        ErrorBoundary: RouteError,
        loader: async ({ params }) => {
          const { decodeStyleId } = await import('../utils/styleHelper.js');
          const { loadStyleFromJSON } = await import('../data/index.js');
          const styleId = decodeStyleId(params.styleId);

          // 只使用 JSON 架構加載
          const style = await loadStyleFromJSON(styleId);

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
      const mod = await import('../components/layout/Layout.jsx')
      const err = await import('../components/RouteError.jsx')
      return { Component: mod.Layout, ErrorBoundary: err.RouteError }
    },
    // React Router v7：在根路由提供 Hydration Fallback
    hydrateFallbackElement: <HydrateFallback />,
    children: [
      // 新的首页
      {
        index: true,
        lazy: async () => ({ Component: (await import('../pages/home/HomePage.jsx')).HomePage, ErrorBoundary: (await import('../components/RouteError.jsx')).RouteError }),
      },
      // Home 路由 (指向相同的首页组件)
      {
        path: 'home',
        lazy: async () => ({ Component: (await import('../pages/home/HomePage.jsx')).HomePage, ErrorBoundary: (await import('../components/RouteError.jsx')).RouteError }),
      },
      // 新的统一风格页面
      {
        path: 'styles',
        // 显式附上副档名以避免個別環境的副档名解析問題
        lazy: async () => ({ Component: (await import('../pages/styles/AllStylesPage.jsx')).AllStylesPage, ErrorBoundary: (await import('../components/RouteError.jsx')).RouteError }),
      },
      // 新的统一组件页面
      {
        path: 'components',
        lazy: async () => ({ Component: (await import('../pages/components/AllComponentsPage.jsx')).AllComponentsPage, ErrorBoundary: (await import('../components/RouteError.jsx')).RouteError }),
      },
      // 布局样式展示页面
      {
        path: 'layouts',
        lazy: async () => ({ Component: (await import('../pages/layouts/LayoutsPage.jsx')).LayoutsPage, ErrorBoundary: (await import('../components/RouteError.jsx')).RouteError }),
      },
      // 新增: 組件詳情页 (動態路由) - 使用 Route Loader 預加載
      {
        path: 'components/:category/:componentId',
        lazy: async () => {
          const [{ ComponentDetailPage }, { RouteError }] = await Promise.all([
            import('../pages/components/ComponentDetailPage.jsx'),
            import('../components/RouteError.jsx')
          ]);

          return {
            Component: ComponentDetailPage,
            ErrorBoundary: RouteError,
            loader: async ({ params }) => {
              const { loadComponentFromJSON } = await import('../data/loaders/jsonComponentLoader.js');
              const { category, componentId } = params;

              // 從 JSON 加載組件
              const component = await loadComponentFromJSON(`${category}/${componentId}`);

              if (!component) {
                throw new Response('組件不存在', {
                  status: 404,
                  statusText: 'Not Found'
                });
              }

              return { component };
            }
          };
        }
      },
      // About 页面
      { path: 'about', lazy: async () => ({ Component: (await import('../pages/about/AboutPage.jsx')).AboutPage, ErrorBoundary: (await import('../components/RouteError.jsx')).RouteError }) },
      // 404 通配符路由 - 必須放在最後
      { path: '*', lazy: async () => ({ Component: (await import('../pages/special/NotFoundPage.jsx')).NotFoundPage, ErrorBoundary: (await import('../components/RouteError.jsx')).RouteError }) },
    ],
  },
], {
  basename: __BASENAME__ || undefined
});
