<template>
  <div
    ref="divRef"
    class="progress-scale"
  />
</template>

<script setup lang="ts">
import setProperties from '@/helpers/setProperties';
import { ref } from 'vue';

const divRef = ref<HTMLDivElement>(null!);
const props = withDefaults(
  defineProps<{value: number, max?: number}>(),
  {
    max: 10,
  },
);

setProperties({ '--value': `${(100 / 10) * props.value}%` }, divRef);
</script>

<style scoped lang="scss" src="./ProgressScale.scss"></style>
