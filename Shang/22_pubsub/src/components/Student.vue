<template lang="">
  <div class="student">
    <h2>學生名稱：{{ name }}</h2>
    <h2>學生年齡：{{ age }}</h2>
    <button @click="sendStudentName">把學生名給 School 組件</button>
  </div>
</template>
<script>
import pubsub from "pubsub-js";

export default {
  name: "Student",
  data() {
    return {
      name: "小王",
      age: 23,
    };
  },
  methods: {
    sendStudentName() {
      pubsub.publish("hello", 123);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.student {
  background-color: rgb(185, 185, 185);
  padding: 5px;
}
</style>
