<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input v-model="enteredEmail" />
    </div>
    <div>
      <button @click="addContact">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
