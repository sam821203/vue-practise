<template lang="">
    <div>
        <!-- template 模板裡，可以看到 vc 身上的東西，所以不需要加 this 了 -->
        <h1>{{ school }}</h1>
        <h3>{{ subject }}</h3>
        <hr />
        <div>目前求和為：{{ sum }}</div>
        <div>目前求和10倍為：{{ bigSum }}</div>
        <select v-model.number="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <!-- 如果用了 mapMutations，在模板裡就需要把參數帶上去，否則會帶入預設的 event 參數 -->
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
        // 如果覺得該方法裡沒有什麼業務邏輯，可以直接掉 mutations，省略 actions 的步驟
        // increment() {
        //     this.$store.commit('INCREASE', this.num)
        // },
        // decrement() {
        //     this.$store.commit('DECREASE', this.num)
        // },
        // 物件寫法：借助 mapMutations 生成對應的方法，方法中會調用 commit 去聯繫 mutations
        ...mapMutations({
            increment: 'INCREASE',
            decrement: 'DECREASE',
        }),
        // 陣列寫法
        // ...mapMutations(['increment', 'decrement']),
        // ************************************************************
        // incrementOdd() {
        //     this.$store.dispatch('increaseOdd', this.num)
        // },
        // incrementWait() {
        //     this.$store.dispatch('increaseWait', this.num)
        // },
        // 物件寫法
        ...mapActions({
            incrementOdd: 'increaseOdd',
            incrementWait: 'increaseWait',
        }),
        // 陣列寫法
        // ...mapActions(['incrementOdd', 'incrementWait']),
    },
    computed: {
        // 一個個的寫法
        // sum() {
        //     return this.$store.state.sum
        // },
        // school() {
        //     return this.$store.state.school
        // },
        // subject() {
        //     return this.$store.state.subject
        // },
        // bigSum() {
        //     return this.$store.getters.bigSum
        // },

        /**
         * 物件寫法：借助 mapState 生成計算屬性，從 state 中讀取數據
         * 如果用 mapState 來生成，在開發者工具裡，就會被歸類在 vuex bindings 裡
         */
        // ...mapState({
        //     sum: 'sum',
        //     school: 'school',
        //     subject: 'subject',
        // }),

        // 陣列寫法：計算屬性名稱跟 state 的屬性名稱必須一樣
        ...mapState(['sum', 'school', 'subject']),
        // 陣列寫法：計算屬性名稱跟 getters 的屬性名稱必須一樣
        ...mapGetters(['bigSum']),
        bigSum() {
            return this.$store.getters.bigSum
        },
    },
    mounted() {},
}
</script>
<style>
button {
    margin-right: 10px;
}
</style>
