/**
 * 組件樹操作工具函数
 */

/**
 * 在樹中遞歸查找組件
 * @param {Object} tree - 組件樹
 * @param {string} id - 組件 ID
 * @returns {Object|null} - 找到的組件節點或 null
 */
export const findComponentById = (tree, id) => {
  if (tree.id === id) return tree;

  for (const child of tree.children || []) {
    const found = findComponentById(child, id);
    if (found) return found;
  }

  return null;
};

/**
 * 从樹中移除組件
 * @param {Object} tree - 組件樹
 * @param {string} componentId - 要移除的組件 ID
 * @returns {Object|null} - 被移除的組件或 null
 */
export const removeComponentFromTree = (tree, componentId) => {
  const index = tree.children?.findIndex(child => child.id === componentId);
  if (index !== -1 && index !== undefined) {
    const [removed] = tree.children.splice(index, 1);
    return removed;
  }

  for (const child of tree.children || []) {
    const removed = removeComponentFromTree(child, componentId);
    if (removed) return removed;
  }

  return null;
};

/**
 * 遞歸收集所有組件 ID
 * @param {Object} tree - 組件樹
 * @returns {string[]} - 所有組件 ID 列表
 */
export const collectAllComponentIds = (tree) => {
  const ids = [tree.id];

  for (const child of tree.children || []) {
    ids.push(...collectAllComponentIds(child));
  }

  return ids;
};

/**
 * 检查組件是否為另一個組件的後代
 * @param {Object} tree - 組件樹
 * @param {string} ancestorId - 祖先組件 ID
 * @param {string} descendantId - 後代組件 ID
 * @returns {boolean}
 */
export const isDescendant = (tree, ancestorId, descendantId) => {
  const ancestor = findComponentById(tree, ancestorId);
  if (!ancestor) return false;

  const descendantIds = collectAllComponentIds(ancestor);
  return descendantIds.includes(descendantId);
};

/**
 * 獲取組件路徑 (从根到目标組件的 ID 列表)
 * @param {Object} tree - 組件樹
 * @param {string} targetId - 目标組件 ID
 * @returns {string[]|null} - 路徑 ID 列表或 null
 */
export const getComponentPath = (tree, targetId, path = []) => {
  if (tree.id === targetId) {
    return [...path, tree.id];
  }

  for (const child of tree.children || []) {
    const result = getComponentPath(child, targetId, [...path, tree.id]);
    if (result) return result;
  }

  return null;
};

/**
 * 深度克隆組件樹節點
 * @param {Object} component - 組件節點
 * @returns {Object} - 克隆的組件
 */
export const deepCloneComponent = (component) => {
  return JSON.parse(JSON.stringify(component));
};
