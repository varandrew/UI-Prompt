import { DEFAULT_LANGUAGE, isValidLanguage, LANGUAGES, normalizeLanguageCode, SUPPORTED_LANGUAGES } from './languageConstants';
import { detectBrowserLanguage } from './detectBrowserLanguage';

export function normalizeStoredLanguage(value) {
  if (!value || typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;

  // Backward compatibility: some older builds may store URL language codes.
  if (trimmed === 'zh') return LANGUAGES.ZH_CN;
  if (trimmed === 'en') return LANGUAGES.EN_US;

  if (isValidLanguage(trimmed)) return normalizeLanguageCode(trimmed);
  return null;
}

export function getPreferredLanguage() {
  try {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('language') : null;
    const normalized = normalizeStoredLanguage(stored);
    if (normalized && SUPPORTED_LANGUAGES.includes(normalized)) {
      return normalized;
    }
  } catch {
    // Ignore storage failures and fall back to browser detection.
  }

  return detectBrowserLanguage() || DEFAULT_LANGUAGE;
}

