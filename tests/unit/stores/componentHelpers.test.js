/**
 * 組件樹操作工具函數測試
 * Tests for Component Tree Helper Utilities
 */

import { describe, it, expect } from 'vitest';
import {
  findComponentById,
  removeComponentFromTree,
  collectAllComponentIds,
  isDescendant,
  getComponentPath,
  deepCloneComponent
} from '../../../src/stores/utils/componentHelpers.js';

// ========== Test Fixtures ==========
const createSimpleTree = () => ({
  id: 'root',
  type: 'Container',
  children: [
    { id: 'child1', type: 'Button', children: [] },
    { id: 'child2', type: 'Text', children: [] }
  ]
});

const createNestedTree = () => ({
  id: 'root',
  type: 'Container',
  children: [
    {
      id: 'section1',
      type: 'Section',
      children: [
        { id: 'card1', type: 'Card', children: [] },
        {
          id: 'card2',
          type: 'Card',
          children: [
            { id: 'button1', type: 'Button', children: [] },
            { id: 'text1', type: 'Text', children: [] }
          ]
        }
      ]
    },
    {
      id: 'section2',
      type: 'Section',
      children: [
        { id: 'card3', type: 'Card', children: [] }
      ]
    }
  ]
});

const createDeeplyNestedTree = () => ({
  id: 'level0',
  children: [{
    id: 'level1',
    children: [{
      id: 'level2',
      children: [{
        id: 'level3',
        children: [{
          id: 'level4',
          children: [{
            id: 'level5',
            children: []
          }]
        }]
      }]
    }]
  }]
});

// ========== findComponentById Tests ==========
describe('findComponentById', () => {
  it('should find root component', () => {
    const tree = createSimpleTree();
    const found = findComponentById(tree, 'root');
    expect(found).toBe(tree);
    expect(found.id).toBe('root');
  });

  it('should find direct child', () => {
    const tree = createSimpleTree();
    const found = findComponentById(tree, 'child1');
    expect(found).not.toBeNull();
    expect(found.id).toBe('child1');
    expect(found.type).toBe('Button');
  });

  it('should find deeply nested component', () => {
    const tree = createNestedTree();
    const found = findComponentById(tree, 'button1');
    expect(found).not.toBeNull();
    expect(found.id).toBe('button1');
    expect(found.type).toBe('Button');
  });

  it('should return null for non-existent ID', () => {
    const tree = createSimpleTree();
    const found = findComponentById(tree, 'nonexistent');
    expect(found).toBeNull();
  });

  it('should handle tree with no children', () => {
    const tree = { id: 'alone', type: 'Button' };
    const found = findComponentById(tree, 'alone');
    expect(found).not.toBeNull();
    expect(found.id).toBe('alone');
  });

  it('should handle empty children array', () => {
    const tree = { id: 'root', children: [] };
    const found = findComponentById(tree, 'root');
    expect(found).not.toBeNull();
    expect(found.id).toBe('root');
  });

  it('should find component at maximum depth', () => {
    const tree = createDeeplyNestedTree();
    const found = findComponentById(tree, 'level5');
    expect(found).not.toBeNull();
    expect(found.id).toBe('level5');
  });

  it('should find first matching component in breadth-first order', () => {
    const tree = createNestedTree();
    const found = findComponentById(tree, 'card1');
    expect(found).not.toBeNull();
    expect(found.id).toBe('card1');
  });
});

// ========== removeComponentFromTree Tests ==========
describe('removeComponentFromTree', () => {
  it('should remove direct child and return it', () => {
    const tree = createSimpleTree();
    const removed = removeComponentFromTree(tree, 'child1');

    expect(removed).not.toBeNull();
    expect(removed.id).toBe('child1');
    expect(tree.children).toHaveLength(1);
    expect(tree.children[0].id).toBe('child2');
  });

  it('should remove nested child and return it', () => {
    const tree = createNestedTree();
    const removed = removeComponentFromTree(tree, 'button1');

    expect(removed).not.toBeNull();
    expect(removed.id).toBe('button1');

    // Verify it's gone from the tree
    const stillThere = findComponentById(tree, 'button1');
    expect(stillThere).toBeNull();
  });

  it('should return null for non-existent ID', () => {
    const tree = createSimpleTree();
    const originalLength = tree.children.length;
    const removed = removeComponentFromTree(tree, 'nonexistent');

    expect(removed).toBeNull();
    expect(tree.children).toHaveLength(originalLength);
  });

  it('should not remove root component', () => {
    const tree = createSimpleTree();
    const removed = removeComponentFromTree(tree, 'root');

    // removeComponentFromTree looks in children, not at root
    expect(removed).toBeNull();
    expect(tree.id).toBe('root');
  });

  it('should handle tree with no children property', () => {
    const tree = { id: 'root' };
    const removed = removeComponentFromTree(tree, 'child1');
    expect(removed).toBeNull();
  });

  it('should handle empty children array', () => {
    const tree = { id: 'root', children: [] };
    const removed = removeComponentFromTree(tree, 'child1');
    expect(removed).toBeNull();
  });

  it('should remove deeply nested component', () => {
    const tree = createDeeplyNestedTree();
    const removed = removeComponentFromTree(tree, 'level5');

    expect(removed).not.toBeNull();
    expect(removed.id).toBe('level5');

    const stillThere = findComponentById(tree, 'level5');
    expect(stillThere).toBeNull();
  });

  it('should preserve sibling components after removal', () => {
    const tree = createNestedTree();
    removeComponentFromTree(tree, 'card1');

    const card2 = findComponentById(tree, 'card2');
    expect(card2).not.toBeNull();
    expect(card2.id).toBe('card2');
  });
});

// ========== collectAllComponentIds Tests ==========
describe('collectAllComponentIds', () => {
  it('should collect all IDs from simple tree', () => {
    const tree = createSimpleTree();
    const ids = collectAllComponentIds(tree);

    expect(ids).toContain('root');
    expect(ids).toContain('child1');
    expect(ids).toContain('child2');
    expect(ids).toHaveLength(3);
  });

  it('should collect all IDs from nested tree', () => {
    const tree = createNestedTree();
    const ids = collectAllComponentIds(tree);

    const expectedIds = [
      'root', 'section1', 'card1', 'card2', 'button1', 'text1',
      'section2', 'card3'
    ];

    expectedIds.forEach(id => {
      expect(ids).toContain(id);
    });
    expect(ids).toHaveLength(expectedIds.length);
  });

  it('should collect IDs from single node', () => {
    const tree = { id: 'alone' };
    const ids = collectAllComponentIds(tree);

    expect(ids).toContain('alone');
    expect(ids).toHaveLength(1);
  });

  it('should handle empty children array', () => {
    const tree = { id: 'root', children: [] };
    const ids = collectAllComponentIds(tree);

    expect(ids).toContain('root');
    expect(ids).toHaveLength(1);
  });

  it('should collect deeply nested IDs', () => {
    const tree = createDeeplyNestedTree();
    const ids = collectAllComponentIds(tree);

    const expectedIds = ['level0', 'level1', 'level2', 'level3', 'level4', 'level5'];
    expectedIds.forEach(id => {
      expect(ids).toContain(id);
    });
    expect(ids).toHaveLength(expectedIds.length);
  });

  it('should return IDs in depth-first order (root first)', () => {
    const tree = createSimpleTree();
    const ids = collectAllComponentIds(tree);

    expect(ids[0]).toBe('root');
  });
});

// ========== isDescendant Tests ==========
describe('isDescendant', () => {
  it('should return true for direct child', () => {
    const tree = createSimpleTree();
    expect(isDescendant(tree, 'root', 'child1')).toBe(true);
  });

  it('should return true for deeply nested descendant', () => {
    const tree = createNestedTree();
    expect(isDescendant(tree, 'root', 'button1')).toBe(true);
    expect(isDescendant(tree, 'section1', 'button1')).toBe(true);
    expect(isDescendant(tree, 'card2', 'button1')).toBe(true);
  });

  it('should return false for non-descendants', () => {
    const tree = createNestedTree();
    expect(isDescendant(tree, 'section1', 'card3')).toBe(false);
    expect(isDescendant(tree, 'card1', 'button1')).toBe(false);
  });

  it('should return true for self (component is its own descendant)', () => {
    const tree = createSimpleTree();
    // A component contains itself in its collected IDs
    expect(isDescendant(tree, 'root', 'root')).toBe(true);
  });

  it('should return false for parent as descendant of child', () => {
    const tree = createNestedTree();
    expect(isDescendant(tree, 'button1', 'card2')).toBe(false);
  });

  it('should return false if ancestor not found', () => {
    const tree = createSimpleTree();
    expect(isDescendant(tree, 'nonexistent', 'child1')).toBe(false);
  });

  it('should return false if descendant not in tree', () => {
    const tree = createSimpleTree();
    expect(isDescendant(tree, 'root', 'nonexistent')).toBe(false);
  });
});

// ========== getComponentPath Tests ==========
describe('getComponentPath', () => {
  it('should return path to root', () => {
    const tree = createSimpleTree();
    const path = getComponentPath(tree, 'root');

    expect(path).toEqual(['root']);
  });

  it('should return path to direct child', () => {
    const tree = createSimpleTree();
    const path = getComponentPath(tree, 'child1');

    expect(path).toEqual(['root', 'child1']);
  });

  it('should return path to deeply nested component', () => {
    const tree = createNestedTree();
    const path = getComponentPath(tree, 'button1');

    expect(path).toEqual(['root', 'section1', 'card2', 'button1']);
  });

  it('should return null for non-existent component', () => {
    const tree = createSimpleTree();
    const path = getComponentPath(tree, 'nonexistent');

    expect(path).toBeNull();
  });

  it('should handle single node tree', () => {
    const tree = { id: 'alone' };
    const path = getComponentPath(tree, 'alone');

    expect(path).toEqual(['alone']);
  });

  it('should find correct path among siblings', () => {
    const tree = createNestedTree();

    const pathToCard1 = getComponentPath(tree, 'card1');
    const pathToCard2 = getComponentPath(tree, 'card2');
    const pathToCard3 = getComponentPath(tree, 'card3');

    expect(pathToCard1).toEqual(['root', 'section1', 'card1']);
    expect(pathToCard2).toEqual(['root', 'section1', 'card2']);
    expect(pathToCard3).toEqual(['root', 'section2', 'card3']);
  });

  it('should return path to deepest level', () => {
    const tree = createDeeplyNestedTree();
    const path = getComponentPath(tree, 'level5');

    expect(path).toEqual(['level0', 'level1', 'level2', 'level3', 'level4', 'level5']);
  });
});

// ========== deepCloneComponent Tests ==========
describe('deepCloneComponent', () => {
  it('should create a new object', () => {
    const original = createSimpleTree();
    const clone = deepCloneComponent(original);

    expect(clone).not.toBe(original);
  });

  it('should preserve all properties', () => {
    const original = { id: 'test', type: 'Button', props: { label: 'Click' } };
    const clone = deepCloneComponent(original);

    expect(clone.id).toBe('test');
    expect(clone.type).toBe('Button');
    expect(clone.props.label).toBe('Click');
  });

  it('should deep clone children', () => {
    const original = createSimpleTree();
    const clone = deepCloneComponent(original);

    expect(clone.children).not.toBe(original.children);
    expect(clone.children[0]).not.toBe(original.children[0]);
    expect(clone.children[0].id).toBe(original.children[0].id);
  });

  it('should not affect original when modifying clone', () => {
    const original = createSimpleTree();
    const clone = deepCloneComponent(original);

    clone.id = 'modified';
    clone.children[0].type = 'ModifiedButton';

    expect(original.id).toBe('root');
    expect(original.children[0].type).toBe('Button');
  });

  it('should clone nested structures', () => {
    const original = createNestedTree();
    const clone = deepCloneComponent(original);

    const originalButton = findComponentById(original, 'button1');
    const clonedButton = findComponentById(clone, 'button1');

    expect(clonedButton).not.toBe(originalButton);
    expect(clonedButton.id).toBe(originalButton.id);
  });

  it('should handle component with no children', () => {
    const original = { id: 'alone', type: 'Button' };
    const clone = deepCloneComponent(original);

    expect(clone.id).toBe('alone');
    expect(clone.type).toBe('Button');
    expect(clone).not.toBe(original);
  });

  it('should clone deeply nested properties', () => {
    const original = {
      id: 'test',
      props: {
        style: {
          colors: {
            primary: '#000',
            secondary: '#fff'
          }
        }
      }
    };

    const clone = deepCloneComponent(original);

    expect(clone.props.style.colors.primary).toBe('#000');
    expect(clone.props.style.colors).not.toBe(original.props.style.colors);
  });

  it('should handle arrays in properties', () => {
    const original = {
      id: 'test',
      props: {
        items: ['a', 'b', 'c']
      }
    };

    const clone = deepCloneComponent(original);

    expect(clone.props.items).toEqual(['a', 'b', 'c']);
    expect(clone.props.items).not.toBe(original.props.items);
  });
});

// ========== Integration Tests ==========
describe('Component Helpers Integration', () => {
  it('should work together for component manipulation', () => {
    const tree = createNestedTree();

    // Find a component
    const card2 = findComponentById(tree, 'card2');
    expect(card2).not.toBeNull();

    // Check its path
    const path = getComponentPath(tree, 'card2');
    expect(path).toEqual(['root', 'section1', 'card2']);

    // Collect its descendant IDs
    const descendants = collectAllComponentIds(card2);
    expect(descendants).toContain('button1');
    expect(descendants).toContain('text1');

    // Clone it
    const clone = deepCloneComponent(card2);
    expect(clone.id).toBe('card2');

    // Remove a child
    const removed = removeComponentFromTree(tree, 'button1');
    expect(removed).not.toBeNull();
    expect(findComponentById(tree, 'button1')).toBeNull();
  });

  it('should correctly identify parent-child relationships', () => {
    const tree = createNestedTree();

    // section1 contains card1 and card2
    expect(isDescendant(tree, 'section1', 'card1')).toBe(true);
    expect(isDescendant(tree, 'section1', 'card2')).toBe(true);
    expect(isDescendant(tree, 'section1', 'button1')).toBe(true);

    // section2 does not contain card1 or button1
    expect(isDescendant(tree, 'section2', 'card1')).toBe(false);
    expect(isDescendant(tree, 'section2', 'button1')).toBe(false);

    // section2 contains card3
    expect(isDescendant(tree, 'section2', 'card3')).toBe(true);
  });

  it('should handle removal and re-collection of IDs', () => {
    const tree = createNestedTree();

    // Initial count
    const initialIds = collectAllComponentIds(tree);
    const initialCount = initialIds.length;

    // Remove a subtree
    removeComponentFromTree(tree, 'card2');

    // New count should be less
    const newIds = collectAllComponentIds(tree);
    const newCount = newIds.length;

    expect(newCount).toBeLessThan(initialCount);
    expect(newIds).not.toContain('button1');
    expect(newIds).not.toContain('text1');
    expect(newIds).not.toContain('card2');
  });
});

// ========== Edge Cases ==========
describe('Edge Cases', () => {
  it('should handle undefined children gracefully', () => {
    const tree = { id: 'root', children: undefined };

    expect(findComponentById(tree, 'child')).toBeNull();
    expect(collectAllComponentIds(tree)).toEqual(['root']);
    expect(removeComponentFromTree(tree, 'child')).toBeNull();
    expect(getComponentPath(tree, 'child')).toBeNull();
  });

  it('should handle null children gracefully', () => {
    const tree = { id: 'root', children: null };

    expect(findComponentById(tree, 'child')).toBeNull();
    expect(removeComponentFromTree(tree, 'child')).toBeNull();
  });

  it('should handle components with same-named properties', () => {
    const tree = {
      id: 'root',
      type: 'Container',
      children: [{
        id: 'child',
        type: 'child', // type matches id
        children: []
      }]
    };

    const found = findComponentById(tree, 'child');
    expect(found).not.toBeNull();
    expect(found.type).toBe('child');
  });

  it('should handle numeric IDs (as strings)', () => {
    const tree = {
      id: '123',
      children: [{
        id: '456',
        children: []
      }]
    };

    expect(findComponentById(tree, '456')).not.toBeNull();
    expect(collectAllComponentIds(tree)).toContain('456');
    expect(getComponentPath(tree, '456')).toEqual(['123', '456']);
  });
});
