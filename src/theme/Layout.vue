<template>
    <div>
        <h1>Custom Layout!</h1>
        <Content class="vp-doc"/>
    </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>
