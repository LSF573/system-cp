<template>
  <div v-breadcrumbs="breadCrumbs" class="form-temp">
    <!---按钮类控件-->
    <b-card header="按钮类控件" header-tag="h6" class="mb-24">
      <b-form-group horizontal label="表单操作弹框">
        <b-btn variant="primary" class="mr-19" v-b-modal.modals-default>表单</b-btn>
      </b-form-group>
      <b-form-group horizontal label="确认操作弹框">
        <b-btn variant="primary" class="mr-19" @click="confirmShow()">确认</b-btn>
      </b-form-group>
      <b-form-group horizontal label="警告操作弹框">
        <b-btn variant="primary" class="mr-19" @click="warnShow()">警告</b-btn>
      </b-form-group>
      <b-form-group horizontal label="确认框">
        <b-btn variant="primary" class="mr-19" @click="noCancelShow()">确认</b-btn>
      </b-form-group>
    </b-card>

    <b-card header="按钮类控件" header-tag="h6" class="mb-24">
      <b-form-group horizontal label="Toast提示">
        <b-btn variant="primary" class="mr-19" @click="showToast()">Toast</b-btn>
      </b-form-group>
    </b-card>

    <!-- Modal template -->
    <b-modal
      id="modals-default"
      :size="null"
      title="添加员工"
      @ok="confirm()"
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
        <flat-pickr v-model="date" :config="dateConfig" placeholder="选择入职时间"  />
      </b-form-group>
      <b-form-group horizontal label="转正时间">
        <flat-pickr v-model="date" :config="dateConfig" placeholder="选择转正时间"  />
      </b-form-group>
      <b-form-group horizontal label="状态">
        <b-radio-group v-model="userData.status" :options="userStatusOptions" />
      </b-form-group>
    </b-modal>
    <Bootbox
      title="提示"
      text="是否确认停用该员工账号？"
      ref="confirm"
      :confirm-action="confirm"
    />
    <Bootbox
      title="警告"
      text="密码已重置"
      ref="warn"
      :warn="true"
      :confirm-action="confirm"
    />
    <Bootbox
      title="确认"
      text="确认了吗"
      ref="noCanCel"
      :no-cancel="true"
      :confirm-action="confirm"
    />
  </div>
</template>
<style src="vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>
<style src="vendor/libs/vue-toasted/vue-toasted.scss" lang="scss"></style>
<script>
import Vue from 'vue'
import flatPickr from 'vue-flatpickr-component'
import Bootbox from 'components/bootbox/Index'
import Toasted from 'vue-toasted'
import Chinese from 'flatpickr/dist/l10n/zh.js';

Vue.use(Toasted)

export default {
  components: {
    flatPickr,
    Bootbox
  },
  data () {
    return {
      breadCrumbs: [{ text: '弹框', href: '#' }],
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
      date: '',
      dateConfig: {
        disableMobile: true,
        altFormat: 'Y-m-d',
        altInput: true,
        dateFormat: 'Y-m-d',
        locale: Chinese.zh,
      }
    }
  },
  methods: {
    confirmShow () {
      this.$refs.confirm.show()
    },
    warnShow () {
      this.$refs.warn.show()
    },
    noCancelShow () {
      this.$refs.noCanCel.show()
    },
    confirm () {
      console.log('我OK了')
    },
    cancelAction () {
      console.log('我cancel了')
    },
    showToast () {
      this.$toasted.show('我是toast', {
        theme: 'default',
        position: 'top-center',
        action: false,
        icon: null,
        className: 'bg-dark text-white',
        duration: 4000
      })
    }
  }
}
</script>
