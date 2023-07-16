<template>
  <div id="app">
    <hello-world #default="{ user, favorites }">
      <p>hello {{ user.name }}</p>
      <p>My favorite food is {{ favorites[0] }}</p>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
