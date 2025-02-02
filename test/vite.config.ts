import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { nodePolyfills } from '../src/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    vue(),
    nodePolyfills({
      // include: ['fs', 'path', 'buffer'],
      exclude: ['fs'],
      globals: {
        process: 'build',
      },
      protocolImports: true,
    }),
  ],
  root: resolve(__dirname),
})
