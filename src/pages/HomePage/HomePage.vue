<template>
  <main class="home-page">
    <PCBox>
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
import { onMounted, ref } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import PhotoCard from '@/components/PhotoCard';
import {
  MY_PHOTO, MY_PHOTO_WEBP, MY_PHOTO_2, MY_PHOTO_2_WEBP,
} from './constants';
import BottomMenu from './components/BottomMenu';
import ProgressBar from './components/ProgressBar';
import PCBox from './components/PCBox';
import HotCoffee from './components/HotCoffee';

const showLoading = ref(true);

onMounted(() => setTimeout(() => {
  showLoading.value = false;
}, 4000));
</script>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css" />
<style scoped lang="scss" src="./HomePage.scss"></style>
