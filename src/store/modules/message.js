import * as types from '../mutation-types'
import api from '../../services/api'

const state = {
  messages: [],
  currentPage: 1,
  checkoutStatus: null
}

// getters
const getters = {
  getMessages: state => state.messages,
  getStatus: state => state.checkoutStatus
}

// actions
const actions = {
  getMessages ({ commit, state }, credentials = {}) {
    return new Promise((resolve, reject) => {
      commit(types.MESSAGES_REQUESTING)
      credentials.Page = state.currentPage
      api.$message.getMessages(credentials)
        .then((response) => {
          if (response.data.Success) {
            commit(types.MESSAGES_SUCCESS, response.data)
            resolve()
          } else {
            commit(types.MESSAGES_FAIL)
            reject(response.data.Description)
          }
        })
        .catch((data) => {
          commit(types.MESSAGES_FAIL)
          reject(data)
        })
    })
  }
}

// mutations
const mutations = {
  [types.MESSAGES_REQUESTING] (state) {
    state.checkoutStatus = 'requesting'
  },
  [types.MESSAGES_FAIL] (state) {
    state.checkoutStatus = null
  },
  [types.MESSAGES_SUCCESS] (state, data) {
    state.messages = data.Messages.reverse()
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
