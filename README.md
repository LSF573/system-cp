### 项目生成
1. 直接clone，按需更改(复制粘贴跟服务端项目仓库合并)
2. 简易脚手架:
```
npm install git+ssh://git@git.corp.qianka.com:shi.junjie/qk-venus-cli.git -g
venus init <Project>
```
3. 项目生成后 手动添加样式组件依赖submodule
```
git submodule add git@git.corp.qianka.com:qianka/venusbase.git
```
4. 后续依赖有更改 可以手动更新
```
git submodule update --remote
```

### 一些简单说明
1. src/temp/* 是模板目录，项目init后，可以参考组件和布局等，开发完后，需要在menu.js和router.js注释掉引用，新建页面建议放入page文件夹下
2. 基础组件库为bootstrap-vue，参考文档：https://bootstrap-vue.js.org/

### 常见问题
1. 切页后样式错乱： page下每个新建页面建议用一个class包住，一个页面的scss全部放入这个class下面，否则容易出现切页样式冲突（为什么不用scoped，因为要叠组件样式）
```
<template>
  <div class="list-temp" v-breadcrumbs="breadCurmbs">
    ...
  </div>
</template>
<style lang='scss'>
  .list-temp {
    .top-tab {
      margin-bottom: 20px;
    }
    ...
  }
</style>
```

### 一些用法
#### 面包屑
展示：
```
v-breadcrumbs="[{ text: 'Admin', href: '#' }, { text: 'Manage', href: '#' }, { text: 'Library', active: true }]"
```
隐藏：
```
v-breadcrumbs.hide
```

#### 提示框
```
import Bootbox from 'components/bootbox/Index'
<Bootbox
  text="Are you sure?"
  ref="stop"
  :confirm-action="confirmAction"
/>
this.$refs.stop.show()
```
#### 部署
若沿用history路由机制，同时部署时nginx配置了前置路由，如'https://xxxxx.com/venus/' 需要将Router参数base和vue.config.js中publicPath配置手动更改掉
```
base: '/' => base: '/venus',
publicPath: '/' => publicPath: '/venus
```
