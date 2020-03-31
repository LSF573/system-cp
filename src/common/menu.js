const checkAuthority = (key) => {
  // 如果是本地，出全部菜单
  if (process.env.NODE_ENV !== 'production') {
    return true
  }
  let authority = localStorage.getItem('authority') || ''
  return authority.indexOf(key) > -1
}

const tempMenus =[
  {
    name: '基础规范',
    module: 'norm',
    authority: checkAuthority('norm'),
    icon: 'pe-7s-note2',
    children: [{
      name: '元素规范',
      path: '/norm/element'
    }, {
      name: '布局规范',
      path: '/norm/layout'
    }]
  },
  {
    name: '控件使用',
    module: 'widget',
    authority: checkAuthority('widget'),
    icon: 'pe-7s-box2',
    children: [{
      name: '所有控件',
      path: '/widget/form'
    }, {
      name: '表格页面',
      path: '/widget/list'
    }]
  },
  {
    name: '弹窗',
    module: 'modal',
    authority: checkAuthority('modal'),
    path: '/modal',
    icon: 'pe-7s-browser'
  },
  {
    name: 'Icons',
    module: 'icons',
    authority: checkAuthority('icons'),
    path: '/icons',
    icon: 'pe-7s-ticket',
    children: [{
      name: 'Font Awesome 5',
      path: '/icons/font-awesome-5'
    }, {
      name: 'Ionicons',
      path: '/icons/ionicons'
    }, {
      name: 'Linearicons',
      path: '/icons/linearicons'
    }, {
      name: 'Open Iconic',
      path: '/icons/open-iconic'
    }, {
      name: 'Stroke Icons 7',
      path: '/icons/stroke-icons-7'
    }]
  },
  // {
  //   name: 'Test',
  //   module: 'test',
  //   authority: checkAuthority('test'),
  //   icon: 'ion-md-speedometer',
  //   children: [{
  //     name: 'Test',
  //     path: '/test/test-1'
  //   }]
  // }
  // {
  //   name: 'Dashboard',
  //   module: 'dashboard',
  //   authority: checkAuthority('dashboard'),
  //   path: '/dashboard',
  //   icon: 'ion-md-speedometer'
  // }, {
  //   name: '列表页模板',
  //   module: 'list',
  //   authority: checkAuthority('list'),
  //   path: '/list',
  //   icon: 'ion-md-speedometer'
  // }, {
  //   name: '表单模板',
  //   module: 'Form',
  //   authority: checkAuthority('form'),
  //   path: '/form',
  //   icon: 'ion-md-speedometer'
  // }, {
  //   name: '数据模板',
  //   module: 'Chart',
  //   authority: checkAuthority('chart'),
  //   path: '/chart',
  //   icon: 'ion-md-speedometer'
  // }
]

// 真实业务的菜单栏写在这里
let menuData = []

menuData = menuData.concat(tempMenus)

export default menuData
