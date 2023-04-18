const { createApp } = Vue;

createApp({
  data() {
    // 永遠都只會回傳 object
    return {
      courseGoalA: 'Finish',
      courseGoalB: '<div style="color: tomato">Master</div>',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
}).mount('#user-goal');