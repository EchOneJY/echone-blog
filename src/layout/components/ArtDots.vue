<script setup lang="ts">
import { p5i } from 'p5i'
import type { P5I } from 'p5i'
import { onMounted, onUnmounted, ref } from 'vue'

const el = ref<HTMLCanvasElement | null>(null)

const {
  mount,
  unmount,
  createCanvas,
  background,
  noFill,
  stroke,
  noiseSeed,
  resizeCanvas,
} = p5i()

let w = window.innerWidth
let h = window.innerHeight
const offsetY = window.scrollY

const SPACING = 18

const existingPoints = new Set<string>()
const points: { x: number, y: number, opacity: number }[] = []

function addPoints() {
  for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
    for (let y = -SPACING / 2; y < h + offsetY + SPACING; y += SPACING) {
      const id = `${x}-${y}`
      if (existingPoints.has(id))
        continue
      existingPoints.add(id)
      points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 })
    }
  }
}

function setup() {
  createCanvas(w, h)
  background('#ffffff')
  stroke('#ccc')
  noFill()

  noiseSeed(+new Date())

  addPoints()
}

function draw({ circle }: P5I) {
  background('#ffffff')

  for (const p of points) {
    const { x, y } = p
    const nx = x
    const ny = y
    stroke(200, 200, 200)
    circle(nx, ny - offsetY, 1)
  }
}

function restart() {
  if (el.value)
    mount(el.value, { setup, draw })
}

onMounted(() => {
  restart()

  useEventListener('resize', () => {
    w = window.innerWidth
    h = window.innerHeight
    resizeCanvas(w, h)
    addPoints()
  })

  // Uncomment to enable scroll-based animation
  // Tho there is some lag when scrolling, not sure if it's solvable
  // useEventListener('scroll', () => {
  //   offsetY = window.scrollY
  //   addPoints()
  // }, { passive: true })
})

onUnmounted(() => {
  unmount()
})
</script>

<template>
  <div ref="el" z--1 fixed left-0 right-0 top-0 bottom-0 pointer-events-none dark:invert />
</template>
