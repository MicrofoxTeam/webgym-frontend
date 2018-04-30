import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const HTTP = axios.create({
  baseURL: 'http://faustus12-002-site2.itempurl.com/'
})

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    results (state) {
      return state.results.map(item => {
        item.url = 'https://ru.wikipedia.org/wiki/' + item.title
        return item
      })
    }
  },
  mutations: {
    set (state, { type, items }) {
      state[type] = items
    }
  },
  actions: {
    login ({ commit }, query) {
      let data = JSON.stringify({
        Email: query.email,
        Password: query.password
      })
      HTTP.post('api/Login', data)
        .then(function (response) {
          alert(response)
          commit('set', { type: 'token', items: response })
        })
        .catch(function (error) {
          alert(error)
        })
    }
  }
})
