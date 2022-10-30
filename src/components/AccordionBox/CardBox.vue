<template>
  <CardBox class="accordion">
    <header
      class="accordion__header"
      @click="isOpen = !isOpen"
    >
      <h3 class="accordion__title">
        {{ props.title }}
      </h3>

      <button :class="['accordion__toggle', toggleModifiers]">
        <span class="accordion__toggle-symbol">^</span>
      </button>
    </header>

    <div
      v-show="isOpen"
      class="accordion__content"
    >
      <slot />
    </div>
  </CardBox>
</template>

<script setup lang="ts">
import CardBox from '@/components/CardBox';
import { computed, ref } from 'vue';

const isOpen = ref(false);
const toggleModifiers = computed(() => ({ 'accordion__toggle--active': isOpen.value }));
const props = defineProps<{
  title: string
}>();

</script>

<style scoped lang="scss" src="./CardBox.scss"></style>
