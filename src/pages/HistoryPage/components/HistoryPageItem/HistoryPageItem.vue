<template>
  <li
    :class="['history-page-item', modifiers]"
  >
    <CardBox class="history-page-item__card">
      <h3 class="history-page-item__title">
        <button
          class="history-page-item__button"
          @click="toggleActive"
        >
          {{ title }}
        </button>
      </h3>

      <div class="history-page-item__hidden-content">
        <LabelBox class="history-page-item__label">
          {{ date }}
        </LabelBox>

        <div
          class="history-page-item__hidden-content"
          v-html="text"
        />
      </div>
    </CardBox>
  </li>
</template>

<script setup lang="ts">
import CardBox from '@/components/CardBox/CardBox.vue';
import LabelBox from '@/components/LabelBox/LabelBox.vue';
import { computed, ref } from 'vue';

defineProps<{
  title: string,
  date: string,
  text: string,
}>();

const isActive = ref(false);
const toggleActive = () => isActive.value = !isActive.value;
const modifiers = computed(() => ({
  'history-page-item--active': isActive.value,
}));
</script>

<style lang="scss" src='./HistoryPageItem.scss' scoped></style>
