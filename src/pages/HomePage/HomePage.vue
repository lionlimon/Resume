<template>
  <main class="home-page">
    <PCBox>content</PCBox>

    <div class="home-page__hot-coffee">
      <div class="home-page__steam">
        <img
          class="home-page__steam-item"
          aria-hidden="true"
          src="@/assets/img/steam-1.svg"
          alt=""
        >
        <img
          class="home-page__steam-item"
          aria-hidden="true"
          src="@/assets/img/steam-2.svg"
          alt=""
        >
        <img
          class="home-page__steam-item"
          aria-hidden="true"
          src="@/assets/img/steam-3.svg"
          alt=""
        >
      </div>

      <img
        aria-hidden="true"
        src="@/assets/img/coffee.svg"
        alt=""
        class="home-page__cup"
      >
    </div>
  </main>
</template>

<script lang="ts" setup>
import PCBox from './components/PCBox';
</script>

<style scoped lang="scss" src="./HomePage.scss"></style>
