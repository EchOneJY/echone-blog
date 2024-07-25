import type { Theme } from 'vitepress'
import NProgress from 'nprogress'

import ListPosts from '@/components/ListPosts.vue'
import Link from '@/components/Link.vue'
import SubNav from '@/components/SubNav.vue'

export const registerEnhanceApp: Theme['enhanceApp'] = ({ app, router }) => {
  app.component('ListPosts', ListPosts)
  app.component('Link', Link)
  app.component('SubNav', SubNav)

  if (!import.meta.env.SSR) {
    router.onBeforeRouteChange = () => {
      NProgress.start()
    }

    router.onAfterRouteChanged = () => {
      NProgress.done()
    }
  }
}

export { default as Layout } from './index.vue'
