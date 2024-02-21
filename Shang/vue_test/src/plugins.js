export default {
    /* 
        1.用於增強 Vue
        2.包含 install 方法的一個物件，install 的第一個參數是 Vue，第二個以後的參數是插件使用者傳遞的參數的數據
        3.這裡的部分指令等等，vm 和 VueComponent 都能使用
    */
    install(Vue, options) {
        // 定義全局指令
        Vue.directive('fbind', {
            bind(element, binding) {
                console.log('bind')
                element.value = binding.value
            },
            inserted(element, binding) {
                console.log('inserted')
                element.focus()
            },
            update(element, binding) {
                console.log('update')
                element.value = binding.value
            },
        })
        // 定義全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                }
            },
        })
        // 給 Vue 原型上添加方法
        Vue.prototype.hello = function () {
            console.log('Method in plugins')
        }
    },
}
