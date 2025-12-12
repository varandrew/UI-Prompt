import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'public/data/content', 'templates', 'scripts']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
    rules: {
      // === 變量規則 ===
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // === Console 規則 ===
      // 警告 console 使用，允許 warn 和 error 用於調試
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // === Import 規則 ===
      // 禁止循環依賴
      'import/no-cycle': ['error', { maxDepth: 3 }],
      // 確保導入的模組存在
      'import/no-unresolved': 'off', // 關閉，因為可能有別名配置
      // 禁止重複導入
      'import/no-duplicates': 'warn',

      // === React 規則 ===
      // PropTypes 檢查（警告級別，因為項目已有大量組件）
      'react/prop-types': 'off', // 暫時關閉，因為沒有安裝 eslint-plugin-react
    },
  },
  // === 特定文件覆蓋規則 ===
  {
    // 數據文件和配置文件允許使用 console
    files: ['**/data/**/*.js', '**/config/**/*.js', 'vite.config.js'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    // Store 文件允許開發環境 console（DevTools）
    files: ['**/stores/**/*.js'],
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
    },
  },
])
