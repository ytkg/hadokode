import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import mediaData from './src/data/media.json'

const dynamicRoutes = mediaData.map(media => `/media/${media.id}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://hadokode.ytkg.workers.dev',
      dynamicRoutes,
    }),
  ],
})
