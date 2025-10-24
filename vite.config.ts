import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Final fixed Vite config for Vercel deployment
export default defineConfig(() => ({
  plugins: [react()],
  server: {
    host: '::',
    port: 8080,
  },
  resolve: {
    alias: {
      '@': '/src', // allows "@/components" imports
    },
  },
  build: {
    chunkSizeWarningLimit: 800, // silences the large bundle warning
  },
}))