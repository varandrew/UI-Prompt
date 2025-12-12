import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import { LANGUAGES } from '../../utils/i18n/languageConstants';

export function Sidebar() {
  const location = useLocation();
  const { t, switchLanguage, language } = useLanguage();
  const { mode, setMode } = useDarkMode();
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef(null);

  const navItems = [
    { path: '/home', label: t('nav.home'), num: '01' },
    { path: '/styles', label: t('nav.allStyles'), num: '02' },
    { path: '/components', label: t('nav.allComponents'), num: '03' },
    { path: '/about', label: t('nav.about'), num: '04' },
    {
      path: '/style/minimalism/html-demo-template/',
      label: t('styles.minimalism.fullPageTemplate'),
      num: '05',
      external: true,
      rel: 'noopener noreferrer'
    },
  ];

  // 處理主題菜單外部點擊關閉
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
        setIsThemeMenuOpen(false);
      }
    };

    if (isThemeMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isThemeMenuOpen]);

  // 獲取當前主題圖標
  const getThemeIcon = (currentMode) => {
    if (currentMode === 'dark') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    } else if (currentMode === 'light') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    } else {
      // system mode
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
  };

  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 h-screen bg-black dark:bg-gray-900 text-white w-16 hover:w-60 z-50 overflow-hidden transition-all duration-200 ease-in-out"
    >
      <nav className="flex flex-col h-full">
        <div className="h-16 flex items-center justify-center border-b border-gray-800">
          <span className="text-2xl font-light">{t('nav.logoShort')}</span>
        </div>

        <div className="flex-1 py-8 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            // 外部連結使用 <a> 标籤
            if (item.external) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel={item.rel}
                  className="flex items-center gap-4 px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200"
                >
                  <span className="text-base">{item.num}</span>
                  <span className="nav-text text-xs font-light opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              );
            }

            // 內部路由使用 <Link> 組件
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 ${
                  location.pathname === item.path ? 'bg-white text-black' : ''
                }`}
              >
                <span className="text-base">{item.num}</span>
                <span className="nav-text text-xs font-light opacity-0 group-hover:opacity-100 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 主題切換器和語言切換器 */}
        <div className="border-t border-gray-800 p-4 space-y-2">
          {/* 主題切換下拉菜單 */}
          <div ref={themeMenuRef} className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="w-full flex items-center gap-2 px-4 py-2 text-xs hover:bg-white hover:text-black transition-colors duration-200 rounded"
              title={t('ui.currentTheme')}
              aria-expanded={isThemeMenuOpen}
              aria-haspopup="true"
            >
              <span className="text-base">{getThemeIcon(mode)}</span>
              <span className="nav-text opacity-0 whitespace-nowrap">
                {mode === 'light' ? t('ui.lightModeOption') : mode === 'dark' ? t('ui.darkModeOption') : t('ui.systemModeOption')}
              </span>
            </button>

            {/* 下拉菜單 */}
            {isThemeMenuOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-full bg-gray-800 border border-gray-700 rounded shadow-lg z-50">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setMode('light');
                      setIsThemeMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs flex items-center gap-2 hover:bg-gray-700 transition-colors ${
                      mode === 'light' ? 'text-white font-medium' : 'text-gray-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="nav-text">{t('ui.lightModeOption')}</span>
                    {mode === 'light' && <span className="ml-auto">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      setMode('dark');
                      setIsThemeMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs flex items-center gap-2 hover:bg-gray-700 transition-colors ${
                      mode === 'dark' ? 'text-white font-medium' : 'text-gray-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="nav-text">{t('ui.darkModeOption')}</span>
                    {mode === 'dark' && <span className="ml-auto">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      setMode('system');
                      setIsThemeMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs flex items-center gap-2 hover:bg-gray-700 transition-colors ${
                      mode === 'system' ? 'text-white font-medium' : 'text-gray-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="nav-text">{t('ui.systemModeOption')}</span>
                    {mode === 'system' && <span className="ml-auto">✓</span>}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 語言切換器 */}
          <button
            onClick={switchLanguage}
            className="w-full flex items-center gap-2 px-4 py-2 text-xs hover:bg-white hover:text-black transition-colors duration-200 rounded"
            title={t('language.switch')}
          >
            <span className="text-base font-semibold">{language === LANGUAGES.ZH_CN ? 'EN' : t('language.label')}</span>
            <span className="nav-text opacity-0 whitespace-nowrap">
              {t('language.switch')}
            </span>
          </button>
        </div>
      </nav>

      <style>{`
        #sidebar:hover .nav-text {
          opacity: 1;
        }
      `}</style>
    </aside>
  );
}
