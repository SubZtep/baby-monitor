<template lang="pug">
.mt-15.flex.justify-between.content-center.gap-15.flex-col.text-center
  //- h2 Home
  button.btn.text-2xl.border-cyan-700.border-15px.bg-green-800(
    :disabled="store.dB === undefined"
    @click="alertOn = !alertOn")
    template(v-if="alertOn") Alert is ON ---———=😿=———--- from {{cryLevel}}dB
    template(v-else) Click for alert — 👼 — from {{cryLevel}}dB

  input(type="range" :min="-30" :max="0" v-model="cryLevel")

  .text-4xl.my-4.font-mono {{store.roundDB ?? 'unknown'}} dB

TuneMic.mt-15
</template>

<script lang="ts" setup>
import { useAudioStore } from "~/stores/audio"

const cryLevel = ref(-5)
const alertOn = ref(false)

const store = useAudioStore()
</script>
