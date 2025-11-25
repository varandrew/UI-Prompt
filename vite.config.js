import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  // 允許從外部網路訪問（綁定 0.0.0.0）
  server: {
    host: '0.0.0.0',
    port: 1000,
  },
  // 構建配置：確保每次內容變化都生成新的 hash
  build: {
    rollupOptions: {
      output: {
        // 基於內容生成 hash，確保快取失效
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
}))
