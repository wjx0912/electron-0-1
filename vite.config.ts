import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron/simple'
import { join } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'src-electron/main.ts',
        vite: {
          build: {
            sourcemap: true,
            //minify: false,
            outDir: 'dist-electron',
          },
        },
      },
      // Optional: input must be use absolute path
      preload: {
        input: 'src-electron/preload.ts',
      }
    })
  ],
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})
