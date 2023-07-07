<template>
  <div>
    <app-form>
      <template v-slot:help>
        <p>{{ help }}</p>
      </template>
      <template v-slot:fields>
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
      </template>
      <template v-slot:buttons>Submit</template>
      <p>Dummy text</p>
    </app-form>
    <app-form>
      <template v-slot:help>
        <p>Contact</p>
      </template>
      <template v-slot:fields>
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
      </template>
      <template v-slot:buttons>Submit</template>
      <p>Dummy text</p>
    </app-form>
  </div>
</template>

<script >
import AppForm from "./components/AppForm.vue"

export default {
  name: "App",
  components: {
    AppForm,
  },
  data() {
    return {
      help: 'This is some help text!'
    }
  }
}
</script>