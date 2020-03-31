<template>
  <div class="custom-wrapper">
    <b-modal
      ref="bv-modal-example"
      :size="null"
      :title="title"
      >
      <div class="conttent-wrap">
        <span class="content">{{text}}</span>
      </div>
      <template slot="modal-footer">
        <button type="button" class="btn btn-secondary btn-default bootbox-cancel" v-if="!noCancel" @click="hide()">{{cancelText}}</button>
        <button type="button" class="btn btn-primary bootbox-accept" v-if="!warn" @click="confirm()">{{confirmText}}</button>
        <button type="button" class="btn btn-danger bootbox-accept" v-if="warn" @click="confirm()">{{confirmText}}</button>
      </template>
    </b-modal>
  </div>
</template>
<style lang='scss'>
/** 模板没有这个组件，直接套皮封装一层，改成跟设计师要求的一模一样 **/
.custom-wrapper {
  .conttent-wrap {
    margin-bottom: 24px;

    .content {
      font-size: 16px;
      font-family: inherit;
    }
  }

  .modal-footer {
    padding-top: 0 !important;
    padding-bottom: 16px !important;
    border-top: none !important;

    .btn {
      padding: 8px 16px !important;
      font-size: 13px !important;
      // border: none !important;
      line-height: 19px !important;
      border-radius: 0.124rem;
    }

    .btn-default {
      background: #FFFFFF;
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.07), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.03);
    }

    .btn-primary {
      background: #3a89ff;
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.07), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.03);
      color: #FFFFFF;
    }
  }
}
</style>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '提示'
    },
    confirmAction: Function,
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    warn: {
      type: Boolean,
      default: false
    },
    noCancel: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      state: 0,
      confirmType: 0
    }
  },
  methods: {
    show () {
      this.$refs['bv-modal-example'].show()
    },
    hide () {
      this.$refs['bv-modal-example'].hide()
    },
    confirm () {
      this.confirmAction()
      this.hide()
    }
  }
}
</script>
