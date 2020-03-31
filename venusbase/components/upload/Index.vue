<template>
<div class="upload-box">
  <div class="upload-img-wrapper" v-if="type === 'img'">
    <div class="img-wrapper" :class="{'show-reload': showReload}">
      <img :src="imgUrl" alt="">
      <div class="upload-wrapper" ref="upload" v-if="uploadImgBox">
        <div class="icon"><i class="ion ion-md-add"></i></div>
        <div class="label">上传照片</div>
        <input class="imgFile" type="file" @change="doUpload($event.target, currentIndex)">
      </div>
      <div class="uploaded-wrappper" ref="uploaded">
        <span>点击重新上传</span>
        <input class="imgFile" type="file" @change="doUpload($event.target, currentIndex)">
      </div>
    </div>
  </div>
  <div class="upload-file-wrapper" v-if="type === 'file'">
    <div class="file-name" v-if="fileName !== ''">
      <span>{{fileName}}</span>
      <i class="ion-ios-close" @click="clear()"></i>
    </div>
    <div class="file-wrapper">
      <b-btn variant="default">
        <span>{{btn_text}}</span>
        <input type="file" ref="file" @change="uploadFile($event.target)">
      </b-btn>
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: {
    upLoadImg: Function,
    upLoadFile: Function,
    imgUrl: {
      default: '',
      type: String,
    },
    currentIndex: {
      default: 0,
      type: Number,
    },
    type: {
      default: '',
      type: String
    },
  },
  components: {
  },
  watch: {
    'imgUrl': {
      handler (url) {
        if (url) {
          this.showReload = true
          this.uploadImgBox = false
        } else {
          this.showReload = false
          this.uploadImgBox = true
        }
      },
      immediate: true
    },
    'fileName': function (name) {
      if (name !== '') {
        this.btn_text = '重新上传'
      } else {
        this.btn_text = '上传文件'
      }
    }
  },
  data () {
    return {
      showReload: false,
      uploadImgBox: true,
      btn_text: '上传文件',
      fileName: ''
    }
  },
  mounted () {},
  methods: {
    doUpload (file, currentIndex) {
      this.upLoadImg(file, currentIndex)
    },
    uploadFile (file) {
      this.fileName = file.files['0'].name
      this.upLoadFile(file)
    },
    clear () {
      this.fileName = ''
      this.$refs.file.value = ''
    }
  }
}
</script>

<style lang="scss">
  .upload-box {
    margin: 8px 0;
  }

  .upload-img-wrapper {
    width: 84px;
    height: auto;

    .img-wrapper {
      width: 100%;
      height: 84px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }

      img[src=""],img:not([src]){
        opacity:0;
      }

      .upload-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        -webkit-border: 1px dashed #eee;
        border: 1px dashed #eee;
        border-radius: 1px;

        .icon {
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          margin: 24px auto 0;
          font-size: 20px;
          color: #8c8e90;
        }

        .label {
          font-size: 12px;
          color: #8c8e90;
          text-align: center;
          font-family: SourceHanSansCN-Medium;
          line-height: 12px;
          margin-top: 8px;
        }

        &:hover {
          .icon, .label {
            color: #4E5155;
          }
        }
      }

      .imgFile {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }

      .uploaded-wrappper {
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: 0.2);
        border-radius: 8px;
        border-radius: 8px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: none;
        line-height: 84px;
        text-align: center;

        span {
          font-family: SourceHanSansCN-Regular;
          font-size: 10px;
          color: #FFFFFF;
        }
      }

      &.show-reload {
        &:hover {
          .uploaded-wrappper {
            display: block;
          }
        }
      }
    }
  }

  .upload-file-wrapper {
    width: auto;
    height: 28px;
    position: relative;
    font-family: SourceHanSansCN-Medium;
    font-size: 12px;
    color: #4A4A4A;

    .file-wrapper {
      min-width: 72px;
      height: 100%;
      display: inline-block;
      text-align: center;
      line-height: 28px;
      position: relative;
      top: -2px;

      input {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }

      .btn {
        margin: 0 !important;
      }
    }

    .file-name {
      display: inline-block;
      margin-right: 32px;
      line-height: 28px;

      i {
        margin-left: 10px;
      }
    }
  }
</style>
