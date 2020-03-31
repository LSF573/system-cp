<template>
  <div class="form-temp" v-breadcrumbs="breadCurmbs">
    <h6 class="title-header">面包屑导航</h6>
    <div class="custom-breadcrumb pt-0 pl-0 mb-24">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <h6 class="title-header">横向导航栏</h6>
    <b-nav pills class="nav-sm header-m-b custom-nav">
      <b-nav-item :active="tabIndex2 === 1" @click="tabClick2(1)">菜单1</b-nav-item>
      <b-nav-item :active="tabIndex2 === 2" @click="tabClick2(2)">菜单2</b-nav-item>
      <b-nav-item :active="tabIndex2 === 3" @click="tabClick2(3)">菜单3</b-nav-item>
      <b-nav-item :active="tabIndex2 === 4" @click="tabClick2(4)">菜单4</b-nav-item>
      <b-nav-item :active="tabIndex2 === 5" @click="tabClick2(5)">菜单5</b-nav-item>
    </b-nav>
    <div class="top-tab">
      <h6 class="title-header">选项卡</h6>
      <b-nav tabs>
        <b-nav-item :active="topTabIndex === 1" @click="topTabClick(1)">选项卡1</b-nav-item>
        <b-nav-item :active="topTabIndex === 2" @click="topTabClick(2)">选项卡2</b-nav-item>
        <b-nav-item :active="topTabIndex === 3" @click="topTabClick(3)">选项卡3</b-nav-item>
        <b-nav-item :active="topTabIndex === 4" @click="topTabClick(4)">选项卡4</b-nav-item>
        <b-nav-item :active="topTabIndex === 5" @click="topTabClick(5)">选项卡5</b-nav-item>
        <b-nav-item :active="topTabIndex === 6" @click="topTabClick(6)">选项卡6</b-nav-item>
      </b-nav>
    </div>
    <!-- 选项卡 -->
    <b-card :header="'选项卡' + topTabIndex" header-tag="h6" class="mb-24">
    </b-card>

    <!---按钮类控件-->
    <b-card header="按钮" header-tag="h6" class="mb-24">
      <b-form-group horizontal label="常规按钮">
        <b-btn variant="primary" class="mr-19">主要按钮</b-btn>
        <b-btn variant="default" class="mr-19">次要按钮</b-btn>
        <b-btn variant="danger" class="mr-19">警告按钮</b-btn>
        <!-- <b-btn variant="link"  class="mr-19">Link</b-btn> -->
        <b-btn variant="default" class="add-btn">添加</b-btn>
      </b-form-group>
      <b-form-group horizontal label="小尺寸按钮" class="f-r-pt-5">
        <b-btn size="sm" variant="primary" class="mr-19">主要按钮</b-btn>
        <b-btn size="sm" variant="default" class="mr-19">次要按钮</b-btn>
        <b-btn size="sm" variant="danger" class="mr-19">警告按钮</b-btn>
        <!-- <b-btn size="sm" variant="link"  class="mr-19">Link</b-btn> -->
        <b-btn size="sm" variant="default" class="add-btn">添加</b-btn>
      </b-form-group>
      <b-form-group horizontal label="菜单按钮" class="f-r-pt-5">
        <b-dd size="sm" variant="default" class="mr-19" text="点击按钮" ref="dropdown">
          <b-dd-item>第一个行为</b-dd-item>
          <div class="dropdown-toggle">
            <b-dd-item>第一个按钮</b-dd-item>
            <div class="dropdown-menu">
              <b-dd-item>第一个行为</b-dd-item>
              <b-dd-item>第二个按钮</b-dd-item>
              <div class="dropdown-toggle">
                <b-dd-item>第一个按钮</b-dd-item>
                <div class="dropdown-menu">
                  <b-dd-item>第一个行为</b-dd-item>
                  <b-dd-item>第二个按钮</b-dd-item>
                </div>
              </div>
            </div>
          </div>
          <b-dd-item>第二个按钮</b-dd-item>
          <div class="dropdown-toggle">
            <b-dd-item>第二个按钮</b-dd-item>
            <div class="dropdown-menu">
              <b-dd-item>第一个行为</b-dd-item>
              <b-dd-item>第二个按钮</b-dd-item>
            </div>
          </div>
        </b-dd>
        <b-dd size="sm" v-hover-dropdown variant="default" text="悬停按钮" ref="dropdown">
          <b-dd-item>第一个行为</b-dd-item>
          <div class="dropdown-toggle">
            <b-dd-item>第一个按钮</b-dd-item>
            <div class="dropdown-menu">
              <b-dd-item>第一个行为</b-dd-item>
              <b-dd-item>第二个按钮</b-dd-item>
              <div class="dropdown-toggle">
                <b-dd-item>第一个按钮</b-dd-item>
                <div class="dropdown-menu">
                  <b-dd-item>第一个行为</b-dd-item>
                  <b-dd-item>第二个按钮</b-dd-item>
                </div>
              </div>
            </div>
          </div>
          <b-dd-item>第二个按钮</b-dd-item>
          <div class="dropdown-toggle">
            <b-dd-item>第二个按钮</b-dd-item>
            <div class="dropdown-menu">
              <b-dd-item>第一个行为</b-dd-item>
              <b-dd-item>第二个按钮</b-dd-item>
            </div>
          </div>
        </b-dd>
      </b-form-group>
    <!-- </b-card> -->
    <div class="bottom-line"></div>
    <!---按钮类控件-->

    <!---选择控件-->
    <h6>选择控件</h6>
    <!-- <b-card header="选择控件" header-tag="h6"> -->
      <!--<b-form-group horizontal label="下拉菜单悬浮">
        <div>
          <b-checkbox v-model="showCollapse">Toggle Collapse</b-checkbox>
          <b-collapse id="collapse-4" v-model="showCollapse" class="pl-100">
            <b-checkbox v-model="showCollapse1">Toggle 1</b-checkbox>
            <b-checkbox v-model="showCollapse2">Toggle 2</b-checkbox>
            <b-checkbox v-model="showCollapse3">Toggle 3</b-checkbox>
            <b-checkbox v-model="showCollapse4">Toggle 4</b-checkbox>
          </b-collapse>
        </div>
      </b-form-group>-->
      <b-form-group horizontal label="单选标签按钮" class="f-r-pt-5">
        <b-nav pills class="nav-sm tab-custom">
          <b-nav-item :active="tabIndex === 1" @click="tabClick(1)">选项1</b-nav-item>
          <b-nav-item :active="tabIndex === 2" @click="tabClick(2)">选项2</b-nav-item>
          <b-nav-item :active="tabIndex === 3" @click="tabClick(3)">选项3</b-nav-item>
          <b-nav-item :active="tabIndex === 4" @click="tabClick(4)">选项4</b-nav-item>
        </b-nav>
      </b-form-group>
      <b-form-group horizontal label="单选器">
        <b-radio-group :options="options" />
      </b-form-group>
      <b-form-group horizontal label="多选框">
        <b-check-group class="i-b"
          :options="options"
          v-model="selected"/>
        <b-form-checkbox
          class="all-check"
          v-model="allSelected"
          :indeterminate="indeterminate"
          aria-describedby="options"
          aria-controls="options"
          @change="toggleAll">
          全选
        </b-form-checkbox>
      </b-form-group>
      <b-form-group horizontal label="开关">
        <label class="switcher">
          <input type="checkbox" class="switcher-input">
          <span class="switcher-indicator">
            <span class="switcher-yes"></span>
            <span class="switcher-no"></span>
          </span>
          <span class="switcher-label">开关</span>
        </label>
      </b-form-group>
    <!-- </b-card> -->
    <div class="bottom-line"></div>
    <!---选择控件-->

    <!--表单录入样式1-->
    <h6>表单录入样式1</h6>
    <!-- <b-card class="table-block-container" header="表单录入样式1" header-tag="h6"> -->
      <div class="table-block-container">
        <b-form-group horizontal label="下拉选择">
          <multiselect
            v-model="singleStringValue"
            :options="singleStringOptions"
            :searchable="false"
            :show-labels="false"
            placeholder="下拉选择"
            :disabled="false" />
        </b-form-group>
        <b-form-group horizontal label="下拉多选">
          <multiselect
            v-model="groupValue"
            :options="groupOptions"
            :multiple="true"
            group-values="libs"
            group-label="language"
            placeholder="下拉多选"
            selectLabel=""

            deselectLabel="取消选择"
            selectedLabel="已选择"
            track-by="name"
            label="name" />
        </b-form-group>
         <b-form-group horizontal label="下拉可添加">
          <add-multiselect
            v-model="groupValue"
            :options="groupOptions"
            :multiple="false"
            group-values="libs"
            group-label="language"
            placeholder="下拉添加"
            selectLabel=""
            deselectLabel=""
            selectedLabel=""
            track-by="name"
            @tag="addTag"
            :taggable="true"
            label="name" />
        </b-form-group>
        <b-form-group horizontal label="下拉单选可搜索">
          <add-multiselect
            :class="{'err-show': status}"
            v-model="groupValue"
            :options="groupOptions"
            @input="focus"
            group-values="libs"
            group-label="language"
            selectLabel=""
            deselectLabel=""
            selectedLabel=""
            placeholder="下拉选择"
            track-by="name"
            label="name" />
          <span v-if="status" class="err-text">错误提示</span>
        </b-form-group>
        <b-form-group horizontal label="下拉选择不可为空">
          <add-multiselect
            :class="{'err-show': status}"
            v-model="singleStringValue"
            :options="singleStringOptions"
            :searchable="false"
            :show-labels="false"
            :can-be-null="false"
            placeholder="下拉选择"
            @input="focus"
            :disabled="false" />
          <span v-if="status" class="err-text">错误提示</span>
        </b-form-group>
        <b-form-group horizontal label="文本输入框">
          <b-input placeholder="输入文字" />
        </b-form-group>
        <b-form-group horizontal label="密码输入框">
          <b-input type="password" placeholder="输入密码" />
        </b-form-group>
        <b-form-group horizontal label="日期选择器">
          <flat-pickr v-model="date" :config="dateConfig" placeholder="选择日期"  />
        </b-form-group>
        <b-form-group horizontal label="日期范围">
          <flat-pickr v-model="range" :config="rangeConfig" @on-change="changeTime" placeholder="选择日期范围" />
        </b-form-group>
        <b-form-group horizontal label="月份选择器">
          <MonthPicker
            placeholder="请选择月份"
            inputClass="form-control"
          />
        </b-form-group>
        <b-form-group horizontal label="月份范围选择器">
          <MonthPicker
            placeholder="请选择月份范围"
            inputClass="form-control"
            :range="true"
          />
        </b-form-group>
        <b-form-group horizontal label="时间选择">
          <flat-pickr v-model="datetime" :config="datetimeConfig" placeholder="时间选择" />
        </b-form-group>
        <b-form-group horizontal label="数量步进器">
          <NumberInputSpinner
            :min="0"
            :max="20"
            inputClass="form-control"
            buttonClass="btn btn-secondary"
            :integerOnly="true"
            v-model="value1" />
        </b-form-group>
      </div>
    <!-- </b-card> -->
    <div class="bottom-line"></div>
    <!-- 表单录入样式1 -->

    <!--表单录入样式2-->
    <h6>表单录入样式2</h6>
    <!-- <b-card header="表单录入样式2" header-tag="h6"> -->
      <b-form-group horizontal label="下拉选择">
        <multiselect
          :class="{'err-show': status}"
          v-model="singleStringValue"
          :options="singleStringOptions"
          :searchable="false"
          :show-labels="false"
          placeholder="下拉选择"
          @input="focus"
          :disabled="false" />
          <span v-if="status" class="err-text">错误提示</span>
      </b-form-group>
      <b-form-group horizontal label="下拉多选">
        <multiselect
          :class="{'err-show': status}"
          v-model="groupValue"
          :options="groupOptions"
          :multiple="true"
          @input="focus"
          group-values="libs"
          group-label="language"
          placeholder="下拉多选"
          selectLabel=""
          selectedLabel="已选择"
          deselectLabel="取消选择"
          track-by="name"

          label="name" />
          <span v-if="status" class="err-text">错误提示</span>
      </b-form-group>
      <b-form-group horizontal label="下拉可添加">
        <add-multiselect
          :class="{'err-show': status}"
          v-model="groupValue"
          :options="groupOptions"
          :multiple="false"
          @input="focus"
          @tag="addTag"
          :taggable="true"
          group-values="libs"
          group-label="language"
          placeholder="可添加"
          selectLabel=""
          selectedLabel=""
          deselectLabel=""
          track-by="name"
          label="name" />
          <span v-if="status" class="err-text">错误提示</span>
      </b-form-group>
      <b-form-group horizontal label="下拉单选可搜索">
        <add-multiselect
          :class="{'err-show': status}"
          v-model="groupValue"
          :options="groupOptions"
          @input="focus"
          group-values="libs"
          group-label="language"
          selectLabel=""
          deselectLabel=""
          selectedLabel=""
          placeholder="下拉选择"
          track-by="name"
          label="name" />
          <span v-if="status" class="err-text">错误提示</span>
      </b-form-group>
      <b-form-group horizontal label="下拉选择不可为空">
        <add-multiselect
          :class="{'err-show': status}"
          v-model="singleStringValue"
          :options="singleStringOptions"
          :searchable="false"
          :show-labels="false"
          :can-be-null="false"
          placeholder="下拉选择"
          @input="focus"
          :disabled="false" />
        <span v-if="status" class="err-text">错误提示</span>
      </b-form-group>
      <b-form-group horizontal label="文本输入框">
        <b-input :state="state" @input="focus" class="form-contaol-220" placeholder="输入文字" />
        <b-form-invalid-feedback id="input-live-feedback">
          错误提示
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group horizontal label="密码输入框" feedback="错误提示">
        <b-input :state="state" @input="focus" class="form-contaol-220" type="password" placeholder="输入密码" />
      </b-form-group>
      <b-form-group horizontal label="多行文本输入框" feedback="错误提示">
        <b-form-textarea
          :state="state"
          id="textarea"
          v-model="text"
          placeholder="填写文本"
          @input="focus"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group horizontal label="日期选择器" :class="{'err-show': status}">
        <flat-pickr v-model="date" :config="dateConfig" @on-change="changeTime" placeholder="选择日期"  />
        <span v-if="status" class="err-text">错误提示</span>
      </b-form-group>
      <b-form-group horizontal label="日期范围" :class="{'err-show': status}">
        <flat-pickr v-model="range" :config="rangeConfig" @on-change="changeTime" placeholder="选择日期范围" />
        <span v-if="status" class="err-text">错误提示</span>
      </b-form-group>
      <b-form-group horizontal label="月份选择器">
        <MonthPicker
          placeholder="请选择月份"
          inputClass="form-control"
        />
      </b-form-group>
      <b-form-group horizontal label="月份范围选择器">
        <MonthPicker
          placeholder="请选择月份范围"
          inputClass="form-control"
          :range="true"
        />
      </b-form-group>
      <b-form-group horizontal label="时间选择" :class="{'err-show': status}">
        <flat-pickr v-model="datetime" :config="datetimeConfig" @on-change="changeTime" placeholder="时间选择" />
        <span v-if="status" class="err-text">错误提示</span>
      </b-form-group>
      <b-form-group horizontal label="数量步进器">
        <NumberInputSpinner
          :min="0"
          :max="20"
          inputClass="form-control"
          buttonClass="btn btn-secondary"
          :integerOnly="true"
          v-model="value1" />
      </b-form-group>
      <!-- <b-form-group horizontal label="tooltip">
        <b-btn variant="default" v-b-tooltip.top title="Tooltip on top">Top</b-btn>
        <b-btn variant="default" v-b-tooltip.right title="Tooltip on right">Right</b-btn>
        <b-btn variant="default" v-b-tooltip.left title="Tooltip on left">Left</b-btn>
        <b-btn variant="default" v-b-tooltip.bottom title="Tooltip on bottom">Bottom</b-btn>
      </b-form-group> -->
      <b-form-group horizontal label="上传">
        <upload class="i-b mr-19" type="img" :disabled="img_disabled" :up-load-img="uploadImg" :img-url="imgUrl"></upload>
        <upload class="i-b" type="file" :up-load-file="uploadFile"></upload>
      </b-form-group>
      <b-form-group  horizontal label=" ">
        <b-btn variant="default" @click="err">提交报错</b-btn>
      </b-form-group>
    <!-- </b-card> -->
    <div class="bottom-line"></div>
    <!--表单录入样式2-->

    <!-- <b-card header="其他" header-tag="h6" class="mb-24"> -->
      <h6>其他</h6>
      <b-form-group horizontal label="翻页器" class="other">
        <b-card-body class="p-0" style="margin-left: 5px;">
          <div class="row">
            <div class="pt-3">
              <b-pagination class="justify-content-center justify-content-sm-end m-0"
                v-if="totalItems"
                v-model="currentPage"
                :total-rows="totalItems"
                :per-page="perPage"
                size="sm" />
            </div>
          </div>
        </b-card-body>
      </b-form-group>
      <b-form-group horizontal label="提示气泡" class="other">
        <div class="tooltips">
          <span id="tooltip-text" class="tooltip-text">鼠标悬停鼠标悬停</span>
          <b-tooltip target="tooltip-text" variant="outline-success" boundary="viewport">提示文字提示文字</b-tooltip>
        </div>
      </b-form-group>
    </b-card>

    <!-- 反馈操作 -->
    <b-card header="反馈操作" header-tag="h6">
      <b-form-group horizontal label="点击查看">
        <b-btn variant="primary" v-b-modal.modals-default class="mr-19">确认对话框</b-btn>
        <b-btn variant="primary" @click="warnShow()" class="mr-19">警告对话框</b-btn>
        <b-btn variant="primary" @click="noCancelShow()" class="mr-19">确认提示框</b-btn>
        <b-btn variant="primary" @click="showToast()">Toast 提示</b-btn>
      </b-form-group>
    </b-card>
    <!-- 反馈操作 -->

    <!--表单-->
    <!-- <b-card header="元素" header-tag="h6">
      <b-form>
        <div style="float: left;margin-left: 108px;">
          <b-btn variant="primary" class="mr-7">确定</b-btn>
          <b-btn variant="default" >取消</b-btn>
        </div>
      </b-form>
    </b-card> -->
    <!--表单-->

    <!-- Modal template -->
    <b-modal
      id="modals-default"
      :size="null"
      title="添加员工"
      ok-title="确认"
      cancel-title="取消"
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
<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>
<style src="vendor/libs/vue-number-input-spinner/vue-number-input-spinner.scss" lang="scss"></style>
<style lang='scss'>
  @import 'vendor/libs/vue-multiselect/vue-multiselect.scss';
  @import 'vendor/libs/vue-input-tag/vue-input-tag.scss';
</style>
<script>
import NumberInputSpinner from 'vue-number-input-spinner'
import upload from 'components/upload/Index'
import Bootbox from 'components/bootbox/Index'
import MonthPicker from 'components/month-picker/Index'

import 'vendor/libs/hover-dropdown/HoverDropdown'
const options2 = [
  { name: 'Vue.js', language: 'JavaScript' },
  { name: 'Angular', language: 'JavaScript' },
  { name: 'React', language: 'JavaScript' },
  { name: 'Meteor', language: 'JavaScript' },
  { name: 'Adonis', language: 'JavaScript' },
  { name: 'Rails', language: 'Ruby' },
  { name: 'Sinatra', language: 'Ruby' },
  { name: 'Padrino', language: 'Ruby' },
  { name: 'Hanami', language: 'Ruby' },
  { name: 'Laravel', language: 'PHP' },
  { name: 'Symfony', language: 'PHP' },
  { name: 'CakePHP', language: 'PHP' },
  { name: 'Zend Framework', language: 'PHP' },
  { name: 'Phalcon', language: 'PHP' },
  { name: 'Phoenix', language: 'Elixir' },
  { name: 'Sugar', language: 'Elixir' },
  { name: 'Beego', language: 'Go' },
  { name: 'Martini', language: 'Go' },
  { name: 'Gorilla', language: 'Go' },
  { name: 'Revel', language: 'Go' }
]

const options1 = [
  'Vue.js', 'Angular', 'React', 'Meteor', 'Adonis', 'Rails', 'Sinatra', 'Padrino',
  'Hanami', 'Laravel', 'Symfony', 'CakePHP', 'Zend Framework', 'Phalcon', 'Phoenix',
  'Sugar', 'Beego', 'Martini', 'Gorilla', 'Revel'
]

const options3 = [{
  libs: [
    { name: 'Vue.js', category: 'Front-end' },
    { name: 'Angular', category: 'Front-end' },
    { name: 'React', category: 'Front-end' },
    { name: 'Meteor', category: 'Front-end' },
    { name: 'Adonis', category: 'Front-end' },
    { name: 'Rails', category: 'Backend' },
    { name: 'Sinatra', category: 'Backend' },
    { name: 'Padrino', category: 'Backend' },
    { name: 'Hanami', category: 'Backend' },
     { name: 'Laravel', category: 'Backend' },
    { name: 'Symfony', category: 'Backend' },
    { name: 'CakePHP', category: 'Backend' },
    { name: 'Zend Framework', category: 'Backend' },
    { name: 'Phalcon', category: 'Backend' },
    { name: 'Phoenix', category: 'Backend' },
    { name: 'Sugar', category: 'Backend' },
    { name: 'Beego', category: 'Backend' },
    { name: 'Martini', category: 'Backend' },
    { name: 'Gorilla', category: 'Backend' },
    { name: 'Revel', category: 'Backend' }
  ]
}]

const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

import Multiselect from 'vue-multiselect'
import flatPickr from 'vue-flatpickr-component'
// import {Chinese} from 'flatpickr/dist/l10n/ar.js'
import Chinese from 'flatpickr/dist/l10n/zh.js';
import C from 'flatpickr/dist/l10n/ru.js';
import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted)

Chinese.zh.weekdays.shorthand = ["日", "一", "二", "三", "四", "五", "六"]

export default {
  components: {
    Multiselect,
    flatPickr,
    NumberInputSpinner,
    upload,
    Bootbox,
    MonthPicker
  },
  data () {
    return {
      showCollapse: true,
      showCollapse1: false,
      showCollapse2: false,
      showCollapse3: false,
      showCollapse4: false,
      value1: 3,
      topTabIndex: 1,
      tabIndex: 1,
      tabIndex2: 1,
      breadCurmbs: [{ text: '所有控件', href: '#' }],
      items: [{ text: '一级菜单', href: '#' }, { text: '二级菜单', href: '#' }, { text: '三级菜单', href: '#' }],
      options: [
        { text: '选项1', value: 1 },
        { text: '选项2', value: 2 },
        { text: '选项3', value: 3 }
      ],
      groupValue: [],
      groupOptions: options3,
      singleStringValue: '',
      singleStringOptions: options1,
      text: '',
      date: '',
      dateConfig: {
        // wrap: true, // set wrap to true only when using 'input-group'
        disableMobile: true,
        altFormat: 'Y/m/d',
        altInput: true,
        dateFormat: 'Y-m-d',
        locale: Chinese.zh, // locale for this instance only
      },
      rangeConfig: {
        disableMobile: true,
        altFormat: 'Y/m/d',
        mode: 'range',
        dateFormat: 'Y/m/d',
        altInput: true,
        animate: true,
        conjunction: '～',
        locale: Chinese.zh,
      },
      range: '',
      datetime: null,
      datetimeConfig: {
        disableMobile: true,
        altFormat: 'Y/m/d H:i',
        enableTime: true,
        altInput: true,
        locale: Chinese.zh,
      },
      selected: '',
      allSelected: false,
      indeterminate: false,
      imgUrl: '',
      img_disabled: false,
      currentPage: 1,
      perPage: 5,
      totalItems: 10,
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
      lock: false,
      state: null,
      status: false
    }
  },
  watch: {
    selected(newVal, oldVal) {
      // Handle changes in individual flavour checkboxes
      if (newVal.length === 0) {
        this.indeterminate = false
        this.allSelected = false
      } else if (newVal.length === this.options.length) {
        this.indeterminate = false
        this.allSelected = true
      } else {
        this.indeterminate = true
        this.allSelected = false
      }
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.totalItems / this.perPage)
    }
  },
  mounted() {
    Chinese.zh.months.longhand = Chinese.zh.months.shorthand = months
  },
  methods: {
    err () {
      this.state = false
      this.status = true
    },
    focus (val) {
      if (val) {
        this.state = null
        this.status = false
      }
    },
    topTabClick (index) {
      this.topTabIndex = index
    },
    tabClick (index) {
      this.tabIndex = index
    },
    tabClick2 (index) {
      this.tabIndex2 = index
    },
    addTag (newTag) {
      this.groupValue = []
      this.groupOptions[0].libs.unshift({
         name: newTag, category: 'Backend'
      })
       this.groupValue.push({
        name: newTag
      })
    },
    toggleAll(checked) {
      this.selected = checked ? this.options.slice() : []
    },
    uploadImg (file, index) {
    },
    uploadFile (file) {
    },
    confirmShow () {
      this.$refs.confirm.show()
    },
    confirm () {
      console.log('我OK了')
    },
    cancelAction () {
      console.log('我cancel了')
    },
    warnShow () {
      this.$refs.warn.show()
    },
    noCancelShow () {
      this.$refs.noCanCel.show()
    },
    showToast () {
      if (!this.lock) {
        this.lock = true
        this.$toasted.show('我是toast', {
          theme: 'default',
          position: 'top-center',
          action: false,
          icon: null,
          singleton: true,
          className: 'bg-dark text-white',
          duration: 2000
        })
        setTimeout(() => {
          this.lock = false
        }, 2000)
      }
    },
    changeTime (selectedDates, dateStr, instance) {
      Chinese.zh.rangeSeparator = ' ~ '
      if (dateStr) {
        this.state = null
        this.status = false
      }
    }
  }
}
</script>
