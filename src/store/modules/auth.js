import * as types from '../mutation-types'
import api from '../../services/api'
// initial state
// shape: [{ id, quantity }]
const state = {
  user: null,
  token: null,
  checkoutStatus: null,
  auth: false
}

// getters
const getters = {
  getUser: state => state.user,
  getToken: state => state.token,
  checkLogin: state => state.auth,
  getStatus: state => state.checkoutStatus
}

// actions
const actions = {
  login ({ commit, state }, credentials) {
    return new Promise((resolve, reject) => {
      commit(types.AUTH_REQUESTING)
      api.$auth.login(credentials)
        .then((data) => {
          commit(types.AUTH_SUCCESS, data)
          resolve()
        })
        .catch(() => {
          commit(types.AUTH_FAIL)
        })
    })
  }
}

// mutations
const mutations = {
  [types.AUTH_REQUESTING] (state) {
    state.checkoutStatus = 'requesting'
  },
  [types.AUTH_FAIL] (state) {
    state.checkoutStatus = null
  },
  [types.AUTH_SUCCESS] (state, data) {
    console.log(JSON.parse(data.data.data))
    state.user = data.user
    state.token = data.token
    state.auth = true
    state.checkoutStatus = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
