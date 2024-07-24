import { resolve } from 'node:path'
import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import TOC from 'markdown-it-table-of-contents'
import UnoCSS from 'unocss/vite'

const pathResolve = (pathname: string) => resolve(process.cwd(), '.', pathname)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Echone\'s Blog',
  description: 'Keep Coding And Learning',
  srcDir: './docs',
  cleanUrls: true,
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => {
      md.use(TOC, {
        includeLevel: [1, 2, 3, 4],
        containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>',
      })
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': pathResolve('src'),
        '$': pathResolve('docs'),
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
      UnoCSS(),

      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
        dts: '../auto-imports.d.ts',
      }),

      Components({
        dirs: ['../src/layout', '../src/components'],
        extensions: ['vue'],
        deep: true,
        dts: '../components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/],
      }),
    ],
  },
})
