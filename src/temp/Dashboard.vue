<template>
  <div class="dashboard-temp" v-breadcrumbs.hide>
    <b-btn class="header-m-b" variant="primary" v-b-modal.modals-default>添加员工</b-btn>

    <b-card no-body>
      <b-card-body class="pl-0 pb-0">
        <div class="actions">
          <b-nav tabs>
            <b-nav-item :active="navIndex == 1" @click="navClick(1)">全部 <b-badge variant="primary">22</b-badge></b-nav-item>
            <b-nav-item :active="navIndex == 2" @click="navClick(2)">正常 <b-badge variant="outline-success">22</b-badge></b-nav-item>
            <b-nav-item :active="navIndex == 3" @click="navClick(3)">停用</b-nav-item>
          </b-nav>
          <b-form inline class="search">
            <!--<b-select class="custom-select mr-sm-2 mb-2 mb-sm-0" :value="selectValue" :options="['选择部门','One','Two','Three']" />-->
            <multiselect
              style="width: 100px; margin-right: 10px;"
              v-model="singleStringValue"
              :options="singleStringOptions"
              :searchable="false"
              :show-labels="false"
              placeholder="Pick a value"
              :disabled="false" />
            <!-- Search -->
            <!--<label class="nav-item navbar-text navbar-search-box p-0 active">
              <span class="navbar-search-input pl-2">
                <input type="text" class="form-control navbar-text mx-2" v-model="searchValue" placeholder="请输入姓名/职位" style="width:200px;border-bottom: 1px solid red;">
              </span>
              <i class="ion ion-ios-search navbar-icon align-middle" @click="search()"></i>
            </label>-->
            <b-form-group>
              <b-input placeholder="数字文本框" v-model="searchValue" />
              <i class="ion ion-ios-search navbar-icon align-middle" @click="search()"></i>
            </b-form-group>
          </b-form>
        </div>
      </b-card-body>

      <b-table
        :items="users"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :striped="true"
        :bordered="true"
        :current-page="currentPage"
        :per-page="perPage"
        class="card-table">

        <template slot="操作" slot-scope="data">
          <div class="action-btns">
            <a href="javascript:void(0)" v-b-modal.modals-default>编辑</a>
            <a href="javascript:void(0)" @click="stopAction()">停用</a>
            <a href="javascript:void(0)" @click="resetAction()">重置密码</a>
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

    <!-- Modal template -->
    <b-modal
      id="modals-default"
      :size="null"
      title="添加员工"
      @ok="okAction()"
      @cancel="cancelAction()"
      >
      <b-form-group horizontal label="姓名">
        <b-input v-model="userData.username" class="mb-1" />
      </b-form-group>
      <b-form-group horizontal label="部门">
        <b-input v-model="userData.department" class="mb-1" />
      </b-form-group>
      <b-form-group horizontal label="职位">
        <b-input v-model="userData.position" class="mb-1" />
      </b-form-group>
      <b-form-group horizontal label="邮箱">
        <b-input v-model="userData.email" class="mb-1" />
      </b-form-group>
      <b-form-group horizontal label="考勤号">
        <b-input v-model="userData.number" class="mb-1" />
      </b-form-group>
      <b-form-group horizontal label="入职时间">
        <flat-pickr v-model="date" :config="dateConfig" placeholder="Range picker"  />
      </b-form-group>
      <b-form-group horizontal label="转正时间">
        <flat-pickr v-model="date" :config="dateConfig" placeholder="Range picker"  />
      </b-form-group>
      <b-form-group horizontal label="状态">
        <b-radio-group v-model="userData.status" :options="userStatusOptions" />
      </b-form-group>
    </b-modal>
    <Bootbox
      text="是否确认停用该员工账号？"
      ref="stop"
      :confirm-action="confirmAction"
    />
    <Bootbox
      text="密码已重置"
      ref="reset"
      :confirm-action="confirmAction"
    />
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>
<style lang='scss'>
@import 'vendor/libs/vue-multiselect/vue-multiselect.scss';
@import 'vendor/libs/vue-input-tag/vue-input-tag.scss';

.dashboard-temp {
  .actions {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .action-btns {
    display: flex;
    justify-content: space-around;
  }
}
</style>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Bootbox from 'components/bootbox/Index'
import Multiselect from 'vue-multiselect'
import flatPickr from 'vue-flatpickr-component'

const options1 = [
  'Vue.js', 'Angular', 'React', 'Meteor', 'Adonis', 'Rails', 'Sinatra', 'Padrino',
  'Hanami', 'Laravel', 'Symfony', 'CakePHP', 'Zend Framework', 'Phalcon', 'Phoenix',
  'Sugar', 'Beego', 'Martini', 'Gorilla', 'Revel'
]

export default {
  components: {
    Bootbox,
    Multiselect,
    flatPickr
  },
  data () {
    return {
      sortBy: 'id',
      sortDesc: false,
      perPage: 3,
      fields: [
        { key: '姓名', sortable: true, tdClass: 'align-middle' },
        { key: '部门', sortable: true, tdClass: 'align-middle' },
        { key: '职位', sortable: true, tdClass: 'align-middle' },
        { key: '邮箱', sortable: true, tdClass: 'align-middle' },
        { key: '状态', sortable: true, tdClass: 'align-middle' },
        { key: '操作', sortable: true, tdClass: 'text-nowrap align-middle text-center' }
      ],
      currentPage: 1,
      userData: {
        username: '',
        department: '',
        position: '',
        email: '',
        number: '',
        entryTime: '',
        leaveTime: '',
        status: 1
      },
      userStatusOptions: [
        { text: '正常', value: 1 },
        { text: '停用', value: 2 }
      ],
      navIndex: 1,
      searchValue: '',
      singleStringValue: '',
      singleStringOptions: options1,
      date: '',
      dateConfig: {
        altInput: true,
        dateFormat: 'Y-m-d'
      },
    }
  },
  computed: {
    ...mapState('dashboard', [
      'users'
    ]),
    totalItems () {
      return this.users.length
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
    let params = {}
    params.tab = tab
    this.fetch(params)
    this.updatePermission()
  },

  methods: {
    ...mapActions('dashboard', [
      'fetch'
    ]),
    ...mapMutations([
      'updatePermission'
    ]),
    navClick (index) {
      this.navIndex = index
      let tab = this.formatTab(index)
      let params = {}
      params.tab = tab
      this.fetch(params)
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
      // TODO: 查询逻辑
      console.log(this.singleStringValue, this.searchValue)
    },
    stopAction () {
      this.$refs.stop.show()
    },
    resetAction () {
      this.$refs.reset.show()
    },
    confirmAction () {
      console.log('我确认了')
    },
    okAction () {
      console.log('我OK了')
    },
    cancelAction () {
      console.log('我cancel了')
    }
  }
}
</script>
