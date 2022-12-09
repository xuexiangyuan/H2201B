import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import vuexp from 'vuex-persistedstate'
export default new Vuex.Store({
	plugins:[vuexp()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
