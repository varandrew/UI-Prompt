import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { LANGUAGES } from '../../utils/i18n/languageConstants';

export function Sidebar() {
  const location = useLocation();
  const { t, switchLanguage, language } = useLanguage();

  const navItems = [
    { path: '/home', label: t('nav.home'), num: '01' },
    { path: '/styles', label: t('nav.allStyles'), num: '02' },
    { path: '/components', label: t('nav.allComponents'), num: '03' },
    {
      path: '/style/minimalism/html-demo-template/',
      label: t('styles.minimalism.fullPageTemplate'),
      num: '04',
      external: true,
      rel: 'noopener noreferrer'
    },
  ];

  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 h-screen bg-black text-white w-16 hover:w-60 z-50 overflow-hidden transition-all duration-200 ease-in-out"
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

        {/* 语言切换器 */}
        <div className="border-t border-gray-800 p-4">
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
