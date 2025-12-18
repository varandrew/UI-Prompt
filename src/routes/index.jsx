/**
 * Application router configuration
 * Defines all routes using React Router v7 with lazy loading
 * Supports URL-based i18n with /:lang prefix
 * @module routes
 */

import { createBrowserRouter, redirect } from 'react-router-dom';
import { HydrateFallback } from '../components/HydrateFallback';
import { LanguageRedirect, LegacyRedirect } from '../components/LanguageRedirect';
import { LanguageLayout } from '../components/LanguageLayout';
import {
  createStyleLoader,
  createStyleLoaderDeferred,
  createComponentLoader,
  createLazyRoute,
} from '../utils/routeLoaders';

/**
 * Application routes configuration with language prefix support
 * URL structure: /:lang/... (e.g., /zh/styles, /en/components)
 * @type {import('react-router-dom').RouteObject[]}
 */
export const router = createBrowserRouter([
  // Root redirect - detect language and redirect
  {
    path: '/',
    element: <LanguageRedirect />,
  },

  // Legacy routes without language prefix - redirect to language-prefixed version
  {
    path: '/home',
    element: <LegacyRedirect basePath="" />,
  },
  {
    path: '/styles',
    element: <LegacyRedirect basePath="/styles" />,
  },
  {
    path: '/styles/preview/:styleId',
    loader: ({ params }) => {
      const storedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('language') : null;
      const urlLang = storedLang === 'en-US' ? 'en' : 'zh';
      return redirect(`/${urlLang}/styles/preview/${params.styleId}`);
    },
  },
  {
    path: '/styles/code/:styleId',
    loader: ({ params }) => {
      const storedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('language') : null;
      const urlLang = storedLang === 'en-US' ? 'en' : 'zh';
      return redirect(`/${urlLang}/styles/code/${params.styleId}`);
    },
  },
  {
    path: '/components',
    element: <LegacyRedirect basePath="/components" />,
  },
  {
    path: '/components/:category/:componentId',
    loader: ({ params }) => {
      const storedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('language') : null;
      const urlLang = storedLang === 'en-US' ? 'en' : 'zh';
      return redirect(`/${urlLang}/components/${params.category}/${params.componentId}`);
    },
  },
  {
    path: '/about',
    element: <LegacyRedirect basePath="/about" />,
  },

  // Language-prefixed preview routes (without main Layout) - uses deferred loading for fast TTF
  {
    path: '/:lang/styles/preview/:styleId',
    lazy: createLazyRoute(
      () => import('../pages/styles/StylePreviewPage.jsx'),
      createStyleLoaderDeferred // Use deferred loader for streaming data
    ),
  },
  // Redirect /:lang/styles/preview (without styleId) to /:lang/styles page
  {
    path: '/:lang/styles/preview',
    loader: ({ params }) => redirect(`/${params.lang}/styles`),
  },
  {
    path: '/:lang/styles/code/:styleId',
    lazy: createLazyRoute(
      () => import('../pages/styles/CodeEditorPage.jsx'),
      createStyleLoader
    ),
  },
  {
    path: '/:lang/components/preview/:category/:componentId',
    lazy: createLazyRoute(
      () => import('../pages/components/ComponentPreviewPage.jsx'),
      createComponentLoader
    ),
  },

  // Main application routes with Layout and language prefix
  {
    path: '/:lang',
    element: <LanguageLayout />,
    children: [
      {
        path: '',
        lazy: async () => {
          const [{ Layout }, { RouteError }] = await Promise.all([
            import('../components/layout/Layout.jsx'),
            import('../components/RouteError.jsx'),
          ]);
          return { Component: Layout, ErrorBoundary: RouteError };
        },
        hydrateFallbackElement: <HydrateFallback />,
        children: [
          {
            index: true,
            lazy: createLazyRoute(() => import('../pages/home/HomePage.jsx')),
          },
          {
            path: 'home',
            lazy: createLazyRoute(() => import('../pages/home/HomePage.jsx')),
          },
          {
            path: 'styles',
            lazy: createLazyRoute(
              () => import('../pages/styles/AllStylesPage.jsx')
            ),
          },
          {
            path: 'components',
            lazy: createLazyRoute(
              () => import('../pages/components/AllComponentsPage.jsx')
            ),
          },
          {
            path: 'components/:category/:componentId',
            lazy: createLazyRoute(
              () => import('../pages/components/ComponentDetailPage.jsx'),
              createComponentLoader
            ),
          },
          {
            path: 'about',
            lazy: createLazyRoute(
              () => import('../pages/about/AboutPage.jsx')
            ),
          },
          {
            path: '*',
            lazy: createLazyRoute(
              () => import('../pages/special/NotFoundPage.jsx')
            ),
          },
        ],
      },
    ],
  },

  // Catch-all for invalid paths - redirect to language detection
  {
    path: '*',
    element: <LanguageRedirect />,
  },
]);
