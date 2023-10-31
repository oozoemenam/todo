<script setup>
import Todos from "@components/ToDos.vue";
</script>

<template>
  <div class="app w3-blue-gray">
    <todos></todos>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem;
}
</style>
