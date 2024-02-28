<template lang="">
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "AppFooter",
  props: ["todoList"],

  data() {
    return {};
  },
  methods: {
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked);
    // },
    clearAll() {
      this.$emit("clearAllTodoEmit");
    },
  },
  computed: {
    total() {
      return this.todoList.length;
    },
    doneTotal() {
      // 兩個參數分別是上一次和現在的值
      console.log(1);
      return this.todoList.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    isAll: {
      get() {
        // 一個計算屬性，可以允許用其他計算屬性再做計算
        return this.total === this.doneTotal && this.total > 0;
      },
      set(value) {
        this.$emit("checkAllTodoEmit", value);
      },
    },
  },
};
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
