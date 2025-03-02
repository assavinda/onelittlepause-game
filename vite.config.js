import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: ['vue'], // Auto-imports ref, computed, reactive, etc.
      dts: 'src/auto-imports.d.ts', // Optional: Generates TypeScript definitions
    }),
    Components({
      dirs: ['src/components'], // Scans the components folder
      extensions: ['vue'],
      deep: true, // Enables auto-import for subfolders
      dts: 'src/components.d.ts', // (Optional) TypeScript support
    }),
  ],
  base: '/onelittlepause-game/'
})
