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
    <header className="border-b border-gray-200/60 dark:border-gray-800/60 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 sticky top-0 z-50 px-4 py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300">
      {/* Left Section: Branding & Mobile Tools */}
      <div className="flex items-center justify-between w-full md:w-auto gap-4">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder */}
          <div className="h-9 w-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-none">
              {displayTitle}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">Style Preview</span>
            </div>
          </div>
        </div>

        {/* Mobile Actions (Right aligned on mobile) */}
        <div className="flex md:hidden gap-1">
          {/* Edit Code (Mobile) - hidden for React previews */}
          {!isReactPreview && (
            <button
              type="button"
              onClick={handleEditCode}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-md transition-all"
              title="Edit Code"
              aria-label="Edit Code"
            >
              <Code2 className="h-5 w-5" />
            </button>
          )}
          {/* Open External (Mobile) */}
          {!isReactPreview && (
            <button
              type="button"
              onClick={onOpenFullPage}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-md transition-all"
              title="Open in New Page"
              aria-label="Open in New Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586L8.293 10.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </button>
          )}
          {/* AI Prompt (Mobile) */}
          <button
            type="button"
            onClick={handleShowPrompt}
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            title="AI Prompt"
            aria-label="AI Prompt"
          >
            <Sparkles className="h-5 w-5" />
          </button>
          {/* Close (Mobile) */}
          <button
            type="button"
            onClick={handleClose}
            onKeyDown={handleCloseKeyDown}
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Middle Section: Segmented Navigation */}
      {hasMultiplePreviews(previewsList) && (
        <div className="w-full md:w-auto overflow-x-auto hide-scrollbar order-last md:order-none mt-2 md:mt-0">
          <PreviewSelector
            previews={previewsList}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
            variant="auto"
          />
        </div>
      )}

      {/* Right Section: Desktop Tools */}
      <div className="hidden md:flex items-center gap-1">
        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>

        {/* Edit Code button - hidden for React previews */}
        {!isReactPreview && (
          <button
            type="button"
            onClick={handleEditCode}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-md transition-all"
            title="Edit Code"
            aria-label="Edit Code"
          >
            <Code2 className="h-[18px] w-[18px]" />
          </button>
        )}

        {/* Open in New Page Button */}
        {!isReactPreview && (
          <button
            type="button"
            onClick={onOpenFullPage}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-md transition-all"
            title="Open in New Page"
            aria-label="Open in New Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586L8.293 10.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </button>
        )}

        {/* AI Prompt button */}
        <button
          type="button"
          onClick={handleShowPrompt}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-md transition-all"
          title="AI Prompt"
          aria-label="AI Prompt"
        >
          <Sparkles className="h-[18px] w-[18px]" />
        </button>

        {/* Desktop close button */}
        <button
          type="button"
          onClick={handleClose}
          onKeyDown={handleCloseKeyDown}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all ml-1"
          title="Close Preview"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
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
