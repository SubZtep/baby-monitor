<template lang="pug">
h1.font-serif.font-semibold.opacity-80 Baby Monitor
.px-4(class="md:container md:mx-auto")
  router-view
</template>

<style scoped>
h1 {
  @apply bg-gradient-52 p-1;
  filter: invert(1);
}
</style>