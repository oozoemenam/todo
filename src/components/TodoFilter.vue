<template>
  <div class="flex-container w3-border">
    <input
      type="text"
      class="w3-input w3-border-0"
      v-model="value"
      @keyup="publishValue()"
      placeholder="Enter filter text"
    />
    <button class="w3-border-0" @click="clear()">
      <i class="fas fa-fw fa-times"></i>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const $props = defineProps(["modelValue"]);
const $emit = defineEmits(["update:modelValue"]);
const value = ref("");

onMounted(() => {
  value.text = $props.modelValue;
});

function clear() {
  value.value = "";
  publishValue();
}

function publishValue() {
  $emit("update:modelValue", value.value);
}
</script>

<style scoped></style>
