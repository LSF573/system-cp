<template>
  <div class="list-temp" v-breadcrumbs="breadCurmbs">
    <!--<h4 class="font-weight-bold py-3 mb-4">
      列表页
    </h4>-->
    <div class="top-tab header-m-b">
      <b-nav pills class="nav-sm">
      <b-nav-item :active="topTabIndex === 1" @click="topTabClick(1)">标签1</b-nav-item>
      <b-nav-item :active="topTabIndex === 2" @click="topTabClick(2)">标签2</b-nav-item>
      <b-nav-item :active="topTabIndex === 3" @click="topTabClick(3)">标签3</b-nav-item>
    </b-nav>
    </div>


    <div class="header-m-b">
      <label class="mr-19">
        <span class="action-title-m-r">任务</span>
        <b-input style="display: inline-block;width: 15rem;background-color: #F8F8F8;" placeholder="Text input" />
      </label>
      <label class="mr-19">
        <span class="action-title-m-r">搜索</span>
        <flat-pickr v-model="range" :config="rangeConfig" placeholder="Range picker" />
      </label>
      <b-btn variant="primary" @click="search()">搜索</b-btn>
      <div style="display: inline-block;float: right;">
        <b-btn variant="default" class="mr-19" v-b-modal.modals-default>次要操作</b-btn>
        <b-btn variant="primary">主要操作</b-btn>
      </div>
      <div style="clear: both;"></div>
    </div>

    <b-card no-body>
      <b-card-body class="pl-0 pb-0">
        <b-nav tabs>
          <b-nav-item :active="navIndex == 1" @click="navClick(1)">全部 <b-badge variant="primary">22</b-badge></b-nav-item>
          <b-nav-item :active="navIndex == 2" @click="navClick(2)">正常 <b-badge variant="outline-success">22</b-badge></b-nav-item>
          <b-nav-item :active="navIndex == 3" @click="navClick(3)">停用</b-nav-item>
        </b-nav>
      </b-card-body>

      <b-table
        :items="productsData"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :striped="true"
        :bordered="true"
        :current-page="currentPage"
        :per-page="perPage"
        class="products-table card-table">

        <template slot="HEAD_radio" slot-scope="data">
          <b-checkbox @click.native="selectAll()" v-model="allSelected"/>
        </template>

        <template slot="radio" slot-scope="data">
          <b-checkbox />
        </template>

        <template slot="actions" slot-scope="data">
            <div class="action-btns">
            <a href="javascript:void(0)">编辑</a>
            <a href="javascript:void(0)"续总数</a>
          </div>
        </template>
      </b-table>

      <b-card-body class="pt-0 pb-3">
        <div class="row">
          <div class="col-sm text-sm-left text-center pt-3">
            <span class="text-muted" v-if="totalItems">Page {{ currentPage }} of {{ totalPages }}</span>
          </div>
          <div class="col-sm pt-3">
            <b-pagination class="justify-content-center justify-content-sm-end m-0"
              v-if="totalItems"
              v-model="currentPage"
              :total-rows="totalItems"
              :per-page="perPage"
              size="sm" />
          </div>
        </div>
      </b-card-body>
    </b-card>

    <b-modal
      id="modals-default"
      :size="null"
      title="添加员工"
      >
      <b-form-group horizontal horizontal label="请选择管理员">
        <multiselect
          v-model="groupValue"
          :options="groupOptions"
          :multiple="true"
          group-values="libs"
          group-label="language"
          placeholder="Type to search"
          track-by="name"
          label="name" />
      </b-form-group>
    </b-modal>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>
<style lang='scss'>
  @import 'vendor/libs/vue-multiselect/vue-multiselect.scss';
  @import 'vendor/libs/vue-input-tag/vue-input-tag.scss';

  .list-temp {
    .finish-status {
      color: green !important;
    }

    .flatpickr-input {
      &.form-control {
        width: 260px;
        display: inline-block;
      }
    }
  }

</style>
<script>
import * as numeral from 'numeral'
import flatPickr from 'vue-flatpickr-component'
import Multiselect from 'vue-multiselect'

const options3 = [{
  language: 'JavaScript',
  libs: [
    { name: 'Vue.js', category: 'Front-end' },
    { name: 'Angular', category: 'Front-end' },
    { name: 'React', category: 'Front-end' },
    { name: 'Meteor', category: 'Front-end' },
    { name: 'Adonis', category: 'Front-end' }
  ]
}, {
  language: 'Ruby',
  libs: [
    { name: 'Rails', category: 'Backend' },
    { name: 'Sinatra', category: 'Backend' },
    { name: 'Padrino', category: 'Backend' },
    { name: 'Hanami', category: 'Backend' }
  ]
}, {
  language: 'PHP',
  libs: [
    { name: 'Laravel', category: 'Backend' },
    { name: 'Symfony', category: 'Backend' },
    { name: 'CakePHP', category: 'Backend' },
    { name: 'Zend Framework', category: 'Backend' },
    { name: 'Phalcon', category: 'Backend' }
  ]
}, {
  language: 'Elixir',
  libs: [
    { name: 'Phoenix', category: 'Backend' },
    { name: 'Sugar', category: 'Backend' }
  ]
}, {
  language: 'Go',
  libs: [
    { name: 'Beego', category: 'Backend' },
    { name: 'Martini', category: 'Backend' },
    { name: 'Gorilla', category: 'Backend' },
    { name: 'Revel', category: 'Backend' }
  ]
}]

export default {
  components: {
    flatPickr,
    Multiselect
  },
  data () {
    return {
      breadCurmbs: [{ text: '列表页', active: true }],
      topTabIndex: 1,
      // Options
      dataUrl: 'json/pages_e-commerce_product-list.json',
      searchKeys: ['title', 'id', 'price'],
      sortBy: 'id',
      sortDesc: true,
      perPage: 5,

      fields: [
        { key: 'radio', label: '', tdClass: 'py-2 align-middle' },
        { key: 'task_id', label: '任务编号', sortable: true, tdClass: 'py-2 align-middle ' },
        { key: 'app_id', label: 'appstore_id', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'title', label: '应用标题', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'icon', label: '图标', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'device', label: '平台', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'status', label: '状态', sortable: true, tdClass: 'py-2 align-middle finish-status' },
        { key: 'keywords', label: '关键词', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'actions', label: '操作', sortable: true, tdClass: 'py-2 align-middle text-nowrap' }
      ],

      // Filters
      filterSales: [10, 834],
      filterPrice: [10, 2000],
      filterStatus: 'Any',

      // Filter options
      filterSalesOptions: {
        step: 10,
        connect: true,
        tooltips: true,
        range: {
          'min': [ 10 ],
          'max': [ 834 ]
        },
        format: {
          to: function (value) {
            return Math.round(value)
          },
          from: function (value) {
            return value
          }
        }
      },
      filterPriceOptions: {
        step: 50,
        connect: true,
        tooltips: true,
        range: {
          'min': [ 10 ],
          'max': [ 2000 ]
        },
        format: {
          to: function (value) {
            return numeral(value).format('$0,0')
          },
          from: function (value) {
            return value.replace(/[$,]/g, '')
          }
        }
      },
      productsData: [{
        task_id: 74637853,
        app_id: 74637853,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637854,
        app_id: 74637854,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637855,
        app_id: 74637855,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637856,
        app_id: 74637856,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637857,
        app_id: 74637857,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637858,
        app_id: 74637858,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637858,
        app_id: 74637858,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637858,
        app_id: 74637858,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637858,
        app_id: 74637858,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637858,
        app_id: 74637858,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637858,
        app_id: 74637858,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637858,
        app_id: 74637858,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }, {
        task_id: 74637858,
        app_id: 74637858,
        title: '平安自主开户',
        icon: '',
        device: 'iPhone',
        status: '已经完成',
        keywords: '关键词'
      }],
      originalProductsData: [],

      currentPage: 1,
      allSelected: false,
      selectedItems: [0, 0, 0, 0, 0, 0],
      navIndex: 1,
      groupValue: [],
      groupOptions: options3,
      options: [
        { text: '选项1', value: 1 },
        { text: '选项2', value: 2 },
        { text: '选项3', value: 3 }
      ],
      rangeConfig: {
        mode: 'range',
        altInput: true,
        animate: true
      },
      range: ''
    }
  },
  computed: {
    totalItems () {
      return this.productsData.length
    },
    totalPages () {
      return Math.ceil(this.totalItems / this.perPage)
    }
  },
  mounted () {
    let tab = this.$route.query.tab
    if (tab === 'all') {
      this.navIndex = 1
    } else if (tab === 'normal') {
      this.navIndex = 2
    } else {
      this.navIndex = 3
    }
  },
  methods: {
    topTabClick (index) {
      this.topTabIndex = index
    },
    selectAll () {
      this.allSelected = !this.allSelected
    },
    navClick (index) {
      this.navIndex = index
      let tab = this.formatTab(index)
      let params = {}
      params.tab = tab
    },
    formatTab (index) {
      let tab
      if (index === 1) {
        tab = 'all'
      } else if (index === 2) {
        tab = 'normal'
      } else {
        tab = 'disabled'
      }
      return tab
    },
    search () {
      console.log(this.range)
    }
  }
}
</script>
