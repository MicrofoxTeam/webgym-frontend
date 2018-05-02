import Network from '../network.js'

export default {
  login (creds) {
    return Network.post('api/Login', creds)
  },
  register (creds) {
    return Network.post('api/Register', creds)
  },
  logout (creds) {
    return Network.post('api/Logout', creds)
  },
  refresh () {

  }
}
