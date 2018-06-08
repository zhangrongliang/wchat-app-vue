<template>
  <!-- 我的案件-form -->
  <view>

      <view class="form">
        <view class="form-item">
          <view class="form-label">案件类型</view>
          <view class="form-input">{{form.type[form.typeIndex]}}</view>
        </view>
        <view class="form-item">
          <view class="form-label">投诉人姓名</view>
          <view class="form-input">投诉人姓名</view>
        </view>
        <view class="form-item">
          <view class="form-label">联系电话</view>
          <view class="form-input">投诉人姓名</view>
        </view>
        <view class="form-item">
          <view class="form-label">投保人姓名</view>
          <view class="form-input">投诉人姓名</view>
        </view>
        <view class="form-item">
          <view class="form-label">投保人身份证号</view>
          <view class="form-input">投诉人姓名</view>
        </view>
        <view class="form-item">
          <view class="form-label">被保人姓名</view>
          <view class="form-input">投诉人姓名</view>
        </view>
        <view class="form-item">
          <view class="form-label">被保人身份证号</view>
          <view class="form-input">投诉人姓名</view>
        </view>
        <view class="form-item border-bottom-none">
          <view class="form-label">保单号</view>
          <view class="form-input">投诉人姓名</view>
        </view>
      </view>

      <view class="form">
        <view class="form-item">
          <view class="form-label">承保地</view>
        <view class="form-input">投诉人姓名</view>
        </view>
        <view class="form-item border-bottom-none">
          <view class="form-label">投保渠道</view>
          <view class="form-input">投诉人姓名</view>
        </view>
      </view>

      <!-- 财险 -->
      <view class="form">
        <view class="form-item">
          <view class="form-label">是否车险</view>
          <view class="form-input">
            <switch class="form-switch" checked disabled color="#0BA6AB"/>
          </view>
        </view>
        <view class="form-item" v-if="form.switch1">
          <view class="form-label">车牌号码</view>
          <view class="form-input">投诉人姓名</view>
        </view>
        <view class="form-item">
          <view class="form-label">是否报案</view>
          <view class="form-input">
            <switch class="form-switch" checked disabled color="#0BA6AB"/>
          </view>
        </view>
        <view class="form-item border-bottom-none" v-if="form.switch2">
          <view class="form-label">报案号</view>
          <view class="form-input">投诉人姓名</view>
        </view>
      </view>

      <view class="form">
        <view class="form-item">
          <view class="form-label">投诉内容</view>
          <view class="form-input">投诉内容</view>
        </view>
        <view class="form-item border-bottom-none">
          <view class="form-label">诉求内容</view>
          <view class="form-input">诉求内容</view>
        </view>
      </view>

      <!-- 案件材料 -->
      <upload-img :form="form" :upload="true"></upload-img>

      <button @click="handleSubmit('上传资料')" class="tap-button" :class="{ 'tap-button-disabled' :  form.updateDataFiles.length <= 0}" type="primary" :loading="loading"> 上传资料 </button>

  </view>
</template>

<script>
import uploadImg from '../../components/upload-img.vue'
let _this = null

export default {
  data () {
    return {
      form: {
        type: ['财险', '寿险'],
        typeIndex: 0,
        // 与投保人一致
        same: false,
        user: '',
        userId: '',
        user2: '',
        userId2: '',
        switch1: false,
        switch2: false,
        // 地址，三级联动数据
        region: [],
        // images
        updateData: [],
        // images file
        updateDataFiles: []
      },
      loading: false
    }
  },
  components: {
    uploadImg
  },
  methods: {
    // 小程序textarea无法v-model，所以只有失去焦点是赋值
    bindTextAreaBlur (e) {
      console.log(e.target.value)
    },
    handleSubmit (text) {
      if (this.form.updateDataFiles.length <= 0) return false
      this.loading = true
      wx.showLoading({
        title: text + `中...`,
        mask: true
      })
      // 10s隐藏loading
      let time = 0
      let loadingTime = setInterval(_ => {
        time += 1
        if (time >= 10) {
          _this.loading = !_this.loading
          wx.hideLoading()
          clearInterval(loadingTime)
        }
      }, 1000)
    }
  },
  onReady () {
    _this = this
    this.loading = false
    // set nav title
    wx.setNavigationBarTitle({
      title: '我的案件-' + _this.form.type[_this.form.typeIndex]
    })
  }
}
</script>

<style scoped lang="less">
@import '../../less/form.less';
</style>
