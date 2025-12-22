/**
 * StyleIdParser 測試
 * Tests for Style ID parsing and category/familyId resolution
 */

import { describe, it, expect } from 'vitest';
import { parseStyleId, getAvailableCategories } from '../../../src/data/loaders/StyleIdParser.js';
import { FAMILY_ID_MAP, normalizeId, resolveAlias } from '../../../src/data/loaders/config/familyIdMap.js';

// ========== getAvailableCategories Tests ==========
describe('getAvailableCategories', () => {
  it('should return all available categories', () => {
    const categories = getAvailableCategories();
    expect(categories).toContain('core');
    expect(categories).toContain('visual');
    expect(categories).toContain('retro');
    expect(categories).toContain('layout');
    expect(categories).toContain('interaction');
  });

  it('should return exactly 5 categories', () => {
    const categories = getAvailableCategories();
    expect(categories).toHaveLength(5);
  });

  it('should return new array each time', () => {
    const first = getAvailableCategories();
    const second = getAvailableCategories();
    expect(first).not.toBe(second);
    expect(first).toEqual(second);
  });
});

// ========== parseStyleId - Basic Cases ==========
describe('parseStyleId - Basic Cases', () => {
  it('should return empty object for null input', () => {
    expect(parseStyleId(null)).toEqual({ category: '', familyId: '', templateId: '' });
  });

  it('should return empty object for undefined input', () => {
    expect(parseStyleId(undefined)).toEqual({ category: '', familyId: '', templateId: '' });
  });

  it('should return empty object for empty string', () => {
    expect(parseStyleId('')).toEqual({ category: '', familyId: '', templateId: '' });
  });

  it('should return empty object for single segment', () => {
    expect(parseStyleId('core')).toEqual({ category: '', familyId: '', templateId: '' });
  });

  it('should parse simple two-segment ID', () => {
    const result = parseStyleId('core-materialDesign');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('materialDesign');
  });

  it('should parse ID and return empty templateId when ID equals category-familyId', () => {
    const result = parseStyleId('core-materialDesign');
    expect(result.templateId).toBe('');
  });
});

// ========== parseStyleId - Core Category ==========
describe('parseStyleId - Core Category', () => {
  it('should parse flatDesign', () => {
    const result = parseStyleId('core-flatDesign');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('flatDesign');
  });

  it('should parse materialDesign', () => {
    const result = parseStyleId('core-materialDesign');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('materialDesign');
  });

  it('should parse skeuomorphism', () => {
    const result = parseStyleId('core-skeuomorphism');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('skeuomorphism');
  });

  it('should parse minimalism', () => {
    const result = parseStyleId('core-minimalism');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('minimalism');
  });

  it('should parse softUI', () => {
    const result = parseStyleId('core-softUI');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('softUI');
  });

  it('should parse core style with template ID', () => {
    const result = parseStyleId('core-flatDesign-dashboard');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('flatDesign');
    expect(result.templateId).toBe('core-flatDesign-dashboard');
  });
});

// ========== parseStyleId - Visual Category ==========
describe('parseStyleId - Visual Category', () => {
  it('should parse glassmorphism', () => {
    const result = parseStyleId('visual-glassmorphism');
    expect(result.category).toBe('visual');
    expect(result.familyId).toBe('glassmorphism');
  });

  it('should parse neoBrutalism', () => {
    const result = parseStyleId('visual-neoBrutalism');
    expect(result.category).toBe('visual');
    expect(result.familyId).toBe('neoBrutalism');
  });

  it('should parse neonCyberpunk', () => {
    const result = parseStyleId('visual-neonCyberpunk');
    expect(result.category).toBe('visual');
    expect(result.familyId).toBe('neonCyberpunk');
  });

  it('should parse 3dElements (numeric prefix)', () => {
    const result = parseStyleId('visual-3dElements');
    expect(result.category).toBe('visual');
    expect(result.familyId).toBe('3dElements');
  });

  it('should parse auroraGlass', () => {
    const result = parseStyleId('visual-auroraGlass');
    expect(result.category).toBe('visual');
    expect(result.familyId).toBe('auroraGlass');
  });
});

// ========== parseStyleId - Retro Category ==========
describe('parseStyleId - Retro Category', () => {
  it('should parse artDeco', () => {
    const result = parseStyleId('retro-artDeco');
    expect(result.category).toBe('retro');
    expect(result.familyId).toBe('artDeco');
  });

  it('should parse darkAcademia', () => {
    const result = parseStyleId('retro-darkAcademia');
    expect(result.category).toBe('retro');
    expect(result.familyId).toBe('darkAcademia');
  });

  it('should parse retroOS', () => {
    const result = parseStyleId('retro-retroOS');
    expect(result.category).toBe('retro');
    expect(result.familyId).toBe('retroOS');
  });

  it('should parse frutigerAero', () => {
    const result = parseStyleId('retro-frutigerAero');
    expect(result.category).toBe('retro');
    expect(result.familyId).toBe('frutigerAero');
  });

  it('should parse synthwave', () => {
    const result = parseStyleId('retro-synthwave');
    expect(result.category).toBe('retro');
    expect(result.familyId).toBe('synthwave');
  });
});

// ========== parseStyleId - Multi-Segment Family IDs ==========
describe('parseStyleId - Multi-Segment Family IDs', () => {
  it('should handle dark-academia multi-segment ID', () => {
    const result = parseStyleId('retro-dark-academia');
    expect(result.category).toBe('retro');
    // Should map to darkAcademia via FAMILY_ID_MAP
    expect(result.familyId).toBe('darkAcademia');
  });

  it('should handle retro-os alias', () => {
    const result = parseStyleId('retro-os');
    expect(result.category).toBe('retro');
    expect(result.familyId).toBe('retroOS');
  });

  it('should handle art-deco alias', () => {
    const result = parseStyleId('retro-art-deco');
    expect(result.category).toBe('retro');
    expect(result.familyId).toBe('artDeco');
  });

  it('should handle soft-ui alias in core', () => {
    const result = parseStyleId('core-soft-ui');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('softUI');
  });

  it('should handle neo-brutal alias', () => {
    const result = parseStyleId('visual-neo-brutal');
    expect(result.category).toBe('visual');
    expect(result.familyId).toBe('neoBrutalism');
  });
});

// ========== parseStyleId - Template IDs ==========
describe('parseStyleId - Template IDs', () => {
  it('should extract templateId for style with template', () => {
    const result = parseStyleId('visual-glassmorphism-aurora-landing');
    expect(result.category).toBe('visual');
    expect(result.templateId).toBe('visual-glassmorphism-aurora-landing');
  });

  it('should return full ID as templateId when it differs from category-family', () => {
    const result = parseStyleId('core-materialDesign-dashboard-v2');
    expect(result.templateId).toBe('core-materialDesign-dashboard-v2');
  });

  it('should handle long template IDs correctly', () => {
    const result = parseStyleId('visual-neonCyberpunk-cyber-city-night-scene');
    expect(result.category).toBe('visual');
    expect(result.familyId).toBe('neonCyberpunk');
    expect(result.templateId).toBe('visual-neonCyberpunk-cyber-city-night-scene');
  });
});

// ========== parseStyleId - Edge Cases ==========
describe('parseStyleId - Edge Cases', () => {
  it('should handle unknown category gracefully', () => {
    const result = parseStyleId('unknown-familyId');
    expect(result.category).toBe('unknown');
    expect(result.familyId).toBe('familyId');
  });

  it('should handle trailing hyphen', () => {
    const result = parseStyleId('core-flatDesign-');
    expect(result.category).toBe('core');
    expect(result.familyId).toBe('flatDesign');
  });

  it('should handle multiple consecutive hyphens', () => {
    const result = parseStyleId('core--flatDesign');
    expect(result.category).toBe('core');
    // familyId parsing depends on implementation
    expect(result.familyId).toBeDefined();
  });

  it('should handle very long IDs (17+ characters)', () => {
    // Regression test for ID truncation issue
    const longId = 'visual-scrollNarrative-vision-launch-narrative';
    const result = parseStyleId(longId);
    expect(result.category).toBe('visual');
    // The full ID should be preserved
    expect(result.templateId).toBe(longId);
  });
});

// ========== normalizeId Tests ==========
describe('normalizeId', () => {
  it('should remove hyphens and convert to lowercase', () => {
    expect(normalizeId('Dark-Academia')).toBe('darkacademia');
  });

  it('should remove underscores', () => {
    expect(normalizeId('soft_ui')).toBe('softui');
  });

  it('should handle empty string', () => {
    expect(normalizeId('')).toBe('');
  });

  it('should handle undefined', () => {
    expect(normalizeId(undefined)).toBe('');
  });

  it('should handle numeric strings', () => {
    expect(normalizeId('3d-Elements')).toBe('3delements');
  });

  it('should handle mixed case', () => {
    expect(normalizeId('NeonCyberpunk')).toBe('neoncyberpunk');
  });

  it('should remove special characters', () => {
    expect(normalizeId('neo@brutal#ism')).toBe('neobrutalism');
  });
});

// ========== resolveAlias Tests ==========
describe('resolveAlias', () => {
  it('should resolve known alias to actual family ID', () => {
    expect(resolveAlias('glass')).toBe('glassmorphism');
    expect(resolveAlias('flat')).toBe('flatDesign');
    expect(resolveAlias('material')).toBe('materialDesign');
  });

  it('should return original if not an alias', () => {
    expect(resolveAlias('glassmorphism')).toBe('glassmorphism');
    expect(resolveAlias('flatDesign')).toBe('flatDesign');
  });

  it('should handle empty string', () => {
    expect(resolveAlias('')).toBe('');
  });

  it('should handle null', () => {
    expect(resolveAlias(null)).toBe('');
  });

  it('should handle undefined', () => {
    expect(resolveAlias(undefined)).toBe('');
  });

  it('should be case insensitive', () => {
    expect(resolveAlias('GLASS')).toBe('glassmorphism');
    expect(resolveAlias('Glass')).toBe('glassmorphism');
  });

  it('should resolve hyphenated aliases', () => {
    expect(resolveAlias('soft-ui')).toBe('softUI');
    expect(resolveAlias('neo-brutal')).toBe('neoBrutalism');
  });

  it('should resolve retro aliases correctly', () => {
    expect(resolveAlias('os')).toBe('retroOS');
    expect(resolveAlias('crt')).toBe('arcadeCRT');
    expect(resolveAlias('aero')).toBe('frutigerAero');
  });
});

// ========== FAMILY_ID_MAP Coverage ==========
describe('FAMILY_ID_MAP Coverage', () => {
  it('should have mappings for core families', () => {
    expect(FAMILY_ID_MAP['flat']).toBe('flatDesign');
    expect(FAMILY_ID_MAP['material']).toBe('materialDesign');
    expect(FAMILY_ID_MAP['skeuo']).toBe('skeuomorphism');
    expect(FAMILY_ID_MAP['minimal']).toBe('minimalism');
    expect(FAMILY_ID_MAP['softui']).toBe('softUI');
  });

  it('should have mappings for visual families', () => {
    expect(FAMILY_ID_MAP['glass']).toBe('glassmorphism');
    expect(FAMILY_ID_MAP['3d']).toBe('3dElements');
    expect(FAMILY_ID_MAP['neon']).toBe('neon');
    expect(FAMILY_ID_MAP['brutal']).toBe('brutalism');
    expect(FAMILY_ID_MAP['holo']).toBe('holographic');
  });

  it('should have mappings for retro families', () => {
    expect(FAMILY_ID_MAP['arcade']).toBe('arcadeCRT');
    expect(FAMILY_ID_MAP['artdeco']).toBe('artDeco');
    expect(FAMILY_ID_MAP['academia']).toBe('darkAcademia');
    expect(FAMILY_ID_MAP['frutiger']).toBe('frutigerAero');
    expect(FAMILY_ID_MAP['retroos']).toBe('retroOS');
  });

  it('should have mappings for layout families', () => {
    expect(FAMILY_ID_MAP['bento']).toBe('bentoGrids');
    expect(FAMILY_ID_MAP['bento-grid']).toBe('bentoGrids');
  });

  it('should have mappings for interaction families', () => {
    expect(FAMILY_ID_MAP['mouse']).toBe('mouseTracking');
    expect(FAMILY_ID_MAP['mousetracking']).toBe('mouseTracking');
  });
});

// ========== Integration Tests ==========
describe('parseStyleId Integration', () => {
  it('should work with URL-friendly aliases', () => {
    // Common URL patterns users might type
    const cases = [
      { input: 'visual-glass', expectedFamily: 'glassmorphism' },
      { input: 'core-flat', expectedFamily: 'flatDesign' },
      { input: 'retro-os', expectedFamily: 'retroOS' },
      { input: 'visual-3d', expectedFamily: '3dElements' },
    ];

    cases.forEach(({ input, expectedFamily }) => {
      const result = parseStyleId(input);
      expect(result.familyId).toBe(expectedFamily);
    });
  });

  it('should correctly identify all valid categories', () => {
    const categories = getAvailableCategories();
    categories.forEach(category => {
      const result = parseStyleId(`${category}-testFamily`);
      expect(result.category).toBe(category);
    });
  });
});
