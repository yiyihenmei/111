import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iist:[]
  },
  mutations: {
    addsj(state,age){
      state.iist.push(age,)
    }
  },
  actions: {},
  modules: {}
})