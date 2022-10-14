<template>
  <label :class="['switch', modifiers]">
    <input
      v-model="active"
      class="switch__input"
      type="checkbox"
    >

    <span class="switch__inner">
      <span class="switch__visible">
        <span class="switch__toggle" />
        <span class="switch__bulb" />
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const active = ref(false);
const modifiers = computed(() => ({ 'switch--active': active.value }));
const emit = defineEmits(['update:modelValue']);

defineProps<{ modelValue: boolean }>();

watch(active, () => emit('update:modelValue', active.value));
</script>

<style scoped lang="scss" src="./SwitchButton.scss"></style>
