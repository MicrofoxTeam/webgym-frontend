import Network from '../network.js'

export default {
  login (creds) {
    return Network.post('post', creds)
  },
  register () {

  },
  logout () {

  },
  refresh () {

  }
}
