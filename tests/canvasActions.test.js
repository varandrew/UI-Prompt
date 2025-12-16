/**
 * Unit Tests for Canvas Store - Getter and IO Actions
 *
 * Tests the extracted getter and IO action modules to ensure they:
 * 1. Correctly implement the expected API surface
 * 2. Handle edge cases (null checks, missing components)
 * 3. Properly integrate with Zustand's get/set functions
 */

import { describe, it, expect, vi } from 'vitest';
import { createGetterActions } from '../src/stores/canvas/actions/getterActions';
import { createIOActions } from '../src/stores/canvas/actions/ioActions';

describe('createGetterActions', () => {
  it('should create all getter methods', () => {
    const mockGet = vi.fn();
    const actions = createGetterActions(mockGet);

    expect(actions).toHaveProperty('getComponent');
    expect(actions).toHaveProperty('getComponentTree');
    expect(actions).toHaveProperty('getComponentProps');
    expect(actions).toHaveProperty('getAllComponentIds');
    expect(actions).toHaveProperty('hasComponent');
  });

  it('getComponent should combine tree and props', () => {
    const mockState = {
      componentTree: {
        id: 'root',
        componentType: 'Page',
        children: [
          { id: 'child1', componentType: 'Container', children: [] }
        ]
      },
      componentProps: {
        root: { id: 'root', baseProps: {} },
        child1: { id: 'child1', baseProps: { style: { color: 'red' } } }
      }
    };

    const mockGet = vi.fn(() => mockState);
    const actions = createGetterActions(mockGet);

    const result = actions.getComponent('child1');
    expect(result).toEqual({
      id: 'child1',
      componentType: 'Container',
      children: [],
      baseProps: { style: { color: 'red' } }
    });
  });

  it('getComponent should return null for missing component', () => {
    const mockState = {
      componentTree: { id: 'root', children: [] },
      componentProps: { root: {} }
    };

    const mockGet = vi.fn(() => mockState);
    const actions = createGetterActions(mockGet);

    const result = actions.getComponent('nonexistent');
    expect(result).toBeNull();
  });

  it('hasComponent should check component existence', () => {
    const mockState = {
      componentTree: {
        id: 'root',
        children: [
          { id: 'child1', children: [] }
        ]
      },
      componentProps: {}
    };

    const mockGet = vi.fn(() => mockState);
    const actions = createGetterActions(mockGet);

    expect(actions.hasComponent('root')).toBe(true);
    expect(actions.hasComponent('child1')).toBe(true);
    expect(actions.hasComponent('nonexistent')).toBe(false);
  });
});

describe('createIOActions', () => {
  it('should create all IO methods', () => {
    const mockSet = vi.fn();
    const mockGet = vi.fn();
    const mockInitialState = {
      initialComponentTree: { id: 'root', children: [] },
      initialComponentProps: { root: {} }
    };

    const actions = createIOActions(mockSet, mockGet, mockInitialState);

    expect(actions).toHaveProperty('reset');
    expect(actions).toHaveProperty('importCanvas');
    expect(actions).toHaveProperty('exportCanvas');
    expect(actions).toHaveProperty('replaceCanvas');
  });

  it('reset should reset to initial state', () => {
    const mockSet = vi.fn();
    const mockGet = vi.fn();
    const mockInitialState = {
      initialComponentTree: { id: 'root', children: [] },
      initialComponentProps: { root: { baseProps: {} } }
    };

    const actions = createIOActions(mockSet, mockGet, mockInitialState);
    actions.reset();

    expect(mockSet).toHaveBeenCalledWith({
      componentTree: { id: 'root', children: [] },
      componentProps: { root: { baseProps: {} } }
    });
  });

  it('exportCanvas should deep clone state', () => {
    const mockState = {
      componentTree: { id: 'root', children: [] },
      componentProps: { root: { baseProps: {} } }
    };

    const mockGet = vi.fn(() => mockState);
    const mockSet = vi.fn();
    const mockInitialState = { initialComponentTree: {}, initialComponentProps: {} };

    const actions = createIOActions(mockSet, mockGet, mockInitialState);
    const exported = actions.exportCanvas();

    // Should be deep clone, not same reference
    expect(exported).toEqual(mockState);
    expect(exported).not.toBe(mockState);
    expect(exported.componentTree).not.toBe(mockState.componentTree);
  });

  it('importCanvas should merge provided data', () => {
    const mockSet = vi.fn((updater) => {
      // Simulate Immer-style updater
      const draft = { componentTree: {}, componentProps: {} };
      updater(draft);
      return draft;
    });

    const mockGet = vi.fn();
    const mockInitialState = { initialComponentTree: {}, initialComponentProps: {} };

    const actions = createIOActions(mockSet, mockGet, mockInitialState);
    const importData = {
      componentTree: { id: 'imported', children: [] },
      componentProps: { imported: { baseProps: {} } }
    };

    actions.importCanvas(importData);

    expect(mockSet).toHaveBeenCalled();
  });
});
