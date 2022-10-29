<template>
  <main class="home-page">
    <PCBox>
      <ProgressBar v-if="showLoading" />
      <RouterView v-show="!showLoading" />
      <BottomMenu
        v-show="!showLoading && $route.name !== 'greetings'"
        class="home-page__menu"
      />
    </PCBox>

    <HotCoffee class="home-page__hot-coffee" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BottomMenu from '@/pages/HomePage/components/BottomMenu';
import ProgressBar from './components/ProgressBar';
import PCBox from './components/PCBox';
import HotCoffee from './components/HotCoffee';

const showLoading = ref(true);
onMounted(() => setTimeout(() => {
  showLoading.value = false;
}, 4000));
</script>

<style scoped lang="scss" src="./HomePage.scss"></style>
