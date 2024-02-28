<template lang="">
  <ul class="todo-main">
    <Item v-for="todoObj in todoList" :todo="todoObj" :key="todoObj.id" />
  </ul>
</template>
<script>
import Item from "./Item";

export default {
  name: "List",
  props: ["todoList"],
  data() {
    return {};
  },
  components: {
    Item,
  },
  methods: {},
};
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
