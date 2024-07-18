import { defineConfig } from 'vitepress'
import { resolve } from 'node:path';

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
  }
})
