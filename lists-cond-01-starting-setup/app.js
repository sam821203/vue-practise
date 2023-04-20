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
    }
  }
});

app.mount('#user-goals');
