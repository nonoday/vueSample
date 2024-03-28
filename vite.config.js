import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@images",
        replacement: path.resolve(__dirname, "src/assets/images"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/function.scss";
          @import "./src/assets/scss/mixins.scss";
          @import "./src/assets/scss/variables.scss";
        `
      }
    }
  }
})