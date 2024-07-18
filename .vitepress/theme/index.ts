// .vitepress/theme/index.js

// 可以直接在主题入口导入 Vue 文件
// VitePress 已预先配置 @vitejs/plugin-vue

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Layout } from '@/theme'
// import 'vitepress/dist/client/theme-default/styles/base.scss';

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme