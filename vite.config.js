import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // 按需引入语言包
    [
      'prismjs',
      {
        languages: ['json'],
      },
    ],]
})
