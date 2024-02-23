import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
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
}

const mutations = {
    INCREASE(state, value) {
        state.sum += value
    },
    DECREASE(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, personObj) {
        state.personList.unshift(personObj)
    },
}

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

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
