<template>
  <main class="home-page">
    <PCBox><RouterView /></PCBox>

    <HotCoffee class="home-page__hot-coffee" />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import PCBox from './components/PCBox';
import HotCoffee from './components/HotCoffee';
</script>

<style scoped lang="scss" src="./HomePage.scss"></style>
