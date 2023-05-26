<template>
  <div>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3 v-if="goalIsVisible">{{ goal }}</h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggleGoal">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    
    <!-- Task 4: Also solve the assignment with the Options API -->
  </div>
</template>

<!-- composition API ========================= -->
<!-- <script setup>
import { reactive } from 'vue';
// => Separate refs
// const courseGoal = ref('Across the stress')
// let goalIsVisible = ref(false)

// => Ref Object
// const courseData = ref({
//   goal: 'Across the stress',
//   goalIsVisible: false,
// })

// => Reactive Object
const courseData = reactive({
  goal: 'Across the stress',
  goalIsVisible: false,
})

const toggleGoal = () => {
  // goalIsVisible.value = !goalIsVisible.value;
  courseData.goalIsVisible = !courseData.goalIsVisible
}
</script> -->

<!-- Options API ========================= -->
<script>
export default {
  data() {
    return {
      goal: 'Across the stress',
      goalIsVisible: false,
    }
  },
  methods: {
    toggleGoal() {
      this.goalIsVisible = !this.goalIsVisible
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>