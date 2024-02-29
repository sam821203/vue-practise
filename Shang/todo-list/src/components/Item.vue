<template lang="">
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <!-- 直接綁定 v-model 也可以實現 handleCheck 的功能，但不建議，因為會直接去修改 props 值 -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input
                v-show="todo.isEdit"
                type="text"
                :value="todo.title"
                @blur="handleBlur(todo, $event)"
                ref="inputTitle"
            />
        </label>
        <button class="btn btn-danger" @click="handleDeleteTodo(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">編輯</button>
    </li>
</template>
<script>
import pubsub from 'pubsub-js'

export default {
    name: 'Item',
    props: ['todo'],
    data() {
        return {}
    },
    methods: {
        handleCheck(id) {
            console.log(2)
            this.$bus.$emit('checkTodo', id)
        },
        handleDeleteTodo(id) {
            if (confirm('確定要刪除嗎？')) {
                // this.$bus.$emit("deleteTodo", id);
                pubsub.publish('deleteTodo', id)
            }
        },
        handleEdit(todo) {
            // 直接這樣添加屬性到物件上是不會有 get 和 set 的
            // todo.isEdit = true

            // 正確的添加響應式屬性的方法
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo, 'isEdit', true)
            }

            this.$nextTick(() => {
                this.$refs.inputTitle.focus()
            })
        },
        // 失去焦點時，執行修改邏輯
        handleBlur(todo, event) {
            todo.isEdit = false
            if (!event.target.value.trim()) return alert('輸入不得為空')
            this.$bus.$emit('updateTodo', todo.id, event.target.value)
        },
    },
}
</script>
<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li:hover {
    background-color: #eee;
}

li:hover button {
    display: block;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>
