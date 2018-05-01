import Vue from 'vue'
import store from '../store'

const API_URL = process.env.API_URL

export default {
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + store.getters['auth/getToken']
    }
  },
  get (url, params, headers = {}) {
    let authHeader = this.getAuthHeader()
    Object.assign(headers, authHeader)
    return Vue.http.get(
      API_URL + url,
      {
        params: params,
        headers: headers
      }
    )
  },
  post (url, body, headers = {}) {
    let authHeader = this.getAuthHeader()
    Object.assign(headers, authHeader)
    return Vue.http.post(
      API_URL + url,
      body,
      {
        headers: headers
      }
    )
  }
}
