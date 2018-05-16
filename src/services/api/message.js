import Network from '../network.js'

export default {
  getMessages (creds) {
    return Network.post('api/Message/GetMessages', creds)
  },
  searchUsers (creds) {
    return Network.post('api/UserInfo/SearchUser', creds)
  },
  removeMessage (creds) {
    return Network.delete('api/Message/RemoveMessage', creds)
  }
}
