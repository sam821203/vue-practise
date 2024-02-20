/* 
  該檔案室整個項目的入口檔案
  1. vue.js 是完整版的 vue，包含：核心功能 + 模板解析器
  2. vue.runtime.xxx.js 是運行版的 vue，只包含：核心功能；沒有模板解析器
  3. 因為 vue.runtime.xxx.js 沒有模板解析器，所以不能使用 template 配置項，需要使用 render 函數接收到的 createElement 函數去指定具體內容
*/

import Vue from 'vue'
import App from './App.vue'
import { mixin1, mixin2 } from './mixin'

Vue.config.productionTip = false

// 當這樣做時，所有 vm 和 VueComponent 都會有
Vue.mixin(mixin1)
Vue.mixin(mixin2)

const vm = new Vue({
    render: (h) => h(App),
})

vm.$mount('#app')
