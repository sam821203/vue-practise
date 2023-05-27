<template>
  <section class="container">
    <!-- <user-data class="test" :first-name="firstName" :last-name="lastName" :user-age="userAge"></user-data> -->
    <user-data :first-name="firstName" :last-name="lastName" ></user-data>
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    const userAge = ref(20);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    
    // 第一個參數隨意取名，第二個是想要提供的值
    provide('userAge', userAge);

    const setNewData = () => {
      userAge.value = 40;
    }
    
    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    })
    
    watch([userAge, userName], (newVal, oldVal) => {
      console.log('newAge: ' + newVal[0]);
      console.log('oldAge: ' + oldVal[0]);
      console.log('newName: ' + newVal[1]);
      console.log('oldName: ' + oldVal[1]);
    })
    
    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    }

    return {
      userAge,
      firstName,
      lastName,
      userName,
      lastNameInput,
      setLastName,
      setNewData
    }
  }
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