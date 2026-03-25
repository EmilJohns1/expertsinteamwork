import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  envDir: '../',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        quiz: resolve(__dirname, 'src/pages/quiz.html'),
        result: resolve(__dirname, 'src/pages/results.html')
      }
    }
  }
})