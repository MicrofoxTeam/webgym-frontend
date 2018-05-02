import * as types from '../mutation-types'
import api from '../../services/api'
import auth from './auth'

const state = {
  user: null,
  checkoutStatus: null
}

// getters
const getters = {
  getUser: state => state.user
}

// actions
const actions = {
  getUser ({ commit, state }) {
    commit(types.ACCOUNT_REQUESTING)
    console.log(auth.state)
    api.$auth.getUser({'Token': auth.state.token})
      .then((response) => {
        commit(types.ACCOUNT_SUCCESS, response.data)
      })
      .catch((data) => {
        commit(types.ACCOUNT_FAIL)
      })
  }
}

// mutations
const mutations = {
  [types.ACCOUNT_REQUESTING] (state) {
    state.checkoutStatus = 'requesting'
  },
  [types.ACCOUNT_FAIL] (state) {
    state.checkoutStatus = null
  },
  [types.ACCOUNT_SUCCESS] (state, data) {
    state.user = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
