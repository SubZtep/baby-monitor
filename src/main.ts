import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHashHistory } from "vue-router"
import App from "~/components/App.vue"
import Home from "~/components/views/Home.vue"
import "virtual:windi.css"

createApp(App)
  .use(createPinia())
  .use(
    createRouter({
      history: createWebHashHistory(),
      routes: [{ path: "/", component: Home }],
    })
  )
  .mount("#app")
