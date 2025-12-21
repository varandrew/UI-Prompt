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
import { LANG_TO_URL } from '../components/seo/seoConfig';
import { getPreferredLanguage } from '../utils/i18n/languagePreference';
import {
  createStyleLoader,
  createStyleLoaderDeferred,
  createComponentLoader,
  createComponentPreviewLoaderDeferred,
  createLazyRoute,
} from '../utils/routeLoaders';

// Shared helper for legacy redirects: localStorage -> browser detection -> default
// NOTE: Must be safe when imported in non-browser contexts (e.g., tests).
function getPreferredUrlLang() {
  const internal = getPreferredLanguage();
  return LANG_TO_URL[internal] || 'zh';
}

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
    loader: ({ params, request }) => {
      const urlLang = getPreferredUrlLang();
      const url = new URL(request.url);
      return redirect(`/${urlLang}/styles/preview/${params.styleId}${url.search}`);
    },
  },
  {
    path: '/styles/code/:styleId',
    loader: ({ params, request }) => {
      const urlLang = getPreferredUrlLang();
      const url = new URL(request.url);
      return redirect(`/${urlLang}/styles/code/${params.styleId}${url.search}`);
    },
  },
  {
    path: '/components',
    element: <LegacyRedirect basePath="/components" />,
  },
  {
    path: '/components/:category/:componentId',
    loader: ({ params, request }) => {
      const urlLang = getPreferredUrlLang();
      const url = new URL(request.url);
      return redirect(`/${urlLang}/components/${params.category}/${params.componentId}${url.search}`);
    },
  },
  {
    path: '/about',
    element: <LegacyRedirect basePath="/about" />,
  },
  {
    path: '/community',
    element: <LegacyRedirect basePath="/community" />,
  },
  {
    path: '/community/:uploadId',
    loader: ({ params, request }) => {
      const urlLang = getPreferredUrlLang();
      const url = new URL(request.url);
      return redirect(`/${urlLang}/community/${params.uploadId}${url.search}`);
    },
  },

  // Language-prefixed preview routes (without main Layout) - uses deferred loading for fast TTF
  // Still uses LanguageLayout to sync URL lang -> i18n context.
  {
    path: '/:lang/styles/preview/:styleId',
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        lazy: createLazyRoute(
          () => import('../pages/styles/StylePreviewPage.jsx'),
          createStyleLoaderDeferred // Use deferred loader for streaming data
        ),
      },
    ],
  },
  // Redirect /:lang/styles/preview (without styleId) to /:lang/styles page
  {
    path: '/:lang/styles/preview',
    loader: ({ params }) => redirect(`/${params.lang}/styles`),
  },
  {
    path: '/:lang/styles/code/:styleId',
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        lazy: createLazyRoute(
          () => import('../pages/styles/CodeEditorPage.jsx'),
          createStyleLoader
        ),
      },
    ],
  },
  {
    path: '/:lang/components/preview/:category/:componentId',
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        lazy: createLazyRoute(
          () => import('../pages/components/ComponentPreviewPage.jsx'),
          createComponentPreviewLoaderDeferred
        ),
      },
    ],
  },

  // Community upload editor (full screen, without Layout)
  {
    path: '/:lang/community/upload',
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        lazy: createLazyRoute(
          () => import('../pages/community/UploadEditorPage.jsx')
        ),
      },
    ],
  },
  {
    path: '/:lang/community/:uploadId/edit',
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        lazy: createLazyRoute(
          () => import('../pages/community/UploadEditorPage.jsx')
        ),
      },
    ],
  },

  // Community upload preview (full screen, without Layout)
  {
    path: '/:lang/community/preview/:uploadId',
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        lazy: createLazyRoute(
          () => import('../pages/community/UploadPreviewPage.jsx')
        ),
      },
    ],
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
            path: 'community',
            lazy: createLazyRoute(
              () => import('../pages/community/CommunityGalleryPage.jsx')
            ),
          },
          {
            path: 'community/:uploadId',
            lazy: createLazyRoute(
              () => import('../pages/community/UploadPreviewPage.jsx')
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
