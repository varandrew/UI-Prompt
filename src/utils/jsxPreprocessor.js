/**
 * JSX Preprocessor - Sanitizes and validates JSX code for iframe injection
 * Handles escape sequences, validates syntax, and provides error reporting
 *
 * This utility is essential for the JSX template rendering pipeline.
 * JSX templates use Preact's h() function and are injected into iframes
 * via template literals. Certain escape sequences can cause syntax errors
 * when the code is injected, so this preprocessor fixes them.
 *
 * @author UI Style Architecture
 */

/**
 * Preprocess JSX code for safe injection into template literal
 * @param {string} jsxCode - Raw JSX code from file
 * @param {object} options
 * @param {boolean} [options.escapeTemplateLiterals=false] - 是否需要轉義模板字元（預設關閉，避免破壞原始模板字串）
 * @returns {{ code: string, errors: string[], warnings: string[] }} Processed code and any issues
 */
export function preprocessJSX(jsxCode, options = {}) {
  const { escapeTemplateLiterals = false } = options;

  if (!jsxCode || typeof jsxCode !== 'string') {
    return {
      code: '',
      errors: ['Invalid input: JSX code must be a non-empty string'],
      warnings: []
    };
  }

  const errors = [];
  const warnings = [];
  let processedCode = jsxCode;

  // 1. Fix double-escaped quotes in data URLs and other contexts
  processedCode = fixEscapedQuotes(processedCode, warnings);

  // 2. Normalize line endings to Unix style
  processedCode = normalizeLineEndings(processedCode);

  // 3. 選擇性轉義模板字元：預設不轉義，避免破壞模板字串語法
  if (escapeTemplateLiterals) {
    processedCode = fixTemplateLiteralConflicts(processedCode, warnings);
  }

  // 4. Validate basic syntax
  const syntaxErrors = validateJSXSyntax(processedCode);
  if (syntaxErrors.length > 0) {
    errors.push(...syntaxErrors);
  }

  return { code: processedCode, errors, warnings };
}

/**
 * Fix double-escaped quotes that break template literal injection
 * Common patterns:
 * - "url(\\"data:..." -> "url('data:..."
 * - style=\\"...\\" -> style="..."
 *
 * @param {string} code - JSX code
 * @param {string[]} warnings - Array to collect warnings
 * @returns {string} Fixed code
 */
function fixEscapedQuotes(code, warnings) {
  let result = code;
  let fixCount = 0;

  // Pattern 1: Fix double-escaped quotes in url() contexts
  // "url(\\"data:..." -> "url('data:..."
  const urlPattern = /url\(\\"/g;
  if (urlPattern.test(result)) {
    fixCount++;
    result = result.replace(/url\(\\"/g, "url('");
  }

  // Pattern 2: Fix closing double-escaped quotes in url() contexts
  // ...\\") -> ...')
  const urlClosePattern = /\\"\)/g;
  if (urlClosePattern.test(result)) {
    result = result.replace(/\\"\)/g, "')");
  }

  // Pattern 3: Fix standalone double-escaped quotes
  // \\" -> \"
  // Be careful not to break legitimate escape sequences
  const standalonePattern = /([^\\])\\\\"/g;
  if (standalonePattern.test(result)) {
    fixCount++;
    result = result.replace(/([^\\])\\\\"/g, '$1\\"');
  }

  if (fixCount > 0) {
    warnings.push(`Fixed ${fixCount} escaped quote pattern(s) for template literal compatibility`);
  }

  return result;
}

/**
 * Normalize line endings to Unix style (\n)
 * @param {string} code - JSX code
 * @returns {string} Normalized code
 */
function normalizeLineEndings(code) {
  return code
    .replace(/\r\n/g, '\n')  // Windows -> Unix
    .replace(/\r/g, '\n');    // Old Mac -> Unix
}

/**
 * Fix template literal conflicts
 * When JSX code contains backticks and ${} expressions, they need to be escaped
 * since the code will be injected into an outer template literal.
 *
 * This is critical: if we inject JSX code containing ` or ${} into a template literal,
 * the JavaScript parser will interpret them as part of the outer template literal,
 * causing syntax errors.
 *
 * @param {string} code - JSX code
 * @param {string[]} warnings - Array to collect warnings
 * @returns {string} Fixed code
 */
function fixTemplateLiteralConflicts(code, warnings) {
  let result = code;
  let backtickCount = 0;
  let expressionCount = 0;

  // Step 1: Escape ${} expressions FIRST (before backticks)
  // Change ${ to \${ so the outer template literal doesn't interpret them
  // Use a regex that matches ${ but not already escaped \${
  result = result.replace(/(?<!\\)\$\{/g, () => {
    expressionCount++;
    return '\\${';
  });

  // Step 2: Escape backticks
  // Change ` to \` so the outer template literal doesn't interpret them
  // Use a regex that matches ` but not already escaped \`
  result = result.replace(/(?<!\\)`/g, () => {
    backtickCount++;
    return '\\`';
  });

  if (backtickCount > 0 || expressionCount > 0) {
    warnings.push(`Escaped ${backtickCount} backtick(s) and ${expressionCount} template expression(s) for safe injection`);
  }

  return result;
}

/**
 * Validate basic JSX syntax
 * @param {string} code - JSX code
 * @returns {string[]} Array of error messages
 */
function validateJSXSyntax(code) {
  const errors = [];

  // 1. Check for DemoComponent definition
  const hasDemoComponent =
    code.includes('function DemoComponent') ||
    code.includes('const DemoComponent') ||
    code.includes('class DemoComponent');

  if (!hasDemoComponent) {
    errors.push('Missing DemoComponent definition - JSX templates must export a DemoComponent');
  }

  // 2. Check for balanced braces
  const openBraces = (code.match(/{/g) || []).length;
  const closeBraces = (code.match(/}/g) || []).length;
  if (openBraces !== closeBraces) {
    errors.push(`Unbalanced braces: found ${openBraces} opening and ${closeBraces} closing braces`);
  }

  // 3. Check for balanced parentheses
  const openParens = (code.match(/\(/g) || []).length;
  const closeParens = (code.match(/\)/g) || []).length;
  if (openParens !== closeParens) {
    errors.push(`Unbalanced parentheses: found ${openParens} opening and ${closeParens} closing`);
  }

  // 4. Check for balanced brackets
  const openBrackets = (code.match(/\[/g) || []).length;
  const closeBrackets = (code.match(/\]/g) || []).length;
  if (openBrackets !== closeBrackets) {
    errors.push(`Unbalanced brackets: found ${openBrackets} opening and ${closeBrackets} closing`);
  }

  // 5. Check for Preact h() usage (expected in our JSX templates)
  if (!code.includes('h(')) {
    errors.push('No h() calls found - JSX templates should use Preact\'s h() function');
  }

  return errors;
}

/**
 * Quick check if code looks like valid JSX for Preact
 * @param {string} code - Code to check
 * @returns {boolean} True if code appears to be valid JSX
 */
export function isValidPreactJSX(code) {
  if (!code || typeof code !== 'string') return false;

  const { errors } = preprocessJSX(code);
  return errors.length === 0;
}

/**
 * Get preprocessing statistics for debugging
 * @param {string} code - JSX code
 * @returns {object} Statistics about the code
 */
export function getJSXStats(code) {
  if (!code) return null;

  return {
    length: code.length,
    lines: code.split('\n').length,
    hasComponent: /function DemoComponent|const DemoComponent|class DemoComponent/.test(code),
    hCalls: (code.match(/h\(/g) || []).length,
    useStateHooks: (code.match(/useState\(/g) || []).length,
    useEffectHooks: (code.match(/useEffect\(/g) || []).length,
    hasDataUrls: /data:image|data:application/.test(code),
    hasTemplateLiterals: /`/.test(code)
  };
}

// ============================================
// React JSX Support - Dual Mode Detection
// ============================================

/**
 * Detect JSX mode: 'react', 'preact-h', or null (not JSX)
 * @param {string} code - Code to analyze
 * @returns {'react' | 'preact-h' | null} Detected mode
 */
export function detectJSXMode(code) {
  if (!code || typeof code !== 'string') return null;

  // Check Preact h() patterns first (existing format - higher priority)
  const hasHCalls = /\bh\s*\(/.test(code);
  const hasDemoComponent = /function\s+DemoComponent/.test(code);
  const hasWindowPreact = /window\.preact/.test(code);

  if ((hasHCalls && hasDemoComponent) || hasWindowPreact) {
    return 'preact-h';
  }

  // Check React JSX patterns
  const hasJSXTags = /<[A-Z][a-zA-Z]*[\s/>]/.test(code);
  const hasReactImport = /import\s+.*from\s+['"]react['"]/.test(code);
  const hasExportDefault = /export\s+default\s+function\s+\w+/.test(code);
  const hasReactAPI = /React\.(useState|useEffect|createElement|memo|forwardRef)/.test(code);

  if (hasJSXTags || hasReactImport || hasExportDefault || hasReactAPI) {
    return 'react';
  }

  return null;
}

/**
 * Validate JSX code based on detected or specified mode
 * @param {string} code - JSX code to validate
 * @param {'react' | 'preact-h' | null} mode - Optional mode override
 * @returns {{ valid: boolean, errors: string[], mode: string | null }}
 */
export function validateJSX(code, mode = null) {
  const detectedMode = mode || detectJSXMode(code);

  if (detectedMode === 'preact-h') {
    // Use existing Preact validation
    const { errors } = preprocessJSX(code);
    return { valid: errors.length === 0, errors, mode: 'preact-h' };
  }

  if (detectedMode === 'react') {
    return validateReactJSX(code);
  }

  return { valid: false, errors: ['Unknown JSX mode - code does not match React or Preact patterns'], mode: null };
}

/**
 * Validate React JSX syntax (more flexible than Preact validation)
 * @param {string} code - React JSX code
 * @returns {{ valid: boolean, errors: string[], mode: 'react' }}
 */
function validateReactJSX(code) {
  const errors = [];

  // Check for any component function (more flexible than requiring DemoComponent)
  const hasExportDefault = /export\s+default\s+function\s+\w+/.test(code);
  const hasNamedFunction = /function\s+[A-Z][a-zA-Z]*\s*\(/.test(code);
  const hasArrowComponent = /const\s+[A-Z][a-zA-Z]*\s*=\s*\([^)]*\)\s*=>/.test(code);

  if (!hasExportDefault && !hasNamedFunction && !hasArrowComponent) {
    errors.push('No component found - React JSX must have a function component (e.g., export default function MyComponent())');
  }

  // Check for balanced braces
  const openBraces = (code.match(/{/g) || []).length;
  const closeBraces = (code.match(/}/g) || []).length;
  if (openBraces !== closeBraces) {
    errors.push(`Unbalanced braces: found ${openBraces} opening and ${closeBraces} closing braces`);
  }

  // Check for balanced parentheses
  const openParens = (code.match(/\(/g) || []).length;
  const closeParens = (code.match(/\)/g) || []).length;
  if (openParens !== closeParens) {
    errors.push(`Unbalanced parentheses: found ${openParens} opening and ${closeParens} closing`);
  }

  // Check for balanced brackets
  const openBrackets = (code.match(/\[/g) || []).length;
  const closeBrackets = (code.match(/\]/g) || []).length;
  if (openBrackets !== closeBrackets) {
    errors.push(`Unbalanced brackets: found ${openBrackets} opening and ${closeBrackets} closing`);
  }

  // Check for JSX syntax (should have JSX tags)
  const hasJSXReturn = /return\s*\(\s*</.test(code) || /return\s*</.test(code) || /=>\s*\(\s*</.test(code) || /=>\s*</.test(code);
  if (!hasJSXReturn) {
    errors.push('No JSX return found - React component should return JSX elements');
  }

  return { valid: errors.length === 0, errors, mode: 'react' };
}

/**
 * Check if code is valid React JSX (quick check)
 * @param {string} code - Code to check
 * @returns {boolean} True if code appears to be valid React JSX
 */
export function isValidReactJSX(code) {
  if (!code || typeof code !== 'string') return false;
  const { valid } = validateReactJSX(code);
  return valid;
}

export default {
  preprocessJSX,
  isValidPreactJSX,
  isValidReactJSX,
  detectJSXMode,
  validateJSX,
  getJSXStats
};
