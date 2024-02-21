<template lang="">
    <div class="app">
        <!-- 組件自定義事件適用於 子組件傳給父組件 -->
        <h1>{{ msg }}，學生姓名 {{ studentName }}</h1>
        <!-- 
            兩者的差異：
                1.兩者都需要在 methods 定義回調函數
                2.自定義事件的情況下，App 組件並沒有把 getStudentName 交給 Student 組件
        -->
        <!-- 
            1.第一種作法：通過父組件給子組件傳遞函數類型的 props 實現：子給父傳遞數據 
        -->
        <School :schoolNameEmit="getSchoolName" />
        <hr />
        <!-- 
            1.第二種作法：給 Student VueComponent 實例物件上綁定事件
            2.通過父組件給子組件綁定一個自定義事件實現：子給父傳遞數據
            3.自定義事件會持續存在，不會被清除，所以可以再不需要時解綁
        -->
        <!-- <Student @studentNameEmit="getStudentName" /> -->

        <!-- 
            1.第三種作法：通過 $on 讓父組件給子組件綁定一個自定義事件實現：子給父傳遞數據，使用 ref
            2.當需要等到幾秒後再執行時，可以使用此方法
            3.一般來說，在組件上使用原生的事件時，會被當成自定義的事件
            4.但如果加了 .native，該事件才會被當作原生事件
        -->
        <Student ref="student" @click.native="show" />
    </div>
</template>
<script>
import Student from './components/Student'
import School from './components/School'

export default {
    name: 'App',
    components: {
        Student,
        School,
    },
    data() {
        return {
            msg: 'Hello',
            studentName: '',
        }
    },
    // methods 裡的 this 會是指向 app 實例物件
    methods: {
        getSchoolName(name) {
            console.log('App 收到學校名稱：', name)
        },
        getStudentName(params) {
            console.log('App 收到學生名稱：', params.name)
            console.log('App 收到學生年齡：', params.age)
            this.studentName = params.name
        },
        remove1() {
            console.log('demo 事件被觸發')
        },
        show() {
            console.log('click 事件被觸發')
        },
    },
    mounted() {
        setTimeout(
            () =>
                // $on 代表者當什麼什麼時候...
                // $once 代表只會觸發一次
                // 這裡的 this 指向會根據誰觸發了事件而決定
                this.$refs.student.$once('studentNameEmit', this.getStudentName),
            2000
        )
    },
}
</script>
<style scoped>
.app {
    color: white;
    background-color: black;
}
</style>
