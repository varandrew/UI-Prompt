/**
 * Community Gallery Page
 * Public gallery showcasing user-uploaded templates
 * @module pages/community/CommunityGalleryPage
 */

import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { ListPageScaffold } from '../../components/scaffold/ListPageScaffold';
import { UploadCard } from '../../components/community/UploadCard';
import { UploadFilters } from '../../components/community/UploadFilters';
import { fetchUploads, getPopularTags, getCategoryCounts, isSupabaseConfigured } from '../../utils/uploadApi';
import { Plus, Server } from 'lucide-react';

/**
 * Number of items per page
 */
const PAGE_SIZE = 20;

/**
 * Community Gallery Page Component
 */
export function CommunityGalleryPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, language } = useLanguage();

  // State
  const [uploads, setUploads] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [popularTags, setPopularTags] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState([]);

  // Filter state from URL
  const searchQuery = searchParams.get('q') || '';
  const activeCategory = searchParams.get('category') || '';
  const activeTags = searchParams.get('tags')?.split(',').filter(Boolean) || [];
  const sortBy = searchParams.get('sort') || 'created_at';
  const sortOrder = searchParams.get('order') || 'desc';
  const page = parseInt(searchParams.get('page') || '0', 10);

  // Check if Supabase is configured
  const isConfigured = isSupabaseConfigured();

  // Load uploads
  useEffect(() => {
    if (!isConfigured) {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage('community.notConfigured');
      return;
    }

    const loadUploads = async () => {
      setIsLoading(true);
      setIsError(false);

      const { data, total, error } = await fetchUploads({
        search: searchQuery || null,
        category: activeCategory || null,
        tags: activeTags.length > 0 ? activeTags : null,
        sortBy,
        sortOrder,
        pageSize: PAGE_SIZE,
        page,
      });

      if (error) {
        setIsError(true);
        setErrorMessage(error.message || 'Failed to load uploads');
      } else {
        setUploads(data);
        setTotalCount(total);
      }

      setIsLoading(false);
    };

    loadUploads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, searchQuery, activeCategory, JSON.stringify(activeTags), sortBy, sortOrder, page]);

  // Load metadata (tags, categories)
  useEffect(() => {
    if (!isConfigured) return;

    getPopularTags().then(setPopularTags);
    getCategoryCounts().then(setCategoryCounts);
  }, [isConfigured]);

  // Filter handlers
  const handleSearch = useCallback((query) => {
    setSearchParams((prev) => {
      if (query) {
        prev.set('q', query);
      } else {
        prev.delete('q');
      }
      prev.delete('page'); // Reset to first page
      return prev;
    });
  }, [setSearchParams]);

  const handleCategoryChange = useCallback((category) => {
    setSearchParams((prev) => {
      if (category) {
        prev.set('category', category);
      } else {
        prev.delete('category');
      }
      prev.delete('page');
      return prev;
    });
  }, [setSearchParams]);

  const handleTagToggle = useCallback((tag) => {
    setSearchParams((prev) => {
      const currentTags = prev.get('tags')?.split(',').filter(Boolean) || [];
      const newTags = currentTags.includes(tag)
        ? currentTags.filter((t) => t !== tag)
        : [...currentTags, tag];

      if (newTags.length > 0) {
        prev.set('tags', newTags.join(','));
      } else {
        prev.delete('tags');
      }
      prev.delete('page');
      return prev;
    });
  }, [setSearchParams]);

  const handleSortChange = useCallback((newSortBy, newSortOrder) => {
    setSearchParams((prev) => {
      prev.set('sort', newSortBy);
      prev.set('order', newSortOrder);
      prev.delete('page');
      return prev;
    });
  }, [setSearchParams]);

  const handlePageChange = useCallback((newPage) => {
    setSearchParams((prev) => {
      prev.set('page', String(newPage));
      return prev;
    });
  }, [setSearchParams]);

  const handleClearFilters = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  // Navigate to upload page
  const handleCreateNew = useCallback(() => {
    navigate(`/${language}/community/upload`);
  }, [navigate, language]);

  // Navigate to upload detail
  const handleCardClick = useCallback((uploadId) => {
    navigate(`/${language}/community/${uploadId}`);
  }, [navigate, language]);

  // Render upload card
  const renderUploadCard = useCallback((upload) => (
    <UploadCard
      key={upload.id}
      upload={upload}
      language={language}
      onClick={() => handleCardClick(upload.id)}
    />
  ), [language, handleCardClick]);

  // Check if filters are active
  const hasActiveFilters = searchQuery || activeCategory || activeTags.length > 0;

  // Calculate pagination
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  const hasMorePages = page < totalPages - 1;
  const hasPrevPage = page > 0;

  // Render not configured message
  if (!isConfigured) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Server size={64} className="mx-auto mb-6 text-gray-400" />
        <h1 className="text-2xl font-bold text-gray-100 mb-4">
          {t('community.notConfiguredTitle') || 'Community Feature Not Available'}
        </h1>
        <p className="text-gray-400 mb-8">
          {t('community.notConfiguredDescription') ||
            'The community upload feature requires Supabase to be configured. Please set up your Supabase project to enable this feature.'}
        </p>
        <div className="bg-gray-800 rounded-lg p-6 text-left max-w-md mx-auto">
          <p className="text-gray-300 text-sm mb-4">
            {t('community.setupInstructions') || 'To enable the community feature:'}
          </p>
          <ol className="text-gray-400 text-sm space-y-2 list-decimal list-inside">
            <li>{t('community.step1') || 'Create a Supabase project'}</li>
            <li>{t('community.step2') || 'Run the database migrations'}</li>
            <li>{t('community.step3') || 'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY'}</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <ListPageScaffold
      title={t('community.title') || 'Community Templates'}
      description={t('community.description') || 'Discover and share beautiful UI templates created by the community'}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
      renderToolbar={() => (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <UploadFilters
            searchQuery={searchQuery}
            onSearch={handleSearch}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            activeTags={activeTags}
            onTagToggle={handleTagToggle}
            popularTags={popularTags}
            categoryCounts={categoryCounts}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
            t={t}
            language={language}
          />

          <button
            onClick={handleCreateNew}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shrink-0"
          >
            <Plus size={18} />
            <span>{t('community.createNew') || 'Create Template'}</span>
          </button>
        </div>
      )}
      statsConfig={{
        isFiltered: hasActiveFilters,
        filteredCount: totalCount,
        totalLabel: t('community.templates') || 'templates',
      }}
      isEmpty={uploads.length === 0 && !isLoading}
      emptyMessage={
        hasActiveFilters
          ? (t('community.noResults') || 'No templates match your filters')
          : (t('community.empty') || 'No templates yet. Be the first to create one!')
      }
      skeletonCount={8}
    >
      {/* Upload grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {uploads.map(renderUploadCard)}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={!hasPrevPage}
            className={`px-4 py-2 rounded-lg transition-colors ${
              hasPrevPage
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            {t('pagination.prev') || 'Previous'}
          </button>

          <span className="text-gray-400">
            {t('pagination.page') || 'Page'} {page + 1} / {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={!hasMorePages}
            className={`px-4 py-2 rounded-lg transition-colors ${
              hasMorePages
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            {t('pagination.next') || 'Next'}
          </button>
        </div>
      )}
    </ListPageScaffold>
  );
}

export default CommunityGalleryPage;
