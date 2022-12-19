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
      const checkElement = (target: Element, tagName: string) => (
        target.tagName === tagName || target.parentElement!.tagName === tagName
      );

      el.addEventListener('click', ({ target }) => {
        if (!(target && target instanceof Element) || !this.volumeIsEnabled) return;
        if (checkElement(target, 'A') || checkElement(target, 'BUTTON')) {
          Sound.play('CLICK')
            .volume(0.1);
        }
      });
    },

    playStartSound() {
      Sound.play('START');
    },
  },
});

export default usePCStore;
