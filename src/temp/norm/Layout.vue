<template>
  <div v-breadcrumbs="breadCrumbs" class="layout-temp">
    <b-card class="pb-0">
      <div class="tip">
        <span class="padding-block purple mr-19"></span><span class="mr-19">组件、内容元素</span>
        <span class="padding-block pink mr-19"></span><span class="mr-19">固定间距</span>
        <span class="padding-block green mr-19"></span><span class="mr-19">自适应间距</span>
      </div>
    </b-card>
    <b-card header="页面边栏、顶栏、内容布局" header-tag="h6" class="mb-24">
      <div class="left-box blue-card vertical-align">边栏</div>
      <div class="right-box">
        <div class="purple" style="width: 100%; height: 56px;"></div>
        <div class="content1 purple">
          <div class="pink"><span>上间距：40px</span></div>
          <div class="pink"><span>左间距：32px</span></div>
          <div class="pink"><span>右间距：32px</span></div>
          <div class="pink"><span>下间距：40px</span></div>
        </div>
      </div>
    </b-card>
    <b-card header="组件布局" header-tag="h6" class="mb-24">
      <div class="layout2">
        <div class="left-box dark-card vertical-align">边栏</div>
        <div class="right-box">
          <div class="content2">
            <div class="purple"></div>
            <div class="pink">
              <div>组件上下间距：24px</div>
              <div><span></span><span></span><span></span></div>
            </div>
            <div class="purple"></div>
            <div class="pink" style="text-indent: 148px;">组件上下间距：24px</div>
            <div class="purple">
              <span>组件左右间距：24px</span>
              <span>组件左右间距：24px</span>
              <span>组件左右间距：24px</span>
            </div>
          </div>
        </div>
      </div>
    </b-card>
    <b-card header="组件内容内间距" header-tag="h6" class="mb-24">
      <em>组件标题</em>
      <div class="content-margin purple">
      </div>
      <div class="content-vertical">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="info">
        <div>标题内容间距:<br/>12px</div>
        <div>子内容间距:<br/>12px</div>
        <div>子内容间距:<br/>12px</div>
      </div>
    </b-card>
    <b-card header="卡片内容布局" header-tag="h6" class="mb-24">
      <div class="contents-cards">
        <div class="content pink left-content">左间距：24px</div>
        <div class="middle-content">
           <div class="content pink">标题上间距：24px</div>
          <div class="title">
            <div class="bg"></div>
            <p>标题</p>
          </div>
          <div class="content pink">标题内容间距：24px</div>
          <div class="contents">
            <div class="bg"></div>
            <p>卡片内容宽度自适应最小宽度：368px</p>
          </div>
          <div class="content pink">下间距：24px</div>
        </div>
        <div class="right-content content pink">右间距：24px</div>
      </div>
    </b-card>
    <b-card header="弹窗内容布局" header-tag="h6" class="mb-24">
      <div class="popup-content">
        <div class="content pink left-content">左间距：24px</div>
        <div class="middle-content">
          <div class="title pink">标题上间距：24px</div>
          <div class="hint">
            <div class="bg"></div>
            <p>提示</p>
          </div>
          <div class="title pink">标题下间距：24px</div>
          <div class="popups">
            <div class="form-list clearfix">
              <div class="form-title">表单标题</div>
              <div class="form-inputs">表单控件</div>
            </div>
            <div class="margins">表单控件行间距：16px</div>
            <div class="form-list clearfix">
              <div class="form-title">表单标题</div>
              <div class="form-inputs">表单控件</div>
            </div>
            <div class="margins">表单控件行间距：16px</div>
            <div class="form-list clearfix">
              <div class="form-title">表单标题</div>
              <div class="form-inputs">表单控件</div>
            </div>
            <div class="margins">表单控件行间距：16px</div>
            <div class="form-list clearfix">
              <div class="form-title">表单标题</div>
              <div class="form-inputs">表单控件</div>
            </div>
            <div class="margins margins-24">表单控件行间距：24px</div>
            <div style="overflow:hidden">
               <div class="buttons">
                <button type="button" class="btn btn-secondary btn-default bootbox-cancel" >取消</button>
                <button type="button" class="btn btn-primary bootbox-accept" v-if="!warn" @click="confirm()">确认</button>
              </div>
            </div>
             <div class="margins margins-24">表单控件行间距：24px</div>
          </div>
        </div>
        <div class="content pink right-content">右间距：24px</div>
      </div>
    </b-card>
    <b-card header="表格操作控件布局" header-tag="h6" class="mb-24">
      <div class="form-operation">
        <div class="pures"></div>
        <div class="margin pink">组件上下间距：16px</div>
        <div class="vertical">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="gap-info">
          <span>组件左右间距：24px</span>
          <span>组件左右间距：24px</span>
          <span>组件左右间距：24px</span> 
        </div>
        <div class="pures" style="width: 504px"></div>
        <div class="margins pink">表格上间距：24px</div>
        <div class="content">
          <div>宽度值：<br/>表格内容宽度自适应<br/>最小宽度：368px</div>
          <div>高度值：<br/>1.使用自适应高度<br/>内容高度根据窗口大小自适应<br/>最小高度：显示10条数据 </div>
        </div>
        <div class="margin pink">表格下间距：16px</div>
        <div class="pages pures">页码栏</div>
      </div>
    </b-card>
    <b-card header="表单组件布局" header-tag="h6" class="mb-24">
      <div class="form-component">
        <div class="title pink">表单标题间距：24px</div>
        <div class="form-list clearfix pink">
          <div class="form-title">表单标题</div>
          <div class="form-inputs purple">表单控件</div>
        </div>
        <div class="margins">表单控件行间距：16px</div>
        <div class="form-list clearfix pink">
          <div class="form-title">表单标题</div>
          <div class="form-inputs purple">表单控件</div>
        </div>
        <div class="margins">表单控件行间距：16px</div>
        <div class="form-list clearfix pink">
          <div class="form-title">表单标题</div>
          <div class="form-inputs purple">表单控件</div>
        </div>
        <div class="margins">表单控件行间距：16px</div>
        <div class="form-list clearfix pink">
          <div class="form-title">表单标题</div>
          <div class="form-inputs purple">表单控件</div>
        </div>
        <div class="margins">表单控件行间距：16px</div>
        <div class="form-list clearfix pink">
          <div class="form-title">表单标题</div>
          <div class="form-inputs purple">表单控件</div>
        </div>
        <div class="margins">表单控件行间距：16px</div>
        <div class="form-list clearfix pink">
          <div class="form-title">表单标题</div>
          <div class="form-inputs purple">表单控件</div>
        </div>
        <div class="margins">表单控件行间距：16px</div>
      </div>
    </b-card>
    <b-card header="表单组件内布局" header-tag="h6">
      <em>组件标题</em>
      <div class="left-margin" style="width: 16px;position: relative;top: -4px;opacity: 0.4;
      height: 35px;background:#ff4259;">
      </div>
      <div class="content-margin purple">
        <div class="wrap-width">
          <div class="title-left">标题左间距:24px</div>          
        </div>
      </div>
      <div class="content-vertical">
        <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="info-content">
        <div>子内容间距:<br/>12px</div>
        <div>子内容间距:<br/>12px</div>
      </div>
      <div class="info-left">控件卡片左边距：140px</div>
    </b-card>
  </div>
</template>
<style lang='scss'>

  .clearfix {
    &::after {
      content: '';
      font-size: 0;
      display: block;
      clear:both;
    }
  }

  .layout-temp {
    .purple {
      background-color: rgba(7, 20, 255, 0.3);
    }

    .pink {
      background-color: rgba(255, 66, 89, 0.5);
      color: #fff;
    }

    .green {
      opacity: 0.4;
      background-color: #11d70d;
    }

    .blue-card {
      background-color: rgba(7, 20, 255, 0.9);
    }

    .dark-card {
      background-color: #2e3239;
    }

    .pb-0 {
      .card-body {
        padding-bottom: 0 !important;
      }
    }

    .tip {
      width: 100%;
      height: 23px;
      line-height: 23px;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: flex-end;

      span {
        display: inline-block;
        line-height: 23px;
      }

      .padding-block {
        width: 23px;
        height: 100%;
      }
    }
    .card-body {
      display: flex;
      em {
        font-style: normal;
        color: #fff;
        position: absolute;
        z-index: 99;
        line-height: 25px;
        text-align: center;
        left: 46px;
      }
    }

    .left-box {
      width: 15.5rem;
      height: 465px;
      line-height: 465px;
      text-align: center;
      color: #fff;
    }

    .right-box {
      height: 465px;
      width: 52rem;
    }

    .content1 {
      width: 100%;
      height: 409px;
      padding: 40px 32px;
      box-sizing: border-box;
      color: #fff;
      font-weight: 500;
      position: relative;
      background-clip: content-box;

      div {
        height: 40px;
        line-height: 40px;
        position: absolute;

        span {
          margin-left: 68px;
        }

        &:nth-child(1) {
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          // background: #ff4259;
        }

        &:nth-child(2) {
          width: 409px;
          top: 0;
          left: 32px;
          height: 32px;
          line-height: 32px;
          z-index: 2;
          text-align: center;
          transform-origin: left top;
          transform: rotate(90deg);

          span {
            margin-left: 0;
          }
        }

        &:nth-child(3) {
          width: 409px;
          top: -32px;
          height: 32px;
          line-height: 32px;          
          right: 0;
          z-index: 3;
          text-align: center;
          // background: #ff4259;
          transform-origin: right bottom;
          transform: rotate(-90deg);

          span {
            margin-left: 0;
          }
        }

        &:nth-child(4) {
          width: 100%;
          bottom: 0;
          left: 0;
          height: 40px;
          z-index: 4;
        }
      }

    }

    .layout2 {
      width: 100%;
      display: flex;
      border: 1px solid #979797;
    }

    .content2 {
      width: 100%;
      height: 409px;
      margin-top: 56px;
      background: #ededed;
      padding: 40px 0;

      div {
        line-height: 24px;

        &:nth-child(1) {
          width: 97px;
          height: 25px;
          margin-left: 32px;
        }

        &:nth-child(2), &:nth-child(4) {
          width: 100%;
          height: 24px;          
        }

        &:nth-child(2) {
          position: relative;

          div {
            width: 100%;

            &:nth-child(1) {
              text-indent: 116px;
            }

            &:nth-child(2) {
              position: absolute;
              top: 0;
              left: 0;
              
              span {
                width: 73px;
                height: 24px;
                display: inline-block;
                background-color: #ff4259;
                opacity: 0.5;
                margin-left: 129px;
                transform-origin: left top;
                transform: rotate(90deg);
              }
            }
          }


        }

        &:nth-child(3) {
          width: 586px;
          height: 25px;
          margin-left: 32px;
        }

        &:nth-child(5) {
          width: 100%;
          height: 230px;
          padding-left: 128px;
          position: relative;

          span {
            position: absolute;
            width: auto;
            height: 24px;
            color: #fff;
            display: inline-block;
            transform-origin: left top;
            transform: rotate(90deg);

            &:nth-child(2) {
              left: 329px;
            }

            &:nth-child(3) {
              right: -33px;
            }
          }
        }
      }
    }

    .content-margin {
      width: 424px;
      height: 25px;
      position: relative;

      .wrap-width {
        position: absolute;
        width: 140px;
        height: 71px;
        background: #ff4259;
        opacity: 0.5;
        left: -16px;
        top: -4px;
      }
    }

    .content-vertical {
      position: absolute;
      span {
        display: inline-block;
        width: 12px;
        height: 35px;
        opacity: 0.5;
        margin-left: 93px;
        position: relative;
        top: -4px;

        &:before {
          content:'子内容';
          position: absolute;
          right: -65px;
          color: #fff;
          top: 7px;
        }

        &:first-child {
          margin-left: 128px;
        }

        &:nth-child(2), &:nth-child(3) {
          background-color: #ff4259;          
        }
      }
    }

    .info {
      background: none;
      display: flex;
      margin-top: 36px;
      margin-left: -336px;
      color: #ff4259;
      font-size: 12px;

      div {
        margin-right: 38px;
      }
    }

    .title-left {
      color: #fff;
      font-size: 12px;
      margin-top: 36px;
      font-weight: 500;
    }

    .info-content {
      margin-top: 36px;
      margin-left: -204px;
      display: flex;
      color: #ff4259;
      font-size: 12px;

      div {
        margin-right: 42px;
      }
    }

    .info-left {
      margin-top: 76px;
      margin-left: -448px;
      color: #ff4259;
      font-size: 12px;
      height: 24px;
    }

    .contents-cards {
      position: relative;

      .content {
        width: 1043px;
        height: 24px;
        line-height: 24px;
        padding-left: 36px;

        &.left-content {
          width: 218px;
          height: 24px;
          position: relative;
          left: -98px;
          top: 121px;
          transform: rotate(90deg);
          text-align: center;
        }
        &.right-content {
          width: 218px;
          height: 24px;
          position: relative;
          right: -85px;
          top: -121px;
          transform: rotate(90deg);
          text-align: center;
          float: right;
        }
      }
      .title {
        position: relative;
        width: 30px;
        line-height: 20px;
        color: #000;
        margin-left: 23px;

        .bg {
          position: absolute;
          width:100%;
          height: 20px;
          background:  #0714ff;
          opacity: 0.3;
        }
        p {
          color: #4a4a4a;
          line-height: 20px;
          margin-bottom: 0;
        }
      }
      .contents {
        width: 1032px;
        height: 126px;
        margin-left: 23px;

        .bg {
          position: absolute;
          width: 996px;
          height: 126px;
          opacity: 0.3;
          background-color: #11d70d;
        }

        p {
          color: #4a4a4a;
          line-height: 126px;
          margin-bottom: 0;
          margin-left: 12px;
        }
      }
    }
    .popup-content {
      position: relative;

      .left-content {
        width: 218px;
        height: 24px;
        position: relative;
        left: -98px;
        top: 121px;
        transform: rotate(90deg);
        text-align: center;
      }

      .right-content {
        width: 216px;
        height: 24px;
        position: relative;
        right: -96px;
        top: -202px;
        transform: rotate(90deg);
        text-align: center;
        float: right;
      }

      .middle-content {
        width: 480px;

        .title {
          width: 480px;
          height: 24px;
          line-height: 24px;
          padding-left: 36px;
        }

        .hint {
          position: relative;
          width: 30px;
          line-height: 20px;
          color: #000;
          margin-left: 23px;

          .bg {
            position: absolute;
            width:100%;
            height: 20px;
            background:  #0714ff;
            opacity: 0.3;
          }
          p {
            color: #4a4a4a;
            line-height: 20px;
            margin-bottom: 0;
          }
        }

        .popups {
          padding-left: 24px;
          background: #FFB3BD;
          height: 100%;

          .form-list {
            .form-title {
              width: 81px;
              height: 25px;
              line-height: 25px;
              background: #B5B9FF;
              color: #fff;
              margin-right: 35px;
              padding-left: 5px;
              float: left;
            }

            .form-inputs {
              width: 316px;
              height: 25px;
              line-height: 25px;
              background: #B5B9FF;
              padding-left: 13px;
              float: left;
              color: #fff;
            }
          }

          .margins {
            width: 100%;
            height: 16px;
            line-height: 16px;
            background: #ff4259;
            opacity: 0.5;
            color: #fff;

            &.margins-24 {
              height: 24px;
              line-height: 24px;
            }
          }

          .buttons {
            float: right;

            .btn {
              min-width: 70px;
              margin-right: 24px;

              &:first-child {
                margin-right: 16px;
              }
            }
          }
        }
      }
    }
    
    .form-operation {
      position: relative;
      width: 100%;
      border: 1px solid #979797;
      padding: 24px;
      box-sizing: border-box;

      .vertical {
        position: absolute;
        color: #fff;
        text-align: center;

        span {
          display: inline-block;
          width: 24px;
          height: 66px;
          background: #FFB3BD;
          margin-left: 97px;
          position: relative;
          top: -41px;
          z-index: 99;
        }
      }

      .gap-info {
        span {
          position: absolute;
          width: 173px;
          height: 24px;
          display: inline-block;
          font-weight: 500;
          transform-origin: left top;
          transform: rotate(90deg);
          z-index: 999;
          top: 30px;
          color: #fff;

          &:nth-child(1) {
            left: 142px;
          }

          &:nth-child(2) {
            left: 268px;
          }

          &:nth-child(3) {
            left: 392px;
          }
        }
      }

      .pures {
        width: 460px;
        opacity: 0.3;
        background-color: #0714ff;
        height: 25px;
        color: #fff;
      }

      .margin {
        width: 1041px;
        height: 16px;
        line-height: 16px;
        color: #fff;
        margin-left: -24px;
      }

      .margins {
        width: 1041px;
        height: 24px;
        line-height: 24px;
        color: #fff;
        margin-left: -24px;
      }

      .content {
        width: 100%;
        height: 184px;
        color: #4a4a4a;
        background-color: rgba(17, 215, 13, 0.3);
        padding-top: 80px;
        display: flex;

        div {
          margin-left: 60px;

          &:nth-child(1) {
            margin-left: 380px;
          }
        }
      }

      .pages {
        width: 100%;
        height: 25px;
        line-height: 25px;
        color: #fff;
      }
    }

    .form-component {
      border: 1px solid #979797;

      .title {
        width: 1043px;
        height: 24px;
        line-height: 24px;
      }
      .form-list {
        .form-title {
          width: 81px;
          height: 25px;
          line-height: 25px;
          background: rgba(7, 20, 255, 0.5);
          color: #fff;
          margin-right: 35px;
          padding-left: 5px;
          float: left;
        }

        .form-inputs {
          width: 316px;
          height: 25px;
          line-height: 25px;
          padding-left: 13px;
          float: left;
          color: #fff;
        }
      }

      .margins {
        width: 100%;
        height: 16px;
        line-height: 16px;
        background: #ff4259;
        opacity: 0.5;
        color: #fff;
      }
    }
  }
</style>
<script>

export default {
  components: {
  },
  data () {
    return {
      breadCrumbs: [{ text: '布局规范', href: '#' }],
    }
  },
  methods: {
    addTag (newTag) {
      this.multipleValue.push({
        name: newTag,
        language: 'Some language'
      })
    }
  }
}
</script>
