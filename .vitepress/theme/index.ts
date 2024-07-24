// .vitepress/theme/index.js

// 可以直接在主题入口导入 Vue 文件
// VitePress 已预先配置 @vitejs/plugin-vue

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import NProgress from 'nprogress'
import { Layout } from '@/layout'
import '@unocss/reset/tailwind.css'
import '@/styles/custom.css'
import '@/styles/prose.css'
import '@/styles/markdown.css'

import ListPosts from '@/components/ListPosts.vue'

import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('ListPosts', ListPosts)

    if (!import.meta.env.SSR) {
      router.onBeforeRouteChange = () => {
        NProgress.start()
      }

      router.onAfterRouteChanged = () => {
        NProgress.done()
      }
    }
  },
} satisfies Theme
