<script setup lang="ts">
import { useRouter } from 'vitepress'

const props = defineProps<{
  to: string
}>()

const router = useRouter()

function navigateTo() {
  router.go(props.to)
}
</script>

<template>
  <a v-bind="$attrs" @click="navigateTo">
    <slot />
  </a>
</template>
