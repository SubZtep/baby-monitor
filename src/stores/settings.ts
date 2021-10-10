import { defineStore } from "pinia"

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    cryLevel: useStorage("cryLevel", -13),
    cryLimit: useStorage("cryLimit", 500),
    alertPhone: useStorage("alertPhone", ""),
  })
})
