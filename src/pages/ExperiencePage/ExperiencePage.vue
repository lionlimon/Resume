<template>
  <div class="experience">
    <ul class="experience__list">
      <li
        v-for="project in expList"
        :key="project.title"
        class="experience__item"
      >
        <AccordionBox :title="project.title">
          <p>{{ project.text }}</p>

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
