<!-- ActiveUser should output a username (h2) and age (h3) -->
<template>
  <li class="user">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </li>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style></style>
