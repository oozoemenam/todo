<script setup>
import AppHeader from "./components/AppHeader.vue";
import TodoProject from "./components/TodoProject.vue";
</script>

<template>
  <div class="app">
    <app-header></app-header>
    <main class="w3-container">
      <todo-project></todo-project>
    </main>
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  min-height: 100vh;
  padding: 0;
}
</style>
