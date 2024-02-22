<template lang="">
    <div>
        <h1>{{ school }}</h1>
        <h3>{{ subject }}</h3>
        <h3 style="color: red">下方組件的總人數：{{ personList.length }}</h3>
        <hr />
        <div>目前求和為：{{ sum }}</div>
        <div>目前求和10倍為：{{ bigSum }}</div>
        <select v-model.number="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <hr />
        <button @click="incrementOdd(num)">如果總和為奇數再加</button>
        <button @click="incrementWait(num)">等一等再加</button>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            num: 1,
        }
    },
    methods: {
        ...mapMutations('countOptions', {
            increment: 'INCREASE',
            decrement: 'DECREASE',
        }),

        ...mapActions('countOptions', {
            incrementOdd: 'increaseOdd',
            incrementWait: 'increaseWait',
        }),
    },
    computed: {
        // state 裡第一層有的，才可以在這邊取得
        ...mapState('countOptions', ['school', 'subject', 'sum']),
        ...mapState('employeeOptions', ['personList']),
        ...mapGetters('countOptions', ['bigSum']),
    },
    mounted() {
        console.log(this.$store)
    },
}
</script>
<style>
button {
    margin-right: 10px;
}
</style>
