<template lang="pug">
h3 tune

p dB: {{ dB }}

button.btn(@click="enabled = !enabled") {{ enabled ? 'disable' : 'enable' }} mic
</template>

<script lang="ts" setup>
import { useAudio } from "~/composables/useAudio"

const { stream, enabled } = useUserMedia({
  videoDeviceId: false,
  enabled: false,
})

const { dB } = useAudio(stream)
</script>
