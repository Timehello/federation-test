import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'app1-expose',
      filename: 'remoteEntry.js',
      exposes: {
        './cA': './src/components/c-a/c-a.vue'
      },
      shared: {
        vue: '*'
      }
    })
  ],
  build: {
    polyfillModulePreload: false,
    assetsInlineLimit: 40960,
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      // external: ["vue"],
      output: {
        minifyInternalExports: false
      }
    }
  }
})
