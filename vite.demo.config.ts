import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: 'demo',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

