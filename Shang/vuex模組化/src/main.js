import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false

const vm = new Vue({
    // store 裡包含 actions, mutations 等等...
    store,
    render: (h) => h(App),
})

vm.$mount('#app')
