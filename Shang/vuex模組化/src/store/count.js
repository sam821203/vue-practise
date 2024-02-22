// 求和功能相關配置
export default {
    // 如果希望在 mapState 裡能調用分類型，需要將 namespaced 設定為 true
    namespaced: true,
    actions: {
        increaseOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('INCREASE', value)
            }
        },
        increaseWait(context, value) {
            setTimeout(() => {
                context.commit('INCREASE', value)
            }, 500)
        },
    },
    mutations: {
        INCREASE(state, value) {
            state.sum += value
        },
        DECREASE(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 1,
        school: 'Data Cheers',
        subject: 'Data visualization',
    },
    getters: {
        bigSum: (state) => state.sum * 10,
    },
}
