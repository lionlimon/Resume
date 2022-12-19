<template>
  <div class="history">
    <ul class="history__list">
      <HistoryPageItem
        v-for="item in HistoryList"
        :key="item.title"
        :title="item.title"
        :date="item.date"
        :text="item.text"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import HistoryPageItem from '@/pages/HistoryPage/components/HistoryPageItem/HistoryPageItem.vue';
import HistoryList from './constants';
</script>

<style scoped lang="scss" src="./HistoryPage.scss"></style>
