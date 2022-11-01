<template>
  <div class="experience">
    <h2 class="experience__title">
      Технические знания, скиллы и опыт
    </h2>

    <ul class="experience__ul">
      <li class="experience__ul-item">
        Умею верстать макеты различной сложности,
        хорошо знаю css, js, html, es6+, sass, pug и всё причастное
      </li>
      <li class="experience__ul-item">
        Знаю разработку SPA приложений на react и vue
      </li>
      <li class="experience__ul-item">
        Знаком с webpack, parcel и gulp, поэтому могу настроить инфраструктуру фронта
        под нужды проекта со всеми плюшками: dev-server,
        eslint, husky, оптимизация изображений и другие удобства
      </li>
      <li class="experience__ul-item">
        Имел опыт написания телеграм бота на node.js
      </li>
      <li class="experience__ul-item">
        Был опыт написания unit-тестов на jest и vue-test-utils
      </li>
      <li class="experience__ul-item">
        Небольшой опыт с написанием бэка на node.js в частности на express
      </li>
      <li class="experience__ul-item">
        Умею работать в команде c git, знания базовые
      </li>
      <li class="experience__ul-item">
        Опыт тимлида чуть менее года
      </li>
      <li class="experience__ul-item">
        Есть опыт ревьюера
      </li>
      <li class="experience__ul-item">
        Нёс ответственность за проекты
      </li>
    </ul>

    <h2 class="experience__title">
      Проекты
    </h2>

    <p class="experience__description">
      За всё время имел дело с множеством проектов,
      ниже выделил из них 3 интересных/сложных для меня.
    </p>

    <ul class="experience__list">
      <li
        v-for="project in expList"
        :key="project.title"
        class="experience__item"
      >
        <AccordionBox :title="project.title">
          <div v-html="project.text" />

          <div class="experience__item-labels">
            <LabelBox
              v-for="label in project.labels"
              :key="label"
              class="experience__item-label"
            >
              {{ label }}
            </LabelBox>
          </div>
        </AccordionBox>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import AccordionBox from '@/components/AccordionBox';
import LabelBox from '@/components/LabelBox';
import expList from './constants';
</script>

<style scoped lang="scss" src="./ExperiencePage.scss"></style>
