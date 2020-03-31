let initState = () => ({
  status: 0
})

const state = initState()

const getters = {

}

const mutations = {

}

const actions = {
  login ({ commit }, params) {
    $api.post('/login')
      .then(res => res && res.data)
      .then(data => {
        if (data.status === 1) {
          $router.push('/dashboard')
        }
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
