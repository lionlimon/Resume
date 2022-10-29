<template>
  <nav class="bottom-menu">
    <ul class="bottom-menu__list">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="bottom-menu__item"
      >
        <RouterLink
          exact-active-class="active"
          :to="item.link"
        >
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { homePageChildren } from '@/routes';

const menuItems = homePageChildren.map(({ meta, path }) => ({
  name: meta.ru.name,
  link: path,
}))
  // remove greetings
  .splice(1, homePageChildren.length - 1);
</script>

<style scoped lang="scss" src="./BottomMenu.scss"></style>
