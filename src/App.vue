<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>
<style >
  .container{
    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    color: #000000;
  }
</style>
