<template>
  <section>
    <header>
      <h1>Users</h1>
    </header>
    <ul>
      <active-user
        v-for="user in users"
        :key="user.id"
        :user-name="user.name"
        :user-age="user.age"
      ></active-user>
    </ul>
    <user-data @add-user="addUser"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "1",
          name: "Max",
          age: 30,
        },
        {
          id: "2",
          name: "Anna",
          age: 26,
        },
        {
          id: "3",
          name: "Chris",
          age: 54,
        },
        {
          id: "4",
          name: "Manu",
          age: 27,
        },
      ],
    };
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: +age, // 將字串轉為數字
      };
      this.users.push(newUser);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header > h1 {
  color: tomato;
}
</style>
