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
  checkLogin: state => state.auth
}

// actions
const actions = {
  loggin ({ commit, state }, credentials) {
    commit(types.AUTH_REQUESTING)
    api.$auth.login(credentials)
      .done((data) => commit(types.AUTH_SUCCESS, data))
      .fail(() => commit(types.AUTH_FAIL))
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
  [types.AUTH_SUCCESS] (state, {user, token}) {
    state.user = user
    state.token = token
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
