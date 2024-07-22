import { resolve } from 'node:path'
import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

const pathResolve = (pathname: string) => resolve(process.cwd(), '.', pathname)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Echone\'s Blog',
  description: 'Keep Coding And Learning',
  srcDir: './src/docs',
  cleanUrls: true,
  vite: {
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
      UnoCSS(),

      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
        dts: '../../auto-imports.d.ts',
      }),

      Components({
        dirs: ['../theme'],
        extensions: ['vue'],
        deep: true,
        dts: '../../components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/],
      }),
    ],
  },
})
