import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import auth from './modules/auth'
import cordova from './modules/cordova'
import account from './modules/account'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    cordova,
    account
  },
  plugins: [createPersistedState()]
})
