<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You are over 25</p>
</template>

<script >
export default {
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: 'Hello world'
    }
  }
}
</script>

<style scoped>
p {
  color: red;
}
</style>