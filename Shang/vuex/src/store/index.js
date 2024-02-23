import Vue from 'vue'
import Vuex from 'vuex'

// 當 use vuex 後，在創建 vm 時，就可以帶入 store 了
Vue.use(Vuex)

/**
 * 準備 actions，用於響應組件中的動作
 * @param {*} context = miniStore
 * @param {*} value = 傳過來的值
 */
const actions = {
    // 這裡也可以簡寫為 { commit }，直接將 context 做解構
    // increase(context, value) {
    //     context.commit('INCREASE', value)
    // },
    // decrease(context, value) {
    //     context.commit('DECREASE', value)
    // },
    increaseOdd(context, value) {
        if (context.state.sum % 2) {
            // 小技巧：commit 的 action actions 裡的用小寫
            context.commit('INCREASE', value)
        }
    },
    increaseWait(context, value) {
        setTimeout(() => {
            context.commit('INCREASE', value)
        }, 500)
    },
}
/**
 * 準備 mutations，用於操作數據 (state)
 * 在 mutations 裡，就不要寫業務邏輯了 (如判斷式、ajax 請求)，只做數據的操作
 * @param {*} state = store 裡的 state
 * @param {*} value = 傳過來的值
 */
const mutations = {
    INCREASE(state, value) {
        state.sum += value
    },
    DECREASE(state, value) {
        state.sum -= value
    },
}
// 準備 state，用於儲存數據
const state = {
    sum: 1,
    school: 'Data Cheers',
    subject: 'Data visualization',
    personList: [
        {
            id: 1,
            name: 'Shang',
            age: 18,
        },
        {
            id: 2,
            name: 'Kobe',
            age: 24,
        },
        {
            id: 3,
            name: 'Lebron',
            age: 30,
        },
    ],
}

const getters = {
    bigSum: (state) => state.sum * 10,
}

// 創建 store
// 跟 Vue 一樣，需要 new 一個實例出來
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
