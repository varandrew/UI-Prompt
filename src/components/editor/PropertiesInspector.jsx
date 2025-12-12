import { useState, useEffect } from 'react';
import { canHaveChildren } from '../../data/components/componentLibrary';
import { useCanvasStore, useSelectionStore } from '../../stores';
import { findComponentById } from '../../stores/utils/componentHelpers';
import { SpecialToolbox } from './SpecialToolbox';

/**
 * 屬性检查器 - 优化：数值輸入採用節流（RAF 批次）
 */
export function PropertiesInspector() {
  // 使用模塊化 Store
  const componentTree = useCanvasStore((s) => s.componentTree);
  const componentProps = useCanvasStore((s) => s.componentProps);
  const selectedComponentId = useSelectionStore((s) => s.selectedComponentId);
  const updateBaseProps = useCanvasStore((s) => s.updateBaseProps);
  const updateBasePropsThrottled = useCanvasStore((s) => s.updateBasePropsThrottled);
  const updateResponsiveOverrideThrottled = useCanvasStore((s) => s.updateResponsiveOverrideThrottled);
  const updateResponsiveLayoutOverrideThrottled = useCanvasStore((s) => s.updateResponsiveLayoutOverrideThrottled);

  // 本地 UI 狀態
  const [childWeights, setChildWeights] = useState({});
  const [activeRTab, setActiveRTab] = useState('base');

  // —— 響應式覆蓋：節流写入 ——
  const handleResponsiveStyleOverride = (breakpoint, field, value) => {
    if (breakpoint === 'base') return;
    updateResponsiveOverrideThrottled(selectedComponentId, breakpoint, {
      style: { [field]: value },
    });
  };

  const handleResponsiveLayoutOverride = (breakpoint, field, value) => {
    if (breakpoint === 'base') return;
    updateResponsiveLayoutOverrideThrottled(selectedComponentId, breakpoint, { [field]: value });
  };

  // 保持 hooks 次序一致
  useEffect(() => {
    const comp = componentProps?.[selectedComponentId];
    const node = findComponentById(componentTree, selectedComponentId);
    const container = canHaveChildren(node?.componentType);
    const flex = comp?.layoutProps?.display === 'flex';
    if (!container || !flex) { setChildWeights({}); return; }
    const next = {};
    (node?.children || []).forEach((child) => {
      const props = componentProps[child.id];
      const current = props?.baseProps?.style?.flexGrow;
      next[child.id] = current === undefined ? '' : current;
    });
    setChildWeights(next);
  }, [selectedComponentId, componentTree, componentProps]);

  if (!selectedComponentId) {
    return (
      <div className="p-6 text-center text-gray-400">
        <svg className="mx-auto h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-sm">选择组件以编辑属性</p>
      </div>
    );
  }

  const component = componentProps[selectedComponentId];
  const componentTreeNode = findComponentById(componentTree, selectedComponentId);
  const isContainer = canHaveChildren(componentTreeNode?.componentType);
  const isFlexContainer = component?.layoutProps?.display === 'flex';
  if (!component) return null;

  const supportedTypes = new Set(['Button','Text','Image','Flex','Grid','Card']);
  const requiresSpecialToolbox = componentTreeNode?.componentType === 'Page' || !supportedTypes.has(componentTreeNode?.componentType);
  if (requiresSpecialToolbox) {
    return (
      <div className="p-4">
        <SpecialToolbox />
      </div>
    );
  }

  const handleContentChange = (field, value) => {
    updateBaseProps(selectedComponentId, {
      content: { ...component.baseProps.content, [field]: value }
    });
  };

  const handleStyleChange = (field, value) => {
    // 数值类（滑動、連續輸入）使用節流
    if (typeof value === 'number') {
      updateBasePropsThrottled(selectedComponentId, {
        style: { ...component.baseProps.style, [field]: value }
      });
    } else {
      updateBaseProps(selectedComponentId, {
        style: { ...component.baseProps.style, [field]: value }
      });
    }
  };


  return (
    <div className="p-4 space-y-6">
      {/* 內容屬性 */}
      {component.baseProps?.content !== undefined && (
        <section>
          <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">內容</h3>
          <div className="space-y-3">
            {component.baseProps.content.text !== undefined && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">文本</label>
                <input
                  type="text"
                  value={component.baseProps.content.text || ''}
                  onChange={(e) => handleContentChange('text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {component.baseProps.content.src !== undefined && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">圖片 URL</label>
                <input
                  type="url"
                  value={component.baseProps.content.src || ''}
                  onChange={(e) => handleContentChange('src', e.target.value)}
                  placeholder={component.baseProps.content.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {component.baseProps.content.alt !== undefined && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">替代文本</label>
                <input
                  type="text"
                  value={component.baseProps.content.alt || ''}
                  onChange={(e) => handleContentChange('alt', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* 樣式屬性 */}
      {component.baseProps?.style && (
        <section>
          <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">樣式</h3>
          <div className="space-y-3">
            {component.baseProps.style.backgroundColor !== undefined && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">背景颜色</label>
                <input
                  type="color"
                  value={component.baseProps.style.backgroundColor || '#FFFFFF'}
                  onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
                />
              </div>
            )}

            {component.baseProps.style.color !== undefined && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">文本颜色</label>
                <input
                  type="color"
                  value={component.baseProps.style.color || '#000000'}
                  onChange={(e) => handleStyleChange('color', e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
                />
              </div>
            )}

            {component.baseProps.style.fontSize !== undefined && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">字体大小 (px)</label>
                <input
                  type="number"
                  value={component.baseProps.style.fontSize || 16}
                  onChange={(e) => handleStyleChange('fontSize', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* 響應式覆蓋 */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">響應式覆蓋</h3>
          <div className="flex gap-1">
            {['base','tablet','mobile'].map(bp => (
              <button
                key={bp}
                onClick={() => setActiveRTab(bp)}
                className={`px-2 py-1 text-xs rounded border ${activeRTab===bp? 'bg-white border-gray-300 text-gray-900' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                aria-pressed={activeRTab===bp}
              >{bp==='base' ? 'Base' : bp==='tablet' ? 'Tablet' : 'Mobile'}</button>
            ))}
          </div>
        </div>
        {activeRTab !== 'base' && (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-2">樣式覆蓋（{activeRTab}）</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">字体大小 (px)</label>
                  <input type="number" className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    value={component?.responsiveOverrides?.[activeRTab]?.style?.fontSize ?? ''}
                    onChange={(e)=>handleResponsiveStyleOverride(activeRTab, 'fontSize', Number(e.target.value) || 0)} />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">背景色 (#HEX)</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-2 py-1 text-sm" placeholder="#FFFFFF"
                    value={component?.responsiveOverrides?.[activeRTab]?.style?.backgroundColor ?? ''}
                    onChange={(e)=>handleResponsiveStyleOverride(activeRTab, 'backgroundColor', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">gap (px)</label>
                  <input type="number" className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    value={component?.responsiveOverrides?.[activeRTab]?.style?.gap ?? ''}
                    onChange={(e)=>handleResponsiveStyleOverride(activeRTab, 'gap', Number(e.target.value) || 0)} />
                </div>
              </div>
            </div>
            {isContainer && (
              <div>
                <p className="text-xs text-gray-500 mb-2">布局覆蓋（{activeRTab}）</p>
                <div className="grid grid-cols-2 gap-3">
                  {component?.layoutProps?.display === 'flex' && (
                    <>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">方向</label>
                        <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                          value={component?.responsiveLayoutOverrides?.[activeRTab]?.flexDirection ?? ''}
                          onChange={(e)=>handleResponsiveLayoutOverride(activeRTab, 'flexDirection', e.target.value)}>
                          {['row','column','row-reverse','column-reverse'].map(o=> <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">gap (px)</label>
                        <input type="number" className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                          value={component?.responsiveLayoutOverrides?.[activeRTab]?.gap ?? ''}
                          onChange={(e)=>handleResponsiveLayoutOverride(activeRTab, 'gap', Number(e.target.value) || 0)} />
                      </div>
                    </>
                  )}
                  {component?.layoutProps?.display === 'grid' && (
                    <>
                      <div className="col-span-2">
                        <label className="block text-xs text-gray-500 mb-1">gridTemplateColumns</label>
                        <input type="text" className="w-full border border-gray-300 rounded px-2 py-1 text-sm" placeholder="repeat(3, 1fr)"
                          value={component?.responsiveLayoutOverrides?.[activeRTab]?.gridTemplateColumns ?? ''}
                          onChange={(e)=>handleResponsiveLayoutOverride(activeRTab, 'gridTemplateColumns', e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">gap (px)</label>
                        <input type="number" className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                          value={component?.responsiveLayoutOverrides?.[activeRTab]?.gap ?? ''}
                          onChange={(e)=>handleResponsiveLayoutOverride(activeRTab, 'gap', Number(e.target.value) || 0)} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 容器 - 子項權重 */}
      {isContainer && isFlexContainer && (
        <section>
          <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">子項權重</h3>
          <div className="space-y-2">
            {(findComponentById(componentTree, selectedComponentId)?.children || []).map((child) => {
              const childId = child.id;
              return (
                <div key={childId} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-24 truncate">{child.componentType} #{childId.slice(0,6)}</span>
                  <input
                    type="number"
                    className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
                    value={String(childWeights[childId] ?? '')}
                    onChange={(e) => {
                      const v = e.target.value;
                      setChildWeights((prev) => ({ ...prev, [childId]: v }));
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const parsed = parseInt(String(childWeights[childId] ?? ''), 10);
                      if (!Number.isFinite(parsed)) return;
                      const style = (componentProps[childId]?.baseProps?.style) || {};
                      updateBaseProps(childId, { style: { ...style, flexGrow: parsed } });
                    }}
                    className="px-2 py-1.5 text-xs rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                  >
                    更新
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
