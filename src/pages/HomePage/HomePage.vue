<template>
  <main class="home-page">
    <PCBox ref="pc">
      <template v-if="store.pcIsEnabled">
        <ProgressBar v-if="showLoading" />
        <PerfectScrollbar
          v-show="!showLoading"
          class="home-page__scroll"
        >
          <RouterView />
        </PerfectScrollbar>
        <BottomMenu
          v-show="!showLoading && $route.name !== 'greetings'"
          class="home-page__menu"
        />
      </template>
    </PCBox>

    <PhotoList class="home-page__photos" />
    <HotCoffee class="home-page__hot-coffee" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import usePCStore from '@/stores/pc';
import PhotoList from '@/pages/HomePage/components/PhotoList';
import BottomMenu from './components/BottomMenu';
import ProgressBar from './components/ProgressBar';
import PCBox from './components/PCBox';
import HotCoffee from './components/HotCoffee';

const store = usePCStore();
const pc = ref<typeof PCBox>(null!);
const showLoading = ref(true);

onMounted(() => {
  if (pc.value.$el) store.addSoundListenersForClick(pc.value.$el as HTMLElement);
});

watch(store, () => {
  if (!store.pcIsEnabled) {
    showLoading.value = true;
    return;
  }

  setTimeout(() => {
    showLoading.value = false;
  }, 4000);
});
</script>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css" />
<style scoped lang="scss" src="./HomePage.scss"></style>
