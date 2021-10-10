<template lang="pug">
.mt-15.flex.justify-between.content-center.gap-15.flex-col.text-center
  //- h2 Home
  button.btn.text-2xl.border-cyan-700.border-15px.bg-green-800.opacity-80(
    :disabled="store.dB === undefined"
    @click="alertOn = !alertOn")
    template(v-if="alertOn") Alert is ON ---———=😿=———--- from {{cryLevel}}dB
    template(v-else)
      .font-mono.italic // TODO:
      .font-sans Click for alert — 👼 ⟾ 🎃 — from {{cryLevel}}dB

  input(type="range" :min="-30" :max="0" v-model="cryLevel")

  .bar

  div
    span.text-4xl.my-4.font-mono {{store.roundDB ?? 'unknown'}} dB —
    span.ml-4.text-base {{count}} pieces of data
    span.text-3xl.opacity-30 🚽

TuneMic.mt-15
</template>

<script lang="ts" setup>
import { useAudioStore } from "~/stores/audio"

const store = useAudioStore()

const cryLevel = ref(-5)
const alertOn = ref(false)

// const dBpc = computed(() => store.dB )

const { count, inc, dec, set, reset } = useCounter()
watch(
  () => store.dB,
  dB => (dB || Infinity) > get(cryLevel) && inc()
)
</script>

<style>
.bar {
  width: var(--);
}
</style>