<template>
  <!-- 在线投诉 -->
  <view>

      <view class="form">
        <view class="form-item">
          <view class="form-label">案件类型</view>
          <view class="form-input form-select-right-icon">
            <picker @change="form.typeIndex = $event.target.value" :value="form.typeIndex" :range="form.type">
               <view>
                 {{form.type[form.typeIndex]}}
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
            <input v-model="form.user2" :disabled="form.same" placeholder="被保人姓名" maxlength="10" placeholder-style="color:#eee"/>
            <view class="form-input-same">
              <radio @click="form.same = !form.same" :checked="form.same" value="与投保人一致" color="#0BA6AB"/>与投保人一致
            </view>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">被保人身份证号</view>
          <view class="form-input">
            <input v-model="form.userId2" :disabled="form.same" placeholder="被保人身份证号" type="idcard" maxlength="18" placeholder-style="color:#eee"/>
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
            <picker mode="region" @change="form.region = $event.target.value" :value="form.region">
              <view v-if="form.region[2]">
                {{form.region[0]}}，{{form.region[1]}}，{{form.region[2]}}
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
            <switch class="form-switch" :checked="form.switch1" @change="form.switch1 = $event.target.value" color="#0BA6AB"/>
          </view>
        </view>
        <view class="form-item" v-if="form.switch1">
          <view class="form-label">车牌号码</view>
          <view class="form-input">
            <input placeholder="车牌号码" maxlength="10" placeholder-style="color:#eee"/>
          </view>
        </view>
        <view class="form-item">
          <view class="form-label">是否报案</view>
          <view class="form-input">
            <switch class="form-switch" :checked="form.switch2" @change="form.switch2 = $event.target.value" color="#0BA6AB"/>
          </view>
        </view>
        <view class="form-item border-bottom-none" v-if="form.switch2">
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

      <!-- 案件材料 -->
      <upload-img :form="form" :upload="true"></upload-img>

      <button @click="handleSubmit('申请调解')" class="tap-button" type="primary" :loading="loading"> 申请调解 </button>

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
        updateData: []
      },
      loading: false
    }
  },
  components: {
    uploadImg
  },
  watch: {
    'form.same' (val, oldVal) {
      if (val) {
        this.form.user2 = this.form.user
        this.form.userId2 = this.form.userId
      }
    },
    // 与投保人一致
    'form.user' (val, oldVal) {
      if (!this.form.same) return false
      this.form.user2 = this.form.user
    },
    'form.userId' (val, oldVal) {
      if (!this.form.same) return false
      this.form.userId2 = this.form.userId
    }
  },
  methods: {
    // 小程序textarea无法v-model，所以只有失去焦点是赋值
    bindTextAreaBlur (e) {
      console.log(e.target.value)
    },
    handleSubmit (text) {
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
    // 重置数据
    for (let item in this.form) {
      switch (typeof this.form[item]) {
        case 'number':
          this.form[item] = 0
          break
        case 'boolean':
          this.form[item] = false
          break
        case 'string':
          this.form[item] = ''
          break
        case 'object':
          if (item !== 'type') this.form[item] = []
          break
      }
    }
  }
}
</script>

<style scoped lang="less">
@import '../../less/form.less';
</style>
