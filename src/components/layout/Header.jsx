import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const navItems = [
    { path: '/home', label: t('nav.home') },
    { path: '/styles', label: t('nav.allStyles') },
    { path: '/components', label: t('nav.allComponents') },
    { path: '/layout', label: t('nav.layout'), openInNewTab: true },
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

  return (
    <>
      {/* Skip Navigation Link (無障礙) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        {t('ui.skipNavigation')}
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 h-16 transition-shadow duration-300"
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
              className="text-lg md:text-xl font-light tracking-wider text-black hover:opacity-70 transition-opacity duration-200 focus:outline-2 focus:outline-black focus:outline-offset-2"
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
                      className={`relative px-4 py-2 text-sm tracking-wide text-black hover:text-gray-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black after:transition-transform after:duration-300 focus:outline-2 focus:outline-black focus:outline-offset-2 ${
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
                      className={`relative px-4 py-2 text-sm tracking-wide text-black hover:text-gray-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black after:transition-transform after:duration-300 focus:outline-2 focus:outline-black focus:outline-offset-2 ${
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

          {/* 右側功能区 (語言切換 + 移動端菜單) */}
          <div className="flex items-center gap-2">
            <button
              onClick={switchLanguage}
              className="px-3 py-1.5 text-xs font-medium border border-black hover:bg-black hover:text-white transition-all duration-200 rounded-sm focus:outline-2 focus:outline-black focus:outline-offset-2"
              aria-label={t('ui.switchToLanguage')}
            >
              {language === LANGUAGES.ZH_CN || language === LANGUAGES.ZH_CN_LOWER ? 'EN' : t('language.label')}
            </button>

            {/* 移動端菜單按鈕 (静態圖标) */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-black hover:bg-gray-100 transition-colors duration-200 rounded focus:outline-2 focus:outline-black focus:outline-offset-2"
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
            className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-sm animate-slideDown"
            role="menu"
            aria-label={t('ui.mobileNavigationMenu')}
            aria-modal="true"
            aria-hidden={!isMobileMenuOpen}
          >
            <ul className="flex flex-col divide-y divide-gray-100">
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
                        className={`block px-4 md:px-8 py-3 md:py-4 text-sm tracking-wide text-black hover:bg-gray-50 transition-colors duration-200 focus:outline-2 focus:outline-black focus:outline-offset-2 ${
                          isActive ? 'font-medium bg-gray-50' : 'font-light'
                        }`}
                        role="menuitem"
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 md:px-8 py-3 md:py-4 text-sm tracking-wide text-black hover:bg-gray-50 transition-colors duration-200 focus:outline-2 focus:outline-black focus:outline-offset-2 ${
                          isActive ? 'font-medium bg-gray-50' : 'font-light'
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
