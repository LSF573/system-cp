import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import dashboard from './dashboard'
import user from './user'

Vue.use(Vuex)

const state = {
  permission: ''
}

const getters = {

}

const mutations = {
  updatePermission (state) {
    state.permission = '我是测试权限'
  }
}

const actions = {

}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    login,
    user,
    dashboard
  }
})

export default store
