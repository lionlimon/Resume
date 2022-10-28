import { defineStore } from 'pinia';

const usePCStore = defineStore('pc', {
  state: () => ({
    pcIsEnabled: false,
    volumeIsEnabled: false,
  }),

  actions: {
    setVolumeIsEnabled(isEnabled: boolean) {
      this.volumeIsEnabled = isEnabled;
    },

    setPCIsEnabled(isEnabled: boolean) {
      this.pcIsEnabled = isEnabled;
    },
  },
});

export default usePCStore;
