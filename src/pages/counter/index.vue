<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a @click="navigateBack" class="home">返回</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    navigateBack () {
      wx.navigateBack()
    }
  },
  created () {
    // 获取经纬度
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: (res) => {
    //     this.latitude = res.latitude // 经度
    //     this.longitude = res.longitude // 纬度
    //   }
    // })
    // 跳转路径
    // const url = '../counter/main'
    //   wx.navigateTo({ url })
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
