<template lang="">
    <div>
        <h1>人員列表</h1>
        <h3 style="color: red">Person 組件總合：{{ sum }}</h3>
        <input type="text" placeholder="請輸入名字" v-model="name" />
        <button @click="add">添加</button>
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
            this.$store.commit('ADD_PERSON', personObj)
        },
    },
    computed: {
        personList() {
            return this.$store.state.personList
        },
        sum() {
            return this.$store.state.sum
        },
    },
}
</script>
<style lang=""></style>
