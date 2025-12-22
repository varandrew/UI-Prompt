/**
 * URL 參數處理工具函數測試
 * Tests for URL Parameters Helper Utilities
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  getArrayParam,
  setArrayParam,
  getStringParam,
  setStringParam,
  isValidCategory,
  filterValidCategories,
  isValidTag,
  filterValidTags
} from '../../../src/utils/urlParamsHelper.js';

// ========== getArrayParam Tests ==========
describe('getArrayParam', () => {
  let params;

  beforeEach(() => {
    params = new URLSearchParams();
  });

  it('should return empty array for non-existent key', () => {
    expect(getArrayParam(params, 'categories')).toEqual([]);
  });

  it('should return single value as array', () => {
    params.append('categories', 'core');
    expect(getArrayParam(params, 'categories')).toEqual(['core']);
  });

  it('should return multiple values as array', () => {
    params.append('categories', 'core');
    params.append('categories', 'visual');
    params.append('categories', 'retro');
    expect(getArrayParam(params, 'categories')).toEqual(['core', 'visual', 'retro']);
  });

  it('should filter out empty strings', () => {
    params.append('tags', '');
    params.append('tags', 'modern');
    params.append('tags', '');
    expect(getArrayParam(params, 'tags')).toEqual(['modern']);
  });

  it('should handle URL encoded values', () => {
    params.append('q', 'hello world');
    expect(getArrayParam(params, 'q')).toEqual(['hello world']);
  });
});

// ========== setArrayParam Tests ==========
describe('setArrayParam', () => {
  let params;

  beforeEach(() => {
    params = new URLSearchParams();
  });

  it('should set multiple values', () => {
    setArrayParam(params, 'categories', ['core', 'visual']);
    expect(params.getAll('categories')).toEqual(['core', 'visual']);
  });

  it('should clear existing values before setting new ones', () => {
    params.append('categories', 'old');
    setArrayParam(params, 'categories', ['new1', 'new2']);
    expect(params.getAll('categories')).toEqual(['new1', 'new2']);
  });

  it('should delete key when array is empty', () => {
    params.append('categories', 'core');
    setArrayParam(params, 'categories', []);
    expect(params.has('categories')).toBe(false);
  });

  it('should delete key when array is null', () => {
    params.append('categories', 'core');
    setArrayParam(params, 'categories', null);
    expect(params.has('categories')).toBe(false);
  });

  it('should delete key when array is undefined', () => {
    params.append('categories', 'core');
    setArrayParam(params, 'categories', undefined);
    expect(params.has('categories')).toBe(false);
  });

  it('should filter out falsy values in array', () => {
    setArrayParam(params, 'tags', ['modern', '', null, 'retro', undefined]);
    expect(params.getAll('tags')).toEqual(['modern', 'retro']);
  });

  it('should handle single value array', () => {
    setArrayParam(params, 'categories', ['core']);
    expect(params.getAll('categories')).toEqual(['core']);
  });
});

// ========== getStringParam Tests ==========
describe('getStringParam', () => {
  let params;

  beforeEach(() => {
    params = new URLSearchParams();
  });

  it('should return value when key exists', () => {
    params.set('q', 'search term');
    expect(getStringParam(params, 'q')).toBe('search term');
  });

  it('should return empty string when key does not exist and no default', () => {
    expect(getStringParam(params, 'q')).toBe('');
  });

  it('should return default value when key does not exist', () => {
    expect(getStringParam(params, 'q', 'default')).toBe('default');
  });

  it('should return value even if it matches default', () => {
    params.set('q', 'default');
    expect(getStringParam(params, 'q', 'fallback')).toBe('default');
  });

  it('should return first value when multiple values exist', () => {
    params.append('q', 'first');
    params.append('q', 'second');
    expect(getStringParam(params, 'q')).toBe('first');
  });
});

// ========== setStringParam Tests ==========
describe('setStringParam', () => {
  let params;

  beforeEach(() => {
    params = new URLSearchParams();
  });

  it('should set string value', () => {
    setStringParam(params, 'q', 'search');
    expect(params.get('q')).toBe('search');
  });

  it('should overwrite existing value', () => {
    params.set('q', 'old');
    setStringParam(params, 'q', 'new');
    expect(params.get('q')).toBe('new');
  });

  it('should delete key when value is empty string', () => {
    params.set('q', 'existing');
    setStringParam(params, 'q', '');
    expect(params.has('q')).toBe(false);
  });

  it('should delete key when value is whitespace only', () => {
    params.set('q', 'existing');
    setStringParam(params, 'q', '   ');
    expect(params.has('q')).toBe(false);
  });

  it('should delete key when value is null', () => {
    params.set('q', 'existing');
    setStringParam(params, 'q', null);
    expect(params.has('q')).toBe(false);
  });

  it('should delete key when value is undefined', () => {
    params.set('q', 'existing');
    setStringParam(params, 'q', undefined);
    expect(params.has('q')).toBe(false);
  });

  it('should preserve value with leading/trailing whitespace (not trimmed)', () => {
    setStringParam(params, 'q', ' search ');
    expect(params.get('q')).toBe(' search ');
  });
});

// ========== isValidCategory Tests ==========
describe('isValidCategory', () => {
  const validCategories = ['core', 'visual', 'retro', 'layout', 'interaction'];

  it('should return true for valid category', () => {
    expect(isValidCategory('core', validCategories)).toBe(true);
    expect(isValidCategory('visual', validCategories)).toBe(true);
    expect(isValidCategory('retro', validCategories)).toBe(true);
  });

  it('should return false for invalid category', () => {
    expect(isValidCategory('unknown', validCategories)).toBe(false);
    expect(isValidCategory('', validCategories)).toBe(false);
  });

  it('should be case sensitive', () => {
    expect(isValidCategory('Core', validCategories)).toBe(false);
    expect(isValidCategory('VISUAL', validCategories)).toBe(false);
  });

  it('should handle empty valid categories list', () => {
    expect(isValidCategory('core', [])).toBe(false);
  });
});

// ========== filterValidCategories Tests ==========
describe('filterValidCategories', () => {
  const validCategories = ['core', 'visual', 'retro', 'layout', 'interaction'];

  it('should filter out invalid categories', () => {
    const input = ['core', 'invalid', 'visual', 'unknown'];
    expect(filterValidCategories(input, validCategories)).toEqual(['core', 'visual']);
  });

  it('should return empty array when all are invalid', () => {
    const input = ['invalid1', 'invalid2'];
    expect(filterValidCategories(input, validCategories)).toEqual([]);
  });

  it('should return same array when all are valid', () => {
    const input = ['core', 'visual', 'retro'];
    expect(filterValidCategories(input, validCategories)).toEqual(['core', 'visual', 'retro']);
  });

  it('should handle empty input array', () => {
    expect(filterValidCategories([], validCategories)).toEqual([]);
  });

  it('should preserve order', () => {
    const input = ['retro', 'core', 'invalid', 'visual'];
    expect(filterValidCategories(input, validCategories)).toEqual(['retro', 'core', 'visual']);
  });
});

// ========== isValidTag Tests ==========
describe('isValidTag', () => {
  const allTags = {
    era: {
      'modern': { label: 'Modern' },
      'retro': { label: 'Retro' }
    },
    visual: {
      'gradient': { label: 'Gradient' },
      'flat': { label: 'Flat' }
    }
  };

  it('should return true for valid tag in any group', () => {
    expect(isValidTag('modern', allTags)).toBe(true);
    expect(isValidTag('gradient', allTags)).toBe(true);
  });

  it('should return false for invalid tag', () => {
    expect(isValidTag('unknown', allTags)).toBe(false);
    expect(isValidTag('', allTags)).toBe(false);
  });

  it('should handle empty allTags object', () => {
    expect(isValidTag('modern', {})).toBe(false);
  });

  it('should handle nested empty groups', () => {
    const emptyGroups = { era: {}, visual: {} };
    expect(isValidTag('modern', emptyGroups)).toBe(false);
  });
});

// ========== filterValidTags Tests ==========
describe('filterValidTags', () => {
  const allTags = {
    era: {
      'modern': { label: 'Modern' },
      'retro': { label: 'Retro' }
    },
    visual: {
      'gradient': { label: 'Gradient' },
      'flat': { label: 'Flat' }
    }
  };

  it('should filter out invalid tags', () => {
    const input = ['modern', 'invalid', 'gradient', 'unknown'];
    expect(filterValidTags(input, allTags)).toEqual(['modern', 'gradient']);
  });

  it('should return empty array when all are invalid', () => {
    const input = ['invalid1', 'invalid2'];
    expect(filterValidTags(input, allTags)).toEqual([]);
  });

  it('should return same array when all are valid', () => {
    const input = ['modern', 'retro', 'gradient'];
    expect(filterValidTags(input, allTags)).toEqual(['modern', 'retro', 'gradient']);
  });

  it('should handle empty input array', () => {
    expect(filterValidTags([], allTags)).toEqual([]);
  });

  it('should preserve order', () => {
    const input = ['gradient', 'modern', 'invalid', 'retro'];
    expect(filterValidTags(input, allTags)).toEqual(['gradient', 'modern', 'retro']);
  });
});

// ========== Integration Tests ==========
describe('URL Parameters Integration', () => {
  it('should roundtrip array parameters correctly', () => {
    const params = new URLSearchParams();
    const original = ['core', 'visual', 'retro'];

    setArrayParam(params, 'categories', original);
    const result = getArrayParam(params, 'categories');

    expect(result).toEqual(original);
  });

  it('should roundtrip string parameters correctly', () => {
    const params = new URLSearchParams();

    setStringParam(params, 'q', 'test search');
    const result = getStringParam(params, 'q');

    expect(result).toBe('test search');
  });

  it('should handle mixed parameters', () => {
    const params = new URLSearchParams();

    setArrayParam(params, 'categories', ['core', 'visual']);
    setArrayParam(params, 'tags', ['modern']);
    setStringParam(params, 'q', 'button');

    expect(getArrayParam(params, 'categories')).toEqual(['core', 'visual']);
    expect(getArrayParam(params, 'tags')).toEqual(['modern']);
    expect(getStringParam(params, 'q')).toBe('button');
  });

  it('should generate correct query string', () => {
    const params = new URLSearchParams();

    setArrayParam(params, 'categories', ['core', 'visual']);
    setStringParam(params, 'q', 'search');

    const queryString = params.toString();
    expect(queryString).toContain('categories=core');
    expect(queryString).toContain('categories=visual');
    expect(queryString).toContain('q=search');
  });
});
