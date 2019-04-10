import Vue from 'vue'
import Vuex from 'vuex'
import gg from './state.js'
import xx from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: gg,
  mutations: xx// gg and xx here could be renamed casurelly,but make sure that they are the same with that above
})
