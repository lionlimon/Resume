<template>
  <main class="home-page">
    <div class="pc home-page__pc">
      <div class="pc__screen-frame pc__super-ellipse">
        <div class="pc__screen pc__super-ellipse">
          <div class="pc__screen-light" />
          screen
        </div>
      </div>

      <div class="pc__bottom-panel">
        <div class="pc__volume">
          <SwitchButton v-model="volumeIsOn" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import SwitchButton from '@/components/SwitchButton';
import { ref } from 'vue';

const volumeIsOn = ref(false);
</script>

<style scoped lang="scss" src="./HomePage.scss"></style>
