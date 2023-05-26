<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName">
      <input type="text" placeholder="Last Name" @input="setLastName">
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// const user = reactive({
//   name: 'Sam',
//   age: 20
// })

// const userName = user.name;
// const userAge = user.age;

const firstName = ref('');
const lastName = ref('');

// const setNewData = () => {
//   user.age = 102;
// }

const userName = computed(() => {
  return firstName.value + ' ' + lastName.value;
})

const setFirstName = (e) => {
  firstName.value = e.target.value;
}

const setLastName = (e) => {
  lastName.value = e.target.value;
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>