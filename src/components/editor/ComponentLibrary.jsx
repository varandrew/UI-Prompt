import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { getComponentsByCategory } from '../../data/components/componentLibrary';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * 组件库面板 - 左側
 *
 * 職責:
 * - 展示可拖動的組件列表
 * - 按类別分組 (原子/容器/複合)
 * - 極简視覺设計
 */
export function ComponentLibrary({ onClearCanvas }) {
  const { language } = useLanguage();
  const categories = getComponentsByCategory();

  return (
    <div className="h-full flex flex-col">
      {/* 标題 */}
      <header className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          组件库
        </h2>
        {onClearCanvas && (
          <button
            onClick={onClearCanvas}
            className="ml-4 px-3 py-1.5 rounded-md text-xs font-medium text-red-600 border border-red-200 hover:bg-red-50 transition"
            aria-label="清空画布所有元件"
            title="清空画布所有元件"
          >
            清空
          </button>
        )}
      </header>

      {/* 組件列表 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* 原子組件 */}
        <ComponentCategory
          title="基础组件"
          components={categories.atomic}
          language={language}
        />

        {/* 容器組件 */}
        <ComponentCategory
          title="容器"
          components={categories.container}
          language={language}
        />

        {/* 复合组件 */}
        <ComponentCategory
          title="复合组件"
          components={categories.composite}
          language={language}
        />
      </div>
    </div>
  );
}

/**
 * 組件分类 - 支持展開/收起
 */
function ComponentCategory({ title, components, language }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section>
      {/* 可點擊的标題按鈕 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 hover:text-gray-700 transition-colors cursor-pointer group"
        aria-expanded={isExpanded}
        aria-controls={`category-${title}`}
      >
        <h3 className="text-xs font-medium uppercase tracking-wider">
          {title}
        </h3>

        {/* 展開/收起圖标 */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* 條件渲染組件列表 */}
      {isExpanded && (
        <div
          id={`category-${title}`}
          className="space-y-2 animate-in fade-in duration-200"
        >
          {components.map((component) => (
            <DraggableComponent
              key={component.componentType}
              component={component}
              language={language}
            />
          ))}
        </div>
      )}
    </section>
  );
}

/**
 * 可拖動組件項
 */
function DraggableComponent({ component, language }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `library-${component.componentType}`,
    data: {
      componentType: component.componentType,
      fromLibrary: true
    }
  });

  const displayName = component.displayName?.[language] || component.displayName?.['zh-cn'] || component.displayName?.['en-US'] || '';

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`
        group relative p-3 bg-white border border-gray-200 rounded-lg
        cursor-grab active:cursor-grabbing
        hover:border-gray-300 hover:shadow-sm
        transition-all duration-200
        ${isDragging ? 'opacity-50 scale-95' : 'opacity-100'}
      `}
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <span className="text-2xl" aria-hidden="true">
          {component.icon}
        </span>

        {/* 名稱与描述 */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {displayName}
          </p>
          {component.description && (
            <p className="text-xs text-gray-500 truncate mt-0.5">
              {component.description?.[language] || component.description?.['zh-cn'] || component.description?.['en-US'] || ''}
            </p>
          )}
        </div>

        {/* 拖動提示 */}
        <svg
          className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8h16M4 16h16"
          />
        </svg>
      </div>
    </div>
  );
}
