<template>
  <div class="todo-container w3-white w3-card-4">
    <div class="w3-container w3-black w3-margin-0 w3-bottombar w3-border-blue">
      <h1>
        <i class="fa-solid fa-clipboard-list"></i>
        Todo List
      </h1>
    </div>

    <div class="w3-container flex-container w3-light-gray w3-padding">
      <input
        type="text"
        class="w3-input w3-border-0"
        autofocus
        v-model="todoText"
        @keyup.enter="addTodo()"
        placeholder="Add Todo"
      />
      <button class="w3-button w3-gray" @click="clearTodo()">
        <i class="fa-solid fa-times"></i>
      </button>
      <button class="w3-button w3-blue" @click="addTodo()">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>

    <div class="w3-padding w3-blue">Pending ({{ pending.length }})</div>

    <div class="w3-padding" v-for="todo in pending" :key="todo.id">
      <label>
        <input type="checkbox" v-model="todo.checked" />
        <span class="w3-margin-left">{{ todo.text }}</span>
      </label>
    </div>

    <div class="w3-padding" v-show="!pending.length">No tasks</div>

    <div class="w3-padding" v-for="todo in done" :key="todo.id">
      <label>
        <input type="checkbox" v-model="todo.checked" />
        <span class="w3-margin-left">{{ todo.text }}</span>
      </label>
    </div>

    <div class="w3-padding" v-show="!done.length">No tasks</div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const todoText = ref("");
const todoList = ref([]);
const pending = computed(() => {
  return todoList.value.filter((item) => !item.checked);
});
const done = computed(() => {
  return todoList.value.filter((item) => item.checked);
});
function clearTodo() {
  todoText.value = "";
}
function addTodo() {
  if (todoText.value) {
    todoList.value.push({
      id: new Date().valueOf(),
      text: todoText.value,
      checked: false,
    });
    clearTodo();
  }
}
</script>

<style scoped>
.todo-container {
  max-width: 100%;
  min-width: 30rem;
}
label {
  cursor: pointer;
  display: flex;
}
</style>
