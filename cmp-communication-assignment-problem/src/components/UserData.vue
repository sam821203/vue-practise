<!-- UserData should output two input fields => for name and age -->
<!-- Optional: Add styling of your choice -->

<!-- Task 3: Add user data and ensure it contains a name and age -->
<!-- User data should be output in ActiveUser -->
<!-- It should be updated via the UserData component -->

<template>
  <form @submit.prevent="submitUserData">
    <div>
      <label for="">User Name</label>
      <input type="text" placeholder="Name" v-model="enteredName" />
    </div>
    <div>
      <label for="">User Age</label>
      <input type="text" placeholder="Age" v-model="enteredAge" />
    </div>
    <div>
      <button @click="addUser">add user</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitUserData() {
      // 這裡的第一個參數傳的是某個 event
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>
