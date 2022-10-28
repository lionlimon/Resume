<template>
  <main class="home-page">
    <PCBox>
      <ProgressBar v-if="showLoading" />
      <RouterView v-show="!showLoading" />
    </PCBox>

    <HotCoffee class="home-page__hot-coffee" />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import usePCStore from '@/stores/pc';
import { onMounted, ref } from 'vue';
import ProgressBar from './components/ProgressBar';
import PCBox from './components/PCBox';
import HotCoffee from './components/HotCoffee';

const showLoading = ref(true);
onMounted(() => setTimeout(() => {
  showLoading.value = false;
}, 4000));
</script>

<style scoped lang="scss" src="./HomePage.scss"></style>
