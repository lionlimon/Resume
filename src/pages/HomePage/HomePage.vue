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

          <SvgIcon
            class="pc__volume-icon"
            width="16"
            height="16"
            name="volume"
          />
        </div>

        <RoundButton class="pc__turn-on">
          <SvgIcon
            class="pc__turn-on-icon"
            name="turn-on"
            width="25"
            height="28"
          />
        </RoundButton>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import SwitchButton from '@/components/SwitchButton';
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon';
import RoundButton from '@/components/RoundButton';

const volumeIsOn = ref(false);
</script>

<style scoped lang="scss" src="./HomePage.scss"></style>
