import PropTypes from 'prop-types';
import { Code2, Sparkles } from 'lucide-react';
import { PreviewSelector } from './PreviewSelector';
import { hasMultiplePreviews } from '../../utils/previewsHelper';
import { previewLogger as logger } from '../../utils/logger';

/**
 * PreviewPageHeader - Preview page header component
 *
 * Provides the header UI for style preview pages including:
 * - Title with optional "open in new tab" button
 * - Preview selector (when multiple previews exist)
 * - Edit Code button (opens code editor)
 * - AI Prompt button (opens prompt drawer)
 * - Close buttons (mobile and desktop layouts)
 *
 * Responsive Design:
 * - Mobile: Title and close button on same row, controls below
 * - Desktop: Title left, controls right in horizontal layout
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.displayTitle - Resolved title to display
 * @param {string} props.styleId - Style ID for building URLs
 * @param {number} props.activeIndex - Current preview index
 * @param {Function} props.setActiveIndex - Index setter callback
 * @param {Array} props.previewsList - Array of preview configurations
 * @param {boolean} props.isReactPreview - Whether this is a React component preview
 * @param {boolean} props.isLoadingPreview - Loading state (for logging)
 * @param {Function} props.setShowPrompt - Opens prompt drawer callback
 * @param {Function} props.onOpenFullPage - Opens full page in new window callback
 * @param {string} props.promptContent - Prompt content (for logging)
 */
export function PreviewPageHeader({
  displayTitle,
  styleId,
  activeIndex,
  setActiveIndex,
  previewsList,
  isReactPreview,
  isLoadingPreview,
  setShowPrompt,
  onOpenFullPage,
  promptContent
}) {
  /**
   * Handle Edit Code button click
   * Opens code editor in new tab with current preview index
   */
  const handleEditCode = () => {
    const codeUrl = `/styles/code/${encodeURIComponent(styleId)}${
      activeIndex > 0 ? `?previewIndex=${activeIndex}` : ''
    }`;
    window.open(codeUrl, '_blank');
  };

  /**
   * Handle AI Prompt button click
   * Opens prompt drawer and logs debug info
   */
  const handleShowPrompt = () => {
    logger.debug('AI Prompt button clicked:', {
      styleId,
      promptLength: promptContent?.length || 0,
      hasPrompt: !!promptContent,
      isLoadingPreview
    });
    setShowPrompt(true);
  };

  /**
   * Handle close button click
   * Closes the current window/tab
   */
  const handleClose = () => {
    window.close();
  };

  /**
   * Handle close button keyboard events
   * Supports Enter and Space keys for accessibility
   */
  const handleCloseKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.close();
    }
  };

  return (
    <header className="border-b dark:border-gray-700 p-4 flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-800 gap-3 md:gap-2">
      {/* Mobile: Title and close button on same row */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h3 className="text-lg font-semibold dark:text-gray-100 flex items-center gap-2">
          {displayTitle} - Preview
          {/* Open in new page button (icon only) - hidden for React previews */}
          {!isReactPreview && (
            <button
              type="button"
              onClick={onOpenFullPage}
              className="inline-flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors"
              title="Open Preview in New Page"
              aria-label="Open Preview in New Page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586L8.293 10.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </button>
          )}
        </h3>
        {/* Mobile close button (visible on title row) */}
        <div
          onClick={handleClose}
          onKeyDown={handleCloseKeyDown}
          role="button"
          tabIndex={0}
          className="md:hidden cursor-pointer flex items-center justify-center dark:text-gray-100"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Controls: Preview selector and action buttons */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-stretch md:items-center w-full md:w-auto">
        {/* Preview selector - only show when multiple previews exist */}
        {hasMultiplePreviews(previewsList) && (
          <div className="w-full md:w-auto md:mr-2">
            <PreviewSelector
              previews={previewsList}
              activeIndex={activeIndex}
              onChange={setActiveIndex}
              variant="auto"
            />
          </div>
        )}

        {/* Action buttons row */}
        <div className="flex gap-2">
          {/* Edit Code button - hidden for React previews */}
          {!isReactPreview && (
            <button
              type="button"
              onClick={handleEditCode}
              className="inline-flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400"
              title="Edit Code"
              aria-label="Edit Code"
            >
              <Code2 className="h-5 w-5" />
            </button>
          )}

          {/* AI Prompt button */}
          <button
            type="button"
            onClick={handleShowPrompt}
            className="inline-flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            title="AI Prompt"
            aria-label="AI Prompt"
          >
            <Sparkles className="h-5 w-5" />
          </button>

          {/* Desktop close button (hidden on mobile) */}
          <div
            onClick={handleClose}
            onKeyDown={handleCloseKeyDown}
            role="button"
            tabIndex={0}
            className="hidden md:flex cursor-pointer items-center justify-center dark:text-gray-100"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

PreviewPageHeader.propTypes = {
  displayTitle: PropTypes.string.isRequired,
  styleId: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  previewsList: PropTypes.array.isRequired,
  isReactPreview: PropTypes.bool.isRequired,
  isLoadingPreview: PropTypes.bool.isRequired,
  setShowPrompt: PropTypes.func.isRequired,
  onOpenFullPage: PropTypes.func.isRequired,
  promptContent: PropTypes.string
};

PreviewPageHeader.defaultProps = {
  promptContent: ''
};
