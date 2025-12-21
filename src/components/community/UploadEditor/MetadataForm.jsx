/**
 * Metadata Form Component
 * Form for editing upload metadata (title, description, tags, etc.)
 * @module components/community/UploadEditor/MetadataForm
 */

import { memo, useState, useCallback } from 'react';
import { X, Plus, Tag, User, Folder, Code } from 'lucide-react';

/**
 * Available categories
 */
const CATEGORIES = [
  { id: 'community', label: { 'zh-CN': '社区', 'en-US': 'Community' } },
  { id: 'visual', label: { 'zh-CN': '视觉设计', 'en-US': 'Visual Design' } },
  { id: 'core', label: { 'zh-CN': '核心系统', 'en-US': 'Core Systems' } },
  { id: 'retro', label: { 'zh-CN': '复古风格', 'en-US': 'Retro Styles' } },
  { id: 'interaction', label: { 'zh-CN': '交互动效', 'en-US': 'Interactions' } },
  { id: 'layout', label: { 'zh-CN': '布局系统', 'en-US': 'Layout Systems' } },
];

/**
 * Render modes
 */
const RENDER_MODES = [
  { id: 'html', label: 'HTML', description: { 'zh-CN': '标准 HTML/CSS/JS', 'en-US': 'Standard HTML/CSS/JS' } },
  { id: 'jsx', label: 'JSX (Preact)', description: { 'zh-CN': '轻量级 Preact 组件', 'en-US': 'Lightweight Preact component' } },
  { id: 'react-jsx', label: 'React JSX', description: { 'zh-CN': 'React 18 组件', 'en-US': 'React 18 component' } },
];

/**
 * Metadata Form Component
 */
function MetadataFormComponent({
  title,
  description,
  tags,
  category,
  authorName,
  renderMode,
  onTitleChange,
  onDescriptionChange,
  onAddTag,
  onRemoveTag,
  onCategoryChange,
  onAuthorNameChange,
  onRenderModeChange,
  onClose,
  t,
  language,
}) {
  const [newTag, setNewTag] = useState('');
  const [activeLanguage, setActiveLanguage] = useState(language);

  // Handle adding a new tag
  const handleAddTag = useCallback(() => {
    const trimmed = newTag.trim().toLowerCase();
    if (trimmed && !tags.includes(trimmed)) {
      onAddTag(trimmed);
      setNewTag('');
    }
  }, [newTag, tags, onAddTag]);

  // Handle tag input keydown
  const handleTagKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    } else if (e.key === ',' || e.key === ' ') {
      e.preventDefault();
      handleAddTag();
    }
  }, [handleAddTag]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {t('community.editor.metadata') || 'Template Settings'}
        </h3>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Language tabs for bilingual fields */}
      <div className="flex gap-2 border-b border-gray-700 pb-2">
        <button
          onClick={() => setActiveLanguage('zh-CN')}
          className={`px-3 py-1.5 rounded-t-lg text-sm font-medium transition-colors ${
            activeLanguage === 'zh-CN'
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          中文
        </button>
        <button
          onClick={() => setActiveLanguage('en-US')}
          className={`px-3 py-1.5 rounded-t-lg text-sm font-medium transition-colors ${
            activeLanguage === 'en-US'
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          English
        </button>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <label className="block text-gray-300 text-sm font-medium">
          {t('community.editor.title') || 'Title'} *
        </label>
        <input
          type="text"
          value={title[activeLanguage] || ''}
          onChange={(e) => onTitleChange(activeLanguage, e.target.value)}
          placeholder={activeLanguage === 'zh-CN' ? '输入模板标题...' : 'Enter template title...'}
          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="block text-gray-300 text-sm font-medium">
          {t('community.editor.description') || 'Description'}
        </label>
        <textarea
          value={description[activeLanguage] || ''}
          onChange={(e) => onDescriptionChange(activeLanguage, e.target.value)}
          placeholder={activeLanguage === 'zh-CN' ? '简短描述你的模板...' : 'Briefly describe your template...'}
          rows={3}
          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none"
        />
      </div>

      {/* Author Name */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-gray-300 text-sm font-medium">
          <User size={16} />
          {t('community.editor.authorName') || 'Author Name'}
        </label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => onAuthorNameChange(e.target.value)}
          placeholder="Anonymous"
          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-gray-300 text-sm font-medium">
          <Folder size={16} />
          {t('community.editor.category') || 'Category'}
        </label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.label[language] || cat.label['en-US']}
            </option>
          ))}
        </select>
      </div>

      {/* Render Mode */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-gray-300 text-sm font-medium">
          <Code size={16} />
          {t('community.editor.renderMode') || 'Render Mode'}
        </label>
        <div className="space-y-2">
          {RENDER_MODES.map((mode) => (
            <label
              key={mode.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                renderMode === mode.id
                  ? 'bg-blue-500/20 border border-blue-500/50'
                  : 'bg-gray-900 border border-gray-700 hover:border-gray-600'
              }`}
            >
              <input
                type="radio"
                name="renderMode"
                value={mode.id}
                checked={renderMode === mode.id}
                onChange={(e) => onRenderModeChange(e.target.value)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  renderMode === mode.id ? 'border-blue-500' : 'border-gray-500'
                }`}
              >
                {renderMode === mode.id && (
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </div>
              <div>
                <div className="text-white text-sm font-medium">{mode.label}</div>
                <div className="text-gray-400 text-xs">
                  {mode.description[language] || mode.description['en-US']}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-gray-300 text-sm font-medium">
          <Tag size={16} />
          {t('community.editor.tags') || 'Tags'}
        </label>

        {/* Tag input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder={language === 'zh-CN' ? '添加标签...' : 'Add tag...'}
            className="flex-1 bg-gray-900 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={handleAddTag}
            disabled={!newTag.trim()}
            className={`p-2 rounded-lg transition-colors ${
              newTag.trim()
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Tag list */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
              >
                {tag}
                <button
                  onClick={() => onRemoveTag(tag)}
                  className="p-0.5 rounded-full hover:bg-gray-600 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-500 text-xs">
          {language === 'zh-CN'
            ? '按 Enter 或空格添加标签'
            : 'Press Enter or Space to add tags'}
        </p>
      </div>

      {/* Save hint */}
      <div className="pt-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          {language === 'zh-CN'
            ? '设置会自动保存。关闭此面板继续编辑代码。'
            : 'Settings are saved automatically. Close this panel to continue editing.'}
        </p>
      </div>
    </div>
  );
}

export const MetadataForm = memo(MetadataFormComponent);
export default MetadataForm;
