/**
 * Unit tests for emptyStateTemplate utility
 */

import { describe, it, expect } from 'vitest';
import { buildEmptyStateHTML, escapeHTML } from '../src/components/preview/utils/emptyStateTemplate.js';

// Mock translation function
const mockT = (key, params = {}) => {
  const translations = {
    'preview.title': `${params.title} - Preview`,
    'preview.noTemplateTitle': 'No Website Template Available',
    'preview.noTemplateDescription': 'This design style doesn\'t have a full website template example yet.',
    'preview.noTemplateHint': 'You can click the \'AI Prompt\' button to view the design guide',
    'common.styles': 'Styles',
    'buttons.prompt': 'AI Prompt'
  };
  return translations[key] || key;
};

describe('escapeHTML', () => {
  it('should escape HTML entities', () => {
    expect(escapeHTML('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
  });

  it('should escape ampersands', () => {
    expect(escapeHTML('Tom & Jerry')).toBe('Tom &amp; Jerry');
  });

  it('should escape single quotes', () => {
    expect(escapeHTML("It's a test")).toContain('&#039;');
  });

  it('should handle empty string', () => {
    expect(escapeHTML('')).toBe('');
  });

  it('should handle normal text without special chars', () => {
    expect(escapeHTML('Glassmorphism')).toBe('Glassmorphism');
  });
});

describe('buildEmptyStateHTML', () => {
  it('should build a complete HTML document', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Glassmorphism',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('<html lang="zh-CN">');
    expect(html).toContain('</html>');
  });

  it('should include the sanitized display title', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Glassmorphism',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('Glassmorphism');
  });

  it('should sanitize malicious title content', () => {
    const html = buildEmptyStateHTML({
      displayTitle: '<script>alert("xss")</script>Test',
      language: 'zh-CN',
      t: mockT
    });

    // Should escape the script tag
    expect(html).toContain('&lt;script&gt;');
    expect(html).not.toContain('<script>alert');
  });

  it('should include Tailwind CSS CDN', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'en-US',
      t: mockT
    });

    expect(html).toContain('cdn.tailwindcss.com');
  });

  it('should include Inter font from Google Fonts', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'en-US',
      t: mockT
    });

    expect(html).toContain('fonts.googleapis.com/css2?family=Inter');
  });

  it('should include postMessage script', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('function notifyParent()');
    expect(html).toContain('window.parent.postMessage');
    expect(html).toContain("action: 'openPrompt'");
  });

  it('should include translated content', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Glassmorphism',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('No Website Template Available');
    expect(html).toContain('AI Prompt');
    expect(html).toContain('Styles');
  });

  it('should include CSS animations', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('.fade-in-up');
    expect(html).toContain('@keyframes fadeInUp');
    expect(html).toContain('.btn-minimal');
  });

  it('should include accessibility features', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('*:focus-visible');
    expect(html).toContain('outline');
  });

  it('should handle empty displayTitle gracefully', () => {
    const html = buildEmptyStateHTML({
      displayTitle: '',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('<!DOCTYPE html>');
    expect(html).not.toThrow;
  });

  it('should set correct language attribute', () => {
    const htmlZh = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'zh-CN',
      t: mockT
    });

    const htmlEn = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'en-US',
      t: mockT
    });

    expect(htmlZh).toContain('<html lang="zh-CN">');
    expect(htmlEn).toContain('<html lang="en-US">');
  });

  it('should include lightbulb SVG icon', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"');
    expect(html).toContain('M15 14c.2-1 .7-1.7 1.5-2.5'); // Lightbulb path
  });

  it('should include sparkle icon in button', () => {
    const html = buildEmptyStateHTML({
      displayTitle: 'Test',
      language: 'zh-CN',
      t: mockT
    });

    expect(html).toContain('M9.937 15.5A2 2 0 0 0 8.5 14.063'); // Sparkle path
  });
});
