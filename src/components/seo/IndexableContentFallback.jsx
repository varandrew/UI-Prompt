/**
 * IndexableContentFallback Component
 * Provides crawlable content for pages using iframe previews
 * Hidden from users but visible to search engines
 */
import PropTypes from 'prop-types';
import { resolveI18nValue } from '../../utils/i18n/resolveI18nValue';

export function IndexableContentFallback({
  title,
  description,
  useCases = [],
  promptExcerpt = '',
  keywords = [],
  language = 'zh-CN'
}) {
  const displayDescription = typeof description === 'object'
    ? resolveI18nValue(description, language)
    : description;

  return (
    <div
      className="seo-content-fallback sr-only"
      aria-hidden="true"
      role="complementary"
    >
      <h1>{title}</h1>

      {displayDescription && (
        <p className="seo-description">{displayDescription}</p>
      )}

      {useCases.length > 0 && (
        <section className="seo-use-cases">
          <h2>{language === 'zh-CN' ? '使用情境' : 'Use Cases'}</h2>
          <ul>
            {useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </section>
      )}

      {promptExcerpt && (
        <section className="seo-prompt-excerpt">
          <h2>{language === 'zh-CN' ? 'AI 提示詞' : 'AI Prompt'}</h2>
          <p>{promptExcerpt}</p>
        </section>
      )}

      {keywords.length > 0 && (
        <section className="seo-keywords">
          <h2>{language === 'zh-CN' ? '技術標籤' : 'Technical Tags'}</h2>
          <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

IndexableContentFallback.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  useCases: PropTypes.arrayOf(PropTypes.string),
  promptExcerpt: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  language: PropTypes.string
};
