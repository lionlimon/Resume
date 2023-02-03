<template>
  <main class="home-page">
    <img
      v-if="showGarland"
      class="home-page__garland"
      src="@/assets/img/garland.svg"
      alt="Retro garland"
    >
    <PCBox
      ref="pc"
      :full-screen="store.fullScreenIsEnabled"
    >
      <template v-if="store.pcIsEnabled">
        <ProgressBar v-if="showLoading" />
        <PerfectScrollbar
          v-show="!showLoading"
          ref="scroll"
          class="home-page__scroll"
        >
          <RouterView />
        </PerfectScrollbar>
        <BottomMenu
          v-show="!showLoading && $route.name !== 'greetings'"
          class="home-page__menu"
        />
        <FullScreenButton
          class="home-page__screen"
          @click="store.toggleFullScreenIsEnabled"
        />
      </template>
    </PCBox>

    <PhotoList class="home-page__photos" />
    <HotCoffee class="home-page__hot-coffee" />
  </main>
</template>

<script lang="ts" setup>
import {
  onMounted, ref, watch, ComponentPublicInstance,
} from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import usePCStore from '@/stores/pc';
import PhotoList from '@/pages/HomePage/components/PhotoList';
import FullScreenButton from '@/pages/HomePage/components/FullScreenButton';
import { useRoute } from 'vue-router';
import isNewYearRange from '@/utils/isNewYearRange';
import BottomMenu from './components/BottomMenu';
import ProgressBar from './components/ProgressBar';
import PCBox from './components/PCBox';
import HotCoffee from './components/HotCoffee';

const store = usePCStore();
const pc = ref<typeof PCBox>(null!);
const showLoading = ref(true);
const route = useRoute();
const scroll = ref<ComponentPublicInstance<PerfectScrollbar>>(null!);
const showGarland = isNewYearRange();
onMounted(() => {
  // На телефонах не будет кнопки включения :)
  if (window.innerWidth <= 1279) {
    store.setPCIsEnabled(true);
  }
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

watch(route, () => {
  scroll.value.$el.scrollTop = 0;
});
</script>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css" />
<style scoped lang="scss" src="./HomePage.scss"></style>
