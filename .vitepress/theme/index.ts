// .vitepress/theme/index.js

// 可以直接在主题入口导入 Vue 文件
// VitePress 已预先配置 @vitejs/plugin-vue

import type { Theme } from 'vitepress'
import { Layout, registerEnhanceApp } from '@/layout'
import '@unocss/reset/tailwind.css'
import '@/styles/custom.css'
import '@/styles/main.css'
import '@/styles/prose.css'
import '@/styles/markdown.css'

import 'uno.css'

export default {
  Layout,
  enhanceApp: registerEnhanceApp,
} satisfies Theme
