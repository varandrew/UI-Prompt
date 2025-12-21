/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { getTranslation, preloadTranslations } from "../utils/i18n/translations";
import { LANGUAGES, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "../utils/i18n/languageConstants";
import { getPreferredLanguage } from "../utils/i18n/languagePreference";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return getPreferredLanguage();
  });

  const [translationsVersion, setTranslationsVersion] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch {
      // Ignore storage failures (e.g., blocked storage).
    }
  }, [language]);

  useEffect(() => {
    let cancelled = false;

    preloadTranslations(language)
      .then(() => {
        if (!cancelled) {
          setTranslationsVersion((v) => v + 1);
        }
      })
      .catch(() => {
        // Ignore - translation loading failures should not crash the app
      });

    return () => {
      cancelled = true;
    };
  }, [language]);

  // 稳定化 t 函数，避免每次渲染重新創建
  const t = useCallback((key, params = {}) => {
    // 使用聚合翻譯器（含 fallback 与 kebab/camel 修復）
    const raw = getTranslation(key, language);
    const value = typeof raw === 'string' ? raw : key;
    if (!value || typeof value !== 'string') return key;
    // 參数插值：確保所有參数值都是字符串，避免显示 [object Object]
    return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
      if (params[paramKey] !== undefined) {
        // 如果參数值是對象，嘗試提取對應語言的文本
        if (typeof params[paramKey] === 'object' && params[paramKey] !== null && !Array.isArray(params[paramKey])) {
          const objValue = params[paramKey][language] || params[paramKey][LANGUAGES.ZH_CN] || params[paramKey][LANGUAGES.ZH_CN_LOWER] || params[paramKey][LANGUAGES.EN_US] || '';
          return String(objValue || '');
        }
        // 確保返回值是字符串
        return String(params[paramKey] || '');
      }
      return match;
    });
  }, [language]);

  // 稳定化 switchLanguage 函数
  const switchLanguage = useCallback(() => {
    setLanguage(prev => prev === LANGUAGES.ZH_CN ? LANGUAGES.EN_US : LANGUAGES.ZH_CN);
  }, []);

  // 直接设置语言（用於 URL 同步）
  const setLanguageDirectly = useCallback((newLang) => {
    if (SUPPORTED_LANGUAGES.includes(newLang)) {
      setLanguage(newLang);
    }
  }, []);

  // 稳定化 Context value，避免每次渲染都是新對象
  const contextValue = useMemo(() => ({
    language,
    t,
    switchLanguage,
    setLanguageDirectly,
    // Triggers context updates when async translations finish loading.
    _translationsVersion: translationsVersion
  }), [language, t, switchLanguage, setLanguageDirectly, translationsVersion]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // 在極端情況下（例如測試環境或某些獨立掛載的組件）
    // 有可能未被 LanguageProvider 包裹，為避免整個應用崩潰，
    // 這里提供一個安全的回退實現，並在開發模式下給出警告。
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
      console.warn('[useLanguage] used outside LanguageProvider. Falling back to default language context.');
    }

    return {
      language: DEFAULT_LANGUAGE,
      t: (key) => key,
      switchLanguage: () => {},
      setLanguageDirectly: () => {},
    };
  }
  return context;
}
