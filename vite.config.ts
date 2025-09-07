/// <reference path="./types-node.d.ts" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import fs from 'node:fs'

// JSONLを読み込み、サイトマップ用の動的ルートを生成
const mediaRaw = fs.readFileSync('./src/data/media.jsonl', 'utf8')
const mediaData = mediaRaw
  .trim()
  .split('\n')
  .filter(Boolean)
  .map((line: string) => JSON.parse(line)) as Array<{ id: number }>

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
