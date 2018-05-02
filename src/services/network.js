import axios from 'axios'
import store from '../store'

const HTTP = axios.create({
  baseURL: 'http://faustus12-002-site2.itempurl.com/',
  // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  headers: {'Content-Type': 'application/json'}
})

export default {
  /*
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
  .then(function (response) {
        alert(response)
        commit('set', { type: 'token', items: response })
      })
      .catch(function (error) {
        alert(error)
      })
  */
  post (url, body) {
    JSON.stringify(body)
    return HTTP.post(url, body)
  },
  get (url, body) {
    body.Token = store.getters['auth/getToken']
    return HTTP.get(url, {
      params: body
    })
  }
}