import { defineStore } from 'pinia';
import Sound from '@/utils/Sound';

const usePCStore = defineStore('pc', {
  state: () => ({
    pcIsEnabled: false,
    volumeIsEnabled: false,
    fullScreenIsEnabled: false,
  }),

  actions: {
    setVolumeIsEnabled(isEnabled: boolean) {
      if (!isEnabled) Sound.stopAllSounds();
      this.volumeIsEnabled = isEnabled;
    },

    setPCIsEnabled(isEnabled: boolean) {
      if (this.volumeIsEnabled && isEnabled) this.playStartSound();
      if (!isEnabled) Sound.stopAllSounds();
      this.pcIsEnabled = isEnabled;
    },

    toggleFullScreenIsEnabled() {
      this.fullScreenIsEnabled = !this.fullScreenIsEnabled;
    },

    addSoundListenersForClick(el: HTMLElement) {
      el.addEventListener('click', ({ target }) => {
        if (!(target && target instanceof Element) || !this.volumeIsEnabled) return;
        if ((target.tagName === 'A' || target.tagName === 'BUTTON')) {
          Sound.play('CLICK');
        }
      });
    },

    playStartSound() {
      Sound.play('START');
    },
  },
});

export default usePCStore;
