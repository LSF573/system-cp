import Vue from 'vue'
import App from './App'
import router from './common/router'
import BootstrapVue from 'bootstrap-vue'
import globals from './globals'
import Popper from 'popper.js'
import store from './store'
import axios from 'axios'
import bus from './bus'
import addMultiselect from 'components/add-select/src'

if (process.env.NODE_ENV !== 'production') {
  require('./mock.js')
}

axios.defaults.baseURL = '/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let api = axios.create({
  baseURL: '/',
  timeout: 10000
})
Vue.component('addMultiselect', addMultiselect)
window.$api = api
window.$router = router
window.$bus = bus

// 注册个面包屑指令
Vue.directive('breadcrumbs', {
  inserted: function (el, binding) {
    let data = binding.value
    $bus.$emit('showBreadcrumbs', data)
    if (binding.modifiers.hide) {
      $bus.$emit('hideBreadcrumbs')
    }
  }
})

// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = false

Vue.use(BootstrapVue)

// Global RTL flag
Vue.mixin({
  data: globals
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
