<template lang="">
    <div>
        <h1>人員列表</h1>
        <h3 style="color: red">Count 組件總合：{{ sum }}</h3>
        <h3>列表中第一個人的名字是：{{ firstPersonName }}</h3>
        <input type="text" placeholder="請輸入名字" v-model="name" />
        <button @click="add">添加</button>
        <button @click="addHuang">添加姓黃的人</button>
        <button @click="addPersonServer">添加新的人</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>
    </div>
</template>
<script>
// 隨機生成 id
import { nanoid } from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: '',
        }
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name }
            // employeeOptions/ADD_PERSON 的寫法幫助取得分類裡的 mutations
            this.$store.commit('employeeOptions/ADD_PERSON', personObj)
        },
        addHuang() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.dispatch('employeeOptions/addPersonHuang', personObj)
        },
        addPersonServer() {
            this.$store.dispatch('employeeOptions/addPersonServer')
        },
    },
    computed: {
        personList() {
            return this.$store.state.employeeOptions.personList
        },
        sum() {
            return this.$store.state.countOptions.sum
        },
        firstPersonName() {
            return this.$store.getters['employeeOptions/firstPersonName']
        },
    },
}
</script>
<style lang=""></style>
