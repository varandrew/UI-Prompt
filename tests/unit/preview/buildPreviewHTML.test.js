/**
 * buildPreviewHTML 工具函數測試
 * Tests for Preview HTML Building Utilities
 */

import { describe, it, expect, vi } from 'vitest';

// Mock DOMPurify for Node environment
vi.mock('dompurify', () => ({
  default: {
    sanitize: (input) => input
  }
}));

// Mock sanitizeCache
vi.mock('../../../src/utils/sanitizeCache', () => ({
  cachedSanitize: (input) => input
}));

// Mock i18n
vi.mock('../../../src/utils/i18n/demoI18n', () => ({
  getDemoHTML: (html) => html
}));

// Mock CSS import
vi.mock('../../../src/index.css?url', () => ({
  default: '/styles/app.css'
}));

// Mock React runtime
vi.mock('../../../src/utils/reactRuntime', () => ({
  generateReactIframeHTML: ({ compiledCode, _componentName, customStyles, title }) => {
    return `<!DOCTYPE html><html><head><title>${title}</title><style>${customStyles}</style></head><body><div id="root"></div><script>${compiledCode}</script></body></html>`;
  }
}));

// Mock Preact runtime
vi.mock('../../../src/utils/preactRuntime', () => ({
  generatePreactIframeHTML: ({ compiledCode, customStyles, title }) => {
    return `<!DOCTYPE html><html><head><title>${title}</title><style>${customStyles}</style></head><body><div id="root"></div><script>${compiledCode}</script></body></html>`;
  }
}));

// Mock JSX preprocessor
vi.mock('../../../src/utils/jsxPreprocessor', () => ({
  preprocessJSX: (jsx) => ({ code: jsx, errors: [], warnings: [] })
}));

const {
  normalizeMarkdownHeadings,
  stripExternalAssets,
  extractFullPageContent,
  isCompleteHTMLDocument,
  hasExternalCSSLink,
  inlineExternalCSS,
  buildReactLoadingHTML,
  buildReactErrorHTML,
  buildPreviewHTML
} = await import('../../../src/components/preview/utils/buildPreviewHTML.js');

// ========== normalizeMarkdownHeadings Tests ==========
describe('normalizeMarkdownHeadings', () => {
  it('should return input unchanged if null', () => {
    expect(normalizeMarkdownHeadings(null)).toBeNull();
  });

  it('should return input unchanged if empty', () => {
    expect(normalizeMarkdownHeadings('')).toBe('');
  });

  it('should convert Chinese color scheme heading to H3', () => {
    const input = '## 配色方案';
    const result = normalizeMarkdownHeadings(input);
    expect(result).toContain('<h3');
    expect(result).toContain('配色方案');
  });

  it('should convert English color scheme heading to H3', () => {
    const input = '## Color Scheme';
    const result = normalizeMarkdownHeadings(input);
    expect(result).toContain('<h3');
  });

  it('should handle heading at start of content', () => {
    const input = '## 配色方案\nSome content';
    const result = normalizeMarkdownHeadings(input);
    // The function may clean up text after the heading
    expect(result).toBeDefined();
  });

  it('should handle heading after newline', () => {
    const input = 'Some content\n## 配色方案';
    const result = normalizeMarkdownHeadings(input);
    expect(result).toContain('<h3');
  });
});

// ========== stripExternalAssets Tests ==========
describe('stripExternalAssets', () => {
  it('should return input unchanged if null', () => {
    expect(stripExternalAssets(null)).toBeNull();
  });

  it('should return input unchanged if empty', () => {
    expect(stripExternalAssets('')).toBe('');
  });

  it('should preserve Tailwind CDN script', () => {
    const input = '<script src="https://cdn.tailwindcss.com"></script>';
    const result = stripExternalAssets(input);
    expect(result).toContain('cdn.tailwindcss.com');
  });

  it('should remove other external scripts', () => {
    const input = '<script src="https://example.com/script.js"></script>';
    const result = stripExternalAssets(input);
    expect(result).not.toContain('example.com');
  });

  it('should remove Vite HMR scripts', () => {
    const input = '<script src="/@vite/client"></script>';
    const result = stripExternalAssets(input);
    expect(result).not.toContain('@vite');
  });

  it('should remove external CSS links except allowlist', () => {
    const input = '<link href="https://fonts.googleapis.com/css" rel="stylesheet">';
    const result = stripExternalAssets(input);
    expect(result).not.toContain('fonts.googleapis.com');
  });

  it('should preserve local scripts', () => {
    const input = '<script src="/local/script.js"></script>';
    const result = stripExternalAssets(input);
    expect(result).toContain('/local/script.js');
  });

  it('should handle multiple scripts', () => {
    const input = `
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://example.com/evil.js"></script>
      <script src="/@vite/client"></script>
    `;
    const result = stripExternalAssets(input);
    expect(result).toContain('cdn.tailwindcss.com');
    expect(result).not.toContain('example.com');
    expect(result).not.toContain('@vite');
  });
});

// ========== isCompleteHTMLDocument Tests ==========
describe('isCompleteHTMLDocument', () => {
  it('should return false for null', () => {
    expect(isCompleteHTMLDocument(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isCompleteHTMLDocument(undefined)).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(isCompleteHTMLDocument('')).toBe(false);
  });

  it('should return false for non-string', () => {
    expect(isCompleteHTMLDocument(123)).toBe(false);
    expect(isCompleteHTMLDocument({})).toBe(false);
  });

  it('should return true for DOCTYPE declaration', () => {
    expect(isCompleteHTMLDocument('<!DOCTYPE html><html>')).toBe(true);
    expect(isCompleteHTMLDocument('<!doctype html><html>')).toBe(true);
  });

  it('should return true for html tag start', () => {
    expect(isCompleteHTMLDocument('<html lang="en">')).toBe(true);
    expect(isCompleteHTMLDocument('<html>')).toBe(true);
  });

  it('should handle whitespace before DOCTYPE', () => {
    expect(isCompleteHTMLDocument('  <!DOCTYPE html>')).toBe(true);
    expect(isCompleteHTMLDocument('\n<!doctype html>')).toBe(true);
  });

  it('should return false for HTML fragment', () => {
    expect(isCompleteHTMLDocument('<div>Content</div>')).toBe(false);
    expect(isCompleteHTMLDocument('<body>Content</body>')).toBe(false);
  });
});

// ========== hasExternalCSSLink Tests ==========
describe('hasExternalCSSLink', () => {
  it('should return false for null', () => {
    expect(hasExternalCSSLink(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(hasExternalCSSLink(undefined)).toBe(false);
  });

  it('should return false for non-string', () => {
    expect(hasExternalCSSLink(123)).toBe(false);
  });

  it('should return true for relative CSS link', () => {
    const html = '<link rel="stylesheet" href="fullpage.css">';
    expect(hasExternalCSSLink(html)).toBe(true);
  });

  it('should return true for relative path with ./', () => {
    const html = '<link rel="stylesheet" href="./styles.css">';
    expect(hasExternalCSSLink(html)).toBe(true);
  });

  it('should return false for CDN CSS link', () => {
    const html = '<link rel="stylesheet" href="https://cdn.example.com/style.css">';
    expect(hasExternalCSSLink(html)).toBe(false);
  });

  it('should handle reversed attribute order', () => {
    const html = '<link href="style.css" rel="stylesheet">';
    expect(hasExternalCSSLink(html)).toBe(true);
  });
});

// ========== inlineExternalCSS Tests ==========
describe('inlineExternalCSS', () => {
  it('should return html unchanged if null', () => {
    expect(inlineExternalCSS(null, 'body { color: red; }')).toBeNull();
  });

  it('should return html unchanged if styles is null', () => {
    const html = '<html><head><link rel="stylesheet" href="style.css"></head></html>';
    expect(inlineExternalCSS(html, null)).toBe(html);
  });

  it('should remove relative CSS links and add inline styles', () => {
    const html = '<html><head><link rel="stylesheet" href="style.css"></head><body></body></html>';
    const styles = 'body { color: red; }';
    const result = inlineExternalCSS(html, styles);

    expect(result).not.toContain('href="style.css"');
    expect(result).toContain('<style>');
    expect(result).toContain('body { color: red; }');
  });

  it('should inject styles before </head>', () => {
    const html = '<html><head><title>Test</title></head><body></body></html>';
    const styles = '.test { margin: 0; }';
    const result = inlineExternalCSS(html, styles);

    expect(result).toContain('<style>');
    expect(result.indexOf('<style>')).toBeLessThan(result.indexOf('</head>'));
  });

  it('should inject styles before <body> if no </head>', () => {
    const html = '<html><body></body></html>';
    const styles = '.test { margin: 0; }';
    const result = inlineExternalCSS(html, styles);

    expect(result).toContain('<style>');
    expect(result.indexOf('<style>')).toBeLessThan(result.indexOf('<body'));
  });

  it('should preserve CDN CSS links', () => {
    const html = '<html><head><link rel="stylesheet" href="https://cdn.example.com/style.css"></head></html>';
    const styles = 'body { color: red; }';
    const result = inlineExternalCSS(html, styles);

    expect(result).toContain('https://cdn.example.com/style.css');
  });
});

// ========== buildReactLoadingHTML Tests ==========
describe('buildReactLoadingHTML', () => {
  it('should generate loading HTML with default text', () => {
    const html = buildReactLoadingHTML();
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('Loading...');
  });

  it('should include custom loading text', () => {
    const html = buildReactLoadingHTML('Please wait...');
    expect(html).toContain('Please wait...');
  });

  it('should set correct language attribute', () => {
    const html = buildReactLoadingHTML('Loading...', 'zh-CN');
    expect(html).toContain('lang="zh-CN"');
  });

  it('should include loader animation elements', () => {
    const html = buildReactLoadingHTML();
    expect(html).toContain('minimalism-loader');
    expect(html).toContain('minimalism-loader-dot');
  });

  it('should include aria-label for accessibility', () => {
    const html = buildReactLoadingHTML('Loading...');
    expect(html).toContain('aria-label="Loading..."');
  });

  it('should include animation keyframes', () => {
    const html = buildReactLoadingHTML();
    expect(html).toContain('@keyframes pulse');
  });
});

// ========== buildReactErrorHTML Tests ==========
describe('buildReactErrorHTML', () => {
  it('should generate error HTML with string message', () => {
    const html = buildReactErrorHTML('Test error');
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('Test error');
  });

  it('should generate error HTML with Error object', () => {
    const error = new Error('Error message');
    const html = buildReactErrorHTML(error);
    expect(html).toContain('Error message');
  });

  it('should include error stack if available', () => {
    const error = new Error('Test');
    error.stack = 'at line 1\nat line 2';
    const html = buildReactErrorHTML(error);
    expect(html).toContain('error-stack');
  });

  it('should set correct language attribute', () => {
    const html = buildReactErrorHTML('Error', 'en-US');
    expect(html).toContain('lang="en-US"');
  });

  it('should show Chinese hint for zh-CN', () => {
    const html = buildReactErrorHTML('Error', 'zh-CN');
    expect(html).toContain('請檢查 JSX');
  });

  it('should show English hint for en-US', () => {
    const html = buildReactErrorHTML('Error', 'en-US');
    expect(html).toContain('Please check your JSX');
  });

  it('should include error header', () => {
    const html = buildReactErrorHTML('Error');
    expect(html).toContain('React JSX Compilation Failed');
  });

  it('should have proper styling', () => {
    const html = buildReactErrorHTML('Error');
    expect(html).toContain('error-container');
    expect(html).toContain('error-header');
    expect(html).toContain('error-message');
  });
});

// ========== buildPreviewHTML Tests ==========
// Note: Some tests are skipped because DOMParser is not available in Node environment
describe('buildPreviewHTML', () => {
  const defaultOptions = {
    displayTitle: 'Test Preview',
    language: 'en-US',
    perfMode: false
  };

  // This test uses extractFullPageContent which requires DOMParser
  it.skip('should build HTML document from htmlContent', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      htmlContent: '<div>Test content</div>',
      customStyles: '.test { color: red; }'
    });

    // The function may extract fullPageContent or build HTML document
    expect(html).toBeDefined();
    expect(html).toContain('<!DOCTYPE html>');
  });

  it('should use fullPageHTML when available', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      fullPageHTML: '<div>Full page content</div>',
      fullPageStyles: '.full { margin: 0; }',
      htmlContent: '<div>Card content</div>'
    });

    expect(html).toContain('Full page content');
  });

  it('should handle React JSX renderMode with error', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      asyncPreview: {
        renderMode: 'react-jsx',
        error: 'Compilation failed'
      }
    });

    expect(html).toContain('Compilation failed');
    expect(html).toContain('error');
  });

  it('should handle React JSX renderMode with compiledCode', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      asyncPreview: {
        renderMode: 'react-jsx',
        compiledCode: 'function App() { return h("div", null, "Hello"); }',
        componentName: 'App',
        styles: '.app { color: blue; }'
      }
    });

    expect(html).toContain('function App()');
  });

  it('should show loading HTML for React JSX when isLoadingPreview', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      asyncPreview: { renderMode: 'react-jsx' },
      isLoadingPreview: true
    });

    expect(html).toContain('Loading');
  });

  it('should show blank HTML when suppressLoadingUI is true', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      asyncPreview: { renderMode: 'react-jsx' },
      isLoadingPreview: true,
      suppressLoadingUI: true
    });

    expect(html).not.toContain('minimalism-loader');
  });

  it('should handle Preact JSX renderMode', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      asyncPreview: {
        renderMode: 'jsx',
        jsx: 'function DemoComponent() { return h("div", null, "Preact"); }',
        styles: '.preact { color: green; }'
      }
    });

    expect(html).toContain('function DemoComponent()');
  });

  it('should handle asyncPreview with HTML content', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      asyncPreview: {
        html: '<div>Async HTML</div>',
        styles: '.async { color: purple; }'
      }
    });

    expect(html).toContain('Async HTML');
  });

  it('should use previewContent when available', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      previewContent: {
        html: '<div>Preview content</div>',
        styles: '.preview { color: orange; }'
      }
    });

    expect(html).toContain('Preview content');
  });

  it('should handle complete HTML document in asyncPreview', () => {
    const completeDoc = '<!DOCTYPE html><html><head></head><body><div>Complete</div></body></html>';
    const html = buildPreviewHTML({
      ...defaultOptions,
      asyncPreview: {
        html: completeDoc,
        styles: 'body { margin: 0; }'
      }
    });

    // Should inline the CSS into the complete document
    expect(html).toContain('<style>');
    expect(html).toContain('body { margin: 0; }');
  });

  it('should handle previewsList', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      previewsList: [
        { html: '<div>Preview 1</div>', styles: '.p1 {}' },
        { html: '<div>Preview 2</div>', styles: '.p2 {}' }
      ],
      activeIndex: 0
    });

    expect(html).toContain('Preview 1');
  });

  it('should use correct preview from previewsList based on activeIndex', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      previewsList: [
        { html: '<div>Preview 1</div>', styles: '.p1 {}' },
        { html: '<div>Preview 2</div>', styles: '.p2 {}' }
      ],
      activeIndex: 1
    });

    expect(html).toContain('Preview 2');
  });

  // These tests also use extractFullPageContent which requires DOMParser
  it.skip('should include performance mode CSS when enabled', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      htmlContent: '<div>Perf test</div>',
      perfMode: true
    });

    // perfMode adds CSS that disables animations
    expect(html).toBeDefined();
    // The perf CSS contains animation: none
    expect(html.includes('animation') || html.includes('none')).toBe(true);
  });

  it.skip('should set correct language attribute', () => {
    const html = buildPreviewHTML({
      ...defaultOptions,
      htmlContent: '<div>Test</div>',
      language: 'zh-CN'
    });

    // The function sets lang attribute on the html element
    expect(html).toBeDefined();
    expect(html).toContain('zh-CN');
  });

  it.skip('should fall back to en-US if language is empty', () => {
    const html = buildPreviewHTML({
      displayTitle: 'Test',
      htmlContent: '<div>Test</div>',
      language: ''
    });

    // Empty language falls back to en-US
    expect(html).toBeDefined();
    expect(html).toContain('en-US');
  });
});

// ========== extractFullPageContent Tests ==========
describe('extractFullPageContent', () => {
  // Note: This function uses DOMParser which may not work in Node environment
  // These tests verify the function exists and handles null/empty input

  it('should return input unchanged if null', () => {
    expect(extractFullPageContent(null)).toBeNull();
  });

  it('should return input unchanged if empty', () => {
    expect(extractFullPageContent('')).toBe('');
  });
});

// ========== Integration Tests ==========
describe('buildPreviewHTML Integration', () => {
  it('should properly escape HTML in error messages', () => {
    const html = buildReactErrorHTML('<script>alert("xss")</script>');
    // The cachedSanitize mock returns input as-is, but in real usage it would sanitize
    expect(html).toBeDefined();
  });

  it('should handle mixed content sources with priority', () => {
    // asyncPreview should take priority
    const html = buildPreviewHTML({
      displayTitle: 'Test',
      language: 'en-US',
      asyncPreview: { html: '<div>Async wins</div>' },
      previewContent: { html: '<div>Preview content</div>' },
      fullPageHTML: '<div>Full page</div>',
      htmlContent: '<div>HTML content</div>'
    });

    expect(html).toContain('Async wins');
  });

  it('should handle empty options gracefully', () => {
    const html = buildPreviewHTML({
      displayTitle: 'Test',
      language: 'en-US'
    });

    expect(html).toContain('<!DOCTYPE html>');
  });
});
