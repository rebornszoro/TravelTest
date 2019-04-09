import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: '中山'
  },
  // actions: {
  //   changeCity (ctx, name) {
  //     ctx.commit('changeCity', name)
  //   }
  // },
  mutations: {
    changeCity (state, name) {
      state.city = name
    }
  }
})
