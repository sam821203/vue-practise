<template lang="">
    <div class="student">
        <h2>學生年齡：{{ age }}</h2>
        <h5>當前數字為：{{ count }}</h5>
        <button @click="add">+</button>
        <hr />
        <input type="text" v-fbind:value="name" />
        <button @click="sendStudentName">把學生名給 App</button>
        <button @click="unbindSendStudentName">解除綁定</button>
        <button @click="death">銷毀當前 VueComponent 組件的實例對象</button>
    </div>
</template>
<script>
export default {
    // 內件事件是給 html 標籤用的，而自定義事件是給組件用的
    name: 'Student',
    data() {
        return {
            name: '小王',
            age: 23,
            count: 0,
        }
    },
    methods: {
        sendStudentName() {
            // 觸發 Student 處件實例身上的 studentNameEmit 事件
            this.$emit('studentNameEmit', { name: this.name, sex: '男', age: this.age })
            // this.$emit('demo')
        },
        unbindSendStudentName() {
            // $off 用在解綁事件，但只適用於解綁一個自定義事件
            this.$off('studentNameEmit')

            // 解綁多個自定義事件
            // this.$off(['studentNameEmit', 'demo'])

            // 解綁所有自定義事件
            // this.$off()
        },
        death() {
            // 銷毀當前 VueComponent 組件的實例物件
            // 銷毀後，所有 student 實例自定義事件全都會無效
            this.$destroy()
        },
        add() {
            console.log('add')
            this.count++
        },
    },
}
</script>
<style scoped>
.student {
    background-color: rgb(185, 185, 185);
    padding: 5px;
}
</style>
