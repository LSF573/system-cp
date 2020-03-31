<template>
  <div class="col loading-wrapper" v-if="show">
    <div class="sk-circle sk-primary">
      <div class="sk-circle1 sk-child"></div>
      <div class="sk-circle2 sk-child"></div>
      <div class="sk-circle3 sk-child"></div>
      <div class="sk-circle4 sk-child"></div>
      <div class="sk-circle5 sk-child"></div>
      <div class="sk-circle6 sk-child"></div>
      <div class="sk-circle7 sk-child"></div>
      <div class="sk-circle8 sk-child"></div>
      <div class="sk-circle9 sk-child"></div>
      <div class="sk-circle10 sk-child"></div>
      <div class="sk-circle11 sk-child"></div>
      <div class="sk-circle12 sk-child"></div>
    </div>
    <div class="text">{{text}}</div>
  </div>
</template>

<style src="../../vendor/libs/spinkit/spinkit.scss" lang="scss"></style>
<style lang="scss">
  .loading-wrapper {
    .sk-circle .sk-child:before {
      background: none !important;
      background-color: #000 !important;
    }
    .sk-circle {
      margin: 0 auto 18px;
    }
    .text {
      text-align: center;
    }
  }
</style>

<script>
export default {
  name: 'miscellaneous-spinkit',
  metaInfo: {
    title: 'SpinKit - Miscellaneous'
  },
  props: {
    show: Boolean,
    text: String
  }
}
</script>
