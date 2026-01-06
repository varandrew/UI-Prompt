/**
 * SEOHead Component
 * Manages document head elements for SEO optimization
 * Supports Google and Baidu search engines
 */

import { Helmet } from '@dr.pogodin/react-helmet';
import PropTypes from 'prop-types';
import {
  BASE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  getCanonicalUrl,
  getAlternateUrls,
  getOGLocale,
} from './seoConfig';
import { LANGUAGES } from '../../utils/i18n/languageConstants';

/**
 * SEOHead Component
 * Renders all necessary meta tags for SEO
 */
export function SEOHead({
  title,
  description,
  keywords,
  path = '',
  language = LANGUAGES.ZH_CN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  jsonLd = null,
  noindex = false,
  additionalMeta = [],
}) {
  const siteName = SITE_NAME[language] || SITE_NAME[LANGUAGES.ZH_CN];
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const canonical = getCanonicalUrl(path, language);
  const alternates = getAlternateUrls(path);
  const ogLocale = getOGLocale(language);

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* hreflang for internationalization */}
      {alternates.map(({ lang, href }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={href} />
      ))}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={ogLocale} />
      {language === LANGUAGES.ZH_CN && (
        <meta property="og:locale:alternate" content="en_US" />
      )}
      {language === LANGUAGES.EN_US && (
        <meta property="og:locale:alternate" content="zh_CN" />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={description} />

      {/* Baidu Specific Tags */}
      <meta name="applicable-device" content="pc,mobile" />
      <meta httpEquiv="Cache-Control" content="no-siteapp" />
      <meta httpEquiv="Cache-Control" content="no-transform" />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  path: PropTypes.string,
  language: PropTypes.oneOf([LANGUAGES.ZH_CN, LANGUAGES.EN_US]),
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.oneOf([
    'summary',
    'summary_large_image',
    'app',
    'player',
  ]),
  jsonLd: PropTypes.object,
  noindex: PropTypes.bool,
  additionalMeta: PropTypes.arrayOf(PropTypes.object),
};

export default SEOHead;
