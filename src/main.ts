import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import App from "~/components/App.vue"
import Home from "~/components/views/Home.vue"
import "virtual:windi.css"
import "./main.css"

createApp(App)
  .use(createPinia())
  .use(
    createRouter({
      history: createWebHistory(),
      routes: [{ path: "/", component: Home }],
    })
  )
  .mount("#app")
