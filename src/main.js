import { createApp } from 'vue'
import './assets/scss/common.scss'
import App from './App.vue'
import { createHead } from '@vueuse/head'

import router from "./router";

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')