<template lang="pug">
button.btn.text-xl.font-bold.tracking-3px(
  :class="['hover:opacity-100', enabled ? 'opacity-50' : 'opacity-90']"
  @click="enabled = !enabled") → {{ enabled ? 'disable' : 'enable' }} mic ←
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useAudio } from "~/composables/useAudio"
import { useAudioStore } from "~/stores/audio"

const { stream, enabled, stop } = useUserMedia({
  videoDeviceId: false,
  enabled: true,
})

const audio = useAudioStore()
const { dB: storeDB } = storeToRefs(audio)
const { dB } = useAudio(stream)
syncRef(dB, storeDB)

onBeforeUnmount(() => {
  stop()
})
</script>
