/**
 * LanguageRedirect Component
 * Redirects root path to language-prefixed path based on browser language
 */

import { Navigate, useLocation } from 'react-router-dom';
import { LANG_TO_URL } from '../components/seo/seoConfig';
import { getPreferredLanguage } from '../utils/i18n/languagePreference';

/**
 * Component that redirects to the appropriate language-prefixed URL
 * Based on stored preference or browser language detection
 */
export function LanguageRedirect() {
  const location = useLocation();

  const language = getPreferredLanguage();
  const urlLang = LANG_TO_URL[language] || 'zh';

  // Preserve the path after redirect (for legacy URLs)
  const targetPath = `/${urlLang}${location.pathname === '/' ? '' : location.pathname}${location.search}`;

  return <Navigate to={targetPath} replace />;
}

/**
 * Component for redirecting legacy paths to language-prefixed paths
 * e.g., /styles -> /zh/styles or /en/styles
 */
export function LegacyRedirect({ basePath = '' }) {
  const location = useLocation();

  const language = getPreferredLanguage();
  const urlLang = LANG_TO_URL[language] || 'zh';

  // Build target path: /:lang + basePath + remaining path
  const remainingPath = location.pathname.slice(basePath.length);
  const targetPath = `/${urlLang}${basePath}${remainingPath}${location.search}`;

  return <Navigate to={targetPath} replace />;
}

export default LanguageRedirect;
