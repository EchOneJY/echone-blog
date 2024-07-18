<script setup lang="ts">
const ArtComponent = computed(() => {
  if (typeof window !== 'undefined') {
    return defineAsyncComponent(() => import('./ArtPlum.vue'))
  }
  return undefined
})
</script>

<template>
  <div>Custome Layout</div>
  <ClientOnly v-if="ArtComponent">
    <component :is="ArtComponent" />
  </ClientOnly>
  <main class="px-7 py-10 of-x-hidden">
    <Content class="vp-doc" />
  </main>
</template>
