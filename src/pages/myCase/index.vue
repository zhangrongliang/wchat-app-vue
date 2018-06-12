<template>
  <!-- 我的案件 -->
  <view class="my-case">
    <!-- list -->
    <view class="case-list">
      <view class="case-title">投诉工单编号：09876543322</view>
      <view class="case-content">
        <view class="case-msg case-msg-before-active">投诉类别：财险</view>
        <view class="case-msg case-msg-before-active">受理结果：受理案件，转有效件</view>
        <view class="case-msg case-msg-before-active case-msg-active">最新状态：已提交，投诉处理中心受理中</view>
        <view class="case-msg">资料是否齐全：否</view>
      </view>
      <view class="case-operation">
        <a href="/pages/myCaseFrom/main" class="case-button">上传资料</a>
      </view>
    </view>
    <!-- list -->
    <view class="case-list">
      <view class="case-title">投诉工单编号：09876543322</view>
      <view class="case-content">
        <view class="case-msg case-msg-before-active">投诉类别：财险</view>
        <view class="case-msg case-msg-before-active">受理结果：受理案件，转有效件</view>
        <view class="case-msg case-msg-before-active case-msg-active">最新状态：已提交，投诉处理中心受理中</view>
        <view class="case-msg case-msg-before-active">资料是否齐全：否</view>
      </view>
    </view>
    <!-- list -->
    <view class="case-list">
      <view class="case-title">投诉工单编号：09876543322</view>
      <view class="case-content">
        <view class="case-msg case-msg-before-active">投诉类别：财险</view>
        <view class="case-msg case-msg-before-active">受理结果：受理案件，转有效件</view>
        <view class="case-msg case-msg-before-active case-msg-active">最新状态：已提交，投诉处理中心受理中</view>
        <view class="case-msg">资料是否齐全：否</view>
      </view>
      <view class="case-operation">
        <a href="/pages/myCaseFrom/main" class="case-button">上传资料</a>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  methods: {}
}
</script>


<style scoped lang="less">
@import '../../less/base.less';

.my-case {
  background-color: @backColorGray;
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: @blackColor;
  letter-spacing: 0;
}

.case-list {
  background-color: @whiteColor;
  margin-top: 32rpx;
}

.case-title {
  padding: 32rpx 0 22rpx 32rpx;
  border-bottom: 1px solid @borderColor;
}

.case-content {
  font-size: 26rpx;
  padding: 20rpx 0;
}

.case-msg {
  color: @colorA4;
  padding: 10rpx 72rpx;
  position: relative;
  .text-ellipsis;
}

.case-msg:before {
  position: absolute;
  content: ' ';
  left: 32rpx;
  top: 15rpx;
  width: 20rpx;
  height: 20rpx;
  border: 1px solid #9B9B9B;
  border-radius: 50%;
}

.case-msg-before-active:before {
  border: 1px solid @baseColor !important;
  .background-fade(@baseColor, 40%);
}

.case-msg-active {
  color: @baseColor;
}
// 操作

.case-operation {
  border-top: 1px solid @borderColor;
  .text-right;
  padding: 20rpx 32rpx;
}

.case-button {
  display: inline-block;
  width: 180rpx;
  height: 72rpx;
  background-color: @baseColor;
  line-height: 72rpx;
  font-size: 26rpx;
  color: #FFFFFF;
  letter-spacing: 0;
  .text-center;
}

</style>
