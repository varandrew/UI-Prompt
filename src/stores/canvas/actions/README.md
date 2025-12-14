# Canvas Store Actions

This directory contains modularized action creators for the Canvas Store, extracted from the monolithic `useCanvasStore.js` to improve code organization and maintainability.

## Architecture

The Canvas Store follows a **Zustand + Immer** pattern with RAF (RequestAnimationFrame) batching for performance optimization. The actions are split into logical modules:

```
src/stores/canvas/
├── actions/
│   ├── index.js              # Central export point
│   ├── getterActions.js      # Read-only query methods
│   ├── ioActions.js          # Import/Export/Reset operations
│   ├── treeActions.js        # Component tree CRUD operations
│   └── propsActions.js       # Component properties updates
├── middleware/
│   ├── rafBatcher.js         # RAF batching for throttled updates
│   └── snapshotMiddleware.js # History/undo snapshot helper
└── state.js                  # Initial state definitions
```

## Modules

### 1. getterActions.js

**Read-only methods** for querying component data without mutations.

```javascript
import { createGetterActions } from './actions/getterActions';

const getters = createGetterActions(get);

// Get complete component (tree + props)
const component = getters.getComponent('component-id');

// Get tree node only
const treeNode = getters.getComponentTree('component-id');

// Get props only
const props = getters.getComponentProps('component-id');

// Get all component IDs
const allIds = getters.getAllComponentIds();

// Check existence
const exists = getters.hasComponent('component-id');
```

**API Surface:**
- `getComponent(componentId)` → `Object|null` - Combined tree + props
- `getComponentTree(componentId)` → `Object|null` - Tree node only
- `getComponentProps(componentId)` → `Object|null` - Props only
- `getAllComponentIds()` → `string[]` - All component IDs
- `hasComponent(componentId)` → `boolean` - Existence check

**Dependencies:**
- `../../utils/componentHelpers` - Helper functions for tree traversal

### 2. ioActions.js

**Import/Export/Reset operations** for canvas state management.

```javascript
import { createIOActions } from './actions/ioActions';

const io = createIOActions(set, get, snapshotHelper, initialState);

// Reset to initial state (with snapshot)
io.reset();

// Import canvas data
io.importCanvas({
  componentTree: { id: 'root', children: [...] },
  componentProps: { root: {...}, ... }
});

// Export canvas data (deep clone)
const exported = io.exportCanvas();

// Replace canvas (for profiler/benchmark)
io.replaceCanvas(canvas);
```

**API Surface:**
- `reset()` - Reset canvas to initial state with snapshot
- `importCanvas(canvasData)` - Import canvas data (partial merge)
- `exportCanvas()` → `Object` - Export canvas data (deep clone)
- `replaceCanvas(canvas)` - Replace canvas entirely (no snapshot)

**Dependencies:**
- None (pure dependency injection via parameters)

**Parameters:**
- `set` - Zustand set function
- `get` - Zustand get function
- `snapshotHelper` - Object with `takeSnapshot(actionName)` method
- `initialState` - Object with `{ initialComponentTree, initialComponentProps }`

## Integration Example

```javascript
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createGetterActions } from './actions/getterActions';
import { createIOActions } from './actions/ioActions';
import { createSnapshotHelper } from './middleware/snapshotMiddleware';
import { initialComponentTree, initialComponentProps } from './state';

export const useCanvasStore = create(
  immer((set, get) => {
    // Create snapshot helper
    const snapshotHelper = createSnapshotHelper(get);

    // Create initial state object
    const initialState = {
      initialComponentTree,
      initialComponentProps
    };

    // Create action modules
    const getters = createGetterActions(get);
    const io = createIOActions(set, get, snapshotHelper, initialState);

    return {
      // State
      componentTree: initialComponentTree,
      componentProps: initialComponentProps,

      // Spread all actions
      ...getters,
      ...io,
      // ...treeActions,
      // ...propsActions
    };
  })
);
```

## Design Principles

### 1. **Single Responsibility**
Each module handles a specific domain:
- Getters: Query operations
- IO: State persistence
- Tree: Component hierarchy
- Props: Component properties

### 2. **Dependency Injection**
All dependencies (set, get, helpers, state) are injected via parameters, enabling:
- Easy testing with mocks
- Clear dependency tracking
- Flexible composition

### 3. **Pure Functions**
Action creators are pure functions that return action objects:
```javascript
export const createGetterActions = (get) => ({ ... });
```

### 4. **Snapshot Integration**
IO actions integrate with the snapshot middleware for undo/redo:
```javascript
reset: () => {
  snapshotHelper.takeSnapshot('canvas:reset');
  return set({ ... });
}
```

### 5. **Immer-Compatible**
All mutations use Immer's draft pattern:
```javascript
importCanvas: (canvasData) => set((state) => {
  state.componentTree = canvasData.componentTree;
})
```

## Testing

Tests are located in `/tests/canvasActions.test.js`:

```bash
# Run tests
npm run test -- canvasActions.test.js

# Watch mode
npm run test -- canvasActions.test.js --watch
```

Test coverage includes:
- ✅ API surface validation
- ✅ Edge case handling (null checks)
- ✅ Deep cloning verification
- ✅ Snapshot integration
- ✅ Immer-style mutations

## Migration Guide

### Before (Monolithic)
```javascript
export const useCanvasStore = create(
  immer((set, get) => ({
    componentTree: initialComponentTree,

    getComponent: (componentId) => {
      const state = get();
      return findComponentById(state.componentTree, componentId);
    },

    reset: () => set({ componentTree: initialComponentTree }),
    // ... 600+ lines of actions
  }))
);
```

### After (Modular)
```javascript
import { createGetterActions, createIOActions } from './actions';

export const useCanvasStore = create(
  immer((set, get) => {
    const getters = createGetterActions(get);
    const io = createIOActions(set, get, snapshotHelper, initialState);

    return {
      componentTree: initialComponentTree,
      ...getters,
      ...io
    };
  })
);
```

## Benefits

1. **Maintainability** - Smaller, focused modules are easier to understand
2. **Testability** - Pure functions with dependency injection
3. **Reusability** - Action creators can be composed and reused
4. **Type Safety** - Clearer boundaries enable better type definitions
5. **Performance** - Tree-shakeable exports reduce bundle size

## Future Improvements

- [ ] Add TypeScript definitions for better IDE support
- [ ] Extract RAF batching into middleware
- [ ] Add action logging middleware for debugging
- [ ] Create performance benchmarks for action batching
- [ ] Add JSDoc type definitions for better IntelliSense

## Related Documentation

- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [Immer Documentation](https://immerjs.github.io/immer/)
- [Canvas Store Utils](/src/stores/utils/README.md)
- [Snapshot Middleware](/src/stores/canvas/middleware/README.md)
