/**
 * Upload Editor Store
 * Zustand store for managing the code editor state
 * @module stores/useUploadEditorStore
 */

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

// ============================================
// Initial State
// ============================================

const initialState = {
  // Code content
  htmlCode: '',
  cssCode: '',
  jsCode: '',
  jsxCode: '',

  // Active editor tab
  activeTab: 'html', // 'html' | 'css' | 'js' | 'jsx' | 'full'

  // Metadata
  title: { 'zh-CN': '', 'en-US': '' },
  description: { 'zh-CN': '', 'en-US': '' },
  tags: [],
  category: 'community',
  authorName: '',

  // Render configuration
  renderMode: 'html', // 'html' | 'jsx' | 'react-jsx'

  // Editor settings
  theme: 'vs-dark', // 'vs-dark' | 'light'
  splitRatio: 50, // Editor/preview split ratio
  isVertical: false, // Layout direction
  autoPreview: true, // Auto-update preview on change
  fontSize: 14,
  wordWrap: 'on',

  // State flags
  isDirty: false, // Has unsaved changes
  isSaving: false,
  isLoading: false,
  lastSaved: null,

  // Validation
  validationErrors: [],
  validationWarnings: [],

  // Upload metadata (for editing existing uploads)
  uploadId: null,
  isEditMode: false,
};

// ============================================
// Store
// ============================================

export const useUploadEditorStore = create(
  persist(
    immer((set, get) => ({
      ...initialState,

      // ============================================
      // Code Actions
      // ============================================

      /**
       * Set code for a specific tab
       */
      setCode: (tab, code) => set((state) => {
        state[`${tab}Code`] = code;
        state.isDirty = true;

        // Auto-detect render mode based on content
        if (tab === 'jsx' && code.trim()) {
          // Check if it's React JSX (has React imports or hooks)
          const isReactJSX = /import\s+.*?from\s+['"]react['"]/.test(code) ||
                            /useState|useEffect|useCallback|useMemo/.test(code);
          state.renderMode = isReactJSX ? 'react-jsx' : 'jsx';
        } else if (tab === 'html' && code.trim() && !state.jsxCode.trim()) {
          state.renderMode = 'html';
        }
      }),

      /**
       * Set active tab
       */
      setActiveTab: (tab) => set((state) => {
        state.activeTab = tab;
      }),

      /**
       * Reset code to initial state
       */
      resetCode: () => set((state) => {
        state.htmlCode = '';
        state.cssCode = '';
        state.jsCode = '';
        state.jsxCode = '';
        state.isDirty = false;
        state.renderMode = 'html';
      }),

      // ============================================
      // Metadata Actions
      // ============================================

      /**
       * Set title (bilingual)
       */
      setTitle: (lang, value) => set((state) => {
        state.title[lang] = value;
        state.isDirty = true;
      }),

      /**
       * Set description (bilingual)
       */
      setDescription: (lang, value) => set((state) => {
        state.description[lang] = value;
        state.isDirty = true;
      }),

      /**
       * Set tags
       */
      setTags: (tags) => set((state) => {
        state.tags = tags;
        state.isDirty = true;
      }),

      /**
       * Add a tag
       */
      addTag: (tag) => set((state) => {
        const normalizedTag = tag.trim().toLowerCase();
        if (normalizedTag && !state.tags.includes(normalizedTag)) {
          state.tags.push(normalizedTag);
          state.isDirty = true;
        }
      }),

      /**
       * Remove a tag
       */
      removeTag: (tag) => set((state) => {
        state.tags = state.tags.filter((t) => t !== tag);
        state.isDirty = true;
      }),

      /**
       * Set category
       */
      setCategory: (category) => set((state) => {
        state.category = category;
        state.isDirty = true;
      }),

      /**
       * Set author name
       */
      setAuthorName: (name) => set((state) => {
        state.authorName = name;
        state.isDirty = true;
      }),

      /**
       * Set render mode
       */
      setRenderMode: (mode) => set((state) => {
        state.renderMode = mode;
        state.isDirty = true;
      }),

      // ============================================
      // Editor Settings Actions
      // ============================================

      /**
       * Toggle theme
       */
      toggleTheme: () => set((state) => {
        state.theme = state.theme === 'vs-dark' ? 'light' : 'vs-dark';
      }),

      /**
       * Set theme
       */
      setTheme: (theme) => set((state) => {
        state.theme = theme;
      }),

      /**
       * Set split ratio
       */
      setSplitRatio: (ratio) => set((state) => {
        state.splitRatio = Math.max(20, Math.min(80, ratio));
      }),

      /**
       * Toggle layout direction
       */
      toggleLayout: () => set((state) => {
        state.isVertical = !state.isVertical;
      }),

      /**
       * Toggle auto preview
       */
      toggleAutoPreview: () => set((state) => {
        state.autoPreview = !state.autoPreview;
      }),

      /**
       * Set font size
       */
      setFontSize: (size) => set((state) => {
        state.fontSize = Math.max(10, Math.min(24, size));
      }),

      /**
       * Toggle word wrap
       */
      toggleWordWrap: () => set((state) => {
        state.wordWrap = state.wordWrap === 'on' ? 'off' : 'on';
      }),

      // ============================================
      // State Flag Actions
      // ============================================

      /**
       * Set saving state
       */
      setSaving: (isSaving) => set((state) => {
        state.isSaving = isSaving;
      }),

      /**
       * Set loading state
       */
      setLoading: (isLoading) => set((state) => {
        state.isLoading = isLoading;
      }),

      /**
       * Mark as saved
       */
      markSaved: () => set((state) => {
        state.isDirty = false;
        state.lastSaved = new Date().toISOString();
        state.isSaving = false;
      }),

      /**
       * Mark as dirty
       */
      markDirty: () => set((state) => {
        state.isDirty = true;
      }),

      // ============================================
      // Validation Actions
      // ============================================

      /**
       * Set validation results
       */
      setValidation: (errors, warnings = []) => set((state) => {
        state.validationErrors = errors;
        state.validationWarnings = warnings;
      }),

      /**
       * Clear validation results
       */
      clearValidation: () => set((state) => {
        state.validationErrors = [];
        state.validationWarnings = [];
      }),

      // ============================================
      // Load/Export Actions
      // ============================================

      /**
       * Load from an existing upload
       */
      loadFromUpload: (upload) => set((state) => {
        state.htmlCode = upload.html_content || '';
        state.cssCode = upload.css_content || '';
        state.jsCode = upload.js_content || '';
        state.jsxCode = upload.jsx_content || '';
        state.title = upload.title || { 'zh-CN': '', 'en-US': '' };
        state.description = upload.description || { 'zh-CN': '', 'en-US': '' };
        state.tags = upload.tags || [];
        state.category = upload.category || 'community';
        state.authorName = upload.author_name || '';
        state.renderMode = upload.render_mode || 'html';
        state.uploadId = upload.id;
        state.isEditMode = true;
        state.isDirty = false;
        state.isLoading = false;
      }),

      /**
       * Export editor state as upload data
       */
      exportAsUpload: () => {
        const state = get();
        return {
          title: state.title,
          description: state.description,
          html_content: state.htmlCode || null,
          css_content: state.cssCode || null,
          js_content: state.jsCode || null,
          jsx_content: state.jsxCode || null,
          render_mode: state.renderMode,
          category: state.category,
          tags: state.tags,
          author_name: state.authorName || 'Anonymous',
        };
      },

      /**
       * Reset entire state
       */
      reset: () => set((state) => {
        Object.assign(state, initialState);
      }),

      /**
       * Reset but keep editor settings
       */
      resetContent: () => set((state) => {
        state.htmlCode = '';
        state.cssCode = '';
        state.jsCode = '';
        state.jsxCode = '';
        state.title = { 'zh-CN': '', 'en-US': '' };
        state.description = { 'zh-CN': '', 'en-US': '' };
        state.tags = [];
        state.category = 'community';
        state.authorName = '';
        state.renderMode = 'html';
        state.uploadId = null;
        state.isEditMode = false;
        state.isDirty = false;
        state.validationErrors = [];
        state.validationWarnings = [];
      }),

      // ============================================
      // Selectors (computed values)
      // ============================================

      /**
       * Get current code based on active tab
       */
      getCurrentCode: () => {
        const state = get();
        switch (state.activeTab) {
          case 'html':
            return state.htmlCode;
          case 'css':
            return state.cssCode;
          case 'js':
            return state.jsCode;
          case 'jsx':
            return state.jsxCode;
          default:
            return state.htmlCode;
        }
      },

      /**
       * Check if content is empty
       */
      isEmpty: () => {
        const state = get();
        return !state.htmlCode.trim() &&
               !state.cssCode.trim() &&
               !state.jsCode.trim() &&
               !state.jsxCode.trim();
      },

      /**
       * Check if metadata is valid
       */
      hasValidMetadata: () => {
        const state = get();
        return (state.title['zh-CN']?.trim() || state.title['en-US']?.trim());
      },

      /**
       * Get available tabs based on content
       */
      getAvailableTabs: () => {
        const state = get();

        // If JSX has content, show JSX-focused tabs
        if (state.jsxCode.trim()) {
          return [
            { id: 'jsx', label: 'JSX' },
            { id: 'css', label: 'CSS' },
          ];
        }

        // Default HTML/CSS/JS tabs
        return [
          { id: 'html', label: 'HTML' },
          { id: 'css', label: 'CSS' },
          { id: 'js', label: 'JavaScript' },
        ];
      },
    })),
    {
      name: 'upload-editor-settings',
      // Only persist editor settings, not content
      partialize: (state) => ({
        theme: state.theme,
        splitRatio: state.splitRatio,
        isVertical: state.isVertical,
        autoPreview: state.autoPreview,
        fontSize: state.fontSize,
        wordWrap: state.wordWrap,
      }),
    }
  )
);

// ============================================
// Selector Hooks
// ============================================

/**
 * Select code content
 */
export const useEditorCode = () =>
  useUploadEditorStore((state) => ({
    htmlCode: state.htmlCode,
    cssCode: state.cssCode,
    jsCode: state.jsCode,
    jsxCode: state.jsxCode,
    activeTab: state.activeTab,
    renderMode: state.renderMode,
  }));

/**
 * Select metadata
 */
export const useEditorMetadata = () =>
  useUploadEditorStore((state) => ({
    title: state.title,
    description: state.description,
    tags: state.tags,
    category: state.category,
    authorName: state.authorName,
  }));

/**
 * Select editor settings
 */
export const useEditorSettings = () =>
  useUploadEditorStore((state) => ({
    theme: state.theme,
    splitRatio: state.splitRatio,
    isVertical: state.isVertical,
    autoPreview: state.autoPreview,
    fontSize: state.fontSize,
    wordWrap: state.wordWrap,
  }));

/**
 * Select state flags
 */
export const useEditorState = () =>
  useUploadEditorStore((state) => ({
    isDirty: state.isDirty,
    isSaving: state.isSaving,
    isLoading: state.isLoading,
    lastSaved: state.lastSaved,
    isEditMode: state.isEditMode,
    uploadId: state.uploadId,
  }));

/**
 * Select validation results
 */
export const useEditorValidation = () =>
  useUploadEditorStore((state) => ({
    validationErrors: state.validationErrors,
    validationWarnings: state.validationWarnings,
  }));

export default useUploadEditorStore;
