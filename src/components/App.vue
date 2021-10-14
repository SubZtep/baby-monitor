<template lang="pug">
header
  h1 Baby Monitor

.container.max-w-screen-md
  router-view

footer.my-2
  button.btn.btn-reload(@click="$event.view?.location.reload()") Reload Everything
  | — on
  a.ml-1(href="https://github.com/SubZtep/baby-monitor#readme" rel="noopener noreferrer") GitHub
  | —
</template>
