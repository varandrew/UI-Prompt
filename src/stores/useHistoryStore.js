import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { useViewportStore } from './useViewportStore';

/**
 * 歷史記录管理 Store (撤銷/重做) - 加入壓縮与上限控制
 */

function safeJSONStringify(obj) {
  try { return JSON.stringify(obj); } catch {
    return '';
  }
}

function estimateBytes(snap) {
  // 粗估：序列化長度（UTF-16 近似 2bytes/char，但我們以字元数為近似即可）
  const a = safeJSONStringify(snap.canvasState || {});
  const b = safeJSONStringify(snap.viewportState || {});
  return (a.length + b.length);
}

export const useHistoryStore = create(
  immer((set, get) => ({
    // ========== State ==========
    past: [],
    future: [],
    applySnapshotFn: null,
    getCurrentSnapshotFn: null,

    maxHistory: 50, // 最大歷史記录條数
    maxHistoryBytes: 1500000, // ~1.5MB 近似上限（避免快照爆量）
    isRecording: true,

    // ========== Actions ==========

    takeSnapshot: (storesData, description = '') => {
      if (!get().isRecording) return;
      const { canvasState, viewportState } = storesData;
      const snapshot = {
        timestamp: Date.now(),
        description,
        ...(canvasState && { canvasState }),
        ...(viewportState && { viewportState })
      };

      // 与上一個快照完全一致則略過（最小變更）
      const last = get().past.at(-1)?.state;
      if (last) {
        const sameCanvas = safeJSONStringify(last.canvasState) === safeJSONStringify(snapshot.canvasState);
        const sameViewport = safeJSONStringify(last.viewportState) === safeJSONStringify(snapshot.viewportState);
        if (sameCanvas && sameViewport) return;
      }

      // 新增快照並執行上限/容量裁剪
      set((state) => {
        state.future = [];
        state.past.push({ state: snapshot });
      });

      // 執行容量裁剪与條数上限
      set((state) => {
        const bytes = () => state.past.reduce((sum, it) => sum + estimateBytes(it.state), 0);
        while (state.past.length > state.maxHistory || bytes() > state.maxHistoryBytes) {
          state.past.shift();
        }
      });
    },

    autoSnapshot: (storesData, trigger = 'auto') => {
      get().takeSnapshot(storesData, `Auto: ${trigger}`);
    },

    setRecording: (enabled) => set((state) => { state.isRecording = enabled; }),

    setMaxHistory: (max) => set((state) => { state.maxHistory = Math.max(1, max); }),

    clearHistory: () => set((state) => { state.past = []; state.future = []; }),

    /**
     * 壓縮歷史：
     * - 刪除時間間隔內（interval ms）重覆或極相近快照（以序列化相等為準）
     * - 仍保留关鍵節點（每段的最後一筆）
     */
    compressHistory: (interval = 1000) => {
      set((state) => {
        const res = [];
        let lastKept = null;
        for (const item of state.past) {
          const snap = item.state;
          if (!lastKept) { res.push(item); lastKept = snap; continue; }
          const tooClose = (snap.timestamp - lastKept.timestamp) < interval;
          const same = safeJSONStringify(snap.canvasState) === safeJSONStringify(lastKept.canvasState) &&
                       safeJSONStringify(snap.viewportState) === safeJSONStringify(lastKept.viewportState);
          if (!tooClose || !same) { res.push(item); lastKept = snap; }
        }
        state.past = res;
      });

      // 壓縮後再做一次容量裁剪
      set((state) => {
        const bytes = () => state.past.reduce((sum, it) => sum + estimateBytes(it.state), 0);
        while (state.past.length > state.maxHistory || bytes() > state.maxHistoryBytes) {
          state.past.shift();
        }
      });
    },

    // ----- Undo/Redo & helpers -----
    canUndo: () => get().past.length > 0,
    canRedo: () => get().future.length > 0,

    _getCurrentSnapshot: () => {
      const provider = get().getCurrentSnapshotFn;
      if (typeof provider === 'function') { 
        try { return provider(); } catch {
          // Ignore provider errors
        }
      }
      let viewportState; 
      try { viewportState = useViewportStore.getState().exportSettings(); } catch {
        // Ignore export errors
      }
      return { timestamp: Date.now(), description: 'Current', viewportState };
    },

    registerSnapshotProvider: (fn) => set((s) => { s.getCurrentSnapshotFn = fn; }),

    registerSnapshotApplier: (fn) => set((s) => { s.applySnapshotFn = fn; }),

    _applySnapshot: (snap) => {
      const fn = get().applySnapshotFn;
      if (typeof fn === 'function') { fn(snap); }
      else if (snap?.viewportState) { 
        try { useViewportStore.getState().importSettings(snap.viewportState); } catch {
          // Ignore import errors
        }
      }
    },

    undo: () => {
      const state = get();
      if (state.past.length === 0) return false;
      const current = state._getCurrentSnapshot();
      const prev = state.past[state.past.length - 1].state;
      set((s) => { s.future.push({ state: current }); s.past.pop(); });
      state._applySnapshot(prev);
      return true;
    },

    redo: () => {
      const state = get();
      if (state.future.length === 0) return false;
      const current = state._getCurrentSnapshot();
      const next = state.future.pop().state;
      set((s) => { s.past.push({ state: current }); });
      state._applySnapshot(next);
      return true;
    },

    getHistoryStats: () => {
      const state = get();
      return {
        total: state.past.length + 1 + state.future.length,
        pastCount: state.past.length,
        futureCount: state.future.length,
        maxHistory: state.maxHistory,
        isRecording: state.isRecording
      };
    },

    getHistoryList: (limit = 10) => {
      const state = get();
      const history = [
        ...state.past.slice(-limit).map((item, index) => ({
          type: 'past',
          index: state.past.length - limit + index,
          timestamp: item.state.timestamp,
          description: item.state.description || 'Unknown action'
        })),
        { type: 'current', index: state.past.length, timestamp: Date.now(), description: 'Current state' },
        ...state.future.slice(0, limit).map((item, index) => ({
          type: 'future',
          index: state.past.length + 1 + index,
          timestamp: item.state.timestamp,
          description: item.state.description || 'Unknown action'
        }))
      ];
      return history;
    },

    exportHistory: () => {
      const state = get();
      const data = {
        past: state.past.map(item => ({
          timestamp: item.state.timestamp,
          description: item.state.description,
          canvasState: item.state.canvasState,
          viewportState: item.state.viewportState
        })),
        current: {
          timestamp: Date.now(),
          description: 'Current state',
          canvasState: state.canvasState,
          viewportState: state.viewportState
        },
        future: state.future.map(item => ({
          timestamp: item.state.timestamp,
          description: item.state.description,
          canvasState: item.state.canvasState,
          viewportState: item.state.viewportState
        })),
        exportedAt: new Date().toISOString()
      };
      return JSON.stringify(data);
    },

    importHistory: (jsonString) => {
      try {
        const data = JSON.parse(jsonString);
        if (data.past && Array.isArray(data.past)) {
          set((state) => {
            state.past = data.past.map((s) => ({ state: s }));
            state.future = Array.isArray(data.future) ? data.future.map((s) => ({ state: s })) : [];
          });
        }
      } catch (error) {
        console.error('Failed to import history:', error);
      }
    }
  }))
);
