<script setup lang="ts">
import { useRoute } from 'vitepress'

const inactiveStyle = 'opacity-20 hover:opacity-50'
const activeStyle = 'opacity-100 underline'

const route = useRoute()
</script>

<template>
  <div class="prose m-auto mb-8 select-none animate-none! op100!">
    <div mb-0 flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl>
      <Link to="/posts" class="!border-none" :class="route.path.includes('/posts') ? activeStyle : inactiveStyle">
        Blog
      </Link>
      <Link to="/notes" class="!border-none" :class="route.path.includes('/notes') ? activeStyle : inactiveStyle">
        Notes
      </Link>
    </div>
  </div>
</template>
