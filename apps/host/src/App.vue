<script setup lang="ts">
import remote from 'app1-expose/cA'
</script>

<template>
  <div>
    <p>app2</p>
    <remote />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
