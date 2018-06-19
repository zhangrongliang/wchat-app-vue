# wchat-app-vue-template

### 个人喜欢原生，文件分类很清晰 
1. 关键字：vue,less,components。
2. 微信小程序上传目前只支持img、video

## code

``` javascript

import API from '../../API/index.js'

Vue.http = Vue.prototype.$http = API

this.$http

```

## 预览

![申请纠调](https://usails-public.cdn.usails.cn/wxapp2.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
