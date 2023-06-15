const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enterGoalValues: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterGoalValues);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
