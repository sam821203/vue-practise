<template>
  <div class="about">
    <h1>{{ $route.params.member }}</h1>
    <p>{{ store.counter }}</p>
    <p>{{ store.doubleCount }}</p>
    <button type="" @click.prevent="store.increment">Press me!</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    // 等同於 this.$route
    const route = useRoute();

    // 等同於 this.$router
    const router = useRouter();

    const store = useCounterStore();

    router.push({
      hash: "#test",
    });

    return {
      store,
    };
  },
};
</script>
