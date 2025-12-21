/**
 * LanguageLayout Component
 * Wrapper that syncs URL language with application state
 */

import { Outlet, useParams, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import {
  isValidUrlLang,
  urlLangToInternal,
} from '../hooks/useLanguageFromUrl';
import { LANG_TO_URL } from '../components/seo/seoConfig';
import { getPreferredLanguage } from '../utils/i18n/languagePreference';

/**
 * Layout component that syncs URL language parameter with language context
 * Renders children (Outlet) with the correct language
 */
export function LanguageLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const { language, setLanguageDirectly } = useLanguage();

  // Validate URL language
  const isValid = isValidUrlLang(lang);

  // Sync URL language with context
  const urlLanguage = isValid ? urlLangToInternal(lang) : null;

  useEffect(() => {
    if (urlLanguage && urlLanguage !== language && setLanguageDirectly) {
      setLanguageDirectly(urlLanguage);
    }
  }, [urlLanguage, language, setLanguageDirectly]);

  // Invalid language code, redirect to detected language
  if (!isValid) {
    const preferredLang = getPreferredLanguage();
    const urlLangCode = LANG_TO_URL[preferredLang] || 'zh';
    const pathname = location?.pathname || '/';
    const restPath =
      typeof lang === 'string' && pathname.startsWith(`/${lang}`)
        ? pathname.slice(lang.length + 1)
        : pathname;
    return <Navigate to={`/${urlLangCode}${restPath}${location?.search || ''}`} replace />;
  }

  return <Outlet />;
}

export default LanguageLayout;
