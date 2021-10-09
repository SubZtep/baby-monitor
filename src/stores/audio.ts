import { defineStore } from "pinia"

export const useAudioStore = defineStore("video", {
  state: () => ({
    dB: undefined as number | undefined,
    fftSize: 8_192, //4_096,

    channelCount: 1,
    sampleRate: 48_000,
    sampleSize: 32,
    echoCancellation: false,
  }),
  getters: {
    roundDB: state => (state.dB ? Math.round(state.dB) : undefined),

    settings: state =>
      ["sampleRate", "sampleSize", "echoCancellation", "fftSize"].reduce(
        (obj, key) => Object.assign(obj, { [key]: state[key] }),
        {}
      ),
  },
})
