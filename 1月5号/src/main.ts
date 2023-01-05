import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import http from './untils/httpRequse.js'
const app = createApp(App)
app.config.globalProperties.$http = http;
// app.use(ElementPlus)
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
