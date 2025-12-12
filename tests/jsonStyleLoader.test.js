import { describe, it, expect } from 'vitest';
import { loadFullFamily } from '../src/data/loaders/jsonStyleLoader.js';

describe('jsonStyleLoader - ID Preservation Tests', () => {
  it('should preserve full retro-digitalRetro ID (18 chars)', async () => {
    const family = await loadFullFamily('retro', 'digitalRetro');

    expect(family).toBeDefined();
    expect(family.id).toBe('retro-digitalRetro');
    expect(family.id.length).toBe(18);
    expect(family.id).not.toBe('retro-digitalRetr'); // NOT truncated to 17
  });

  it('should preserve IDs longer than 17 characters', async () => {
    const testCases = [
      { category: 'retro', familyId: 'digitalRetro', expected: 'retro-digitalRetro', length: 18 },
      { category: 'visual', familyId: 'scrollNarrative', expected: 'visual-scrollNarrative', length: 22 }
    ];

    for (const { category, familyId, expected, length } of testCases) {
      const family = await loadFullFamily(category, familyId);

      if (family) {
        expect(family.id).toBe(expected);
        expect(family.id.length).toBe(length);
      } else {
        // Skip if family doesn't exist
        console.warn(`Family not found: ${category}/${familyId}`);
      }
    }
  });

  it('should not truncate IDs at 17 characters', async () => {
    // Test specifically for the reported bug: truncation at 17 chars
    const family = await loadFullFamily('retro', 'digitalRetro');

    if (family && family.id) {
      // Verify the last character is 'o', not 'r'
      expect(family.id.charAt(family.id.length - 1)).toBe('o');
      // Verify it doesn't end with 'Retr'
      expect(family.id.endsWith('Retr')).toBe(false);
      // Verify it correctly ends with 'Retro'
      expect(family.id.endsWith('Retro')).toBe(true);
    }
  });
});
