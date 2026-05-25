import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        en: path.resolve(__dirname, 'en/index.html'),
        fr: path.resolve(__dirname, 'fr/index.html'),
      },
    },
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: [
      '1001nomad.navid.emberjet.net',
      'localhost',
      'navid.cloud'
    ],
  }
})
