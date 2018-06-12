<template>
  <view class="font-base">

    <view class="index-show">
      <img @click="goPage" class="index-img" src="../../images/index.jpg" background-size="contain" />
    </view>

    <view class="card-title">业务办理</view>

    <view class="index-nav">
      <a href="/pages/complain/main" class="index-nav-item">
        <img class="index-nav-item-img" src="../../images/index-item-1.png">
        <view class="index-nav-item-text">在线投诉</view>
      </a>
      <a href="/pages/apply/main" class="index-nav-item">
        <img class="index-nav-item-img" src="../../images/index-item-2.png">
        <view class="index-nav-item-text">申请调解</view>
      </a>
      <a href="/pages/myCase/main" class="index-nav-item">
        <img class="index-nav-item-img" src="../../images/index-item-3.png">
        <view class="index-nav-item-text">我的案件</view>
      </a>
      <a href="/pages/simulate/main" class="index-nav-item">
        <img class="index-nav-item-img" src="../../images/index-item-4.png">
        <view class="index-nav-item-text">模拟理赔</view>
      </a>
    </view>

    <view class="serve">
      <view class="card-title">服务指南</view>
      <view class="serve-nav">
        <view class="serve-nav-item">
          <img class="serve-nav-item-img-1" src="../../images/serve-item-11.jpg">
          <img class="serve-nav-item-img-2" src="../../images/serve-item-1.png">
          <view class="serve-nav-item-text">了解投诉处理流程</view>
        </view>
        <view class="serve-nav-item">
          <img class="serve-nav-item-img-1" src="../../images/serve-item-22.jpg">
          <img class="serve-nav-item-img-2" src="../../images/serve-item-2.png">
          <view class="serve-nav-item-text">了解案件调解流程</view>
        </view>
      </view>

    </view>

  </view>
</template>

<script>

export default {
  data () {
    return {}
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    goPage () {
      const url = '../counter-demo/main'
      wx.navigateTo({ url })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped lang="less">
@import '../../less/base.less';

// 头部渐变
.index-show {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(@baseColor, @whiteColor);
  padding: 80rpx 0 48rpx;
}

.index-img {
  width: 634rpx;
  height: 370rpx;
  border-radius: 35rpx;
}

// title
.card-title{
  position: relative;
  padding: 0 60rpx;
  color: #4A4A4A;
}
.card-title:before{
  content:" ";
  position: absolute;
  left: 30rpx;
  top: 5rpx;
  width: 12rpx;
  height: 30rpx;
  background: @baseColor;
}

// 业务班级
.index-nav{
  display: flex;
  padding: 40rpx 15rpx 48rpx;
  justify-content: space-around;
}
.index-nav-item{
  display: block;
  width: 150rpx;
  height: 150rpx;
  border: 1px solid @borderColor;
  border-radius: 10rpx;
}
.index-nav-item-img{
  display: block;
  width: 70rpx;
  height: 70rpx;
  margin: 15rpx auto;
}
.index-nav-item-text{
  letter-spacing: -0.31px;
  text-align: center;
}

// 服务指南
.serve{
  border-top: 20rpx solid @backColorGray;
  padding:  36rpx 0;
}
.serve-nav{
  display: flex;
  padding: 52rpx 34rpx 26rpx;
  justify-content: space-between;
}
.serve-nav-item{
  width: 326rpx;
  height: 162rpx;
  border: 1px solid @borderColor;
  border-radius: 10rpx;
  display: flex;
  align-items:center;
  position: relative;
}
.serve-nav-item-img-1{
  width:106rpx;
  height:36rpx;
  margin: 0 24rpx 0 40rpx;
}
.serve-nav-item-img-2{
  width:148rpx;
  height:148rpx;
}
.serve-nav-item-text{
  position: absolute;
  width:  100%;
  text-align:center;
  bottom: -60rpx;
}
</style>
