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

    <div class="home-page__photos">
      <PhotoCard
        class="home-page__photo"
        :url="MY_PHOTO_2"
        :url-webp="MY_PHOTO_2_WEBP"
        alt="Пью чай, но очки вспотели"
      />
      <PhotoCard
        class="home-page__photo"
        :url="MY_PHOTO"
        :url-webp="MY_PHOTO_WEBP"
        alt="Я сижу в офисе. Делаю вид, что деловой"
      />
    </div>

    <HotCoffee class="home-page__hot-coffee" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import PhotoCard from '@/components/PhotoCard';
import usePCStore from '@/stores/pc';
import {
  MY_PHOTO, MY_PHOTO_WEBP, MY_PHOTO_2, MY_PHOTO_2_WEBP,
} from './constants';
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
