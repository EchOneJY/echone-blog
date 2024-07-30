<script setup lang="ts">
import { useData } from 'vitepress'
import { formatDate } from '@/logics'

const { frontmatter } = useData()
const ArtComponent = computed(() => {
  if (typeof window !== 'undefined') {
    return defineAsyncComponent(() => import('./ArtPlum.vue'))
  }
  return undefined
})
</script>

<template>
  <ClientOnly v-if="frontmatter.layout === 'page' && ArtComponent">
    <component :is="ArtComponent" />
  </ClientOnly>
  <div
    v-if="frontmatter.layout !== 'page' || frontmatter.title"
    class="prose m-auto mb-8"
    :class="[frontmatter.wrapperClass]"
  >
    <h1 class="mb-0 slide-enter-50">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p
      v-if="frontmatter.date"
      class="opacity-50 !-mt-6 slide-enter-50"
    >
      {{ formatDate(frontmatter.date, false) }} <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
    </p>
    <p v-if="frontmatter.place" class="mt--4!">
      <span op50>at </span>
      <a v-if="frontmatter.placeLink" :href="frontmatter.placeLink" target="_blank">
        {{ frontmatter.place }}
      </a>
      <span v-else font-bold>
        {{ frontmatter.place }}
      </span>
    </p>
    <p
      v-if="frontmatter.subtitle"
      class="opacity-50 !-mt-6 italic slide-enter"
    >
      {{ frontmatter.subtitle }}
    </p>
    <p
      v-if="frontmatter.draft"
      class="slide-enter" bg-orange-4:10 text-orange-4 border="l-3 orange-4" px4 py2
    >
      This is a draft post, the content may be incomplete. Please check back later.
    </p>
  </div>
  <main class="prose m-auto slide-enter-content">
    <Content />
  </main>
</template>
