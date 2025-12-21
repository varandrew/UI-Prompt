/**
 * Content Validator
 * Validates HTML/CSS/JS/JSX content for security and size limits
 * @module utils/contentValidator
 */

import DOMPurify from 'dompurify';

// ============================================
// Configuration
// ============================================

/**
 * Size limits for different content types (in bytes)
 */
export const SIZE_LIMITS = {
  html: 500 * 1024,  // 500KB
  css: 200 * 1024,   // 200KB
  js: 300 * 1024,    // 300KB
  jsx: 500 * 1024,   // 500KB
  total: 1024 * 1024, // 1MB total
};

/**
 * Dangerous patterns to detect in JS/JSX code
 * These patterns may indicate malicious code
 */
const DANGEROUS_JS_PATTERNS = [
  // Code execution
  { pattern: /\beval\s*\(/gi, name: 'eval()' },
  { pattern: /\bnew\s+Function\s*\(/gi, name: 'new Function()' },
  { pattern: /\bsetTimeout\s*\(\s*["'`]/gi, name: 'setTimeout with string' },
  { pattern: /\bsetInterval\s*\(\s*["'`]/gi, name: 'setInterval with string' },

  // Cookie/storage access
  { pattern: /\bdocument\.cookie\b/gi, name: 'document.cookie' },
  { pattern: /\blocalStorage\b/gi, name: 'localStorage' },
  { pattern: /\bsessionStorage\b/gi, name: 'sessionStorage' },
  { pattern: /\bindexedDB\b/gi, name: 'indexedDB' },

  // DOM manipulation (potentially dangerous)
  { pattern: /\bdocument\.domain\b/gi, name: 'document.domain' },
  { pattern: /\.innerHTML\s*=/gi, name: 'innerHTML assignment' },
  { pattern: /\.outerHTML\s*=/gi, name: 'outerHTML assignment' },
  { pattern: /\bdocument\.write\s*\(/gi, name: 'document.write()' },
  { pattern: /\bdocument\.writeln\s*\(/gi, name: 'document.writeln()' },

  // Navigation/redirect
  { pattern: /\bwindow\.location\s*=/gi, name: 'window.location assignment' },
  { pattern: /\blocation\.href\s*=/gi, name: 'location.href assignment' },
  { pattern: /\blocation\.replace\s*\(/gi, name: 'location.replace()' },
  { pattern: /\bwindow\.open\s*\(/gi, name: 'window.open()' },

  // Sensitive APIs
  { pattern: /\bfetch\s*\(/gi, name: 'fetch()' },
  { pattern: /\bXMLHttpRequest\b/gi, name: 'XMLHttpRequest' },
  { pattern: /\bWebSocket\b/gi, name: 'WebSocket' },
  { pattern: /\bnavigator\.sendBeacon\b/gi, name: 'navigator.sendBeacon' },

  // Script injection
  { pattern: /javascript:/gi, name: 'javascript: protocol' },
  { pattern: /data:text\/html/gi, name: 'data:text/html' },
  { pattern: /\bon\w+\s*=/gi, name: 'inline event handlers' },

  // Import/require (should be handled by Sucrase, but double-check)
  { pattern: /\bimport\s*\(/gi, name: 'dynamic import()' },
  { pattern: /\brequire\s*\(/gi, name: 'require()' },
];

/**
 * Dangerous patterns in HTML
 */
const DANGEROUS_HTML_PATTERNS = [
  { pattern: /<script[\s>]/gi, name: '<script> tag' },
  { pattern: /<iframe[\s>]/gi, name: '<iframe> tag' },
  { pattern: /<object[\s>]/gi, name: '<object> tag' },
  { pattern: /<embed[\s>]/gi, name: '<embed> tag' },
  { pattern: /<frame[\s>]/gi, name: '<frame> tag' },
  { pattern: /<frameset[\s>]/gi, name: '<frameset> tag' },
  { pattern: /<form[^>]*action\s*=\s*["']?https?:/gi, name: 'form with external action' },
  { pattern: /javascript:/gi, name: 'javascript: protocol' },
  { pattern: /data:text\/html/gi, name: 'data:text/html' },
  { pattern: /\bon\w+\s*=/gi, name: 'inline event handlers' },
];

/**
 * Dangerous patterns in CSS
 */
const DANGEROUS_CSS_PATTERNS = [
  { pattern: /@import\s+url\s*\(\s*["']?https?:/gi, name: '@import with external URL' },
  { pattern: /url\s*\(\s*["']?javascript:/gi, name: 'javascript: in url()' },
  { pattern: /url\s*\(\s*["']?data:text\/html/gi, name: 'data:text/html in url()' },
  { pattern: /expression\s*\(/gi, name: 'CSS expression()' },
  { pattern: /-moz-binding/gi, name: '-moz-binding' },
  { pattern: /behavior\s*:/gi, name: 'behavior property' },
];

// ============================================
// Validation Types
// ============================================

/**
 * @typedef {Object} ValidationError
 * @property {'size' | 'security' | 'syntax' | 'sanitized'} type - Error type
 * @property {string} message - Human-readable error message
 * @property {string} [pattern] - Pattern that matched (for security errors)
 * @property {number} [line] - Line number (for syntax errors)
 */

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid - Whether the content is valid
 * @property {ValidationError[]} errors - List of validation errors
 * @property {ValidationError[]} warnings - List of warnings (non-blocking)
 * @property {string} [sanitizedContent] - Sanitized content (for HTML)
 */

// ============================================
// Validation Functions
// ============================================

/**
 * Validate content size
 * @param {string} content - Content to validate
 * @param {'html' | 'css' | 'js' | 'jsx'} type - Content type
 * @returns {ValidationError | null} Error if size exceeds limit
 */
function validateSize(content, type) {
  const size = new Blob([content]).size;
  const limit = SIZE_LIMITS[type];

  if (size > limit) {
    const sizeMB = (size / 1024).toFixed(1);
    const limitMB = (limit / 1024).toFixed(0);
    return {
      type: 'size',
      message: `${type.toUpperCase()} content (${sizeMB}KB) exceeds ${limitMB}KB limit`,
    };
  }

  return null;
}

/**
 * Check for dangerous patterns in content
 * @param {string} content - Content to check
 * @param {Array<{pattern: RegExp, name: string}>} patterns - Patterns to check
 * @param {'error' | 'warning'} severity - How to treat matches
 * @returns {ValidationError[]} List of errors/warnings
 */
function checkPatterns(content, patterns, severity = 'warning') {
  const issues = [];

  for (const { pattern, name } of patterns) {
    // Reset lastIndex for global patterns
    pattern.lastIndex = 0;

    if (pattern.test(content)) {
      issues.push({
        type: 'security',
        message: `Detected potentially unsafe pattern: ${name}`,
        pattern: pattern.toString(),
        severity,
      });
    }
  }

  return issues;
}

/**
 * Validate HTML content
 * @param {string} content - HTML content
 * @returns {ValidationResult}
 */
export function validateHTML(content) {
  const errors = [];
  const warnings = [];

  // Check size
  const sizeError = validateSize(content, 'html');
  if (sizeError) {
    errors.push(sizeError);
  }

  // Check dangerous patterns
  const patternIssues = checkPatterns(content, DANGEROUS_HTML_PATTERNS, 'warning');
  warnings.push(...patternIssues);

  // Sanitize with DOMPurify
  const sanitized = DOMPurify.sanitize(content, {
    WHOLE_DOCUMENT: true,
    RETURN_DOM: false,
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'frame', 'frameset'],
    FORBID_ATTR: ['onerror', 'onclick', 'onload', 'onmouseover', 'onfocus', 'onblur'],
    ALLOW_DATA_ATTR: true,
    ADD_TAGS: ['style', 'link'],
    ADD_ATTR: ['target', 'rel'],
  });

  // Check if content was modified by sanitization
  if (sanitized.trim() !== content.trim()) {
    warnings.push({
      type: 'sanitized',
      message: 'Some HTML content was sanitized for security',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    sanitizedContent: sanitized,
  };
}

/**
 * Validate CSS content
 * @param {string} content - CSS content
 * @returns {ValidationResult}
 */
export function validateCSS(content) {
  const errors = [];
  const warnings = [];

  // Check size
  const sizeError = validateSize(content, 'css');
  if (sizeError) {
    errors.push(sizeError);
  }

  // Check dangerous patterns
  const patternIssues = checkPatterns(content, DANGEROUS_CSS_PATTERNS, 'warning');
  warnings.push(...patternIssues);

  // Basic CSS syntax check (very simple)
  const braceCount = (content.match(/{/g) || []).length - (content.match(/}/g) || []).length;
  if (braceCount !== 0) {
    warnings.push({
      type: 'syntax',
      message: 'CSS may have unbalanced braces',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate JavaScript content
 * @param {string} content - JS content
 * @param {Object} options - Validation options
 * @param {boolean} options.allowFetch - Allow fetch() calls
 * @param {boolean} options.strict - Use strict mode (treat warnings as errors)
 * @returns {ValidationResult}
 */
export function validateJS(content, options = {}) {
  const { allowFetch = false, strict = false } = options;
  const errors = [];
  const warnings = [];

  // Check size
  const sizeError = validateSize(content, 'js');
  if (sizeError) {
    errors.push(sizeError);
  }

  // Filter patterns based on options
  let patterns = DANGEROUS_JS_PATTERNS;
  if (allowFetch) {
    patterns = patterns.filter(p => p.name !== 'fetch()');
  }

  // Check dangerous patterns
  const patternIssues = checkPatterns(content, patterns, strict ? 'error' : 'warning');

  if (strict) {
    errors.push(...patternIssues);
  } else {
    warnings.push(...patternIssues);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate JSX content
 * @param {string} content - JSX content
 * @param {Object} options - Validation options
 * @param {boolean} options.strict - Use strict mode
 * @returns {ValidationResult}
 */
export function validateJSX(content, options = {}) {
  const { strict = false } = options;
  const errors = [];
  const warnings = [];

  // Check size
  const sizeError = validateSize(content, 'jsx');
  if (sizeError) {
    errors.push(sizeError);
  }

  // Check dangerous patterns (same as JS)
  const patternIssues = checkPatterns(content, DANGEROUS_JS_PATTERNS, strict ? 'error' : 'warning');

  if (strict) {
    errors.push(...patternIssues);
  } else {
    warnings.push(...patternIssues);
  }

  // JSX-specific checks
  // Check for dangerouslySetInnerHTML
  if (/dangerouslySetInnerHTML/g.test(content)) {
    warnings.push({
      type: 'security',
      message: 'dangerouslySetInnerHTML detected - ensure content is sanitized',
      pattern: 'dangerouslySetInnerHTML',
    });
  }

  // Basic JSX syntax check
  const hasJSXElement = /<[A-Z][a-zA-Z0-9]*[\s/>]/.test(content) || /<[a-z]+[\s/>]/.test(content);
  if (!hasJSXElement) {
    warnings.push({
      type: 'syntax',
      message: 'No JSX elements detected - is this valid JSX?',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate all content types
 * @param {Object} content - Content object
 * @param {string} [content.html] - HTML content
 * @param {string} [content.css] - CSS content
 * @param {string} [content.js] - JS content
 * @param {string} [content.jsx] - JSX content
 * @param {Object} options - Validation options
 * @returns {Object} Validation results for each type
 */
export function validateAllContent(content, options = {}) {
  const results = {
    html: null,
    css: null,
    js: null,
    jsx: null,
    isValid: true,
    totalErrors: [],
    totalWarnings: [],
  };

  // Validate each content type
  if (content.html) {
    results.html = validateHTML(content.html);
    results.totalErrors.push(...results.html.errors);
    results.totalWarnings.push(...results.html.warnings);
    if (!results.html.isValid) results.isValid = false;
  }

  if (content.css) {
    results.css = validateCSS(content.css);
    results.totalErrors.push(...results.css.errors);
    results.totalWarnings.push(...results.css.warnings);
    if (!results.css.isValid) results.isValid = false;
  }

  if (content.js) {
    results.js = validateJS(content.js, options);
    results.totalErrors.push(...results.js.errors);
    results.totalWarnings.push(...results.js.warnings);
    if (!results.js.isValid) results.isValid = false;
  }

  if (content.jsx) {
    results.jsx = validateJSX(content.jsx, options);
    results.totalErrors.push(...results.jsx.errors);
    results.totalWarnings.push(...results.jsx.warnings);
    if (!results.jsx.isValid) results.isValid = false;
  }

  // Check total size
  const totalSize = [
    content.html || '',
    content.css || '',
    content.js || '',
    content.jsx || '',
  ].reduce((sum, c) => sum + new Blob([c]).size, 0);

  if (totalSize > SIZE_LIMITS.total) {
    results.isValid = false;
    results.totalErrors.push({
      type: 'size',
      message: `Total content size (${(totalSize / 1024).toFixed(1)}KB) exceeds ${(SIZE_LIMITS.total / 1024).toFixed(0)}KB limit`,
    });
  }

  return results;
}

/**
 * Sanitize HTML content (wrapper around DOMPurify)
 * @param {string} html - HTML content
 * @returns {string} Sanitized HTML
 */
export function sanitizeHTML(html) {
  return DOMPurify.sanitize(html, {
    WHOLE_DOCUMENT: true,
    RETURN_DOM: false,
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'frame', 'frameset'],
    FORBID_ATTR: ['onerror', 'onclick', 'onload', 'onmouseover', 'onfocus', 'onblur'],
    ALLOW_DATA_ATTR: true,
    ADD_TAGS: ['style', 'link'],
    ADD_ATTR: ['target', 'rel'],
  });
}

/**
 * Sanitize CSS content
 * @param {string} css - CSS content
 * @returns {string} Sanitized CSS
 */
export function sanitizeCSS(css) {
  return css
    // Remove @import with external URLs
    .replace(/@import\s+url\s*\(\s*["']?https?:[^)]*\)/gi, '/* @import removed */')
    // Remove javascript: in url()
    .replace(/url\s*\(\s*["']?javascript:[^)]*\)/gi, 'url()')
    // Remove data:text/html
    .replace(/url\s*\(\s*["']?data:text\/html[^)]*\)/gi, 'url()')
    // Remove expression()
    .replace(/expression\s*\([^)]*\)/gi, '')
    // Remove -moz-binding
    .replace(/-moz-binding\s*:[^;]*/gi, '')
    // Remove behavior
    .replace(/behavior\s*:[^;]*/gi, '');
}

export default {
  validateHTML,
  validateCSS,
  validateJS,
  validateJSX,
  validateAllContent,
  sanitizeHTML,
  sanitizeCSS,
  SIZE_LIMITS,
};
