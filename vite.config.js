import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Minification optimisée avec esbuild (plus rapide que terser)
    minify: 'esbuild',
    // Code splitting optimisé
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Séparer les dépendances volumineuses
          if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router')) {
            return 'vendor-vue'
          }
          if (id.includes('node_modules/vanilla-tilt')) {
            return 'vendor-tilt'
          }
        },
      },
    },
    // Optimisation du bundle
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false, // Désactiver les sourcemaps en production pour réduire la taille
    // Optimisations supplémentaires
    reportCompressedSize: false, // Désactiver le calcul de la taille compressée pour un build plus rapide
    cssMinify: true,
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: ['vue', 'vue-router', 'vanilla-tilt'],
  },
  // Préchargement des modules
  server: {
    warmup: {
      clientFiles: ['./src/main.js', './src/App.vue', './src/views/HomeView.vue'],
    },
  },
})
