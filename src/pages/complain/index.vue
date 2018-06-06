<template>
  <!-- 在线投诉 -->
  <view>
      <view class="form">
        <view class="form-item">
          <view class="form-label">案件类型</view>
          <view class="form-input">
            <picker @change="bindPickerChange" :value="typeIndex" :range="type">
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
              <radio @click="bindRadioChange" :checked="same" value="与投保人一致" color="#0BA6AB"/>与投保人一致
            </view>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">被保人身份证号</view>
          <view class="form-input">
            <input v-model="form.userId2" :disabled="same" placeholder="被保人身份证号" type="idcard" maxlength="18" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">保单号</view>
          <view class="form-input">
            <input placeholder="保单号" maxlength="50" placeholder-style="color:#eee"/>
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
      }
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
    bindPickerChange (e) {
      this.typeIndex = e.target.value
    },
    bindRadioChange () {
      this.same ? this.same = false : this.same = true
    }
  }
}
</script>

<style scoped lang="less">
@import '../../less/color.less';
.form{
  padding-left:34rpx;
  font-family: PingFangSC-Regular;
  letter-spacing: 0;
  line-height: 36rpx;
}
input{
  height: 36rpx;
  min-height: 36rpx;
}
radio{
  height: 36rpx;
  min-height: 36rpx;
  // scale:2D 缩放转换。
  transform:scale(0.75);
}
.form-item{
  border-bottom: 1px solid #E0E0E0;
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
/* 同步radio */
.form-input-same{
  position: absolute;
  right:26rpx;
  top:-5rpx;
  color: @baseColor;
  z-index: 2;
}
</style>
