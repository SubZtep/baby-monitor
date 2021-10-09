<template lang="pug">
//- h3 tune

//- p dB: {{ dB }}

button.btn.text-2xl.font-bold.w-full(
  :class="['hover:opacity-100', enabled ? 'opacity-50' : 'opacity-90']"
  @click="enabled = !enabled") {{ enabled ? 'disable' : 'enable' }} mic
</template>

<script lang="ts" setup>
import { useAudio } from "~/composables/useAudio"
import { useAudioStore } from "~/stores/audio"

const { stream, enabled } = useUserMedia({
  videoDeviceId: false,
  enabled: true,
})

const { dB } = useAudio(stream)

const store = useAudioStore()

store.dB = dB
</script>
