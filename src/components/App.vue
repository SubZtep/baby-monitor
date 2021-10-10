<template lang="pug">
h1.head Baby Monitor
.container.max-w-screen-md
  router-view

button.btn.btn-reload(@click="reload") Reload Everything
</template>

<script lang="ts" setup>
const reload = () => location.reload()
</script>

<style>
.head {
  @apply bg-gradient-52 p-1 font-serif font-semibold opacity-80;
  filter: invert(1);
}

.btn-reload {
  @apply opacity-50 font-mono text-lg block mx-auto;
}
</style>
