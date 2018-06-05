<template>
  <div class="container">

    <div class="index-show" @click="bindViewTap">
      <img class="index-img" src="./index.jpg" background-size="contain" />
    </div>

    <div class="card-title">业务办理</div>

    <div class="index-nav">
      <div class="index-nav-item">
        <img class="index-nav-item-img" src="./index-item-1.png">
        <div class="index-nav-item-text">在线投诉</div>
      </div>
      <div class="index-nav-item">
        <img class="index-nav-item-img" src="./index-item-2.png">
        <div class="index-nav-item-text">申请调解</div>
      </div>
      <div class="index-nav-item">
        <img class="index-nav-item-img" src="./index-item-3.png">
        <div class="index-nav-item-text">我的案件</div>
      </div>
      <div class="index-nav-item">
        <img class="index-nav-item-img" src="./index-item-4.png">
        <div class="index-nav-item-text">模拟理赔</div>
      </div>
    </div>

    <div class="serve">
      <div class="card-title">服务指南</div>
      <div class="serve-nav">
        <div class="serve-nav-item">
          <img class="serve-nav-item-img-1" src="./serve-item-11.jpg">
          <img class="serve-nav-item-img-2" src="./serve-item-1.png">
          <div class="serve-nav-item-text">了解投诉处理流程</div>
        </div>
        <div class="serve-nav-item">
          <img class="serve-nav-item-img-1" src="./serve-item-22.jpg">
          <img class="serve-nav-item-img-2" src="./serve-item-2.png">
          <div class="serve-nav-item-text">了解案件调解流程</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {}
  },

  components: {
    card
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
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
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.latitude = res.latitude // 经度
        this.longitude = res.longitude // 纬度
      }
    })
  }
}
</script>

<style scoped>
.index-show {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#0BA6AB, #fff);
  padding: 80rpx 0 48rpx;
}

.index-img {
  width: 634rpx;
  height: 370rpx;
  border-radius: 35rpx;
}

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
  background: #0BA6AB;
}

.index-nav{
  display: flex;
  padding: 40rpx 15rpx 48rpx;
  justify-content: space-around;
}
.index-nav-item{
  width: 150rpx;
  height: 150rpx;
  border: 1px solid #D7D7D7;
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

.serve{
  border-top: 20rpx solid #f6f6f6;
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
  border: 1px solid #D7D7D7;
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
