<template lang="">
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 直接綁定 v-model 也可以實現 handleCheck 的功能，但不建議，因為會直接去修改 props 值 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDeleteTodo(todo.id)">
      删除
    </button>
  </li>
</template>
<script>
import pubsub from "pubsub-js";

export default {
  name: "Item",
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    handleCheck(id) {
      console.log(2);
      this.$bus.$emit("checkTodo", id);
    },
    handleDeleteTodo(id) {
      if (confirm("確定要刪除嗎？")) {
        // this.$bus.$emit("deleteTodo", id);
        pubsub.publish("deleteTodo", id);
      }
    },
  },
};
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
