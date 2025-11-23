import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  // 允許從外部網路訪問（綁定 0.0.0.0）
  server: {
    host: '0.0.0.0',
    port: 1000,
  }
}))
