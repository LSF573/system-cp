<template>
  <sidenav :orientation="orientation" :class="curClasses">

    <!-- Brand demo (see src/demo.css) -->
    <div class="app-brand demo custom" v-if="orientation !== 'horizontal'">
      <img class="sidenav-logo" style="width: 102px;" :src="`${baseUrl}img/logo.png`" alt />
      <router-link to="/" class="app-brand-text demo sidenav-text font-weight-normal ml-2"></router-link>
      <a href="javascript:void(0)" class="layout-sidenav-toggle sidenav-link text-large ml-auto" @click="toggleSidenav()">
        <i class="ion ion-md-menu align-middle"></i>
      </a>
    </div>

    <!-- Links -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">
      <!-- <sidenav-router-link :icon="items.icon" :to="items.path" :exact="true" v-if="items.authority && !items.children">{{items.name}}</sidenav-router-link> -->
      <sidenav-menu icon="ion ion-md-speedometer"
        v-for="(items, index) in menus" :key="index" style="width: 260px"
        :active="isMenuActive(items.module)"
        :open="isMenuOpen(items.module)"
        :icon="items.icon"
        v-if="items.authority && items.children"
        >
        <template slot="link-text">{{items.name}}</template>
        <div v-for="(item, key) in items.children" :key="key">
          <sidenav-router-link :to="item.path" :exact="true">{{item.name}}</sidenav-router-link>
        </div>
      </sidenav-menu>
    </div>
  </sidenav>
</template>
<style lang='scss'>
@media (min-width: 992px) {
  .layout-collapsed:not(.layout-offcanvas):not(.layout-fixed-offcanvas) .sidenav-vertical:not(:hover) .sidenav-inner .sidenav-icon {
    margin-left: -1.975rem;
    width: 4.375rem !important;
    text-align: center !important;
  }
}

.sidenav-vertical .sidenav-menu {
  padding: 4px 0 !important;
}
</style>
<script>
import { Sidenav, SidenavLink, SidenavRouterLink, SidenavMenu, SidenavHeader, SidenavBlock, SidenavDivider } from 'vendor/libs/sidenav'
import menuData from '../common/menu'

export default {
  name: 'app-layout-sidenav',
  components: {
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider
  },

  props: {
    orientation: {
      type: String,
      default: 'vertical'
    }
  },

  data () {
    return {
      menus: menuData
    }
  },

  computed: {
    curClasses () {
      let bg = this.layoutSidenavBg

      if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
        bg = bg
          .replace(' sidenav-dark', '')
          .replace(' sidenav-light', '')
          .replace('-darker', '')
          .replace('-dark', '')
      }

      return `bg-${bg} ` + (
        this.orientation !== 'horizontal'
          ? 'layout-sidenav'
          : 'layout-sidenav-horizontal container-p-x flex-grow-0'
      )
    }
  },

  methods: {
    isMenuActive (url) {
      return this.$route.path.indexOf(url) === 0
    },

    isMenuOpen (url) {
      return this.$route.path.indexOf(url) === 1 && this.orientation !== 'horizontal'
    },

    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
    }
  },
  mounted() {
    console.log(this.menuData)
  },
}
</script>
