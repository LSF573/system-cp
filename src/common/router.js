import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Layout from '@/layout/Layout'
import globals from '@/globals'

// 模板的路由, 开发完请注释
const tempRoute = [
  {
    path: '/norm',
    component: Layout,
    meta: {
      requiresAuth: false
    },
    children: [{
      path: 'element',
      component: () => import('@/temp/norm/Element')
    }, {
      path: 'layout',
      component: () => import('@/temp/norm/Layout')
    }]
  },
  {
    path: '/widget',
    component: Layout,
    meta: { requiresAuth: false },
    children: [{
      path: 'form',
      component: () => import('@/temp/widget/Form')
    }, {
      path: 'list',
      component: () => import('@/temp/widget/List')
    }]
  },
  {
    path: '/modal',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/temp/modal/Modal')
    }]
  },
  {
    path: '/icons',
    component: Layout,
    children: [{
      path: 'font-awesome-5',
      component: () => import('@/temp/icons/FontAwesome5')
    }, {
      path: 'ionicons',
      component: () => import('@/temp/icons/Ionicons')
    }, {
      path: 'linearicons',
      component: () => import('@/temp/icons/Linearicons')
    }, {
      path: 'open-iconic',
      component: () => import('@/temp/icons/OpenIconic')
    }, {
      path: 'stroke-icons-7',
      component: () => import('@/temp/icons/StrokeIcons7')
    }]
  },
  {
    path: '/test',
    component: Layout,
    meta: { requiresAuth: true },
    children: [{
      path: 'test-1',
      component: () => import('@/temp/Test1')
    }]
  }
  // {
  //   path: '/',
  //   component: Layout,
  //   meta: { requiresAuth: false },
  //   children: [{
  //     path: '/dashboard',
  //     component: () => import('@/temp/Dashboard')
  //   }]
  // }, {
  //   path: '/list',
  //   component: Layout,
  //   children: [{
  //     path: '',
  //     component: () => import('@/temp/list/List')
  //   }]
  // }, {
  //   path: '/form',
  //   component: Layout,
  //   children: [{
  //     path: '',
  //     component: () => import('@/temp/form/Form')
  //   }]
  // }, {
  //   path: '/chart',
  //   component: Layout,
  //   children: [{
  //     path: '',
  //     component: () => import('@/temp/chart/Chart')
  //   }]
  // }, {
  //   path: '/test',
  //   component: Layout,
  //   meta: { requiresAuth: true },
  //   children: [{
  //     path: 'test-1',
  //     component: () => import('@/temp/Test1')
  //   }]
  // }
]

let pageRoutes = [{
  path: '/no-permission',
  component: () => import('@/page/error/Error')
}, {
  path: '/login',
  component: () => import('@/page/login/Login')
}]

// 开发完记得注释
pageRoutes = pageRoutes.concat(tempRoute)

Vue.use(Router)
Vue.use(Meta)

const ROUTES = [
  // Default route
  { path: '', redirect: '/widget/form' }
].concat(pageRoutes)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: ROUTES
})

router.afterEach(() => {
  // Remove initial splash screen
  const splashScreen = document.querySelector('.app-splash-screen')
  if (splashScreen) {
    splashScreen.style.opacity = 0
    setTimeout(() => splashScreen && splashScreen.parentNode.removeChild(splashScreen), 300)
  }

  // On small screens collapse sidenav
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }

  // Scroll to top of the page
  globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let authority = localStorage.getItem('authority') || ''
    console.log(authority)
    if (!authority.indexOf(to.path) > -1) {
      next({
        path: '/no-permission'
      })
    } else {
      next()
    }
    return
  }
  // Set loading state
  document.body.classList.add('app-loading')

  // Add tiny timeout to finish page transition
  setTimeout(() => next(), 10)
})

export default router
