<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
// import cA from './components/c-a/c-a.vue'
import cC from './components/c-c/c-c.vue'

const cA = defineAsyncComponent(() => import('./components/c-a/c-a.vue'))
</script>

<template>
  <c-a></c-a>
  <c-c></c-c>
</template>
