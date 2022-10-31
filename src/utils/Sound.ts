import START_SOUND from '@/assets/sounds/start.mp3';
import CLICK_SOUND from '@/assets/sounds/click.mp3';

const SOUND_MAP = {
  CLICK: CLICK_SOUND,
  START: START_SOUND,
};

type SoundMapKeys = keyof typeof SOUND_MAP;

export default class Sound {
  static audioList = {} as Record<SoundMapKeys, HTMLAudioElement>;

  static init() {
    (Object.keys(SOUND_MAP) as SoundMapKeys[]).forEach((key) => {
      this.audioList[key] = new Audio(SOUND_MAP[key]);
    });
  }

  static play(soundName: SoundMapKeys) {
    this.audioList[soundName].play();
  }

  static stopAllSounds() {
    (Object.keys(SOUND_MAP) as SoundMapKeys[])
      .forEach((key) => {
        const el = this.audioList[key];
        el.pause();
        el.currentTime = 0;
      });
  }
}
