<template>
  <div
    ref="div"
    class="photo"
  >
    <picture class="photo__picture">
      <source
        :srcSet="urlWebp"
        type="image/webp"
      >
      <source
        :srcSet="url"
        type="image/png"
      >
      <img
        width="210"
        height="210"
        class="photo__img"
        :src="url"
        alt="alt"
      >
    </picture>
  </div>
</template>

<script setup lang="ts">
import setProperties from '@/helpers/setProperties';
import { ref } from 'vue';

const div = ref<HTMLDivElement>(null!);

defineProps<{
  url: string,
  urlWebp: string,
  alt: string,
}>();

setProperties({
  '--angle-1': `${Math.random()}deg`,
  '--angle-2': `${Math.random()}deg`,
}, div);
</script>

<style scoped lang="scss" src="./PhotoCard.scss"></style>
