<template lang="">
    <div>
        <h1>{{ school }}</h1>
        <h3>{{ subject }}</h3>
        <!-- <h3 style="color: red">下方組件的總人數：{{ personList.length }}</h3> -->
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
        ...mapMutations({
            increment: 'INCREASE',
            decrement: 'DECREASE',
        }),

        ...mapActions({
            incrementOdd: 'increaseOdd',
            incrementWait: 'increaseWait',
        }),
    },
    computed: {
        ...mapState(['sum', 'school', 'subject', 'personList']),
        ...mapGetters(['bigSum']),
    },
    mounted() {},
}
</script>
<style>
button {
    margin-right: 10px;
}
</style>
