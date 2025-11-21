import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-8">
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
            to="/"
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
              to="/styles"
              className="px-4 py-2 text-xs border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              {t('nav.allStyles')}
            </Link>
            <Link
              to="/components"
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
