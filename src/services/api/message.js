import Network from '../network.js'

export default {
  getMessages (creds) {
    return Network.post('api/Message/GetMessages', creds)
  },
  searchUsers (creds) {
    return Network.post('api/Message/GetMessages', creds)
  }
}
