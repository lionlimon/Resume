<template>
  <div class="progress-bar">
    <div class="progress-bar__title">
      Loading
    </div>

    <div class="progress-bar__scale">
      <div
        v-for="i in itemsCount"
        :key="i"
        class="progress-bar__scale-item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const itemsCount = ref(20);
</script>

<style scoped lang="scss" src="./ProgressBar.scss"></style>
