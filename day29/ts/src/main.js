import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import http from './uiils/requset'
Vue.prototype.$http=http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
