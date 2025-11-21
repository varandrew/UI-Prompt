/*
 * 简易性能 Profiler 与基準工具（開發模式）
 *
 * 功能：
 * - 生成 1000/2000 節點的測試樹並替換画布
 * - 粗略渲染耗時量測（非嚴謹，仅供對比）
 * - 透過 window.EditorBench 暴露 API
 *
 * 用法（開發模式）：
 *   window.EditorBench.mount1000()
 *   window.EditorBench.mount2000()
 *   window.EditorBench.clear()
 *   window.EditorBench.measureRender(() => { /* 做一些操作 */ /* })
 */

import { useEditorStore } from '../../stores/editorStore';

function buildLargeTree(count = 1000) {
  // 根 -> Flex -> count * Text
  const root = { id: 'root', componentType: 'Page', children: [] };
  const propsMap = {
    root: {
      id: 'root',
      baseProps: { style: { minHeight: '100vh', backgroundColor: '#FFFFFF', margin: 0, padding: 0 } },
      layoutProps: { display: 'flex', flexDirection: 'column' }
    }
  };

  const flexId = `flex_${Date.now()}`;
  const flexNode = { id: flexId, componentType: 'Flex', children: [] };
  root.children.push(flexNode);

  propsMap[flexId] = {
    id: flexId,
    baseProps: { style: { margin: 0, padding: 0 } },
    layoutProps: { display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'stretch' }
  };

  for (let i = 0; i < count; i += 1) {
    const id = `txt_${i}`;
    flexNode.children.push({ id, componentType: 'Text', children: [] });
    propsMap[id] = {
      id,
      baseProps: {
        content: { text: `項目 ${i + 1}` },
        style: { fontSize: 14, color: '#111827', lineHeight: 1.5, margin: 0, padding: 0 }
      }
    };
  }

  return { componentTree: root, componentProps: propsMap };
}

function replaceCanvasFast(newCanvas) {
  const store = useEditorStore.getState();
  if (typeof store.replaceCanvas === 'function') {
    store.replaceCanvas(newCanvas);
  } else {
    // 後备：直接重设（較慢）
    store.reset?.();
  }
}

function measureRender(operation) {
  const t0 = performance.now();
  try { operation?.(); } catch {
    // Ignore operation errors
  }
  // 兩幀後取近似渲染完成時間
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const t1 = performance.now();
        resolve({ durationMs: Math.round(t1 - t0) });
      });
    });
  });
}

function mountN(n) {
  const { componentTree, componentProps } = buildLargeTree(n);
  return measureRender(() => replaceCanvasFast({ componentTree, componentProps }));
}

function clear() {
  const empty = buildLargeTree(0);
  return measureRender(() => replaceCanvasFast(empty));
}

if (typeof window !== 'undefined') {
   
  window.EditorBench = {
    mount1000: () => mountN(1000).then((r) => { console.log('[Bench] mount 1000 nodes:', r); return r; }),
    mount2000: () => mountN(2000).then((r) => { console.log('[Bench] mount 2000 nodes:', r); return r; }),
    clear: () => clear().then((r) => { console.log('[Bench] clear:', r); return r; }),
    measureRender
  };
}
