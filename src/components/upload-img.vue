<!-- 案件材料，图片上传组件 -->
<template>
  <view>
    <view class="form">
      <view class="form-item border-bottom-none">
        <view class="form-label">案件材料(图片)</view>
        <view class="update-img">
           <view @click="previewImage(val, form.updateData)" class="update-img-item" v-for="(val, key) in form.updateData" :key="key">
             <img  class="update-img-max" :src="val" >
             <icon @click.stop="cancelImage(key)" v-if="upload" class="cancel-img-icon" type="cancel" size="20"/>
           </view>
           <view @click="chooseImage" class="update-img-item" v-if="upload && form.updateData && form.updateData.length < uploadMax">
             <img  class="update-img-icon" src="../images/icon-pat.jpg" >
           </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
let _this = null
export default {
  props: {
    form: {
      type: Object,
      default: {
        updateData: [],
        updateDataFiles: []
      }
    },
    // 默认为图片预览，true：可上传，删除图片。
    upload: {
      type: Boolean,
      default: false
    },
    // 上传图片默认最大数为50
    uploadMax: {
      type: Number,
      default: 50
    }
  },
  methods: {
    // 上传图片
    chooseImage () {
      wx.chooseImage({
        count: 9, // max:9
        sizeType: ['compressed'], // 压缩图
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          _this.form.updateData = [..._this.form.updateData, ...res.tempFilePaths]
          _this.form.updateDataFiles = [..._this.form.updateDataFiles, ...res.tempFiles]
          console.log(_this.form.updateData)
          console.log(_this.form.updateDataFiles)
        }
      })
    },
    // 预览图片
    previewImage (val, array) {
      wx.previewImage({
        current: val, // 当前显示图片的http链接
        urls: array // 需要预览的图片http链接列表
      })
    },
    cancelImage (key) {
      wx.showModal({
        content: `是否删除第${key + 1}张图片？`,
        confirmText: '删除',
        cancelText: '取消',
        success: function (res) {
          if (res.confirm) {
            _this.form.updateData.splice(key, 1)
            _this.form.updateDataFiles.splice(key, 1)
          }
        }
      })
    }
  },
  onReady () {
    _this = this
  }
}
</script>

<style scoped lang="less">
@import '../less/form.less';
</style>
