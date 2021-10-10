<template lang="pug">
.home.row.flex-col.text-2xl.select-none(v-if="!alerting")

  .row.text-lime-300
    .text-left Live measurement:
    .font-mono {{audio.roundDB ?? 'unknown'}} dB

  .row.text-xl
    .text-left Accepted limit:
    .min-w-50
      .text-right.font-mono {{settings.cryLevel}} dB
      input.scale.invert(type="range" :min="-30" :max="0" v-model="settings.cryLevel")

  .row.text-lime-300
    .text-left Sensed {{count > 1 ? 'cries' : 'cry'}}:
    .font-mono {{count}}
      span.ml-2.text-xl.opacity-50 💦

  .row.text-xl
    .text-left Accepted {{settings.cryLimit > 1 ? 'cries' : 'cry'}}:
    .min-w-50
      .text-right.font-mono {{settings.cryLimit}}
        span.ml-3.text-xl.opacity-40 💦
      input.scale(type="range" :min="0" :max="10000" v-model="settings.cryLimit")

  button.btn-alert(
    :disabled="audio.dB === undefined || !validPhone"
    @click="alertOn = !alertOn")
    template(v-if="alertOn")
      | Alert is ON
      br
      | 😿
    template(v-else)
      | Click for alert
      br
      | 👼 ⇒ 🎃

  hr.border-gray-700
  input.phone(type="tel" placeholder="Phone Number to alert" v-model.trim="settings.alertPhone")
  hr.border-gray-800
  TuneMic

h1.my-15(v-else) Alerting...
</template>

<script lang="ts" setup>
import { useAudioStore } from "~/stores/audio"
import { useSettingsStore } from "~/stores/settings"

const audio = useAudioStore()
const settings = useSettingsStore()
const alertOn = ref(false)
const alerting = ref(false)
const { count, inc } = useCounter()
const overLimit = computed(() => get(count) >= get(settings.cryLimit))
const validPhone = computed(() => get(settings.alertPhone).length > 0)

watch(
  () => audio.dB,
  dB => (dB || Infinity) > get(settings.cryLevel) && inc()
)

whenever(and(alertOn, overLimit, not(alerting)), () => {
  set(alerting, true)

  fetch("/alert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: settings.alertPhone,
    }),
  })
})
</script>

<style>
.home {
  @apply my-5 gap-6 text-center text-gray-100;

  .btn-alert {
    @apply btn text-2xl border-cyan-700 border-8px bg-green-800 opacity-80 mt-5 p-4;
  }

  .scale {
    width: 100%;
    transform: scaleY(1.2);
    filter: opacity(0.8) saturate(0.5);
    &.invert {
      filter: opacity(0.8) saturate(0.5) invert(1);
    }
  }

  .phone {
    @apply text-gray-100 bg-cyan-700 text-lg px-2 py-1 rounded-md;
  }
}
</style>
