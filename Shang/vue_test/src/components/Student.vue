<template lang="">
    <div>
        <!-- <h2 @click="showName">學生名稱：{{ name }}</h2> -->
        <!-- <h2>學生性別：{{ sex }}</h2> -->
        <h2>學生年齡：{{ studentAge }}</h2>
        <button @click="updateAge">Click</button>
    </div>
</template>
<script>
// 引入混合
import { mixin1, mixin2 } from '../mixin'
export default {
    name: 'Student',
    // props 的值會存放在該 VueComponent 實例物件的 this 物件中
    // 接收到的 prop 是不能改的
    props: {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            // 預設值
            default: 99,
        },
    },
    data() {
        return {
            studentName: '',
            studentAge: this.age,
        }
    },
    // 如果該組件裡已經有該 data，mixin 裡的會被蓋掉
    mixins: [mixin1, mixin2],
    methods: {
        updateAge() {
            this.studentAge++
        },
    },
}
</script>
<style lang=""></style>
