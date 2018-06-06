<template>
  <!-- 在线投诉 -->
  <view>

      <view class="form">
        <view class="form-item">
          <view class="form-label">案件类型</view>
          <view class="form-input form-select-right-icon">
            <picker @change="typeIndex = $event.target.value" :value="typeIndex" :range="type">
               <view>
                 {{type[typeIndex]}}
               </view>
             </picker>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">投诉人姓名</view>
          <view class="form-input">
            <input placeholder="投诉人姓名" maxlength="10" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">联系电话</view>
          <view class="form-input">
            <input placeholder="联系电话" type="number" maxlength="11" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">投保人姓名</view>
          <view class="form-input">
            <input v-model="form.user" placeholder="投保人姓名" maxlength="10" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">投保人身份证号</view>
          <view class="form-input">
            <input v-model="form.userId" placeholder="投保人身份证号" type="idcard" maxlength="18" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">被保人姓名</view>
          <view class="form-input">
            <input v-model="form.user2" :disabled="same" placeholder="被保人姓名" maxlength="10" placeholder-style="color:#eee"/>
            <view class="form-input-same">
              <radio @click="same ? same =false : same = true" :checked="same" value="与投保人一致" color="#0BA6AB"/>与投保人一致
            </view>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">被保人身份证号</view>
          <view class="form-input">
            <input v-model="form.userId2" :disabled="same" placeholder="被保人身份证号" type="idcard" maxlength="18" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item border-bottom-none">
          <view class="form-label">保单号</view>
          <view class="form-input">
            <input placeholder="保单号" maxlength="50" placeholder-style="color:#eee"/>
          </view>
        </view>
      </view>

      <view class="form">
        <view class="form-item">
          <view class="form-label">承保地</view>
          <view class="form-input form-select-right-icon">
            <picker mode="region" @change="region = $event.target.value" :value="region">
              <view v-if="region[2]">
                {{region[0]}}，{{region[1]}}，{{region[2]}}
              </view>
              <view v-else class="placeholder-color">选择承保地</view>
            </picker>
          </view>
        </view>
        <view class="form-item border-bottom-none">
          <view class="form-label">投保渠道</view>
          <view class="form-input">
            <input placeholder="投保渠道" maxlength="50" placeholder-style="color:#eee"/>
          </view>
        </view>
      </view>

      <!-- 财险 -->
      <view class="form">
        <view class="form-item">
          <view class="form-label">是否车险</view>
          <view class="form-input">
            <switch class="form-switch" :checked="switch1" @change="switch1 = $event.target.value" color="#0BA6AB"/>
          </view>
        </view>
        <view class="form-item" v-if="switch1">
          <view class="form-label">车牌号码</view>
          <view class="form-input">
            <input placeholder="车牌号码" maxlength="10" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">是否报案</view>
          <view class="form-input">
            <switch class="form-switch" :checked="switch2" @change="switch2 = $event.target.value" color="#0BA6AB"/>
          </view>
        </view>
        <view class="form-item border-bottom-none" v-if="switch2">
          <view class="form-label">报案号</view>
          <view class="form-input">
            <input placeholder="报案号" maxlength="50" placeholder-style="color:#eee"/>
          </view>
        </view>
      </view>

      <view class="form">
        <view class="form-item">
          <view class="form-label">投诉内容</view>
          <view class="form-input">
            <textarea @blur="bindTextAreaBlur" maxlength="1000" auto-height placeholder="投诉内容(max:1000字)" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item border-bottom-none">
          <view class="form-label">诉求内容</view>
          <view class="form-input">
            <textarea @blur="bindTextAreaBlur" maxlength="1000" auto-height placeholder="诉求内容(max:1000字)" placeholder-style="color:#eee"/>
          </view>
        </view>
      </view>

      <view class="form">
        <view class="form-item border-bottom-none">
          <view class="form-label">案件材料</view>
          <view class="update-img">
             <view @click="previewImage(val, updateData)" class="update-img-item" v-for="(val, key) in updateData" :key="key">
               <img  class="update-img-max" :src="val" >
             </view>
             <view @click="chooseImage" class="update-img-item">
               <img  class="update-img-icon" src="./icon-pat.jpg" >
             </view>
          </view>
        </view>
      </view>

  </view>
</template>

<script>

export default {
  data () {
    return {
      typeIndex: 0,
      type: ['财险', '寿险'],
      same: false,
      form: {
        user: '',
        userId: '',
        user2: '',
        userId2: ''
      },
      // 地址，三级联动数据
      region: [],
      switch1: false,
      switch2: false,
      // updated
      updateData: []
    }
  },
  watch: {
    same (val, oldVal) {
      if (val) {
        this.form.user2 = this.form.user
        this.form.userId2 = this.form.userId
      }
    }
  },
  methods: {
    // 小程序textarea无法v-model，所以只有失去焦点是赋值
    bindTextAreaBlur (e) {
      console.log(e.target.value)
    },
    // 上传图片
    chooseImage () {
      let _this = this
      wx.chooseImage({
        count: 9, // max:9
        sizeType: ['compressed'], // 压缩图
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          _this.updateData = [..._this.updateData, ...res.tempFilePaths]
        }
      })
    },
    // 预览图片
    previewImage (val, array) {
      wx.previewImage({
        current: val, // 当前显示图片的http链接
        urls: array // 需要预览的图片http链接列表
      })
    }
  },
  onHide () {
    // 利用页面重载，重置三级联动 异常，手动重置
    this.region = []
    // 利用页面重载，重置switch 异常，手动重置
    this.switch1 = false
    this.switch2 = false
  }
}
</script>

<style scoped lang="less">
@import '../../less/color.less';

// 为了form-item 高度一致，重置input高度
input{
  height: 36rpx;
  min-height: 36rpx;
}
.placeholder-color{
  color: #eee;
}
.border-bottom-none {
  border-bottom:none !important;
}

/* radio */
radio{
  height: 36rpx;
  min-height: 36rpx;
  // scale:2D 缩放转换。
  transform:scale(0.75);
}
.form-input-same{
  position: absolute;
  right:26rpx;
  top:-5rpx;
  color: @baseColor;
  z-index: 2;
}

// switch
.form-switch{
  // scale:2D 缩放转换。
  transform:scale(0.6);
  position: absolute;
  top: -16rpx;
  z-index: 2;
}

// textarea
textarea{
  width: 100% !important;
}

.form{
  padding-left:34rpx;
  font-family: PingFangSC-Regular;
  letter-spacing: 0;
  line-height: 36rpx;
  border-bottom: 20rpx solid @backColorGray;
}
.form-item{
  border-bottom: 1px solid #eee;
  padding: 30rpx 0 34rpx;
  display: flex;
}
.form-label{
  width: 300rpx;
  font-size: 26rpx;
  color: #686868;
}
.form-input{
  width:100%;
  font-size: 28rpx;
  color: @blackColor;
  position: relative;
  z-index: 1;
}
@rigthIconSize: 33rpx;
.form-select-right-icon:after{
  content:" ";
  position: absolute;
  right: 36rpx;
  top: 5rpx;
  width: @rigthIconSize;
  height: @rigthIconSize;
  background: url("./icon-right.jpg") no-repeat center;
  background-size: @rigthIconSize;
}
// 上传img
.update-img{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
@uploadSize: 120rpx;
.update-img-item{
  width: @uploadSize;
  height: @uploadSize;
  border: 1px solid @borderColor;
  display: flex;
  align-items:center;
  margin: 10rpx;
  overflow: hidden;
}
.update-img-icon{
   display: block;
   width: 36rpx;
   height: 32rpx;
   margin: auto;
}
.update-img-max{
  max-width: 100%;
  max-height: 100%;
}

</style>
