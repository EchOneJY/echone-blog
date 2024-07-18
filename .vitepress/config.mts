import { defineConfig } from 'vitepress'
import { resolve } from 'node:path';
import AutoImport from 'unplugin-auto-import/vite'
// import Vue from '@vitejs/plugin-vue'

const pathResolve = (pathname: string) => resolve(process.cwd(), '.', pathname);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Echone's Blog",
  description: "Keep Coding And Learning",
  srcDir: './src/docs',
  cleanUrls: true,
  ignoreDeadLinks: true, // 忽
  themeConfig: {},
  vite:{
    resolve: {
      alias: {
        '@': pathResolve('src'),
      },
    },
    optimizeDeps: {
      include: [
        'vue',
        '@vueuse/core',
        'dayjs',
        'dayjs/plugin/localizedFormat',
      ],
    },
    plugins: [
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
      }),
    ]
  }
})
