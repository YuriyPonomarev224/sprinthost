import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttonsDisabled: false
  },
  getters: {
    buttonsDisabled: s => s.buttonsDisabled
  },
  mutations: {
    setButtonsDisabled(state) {
      state.buttonsDisabled = !state.buttonsDisabled
    }
  },
  actions: {
  },
  modules: {
  }
})
