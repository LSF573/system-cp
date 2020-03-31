<template>
  <div class="list-temp" v-breadcrumbs="breadCurmbs">
    <!-- <b-btn variant="primary" class="header-m-b">主要操作</b-btn> -->
    <div class="top-tab">
      <b-nav tabs>
        <b-nav-item :active="topTabIndex === 1" @click="topTabClick(1)">表格样式1</b-nav-item>
        <b-nav-item :active="topTabIndex === 2" @click="topTabClick(2)">表格样式2</b-nav-item>
        <b-nav-item :active="topTabIndex === 3" @click="topTabClick(3)">表格卡片</b-nav-item>        
      </b-nav>
    </div>
    <!-- 表格样式1 -->
    <b-card class="table-block-container card-body-height-auto" v-if="topTabIndex === 1">
      <b-card-body class="p-0">
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">单选标签</label>
          <div class="i-b mr-19">
            <b-nav pills class="nav-sm tab-custom">
              <b-nav-item :active="tabIndex === 1" @click="tabClick(1)">选项1</b-nav-item>
              <b-nav-item :active="tabIndex === 2" @click="tabClick(2)">选项2</b-nav-item>
              <b-nav-item :active="tabIndex === 3" @click="tabClick(3)">选项3</b-nav-item>
            </b-nav>
          </div>
        </div>
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">搜索框</label>
          <div class="i-b mr-19">
            <b-input placeholder="搜索名称" />
          </div>
        </div>
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">下拉选择</label>
          <div class="i-b">
            <multiselect
              class="i-b mr-19"
              v-model="singleStringValue"
              :options="singleStringOptions"
              :searchable="false"
              :show-labels="false"
              placeholder="下拉选择"
              :disabled="false" />
          </div>
        </div>
        <b-btn size="sm" variant="default" @click="search()">查询</b-btn>
      </b-card-body>

      <b-card-body class="p-0">
        <div class="i-b mr-19" style="vertical-align: top;">
          <multiselect
            class="i-b"
            v-model="singleStringValue"
            :options="singleStringOptions"
            :searchable="false"
            :show-labels="false"
            placeholder="下拉选择"
            :disabled="false" />
        </div>
      </b-card-body>

      <!-- 表格样式1 表头固定 无左右边框 -->
      <div class="table-wrapper table-border b-table-sticky-header">
        <b-table
          :items="productsData"
          :fields="fields"
          :striped="true"
          :per-page="perPage"
          class="card-table">

          <template slot="icon" slot-scope="data">
            <div class="table-icon"></div>
          </template>

          <template slot="actions" slot-scope="data">
              <div class="action-btns">
              <a href="javascript:void(0)" class="mr-19">编辑</a>
              <a href="javascript:void(0)">删除</a>
            </div>
          </template>
        </b-table>
      </div>

      <b-card-body class="p-0">
        <div class="row">
          <div class="col-sm text-sm-left text-center pt-3">
            <span class="text-muted" v-if="totalItems">当前 {{ currentPage }} / {{ totalPages }}页</span>
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

    <!-- 表格样式2 -->
    <b-card class="table-block-container card-body-height-auto" v-if="topTabIndex === 2">
      <b-card-body class="p-0">
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">单选标签</label>
          <div class="i-b mr-19">
            <b-nav pills class="nav-sm tab-custom">
              <b-nav-item :active="tabIndex === 1" @click="tabClick(1)">选项1</b-nav-item>
              <b-nav-item :active="tabIndex === 2" @click="tabClick(2)">选项2</b-nav-item>
              <b-nav-item :active="tabIndex === 3" @click="tabClick(3)">选项3</b-nav-item>
            </b-nav>
          </div>
        </div>
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">搜索框</label>
          <div class="i-b mr-19">
            <b-input placeholder="搜索名称" />
          </div>
        </div>
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">下拉选择</label>
          <div class="i-b">
            <multiselect
              class="i-b mr-19"
              v-model="singleStringValue"
              :options="singleStringOptions"
              :searchable="false"
              :show-labels="false"
              placeholder="下拉选择"
              :disabled="false" />
          </div>
        </div>
        <b-btn size="sm" variant="default" @click="search()">查询</b-btn>
      </b-card-body>

      <b-card-body class="p-0">
        <div class="i-b mr-19" style="vertical-align: top;">
          <multiselect
            class="i-b"
            v-model="singleStringValue"
            :options="singleStringOptions"
            :searchable="false"
            :show-labels="false"
            placeholder="下拉选择"
            :disabled="false" />
        </div>
      </b-card-body>

      <!-- 表格样式2 表头固定 有左右边框-->
      <div class="table-wrapper table-border">
        <b-table
          :items="productsData"
          :fields="fields2"
          :striped="true"
          :bordered="true"
          :per-page="perPage"
          responsive
          class="card-table b-table-sticky-header">

          <template slot="icon" slot-scope="data">
            <div class="table-icon"></div>
          </template>

          <template slot="actions" slot-scope="data">
              <div class="action-btns">
              <a href="javascript:void(0)" class="mr-19">编辑</a>
              <a href="javascript:void(0)">删除</a>
            </div>
          </template>
        </b-table>
      </div>

      <b-card-body class="p-0">
        <div class="row">
          <div class="col-sm text-sm-left text-center pt-3">
            <span class="text-muted" v-if="totalItems">当前 {{ currentPage }} / {{ totalPages }}页</span>
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

    <!-- 表格卡片 -->
    <b-card class="table-block-container mb-24" v-if="topTabIndex === 3">
      <b-card-body class="p-0">
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">单选标签</label>
          <div class="i-b mr-19">
            <b-nav pills class="nav-sm tab-custom">
              <b-nav-item :active="tabIndex === 1" @click="tabClick(1)">选项1</b-nav-item>
              <b-nav-item :active="tabIndex === 2" @click="tabClick(2)">选项2</b-nav-item>
              <b-nav-item :active="tabIndex === 3" @click="tabClick(3)">选项3</b-nav-item>
            </b-nav>
          </div>
        </div>
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">搜索框</label>
          <div class="i-b mr-19">
            <b-input placeholder="搜索名称" />
          </div>
        </div>
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">下拉选择</label>
          <div class="i-b">
            <multiselect
              class="i-b mr-19"
              v-model="singleStringValue"
              :options="singleStringOptions"
              :searchable="false"
              :show-labels="false"
              placeholder="下拉选择"
              :disabled="false" />
          </div>
        </div>
        <b-btn size="sm" variant="default" @click="search()">查询</b-btn>
      </b-card-body>

      <b-card-body class="p-0">
        <div class="i-b mr-19" style="vertical-align: top;">
          <multiselect
            class="i-b"
            v-model="singleStringValue"
            :options="singleStringOptions"
            :searchable="false"
            :show-labels="false"
            placeholder="下拉选择"
            :disabled="false" />
        </div>
      </b-card-body>

      <!-- 表格样式2 -->
      <div class="table-wrapper">
        <b-table
          :items="productsData"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :striped="true"
          :bordered="true"
          :current-page="currentPage"
          :per-page="perPage2"
          class="card-table">

          <template slot="icon" slot-scope="data">
            <div class="table-icon"></div>
          </template>

          <template slot="actions" slot-scope="data">
              <div class="action-btns">
              <a href="javascript:void(0)" class="mr-19">编辑</a>
              <a href="javascript:void(0)">删除</a>
            </div>
          </template>
        </b-table>
      </div>

      <b-card-body class="p-0">
        <div class="row">
          <div class="col-sm text-sm-left text-center pt-3">
            <span class="text-muted" v-if="totalItems">当前 {{ currentPage }} / {{ totalPages }}页</span>
          </div>
          <div class="col-sm pt-3">
            <b-pagination class="justify-content-center justify-content-sm-end m-0"
              v-if="totalItems"
              v-model="currentPage"
              :total-rows="totalItems"
              :per-page="perPage2"
              size="sm" />
          </div>
        </div>
      </b-card-body>
    </b-card>

    <b-card class="table-block-container mb-24" v-if="topTabIndex === 3">
      <b-card-body class="p-0">
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">单选标签</label>
          <div class="i-b mr-19">
            <b-nav pills class="nav-sm tab-custom">
              <b-nav-item :active="tabIndex === 1" @click="tabClick(1)">选项1</b-nav-item>
              <b-nav-item :active="tabIndex === 2" @click="tabClick(2)">选项2</b-nav-item>
              <b-nav-item :active="tabIndex === 3" @click="tabClick(3)">选项3</b-nav-item>
            </b-nav>
          </div>
        </div>
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">搜索框</label>
          <div class="i-b mr-19">
            <b-input placeholder="搜索名称" />
          </div>
        </div>
        <div class="i-b">
          <label class="col-sm-3 col-form-label label-in-table">下拉选择</label>
          <div class="i-b">
            <multiselect
              class="i-b mr-19"
              v-model="singleStringValue"
              :options="singleStringOptions"
              :searchable="false"
              :show-labels="false"
              placeholder="下拉选择"
              :disabled="false" />
          </div>
        </div>
        <b-btn size="sm" variant="default" @click="search()">查询</b-btn>
      </b-card-body>

      <b-card-body class="p-0">
        <div class="i-b mr-19" style="vertical-align: top;">
          <multiselect
            class="i-b"
            v-model="singleStringValue"
            :options="singleStringOptions"
            :searchable="false"
            :show-labels="false"
            placeholder="下拉选择"
            :disabled="false" />
        </div>
      </b-card-body>

      <div class="table-wrapper table-border">
        <b-table
          :items="productsData"
          :fields="fields2"
          :striped="true"
          :per-page="perPage2"
          class="card-table">

          <template slot="icon" slot-scope="data">
            <div class="table-icon"></div>
          </template>

          <template slot="app_id" slot-scope="data">
            <div>{{data.item.app_id}}</div>
            <div>{{data.item.title}}</div>
          </template>

          <template slot="actions" slot-scope="data">
              <div class="action-btns">
              <a href="javascript:void(0)" class="mr-19">编辑</a>
              <a href="javascript:void(0)">删除</a>
            </div>
          </template>
        </b-table>
      </div>

      <b-card-body class="p-0">
        <div class="row">
          <div class="col-sm text-sm-left text-center pt-3">
            <span class="text-muted" v-if="totalItems">当前 {{ currentPage }} / {{ totalPages }}页</span>
          </div>
          <div class="col-sm pt-3">
            <b-pagination class="justify-content-center justify-content-sm-end m-0"
              v-if="totalItems"
              v-model="currentPage"
              :total-rows="totalItems"
              :per-page="perPage2"
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

const options1 = [
  'Vue.js', 'Angular', 'React', 'Meteor', 'Adonis', 'Rails', 'Sinatra', 'Padrino',
  'Hanami', 'Laravel', 'Symfony', 'CakePHP', 'Zend Framework', 'Phalcon', 'Phoenix',
  'Sugar', 'Beego', 'Martini', 'Gorilla', 'Revel'
]

export default {
  components: {
    flatPickr,
    Multiselect
  },
  data () {
    return {
      breadCurmbs: [{ text: '表格页面', href: '#'}],
      topTabIndex: 1,
      tabIndex: 1,
      // Options
      dataUrl: 'json/pages_e-commerce_product-list.json',
      searchKeys: ['title', 'id', 'price'],
      sortBy: 'id',
      sortDesc: true,
      perPage: 100,
      perPage2: 5,
      options: [
        { text: '选项1', value: 1 },
        { text: '选项2', value: 2 },
        { text: '选项3', value: 3 }
      ],

      fields: [
        { key: 'task_id', label: '任务编号', sortable: true, tdClass: 'py-2 align-middle ' },
        { key: 'app_id', label: 'appstore_id', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'title', label: '应用名称', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'icon', label: '图标', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'keywords', label: '关键词', sortable: true, tdClass: 'py-2 align-middle' },        
        { key: 'start_time', label: '开始时间', sortable: true, tdClass: 'py-2 align-middle' },        
        // { key: 'device', label: '平台', sortable: true, tdClass: ' align-middle' },
        // { key: 'status', label: '状态', sortable: true, tdClass: ' align-middle finish-status' },
        { key: 'actions', label: '操作', sortable: true, tdClass: 'py-2 align-middle text-nowrap' }
      ],

      fields2: [
        { key: 'task_id', label: '任务编号', sortable: true, tdClass: 'py-2 align-middle ' },
        { key: 'app_id', label: 'appstore_id', sortable: true, tdClass: 'py-2 align-middle two-lines' },
        { key: 'title', label: '应用名称', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'icon', label: '图标', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'keywords', label: '关键词', sortable: true, tdClass: 'py-2 align-middle' },        
        { key: 'start_time', label: '开始时间', sortable: true, tdClass: 'py-2 align-middle' },        
        // { key: 'device', label: '平台', sortable: true, tdClass: ' align-middle' },
        // { key: 'status', label: '状态', sortable: true, tdClass: ' align-middle finish-status' },
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
      singleStringValue: '',
      singleStringOptions: options1,
      productsData: [
        {
          task_id: 74637853,
          app_id: 74637853,
          title: '平安自主开户',
          icon: '1',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637854,
          app_id: 74637854,
          title: '平安自主开户',
          icon: '2',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637855,
          app_id: 74637855,
          title: '平安自主开户',
          icon: '3',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637856,
          app_id: 74637856,
          title: '平安自主开户',
          icon: '4',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637857,
          app_id: 74637857,
          title: '平安自主开户',
          icon: '5',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '6',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        },  {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '7',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '8',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '9',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '10',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '10',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '10',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '10',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }, {
          task_id: 74637858,
          app_id: 74637858,
          title: '平安自主开户',
          icon: '',
          device: 'iPhone',
          status: '已经完成',
          keywords: '关键词',
          start_time: '2019/09/10 18:00'
        }
      ],
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
    tabClick (index) {
      this.tabIndex = index
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
      console.log(this.range) // for test
    }
  }
}
</script>
