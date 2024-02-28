import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const vm = new Vue({
  render: (h) => h(App),
  beforeCreate() {
    // 全局事件
    Vue.prototype.$bus = this;
  },
});

vm.$mount("#app");
