import * as types from '../mutation-types'
import api from '../../services/api'

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
    api.$auth.getUser({})
      .then((response) => {
        if (response.data.Success) {
          commit(types.ACCOUNT_SUCCESS, response.data)
        } else {
          commit(types.ACCOUNT_FAIL)
        }
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
