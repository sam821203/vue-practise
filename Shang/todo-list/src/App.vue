<template lang="">
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <AppHeader @addTodoEmit="addTodo" />
        <List :todoList="todoList" />
        <AppFooter
          :todoList="todoList"
          @checkAllTodoEmit="checkAllTodo"
          @clearAllTodoEmit="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>
<script>
// 引入組件
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import List from "./components/List";
import pubsub from "pubsub-js";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    List,
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
      // [
      //   {
      //     id: "001",
      //     title: "煮飯",
      //     done: true,
      //   },
      //   {
      //     id: "002",
      //     title: "跑步",
      //     done: false,
      //   },
      //   {
      //     id: "003",
      //     title: "射箭",
      //     done: true,
      //   },
      // ],
      pubId: "",
    };
  },
  // 數據在哪，操作數據的方法就應該放哪
  methods: {
    addTodo(x) {
      console.log("App 組件收到數據");
      this.todoList.unshift(x);
    },
    checkTodo(_, id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    checkAllTodo(done) {
      this.todoList.forEach((todo) => {
        todo.done = done;
      });
    },
    clearAllTodo() {
      this.todoList = this.todoList.filter((todo) => !todo.done);
      console.log(this.todoList);
    },
  },
  watch: {
    todoList: {
      handler(newVal) {
        localStorage.setItem("todoList", JSON.stringify(newVal));
      },
      // 開啟深度監聽來監視勾選項目
      deep: true,
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    // this.$bus.$on("deleteTodo", this.deleteTodo);
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    // this.$bus.$off("checkTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>
<!-- App 裡一般不寫 scoped -->
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
