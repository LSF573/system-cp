<template>
  <div v-breadcrumbs="breadCrumbs" class="form-temp">
    <b-card header="文本" header-tag="h6" class="mb-4">
      <b-form>
        <b-form-group horizontal label="标题">
          <div>文本文本文本文本文本</div>
        </b-form-group>
        <b-form-group horizontal label="输入框标题">
          <b-input placeholder="输入文字"/>
          <b-btn variant="primary">按钮</b-btn>
        </b-form-group>
        <b-form-group horizontal label="单行长文本">
          <b-input placeholder="输入文字" />
        </b-form-group>
         <b-form-group horizontal label="数字文本框">
          <b-input type="number" placeholder="数字文本框" />
        </b-form-group>
        <b-form-group horizontal label="密码输入框">
          <b-input type="password" placeholder="密码输入框" />
        </b-form-group>
      </b-form>
    </b-card>
    <b-card header="元素" header-tag="h6" class="mb-4">
      <b-form>
        <b-form-group horizontal label="单选框">
          <b-radio-group :options="options" class="mt-8" />
        </b-form-group>
        <b-form-group horizontal label="多选框">
          <b-check-group :options="options" class="mt-8" />
        </b-form-group>
        <b-form-group horizontal label="下拉选择">
          <multiselect
            v-model="singleStringValue"
            :options="singleStringOptions"
            :searchable="false"
            :show-labels="false"
            placeholder="Pick a value"
            :disabled="false" />
          <!--<b-select :options="options" size="lg" />-->
        </b-form-group>
        <b-form-group horizontal label="时间选择">
          <flat-pickr v-model="date" :config="dateConfig" placeholder="Range picker"  />
        </b-form-group>
        <b-form-group horizontal label="时间范围">
          <flat-pickr v-model="range" :config="rangeConfig" placeholder="Range picker" />
        </b-form-group>
        <b-form-group horizontal label="开关">
          <label class="switcher">
            <input type="checkbox" class="switcher-input">
            <span class="switcher-indicator">
              <span class="switcher-yes"></span>
              <span class="switcher-no"></span>
            </span>
            <span class="switcher-label">文字</span>
          </label>
          <label class="switcher">
            <input type="checkbox" class="switcher-input">
            <span class="switcher-indicator">
              <span class="switcher-yes"></span>
              <span class="switcher-no"></span>
            </span>
            <span class="switcher-label">文字</span>
          </label>
        </b-form-group>
        <b-form-group horizontal label="文本区域">
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
    </b-card>
    <b-card header="控件" header-tag="h6" class="mb-4">
      <b-form>
        <b-form-group horizontal label="选择文件">
          <input type="file" class="validation-file" name="validation-file">
        </b-form-group>
        <b-form-group horizontal label="选择图片">
          <input type="file" class="validation-file" name="validation-file">
        </b-form-group>
        <b-form-group horizontal label="下拉多选">
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
      </b-form>

    </b-card>
    <div class="action">
      <b-btn variant="primary">保存</b-btn>
      <b-btn variant="default">取消</b-btn>
    </div>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>
<style lang='scss'>
  @import 'vendor/libs/vue-multiselect/vue-multiselect.scss';
  @import 'vendor/libs/vue-input-tag/vue-input-tag.scss';

  .form-temp {
    .action {
      float: right;
    }
  }
</style>
<script>
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
import Multiselect from 'vue-multiselect'
import flatPickr from 'vue-flatpickr-component'
// import {Japanese} from 'flatpickr/dist/l10n/ja.js' 语言包没中文，需要的时候自己造一个语言包

export default {
  components: {
    Multiselect,
    flatPickr
  },
  data () {
    return {
      breadCrumbs: [{ text: '面包屑', href: '#' }, { text: '第二级', href: '#' }, { text: '表单页', active: true }],
      options: [
        { text: '选项1', value: 1 },
        { text: '选项2', value: 2 },
        { text: '选项3', value: 3 }
      ],
      groupValue: [],
      groupOptions: options3,
      singleStringValue: '',
      singleStringOptions: options1,
      text: '文本区域',
      date: '',
      dateConfig: {
        // wrap: true, // set wrap to true only when using 'input-group'
        // altFormat: 'M	j, Y',
        altInput: true,
        dateFormat: 'Y-m-d'
        // locale: Japanese, // locale for this instance only
      },
      rangeConfig: {
        mode: 'range',
        altInput: true,
        animate: true
      },
      range: ''
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
