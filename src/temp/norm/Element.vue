<template>
  <div v-breadcrumbs="breadCrumbs" class="element-temp">
    <b-card id="element" class="colorBasic mb-24" header="色彩使用规范" header-tag="h6" >
      <b-form-group horizontal label="灰阶色彩">
        <div class="containterBox" >
          <div class="boxLi">
            <div class="colorList grey1"></div>
            <div class="pBox">
              <p class="p1">Grey1 #4A4A4A</p>
              <p class="p2">应用于文本</p>
            </div>
          </div>
          <div class="boxLi">
            <div class="colorList grey2"></div>
            <div class="pBox">
              <p class="p1">Grey2 #999999</p>
              <p class="p2">应用于组件深色部分</p>
            </div>
          </div>
          <div class="boxLi">
            <div class="colorList grey3"></div>
            <div class="pBox">
              <p class="p1">Grey3 #EDEDED</p>
              <p class="p2" style="margin-left:-9px;">应用于分割线、描边、组件浅色部分</p>
            </div>
          </div>
          <div class="boxLi">
            <div class="colorList grey4"></div>
            <div class="pBox">
              <p class="p1">Grey4 #FFFFFF</p>
              <p class="p2">应用于卡片、按钮等</p></div>
          </div>
        </div>
      </b-form-group>
      <b-form-group horizontal label="状态色彩">
        <div class="containterBox">
          <div class="boxLi">
            <div class="colorList green"></div>
            <div class="pBox">
              <p class="p1">Green #38B723</p>
              <p class="p2">应用于完成状态提示</p>
            </div>
          </div>
          <div class="boxLi">
            <div class="colorList red"></div>
            <div class="pBox">
              <p class="p1">Red #E02727</p>
              <p class="p2">应用于警告、错误提示</p>
            </div>
          </div>
          <div class="boxLi">
            <div class="colorList blue"></div>
            <div class="pBox">
              <p class="p1">Blue #0070CC</p>
              <p class="p2">应用于链接文字</p>
            </div>
          </div>
        </div>
      </b-form-group>
    </b-card>
    <b-card id="element" class="fontBasic" header="文本使用规范" header-tag="h6">
      <b-form-group horizontal label="字体家族">
        <div class="fontInfo" >font-family:"Helvetica Neue","Helvetica","Arial","PingFang SC","Hiragino Sans GB","Heiti SC","Microsoft YaHei","WenQuanYi Micro Hei","sans-serif"</div>
      </b-form-group>
      <b-form-group horizontal label="文字级别" style="margin-top:-4px;">
        <div >
          <div :class="index == 0 ? 'fontBox1' : 'fontBox'" v-for="(item,index) in levelArray" :key="index">
            <div :class="i == 'style' ? 'fontX' : i == 'weight' ? 'fontX1' : i == 'size' ? 'fontX2' : i == 'application' ? 'fontX3' : 'fontX4'" v-for="(every,i) in item" :key="every">
              <div :class="'level'+index">
                {{every}}
              </div>
            </div>
          </div>
        </div>
      </b-form-group>
      <b-form-group horizontal label="文本色彩">
        <div :class="index == 0 ? 'colorBox1' : 'colorBox'" v-for="(item,index) in colorArray" :key="index">
          <div :class="i == 'style' ? 'colorX' : i == 'weight' ? 'colorX1' : i == 'size' ? 'colorX2' : i == 'application' ? 'colorX3' : 'colorX4'" v-for="(every,i) in item" :key="every">
            <div v-if="index !== 4 && index !== 5 && index !== 6" :class="'color'+index">
              {{every}}
            </div>
            <div v-else style="background-color:#2e3239;">
              <div :class="'color'+index">
                {{every}}
              </div>
            </div>
          </div>
        </div>
      </b-form-group>
    </b-card>
  </div>
</template>
<style lang='scss'>
  .element-temp {
    color: #4a4a4a;
    #element .col-sm-9{
      max-width: 100% !important;
      width: 100%;
    }
    .col-form-label{
      // line-height: 32px !important;
    }
    p{
      margin: 0;
      padding: 0;
    }
    .card .card-body .form-group{
      margin-bottom: 19px;
    }
    .colorBasic{
      .containterBox{
        overflow: hidden;
        min-width: 820px;

        .boxLi{
          float: left;
          min-width: 168px;
          margin: 8px 0;
          margin-right: 16px;

          &:last-child {
            margin-right: 0 !important;
          }
        }
        .colorList{
          width: 32px;
          height: 32px;
          margin-right: 12px;
          float: left;
        }
        .grey1{
          background-color: #4a4a4a;
        }
        .grey2{
          background-color: #999999;
        }
        .grey3{
          background-color: #ededed;
        }
        .grey4{
          border: 1px solid #4a4a4a;
          background-color: #ffffff;
        }
        .green{
          background-color : #38b723;
        }
        .red{
          background-color : #e02727;
        }
        .blue{
          background-color : #0070cc;
        }
        .pBox{
          float: left;
          .p1{
            height: 18px;
            font-family: "Helvetica Neue","Helvetica","Arial","PingFang SC","Hiragino Sans GB","Heiti SC","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
            font-size: 13px;
            font-weight: 500;
          }
          .p2{
            height: 14px;
            opacity: 0.5;
            font-size: 13px;
            transform: scale(.9);
            margin-left: -6px;
          }
        }
      }
    }
    .fontBasic{
      .form-row {
        align-items: flex-start;
        margin-bottom: 20px;
        .col-form-label {
          line-height: none;
          padding-top: 0;
        }
      }
      .fontInfo{
        width: 770px;
        height: 36px;
        font-size: 13px;
        margin-top: 8px;
      }
      .fontBox1{
        display: flex;
        margin-left: -4px;
        line-height: 32px;
        .fontX{
          width: 197px;
          padding-left: 4px;
        }
        .fontX1{
          width: 158px;
          text-indent: 2px;
        }
        .fontX2{
          width: 134px;
          text-indent: 2px;
        }
        .fontX3{
          width: 266px;
          text-indent: 2px;
        }
        .fontX4{
          width: 54px;
          text-indent: 2px;
        }
        .level0{
          font-size: 13px;
          font-weight: 500;
        }
      }
      .fontBox{
        display: flex;
        .fontX{
          width: 197px;
          padding-left: 4px;
          margin-left: -4px;
          margin-top: -2px;
        }
        .fontX1{
          width: 158px;
          margin-left: 3px;
          margin-top: -3px;
        }
        .fontX2{
          width: 134px;
          margin-top: -3px;
          margin-left: -2px;
        }
        .fontX3{
          width: 266px;
          margin-top: -3px;
        }
        .fontX4{
          width: 52px;
          margin-left: 1px;
        }
        .level0{
          font-size: 13px;
          font-weight: 500;
        }
        .level1{
          font-size: 18px;
          font-weight: 600;
          line-height: 32px;
        }
        .level2{
          font-size: 18px;
          font-weight: 500;
          line-height: 32px;
        }
        .level3{
          font-size: 18px;
          line-height: 32px;
        }
        .level4{
          font-size: 13px;
          font-weight: 600;
          line-height: 26px;
        }
        .level5{
          font-size: 13px;
          font-weight: 500;
          line-height: 26px;
        }
        .level6{
          font-size: 13px;
          line-height: 26px;
        }
        .level7{
          font-size: 10px;
          font-weight: 600;
          line-height: 22px;
        }
        .level8{
          font-size: 10px;
          font-weight: 500;
          line-height: 22px;
        }
        .level9{
          font-size: 10px;
          line-height: 22px;
        }
      }
      .colorBox1{
        display: flex;
        margin-top: 6px;
        margin-bottom: 2px;
        .colorX{
          width: 197px;
        }
        .colorX1{
          width: 158px;
        }
        .colorX2{
          width: 134px;
          text-indent: 2px;
          margin-left: -1px;

          .color0 {
            margin-left: -3px;
          }
        }
        .colorX3{
          width: 43px;
          text-indent: 2px;

          .color0 {
            margin-left: -2px;
          }
        }
      }
      .colorBox{
        display: flex;
        .colorX{
          width: 197px;
        }
        .colorX1{
          width: 158px;
        }
        .colorX2{
          width: 134px;
        }
        .colorX3{
          width: 39px;
        }
        .color0{
          font-size: 13px;
          font-weight: 500;
          height: 18px;
        }
        .color1{
          font-size: 13px;
          line-height: 24px;
          margin-top: 4px;
          // margin-left: 1px;
        }
        .color2{
          font-size: 13px;
          opacity: 0.5;
          line-height: 26px;
        }
        .color3{
          font-size: 13px;
          opacity: 0.3;
          line-height: 24px;
        }
        .color4{
          color: #fff;
          font-size: 13px;
          line-height: 24px;
        }
        .color5{
          color: #fff;
          font-size: 13px;
          opacity: 0.5;
          line-height: 24px;
        }
        .color6{
          color: #fff;
          font-size: 13px;
          opacity: 0.3;
          line-height: 24px;
        }
        .color7{
          color: #38b723;
          font-size: 13px;
          line-height: 30px;
        }
        .color8{
          color: #e02727;
          font-size: 13px;
          line-height: 30px;
        }
        .color9{
          color: #0070cc;
          font-size: 13px;
          line-height: 30px;
        }
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
      breadCrumbs: [{ text: '元素规范', href: '#' }],
      testInfo: 'Qianka 后台模版',
      levelArray: [
        {
          style: '样式示例',
          weight: '字重',
          size: '字号',
          application: '应用场景',
          level: '级别代码'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'bold',
          size: '18px',
          application: '页面大标题',
          level: 'T11'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'Medium',
          size: '18px',
          application: '待定',
          level: 'T12'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'Regular',
          size: '18px',
          application: '待定',
          level: 'T13'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'bold',
          size: '13px',
          application: '卡片标题、组件标题等',
          level: 'T21'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'Medium',
          size: '13px',
          application: '表格表头、按钮文字、段落标题等',
          level: 'T22'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'Regular',
          size: '13px',
          application: '常规文本、控件文字等',
          level: 'T23'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'bold',
          size: '10px',
          application: '待定',
          level: 'T31'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'Medium',
          size: '10px',
          application: '待定',
          level: 'T32'
        },
        {
          style: 'Qianka 后台模版',
          weight: 'Regular',
          size: '10px',
          application: '页码提示',
          level: 'T33'
        },
      ],
      colorArray: [
        {
          style: '样式示例',
          weight: '应用状态',
          size: '色彩代码',
          application: '透明度'
        },
        {
          style: 'Qianka 后台模版',
          weight: '深色常规文本',
          size: 'Grey1',
          application: '100%'
        },
        {
          style: 'Qianka 后台模版',
          weight: '深色辅助描述文本',
          size: 'Grey1',
          application: '50%'
        },
        {
          style: 'Qianka 后台模版',
          weight: '深色未激活文本',
          size: 'Grey1',
          application: '30%'
        },
        {
          style: 'Qianka 后台模版',
          weight: '浅色常规文本',
          size: 'Grey4',
          application: '100%'
        },
        {
          style: 'Qianka 后台模版',
          weight: '浅色辅助描述文本',
          size: 'Grey4',
          application: '50%'
        },
        {
          style: 'Qianka 后台模版',
          weight: '浅色未激活文本',
          size: 'Grey4',
          application: '30%'
        },
        {
          style: 'Qianka 后台模版',
          weight: '完成状态文字',
          size: 'Green',
          application: '100%'
        },
        {
          style: 'Qianka 后台模版',
          weight: '警告、错误状态文字',
          size: 'Red',
          application: '100%'
        },
        {
          style: 'Qianka 后台模版',
          weight: '链接文字',
          size: 'Blue',
          application: '100%'
        },
      ]
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
