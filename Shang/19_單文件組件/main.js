import App from './App.vue'

const vm = new Vue({
    template: `<App></App>`,
    components: {
        App,
    },
})

vm.$mount('#root')
