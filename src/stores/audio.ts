import { defineStore } from "pinia"

export const useAudioStore = defineStore("video", {
  state: () => ({
    channelCount: 1,
    sampleRate: 48_000,
    sampleSize: 32,
    echoCancellation: false,
    fftSize: 4_096,
  }),
  getters: {
    settings: state =>
      ["sampleRate", "sampleSize", "echoCancellation", "fftSize"].reduce(
        (obj, key) => Object.assign(obj, { [key]: state[key] }),
        {}
      ),
  },
})
