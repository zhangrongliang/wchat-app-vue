<template>
  <!-- 我的案件-form -->
  <view class="font-base">
      <view class="form-plan">
        <view class="plan-list" :class="{'plan-list-active': item.type,'plan-list-before': item.type, 'plan-list-none': (key + 1) == plan.length}" v-for="(item, key) in plan" :key="key">
          <view class="plan-lable" :class="{'black-color': item.type}">{{ item.name }}</view>
          <view class="plan-date">{{ item.date }}</view>
        </view>
      </view>
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
      plan: [
        {
          name: '投诉已提交',
          date: '2018-04-14 13:00',
          type: true
        },
        {
          name: '投诉处理中心受理',
          date: '2018-04-14 13:00',
          type: true
        },
        {
          name: '补全投诉资料',
          date: '2018-04-14 13:00',
          type: true
        },
        {
          name: '案件转涉案公司处理',
          date: '2018-04-14 13:00',
          type: false
        },
        {
          name: '协商处理',
          date: '2018-04-14 13:00',
          type: false
        },
        {
          name: '结案',
          date: '2018-04-14 13:00',
          type: false
        }
      ],
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
// form-plan
.form-plan{
  border-bottom: 20rpx solid @backColorGray;
  padding: 40rpx 120rpx;
}
.plan-list{
  padding-bottom: 40rpx;
  position: relative;
  color: #9B9B9B;
}
.plan-list:before{
  content: " ";
  position: absolute;
  left: -70rpx;
  top: 0;
  width: 32rpx;
  height: 32rpx;
  background-color: #D0D0D0;
  border-radius: 50%;
  border: 4rpx solid @whiteColor;
  z-index: 2;
}
.plan-list-active:before{
  background-color: @baseColor;
}
.plan-list:after{
  content: " ";
  position: absolute;
  left: -53rpx;
  top: 0;
  width: 2rpx;
  height: 100%;
  background-color: #D0D0D0;
  z-index: 1;
}
.plan-list-active:after{
  background-color: @baseColor;
}
.plan-list-none:after{
  display: none;
}
.plan-lable{
  font-size: 28rpx;
}
.plan-date{
  font-size: 20rpx;
}
</style>
