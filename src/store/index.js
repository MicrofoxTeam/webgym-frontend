import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  getters: {
  },
  mutations: {
    set (state, { type, items }) {
      state[type] = items
    }
  },
  actions: {
    // https://medium.com/devschacht/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B5%D0%BC-axios-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5-%D1%81-vue-js-3bc45464c460
  }
})
