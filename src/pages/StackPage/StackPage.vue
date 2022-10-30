<template>
  <div class="stack">
    <p>
      Тут есть все технологии, с которыми я имел дело.
      Шкала показывает субъективную оценку о навыках владения технологией.
    </p>

    <ul class="stack__list">
      <li
        v-for="tech in stackList"
        :key="tech.title"
        class="stack__item"
      >
        <div class="stack__item-tech">
          {{ tech.title }}
        </div>
        <ProgressScale :value="tech.progress" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProgressScale from '@/components/ProgressScale';
import stackList from './constants';
</script>

<style scoped lang="scss" src="./StackPage.scss"></style>
