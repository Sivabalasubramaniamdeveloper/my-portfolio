import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  preview: {
    allowedHosts: [
      'my-portfolio-production-02c6.up.railway.app',
      '.up.railway.app',
      '.railway.app',
    ],
  },
  server: {
    allowedHosts: [
      'my-portfolio-production-02c6.up.railway.app',
      '.up.railway.app',
      '.railway.app',
    ],
  },
})
