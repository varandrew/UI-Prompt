import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import { LANGUAGES } from "../../utils/i18n/languageConstants";

/**
 * Header - 极简主义顶部导航
 * 特点:
 * - 固定顶部位置 (配合左侧 Sidebar)
 * - 黑白配色 + 1px 边框
 * - 桌面端水平导航 + Active 下划线动画
 * - 移动端抽屉菜单 (静态图标切换)
 * - 完整可达性支持 (ARIA + 键盘导航)
 */
export function Header() {
  const location = useLocation();
  const { t, switchLanguage, language } = useLanguage();
  const { mode, setMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const themeMenuRef = useRef(null);

  const navItems = [
    { path: '/home', label: t('nav.home') },
    { path: '/styles', label: t('nav.allStyles') },
    { path: '/components', label: t('nav.allComponents') },
    { path: '/about', label: t('nav.about') },
  ];

  // 處理 Escape 鍵关閉菜單
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        // 將焦點返回到菜單按鈕
        menuButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // 鎖定背景滾動
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // 恢復背景滾動
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // 焦點陷阱：當菜單打開時，將焦點移至第一個菜單項
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const firstMenuItem = mobileMenuRef.current.querySelector('a, button');
      firstMenuItem?.focus();
    }
  }, [isMobileMenuOpen]);

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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    } else if (currentMode === 'light') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    } else {
      // system mode
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
  };

  return (
    <>
      {/* Skip Navigation Link (無障礙) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black focus:px-4 focus:py-2 focus:text-sm"
      >
        {t('ui.skipNavigation')}
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 h-16 transition-shadow duration-300"
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between"
          role="navigation"
          aria-label={t('ui.mainNavigation')}
        >
          {/* Logo 区域 (左側) */}
          <div className="flex items-center">
            <Link
              to="/home"
              className="text-lg md:text-xl font-light tracking-wider text-black dark:text-white hover:opacity-70 transition-opacity duration-200 focus:outline-2 focus:outline-black dark:focus:outline-white focus:outline-offset-2"
              aria-label={t('ui.goToHomepage')}
            >
              {t('header.appName')}
            </Link>
          </div>

          {/* 桌面端导航链接 (中央) */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const handleClick = (e) => {
                if (item.openInNewTab) {
                  e.preventDefault();
                  const fullUrl = window.location.origin + item.path;
                  window.open(fullUrl, '_blank');
                }
              };
              return (
                <li key={item.path}>
                  {item.openInNewTab ? (
                    <a
                      href={item.path}
                      onClick={handleClick}
                      className={`relative px-4 py-2 text-sm tracking-wide text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-transform after:duration-300 focus:outline-2 focus:outline-black dark:focus:outline-white focus:outline-offset-2 ${
                        isActive
                          ? 'font-medium after:scale-x-100'
                          : 'font-light after:scale-x-0 hover:after:scale-x-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 text-sm tracking-wide text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-transform after:duration-300 focus:outline-2 focus:outline-black dark:focus:outline-white focus:outline-offset-2 ${
                        isActive
                          ? 'font-medium after:scale-x-100'
                          : 'font-light after:scale-x-0 hover:after:scale-x-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* 右側功能区 (主題切換 + 語言切換 + 移動端菜單) */}
          <div className="flex items-center gap-2">
            {/* 主題切換下拉菜單 */}
            <div ref={themeMenuRef} className="relative">
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 rounded-sm focus:outline-2 focus:outline-black dark:focus:outline-white focus:outline-offset-2"
                aria-label={t('ui.toggleDarkMode')}
                aria-expanded={isThemeMenuOpen}
                aria-haspopup="true"
              >
                {getThemeIcon(mode)}
              </button>

              {/* 下拉菜單 */}
              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm shadow-lg z-50">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setMode('light');
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        mode === 'light' ? 'text-black dark:text-white font-medium' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {t('ui.lightModeOption')}
                      {mode === 'light' && <span className="ml-auto">✓</span>}
                    </button>
                    <button
                      onClick={() => {
                        setMode('dark');
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        mode === 'dark' ? 'text-black dark:text-white font-medium' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      {t('ui.darkModeOption')}
                      {mode === 'dark' && <span className="ml-auto">✓</span>}
                    </button>
                    <button
                      onClick={() => {
                        setMode('system');
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        mode === 'system' ? 'text-black dark:text-white font-medium' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {t('ui.systemModeOption')}
                      {mode === 'system' && <span className="ml-auto">✓</span>}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 語言切換按鈕 */}
            <button
              onClick={switchLanguage}
              className="px-3 py-1.5 text-xs font-medium border border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 rounded-sm focus:outline-2 focus:outline-black dark:focus:outline-white focus:outline-offset-2"
              aria-label={t('ui.switchToLanguage')}
            >
              {language === LANGUAGES.ZH_CN || language === LANGUAGES.ZH_CN_LOWER ? 'EN' : t('language.label')}
            </button>

            {/* 移動端菜單按鈕 (静態圖标) */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded focus:outline-2 focus:outline-black dark:focus:outline-white focus:outline-offset-2"
              aria-label={isMobileMenuOpen ? t('ui.closeMenu') : t('ui.openMenu')}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              {isMobileMenuOpen ? (
                // X 图标 (关闭)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // 汉堡图标 (打开)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* 移动端抽屉菜单 */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm animate-slideDown"
            role="menu"
            aria-label={t('ui.mobileNavigationMenu')}
            aria-modal="true"
            aria-hidden={!isMobileMenuOpen}
          >
            <ul className="flex flex-col divide-y divide-gray-100 dark:divide-gray-700">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const handleClick = (e) => {
                  if (item.openInNewTab) {
                    e.preventDefault();
                    const fullUrl = window.location.origin + item.path;
                    window.open(fullUrl, '_blank');
                  }
                  setIsMobileMenuOpen(false);
                };
                return (
                  <li key={item.path}>
                    {item.openInNewTab ? (
                      <a
                        href={item.path}
                        onClick={handleClick}
                        className={`block px-4 md:px-8 py-3 md:py-4 text-sm tracking-wide text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-2 focus:outline-black dark:focus:outline-white focus:outline-offset-2 ${
                          isActive ? 'font-medium bg-gray-50 dark:bg-gray-700' : 'font-light'
                        }`}
                        role="menuitem"
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 md:px-8 py-3 md:py-4 text-sm tracking-wide text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-2 focus:outline-black dark:focus:outline-white focus:outline-offset-2 ${
                          isActive ? 'font-medium bg-gray-50 dark:bg-gray-700' : 'font-light'
                        }`}
                        role="menuitem"
                        onClick={handleClick}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}

            </ul>
          </div>
        )}
      </header>
    </>
  );
}
