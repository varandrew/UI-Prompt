/**
 * Editor Toolbar Component
 * Top toolbar for the upload editor with tabs, actions, and settings
 * @module components/community/UploadEditor/EditorToolbar
 */

import { memo, useCallback, useState } from 'react';
import {
  X,
  Sun,
  Moon,
  Copy,
  Download,
  Upload,
  Settings,
  Save,
  LayoutGrid,
  Rows,
  Check,
  Loader2,
} from 'lucide-react';

/**
 * Editor Toolbar Component
 */
function EditorToolbarComponent({
  title,
  tabs,
  activeTab,
  onTabChange,
  theme,
  onThemeToggle,
  onCopy,
  onDownload,
  onUpload,
  onMetadata,
  onPublish,
  isVertical,
  onLayoutToggle,
  onClose,
  isDirty,
  isSaving,
  isEditMode,
  t,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const success = await onCopy();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [onCopy]);

  return (
    <div className="h-14 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4 shrink-0">
      {/* Left section: Title and tabs */}
      <div className="flex items-center gap-4">
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="text-white font-medium truncate max-w-48">
            {title}
          </span>
          {isDirty && (
            <span className="text-yellow-400 text-xs">
              •
            </span>
          )}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-gray-900 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right section: Actions */}
      <div className="flex items-center gap-2">
        {/* Upload file button */}
        <button
          onClick={onUpload}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          title={t('community.editor.uploadFile') || 'Upload File'}
        >
          <Upload size={18} />
        </button>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          title={t('codeEditor.copy') || 'Copy'}
        >
          {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
        </button>

        {/* Download button */}
        <button
          onClick={onDownload}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          title={t('codeEditor.download') || 'Download'}
        >
          <Download size={18} />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600" />

        {/* Layout toggle */}
        <button
          onClick={onLayoutToggle}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          title={t('codeEditor.toggleLayout') || 'Toggle Layout'}
        >
          {isVertical ? <Rows size={18} /> : <LayoutGrid size={18} />}
        </button>

        {/* Theme toggle */}
        <button
          onClick={onThemeToggle}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          title={t('codeEditor.toggleTheme') || 'Toggle Theme'}
        >
          {theme === 'vs-dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Metadata/Settings button */}
        <button
          onClick={onMetadata}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          title={t('community.editor.settings') || 'Settings'}
        >
          <Settings size={18} />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600" />

        {/* Publish button */}
        <button
          onClick={onPublish}
          disabled={isSaving}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            isSaving
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSaving ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Save size={16} />
          )}
          <span>
            {isSaving
              ? (t('saving') || 'Saving...')
              : isEditMode
              ? (t('community.editor.update') || 'Update')
              : (t('community.editor.publish') || 'Publish')}
          </span>
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors ml-2"
          title={t('close') || 'Close'}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export const EditorToolbar = memo(EditorToolbarComponent);
export default EditorToolbar;
