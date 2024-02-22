import axios from 'axios'

// 人員管理相關配置
export default {
    namespaced: true,
    actions: {
        addPersonHuang(context, value) {
            if (value.name.indexOf('黃') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必須姓黃')
            }
        },
        addPersonServer(context) {
            axios.get('https://official-joke-api.appspot.com/jokes/random').then((res) => {
                console.log(res)
                context.commit('ADD_PERSON', {
                    id: res.data.id,
                    name: res.data.punchline,
                    age: res.data.id,
                })
            })
        },
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.personList.unshift(personObj)
        },
    },
    state: {
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
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        },
    },
}
