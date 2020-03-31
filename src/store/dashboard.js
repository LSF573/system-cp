import { fetchDashboard } from '../services/dashboard'

const types = {
  SYNC_DASHBOARD: 'sync_dashboard'
}

let initState = () => ({
  users: [],

})

const state = initState()

const getters = {

}

const mutations = {
  [types.SYNC_DASHBOARD] (state, payload) {
    Object.assign(state, payload)
  }
}

const actions = {
  fetch ({ commit }, params) {
    return fetchDashboard(params)
      .then(res => res.data)
      .then(data => {
        console.log(data.users)
        commit(types.SYNC_DASHBOARD, data)
        $router.push({
          query: {
            tab: params.tab
          }
        })
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
