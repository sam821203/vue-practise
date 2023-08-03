<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click me</button>

    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>
      {{ reversePhrase }}
    </p>

    <app-alert :user="user" />

    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";

import AppAlert from "@/components/Alert.vue";

import { useNumber } from "@/hooks/number";
import { usePhrase } from "@/hooks/phrase";

const btn = ref(null);

onBeforeMount(() => {
  console.log("onBeforeMount");
});

onMounted(() => {
  console.log("onMounted");

  btn.value.addEventListener("click", () => {
    console.log("button is clicked");
  });
});

const user = reactive({
  name: "Sam",
  age: 20,
});

setTimeout(() => {
  user.name = "Tina";
}, 2000);

const { num, increment, double } = useNumber();
const { phrase, reversePhrase, num: phraseNum } = usePhrase();

const { name } = toRefs(user);
</script>
