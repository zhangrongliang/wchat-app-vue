import Vue from 'vue'
import App from './index'

import API from '../../API/index.js'

Vue.http = Vue.prototype.$http = API

const app = new Vue(App)
app.$mount()
