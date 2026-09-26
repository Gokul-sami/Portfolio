import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` emits relative asset URLs so the built site works from any path
// (GitHub Pages project site, a sub-folder or a CDN) without further config.
export default defineConfig({
  base: './',
  plugins: [react()],
})
