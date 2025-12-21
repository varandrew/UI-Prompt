import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { LANGUAGES } from '../src/utils/i18n/languageConstants';
import { getPreferredLanguage, normalizeStoredLanguage } from '../src/utils/i18n/languagePreference';

describe('languagePreference', () => {
  const originalNavigator = globalThis.navigator;
  const originalLocalStorage = globalThis.localStorage;

  beforeEach(() => {
    // Ensure clean slate per test.
    delete globalThis.navigator;
    delete globalThis.localStorage;
  });

  afterEach(() => {
    if (originalNavigator) {
      globalThis.navigator = originalNavigator;
    } else {
      delete globalThis.navigator;
    }

    if (originalLocalStorage) {
      globalThis.localStorage = originalLocalStorage;
    } else {
      delete globalThis.localStorage;
    }
  });

  describe('normalizeStoredLanguage', () => {
    it('returns null for empty/invalid values', () => {
      expect(normalizeStoredLanguage(null)).toBe(null);
      expect(normalizeStoredLanguage(undefined)).toBe(null);
      expect(normalizeStoredLanguage('')).toBe(null);
      expect(normalizeStoredLanguage('   ')).toBe(null);
      expect(normalizeStoredLanguage('xx')).toBe(null);
    });

    it('normalizes legacy URL language codes', () => {
      expect(normalizeStoredLanguage('zh')).toBe(LANGUAGES.ZH_CN);
      expect(normalizeStoredLanguage('en')).toBe(LANGUAGES.EN_US);
    });

    it('normalizes supported internal language codes', () => {
      expect(normalizeStoredLanguage('zh-CN')).toBe(LANGUAGES.ZH_CN);
      expect(normalizeStoredLanguage('en-US')).toBe(LANGUAGES.EN_US);
      expect(normalizeStoredLanguage('zh-cn')).toBe(LANGUAGES.ZH_CN);
    });
  });

  describe('getPreferredLanguage', () => {
    it('prefers localStorage when valid', () => {
      globalThis.localStorage = {
        getItem(key) {
          return key === 'language' ? 'en-US' : null;
        },
        setItem() {}
      };

      expect(getPreferredLanguage()).toBe(LANGUAGES.EN_US);
    });

    it('supports legacy localStorage values (zh/en)', () => {
      globalThis.localStorage = {
        getItem(key) {
          return key === 'language' ? 'en' : null;
        },
        setItem() {}
      };

      expect(getPreferredLanguage()).toBe(LANGUAGES.EN_US);
    });

    it('falls back to browser detection when localStorage invalid', () => {
      globalThis.localStorage = {
        getItem() {
          return 'xx';
        },
        setItem() {}
      };
      globalThis.navigator = { language: 'en-GB' };

      expect(getPreferredLanguage()).toBe(LANGUAGES.EN_US);
    });

    it('is safe in non-browser environments', () => {
      expect(getPreferredLanguage()).toBe(LANGUAGES.ZH_CN);
    });
  });
});

