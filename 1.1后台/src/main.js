import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import http from '@/untils/httpRequse'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
