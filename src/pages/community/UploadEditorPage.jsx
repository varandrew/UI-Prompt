/**
 * Upload Editor Page
 * CodePen-like editor for creating and editing user uploads
 * @module pages/community/UploadEditorPage
 */

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { CodeEditor } from '../../components/code/CodeEditor';
import { LivePreview } from '../../components/code/LivePreview';
import { useUploadEditorStore } from '../../stores/useUploadEditorStore';
import { validateAllContent } from '../../utils/contentValidator';
import { createUpload, updateUpload, fetchUploadById } from '../../utils/uploadApi';
import { FileUploader } from '../../components/community/UploadEditor/FileUploader';
import { MetadataForm } from '../../components/community/UploadEditor/MetadataForm';
import { EditorToolbar } from '../../components/community/UploadEditor/EditorToolbar';
import { PublishModal } from '../../components/community/UploadEditor/PublishModal';
import appCssUrl from '../../index.css?url';

/**
 * Upload Editor Page Component
 */
export function UploadEditorPage() {
  const navigate = useNavigate();
  const { uploadId } = useParams();
  const { t, language } = useLanguage();
  const { copy: copyToClipboard } = useCopyToClipboard({
    onError: (err) => console.error('Copy failed:', err)
  });

  // Store state
  const {
    htmlCode,
    cssCode,
    jsCode,
    jsxCode,
    activeTab,
    title,
    description,
    tags,
    category,
    authorName,
    renderMode,
    theme,
    splitRatio,
    isVertical,
    autoPreview,
    isDirty,
    isSaving,
    isLoading,
    validationErrors,
    validationWarnings,
    isEditMode,
  } = useUploadEditorStore();

  // Store actions
  const {
    setCode,
    setActiveTab,
    setTitle,
    setDescription,
    setTags,
    addTag,
    removeTag,
    setCategory,
    setAuthorName,
    setRenderMode,
    toggleTheme,
    setSplitRatio,
    toggleLayout,
    setSaving,
    setLoading,
    markSaved,
    setValidation,
    loadFromUpload,
    exportAsUpload,
    resetContent,
  } = useUploadEditorStore();

  // Local state
  const [showMetadataPanel, setShowMetadataPanel] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showFileUploader, setShowFileUploader] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);

  // Load existing upload if editing
  useEffect(() => {
    if (uploadId) {
      setLoading(true);
      fetchUploadById(uploadId).then(({ data, error }) => {
        if (data) {
          loadFromUpload(data);
        } else {
          console.error('Failed to load upload:', error);
          navigate(`/${language}/community`);
        }
      });
    } else {
      // New upload - reset content but keep settings
      resetContent();
    }
  }, [uploadId, language, navigate, setLoading, loadFromUpload, resetContent]);

  // Determine available tabs based on content
  const tabs = useMemo(() => {
    if (jsxCode.trim()) {
      return [
        { id: 'jsx', label: 'JSX' },
        { id: 'css', label: 'CSS' },
      ];
    }
    return [
      { id: 'html', label: 'HTML' },
      { id: 'css', label: 'CSS' },
      { id: 'js', label: 'JavaScript' },
    ];
  }, [jsxCode]);

  // Auto-switch to appropriate tab when JSX content changes
  useEffect(() => {
    if (jsxCode.trim() && activeTab !== 'jsx' && activeTab !== 'css') {
      setActiveTab('jsx');
    } else if (!jsxCode.trim() && activeTab === 'jsx') {
      setActiveTab('html');
    }
  }, [jsxCode, activeTab, setActiveTab]);

  // Get current code for editor
  const currentCode = useMemo(() => {
    switch (activeTab) {
      case 'html':
        return htmlCode;
      case 'css':
        return cssCode;
      case 'js':
        return jsCode;
      case 'jsx':
        return jsxCode;
      default:
        return htmlCode;
    }
  }, [activeTab, htmlCode, cssCode, jsCode, jsxCode]);

  // Get editor language
  const currentLanguage = useMemo(() => {
    switch (activeTab) {
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      case 'js':
      case 'jsx':
        return 'javascript';
      default:
        return 'html';
    }
  }, [activeTab]);

  // Handle code change
  const handleCodeChange = useCallback((value) => {
    setCode(activeTab, value);

    // Trigger preview update
    if (autoPreview) {
      setPreviewKey((k) => k + 1);
    }
  }, [activeTab, autoPreview, setCode]);

  // Handle file upload
  const handleFileUpload = useCallback((files) => {
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const ext = file.name.split('.').pop().toLowerCase();

        switch (ext) {
          case 'html':
          case 'htm':
            setCode('html', content);
            break;
          case 'css':
            setCode('css', content);
            break;
          case 'js':
            setCode('js', content);
            break;
          case 'jsx':
          case 'tsx':
            setCode('jsx', content);
            break;
          default:
            console.warn('Unknown file type:', ext);
        }
      };
      reader.readAsText(file);
    }
    setShowFileUploader(false);
  }, [setCode]);

  // Validate content
  const handleValidate = useCallback(() => {
    const result = validateAllContent({
      html: htmlCode,
      css: cssCode,
      js: jsCode,
      jsx: jsxCode,
    });

    setValidation(result.totalErrors, result.totalWarnings);
    return result.isValid;
  }, [htmlCode, cssCode, jsCode, jsxCode, setValidation]);

  // Handle publish
  const handlePublish = useCallback(async () => {
    // Validate first
    if (!handleValidate()) {
      return { success: false, error: 'Validation failed' };
    }

    // Check metadata
    if (!title['zh-CN']?.trim() && !title['en-US']?.trim()) {
      setValidation([{ type: 'metadata', message: 'Title is required' }]);
      return { success: false, error: 'Title is required' };
    }

    setSaving(true);

    try {
      const uploadData = exportAsUpload();

      if (isEditMode && uploadId) {
        const { data, error } = await updateUpload(uploadId, uploadData);
        if (error) throw error;
        markSaved();
        return { success: true, data };
      } else {
        const { data, error } = await createUpload(uploadData);
        if (error) throw error;
        markSaved();
        // Navigate to the new upload
        if (data?.id) {
          navigate(`/${language}/community/${data.id}`);
        }
        return { success: true, data };
      }
    } catch (error) {
      console.error('Publish failed:', error);
      setValidation([{ type: 'server', message: error.message || 'Publish failed' }]);
      return { success: false, error: error.message };
    } finally {
      setSaving(false);
    }
  }, [
    handleValidate,
    title,
    exportAsUpload,
    isEditMode,
    uploadId,
    language,
    navigate,
    setValidation,
    setSaving,
    markSaved,
  ]);

  // Handle copy code
  const handleCopy = useCallback(async () => {
    return copyToClipboard(currentCode);
  }, [currentCode, copyToClipboard]);

  // Handle download
  const handleDownload = useCallback(() => {
    const buildFullHTML = () => {
      if (jsxCode.trim()) {
        // For JSX, download the JSX file
        const blob = new Blob([jsxCode], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'component.jsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        return;
      }

      // Build full HTML document
      const fullHTML = `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title[language] || title['en-US'] || 'Untitled'}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
${cssCode}
  </style>
</head>
<body>
${htmlCode}
${jsCode ? `<script>\n${jsCode}\n</script>` : ''}
</body>
</html>`;

      const blob = new Blob([fullHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'template.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    buildFullHTML();
  }, [htmlCode, cssCode, jsCode, jsxCode, title, language]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (showPublishModal) {
          setShowPublishModal(false);
        } else if (showMetadataPanel) {
          setShowMetadataPanel(false);
        } else if (showFileUploader) {
          setShowFileUploader(false);
        } else {
          // Confirm before leaving if dirty
          if (isDirty) {
            if (window.confirm(t('community.editor.unsavedChanges') || 'You have unsaved changes. Are you sure you want to leave?')) {
              navigate(-1);
            }
          } else {
            navigate(-1);
          }
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navigate, isDirty, showPublishModal, showMetadataPanel, showFileUploader, t]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
        <div className="text-white text-lg">{t('loading') || 'Loading...'}</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      {/* Toolbar */}
      <EditorToolbar
        title={title[language] || title['en-US'] || t('community.editor.untitled') || 'Untitled'}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={theme}
        onThemeToggle={toggleTheme}
        onCopy={handleCopy}
        onDownload={handleDownload}
        onUpload={() => setShowFileUploader(true)}
        onMetadata={() => setShowMetadataPanel(true)}
        onPublish={() => setShowPublishModal(true)}
        isVertical={isVertical}
        onLayoutToggle={toggleLayout}
        onClose={() => navigate(-1)}
        isDirty={isDirty}
        isSaving={isSaving}
        isEditMode={isEditMode}
        t={t}
      />

      {/* Main content area */}
      <div className={`flex-1 flex ${isVertical ? 'flex-col' : 'flex-row'} overflow-hidden`}>
        {/* Editor panel */}
        <div
          className="bg-gray-900 overflow-hidden"
          style={{
            [isVertical ? 'height' : 'width']: `${splitRatio}%`,
            minWidth: isVertical ? '100%' : '300px',
            minHeight: isVertical ? '200px' : '100%',
          }}
        >
          <CodeEditor
            value={currentCode}
            language={currentLanguage}
            theme={theme}
            onChange={handleCodeChange}
          />
        </div>

        {/* Splitter */}
        <div
          className={`${
            isVertical ? 'h-1 w-full cursor-row-resize' : 'w-1 h-full cursor-col-resize'
          } bg-gray-700 hover:bg-blue-500 transition-colors`}
          onMouseDown={(e) => {
            e.preventDefault();
            const startPos = isVertical ? e.clientY : e.clientX;
            const startRatio = splitRatio;

            const handleMouseMove = (e) => {
              const containerSize = isVertical ? window.innerHeight - 56 : window.innerWidth;
              const currentPos = isVertical ? e.clientY : e.clientX;
              const delta = currentPos - startPos;
              const newRatio = startRatio + (delta / containerSize) * 100;
              setSplitRatio(newRatio);
            };

            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        />

        {/* Preview panel */}
        <div
          className="bg-white overflow-hidden"
          style={{
            [isVertical ? 'height' : 'width']: `${100 - splitRatio}%`,
            minWidth: isVertical ? '100%' : '300px',
            minHeight: isVertical ? '200px' : '100%',
          }}
        >
          <LivePreview
            key={previewKey}
            html={htmlCode}
            css={cssCode}
            js={jsCode}
            jsx={jsxCode}
            renderMode={renderMode}
            language={language}
            title={title[language] || 'Preview'}
            appCssUrl={appCssUrl}
          />
        </div>
      </div>

      {/* Validation errors */}
      {(validationErrors.length > 0 || validationWarnings.length > 0) && (
        <div className="bg-yellow-900/50 border-t border-yellow-600 px-4 py-2">
          {validationErrors.map((err, i) => (
            <div key={i} className="text-red-400 text-sm">
              ❌ {err.message}
            </div>
          ))}
          {validationWarnings.map((warn, i) => (
            <div key={i} className="text-yellow-400 text-sm">
              ⚠️ {warn.message}
            </div>
          ))}
        </div>
      )}

      {/* Metadata side panel */}
      {showMetadataPanel && (
        <div className="fixed inset-0 z-60">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMetadataPanel(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-gray-800 shadow-xl overflow-y-auto">
            <MetadataForm
              title={title}
              description={description}
              tags={tags}
              category={category}
              authorName={authorName}
              renderMode={renderMode}
              onTitleChange={setTitle}
              onDescriptionChange={setDescription}
              onTagsChange={setTags}
              onAddTag={addTag}
              onRemoveTag={removeTag}
              onCategoryChange={setCategory}
              onAuthorNameChange={setAuthorName}
              onRenderModeChange={setRenderMode}
              onClose={() => setShowMetadataPanel(false)}
              t={t}
              language={language}
            />
          </div>
        </div>
      )}

      {/* File uploader modal */}
      {showFileUploader && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowFileUploader(false)}
          />
          <div className="relative bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg">
            <FileUploader
              onUpload={handleFileUpload}
              onClose={() => setShowFileUploader(false)}
              t={t}
            />
          </div>
        </div>
      )}

      {/* Publish modal */}
      {showPublishModal && (
        <PublishModal
          title={title}
          description={description}
          tags={tags}
          category={category}
          isEditMode={isEditMode}
          isSaving={isSaving}
          validationErrors={validationErrors}
          onPublish={handlePublish}
          onClose={() => setShowPublishModal(false)}
          t={t}
          language={language}
        />
      )}
    </div>
  );
}

export default UploadEditorPage;
