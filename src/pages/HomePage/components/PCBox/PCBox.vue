<template>
  <div class="pc">
    <div class="pc__screen-frame pc__super-ellipse">
      <div class="pc__screen pc__super-ellipse">
        <div class="pc__screen-light" />
        <div class="pc__content">
          <slot />
        </div>
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

      <div class="pc__drive" />

      <RoundButton
        class="pc__turn-on"
        @click="store.setPCIsEnabled(true)"
      >
        <SvgIcon
          class="pc__turn-on-icon"
          name="turn-on"
          width="25"
          height="28"
        />
      </RoundButton>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon';
import SwitchButton from '@/components/SwitchButton';
import RoundButton from '@/components/RoundButton';
import { ref, watch } from 'vue';
import usePCStore from '@/stores/pc';

const store = usePCStore();
const volumeIsOn = ref(true);

watch(volumeIsOn, () => {
  store.setVolumeIsEnabled(volumeIsOn.value);
}, { immediate: true });
</script>

<style scoped lang="scss" src="./PCBox.scss"></style>
