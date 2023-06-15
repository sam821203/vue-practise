const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [],
      inputTask: '',
      visibilityStatus: true,
    }
  },
  computed: {
    changeButtonTxt() {
      return this.visibilityStatus ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
    },
    changeVisibilityStatus() {
      this.visibilityStatus = !this.visibilityStatus;
    },
  }
}).mount('#assignment');