<script setup lang='ts'>
import { useData } from 'vitepress'

const { isDark } = useData()

function toggleDark(event: MouseEvent) {
  const enableTransitions = () =>
    'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 300,
          easing: 'ease-in',
          pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
        },
      )
    })
}
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <div i-ri-sun-line dark:i-ri-moon-line />
  </a>
</template>
