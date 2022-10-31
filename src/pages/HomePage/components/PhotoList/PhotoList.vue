<template>
  <div class="photo-list">
    <PhotoCard
      class="photo-list__photo"
      :url="MY_PHOTO_2"
      :url-webp="MY_PHOTO_2_WEBP"
      alt="Пью чай, но очки вспотели"
    />
    <PhotoCard
      class="photo-list__photo"
      :url="MY_PHOTO"
      :url-webp="MY_PHOTO_WEBP"
      alt="Я сижу в офисе. Делаю вид, что деловой"
    />
  </div>
</template>

<script setup lang="ts">
import {
  MY_PHOTO,
  MY_PHOTO_2,
  MY_PHOTO_WEBP,
  MY_PHOTO_2_WEBP,
} from '@/pages/HomePage/constants';
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue';
</script>

<style scoped lang="scss" src="./PhotoList.scss"></style>
