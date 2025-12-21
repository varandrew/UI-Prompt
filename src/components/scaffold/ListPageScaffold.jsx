/**
 * ListPageScaffold - Reusable List Page Layout Component
 *
 * Provides consistent structure for list pages while allowing
 * flexibility in toolbar and content rendering.
 *
 * Design: Composition over configuration (render slots pattern)
 *
 * @module components/scaffold/ListPageScaffold
 */

import { useLanguage } from '../../hooks/useLanguage';
import { SKELETON_COUNTS } from '../../utils/constants';
import { LoadingDots } from '../ui/LoadingDots';

/**
 * Page Header Slot Component
 */
export function PageHeader({ title, description }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-light mb-2 text-black dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * Toolbar Skeleton - Loading state for toolbar area
 * @param {Object} props
 * @param {'simple' | 'complex'} props.variant - Skeleton variant
 */
export function ToolbarSkeleton({ variant = 'complex' }) {
  if (variant === 'simple') {
    // For AllComponentsPage style (SearchBar + FilterTabs)
    return (
      <div role="status" aria-live="polite" className="animate-pulse motion-reduce:animate-none mb-8">
        <div className="h-10 w-full rounded bg-slate-200 dark:bg-slate-700 mb-4" />
        <div className="flex gap-2">
          <div className="h-10 w-20 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-10 w-28 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    );
  }
  // For AllStylesPage style (complex FilterBar)
  return (
    <div role="status" aria-live="polite" className="animate-pulse motion-reduce:animate-none mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <div className="h-10 w-full md:max-w-sm rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-10 w-28 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
  );
}

/**
 * Result Statistics Bar
 * @param {Object} props
 * @param {boolean} props.isLoading - Loading state
 * @param {boolean} props.isFiltered - Whether filters are active
 * @param {number} props.filteredCount - Number of filtered items
 * @param {number} props.totalCount - Total number of items
 * @param {string} props.filteredLabel - Label when filtered (e.g., "Found 10 results")
 * @param {string} props.totalLabel - Label when not filtered (e.g., "Showing all 50 styles")
 * @param {boolean} props.showTotal - Whether to show total count on right side
 * @param {string} props.totalLabelRight - Label for total count on right side
 * @param {React.ReactNode} props.rightContent - Custom content to render on the right side
 */
export function ResultStats({
  isLoading,
  isFiltered,
  filteredCount,
  totalCount,
  filteredLabel,
  totalLabel,
  showTotal = true,
  totalLabelRight,
  rightContent
}) {
  const { t } = useLanguage();

  return (
    <div className="mb-6 flex items-center justify-between">
      {isLoading ? (
        <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-700 animate-pulse motion-reduce:animate-none" />
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isFiltered ? filteredLabel : totalLabel}
        </p>
      )}

      <div className="flex items-center gap-4">
        {showTotal && !isLoading && filteredCount > 0 && (
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {totalLabelRight || t('common.totalStyles', { count: totalCount })}
          </div>
        )}
        {rightContent}
      </div>
    </div>
  );
}

/**
 * Content Skeleton - Grid of loading placeholders
 * @param {Object} props
 * @param {number} props.count - Number of skeleton cards
 * @param {string} props.columns - Tailwind grid column classes
 * @param {string} props.gap - Tailwind gap class
 */
export function ContentSkeleton({
  count = SKELETON_COUNTS.STYLES,
  columns = 'md:grid-cols-2 lg:grid-cols-3',
  gap = 'gap-8'
}) {
  const { t } = useLanguage();

  return (
    <section role="status" aria-live="polite" className="space-y-4">
      <div className={`grid grid-cols-1 ${columns} ${gap}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse motion-reduce:animate-none rounded-lg border border-slate-200 dark:border-slate-700 p-4"
          >
            <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700 mb-3" />
            <div className="h-28 w-full rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>
      <p className="sr-only">{t('common.loading') || 'Loading...'}</p>
    </section>
  );
}

/**
 * Error State Component
 * @param {Object} props
 * @param {string} props.message - Error message
 * @param {Function} props.onRetry - Retry handler
 * @param {string} props.retryLabel - Retry button label
 */
export function ErrorState({ message, onRetry, retryLabel }) {
  const { t } = useLanguage();

  return (
    <div className="rounded-lg border border-red-200 dark:border-red-800 p-6 bg-red-50/60 dark:bg-red-900/20">
      <p className="text-red-700 dark:text-red-300 text-sm mb-4">
        {message || t('common.loadFailed') || 'Load failed, please try again later.'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
        >
          {retryLabel || t('common.retry') || 'Retry'}
        </button>
      )}
    </div>
  );
}

/**
 * Empty State Component
 * @param {Object} props
 * @param {Function} props.onClear - Clear filters handler
 * @param {string} props.clearLabel - Clear button label
 * @param {string} props.title - Empty state title
 * @param {string} props.hint - Empty state hint text
 */
export function EmptyState({ onClear, clearLabel, title, hint }) {
  const { t } = useLanguage();

  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
        {title || t('common.noResults')}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {hint || t('common.noResultsHint')}
      </p>
      {onClear && (
        <button
          onClick={onClear}
          className="inline-flex items-center justify-center px-4 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-600 dark:focus-visible:ring-sky-400"
        >
          {clearLabel || t('common.clearFilters')}
        </button>
      )}
    </div>
  );
}

/**
 * Loading Content State Component
 * 显示内容加载中状态（区分初始加载和数据加载中）
 */
export function LoadingContentState() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <LoadingDots size="large" />
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {t('common.loadingContent') || 'Loading content...'}
      </p>
    </div>
  );
}

/**
 * Main Scaffold Component
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {boolean} props.isLoading - Loading state
 * @param {boolean} props.isError - Error state
 * @param {Function} props.onRetry - Retry handler for error state
 * @param {Function} props.renderToolbar - Render function for toolbar slot
 * @param {'simple' | 'complex'} props.toolbarSkeletonVariant - Skeleton variant
 * @param {Object} props.statsConfig - Configuration for result stats
 * @param {React.ReactNode} props.children - Content to render when loaded
 * @param {boolean} props.isEmpty - Whether the result is empty
 * @param {boolean} props.isLoadingContent - Whether content is still loading (distinguishes from truly empty)
 * @param {Function} props.onClearFilters - Handler for empty state clear button
 * @param {number} props.skeletonCount - Number of skeleton cards
 * @param {string} props.skeletonColumns - Tailwind grid column classes
 * @param {string} props.skeletonGap - Tailwind gap class
 * @param {string} props.className - Additional CSS classes
 */
export function ListPageScaffold({
  // Header
  title,
  description,

  // State
  isLoading,
  isError,
  onRetry,

  // Toolbar
  renderToolbar,
  toolbarSkeletonVariant = 'complex',

  // Stats
  statsConfig = {},

  // Content
  children,
  isEmpty,
  isLoadingContent = false,
  onClearFilters,

  // Skeleton
  skeletonCount,
  skeletonColumns,
  skeletonGap,

  // Additional
  className = ''
}) {
  return (
    <section className={`mb-24 ${className}`} aria-busy={isLoading}>
      {/* Page Header */}
      <PageHeader title={title} description={description} />

      {/* Toolbar Slot */}
      {isLoading ? (
        <ToolbarSkeleton variant={toolbarSkeletonVariant} />
      ) : (
        renderToolbar?.()
      )}

      {/* Result Statistics */}
      <ResultStats isLoading={isLoading} {...statsConfig} />

      {/* Content Area */}
      {isLoading ? (
        <ContentSkeleton
          count={skeletonCount}
          columns={skeletonColumns}
          gap={skeletonGap}
        />
      ) : isError ? (
        <ErrorState onRetry={onRetry} />
      ) : isEmpty && isLoadingContent ? (
        <LoadingContentState />
      ) : isEmpty ? (
        <EmptyState onClear={onClearFilters} />
      ) : (
        children
      )}
    </section>
  );
}

export default ListPageScaffold;
