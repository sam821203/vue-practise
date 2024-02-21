/* 
  該檔案室整個項目的入口檔案
  1. vue.js 是完整版的 vue，包含：核心功能 + 模板解析器
  2. vue.runtime.xxx.js 是運行版的 vue，只包含：核心功能；沒有模板解析器
  3. 因為 vue.runtime.xxx.js 沒有模板解析器，所以不能使用 template 配置項，需要使用 render 函數接收到的 createElement 函數去指定具體內容
*/

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 第一種寫法 vc
// const Demo = Vue.extend({})
// const d = new Demo()

// 第二種寫法 vm
const vm = new Vue({
    render: (h) => h(App),
    beforeCreate() {
        // 安裝全局事件總線，叫 "總線" 是因為全局的 vc 和 vm 都能看到它
        Vue.prototype.$bus = this
    },
})

vm.$mount('#app')
