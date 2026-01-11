import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { SEOHead } from '../../components/seo';
import { LANG_TO_URL } from '../../components/seo/seoConfig';
import { LANGUAGES } from '../../utils/i18n/languageConstants';

// Bilingual SEO configuration for 404 page
const SEO_CONFIG = {
  [LANGUAGES.ZH_CN]: {
    title: '页面未找到 - 404',
    description: '抱歉，您访问的页面不存在。请检查网址或返回首页浏览 UI 设计风格和组件库。',
    keywords: '404,页面未找到,UI设计,AI提示词',
  },
  [LANGUAGES.EN_US]: {
    title: 'Page Not Found - 404',
    description: 'Sorry, the page you are looking for does not exist. Please check the URL or return to the homepage to browse UI design styles and components.',
    keywords: '404,page not found,UI design,AI prompts',
  },
};

export function NotFoundPage() {
  const { t, language } = useLanguage();
  const { lang } = useParams();

  // Get current URL language prefix (default to 'zh')
  const currentLang = lang || LANG_TO_URL[language] || 'zh';

  // Get SEO config for current language
  const seo = SEO_CONFIG[language] || SEO_CONFIG[LANGUAGES.ZH_CN];

  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-8">
      {/* SEO Meta Tags - noindex to prevent 404 pages from being indexed */}
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path="/404"
        language={language}
        noindex={true}
      />
      <div className="max-w-2xl w-full text-center">
        {/* 404 */}
        <div className="mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-light leading-none tracking-tighter text-black">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            {t('errors.pageNotFound.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-light">
            {t('errors.pageNotFound.description')}
          </p>
        </div>

        {/* 操作建議 */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 font-light mb-4">
            {t('errors.pageNotFound.suggestions')}
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center justify-center gap-2">
              <span className="w-1 h-1 bg-black rounded-full"></span>
              {t('errors.pageNotFound.checkUrl')}
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1 h-1 bg-black rounded-full"></span>
              {t('errors.pageNotFound.useNavigation')}
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1 h-1 bg-black rounded-full"></span>
              {t('errors.pageNotFound.searchAgain')}
            </li>
          </ul>
        </div>

        {/* 操作按鈕 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={`/${currentLang}`}
            className="inline-flex items-center justify-center px-8 py-3 border border-black bg-black text-white font-light text-sm hover:bg-white hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label={t('errors.pageNotFound.backHome')}
          >
            {t('errors.pageNotFound.backHome')}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-3 border border-black bg-white text-black font-light text-sm hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label={t('errors.pageNotFound.goBack')}
          >
            {t('errors.pageNotFound.goBack')}
          </button>
        </div>

        {/* 快速导航 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 font-light mb-4">
            {t('errors.pageNotFound.quickNav')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to={`/${currentLang}/styles`}
              className="px-4 py-2 text-xs border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              {t('nav.allStyles')}
            </Link>
            <Link
              to={`/${currentLang}/components`}
              className="px-4 py-2 text-xs border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              {t('nav.allComponents')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
