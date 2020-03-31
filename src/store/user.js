import { fetchUser } from '../services/user'

const types = {
  SYNC_USER: 'sync_user'
}

let initState = () => ({
  userName: ''
})

const state = initState()

const getters = {

}

const mutations = {
  [types.SYNC_USER] (state, payload) {
    Object.assign(state, payload)
  }
}

const actions = {
  fetchUser ({ commit }, params) {
    return fetchUser(params)
      .then(res => res.data)
      .then(data => {
        commit(types.SYNC_USER, data)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
