// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/'
  // scss: {
  //   preprocessorOptions: {
  //     // 导入scss预编译程序
  //     scss: {
  //       additionalData: "@import './src/assets/helper/_functions.scss'"
  //     }
  //   }
  // }

  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
})
