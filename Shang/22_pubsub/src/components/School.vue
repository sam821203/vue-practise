<template lang="">
  <div class="school">
    <h2>學校名稱：{{ name }}</h2>
    <h2>學校地址：{{ address }}</h2>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  props: ["schoolNameEmit"],
  data() {
    return {
      name: "Cheers",
      address: "台中市",
      pubId: "",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log(this);
      console.log("發佈了 hello 消息，並執行回呼函式", data);
    },
  },
  mounted() {
    // 回呼函式能謝兩個參數，第一個 msgName 是消息名，第二個 data 是數據
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>
<style scoped>
.school {
  background-color: rgb(112, 112, 112);
  padding: 5px;
}
</style>
