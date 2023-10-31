<template>
  <div class="w3-cell-row w3-padding">
    <div class="w3-cell w3-padding">
      <strong>Description</strong>
      <input
        type="text"
        class="w3-input w3-border"
        v-model.string="item.text"
        @blur="emitUpdate()"
      />
    </div>

    <div class="w3-cell w3-padding">
      <strong>Status</strong>
      <select
        class="w3-select w3-border"
        v-model.string="item.status"
        @change="emitUpdate()"
      >
        <option
          v-for="state in todoService.getStatusList()"
          :key="state.id"
          :value="state.id"
        >
          {{ state.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import todoService from "../services/todoService";

const $props = defineProps({
  modelValue: { type: Object, default: () => ({}) },
});
const $emit = defineEmits(["update:modelValue"]);
const item = ref({});

item.value = { ...$props.modelValue };

function emitUpdate() {
  $emit("update:modelValue", item.value);
}
</script>

<style scoped></style>
