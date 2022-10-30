<template>
  <div class="history">
    <ul class="history__list">
      <li
        v-for="project in HistoryList"
        :key="project.title"
        class="history__item"
      >
        <CardBox class="history__item-card">
          <h3 class="history__item-title">
            {{ project.title }}
          </h3>

          <div class="history__hidden-content">
            <LabelBox class="history__item-label">
              {{ project.date }}
            </LabelBox>

            <div class="history__hidden-content">
              {{ project.text }}
            </div>
          </div>
        </CardBox>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import LabelBox from '@/components/LabelBox';
import CardBox from '@/components/CardBox';
import HistoryList from './constants';
</script>

<style scoped lang="scss" src="./HistoryPage.scss"></style>
