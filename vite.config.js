import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|svg|webp)$/i,
      includePublic: true,
      svg: {
        multipass: true,
        datauri: 'enc',
      },
      webp: {
        quality: 75
      },
      jpeg: {
        quality: 75
      },
      png: {
        quality: 80
      },
      gif: {
        quality: 75
      }
    })
  ],
});
