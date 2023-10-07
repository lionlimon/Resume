<template>
  <div class="projects">
    <h2 class="projects__title">
      Проекты
    </h2>

    <p class="projects__description">
      За всё время имел дело с множеством проектов,
      ниже выделил интересные и сложные для меня.
    </p>

    <ul class="projects__list">
      <li
        v-for="project in expList"
        :key="project.title"
        class="projects__item"
      >
        <AccordionBox :title="project.title">
          <div v-html="project.text" />

          <div class="projects__item-labels">
            <LabelBox
              v-for="label in project.labels"
              :key="label"
              class="projects__item-label"
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

<style scoped lang="scss" src="./ProjectsPage.scss"></style>
